// V2 PROMPT BUILDER ("Shard Cel"). Builds every prompt from the art direction in data-artdir2.js, so the page, the prompts and the spreadsheets
// can never drift apart. In the MVP edition this replaces the original builder (PROMPTS.char / bg / lint). Nothing here names an artist or a show.
window.PROMPTS2 = (function () {
  const A = () => window.ART2;
  const spec = (l) => (window.ART_SPEC && ART_SPEC[l.id]) || { w: `${l.look} Gear: ${l.gear}.`, p: "" };
  const meta = (l) => (window.CHAR_META && CHAR_META[l.id]) || { type: l.role === "support" ? "support" : "fighter", physique: "average build", size: "medium", move: "grounded" };
  const cast = (l) => (window.CAST && CAST[l.id]) || {};
  const v2 = (l) => (window.CHAR_V2 && CHAR_V2[l.id]) || null;
  const kit = () => A().elements.filter((e) => e.token).map((e) => e.token).join("\n");

  const char = (g, s, l) => {
    const [a, b, c] = l.pal, sp = spec(l), m = meta(l), cs = cast(l), x = v2(l), ty = (window.TYPES && TYPES[m.type]) || { name: m.type, desc: "" };
    const pose = A().poses[m.type] || "a dynamic stance";
    return `${l.name}: a ${m.type} (${ty.desc.toLowerCase().replace(/\.$/, "")}), ${l.role} character, ${g.name} › ${s.name}.

${m.who ? `IDENTITY: ${m.who}.\n\n` : ""}BODY: ${m.physique} build. Proportion recipe: ${A().sizes[m.size] || A().sizes.medium}. ${m.move === "vehicle" ? "Vehicle-bound in play (the vehicle itself is never shown)." : `${m.move} mover.`}

FACE: ${cs.expression || "a strong readable expression"}.

COSTUME: ${sp.w}.${x ? ` Signature exaggeration: ${x.big}.` : ""}

POSE: ${cs.pose ? cs.pose + ". " : ""}Pose energy: ${pose}. Head turned toward the viewer. The pose must say "${m.type}" at a glance.

STYLE KIT (${A().name} ${A().version}):
${kit()}

COLOR: exactly three accent colors on top of black, white and grey. MAIN ${a} (about 60% of the colored area), SECONDARY ${b} (about 30%), POP ${c} (about 10%). Outlines are near-black ${A().outline}. No other colors. Do not use ${g.color} on the character; it is reserved for the background.

${A().frame}

${A().wear}

${A().output}

${A().not}`;
  };

  const lint = (g, s, l) => {
    const t = char(g, s, l), m = meta(l), sp = spec(l), fails = [], k = A();
    k.elements.filter((e) => e.token).forEach((e) => { if (!t.includes(e.token)) fails.push(`missing style element ${e.id}: ${e.name}`); });
    [["asks for a full-body, uncropped figure", /FULL BODY, head to toe/], ["limits the palette to three accents", /exactly three accent colors/], ["asks for genuine alpha transparency", /genuine alpha transparency/], ["wearable and hand-held gear only", /WEARABLE AND HAND-HELD ONLY/], ["states the proportion recipe", /Proportion recipe:/], ["states the pose energy", /Pose energy:/], ["states the face", /FACE:/], ["states the negative list", /Not realistic/], ["states the character type", new RegExp(m.type)], ["states the physique", new RegExp(m.physique.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))]].forEach(([label, rx]) => { if (!rx.test(t)) fails.push("missing: " + label); });
    if (!v2(l)) fails.push("missing the signature exaggeration (CHAR_V2)");
    l.pal.forEach((h, i) => { if (!t.includes(h)) fails.push("missing trio color " + (i + 1)); });
    if (new Set(l.pal.map((x) => x.toLowerCase())).size !== 3) fails.push("trio colors are not distinct");
    if (/samurai jack|tartakovsky|ramos|madureira|marvel|dc comics|disney|pixar|anime|ghibli/i.test(t)) fails.push("names an artist, show or studio");
    const banned = /\b(realistic|photo|photographic|painterly|watercolor|3d|render(ed)?|airbrush(ed)?|volumetric|lens flare|particles?|bokeh|hyper-?detailed|intricate)\b/i, own = `${sp.w} ${m.physique}`;
    if (banned.test(own)) fails.push("character text contains an off-style word: " + own.match(banned)[0]);
    if (/\b(vehicle|car|truck|coupe|motorcycle|turret|tower|throne|boat|barge|mower)\b/i.test(sp.w.replace(/\b(boat hook|tower shield)\b/gi, ""))) fails.push("character text contains a large prop");
    if (sp.w.split(/\s+/).length > 70) fails.push("outfit is too busy (over 70 words); the style kit asks for three signature shapes");
    if (t.length > 4600) fails.push("prompt is too long for reliable generation (" + t.length + " characters)");
    return fails;
  };

  const bg = (g, s, l) => {
    const [a, b, c] = l.pal, sp = spec(l), P = window.PROMPTS, dark = g.id === "vampire", B = A().bg;
    return `${B.style}

Setting: ${P.scene[g.id]}.

Scene props for ${l.name}: ${sp.p}. These are things the character could never wear or carry, so they live in the environment as set dressing on the left, right and far plane, tied to the setting, with nobody using them.

${B.keep} Horizon at one-third height, a flat moon disc upper-left, ruined shapes receding to the left.

COLOR (most important): a ${PEOPLE_COLORS[g.id].name.toUpperCase()}-WASHED scene. The people color ${g.color} washes the whole scene (${P.wash[g.id]}), about 65% of the image, as flat bands and shapes in light-to-dark steps across sky, haze, ground and walls. ${dark ? "Because this people is near-black, keep the wash in layered flat blacks and charcoals with thin grey rim shapes. " : ""}

TRIO ACCENTS (clearly visible, about 20% of the image combined, never tiny): MAIN ${a} for the largest sign, banner or lit window band, SECONDARY ${b} for several medium panels, flags or lights, POP ${c} for a handful of small bright sparks. Place at least two accents on the foreground props and reflect them on the ground as flat shapes. Do not let the accents vanish and do not make the scene mostly grey.

${B.no}`;
  };

  return { char, bg, lint, kit, checkName: "Shard Cel check", SJ_TEST: "SHARD CEL TEST (the image must pass all of these): " + A().test.map((t, i) => `(${i + 1}) ${t}`).join("; ") + "." };
})();

// in the MVP edition the new builder replaces the original everywhere the site asks for a prompt
if (window.NDA_EDITION === "mvp") Object.assign(PROMPTS, PROMPTS2, { scene: PROMPTS.scene, wash: PROMPTS.wash, meta: PROMPTS.meta });
