// The Newer Dark Ages V2: tiny hash-router SPA.
// Routes: #/  #/characters[/people[/subclass[/character]]]  #/manual[/npc]  #/roadmap  #/art
const app = document.getElementById("app");
const { WORLD, STORY, PHASES, ART, MANUAL, PEOPLE_COLORS } = window;
const GROUPS = GROUP_ORDER.map((id) => GROUP_DEFS[id]);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const list = (items, cls = "") => `<ul class="${cls}">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
const NUMW = ["", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Eleven", "Twelve"];
const SHORT = { human: "Human", vampire: "Vampire", were: "Were", ghost: "Ghost", undead: "Undead", forest: "Forest", eldritch: "Eldritch", magic: "Magic" };
const LEVEL_DEFAULT = ["Subclass", "Specialization"];

document.getElementById("brand-ic").innerHTML = ic("bolt");
document.getElementById("burger-ic").innerHTML = ic("menu");

/* ---------- colors ---------- */
const pv = (g) => `--p:${g.color};--p2:${g.color2}`;
const pal = (g, l) => (l && l.pal ? l.pal : [g.color2, "#f2efe6", "#ffffff"]);
const cv = (g, l) => { const [a, b, c] = pal(g, l); return `${pv(g)};--c1:${a};--c2:${b};--c3:${c}`; };

/* ---------- art we have so far (everything else is a generated placeholder poster) ---------- */
const NODE_ART = {
  etherwing: { src: "art/v2/eldritch-etherwing.png", bg: "art/v2/eldritch-etherwing-bg.jpg", name: "Etherwing Navigator" },
  signalsavants: { src: "art/v2/witch-dialturners.png", bg: "art/v2/witch-dialturners-bg.jpg", name: "Signal Savant" },
  stickywizards: { src: "art/v2/magic-stickywizards.png", bg: "art/v2/magic-stickywizards-bg.jpg", name: "Sticky Wizard" },
  sporecoven: { src: "art/v2/magic-sporecoven.png", bg: "art/v2/magic-sporecoven-bg.jpg", name: "Spore Coven Cultivator" },
  rootlinkwarlocks: { src: "art/v2/forest-rootlinkwarlocks.png", bg: "art/v2/forest-rootlinkwarlocks-bg.jpg", name: "Rootlink Warlock" },
  bonebreakers: { src: "art/v2/undead-bonebreakers.png", bg: "art/v2/undead-bonebreakers-bg.jpg", name: "Riot-Line Bonebreaker" },
  staticwraiths: { src: "art/v2/ghost-staticwraiths.png", bg: "art/v2/ghost-staticwraiths-bg.jpg", name: "Static Wraith" },
  moonrunners: { src: "art/v2/were-moonrunners.png", bg: "art/v2/were-moonrunners-bg.jpg", name: "Moonrunner" },
  interceptors: { src: "art/v2/human-interceptors.png", bg: "art/v2/human-interceptors-bg.jpg", name: "Interceptor" },
  owlwings: { src: "art/v2/vampire-owlwings.png", bg: "art/v2/vampire-owlwings-bg.jpg", name: "Owlwing Watcher" },
};

const metaOf = (l) => CHAR_META[l.id] || { type: l.role === "support" ? "support" : "fighter", physique: "", size: "medium", move: "grounded" };
const minis = (g, l) => {
  const ty = TYPES[metaOf(l).type];
  return `<span class="minis" aria-hidden="true"><b class="mt p" title="${esc(g.name)}">${PEOPLE_LETTER[g.id]}</b><b class="mt t" title="${esc(ty.name)}: ${esc(ty.desc)}">${ty.letter}</b><b class="mt r" title="${l.role === "combat" ? "Combat" : "Support / social"}">${l.role === "combat" ? "C" : "S"}</b></span>`;
};
const allCharacters = () => GROUPS.flatMap((g) => g.subs.flatMap((s) => s.subs.map((l) => ({ g, s, l, path: [g.id, s.id, l.id] }))));

// the poster: people color as the ground, the character trio as shapes. Used wherever art is missing.
const poster = (g, l, extra = "", vt = "") => `
  <span class="poster ${extra}" ${vt ? `data-vt="${vt}"` : ""} style="${cv(g, l)}">
    <i class="pz disc"></i><i class="pz band"></i><i class="pz bolt"></i>
    <span class="pico">${ic(l.icon)}</span>
  </span>`;

/* ---------- art prompts (generated for every character) ---------- */
const charPrompt = (g, s, l) => PROMPTS.char(g, s, l);
const bgPrompt = (g, s, l) => PROMPTS.bg(g, s, l);
const promptStore = {};

/* ---------- views ---------- */
function home() {
  const total = allCharacters().length;
  return `
  <div class="hero hero-min">
    <div class="eyebrow">${esc(WORLD.mantra)}</div>
    <h1 class="mono-title">${esc(WORLD.title)}</h1>
    <p class="lede">${NUMW[GROUPS.length]} peoples fighting over what the Last Broadcast left behind.</p>
    <a class="btn" href="#/characters">Choose your character →</a>
  </div>

  <section class="block"><h2>The world</h2>
    <div class="panel"><p style="margin:0;max-width:78ch">${esc(WORLD.pitch)}</p></div></section>

  <section class="block"><h2>The look</h2>
    <div class="grid cols-2">${WORLD.tone.map((t) => `<div class="panel">${esc(t)}</div>`).join("")}</div></section>

  <section class="block"><h2>The ${NUMW[GROUPS.length] || GROUPS.length} Peoples <span class="muted sub">· ${total} characters</span></h2>
    <div class="grid cols-3">${GROUPS.map((g) => `
      <a class="panel people-card" style="${pv(g)}" href="#/characters/${g.id}">
        <span class="swatch" style="background:${g.color}"></span>
        <div class="pico2">${ic(g.icon)}</div>
        <h3>${esc(g.name)}</h3>
        <div class="muted">${esc(g.tagline)}</div>
        <div class="meta">${PEOPLE_COLORS[g.id].name} · ${g.subs.reduce((n, s) => n + s.subs.length, 0)} characters</div>
      </a>`).join("")}</div></section>

  <section class="block"><h2>The Story So Far</h2>
    <div class="grid cols-2">${STORY.map((s, i) => `<div class="panel"><h3>${i + 1}. ${esc(s.title)}</h3><div class="muted">${esc(s.text)}</div></div>`).join("")}</div></section>

  <section class="block"><h2>The Land</h2>
    <div class="grid regions">${WORLD.regions.map((r) => `<div class="panel"><h3>${ic(r.icon)} ${esc(r.name)}</h3><div class="muted">${esc(r.text)}</div></div>`).join("")}</div></section>`;
}

/* ----- character gallery (top level) ----- */
let galleryFilter = null, roleFilter = null, statusFilter = "complete"; // default view: everyone, finished characters only
try { galleryFilter = sessionStorage.getItem("nda2-filter") || null; roleFilter = sessionStorage.getItem("nda2-role") || null; statusFilter = sessionStorage.getItem("nda2-status") || "complete"; } catch {}
const saveFilters = () => { try { galleryFilter ? sessionStorage.setItem("nda2-filter", galleryFilter) : sessionStorage.removeItem("nda2-filter"); roleFilter ? sessionStorage.setItem("nda2-role", roleFilter) : sessionStorage.removeItem("nda2-role"); sessionStorage.setItem("nda2-status", statusFilter || "complete"); } catch {} };
let mixOrder = null;
const mixed = (chars) => {
  if (!mixOrder) { mixOrder = allCharacters().map((c) => c.l.id); for (let i = mixOrder.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [mixOrder[i], mixOrder[j]] = [mixOrder[j], mixOrder[i]]; } }
  return [...chars].sort((x, y) => mixOrder.indexOf(x.l.id) - mixOrder.indexOf(y.l.id));
};

function gcard(c, i = 0) {
  const art = NODE_ART[c.l.id];
  return `
    <a class="gc ${art ? "done" : "pending"}" style="${cv(c.g, c.l)};--i:${i}" href="#/characters/${c.path.join("/")}" title="${esc(c.l.name)}">
      <span class="gframe">${art ? `<img data-vt="${c.l.id}" src="${art.src}" alt="${esc(art.name)}" loading="lazy">` : poster(c.g, c.l, "", c.l.id)}${minis(c.g, c.l)}</span>
      <span class="gtrio"><i style="background:${c.g.color}"></i><i style="background:${c.l.pal[0]}"></i><i style="background:${c.l.pal[1]}"></i><i style="background:${c.l.pal[2]}"></i></span>
      <span class="cn">${esc(c.l.name)}</span>
      <span class="cs">${galleryFilter ? esc(c.s.name) : `${esc(SHORT[c.g.id])} · ${esc(c.s.name)}`}</span>
    </a>`;
}

function gallery() {
  const all = allCharacters();
  const isDone = (c) => !!NODE_ART[c.l.id];
  const chars = all.filter((c) => (!roleFilter || c.l.role === roleFilter) && (!statusFilter || statusFilter === "any" || (statusFilter === "complete" ? isDone(c) : !isDone(c))));
  const doneCount = all.filter(isDone).length;
  const fg = GROUPS.find((g) => g.id === galleryFilter);
  const counts = (g) => all.filter((c) => c.g === g).length;
  const filters = GROUPS.map((g) => `
    <button class="filter ${g.id === galleryFilter ? "sel" : ""}" style="${pv(g)}" data-filter="${g.id}" aria-pressed="${g.id === galleryFilter}" title="${esc(g.name)} (${counts(g)})" aria-label="${esc(g.name)}">
      <i class="chip" style="background:${g.color}"></i><span class="ico">${ic(g.icon)}</span><span class="nm">${esc(g.name)}</span><span class="ct">${counts(g)}</span>
    </button>`).join("");
  const roles = `<div class="roles" role="group" aria-label="Filter by role and status">
      ${[[null, "All"], ["combat", "Combat"], ["support", "Support"]].map(([r, n]) => `<button class="rf ${roleFilter === r ? "sel" : ""}" data-role="${r || ""}">${n}</button>`).join("")}
      <span class="rsep"></span>
      ${[["any", "Any status"], ["complete", `Completed · ${doneCount}`], ["pending", `In progress · ${all.length - doneCount}`]].map(([s, n]) => `<button class="rf st ${statusFilter === s ? "sel" : ""}" data-status="${s}">${n}</button>`).join("")}
    </div>`;
  const shown = galleryFilter ? chars.filter((c) => c.g.id === galleryFilter) : chars;
  const emptyMsg = `<div class="empty">No characters match these filters. <button class="linkbtn" data-status="any">Show any status</button></div>`;
  let body;
  if (!shown.length) body = emptyMsg;
  else if (!galleryFilter) body = `<div class="gmix">${mixed(chars).map((c, i) => gcard(c, i)).join("")}</div>`;
  else body = `
    <section class="gsec" style="${pv(fg)}">
      <header class="ghead"><span class="gi">${ic(fg.icon)}</span><div><h2>${esc(fg.name)}</h2><p>${esc(fg.tagline)}</p></div><span class="gcount">${shown.length} character${shown.length === 1 ? "" : "s"}</span></header>
      <div class="gsubs">${fg.subs.map((s) => { const cs = shown.filter((c) => c.s === s); return cs.length ? `<div class="gsub"><h3><span class="sub-ico">${ic(s.icon)}</span>${esc(s.name)}</h3><div class="ggrid" style="--n:${cs.length}">${cs.map((c, i) => gcard(c, i)).join("")}</div></div>` : ""; }).join("")}</div>
    </section>`;
  const combat = all.filter((c) => c.l.role === "combat").length;
  return `
  <div class="page-head gal-head">
    <div class="title"><div class="eyebrow">Character select</div><h1>Choose your character</h1></div>
    <div class="gal-right">${viewSwitch("vertical")}<div class="gal-note">${galleryFilter ? `Showing ${esc(fg.name)} · <button class="linkbtn" data-filter="">show everyone</button>` : `${all.length} characters · ${combat} combat, ${all.length - combat} support · ${doneCount} completed`}</div></div>
  </div>
  <div class="filters" role="group" aria-label="Filter by people">${filters}</div>
  ${roles}
  ${body}`;
}

/* ----- view switch: vertical display (gallery) <-> horizontal view (details) ----- */
let lastDetails = null; try { lastDetails = sessionStorage.getItem("nda3-last") || null; } catch {}
const viewSwitch = (active) => `<div class="vswitch" role="group" aria-label="Switch display">
  <button class="${active === "vertical" ? "on" : ""}" data-vmode="vertical" aria-pressed="${active === "vertical"}">${ic("view-vertical")}<span>Vertical display</span></button>
  <button class="${active === "horizontal" ? "on" : ""}" data-vmode="horizontal" aria-pressed="${active === "horizontal"}">${ic("view-horizontal")}<span>Horizontal view</span></button>
