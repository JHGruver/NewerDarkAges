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
  window.NDA3D = {
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
    grid.position.z = (t * 3) % 3;
    camera.position.x = mouse.sx * 2; camera.position.y = 3.2 - mouse.sy * 1.2; camera.lookAt(0, 4, -40);
    bolts.forEach((b) => { b.material.color.copy(c).lerp(new T.Color(0xffffff), 0.35); b.position.y = b.userData.y0 + Math.sin(t * b.userData.sp + b.userData.ph) * 0.8; b.rotation.y = Math.sin(t * 0.3 + b.userData.ph) * 0.4; });
    renderer.render(scene, camera);
  }
  function loop() { if (!running) return; frame(clock.getElapsedTime()); requestAnimationFrame(loop); }
  if (reduce) frame(0); else loop();
})();
