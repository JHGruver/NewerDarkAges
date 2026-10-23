// NO-UI VIEW EFFECTS: one weather per people, drawn on a canvas over the art. Human keeps the rain (CSS, styles.css).
//   vampire  bats crossing a drifting crimson mist     were     rising embers and sparks
//   ghost    CRT scanlines, tearing signal bars        undead   falling ash and bone dust
//   forest   fireflies and falling leaves              eldritch rising bubbles and slow caustic light
//   magic    floating runes and twinkling stars
// Colors come from the character's own trio. Reduced-motion visitors get a still frame of the same effect.
(function () {
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const cv = document.createElement("canvas"); cv.id = "fx"; cv.setAttribute("aria-hidden", "true"); document.body.appendChild(cv);
  const cx = cv.getContext("2d"); let W = 0, H = 0, dpr = 1, raf = 0, kind = null, P = [], cols = ["#fff", "#ccc", "#999"], t0 = 0, last = 0;
  const R = (a, b) => a + Math.random() * (b - a), pick = (a) => a[(Math.random() * a.length) | 0];
  function size() { dpr = Math.min(devicePixelRatio || 1, 1.5); W = innerWidth; H = innerHeight; cv.width = W * dpr; cv.height = H * dpr; cx.setTransform(dpr, 0, 0, dpr, 0, 0); }
  addEventListener("resize", () => { if (kind) size(); });
  const hexA = (h, a) => { h = h.replace("#", ""); if (h.length === 3) h = h.replace(/./g, "$&$&"); const n = parseInt(h, 16); return `rgba(${n >> 16},${(n >> 8) & 255},${n & 255},${a})`; };

  /* ---------- particle factories (x, y in px) ---------- */
  const make = {
    vampire: { n: 8, init(i) { const dir = Math.random() < 0.5 ? 1 : -1; return { x: dir > 0 ? R(-300, -40) : R(W + 40, W + 300), y: R(H * 0.08, H * 0.6), vx: dir * R(60, 140), s: R(0.9, 2.1), ph: R(0, 6), fl: R(7, 11), dir }; } },
    were: { n: 90, init(i, boot) { return { x: R(0, W), y: boot ? R(0, H) : H + 10, vy: -R(30, 110), sw: R(8, 34), ph: R(0, 6), r: R(1.8, 4.6), c: pick(cols), life: R(0.7, 1) }; } },
    ghost: { n: 0 },
    undead: { n: 120, init(i, boot) { const z = R(0.4, 1.4); return { x: R(0, W), y: boot ? R(0, H) : -10, vy: R(18, 52) * z, vx: R(-14, 6) * z, r: R(1.6, 5) * z, rot: R(0, 6), vr: R(-1.5, 1.5), a: R(0.4, 0.85), sq: R(0.5, 1) }; } },
    forest: { n: 40, init() { return { x: R(0, W), y: R(H * 0.15, H), ph: R(0, 6), sp: R(0.2, 0.6), rx: R(30, 120), ry: R(20, 80), r: R(2.6, 5.2), c: pick(cols), leaf: Math.random() < 0.28, rot: R(0, 6), vy: R(14, 30), sw: R(20, 50) }; } },
    eldritch: { n: 56, init(i, boot) { return { x: R(0, W), y: boot ? R(0, H) : H + 20, vy: -R(25, 90), ph: R(0, 6), sw: R(6, 22), r: R(3, 18), c: pick(cols) }; } },
    magic: { n: 30, init(i, boot) { return { x: R(0, W), y: boot ? R(0, H) : H + 30, vy: -R(14, 46), ph: R(0, 6), s: R(26, 58), g: (Math.random() * 6) | 0, c: pick(cols), rot: R(-0.3, 0.3), tw: R(0, 6), star: Math.random() < 0.55 }; } },
  };

  /* ---------- drawing ---------- */
  function drawBat(p, t) {
    const f = Math.sin(t * p.fl + p.ph); cx.save(); cx.translate(p.x, p.y + Math.sin(t * 2 + p.ph) * 10); cx.scale(p.s * p.dir, p.s); cx.fillStyle = "rgba(6,4,10,.88)";
    cx.beginPath(); cx.moveTo(0, -4); cx.lineTo(5, -12); cx.lineTo(7, -4);                                      // head + ears
    cx.quadraticCurveTo(22, -16 - f * 10, 44, -6 - f * 6); cx.quadraticCurveTo(34, 0, 36, 7); cx.quadraticCurveTo(26, 1, 20, 8); cx.quadraticCurveTo(14, 2, 7, 6); // right wing, scalloped
    cx.lineTo(0, 12); cx.lineTo(-7, 6); cx.quadraticCurveTo(-14, 2, -20, 8); cx.quadraticCurveTo(-26, 1, -36, 7); cx.quadraticCurveTo(-34, 0, -44, -6 - f * 6); cx.quadraticCurveTo(-22, -16 - f * 10, -7, -4); cx.lineTo(-5, -12); cx.closePath(); cx.fill(); cx.restore();
  }
  function mist(t, c) { for (let i = 0; i < 4; i++) { const x = ((t * 14 + i * W / 3) % (W * 1.4)) - W * 0.2, y = H * (0.55 + 0.1 * Math.sin(t * 0.2 + i)), g = cx.createRadialGradient(x, y, 0, x, y, W * 0.4); g.addColorStop(0, hexA(c, 0.3)); g.addColorStop(1, hexA(c, 0)); cx.fillStyle = g; cx.fillRect(0, 0, W, H); } }
  function drawLeaf(p) { cx.save(); cx.translate(p.x, p.y); cx.rotate(p.rot); cx.fillStyle = hexA(p.c, 0.75); cx.beginPath(); cx.moveTo(0, -p.r * 3.2); cx.quadraticCurveTo(p.r * 2.4, 0, 0, p.r * 3.2); cx.quadraticCurveTo(-p.r * 2.4, 0, 0, -p.r * 3.2); cx.fill(); cx.restore(); }
  function drawGlyph(p, t) {
    const a = Math.max(0, Math.min(1, (H - p.y) / (H * 0.2))) * Math.max(0, Math.min(1, p.y / (H * 0.3))) * 0.8;
    cx.save(); cx.translate(p.x, p.y); cx.rotate(p.rot + Math.sin(t + p.ph) * 0.15); cx.strokeStyle = hexA(p.c, a); cx.fillStyle = hexA(p.c, a); cx.lineWidth = 2.2; cx.shadowColor = p.c; cx.shadowBlur = 12; const s = p.s;
    if (p.star) { const k = 0.5 + 0.5 * Math.sin(t * 3 + p.tw); cx.beginPath(); cx.moveTo(0, -s * 0.5 * k - 2); cx.lineTo(s * 0.12, -s * 0.12); cx.lineTo(s * 0.5 * k + 2, 0); cx.lineTo(s * 0.12, s * 0.12); cx.lineTo(0, s * 0.5 * k + 2); cx.lineTo(-s * 0.12, s * 0.12); cx.lineTo(-s * 0.5 * k - 2, 0); cx.lineTo(-s * 0.12, -s * 0.12); cx.closePath(); cx.fill(); }
    else { cx.beginPath(); if (p.g === 0) { cx.arc(0, 0, s * 0.45, 0, 6.3); cx.moveTo(0, -s * 0.45); cx.lineTo(0, s * 0.45); } else if (p.g === 1) { cx.moveTo(0, -s * 0.5); cx.lineTo(s * 0.45, s * 0.35); cx.lineTo(-s * 0.45, s * 0.35); cx.closePath(); cx.moveTo(0, s * 0.35); cx.lineTo(0, -s * 0.05); } else if (p.g === 2) { cx.rect(-s * 0.35, -s * 0.35, s * 0.7, s * 0.7); cx.moveTo(-s * 0.35, -s * 0.35); cx.lineTo(s * 0.35, s * 0.35); } else if (p.g === 3) { cx.arc(0, 0, s * 0.4, 0.6, 5.7); cx.moveTo(s * 0.4, 0); cx.lineTo(s * 0.62, 0); } else if (p.g === 4) { cx.moveTo(-s * 0.4, -s * 0.4); cx.lineTo(s * 0.4, s * 0.4); cx.moveTo(s * 0.4, -s * 0.4); cx.lineTo(-s * 0.4, s * 0.4); cx.moveTo(0, -s * 0.5); cx.lineTo(0, s * 0.5); } else { cx.moveTo(-s * 0.4, s * 0.3); cx.lineTo(0, -s * 0.45); cx.lineTo(s * 0.4, s * 0.3); cx.moveTo(-s * 0.2, s * 0.05); cx.lineTo(s * 0.2, s * 0.05); } cx.stroke(); }
    cx.restore();
  }
  function ghostFrame(t) {
    // scanlines
    cx.fillStyle = "rgba(0,0,0,.16)"; for (let y = (t * 20) % 4; y < H; y += 4) cx.fillRect(0, y, W, 1.2);
    // a bright band rolling down the screen
    const by = ((t * 0.22) % 1.4 - 0.2) * H, g = cx.createLinearGradient(0, by - 90, 0, by + 90); g.addColorStop(0, hexA(cols[0], 0)); g.addColorStop(0.5, hexA(cols[0], 0.14)); g.addColorStop(1, hexA(cols[0], 0)); cx.fillStyle = g; cx.fillRect(0, by - 90, W, 180);
    // tearing signal bars: short bursts, colored by the trio
    P = P.filter((b) => (b.life -= 0.016) > 0);
    if (Math.random() < 0.06 && P.length < 6) P.push({ y: R(0, H), h: R(6, 40), dx: R(-30, 30), w: R(0.3, 1) * W, x: R(0, W * 0.5), c: pick(cols), life: R(0.15, 0.5) });
    P.forEach((b) => { cx.fillStyle = hexA(b.c, 0.22); cx.fillRect(b.x + b.dx, b.y, b.w, b.h); cx.fillStyle = "rgba(255,255,255,.08)"; cx.fillRect(b.x, b.y + b.h * 0.4, b.w, 2); });
    // RGB-split vertical hairline flicker
    if (Math.random() < 0.04) { cx.fillStyle = hexA(cols[1], 0.2); cx.fillRect(R(0, W), 0, 2, H); }
  }

  function step(now) {
    raf = requestAnimationFrame(step); const t = (now - t0) / 1000, dt = Math.min(0.05, (now - last) / 1000); last = now;
    cx.clearRect(0, 0, W, H);
    if (kind === "ghost") { ghostFrame(t); return; }
    if (kind === "vampire") { mist(t, cols[0]); }
    if (kind === "eldritch") { for (let i = 0; i < 3; i++) { const x = W * (0.2 + 0.3 * i) + Math.sin(t * 0.3 + i * 2) * 120, g = cx.createRadialGradient(x, H * 0.35, 0, x, H * 0.35, W * 0.28); g.addColorStop(0, hexA(cols[i % 3], 0.1 + 0.05 * Math.sin(t * 0.8 + i))); g.addColorStop(1, hexA(cols[i % 3], 0)); cx.fillStyle = g; cx.fillRect(0, 0, W, H); } }
    const spec = make[kind];
    P.forEach((p, i) => {
      if (kind === "vampire") { p.x += p.vx * dt; if ((p.dir > 0 && p.x > W + 200) || (p.dir < 0 && p.x < -200)) Object.assign(p, spec.init(i)); drawBat(p, t); return; }
      if (kind === "were") { p.y += p.vy * dt; p.x += Math.sin(t * 1.4 + p.ph) * p.sw * dt; if (p.y < -10) Object.assign(p, spec.init(i)); const a = Math.min(1, p.y / (H * 0.5)) * p.life * (0.7 + 0.3 * Math.sin(t * 9 + p.ph)); cx.fillStyle = hexA(p.c, a); cx.shadowColor = p.c; cx.shadowBlur = 8; cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.3); cx.fill(); cx.shadowBlur = 0; return; }
      if (kind === "undead") { p.y += p.vy * dt; p.x += (p.vx + Math.sin(t + p.rot) * 8) * dt; p.rot += p.vr * dt; if (p.y > H + 10) Object.assign(p, spec.init(i)); cx.save(); cx.translate(p.x, p.y); cx.rotate(p.rot); cx.fillStyle = `rgba(214,210,196,${p.a})`; cx.fillRect(-p.r, -p.r * p.sq, p.r * 2, p.r * 2 * p.sq); cx.restore(); return; }
      if (kind === "forest") {
        if (p.leaf) { p.y += p.vy * dt; p.x += Math.sin(t * 0.9 + p.ph) * p.sw * dt; p.rot += dt * 1.2; if (p.y > H + 10) { p.y = -10; p.x = R(0, W); } drawLeaf(p); return; }
        const x = p.x + Math.cos(t * p.sp + p.ph) * p.rx, y = p.y + Math.sin(t * p.sp * 1.3 + p.ph) * p.ry, a = 0.35 + 0.65 * Math.max(0, Math.sin(t * 1.6 + p.ph * 3));
        const g = cx.createRadialGradient(x, y, 0, x, y, p.r * 6); g.addColorStop(0, hexA(p.c, a)); g.addColorStop(1, hexA(p.c, 0)); cx.fillStyle = g; cx.fillRect(x - p.r * 6, y - p.r * 6, p.r * 12, p.r * 12); cx.fillStyle = `rgba(255,255,230,${a})`; cx.beginPath(); cx.arc(x, y, p.r * 0.6, 0, 6.3); cx.fill(); return;
      }
      if (kind === "eldritch") { p.y += p.vy * dt; p.x += Math.sin(t * 1.2 + p.ph) * p.sw * dt; if (p.y < -30) Object.assign(p, spec.init(i)); cx.strokeStyle = hexA(p.c, 0.6); cx.lineWidth = 1.4; cx.fillStyle = hexA(p.c, 0.08); cx.beginPath(); cx.arc(p.x, p.y, p.r, 0, 6.3); cx.fill(); cx.stroke(); cx.fillStyle = "rgba(255,255,255,.45)"; cx.beginPath(); cx.arc(p.x - p.r * 0.35, p.y - p.r * 0.35, Math.max(1, p.r * 0.18), 0, 6.3); cx.fill(); return; }
      if (kind === "magic") { p.y += p.vy * dt; p.x += Math.sin(t * 0.7 + p.ph) * 10 * dt; if (p.y < -40) Object.assign(p, spec.init(i)); drawGlyph(p, t); }
    });
  }

  function start(k, pal) {
    stop(); if (!make[k]) return; kind = k; cols = pal; size(); P = []; const spec = make[k];
    for (let i = 0; i < spec.n; i++) { const p = spec.init(i, true); if (k === "vampire") p.x = R(-100, W + 100); P.push(p); }
    t0 = last = performance.now(); cv.classList.add("on");
    if (reduce) { for (let k2 = 0; k2 < 40; k2++) step(t0 + k2 * 50); cancelAnimationFrame(raf); raf = 0; return; }
    raf = requestAnimationFrame(step);
  }
  function stop() { cancelAnimationFrame(raf); raf = 0; kind = null; P = []; cx.clearRect(0, 0, W, H); cv.classList.remove("on"); }

  /* ---------- follow the viewer: start when the no-UI view opens, switch when the viewer steps to another character ---------- */
  let cur = "";
  function sync() {
    if (!document.body.classList.contains("viewing")) { cur = ""; document.body.removeAttribute("data-fx"); stop(); return; }
    const people = (location.hash.split("/")[2] || ""); const fig = document.querySelector(".fig");
    const cs = fig ? getComputedStyle(fig) : null, pal = cs ? ["--c1", "--c2", "--c3"].map((v) => cs.getPropertyValue(v).trim()).filter(Boolean) : [];
    const key = people + pal.join();
    document.body.setAttribute("data-fx", people);
    if (key === cur) return; cur = key;
    start(people, pal.length === 3 ? pal : ["#ffffff", "#cccccc", "#999999"]);
  }
  new MutationObserver(sync).observe(document.body, { attributes: true, attributeFilter: ["class"] });
  const vn = document.getElementById("vn"); if (vn) new MutationObserver(sync).observe(vn, { childList: true });
  addEventListener("hashchange", () => setTimeout(sync, 60));
})();
