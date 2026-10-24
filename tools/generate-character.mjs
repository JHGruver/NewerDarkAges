#!/usr/bin/env node
// Generates ONE character (portrait + background) with a SELF-VETTING loop, and wires it into the site locally (nothing is committed).
//   node tools/generate-character.mjs <id>                  generate, vet, retry (up to 3 portrait tries, 2 background tries), keep the best
//   node tools/generate-character.mjs <id> --vet-only       just vet the art already on disk
//   flags: --char-only --bg-only --force --quality high --tries N --no-refs --suffix v2 --dry
//   node tools/generate-character.mjs --list [people]       characters without art
// Prompts come from CAST.json (rebuild with node tools/build-cast.cjs). New portraits get the approved characters as STYLE REFERENCES.
// Every attempt is scored by a vision model against the Samurai Jack check + color rules + the character sheet, and by pixel checks
// (real alpha, nothing cropped, palette present, no stray saturated colors). The report is saved next to the art (*.vet.json).
import { readFileSync, writeFileSync, existsSync, mkdirSync, copyFileSync, rmSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
if (existsSync(join(root, ".env"))) for (const line of readFileSync(join(root, ".env"), "utf8").split("\n")) { const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*?)\s*$/); if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, ""); }
const KEY = process.env.OPENAI_API_KEY, M_BG = process.env.OPENAI_IMAGE_MODEL || "gpt-image-2", M_CHAR = process.env.OPENAI_ALPHA_MODEL || "gpt-image-1.5", M_VET = process.env.OPENAI_VET_MODEL || "gpt-4.1";
const args = process.argv.slice(2), has = (f) => args.includes(f), val = (f) => (args.includes(f) ? args[args.indexOf(f) + 1] : null);
const PY = join(root, "tools/.venv/bin/python"), VET_PX = join(root, "tools/vet-pixels.py"), TMP = join(root, "tools/.cache");
const cast = JSON.parse(readFileSync(join(root, "CAST.json"), "utf8")), AD = cast.artDirection, rows = cast.characters;
const app = readFileSync(join(root, "app.js"), "utf8");
const done = new Set([...app.matchAll(/^  (\w+): \{ src: "art\/v2\//gm)].map((m) => m[1]));

if (has("--list")) { const p = args.find((a) => rows.some((r) => r.peopleId === a)); rows.filter((r) => !done.has(r.id) && (!p || r.peopleId === p)).forEach((r) => console.log(`${r.id.padEnd(24)} ${r.peopleId.padEnd(9)} ${r.cls.padEnd(18)} ${r.name}  [${r.role}]`)); process.exit(0); }
const id = args.find((a) => !a.startsWith("--") && !["--quality", "--tries"].includes(args[args.indexOf(a) - 1]));
const e = rows.find((r) => r.id === id);
if (!e) { console.error(id ? `Unknown character id "${id}". Try --list.` : "Give a character id (or --list)."); process.exit(1); }
const quality = val("--quality") || "medium", tries = +(val("--tries") || 3);
const suffix = val("--suffix") ? "-" + val("--suffix") : "";   // --suffix v2 writes a comparison copy next to the approved art and registers nothing
const base = `art/v2/${e.peopleId}-${e.id}${suffix}`, charPath = join(root, base + ".png"), bgPath = join(root, base + "-bg.jpg");
console.log(`${e.name} (${e.people} › ${e.cls}, ${e.role})  ->  ${base}.png / -bg.jpg\nmodels: portrait ${M_CHAR}, background ${M_BG}, vision ${M_VET}; quality ${quality}`);
if (has("--dry")) { console.log("\nCHARACTER PROMPT\n" + e.charPrompt + "\n\nBACKGROUND PROMPT\n" + e.bgPrompt); process.exit(0); }
if (!KEY) { console.error("No OPENAI_API_KEY (see .env)."); process.exit(1); }
if (!existsSync(PY)) { console.error("Missing tools/.venv. Run: python3 -m venv tools/.venv && tools/.venv/bin/pip install pillow numpy scipy openpyxl"); process.exit(1); }
mkdirSync(TMP, { recursive: true });
const b64 = (p) => readFileSync(p).toString("base64");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------------------------------------------------------------- API helpers */
async function post(path, init) {
  for (let t = 1; t <= 3; t++) {
    const r = await fetch("https://api.openai.com/v1" + path, { method: "POST", ...init, headers: { Authorization: `Bearer ${KEY}`, ...(init.headers || {}) } });
    if (r.ok) return r.json();
    const txt = await r.text(); console.error(`    attempt ${t} failed (${r.status}): ${txt.slice(0, 220)}`);
    if ([400, 401, 403].includes(r.status)) throw Object.assign(new Error(txt), { status: r.status }); await sleep(4000 * t);
  }
  throw new Error("request failed");
}
const REF_NOTE = "The attached images are STYLE REFERENCES ONLY: match their rendering exactly (flat geometric cel shapes, heavy solid black shapes, bold even contour lines, stark white highlights, two tonal planes per material, strong readable silhouette, simple expressive face, consistent visual weight). Do NOT copy their characters, poses, costumes or colors. Create the NEW character described below, in that same style.\n\n";
async function render(kind, prompt) {
  const transparent = kind === "char", model = transparent ? M_CHAR : M_BG, size = transparent ? "1024x1536" : "1536x1024";
  const refs = has("--no-refs") ? [] : (transparent ? AD.references : AD.backgroundReferences).filter((p) => existsSync(join(root, p)));
  const common = { model, size, quality, n: "1", output_format: transparent ? "png" : "jpeg", ...(transparent ? { background: "transparent" } : {}) };
  if (refs.length) {
    try {
      const fd = new FormData(); Object.entries({ ...common, prompt: REF_NOTE + prompt }).forEach(([k, v]) => fd.append(k, v));
      refs.forEach((p) => fd.append("image[]", new Blob([readFileSync(join(root, p))], { type: p.endsWith(".png") ? "image/png" : "image/jpeg" }), p.split("/").pop()));
      return Buffer.from((await post("/images/edits", { body: fd })).data[0].b64_json, "base64");
    } catch (err) { console.error("    reference-based generation unavailable (" + (err.status || "") + "), falling back to prompt only"); }
  }
  return Buffer.from((await post("/images/generations", { headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...common, prompt }) })).data[0].b64_json, "base64");
}

/* ---------------------------------------------------------------- vetting */
const jsonFrom = (s) => { try { return JSON.parse(s); } catch { const m = s.match(/\{[\s\S]*\}/); return m ? JSON.parse(m[0]) : null; } };
async function vision(content) {
  const r = await post("/chat/completions", { headers: { "Content-Type": "application/json" }, body: JSON.stringify({ model: M_VET, temperature: 0.1, response_format: { type: "json_object" }, messages: [{ role: "system", content: "You are a strict art director and QA reviewer for a 2D animated dark-fantasy series. You judge images honestly and specifically. You never flatter. Reply with JSON only." }, { role: "user", content }] }) });
  return jsonFrom(r.choices[0].message.content);
}
const img = (p, mime = "image/png") => ({ type: "image_url", image_url: { url: `data:${mime};base64,${b64(p)}`, detail: "high" } });
function pixels(path) {
  const aids = join(TMP, "aids");
  return JSON.parse(execFileSync(PY, [VET_PX, path, e.main, e.secondary, e.pop, "--aids", aids]).toString());
}
function refAids() {
  const out = [];
  for (const [i, p] of AD.references.entries()) { const d = join(TMP, "ref" + i); if (existsSync(join(root, p))) { if (!existsSync(join(d, "grey.png"))) execFileSync(PY, [VET_PX, join(root, p), "#000000", "#000000", "#000000", "--aids", d]); out.push(join(d, "grey.png")); } }
  return out;
}
async function vetPortrait(path) {
  const px = pixels(path), aids = join(TMP, "aids"), refs = refAids();
  const hard = [];
  if (px.transparent_share < 0.15) hard.push("no real transparency (the background is baked in)");
  if (px.touches_edge) hard.push("the figure touches or is cropped by the canvas edge");
  if (px.silhouette_pieces > 2) hard.push(`silhouette is fragmented into ${px.silhouette_pieces} separate pieces`);
  if (px.hole_share > 0.22) hard.push(`${Math.round(px.hole_share * 100)}% of the figure is missing (transparent holes inside the body)`);
  if (px.coverage < 0.25) hard.push(`the figure covers only ${Math.round(px.coverage * 100)}% of the canvas (too small or mostly missing)`);
  if ((px.foreign_saturated_share || 0) > 0.15) hard.push(`${Math.round(px.foreign_saturated_share * 100)}% of the figure uses saturated colors outside the assigned palette`);
  const rubric = `Review image 1 (the NEW portrait on grey) for the character below. Image 2 is its pure-black silhouette (check 1). Image 3 is an 80px thumbnail enlarged (check 3). Images 4-6 are APPROVED reference characters: the new portrait must match their rendering style and quality level, not their designs.

CHARACTER SHEET: ${e.name}: ${e.identity} (${e.ethnicity}), apparent age ${e.age}, ${e.gender}. Body: ${e.physique}, ${e.size}, ${e.mobility}. Pose: ${e.pose}. Expression: ${e.expression}. Wardrobe and gear: ${e.wardrobe}. Palette: main ${e.main}, secondary ${e.secondary}, pop ${e.pop} (plus black, white, grey; simplified natural base tones ok).
REQUIRED STYLE: ${AD.required.join("; ")}.
FORBIDDEN: ${AD.forbidden.join("; ")}.
SAMURAI JACK CHECK (answer each honestly): ${AD.jackCheck.map((q, i) => `${i + 1}. ${q}`).join(" ")}

Return JSON: {"jack":[{"q":1,"pass":true|false,"note":"..."},...5 items],"forbidden_found":["..."],"palette":{"ok":true|false,"note":"which assigned colors are visible and where, and any stray saturated colors"},"complete_figure":true|false (false if any body part is missing, faded, fragmented or detached; look at the silhouette image for holes),"matches_sheet":true|false,"sheet_issues":["wrong or missing details"],"style_match":0-10,"design_quality":0-10,"silhouette":0-10,"overall":0-10,"fixes":["specific changes that would fix the problems, phrased as drawing instructions"],"summary":"one honest sentence"}.
Be strict: style_match 8+ only if it genuinely looks like it belongs in the same animated series as the references. Generic, blobby, muddy, low-contrast or dull designs score low. A design that is flat but uninteresting fails check 5.`;
  const v = await vision([{ type: "text", text: rubric }, img(join(aids, "grey.png")), img(join(aids, "sil.png")), img(join(aids, "thumb.png")), ...refs.map((p) => img(p))]);
  const jackFail = (v.jack || []).filter((j) => !j.pass).map((j) => `Samurai Jack ${j.q}: ${j.note}`);
  const passed = !hard.length && !jackFail.length && v.complete_figure !== false && v.matches_sheet !== false && v.palette?.ok !== false && v.style_match >= 7 && v.overall >= 7;
  return { kind: "portrait", passed, overall: v.overall, style_match: v.style_match, design_quality: v.design_quality, silhouette: v.silhouette, hard, jackFail, forbidden: v.forbidden_found || [], sheet_issues: v.sheet_issues || [], palette: v.palette, fixes: v.fixes || [], summary: v.summary, pixels: px, jack: v.jack };
}
async function vetBackground(path) {
  // objective texture check: approved stippled-ink backgrounds have a fine-grain energy of 16 to 22; smooth photoreal or 3D renders sit around 12 or lower
  const meta = JSON.parse(execFileSync(PY, ["-c", `from PIL import Image;import numpy as np,json;from scipy import ndimage as ndi
i=Image.open(${JSON.stringify(path)});g=np.asarray(i.convert('L').resize((1536,864)),float);hp=g-ndi.gaussian_filter(g,1.5)
print(json.dumps({"w":i.width,"h":i.height,"grain":round(float(hp.std()),2)}))`]).toString());
  const refs = AD.backgroundReferences.map((p) => join(root, p)).filter(existsSync).slice(0, 2);
  const rubric = `Review image 1, a BACKGROUND for the character "${e.name}" (${e.people}). Images 2-3 are APPROVED reference backgrounds: it should look like it belongs in the same set (painted, graphic-novel, inked), not copy their scenes. Judge the overall look; the files may be downsampled.
REQUIRED: a charcoal-and-ink graphic-novel illustration on toned paper (grainy ink texture, bold black ink linework, painted shapes), NOT a photoreal render, NOT a smooth 3D render. The people color ${e.peopleColor} (${e.peopleColorName}) washes about 65% of the image. The three character colors ${e.main}, ${e.secondary}, ${e.pop} appear as clearly visible accents (about 20%): main for the biggest glowing sources and surfaces, secondary for medium panels and lights, pop for small sparks. Scene: ${e.scene}. Props: ${e.bgItems}. Open, lower-contrast empty area in the lower center for a standing character, props pushed to the sides, horizon about one-third height. ABSOLUTELY no people, creatures, figures, silhouettes of beings, text or logos.
Return JSON: {"style_ok":true|false,"style_note":"painted ink illustration vs photoreal/3D","wash_ok":true|false,"wash_note":"","accents_ok":true|false,"accents_note":"","no_figures":true|false,"open_center":true|false,"props_ok":true|false,"style_match":0-10,"overall":0-10,"fixes":["drawing instructions"],"summary":"one honest sentence"}. If image 1 were swapped into the reference set it should not stand out as a different style.`;
  const v = await vision([{ type: "text", text: rubric }, img(path, "image/jpeg"), ...refs.map((p) => img(p, "image/jpeg"))]);
  const grainOk = meta.grain >= 14.5, hard = grainOk ? [] : [`texture too smooth (grain ${meta.grain}; approved backgrounds are 16 to 22): it reads as a photoreal or 3D render`];
  // the grain metric decides the style question objectively (the vision model is unreliable about stipple); it decides wash, figures and the open center
  const passed = grainOk && v.wash_ok !== false && v.no_figures !== false && v.open_center !== false;
  return { kind: "background", passed, overall: v.overall, style_match: v.style_match, summary: v.summary, hard, fixes: v.fixes || [], checks: { style: v.style_note, wash: v.wash_note, accents: v.accents_note, figures: v.no_figures, open_center: v.open_center, props: v.props_ok }, grain: meta.grain, size: { w: meta.w, h: meta.h } };
}
const report = (r) => `${r.passed ? "PASS" : "FAIL"}  overall ${r.overall}/10${r.style_match != null ? `, style ${r.style_match}/10` : ""}${r.design_quality != null ? `, design ${r.design_quality}/10, silhouette ${r.silhouette}/10` : ""}\n      ${r.summary}${r.hard?.length ? "\n      HARD: " + r.hard.join("; ") : ""}${r.jackFail?.length ? "\n      " + r.jackFail.join("\n      ") : ""}${r.sheet_issues?.length ? "\n      SHEET: " + r.sheet_issues.join("; ") : ""}`;

/* ---------------------------------------------------------------- the loop */
async function loop(kind, path, basePrompt, vet, maxTries) {
  let best = null, prompt = basePrompt;
  for (let n = 1; n <= maxTries; n++) {
    const cand = join(TMP, `${e.id}-${kind}-try${n}.${kind === "char" ? "png" : "jpg"}`);
    console.log(`  ${kind === "char" ? "portrait" : "background"}: attempt ${n}/${maxTries} ...`);
    writeFileSync(cand, await render(kind, prompt));
    if (kind === "char") execFileSync("sips", ["-Z", "1100", cand, "--out", cand], { stdio: "ignore" });
    const r = await vet(cand); r.attempt = n; console.log("    " + report(r));
    const score = (r.passed ? 100 : 0) - 40 * ((r.hard || []).length) - 15 * ((r.jackFail || []).length) + (r.overall || 0) + (r.style_match || 0) / 10;   // hard failures can never win on a flattering vision score
    if (!best || score > best.score) best = { score, cand, r };
    if (r.passed) break;
    const fixes = [...(r.fixes || []), ...(r.hard || []).map((h) => "fix: " + h), ...(r.jackFail || []), ...(r.sheet_issues || []).map((s) => "include: " + s)];
    prompt = basePrompt + (kind === "bg" && (r.hard || []).length ? "\nEXTRA STYLE EMPHASIS: draw it like a rough hand-inked, stippled, grainy graphic-novel panel with visible dots, hatching and ink texture on every surface; flat painted shapes with black ink outlines." : "") + `\n\nREVISION NOTES (the previous attempt failed review; correct all of this): ${fixes.slice(0, 8).join(" | ")}`;
  }
  copyFileSync(best.cand, path); best.r.accepted_attempt = best.r.attempt;
  writeFileSync(path.replace(/\.(png|jpg)$/, ".vet.json"), JSON.stringify({ ...best.r, model: kind === "char" ? M_CHAR : M_BG, quality, at: new Date().toISOString() }, null, 1));
  console.log(`  -> kept attempt ${best.r.attempt} (${best.r.passed ? "PASSED" : "did NOT pass; best available"}), saved ${path.replace(root + "/", "")}`);
  return best.r;
}

mkdirSync(join(root, "art/v2"), { recursive: true });
let rc = null, rb = null;
if (has("--vet-only")) {
  if (existsSync(charPath)) { rc = await vetPortrait(charPath); rc.attempt = 1; console.log("  portrait: " + report(rc)); writeFileSync(charPath.replace(".png", ".vet.json"), JSON.stringify({ ...rc, at: new Date().toISOString(), note: "vet-only" }, null, 1)); }
  if (existsSync(bgPath)) { rb = await vetBackground(bgPath); rb.attempt = 1; console.log("  background: " + report(rb)); writeFileSync(bgPath.replace(".jpg", ".vet.json"), JSON.stringify({ ...rb, at: new Date().toISOString(), note: "vet-only" }, null, 1)); }
  execFileSync("node", [join(root, "tools/build-cast.cjs")], { stdio: "ignore" }); process.exit(0);
}
if (!has("--bg-only")) { if (existsSync(charPath) && !has("--force")) console.log("  portrait exists (use --force to regenerate)"); else rc = await loop("char", charPath, e.charPrompt, vetPortrait, tries); }
if (!has("--char-only")) { if (existsSync(bgPath) && !has("--force")) console.log("  background exists (use --force to regenerate)"); else rb = await loop("bg", bgPath, e.bgPrompt, vetBackground, Math.min(tries, 2)); }

/* ---------------------------------------------------------------- register locally */
if (!suffix && existsSync(charPath) && existsSync(bgPath) && !done.has(e.id)) {
  let a = readFileSync(join(root, "app.js"), "utf8");
  a = a.replace("const NODE_ART = {\n", `const NODE_ART = {\n  ${e.id}: { src: "${base}.png", bg: "${base}-bg.jpg", name: "${e.name.replace(/"/g, "")}" },\n`); writeFileSync(join(root, "app.js"), a);
  let d = readFileSync(join(root, "data.js"), "utf8"); d = d.replace(/\((\d+) of 133 done\)/, (_, n) => `(${+n + 1} of 133 done)`); writeFileSync(join(root, "data.js"), d);
  console.log("  registered in app.js and the roadmap count");
}
execFileSync("node", [join(root, "tools/build-cast.cjs")], { stdio: "ignore" });
console.log(`\nReview (not committed): http://localhost:8137/#/characters/${e.peopleId}/${e.cls.toLowerCase().replace(/[^a-z]/g, "")}/${e.id}   (reports: ${base}.vet.json, ${base}-bg.vet.json)`);
