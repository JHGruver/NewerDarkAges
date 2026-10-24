// THE VOTING PAGE (#/vote): a swipe deck. One character at a time (with or without art), a short description, a comment box,
// and Dislike / Like / Super Like. Votes live in this browser (localStorage) and export to a spreadsheet (.xlsx, or .csv) to send back.
// Swipe or drag the card: right = like, left = dislike, up = super like. Keys: left, right, up, Backspace (undo).
(function () {
  const KEY = "nda-vote-v1";
  const VOTES = { super: { label: "Super Like", score: 2 }, like: { label: "Like", score: 1 }, dislike: { label: "Dislike", score: -1 }, skip: { label: "No vote", score: 0 } };
  const H = () => window.NDAH;
  let S = { voter: "", filter: "all", shuffle: true, order: [], votes: {}, i: 0, started: false };
  const load = () => { try { const d = JSON.parse(localStorage.getItem(KEY)); if (d && d.order) S = Object.assign(S, d); } catch {} };
  const save = () => { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch {} };
  const all = () => H().allCharacters();
  const byId = (id) => all().find((c) => c.l.id === id);
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = (Math.random() * (i + 1)) | 0; [a[i], a[j]] = [a[j], a[i]]; } return a; };

  // short and sweet: one short sentence (about 90 characters at most)
  function blurb(l) {
    const first = ((l.summary || "").split(/(?<=[.!?])\s/)[0] || "").trim();
    if (first.length <= 92) return first;
    const cut = first.slice(0, 92); const at = Math.max(cut.lastIndexOf(","), cut.lastIndexOf(" and "), cut.lastIndexOf(" who "), cut.lastIndexOf(" that "));
    return (at > 40 ? cut.slice(0, at) : cut.replace(/\s+\S*$/, "")).replace(/[,;:\s]+$/, "") + ".";
  }

  window.voteView = function () {
    const { esc, GROUPS, crest } = H();
    const counts = (g) => all().filter((c) => c.g.id === g).length;
    return `<div class="page-head"><div class="title"><div class="eyebrow">Help shape the roster</div><h1>Character vote</h1></div></div>
    <div id="vote" class="vote">
      <section class="v-start panel" id="v-start">
        <h2>Swipe through the cast</h2>
        <p class="muted">You see one character at a time, with or without art. Like, super like or dislike each one and leave a comment if you have a thought. When you finish, download a spreadsheet of your votes and send it back. Your votes stay in this browser until you clear them.</p>
        <label class="v-field"><span>Your name (optional, goes in the spreadsheet)</span><input id="v-name" type="text" autocomplete="name" placeholder="e.g. Jacob"></label>
        <div class="v-field"><span>Who do you want to vote on?</span>
          <div class="v-chips" id="v-chips"><button class="rf sel" data-vf="all">Everyone · ${all().length}</button>${GROUPS.map((g) => `<button class="rf" data-vf="${g.id}">${esc(g.name)} · ${counts(g.id)}</button>`).join("")}</div></div>
        <label class="v-check"><input type="checkbox" id="v-shuffle" checked> Shuffle the order</label>
        <div class="v-actions"><button class="btn" id="v-go">Start voting →</button><button class="btn ghost" id="v-resume" hidden>Resume where I left off</button></div>
      </section>
      <section class="v-play" id="v-play" hidden>
        <div class="v-stage" id="v-stage"></div>
        <div class="v-card" id="v-info">
          <div class="v-top"><div class="v-prog"><i id="v-bar"></i></div><div class="v-count" id="v-count"></div></div>
          <div class="v-text" id="v-text"></div>
          <label class="v-comment"><span>Comment (optional)</span><textarea id="v-comment" rows="1" maxlength="600" placeholder="Anything you love, hate or want changed about this one?"></textarea></label>
          <div class="v-btns">
            <button class="vb vb-no" id="b-dislike" aria-label="Dislike"><b>✕</b><span>Dislike</span></button>
            <button class="vb vb-super" id="b-super" aria-label="Super like"><b>★</b><span>Super like</span></button>
            <button class="vb vb-yes" id="b-like" aria-label="Like"><b>♥</b><span>Like</span></button>
          </div>
          <div class="v-sub"><button class="linkbtn" id="b-undo">← Back</button><button class="linkbtn" id="b-skip">Skip</button><button class="linkbtn" id="b-finish">Finish and download</button></div>
          <p class="v-hint muted">Drag the character or use the keys: ← dislike · → like · ↑ super like · Backspace go back</p>
        </div>
      </section>
      <section class="v-done panel" id="v-done" hidden></section>
    </div>`;
  };

  window.voteInit = function () {
    const { esc, poster, cv, NODE_ART, GROUPS } = H();
    const $ = (s) => document.querySelector(s);
    load();
    if (S.order.length && !S.started) S.started = false;
    const stage = $("#v-stage"), comment = $("#v-comment");
    let busy = false;
    $("#v-name").value = S.voter || "";
    $("#v-shuffle").checked = !!S.shuffle;
    document.querySelectorAll("[data-vf]").forEach((b) => b.classList.toggle("sel", b.dataset.vf === (S.filter || "all")));
    const voted = () => Object.values(S.votes).filter((v) => v.v && v.v !== "skip").length;
    if (S.order.length && S.i < S.order.length && Object.keys(S.votes).length) { const r = $("#v-resume"); r.hidden = false; r.textContent = `Resume: ${S.i} of ${S.order.length} done`; }

    function show(id) { document.body.dataset.vote = id === "play" ? "play" : ""; if (id !== "play") setBg(null); $("#v-start").hidden = id !== "start"; $("#v-play").hidden = id !== "play"; $("#v-done").hidden = id !== "done"; window.scrollTo({ top: 0 }); }

    function stageHTML(c) {
      const art = NODE_ART[c.l.id], g = c.g, l = c.l;
      const media = art ? `<img src="${art.src}" alt="${esc(l.name)}" draggable="false">` : `<div class="v-noart">${poster(g, l, "big")}<span class="v-tag">Art coming soon</span></div>`;
      return `<div class="v-char" id="v-char" style="${cv(g, l)}">${media}<b class="v-stamp s-like">LIKE</b><b class="v-stamp s-no">NOPE</b><b class="v-stamp s-super">SUPER LIKE</b></div>`;
    }
    function textHTML(c) {
      const l = c.l, g = c.g;
      return `<div class="v-people"><span>${esc(g.name)} › ${esc(c.s.name)}</span><span class="v-meta"><span class="v-role ${l.role}">${l.role === "combat" ? "Combat" : "Support"}</span><span class="v-trio"><i style="background:${l.pal[0]}"></i><i style="background:${l.pal[1]}"></i><i style="background:${l.pal[2]}"></i></span></span></div><h2>${esc(l.name)}</h2><p class="v-quip">${esc(l.tagline)}</p><p class="v-desc">${esc(blurb(l))}</p>`;
    }
    // the character's own background fills the whole page behind everything
    function setBg(src) { window.__voteBg = src || null; H().setScene(src || null); document.body.classList.toggle("has-bg", !!src); }

    function render() {
      if (S.i >= S.order.length) return finish();
      const c = byId(S.order[S.i]);
      stage.innerHTML = stageHTML(c); $("#v-text").innerHTML = textHTML(c);
      setBg(NODE_ART[c.l.id] ? NODE_ART[c.l.id].bg : null);
      const prev = S.votes[c.l.id]; comment.value = prev && prev.c ? prev.c : "";
      $("#v-count").textContent = `${S.i + 1} of ${S.order.length}`;
      $("#v-bar").style.width = (S.i / S.order.length * 100).toFixed(1) + "%";
      $("#b-undo").disabled = S.i === 0;
      attachDrag($("#v-char"));
      busy = false;
    }

    function record(kind) {
      const c = byId(S.order[S.i]); const txt = comment.value.trim();
      S.votes[c.l.id] = { v: kind, c: txt, t: new Date().toISOString() };
    }

    function cast(kind, fromDrag) {
      if (busy) return; busy = true;
      const card = $("#v-char"); record(kind);
      const fly = { like: [innerWidth, 0, 22], dislike: [-innerWidth, 0, -22], super: [0, -innerHeight, 0], skip: [0, 40, 0] }[kind];
      if (card) { card.style.transition = "transform .42s cubic-bezier(.16,1,.3,1), opacity .42s ease"; card.style.transform = `translate(${fly[0]}px,${fly[1]}px) rotate(${fly[2]}deg)`; card.style.opacity = "0"; if (kind !== "skip") card.dataset.fly = kind; }
      S.i++; save();
      setTimeout(render, reduce ? 0 : 280);
    }
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

    function attachDrag(card) {
      let sx = 0, sy = 0, dx = 0, dy = 0, drag = false;
      const stamps = (k) => { card.dataset.hint = k || ""; };
      card.addEventListener("pointerdown", (e) => { if (busy) return; drag = true; sx = e.clientX; sy = e.clientY; card.setPointerCapture(e.pointerId); card.style.transition = "none"; });
      card.addEventListener("pointermove", (e) => {
        if (!drag) return; dx = e.clientX - sx; dy = e.clientY - sy;
        card.style.transform = `translate(${dx}px,${Math.min(0, dy) * 0.6 + Math.max(0, dy) * 0.2}px) rotate(${dx / 18}deg)`;
        stamps(dy < -90 && Math.abs(dy) > Math.abs(dx) ? "super" : dx > 60 ? "like" : dx < -60 ? "no" : "");
      });
      const end = () => {
        if (!drag) return; drag = false;
        if (dy < -110 && Math.abs(dy) > Math.abs(dx)) return cast("super");
        if (dx > 110) return cast("like"); if (dx < -110) return cast("dislike");
        card.style.transition = "transform .45s cubic-bezier(.16,1,.3,1)"; card.style.transform = ""; stamps(""); dx = dy = 0;
      };
      card.addEventListener("pointerup", end); card.addEventListener("pointercancel", end);
    }

    function back() {
      if (busy || S.i === 0) return; S.i--; save(); render();
    }

    function finish() {
      S.started = false; save(); show("done");
      const v = Object.values(S.votes), n = (k) => v.filter((x) => x.v === k).length;
      const top = Object.entries(S.votes).filter(([, x]) => x.v === "super").map(([id]) => byId(id)).filter(Boolean).slice(0, 6);
      $("#v-done").innerHTML = `<h2>${!Object.keys(S.votes).length ? "Nothing voted yet" : S.i >= S.order.length ? "That's the deck" : `Your votes so far (${S.i} of ${S.order.length})`}</h2>
        <div class="v-sum"><div><b>${n("super")}</b><span>Super likes</span></div><div><b>${n("like")}</b><span>Likes</span></div><div><b>${n("dislike")}</b><span>Dislikes</span></div><div><b>${v.filter((x) => x.c).length}</b><span>Comments</span></div></div>
        ${top.length ? `<p class="muted">Super liked: ${top.map((c) => esc(c.l.name)).join(", ")}${n("super") > top.length ? ", and more" : ""}</p>` : ""}
        <div class="v-actions"><button class="btn" id="d-xlsx">Download spreadsheet (.xlsx)</button><button class="btn ghost" id="d-csv">Download .csv</button></div>
        <p class="muted v-note">Send me the downloaded file and I will read the votes and comments.</p>
        <div class="v-actions"><button class="btn ghost" id="d-more">Keep voting</button><button class="btn ghost" id="d-reset">Clear my votes and start over</button></div>`;
      $("#d-xlsx").onclick = () => exportXlsx(); $("#d-csv").onclick = () => exportCsv();
      $("#d-more").onclick = () => { const left = S.order.findIndex((id) => !S.votes[id]); if (left >= 0) { S.i = left; S.started = true; save(); show("play"); render(); } else { show("start"); } };
      $("#d-reset").onclick = () => { if ($("#d-reset").dataset.sure) { S = { voter: S.voter, filter: "all", shuffle: true, order: [], votes: {}, i: 0, started: false }; save(); show("start"); $("#v-resume").hidden = true; } else { $("#d-reset").dataset.sure = "1"; $("#d-reset").textContent = "Tap again to clear every vote"; } };
    }

    /* ---------------- export ---------------- */
    function rows() {
      const out = [];
      Object.entries(S.votes).forEach(([id, x]) => {
        const c = byId(id); if (!c) return; const l = c.l;
        out.push([S.voter || "", x.t ? x.t.slice(0, 19).replace("T", " ") : "", id, l.name, c.g.name, c.s.name, (VOTES[x.v || "skip"] || VOTES.skip).label, (VOTES[x.v || "skip"] || VOTES.skip).score, x.c || "", NODE_ART[id] ? "yes" : "no", l.role, `${l.pal[0]} ${l.pal[1]} ${l.pal[2]}`]);
      });
      return out;
    }
    const HEAD = ["Voter", "Time", "Character ID", "Character", "People", "Class", "Vote", "Score (super 2, like 1, dislike -1)", "Comment", "Has art", "Role", "Colors"];
    const fname = (ext) => `character-votes-${(S.voter || "voter").toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${new Date().toISOString().slice(0, 10)}.${ext}`;
    function download(blob, name) { const a = document.createElement("a"); a.href = URL.createObjectURL(blob); a.download = name; document.body.appendChild(a); a.click(); setTimeout(() => { URL.revokeObjectURL(a.href); a.remove(); }, 500); }
    function exportCsv() {
      const q = (s) => `"${String(s).replace(/"/g, '""')}"`; const body = [HEAD, ...rows()].map((r) => r.map(q).join(",")).join("\r\n");
      download(new Blob(["﻿" + body], { type: "text/csv;charset=utf-8" }), fname("csv"));
    }
    function loadSheetJS() {
      return new Promise((res, rej) => { if (window.XLSX) return res(); const s = document.createElement("script"); s.src = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js"; s.onload = res; s.onerror = rej; document.head.appendChild(s); });
    }
    async function exportXlsx() {
      const btn = $("#d-xlsx"); btn.textContent = "Building...";
      try {
        await loadSheetJS(); const X = window.XLSX, r = rows();
        const wb = X.utils.book_new(), ws = X.utils.aoa_to_sheet([HEAD, ...r]);
        ws["!cols"] = [{ wch: 12 }, { wch: 19 }, { wch: 20 }, { wch: 26 }, { wch: 16 }, { wch: 20 }, { wch: 11 }, { wch: 14 }, { wch: 60 }, { wch: 8 }, { wch: 9 }, { wch: 24 }]; ws["!freeze"] = { xSplit: 0, ySplit: 1 }; ws["!autofilter"] = { ref: `A1:L${r.length + 1}` };
        X.utils.book_append_sheet(wb, ws, "Votes");
        const per = {}; r.forEach((x) => { const p = (per[x[4]] = per[x[4]] || { s: 0, l: 0, d: 0, n: 0, score: 0 }); p.n++; p.score += x[7]; if (x[7] === 2) p.s++; else if (x[7] === 1) p.l++; else if (x[7] === -1) p.d++; });
        const sum = [["People", "Voted", "Super likes", "Likes", "Dislikes", "Average score"], ...Object.entries(per).map(([k, p]) => [k, p.n, p.s, p.l, p.d, +(p.score / p.n).toFixed(2)])];
        const ws2 = X.utils.aoa_to_sheet(sum); ws2["!cols"] = [{ wch: 18 }, { wch: 8 }, { wch: 12 }, { wch: 8 }, { wch: 10 }, { wch: 14 }]; X.utils.book_append_sheet(wb, ws2, "By people");
        const top = [...r].sort((a, b) => b[7] - a[7]).map((x) => [x[3], x[4], x[6], x[7], x[8]]); const ws3 = X.utils.aoa_to_sheet([["Character", "People", "Vote", "Score", "Comment"], ...top]); ws3["!cols"] = [{ wch: 26 }, { wch: 16 }, { wch: 11 }, { wch: 7 }, { wch: 60 }]; X.utils.book_append_sheet(wb, ws3, "Ranked");
        X.writeFile(wb, fname("xlsx")); btn.textContent = "Download spreadsheet (.xlsx)";
      } catch (e) { btn.textContent = "Could not build .xlsx, downloading .csv"; exportCsv(); setTimeout(() => (btn.textContent = "Download spreadsheet (.xlsx)"), 2500); }
    }

    /* ---------------- wiring ---------------- */
    document.querySelectorAll("[data-vf]").forEach((b) => b.addEventListener("click", () => { S.filter = b.dataset.vf; document.querySelectorAll("[data-vf]").forEach((x) => x.classList.toggle("sel", x === b)); }));
    $("#v-go").addEventListener("click", () => {
      S.voter = $("#v-name").value.trim(); S.shuffle = $("#v-shuffle").checked;
      let ids = all().filter((c) => S.filter === "all" || c.g.id === S.filter).map((c) => c.l.id); if (S.shuffle) ids = shuffle(ids);
      S.order = ids; S.votes = {}; S.i = 0; S.started = true; save(); show("play"); render();
    });
    $("#v-resume").addEventListener("click", () => { S.voter = $("#v-name").value.trim() || S.voter; S.started = true; save(); show("play"); render(); });
    $("#b-like").onclick = () => cast("like"); $("#b-dislike").onclick = () => cast("dislike"); $("#b-super").onclick = () => cast("super"); $("#b-skip").onclick = () => cast("skip"); $("#b-undo").onclick = back; $("#b-finish").onclick = () => { if (S.i < S.order.length && comment.value.trim()) record("skip"); save(); finish(); };
    comment.addEventListener("input", () => { const c = byId(S.order[S.i]); if (!c) return; const cur = S.votes[c.l.id] || { v: "", t: new Date().toISOString() }; cur.c = comment.value; S.votes[c.l.id] = cur; save(); });
    const key = (e) => {
      if ($("#v-play").hidden || (e.target.matches && e.target.matches("input,textarea")) || e.metaKey || e.ctrlKey) return;
      if (e.key === "ArrowRight") { e.preventDefault(); cast("like"); } else if (e.key === "ArrowLeft") { e.preventDefault(); cast("dislike"); } else if (e.key === "ArrowUp") { e.preventDefault(); cast("super"); } else if (e.key === "Backspace") { e.preventDefault(); back(); }
    };
    document.addEventListener("keydown", key);
    window.__voteCleanup = () => { document.removeEventListener("keydown", key); delete document.body.dataset.vote; window.__voteBg = null; document.body.classList.remove("has-bg"); };
    // an unfinished deck reopens straight into voting
    if (S.started && S.order.length && S.i < S.order.length) { show("play"); render(); } else show("start");
  };
})();
