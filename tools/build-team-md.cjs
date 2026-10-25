// Builds TEAM-REPORTS.md, SITE-AUDIT.md and PLAN.md from data-team.js (the single source for the Team page and Studio HQ).
global.window = global; const fs = require("fs"), path = require("path"), root = path.join(__dirname, "..") + "/";
require(root + "data-team.js"); const T = window.TEAM;
const council = (id) => T.COUNCIL.find((c) => c.id === id);
const w = (f, s) => { fs.writeFileSync(root + f, s); console.log(f, s.length); };

let r = `# Team Reports\n\nEach team wrote this from its own seat, knowing the limits of the humans: ${T.HUMANS.map((h) => `${h.name} (${h.hours} h/week, assumed)`).join(", ")}. Agents do the heavy lifting; humans approve, sign, pay, publish and play.\n\n## Assumptions (confirm and edit in data-team.js)\n\n${T.ASSUMPTIONS.map((a) => "- " + a).join("\n")}\n\n## The humans\n\n${T.HUMANS.map((h) => `- **${h.name}**, ${h.title}. ${h.does} *Limits:* ${h.limits}`).join("\n")}\n\n`;
T.TEAMS.forEach((t) => {
  const x = t.report;
  r += `---\n\n## ${t.name}\n\n*Lead: ${t.lead} · Reports to ${council(t.to).name} (${council(t.to).seat}) · Human counterpart: ${t.human}*\n\n**${x.headline}**\n\nMission: ${t.mission}\n\n| Agent | Role | Status |\n| --- | --- | --- |\n${t.agents.map((a) => `| ${a.name} | ${a.role} | ${a.status} |`).join("\n")}\n\n**What AI does.** ${x.ai}\n\n**What the humans do.**\n\n- Jacob: ${x.humans.jacob}\n- Mike: ${x.humans.mike}\n- Ben: ${x.humans.ben}\n\n**Top three moves**\n\n${x.moves.map((m, i) => `${i + 1}. ${m}`).join("\n")}\n\n**Biggest risk.** ${x.risk}\n\n**Measure.** ${x.metric}\n\n`;
});
w("TEAM-REPORTS.md", r);

let a = `# Site Audit: Where the Website Is Today\n\nA top-down audit by the War Council, from what is in the repository now. Each seat grades its own lens and names one first fix. Fixes feed Phase 0 of the plan.\n\n## Facts\n\n| Item | Today |\n| --- | --- |\n${T.FACTS.map((f) => `| ${f[0]} | ${f[1]} |`).join("\n")}\n\n## Grades\n\n| Seat | Grade | Verdict |\n| --- | --- | --- |\n${T.AUDIT.map((x) => `| ${council(x.by).name}, ${council(x.by).seat} | ${x.grade} | ${x.verdict} |`).join("\n")}\n\n`;
T.AUDIT.forEach((x) => { a += `## ${council(x.by).name}: ${council(x.by).seat} (${x.grade})\n\n${x.verdict}\n\n${x.findings.map((f) => "- " + f).join("\n")}\n\n**First fix.** ${x.fix}\n\n`; });
w("SITE-AUDIT.md", a);

const cap = T.HUMANS.reduce((s, h) => s + h.hours, 0);
let p = `# The Plan: 78 Weeks\n\nBuilt from the team reports and the site audit, around about ${cap} human hours a week (Jacob ${T.HUMANS[0].hours}, Mike ${T.HUMANS[1].hours}, Ben ${T.HUMANS[2].hours}, assumed) with agents doing the rest. Track it in Studio HQ (\`#/studio\`): set the start date, tick quests, and the Team page timeline fills in.\n\n**Season One** is Were-Creature, Ghost and Undead: 76 characters, 65 with finished art. The other five peoples wait for Season Two. The online game is a written go or no-go at week 78, never a promise.\n\n`;
T.PHASES.forEach((ph) => {
  p += `## ${ph.name}\n\nWeeks ${ph.wk[0]} to ${ph.wk[1]}. ${ph.gate}.\n\n| Quest | Weeks | Owner | Human hours | What agents do | Done when |\n| --- | --- | --- | --- | --- | --- |\n${ph.quests.map((q) => `| ${q.t} | ${q.wk[0] === q.wk[1] ? q.wk[0] : q.wk[0] + "–" + q.wk[1]} | ${q.owner} | ${q.hrs} | ${q.ai} | ${q.m} |`).join("\n")}\n\nHuman hours in this phase: ${ph.quests.reduce((s, q) => s + q.hrs, 0)} of ${cap * (ph.wk[1] - ph.wk[0] + 1)} available.\n\n`;
});
p += `## Revenue streams and what unlocks them\n\n| Stream | How it earns | Cost | Rough potential |\n| --- | --- | --- | --- |\n${T.GOLD.map((g) => `| ${g.t} | ${g.how} | ${g.cost} | ${g.pot} |`).join("\n")}\n\nPotential figures are assumptions, not forecasts.\n`;
w("PLAN.md", p);
