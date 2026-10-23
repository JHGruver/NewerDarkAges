// SITE AUDIO. One shared Web Audio graph for the whole single-page site.
//   home (story)        -> synthesized radio static, driven by the story (NDAudio.static(level))
//   every other page    -> the soundtrack, audio/soundtrack.mp3 (crossfades in; stays silent if the file is missing)
// Sound is ON by default, but browsers only allow audio after a click, tap or key press, so the first one starts it
// (the boot screen asks for it). The header speaker button and the story dial both toggle it; the choice is remembered.
(function () {
  const KEY = "nda-sound", TRACK = "audio/soundtrack.mp3", MUSIC_VOL = 0.7;
  const AC = window.AudioContext || window.webkitAudioContext;
  let ac, master, staticGain, musicGain, music, mode = "static", staticLevel = 0.02, unlocked = false, trackMissing = false;
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
    const staticOn = mode === "static";
    ramp(staticGain.gain, staticOn ? staticLevel : 0, staticOn ? 0.5 : 1.2);
    if (mode === "music") {
      if (!trackMissing) { const p = music.play(); if (p && p.catch) p.catch(() => {}); ramp(musicGain.gain, MUSIC_VOL, 2.4); }
    } else { ramp(musicGain.gain, 0, 1.6); setTimeout(() => { if (mode !== "music" && music) music.pause(); }, 1900); }
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
    // story drives the static's loudness (0 to about 0.12)
    static(level) { staticLevel = level; if (ac && unlocked && mode === "static") staticGain.gain.value += (level - staticGain.gain.value) * 0.2; },
  };
  // the first real gesture anywhere starts the sound (if the viewer has not turned it off)
  const first = () => { if (enabled) unlock(); ["pointerdown", "keydown", "touchend"].forEach((e) => removeEventListener(e, first, true)); };
  ["pointerdown", "keydown", "touchend"].forEach((e) => addEventListener(e, first, true));
})();
