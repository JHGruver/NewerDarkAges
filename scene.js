// Stained-glass rose window + drifting glass shards, rendered behind the whole site with three.js.
// Exposes NDA3D.tint(hex|null): the window glows in the selected people's color.
(function () {
  if (!window.THREE) return;
  const T = THREE;
  const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;

  let renderer;
  try { renderer = new T.WebGLRenderer({ antialias: true, alpha: true }); } catch (e) { return; }
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 2));
  renderer.setClearColor(0x000000, 0);
  const canvas = renderer.domElement;
  canvas.id = "scene";
  document.body.prepend(canvas);

  const scene = new T.Scene();
  const camera = new T.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 15);

  scene.add(new T.AmbientLight(0x8a8f9c, 0.8));
  const key = new T.PointLight(0xf1dba0, 2.2, 60); key.position.set(6, 6, 10); scene.add(key);
  const rim = new T.PointLight(0xffffff, 1.2, 60); rim.position.set(-8, -4, 6); scene.add(rim);

  const GOLD = 0xd6b25e;
  const glassCols = [0x7a2a3a, 0x24456f, 0x2c6657, 0x8a6a28, 0x55367a, 0x44464f];
  const glassMat = (c, o = 0.6) => new T.MeshBasicMaterial({ color: c, transparent: true, opacity: o, side: T.DoubleSide, depthWrite: false });
  const lineMat = new T.LineBasicMaterial({ color: GOLD, transparent: true, opacity: 0.9 });

  /* ---- rose window ---- */
  const rose = new T.Group();
  rose.position.z = -6;
  rose.scale.setScalar(1.15);
  scene.add(rose);
  const tintable = []; // materials that blend toward the selected people's color

  const lancet = (w, h) => { // pointed gothic arch
    const s = new T.Shape();
    s.moveTo(-w, 0); s.lineTo(-w, h * 0.55);
    s.quadraticCurveTo(-w, h * 0.85, 0, h);
    s.quadraticCurveTo(w, h * 0.85, w, h * 0.55);
    s.lineTo(w, 0); s.lineTo(-w, 0);
    return new T.ShapeGeometry(s);
  };

  const N = 12;
  const petalGeo = lancet(0.95, 3.6);
  const petalEdges = new T.EdgesGeometry(petalGeo);
  for (let i = 0; i < N; i++) {
    const pivot = new T.Object3D();
    pivot.rotation.z = (i / N) * Math.PI * 2;
    const m = glassMat(glassCols[i % glassCols.length]);
    const petal = new T.Mesh(petalGeo, m);
    petal.position.y = 2.1;
    const edge = new T.LineSegments(petalEdges, lineMat);
    edge.position.y = 2.1;
    pivot.add(petal, edge);
    rose.add(pivot);
    tintable.push({ mat: m, base: new T.Color(glassCols[i % glassCols.length]), on: i % 2 === 0 });
  }

  // outer ring of small triangular lights + inner rosette
  const tri = new T.CircleGeometry(0.55, 3);
  const hexGeo = new T.CircleGeometry(0.5, 6);
  for (let i = 0; i < 24; i++) {
    const a = (i / 24) * Math.PI * 2;
    const m = glassMat(glassCols[(i + 2) % glassCols.length], 0.65);
    const mesh = new T.Mesh(i % 2 ? tri : hexGeo, m);
    mesh.position.set(Math.cos(a) * 7.4, Math.sin(a) * 7.4, 0);
    mesh.rotation.z = a - Math.PI / 2;
    rose.add(mesh);
    tintable.push({ mat: m, base: new T.Color(glassCols[(i + 2) % glassCols.length]), on: i % 3 === 0 });
  }
  const core = new T.Mesh(new T.CircleGeometry(1.35, 8), glassMat(GOLD, 0.45));
  rose.add(core);
  tintable.push({ mat: core.material, base: new T.Color(GOLD), on: true });

  [1.4, 2.2, 6.4, 8.2].forEach((r) => {
    const pts = []; for (let i = 0; i <= 96; i++) pts.push(new T.Vector3(Math.cos((i / 96) * Math.PI * 2) * r, Math.sin((i / 96) * Math.PI * 2) * r, 0));
    rose.add(new T.Line(new T.BufferGeometry().setFromPoints(pts), lineMat));
  });

  /* ---- glass shards ---- */
  const shards = [];
  const geos = [new T.TetrahedronGeometry(0.6), new T.OctahedronGeometry(0.5), new T.IcosahedronGeometry(0.45)];
  for (let i = 0; i < 22; i++) {
    const g = geos[i % geos.length];
    const gold = i % 4 === 0;
    const mesh = new T.Mesh(g, new T.MeshStandardMaterial({
      color: gold ? GOLD : 0xb5b9c4, metalness: gold ? 0.9 : 0.35, roughness: 0.15, flatShading: true, transparent: true, opacity: gold ? 0.8 : 0.42,
    }));
    mesh.add(new T.LineSegments(new T.EdgesGeometry(g), new T.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.35 })));
    const s = 0.6 + Math.random() * 1.6;
    mesh.scale.setScalar(s);
    mesh.position.set((Math.random() - 0.5) * 30, (Math.random() - 0.5) * 18, -2 + Math.random() * 6);
    mesh.userData = { sp: new T.Vector3(Math.random() - 0.5, Math.random() - 0.5, Math.random() - 0.5).multiplyScalar(0.4), ph: Math.random() * 6.28, y0: mesh.position.y };
    scene.add(mesh); shards.push(mesh);
  }

  /* ---- tint API ---- */
  const target = new T.Color(0xffffff);
  let tintAmt = 0, tintGoal = 0;
  window.NDA3D = {
    tint(hex) {
      if (hex) { target.set(hex); tintGoal = 0.8; key.color.set(hex).lerp(new T.Color(0xf1dba0), 0.45); }
      else { tintGoal = 0; key.color.set(0xf1dba0); }
    },
  };

  /* ---- loop ---- */
  const mouse = { x: 0, y: 0, sx: 0, sy: 0 };
  addEventListener("pointermove", (e) => { mouse.x = e.clientX / innerWidth - 0.5; mouse.y = e.clientY / innerHeight - 0.5; });
  function resize() { renderer.setSize(innerWidth, innerHeight, false); camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); }
  addEventListener("resize", resize); resize();

  const tmp = new T.Color();
  const clock = new T.Clock();
  let running = true;
  document.addEventListener("visibilitychange", () => { running = !document.hidden; if (running) loop(); });

  function frame(t) {
    mouse.sx += (mouse.x - mouse.sx) * 0.05; mouse.sy += (mouse.y - mouse.sy) * 0.05;
    tintAmt += (tintGoal - tintAmt) * 0.05;
    const scroll = (window.scrollY || 0) * 0.0006;
    rose.rotation.z = t * 0.03 + scroll;
    rose.rotation.y = mouse.sx * 0.5; rose.rotation.x = -mouse.sy * 0.4;
    camera.position.x = mouse.sx * 1.2; camera.position.y = -mouse.sy * 0.8; camera.lookAt(0, 0, 0);
    tintable.forEach((o) => { tmp.copy(o.base); if (o.on) tmp.lerp(target, tintAmt); o.mat.color.copy(tmp); });
    shards.forEach((s) => {
      const u = s.userData;
      s.rotation.x += u.sp.x * 0.01; s.rotation.y += u.sp.y * 0.01; s.rotation.z += u.sp.z * 0.01;
      s.position.y = u.y0 + Math.sin(t * 0.3 + u.ph) * 0.8;
    });
    renderer.render(scene, camera);
  }
  function loop() { if (!running) return; frame(clock.getElapsedTime()); requestAnimationFrame(loop); }
  if (reduce) frame(0); else loop();
  addEventListener("resize", () => { if (reduce) frame(0); });
})();
