// THE TEAM PAGE (#/team): the org chart, every team and its report, the council's site audit, and the timeline.
// Data lives in data-team.js (window.TEAM). Plan progress is read from Studio HQ (localStorage "nda-studio-v1").
(function () {
  const T = () => window.TEAM, H = () => window.NDAH;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const TABS = [["org", "Org chart"], ["teams", "Teams and reports"], ["audit", "Site audit"], ["timeline", "Timeline"]];
  const HUMAN_TAG = { Jacob: "#ff5fb0", Mike: "#6fe9ff", Ben: "#ffd60a", Claude: "#b69cff" };
  let tab = "org", open = null;
  const stateDone = () => { try { return (JSON.parse(localStorage.getItem("nda-studio-v1")) || {}).done || {}; } catch { return {}; } };
  const council = (id) => T().COUNCIL.find((c) => c.id === id);
  const tag = (n) => `<span class="tm-tag" style="--c:${HUMAN_TAG[n] || "#999"}">${esc(n)}</span>`;

  window.teamView = function (t) {
    if (t && TABS.some((x) => x[0] === t)) tab = t;
    return `<div class="page-head"><div class="title"><div class="eyebrow">Who does what</div><h1>The Team</h1></div></div>
      <div class="st-tabs" role="tablist">${TABS.map((x) => `<button role="tab" class="st-tab${tab === x[0] ? " on" : ""}" data-tt="${x[0]}"><span>${x[1]}</span></button>`).join("")}</div>
      <div id="tm-body">${body()}</div>`;
  };
  const body = () => (tab === "teams" ? teamsHtml() : tab === "audit" ? auditHtml() : tab === "timeline" ? timelineHtml() : orgHtml());

  function humanCard(h) {
    return `<div class="tm-human" style="--c:${h.color}"><div class="tm-av">${esc(h.name[0])}</div><div><b>${esc(h.name)}</b><span>${esc(h.title)}</span><small>${h.hours} h/week (assumed)</small></div></div>`;
  }
  function orgHtml() {
    const { HUMANS, COUNCIL, TEAMS, ASSUMPTIONS } = T();
    const [jacob, mike, ben] = HUMANS;
    const cols = COUNCIL.map((c) => {
      const ts = TEAMS.filter((t) => t.to === c.id);
      return `<div class="tm-col"><div class="tm-seat"><span class="tm-code">${esc(c.name)}</span><b>${esc(c.seat)}</b><small>${esc(c.rule)}</small></div>
        <ul class="tm-teams">${ts.map((t) => `<li><button data-open="${t.id}"><b>${esc(t.name)}</b><span>${t.agents.length} agent${t.agents.length > 1 ? "s" : ""} · lead ${esc(t.lead)} · ${tag(t.human)}</span></button></li>`).join("")}</ul></div>`;
    }).join("");
    return `<div class="tm-chart">
      <div class="tm-top"><div class="tm-founders">${humanCard(jacob)}${humanCard(mike)}</div><div class="tm-ben">${humanCard(ben)}<small class="muted">Advises Mordant on the look and Gantry on testing. Dotted line, no deliverables.</small></div></div>
      <div class="tm-stem"></div>
      <div class="tm-council-h">The War Council · answers to Jacob and Mike</div>
      <div class="tm-cols">${cols}</div></div>
      <section class="panel tm-assume"><h3>What the plan assumes about the humans</h3><ul>${ASSUMPTIONS.map((a) => `<li>${esc(a)}</li>`).join("")}</ul>
        <p class="muted">Each human in the cards above: <b>${esc(jacob.name)}</b>: ${esc(jacob.does)} <em>Limits: ${esc(jacob.limits)}</em><br><b>${esc(mike.name)}</b>: ${esc(mike.does)} <em>Limits: ${esc(mike.limits)}</em><br><b>Ben</b>: ${esc(ben.does)} <em>Limits: ${esc(ben.limits)}</em></p></section>`;
  }
  function teamsHtml() {
    const { TEAMS } = T();
    return `<p class="muted st-lead">Every team wrote a report for this plan from its own seat, knowing the limits of the humans. Open one to read it.</p>
      <div class="tm-list">${TEAMS.map((t) => {
        const r = t.report, on = open === t.id;
        return `<article class="tm-team${on ? " on" : ""}" id="tm-${t.id}"><button class="tm-th" data-open="${t.id}" aria-expanded="${on}"><span class="tm-tn">${esc(t.name)}</span><span class="tm-ts">${esc(t.mission)}</span><span class="tm-tm">${t.agents.length} agent${t.agents.length > 1 ? "s" : ""} · reports to ${esc(council(t.to).name)} · ${tag(t.human)}</span></button>
          ${on ? `<div class="tm-tb"><p class="tm-head">${esc(r.headline)}</p>
            <div class="tm-two"><div><h4>Agents</h4><ul class="tm-ag">${t.agents.map((a) => `<li><b>${esc(a.name)}</b> ${esc(a.role)} <span class="tm-st s-${a.status.split(" ")[0].toLowerCase()}">${esc(a.status)}</span></li>`).join("")}</ul>
              <h4>What AI does</h4><p>${esc(r.ai)}</p></div>
            <div><h4>What the humans do</h4><ul class="tm-hu"><li>${tag("Jacob")} ${esc(r.humans.jacob)}</li><li>${tag("Mike")} ${esc(r.humans.mike)}</li><li>${tag("Ben")} ${esc(r.humans.ben)}</li></ul>
              <h4>Top three moves</h4><ol>${r.moves.map((m) => `<li>${esc(m)}</li>`).join("")}</ol></div></div>
            <p class="tm-risk"><b>Biggest risk</b> ${esc(r.risk)}<br><b>Measure</b> ${esc(r.metric)}</p></div>` : ""}</article>`;
      }).join("")}</div>`;
  }
  function auditHtml() {
    const { FACTS, AUDIT } = T();
    return `<section class="panel"><h3>Where the website is today</h3><p class="muted">A top-down audit by the War Council, from what is in the repository now.</p>
      <dl class="tm-facts">${FACTS.map((f) => `<div><dt>${esc(f[0])}</dt><dd>${esc(f[1])}</dd></div>`).join("")}</dl></section>
      <div class="tm-audit">${AUDIT.map((a) => { const c = council(a.by); return `<article class="panel tm-card"><div class="tm-grade g-${a.grade[0].toLowerCase()}">${a.grade}</div><div><span class="st-cls">${esc(c.name)} · ${esc(c.seat)}</span><h3>${esc(a.verdict)}</h3>
        <ul>${a.findings.map((f) => `<li>${esc(f)}</li>`).join("")}</ul><p class="tm-fix"><b>First fix</b> ${esc(a.fix)}</p></div></article>`; }).join("")}</div>
      <p><a class="btn" href="#/studio">Track the fixes in Studio HQ →</a></p>`;
  }
  function timelineHtml() {
    const { PHASES, HUMANS } = T(), done = stateDone(), total = 78;
    const phaseBar = PHASES.map((p) => {
      const n = p.quests.filter((q) => done[q.id]).length, pct = Math.round((n / p.quests.length) * 100);
      return `<div class="tm-ph" style="flex:${(p.wk[1] - p.wk[0] + 1) + 16}"><i style="width:${pct}%"></i><span>${esc(p.name.split(" · ")[0])}<small>Wk ${p.wk[0]}–${p.wk[1]}</small></span></div>`;
    }).join("");
    const cap = HUMANS.reduce((s, h) => s + h.hours, 0);
    const rows = PHASES.map((p) => `<div class="tm-gh">${esc(p.name)} <span class="muted">· weeks ${p.wk[0]} to ${p.wk[1]} · ${esc(p.gate)}</span></div>` + p.quests.map((q) => {
      const left = ((q.wk[0] - 1) / total) * 100, w = Math.max(1.4, ((q.wk[1] - q.wk[0] + 1) / total) * 100);
      return `<div class="tm-gr${done[q.id] ? " done" : ""}"><span class="tm-gl" title="${esc(q.t)}">${esc(q.t)}</span><span class="tm-gt"><i style="left:${left}%;width:${w}%"></i></span></div>`;
    }).join("")).join("");
    return `<p class="muted st-lead">78 weeks, five phases, built around about ${cap} human hours a week and agents doing the rest. Tick quests off in Studio HQ and this chart fills in.</p>
      <div class="tm-phbar">${phaseBar}</div><div class="tm-gantt">${rows}</div><p><a class="btn" href="#/studio">Open the quest board →</a></p>`;
  }

  window.teamInit = function () {
    const root = document.getElementById("app");
    const click = (e) => {
      const tb = e.target.closest("[data-tt]");
      if (tb) { tab = tb.dataset.tt; document.querySelectorAll("[data-tt]").forEach((b) => b.classList.toggle("on", b === tb)); document.getElementById("tm-body").innerHTML = body(); return; }
      const o = e.target.closest("[data-open]");
      if (o) {
        const id = o.dataset.open; open = open === id && tab === "teams" ? null : id; tab = "teams";
        document.querySelectorAll("[data-tt]").forEach((b) => b.classList.toggle("on", b.dataset.tt === "teams"));
        document.getElementById("tm-body").innerHTML = body();
        const el = document.getElementById("tm-" + id); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    root.addEventListener("click", click);
    return () => root.removeEventListener("click", click);
  };
})();