</div>`;

/* ----- details view ----- */
function chooserTree(group, trail, names) {
  const base = `#/characters/${group.id}`;
  const tabs = GROUPS.map((g) => `
    <button class="tab ${g.id === group.id ? "sel" : ""}" style="${pv(g)}" data-go="#/characters/${g.id}" title="${esc(g.name)}"><span class="ico">${ic(g.icon)}</span><span class="nm">${SHORT[g.id]}</span></button>`).join("");
  const [s1, s2] = trail;
  const rows = group.subs.map((s) => {
    const open = s1 && s1.id === s.id;
    const kids = open ? `
        <div class="tlabel sub">${esc(names[1])} <i>in ${esc(s.name)}</i></div>
        <ul class="tl l2">${s.subs.map((k) => `
          <li class="tn leaf"><button class="trow ${s2 && s2.id === k.id ? "sel" : ""}" style="--c1:${k.pal[0]}" data-go="${base}/${s.id}/${k.id}"><span class="ico">${ic(k.icon)}</span><span class="nm">${esc(k.name)}</span><em class="role ${k.role}">${k.role === "support" ? "S" : "C"}</em></button></li>`).join("")}</ul>` : "";
    return `
      <li class="tn ${open ? "open" : ""}"><button class="trow ${open ? "sel" : ""}" data-go="${base}/${s.id}" aria-expanded="${open}"><span class="ico">${ic(s.icon)}</span><span class="nm">${esc(s.name)}</span><span class="chev">${ic(open ? "chevron-down" : "chevron-right")}</span></button>${kids}</li>`;
  }).join("");
  return `
    <div class="tabs">${tabs}</div>
    <div class="tree" role="navigation" aria-label="${esc(group.name)} choices">
      <div class="tlabel">${esc(names[0])} <i>${esc(group.name)}</i></div>
      <ul class="tl l1">${rows}</ul>
    </div>`;
}

