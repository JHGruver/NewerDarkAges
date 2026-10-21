const { styles, themes, char } = PG;
const matrix = document.getElementById("matrix");
const overlay = document.getElementById("overlay"), stagewrap = document.getElementById("stagewrap");
const url = (s, t) => `playground-screen.html?s=${s}&t=${t}`;
const fits = (w, h, W, H) => Math.min(W / w, H / h);

let html = `<div></div>`;
for (let s = 1; s <= 3; s++) html += `<div class="colh"><i>Style ${s}</i><b>${styles[s].name}</b><span>${styles[s].note}</span></div>`;
for (let t = 1; t <= 3; t++) {
  html += `<div class="rowh"><i>Theme ${t}</i><b>${themes[t].name}</b><span>${themes[t].note}</span></div>`;
  for (let s = 1; s <= 3; s++) html += `<div class="cell" data-s="${s}" data-t="${t}" tabindex="0" role="button" aria-label="Open ${styles[s].name} style, ${themes[t].name} theme"><div class="frame"><iframe src="${url(s, t)}" loading="lazy" tabindex="-1"></iframe></div><span class="tag ${s === 1 && t === 1 ? "base" : ""}">${s === 1 && t === 1 ? "current site" : `s${s} · t${t}`}</span></div>`;
}
matrix.innerHTML = html;

function sizeCells() {
  matrix.querySelectorAll(".cell").forEach((c) => {
    const w = c.clientWidth, k = w / 1400;
    c.style.height = `${780 * k}px`;
    c.querySelector(".frame").style.transform = `scale(${k})`;
  });
}
new ResizeObserver(sizeCells).observe(matrix); sizeCells();

function open(s, t, v) {
  const W = innerWidth - 40, H = innerHeight - 40, k = Math.min(W / 1400, H / 780);
  stagewrap.style.width = `${1400 * k}px`; stagewrap.style.height = `${780 * k}px`;
  stagewrap.innerHTML = `<iframe src="${v ? "playground-screen.html?v=" + v : url(s, t)}" style="transform:scale(${k})"></iframe>`;
  overlay.hidden = false;
}
const close = () => { overlay.hidden = true; stagewrap.innerHTML = ""; };
matrix.addEventListener("click", (e) => { const c = e.target.closest(".cell"); if (c) open(+c.dataset.s, +c.dataset.t); });
matrix.addEventListener("keydown", (e) => { if ((e.key === "Enter" || e.key === " ") && e.target.classList.contains("cell")) { e.preventDefault(); open(+e.target.dataset.s, +e.target.dataset.t); } });
document.getElementById("cyber").onclick = () => { history.replaceState(null, "", "#cyber"); open(0, 0, "cyber"); };
if (location.hash === "#cyber") open(0, 0, "cyber");
document.getElementById("close").onclick = () => { if (location.hash === "#cyber") history.replaceState(null, "", location.pathname); close(); };
overlay.addEventListener("click", (e) => { if (e.target === overlay) close(); });
addEventListener("keydown", (e) => { if (e.key === "Escape") { if (location.hash === "#cyber") history.replaceState(null, "", location.pathname); close(); } });

// legend: the art each cell can use
const rows = [];
for (let t = 1; t <= 3; t++) for (let s = 1; s <= 3; s++) if (!(s === 1 && t === 1)) rows.push(`<li><code>art/playground/${char.id}-s${s}t${t}-character.png</code> and <code>…-background.jpg</code> <span>(${styles[s].name} × ${themes[t].name})</span></li>`);
document.getElementById("legend").innerHTML = `<h2>Art slots</h2>
<p>Each cell looks for its own character image and background. Missing files fall back to the current ${char.name} art with a CSS treatment and a red "art needed" tag. The top-left cell is the current site and needs nothing new.</p><ul>${rows.join("")}</ul>`;
