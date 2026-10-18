// Tiny hash-router SPA.
// Routes: #/  #/characters[/group[/sub[/subsub]]]  #/manual[/npc]  #/roadmap  #/art
const app = document.getElementById("app");
const { WORLD, PHASES, ART, MANUAL } = window;

// Vampire / Were files register themselves in GROUP_DEFS; merge and order everything.
GROUP_ORDER.forEach((id) => { if (GROUP_DEFS[id]) { const i = GROUPS.findIndex((g) => g.id === id); if (i < 0) GROUPS.push(GROUP_DEFS[id]); else GROUPS[i] = GROUP_DEFS[id]; } });
GROUPS.sort((a, b) => GROUP_ORDER.indexOf(a.id) - GROUP_ORDER.indexOf(b.id));

const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const gStyle = (g) => `--g:${g.color};--g2:${g.color2}`;
const list = (items, cls = "") => `<ul class="${cls}">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
const countLeaves = (n) => (n.subs && n.subs.length ? n.subs.reduce((t, s) => t + countLeaves(s), 0) : 1);
const countAll = (n) => (n.subs || []).reduce((t, s) => t + 1 + countAll(s), 0);
const LEVEL_DEFAULT = ["Subclass", "Specialization", "Variant"];

// Real character art. Keyed by node id so it shows on the matching detail panel.
const PARTY = [
  { people: "human", src: "art/human-silverlantern.png", name: "Silver Lantern Witch Hunter", path: "human/wardens/silverlanterns", exactOnly: true },
  { people: "vampire", src: "art/vampire-rapierroses.png", name: "Rose Blade Duelist", path: "vampire/velvet/rapierroses" },
  { people: "were", src: "art/were-kitsune.png", name: "Lantern Fox", path: "were/fox/lanternfoxes" },
  { people: "ghost", src: "art/ghost-wanderer.png", name: "Talisman Wanderer", path: "ghost/wisplights/marshlamps" },    // drop art into /art and set src to fill a slot
  { people: "undead", src: "art/undead-drummer.png", name: "Drum Corps Skeleton", path: "undead/boneguard/drumcorps" },
  { people: "forest", src: "art/forest-dryad.png", name: "Grove Guardian", path: "forest/greenwardens/groveguardians" },
  { people: "witch", src: "art/witch-moon.png", name: "Moon Witch", path: "witch/hedgewitches" },
];
// Art for a specific subclass/specialization (by node id). The deepest match on the chosen path wins;
// otherwise the people's own character from PARTY is shown.
const NODE_ART = {
  silverlanterns: { src: "art/human-silverlantern.png", name: "Silver Lantern Witch Hunter" },
  cogsmiths: { src: "art/human-cogsmith.png", name: "Cogsmith" },
  skyriggers: { src: "art/human-skyrigger.png", name: "Skyrigger" },
  openhearths: { src: "art/human-innkeeper.png", name: "Open Hearth Innkeeper" },
  waysidehealers: { src: "art/human-healer.png", name: "Wayside Healer" },
  minstrels: { src: "art/human-minstrel.png", name: "Minstrel" },
  marketeers: { src: "art/human-marketeer.png", name: "Marketeer" },
  rapierroses: { src: "art/vampire-rapierroses.png", name: "Rose Blade Duelist" },
  ledgerlords: { src: "art/vampire-ledgerlords.png", name: "Ledgerlord" },
  chalkhands: { src: "art/vampire-chalkhands.png", name: "Chalkhand" },
  whisperers: { src: "art/vampire-whisperers.png", name: "Whisperer" },
  cellarcooks: { src: "art/vampire-cellarcooks.png", name: "Cellar Cook" },
  mushroomfarmers: { src: "art/undead-mushroomfarmers.png", name: "Mushroom Farmer" },
  stargazers: { src: "art/witch-stargazers.png", name: "Star Gazer" },
  ledgerliches: { src: "art/undead-ledgerliches.png", name: "Ledger Lich" },
  snapjaw: { src: "art/were-snapjaw.png", name: "Snapjaw Skipper" },
  jarhermits: { src: "art/undead-jarhermits.png", name: "Jar Hermit" },
  kelpkeepers: { src: "art/were-kelpkeepers.png", name: "Kelp Keeper" },
  loomweavers: { src: "art/were-loomweavers.png", name: "Loomweaver" },
  waysideboggles: { src: "art/forest-waysideboggles.png", name: "Wayside Boggle" },
  duskcourt: { src: "art/forest-duskcourt.png", name: "Dusk Court Fae" },
  ratkings: { src: "art/vampire-ratkings.png", name: "Rat Queen" },
  lanternfoxes: { src: "art/were-kitsune.png", name: "Lantern Fox" },
  marshlamps: { src: "art/ghost-wanderer.png", name: "Talisman Wanderer" },
  drumcorps: { src: "art/undead-drummer.png", name: "Drum Corps Skeleton" },
  groveguardians: { src: "art/forest-dryad.png", name: "Grove Guardian" },
  hedgewitches: { src: "art/witch-moon.png", name: "Moon Witch" },
  teapamphlet: { src: "art/human-teapamphlet.png", name: "Tea & Pamphlet Warden" },
};
// Full-screen backgrounds, shown behind the glass flower ONLY while that exact specialization is selected.
const NODE_BG = {
  mushroomfarmers: "art/bg/undead-mushroomfarmers.jpg",
  stargazers: "art/bg/witch-stargazers.jpg",
  ledgerliches: "art/bg/undead-ledgerliches.jpg",
  snapjaw: "art/bg/were-snapjaw.jpg",
  duskcourt: "art/bg/forest-duskcourt.jpg",
  waysideboggles: "art/bg/forest-waysideboggles.jpg",
  loomweavers: "art/bg/were-loomweavers.jpg",
  kelpkeepers: "art/bg/were-kelpkeepers.jpg",
  jarhermits: "art/bg/undead-jarhermits.jpg",
};
const groupOf = (id) => GROUPS.find((g) => g.id === id);

const stage = (gid) => `
  <div class="stage" ${gid ? `data-sel="${gid}"` : ""} style="--n:${PARTY.length}">
    ${PARTY.map((p) => {
      const g = groupOf(p.people);
      const cls = `figure ${p.src ? "" : "vacant"} ${p.people === gid ? "is-sel" : ""}`;
      const label = p.name || `${g.name}: art coming`;
      return `
      <a class="${cls}" data-people="${p.people}" style="${gStyle(g)}" href="#/characters/${p.path || p.people}" title="${esc(label)}">
        ${p.src ? `<img src="${p.src}" alt="${esc(p.name)}">` : `<span class="slot">${ic(g.icon)}<em>${esc(g.name)}</em></span>`}
        <span class="cap">${esc(label)}</span>
      </a>`;
    }).join("")}
  </div>`;

/* ---------- views ---------- */
function home() {
  const total = GROUPS.reduce((t, g) => t + countAll(g), 0);
  return `
  <div class="hero">
    <div class="eyebrow" style="color:#f6d98a">A monster mashup</div>
    <h1>${esc(WORLD.title)}</h1>
    <p>${esc(WORLD.pitch)}</p>
    <a class="btn" href="#/characters">Choose your creature →</a>
    <a class="btn ghost" href="#/manual">Open the Monster Manual</a>
    <a class="btn ghost" href="#/roadmap">See the roadmap</a>
  </div>

  <section class="block">
    <h2>Tone</h2>
    <div class="grid cols-2">${WORLD.tone.map((t) => `<div class="panel">${esc(t)}</div>`).join("")}</div>
  </section>

  <section class="block">
    <h2>The Seven Peoples <span class="muted" style="font-size:1rem;font-family:var(--mono);letter-spacing:.1em">· ${total} playable branches</span></h2>
    <div class="grid cols-3">
      ${GROUPS.map((g) => `
        <a class="panel" style="${gStyle(g)};border-top:8px solid var(--g);text-decoration:none" href="#/characters/${g.id}">
          <div style="font-size:2.4rem">${ic(g.icon)}</div>
          <h3>${esc(g.name)}</h3>
          <div class="muted">${esc(g.tagline)}</div>
          <div class="muted" style="margin-top:6px;font-size:.9rem">${g.subs.length} ${(g.levelNames || LEVEL_DEFAULT)[0].toLowerCase()}s · ${countLeaves(g)} paths</div>
        </a>`).join("")}
    </div>
  </section>

  <section class="block">
    <h2>The Story So Far</h2>
    <div class="grid cols-2">${MANUAL.storyArc.map((s, i) => `<div class="panel"><h3>${i + 1}. ${esc(s.title)}</h3><div class="muted">${esc(s.text)}</div></div>`).join("")}</div>
  </section>

  <section class="block">
    <h2>The Land</h2>
    <div class="grid cols-2">${WORLD.regions.map((r) => `
      <div class="panel"><h3>${ic(r.icon)} ${esc(r.name)}</h3><div class="muted">${esc(r.text)}</div></div>`).join("")}
    </div>
  </section>`;
}

// ---- Character select ----
// No people chosen: selector + the seven-character line-up.
// A people chosen: one-screen workspace. Chosen levels collapse into thin icon rails, the next level's
// choices take the selector slot, the character stands beside it, and the details scroll sideways.
// Section header with its step number and current choice, e.g. "2 · Clan = House Velvet".
const hdr = (n, label, val) => `${n} · ${esc(label)} = <b class="${val ? "set" : "unset"}">${val ? esc(val) : "choose…"}</b>`;
// Left third: people as a row of icons, then one full-width button list per open level.
// Every level stays open (selected button highlighted), so nothing ever collapses.
const peopleRow = (gid) => { const g0 = GROUPS.find((g) => g.id === gid); return `
  <section class="c-people">
    <div class="eyebrow">${hdr(1, "People", g0 && g0.name)}</div>
    <div class="prow">
      ${GROUPS.map((g) => `
        <button class="pbtn ${g.id === gid ? "sel" : ""}" style="${gStyle(g)}" data-go="#/characters/${g.id}" title="${esc(g.name)}">${ic(g.icon)}</button>`).join("")}
    </div>
  </section>`; };

const levelList = (parent, selId, base, label, num, selName) => `
  <section class="c-level" style="flex-grow:${parent.subs.length}">
    <div class="eyebrow">${hdr(num, label, selName)}</div>
    <div class="clist">
      ${parent.subs.map((s) => `
        <button class="pitem ${s.id === selId ? "sel" : ""}" data-go="${base}/${s.id}" title="${esc(s.tagline)}">
          <span class="ico">${ic(s.icon)}</span>
          <span class="nm">${esc(s.name)}</span>
          ${s.subs ? `<span class="go">${s.subs.length}</span>` : ""}
        </button>`).join("")}
    </div>
  </section>`;

const gearPills = (g) => g.split(",").map((x) => `<span class="pill">${esc(x.trim())}</span>`).join("");

function detailBlocks(group, trail, names) {
  const node = trail.length ? trail[trail.length - 1] : group;
  const crumbs = [group.name, ...trail.map((t) => t.name)];
  let h = `
    <div class="blk blk-title">
      <div class="eyebrow">${crumbs.map(esc).join(" › ")}</div>
      <h2>${ic(node.icon)} ${esc(node.name)}</h2>
      <p class="tagline">${esc(node.tagline)}</p>
    </div>
    <div class="blk"><h4>Overview</h4><p>${esc(node.summary)}</p></div>
    <div class="blk"><h4>Background &amp; lore</h4><p>${esc(node.lore)}</p></div>`;
  if (!trail.length) {
    h += `
    <div class="blk"><h4>Playstyle</h4><p>${esc(node.playstyle)}</p></div>
    <div class="blk"><h4>Tendencies</h4><div class="bars">${Object.entries(node.traits).map(([k, v]) => `
      <div class="bar"><span>${k}</span><span class="track"><span class="fill" style="width:${v * 20}%"></span></span></div>`).join("")}</div></div>`;
    (node.extras || []).forEach((ex) => {
      h += `<div class="blk blk-title"><div class="eyebrow">Rules</div><h3>${esc(ex.title)}</h3></div>`;
      ex.items.forEach((it) => { h += `<div class="blk"><h4>${esc(it.name)}</h4><p>${esc(it.desc)}</p></div>`; });
    });
  } else {
    h += `
    <div class="blk"><h4>Strengths</h4>${list(node.strengths, "good")}</div>
    <div class="blk"><h4>Weaknesses</h4>${list(node.weaknesses, "bad")}</div>
    <div class="blk"><h4>Signature abilities</h4>${list(node.abilities)}</div>
    <div class="blk"><h4>Starting gear</h4><p>${gearPills(node.gear)}</p><h4>What they look like</h4><p>${esc(node.look)}</p></div>`;
    if (node.subs) h += `<div class="blk"><h4>Go deeper</h4><p>${node.subs.length} ${esc((names[trail.length] || "variant").toLowerCase())}s to choose from, listed on the left.</p></div>`;
  }
  return h;
}

function characters(...path) {
  const [gid, ...rest] = path;
  const group = GROUPS.find((g) => g.id === gid);
  const trail = [];
  let cur = group;
  for (const id of rest) {
    const next = cur && cur.subs && cur.subs.find((s) => s.id === id);
    if (!next) break;
    trail.push(next); cur = next;
  }
  const names = group ? group.levelNames || LEVEL_DEFAULT : LEVEL_DEFAULT;
  const stepLabels = (group ? names.slice(0, 2) : ["Subclass", "Specialization"]);
  const head = `
  <div class="page-head">
    <div class="title"><div class="eyebrow">Character Select</div><h1>Who will you be?</h1></div>
    <div class="steps">
      <span class="step ${!group ? "on" : ""}">1 · Choose a people</span>
      ${stepLabels.map((n, i) => `<span class="step ${group && trail.length === i ? "on" : ""}">${i + 2} · Choose a ${esc(n.toLowerCase())}</span>`).join("")}
      <span class="step ${trail.length >= 1 ? "on" : ""}">Read the details</span>
    </div>
  </div>`;

  if (!group) {
    const totem = `
    <aside class="totem" aria-label="Choose a people">
      <div class="eyebrow">Peoples</div>
      ${GROUPS.map((g) => `
        <button class="tcard" data-people="${g.id}" style="${gStyle(g)}" data-go="#/characters/${g.id}" title="${esc(g.name)}">
          <span class="ico">${ic(g.icon)}</span><span class="nm">${esc(g.name)}</span>
        </button>`).join("")}
    </aside>`;
    return `${head}<div class="select-layout">${totem}<div class="select-main">${stage("")}<div class="empty">Pick a people on the left to see their paths.</div></div></div>`;
  }

  // left third: people row + a full-width list for every open level
  let chooser = peopleRow(gid);
  let parent = group; const ids = [gid];
  for (let d = 0; parent && parent.subs; d++) {
    const sel = trail[d];
    chooser += levelList(parent, sel && sel.id, `#/characters/${ids.join("/")}`, names[d] || "Variant", d + 2, sel && sel.name);
    if (!sel) break;
    ids.push(sel.id); parent = sel;
  }

  // middle third: the character(s). A specialization shows its own art; a subclass shows its
  // specializations' art together; otherwise the people's character. Humans without art get the icon.
  const own = [...trail].reverse().map((t) => NODE_ART[t.id]).find(Boolean);
  const node = trail.length ? trail[trail.length - 1] : group;
  const ids0 = [gid, ...trail.map((t) => t.id)];
  // Every specialization under a node: its art when we have it, otherwise a placeholder icon.
  // Each one is a link, so any character stays reachable from the middle third too.
  const leaves = (n, ids) => (n.subs || []).flatMap((s) => {
    const p = [...ids, s.id];
    if (NODE_ART[s.id]) return [{ ...NODE_ART[s.id], path: p, icon: s.icon }];
    return s.subs && s.subs.length ? leaves(s, p) : [{ path: p, icon: s.icon, name: s.name, ph: true }];
  });
  const figs = own ? [own] : leaves(node, ids0);
  const cols = figs.length <= 3 ? figs.length : figs.length <= 8 ? 4 : figs.length <= 15 ? 5 : 6;
  const canView = figs.length > 0 && figs.length <= 3 && figs.some((f) => !f.ph);
  const caption = figs.length === 1 && figs[0].name ? figs[0].name : node.name;
  const figHtml = figs.map((f) => {
    const tag = f.path ? "a" : "div";
    return `
      <${tag} class="fi ${f.ph ? "ph" : ""}" ${f.path ? `data-go="#/characters/${f.path.join("/")}"` : ""} data-name="${esc(f.name)}" title="${esc(f.name)}">
        ${f.ph ? `<span class="phs">${ic(f.icon)}<em class="lab">${esc(f.name)}</em></span>` : `<img src="${f.src}" alt="${esc(f.name)}">`}
      </${tag}>`;
  }).join("");

  return `${head}
  <div class="workspace" style="${gStyle(group)}">
    <aside class="chooser">${chooser}</aside>
    <figure class="fig n${figs.length} ${figs.length > 3 ? "grid" : ""} ${figs.length > 8 ? "dense" : ""}" style="--cols:${cols}">
      ${figs.length ? figHtml : `<div class="fig-ph">${ic(node.icon)}</div>`}
      <figcaption>${esc(caption)}</figcaption>
      ${canView ? `<button class="view-btn" data-view title="View the artwork full screen">${ic("maximize")}<span>View art</span></button>` : ""}
    </figure>
    <div class="details-wrap">
      <section class="details" tabindex="0" aria-label="Details">${detailBlocks(group, trail, names)}</section>
      <div class="scroll-hint">Scroll →</div>
    </div>
  </div>`;
}