const profile = (g, l) => {
  const m = metaOf(l), ty = TYPES[m.type];
  return `<div class="profile">
    <div class="ptype"><span class="mt t big">${ty.letter}</span><div><b>${esc(ty.name)}</b><small>${esc(ty.desc)}</small></div></div>
    <dl class="attrs">
      <div><dt>People</dt><dd><span class="mt p">${PEOPLE_LETTER[g.id]}</span>${esc(g.name)}</dd></div>
      <div><dt>Role</dt><dd><span class="mt r">${l.role === "combat" ? "C" : "S"}</span>${l.role === "combat" ? "Combat" : "Support / social"}</dd></div>
      <div><dt>Physique</dt><dd>${esc(m.physique)}</dd></div>
      <div><dt>Size</dt><dd>${esc(SIZES[m.size])}</dd></div>
      <div><dt>Mobility</dt><dd>${esc(MOVES[m.move])}</dd></div>
    </dl></div>`;
};
const swatchRow = (g, l) => {
  const items = [["People", g.color], ["Main", l.pal[0]], ["Secondary", l.pal[1]], ["Pop", l.pal[2]]];
  return `<div class="swatches">${items.map(([n, c]) => `<div class="sw2"><i style="background:${c}"></i><b>${n}</b><code>${c}</code></div>`).join("")}</div>`;
};

