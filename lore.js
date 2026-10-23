// THE LORE PAGE (#/lore): the unified bible, a map, the chain of command, the named cast and the two source documents.
// Data: data-lore.js (unified), data-lore-source.js (verbatim sources). Helpers from app.js via window.NDAH.
(function () {
  const TABS = [["bible", "The Bible"], ["map", "Map"], ["power", "Chain of command"], ["cast", "Cast"], ["peoples", "Our peoples"], ["threads", "Open threads"], ["sources", "Source documents"]];
  const TRIBE_COLOR = { human: "#d9a521", vampire: "#8a8a99", were: "#b4532a", monster: "#6fb06f", mummy: "#d9a521" };
  const srcBadge = (s) => (s ? `<span class="src s-${s.replace(/[^SXA]/g, "").slice(-1)}" title="${s.includes("A") ? "Added to bridge the sources (needs approval)" : s.includes("X") ? "From your Characters sheet" : "From your World Outline"}">${s}</span>` : "");

  function bible() {
    const { esc } = window.NDAH;
    return `<div class="lore-lede panel"><div class="eyebrow">The world in one paragraph</div><p>${esc(LORE.logline)}</p></div>
      <div class="legend">${Object.entries(LORE.meta.legend).map(([k, v]) => `<span><b class="src s-${k}">${k}</b>${esc(v)}</span>`).join("")}</div>
      <h2 class="lh">Five pillars</h2>
      <div class="pillars">${LORE.pillars.map((p, i) => `<div class="pillar"><i>${i + 1}</i><h3>${esc(p.title)} ${srcBadge(p.src)}</h3><p>${esc(p.text)}</p></div>`).join("")}</div>
      <h2 class="lh">Timeline</h2>
      <ol class="timeline">${LORE.timeline.map((t) => `<li><div class="when">${esc(t.when)}</div><div class="what"><h3>${esc(t.title)} ${srcBadge(t.src)}</h3><p>${esc(t.text)}</p></div></li>`).join("")}</ol>
      <h2 class="lh">Reconciling the two sources with the game</h2>
      <div class="recon">${LORE.reconcile.map((r) => `<div class="panel"><h3>${esc(r.q)} ${srcBadge(r.src)}</h3><p>${esc(r.a)}</p></div>`).join("")}</div>
      <h2 class="lh">Glossary</h2>
      <dl class="gloss">${LORE.glossary.map(([k, v]) => `<div><dt>${esc(k)}</dt><dd>${esc(v)}</dd></div>`).join("")}</dl>`;
  }

  function map() {
    const { esc, GROUPS, crest } = window.NDAH;
    const col = (p) => (GROUPS.find((g) => g.id === p) || {}).color || "#999";
    const roads = [["dim", "imhotep"], ["imhotep", "spires"], ["imhotep", "coast"], ["imhotep", "wilds"], ["wilds", "block"], ["block", "ramuset"], ["imhotep", "pyramid"], ["spires", "undercity"], ["coast", "deadair"]];
    const P = Object.fromEntries(LORE.places.map((p) => [p.id, p]));
    return `<div class="map-wrap"><div class="map-box">
      <svg viewBox="0 0 100 100" class="lore-map" role="img" aria-label="Map of the world">
        <defs><pattern id="grid" width="5" height="5" patternUnits="userSpaceOnUse"><path d="M5 0H0V5" fill="none" stroke="rgba(255,255,255,.06)" stroke-width=".2"/></pattern></defs>
        <rect width="100" height="100" fill="url(#grid)"/>
        ${roads.map(([a, b]) => `<line class="road" x1="${P[a].x}" y1="${P[a].y}" x2="${P[b].x}" y2="${P[b].y}"/>`).join("")}
        ${LORE.places.map((p) => `<g class="pin ${p.kind}" data-place="${p.id}" style="--c:${col(p.people)}" tabindex="0" role="button" aria-label="${esc(p.name)}" transform="translate(${p.x} ${p.y})">
          <circle class="halo" r="${p.kind === "territory" ? 7 : 3.6}"/><circle class="dot" r="1.8"/><text y="${p.kind === "territory" ? 11.4 : 6.6}" text-anchor="${p.x < 26 ? "start" : p.x > 74 ? "end" : "middle"}" x="${p.x < 26 ? -7 : p.x > 74 ? 7 : 0}">${esc(p.name.replace(/ \(.*\)/, "").replace(" and the Scrapwild", ""))}</text></g>`).join("")}
      </svg></div>
      <aside class="map-detail panel" id="map-detail"><div class="eyebrow">Select a place</div><p class="muted">Click a pin to read what the lore says about it and which of our peoples live there.</p></aside></div>
      <p class="muted small">Layout is schematic: it shows who borders whom and how the roads run, not true distances. The Black Pyramid is south, the Block and the Temple of Ramuset are north, and the Temple of Imhotep sits in the neutral middle.</p>`;
  }

  function power() {
    const { esc, GROUPS, crest } = window.NDAH;
    return `<p class="muted">${esc(LORE.rank_note)}</p>
      <div class="chain">${LORE.tribes.map((t) => { const g = GROUPS.find((x) => x.id === t.people); return `<div class="tribe" style="--c:${g.color}">
        <header>${crest(g)}<div><h3>${esc(t.name)}</h3><small>${esc(t.territory)}</small></div></header>
        <div class="rung head"><em>${esc(t.head)}</em><b>${esc(t.head_name)}</b></div>
        <div class="link"></div>
        <div class="rung"><em>${esc(t.council)}</em><div class="chips">${t.senate.map((n) => `<span class="${LORE_SRC.cast.find((c) => c.name.toLowerCase() === n.toLowerCase())?.status === "DEAD" ? "dead" : ""}">${esc(n)}</span>`).join("")}</div></div>
        <div class="link"></div>
        <div class="rung mystic"><em>${esc(t.mystics)} (Mystics)</em><div class="chips">${t.elders.map((n) => `<span class="dead">${esc(n)}</span>`).join("")}</div></div></div>`; }).join("")}</div>
      <p class="legend-line"><span class="chip-demo dead"></span> Dead. All nine Mystics of all three tribes are dead.</p>
      <h2 class="lh">Moving up the ranks</h2>
      <ol class="ladder">${LORE.ascension.map((a) => `<li class="${a.step === 5 ? "fail" : a.step === 4 ? "pass" : ""}"><i>${a.step}</i><div><h3>${esc(a.title)} ${srcBadge(a.src)}</h3><p>${esc(a.text)}</p></div></li>`).join("")}</ol>`;
  }

  function cast(filter) {
    const { esc, GROUPS } = window.NDAH;
    const tribes = ["all", "human", "vampire", "were", "monster", "mummy"];
    const f = filter || "all";
    const list = LORE.cast.filter((c) => f === "all" || c.tribe === f);
    // relationship graph: fixed layout by cluster
    const pos = { ezekiel: [30, 22], anna: [18, 40], josh: [30, 58], daniel: [14, 74], tom: [46, 46], dante: [60, 30], sullivan: [44, 12], vincent: [62, 56], morgan: [76, 70], erik: [84, 24], greta: [92, 40], nicholias: [78, 40], stein: [14, 8], kristoff: [4, 20], ramuset: [12, 54], thothra: [4, 40] };
    const nameOf = (id) => (LORE.cast.find((c) => c.id === id) || {}).name || id.charAt(0).toUpperCase() + id.slice(1);
    const tribeOf = (id) => (LORE.cast.find((c) => c.id === id) || { tribe: id === "dante" || id === "sullivan" ? "human" : "human" }).tribe;
    const ids = [...new Set(LORE.relations.flat().filter((x) => pos[x]))];
    return `<div class="chips-row">${tribes.map((t) => `<button class="rf ${f === t ? "sel" : ""}" data-lorecast="${t}">${t === "all" ? "Everyone" : t[0].toUpperCase() + t.slice(1)}</button>`).join("")}</div>
      <div class="cast-grid">${list.map((c) => { const g = GROUPS.find((x) => x.id === c.people); return `<article class="cast-card ${c.status}" style="--c:${TRIBE_COLOR[c.tribe] || "#999"}">
        <header><h3>${esc(c.name)}</h3><span class="rank">${esc(c.rank)}${c.age ? " · " + esc(c.age) : ""}</span></header>
        ${c.powers ? `<div class="pow">${esc(c.powers.replace(/"/g, ""))}</div>` : ""}
        <p>${esc(c.role)}</p>
        ${c.notes ? `<small class="muted">${esc(c.notes)}</small>` : ""}
        ${c.kit ? `<details><summary>Kit</summary><p>${esc(c.kit)}</p></details>` : ""}
        <footer><a href="#/characters/${c.people}">${esc(g.name)} › ${esc(c.cls)} › ${esc(c.sub)}</a> ${srcBadge(c.src)}</footer></article>`; }).join("")}</div>
      <h2 class="lh">Who is connected to whom</h2>
      <div class="graph-box"><svg viewBox="0 0 100 82" class="graph" role="img" aria-label="Relationship graph">
        ${LORE.relations.filter(([a, b]) => pos[a] && pos[b]).map(([a, b, l]) => `<g class="edge"><line x1="${pos[a][0]}" y1="${pos[a][1]}" x2="${pos[b][0]}" y2="${pos[b][1]}"/><text x="${(pos[a][0] + pos[b][0]) / 2}" y="${(pos[a][1] + pos[b][1]) / 2 - 1}" text-anchor="middle">${esc(l)}</text></g>`).join("")}
        ${ids.map((id) => `<g class="node" style="--c:${TRIBE_COLOR[tribeOf(id)] || "#999"}" transform="translate(${pos[id][0]} ${pos[id][1]})"><circle r="2.6"/><text y="5.4" text-anchor="middle">${esc(nameOf(id))}</text></g>`).join("")}
      </svg></div>
      <h2 class="lh">The dead</h2>
      <div class="fallen">${LORE.fallen.map((x) => `<span style="--c:${TRIBE_COLOR[x.tribe]}"><b>${esc(x.name)}</b><em>${esc(x.note)}</em></span>`).join("")}</div>`;
  }

  function peoples() {
    const { esc, GROUPS, crest } = window.NDAH;
    return `<p class="muted">Where each of the game's eight peoples, and each class and subclass, stands in this world.</p>` + GROUPS.map((g) => { const pl = LORE.placements[g.id]; return `<section class="plc" style="--p:${g.color}">
      <header>${crest(g)}<div><h3><a href="#/characters/${g.id}">${esc(g.name)}</a></h3><small>${esc(pl.place)}</small></div></header><p>${esc(pl.text)}</p>
      <ul>${g.subs.map((s) => `<li><b>${esc(s.name)}</b><span class="muted"> · ${s.subs.map((l) => esc(l.name)).join(", ")}</span><br>${esc(pl.subs[s.id] || "")}</li>`).join("")}</ul></section>`; }).join("");
  }

  function threads() {
    const { esc } = window.NDAH;
    return `<div class="threads">${LORE.threads.map((t, i) => `<article class="thread"><i>${String(i + 1).padStart(2, "0")}</i><div><h3>${esc(t.q)} ${srcBadge(t.src)}</h3><p>${esc(t.text)}</p></div></article>`).join("")}</div>`;
  }

  function sources() {
    const { esc } = window.NDAH;
    const st = (s) => (s === "DEAD" ? `<span class="pill dead">dead</span>` : "");
    return `<div class="dl-row"><a class="btn" href="lore/New Dark Ages - World Outline.docx" download>World Outline (.docx)</a><a class="btn" href="lore/New Dark Ages - Characters.xlsx" download>Characters sheet (.xlsx)</a><a class="btn" href="LORE-BIBLE.md" download>Unified Lore Bible (.md)</a></div>
      <h2 class="lh">World Outline <span class="muted small">verbatim, typos kept</span></h2>
      <div class="outline">${LORE_SRC.outline.map((s) => `<section><h3>${esc(s.title)}</h3>${s.paras.map((p) => `<p>${esc(p)}</p>`).join("")}</section>`).join("")}</div>
      <h2 class="lh">Characters sheet <span class="muted small">verbatim</span></h2>
      <div class="tbl-wrap"><table class="tbl"><thead><tr><th>Species</th><th>Class</th><th>Name</th><th>Age</th><th>Status</th><th>Notes</th><th>Powers</th><th>Items</th></tr></thead><tbody>${LORE_SRC.cast.map((c) => `<tr class="${c.status === "DEAD" ? "dead" : ""}"><td>${esc(c.species)}</td><td>${esc(c.class)}</td><td><b>${esc(c.name)}</b></td><td>${esc(c.age)}</td><td>${st(c.status)}</td><td>${esc(c.notes)}</td><td>${esc(c.powers)}</td><td>${esc(c.items.join(", "))}</td></tr>`).join("")}</tbody></table></div>`;
  }

  window.loreState = { cast: "all" };
  window.loreView = function (tab) {
    const t = TABS.find((x) => x[0] === tab) ? tab : "bible";
    const body = { bible, map, power, cast: () => cast(window.loreState.cast), peoples, threads, sources }[t]();
    return `<div class="page-head"><div class="title"><div class="eyebrow">Reference</div><h1>Lore</h1></div></div>
      <nav class="lore-tabs" aria-label="Lore sections">${TABS.map(([id, n]) => `<a class="${id === t ? "on" : ""}" href="#/lore/${id}">${n}</a>`).join("")}</nav>
      <div class="lore-body" data-tab="${t}">${body}</div>`;
  };
  window.loreInit = function () {
    const box = document.getElementById("map-detail"); if (!box) return;
    const { esc, GROUPS, crest } = window.NDAH;
    const show = (id) => {
      const p = LORE.places.find((x) => x.id === id), g = GROUPS.find((x) => x.id === p.people);
      document.querySelectorAll(".pin").forEach((n) => n.classList.toggle("on", n.dataset.place === id));
      box.innerHTML = `<div class="eyebrow">${esc(p.kind)}</div><h3>${esc(p.name)} ${srcBadge(p.src)}</h3><p>${esc(p.text)}</p><a class="plink" href="#/characters/${g.id}" style="--p:${g.color}">${crest(g)}<span>${esc(g.name)}</span></a>`;
    };
    document.querySelectorAll(".pin").forEach((n) => { n.addEventListener("click", () => show(n.dataset.place)); n.addEventListener("keydown", (e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); show(n.dataset.place); } }); });
    show("block");
  };
})();