function manual(nid) {
  const npc = MANUAL.npcs.find((n) => n.id === nid);
  const gOf = (n) => GROUPS.find((g) => g.id === n.group);
  let html = `
  <div class="eyebrow">World building</div>
  <h1 style="font-size:2.4rem">Monster Manual</h1>
  <p class="muted" style="max-width:70ch">${esc(MANUAL.intro)}</p>
  <div class="sub-grid">
    ${MANUAL.npcs.map((n) => `
      <button class="scard ${n.id === nid ? "sel" : ""}" style="--g:${n.color};--g2:${n.color}" data-go="#/manual/${n.id}">
        <span class="ico">${ic(n.icon)}</span><span class="nm">${esc(n.name)}</span><span class="tg">${esc(n.title)}</span>
        <span class="tg" style="font-weight:600;margin-top:4px">${esc(n.role)}</span>
      </button>`).join("")}
  </div>`;
  if (!npc) return html + `<div class="empty">Pick a character to open their entry.</div>`;
  const g = gOf(npc);
  const stats = Object.entries(npc.stats);
  return html + `
  <article class="detail" id="detail" style="--g:${npc.color};--g2:${g ? g.color2 : "#ddd"}">
    <div class="detail-head">
      <div class="big">${ic(npc.icon)}</div>
      <div>
        <div class="eyebrow" style="color:#fffc">${g ? esc(g.name) : ""} · ${esc(npc.role)}</div>
        <h2>${esc(npc.name)}</h2>
        <p>${esc(npc.title)}</p>
      </div>
    </div>
    <div class="detail-body">
      <div class="wide quote">“${esc(npc.quote)}”</div>
      <div class="wide"><h4>Overview</h4><p>${esc(npc.overview)}</p></div>
      <div><h4>Appearance</h4><p>${esc(npc.appearance)}</p><h4>Personality</h4><p>${esc(npc.personality)}</p></div>
      <div class="art-ph"><div><strong>${ic(npc.icon)}</strong>Portrait goes here<br><em>${esc(npc.appearance)}</em></div></div>
      <div class="wide"><h4>Backstory</h4><p>${esc(npc.backstory)}</p></div>
      <div><h4>Secrets (spoilers)</h4>${list(npc.secrets)}</div>
      <div><h4>Relationships</h4><p>${esc(npc.relationships)}</p></div>
      <div><h4>Story hooks &amp; quests</h4>${list(npc.hooks)}</div>
      <div>
        <h4>Field notes</h4>
        <p><span class="pill">${ic("map-pin")} ${esc(npc.location)}</span><span class="pill">${ic("star")} ${esc(npc.level)}</span></p>
        <h4>Stat block</h4>
        <div class="statblock">${stats.map(([k, v]) => `<div><b>${v}</b><span>${esc(k)}</span></div>`).join("")}</div>
      </div>
      <div><h4>Signature abilities</h4>${list(npc.abilities)}</div>
      <div><h4>Loot</h4><p>${npc.loot.split(",").map((x) => `<span class="pill">${esc(x.trim())}</span>`).join("")}</p></div>
    </div>
  </article>`;
}