function detailBlocks(group, trail, names) {
  const node = trail.length ? trail[trail.length - 1] : group;
  const leaf = trail.length === 2 ? node : null;
  const crumbs = [group.name, ...trail.map((t) => t.name)];
  let h = `
    <div class="blk blk-title">
      <div class="eyebrow">${crumbs.map(esc).join(" › ")}</div>
      <h2>${ic(node.icon)} ${esc(node.name)}${leaf ? `<em class="role ${leaf.role}">${leaf.role}</em>` : ""}</h2>
      <p class="tagline">${esc(node.tagline)}</p>
    </div>
    <div class="blk"><h4>Overview</h4><p>${esc(node.summary)}</p></div>
    <div class="blk"><h4>Background &amp; lore</h4><p>${esc(node.lore)}</p></div>`;
  if (!trail.length) {
    h += `<div class="blk"><h4>Playstyle</h4><p>${esc(node.playstyle)}</p></div>
    <div class="blk"><h4>Tendencies</h4><div class="bars">${Object.entries(node.traits).map(([k, v]) => `<div class="bar"><span>${k}</span><span class="track"><span class="fill" style="width:${v * 20}%"></span></span></div>`).join("")}</div></div>
    <div class="blk"><h4>People color</h4><div class="swatches"><div class="sw2"><i style="background:${node.color}"></i><b>${PEOPLE_COLORS[node.id].name}</b><code>${node.color}</code></div></div><p class="muted">The background color for every scene of this people.</p></div>`;
    (node.extras || []).forEach((ex) => {
      h += `<div class="blk blk-title"><div class="eyebrow">Rules</div><h3>${esc(ex.title)}</h3></div>`;
      ex.items.forEach((it) => { h += `<div class="blk"><h4>${esc(it.name)}</h4><p>${esc(it.desc)}</p></div>`; });
    });
  } else if (leaf) {
    const key = leaf.id; const sub = trail[0];
    promptStore[key + "-c"] = charPrompt(group, sub, leaf); promptStore[key + "-b"] = bgPrompt(group, sub, leaf);
    h += `
    <div class="blk"><h4>Class profile</h4>${profile(group, leaf)}</div>
    <div class="blk"><h4>Strengths</h4>${list(leaf.strengths, "good")}</div>
    <div class="blk"><h4>Weaknesses</h4>${list(leaf.weaknesses, "bad")}</div>
    <div class="blk"><h4>Signature abilities</h4>${list(leaf.abilities)}</div>
    <div class="blk"><h4>Starting gear</h4><p>${leaf.gear.split(",").map((x) => `<span class="pill">${esc(x.trim())}</span>`).join("")}</p><h4>What they look like</h4><p>${esc(leaf.look)}</p>${window.ART_SPEC && ART_SPEC[leaf.id] ? `<h4>Scene props (background only)</h4><p class="muted">${esc(ART_SPEC[leaf.id].p)}</p>` : ""}</div>
    <div class="blk"><h4>Four-color palette</h4>${swatchRow(group, leaf)}<p class="muted">The people color is the background; the trio belongs to this character (about 60 / 30 / 10).</p></div>
    <div class="blk prompts"><h4>Art prompts</h4>
      ${(() => { const f = PROMPTS.lint(group, sub, leaf); return f.length ? `<p class="sjfail">Samurai Jack check: ${f.length} issue${f.length > 1 ? "s" : ""}: ${esc(f.join("; "))}</p>` : `<p class="sjpass">${ic("star")} Samurai Jack check passed</p>`; })()}
      <details><summary>Character prompt</summary><textarea readonly rows="9">${esc(promptStore[key + "-c"])}</textarea><button class="copy" data-copy="${key}-c">Copy</button></details>
      <details><summary>Background prompt</summary><textarea readonly rows="9">${esc(promptStore[key + "-b"])}</textarea><button class="copy" data-copy="${key}-b">Copy</button></details>
    </div>`;
  } else {
    h += `<div class="blk"><h4>Go deeper</h4><p>${node.subs.length} ${esc(names[1].toLowerCase())}${/s$/.test(names[1]) ? "es" : "s"} to choose from, listed on the left or in the middle.</p></div>`;
  }
  return h;
}

function characters(...path) {
  const [gid, ...rest] = path;
  const group = GROUPS.find((g) => g.id === gid);
  if (!group) return gallery();
  const trail = []; let cur = group;
  for (const id of rest) { const next = cur && cur.subs && cur.subs.find((s) => s.id === id); if (!next) break; trail.push(next); cur = next; }
  const names = group.levelNames || LEVEL_DEFAULT;
  lastDetails = location.hash; try { sessionStorage.setItem("nda3-last", lastDetails); } catch {}
  const head = `
  <div class="page-head">
    <div class="titlerow">
      <a class="back-btn" href="#/characters" title="Back to all characters">${ic("arrow-left")}<span>All characters</span></a>
      <div class="title"><div class="eyebrow">Character details</div><h1>${esc(group.name)}${trail.length ? ` <span class="crumb">› ${esc(trail[trail.length - 1].name)}</span>` : ""}</h1></div>
    </div>
    <div class="steps">
      ${viewSwitch("horizontal")}
      <span class="step">1 · ${esc(group.name)}</span>
      <span class="step ${trail.length === 0 ? "on" : ""}">2 · ${esc(names[0])}${trail[0] ? ` = ${esc(trail[0].name)}` : ""}</span>
      <span class="step ${trail.length === 1 ? "on" : ""}">3 · ${esc(names[1])}${trail[1] ? ` = ${esc(trail[1].name)}` : ""}</span>
    </div>
  </div>`;
  const chooser = chooserTree(group, trail, names);
  const node = trail.length ? trail[trail.length - 1] : group;
  const leaf = trail.length === 2 ? node : null;
  const ids0 = [gid, ...trail.map((t) => t.id)];
  const leaves = (n, ids) => (n.subs || []).flatMap((s) => (s.subs ? leaves(s, [...ids, s.id]) : [{ ...s, path: [...ids, s.id] }]));
  const figs = leaf ? [] : leaves(node, ids0);
  const art = leaf && NODE_ART[leaf.id];
  const gstyle = leaf ? cv(group, leaf) : pv(group);
  const miniGrid = figs.length ? `
      <div class="minigrid ${figs.length > 9 ? "dense" : ""}" style="--cols:${figs.length <= 4 ? 2 : figs.length <= 9 ? 3 : figs.length <= 16 ? 4 : figs.length <= 30 ? 5 : 6}">
        ${figs.map((f) => { const a = NODE_ART[f.id]; return `<a class="mp ${a ? "done" : "pending"}" style="${cv(group, f)}" data-go="#/characters/${f.path.join("/")}" title="${esc(f.name)}">${a ? `<img src="${a.src}" alt="${esc(f.name)}">` : poster(group, f)}<b>${esc(f.name)}</b></a>`; }).join("")}
      </div>` : "";
  const stage = leaf
    ? `<div class="hero-fig">${art ? `<img data-vt="${leaf.id}" src="${art.src}" alt="${esc(art.name)}">` : poster(group, leaf, "big", leaf.id)}</div>
       ${art ? `<button class="view-btn" data-view title="View the artwork full screen">${ic("maximize")}<span>View art</span></button>` : ""}
       <div class="trio-bar"><i style="background:${group.color}"></i><i style="background:${leaf.pal[0]}"></i><i style="background:${leaf.pal[1]}"></i><i style="background:${leaf.pal[2]}"></i></div>`
    : miniGrid;
  return `${head}
  <div class="workspace" style="${gstyle}">
    <aside class="chooser">${chooser}</aside>
    <figure class="fig ${leaf ? "single" : "multi"} ${art ? "has-art" : ""}" ${art ? 'data-view tabindex="0" role="button" aria-label="View the artwork full screen"' : ""}>
      ${stage}
      <figcaption>${esc(leaf ? (art ? art.name : leaf.name) : node.name)}</figcaption>
    </figure>
    <div class="details-wrap">
      <section class="details" tabindex="0" aria-label="Details">${detailBlocks(group, trail, names)}</section>
      <div class="scroll-hint">Scroll →</div>
    </div>
  </div>`;
}

