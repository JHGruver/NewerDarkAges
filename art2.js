// ART DIRECTION V2 PAGE (#/art in the MVP edition): the "Shard Cel" style broken into elements, the prompt recipe and a live prompt for any MVP character.
// Data: data-artdir2.js (window.ART2). Prompts: prompts2.js. Nothing on this page names an artist or a show.
(function () {
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const list = (a, cls) => `<ul class="${cls || ""}">${a.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
  const SIZE_ORDER = ["tiny", "small", "medium", "large", "huge"];

  window.artV2 = function () {
    const A = window.ART2, H = window.NDAH, mvp = H.allCharacters();
    const first = mvp[0];
    const people = H.GROUPS.map((g) => `<div class="sw"><i style="background:${g.color}"></i>${esc(g.name)}<br><b>${esc(PEOPLE_COLORS[g.id].name)}</b> <code>${g.color}</code></div>`).join("");
    return `<div class="a2">
      <div class="eyebrow">Style guide · Art direction V2</div><h1 class="pg">${esc(A.name)}</h1>
      <p class="lede a2-lede">${esc(A.oneLine)}</p>
      <p class="muted a2-sw">This is the art direction for the MVP edition. <a href="#" data-edition="full">Switch to the original edition</a> to see the first art direction and every character.</p>

      <section class="block"><h2>Where the look comes from</h2>
        <p class="muted a2-w">Three families of ideas, described by what each one teaches. Prompts never name a source. They carry the elements below instead.</p>
        <div class="a2-lin">${A.lineages.map((l) => `<div class="panel"><div class="eyebrow">Family ${l.id} · ${esc(l.does)}</div><h3>${esc(l.name)}</h3>${list(l.gives)}</div>`).join("")}</div>
        <div class="panel a2-blend"><b>The blend rule.</b> ${esc(A.blendRule)}</div></section>

      <section class="block"><h2>The design system: twelve elements</h2>
        <p class="muted a2-w">Each element is one rule and one fixed sentence. The fixed sentence goes into every prompt, in this order, never reworded. That is what keeps the AI consistent from character to character.</p>
        <div class="a2-els">${A.elements.map((e) => `<article class="panel a2-el"><header><i>${e.id}</i><h3>${esc(e.name)}</h3><span class="a2-from" title="Which families it draws on">from ${esc(e.from)}</span></header>
          <p>${esc(e.rule)}</p>
          ${e.token ? `<div class="a2-token"><b>Prompt wording</b><code>${esc(e.token)}</code><button class="copy" data-a2copy="${esc(e.token)}">Copy</button></div>` : e.table ? `<table class="a2-t">${e.table.map((r) => `<tr><th>${esc(r[0])}</th><td>${esc(r[1])}</td></tr>`).join("")}</table>` : '<p class="muted small">Handled in the prompt recipe below.</p>'}
          ${e.dos ? `<div class="a2-dd"><div><b>Do</b>${list(e.dos, "good")}</div><div><b>Don't</b>${list(e.donts, "bad")}</div></div>` : ""}</article>`).join("")}</div></section>

      <section class="block"><h2>Proportions by size</h2>
        <div class="panel"><table class="a2-t">${SIZE_ORDER.map((k) => `<tr><th>${k[0].toUpperCase() + k.slice(1)}</th><td>${esc(A.sizes[k])}</td></tr>`).join("")}</table></div></section>

      <section class="block"><h2>Pose energy by type</h2>
        <div class="panel"><table class="a2-t">${Object.entries(A.poses).map(([k, v]) => `<tr><th>${esc(TYPES[k] ? TYPES[k].name : k)}</th><td>${esc(v)}</td></tr>`).join("")}</table></div></section>

      <section class="block"><h2>Color</h2>
        <div class="grid cols-2"><div class="panel"><h3>The 60 / 30 / 10 rule</h3><div class="a2-bar"><i style="flex:6;background:var(--c1)"></i><i style="flex:3;background:var(--c2)"></i><i style="flex:1;background:var(--c3)"></i></div><p class="muted">Main about 60 percent, secondary about 30, pop about 10, on top of black, white and grey. Outlines are near-black <code>${A.outline}</code>. The people color belongs to the background only.</p></div>
        <div class="panel"><h3>Skin chart</h3><div class="a2-skin">${A.skin.map((s) => `<span><i style="background:${s[0]}"></i><i style="background:${s[1]}"></i><small>${s[0]}</small></span>`).join("")}</div><p class="muted">Light and shadow tone per row. Humanoid skin comes from this chart so it never competes with the three accents.</p></div></div>
        <h3 class="a2-h3">People colors (background wash)</h3><div class="palette">${people}</div></section>

      <section class="block"><h2>How every prompt is built</h2>
        <ol class="a2-rec">${A.recipe.map((r) => `<li><b>${esc(r[0])}</b><span>${esc(r[1])}</span></li>`).join("")}</ol>
        <div class="panel a2-token"><b>Style lock</b><code>${esc(A.lock)}</code><button class="copy" data-a2copy="${esc(A.lock)}">Copy</button><p class="muted small">Paste this when asking for a change to an image you like, so the style does not drift.</p></div>
        <div class="panel"><h3>Consistency tips</h3>${list(["Generate one character first and approve it. Attach that image as the reference for the next ones and say 'match this rendering style'.", "Never edit the style kit text. Edit only the character lines (costume, pose, face).", "If a result drifts, paste the style lock and name the element that broke (for example 'E5 flat fills: remove the gradient').", "Keep the same three hex values in every attempt for one character.", "Generate the background in a separate chat from the figure."])}</div></section>

      <section class="block"><h2>The Shard Cel test</h2>
        <div class="panel"><p class="muted">Review every generated character against this list. All eight must pass.</p>${list(A.test)}</div></section>

      <section class="block"><h2>Backgrounds</h2>
        <div class="panel"><p>${esc(A.bg.style)}</p><p class="muted">${esc(A.bg.keep)} ${esc(A.bg.no)}</p></div></section>

      <section class="block"><h2>Try it: the prompt for any MVP character</h2>
        <div class="panel"><label class="a2-pick">Character <select id="a2-pick">${mvp.map((c) => `<option value="${c.l.id}">${esc(c.g.name)} · ${esc(c.l.name)}</option>`).join("")}</select></label>
          <div class="a2-out"><h4>Character prompt</h4><textarea readonly rows="12" id="a2-c"></textarea><button class="copy" data-a2copy-id="a2-c">Copy</button></div>
          <div class="a2-out"><h4>Background prompt</h4><textarea readonly rows="9" id="a2-b"></textarea><button class="copy" data-a2copy-id="a2-b">Copy</button></div>
          <p class="small" id="a2-chk"></p></div></section>

      <section class="block"><h2>Downloads</h2>
        <div class="panel"><ul><li><a href="ART-DIRECTION-V2.md">ART-DIRECTION-V2.md</a>: this page as a document.</li><li><a href="NDA_MVP_Characters_V2.xlsx">NDA_MVP_Characters_V2.xlsx</a>: the MVP roster with every meta detail, prompts and a production tracker.</li><li><a href="NDA_Art_Color_Reference.xlsx">NDA_Art_Color_Reference.xlsx</a>: color balancing and inspiration.</li><li><a href="PROMPTS-MVP-V2.md">PROMPTS-MVP-V2.md</a>: every MVP prompt in one file.</li></ul></div></section>

      <section class="block"><h2>Palette atlas <span class="muted sub">· ${mvp.length} MVP characters</span></h2>
        <div class="atlas">${mvp.map((c) => `<a class="at" style="${H.cv(c.g, c.l)}" href="#/characters/${c.path.join("/")}"><span class="atbar"><i style="background:${c.g.color}"></i><i style="background:${c.l.pal[0]}"></i><i style="background:${c.l.pal[1]}"></i><i style="background:${c.l.pal[2]}"></i></span><b>${esc(c.l.name)}</b><span class="tg">${esc(c.g.name)} · ${c.l.role}</span></a>`).join("")}</div></section></div>`;
  };

  // the live prompt box, the copy buttons and the edition links (delegated, so they work after every re-render)
  const fill = () => {
    const sel = document.getElementById("a2-pick"); if (!sel) return;
    const c = window.NDAH.allCharacters().find((x) => x.l.id === sel.value); if (!c) return;
    document.getElementById("a2-c").value = PROMPTS.char(c.g, c.s, c.l); document.getElementById("a2-b").value = PROMPTS.bg(c.g, c.s, c.l);
    const f = PROMPTS.lint(c.g, c.s, c.l), k = document.getElementById("a2-chk"); k.textContent = f.length ? `${PROMPTS.checkName}: ${f.join("; ")}` : `${PROMPTS.checkName} passed`; k.className = "small " + (f.length ? "sjfail" : "sjpass");
  };
  document.addEventListener("change", (e) => { if (e.target.id === "a2-pick") fill(); });
  document.addEventListener("click", (e) => {
    const cp = e.target.closest("[data-a2copy],[data-a2copy-id]"); if (!cp) return;
    const text = cp.dataset.a2copy != null ? cp.dataset.a2copy : (document.getElementById(cp.dataset.a2copyId) || {}).value || "";
    const done = () => { const o = cp.textContent; cp.textContent = "Copied"; setTimeout(() => (cp.textContent = o), 1200); };
    try { navigator.clipboard.writeText(text).then(done, done); } catch { done(); }
  });
  window.addEventListener("hashchange", () => setTimeout(fill, 0)); window.addEventListener("load", () => setTimeout(fill, 50));
  new MutationObserver(fill).observe(document.getElementById("app"), { childList: true });
})();
