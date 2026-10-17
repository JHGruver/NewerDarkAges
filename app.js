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
  { people: "human", src: "art/human-warden.png", name: "Lantern Warden", path: "human/wardens/silverlanterns" },
  { people: "vampire", src: "art/vampire-roseblade.png", name: "Rose Blade Duelist", path: "vampire/velvet/rapierroses" },
  { people: "were", src: "art/were-kitsune.png", name: "Lantern Fox", path: "were/fox/lanternfoxes" },
  { people: "ghost", src: "art/ghost-wanderer.png", name: "Talisman Wanderer", path: "ghost/wisplights/marshlamps" },    // drop art into /art and set src to fill a slot
  { people: "undead", src: "art/undead-drummer.png", name: "Drum Corps Skeleton", path: "undead/boneguard/drumcorps" },
  { people: "forest", src: "art/forest-dryad.png", name: "Grove Guardian", path: "forest/greenwardens/groveguardians" },
  { people: "witch", src: "art/witch-moon.png", name: "Moon Witch", path: "witch/hedgewitches" },
];
const NODE_ART = { wardens: 0, silverlanterns: 0, velvet: 1, rapierroses: 1, fox: 2, lanternfoxes: 2, wisplights: 3, marshlamps: 3, boneguard: 4, drumcorps: 4, greenwardens: 5, groveguardians: 5, hedgewitches: 6 };
const artFor = (id) => (id in NODE_ART ? PARTY[NODE_ART[id]] : null);
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

function nodeCards(parent, group, pathIds, selId, label) {
  const base = `#/characters/${[group.id, ...pathIds].join("/")}`;
  return `
  <h2 style="margin-top:28px">${esc(label)} <span class="muted" style="font-size:1rem;font-family:var(--mono);letter-spacing:.1em">· ${parent.subs.length} to choose from</span></h2>
  <div class="sub-grid">
    ${parent.subs.map((s) => `
      <button class="scard ${s.id === selId ? "sel" : ""}" data-go="${base}/${s.id}">
        <span class="ico">${ic(s.icon)}</span><span class="nm">${esc(s.name)}</span><span class="tg">${esc(s.tagline)}</span>
        ${s.subs ? `<span class="tg" style="margin-top:4px;font-weight:600">${s.subs.length} ${esc(((group.levelNames || LEVEL_DEFAULT)[pathIds.length + 1] || "Variant").toLowerCase())}s inside →</span>` : ""}
      </button>`).join("")}
  </div>`;
}

function detail(node, group, trail) {
  const crumbs = [group.name, ...trail.map((t) => t.name)];
  return `
  <article class="detail" id="detail" style="${gStyle(group)}">
    <div class="detail-head">
      <div class="big">${ic(node.icon)}</div>
      <div>
        <div class="eyebrow" style="color:#fffc">${crumbs.map(esc).join(" › ")}</div>
        <h2>${esc(node.name)}</h2>
        <p>${esc(node.tagline)}</p>
      </div>
    </div>
    <div class="detail-body">
      <div class="wide"><h4>Overview</h4><p>${esc(node.summary)}</p></div>
      <div><h4>Background &amp; Lore</h4><p>${esc(node.lore)}</p></div>
      ${artFor(node.id) ? `<div class="art-img"><img src="${artFor(node.id).src}" alt="${esc(node.name)}"></div>` : `<div class="art-ph"><div><strong>${ic(node.icon)}</strong>Character art goes here<br><em>${esc(node.look)}</em></div></div>`}
      <div><h4>Strengths</h4>${list(node.strengths, "good")}</div>
      <div><h4>Weaknesses</h4>${list(node.weaknesses, "bad")}</div>
      <div><h4>Signature Abilities</h4>${list(node.abilities)}</div>
      <div>
        <h4>Starting Gear</h4><p>${node.gear.split(",").map((x) => `<span class="pill">${esc(x.trim())}</span>`).join("")}</p>
        <h4>Art Direction</h4><p>${esc(node.look)}</p>
      </div>
    </div>
  </article>`;
}

function extrasBlock(group) {
  if (!group.extras) return "";
  return group.extras.map((ex) => `
  <section class="block" style="${gStyle(group)}">
    <h2>${esc(ex.title)}</h2>
    <div class="grid cols-2">${ex.items.map((it) => `
      <div class="panel" style="border-left:8px solid var(--g)"><h3>${esc(it.name)}</h3><div>${esc(it.desc)}</div></div>`).join("")}
    </div>
  </section>`).join("");
}