const STORE = "nda-roadmap-v1";
function loadChecks() { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch { return {}; } }
function saveChecks(c) { try { localStorage.setItem(STORE, JSON.stringify(c)); } catch {} }

function roadmap() {
  const checks = loadChecks();
  return `
  <div class="eyebrow">Project plan</div>
  <h1 style="font-size:2.4rem">Roadmap</h1>
  <p class="muted">Tick off tasks to track progress (saved in this browser). Edit phases in <code>data.js</code>.</p>
  ${PHASES.map((p) => {
    const done = p.tasks.filter((_, i) => checks[`${p.id}:${i}`]).length;
    const pct = Math.round((done / p.tasks.length) * 100);
    return `
    <div class="panel phase">
      <div class="phase-head"><h3 style="margin:0">${esc(p.name)}</h3><span class="status ${p.status}">${p.status.replace("-", " ")}</span></div>
      <p class="muted">${esc(p.summary)}</p>
      <div class="progress"><i style="width:${pct}%"></i></div>
      <div class="muted" style="font-size:.85rem">${done}/${p.tasks.length} done</div>
      ${p.tasks.map((t, i) => `
        <label class="task ${checks[`${p.id}:${i}`] ? "done" : ""}">
          <input type="checkbox" data-task="${p.id}:${i}" ${checks[`${p.id}:${i}`] ? "checked" : ""}><span>${esc(t)}</span>
        </label>`).join("")}
    </div>`;
  }).join("")}`;
}

