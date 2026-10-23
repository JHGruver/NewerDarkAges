// Rebuilds the cast bible from the site data and ART-DIRECTION: CAST.md (readable), CAST.json (data) and CAST.xlsx (spreadsheet).
// Run: node tools/build-cast.cjs
const { leaves } = require("./load.cjs");
const ROOT = require("path").join(__dirname, "..") + "/";
const fs = require("fs");
require(ROOT + "data-cast.js");
const AD = JSON.parse(fs.readFileSync(ROOT + "art-direction.json", "utf8"));
const appSrc = fs.readFileSync(ROOT + "app.js", "utf8");
const ART = {}; [...appSrc.matchAll(/^  (\w+): \{ src: "([^"]+)", bg: "([^"]+)"/gm)].forEach((m) => (ART[m[1]] = { src: m[2], bg: m[3] }));
const blocks = (f) => (fs.existsSync(ROOT + f) ? [...fs.readFileSync(ROOT + f, "utf8").matchAll(/```text\n([\s\S]*?)\n```/g)].map((m) => m[1]) : []);
const OVERRIDE = { stickywizards: blocks("STICKY-WIZARD-PROMPTS.md"), sporecoven: blocks("SPORE-COVEN-PROMPTS.md") };
const herit = (e) => { const m = /^N\/A \((.*)\)$/.exec(e); return m ? "a " + m[1] : e; };
const split = (p) => p.split(/,\s*(?![^()]*\))/).map((x) => x.trim()).filter(Boolean);
const cap = (s) => s[0].toUpperCase() + s.slice(1);
const A = leaves();
const AGES = ["early 20s", "late 20s", "early 30s", "mid 30s", "late 30s", "early 40s", "mid 40s", "late 40s", "early 50s", "late 50s", "mid 60s", "early 70s"];
const DECADE = { twenties: "mid 20s", thirties: "mid 30s", forties: "mid 40s", fifties: "mid 50s", sixties: "mid 60s", seventies: "early 70s", eighties: "late 70s" };
function ageOf(id, name, who) {
  const m = /in (?:his|her|their) (\w+ties)/.exec(who || ""); if (m && DECADE[m[1]]) return DECADE[m[1]];
  if (/elderly|ancient|old /.test(who || "")) return "early 70s";
  if (/Matriarch|Sage|Elder|Notar|Auditor|Historian|Archivist|Oracle/i.test(name)) return "mid 60s";
  if (/Understudy|Dewdrop|Sprite|Imp|Rascal|Runner|Striker|Lurker/i.test(name)) return "early 20s";
  let h = 0; for (const ch of id) h = (h * 31 + ch.charCodeAt(0)) >>> 0; return AGES[h % AGES.length];
}
const LORE_ = (() => { try { const ctx = { window: {} }; ctx.window = ctx; require("vm").createContext(ctx); for (const f of ["data-lore"]) require("vm").runInContext(fs.readFileSync(ROOT + f + ".js", "utf8"), ctx); return ctx.LORE; } catch { return null; } })();
// what each Eldritch species looks like, so the prompt never has to guess
const SPECIES_LOOK = { "Elder Thing": "an ancient alien architect: a tall ribbed barrel-shaped torso with five vertical ridges, a five-pointed starfish-shaped head with a bright eye at each point, five jointed limbs and folded membranous wings", "Mi-Go": "an alien fungoid-insectoid technologist: a segmented chitinous body of bone-cream and charcoal plates, a bulbous ridged head with short antenna tendrils and mandibles instead of a face, four thin jointed arms and a pair of large membranous wings", "Shoggoth": "a living-flesh creature: a mass of dark glossy flesh with many eyes and mouths opening across a body that reshapes itself", "Deep One": "an amphibious fish-man: scaled skin, wide fish eyes, gills at the neck, webbed hands and feet, a finned crest", "Nightgaunt": "a tall faceless winged horror: smooth featureless black head with curling horns, long thin limbs, a barbed tail and bat-like wings", "Hound of Tindalos": "an angular wedge-bodied hound whose jaw and limbs are made of sharp planes, with a long narrow snout and glowing eyes" };