/* ----- monster manual ----- */
function manual(nid) {
  const npc = MANUAL.npcs.find((n) => n.id === nid);
  const g = (n) => GROUPS.find((x) => x.id === n.group);
  const html = `
  <div class="eyebrow">World building</div><h1 class="pg">Monster Manual</h1>
  <p class="muted" style="max-width:72ch">${esc(MANUAL.intro)}</p>
  <div class="mgrid">${MANUAL.npcs.map((n) => {
    const gr = g(n); const fake = { icon: n.icon, pal: n.pal };
    return `<a class="mcard ${n.id === nid ? "sel" : ""}" style="${cv(gr, fake)}" href="#/manual/${n.id}"><span class="mposter">${poster(gr, fake)}</span><b>${esc(n.name)}</b><span class="tg">${esc(n.title)}</span><em class="role ${n.role.toLowerCase().includes("antagonist") ? "combat" : "support"}">${esc(n.role)}</em></a>`;
  }).join("")}</div>`;
  if (!npc) return html + `<div class="empty">Pick a character to open their entry.</div>`;
  const gr = g(npc); const fake = { icon: npc.icon, pal: npc.pal };
  return html + `
  <article class="detail" id="detail" style="${cv(gr, fake)}">
    <div class="detail-head">
      <div class="dh-poster">${poster(gr, fake)}</div>
      <div><div class="eyebrow">${esc(gr.name)} · ${esc(npc.role)}</div><h2>${esc(npc.name)}</h2><p>${esc(npc.title)}</p></div>
    </div>
    <div class="detail-body">
      <div class="wide quote">“${esc(npc.quote)}”</div>
      <div class="wide"><h4>Overview</h4><p>${esc(npc.overview)}</p></div>
      <div><h4>Appearance</h4><p>${esc(npc.appearance)}</p><h4>Personality</h4><p>${esc(npc.personality)}</p></div>
      <div><h4>Four-color palette</h4>${swatchRow(gr, fake)}<h4 style="margin-top:14px">Field notes</h4><p><span class="pill">${ic("map-pin")} ${esc(npc.location)}</span><span class="pill">${ic("star")} ${esc(npc.level)}</span></p></div>
      <div class="wide"><h4>Backstory</h4><p>${esc(npc.backstory)}</p></div>
      <div><h4>Secrets (spoilers)</h4>${list(npc.secrets)}</div>
      <div><h4>Relationships</h4><p>${esc(npc.relationships)}</p></div>
      <div><h4>Story hooks &amp; quests</h4>${list(npc.hooks)}</div>
      <div><h4>Stat block</h4><div class="statblock">${Object.entries(npc.stats).map(([k, v]) => `<div><b>${v}</b><span>${esc(k)}</span></div>`).join("")}</div></div>
      <div><h4>Signature abilities</h4>${list(npc.abilities)}</div>
      <div><h4>Loot</h4><p>${npc.loot.split(",").map((x) => `<span class="pill">${esc(x.trim())}</span>`).join("")}</p></div>
    </div>
  </article>`;
}

