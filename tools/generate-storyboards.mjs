#!/usr/bin/env node
// Generates one grey storyboard page image per comic page with the OpenAI Images API (Node 18+, macOS sips for the JPEG step).
//   node tools/generate-storyboards.mjs --list [--issue i1]
//   node tools/generate-storyboards.mjs --only i1p2,i1n3 [--quality medium] [--force] [--dry]
//   node tools/generate-storyboards.mjs --issue i1 | --all    every page that has no image yet
// Reads the page plan from data-comic.js + data-comic-plan.js. Writes art/comic/<pageId>.jpg and refreshes data-comic-art.js (the list the site reads).
import { readFileSync, writeFileSync, existsSync, mkdirSync, readdirSync, unlinkSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { execFileSync } from "node:child_process";
import vm from "node:vm";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
if (existsSync(join(root, ".env"))) for (const line of readFileSync(join(root, ".env"), "utf8").split("\n")) { const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*?)\s*$/); if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, ""); }
const KEY = process.env.OPENAI_API_KEY, MODEL = process.env.OPENAI_IMAGE_MODEL || "gpt-image-2";
const args = process.argv.slice(2), has = (f) => args.includes(f), val = (f) => (args.includes(f) ? args[args.indexOf(f) + 1] : null);

const ctx = { window: {} }; vm.createContext(ctx);
for (const f of ["data-comic.js", "data-comic-plan.js"]) vm.runInContext(readFileSync(join(root, f), "utf8"), ctx);
const C = ctx.window.COMIC, outDir = join(root, "art/comic");
mkdirSync(outDir, { recursive: true });

const SHOT = { est: "wide establishing view", wide: "wide shot", med: "medium shot", close: "close-up", insert: "close detail of an object", ots: "over-the-shoulder shot", aerial: "high aerial view" };
const MOOD = { cold: "cold, clinical light", static: "flat grey broadcast glow", ember: "harsh firelit contrast", dim: "dim, low light", night: "deep night shadows", blood: "heavy dark shadows" };
const SHAPE = {
  splash: "ONE single full-page panel that fills the whole page inside a thin border.",
  two: "TWO panels stacked vertically, equal height, separated by a white gutter.",
  three: "THREE panels stacked as three horizontal rows, equal height.",
  top2: "THREE panels: one wide panel across the top half, and two panels side by side in the bottom half.",
  bot2: "THREE panels: two panels side by side in the top half, and one wide panel across the bottom half.",
  tall: "THREE panels: one tall panel filling the left half of the page, and two stacked panels filling the right half.",
  grid4: "FOUR panels in a 2 by 2 grid.",
  cinema: "FOUR panels: one wide panel across the top, two panels side by side in the middle row, and one wide panel across the bottom.",
  grid6: "SIX panels in a 2 columns by 3 rows grid.",
};
const people = (p) => (p.chars || []).map((c) => c.n).join(" and ");
const promptFor = (page) => {
  const list = page.panels.map((p, i) => `Panel ${i + 1} (${SHOT[p.shot] || p.shot}${p.mood && MOOD[p.mood] ? ", " + MOOD[p.mood] : ""}): ${p.action}${people(p) ? " Figures: " + people(p) + "." : ""}`).join("\n");
  return `A single page of a comic book storyboard, portrait orientation, 1986 Moscow and its aftermath, grim and grounded. Drawn as quick expressive thumbnail sketches in grey graphite pencil with soft grey marker shading on off-white paper. Strictly grayscale: black, white and greys only, no color at all.

Page layout: ${SHAPE[page.layout]} Panels have thin black borders and clean white gutters. Read left to right, top to bottom.

${list}

Style: rough storyboard thumbnails with clear camera angles, strong silhouettes and simple readable figures; not polished, not painted. The page must show exactly the panels described.
Hard rules: absolutely no text, letters, numbers, captions, speech balloons or sound effects anywhere on the page, no signatures, no watermark, no color.`;
};

const pages = C.issues.flatMap((i) => i.pages.map((p) => ({ ...p, issue: i.id })));
const have = (id) => existsSync(join(outDir, id + ".jpg"));
const writeManifest = () => {
  const ids = readdirSync(outDir).filter((f) => f.endsWith(".jpg")).map((f) => f.slice(0, -4)).sort();
  writeFileSync(join(root, "data-comic-art.js"), `// Storyboard page images that exist in art/comic/. Written by tools/generate-storyboards.mjs.\nwindow.COMIC_ART = ${JSON.stringify(Object.fromEntries(ids.map((i) => [i, 1])))};\n`);
  return ids.length;
};

if (has("--list")) { pages.filter((p) => !val("--issue") || p.issue === val("--issue")).forEach((p) => console.log(`${p.id.padEnd(8)} ${p.layout.padEnd(7)} ${have(p.id) ? "done " : "todo "} ${p.beat}`)); process.exit(0); }
let todo = [];
if (val("--only")) todo = val("--only").split(",").map((id) => pages.find((p) => p.id === id)).filter(Boolean);
else if (val("--issue")) todo = pages.filter((p) => p.issue === val("--issue"));
else if (has("--all")) todo = pages;
else { console.error("Pick pages: --only id1,id2 | --issue i1 | --all  (or --list)"); process.exit(1); }
todo = todo.filter((p) => has("--force") || !have(p.id));
if (has("--print")) { todo.forEach((p) => console.log(`--- ${p.id}\n${promptFor(p)}\n`)); process.exit(0); }
if (!has("--dry") && (!KEY || KEY.includes("..."))) { console.error("No OPENAI_API_KEY found in .env or the environment."); process.exit(1); }
const quality = val("--quality") || "medium", conc = +(val("--concurrency") || 3);
console.log(`${todo.length} page(s), model ${MODEL}, quality ${quality}${has("--dry") ? " (dry run)" : ""}`);
if (has("--dry")) { todo.forEach((p) => console.log("-", p.id, p.layout)); process.exit(0); }

const gen = async (page) => {
  const body = { model: MODEL, prompt: promptFor(page), size: "1024x1536", quality, n: 1, output_format: "png" };
  for (let t = 1; t <= 3; t++) {
    const r = await fetch("https://api.openai.com/v1/images/generations", { method: "POST", headers: { Authorization: `Bearer ${KEY}`, "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (r.ok) {
      const j = await r.json(), png = join(outDir, page.id + ".png"), jpg = join(outDir, page.id + ".jpg");
      writeFileSync(png, Buffer.from(j.data[0].b64_json, "base64"));
      execFileSync("sips", ["-s", "format", "jpeg", "-s", "formatOptions", "70", "--resampleWidth", "800", png, "--out", jpg], { stdio: "ignore" }); unlinkSync(png);
      console.log("  saved", page.id); return true;
    }
    const txt = await r.text(); console.error(`  ${page.id} attempt ${t} failed (${r.status}): ${txt.slice(0, 200)}`);
    if ([400, 401, 403].includes(r.status)) return false;
    await new Promise((s) => setTimeout(s, 5000 * t));
  }
  return false;
};
let next = 0, fail = 0;
await Promise.all(Array.from({ length: Math.min(conc, todo.length) }, async () => { while (next < todo.length) { const p = todo[next++]; if (!(await gen(p))) fail++; } }));
console.log(`done. ${fail} failed. ${writeManifest()} page images on disk.`);
