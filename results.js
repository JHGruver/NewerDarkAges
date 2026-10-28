// THE VOTE RESULTS DASHBOARD (#/vote): where the vote page lands. Reads data-votes.js (window.VOTE_DATA, built from the voters' exported
// spreadsheets) plus any spreadsheets added on the page, and works out the two best characters per people for the MVP.
// The deck where you cast votes is at #/vote/deck (vote.js).
(function () {
  const KEY = "nda-vote-extra-v1";
  const H = () => window.NDAH;
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const VOTE = { "-1": { w: "Dislike", g: "✕", c: "#e0584f" }, 1: { w: "Like", g: "♥", c: "#4fb8d6" }, 2: { w: "Super like", g: "★", c: "#f0c24b" } };
  const TYPE_NAME = (k) => (window.TYPES && TYPES[k] ? TYPES[k].name : k);
  let extra = { voters: [], votes: {}, comments: [] }, filter = "all", q = "", sortBy = "mean", flip = {};

  const loadExtra = () => { try { const d = JSON.parse(localStorage.getItem(KEY)); if (d && d.voters) extra = d; } catch {} };
  const saveExtra = () => { try { localStorage.setItem(KEY, JSON.stringify(extra)); } catch {} };

  // merge the built-in data with the added spreadsheets
  function dataset() {
    const base = window.VOTE_DATA || { voters: [], votes: {}, comments: [] };
    const voters = base.voters.concat(extra.voters), votes = {}, n0 = base.voters.length;
    Object.entries(base.votes).forEach(([id, v]) => { votes[id] = v.concat(extra.voters.map(() => null)); });
    Object.entries(extra.votes).forEach(([id, v]) => { votes[id] = votes[id] || base.voters.map(() => null).concat(extra.voters.map(() => null)); v.forEach((s, i) => (votes[id][n0 + i] = s)); });
    return { voters, votes, comments: base.comments.concat(extra.comments) };
  }

  function rows(D) {
    const { NODE_ART } = H();
    return H().allCharacters().map((c) => {
      const v = D.votes[c.l.id] || [], got = v.filter((x) => x != null), mean = got.length ? got.reduce((a, b) => a + b, 0) / got.length : null;
      const m = (window.CHAR_META || {})[c.l.id] || {};
      return { id: c.l.id, name: c.l.name, g: c.g, s: c.s, l: c.l, path: c.path, v, n: got.length, mean, min: got.length ? Math.min(...got) : null, art: !!NODE_ART[c.l.id], type: m.type || (c.l.role === "support" ? "support" : "fighter"), role: c.l.role };
    }).filter((r) => r.n);
  }
  const better = (a, b) => b.mean - a.mean || b.min - a.min || (b.art - a.art) || a.name.localeCompare(b.name);

  // two best per people: highest combined score, then nobody dislikes it, then the art exists. The second pick prefers a different type when an equal one is on offer.
  function picks(rs) {
    const out = {};
    H().GROUPS.forEach((g) => {
      const l = rs.filter((r) => r.g.id === g.id).sort(better); if (!l.length) return;
      const one = l[0], rest = l.slice(1), top = rest[0];
      let two = top;
      if (top && top.type === one.type) { const alt = rest.find((r) => r.mean === top.mean && r.min === top.min && r.type !== one.type); if (alt) two = alt; }
      out[g.id] = { g, all: l, picks: [one, two].filter(Boolean), alts: rest.filter((r) => r !== two).slice(0, 3) };
    });
    return out;
  }
  const why = (r, others, D) => {
    const bits = [], names = D.voters.map((v) => v.name), sup = r.v.map((s, i) => (s === 2 ? names[i] : null)).filter(Boolean);
    if (r.v.every((s) => s === 2)) bits.push("Everyone super liked it");
    else if (sup.length) bits.push(`${sup.join(" and ")} super liked it`);
    if (r.min >= 1 && !r.v.every((s) => s === 2)) bits.push("nobody disliked it");
    if (others && others.type !== r.type) bits.push(`adds a ${TYPE_NAME(r.type).toLowerCase()} next to the ${TYPE_NAME(others.type).toLowerCase()}`);
    bits.push(r.art ? "art is finished" : "art still to make");
    return bits.join(". ") + ".";
  };

  const vtag = (s) => (s == null ? '<span class="rs-v none">no vote</span>' : `<span class="rs-v" style="--c:${VOTE[s].c}"><b aria-hidden="true">${VOTE[s].g}</b>${VOTE[s].w}</span>`);

  /* ---------- sections ---------- */
  function head(D, rs) {
    const pairs = rs.filter((r) => r.v.length > 1 && r.v[0] != null && r.v[1] != null), agree = pairs.filter((r) => r.v[0] === r.v[1]).length;
    const both = rs.filter((r) => r.n === D.voters.length && r.v.every((s) => s === 2)).length, clash = rs.filter((r) => r.n > 1 && Math.max(...r.v.filter((x) => x != null)) - Math.min(...r.v.filter((x) => x != null)) >= 3).length;
    const t = (n, l, s) => `<div class="rs-stat panel"><b>${n}</b><span>${l}</span>${s ? `<small>${s}</small>` : ""}</div>`;
    return `<div class="rs-stats">${t(D.voters.length, "voters", D.voters.map((v) => esc(v.name)).join(", "))}${t(rs.length, "characters voted on", `${rs.filter((r) => r.art).length} have finished art`)}${t(both, "super liked by everyone", "the safest bets")}${t(agree ? Math.round((agree / pairs.length) * 100) + "%" : "n/a", "exact agreement", `${pairs.length ? pairs.length - agree : 0} votes differ`)}${t(clash, "big splits", "one disliked, one super liked")}</div>`;
  }

  function mvp(D, rs) {
    const P = picks(rs), { NODE_ART } = H();
    return `<h2 class="lh">What the vote suggests: two per people</h2>
      <p class="muted rs-how">How the picks are made: highest combined score across every voter first, then characters nobody disliked, then characters whose art is finished. The second pick takes a different type than the first when an equal-scoring one exists, so each people shows two different jobs. This is the vote's own answer. The roster Jacob and Mike actually chose is on the <a href="#/vote/mvp">MVP tab</a>. Add a voter below and this recalculates.</p>
      <div class="rs-mvp">${H().GROUPS.map((g) => { const p = P[g.id]; if (!p) return ""; const [a, b] = p.picks;
        const card = (r, other, k) => { const art = NODE_ART[r.id]; return `<a class="rs-pick" href="#/characters/${r.path.join("/")}" style="--pc:${g.color}">
          <span class="rs-art">${art ? `<img src="${art.src}" alt="${esc(r.name)}" loading="lazy">` : H().poster(g, r.l, "")}<i class="rs-rank">${k}</i>${art ? "" : '<em class="rs-noart">Art to make</em>'}</span>
          <span class="rs-pname">${esc(r.name)}</span><span class="rs-ptype">${esc(TYPE_NAME(r.type))} · ${r.role === "combat" ? "Combat" : "Support"}</span>
          <span class="rs-votes">${r.v.map((s, i) => `<span class="rs-vv">${esc(D.voters[i].name)} ${vtag(s)}</span>`).join("")}</span><span class="rs-why">${esc(why(r, other, D))}</span></a>`; };
        return `<section class="rs-people" style="--pc:${g.color}"><header><span class="rs-crest">${H().crest(g)}</span><h3>${esc(g.name)}</h3><small>${p.all.length} voted · average ${(p.all.reduce((s, r) => s + r.mean, 0) / p.all.length).toFixed(2)}</small></header>
          <div class="rs-two">${card(a, null, 1)}${b ? card(b, a, 2) : ""}</div>
          ${p.alts.length ? `<p class="rs-alts"><b>Next in line:</b> ${p.alts.map((r) => `<a href="#/characters/${r.path.join("/")}">${esc(r.name)}</a> <small>${r.mean.toFixed(1)}${b && r.mean === b.mean && r.min === b.min ? " tied" : ""}</small>`).join(" · ")}</p>` : ""}</section>`; }).join("")}</div>`;
  }

  function byPeople(D, rs) {
    const rowsG = H().GROUPS.map((g) => { const l = rs.filter((r) => r.g.id === g.id); if (!l.length) return null;
      const cnt = { "-1": 0, 1: 0, 2: 0 }; l.forEach((r) => r.v.forEach((s) => s != null && cnt[s]++)); const tot = cnt[-1] + cnt[1] + cnt[2];
      return { g, l, cnt, tot, mean: l.reduce((s, r) => s + r.mean, 0) / l.length, art: l.filter((r) => r.art).length }; }).filter(Boolean).sort((a, b) => b.mean - a.mean);
    return `<h2 class="lh">How each people did</h2><p class="muted">Every vote cast on that people's characters, split into super likes, likes and dislikes. Sorted by average score (dislike −1, like 1, super like 2).</p>
      <div class="rs-bars" role="table" aria-label="Votes by people"><div class="rs-legend" aria-hidden="true">${[2, 1, -1].map((s) => `<span style="--c:${VOTE[s].c}"><i></i>${VOTE[s].g} ${VOTE[s].w}</span>`).join("")}</div>
        ${rowsG.map((r) => `<div class="rs-bar" role="row"><span class="rs-bl" role="cell">${esc(r.g.name)}<small>${r.l.length} characters · ${r.art} with art</small></span>
          <span class="rs-track" role="cell">${[2, 1, -1].map((s) => (r.cnt[s] ? `<i style="--c:${VOTE[s].c};flex:${r.cnt[s]}" title="${r.cnt[s]} ${VOTE[s].w.toLowerCase()}s">${r.cnt[s] / r.tot > 0.07 ? r.cnt[s] : ""}</i>` : "")).join("")}</span><span class="rs-avg" role="cell">${r.mean.toFixed(2)}</span></div>`).join("")}</div>`;
  }

  function matrix(D, rs) {
    if (D.voters.length < 2) return "";
    const A = D.voters[0].name, B = D.voters[1].name, vals = [2, 1, -1], cell = (a, b) => rs.filter((r) => r.v[0] === a && r.v[1] === b);
    return `<h2 class="lh">Where ${esc(A)} and ${esc(B)} agree</h2><p class="muted">Each square is the characters that got that pair of votes. The diagonal is agreement. ${esc(A)} gave ${rs.filter((r) => r.v[0] === 2).length} super likes and ${esc(B)} gave ${rs.filter((r) => r.v[1] === 2).length}. Click a square to list the characters.</p>
      <div class="rs-matrix" role="grid" aria-label="Agreement between ${esc(A)} and ${esc(B)}"><span class="rs-corner">${esc(A)} ↓ · ${esc(B)} →</span>${vals.map((b) => `<span class="rs-mh" style="--c:${VOTE[b].c}">${VOTE[b].g} ${VOTE[b].w}</span>`).join("")}
        ${vals.map((a) => `<span class="rs-mh side" style="--c:${VOTE[a].c}">${VOTE[a].g} ${VOTE[a].w}</span>${vals.map((b) => { const l = cell(a, b), hot = a === b; return `<button class="rs-cell${hot ? " diag" : ""}" data-cell="${a},${b}" ${l.length ? "" : "disabled"} aria-label="${esc(A)} ${VOTE[a].w}, ${esc(B)} ${VOTE[b].w}: ${l.length} characters"><b>${l.length}</b></button>`; }).join("")}`).join("")}</div>
      <div class="panel rs-cellist" id="rs-cellist" hidden></div>`;
  }

  function splits(D, rs) {
    const l = rs.filter((r) => r.n > 1 && Math.max(...r.v.filter((x) => x != null)) - Math.min(...r.v.filter((x) => x != null)) >= 3).sort((a, b) => a.name.localeCompare(b.name));
    if (!l.length) return "";
    return `<h2 class="lh">Worth a conversation</h2><p class="muted">One voter disliked these and another super liked them. They are the characters to talk through before anyone draws more art.</p>
      <div class="rs-split">${l.map((r) => `<a class="panel rs-sp" href="#/characters/${r.path.join("/")}"><b>${esc(r.name)}</b><small>${esc(r.g.name)} · ${esc(TYPE_NAME(r.type))}</small><span>${r.v.map((s, i) => `<em>${esc(D.voters[i].name)} ${vtag(s)}</em>`).join("")}</span></a>`).join("")}</div>`;
  }

  function comments(D) {
    if (!D.comments.length) return "";
    const nm = (id) => { const c = H().allCharacters().find((x) => x.l.id === id); return c ? c.l.name : id; };
    return `<h2 class="lh">What people wrote</h2><div class="rs-cm">${D.comments.map((c) => `<p class="panel"><b>${esc(nm(c.id))}</b> ${VOTE[c.v] ? vtag(c.v) : ""}<span>${esc(c.t)}</span><small>${esc(c.by)}</small></p>`).join("")}</div>`;
  }

  function table(D, rs) {
    const { GROUPS } = H();
    let l = rs.filter((r) => (filter === "all" || r.g.id === filter) && (!q || r.name.toLowerCase().includes(q.toLowerCase())));
    const keys = { mean: (a, b) => better(a, b), name: (a, b) => a.name.localeCompare(b.name), people: (a, b) => a.g.name.localeCompare(b.g.name) || better(a, b) };
    l = l.slice().sort(keys[sortBy] || keys.mean);
    return `<h2 class="lh">Every character, ranked</h2>
      <div class="rs-tools"><div class="v-chips" id="rs-chips"><button class="rf${filter === "all" ? " sel" : ""}" data-rf="all">Everyone · ${rs.length}</button>${GROUPS.map((g) => `<button class="rf${filter === g.id ? " sel" : ""}" data-rf="${g.id}">${esc(g.name)} · ${rs.filter((r) => r.g.id === g.id).length}</button>`).join("")}</div>
        <label class="rs-search"><span>Search</span><input id="rs-q" type="search" value="${esc(q)}" placeholder="Find a character"></label>
        <label class="rs-search"><span>Sort</span><select id="rs-sort"><option value="mean"${sortBy === "mean" ? " selected" : ""}>Best score</option><option value="name"${sortBy === "name" ? " selected" : ""}>Name</option><option value="people"${sortBy === "people" ? " selected" : ""}>People</option></select></label></div>
      <div class="rs-tablewrap"><table class="rs-table"><thead><tr><th>#</th><th>Character</th><th>People</th><th>Type</th>${D.voters.map((v) => `<th>${esc(v.name)}</th>`).join("")}<th>Score</th><th>Art</th></tr></thead>
        <tbody>${l.map((r, i) => `<tr><td>${i + 1}</td><td><a href="#/characters/${r.path.join("/")}">${esc(r.name)}</a></td><td>${esc(r.g.name)}</td><td>${esc(TYPE_NAME(r.type))}</td>${r.v.map((s) => `<td>${vtag(s)}</td>`).join("")}<td><b>${r.mean.toFixed(2)}</b></td><td>${r.art ? "Done" : "To do"}</td></tr>`).join("")}</tbody></table></div>`;
  }

  function addVoter() {
    return `<section class="panel rs-add"><h3>Add another voter</h3><p class="muted">Anyone can vote on the deck and export a spreadsheet. Drop that file here and the MVP picks recalculate. It stays in this browser only. To make it permanent for everyone, send the file to Claude and it goes into the site's data.</p>
      <div class="v-actions"><label class="btn ghost rs-file">Add a spreadsheet<input type="file" id="rs-file" accept=".xlsx,.csv"></label>${extra.voters.length ? '<button class="btn ghost" id="rs-clear">Remove added voters</button>' : ""}</div><p class="small" id="rs-msg"></p></section>`;
  }

  // the three tabs shared by the report, the voting deck and the MVP page
  window.voteHead = function (active) {
    const T = [["report", "Report", "#/vote"], ["deck", "Voting interface", "#/vote/deck"], ["mvp", "MVP", "#/vote/mvp"]];
    return `<div class="page-head"><div class="title"><div class="eyebrow">Character vote</div><h1>${active === "mvp" ? "The MVP roster" : active === "deck" ? "Cast your votes" : "Results"}</h1></div></div>
      <nav class="st-tabs" role="tablist" aria-label="Vote sections">${T.map((t) => `<a role="tab" class="st-tab${t[0] === active ? " on" : ""}" href="${t[2]}" aria-selected="${t[0] === active}"><span>${t[1]}</span></a>`).join("")}</nav>`;
  };
  window.resultsView = function () {
    loadExtra();
    const D = dataset(), rs = rows(D);
    return `${window.voteHead("report")}
      <div class="rs" id="rs">${rs.length ? head(D, rs) + mvp(D, rs) + byPeople(D, rs) + matrix(D, rs) + splits(D, rs) + comments(D) + `<div id="rs-table">${table(D, rs)}</div>` + addVoter() : `<p class="muted">No votes loaded yet.</p>` + addVoter()}</div>`;
  };

  /* ---------- reading an added spreadsheet ---------- */
  function sheetJS() { return new Promise((res, rej) => { if (window.XLSX) return res(); const s = document.createElement("script"); s.src = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"; s.onload = res; s.onerror = rej; document.head.appendChild(s); }); }
  async function readFile(f) {
    await sheetJS(); const wb = XLSX.read(await f.arrayBuffer()), ws = wb.Sheets.Votes || wb.Sheets[wb.SheetNames[0]];
    const rowsX = XLSX.utils.sheet_to_json(ws, { header: 1, defval: "" }).slice(1).filter((r) => r[2]);
    if (!rowsX.length) throw new Error("No votes found in that file. Use a spreadsheet exported from the vote page.");
    const score = { "Super Like": 2, "Like": 1, "Dislike": -1 }, name = (rowsX.find((r) => r[0]) || [])[0] || f.name.replace(/\.[^.]+$/, "").replace(/^character-votes-/, "").replace(/-\d{4}-\d{2}-\d{2}$/, "") || "Voter";
    return { name: String(name), votes: Object.fromEntries(rowsX.filter((r) => score[r[6]] != null).map((r) => [r[2], score[r[6]]])), comments: rowsX.filter((r) => r[8]).map((r) => ({ id: r[2], by: String(name), v: score[r[6]] || 0, t: String(r[8]) })) };
  }

  window.resultsInit = function () {
    const root = document.getElementById("app"), redraw = () => { document.getElementById("rs").outerHTML = window.resultsView().match(/<div class="rs"[\s\S]*$/)[0]; };
    const retable = () => { const D = dataset(); document.getElementById("rs-table").innerHTML = table(D, rows(D)); };
    const click = (e) => {
      const rf = e.target.closest("[data-rf]"); if (rf) { filter = rf.dataset.rf; retable(); return; }
      const c = e.target.closest("[data-cell]"); if (c) {
        const [a, b] = c.dataset.cell.split(",").map(Number), D = dataset(), l = rows(D).filter((r) => r.v[0] === a && r.v[1] === b).sort(better), box = document.getElementById("rs-cellist");
        document.querySelectorAll(".rs-cell").forEach((x) => x.classList.toggle("on", x === c));
        box.hidden = false; box.innerHTML = `<h3>${D.voters[0].name}: ${VOTE[a].w} · ${D.voters[1].name}: ${VOTE[b].w} <small>(${l.length})</small></h3><p>${l.map((r) => `<a href="#/characters/${r.path.join("/")}">${esc(r.name)}</a> <small>${esc(r.g.name)}</small>`).join(" · ")}</p>`; return;
      }
      if (e.target.id === "rs-clear") { extra = { voters: [], votes: {}, comments: [] }; saveExtra(); redraw(); }
    };
    const input = (e) => { if (e.target.id === "rs-q") { q = e.target.value; const pos = e.target.selectionStart; retable(); const n = document.getElementById("rs-q"); n.focus(); n.setSelectionRange(pos, pos); } };
    const change2 = async (e) => {
      if (e.target.id === "rs-sort") { sortBy = e.target.value; retable(); return; }
      if (e.target.id !== "rs-file") return;
      const f = e.target.files[0], msg = document.getElementById("rs-msg"); if (!f) return;
      try {
        msg.textContent = "Reading…"; const r = await readFile(f); let nm = r.name, k = 2; const taken = () => dataset().voters.some((v) => v.name === nm);
        while (taken()) nm = r.name + " " + k++;
        const idx = extra.voters.length; extra.voters.push({ id: nm.toLowerCase(), name: nm, n: Object.keys(r.votes).length, at: new Date().toISOString().slice(0, 10) });
        Object.entries(r.votes).forEach(([id, s]) => { const v = (extra.votes[id] = extra.votes[id] || []); while (v.length < idx) v.push(null); v[idx] = s; });
        extra.comments.push(...r.comments.map((c) => Object.assign(c, { by: nm }))); saveExtra(); redraw();
      } catch (er) { msg.textContent = "Could not read that file: " + er.message; }
    };
    root.addEventListener("click", click); root.addEventListener("input", input); root.addEventListener("change", change2);
    window.__voteCleanup = () => { root.removeEventListener("click", click); root.removeEventListener("input", input); root.removeEventListener("change", change2); };
  };
})();