/* ----- roadmap ----- */
const STORE = "nda3-roadmap"; // tasks: {id, t, done?}; done seeds the box until the viewer ticks or unticks it
const taskOn = (checks, p, k) => (checks[`${p.id}:${k.id}`] !== undefined ? checks[`${p.id}:${k.id}`] : !!k.done);
function loadChecks() { try { return JSON.parse(localStorage.getItem(STORE)) || {}; } catch { return {}; } }
function saveChecks(c) { try { localStorage.setItem(STORE, JSON.stringify(c)); } catch {} }
function roadmap() {
  const checks = loadChecks();
  return `
  <div class="eyebrow">Project plan</div><h1 class="pg">Roadmap</h1>
  <p class="muted">Tick off tasks to track progress (saved in this browser). Edit phases in <code>data.js</code>.</p>
  ${PHASES.map((p) => {
    const done = p.tasks.filter((k) => taskOn(checks, p, k)).length; const pct = Math.round((done / p.tasks.length) * 100);
    return `<div class="panel phase"><div class="phase-head"><h3>${esc(p.name)}</h3><span class="status ${p.status}">${p.status.replace("-", " ")}</span></div>
      <p class="muted">${esc(p.summary)}</p><div class="progress"><i style="width:${pct}%"></i></div><div class="muted small">${done}/${p.tasks.length} done</div>
      ${p.tasks.map((k) => `<label class="task ${taskOn(checks, p, k) ? "done" : ""}"><input type="checkbox" data-task="${p.id}:${k.id}" ${taskOn(checks, p, k) ? "checked" : ""}><span>${esc(k.t)}</span></label>`).join("")}</div>`;
  }).join("")}`;
}

/* ----- art direction ----- */
function art() {
  const all = allCharacters();
  return `
  <div class="eyebrow">Style guide</div><h1 class="pg">Art Direction</h1>
  <p class="muted" style="max-width:72ch">Mantra: <b>${esc(WORLD.mantra)}</b>. Glam-rock noir with gadgets, painted in ink and charcoal, lit by four colors at a time.</p>
  <a class="panel pg-link" href="playground.html"><div class="eyebrow">Experiment</div><h3>Open the style × theme playground →</h3><div class="muted">The nine-way comparison that led to this direction, plus the Neon Scavenger test. Also reachable from the menu.</div></a>
  <div class="grid cols-2">${ART.pillars.map((p) => `<div class="panel"><h3>${esc(p.title)}</h3><div>${esc(p.text)}</div></div>`).join("")}</div>
  <section class="block"><h2>Ground rules</h2><div class="panel">${list(ART.rules)}</div></section>
  <section class="block"><h2>Samurai Jack Test</h2>
    <div class="grid cols-2">
      <div class="panel"><h3>Review every generated character against this</h3>${list(PROMPTS.SJ_TEST.replace(/^SAMURAI JACK TEST \(the image must pass all of these\): /, "").replace(/\.$/, "").split(/ \(\d\) /).map((x) => x.replace(/^\(\d\) /, "").replace(/;\s*$/, "").replace(/;$/, "")).filter(Boolean))}</div>
      <div class="panel"><h3>Prompt quality check</h3>${(() => { const all = allCharacters(); const bad = all.map((c) => [c, PROMPTS.lint(c.g, c.s, c.l)]).filter(([, f]) => f.length); return bad.length ? `<p><b>${all.length - bad.length} of ${all.length}</b> prompts pass.</p>${list(bad.slice(0, 12).map(([c, f]) => `${c.l.name}: ${f.join("; ")}`))}` : `<p class="sjpass big">${ic("star")} <b>${all.length} of ${all.length}</b> character prompts pass.</p><p class="muted">Each prompt is checked for 14 required elements: the Samurai Jack style, flat shapes, bold angular silhouette, clean outlines, no gradients or soft shading, the thumbnail and flat-regions tests, full-body framing, a three-color palette, transparency, wearable gear only, the type pose and the physique, plus banned words, large props and an outfit-length limit.</p>`; })()}</div>
    </div></section>

  <section class="block"><h2>Character types</h2>
    <p class="muted" style="max-width:72ch">Every character has one type. The tile badges read: people letter, type letter, role letter (C combat, S support).</p>
    <div class="types">${Object.entries(TYPES).map(([k, t]) => `<div class="panel typecard"><span class="mt t big">${t.letter}</span><div><b>${esc(t.name)}</b><small>${esc(t.desc)}</small><em>${allCharacters().filter((c) => metaOf(c.l).type === k).length} characters</em></div></div>`).join("")}</div>
    <div class="legend-row">${GROUPS.map((g) => `<span class="pill"><span class="mt p">${PEOPLE_LETTER[g.id]}</span>${esc(g.name)}</span>`).join("")}</div></section>

  <section class="block"><h2>People colors</h2>
    <div class="palette">${GROUPS.map((g) => `<div class="sw"><i style="background:${g.color}"></i>${ic(g.icon)} ${esc(g.name)}<br><b>${PEOPLE_COLORS[g.id].name}</b> <code>${g.color}</code></div>`).join("")}</div></section>
  <section class="block"><h2>Palette atlas <span class="muted sub">· ${all.length} characters</span></h2>
    <p class="muted" style="max-width:72ch">Each card shows the people color (background) beside the character's trio. Click any card to open that character and copy its art prompts.</p>
    <div class="atlas">${all.map((c) => `
      <a class="at" style="${cv(c.g, c.l)}" href="#/characters/${c.path.join("/")}">
        <span class="atbar"><i style="background:${c.g.color}"></i><i style="background:${c.l.pal[0]}"></i><i style="background:${c.l.pal[1]}"></i><i style="background:${c.l.pal[2]}"></i></span>
        <b>${esc(c.l.name)}</b><span class="tg">${esc(c.g.name)} · ${c.l.role}</span></a>`).join("")}</div></section>`;
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
  const inChars = route === "characters" && rest[0] && GROUPS.find((g) => g.id === rest[0]);
  document.body.classList.toggle("fit", !!inChars);
  document.body.dataset.page = route === "characters" && !inChars ? "gallery" : (route || "home");
  document.querySelectorAll("#nav a, .mnav a").forEach((n) => n.classList.toggle("active", n.dataset.route === (route || "home")));
  const tint = route === "characters" ? (rest[0] ? (GROUPS.find((g) => g.id === rest[0]) || {}).color : (GROUPS.find((g) => g.id === galleryFilter) || {}).color) : null;
  if (window.NDA3D) NDA3D.tint(tint || null);
  // scene background only for a character that has its own scene
  const leafId = route === "characters" && rest.length === 3 ? rest[2] : null;
  const bgSrc = leafId && NODE_ART[leafId] ? NODE_ART[leafId].bg : null;
  setScene(bgSrc);
  document.body.classList.toggle("has-bg", !!bgSrc);
  const t = document.querySelector(".blk-title h2, .detail-head h2");
  document.title = (t ? t.textContent.trim() + " · " : "") + "The Newer Dark Ages";
  const target = document.getElementById("detail");
  if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
  else if (!render.first) window.scrollTo(0, 0);
  render.first = false;
  closeDrawer();
}
render.first = true;

