// THE PROMPT INTERFACE (#/prompts): the working screen for making art. One character prompt and one background prompt per character, copy buttons,
// a copy bar with keyboard shortcuts, a "done" list, the Shard Cel test checklist, and live detection of new art dropped into art/shard/.
// Prompts come straight from PROMPTS (so they can never be stale): the V2 builder in the MVP edition, the original one in the full roster.
(function () {
  const H = () => window.NDAH;
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const ED = () => H().EDITION;
  const store = (k) => { try { return JSON.parse(localStorage.getItem(k) || "{}"); } catch { return {}; } };
  const put = (k, v) => { try { localStorage.setItem(k, JSON.stringify(v)); } catch {} };
  const DONE_K = () => "nda-prompts-done-" + ED(), TEST_K = () => "nda-prompts-test-" + ED();
  let sel = "all", q = "", cur = null, onlyTodo = false, hideDone = false, vis = [];

  const rows = () => H().allCharacters().map((c) => {
    const m = (window.CHAR_META || {})[c.l.id] || {}, cs = (window.CAST || {})[c.l.id] || {}, v2 = (window.NODE_ART_V2 || {})[c.l.id] || {}, v1 = !!H().NODE_ART[c.l.id] && !v2.src;
    return { c, id: c.l.id, name: c.l.name, g: c.g, s: c.s, l: c.l, m, cs, big: ((window.CHAR_V2 || {})[c.l.id] || {}).big, haveChar: !!v2.src, haveBg: !!v2.bg, v1, cp: PROMPTS.char(c.g, c.s, c.l), bp: PROMPTS.bg(c.g, c.s, c.l), fails: PROMPTS.lint(c.g, c.s, c.l) };
  });

  function toast(t) { let e = document.getElementById("pi-toast"); if (!e) { e = document.createElement("div"); e.id = "pi-toast"; e.setAttribute("role", "status"); document.body.appendChild(e); } e.textContent = t; e.classList.add("on"); clearTimeout(toast.t); toast.t = setTimeout(() => e.classList.remove("on"), 1600); }
  async function copy(text, btn, label) {
    let ok = false; try { await navigator.clipboard.writeText(text); ok = true; } catch { const ta = document.createElement("textarea"); ta.value = text; ta.style.cssText = "position:fixed;opacity:0"; document.body.appendChild(ta); ta.select(); try { ok = document.execCommand("copy"); } catch {} ta.remove(); }
    if (ok) { if (btn) { const o = btn.innerHTML; btn.textContent = "Copied"; btn.classList.add("done"); setTimeout(() => { btn.innerHTML = o; btn.classList.remove("done"); }, 1400); } toast(label + " copied"); } else toast("Could not copy. Press and hold the text to copy it.");
  }

  window.promptsView = function () {
    const mvp = ED() === "mvp", R = rows(), done = store(DONE_K()), A = window.ART2;
    const nChar = R.filter((r) => r.haveChar).length, nBg = R.filter((r) => r.haveBg).length;
    return `<div class="pi" id="pi">
      <div class="page-head"><div class="title"><div class="eyebrow">${mvp ? "Art direction V2 · Shard Cel" : "Original art direction · full roster"}</div><h1>Prompt interface</h1></div></div>
      <p class="lede pi-lede">${mvp ? `One character prompt and one background prompt for each of the ${R.length} MVP characters, built live from the Shard Cel art direction. Nothing here can go stale: change the art direction or a character and the prompts change with it.` : `The original prompts for every character in the full roster. Switch to the MVP edition (profile menu) for the new Shard Cel prompts.`}</p>
      ${mvp ? `<section class="panel pi-kit"><div><h3>The style kit</h3><p class="muted">Every character prompt already contains it. Use these when you need it on its own, for example to ask for a change.</p></div>
        <div class="pi-kitbtns"><button class="btn" data-pi="lock">Copy style lock</button><button class="btn ghost" data-pi="kit">Copy the 8-line style kit</button><a class="btn ghost" href="#/art">Read the art direction</a></div>
        <details class="pi-flow"><summary>How to generate, so it stays consistent</summary><ol><li>Open a new chat for each character. Paste the <b>character prompt</b>. Save the PNG.</li><li>Open a separate new chat for the <b>background prompt</b>. Save the JPG.</li><li>Run the Shard Cel test below. If it fails, paste the style lock and name the element that broke.</li><li>After the first approved character, attach it as a reference for the next ones and say "match this rendering style".</li><li>Save as <code>art/shard/&lt;id&gt;.png</code> (3:4 portrait, transparent) and <code>art/shard/&lt;id&gt;-bg.jpg</code> (16:9). Push to GitHub. The site finds them on its own.</li></ol></details></section>` : ""}
      <div class="pi-bar"><div class="pi-row"><input id="pi-q" type="search" placeholder="Search a character, class or type" aria-label="Search characters" value="${esc(q)}">
        <label class="pi-tog"><input id="pi-todo" type="checkbox"${onlyTodo ? " checked" : ""}> Only without ${mvp ? "new" : ""} art</label><label class="pi-tog"><input id="pi-hide" type="checkbox"${hideDone ? " checked" : ""}> Hide marked done</label>
        <span class="pi-prog" id="pi-prog">${mvp ? `${nChar} of ${R.length} with new art · ${nBg} backgrounds · ` : ""}${Object.keys(done).length} marked done</span></div>
        <div class="pi-row" id="pi-chips" role="group" aria-label="Filter by people"></div></div>
      <p class="muted pi-count" id="pi-count"></p><div id="pi-list"></div>
      <div class="pi-dock" id="pi-dock" aria-label="Copy bar"><div><div class="pi-who"><b id="pi-dn"></b><span id="pi-dm"></span></div><div class="pi-big"><button class="btn" id="pi-dc">Copy character <kbd>C</kbd></button><button class="btn ghost" id="pi-db">Copy background <kbd>B</kbd></button><button class="btn ghost" id="pi-dd">Mark done <kbd>D</kbd></button></div><div class="pi-nav"><button class="btn ghost" id="pi-dp" aria-label="Previous">←</button><button class="btn ghost" id="pi-dx" aria-label="Next">→</button></div></div></div></div>`;
  };

  function list() {
    const R = rows(), done = store(DONE_K()), tests = store(TEST_K()), mvp = ED() === "mvp", T = (window.ART2 || {}).test || [];
    const ql = q.trim().toLowerCase();
    vis = R.filter((r) => (sel === "all" || r.g.id === sel) && (!onlyTodo || !r.haveChar) && (!hideDone || !done[r.id]) && (!ql || [r.name, r.s.name, r.m.type, r.g.name, r.l.role].join(" ").toLowerCase().includes(ql)));
    document.getElementById("pi-count").textContent = `${vis.length} of ${R.length} characters`;
    const chips = [{ id: "all", name: "All peoples", color: "#888" }, ...H().GROUPS].map((g) => `<button class="pi-chip${sel === g.id ? " on" : ""}" style="--w:${g.color}" data-pg="${g.id}"><i></i>${esc(g.name)} <small>${g.id === "all" ? R.length : R.filter((r) => r.g.id === g.id).length}</small></button>`).join("");
    document.getElementById("pi-chips").innerHTML = chips;
    if (cur && !vis.find((r) => r.id === cur)) cur = null;
    if (!vis.length) { document.getElementById("pi-list").innerHTML = '<div class="empty">No characters match. Clear the search or the filters.</div>'; dock(); return; }
    let h = "", last = "";
    vis.forEach((r) => {
      if (r.g.id !== last) { if (last) h += "</div>"; last = r.g.id; h += `<h2 class="pi-grp" style="--w:${r.g.color}"><i></i>${esc(r.g.name)}</h2><div class="pi-grid">`; }
      const t = tests[r.id] || [], tn = t.filter(Boolean).length, art = H().NODE_ART[r.id];
      h += `<article class="pi-card${cur === r.id ? " sel" : ""}${done[r.id] ? " isdone" : ""}" id="pc-${r.id}">
        <div class="pi-top"><span class="pi-thumb" style="--pc:${r.g.color}">${art ? `<img src="${art.src}" alt="" loading="lazy">` : ""}${r.v1 ? "<em>old style</em>" : ""}</span>
          <div><h3 data-sel="${r.id}">${esc(r.name)}${done[r.id] ? " ✓" : ""}</h3><div class="pi-meta"><span>${esc(r.s.name)}</span><span>${esc(r.m.type || "")}</span><span>${r.l.role === "combat" ? "Combat" : "Support"}</span><span>${esc(r.m.size || "")} · ${esc(r.m.move || "")}</span></div></div></div>
        <div class="pi-look"><b>${esc(r.cs.expression || "")}</b><br>${esc(r.cs.pose || "")}${mvp && r.big ? `<br><b>Signature:</b> ${esc(r.big)}` : ""}</div>
        <div class="pi-sw" title="main, secondary, pop"><b style="background:${r.l.pal[0]}"></b><b style="background:${r.l.pal[1]}"></b><b style="background:${r.l.pal[2]}"></b><b class="pi-wash" style="background:${r.g.color}" title="background wash"></b><span>${r.l.pal.join(" ")}</span></div>
        ${mvp ? `<div class="pi-files"><span class="${r.haveChar ? "ok" : ""}">${r.haveChar ? "✓" : "○"} art/shard/${r.id}.png</span><span class="${r.haveBg ? "ok" : ""}">${r.haveBg ? "✓" : "○"} art/shard/${r.id}-bg.jpg</span></div>` : ""}
        ${r.fails.length ? `<p class="sjfail">${esc(PROMPTS.checkName || "Check")}: ${esc(r.fails.join("; "))}</p>` : ""}
        <div class="pi-btns"><button class="btn" data-k="cp" data-id="${r.id}">Copy character</button><button class="btn ghost" data-k="bp" data-id="${r.id}">Copy background</button></div>
        <details><summary>Read the prompts · ${r.cp.length} characters</summary><div class="pi-lbl">Character prompt · 3:4 transparent</div><pre>${esc(r.cp)}</pre><div class="pi-lbl">Background prompt · 16:9</div><pre>${esc(r.bp)}</pre></details>
        ${mvp ? `<details><summary>Shard Cel test · ${tn} of ${T.length} passed</summary><div class="pi-test">${T.map((x, i) => `<label><input type="checkbox" data-test="${r.id}:${i}"${t[i] ? " checked" : ""}> ${esc(x)}</label>`).join("")}</div></details>` : ""}</article>`;
    });
    document.getElementById("pi-list").innerHTML = h + "</div>"; dock();
  }
  function dock() {
    const d = document.getElementById("pi-dock"), r = vis.find((x) => x.id === cur); if (!d) return; d.classList.toggle("on", !!r); document.body.classList.toggle("pi-hasdock", !!r); if (!r) return;
    document.getElementById("pi-dn").textContent = r.name; document.getElementById("pi-dm").textContent = `${r.g.name} › ${r.s.name} · ${r.m.type || ""}`;
    document.getElementById("pi-dd").firstChild.textContent = store(DONE_K())[r.id] ? "Unmark done " : "Mark done ";
  }
  function pick(id, scroll) { cur = id; document.querySelectorAll(".pi-card.sel").forEach((e) => e.classList.remove("sel")); const el = document.getElementById("pc-" + id); if (el) { el.classList.add("sel"); if (scroll) el.scrollIntoView({ block: "center", behavior: "smooth" }); } dock(); }
  function step(k) { if (!vis.length) return; const i = vis.findIndex((x) => x.id === cur); pick(vis[Math.min(vis.length - 1, Math.max(0, i < 0 ? 0 : i + k))].id, true); }
  function cp(kind) { const r = vis.find((x) => x.id === cur); if (!r) return; copy(r[kind], document.getElementById(kind === "cp" ? "pi-dc" : "pi-db"), kind === "cp" ? "Character prompt" : "Background prompt"); }
  function markDone() {
    const r = vis.find((x) => x.id === cur); if (!r) return; const done = store(DONE_K()), was = !!done[r.id]; if (was) delete done[r.id]; else done[r.id] = 1; put(DONE_K(), done);
    const i = vis.findIndex((x) => x.id === r.id); list(); document.getElementById("pi-prog").textContent = document.getElementById("pi-prog").textContent.replace(/\d+ marked done/, Object.keys(done).length + " marked done");
    if (!was) { const n = vis[Math.min(i, vis.length - 1)]; if (n) pick(n.id, true); } else pick(r.id);
  }

  window.promptsInit = function () {
    const root = document.getElementById("app");
    const click = (e) => {
      const t = e.target, pg = t.closest("[data-pg]"); if (pg) { sel = pg.dataset.pg; list(); return; }
      const s = t.closest("[data-sel]"); if (s) { pick(s.dataset.sel); return; }
      const b = t.closest("button[data-k]"); if (b) { pick(b.dataset.id); const r = vis.find((x) => x.id === b.dataset.id); copy(r[b.dataset.k], b, b.dataset.k === "cp" ? "Character prompt" : "Background prompt"); return; }
      const k = t.closest("[data-pi]"); if (k) { const A = window.ART2; copy(k.dataset.pi === "lock" ? A.lock : A.elements.filter((x) => x.token).map((x) => x.token).join("\n"), k, k.dataset.pi === "lock" ? "Style lock" : "Style kit"); return; }
      if (t.id === "pi-dc") cp("cp"); else if (t.id === "pi-db") cp("bp"); else if (t.closest("#pi-dd")) markDone(); else if (t.id === "pi-dp") step(-1); else if (t.id === "pi-dx") step(1);
    };
    const change = (e) => {
      const t = e.target;
      if (t.id === "pi-todo") { onlyTodo = t.checked; list(); } else if (t.id === "pi-hide") { hideDone = t.checked; list(); }
      else if (t.dataset.test) { const [id, i] = t.dataset.test.split(":"), tests = store(TEST_K()); (tests[id] = tests[id] || [])[+i] = t.checked; put(TEST_K(), tests); const sm = t.closest("details").querySelector("summary"); sm.textContent = sm.textContent.replace(/\d+ of/, tests[id].filter(Boolean).length + " of"); }
    };
    const input = (e) => { if (e.target.id === "pi-q") { q = e.target.value; list(); const n = document.getElementById("pi-q"); if (n) { n.focus(); } } };
    const key = (e) => {
      if (!document.getElementById("pi") || (e.target.matches && e.target.matches("input,textarea,select")) || e.metaKey || e.ctrlKey || e.altKey) return;
      const k = e.key.toLowerCase(); if (k === "c") { cp("cp"); e.preventDefault(); } else if (k === "b") { cp("bp"); e.preventDefault(); } else if (k === "d") { markDone(); e.preventDefault(); } else if (k === "arrowright" || k === "j") { step(1); e.preventDefault(); } else if (k === "arrowleft" || k === "k") { step(-1); e.preventDefault(); }
    };
    root.addEventListener("click", click); root.addEventListener("change", change); root.addEventListener("input", input); document.addEventListener("keydown", key);
    list();
    return () => { root.removeEventListener("click", click); root.removeEventListener("change", change); root.removeEventListener("input", input); document.removeEventListener("keydown", key); document.body.classList.remove("pi-hasdock"); };
  };
})();
