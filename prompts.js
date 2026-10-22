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
    witch: "a leaning radio-tower observatory: tangled antennas, glowing circuit-board runes, shelves of binders, towering storm clouds",
    eldritch: "a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls",
  };
  const STYLE = "Samurai Jack-style 2D cel animation: flat geometric shapes, bold angular silhouette, clean uniform dark outlines, two tones per material, no gradients, no glow, no texture. Sin City ink: heavy black shapes and stark white highlights. Glam-gothic 1980s post-apocalypse design in the spirit of David Bowie's Batman: cape or long coat, salvaged gadgets, bold angular accessories.";
  const spec = (l) => (window.ART_SPEC && ART_SPEC[l.id]) || { w: `${l.look} Gear: ${l.gear}.`, p: "" };

  const char = (g, s, l) => {
    const [a, b, c] = l.pal; const sp = spec(l);
    const pose = l.role === "combat" ? "a dynamic combat stance mid-action, weapons held in the hands" : "a calm, confident support stance, actively using the held gear";
    return `${l.name}: a ${l.role} character, ${g.name} › ${s.name}. Body and outfit: ${sp.w}. Pose: ${pose}, head turned toward the viewer.

FRAMING (strict): FULL BODY, head to toe. Every part of the figure is visible: the whole head, both hands, both feet or legs, any tail, wings, tentacles and the full length of every weapon. NOTHING is cropped or cut off at any edge. Center the figure with a clear margin of empty space around all sides.

WEARABLE AND HAND-HELD ONLY: show only what the character wears or holds in their hands. NO vehicles, mounts, turrets, buildings, towers, machines, furniture or other large objects. No ground, floor, shadow or scenery: all of that belongs to a separate background image.

${STYLE}

Color rule: exactly three accent colors on top of black, white and grey. MAIN ${a} (about 60% of the colored area), SECONDARY ${b} (about 30%), POP ${c} (about 10%). No other colors. Do not use ${g.color} on the character; it is reserved for the background.

Mature, adult combat tone. 3:4 portrait, transparent PNG background, no text. No nudity, no gore, no blood.`;
  };

  const bg = (g, s, l) => {
    const [a, b, c] = l.pal; const sp = spec(l);
    const dom = g.id === "vampire"
      ? "The people color is BLACK: make the whole scene overwhelmingly ink-black with deep greys, and let the three accent colors carry all the color."
      : `The people color ${g.color} is the DOMINANT color: use it for the light sources, signs and key surfaces, about 70% of the colored area.`;
    return `Charcoal and ink painting on toned paper, 16:9 landscape, heavy smudged charcoal, white chalk highlights, rain and haze, Sin City contrast, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood. Setting: ${BG_SCENE[g.id]}.

Scene props for ${l.name}: ${sp.p}. These are the large things this character could never wear or carry, so they live in the environment: show them clearly as set dressing in the midground and the lower-right platform, tied to the setting, with nobody using or holding them.

Composition: horizon at one-third height, a large moon upper-left, a misty ruined valley receding to the left, and open empty space in the center-lower area where the character will be placed. Keep the props to the right, left and background so the center stays clear.

Color rule: greyscale painting with four colors. ${dom} Plus three small accent lights in ${a}, ${b} and ${c}, about 30% of the colored area combined, echoing ${l.name}.

No characters, creatures, figures or silhouettes of people or animals, no bodies, no blood, and no text or lettering anywhere.`;
  };
  return { char, bg };
})();
