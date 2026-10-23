// THE STORY HOME PAGE: a scroll-driven broadcast. You tune a radio dial through twelve "stations" that tell the world's story,
// then land on the call to action. Copy comes from LORE.story (data-lore.js). Helpers come from app.js via window.NDAH.
(function () {
  const A = "art/site/";
  const H = () => window.NDAH;
  const FREQ0 = 88.1, FREQ1 = 107.9;
  const TINT = { signal: null, announcement: "#4aa3c7", war: "#c4561f", dim: "#d9a521", cordon: "#3f7d45", chairs: "#7a4bd1", pyramid: "#d9a521", block: "#6fb06f", "chairs-empty": "#9b1c2c", others: "#8fcfe0", heirs: "#b83a7a", choose: "#6b3fa6" };
  const BG = { announcement: "story-broadcast", war: "story-war", dim: "story-dim", cordon: "world-map", pyramid: "story-pyramid", block: "story-block", "chairs-empty": "story-chairs", heirs: "story-heirs" };
  const HEIGHT = { signal: 220, announcement: 300, war: 260, dim: 200, cordon: 280, chairs: 300, pyramid: 260, block: 260, "chairs-empty": 300, others: 300, heirs: 280, choose: 150 };

  const candles = () => ["Dante", "Magnus", "Sullivan", "Cessily", "Gabriel", "Salina", "Frederick", "Lucas", "Miriam"];

  function extras(id) {
    const { esc, NODE_ART, crest, GROUPS } = H();
    if (id === "signal") return `<div class="sg-lines">${LORE.story[0].lines.map((l, i) => `<div class="sg-line" style="--i:${i}">${esc(l)}</div>`).join("")}</div>
      <div class="sg-title"><img src="${A}logo-wordmark.png" alt="The Newer Dark Ages"></div>
      <div class="sg-hint">Turn the dial. Scroll to tune in.<i></i></div>`;
    if (id === "announcement") return `<div class="rings" aria-hidden="true"><i></i><i></i><i></i><i></i></div><div class="countdown" aria-hidden="true"><b data-count>60</b><span>seconds</span></div>`;
    if (id === "war") return `<div class="city-lights" aria-hidden="true">${Array.from({ length: 90 }, (_, i) => `<i style="left:${(i * 37) % 100}%;bottom:${6 + ((i * 53) % 34)}%;--t:${((i * 29) % 100) / 100}"></i>`).join("")}</div>`;
    if (id === "dim") return `<div class="neon-sign" aria-hidden="true">OPEN</div>`;
    if (id === "cordon") return `<svg class="borders" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
        <path class="b b1" pathLength="1" d="M8 30 C8 14 24 10 34 18 C40 26 38 38 30 46 C20 52 8 46 8 30 Z"/>
        <path class="b b2" pathLength="1" d="M60 10 C74 6 92 14 90 28 C88 40 74 44 64 38 C56 30 52 16 60 10 Z"/>
        <path class="b b3" pathLength="1" d="M40 36 C46 30 58 34 58 44 C56 54 44 56 40 48 C36 44 36 40 40 36 Z"/>
      </svg>
      <div class="tribe-tags"><span style="--c:#d9a521">${crest(GROUPS.find((g) => g.id === "human"))}Humans</span><span style="--c:#8a8a99">${crest(GROUPS.find((g) => g.id === "vampire"))}Vampires</span><span style="--c:#b4532a">${crest(GROUPS.find((g) => g.id === "were"))}Werewolves</span></div>`;
    if (id === "chairs") {
      const three = [["human", "interceptors", "Chieftain", "Humans"], ["vampire", "owlwings", "High Priest", "Vampires"], ["were", "moonrunners", "Alpha Wolf", "Werewolves"]];
      return `<div class="three">${three.map(([p, c, t, n], i) => `<figure style="--i:${i}"><div class="bgc" style="background-image:url('${NODE_ART[c].bg}')"></div><img src="${NODE_ART[c].src}" alt=""><figcaption><b>${t}</b><span>${n}</span></figcaption></figure>`).join("")}</div>`;
    }
    if (id === "pyramid") return `<div class="beam" aria-hidden="true"></div><div class="trials" aria-hidden="true"><span>Pass</span><i></i><span>Fail</span></div>`;
    if (id === "block") return `<div class="guards">${["bonebreakers"].map((c) => `<img src="${NODE_ART[c].src}" alt="">`).join("")}</div><div class="stamp" aria-hidden="true">No release</div>`;
    if (id === "chairs-empty") return `<div class="candles" aria-hidden="true">${candles().map((n, i) => `<div class="candle" style="--t:${(i + 0.5) / 9}"><i class="flame"></i><i class="wax"></i><span>${n}</span></div>`).join("")}</div>`;
    if (id === "others") {
      const s = [["staticwraiths", "Dead Air"], ["rootlinkwarlocks", "The Overgrowth"], ["etherwing", "The Drowned Undercity"]];
      return `<div class="scan">${s.map(([c, n], i) => `<figure style="--i:${i}"><div class="bgc" style="background-image:url('${NODE_ART[c].bg}')"></div><img src="${NODE_ART[c].src}" alt=""><figcaption>${n}</figcaption></figure>`).join("")}</div>`;
    }
    if (id === "heirs") {
      const hs = LORE.cast.filter((c) => c.rank === "Heir");
      return `<div class="heirs">${hs.map((c, i) => `<div class="heir" style="--i:${i}"><b>${esc(c.name)}</b><span>${esc(c.age)}</span><em>${esc(c.powers.replace(/"/g, ""))}</em></div>`).join("")}</div>`;
    }
    if (id === "choose") {
      const fan = ["interceptors", "owlwings", "moonrunners", "staticwraiths", "bonebreakers", "rootlinkwarlocks", "etherwing", "signalsavants", "stickywizards", "sporecoven"].filter((c) => NODE_ART[c]);
      return `<div class="fan" aria-hidden="true">${fan.map((c, i) => `<img style="--i:${i};--n:${fan.length}" src="${NODE_ART[c].src}" alt="">`).join("")}</div>
        <div class="choose-cta"><a class="big-cta" href="#/characters">Pick a character <span>→</span></a>
        <div class="peoples-row">${GROUPS.map((g) => `<a href="#/characters/${g.id}" style="--p:${g.color}" title="${esc(g.name)}">${crest(g)}<span>${esc(g.name)}</span></a>`).join("")}</div>
        <div class="more-row"><a href="#/lore">Read the lore bible</a><a href="#/manual">Monster Manual</a><a href="#/art">Art direction</a></div></div>`;
    }
    return "";
  }

  window.storyHome = function () {
    const { esc } = H();
    const ch = LORE.story.map((s, i) => `
      <section class="chap c-${s.id}" id="ch-${s.id}" data-i="${i}" data-id="${s.id}" style="--h:${HEIGHT[s.id]}vh">
        <div class="stick">
          ${BG[s.id] ? `<div class="bgimg" style="background-image:url('${A}${BG[s.id]}.jpg')"></div>` : ""}
          <div class="shade"></div>
          ${extras(s.id)}
          ${s.id === "signal" ? "" : `<div class="scopy"><div class="kick">${esc(s.kicker)}</div><h2>${esc(s.title)}</h2><p>${esc(s.text)}</p></div>`}
        </div>
      </section>`).join("");
    const ticks = LORE.story.map((s, i) => `<button class="tick" data-go="ch-${s.id}" style="--y:${(i / (LORE.story.length - 1)) * 100}%" aria-label="${esc(s.kicker)}"><span>${esc(s.kicker)}</span></button>`).join("");
    return `<div class="story" id="story">
      <canvas id="static" aria-hidden="true"></canvas>
      <aside class="dial" aria-label="Story dial">
        <div class="readout"><b id="freq">88.1</b><small>FM</small></div>
        <div class="track">${ticks}<i class="needle" id="needle"></i></div>
        <button class="snd" id="snd" aria-pressed="false" title="Static sound">${H().ic("radio")}<span>Sound off</span></button>
      </aside>
      <a class="skip" href="#/characters">Skip to characters →</a>
      ${ch}
    </div>`;
  };

  window.storyInit = function () {
    const root = document.getElementById("story"); if (!root) return () => {};
    const { ic } = H();
    const chaps = [...root.querySelectorAll(".chap")];
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const freqEl = document.getElementById("freq"), needle = document.getElementById("needle"), snd = document.getElementById("snd");
    const countEl = root.querySelector("[data-count]");
    const lights = [...root.querySelectorAll(".city-lights i")];
    const candleEls = [...root.querySelectorAll(".candle")];
    const canvas = document.getElementById("static"), cx = canvas.getContext("2d"); canvas.width = 220; canvas.height = 124;
    let burst = 0, current = -1, raf = 0, running = true;
    const clamp = (v, a = 0, b = 1) => Math.min(b, Math.max(a, v));

    // ---- optional static sound (Web Audio), off until the viewer turns it on ----
    let ac = null, gain = null;
    const startAudio = () => {
      if (ac) { ac.resume(); return; }
      ac = new (window.AudioContext || window.webkitAudioContext)();
      const buf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), d = buf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * 0.5;
      const src = ac.createBufferSource(); src.buffer = buf; src.loop = true;
      const f = ac.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = 2400; f.Q.value = 0.6;
      gain = ac.createGain(); gain.gain.value = 0; src.connect(f); f.connect(gain); gain.connect(ac.destination); src.start();
    };
    snd.addEventListener("click", () => {
      const on = snd.getAttribute("aria-pressed") !== "true";
      snd.setAttribute("aria-pressed", on); snd.querySelector("span").textContent = on ? "Sound on" : "Sound off";
      if (on) startAudio(); else if (gain) gain.gain.value = 0;
    });

    // ---- per-frame ----
    function frame() {
      if (!running) return;
      const vh = innerHeight; let mid = 0, bestI = 0, bestD = 1e9;
      chaps.forEach((c, i) => {
        const r = c.getBoundingClientRect(), span = r.height - vh;
        const p = clamp(-r.top / Math.max(1, span));
        c.style.setProperty("--p", reduce ? 1 : p.toFixed(4));
        c.classList.toggle("in", r.top < vh * 0.9 && r.bottom > vh * 0.1);
        const d = Math.abs(r.top + r.height / 2 - vh / 2) ;
        if (r.top < vh * 0.55 && r.bottom > vh * 0.45 && d < bestD) { bestD = d; bestI = i; }
      });
      // overall dial position
      const docMax = root.scrollHeight - vh, tp = clamp((scrollY - root.offsetTop) / Math.max(1, docMax));
      needle.style.setProperty("--y", (tp * 100).toFixed(2) + "%");
      freqEl.textContent = (FREQ0 + tp * (FREQ1 - FREQ0)).toFixed(1);
      // static bursts near chapter boundaries
      const nearEdge = chaps.reduce((m, c) => { const r = c.getBoundingClientRect(); return Math.min(m, Math.abs(r.top) / vh, Math.abs(r.bottom - vh) / vh); }, 9);
      const lastEdge = bestI === chaps.length - 1;
      const target = (bestI === 0 ? 0.2 * (1 - chaps[0].style.getPropertyValue("--p")) + 0.04 : 0.03) + (nearEdge < 0.3 && !lastEdge ? (0.3 - nearEdge) * 1.1 : 0);
      burst += (target - burst) * 0.18;
      if (!reduce) {
        const img = cx.createImageData(220, 124), px = img.data;
        for (let i = 0; i < px.length; i += 4) { const v = (Math.random() * 255) | 0; px[i] = px[i + 1] = px[i + 2] = v; px[i + 3] = 255; }
        cx.putImageData(img, 0, 0);
      }
      canvas.style.opacity = clamp(burst, 0, 0.7).toFixed(3);
      if (gain) gain.gain.value = snd.getAttribute("aria-pressed") === "true" ? clamp(burst * 0.12, 0, 0.09) : 0;
      // chapter-specific scrubbing
      const byId = (id) => root.querySelector(`.c-${id}`), pOf = (id) => parseFloat(byId(id).style.getPropertyValue("--p")) || 0;
      if (countEl) countEl.textContent = String(Math.max(0, Math.round(60 - 60 * clamp(pOf("announcement") * 1.15)))).padStart(2, "0");
      const pw = pOf("war"); lights.forEach((l) => l.classList.toggle("off", pw > parseFloat(l.style.getPropertyValue("--t")) * 0.9 + 0.05));
      const pc = pOf("chairs-empty"); candleEls.forEach((c) => c.classList.toggle("out", pc > parseFloat(c.style.getPropertyValue("--t")) * 0.85 + 0.08));
      if (bestI !== current) {
        current = bestI; const id = chaps[bestI].dataset.id;
        if (window.NDA3D) NDA3D.tint(TINT[id] || null);
        document.body.dataset.chapter = id;
        root.querySelectorAll(".tick").forEach((t, i) => t.classList.toggle("on", i === bestI));
      }
      raf = requestAnimationFrame(frame);
    }
    root.addEventListener("click", (e) => { const t = e.target.closest("[data-go]"); if (t) { const el = document.getElementById(t.dataset.go); if (el) window.scrollTo({ top: el.offsetTop + root.offsetTop + 2, behavior: reduce ? "auto" : "smooth" }); } });
    frame();
    return () => { running = false; cancelAnimationFrame(raf); if (ac) ac.close(); delete document.body.dataset.chapter; if (window.NDA3D) NDA3D.tint(null); };
  };
})();