/* ---------- prompt builders (shared rules from art-direction.json) ---------- */
const VEHICLE = /coupe|chopper|bike|motorcycle|car\b|truck|bus\b|wagon|cart|boat|mount|turret|tower|throne|engine|machine/i;
function charPrompt(r) {
  const gear = r.accessories.split(";").map((x) => x.trim()).filter((x) => x && !VEHICLE.test(x));
  const costume = r.wardrobe.split(",").slice(0, 7).join(",");
  return `A character model-sheet drawing for a 2D television cartoon in the exact visual style of Samurai Jack (Genndy Tartakovsky): extremely simple large flat shapes, one thin uniform black outline, flat colors, minimal detail, angular geometry, plus Sin City heavy solid black shapes and a few stark white highlights. It must look like a cel from the show, NOT detailed anime or fantasy concept art.
CHARACTER: ${r.name}, ${r.identity} (${herit(r.ethnicity)}), apparent age ${r.age}. ${r.physique}, ${r.size} size. Pose: ${r.pose}. Expression: ${r.expression}, as a minimal face. Design the silhouette first (${r.shape}); the pose and the hero prop must read as a solid black shape.
SIMPLIFICATION BUDGET (the most important rule): HERO PROP, the one detailed object: ${gear[0] || "the signature item"}. SECOND ITEM, kept plain: ${gear[1] || "none"}. COSTUME: only three big masses (main garment, legs, boots) as large flat angular polygons. Source costume notes, to be CUT by about 70% and used only as a loose guide: ${costume}.
HOW TO DRAW IT: ${AD.simplify.join("; ")}.
COLOR (exact hex, flat fills): main ${r.main} about 60%, on ${r.mainUse}; secondary ${r.secondary} about 30%, on ${r.secondaryUse}; pop ${r.pop} about 10%, on ${r.popUse}. Also allowed: black, white, neutral grey and one flat simplified skin, fur or species tone. No cream, tan, brass, gold or silver unless assigned. Never use ${r.peopleColor} (background only).
NEVER: ${AD.never}.
SELF-CHECK before finishing: Is it recognizable filled solid black? Could an animator redraw it with a few large shapes? Readable as a thumbnail? Colors flat and separated by the outline? Distinctive without surface detail? If any answer is no, remove detail until all are yes.
COMPOSITION: one full-body figure, head to toe, nothing cropped, clear margin, centered, all shapes fully filled and opaque. True transparent background: no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. ${r.type}, ${r.role.toLowerCase()}, ${r.people} people, mature dark-age tone, no nudity, no gore.`;
}
function bgPrompt(r) {
  return `Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: ${r.scene}. An empty environment for ${r.name} with no people, creatures, figures, silhouettes or text. Midground: ${r.midground}. Foreground: ${r.foreground}, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ${r.peopleColorName.toUpperCase()}-washed painting. The people color ${r.peopleColor} washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main ${r.main} for the biggest glowing sources and surfaces, secondary ${r.secondary} for medium panels, banners and lights, pop ${r.pop} for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.`;
}

