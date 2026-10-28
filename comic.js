// THE PREQUEL COMIC (#/comic): pitch and canon check, beat board, interactive storyboard with an animatic, cast, and share.
// Seed content: data-comic.js (window.COMIC). Edits live in this browser (localStorage) and travel by Export / Import (merged by id, newest edit wins).
(function () {
  const KEY = "nda-comic-v1";
  const C = () => window.COMIC, H = () => window.NDAH;
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const TABS = [["pitch", "Pitch and canon"], ["beats", "Story map"], ["board", "Storyboard"], ["cast", "Cast"], ["share", "Share"]];
  const PEOPLE = ["Jacob", "Mike", "Ben", "Claude"], WHO_COLOR = { Jacob: "#ff5fb0", Mike: "#6fe9ff", Ben: "#ffd60a", Claude: "#b69cff" };
  const STATUS = { idea: "Idea", draft: "Draft", locked: "Locked" };
  const KIND_COLOR = { human: "#d9a521", vampire: "#9a9ab8", were: "#c4693a", undead: "#6fb06f", ghost: "#8fcfe0", forest: "#5fae6a", eldritch: "#b83a7a", magic: "#7a4bd1" };
  const uid = (p) => p + Date.now().toString(36) + Math.random().toString(36).slice(2, 5);
  const clone = (x) => JSON.parse(JSON.stringify(x));
  let S = null, msg = "", play = null;

  /* ---------- state ---------- */
  function seedState() {
    const d = clone(C());
    return { me: "", tab: "pitch", issue: d.issues[0].id, page: d.issues[0].pages[0].id, panel: d.issues[0].pages[0].panels[0].id, gone: {}, answers: {}, cast: d.cast, added: [], issues: d.issues, notes: {}, rev: d.rev };
  }
  function foldSeed() {
    // anything new in the site's seed that this browser has not seen (and has not deleted) is added
    const d = C(); if (S.rev === d.rev) return;
    d.issues.forEach((si) => {
      let ci = S.issues.find((i) => i.id === si.id);
      if (!ci) { if (!S.gone[si.id]) S.issues.push(clone(si)); return; }
      si.pages.forEach((sp) => {
        let cp = ci.pages.find((p) => p.id === sp.id);
        if (!cp) { if (!S.gone[sp.id]) ci.pages.push(clone(sp)); return; }
        sp.panels.forEach((sn) => { if (!cp.panels.some((n) => n.id === sn.id) && !S.gone[sn.id]) cp.panels.push(clone(sn)); });
      });
    });
    d.cast.forEach((c) => { if (!S.cast.some((x) => x.id === c.id) && !S.gone[c.id]) S.cast.push(clone(c)); });
    S.rev = d.rev; save();
  }
  function load() {
    try { const d = JSON.parse(localStorage.getItem(KEY)); if (d && d.issues) S = Object.assign(seedState(), d); } catch {}
    if (!S) S = seedState();
    foldSeed();
  }
  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(S)); msg = ""; } catch { msg = "This browser could not save your last change. Export your work from the Share tab so it is not lost."; const m = document.getElementById("cm-msg"); if (m) m.textContent = msg; }
  }
  const issue = () => S.issues.find((i) => i.id === S.issue) || S.issues[0];
  const page = () => { const i = issue(); return i.pages.find((p) => p.id === S.page) || i.pages[0]; };
  const panel = () => { const p = page(); return p && (p.panels.find((n) => n.id === S.panel) || p.panels[0]); };
  const stamp = (o) => { o.u = Date.now(); o.by = S.me || o.by || ""; return o; };
  const layoutOf = (id) => { const l = C().layouts.find((x) => x[0] === id) || C().layouts[0]; return [l[0], l[1], l[2], l[3].replace(/"/g, "'")]; };
  const shotOf = (id) => C().shots.find((s) => s[0] === id) || C().shots[2];
  const allPanels = (i) => i.pages.flatMap((p) => p.panels.map((n) => ({ p, n })));
  const beatOf = (id) => C().beats.find((b) => b.id === id);

  /* ---------- panel picture ---------- */
  function figure(c, scale, i, n) {
    const art = c.art && H().NODE_ART[c.art];
    const col = KIND_COLOR[c.k] || "#c9c4b8", h = Math.min(105, scale * 62);
    const left = c.x != null ? c.x : ((i + 1) * 100) / (n + 1);
    const body = art ? `<img src="${art.src}" alt="">` : `<svg viewBox="0 0 40 60" aria-hidden="true"><g fill="${col}" stroke="#000" stroke-width="1.6" stroke-linejoin="round">${c.k === "were" ? '<path d="M12 12 L14 2 L19 9 Z M28 12 L26 2 L21 9 Z"/>' : ""}<circle cx="20" cy="14" r="8"/><path d="M4 60 C4 36 10 28 20 28 C30 28 36 36 36 60 Z"/>${c.k === "vampire" ? '<path d="M8 30 L20 40 L32 30 L34 44 L6 44 Z" fill="#111"/>' : ""}</g></svg>`;
    return `<span class="cm-fig" style="left:${left}%;height:${h}%;--k:${col}">${body}<em>${esc(c.n)}</em></span>`;
  }
  function thumb(n, opts = {}) {
    const sh = shotOf(n.shot), mood = C().moods.find((m) => m[0] === n.mood), chars = n.chars || [];
    const bg = n.img ? `url('${n.img}')` : n.bg ? `url('${n.bg}')` : "none";
    const figs = sh[0] === "insert" ? `<span class="cm-obj">${esc((n.action || "").slice(0, 60) || "object")}</span>` : chars.map((c, i) => figure(c, sh[2], i, chars.length)).join("");
    const text = n.caption ? `<span class="cm-cap">${esc(n.caption.split("\n")[0])}</span>` : "";
    const say = n.dialogue ? `<span class="cm-say">${esc(n.dialogue.split("\n")[0].slice(0, opts.big ? 140 : 54))}</span>` : "";
    return `<div class="cm-pic shot-${sh[0]}" style="--bg:${bg};--mood:${mood && mood[2] ? mood[2] : "transparent"}"><span class="cm-bgl"></span><span class="cm-tint"></span>${figs}${text}${say}${n.sfx ? `<span class="cm-sfx">${esc(n.sfx)}</span>` : ""}<b class="cm-shot">${esc(sh[1])}</b></div>`;
  }

  /* ---------- views ---------- */
  window.comicView = function (t) {
    if (!S) load();
    if (t && TABS.some((x) => x[0] === t)) S.tab = t;
    return `<div class="page-head"><div class="title"><div class="eyebrow">Comic book one</div><h1>The Prequel</h1></div></div>
      <div class="st-tabs" role="tablist">${TABS.map((x) => `<button role="tab" class="st-tab${S.tab === x[0] ? " on" : ""}" data-ct="${x[0]}"><span>${x[1]}</span></button>`).join("")}</div>
      <p class="muted small" id="cm-msg">${esc(msg)}</p><div id="cm-body">${body()}</div><div id="cm-play"></div>`;
  };
  const body = () => ({ pitch, beats, board, cast, share }[S.tab] || pitch)();

  function pitch() {
    const c = C(), lore = window.LORE;
    const fitTxt = { fits: "Fits the lore", adjust: "Needs a small adjustment" };
    return `<section class="panel cm-quote"><div class="eyebrow">Mike's elevator pitch, as written</div><blockquote>${esc(c.pitch)}</blockquote>
        <p class="muted small">Typos kept on purpose so the original stays on the record. Everything below builds on it.</p></section>
      <h2 class="lh">The pitch against the lore bible</h2>
      <p class="muted">Each beat of the pitch next to what the lore bible and the story page already say. Where the two differ, the note says how the prequel keeps both.</p>
      <div class="cm-check">${c.pitchBeats.map((b) => { const t = lore.timeline.find((x) => x.id === b.lore); return `<div class="panel cm-row ${b.fit}"><div><span class="cm-fit ${b.fit}">${fitTxt[b.fit]}</span><p class="cm-m">${esc(b.m)}</p></div>
        <div><div class="eyebrow">Lore bible${t ? `: ${esc(t.title)} (${esc(t.when)})` : ""}</div><p class="small">${esc(t ? t.text : b.lore)}</p><p class="cm-note">${esc(b.note)}</p></div></div>`; }).join("")}</div>
      <h2 class="lh">Things the prequel must plant for NOW</h2>
      <div class="cm-plants">${c.plants.map((p) => { const th = lore.threads.find((x) => x.id === p.lore); return `<div class="panel"><h3>${esc(p.t)}</h3><p class="small">${esc(p.why)}</p>${th ? `<p class="muted small">Open thread: ${esc(th.q)}</p>` : ""}</div>`; }).join("")}</div>
      <h2 class="lh">Decisions to make together</h2>
      <p class="muted">Each has a recommendation from Claude. Pick an answer and it is saved in this browser and included when you export. Your pick overrides the recommendation everywhere.</p>
      <div class="cm-decs">${c.decisions.map((d) => { const a = S.answers[d.id]; return `<div class="panel cm-dec${a ? " answered" : ""}"><div class="eyebrow">${d.id.toUpperCase()}</div><h3>${esc(d.q)}</h3>
        ${d.opts.map((o, i) => `<label class="cm-opt${a && a.i === i ? " on" : ""}"><input type="radio" name="${d.id}" data-dec="${d.id}" value="${i}"${a && a.i === i ? " checked" : ""}><span>${esc(o)}${i === d.rec ? ' <em class="cm-rec">Recommended</em>' : ""}</span></label>`).join("")}
        <p class="small muted">${esc(d.why)}</p>${a ? `<p class="small">Decided by <b>${esc(a.by || "someone")}</b>. <button class="linkbtn" data-undec="${d.id}">Reopen</button></p>` : ""}</div>`; }).join("")}</div>`;
  }

  function beats() {
    const c = C(), lore = window.LORE;
    const years = [["1986", "The Last Broadcast", 1], ["1986", "Static", 2], ["1987 to 1989", "Ashes", 3], ["1990s", "The Long War", 4], ["Treaty to NOW", "Nine Chairs", 5]];
    return `<p class="muted">Five issues, one movement of Mike's pitch each, laid against the lore bible's timeline. Each item names the lore entry it comes from.</p>
      <div class="cm-rail">${c.beats.map((b, k) => `<a class="cm-stop" href="#/comic/beats" data-jump="${b.id}"><i>${k + 1}</i><b>${esc(b.title)}</b><span>${esc(b.when)}</span></a>`).join("")}<span class="cm-now"><i>NOW</i><b>The game</b><span>the heirs wake</span></span></div>
      <div class="cm-cols">${c.beats.map((b) => {
        const pages = (S.issues.find((i) => i.id === b.id) || { pages: [] }).pages, n = pages.reduce((s, p) => s + p.panels.length, 0);
        return `<section class="panel cm-iss" id="b-${b.id}"><div class="eyebrow">${esc(b.n)} · ${esc(b.when)}</div><h3>${esc(b.title)}</h3><p class="cm-hook"><b>Ends on:</b> ${esc(b.hook)}</p>
          <ol class="cm-items">${b.items.map((it) => { const t = lore.timeline.find((x) => x.id === it.lore), th = lore.threads.find((x) => x.id === it.lore); return `<li><b>${esc(it.t)}</b> <span class="src s-${esc((it.src || "A").replace(/[^SXAM]/g, "").slice(-1))}" title="Source">${esc(it.src)}</span><p>${esc(it.text)}</p>${t || th ? `<small class="muted">Lore: ${esc(t ? t.title : th.q)}</small>` : ""}</li>`; }).join("")}</ol>
          <p class="small muted">${b.pages} pages planned · ${pages.length} storyboarded · ${n} panels</p><button class="btn ghost" data-open-issue="${b.id}">Open in storyboard</button></section>`;
      }).join("")}</div>`;
  }

  function board() {
    const c = C(), i = issue(), p = page(), n = panel(), lay = layoutOf(p.layout), done = (it) => { const a = allPanels(it); return a.length ? Math.round((a.filter((x) => x.n.status === "locked").length / a.length) * 100) : 0; };
    const slots = lay[2].length, spill = p.panels.slice(slots);
    return `<div class="cm-bar"><label>Issue <select id="cm-issue">${S.issues.map((x) => { const b = beatOf(x.id); return `<option value="${x.id}"${x.id === i.id ? " selected" : ""}>${esc(b ? b.n + ": " + b.title : x.id)} (${done(x)}% locked)</option>`; }).join("")}</select></label>
        <label>I am <select id="cm-me"><option value="">Pick your name</option>${PEOPLE.map((w) => `<option${S.me === w ? " selected" : ""}>${w}</option>`).join("")}</select></label>
        <button class="btn ghost" data-act="play">▶ Play the page-turn</button></div>
      <div class="cm-main">
        <aside class="cm-pages" aria-label="Pages">${i.pages.map((q, k) => `<button class="cm-pg${q.id === p.id ? " on" : ""}" data-pgid="${q.id}" aria-label="Page ${k + 1}"><span class="cm-minipage" style="grid-template-areas:${layoutOf(q.layout)[3]}">${layoutOf(q.layout)[2].map((a, z) => `<i style="grid-area:${a}" class="${q.panels[z] ? "s-" + (q.panels[z].status || "idea") : "empty"}"></i>`).join("")}</span><b>${k + 1}</b></button>`).join("")}
          <button class="cm-pg add" data-act="add-page" aria-label="Add a page"><span>+</span></button></aside>
        <div class="cm-stage">
          <div class="cm-pagehead"><h3>Page ${i.pages.indexOf(p) + 1}</h3><input class="cm-beat" data-pf="beat" value="${esc(p.beat)}" placeholder="What happens on this page, in one line" aria-label="Page beat">
            <label>Layout <select data-pf="layout">${c.layouts.map((l) => `<option value="${l[0]}"${l[0] === p.layout ? " selected" : ""}>${l[1]}</option>`).join("")}</select></label>
            <span class="cm-pgbtns"><button class="linkbtn" data-act="page-left">← Move</button><button class="linkbtn" data-act="page-right">Move →</button><button class="linkbtn" data-act="del-page">Delete page</button></span></div>
          <div class="cm-page" style="grid-template-areas:${lay[3]}">${lay[2].map((a, z) => { const q = p.panels[z]; return q ? `<button class="cm-cell${q.id === (n && n.id) ? " on" : ""}" style="grid-area:${a}" data-panel="${q.id}"><span class="cm-num">${z + 1}</span><span class="cm-st s-${q.status || "idea"}">${STATUS[q.status || "idea"]}</span>${thumb(q)}</button>` : `<button class="cm-cell empty" style="grid-area:${a}" data-act="add-panel"><span>+ Add panel ${z + 1}</span></button>`; }).join("")}</div>
          ${spill.length ? `<div class="cm-spill"><b>Off the page (${spill.length})</b> This layout has ${slots} slot${slots > 1 ? "s" : ""}. Pick a bigger layout or move these to another page.<div>${spill.map((q) => `<button class="cm-cell mini${q.id === (n && n.id) ? " on" : ""}" data-panel="${q.id}">${thumb(q)}</button>`).join("")}</div></div>` : ""}
        </div>
        <aside class="cm-insp panel" id="cm-insp">${inspector(n)}</aside>
      </div>`;
  }

  function inspector(n) {
    if (!n) return `<p class="muted">This page has no panels yet.</p><button class="btn" data-act="add-panel">Add the first panel</button>`;
    const c = C(), p = page(), idx = p.panels.indexOf(n);
    const chars = (n.chars || []).map((ch, k) => `<div class="cm-char"><input data-ch="${k}" data-cf="n" value="${esc(ch.n)}" aria-label="Character name"><select data-ch="${k}" data-cf="k" aria-label="Kind">${Object.keys(KIND_COLOR).map((o) => `<option${ch.k === o ? " selected" : ""}>${o}</option>`).join("")}</select><input type="range" data-ch="${k}" data-cf="x" min="5" max="95" value="${ch.x == null ? 50 : ch.x}" aria-label="Position"><button class="linkbtn" data-delch="${k}" aria-label="Remove">✕</button></div>`).join("");
    const names = c.cast.length ? S.cast : [];
    return `<div class="eyebrow">Panel ${idx + 1} of page ${issue().pages.indexOf(p) + 1}</div>
      <div class="cm-big">${thumb(n, { big: true })}</div>
      <div class="cm-row2"><label>Shot <select data-nf="shot">${c.shots.map((s) => `<option value="${s[0]}"${s[0] === n.shot ? " selected" : ""}>${s[1]}</option>`).join("")}</select></label>
        <label>Mood <select data-nf="mood">${c.moods.map((m) => `<option value="${m[0]}"${m[0] === n.mood ? " selected" : ""}>${m[1]}</option>`).join("")}</select></label></div>
      <label>Background <select data-nf="bg"><option value="">Plain</option>${c.bgs.slice(1).map((b) => `<option value="${b[0]}"${b[0] === n.bg ? " selected" : ""}>${b[1]}</option>`).join("")}<optgroup label="Roster backgrounds">${rosterBgs(n.bg)}</optgroup></select></label>
      <label>Action: what we see<textarea rows="3" data-nf="action">${esc(n.action)}</textarea></label>
      <label>Caption box<textarea rows="2" data-nf="caption">${esc(n.caption)}</textarea></label>
      <label>Dialogue (one line each: NAME: words)<textarea rows="3" data-nf="dialogue">${esc(n.dialogue)}</textarea></label>
      <label>Sound effect<input data-nf="sfx" value="${esc(n.sfx)}"></label>
      <div class="cm-chars"><div class="eyebrow">Who is in the panel</div>${chars}<div class="cm-addch"><select id="cm-castpick"><option value="">Add from the cast…</option>${names.map((x) => `<option value="${x.id}">${esc(x.n)}</option>`).join("")}<option value="_new">Someone else…</option></select></div></div>
      <label>Stand-in art from the roster <select data-nf-art><option value="">Silhouettes</option>${rosterChars()}</select></label>
      <label>Notes for the artist<textarea rows="2" data-nf="notes">${esc(n.notes)}</textarea></label>
      <div class="cm-row2"><label>Status <select data-nf="status">${Object.entries(STATUS).map(([k, v]) => `<option value="${k}"${(n.status || "idea") === k ? " selected" : ""}>${v}</option>`).join("")}</select></label>
        <label class="cm-file">Sketch image<input type="file" accept="image/*" id="cm-img"></label></div>
      ${n.img ? `<button class="linkbtn" data-act="del-img">Remove the uploaded sketch</button>` : ""}
      <div class="cm-actions"><button class="btn ghost" data-act="dup-panel">Duplicate</button><button class="btn ghost" data-act="panel-left">← Earlier</button><button class="btn ghost" data-act="panel-right">Later →</button><button class="btn ghost" data-act="next-page">To next page</button><button class="btn ghost" data-act="del-panel">Delete</button></div>
      <div class="cm-talk"><div class="eyebrow">Comments</div>${(n.comments || []).map((m) => `<p class="cm-cm"><b style="color:${WHO_COLOR[m.by] || "#fff"}">${esc(m.by || "Someone")}</b> ${esc(m.t)}</p>`).join("") || '<p class="muted small">No comments yet.</p>'}
        <div class="cm-addcm"><input id="cm-new" placeholder="Say something about this panel" maxlength="400"><button class="btn" data-act="comment">Post</button></div></div>`;
  }
  const rosterChars = () => { try { return H().everyCharacter().filter((c) => H().NODE_ART[c.l.id]).map((c) => `<option value="${c.l.id}">${esc(c.l.name)}</option>`).join(""); } catch { return ""; } };
  const rosterBgs = (cur) => { try { return H().everyCharacter().filter((c) => H().NODE_ART[c.l.id]).map((c) => `<option value="${H().NODE_ART[c.l.id].bg}"${H().NODE_ART[c.l.id].bg === cur ? " selected" : ""}>${esc(c.l.name)}</option>`).join(""); } catch { return ""; } };

  function cast() {
    const lore = window.LORE;
    return `<p class="muted">Everyone who appears in the prequel. The nine future Elders, Dr. Stein, Ezekiel and Thoth-Ra are already in the lore bible. The rest were invented for the prequel and are marked as proposals. Edit anything.</p>
      <div class="cm-cast">${S.cast.map((x) => { const app = S.issues.flatMap((i) => allPanels(i)).filter((a) => (a.n.chars || []).some((ch) => ch.n === x.n || x.n.endsWith(ch.n))).length; return `<div class="panel cm-card" style="--k:${KIND_COLOR[x.k] || "#999"}"><div class="cm-face"><svg viewBox="0 0 40 60"><g fill="${KIND_COLOR[x.k] || "#999"}" stroke="#000" stroke-width="1.6"><circle cx="20" cy="14" r="8"/><path d="M4 60 C4 36 10 28 20 28 C30 28 36 36 36 60 Z"/></g></svg></div>
        <div><input class="cm-name" data-cc="${x.id}" data-f="n" value="${esc(x.n)}" aria-label="Name"><select data-cc="${x.id}" data-f="k">${Object.keys(KIND_COLOR).map((o) => `<option${x.k === o ? " selected" : ""}>${o}</option>`).join("")}</select>
        <label>In 1986<textarea rows="2" data-cc="${x.id}" data-f="role">${esc(x.role)}</textarea></label><label>In NOW<textarea rows="2" data-cc="${x.id}" data-f="becomes">${esc(x.becomes)}</textarea></label>
        <small class="muted">${x.fixed ? "In the lore bible" : "Proposed for the prequel"} · ${esc(x.src || "A")} · in ${app} panel${app === 1 ? "" : "s"} <button class="linkbtn" data-delcast="${x.id}">Remove</button></small></div></div>`; }).join("")}
        <button class="panel cm-card add" data-act="add-cast">+ Add a character</button></div>`;
  }

  function share() {
    const total = S.issues.flatMap((i) => allPanels(i)), by = (s) => total.filter((x) => (x.n.status || "idea") === s).length;
    const answered = Object.keys(S.answers).length;
    return `<div class="cm-sum"><div class="panel"><b>${S.issues.reduce((s, i) => s + i.pages.length, 0)}</b><span>pages</span></div><div class="panel"><b>${total.length}</b><span>panels</span></div><div class="panel"><b>${by("locked")}</b><span>locked</span></div><div class="panel"><b>${answered} / ${C().decisions.length}</b><span>decisions made</span></div></div>
      <div class="panel cm-share"><h3>How we work on this together</h3>
        <p>This page has no server, so edits live in your browser. To work together, trade files:</p>
        <ol><li><b>Export</b> your work (the data file below).</li><li>Send it to the other person.</li><li>They <b>Import</b> it. Panels merge by id and the newest edit to each panel wins, so two people can work on different pages without clobbering each other.</li></ol>
        <p class="muted small">To make something permanent for everyone, send the exported file to Claude and it gets merged into the site's seed (data-comic.js). From then on it shows up in every browser without anyone importing.</p>
        <div class="cm-actions"><button class="btn" data-act="export-json">Export data (.json)</button><button class="btn ghost" data-act="export-script">Export script (.md)</button><label class="btn ghost cm-import">Import a file<input type="file" accept=".json,application/json" id="cm-import"></label></div>
        <p class="small" id="cm-share-msg"></p></div>
      <div class="panel"><h3>Start over</h3><p class="muted small">Throws away this browser's edits and goes back to the site's seed. Export first if you want to keep them.</p><button class="btn ghost" data-act="reset">Reset to the site's version</button></div>`;
  }

  /* ---------- export / import ---------- */
  function download(name, text, type) { const a = document.createElement("a"); a.href = URL.createObjectURL(new Blob([text], { type })); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500); }
  function scriptMd() {
    const L = [`# ${C().title}: prequel script`, "", `Exported ${new Date().toISOString().slice(0, 10)}${S.me ? " by " + S.me : ""}. Source: the storyboard on the site.`, ""];
    S.issues.forEach((i) => { const b = beatOf(i.id); L.push(`## ${b ? b.n + ": " + b.title : i.id}`, "");
      i.pages.forEach((p, pk) => { L.push(`### PAGE ${pk + 1} (${p.panels.length} panel${p.panels.length === 1 ? "" : "s"}, layout: ${layoutOf(p.layout)[1]})`, p.beat ? `*${p.beat}*` : "", "");
        p.panels.forEach((n, k) => { L.push(`**Panel ${k + 1}** [${shotOf(n.shot)[1]}${n.mood ? ", " + n.mood : ""}] (${STATUS[n.status || "idea"]})`, n.action || "");
          if (n.caption) n.caption.split("\n").forEach((x) => L.push(`CAPTION: ${x}`));
          if (n.dialogue) n.dialogue.split("\n").filter(Boolean).forEach((x) => L.push(x.toUpperCase().startsWith("SFX") ? x : x.replace(/^([^:]+):/, (m, a) => a.toUpperCase() + ":")));
          if (n.sfx) L.push(`SFX: ${n.sfx}`); if (n.notes) L.push(`> Artist note: ${n.notes}`); L.push(""); }); }); });
    return L.join("\n");
  }
  function mergeList(cur, inc, kids) {
    inc.forEach((x) => { const c = cur.find((y) => y.id === x.id);
      if (!c) { cur.push(x); return; }
      if (kids) { const k = x[kids]; mergeList(c[kids], k, kids === "pages" ? "panels" : null); }
      if ((x.u || 0) > (c.u || 0)) { const keep = kids ? c[kids] : null; Object.assign(c, x); if (keep) c[kids] = keep; } });
  }
  function doImport(text) {
    const d = JSON.parse(text); if (!d || !d.issues) throw new Error("This does not look like a comic export.");
    mergeList(S.issues, d.issues, "pages"); mergeList(S.cast, d.cast || [], null);
    Object.entries(d.answers || {}).forEach(([k, v]) => { if (!S.answers[k] || (v.u || 0) > (S.answers[k].u || 0)) S.answers[k] = v; });
    Object.assign(S.gone, d.gone || {});
    S.issues.forEach((i) => { i.pages = i.pages.filter((p) => !S.gone[p.id]); i.pages.forEach((p) => (p.panels = p.panels.filter((n) => !S.gone[n.id]))); });
    S.cast = S.cast.filter((x) => !S.gone[x.id]); save();
  }

  /* ---------- animatic ---------- */
  function startPlay() {
    const seq = allPanels(issue()).map((x) => x.n); if (!seq.length) return;
    play = { seq, i: 0, auto: true, t: null }; drawPlay();
  }
  function drawPlay() {
    const el = document.getElementById("cm-play"); if (!el) return;
    if (!play) { el.innerHTML = ""; return; }
    const n = play.seq[play.i], text = (n.caption || "") + (n.dialogue ? "\n" + n.dialogue : "");
    el.innerHTML = `<div class="cm-pl" role="dialog" aria-label="Animatic"><div class="cm-plbox">${thumb(n, { big: true })}<div class="cm-pltext">${esc(n.action)}</div>
      <div class="cm-plbar"><button class="btn ghost" data-act="pl-prev">←</button><span>${play.i + 1} of ${play.seq.length}</span><button class="btn ghost" data-act="pl-auto">${play.auto ? "Pause" : "Play"}</button><button class="btn ghost" data-act="pl-next">→</button><button class="btn" data-act="pl-close">Close</button></div></div></div>`;
    clearTimeout(play.t);
    if (play.auto) play.t = setTimeout(() => { if (!play) return; if (play.i < play.seq.length - 1) { play.i++; drawPlay(); } else { play.auto = false; drawPlay(); } }, Math.max(2200, text.length * 55));
  }
  const stopPlay = () => { if (play) clearTimeout(play.t); play = null; drawPlay(); };

  /* ---------- events ---------- */
  const redraw = (part) => { const b = document.getElementById("cm-body"); if (!b) return; if (part === "insp") { const e = document.getElementById("cm-insp"); if (e) e.innerHTML = inspector(panel()); } else b.innerHTML = body(); };
  const refreshPic = () => { // update thumbnails without losing focus in the inspector
    const n = panel(); if (!n) return;
    const cell = document.querySelector(`.cm-cell[data-panel="${n.id}"]`); if (cell) { const old = cell.querySelector(".cm-pic"); if (old) old.outerHTML = thumb(n); }
    const big = document.querySelector("#cm-insp .cm-big"); if (big) big.innerHTML = thumb(n, { big: true });
  };
  const newPanel = () => ({ id: uid("n"), shot: "med", bg: "", mood: "", chars: [], action: "", caption: "", dialogue: "", sfx: "", notes: "", status: "idea", comments: [], u: Date.now(), by: S.me });
  const move = (arr, o, d) => { const i = arr.indexOf(o), j = i + d; if (j < 0 || j >= arr.length) return false; arr.splice(i, 1); arr.splice(j, 0, o); return true; };

  window.comicInit = function () {
    const root = document.getElementById("app");
    const click = (e) => {
      const t = e.target;
      const tab = t.closest("[data-ct]"); if (tab) { S.tab = tab.dataset.ct; save(); document.querySelectorAll("[data-ct]").forEach((b) => b.classList.toggle("on", b === tab)); redraw(); return; }
      const oi = t.closest("[data-open-issue]"); if (oi) { S.issue = oi.dataset.openIssue; const i = issue(); S.page = i.pages[0] && i.pages[0].id; S.panel = i.pages[0] && i.pages[0].panels[0] && i.pages[0].panels[0].id; S.tab = "board"; save(); document.querySelectorAll("[data-ct]").forEach((b) => b.classList.toggle("on", b.dataset.ct === "board")); redraw(); return; }
      const jump = t.closest("[data-jump]"); if (jump) { e.preventDefault(); const el = document.getElementById("b-" + jump.dataset.jump); if (el) el.scrollIntoView({ behavior: "smooth", block: "start" }); return; }
      const ud = t.closest("[data-undec]"); if (ud) { delete S.answers[ud.dataset.undec]; save(); redraw(); return; }
      const pg = t.closest("[data-pgid]"); if (pg) { S.page = pg.dataset.pgid; const p = page(); S.panel = p.panels[0] && p.panels[0].id; save(); redraw(); return; }
      const pn = t.closest("[data-panel]"); if (pn) { S.panel = pn.dataset.panel; save(); document.querySelectorAll(".cm-cell").forEach((c) => c.classList.toggle("on", c.dataset.panel === S.panel)); redraw("insp"); return; }
      const dc = t.closest("[data-delch]"); if (dc) { const n = panel(); n.chars.splice(+dc.dataset.delch, 1); stamp(n); save(); redraw("insp"); refreshPic(); return; }
      const dcast = t.closest("[data-delcast]"); if (dcast) { S.gone[dcast.dataset.delcast] = true; S.cast = S.cast.filter((x) => x.id !== dcast.dataset.delcast); save(); redraw(); return; }
      const a = t.closest("[data-act]"); if (!a) return; const act = a.dataset.act, i = issue(), p = page(), n = panel();
      if (act === "play") startPlay();
      else if (act === "pl-close") stopPlay();
      else if (act === "pl-next" && play) { play.auto = false; play.i = Math.min(play.seq.length - 1, play.i + 1); drawPlay(); }
      else if (act === "pl-prev" && play) { play.auto = false; play.i = Math.max(0, play.i - 1); drawPlay(); }
      else if (act === "pl-auto" && play) { play.auto = !play.auto; drawPlay(); }
      else if (act === "add-page") { const q = { id: uid("p"), layout: "grid4", beat: "", panels: [newPanel()], u: Date.now() }; i.pages.push(q); S.page = q.id; S.panel = q.panels[0].id; save(); redraw(); }
      else if (act === "del-page") { if (!a.dataset.sure) { a.dataset.sure = "1"; a.textContent = "Tap again to delete"; return; } S.gone[p.id] = true; p.panels.forEach((x) => (S.gone[x.id] = true)); i.pages.splice(i.pages.indexOf(p), 1); if (!i.pages.length) i.pages.push({ id: uid("p"), layout: "splash", beat: "", panels: [], u: Date.now() }); S.page = i.pages[0].id; S.panel = (i.pages[0].panels[0] || {}).id; save(); redraw(); }
      else if (act === "page-left") { if (move(i.pages, p, -1)) { save(); redraw(); } } else if (act === "page-right") { if (move(i.pages, p, 1)) { save(); redraw(); } }
      else if (act === "add-panel") { const q = newPanel(); p.panels.push(q); S.panel = q.id; stamp(p); save(); redraw(); }
      else if (act === "dup-panel" && n) { const q = clone(n); q.id = uid("n"); q.comments = []; p.panels.splice(p.panels.indexOf(n) + 1, 0, q); S.panel = q.id; stamp(q); save(); redraw(); }
      else if (act === "del-panel" && n) { if (!a.dataset.sure) { a.dataset.sure = "1"; a.textContent = "Tap again"; return; } S.gone[n.id] = true; const k = p.panels.indexOf(n); p.panels.splice(k, 1); S.panel = (p.panels[Math.max(0, k - 1)] || {}).id; save(); redraw(); }
      else if (act === "panel-left" && n) { if (move(p.panels, n, -1)) { stamp(p); save(); redraw(); } } else if (act === "panel-right" && n) { if (move(p.panels, n, 1)) { stamp(p); save(); redraw(); } }
      else if (act === "next-page" && n) { const k = i.pages.indexOf(p), nx = i.pages[k + 1]; if (!nx) { msg = "This is the last page. Add a page first."; document.getElementById("cm-msg").textContent = msg; return; } p.panels.splice(p.panels.indexOf(n), 1); nx.panels.unshift(n); S.page = nx.id; stamp(nx); stamp(p); save(); redraw(); }
      else if (act === "del-img" && n) { delete n.img; stamp(n); save(); redraw("insp"); refreshPic(); }
      else if (act === "comment" && n) { const inp = document.getElementById("cm-new"), v = inp.value.trim(); if (!v) return; (n.comments = n.comments || []).push({ by: S.me || "Someone", t: v, u: Date.now() }); stamp(n); save(); redraw("insp"); }
      else if (act === "add-cast") { S.cast.push({ id: uid("c"), n: "New character", k: "human", role: "", becomes: "", src: "A", fixed: false, u: Date.now() }); save(); redraw(); }
      else if (act === "export-json") { download(`prequel-comic-${(S.me || "me").toLowerCase()}-${new Date().toISOString().slice(0, 10)}.json`, JSON.stringify({ app: "nda-comic", rev: S.rev, by: S.me, at: new Date().toISOString(), issues: S.issues, cast: S.cast, answers: S.answers, gone: S.gone }, null, 1), "application/json"); }
      else if (act === "export-script") download(`prequel-script-${new Date().toISOString().slice(0, 10)}.md`, scriptMd(), "text/markdown");
      else if (act === "reset") { if (!a.dataset.sure) { a.dataset.sure = "1"; a.textContent = "Tap again to discard my edits"; return; } const me = S.me; S = seedState(); S.me = me; S.tab = "share"; save(); redraw(); }
    };
    const change = (e) => {
      const t = e.target;
      if (t.id === "cm-issue") { S.issue = t.value; const i = issue(); S.page = i.pages[0].id; S.panel = (i.pages[0].panels[0] || {}).id; save(); redraw(); return; }
      if (t.id === "cm-me") { S.me = t.value; save(); return; }
      if (t.dataset.dec) { S.answers[t.dataset.dec] = { i: +t.value, by: S.me || "someone", u: Date.now() }; save(); redraw(); return; }
      if (t.id === "cm-castpick") { const n = panel(); if (!n || !t.value) return; const x = t.value === "_new" ? { n: "Someone", k: "human" } : S.cast.find((c) => c.id === t.value); (n.chars = n.chars || []).push({ n: x.n.replace(/^Colonel /, "Col. "), k: x.k, x: 50 }); stamp(n); save(); redraw("insp"); refreshPic(); return; }
      if (t.id === "cm-img") { const f = t.files[0], n = panel(); if (!f || !n) return; const img = new Image(), r = new FileReader(); r.onload = () => { img.onload = () => { const s = Math.min(1, 720 / img.width), c = document.createElement("canvas"); c.width = img.width * s; c.height = img.height * s; c.getContext("2d").drawImage(img, 0, 0, c.width, c.height); n.img = c.toDataURL("image/jpeg", 0.72); stamp(n); save(); redraw("insp"); refreshPic(); }; img.src = r.result; }; r.readAsDataURL(f); return; }
      if (t.id === "cm-import") { const f = t.files[0]; if (!f) return; f.text().then((x) => { try { doImport(x); document.getElementById("cm-share-msg").textContent = "Imported and merged. Open the Storyboard to see it."; } catch (er) { document.getElementById("cm-share-msg").textContent = "Could not import: " + er.message; } }); return; }
      if (t.dataset.pf) { const p = page(); p[t.dataset.pf] = t.value; stamp(p); save(); redraw(); return; }
      if (t.hasAttribute("data-nf-art")) { const n = panel(); (n.chars || []).forEach((c) => (c.art = t.value || undefined)); stamp(n); save(); refreshPic(); return; }
      if (t.dataset.nf) { const n = panel(); n[t.dataset.nf] = t.value; stamp(n); save(); if (t.dataset.nf === "status") redraw(); else { refreshPic(); } return; }
      if (t.dataset.cf) { const n = panel(), ch = n.chars[+t.dataset.ch]; ch[t.dataset.cf] = t.dataset.cf === "x" ? +t.value : t.value; stamp(n); save(); refreshPic(); return; }
      if (t.dataset.cc) { const x = S.cast.find((c) => c.id === t.dataset.cc); x[t.dataset.f] = t.value; x.u = Date.now(); save(); return; }
    };
    const input = (e) => { const t = e.target; if (t.dataset.nf && t.tagName !== "SELECT") { const n = panel(); n[t.dataset.nf] = t.value; stamp(n); save(); refreshPic(); } else if (t.dataset.cf === "x" || (t.dataset.cf === "n")) { change(e); } else if (t.dataset.cc && t.tagName !== "SELECT") { const x = S.cast.find((c) => c.id === t.dataset.cc); x[t.dataset.f] = t.value; x.u = Date.now(); save(); } else if (t.dataset.pf === "beat") { const p = page(); p.beat = t.value; stamp(p); save(); } };
    const key = (e) => { if (play && e.key === "Escape") stopPlay(); else if (play && e.key === "ArrowRight") { play.auto = false; play.i = Math.min(play.seq.length - 1, play.i + 1); drawPlay(); } else if (play && e.key === "ArrowLeft") { play.auto = false; play.i = Math.max(0, play.i - 1); drawPlay(); } };
    root.addEventListener("click", click); root.addEventListener("change", change); root.addEventListener("input", input); document.addEventListener("keydown", key);
    return () => { root.removeEventListener("click", click); root.removeEventListener("change", change); root.removeEventListener("input", input); document.removeEventListener("keydown", key); if (play) clearTimeout(play.t); play = null; };
  };
})();
