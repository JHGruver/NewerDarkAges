// SITE AUDIO. One shared Web Audio graph for the whole single-page site.
//   story (home)        -> radio static opens it; from the Dim on the soundtrack is heard between the static, and as the viewer
//                          scrolls the static fades while the soundtrack rises (NDAudio.story(progress, burst))
//   every other page    -> the soundtrack at its loudest (50%), static gone
// Sound is ON by default, but browsers only allow audio after a click, tap or key press, so the first one starts it
// (the boot screen asks for it). The header speaker button and the story dial both toggle it; the choice is remembered.
(function () {
  const KEY = "nda-sound", TRACK = "audio/soundtrack.mp3", MUSIC_VOL = 0.5; // "full volume" is half volume
  const AC = window.AudioContext || window.webkitAudioContext;
  let duck = 1, ac, master, staticGain, musicGain, music, mode = "story", unlocked = false, trackMissing = false;
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
    music = new Audio(TRACK); music.loop = true; music.preload = "auto";
    music.addEventListener("error", () => { trackMissing = true; });
    musicGain = ac.createGain(); musicGain.gain.value = 0; ac.createMediaElementSource(music).connect(musicGain); musicGain.connect(master);
  }
  function apply() {
    if (!ac || !unlocked) return;
    if (!trackMissing) { const p = music.play(); if (p && p.catch) p.catch(() => {}); }
    if (mode === "music") { ramp(staticGain.gain, 0, 1.4); ramp(musicGain.gain, MUSIC_VOL, 2.4); }
    // in story mode NDAudio.story() sets both levels every frame
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
    levels() { return ac && unlocked ? { static: +staticGain.gain.value.toFixed(3), music: +musicGain.gain.value.toFixed(3), track: !trackMissing } : null; },
    // The story sets the mix every frame. t = how far through the story (0 to 1), burst = extra static at chapter changes.
    // Static starts loud and fades to a whisper; the soundtrack is inaudible until the Dim (t about 0.22) and then climbs to full.
    story(t, burst) {
      if (!ac || !unlocked || mode !== "story") return;
      const m = Math.max(0, Math.min(1, (t - 0.22) / 0.78)), now = ac.currentTime;
      const staticLvl = (0.02 + burst * 0.2) * (1 - 0.85 * Math.max(0, Math.min(1, (t - 0.15) / 0.85))) * duck;
      const musicLvl = m <= 0 ? 0 : MUSIC_VOL * (0.22 + 0.78 * Math.pow(m, 0.9));
      staticGain.gain.cancelScheduledValues(now); staticGain.gain.setTargetAtTime(staticLvl, now, 0.06);
      musicGain.gain.cancelScheduledValues(now); musicGain.gain.setTargetAtTime(musicLvl, now, 0.25);
    },
    // a break in the static: it drops out for a beat while a clean two-note signal pings through, then the static returns
    nudge() {
      if (!ac || !unlocked || !enabled) return;
      duck = 0; setTimeout(() => { duck = 1; }, 900);
      const t = ac.currentTime, out = ac.createGain(); out.gain.value = 0.22; out.connect(master);
      const echo = ac.createDelay(0.5); echo.delayTime.value = 0.2; const fb = ac.createGain(); fb.gain.value = 0.38; echo.connect(fb); fb.connect(echo); echo.connect(out);
      [[988, 0.06, 0.16], [1319, 0.24, 0.55]].forEach(([hz, at, len]) => {
        const o = ac.createOscillator(), g = ac.createGain(); o.type = "sine"; o.frequency.value = hz;
        g.gain.setValueAtTime(0, t + at); g.gain.linearRampToValueAtTime(1, t + at + 0.015); g.gain.exponentialRampToValueAtTime(0.001, t + at + len);
        o.connect(g); g.connect(out); g.connect(echo); o.start(t + at); o.stop(t + at + len + 0.05);
      });
    },
  };
  // the first real gesture anywhere starts the sound (if the viewer has not turned it off)
  const first = () => { if (enabled) unlock(); ["pointerdown", "keydown", "touchend"].forEach((e) => removeEventListener(e, first, true)); };
  ["pointerdown", "keydown", "touchend"].forEach((e) => addEventListener(e, first, true));
})();
