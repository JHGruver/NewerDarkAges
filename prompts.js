// Art prompt builders shared by the site and the prompt-sheet generator.
// CHARACTER image = body + what they wear/hold only. BACKGROUND image = everything they cannot wear or carry (vehicles, turrets, towers, etc.).
window.PROMPTS = (function () {
  const BG_SCENE = {
    human: "a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners",
    vampire: "a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain",
    were: "a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles",
    ghost: "a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog",
    undead: "a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts",
    forest: "a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist",
    magic: "a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow",
    eldritch: "a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls",
  };
  const STYLE = "Samurai Jack-style 2D cel animation, in the manner of Genndy Tartakovsky: extremely simplified geometry, flat geometric shapes, bold angular silhouette, minimal, clean contour lines of even weight, two flat tones per material (one light, one shadow), large simple color areas, strong negative space, no gradients, no soft shading, no texture noise, no realistic anatomy. Any glow or light is drawn as a flat bright shape. Sin City ink accents: heavy solid black shapes and stark white highlights. Glam-gothic 1980s post-apocalypse design in the spirit of David Bowie's Batman: cape or long coat, salvaged gadgets, bold angular accessories.";
  const SJ_TEST = "SAMURAI JACK TEST (the image must pass all of these): (1) the silhouette reads instantly even as a tiny thumbnail; (2) every color region is flat, with at most two tones; (3) contour lines are minimal, clean and consistent; (4) shapes are simple, angular and graphic, not busy; (5) only the three accent colors plus black, white and grey are used; (6) the pose has one strong, clear line of action; (7) nothing looks painterly, photographic, 3D or like soft anime shading.";
  const spec = (l) => (window.ART_SPEC && ART_SPEC[l.id]) || { w: `${l.look} Gear: ${l.gear}.`, p: "" };

  const meta = (l) => (window.CHAR_META && CHAR_META[l.id]) || { type: l.role === "support" ? "support" : "fighter", physique: "average build", size: "medium", move: "grounded" };
  const char = (g, s, l) => {
    const [a, b, c] = l.pal; const sp = spec(l); const m = meta(l); const ty = (window.TYPES && TYPES[m.type]) || { name: m.type, pose: "a dynamic stance", desc: "" };
    return `${l.name}: a ${m.type} (${ty.desc.toLowerCase().replace(/\.$/, "")}), ${l.role} character, ${g.name} › ${s.name}.

${m.who ? `IDENTITY: ${m.who}.\n\n` : ""}BODY: ${m.physique} build, ${m.size} size (${window.SIZE_DESC ? SIZE_DESC[m.size] : m.size}), ${m.move === "vehicle" ? "vehicle-bound in play (the vehicle itself is never shown in this image)" : m.move + " mover"}. Outfit and gear: ${sp.w}.

POSE: ${ty.pose}. Head turned toward the viewer. The pose must say "${m.type}" at a glance.

FRAMING (strict): FULL BODY, head to toe. Every part of the figure is visible: the whole head, both hands, both feet or legs, any tail, wings, tentacles and the full length of every weapon. NOTHING is cropped or cut off at any edge. Center the figure with a clear margin of empty space around all sides.

WEARABLE AND HAND-HELD ONLY: show only what the character wears or holds in their hands. NO vehicles, mounts, turrets, buildings, towers, machines, furniture or other large objects. No ground, floor, shadow or scenery: all of that belongs to a separate background image.

STYLE: ${STYLE}

${SJ_TEST}

Color rule: exactly three accent colors on top of black, white and grey. MAIN ${a} (about 60% of the colored area), SECONDARY ${b} (about 30%), POP ${c} (about 10%). No other colors. Do not use ${g.color} on the character; it is reserved for the background.

Mature, adult tone. 3:4 portrait PNG with genuine alpha transparency: no background, no checkerboard pattern, no floor, no shadow, no text. No nudity, no gore, no blood.`;
  };

  // Prompt quality check: does this character prompt carry everything a Samurai Jack-style render needs?
  const lint = (g, s, l) => {
    const t = char(g, s, l); const m = meta(l); const sp = spec(l); const fails = [];
    const need = [
      ["names the Samurai Jack style", /Samurai Jack-style 2D cel animation/], ["asks for flat geometric shapes", /flat geometric shapes/], ["asks for a bold angular silhouette", /bold angular silhouette/],
      ["asks for minimal clean contour lines", /minimal, clean contour lines/], ["forbids gradients", /no gradients/], ["forbids soft shading and texture", /no soft shading, no texture noise/],
      ["includes the thumbnail silhouette test", /reads instantly even as a tiny thumbnail/], ["includes the flat-regions test", /every color region is flat/],
      ["asks for a full-body, uncropped figure", /FULL BODY, head to toe/], ["limits the palette to three accents", /exactly three accent colors/],
      ["asks for genuine alpha transparency", /genuine alpha transparency/], ["wearable and hand-held gear only", /WEARABLE AND HAND-HELD ONLY/],
      ["states the character type pose", new RegExp(m.type)], ["states the physique and size", new RegExp(m.physique.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))],
    ];
    need.forEach(([label, rx]) => { if (!rx.test(t)) fails.push("missing: " + label); });
    [l.pal[0], l.pal[1], l.pal[2]].forEach((h, i) => { if (!t.includes(h)) fails.push("missing trio color " + (i + 1)); });
    if (new Set(l.pal.map((x) => x.toLowerCase())).size !== 3) fails.push("trio colors are not distinct");
    const banned = /\b(realistic|photo|photographic|painterly|watercolor|3d|render(ed)?|airbrush(ed)?|volumetric|lens flare|particles?|bokeh|hyper-?detailed|intricate)\b/i;
    const own = `${sp.w} ${m.physique}`;
    if (banned.test(own)) fails.push("character text contains a non-Samurai-Jack word: " + own.match(banned)[0]);
    if (/\b(vehicle|car|truck|coupe|motorcycle|turret|tower|throne|boat|barge|mower)\b/i.test(sp.w.replace(/\b(boat hook|tower shield)\b/gi, ""))) fails.push("character text contains a large prop");
    if (sp.w.split(/\s+/).length > 70) fails.push("outfit is too busy (over 70 words); Samurai Jack designs stay simple");
    if (t.length > 3600) fails.push("prompt is too long for reliable generation");
    return fails;
  };

  // how each people's color should wash the whole scene
  const WASH = {
    human: "warm GOLD and amber: golden sky, gold-lit fog, gold light pooling on wet ground, gold-toned haze over everything",
    vampire: "deep INK BLACK: near-black sky, ground and architecture in layered blacks and charcoal, only a few thin grey highlights",
    were: "burnt RUST and copper orange: rust-tinted sky, orange-brown haze, copper light on the ground",
    ghost: "pale ICE BLUE: frosty blue sky, blue-white fog, cold cyan-blue light on every surface",
    undead: "BONE and ash grey: warm pale grey-beige sky, dusty bone-colored haze and light",
    forest: "deep MOSS GREEN: green-tinted sky and mist, mossy green light and shadows on everything",
    magic: "rich VIOLET: purple sky, violet haze, violet-tinted light and shadows on everything",
    eldritch: "deep ABYSS TEAL: teal-green sky, teal fog, dark teal light and shadows on everything",
  };
  const bg = (g, s, l) => {
    const [a, b, c] = l.pal; const sp = spec(l);
    const dark = g.id === "vampire";
    return `Charcoal and ink painting on toned paper, 16:9 landscape, heavy smudged charcoal, ink linework, rain and haze, Sin City contrast, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood. Setting: ${BG_SCENE[g.id]}.

Scene props for ${l.name}: ${sp.p}. These are the large things this character could never wear or carry, so they live in the environment: show them clearly as set dressing in the midground and the lower-right platform, tied to the setting, with nobody using or holding them.

Composition: horizon at one-third height, a large moon upper-left, a misty ruined valley receding to the left, and open empty space in the center-lower area where the character will be placed. Keep the props to the right, left and background so the center stays clear.

COLOR (most important): a ${PEOPLE_COLORS[g.id].name.toUpperCase()}-WASHED painting. The people color ${g.color} washes the scene (${WASH[g.id]}), about 65% of the image, in light-to-dark tones across sky, fog, ground, walls and haze. ${dark ? "Because this people's color is black, the base is near-black with thin grey ink highlights." : "Black and white are for ink linework, deep shadows and small highlights, about 15%."}

TRIO ACCENTS (clearly visible, about 20% of the image combined, never tiny): the character's three colors must be unmistakable and spread across the scene as light and objects, not buried in the wash:
- MAIN ${a} (about half of the accents): the biggest accent. Use it for the largest glowing sources and surfaces: a big sign, banner, large lamp glow or lit window band, and its reflections on the wet ground.
- SECONDARY ${b}: several medium elements in the midground: painted panels, a flag, a barrel or crate, a smaller light, a cable or stripe.
- POP ${c}: a handful of small bright sparks: tiny lights, flames, glints, rivets or a thin strip, spread across the scene.
Place at least two accents on the foreground props on the right and left, and reflect them on the ground. The scene should read as the people color with the trio clearly pushing through it. Do NOT make the scene mostly grey, and do NOT let the accents disappear into the wash.

No characters, creatures, figures or silhouettes of people or animals, no bodies, no blood, and no text or lettering anywhere.`;
  };
  return { char, bg, lint, meta, SJ_TEST, scene: BG_SCENE, wash: WASH, checkName: "Samurai Jack check" };
})();
