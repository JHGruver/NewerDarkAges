// SITE AUDIO. One shared Web Audio graph for the whole single-page site.
//   story (home)        -> radio static opens it; from the Dim on the soundtrack is heard between the static, and as the viewer
//                          scrolls the static fades while the soundtrack rises (NDAudio.story(progress, burst))
//   story track          audio/story.mp3 (The Long Way to Zero) rises under the story; lore page audio/lore.mp3 (The Glass Archive)
//   every other page    -> the main soundtrack (audio/soundtrack.mp3) at its loudest (50%), static gone
// Sound is ON by default, but browsers only allow audio after a click, tap or key press, so the first one starts it
// (the boot screen asks for it). The header speaker button and the story dial both toggle it; the choice is remembered.
(function () {
  const KEY = "nda-sound", MUSIC_VOL = 0.5;
const TRACKS = { main: "audio/soundtrack.mp3", story: "audio/story.mp3", lore: "audio/lore.mp3" };   // main = character screen and most pages // "full volume" is half volume
  const AC = window.AudioContext || window.webkitAudioContext;
  let duck = 1, ac, master, staticGain, mode = "story", T = {}, unlocked = false, trackMissing = false;
  let enabled = true; try { enabled = localStorage.getItem(KEY) !== "off"; } catch {}
  const ramp = (param, v, t = 0.9) => { if (!ac) return; param.cancelScheduledValues(ac.currentTime); param.setTargetAtTime(v, ac.currentTime, t / 3); };

  function build() {
    if (ac || !AC) return;
    ac = new AC(); master = ac.createGain(); master.gain.value = enabled ? 1 : 0; master.connect(ac.destination);
    const buf = ac.createBuffer(1, ac.sampleRate * 2, ac.sampleRate), d = buf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = (Math.random() * 2 - 1) * 0.5;
    const src = ac.createBufferSource(); src.buffer = buf; src.loop = true;
    const f = ac.createBiquadFilter(); f.type = "bandpass"; f.frequency.value = 2400; f.Q.value = 0.6;
    staticGain = ac.createGain(); staticGain.gain.value = 0; src.connect(f); f.connect(staticGain); staticGain.connect(master); src.start();
    Object.entries(TRACKS).forEach(([k, src]) => {
      const el = new Audio(src); el.loop = true; el.preload = "auto"; const t = (T[k] = { el, missing: false });
      el.addEventListener("error", () => { t.missing = true; });
      t.gain = ac.createGain(); t.gain.gain.value = 0; ac.createMediaElementSource(el).connect(t.gain); t.gain.connect(master);
    });
  }
  const trackFor = (m) => (m === "story" ? "story" : m === "lore" ? "lore" : "main");
  function apply() {
    if (!ac || !unlocked) return;
    const want = trackFor(mode);
    Object.entries(T).forEach(([k, t]) => {
      if (k === want) { if (!t.missing) { const p = t.el.play(); if (p && p.catch) p.catch(() => {}); } if (mode !== "story") ramp(t.gain.gain, MUSIC_VOL, 2.4); }
      else { ramp(t.gain.gain, 0, 1.6); setTimeout(() => { if (trackFor(mode) !== k) t.el.pause(); }, 1900); }
    });
    ramp(staticGain.gain, mode === "story" ? staticGain.gain.value : 0, 1.4);
    // in story mode NDAudio.story() sets the static and story-track levels every frame
  }
  function unlock() {
    if (unlocked || !AC) return; build(); ac.resume(); unlocked = true; apply(); emit();
  }
  const emit = () => window.dispatchEvent(new CustomEvent("nda:sound", { detail: { enabled, unlocked } }));
  window.NDAudio = {
    get enabled() { return enabled; }, get unlocked() { return unlocked; },
    unlock,
    toggle() {
      enabled = !enabled; try { localStorage.setItem(KEY, enabled ? "on" : "off"); } catch {}
      if (enabled) unlock();
      if (ac) ramp(master.gain, enabled ? 1 : 0, 0.5);
      emit();
    },
    setMode(m) { if (m === mode) return; mode = m; apply(); },
    get mode() { return mode; },
    levels() { return ac && unlocked ? { static: +staticGain.gain.value.toFixed(3), ...Object.fromEntries(Object.entries(T).map(([k, t]) => [k, +t.gain.gain.value.toFixed(3)])) } : null; },
    // The story sets the mix every frame. t = how far through the story (0 to 1), burst = extra static at chapter changes.
    // Static starts loud and fades to a whisper; the soundtrack is inaudible until the Dim (t about 0.22) and then climbs to full.
    story(t, burst) {
      if (!ac || !unlocked || mode !== "story") return;
      const m = Math.max(0, Math.min(1, (t - 0.22) / 0.78)), now = ac.currentTime;
      const staticLvl = (0.02 + burst * 0.2) * (1 - 0.85 * Math.max(0, Math.min(1, (t - 0.15) / 0.85))) * duck;
      const musicLvl = m <= 0 ? 0 : MUSIC_VOL * (0.22 + 0.78 * Math.pow(m, 0.9));
      staticGain.gain.cancelScheduledValues(now); staticGain.gain.setTargetAtTime(staticLvl, now, 0.06);
      T.story.gain.gain.cancelScheduledValues(now); T.story.gain.gain.setTargetAtTime(musicLvl, now, 0.25);
    },
    // a break in the static: it drops out for a beat while a clean two-note signal pings through, then the static returns
    // kind 1: two-note ping as the hint starts pulsing. kind 2: a louder rising three-note ping on the second beat.
    nudge(kind = 1) {
      if (!ac || !unlocked || !enabled) return;
      if (ac.state === "suspended") ac.resume();
      const second = kind === 2, notes = second ? [[1319, 0.04, 0.2], [1760, 0.2, 0.22], [2093, 0.38, 0.7]] : [[988, 0.06, 0.16], [1319, 0.24, 0.55]];
      duck = 0; setTimeout(() => { duck = 1; }, second ? 1300 : 900);
      const t = ac.currentTime, out = ac.createGain(); out.gain.value = second ? 0.36 : 0.26; out.connect(master);
      const echo = ac.createDelay(0.5); echo.delayTime.value = 0.2; const fb = ac.createGain(); fb.gain.value = 0.38; echo.connect(fb); fb.connect(echo); echo.connect(out);
      notes.forEach(([hz, at, len]) => {
        const o = ac.createOscillator(), g = ac.createGain(); o.type = second ? "triangle" : "sine"; o.frequency.value = hz;
        g.gain.setValueAtTime(0, t + at); g.gain.linearRampToValueAtTime(1, t + at + 0.015); g.gain.exponentialRampToValueAtTime(0.001, t + at + len);
        o.connect(g); g.connect(out); g.connect(echo); o.start(t + at); o.stop(t + at + len + 0.05);
      });
      setTimeout(() => { try { out.disconnect(); echo.disconnect(); } catch {} }, 3500);
    },
  };
  // the first real gesture anywhere starts the sound (if the viewer has not turned it off)
  const first = () => { if (enabled) unlock(); ["pointerdown", "keydown", "touchend"].forEach((e) => removeEventListener(e, first, true)); };
  ["pointerdown", "keydown", "touchend"].forEach((e) => addEventListener(e, first, true));
})();
