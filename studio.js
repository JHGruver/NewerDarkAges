// STUDIO HQ (#/studio) and the profile menu in the header.
// The business plan as a game: quests per act (short, medium and long term), a party of team roles, a gold path of revenue streams that unlock
// when their gates are met, perils (risks) to defeat, and trophies. Progress lives in this browser (localStorage). XP and rank show in the header profile.
// The plan itself (with the reasoning) is the "Newer Dark Ages: Business Plan" doc; this page is the playable version of it.
(function () {
  const KEY = "nda-studio-v1", VOTE_KEY = "nda-vote-v1";
  const H = () => window.NDAH;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  const ACTS = [
    { id: "a1", name: "Act I · The Waking", span: "0 to 3 months", icon: "sunrise", gate: "Gate: 1,000 email signups", quests: [
      { id: "q-art", t: "Finish all 147 portraits and backgrounds", m: "147 of 147 done", who: "You", xp: 60, auto: "art" },
      { id: "q-form", t: "Put an email signup form on the site and the Vote page", m: "Form live", who: "Community Herald", xp: 60 },
      { id: "q-reveal", t: "Weekly character reveal on social and email", m: "12 reveals, one a week", who: "Community Herald", xp: 60 },
      { id: "q-votes", t: "Publish the vote results as content", m: "Top 10 characters ranked and shared", who: "Community Herald", xp: 60 },
      { id: "q-legal", t: "Trademark and art-ownership check", m: "Attorney opinion in hand", who: "Loremaster", xp: 60 },
      { id: "q-support", t: "Open a supporter page with 3 tiers", m: "First 25 paying supporters", who: "Quartermaster", xp: 60 },
      { id: "q-store", t: "Five-item print-on-demand store", m: "Store live, first 20 orders", who: "Merchant", xp: 60 },
    ] },
    { id: "a2", name: "Act II · The Forge", span: "3 to 12 months", icon: "flame", gate: "Gate: a funded campaign that ships on time", quests: [
      { id: "q-comic", t: "Comic #1: one 24 to 32 page issue starring the most-voted people", m: "Script, art and letters done; printer quote signed", who: "Chronicler", xp: 100 },
      { id: "q-fund1", t: "Crowdfund the comic", m: "Goal set at 3x the printing and shipping quote", who: "Quartermaster", xp: 100 },
      { id: "q-proto", t: "Board game prototype: two players, 8 starter characters", m: "Rules fit on 4 pages", who: "Artificer", xp: 100 },
      { id: "q-play", t: "Print-and-play version of the game, free", m: "500 downloads, feeds the list", who: "Artificer", xp: 100 },
      { id: "q-list5k", t: "Reach 5,000 email subscribers", m: "List size, open rate above 35%", who: "Community Herald", xp: 100, metric: { m: "signups", v: 5000 } },
      { id: "q-trailers", t: "Use the soundtrack in 3 short trailers", m: "3 trailers published", who: "You", xp: 100 },
      { id: "q-ship1", t: "Ship comic #1 to backers", m: "Within 30 days of the promised date", who: "Chronicler", xp: 100 },
    ] },
    { id: "a3", name: "Act III · The Crown", span: "1 to 3 years", icon: "castle", gate: "Gate: monthly revenue above monthly costs for 6 months", quests: [
      { id: "q-fund2", t: "Board game crowdfund and retail print run", m: "Funded, shipped, reorders", who: "Artificer", xp: 150 },
      { id: "q-series", t: "Comic series: one issue per people, then a collected volume", m: "3 issues and 1 collected edition", who: "Chronicler", xp: 150 },
      { id: "q-digital", t: "Digital game prototype of character select and combat", m: "Playable demo with 8 characters", who: "You", xp: 150 },
      { id: "q-license", t: "Licensing talks: tabletop RPG, apparel, animation option", m: "3 conversations with terms", who: "Loremaster", xp: 150 },
      { id: "q-mmo", t: "The MMO decision: go only with funding, a technical lead and a proven audience", m: "Written go or no-go", who: "You", xp: 150 },
      { id: "q-income", t: "Sustainable income", m: "Revenue above costs for 6 months", who: "Gatekeeper", xp: 150 },
    ] },
  ];
  const SIDE = [
    { id: "d-form", t: "Add an email signup form to the site", xp: 30 },
    { id: "d-tools", t: "Pick a mailing service and a supporter platform", xp: 30 },
    { id: "d-lawyer", t: "Book one hour with an IP attorney about AI art and trademarks", xp: 30 },
    { id: "d-store", t: "Set up the store with your top 5 voted characters", xp: 30 },
    { id: "d-cal", t: "Write the 12-week character reveal calendar", xp: 30 },
    { id: "d-comic", t: "Choose which people stars comic #1", xp: 30 },
    { id: "d-key", t: "Rotate the OpenAI key", xp: 30 },
  ];
  const PARTY = [
    { id: "p-ep", role: "Executive Producer", cls: "Guild Master", icon: "crystal-ball", own: "Vision, canon, final art approval, budget", mission: "Write a one-page goal: side income, studio, or franchise", who: "You" },
    { id: "p-ip", role: "Brand and IP Lead", cls: "Loremaster", icon: "scroll-text", own: "Trademarks, naming, canon", mission: "Trademark search for the title and the 8 people names", who: "Claude drafts, IP attorney files" },
    { id: "p-com", role: "Community Lead", cls: "Herald", icon: "bell-ring", own: "Email list, Discord, the Vote page data", mission: "Launch the waitlist and a weekly character reveal", who: "Claude drafts, you post" },
    { id: "p-cmx", role: "Comics Producer", cls: "Chronicler", icon: "pen-tool", own: "Scripts, letterer, colorist, printer quotes", mission: "Issue #1 script and page count for one people", who: "Claude scripts, freelance letterer" },
    { id: "p-gam", role: "Game Designer", cls: "Artificer", icon: "puzzle", own: "Board game rules, balance, playtests", mission: "A two-player starter box with 8 characters", who: "Claude drafts rules, you playtest" },
    { id: "p-cf", role: "Crowdfunding Lead", cls: "Quartermaster", icon: "coins", own: "Campaign page, rewards, shipping math", mission: "A reward tier sheet with real unit costs", who: "Claude models, you approve" },
    { id: "p-mer", role: "Merch and Store Lead", cls: "Merchant", icon: "shopping-cart", own: "Prints, stickers, pins, playmats, print-on-demand", mission: "A five-item store with margin per item", who: "Claude lists, vendor ships" },
    { id: "p-fin", role: "Finance and Legal", cls: "Gatekeeper", icon: "door-open", own: "Budget, taxes, contracts, art-ownership position", mission: "An LLC decision and a simple budget sheet", who: "Accountant and attorney, humans" },
  ];
  // Revenue streams. A stream is open when every requirement is met, then you mark it launched.
  const GOLD = [
    { id: "g-support", t: "Supporter page", how: "Monthly tiers: early reveals, wallpapers, vote power", cost: "Near zero", pot: "$100 to $500 a month at 25 to 100 supporters", req: [] },
    { id: "g-store", t: "Print-on-demand store", how: "Prints, stickers, shirts, mugs with character art", cost: "Near zero, the vendor ships", pot: "$2 to $8 profit per item", req: [] },
    { id: "g-digital", t: "Digital downloads", how: "Wallpapers, character sheets, print-and-play cards", cost: "Near zero", pot: "Small, but it builds the list", req: [] },
    { id: "g-comic", t: "Comic crowdfund", how: "Pre-orders and tiers for issue #1", cost: "Printing quote plus a letterer", pot: "Low five figures if the list converts", req: [{ m: "signups", v: 1000 }, { q: "q-comic" }] },
    { id: "g-game", t: "Board game crowdfund", how: "Pre-orders and stretch goals", cost: "Prototype and a manufacturer quote", pot: "Low to mid five figures for a first small box", req: [{ m: "playtests", v: 10 }, { q: "q-proto" }] },
    { id: "g-merch", t: "Premium merch", how: "Enamel pins, playmats, art books", cost: "Minimum runs of a few hundred", pot: "Margins of 40 to 60 percent", req: [{ n: "g-comic" }] },
    { id: "g-license", t: "Licensing", how: "Fees and royalties for tabletop RPG, apparel, animation", cost: "Legal time", pot: "Unpredictable, high upside", req: [{ m: "signups", v: 5000 }, { q: "q-legal" }] },
    { id: "g-mmo", t: "Online game", how: "Cosmetics and a battle pass, never pay to win", cost: "Large: a team and servers", pot: "Only after proven demand", req: [{ n: "g-game" }, { n: "g-license" }, { q: "q-mmo" }] },
  ];
  const PERILS = [
    { id: "r-art", t: "The Unowned Portrait", blurb: "Purely AI-generated images may not be copyrightable in the US, so others could copy the art.", slay: "Get an IP attorney's view. Protect the names, lore, layout and story, and file trademarks." },
    { id: "r-plat", t: "The Platform Gatekeepers", blurb: "Crowdfunding sites and stores may require AI disclosure or limit AI art.", slay: "Read each platform's AI policy before building a campaign around it." },
    { id: "r-look", t: "The Look-Alike Specter", blurb: "A character can drift close to something that already exists.", slay: "Keep prompts free of named works and artists, and run a look-alike check before printing." },
    { id: "r-late", t: "The Late Shipment Wraith", blurb: "Campaigns fail on late delivery more than on low funding.", slay: "Price shipping first and add 20 percent to every schedule." },
    { id: "r-scope", t: "The MMO Hydra", blurb: "An online game is a company-sized project that grows two heads for every one you cut.", slay: "Never announce it as a deliverable. It stays a gated option." },
    { id: "r-key", t: "The Leaked Key", blurb: "An API key was pasted into chat.", slay: "Revoke it and make a new one. Keep it only in the git-ignored .env file." },
  ];
  const METRICS = [
    { id: "signups", t: "Email signups", goal: 1000, stretch: 5000 },
    { id: "supporters", t: "Paying supporters", goal: 25, stretch: 100 },
    { id: "playtests", t: "Outside playtests", goal: 10, stretch: 30 },
    { id: "orders", t: "Store orders", goal: 20, stretch: 100 },
  ];
  const PARTY_XP = 40, PERIL_XP = 50, GOLD_XP = 80;
  const RANKS = [["Wanderer", 0], ["Scavenger", 100], ["Torchbearer", 250], ["Forgemaster", 450], ["Warband Captain", 700], ["Guildmaster", 1000], ["Warlord", 1500], ["Dark Age Legend", 2200]];

  let S = { name: "", done: {}, nums: {}, tab: "quests" };
  const load = () => { try { const d = JSON.parse(localStorage.getItem(KEY)); if (d) S = Object.assign(S, d); } catch {} };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };
  load();

  const artCount = () => { try { return Object.keys(H().NODE_ART).length; } catch { return 0; } };
  const artTotal = () => { try { return H().allCharacters().length; } catch { return 147; } };
  const num = (k) => +S.nums[k] || 0;
  const votesCast = () => { try { const v = JSON.parse(localStorage.getItem(VOTE_KEY)); return v && v.votes ? Object.keys(v.votes).length : 0; } catch { return 0; } };

  const reqMet = (r) => r.m ? num(r.m) >= r.v : r.q ? isDone(r.q) : !!S.done[r.n];
  const reqText = (r) => r.m ? `${METRICS.find((x) => x.id === r.m).t}: ${r.v.toLocaleString()}` : r.q ? `Quest: ${findQuest(r.q).t}` : `Launch: ${GOLD.find((x) => x.id === r.n).t}`;
  const findQuest = (id) => ACTS.flatMap((a) => a.quests).find((q) => q.id === id);
  const isDone = (id) => {
    const q = findQuest(id);
    if (q && q.auto === "art") return artCount() >= artTotal() || !!S.done[id];
    if (q && q.metric) return num(q.metric.m) >= q.metric.v || !!S.done[id];
    return !!S.done[id];
  };

  function xpOf() {
    let xp = 0;
    ACTS.forEach((a) => a.quests.forEach((q) => { if (isDone(q.id)) xp += q.xp; }));
    SIDE.forEach((q) => { if (S.done[q.id]) xp += q.xp; });
    PARTY.forEach((p) => { if (S.done[p.id]) xp += PARTY_XP; });
    PERILS.forEach((p) => { if (S.done[p.id]) xp += PERIL_XP; });
    GOLD.forEach((g) => { if (S.done[g.id]) xp += GOLD_XP; });
    return xp;
  }
  function profile() {
    const xp = xpOf(); let i = 0; RANKS.forEach((r, n) => { if (xp >= r[1]) i = n; });
    const cur = RANKS[i][1], next = RANKS[i + 1] ? RANKS[i + 1][1] : null;
    const questsDone = ACTS.reduce((n, a) => n + a.quests.filter((q) => isDone(q.id)).length, 0);
    const questsAll = ACTS.reduce((n, a) => n + a.quests.length, 0);
    return { xp, level: i + 1, rank: RANKS[i][0], cur, next, pct: next ? Math.round(((xp - cur) / (next - cur)) * 100) : 100, name: S.name || "Wanderer", questsDone, questsAll };
  }
  const actDone = (a) => a.quests.every((q) => isDone(q.id));
  const partyCount = () => PARTY.filter((p) => S.done[p.id]).length;
  const perilCount = () => PERILS.filter((p) => S.done[p.id]).length;
  const goldCount = () => GOLD.filter((g) => S.done[g.id]).length;
  const TROPHIES = [
    { id: "t-first", t: "First Blood", d: "Finish any quest", ok: () => profile().questsDone >= 1 },
    { id: "t-a1", t: "The Waking", d: "Clear Act I", ok: () => actDone(ACTS[0]) },
    { id: "t-a2", t: "The Forge", d: "Clear Act II", ok: () => actDone(ACTS[1]) },
    { id: "t-a3", t: "The Crown", d: "Clear Act III", ok: () => actDone(ACTS[2]) },
    { id: "t-party", t: "Full Party", d: "Recruit all 8 roles", ok: () => partyCount() === PARTY.length },
    { id: "t-slayer", t: "Peril Slayer", d: "Defeat all 6 perils", ok: () => perilCount() === PERILS.length },
    { id: "t-gold", t: "Gold Digger", d: "Launch 3 revenue streams", ok: () => goldCount() >= 3 },
    { id: "t-list", t: "Crowd Caller", d: "1,000 email signups", ok: () => num("signups") >= 1000 },
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
  // change one item, award XP, announce level-ups and trophies
  function toggle(id, xp) {
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
  const openP = () => { const m = pmenu(); m.classList.add("open"); pbtn().setAttribute("aria-expanded", "true"); };
  const closeP = () => { const m = pmenu(); if (!m) return; m.classList.remove("open"); pbtn().setAttribute("aria-expanded", "false"); };
  window.NDProfile = { close: closeP };
  function initProfile() {
    const b = pbtn(), m = pmenu(); if (!b || !m) return;
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
  function hudHtml() {
    const p = profile();
    return `<div class="st-lv"><b>${p.level}</b><span>LEVEL</span></div>
      <div class="st-who"><input class="st-name" id="st-name" value="${esc(S.name)}" placeholder="Name your guild" maxlength="24" aria-label="Guild name">
        <div class="st-rank">${esc(p.rank)}</div>
        <div class="st-xpbar"><i style="width:${p.pct}%"></i></div>
        <div class="st-xptxt">${p.next ? `${p.xp} / ${p.next} XP to ${esc(RANKS[p.level][0])}` : `${p.xp} XP · max rank`}</div></div>
      <div class="st-stats"><span><b>${p.questsDone}</b>/${p.questsAll}<small>quests</small></span><span><b>${partyCount()}</b>/${PARTY.length}<small>party</small></span><span><b>${goldCount()}</b>/${GOLD.length}<small>streams</small></span><span><b>${perilCount()}</b>/${PERILS.length}<small>perils</small></span></div>`;
  }
  const TABS = [["quests", "Quest Board", "sword"], ["party", "Party", "user-round"], ["gold", "Gold Path", "coins"], ["perils", "Perils", "skull"], ["trophies", "Trophies", "star"]];

  window.studioView = function (tab) {
    if (tab && TABS.some((t) => t[0] === tab)) S.tab = tab;
    return `<div class="page-head"><div class="title"><div class="eyebrow">The business plan, playable</div><h1>Studio HQ</h1></div></div>
    <div class="st-hud panel" id="st-hud">${hudHtml()}</div>
    <div class="st-tabs" role="tablist">${TABS.map((t) => `<button role="tab" class="st-tab${S.tab === t[0] ? " on" : ""}" data-t="${t[0]}">${H().ic(t[2])}<span>${t[1]}</span></button>`).join("")}</div>
    <div id="st-body">${body()}</div>`;
  };
  function body() {
    return S.tab === "party" ? partyHtml() : S.tab === "gold" ? goldHtml() : S.tab === "perils" ? perilsHtml() : S.tab === "trophies" ? trophiesHtml() : questsHtml();
  }
  function questRow(q, kind) {
    const done = kind === "side" ? !!S.done[q.id] : isDone(q.id), auto = q.auto || q.metric;
    const prog = q.auto === "art" ? `<em>${artCount()} of ${artTotal()} portraits</em>` : q.metric ? `<em>${num(q.metric.m).toLocaleString()} of ${q.metric.v.toLocaleString()}</em>` : "";
    return `<li class="st-q${done ? " done" : ""}"><label><input type="checkbox" data-id="${q.id}" ${done ? "checked" : ""} ${auto && !S.done[q.id] && done ? "disabled" : ""}>
      <span class="st-box"></span><span class="st-qt"><b>${esc(q.t)}</b>${q.m ? `<small>${esc(q.m)}${q.who ? " · " + esc(q.who) : ""}</small>` : ""}${prog}</span><span class="st-xp">+${q.xp} XP</span></label></li>`;
  }
  function questsHtml() {
    const metrics = `<section class="panel st-metrics"><h3>Gate meters</h3><p class="muted">Type in your real numbers. Gates and gold-path streams read from them.</p>
      <div class="st-mgrid">${METRICS.map((m) => `<label class="st-m"><span>${m.t}</span><input type="number" min="0" inputmode="numeric" data-m="${m.id}" value="${num(m.id)}">${bar(num(m.id), m.goal)}<small>Goal ${m.goal.toLocaleString()} · stretch ${m.stretch.toLocaleString()}</small></label>`).join("")}</div></section>`;
    const acts = ACTS.map((a, i) => {
      const n = a.quests.filter((q) => isDone(q.id)).length;
      const locked = i > 0 && !actDone(ACTS[i - 1]) && n === 0;
      return `<section class="st-act${actDone(a) ? " clear" : ""}${locked ? " lock" : ""}"><header><span class="st-ai">${H().ic(a.icon)}</span><div><h2>${a.name}</h2><span class="muted">${a.span} · ${n}/${a.quests.length} quests</span></div>${actDone(a) ? `<span class="st-clear">CLEARED</span>` : ""}</header>
        ${bar(n, a.quests.length)}<ul class="st-list">${a.quests.map((q) => questRow(q)).join("")}</ul><div class="st-gate">${esc(a.gate)}</div></section>`;
    }).join("");
    const side = `<section class="st-act"><header><span class="st-ai">${H().ic("scroll-text")}</span><div><h2>Side quests · next 30 days</h2><span class="muted">${SIDE.filter((q) => S.done[q.id]).length}/${SIDE.length} done</span></div></header>
      <ul class="st-list">${SIDE.map((q) => questRow(q, "side")).join("")}</ul></section>`;
    return metrics + acts + side;
  }
  function partyHtml() {
    return `<p class="muted st-lead">Eight roles run the studio. Recruit one when someone, or something, owns it for real: +${PARTY_XP} XP each.</p><div class="st-cards">${PARTY.map((p) => `
      <article class="panel st-card${S.done[p.id] ? " on" : ""}"><div class="st-ci">${H().ic(p.icon)}</div><div class="st-cb"><span class="st-cls">${p.cls}</span><h3>${p.role}</h3>
        <p><b>Owns</b> ${esc(p.own)}</p><p><b>First mission</b> ${esc(p.mission)}</p><p class="muted"><b>Filled by</b> ${esc(p.who)}</p>
        <button class="btn ${S.done[p.id] ? "ghost" : ""}" data-id="${p.id}">${S.done[p.id] ? "Recruited ✓" : "Recruit"}</button></div></article>`).join("")}</div>`;
  }
  function goldHtml() {
    const open = (g) => g.req.every(reqMet);
    return `<p class="muted st-lead">Start with the streams that cost almost nothing, then spend. A stream opens when its requirements are met. Mark it launched for +${GOLD_XP} XP. Potential figures are rough assumptions, not forecasts.</p>
      <div class="st-cards">${GOLD.map((g) => {
        const launched = !!S.done[g.id], ok = open(g);
        return `<article class="panel st-card gold${launched ? " on" : ok ? " ready" : " lock"}"><div class="st-ci">${H().ic(launched ? "gem" : ok ? "coins" : "door-open")}</div><div class="st-cb">
          <span class="st-cls">${launched ? "Launched" : ok ? "Open" : "Locked"}</span><h3>${g.t}</h3><p>${esc(g.how)}</p>
          <p class="muted"><b>Cost</b> ${esc(g.cost)}<br><b>Potential</b> ${esc(g.pot)}</p>
          ${g.req.length ? `<ul class="st-req">${g.req.map((r) => `<li class="${reqMet(r) ? "ok" : ""}">${reqText(r)}</li>`).join("")}</ul>` : ""}
          <button class="btn ${launched ? "ghost" : ""}" data-id="${g.id}" ${ok || launched ? "" : "disabled"}>${launched ? "Launched ✓" : ok ? "Mark launched" : "Locked"}</button></div></article>`;
      }).join("")}</div>`;
  }
  function perilsHtml() {
    return `<p class="muted st-lead">Each risk is a boss. Defeat it by doing its fix, then tick it: +${PERIL_XP} XP.</p><div class="st-cards">${PERILS.map((p) => `
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
    if (t.dataset.m) { S.nums[t.dataset.m] = Math.max(0, parseInt(t.value, 10) || 0); save(); paintProfile(); refresh(); return; }
    if (t.matches(".st-q input[data-id]")) {
      const id = t.dataset.id, q = findQuest(id) || SIDE.find((x) => x.id === id);
      if (q.auto || q.metric) { t.checked = isDone(id); return; }
      toggle(id, q.xp); refresh();
    }
  }
  function onClick(e) {
    const tab = e.target.closest(".st-tab");
    if (tab) { S.tab = tab.dataset.t; save(); document.querySelectorAll(".st-tab").forEach((b) => b.classList.toggle("on", b === tab)); refresh(); return; }
    const btn = e.target.closest(".st-card button[data-id]");
    if (btn && !btn.disabled) { toggle(btn.dataset.id); refresh(); }
  }

  window.addEventListener("DOMContentLoaded", initProfile);
  if (document.readyState !== "loading") initProfile();
})();
