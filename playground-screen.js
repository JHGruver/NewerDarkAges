// Renders ONE character-select screen for a given style (?s=1..3) and theme (?t=1..3).
// Uses the same markup/classes as the real details view so styles.css styles it; playground-variants.css restyles it.
(function () {
  const q = new URLSearchParams(location.search);
  const S = +q.get("s") || 1, T = +q.get("t") || 1;
  const { char, themes } = PG;

  // merge Vampire/Were files into GROUPS, like the real app
  GROUP_ORDER.forEach((id) => { if (GROUP_DEFS[id]) { const i = GROUPS.findIndex((g) => g.id === id); if (i < 0) GROUPS.push(GROUP_DEFS[id]); else GROUPS[i] = GROUP_DEFS[id]; } });
  GROUPS.sort((a, b) => GROUP_ORDER.indexOf(a.id) - GROUP_ORDER.indexOf(b.id));

  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const list = (items, cls = "") => `<ul class="${cls}">${items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
  const SHORT = { human: "Human", vampire: "Vampire", were: "Were", ghost: "Ghost", undead: "Undead", forest: "Forest", witch: "Witch" };
  document.getElementById("brand-ic").innerHTML = ic("cloud-fog");

  const [gid, sid, lid] = char.path;
  const group = GROUPS.find((g) => g.id === gid);
  const sub = group.subs.find((s) => s.id === sid);
  const leaf = sub.subs.find((s) => s.id === lid);
  const names = group.levelNames;
  const copy = T === 1 ? null : PG.copy[T];
  const cellId = `s${S}t${T}`;
  const artFile = `art/playground/${char.id}-${cellId}-character.png`;
  const bgFile = `art/playground/${char.id}-${cellId}-background.jpg`;

  const tabs = GROUPS.map((g) => `
      <button class="tab ${g.id === gid ? "sel" : ""}" style="--g:${g.color};--g2:${g.color2}"><span class="ico">${ic(g.icon)}</span><span class="nm">${SHORT[g.id]}</span></button>`).join("");
  const rows = group.subs.map((s) => {
    const open = s.id === sid;
    const kids = open ? `
          <div class="tlabel sub">${esc(names[1])} <i>in ${esc(s.name)}</i></div>
          <ul class="tl l2">${s.subs.map((k) => `
            <li class="tn leaf"><button class="trow ${k.id === lid ? "sel" : ""}"><span class="ico">${ic(k.icon)}</span><span class="nm">${esc(k.name)}</span></button></li>`).join("")}</ul>` : "";
    return `
        <li class="tn ${open ? "open" : ""}"><button class="trow ${open ? "sel" : ""}"><span class="ico">${ic(s.icon)}</span><span class="nm">${esc(s.name)}</span><span class="chev">${s.subs ? ic(open ? "chevron-down" : "chevron-right") : ""}</span></button>${kids}</li>`;
  }).join("");
  const chooser = `
    <div class="tabs">${tabs}</div>
    <div class="tree"><div class="tlabel">${esc(names[0])} <i>${esc(group.name)}</i></div><ul class="tl l1">${rows}</ul></div>`;

  const crumbs = [group.name, sub.name, leaf.name];
  const title = `
    <div class="blk blk-title">
      <div class="eyebrow">${crumbs.map(esc).join(" › ")}</div>
      <h2>${ic(leaf.icon)} ${esc(leaf.name)}</h2>
      <p class="tagline">${esc(copy ? copy.tagline : leaf.tagline)}</p>
    </div>`;
  const bars = (stats) => `<div class="bars">${Object.entries(stats).map(([k, v]) => `<div class="bar"><span>${k}</span><span class="track"><span class="fill" style="width:${v * 20}%"></span></span></div>`).join("")}</div>`;
  let blocks;
  if (T === 1) {
    blocks = `${title}
    <div class="blk"><h4>Overview</h4><p>${esc(leaf.summary)}</p></div>
    <div class="blk"><h4>Background &amp; lore</h4><p>${esc(leaf.lore)}</p></div>
    <div class="blk"><h4>Strengths</h4>${list(leaf.strengths, "good")}</div>
    <div class="blk"><h4>Weaknesses</h4>${list(leaf.weaknesses, "bad")}</div>
    <div class="blk"><h4>Signature abilities</h4>${list(leaf.abilities)}</div>
    <div class="blk"><h4>Starting gear</h4><p>${leaf.gear.split(",").map((x) => `<span class="pill">${esc(x.trim())}</span>`).join("")}</p><h4>What they look like</h4><p>${esc(leaf.look)}</p></div>`;
  } else if (T === 2) {
    blocks = `${title}
    <div class="blk"><h4>Who they are</h4><p>${esc(copy.summary)}</p></div>
    <div class="blk"><h4>The long story</h4><p>${esc(copy.lore)}</p></div>
    <div class="blk"><h4>Mask</h4><p><span class="pill">${esc(copy.mask)}</span></p><h4>Appetite</h4><p><span class="pill">${esc(copy.appetite)}</span></p></div>
    <div class="blk"><h4>Gifts</h4>${list(copy.gifts, "good")}</div>
    <div class="blk"><h4>Burdens</h4>${list(copy.burdens, "bad")}</div>
    <div class="blk"><h4>Signature moves</h4>${list(copy.moves)}</div>
    <div class="blk"><h4>Whispers</h4><p class="whisper">${esc(copy.whisper)}</p></div>`;
  } else {
    blocks = `${title}
    <div class="blk"><h4>Combat profile</h4><p>${esc(copy.summary)}</p></div>
    <div class="blk"><h4>Doctrine</h4><p>${esc(copy.lore)}</p></div>
    <div class="blk"><h4>Ratings</h4>${bars(copy.stats)}</div>
    <div class="blk"><h4>Loadout</h4><ul class="loadout">${copy.loadout.map(([k, v]) => `<li><b>${esc(k)}</b><span>${esc(v)}</span></li>`).join("")}</ul></div>
    <div class="blk"><h4>Strengths</h4>${list(copy.strengths, "good")}</div>
    <div class="blk"><h4>Exposed</h4>${list(copy.exposed, "bad")}</div>
    <div class="blk"><h4>Techniques</h4>${list(copy.techniques)}</div>`;
  }

  // dedicated art if the file exists; otherwise the current art + a CSS treatment and an "art needed" tag
  const probe = (src) => new Promise((res) => { const i = new Image(); i.onload = () => res(true); i.onerror = () => res(false); i.src = src; });
  Promise.all([probe(artFile), probe(bgFile)]).then(([hasArt, hasBg]) => {
    const isBase = S === 1 && T === 1;
    const art = hasArt ? artFile : char.baseArt;
    const bg = hasBg ? bgFile : char.baseBg;
    document.body.className = `fit has-bg st-${S} t-${T} ${isBase || hasArt ? "" : "fb-art"} ${isBase || hasBg ? "" : "fb-bg"}`;
    document.body.style.setProperty("--acc", group.color);
    document.getElementById("bg").style.backgroundImage = `url("${bg}")`;
    document.getElementById("bg").classList.add("on");
    const missing = [!isBase && !hasArt && "character", !isBase && !hasBg && "background"].filter(Boolean);
    document.getElementById("app").innerHTML = `
    <div class="page-head">
      <div class="titlerow">
        <a class="back-btn">${ic("arrow-left")}<span>All characters</span></a>
        <div class="title"><div class="eyebrow">${esc(themes[T].eyebrow)}</div><h1>${esc(group.name)} <span class="crumb">› ${esc(leaf.name)}</span></h1></div>
      </div>
      <div class="steps">
        <span class="step">1 · ${esc(group.name)}</span>
        <span class="step">2 · ${esc(names[0])} = ${esc(sub.name)}</span>
        <span class="step on">3 · ${esc(names[1])} = ${esc(leaf.name)}</span>
      </div>
    </div>
    <div class="workspace" style="--g:${group.color};--g2:${group.color2}">
      <aside class="chooser">${chooser}</aside>
      <figure class="fig n1" style="--cols:1">
        <div class="fi"><img src="${art}" alt="${esc(char.name)}"></div>
        <figcaption>${esc(char.name)}</figcaption>
        ${missing.length ? `<div class="need">art needed: ${missing.join(" + ")}</div>` : ""}
      </figure>
      <div class="details-wrap"><section class="details">${blocks}</section></div>
    </div>`;
  });
})();
