#!/usr/bin/env node
// Generates ONE character (portrait + background) from its prompts in CAST.md and wires it into the site locally.
//   node tools/generate-character.mjs <id>                 e.g. thornbloodcoven
//   node tools/generate-character.mjs <id> --char-only | --bg-only | --force | --quality high | --dry
//   node tools/generate-character.mjs --list [people]      characters that have no art yet
// Output: art/v2/<people>-<id>.png (transparent) and art/v2/<people>-<id>-bg.jpg. Then it registers them in app.js (NODE_ART),
// updates the roadmap count in data.js and rebuilds CAST.md. Nothing is committed: review at http://localhost:8137 first.
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { execFileSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
if (existsSync(join(root, ".env"))) for (const line of readFileSync(join(root, ".env"), "utf8").split("\n")) { const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*?)\s*$/); if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, ""); }
const KEY = process.env.OPENAI_API_KEY, M_BG = process.env.OPENAI_IMAGE_MODEL || "gpt-image-2", M_CHAR = process.env.OPENAI_ALPHA_MODEL || "gpt-image-1.5";
const args = process.argv.slice(2), has = (f) => args.includes(f), val = (f) => (args.includes(f) ? args[args.indexOf(f) + 1] : null);
const PEOPLE = { Human: "human", Vampire: "vampire", "Were-Creature": "were", Ghost: "ghost", Undead: "undead", "Forest Spirit": "forest", Eldritch: "eldritch", Magic: "magic" };

// ---- read the cast bible ----
const cast = readFileSync(join(root, "CAST.md"), "utf8"), app = readFileSync(join(root, "app.js"), "utf8");
const done = new Set([...app.matchAll(/^  (\w+): \{ src: "art\/v2\//gm)].map((m) => m[1]));
const entries = cast.split(/\n(?=### )/).slice(1).map((b) => {
  const h = b.match(/^### (.+?)\s+`(\w+)`/); if (!h) return null;
  const f = (k) => (b.match(new RegExp(`\\| ${k} \\| (.*) \\|`)) || [])[1];
  const prompts = [...b.matchAll(/```text\n([\s\S]*?)\n```/g)].map((m) => m[1]);
  return { name: h[1], id: h[2], people: PEOPLE[f("People").replace(/ \(.*\)$/, "")], cls: f("Class"), role: f("Combat or support"), char: prompts[0], bg: prompts[1] };
}).filter(Boolean);

if (has("--list")) {
  const p = args.find((a) => PEOPLE[a] || Object.values(PEOPLE).includes(a));
  entries.filter((e) => !done.has(e.id) && (!p || e.people === (PEOPLE[p] || p))).forEach((e) => console.log(`${e.id.padEnd(24)} ${e.people.padEnd(9)} ${e.cls.padEnd(18)} ${e.name}  [${e.role}]`));
  process.exit(0);
}
const id = args.find((a) => !a.startsWith("--") && args[args.indexOf(a) - 1] !== "--quality");
const e = entries.find((x) => x.id === id);
if (!e) { console.error(id ? `Unknown character id "${id}". Try --list.` : "Give a character id (or --list)."); process.exit(1); }
const quality = val("--quality") || "medium", base = `art/v2/${e.people}-${e.id}`;
console.log(`${e.name} (${e.people} › ${e.cls}, ${e.role}) -> ${base}.png / ${base}-bg.jpg   models ${M_CHAR} / ${M_BG}, quality ${quality}`);
if (has("--dry")) { console.log("\nCHARACTER PROMPT\n" + e.char + "\n\nBACKGROUND PROMPT\n" + e.bg); process.exit(0); }
if (!KEY) { console.error("No OPENAI_API_KEY (see .env)."); process.exit(1); }

async function gen(model, prompt, size, transparent) {
  const body = { model, prompt, size, quality, n: 1, output_format: transparent ? "png" : "jpeg", ...(transparent ? { background: "transparent" } : {}) };
  for (let t = 1; t <= 3; t++) {
    const r = await fetch("https://api.openai.com/v1/images/generations", { method: "POST", headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (r.ok) return Buffer.from((await r.json()).data[0].b64_json, "base64");
    const txt = await r.text(); console.error(`  attempt ${t} failed (${r.status}): ${txt.slice(0, 200)}`); if ([400, 401, 403].includes(r.status)) break; await new Promise((s) => setTimeout(s, 4000 * t));
  }
  throw new Error("generation failed");
}
mkdirSync(join(root, "art/v2"), { recursive: true });
const charPath = join(root, base + ".png"), bgPath = join(root, base + "-bg.jpg");
if (!has("--bg-only")) {
  if (existsSync(charPath) && !has("--force")) console.log("  portrait exists (use --force to regenerate)");
  else { console.log("  generating portrait..."); writeFileSync(charPath, await gen(M_CHAR, e.char, "1024x1536", true)); execFileSync("sips", ["-Z", "1100", charPath, "--out", charPath], { stdio: "ignore" }); console.log("  saved " + base + ".png"); }
}
if (!has("--char-only")) {
  if (existsSync(bgPath) && !has("--force")) console.log("  background exists (use --force to regenerate)");
  else { console.log("  generating background..."); writeFileSync(bgPath, await gen(M_BG, e.bg, "1536x1024", false)); console.log("  saved " + base + "-bg.jpg"); }
}
// alpha sanity check
try { const a = execFileSync("sips", ["-g", "hasAlpha", charPath]).toString(); if (!/yes/.test(a)) console.warn("  WARNING: portrait has no alpha channel; it will need a background cutout."); } catch {}
// ---- register in the site (local only) ----
if (existsSync(charPath) && existsSync(bgPath) && !done.has(e.id)) {
  let a = readFileSync(join(root, "app.js"), "utf8");
  a = a.replace("const NODE_ART = {\n", `const NODE_ART = {\n  ${e.id}: { src: "${base}.png", bg: "${base}-bg.jpg", name: "${e.name.replace(/"/g, "")}" },\n`);
  writeFileSync(join(root, "app.js"), a);
  let d = readFileSync(join(root, "data.js"), "utf8");
  d = d.replace(/\((\d+) of 126 done\)/, (_, n) => `(${+n + 1} of 126 done)`); writeFileSync(join(root, "data.js"), d);
  execFileSync("node", [join(root, "tools/build-cast.cjs")], { stdio: "ignore" });
  console.log("  registered in app.js, roadmap count updated, CAST.md rebuilt");
}
console.log(`\nReview it (not committed yet): http://localhost:8137/#/characters/${e.people}`);
