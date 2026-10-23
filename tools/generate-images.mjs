#!/usr/bin/env node
// Generates the site art listed in SITE-ASSETS.md with the OpenAI Images API (no dependencies, Node 18+).
//   node tools/generate-images.mjs --test                 check the key and list image models
//   node tools/generate-images.mjs --list                 list asset ids
//   node tools/generate-images.mjs --only logo-mark,divider [--quality high] [--force] [--dry]
//   node tools/generate-images.mjs --group Brand          every asset in a group
//   node tools/generate-images.mjs --all                  everything not yet generated
// Key: OPENAI_API_KEY in the environment or in a .env file at the project root. Output: art/site/<id>.png|jpg
import { readFileSync, writeFileSync, existsSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
if (existsSync(join(root, ".env"))) for (const line of readFileSync(join(root, ".env"), "utf8").split("\n")) { const m = line.match(/^\s*([A-Z_]+)\s*=\s*(.*?)\s*$/); if (m && !process.env[m[1]]) process.env[m[1]] = m[2].replace(/^["']|["']$/g, ""); }
const KEY = process.env.OPENAI_API_KEY;
// gpt-image-2 gives the best paintings but cannot make transparent backgrounds, so transparent assets use gpt-image-1.5.
const MODEL_OPAQUE = process.env.OPENAI_IMAGE_MODEL || "gpt-image-2", MODEL_ALPHA = process.env.OPENAI_ALPHA_MODEL || "gpt-image-1.5";
const args = process.argv.slice(2), has = (f) => args.includes(f), val = (f) => (args.includes(f) ? args[args.indexOf(f) + 1] : null);
if (!KEY || KEY.includes("...")) { console.error("No OPENAI_API_KEY found. Put it in .env (see .env.example) or export it in your shell."); process.exit(1); }

// ---- parse SITE-ASSETS.md ----
const md = readFileSync(join(root, "SITE-ASSETS.md"), "utf8"); let group = "";
const assets = [];
for (const block of md.split(/\n(?=## |### )/)) {
  const g = block.match(/^## (.+)/); if (g) { group = g[1].trim(); continue; }
  const h = block.match(/^### (.+?)\s+`art\/site\/([\w-]+)\.(png|jpg)`/); if (!h) continue;
  const size = (block.match(/\*\*Generate at:\*\* (\d+)x(\d+)/) || []).slice(1).map(Number);
  const fmt = (block.match(/\*\*Format:\*\* (.+)/) || [])[1] || "";
  const prompt = (block.match(/```text\n([\s\S]*?)\n```/) || [])[1];
  const [w, hh] = size; const shape = w > hh * 1.3 ? "1536x1024" : hh > w * 1.2 ? "1024x1536" : "1024x1024";
  assets.push({ group, name: h[1].trim(), id: h[2], ext: h[3], transparent: /transparent/i.test(fmt), shape, prompt });
}

const api = (path, init = {}) => fetch("https://api.openai.com/v1" + path, { ...init, headers: { Authorization: `Bearer ${KEY}`, ...(init.headers || {}) } });

if (has("--test")) {
  const r = await api("/models"); if (!r.ok) { console.error("Key rejected:", r.status, (await r.text()).slice(0, 300)); process.exit(1); }
  const ids = (await r.json()).data.map((m) => m.id).filter((id) => /image|dall-e/.test(id)).sort();
  console.log("Key works. Image models on this account:", ids.join(", ") || "(none listed)"); console.log(`Paintings: ${MODEL_OPAQUE}${ids.includes(MODEL_OPAQUE) ? "" : " (NOT listed: set OPENAI_IMAGE_MODEL)"}; transparent PNGs: ${MODEL_ALPHA}${ids.includes(MODEL_ALPHA) ? "" : " (NOT listed: set OPENAI_ALPHA_MODEL)"}`); process.exit(0);
}
if (has("--list")) { assets.forEach((a) => console.log(`${a.id.padEnd(26)} ${a.shape.padEnd(10)} ${a.transparent ? "transparent" : a.ext}  [${a.group}]`)); process.exit(0); }

let todo = [];
if (val("--only")) { const ids = val("--only").split(","); todo = assets.filter((a) => ids.includes(a.id)); const miss = ids.filter((i) => !todo.find((a) => a.id === i)); if (miss.length) console.error("Unknown ids:", miss.join(", ")); }
else if (val("--group")) todo = assets.filter((a) => a.group.toLowerCase() === val("--group").toLowerCase());
else if (has("--all")) todo = assets;
else { console.error("Pick what to generate: --only id1,id2 | --group Brand | --all  (or --test, --list)"); process.exit(1); }
todo = todo.filter((a) => has("--force") || !existsSync(join(root, "art/site", `${a.id}.${a.ext}`)));
const quality = val("--quality") || "medium";
console.log(`${todo.length} image(s), models ${MODEL_OPAQUE} / ${MODEL_ALPHA}, quality ${quality}${has("--dry") ? " (dry run)" : ""}`);
mkdirSync(join(root, "art/site"), { recursive: true });
for (const a of todo) {
  console.log(`- ${a.id} (${a.shape}${a.transparent ? ", transparent" : ""})`); if (has("--dry")) continue;
  const body = { model: a.transparent ? MODEL_ALPHA : MODEL_OPAQUE, prompt: a.prompt, size: a.shape, quality, n: 1, output_format: a.transparent ? "png" : "jpeg", ...(a.transparent ? { background: "transparent" } : {}) };
  let ok = false;
  for (let tryN = 1; tryN <= 3 && !ok; tryN++) {
    const r = await api("/images/generations", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(body) });
    if (r.ok) { const j = await r.json(); writeFileSync(join(root, "art/site", `${a.id}.${a.ext}`), Buffer.from(j.data[0].b64_json, "base64")); ok = true; console.log("  saved art/site/" + a.id + "." + a.ext); }
    else { const t = await r.text(); console.error(`  attempt ${tryN} failed (${r.status}): ${t.slice(0, 240)}`); if (r.status === 400 || r.status === 401 || r.status === 403) break; await new Promise((s) => setTimeout(s, 4000 * tryN)); }
  }
}