function art() {
  return `
  <div class="eyebrow">Style guide</div>
  <h1 style="font-size:2.4rem">Art Direction</h1>
  <p class="muted">Samurai Jack energy: painterly watercolor worlds, bold cartoon characters. Adorable, but grounded: real animals, real anatomy, then a dash of cute.</p>
  <div class="grid cols-2">${ART.pillars.map((p) => `<div class="panel"><h3>${esc(p.title)}</h3><div>${esc(p.text)}</div></div>`).join("")}</div>
  <section class="block"><h2>Ground rules</h2><div class="panel">${list(ART.rules)}</div></section>
  <section class="block"><h2>Group color codes</h2>
    <div class="palette">${GROUPS.map((g) => `<div class="sw"><i style="background:${g.color}"></i>${ic(g.icon)} ${esc(g.name)}<br><code>${g.color}</code></div>`).join("")}</div>
  </section>`;
}

/* ---------- router ---------- */
function render() {
  const [, route = "", ...rest] = (location.hash || "#/").split("/");
  let html;
  if (route === "characters") html = characters(...rest);
  else if (route === "manual") html = manual(rest[0]);
  else if (route === "roadmap") html = roadmap();
  else if (route === "art") html = art();
  else html = home();

  app.innerHTML = html;
  document.body.classList.toggle("fit", route === "characters" && !!rest[0] && !!GROUPS.find((g) => g.id === rest[0]));
  const key = route || "home";
  document.querySelectorAll("#nav a").forEach((n) => n.classList.toggle("active", n.dataset.route === key));
  // Tint the 3D rose window with the selected people's / NPC's color.
  const tintColor = route === "characters" && rest[0] ? (GROUPS.find((g) => g.id === rest[0]) || {}).color
    : route === "manual" && rest[0] ? ((MANUAL.npcs.find((n) => n.id === rest[0]) || {}).color) : null;
  if (window.NDA3D) NDA3D.tint(tintColor || null);
  // background layer: only when the selected (deepest) node has its own scene
  const bgSrc = route === "characters" && rest.length > 1 ? NODE_BG[rest[rest.length - 1]] : null;
  const bgEl = document.getElementById("bg");
  if (bgEl) {
    if (bgSrc) bgEl.style.backgroundImage = `url("${bgSrc}")`;
    bgEl.classList.toggle("on", !!bgSrc);
  }
  document.body.classList.toggle("has-bg", !!bgSrc);
  const title = document.querySelector(".detail-head h2, .blk-title h2");
  document.title = (title ? title.textContent + " · " : "") + "The Newer Dark Ages";

  const target = document.getElementById("detail");
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  else if (!render.first) window.scrollTo(0, 0);
  render.first = false;
}
render.first = true;

