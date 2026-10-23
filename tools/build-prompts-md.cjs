// Builds PROMPTS.md: ONLY the copy-paste prompts, one character and one background per character. Run: node tools/build-prompts-md.cjs
const fs = require("fs"), path = require("path");
const root = path.join(__dirname, "..");
const D = JSON.parse(fs.readFileSync(path.join(root, "CAST.json"), "utf8"));
const o = [];
o.push(`# Copy-paste prompts: characters and backgrounds

One character prompt and one background prompt for every character, ready to paste into DALL·E / ChatGPT image generation. Nothing else is in this file (attributes, lore and art direction live in CAST.md and CAST.xlsx).

**How to use**
- **Character prompt:** paste it as is. Ask for a 3:4 portrait (1024x1536) with a transparent background. If your tool cannot do transparency, generate on flat white or flat green and cut it out. Optional but helpful: attach the approved characters (Interceptors, Owlwing Watch, Moonrunners) as style references.
- **Background prompt:** paste it as is. Ask for a 16:9 landscape (1536x1024).
- The hex colors in each prompt are exact; keep them. Every prompt is under 4000 characters.
- A line under each heading shows the three character colors and the people background color so you can double check the result.

**Contents:** ${D.peoples.map((p) => `[${p.name}](#${p.id})`).join(" · ")}
`);
const by = {}; D.characters.forEach((c) => (by[c.peopleId] = by[c.peopleId] || []).push(c));
for (const p of D.peoples) {
  o.push(`\n---\n\n<a id="${p.id}"></a>\n# ${p.name}\n`);
  let last = "";
  for (const c of by[p.id]) {
    if (c.cls !== last) { last = c.cls; o.push(`\n## ${p.name} › ${c.cls}\n`); }
    o.push(`### ${c.name}\n\n*${c.role} · ${c.type} · colors ${c.main} / ${c.secondary} / ${c.pop} · background wash ${c.peopleColor}${c.art ? " · art already made" : ""}*\n\n**Character prompt**\n\n\`\`\`text\n${c.charPrompt}\n\`\`\`\n\n**Background prompt**\n\n\`\`\`text\n${c.bgPrompt}\n\`\`\`\n`);
  }
}
fs.writeFileSync(path.join(root, "PROMPTS.md"), o.join("\n"));
console.log("PROMPTS.md written:", D.characters.length, "characters,", Math.round(o.join("\n").length / 1024), "KB");
