#!/usr/bin/env node
// Builds LORE-BIBLE.md from data-lore-source.js (the two source documents) and data-lore.js (the unified bible),
// plus the game's peoples, classes and subclasses. Run: node tools/build-lore-md.mjs
import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const ctx = { console }; ctx.window = ctx; vm.createContext(ctx);
for (const f of ["icons", "data", "data-peoples-1", "data-peoples-2", "data-peoples-3", "data-peoples-4", "data-types", "data-art", "data-magic", "data-summoners", "data-lore-source", "data-lore"]) vm.runInContext(readFileSync(join(root, f + ".js"), "utf8"), ctx, { filename: f });
const { LORE, LORE_SRC, GROUP_DEFS, GROUP_ORDER, PEOPLE_COLORS } = ctx;
const tag = (s) => (s ? ` \`[${s}]\`` : "");
const o = [];
o.push(`# ${LORE.meta.title}\n\n*Version ${LORE.meta.version}.* ${LORE.meta.tagline}\n`);
o.push(`**Source tags:** ${Object.entries(LORE.meta.legend).map(([k, v]) => `\`${k}\` ${v}`).join(" · ")}\n`);
o.push(`## 1. The world in one paragraph\n\n${LORE.logline}\n`);
o.push(`## 2. Five pillars\n\n${LORE.pillars.map((p, i) => `${i + 1}. **${p.title}**${tag(p.src)}. ${p.text}`).join("\n")}\n`);
o.push(`## 3. Timeline\n\n${LORE.timeline.map((t) => `- **${t.when}: ${t.title}**${tag(t.src)}. ${t.text}`).join("\n")}\n`);
o.push(`## 4. Places\n\n${LORE.places.map((p) => `- **${p.name}**${tag(p.src)} (${GROUP_DEFS[p.people].name}). ${p.text}`).join("\n")}\n`);
o.push(`## 5. The three tribes and the chain of command\n\n${LORE.rank_note}\n`);
o.push(`| Tribe | Territory | Head | Council | Mystics | Current head | Elders (all dead) | Council members |\n|---|---|---|---|---|---|---|---|`);
LORE.tribes.forEach((t) => o.push(`| ${t.name} | ${t.territory} | ${t.head} | ${t.council} | ${t.mystics} | ${t.head_name} | ${t.elders.join(", ")} | ${t.senate.join(", ")} |`));
o.push(`\n### Moving up the ranks\n\n${LORE.ascension.map((a) => `${a.step}. **${a.title}**${tag(a.src)}. ${a.text}`).join("\n")}\n`);
o.push(`## 6. Reconciling the sources\n\n${LORE.reconcile.map((r) => `- **${r.q}**${tag(r.src)}. ${r.a}`).join("\n")}\n`);
o.push(`## 7. How the game's peoples, classes and subclasses fit\n`);
for (const id of GROUP_ORDER) {
  const g = GROUP_DEFS[id], pl = LORE.placements[id];
  o.push(`### ${g.name} · ${pl.place}\n\n${pl.text}\n`);
  g.subs.forEach((s) => o.push(`- **${s.name}** (${s.subs.map((l) => l.name).join(", ")}): ${pl.subs[s.id] || ""}`));
  o.push("");
}
o.push(`## 8. The named cast\n\nPeople from your Characters sheet, placed in the game's classes. The class mapping is a proposal${tag("A")}.\n`);
o.push(`| Name | Tribe | Rank | Age | Status | Power | Game class | Notes |\n|---|---|---|---|---|---|---|---|`);
LORE.cast.forEach((c) => o.push(`| ${c.name} | ${c.tribe} | ${c.rank} | ${c.age || ""} | ${c.status} | ${c.powers || ""} | ${GROUP_DEFS[c.people].name} › ${c.cls} › ${c.sub} | ${c.notes}${c.kit ? " Kit: " + c.kit + "." : ""} |`));
o.push(`\n### The dead\n\n${LORE.fallen.map((f) => `- **${f.name}** (${f.tribe}). ${f.note}`).join("\n")}\n`);
o.push(`### Relationships\n\n${LORE.relations.map(([a, b, l]) => `- ${a} → ${b}: ${l}`).join("\n")}\n`);
o.push(`## 9. Open threads\n\n${LORE.threads.map((t) => `- **${t.q}**${tag(t.src)}. ${t.text}`).join("\n")}\n`);
o.push(`## 10. The story as a broadcast\n\n${LORE.story.map((s, i) => `${i + 1}. **${s.kicker}: ${s.title}** ${s.text}`).join("\n")}\n`);
o.push(`## 11. Glossary\n\n${LORE.glossary.map(([k, v]) => `- **${k}**: ${v}`).join("\n")}\n`);
o.push(`## Appendix A. World Outline (verbatim)\n\nSource: \`lore/New Dark Ages - World Outline.docx\`. Typos preserved.\n`);
LORE_SRC.outline.forEach((s) => { o.push(`### ${s.title}\n`); s.paras.forEach((p) => o.push(p + "\n")); });
o.push(`## Appendix B. Characters sheet (verbatim)\n\nSource: \`lore/New Dark Ages - Characters.xlsx\`.\n\n| Species | Class | Name | Age | Status | Notes | Powers | Items |\n|---|---|---|---|---|---|---|---|`);
LORE_SRC.cast.forEach((c) => o.push(`| ${c.species} | ${c.class} | ${c.name} | ${c.age} | ${c.status} | ${c.notes} | ${c.powers} | ${c.items.join(", ")} |`));
writeFileSync(join(root, "LORE-BIBLE.md"), o.join("\n") + "\n");
console.log("LORE-BIBLE.md written,", o.join("\n").length, "chars");
