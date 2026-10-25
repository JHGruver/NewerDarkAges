// STUDIO HQ (#/studio) and the profile menu in the header.
// The realistic plan as a game: five phases of quests with weeks, owners and human hours, a capacity check against what Jacob, Mike and Ben can give,
// a gold path of revenue streams that unlock when their requirements are met, perils (risks) to defeat, and trophies.
// Plan data lives in data-team.js (window.TEAM). Progress lives in this browser (localStorage). XP and rank show in the header profile.
(function () {
  const KEY = "nda-studio-v1", VOTE_KEY = "nda-vote-v1";
  const H = () => window.NDAH;
  const TM = () => window.TEAM;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const PARTY_XP = 0, PERIL_XP = 50, GOLD_XP = 80;
  const RANKS = [["Wanderer", 0], ["Scavenger", 150], ["Torchbearer", 400], ["Forgemaster", 800], ["Warband Captain", 1400], ["Guildmaster", 2200], ["Warlord", 3200], ["Dark Age Legend", 4200]];
  const OWNER_COLOR = { Jacob: "#ff5fb0", Mike: "#6fe9ff", Ben: "#ffd60a", Claude: "#b69cff" };
  // quests that complete themselves from the numbers
  const AUTO = { "q-art11": "season1", "q-seed100": { m: "signups", v: 100 }, "q-list1000": { m: "signups", v: 1000 }, "q-playtests": { m: "playtests", v: 10 }, "q-support": { m: "supporters", v: 5 } };

  const mondayOf = (d) => { const x = new Date(d); x.setHours(0, 0, 0, 0); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; };
  const iso = (d) => { const x = new Date(d); return x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0"); };
  let S = { name: "", done: {}, nums: {}, tab: "plan", start: iso(mondayOf(new Date())) };
  const load = () => { try { const d = JSON.parse(localStorage.getItem(KEY)); if (d) S = Object.assign(S, d); } catch {} };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };
  load(); save();
  const PHASES = () => TM().PHASES, QUESTS = () => PHASES().flatMap((p) => p.quests);
  const findQuest = (id) => QUESTS().find((q) => q.id === id);
  const num = (k) => +S.nums[k] || 0;
  const votesCast = () => { try { const v = JSON.parse(localStorage.getItem(VOTE_KEY)); return v && v.votes ? Object.keys(v.votes).length : 0; } catch { return 0; } };
  const week = () => { const s = new Date(S.start + "T00:00:00"); return Math.floor((Date.now() - s) / 604800000) + 1; };
  const dateOfWeek = (w) => { const d = new Date(S.start + "T00:00:00"); d.setDate(d.getDate() + (w - 1) * 7); return d.toLocaleDateString(undefined, { month: "short", day: "numeric" }); };

  // Season One art: Were-Creature, Ghost and Undead
  const SEASON = ["were", "ghost", "undead"];
  const seasonCount = () => { try { const a = H().allCharacters().filter((c) => SEASON.includes(c.g.id)); return [a.filter((c) => H().NODE_ART[c.l.id]).length, a.length]; } catch { return [0, 76]; } };
  const metricOk = (m) => num(m.m) >= m.v;
  const isDone = (id) => {
    if (S.done[id]) return true;
    const a = AUTO[id];
    if (a === "season1") { const [n, t] = seasonCount(); return n >= t; }
    return a ? metricOk(a) : false;
  };
  const reqMet = (r) => r.m ? num(r.m) >= r.v : r.q ? isDone(r.q) : !!S.done[r.n];
  const reqText = (r) => r.m ? `${TM().METRICS.find((x) => x.id === r.m).t}: ${r.v.toLocaleString()}` : r.q ? `Quest: ${findQuest(r.q).t}` : `Launch: ${TM().GOLD.find((x) => x.id === r.n).t}`;

  function xpOf() {
    let xp = 0;
    QUESTS().forEach((q) => { if (isDone(q.id)) xp += q.xp; });
    TM().PERILS.forEach((p) => { if (S.done[p.id]) xp += PERIL_XP; });
    TM().GOLD.forEach((g) => { if (S.done[g.id]) xp += GOLD_XP; });
    return xp;
  }
  function profile() {
    const xp = xpOf(); let i = 0; RANKS.forEach((r, n) => { if (xp >= r[1]) i = n; });
    const cur = RANKS[i][1], next = RANKS[i + 1] ? RANKS[i + 1][1] : null;
    const all = QUESTS(), questsDone = all.filter((q) => isDone(q.id)).length;
    return { xp, level: i + 1, rank: RANKS[i][0], cur, next, pct: next ? Math.round(((xp - cur) / (next - cur)) * 100) : 100, name: S.name || "Wanderer", questsDone, questsAll: all.length };
  }
  const phaseDone = (p) => p.quests.every((q) => isDone(q.id));
  const perilCount = () => TM().PERILS.filter((p) => S.done[p.id]).length;
  const goldCount = () => TM().GOLD.filter((g) => S.done[g.id]).length;
  const TROPHIES = [
    { id: "t-first", t: "First Blood", d: "Finish any quest", ok: () => profile().questsDone >= 1 },
    { id: "t-p0", t: "Safe Harbor", d: "Clear Phase 0", ok: () => phaseDone(PHASES()[0]) },
    { id: "t-p1", t: "Doors Open", d: "Clear Phase 1", ok: () => phaseDone(PHASES()[1]) },
    { id: "t-p2", t: "Proof of Life", d: "Clear Phase 2", ok: () => phaseDone(PHASES()[2]) },
    { id: "t-p3", t: "Funded", d: "Clear Phase 3", ok: () => phaseDone(PHASES()[3]) },
    { id: "t-slayer", t: "Peril Slayer", d: "Defeat every peril", ok: () => perilCount() === TM().PERILS.length },
    { id: "t-gold", t: "Gold Digger", d: "Launch 3 revenue streams", ok: () => goldCount() >= 3 },
    { id: "t-list", t: "Crowd Caller", d: "300 email signups", ok: () => num("signups") >= 300 },
    { id: "t-voter", t: "Voice of the Realm", d: "Cast 20 character votes", ok: () => votesCast() >= 20 },
    { id: "t-lv5", t: "Warband Captain", d: "Reach level 5", ok: () => profile().level >= 5 },
  ];

  // ---------- toast ----------
  let toastEl, toastT;
  function toast(msg, big) {
    if (!toastEl) { toastEl = document.createElement("div"); toastEl.className = "st-toast"; toastEl.setAttribute("role", "status"); document.body.appendChild(toastEl); }
    toastEl.textContent = msg; toastEl.classList.toggle("big", !!big); toastEl.classList.remove("on"); void toastEl.offsetWidth; toastEl.classList.add("on");
    clearTimeout(toastT); toastT = setTimeout(() => toastEl.classList.remove("on"), big ? 2800 : 1600);
  }
  function toggle(id) {
    const before = profile(), trBefore = TROPHIES.filter((t) => t.ok()).map((t) => t.id);
    if (S.done[id]) delete S.done[id]; else S.done[id] = true;
    save();
    const after = profile(), gained = after.xp - before.xp;
    try { if (gained > 0 && window.NDAudio) NDAudio.nudge(2); } catch {}
    const newTr = TROPHIES.find((t) => t.ok() && !trBefore.includes(t.id));
    if (after.level > before.level) toast(`Level ${after.level}: ${after.rank}!`, true);
    else if (newTr) toast(`Trophy: ${newTr.t}`, true);
    else if (gained > 0) toast(`+${gained} XP`);
    paintProfile();
  }

  // ---------- profile menu (header) ----------
  const pbtn = () => document.getElementById("profbtn"), pmenu = () => document.getElementById("profmenu");
  function paintProfile() {
    const p = profile(), b = pbtn(), m = pmenu(); if (!b || !m) return;
    b.querySelector(".pb-lv").textContent = p.level;
    const nm = m.querySelector(".pm-name"); if (nm && document.activeElement !== nm) nm.value = S.name;
    m.querySelector(".pm-rank").textContent = `Level ${p.level} · ${p.rank}`;
    m.querySelector(".pm-bar i").style.width = p.pct + "%";
    m.querySelector(".pm-xp").textContent = p.next ? `${p.xp} / ${p.next} XP` : `${p.xp} XP · max rank`;
    m.querySelector(".pm-stats").innerHTML = `<span><b>${p.questsDone}</b>/${p.questsAll} quests</span><span><b>${TROPHIES.filter((t) => t.ok()).length}</b>/${TROPHIES.length} trophies</span><span><b>${votesCast()}</b> votes</span>`;
    const hud = document.getElementById("st-hud"); if (hud) hud.innerHTML = hudHtml();
  }
  const openP = () => { pmenu().classList.add("open"); pbtn().setAttribute("aria-expanded", "true"); };
  const closeP = () => { const m = pmenu(); if (!m) return; m.classList.remove("open"); pbtn().setAttribute("aria-expanded", "false"); };
  window.NDProfile = { close: closeP };
  let profileReady = false;
  function initProfile() {
    const b = pbtn(), m = pmenu(); if (!b || !m || profileReady) return; profileReady = true;
    b.innerHTML = `<span class="pb-ic">${H().ic("user-round")}</span><span class="pb-lv">1</span>`;
    b.addEventListener("click", (e) => { e.stopPropagation(); m.classList.contains("open") ? closeP() : openP(); });
    m.addEventListener("click", (e) => { e.stopPropagation(); if (e.target.closest("a")) closeP(); });
    document.addEventListener("click", closeP);
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeP(); });
    const nm = m.querySelector(".pm-name");
    nm.addEventListener("input", () => { S.name = nm.value.slice(0, 24); save(); });
    const snd = m.querySelector("#pm-snd"); const paintSnd = () => { snd.textContent = window.NDAudio && NDAudio.enabled ? "Sound: on" : "Sound: off"; };
    snd.addEventListener("click", () => window.NDAudio && NDAudio.toggle()); window.addEventListener("nda:sound", paintSnd); paintSnd();
    paintProfile();
  }

  // ---------- the page ----------
  const bar = (v, max) => `<span class="st-bar"><i style="width:${Math.min(100, Math.round((v / max) * 100))}%"></i></span>`;
  const tag = (n) => `<span class="tm-tag" style="--c:${OWNER_COLOR[n] || "#999"}">${esc(n)}</span>`;
  function hudHtml() {
    const p = profile(), w = week();
    return `<div class="st-lv"><b>${p.level}</b><span>LEVEL</span></div>
      <div class="st-who"><input class="st-name" id="st-name" value="${esc(S.name)}" placeholder="Name your guild" maxlength="24" aria-label="Guild name">
        <div class="st-rank">${esc(p.rank)}</div>
        <div class="st-xpbar"><i style="width:${p.pct}%"></i></div>
        <div class="st-xptxt">${p.next ? `${p.xp} / ${p.next} XP to ${esc(RANKS[p.level][0])}` : `${p.xp} XP · max rank`}</div></div>
      <div class="st-stats"><span><b>${p.questsDone}</b>/${p.questsAll}<small>quests</small></span><span><b>${w < 1 ? 0 : Math.min(w, 78)}</b>/78<small>week</small></span><span><b>${goldCount()}</b>/${TM().GOLD.length}<small>streams</small></span><span><b>${perilCount()}</b>/${TM().PERILS.length}<small>perils</small></span></div>`;
  }
  const TABS = [["plan", "Plan", "sword"], ["gold", "Gold Path", "coins"], ["perils", "Perils", "skull"], ["trophies", "Trophies", "star"]];

  window.studioView = function (tab) {
    if (tab && TABS.some((t) => t[0] === tab)) S.tab = tab;
    if (!TABS.some((t) => t[0] === S.tab)) S.tab = "plan";
    return `<div class="page-head"><div class="title"><div class="eyebrow">The business plan, playable</div><h1>Studio HQ</h1></div><a class="btn ghost" href="#/team">Meet the team →</a></div>
    <div class="st-hud panel" id="st-hud">${hudHtml()}</div>
    <div class="st-tabs" role="tablist">${TABS.map((t) => `<button role="tab" class="st-tab${S.tab === t[0] ? " on" : ""}" data-t="${t[0]}">${H().ic(t[2])}<span>${t[1]}</span></button>`).join("")}</div>
    <div id="st-body">${body()}</div>`;
  };
  const body = () => (S.tab === "gold" ? goldHtml() : S.tab === "perils" ? perilsHtml() : S.tab === "trophies" ? trophiesHtml() : planHtml());

  function questRow(q) {
    const done = isDone(q.id), auto = AUTO[q.id], w = week(), late = !done && w > q.wk[1], now = !done && w >= q.wk[0] && w <= q.wk[1];
    let prog = "";
    if (auto === "season1") { const [n, t] = seasonCount(); prog = `<em>${n} of ${t} Season One portraits</em>`; }
    else if (auto) prog = `<em>${num(auto.m).toLocaleString()} of ${auto.v.toLocaleString()}</em>`;
    const wk = q.wk[0] === q.wk[1] ? `Week ${q.wk[0]}` : `Weeks ${q.wk[0]} to ${q.wk[1]}`;
    return `<li class="st-q${done ? " done" : ""}${late ? " late" : ""}${now ? " now" : ""}"><label><input type="checkbox" data-id="${q.id}" ${done ? "checked" : ""} ${auto && !S.done[q.id] && done ? "disabled" : ""}>
      <span class="st-box"></span><span class="st-qt"><b>${esc(q.t)}</b><small>${esc(q.m)}</small>
      <span class="st-meta">${q.owner.split(" + ").map(tag).join("")}<span class="st-wk">${wk} · ${dateOfWeek(q.wk[0])}</span><span class="st-hr">${q.hrs} h human</span>${late ? `<span class="st-flag">Late</span>` : now ? `<span class="st-flag on">Now</span>` : ""}</span>
      <small class="st-ai">Agents: ${esc(q.ai)}</small>${prog}</span><span class="st-xp">+${q.xp} XP</span></label></li>`;
  }
  function capacity(p) {
    const weeks = p.wk[1] - p.wk[0] + 1, hu = TM().HUMANS, cap = hu.reduce((s, h) => s + h.hours, 0) * weeks, capJ = hu[0].hours * weeks;
    let hrs = 0, jh = 0;
    p.quests.forEach((q) => { hrs += q.hrs; if (q.owner === "Jacob") jh += q.hrs; else if (q.owner === "Jacob + Mike") jh += q.hrs / 2; });
    return { hrs, cap, jh, capJ };
  }
  function planHtml() {
    const w = week(), P = PHASES(), all = QUESTS();
    const due = all.filter((q) => !isDone(q.id) && w >= q.wk[0] && w <= q.wk[1]), late = all.filter((q) => !isDone(q.id) && w > q.wk[1]);
    const here = w < 1 ? "Your plan starts " + new Date(S.start + "T00:00:00").toLocaleDateString(undefined, { month: "long", day: "numeric" }) + "." : w > 78 ? "The 78 weeks are over." : `Week ${w} of 78.`;
    const now = `<section class="panel st-now"><div class="st-nowh"><div><h3>This week</h3><span class="muted">${here}</span></div>
      <label class="st-start">Plan starts <input type="date" id="st-start" value="${esc(S.start)}"></label></div>
      ${late.length ? `<p class="st-lateh">${late.length} quest${late.length > 1 ? "s" : ""} past ${late.length > 1 ? "their" : "its"} week: ${late.slice(0, 4).map((q) => esc(q.t)).join("; ")}${late.length > 4 ? "…" : ""}</p>` : ""}
      ${due.length ? `<ul class="st-duel">${due.slice(0, 6).map((q) => `<li>${q.owner.split(" + ").map(tag).join("")} ${esc(q.t)}</li>`).join("")}</ul>` : `<p class="muted">${w < 1 ? "Nothing due yet." : "Nothing due this week."}</p>`}</section>`;
    const strip = `<div class="tm-phbar st-strip">${P.map((p) => { const n = p.quests.filter((q) => isDone(q.id)).length; return `<div class="tm-ph${w >= p.wk[0] && w <= p.wk[1] ? " cur" : ""}" style="flex:${p.wk[1] - p.wk[0] + 17}"><i style="width:${Math.round((n / p.quests.length) * 100)}%"></i><span>${esc(p.name.split(" · ")[0])}<small>Wk ${p.wk[0]}–${p.wk[1]}</small></span></div>`; }).join("")}</div>`;
    const metrics = `<section class="panel st-metrics"><h3>Gate meters</h3><p class="muted">Type in your real numbers. Gates and gold-path streams read from them.</p>
      <div class="st-mgrid">${TM().METRICS.map((m) => `<label class="st-m"><span>${m.t}</span><input type="number" min="0" inputmode="numeric" data-m="${m.id}" value="${num(m.id)}">${bar(num(m.id), m.goal)}<small>First goal ${m.goal.toLocaleString()} · stretch ${m.stretch.toLocaleString()}</small></label>`).join("")}</div></section>`;
    const phases = P.map((p, i) => {
      const n = p.quests.filter((q) => isDone(q.id)).length, c = capacity(p), tight = c.hrs / c.cap > 0.85 || c.jh / c.capJ > 0.85;
      return `<section class="st-act${phaseDone(p) ? " clear" : ""}"><header><span class="st-ai">${H().ic(p.icon)}</span><div><h2>${esc(p.name)}</h2><span class="muted">Weeks ${p.wk[0]} to ${p.wk[1]} · ${n}/${p.quests.length} quests</span></div>${phaseDone(p) ? `<span class="st-clear">CLEARED</span>` : ""}</header>
        ${bar(n, p.quests.length)}
        <div class="st-cap${tight ? " tight" : ""}"><span>Human hours <b>${c.hrs}</b> of ${c.cap} available${tight ? " · tight" : ""}</span><span>Jacob <b>${c.jh}</b> of ${c.capJ}</span></div>
        <ul class="st-list">${p.quests.map(questRow).join("")}</ul><div class="st-gate">${esc(p.gate)}</div></section>`;
    }).join("");
    return now + strip + metrics + phases;
  }
  function goldHtml() {
    const G = TM().GOLD, open = (g) => g.req.every(reqMet);
    return `<p class="muted st-lead">Start with the streams that cost almost nothing, then spend. A stream opens when its requirements are met. Mark it launched for +${GOLD_XP} XP. Potential figures are rough assumptions, not forecasts.</p>
      <div class="st-cards">${G.map((g) => {
        const launched = !!S.done[g.id], ok = open(g);
        return `<article class="panel st-card gold${launched ? " on" : ok ? " ready" : " lock"}"><div class="st-ci">${H().ic(launched ? "gem" : ok ? "coins" : "door-open")}</div><div class="st-cb">
          <span class="st-cls">${launched ? "Launched" : ok ? "Open" : "Locked"}</span><h3>${g.t}</h3><p>${esc(g.how)}</p>
          <p class="muted"><b>Cost</b> ${esc(g.cost)}<br><b>Potential</b> ${esc(g.pot)}</p>
          ${g.req.length ? `<ul class="st-req">${g.req.map((r) => `<li class="${reqMet(r) ? "ok" : ""}">${esc(reqText(r))}</li>`).join("")}</ul>` : ""}
          <button class="btn ${launched ? "ghost" : ""}" data-id="${g.id}" ${ok || launched ? "" : "disabled"}>${launched ? "Launched ✓" : ok ? "Mark launched" : "Locked"}</button></div></article>`;
      }).join("")}</div>`;
  }
  function perilsHtml() {
    return `<p class="muted st-lead">Each risk is a boss. Defeat it by doing its fix, then tick it: +${PERIL_XP} XP.</p><div class="st-cards">${TM().PERILS.map((p) => `
      <article class="panel st-card peril${S.done[p.id] ? " on" : ""}"><div class="st-ci">${H().ic(S.done[p.id] ? "star" : "skull")}</div><div class="st-cb"><span class="st-cls">${S.done[p.id] ? "Defeated" : "Boss"}</span><h3>${p.t}</h3>
        <p>${esc(p.blurb)}</p><p class="muted"><b>Fix</b> ${esc(p.slay)}</p><button class="btn ${S.done[p.id] ? "ghost" : ""}" data-id="${p.id}">${S.done[p.id] ? "Defeated ✓" : "Defeat"}</button></div></article>`).join("")}</div>`;
  }
  function trophiesHtml() {
    return `<div class="st-trophies">${TROPHIES.map((t) => { const ok = t.ok(); return `<div class="st-trophy${ok ? " on" : ""}"><span>${H().ic(ok ? "star" : "circle")}</span><b>${t.t}</b><small>${t.d}</small></div>`; }).join("")}</div>`;
  }

  function refresh() { const b = document.getElementById("st-body"); if (b) b.innerHTML = body(); }
  window.studioInit = function () {
    const root = document.getElementById("app");
    root.addEventListener("change", onChange); root.addEventListener("click", onClick); root.addEventListener("input", onInput);
    return () => { root.removeEventListener("change", onChange); root.removeEventListener("click", onClick); root.removeEventListener("input", onInput); };
  };
  function onInput(e) {
    if (e.target.id === "st-name") { S.name = e.target.value.slice(0, 24); save(); const nm = pmenu() && pmenu().querySelector(".pm-name"); if (nm) nm.value = S.name; }
  }
  function onChange(e) {
    const t = e.target;
    if (t.id === "st-start") { if (t.value) { S.start = t.value; save(); paintProfile(); refresh(); } return; }
    if (t.dataset.m) { S.nums[t.dataset.m] = Math.max(0, parseInt(t.value, 10) || 0); save(); paintProfile(); refresh(); return; }
    if (t.matches(".st-q input[data-id]")) {
      const id = t.dataset.id;
      if (AUTO[id] && isDone(id) && !S.done[id]) { t.checked = true; return; }
      toggle(id); refresh();
    }
  }
  function onClick(e) {
    const tab = e.target.closest(".st-tab[data-t]");
    if (tab) { S.tab = tab.dataset.t; save(); document.querySelectorAll(".st-tab[data-t]").forEach((b) => b.classList.toggle("on", b === tab)); refresh(); return; }
    const btn = e.target.closest(".st-card button[data-id]");
    if (btn && !btn.disabled) { toggle(btn.dataset.id); refresh(); }
  }

  window.addEventListener("DOMContentLoaded", initProfile);
  if (document.readyState !== "loading") initProfile();
})();