/* ---------- one row per character ---------- */
const rows = A.map(({ gid, g, s, l }, idx) => {
  const c = CAST[l.id], m = CHAR_META[l.id], sp = ART_SPEC[l.id], t = TYPES[m.type], pc = PEOPLE_COLORS[gid];
  const [a, b, d] = l.pal, gear = split(Array.isArray(l.gear) ? l.gear.join(", ") : l.gear);
  const ps = split(sp.p), half = Math.ceil(ps.length / 2), nonHuman = c.ethnicity.startsWith("N/A (");
  const r = {
    nda: String(idx + 1).padStart(3, "0"), age: ageOf(l.id, l.name, m.who), id: l.id, name: l.name, tagline: l.tagline, people: g.name, peopleId: gid, cls: s.name, subclass: l.name, role: cap(l.role), type: t.name, typeKey: m.type,
    gender: c.gender, ethnicity: nonHuman ? herit(c.ethnicity).replace(/^a /, "") + " (not human)" : c.ethnicity, identity: m.who ? m.who : c.gender.toLowerCase() + " " + (Object.keys(SPECIES_LOOK).find((k) => c.ethnicity.includes(k)) ? SPECIES_LOOK[Object.keys(SPECIES_LOOK).find((k) => c.ethnicity.includes(k))] : (nonHuman ? "anthropomorphic " + herit(c.ethnicity).replace(/^a /, "").replace(/-kin$/, "") + " character" : "human")),
    physique: m.physique, size: m.size, mobility: m.move, expression: c.expression, pose: c.pose, wardrobe: sp.w, accessories: gear.join("; "),
    shape: AD.shape[m.type], silhouette: `${c.pose}; the ${gear[0] || "signature gear"}${gear[1] ? " and the " + gear[1] : ""} break the outline so it reads instantly as a black shape`,
    main: a, secondary: b, pop: d, mainUse: "the largest garment, armor, fur-marking or body areas", secondaryUse: "trim, sash, straps, secondary garment pieces and held gear", popUse: `the eyes, the ${gear[0] || "signature item"} and one small magical detail`,
    baseTones: Object.keys(SPECIES_LOOK).find((k) => c.ethnicity.includes(k)) ? "Species skin and anatomy may use simplified, flat, muted neutral base tones." : nonHuman ? "Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted." : "Natural skin tones are allowed but must be simplified, flat and muted.",
    peopleColor: g.color, peopleColorName: pc.name, scene: PROMPTS.scene[gid], midground: ps.slice(0, half).join(", "), foreground: ps.slice(half).join(", ") || ps[ps.length - 1], bgItems: sp.p,
    art: ART[l.id] ? { src: ART[l.id].src, bg: ART[l.id].bg } : null,
    look: l.look, summary: l.summary, lore: l.lore, abilities: (l.abilities || []).join("\n"), strengths: (l.strengths || []).join("; "), weaknesses: (l.weaknesses || []).join("; "),
    companion: /companion|pet |familiar|assistant at her|at (?:his|her|their) feet/i.test(sp.w) ? sp.w.match(/(?:a|an) [^;,]*(?:companion|pet|familiar|assistant)[^;,]*|at (?:his|her|their) feet [^;]*/i)?.[0] || "yes" : "",
    lorePlace: LORE_ && LORE_.placements[gid] ? LORE_.placements[gid].place + ": " + (LORE_.placements[gid].subs[s.id] || "") : "",
    nameOnSheet: l.name, fileChar: `art/v2/${gid}-${l.id}.png`, fileBg: `art/v2/${gid}-${l.id}-bg.jpg`,
  };
  r.jack = [
    `Black-fill test: the silhouette must still read as ${r.silhouette.split(";")[0]}.`,
    `Few large shapes: ${r.shape}; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).`,
    `Thumbnail test: the ${gear[0] || "signature gear"} and the pose must be visible at 64 px.`,
    `Flat colors: ${a} / ${b} / ${d} as separate flat shapes divided by black line; no gradients or glow.`,
    `Distinctive without detail: identifiable by ${gear.slice(0, 2).join(" and ") || "its pose"} and the ${t.name.toLowerCase()} shape language.`,
  ];
  r.charPrompt = (OVERRIDE[l.id] && OVERRIDE[l.id][0]) || charPrompt(r);
  r.bgPrompt = (OVERRIDE[l.id] && OVERRIDE[l.id][1]) || bgPrompt(r);
  const vp = ROOT + "art/v2/" + (ART[l.id] ? ART[l.id].src.split("/").pop().replace(".png", "") : "none") + ".vet.json";
  r.vet = fs.existsSync(vp) ? JSON.parse(fs.readFileSync(vp, "utf8")) : null;
  return r;
});
const issues = rows.filter((r) => r.charPrompt.length > 3950 || r.bgPrompt.length > 3950).map((r) => r.id + " prompt too long");

/* ---------- CAST.json ---------- */
fs.writeFileSync(ROOT + "CAST.json", JSON.stringify({ artDirection: AD, lore: LORE_ ? { logline: LORE_.logline, cast: LORE_.cast, placements: LORE_.placements, threads: LORE_.threads } : null, peoples: GROUP_ORDER.map((id) => ({ id, name: GROUP_DEFS[id].name, color: PEOPLE_COLORS[id].color, colorName: PEOPLE_COLORS[id].name, scene: PROMPTS.scene[id], tagline: GROUP_DEFS[id].tagline })), characters: rows }, null, 1));