/* ---------- scene backgrounds: two stacked layers crossfade ---------- */
const bgA = document.getElementById("bg"); const bgB = bgA.cloneNode(); bgB.id = "bg2"; bgA.after(bgB);
let bgActive = null, bgSrcNow = null;
function setScene(src) {
  if (src === bgSrcNow) return;
  bgSrcNow = src;
  const next = bgActive === bgA ? bgB : bgA;
  if (src) {
    next.style.backgroundImage = `url("${src}")`;
    next.classList.remove("on"); void next.offsetWidth; next.classList.add("on");
    if (bgActive) bgActive.classList.remove("on");
    bgActive = next;
  } else if (bgActive) { bgActive.classList.remove("on"); bgActive = null; }
}

/* ---------- page transitions (View Transitions API, with graceful fallback) ---------- */
const reduceMotion = () => matchMedia("(prefers-reduced-motion: reduce)").matches;
const canVT = () => !!document.startViewTransition && !reduceMotion();
const leafOf = (h) => { const p = h.split("/"); return p[1] === "characters" && p.length >= 5 ? p[4] : null; };
let lastHash = location.hash;
function transition(fn, id) {
  if (!canVT()) { fn(); return; }
  const old = id && document.querySelector(`[data-vt="${id}"]`);
  if (old) old.style.viewTransitionName = "hero";
  const t = document.startViewTransition(() => { fn(); const nu = id && document.querySelector(`[data-vt="${id}"]`); if (nu) nu.style.viewTransitionName = "hero"; });
  t.finished.finally(() => document.querySelectorAll("[data-vt]").forEach((e) => (e.style.viewTransitionName = "")));
}

/* ---------- viewer: swipe on touch screens ---------- */
let tsx = null;
document.addEventListener("touchstart", (e) => { if (document.body.classList.contains("viewing") && !e.target.closest("#vn")) tsx = e.touches[0].clientX; else tsx = null; }, { passive: true });
document.addEventListener("touchend", (e) => {
  if (tsx === null) return; const dx = e.changedTouches[0].clientX - tsx; tsx = null;
  if (Math.abs(dx) > 50) { viewStep(dx < 0 ? 1 : -1); e.preventDefault(); }
}, { passive: false });

/* ---------- gallery hover: 80s icons ride out of the horizon sun along the grid ---------- */
let hoverOff = 0;
app.addEventListener("mouseover", (e) => {
  const t = e.target.closest && e.target.closest(".gc"); if (!t || !window.NDA3D) return;
  if (e.relatedTarget && t.contains(e.relatedTarget)) return;
  clearTimeout(hoverOff); NDA3D.hover(getComputedStyle(t).getPropertyValue("--c1").trim() || "#ffffff", (t.getAttribute("href") || "").split("/")[2]); document.body.classList.add("tile-hover");
});
app.addEventListener("mouseout", (e) => {
  const t = e.target.closest && e.target.closest(".gc"); if (!t || !window.NDA3D) return;
  if (e.relatedTarget && t.contains(e.relatedTarget)) return;
  clearTimeout(hoverOff); hoverOff = setTimeout(() => { NDA3D.hover(null); document.body.classList.remove("tile-hover"); }, 140);
});

/* ---------- hamburger drawer ---------- */
const drawer = document.getElementById("drawer"), scrim = document.getElementById("scrim"), burger = document.getElementById("burger");
function openDrawer() { drawer.classList.add("open"); scrim.classList.add("on"); burger.setAttribute("aria-expanded", "true"); drawer.setAttribute("aria-hidden", "false"); }
function closeDrawer() { drawer.classList.remove("open"); scrim.classList.remove("on"); burger.setAttribute("aria-expanded", "false"); drawer.setAttribute("aria-hidden", "true"); }
burger.addEventListener("click", () => (drawer.classList.contains("open") ? closeDrawer() : openDrawer()));
scrim.addEventListener("click", closeDrawer);

