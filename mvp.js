// THE MVP SHOWCASE (#/vote/mvp): only the chosen launch roster, three per people, shown off. Data: data-mvp.js (window.MVP).
// Art status, abilities and colors are read live from the roster, so the page stays right as art lands.
(function () {
  const H = () => window.NDAH;
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const VOTE = { "-1": ["✕", "Dislike", "#e0584f"], 1: ["♥", "Like", "#4fb8d6"], 2: ["★", "Super like", "#f0c24b"] };
  const TYPE = (k) => (window.TYPES && TYPES[k] ? TYPES[k].name : k);
  const title = (a) => String(a || "").replace(/:.*/, "");
  const vote = (id) => { const d = window.VOTE_DATA; return d && d.votes[id] ? d.votes[id].map((s, i) => [d.voters[i].name, s]) : []; };
  const chips = (id) => vote(id).map(([n, s]) => (s == null ? "" : `<span class="mv-vote" style="--c:${VOTE[s][2]}" title="${esc(n)}: ${VOTE[s][1]}"><b aria-hidden="true">${VOTE[s][0]}</b>${esc(n)}</span>`)).join("");
  let only = "all";

  function resolve() {
    const byId = Object.fromEntries(H().allCharacters().map((c) => [c.l.id, c])), M = window.MVP;
    return H().GROUPS.map((g) => ({ g, slots: (M.picks[g.id] || []).map((p) => Object.assign({}, p, p.id ? { c: byId[p.id], art: !!H().NODE_ART[p.id] } : { cands: (p.candidates || []).map((i) => byId[i]).filter(Boolean) })) })).filter((x) => x.slots.length);
  }

  function card(s, g, k) {
    const c = s.c, l = c.l, art = H().NODE_ART[l.id], m = (window.CHAR_META || {})[l.id] || {}, st = s.art ? ["ready", "Art ready"] : ["todo", "Art to make"];
    const media = art ? `<span class="mv-bg" style="background-image:url('${art.bg}')"></span><img class="mv-fig" src="${art.src}" alt="${esc(l.name)}" loading="lazy">` : `<span class="mv-poster">${H().poster(g, l, "big")}</span><span class="mv-concept"><b>Concept</b>${esc(l.look)}</span>`;
    return `<a class="mv-card ${st[0]}" href="#/characters/${c.path.join("/")}" style="--pc:${g.color};--c1:${l.pal[0]};--c2:${l.pal[1]};--c3:${l.pal[2]}">
      <span class="mv-media">${media}<b class="mv-n">${k + 1}</b><em class="mv-st ${st[0]}">${st[1]}</em>${s.isNew ? '<em class="mv-st new">New</em>' : s.redesign ? '<em class="mv-st new">Redesigned</em>' : ""}</span>
      <span class="mv-body"><span class="mv-name">${esc(l.name)}</span><span class="mv-quip">“${esc(l.tagline)}”</span>
        <span class="mv-pills"><i>${esc(TYPE(m.type))}</i><i>${l.role === "combat" ? "Combat" : "Support"}</i>${m.size ? `<i>${esc(m.size)}</i>` : ""}${m.move ? `<i>${esc(m.move)}</i>` : ""}</span>
        <span class="mv-sum">${esc(l.summary)}</span>
        <span class="mv-moves">${(l.abilities || []).map((a) => `<b>${esc(title(a))}</b>`).join("")}</span>
        <span class="mv-pal" aria-label="Colors">${l.pal.map((x) => `<i style="background:${x}"></i>`).join("")}</span>
        ${s.note ? `<span class="mv-note">${esc(s.note)}</span>` : ""}<span class="mv-votes">${chips(l.id)}</span></span></a>`;
  }
  function tbd(s, g, k) {
    return `<div class="mv-card tbd" style="--pc:${g.color}"><span class="mv-media"><span class="mv-q">?</span><b class="mv-n">${k + 1}</b><em class="mv-st todo">${s.concept ? "New concept" : "Open slot"}</em></span>
      <span class="mv-body"><span class="mv-name">${esc(s.tbd)}</span><span class="mv-sum">${esc(s.ask)}</span><span class="mv-cands"><b>Candidates from the vote</b>
        ${s.cands.map((c) => { const art = H().NODE_ART[c.l.id]; return `<a href="#/characters/${c.path.join("/")}">${art ? `<img src="${art.src}" alt="">` : '<i class="mv-noimg"></i>'}<span>${esc(c.l.name)}${art ? "" : " <small>no art</small>"}<span class="mv-votes">${chips(c.l.id)}</span></span></a>`; }).join("")}</span></span></div>`;
  }

  function overview(R) {
    const slots = R.flatMap((r) => r.slots), real = slots.filter((s) => s.c), ready = real.filter((s) => s.art).length, open = slots.filter((s) => !s.c).length;
    const types = {}; real.forEach((s) => { const t = TYPE(((window.CHAR_META || {})[s.c.l.id] || {}).type); types[t] = (types[t] || 0) + 1; });
    const stat = (n, l) => `<div class="mv-stat"><b>${n}</b><span>${l}</span></div>`;
    return `<div class="mv-hero"><div><div class="eyebrow">The launch roster</div><h2>24 characters. 8 peoples. 3 each.</h2><p class="muted">The characters Jacob and Mike chose to launch with, picked from the vote and from what each people needs. Only these are shown on this page.</p></div>
      <div class="mv-stats">${stat(real.length, "chosen")}${stat(ready, "with finished art")}${stat(real.length - ready, "art to make")}${stat(open, "slots to decide")}</div></div>
      <div class="mv-prog" role="img" aria-label="${ready} of 24 ready">${R.map((r) => `<div class="mv-pg" style="--pc:${r.g.color}"><span>${esc(r.g.name)}</span><span class="mv-pips">${r.slots.map((s) => `<i class="${!s.c ? "open" : s.art ? "on" : ""}" title="${esc(s.c ? s.c.l.name : s.tbd)}"></i>`).join("")}</span></div>`).join("")}</div>
      <div class="mv-mix"><b>Mix of jobs</b>${Object.entries(types).sort((a, b) => b[1] - a[1]).map(([t, n]) => `<span>${esc(t)} <i>${n}</i></span>`).join("")}</div>`;
  }

  window.mvpView = function () {
    const R = resolve(), M = window.MVP, lore = window.LORE && LORE.placements || {};
    return `<div class="mv" id="mv">${overview(R)}
      <nav class="mv-jump" aria-label="Peoples"><button class="rf${only === "all" ? " sel" : ""}" data-mv="all">All peoples</button>${R.map((r) => `<button class="rf${only === r.g.id ? " sel" : ""}" data-mv="${r.g.id}">${esc(r.g.name)}</button>`).join("")}</nav>
      <div class="mv-list">${R.map((r) => { const pl = lore[r.g.id]; return `<section class="mv-people${only !== "all" && only !== r.g.id ? " hide" : ""}" id="mv-${r.g.id}" style="--pc:${r.g.color}"><header><span class="mv-crest">${H().crest(r.g)}</span><div><h3>${esc(r.g.name)}</h3>${pl ? `<p>${esc(pl.place)}. ${esc((pl.text || "").split(/(?<=[.!?])\s/)[0])}</p>` : ""}</div></header>
        <div class="mv-row">${r.slots.map((s, k) => (s.c ? card(s, r.g, k) : tbd(s, r.g, k))).join("")}</div></section>`; }).join("")}</div>
      <div class="mv-foot"><section class="panel"><h3>What changed from the roster</h3><ul>${M.changes.map((c) => `<li><b>${esc(c.t)}.</b> ${esc(c.d)}</li>`).join("")}</ul></section>
        <section class="panel"><h3>Still open</h3><ul>${M.open.map((o) => `<li>${esc(o)}</li>`).join("")}</ul><p class="muted small">Art to make before launch: ${R.flatMap((r) => r.slots).filter((s) => s.c && !s.art).map((s) => esc(s.c.l.name)).join(", ") || "none"}.</p></section></div></div>`;
  };

  window.mvpInit = function () {
    const root = document.getElementById("app");
    const click = (e) => { const b = e.target.closest("[data-mv]"); if (!b) return; only = b.dataset.mv; document.querySelectorAll("[data-mv]").forEach((x) => x.classList.toggle("sel", x === b)); document.querySelectorAll(".mv-people").forEach((s) => s.classList.toggle("hide", only !== "all" && s.id !== "mv-" + only)); };
    root.addEventListener("click", click);
    window.__voteCleanup = () => root.removeEventListener("click", click);
  };
})();
