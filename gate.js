// TEAM LOGIN (public build only). The internal sections (lore, comic, vote, studio, team, prompts, art, manual, roadmap, full roster) and the comic art
// are stored ENCRYPTED in internal/. Each team member has a passphrase that unlocks a shared content key (internal/keyring.json); the key then
// decrypts internal/bundle.enc (the internal scripts) in the browser. Nothing internal is served in readable form. Built by tools/build-site.mjs.
// Boot order: the public data scripts load from index.html, then this file decrypts and runs the internal scripts (if signed in), then loads app.js and fx.js.
(function () {
  "use strict";
  const KEY = "nda-team-key", V = window.NDA_V || "1";
  const enc = new TextEncoder(), dec = new TextDecoder();
  const unb64 = (s) => Uint8Array.from(atob(s), (c) => c.charCodeAt(0));
  const b64 = (u) => btoa(String.fromCharCode(...new Uint8Array(u)));
  const esc = (s) => String(s == null ? "" : s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const stored = () => { try { return sessionStorage.getItem(KEY) || localStorage.getItem(KEY); } catch { return null; } };
  const keep = (k, remember) => { try { (remember ? localStorage : sessionStorage).setItem(KEY, k); } catch {} };
  const forget = () => { try { sessionStorage.removeItem(KEY); localStorage.removeItem(KEY); } catch {} };
  const unseal = async (key, buf) => { const u = new Uint8Array(buf); return crypto.subtle.decrypt({ name: "AES-GCM", iv: u.slice(0, 12) }, key, u.slice(12)); }; // file = 12-byte iv + ciphertext
  const PIX = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
  let contentKey = null;

  const script = (o) => new Promise((res, rej) => {
    const s = document.createElement("script");
    if (o.src) { s.async = false; s.onload = res; s.onerror = () => rej(new Error("could not load " + o.src)); s.src = o.src; document.head.appendChild(s); }
    else { s.textContent = o.code + "\n//# sourceURL=internal/" + o.name; document.head.appendChild(s); res(); } // inline scripts run the moment they are added, so order is kept
  });

  /* ---------- encrypted images: <img data-enc="art/comic/x.jpg"> is decrypted when it scrolls into view ---------- */
  const blobs = {};
  const fill = async (img) => {
    const p = img.dataset.enc, f = (window.NDA_ENC || {})[p]; if (!f || !contentKey) return;
    if (!blobs[p]) blobs[p] = fetch(f + "?v=" + V).then((r) => r.arrayBuffer()).then((b) => unseal(contentKey, b)).then((b) => URL.createObjectURL(new Blob([b], { type: "image/jpeg" })));
    try { img.src = await blobs[p]; } catch {}
  };
  const blobUrl = (p) => { const f = (window.NDA_ENC || {})[p]; if (!f || !contentKey) return Promise.resolve(p); if (!blobs[p]) blobs[p] = fetch(f + "?v=" + V).then((r) => r.arrayBuffer()).then((b) => unseal(contentKey, b)).then((b) => URL.createObjectURL(new Blob([b], { type: "image/jpeg" }))); return blobs[p]; };
  const io = "IntersectionObserver" in window ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { io.unobserve(e.target); fill(e.target); } }), { rootMargin: "500px" }) : null;
  const watch = (img) => { if (img.dataset.watched) return; img.dataset.watched = "1"; io ? io.observe(img) : fill(img); };
  const startImages = () => {
    const scan = (n) => { if (n.nodeType !== 1) return; if (n.matches("img[data-enc]")) watch(n); n.querySelectorAll("img[data-enc]").forEach(watch); };
    new MutationObserver((ms) => ms.forEach((m) => m.addedNodes.forEach(scan))).observe(document.documentElement, { childList: true, subtree: true });
  };

  /* ---------- the login page, shown where an internal section would be ---------- */
  const NAMES = () => Object.keys(window.NDA_USERS || { jacob: 1, mike: 1 });
  const view = (route) => `<div class="gate"><div class="gate-card panel">
      <div class="eyebrow">Team only</div><h1 class="pg">Sign in</h1>
      <p class="muted">This part of the site is for the team. The story, characters and world are open to everyone from the top menu.</p>
      <form id="gate-form" autocomplete="on"><label>Who are you<select name="who" aria-label="Who are you">${NAMES().map((n) => `<option value="${n}">${n[0].toUpperCase() + n.slice(1)}</option>`).join("")}</select></label>
        <label>Passphrase<input type="password" name="pass" autocomplete="current-password" required aria-label="Passphrase"></label>
        <label class="gate-keep"><input type="checkbox" name="keep"> Keep me signed in on this device</label>
        <button class="btn" type="submit">Sign in</button><p class="gate-msg" id="gate-msg" role="status"></p></form></div></div>`;
  document.addEventListener("submit", async (e) => {
    const f = e.target.closest && e.target.closest("#gate-form"); if (!f) return; e.preventDefault();
    const msg = document.getElementById("gate-msg"), btn = f.querySelector("button"); msg.textContent = "Checking..."; btn.disabled = true;
    try {
      const kr = await (await fetch("internal/keyring.json?v=" + V)).json(), u = kr.users[f.who.value];
      const base = await crypto.subtle.importKey("raw", enc.encode(f.pass.value.trim()), "PBKDF2", false, ["deriveKey"]);
      const kek = await crypto.subtle.deriveKey({ name: "PBKDF2", salt: unb64(u.salt), iterations: kr.iter, hash: "SHA-256" }, base, { name: "AES-GCM", length: 256 }, false, ["decrypt"]);
      const raw = await crypto.subtle.decrypt({ name: "AES-GCM", iv: unb64(u.iv) }, kek, unb64(u.wrapped)); // throws when the passphrase is wrong
      keep(b64(raw), f.keep.checked); location.reload();
    } catch { msg.textContent = "That name and passphrase do not match."; btn.disabled = false; f.pass.select(); }
  });

  /* ---------- the public header menu (the full profile menu lives in studio.js, which is internal) ---------- */
  const menu = () => {
    const b = document.getElementById("profbtn"), m = document.getElementById("profmenu"); if (!b || !m || window.NDA_TEAM) return;
    b.innerHTML = '<span class="pb-ic"><svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg></span>';
    const close = () => { m.classList.remove("open"); b.setAttribute("aria-expanded", "false"); };
    b.addEventListener("click", (e) => { e.stopPropagation(); const o = m.classList.toggle("open"); b.setAttribute("aria-expanded", String(o)); });
    document.addEventListener("click", (e) => { if (!m.contains(e.target)) close(); });
    document.addEventListener("keydown", (e) => { if (e.key === "Escape") close(); });
    window.addEventListener("hashchange", close);
    const snd = m.querySelector("#pm-snd"); if (snd) snd.addEventListener("click", () => { const s = document.getElementById("sndbtn"); if (s) s.click(); });
  };
  // capture phase: the signed-in profile menu stops clicks from bubbling
  document.addEventListener("click", (e) => { if (e.target.closest("#pm-out")) { e.preventDefault(); forget(); location.reload(); } }, true);

  window.NDGate = { enc: true, pix: PIX, view, url: blobUrl, logout: () => { forget(); location.reload(); } };

  (async function boot() {
    let team = false, raw = stored();
    if (raw) {
      try {
        contentKey = await crypto.subtle.importKey("raw", unb64(raw), "AES-GCM", false, ["decrypt"]);
        const files = JSON.parse(dec.decode(await unseal(contentKey, await (await fetch("internal/bundle.enc?v=" + V)).arrayBuffer())));
        for (const f of files) await script(f);
        team = true; startImages();
      } catch { forget(); contentKey = null; } // a stale or wrong key: fall back to the public site
    }
    window.NDA_TEAM = team;
    if (!team) window.NDA_EDITION = "mvp";
    await script({ src: "app.js?v=" + V }); await script({ src: "fx.js?v=" + V });
    document.body.dataset.gate = "on"; menu();
  })();
})();