function characters(...path) {
  const [gid, ...rest] = path;
  const group = GROUPS.find((g) => g.id === gid);
  // Walk the tree following the path; stop at the first id that does not exist.
  const trail = [];
  let cur = group;
  for (const id of rest) {
    const next = cur && cur.subs && cur.subs.find((s) => s.id === id);
    if (!next) break;
    trail.push(next); cur = next;
  }
  const names = group ? group.levelNames || LEVEL_DEFAULT : LEVEL_DEFAULT;

  let html = `
  <div class="page-head">
  <div class="title"><div class="eyebrow">Character Select</div><h1>Who will you be?</h1></div>
  <div class="steps">
    <span class="step ${!group ? "on" : ""}">1 · Choose a people</span>
    ${(group ? names.slice(0, 2) : ["Subclass", "Specialization"]).map((n, i) => `<span class="step ${group && trail.length === i ? "on" : ""}">${i + 2} · Choose a ${esc(n.toLowerCase())}</span>`).join("")}
    <span class="step ${trail.length >= 1 ? "on" : ""}">Read the details</span>
  </div>
  </div>
  `;
  const totem = `
  <aside class="totem" aria-label="Choose a people">
    <div class="eyebrow">Peoples</div>
    ${GROUPS.map((g) => `
      <button class="tcard ${g.id === gid ? "sel" : ""}" data-people="${g.id}" style="${gStyle(g)}" data-go="#/characters/${g.id}" title="${esc(g.name)}">
        <span class="ico">${ic(g.icon)}</span><span class="nm">${esc(g.name)}</span>
      </button>`).join("")}
  </aside>`;
  let body = "";
  const wrap = () => `${html}${stage(gid)}<div class="select-layout">${totem}<div class="select-main">${body}</div></div>`;

  if (!group) return (body = `<div class="empty">Pick a people on the left to see their paths.</div>`, wrap());

  body += `
  <div class="group-banner" style="${gStyle(group)}">
    <div>
      <div class="big">${ic(group.icon)}</div>
      <h2>${esc(group.name)}</h2>
      <p><strong>${esc(group.tagline)}</strong></p>
      <p>${esc(group.summary)}</p>
      <p class="muted">${esc(group.lore)}</p>
      <p><span class="eyebrow">Playstyle</span><br>${esc(group.playstyle)}</p>
    </div>
    <div class="bars">
      <div class="eyebrow">Group tendencies</div>
      ${Object.entries(group.traits).map(([k, v]) => `
        <div class="bar"><span>${k}</span><span class="track"><span class="fill" style="width:${v * 20}%"></span></span></div>`).join("")}
    </div>
  </div>`;

  // One row of cards per level already walked, so you can jump sideways at any depth.
  let parent = group; const ids = [];
  for (let d = 0; d <= trail.length; d++) {
    if (!parent.subs) break;
    const sel = trail[d] ? trail[d].id : null;
    // Only show the next unselected row once, after the detail, if the chain ended on a node with children.
    if (d < trail.length) body += nodeCards(parent, group, ids, sel, `${names[d] || "Variant"}`);
    if (trail[d]) { ids.push(trail[d].id); parent = trail[d]; }
  }
  if (!trail.length) body += nodeCards(group, group, [], null, names[0]);

  if (trail.length) {
    body += detail(trail[trail.length - 1], group, trail);
    const last = trail[trail.length - 1];
    if (last.subs) body += nodeCards(last, group, ids, null, `Choose a ${names[trail.length] || "variant"} within ${last.name}`);
  }
  if (!trail.length) body += extrasBlock(group);
  else if (group.extras) body += `<p class="muted" style="margin-top:20px">Rules for this people are on the <a href="#/characters/${group.id}" style="text-decoration:underline">${esc(group.name)} overview</a>.</p>`;
  return wrap();
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
  const key = route || "home";
  document.querySelectorAll("#nav a").forEach((n) => n.classList.toggle("active", n.dataset.route === key));
  // Tint the 3D rose window with the selected people's / NPC's color.
  const tintColor = route === "characters" && rest[0] ? (GROUPS.find((g) => g.id === rest[0]) || {}).color
    : route === "manual" && rest[0] ? ((MANUAL.npcs.find((n) => n.id === rest[0]) || {}).color) : null;
  if (window.NDA3D) NDA3D.tint(tintColor || null);
  const title = document.querySelector(".detail-head h2");
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
app.addEventListener("mouseover", (e) => hot(e, true));
app.addEventListener("mouseout", (e) => hot(e, false));
app.addEventListener("click", (e) => {
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