/* ---------- CAST.md ---------- */
const o = [];
const gc = {}; rows.forEach((r) => (gc[r.gender] = (gc[r.gender] || 0) + 1));
o.push(`# The Newer Dark Ages: Cast Bible\n\nGenerated from the site data and [ART-DIRECTION.md](ART-DIRECTION.md). ${rows.length} characters across ${GROUP_ORDER.length} peoples. Also available as a spreadsheet: **CAST.xlsx** (same data, one row per character) and **CAST.json**.\n\n**Gender split:** ${Object.entries(gc).map(([k, v]) => k + " " + v).join(", ")}. **Combat/support:** ${rows.filter((r) => r.role === "Combat").length}/${rows.filter((r) => r.role === "Support").length}. **With final art:** ${rows.filter((r) => r.art).length}.\n`);
o.push(`## Art direction in one screen\n\n**Core principle: design for silhouette first, character second, detail last.** Samurai Jack flat geometry + Sin City heavy blacks + 1980s glam-gothic + salvaged retro-cyberpunk + classic fantasy.\n\n- **Required:** ${AD.required.join("; ")}.\n- **Forbidden:** ${AD.forbidden.join("; ")}.\n- **Colors:** exactly three accents per character: main about 60%, secondary about 30%, pop about 10%, plus black, white and grey. Exact hex, flat fills. The People background color is never a character color.\n- **The Samurai Jack check (every portrait must pass all five):** ${AD.jackCheck.map((q, i) => `(${i + 1}) ${q}`).join(" ")}\n\n## How to use the prompts\n\n- Characters: gpt-image-1.5, 1024x1536, transparent PNG. Backgrounds: gpt-image-2, 1536x1024. \`node tools/generate-character.mjs <id>\` does both, attaches the approved characters as style references, self-vets every attempt and retries.\n- Each prompt is self-contained and under 4000 characters. Hierarchy: People › Class › Subclass.\n`);
let lastP = "", lastC = "";
rows.forEach((r) => {
  const g = GROUP_DEFS[r.peopleId];
  if (r.peopleId !== lastP) { lastP = r.peopleId; lastC = ""; o.push(`\n---\n\n# ${g.name}\n*People color: ${r.peopleColorName} ${r.peopleColor}. Background setting: ${r.scene}.*\n\n**Tagline:** ${g.tagline}  \n**Classes:** ${g.subs.map((x) => x.name + " (" + x.subs.map((y) => y.name).join(", ") + ")").join("; ")}\n`); }
  if (r.cls !== lastC) { lastC = r.cls; o.push(`\n## ${r.people} › ${r.cls}\n`); }
  const v = r.vet ? `${r.vet.passed ? "PASSED" : "NEEDS WORK"}, overall ${r.vet.overall}/10 (attempt ${r.vet.attempt}); ${r.vet.summary}` : r.art ? "Final art accepted (made before the vetting pipeline)" : "Not yet generated";
  o.push(`### ${r.name}  \`${r.id}\`\n\n*${r.tagline}*\n`);
  o.push(`**Character**\n\n| Field | Value |\n|---|---|\n| Gender | ${r.gender} |\n| Physique | ${r.physique}; ${r.size} size; mobility: ${r.mobility} |\n| Ethnicity + nationality | ${r.ethnicity} |\n| Identity | ${r.identity} |\n| Wardrobe | ${r.wardrobe} |\n| Accessories | ${r.accessories} |\n| Pose | ${r.pose} |\n| Facial expression | ${r.expression} |\n| People | ${r.people} |\n| Class | ${r.cls} |\n| Subclass | ${r.subclass} |\n| Type | ${r.type} |\n| Combat or support | ${r.role} |\n| Silhouette hook | ${r.silhouette} |\n| Shape language | ${r.shape} |\n| Main color (60%) | ${r.main}: ${r.mainUse} |\n| Secondary color (30%) | ${r.secondary}: ${r.secondaryUse} |\n| Pop color (10%) | ${r.pop}: ${r.popUse} |\n| Natural base tones | ${r.baseTones} |\n| Art status | ${r.art ? "Done: \`" + r.art.src + "\` and \`" + r.art.bg + "\`" : "Not yet generated"} |\n| Last vet | ${v} |\n`);
  o.push(`**Samurai Jack check (targets for this character)**\n\n${r.jack.map((x, i) => `${i + 1}. ${x}`).join("\n")}\n`);
  o.push(`**Background**\n\n| Field | Value |\n|---|---|\n| Background | ${r.scene} |\n| Colors | wash ${r.peopleColor} (about 65%); accents ${r.main} / ${r.secondary} / ${r.pop} (about 20%) |\n| Midground | ${r.midground} |\n| Foreground | ${r.foreground} |\n| Character-relevant items | ${r.bgItems} |\n`);
  o.push(`**Character prompt**\n\n\`\`\`text\n${r.charPrompt}\n\`\`\`\n`);
  o.push(`**Background prompt**\n\n\`\`\`text\n${r.bgPrompt}\n\`\`\`\n`);
});
fs.writeFileSync(ROOT + "CAST.md", o.join("\n"));
console.log("CAST.md + CAST.json written;", rows.length, "characters; issues:", issues);

/* ---------- CAST.xlsx (needs the project venv: tools/.venv) ---------- */
const py = ROOT + "tools/.venv/bin/python";
if (fs.existsSync(py)) require("child_process").execFileSync(py, [ROOT + "tools/build-cast-xlsx.py"], { stdio: "inherit" });
else console.log("(skipped CAST.xlsx: create the venv with: python3 -m venv tools/.venv && tools/.venv/bin/pip install openpyxl pillow numpy scipy)");