/* ---------- gallery mode: hide the UI and show only the art ---------- */
/* ---------- art-only viewing ---------- */
// While viewing, arrows and a small dot strip let you move between every character that has finished art.
const vn = document.createElement("div"); vn.id = "vn"; document.body.appendChild(vn);
const viewList = () => allCharacters().filter((c) => NODE_ART[c.l.id]);
const viewIndex = (list) => list.findIndex((c) => c.l.id === (location.hash.split("/")[4] || ""));
function buildViewer() {
  const list = viewList(); const cur = viewIndex(list);
  const [pg, ps, pl] = location.hash.split("/").slice(2);
  const me = allCharacters().find((c) => c.g.id === pg && c.s.id === ps && c.l.id === pl);
  const plaque = me ? `<div class="vn-plaque" style="${cv(me.g, me.l)}"><span class="pq-ico">${ic(me.g.icon)}</span><div class="pq-txt"><b class="pq-name">${esc(me.l.name)}</b><span class="pq-path">${esc(me.g.name)} <i>›</i> ${esc(me.s.name)} <i>›</i> ${esc(me.l.name)}</span></div><span class="pq-pips"><i></i><i></i><i></i></span></div>` : "";
  if (list.length < 2 || cur < 0) { vn.innerHTML = plaque; return; }
  vn.innerHTML = plaque + `
    <button class="vn-arrow prev" data-vstep="-1" aria-label="Previous character">${ic("chevron-left")}</button>
    <button class="vn-arrow next" data-vstep="1" aria-label="Next character">${ic("chevron-right")}</button>
    <div class="vn-dock" aria-label="Characters with finished art">
      <div class="vn-dots">${list.map((c, i) => `<i class="${i === cur ? "on" : ""}"></i>`).join("")}</div>
      <div class="vn-strip">${list.map((c, i) => `<button class="${i === cur ? "on" : ""}" data-vgo="${c.path.join("/")}" title="${esc(c.l.name)}"><img src="${NODE_ART[c.l.id].src}" alt="${esc(c.l.name)}"><span>${esc(c.l.name)}</span></button>`).join("")}</div>
    </div>`;
}
let keepView = false;
function viewStep(d) {
  const list = viewList(); const cur = viewIndex(list);
  if (list.length < 2 || cur < 0) return;
  goView(list[(cur + d + list.length) % list.length].path.join("/"));
}
function goView(path) { keepView = true; location.hash = `#/characters/${path}`; }
const closeView = () => { document.body.classList.remove("viewing"); keepView = false; };
const openView = () => { buildViewer(); document.body.classList.add("viewing"); };
document.addEventListener("click", (e) => {
  if (!document.body.classList.contains("viewing")) return;
  const ctl = e.target.closest("#vn");
  if (ctl) {
    e.preventDefault(); e.stopPropagation();
    const st = e.target.closest("[data-vstep]"), go = e.target.closest("[data-vgo]");
    if (st) viewStep(+st.dataset.vstep); else if (go) goView(go.dataset.vgo);
    else if (e.target.closest(".vn-dock")) e.target.closest(".vn-dock").classList.toggle("open");
    return;
  }
  e.preventDefault(); e.stopPropagation(); closeView();
}, true);
document.addEventListener("keydown", (e) => {
  if ((e.key === "Enter" || e.key === " ") && e.target.matches && e.target.matches(".fig.has-art")) { e.preventDefault(); openView(); return; }
  if (e.key === "Escape") { closeView(); closeDrawer(); }
  else if (document.body.classList.contains("viewing") && (e.key === "ArrowRight" || e.key === "ArrowLeft")) { e.preventDefault(); viewStep(e.key === "ArrowRight" ? 1 : -1); }
});
window.addEventListener("hashchange", () => {
  const stay = keepView; keepView = false;
  const prev = lastHash; lastHash = location.hash;
  const run = () => {
    if (!stay) document.body.classList.remove("viewing");
    render();
    if (stay) { buildViewer(); document.body.classList.add("viewing"); }
  };
  if (stay) { run(); return; }
  const pl = leafOf(prev), nl = leafOf(location.hash);
  // the character image travels between the gallery tile and the details page
  const morph = pl === nl ? pl : (!pl || !nl) ? (pl || nl) : null;
  transition(run, morph);
});

app.addEventListener("click", (e) => {
  const f = e.target.closest("[data-filter]");
  if (f) { const id = f.dataset.filter || null; galleryFilter = id === galleryFilter ? null : id; saveFilters(); transition(render); return; }
  const vm = e.target.closest("[data-vmode]");
  if (vm) {
    const hp = location.hash.split("/");
    if (vm.dataset.vmode === "vertical") { if (hp[1] === "characters" && hp[2]) { galleryFilter = hp[2]; saveFilters(); } location.hash = "#/characters"; }
    else { const keep = lastDetails && (!galleryFilter || lastDetails.split("/")[2] === galleryFilter); location.hash = keep ? lastDetails : `#/characters/${galleryFilter || GROUPS[0].id}`; }
    return;
  }
  const r = e.target.closest("[data-role]");
  if (r) { roleFilter = r.dataset.role || null; saveFilters(); transition(render); return; }
  const st = e.target.closest("[data-status]");
  if (st) { statusFilter = st.dataset.status || "any"; saveFilters(); transition(render); return; }
  const cp = e.target.closest("[data-copy]");
  if (cp) { const txt = promptStore[cp.dataset.copy]; (navigator.clipboard ? navigator.clipboard.writeText(txt) : Promise.reject()).then(() => { cp.textContent = "Copied"; setTimeout(() => (cp.textContent = "Copy"), 1400); }).catch(() => { const ta = cp.parentElement.querySelector("textarea"); ta.select(); }); return; }
  if (e.target.closest("[data-view]")) { openView(); return; }
  const go = e.target.closest("[data-go]");
  if (go) location.hash = go.dataset.go;
});
app.addEventListener("change", (e) => {
  const id = e.target.dataset.task; if (!id) return;
  const c = loadChecks(); c[id] = e.target.checked; saveChecks(c); const y = scrollY; render(); scrollTo(0, y);
});
// the sideways details scroll with the mouse wheel
app.addEventListener("wheel", (e) => {
  const d = e.target.closest(".details");
  if (!d || d.scrollWidth <= d.clientWidth || Math.abs(e.deltaY) < Math.abs(e.deltaX)) return;
  if (e.target.closest("textarea")) return;
  e.preventDefault(); d.scrollLeft += e.deltaY;
}, { passive: false });

render();
