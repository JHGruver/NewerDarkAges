// 80s post-apocalypse backdrop (three.js): a slow synth grid, a striped half-sun and floating lightning bolts.
// NDA3D.tint(hex|null) recolors the sun and bolts to the selected people's color.
(function () {
  if (!window.THREE) return;
  const T = THREE;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let renderer;
  try { renderer = new T.WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement; canvas.id = "scene"; document.body.prepend(canvas);

  const scene = new T.Scene();
  scene.fog = new T.Fog(0x08080b, 20, 90);
  const camera = new T.PerspectiveCamera(58, 1, 0.1, 200);
  camera.position.set(0, 3.2, 10); camera.lookAt(0, 4, -40);

  const BASE = new T.Color(0xff5fb0), tintC = new T.Color(0xff5fb0);
  const gridMat = new T.LineBasicMaterial({ color: 0x6fe9ff, transparent: true, opacity: 0.3 });
  const pts = [];
  for (let x = -60; x <= 60; x += 3) pts.push(x, 0, 10, x, 0, -120);
  for (let z = -120; z <= 12; z += 3) pts.push(-60, 0, z, 60, 0, z);
  const gg = new T.BufferGeometry(); gg.setAttribute("position", new T.Float32BufferAttribute(pts, 3));
  const grid = new T.LineSegments(gg, gridMat); grid.position.y = -0.5; scene.add(grid);

  // striped half-sun on the horizon
  const sunMat = new T.MeshBasicMaterial({ color: BASE.clone(), transparent: true, opacity: 0.55, fog: false });
  const sun = new T.Mesh(new T.CircleGeometry(24, 64), sunMat); sun.position.set(0, 14, -95); scene.add(sun);
  const cut = new T.MeshBasicMaterial({ color: 0x08080b, fog: false });
  for (let i = 0; i < 7; i++) { const h = 0.5 + i * 0.55, b = new T.Mesh(new T.PlaneGeometry(60, h), cut); b.position.set(0, 14 - 3 - i * 3.2, -94.5); scene.add(b); }

  // lightning bolts (Bowie): outlined, drifting
  const boltShape = new T.Shape();
  [[0.2, 1], [-0.45, -0.1], [-0.05, -0.1], [-0.25, -1], [0.5, 0.15], [0.08, 0.15]].forEach(([x, y], i) => (i ? boltShape.lineTo(x, y) : boltShape.moveTo(x, y)));
  boltShape.closePath();
  const bg = new T.ShapeGeometry(boltShape);
  const edge = new T.EdgesGeometry(bg);
  const bolts = [];
  for (let i = 0; i < 7; i++) {
    const m = new T.LineSegments(edge, new T.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.55 }));
    const s = 2 + Math.random() * 3.5;
    m.scale.setScalar(s);
    m.position.set((Math.random() - 0.5) * 60, 4 + Math.random() * 14, -20 - Math.random() * 55);
    m.rotation.z = (Math.random() - 0.5) * 0.7;
    m.userData = { ph: Math.random() * 6.28, y0: m.position.y, sp: 0.2 + Math.random() * 0.4 };
    scene.add(m); bolts.push(m);
  }

  const target = new T.Color(0xff5fb0); let amt = 0, goal = 0;
  /* ---- hover icons: 80s shapes rise out of the horizon sun and ride the grid toward the viewer ---- */
  const GROUND = -0.5;
  const mk = {
    pyramid: () => new T.ConeGeometry(1.4, 2.3, 4),
    diamond: () => new T.OctahedronGeometry(1.25),
    cube: () => new T.BoxGeometry(1.7, 1.7, 1.7),
    ring: () => new T.TorusGeometry(1.3, 0.14, 6, 28),
    tetra: () => new T.TetrahedronGeometry(1.5),
    dome: () => new T.SphereGeometry(1.3, 10, 6, 0, Math.PI * 2, 0, Math.PI / 2),
  };
  const starPts = []; for (let i = 0; i < 10; i++) { const a = (i / 10) * Math.PI * 2 - Math.PI / 2, r = i % 2 ? 0.6 : 1.5; starPts.push(new T.Vector3(Math.cos(a) * r, Math.sin(a) * r, 0)); }
  const flatShapes = {
    star: () => new T.BufferGeometry().setFromPoints([...starPts, starPts[0]]),
    triangle: () => new T.BufferGeometry().setFromPoints([new T.Vector3(0, 1.6, 0), new T.Vector3(1.5, -1, 0), new T.Vector3(-1.5, -1, 0), new T.Vector3(0, 1.6, 0)]),
    bolt: () => edge,
    crescent: () => { const p = []; for (let i = 0; i <= 16; i++) { const a = -1.9 + (i / 16) * 3.8; p.push(new T.Vector3(Math.cos(a) * 1.5, Math.sin(a) * 1.5, 0)); } for (let i = 16; i >= 0; i--) { const a = -1.9 + (i / 16) * 3.8; p.push(new T.Vector3(Math.cos(a) * 1.1 + 0.55, Math.sin(a) * 1.1, 0)); } return new T.BufferGeometry().setFromPoints(p); },
    bat: () => new T.BufferGeometry().setFromPoints([[0, 0.5], [0.4, 1], [0.6, 0.4], [1.6, 0.9], [1.3, 0], [1.9, -0.5], [0.9, -0.4], [0.4, -1], [0, -0.5], [-0.4, -1], [-0.9, -0.4], [-1.9, -0.5], [-1.3, 0], [-1.6, 0.9], [-0.6, 0.4], [-0.4, 1], [0, 0.5]].map(([x, y]) => new T.Vector3(x, y, 0))),
    leaf: () => { const p = []; for (let i = 0; i <= 12; i++) { const a = (i / 12) * Math.PI; p.push(new T.Vector3(Math.sin(a) * 0.9, -1.5 + (i / 12) * 3, 0)); } for (let i = 12; i >= 0; i--) { const a = (i / 12) * Math.PI; p.push(new T.Vector3(-Math.sin(a) * 0.9, -1.5 + (i / 12) * 3, 0)); } p.push(new T.Vector3(0, -2.1, 0)); return new T.BufferGeometry().setFromPoints(p); },
    eye: () => { const p = []; for (let i = 0; i <= 20; i++) { const x = -1.8 + (i / 20) * 3.6; p.push(new T.Vector3(x, 0.9 * (1 - (x / 1.8) ** 2), 0)); } for (let i = 20; i >= 0; i--) { const x = -1.8 + (i / 20) * 3.6; p.push(new T.Vector3(x, -0.9 * (1 - (x / 1.8) ** 2), 0)); } for (let i = 0; i <= 14; i++) { const a = (i / 14) * 6.283; p.push(new T.Vector3(Math.cos(a) * 0.4, Math.sin(a) * 0.4, 0)); } return new T.BufferGeometry().setFromPoints(p); },
    spiral: () => { const p = []; for (let i = 0; i <= 50; i++) { const a = i * 0.28, r = 0.1 + i * 0.03; p.push(new T.Vector3(Math.cos(a) * r * 1.4, Math.sin(a) * r * 1.4, 0)); } return new T.BufferGeometry().setFromPoints(p); },
    hourglass: () => new T.BufferGeometry().setFromPoints([[-1, 1.6], [1, 1.6], [-1, -1.6], [1, -1.6], [-1, 1.6]].map(([x, y]) => new T.Vector3(x, y, 0))),
    cross: () => new T.BufferGeometry().setFromPoints([[-0.4, 1.6], [0.4, 1.6], [0.4, 0.6], [1.2, 0.6], [1.2, -0.2], [0.4, -0.2], [0.4, -1.6], [-0.4, -1.6], [-0.4, -0.2], [-1.2, -0.2], [-1.2, 0.6], [-0.4, 0.6], [-0.4, 1.6]].map(([x, y]) => new T.Vector3(x, y, 0))),
    pentagram: () => { const p = []; for (let i = 0; i <= 5; i++) { const a = (i * 2 / 5) * Math.PI * 2 - Math.PI / 2; p.push(new T.Vector3(Math.cos(a) * 1.5, Math.sin(a) * 1.5, 0)); } return new T.BufferGeometry().setFromPoints(p); },
    screen: () => new T.BufferGeometry().setFromPoints([[-1.6, 1.1], [1.6, 1.1], [1.6, -1.1], [-1.6, -1.1], [-1.6, 1.1], [-1.2, 0.7], [1.2, 0.7], [1.2, -0.7], [-1.2, -0.7], [-1.2, 0.7]].map(([x, y]) => new T.Vector3(x, y, 0))),
    flip: () => new T.BufferGeometry().setFromPoints([new T.Vector3(0, -1.6, 0), new T.Vector3(1.5, 1, 0), new T.Vector3(-1.5, 1, 0), new T.Vector3(0, -1.6, 0)]),
  };
  mk.coffin = () => new T.BoxGeometry(1.2, 2.8, 1);
  mk.fang = () => new T.ConeGeometry(0.7, 2.6, 3);
  mk.hat = () => new T.ConeGeometry(1.3, 2.8, 6);
  const PEOPLE_SHAPES = {
    human: ["ring", "cube", "triangle", "bolt", "pyramid"],
    vampire: ["fang", "crescent", "bat", "diamond"],
    were: ["fang", "crescent", "tetra", "triangle", "bolt"],
    ghost: ["screen", "dome", "ring", "diamond"],
    undead: ["cross", "coffin", "tetra", "dome"],
    forest: ["leaf", "pyramid", "dome", "star"],
    eldritch: ["eye", "spiral", "ring", "diamond"],
    magic: ["star", "hat", "hourglass", "pentagram", "crescent", "eye", "spiral", "ring", "bolt"],
  };
  let kinds = [...Object.keys(mk), ...Object.keys(flatShapes)];
  const palette = [0xff5fb0, 0x6fe9ff, 0xffd60a, 0xffffff];
  const icons = []; let hovering = false, hoverCol = new T.Color(0xffffff), spawnT = 0, speed = 3, speedGoal = 3, gridZ = 0, lastT = 0;
  function spawnIcon() {
    if (icons.length > 30) return;
    const kind = kinds[(Math.random() * kinds.length) | 0];
    const col = Math.random() < 0.45 ? hoverCol.clone() : new T.Color(palette[(Math.random() * palette.length) | 0]);
    const g = new T.Group();
    const lineMat = new T.LineBasicMaterial({ color: col, transparent: true, opacity: 0, fog: false, blending: T.AdditiveBlending, depthWrite: false });
    if (mk[kind]) {
      const geo = mk[kind]();
      g.add(new T.LineSegments(new T.EdgesGeometry(geo, 20), lineMat));
      g.add(new T.Mesh(geo, new T.MeshBasicMaterial({ color: col, transparent: true, opacity: 0, side: T.DoubleSide, depthWrite: false, fog: false, blending: T.AdditiveBlending })));
    } else {
      const geo = flatShapes[kind]();
      g.add(kind === "bolt" ? new T.LineSegments(geo, lineMat) : new T.Line(geo, lineMat));
    }
    const s = 1.5 + Math.random() * 1.6; g.scale.setScalar(s);
    const x = (Math.random() - 0.5) * 80;
    g.position.set(x, GROUND + 1.2 * s + (Math.random() < 0.4 ? Math.random() * 3 : 0), -108);
    g.userData = { spin: (Math.random() - 0.5) * 1.2, mats: g.children.map((c) => c.material), base: g.children.map((c) => (c.isMesh ? 0.16 : 0.9)) };
    scene.add(g); icons.push(g);
  }
  function stepIcons(dt) {
    for (let i = icons.length - 1; i >= 0; i--) {
      const g = icons[i];
      g.position.z += speed * dt; g.rotation.y += g.userData.spin * dt;
      const z = g.position.z, fade = Math.min(1, Math.max(0, (z + 100) / 28)) * Math.min(1, Math.max(0, (-1 - z) / 14));
      g.userData.mats.forEach((m, k) => (m.opacity = g.userData.base[k] * fade));
      if (z > 4) { scene.remove(g); g.traverse((o) => { if (o.geometry && o.geometry !== edge) o.geometry.dispose(); if (o.material) o.material.dispose(); }); icons.splice(i, 1); }
    }
  }

  window.NDA3D = {
    hover(hex, people) {
      if (reduce) return;
      kinds = PEOPLE_SHAPES[people] || [...Object.keys(mk), ...Object.keys(flatShapes)];
      if (hex) { hoverCol.set(hex); hovering = true; speedGoal = 17; } else { hovering = false; speedGoal = 3; }
    },
    tint(hex) { if (hex) { target.set(hex); goal = 1; } else { target.copy(BASE); goal = 0; } },
  };

  const mouse = { x: 0, y: 0, sx: 0, sy: 0 };
  addEventListener("pointermove", (e) => { mouse.x = e.clientX / innerWidth - 0.5; mouse.y = e.clientY / innerHeight - 0.5; });
  function resize() { renderer.setSize(innerWidth, innerHeight, false); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); }
  addEventListener("resize", resize); resize();

  const clock = new T.Clock(); let running = true;
  document.addEventListener("visibilitychange", () => { running = !document.hidden; if (running) loop(); });
  const c = new T.Color();
  function frame(t) {
    mouse.sx += (mouse.x - mouse.sx) * 0.05; mouse.sy += (mouse.y - mouse.sy) * 0.05;
    amt += (goal - amt) * 0.06;
    c.copy(BASE).lerp(target, amt);
    sunMat.color.copy(c); gridMat.color.copy(c).lerp(new T.Color(0x9ff3ff), 0.5);
    const dt = Math.min(0.1, Math.max(0, t - lastT)); lastT = t;
    speed += (speedGoal - speed) * Math.min(1, dt * 3.5);
    gridZ += speed * dt; grid.position.z = gridZ % 3;
    if (hovering) { spawnT += dt; if (spawnT > 0.22) { spawnT = 0; spawnIcon(); } }
    stepIcons(dt);
    camera.position.x = mouse.sx * 2; camera.position.y = 3.2 - mouse.sy * 1.2; camera.lookAt(0, 4, -40);
    bolts.forEach((b) => { b.material.color.copy(c).lerp(new T.Color(0xffffff), 0.35); b.position.y = b.userData.y0 + Math.sin(t * b.userData.sp + b.userData.ph) * 0.8; b.rotation.y = Math.sin(t * 0.3 + b.userData.ph) * 0.4; });
    renderer.render(scene, camera);
  }
  function loop() { if (!running) return; frame(clock.getElapsedTime()); requestAnimationFrame(loop); }
  if (reduce) frame(0); else loop();
})();
