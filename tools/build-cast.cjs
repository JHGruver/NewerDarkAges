// Rebuilds CAST.md (the cast bible with DALL·E prompts) from the site data. Run: node tools/build-cast.cjs
const {leaves}=require('./load.cjs');
const ROOT=require('path').join(__dirname,'..')+'/';
require(ROOT+'data-cast.js');
const fs=require('fs');
const appSrc=fs.readFileSync(ROOT+'app.js','utf8');
const ART={};[...appSrc.matchAll(/^  (\w+): \{ src: "([^"]+)", bg: "([^"]+)"/gm)].forEach(m=>ART[m[1]]={src:m[2],bg:m[3]});
const herit=e=>{let m=/^N\/A \((.*)\)$/.exec(e);return m?'a '+m[1]:e};
const SPORE=fs.readFileSync(ROOT+'SPORE-COVEN-PROMPTS.md','utf8').match(/```text\n([\s\S]*?)\n```/g).slice(0,2).map(x=>x.replace(/```text\n|\n```/g,''));
const STICKY=fs.readFileSync(ROOT+'STICKY-WIZARD-PROMPTS.md','utf8').match(/```text\n([\s\S]*?)\n```/g).map(x=>x.replace(/```text\n|\n```/g,''));const A=leaves();
const cap=s=>s[0].toUpperCase()+s.slice(1);
const STYLE="Samurai Jack animation style: flat color shapes, extremely simplified angular geometry, bold silhouette, minimal clean contour lines, at most two tones per material, no gradients, no texture noise";
const split=p=>p.split(/,\s*(?![^()]*\))/).map(x=>x.trim());
const BG_STYLE="Charcoal and ink painting on toned paper, 16:9 landscape, Sin City contrast, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood";
const out=[];
const gc={};A.forEach(x=>{const c=CAST[x.l.id].gender;gc[c]=(gc[c]||0)+1});
out.push(`# The Newer Dark Ages — Cast Bible\n\nGenerated from the site data. ${A.length} characters across ${GROUP_ORDER.length} peoples, ${A.reduce((n,x,i,a)=>n+(a[i-1]&&a[i-1].s===x.s?0:1),0)} subclasses.\n\n**Gender split:** ${Object.entries(gc).map(([k,v])=>k+" "+v).join(", ")}. **Combat/support:** ${A.filter(x=>x.l.role==="combat").length}/${A.filter(x=>x.l.role==="support").length}.\n\n## How to use the prompts\n\n- **Character prompts** ask for a single full-body figure, 3:4 portrait, transparent background. Use **gpt-image** (1024x1536) with \`background: "transparent"\` and output PNG for true alpha. DALL·E 3 (1024x1792) cannot output alpha: generate on a flat pure-white or pure-green backdrop and cut it out.\n- **Background prompts** are 16:9 (1536x1024 gpt-image, 1792x1024 DALL·E 3), contain no figures, and leave the lower center empty for the character.\n- Each prompt is self-contained and kept under 4000 characters (DALL·E limit). The four-color system: the people color washes the background; the character trio drives the character and the scene accents.\n- Hierarchy: People › Class › Subclass. Accessories list the full kit from the character sheet; anything too big to wear or carry (vehicles, turrets, stages) is drawn only in the background prompt.\n- Colors are hex values; paste them as written.\n`);
let lastG="",lastS="";
const issues=[];
A.forEach(({gid,g,s,l})=>{
  const c=CAST[l.id],m=CHAR_META[l.id],sp=ART_SPEC[l.id],t=TYPES[m.type],pc=PEOPLE_COLORS[gid];
  if(g.id!==lastG){out.push(`\n---\n\n# ${g.name}  \n*People color: ${pc.name} ${g.color} (accent ${g.color2})*\n\n**Tagline:** ${g.tagline}  \n**Summary:** ${g.summary}  \n**Level names:** ${(g.levelNames||[]).join(" › ")||"n/a"}  \n**Classes:** ${g.subs.map(x=>x.name+" ("+x.subs.map(y=>y.name).join(", ")+")").join("; ")}  \n**Characters:** ${g.subs.reduce((n,x)=>n+x.subs.length,0)} (${g.subs.reduce((n,x)=>n+x.subs.filter(y=>y.role==="support").length,0)} support)  \n**Background setting:** ${PROMPTS.scene[gid]}  \n**Background wash:** ${pc.name} ${g.color}, about 65% of every background  \n`);lastG=g.id;lastS=""}
  if(s.name!==lastS){out.push(`\n## ${g.name} › ${s.name}\n`);lastS=s.name}
  const who=m.who?m.who:"";
  const [a,b,d]=l.pal;
  const ps=split(sp.p);const mid=ps.slice(0,Math.ceil(ps.length/2)).join(", "),fore=ps.slice(Math.ceil(ps.length/2)).join(", ")||ps[ps.length-1];
  
  let charPrompt=`Full-body character illustration of ${l.name}, ${who ? who : c.gender.toLowerCase() + " character"} (${herit(c.ethnicity)}). Body: ${m.physique}, ${m.size} size, ${m.move}. Expression: ${c.expression}. Pose: ${c.pose}. Wardrobe and carried gear (wearable or hand-held only): ${sp.w}. Palette: main ${a} (about 60%), secondary ${b} (about 30%), pop ${d} (about 10%). ${STYLE}. The entire body from head to boots is visible with margin around it; no vehicles, scenery, floor, cast shadow, text or background. A ${t.name.toLowerCase()} (${l.role}) from the ${g.name} people (${s.name}), mature dark-age tone. 3:4 portrait, transparent background.`;
  let bgPrompt=`${BG_STYLE}. Empty environment for ${l.name} (${g.name}), with no people, creatures or figures and no text. Midground: ${mid}. Foreground: ${fore}, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand. Color: a ${pc.name.toUpperCase()}-washed painting; the people color ${g.color} washes about 65% of the image across sky, fog, ground and walls. Accents about 20%: main ${a} for the biggest glowing sources and surfaces, secondary ${b} for medium panels, banners and lights, pop ${d} for small sparks and glints. Composition: horizon at one-third height, moon upper-left, empty open space in the lower center for a standing character, props pushed to the left and right edges. 16:9 landscape.`;
  if(l.id==="stickywizards"){charPrompt=STICKY[0];bgPrompt=STICKY[1]}
  if(l.id==="sporecoven"){charPrompt=SPORE[0];bgPrompt=SPORE[1]}
  if(charPrompt.length>3900||bgPrompt.length>3900)issues.push(l.id+" too long");
  out.push(`### ${l.name}  \`${l.id}\`\n`);
  out.push(`*${l.tagline}*\n`);
  out.push(`**Character**\n\n| Field | Value |\n|---|---|\n| Gender | ${c.gender} |\n| Physique | ${m.physique}; ${m.size} size; mobility: ${m.move} |\n| Ethnicity + nationality | ${c.ethnicity.startsWith("N/A (")?herit(c.ethnicity).replace(/^a /,"")+" (not human: no ethnicity or nationality)":c.ethnicity} |\n| Wardrobe | ${sp.w} |\n| Accessories | ${Array.isArray(l.gear)?l.gear.join("; "):l.gear} |\n| Pose | ${c.pose} |\n| Facial expression | ${c.expression} |\n| People | ${g.name} |\n| Class | ${s.name} |\n| Subclass | ${l.name} |\n| Type | ${t.name} |\n| Combat or support | ${cap(l.role)} |\n| Art status | ${ART[l.id]?"Done: `"+ART[l.id].src+"` and `"+ART[l.id].bg+"`":"Not yet generated"} |\n| Colors | main ${a}, secondary ${b}, pop ${d} |\n`);
  out.push(`**Background**\n\n| Field | Value |\n|---|---|\n| Background | ${BG_SCENE_TXT(gid)} |\n| Colors | wash ${g.color} (about 65%); accents ${a} / ${b} / ${d} (about 20%) |\n| Midground | ${mid} |\n| Foreground | ${fore} |\n| Character-relevant items | ${sp.p} |\n`);
  out.push(`**DALL·E character prompt**\n\n\`\`\`text\n${charPrompt}\n\`\`\`\n`);
  out.push(`**DALL·E background prompt**\n\n\`\`\`text\n${bgPrompt}\n\`\`\`\n`);
});
function BG_SCENE_TXT(gid){return PROMPTS.scene[gid]}
fs.writeFileSync(ROOT+'CAST.md',out.join("\n"));
console.log("written",out.join("\n").length,"issues",issues);