// Hovering a figure or its people button zooms the matching figure (class toggle keeps CSS generic).
const hot = (e, on) => {
  const el = e.target.closest("[data-people]");
  if (!el) return;
  document.querySelectorAll(`.figure[data-people="${el.dataset.people}"]`).forEach((f) => f.classList.toggle("hot", on));
  const st = document.querySelector(".stage");
  if (st) st.classList.toggle("has-hot", on);
};
// In the workspace the details scroll sideways: let the mouse wheel drive them.
app.addEventListener("wheel", (e) => {
  const d = e.target.closest(".details");
  if (!d || d.scrollWidth <= d.clientWidth || Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
  e.preventDefault();
  d.scrollLeft += e.deltaY;
}, { passive: false });
app.addEventListener("mouseover", (e) => hot(e, true));
app.addEventListener("mouseout", (e) => hot(e, false));
// Gallery mode: hide every UI element and leave only the character and its scene. Any click, Esc or navigation returns.
const closeView = () => document.body.classList.remove("viewing");
document.addEventListener("click", (e) => {
  if (!document.body.classList.contains("viewing")) return;
  e.preventDefault(); e.stopPropagation(); closeView();
}, true);
document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeView(); });
window.addEventListener("hashchange", closeView);
app.addEventListener("click", (e) => {
  if (e.target.closest("[data-view]")) { document.body.classList.add("viewing"); return; }
  const go = e.target.closest("[data-go]");
  if (go) location.hash = go.dataset.go;
});
app.addEventListener("change", (e) => {
  const id = e.target.dataset.task;
  if (!id) return;
  const checks = loadChecks();
  checks[id] = e.target.checked;
  saveChecks(checks);
  const y = window.scrollY;
  render();
  window.scrollTo(0, y);
});
window.addEventListener("hashchange", render);
render();
