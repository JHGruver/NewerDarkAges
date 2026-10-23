# Site Assets for DALL·E

Everything the website would gain from generated art **other than characters**. 67 assets in 7 groups. Each has a file name, where it goes on the site, the size to generate, and a ready-to-paste prompt.

## How to generate
- **Transparent assets** (PNG): use **gpt-image** with `background: "transparent"` and output PNG. DALL·E 3 cannot output alpha: generate on flat white or flat green and cut out.
- **Wide strips and banners**: generate at 1792x1024 (DALL·E 3) or 1536x1024 (gpt-image) and crop to the listed size.
- **Textures** must tile: after generating, check the edges (or run through a seamless-tile tool) before using.
- Save as the file name shown, into `art/site/` (create it), and I will wire each one into the pages. JPG for paintings, PNG only when transparency is needed.
- Every prompt is self-contained and under 4000 characters. Colors are hex values to paste as written.

## Priority order
1. **Brand and home:** logo-mark, logo-wordmark, hero-key-art, og-share.
2. **Peoples:** the 8 crests (replace the small line icons), then banners.
3. **UI:** tex-ink-grain, placeholder-tile, frame-corner, divider.
4. **World, roadmap and manual art:** regions, world-map, phases, manual-header.
5. **Everything else.**


---

## Brand

### Logo mark  `art/site/logo-mark.png`

- **Used for:** Header brand, favicon source, social avatar
- **Generate at:** 1024x1024 (square)
- **Format:** PNG, transparent

```text
A bold emblem for a game world called The Newer Dark Ages: a lightning bolt cutting through a cracked half-sun with horizontal stripes, a thin crown of antenna spires above it. Sin City ink style: stark black and white with heavy contrast and one accent color, flat angular geometry, bold clean contour lines, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity, limited to white, black and one hot gold (#ffd60a) accent. Flat vector-like shapes. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Wordmark lockup  `art/site/logo-wordmark.png`

- **Used for:** Home hero, README, press kit
- **Generate at:** 1536x1024 (landscape)
- **Format:** PNG, transparent

```text
A stylized title lockup reading THE NEWER DARK AGES in tall condensed angular letters, chrome-and-black with a thin hot-pink (#ff5fb0) neon outline, a small lightning bolt between the words, scratched ink texture. 1980s horror-movie poster lettering. No other text, no watermark. Transparent background (true alpha), centered with margin.
```

### Social share image  `art/site/og-share.jpg`

- **Used for:** Link preview (Open Graph / Twitter card)
- **Generate at:** 1792x1024 (crop to 1200x630)
- **Format:** JPG

```text
A cinematic wide poster of a ruined neon skyline at dusk: gutted skyscrapers with radio spires, a huge striped half-sun low on the horizon, rain-slick street in the foreground, three small silhouettes of a wolf-kin, a caped vampire and a robed wizard on a rooftop. Sin City ink style: stark black and white with heavy contrast and one accent color, flat angular geometry, bold clean contour lines, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity, washed in deep violet with gold and hot-pink accents, charcoal and ink painted texture. Leave the center-left third calm for overlaid text. No text, no lettering, no watermark, no logo.
```


---

## Home and world

### Home hero key art  `art/site/hero-key-art.jpg`

- **Used for:** Home page hero background (behind the title)
- **Generate at:** 1792x1024
- **Format:** JPG

```text
Wide key art of The Dim: a rain-soaked wasteland where old highways cross, a leaning radio mast with a flickering red beacon, burned-out cars, distant gothic towers, a huge half-sun with stripes. Sin City ink style: stark black and white with heavy contrast and one accent color, flat angular geometry, bold clean contour lines, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity. Painted charcoal and ink, washed in dusky amber and violet. Dark enough on the left to overlay white text. No figures. No text, no lettering, no watermark, no logo.
```

### Region plate: The Dim  `art/site/region-the-dim.jpg`

- **Used for:** World page region card (also usable as a map vignette)
- **Generate at:** 1536x1024
- **Format:** JPG

```text
Charcoal and ink painting of The Dim: the central wasteland: rain, fog, flickering signs where old highways cross, a radio mast on every keep. Sin City ink style: stark black and white with heavy contrast and one accent color, flat angular geometry, bold clean contour lines, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity. Washed about 65% in #d9a521 with small accents of hot pink and gold. 3:2 landscape, strong foreground, mid and background depth, empty center-bottom for text. No figures. No text, no lettering, no watermark, no logo.
```

### Region plate: The Pylon Coast  `art/site/region-pylon-coast.jpg`

- **Used for:** World page region card (also usable as a map vignette)
- **Generate at:** 1536x1024
- **Format:** JPG

```text
Charcoal and ink painting of The Pylon Coast: a shoreline of dead power lines strung like cathedral rigging, drowned relic vaults, smuggler boats in black water. Sin City ink style: stark black and white with heavy contrast and one accent color, flat angular geometry, bold clean contour lines, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity. Washed about 65% in #4aa3c7 with small accents of hot pink and gold. 3:2 landscape, strong foreground, mid and background depth, empty center-bottom for text. No figures. No text, no lettering, no watermark, no logo.
```

### Region plate: The Static Spires  `art/site/region-static-spires.jpg`

- **Used for:** World page region card (also usable as a map vignette)
- **Generate at:** 1536x1024
- **Format:** JPG

```text
Charcoal and ink painting of The Static Spires: skyscraper husks turned into vampire courts and wizard towers, glass, old antennas, tape-hiss stairwells. Sin City ink style: stark black and white with heavy contrast and one accent color, flat angular geometry, bold clean contour lines, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity. Washed about 65% in #7a4bd1 with small accents of hot pink and gold. 3:2 landscape, strong foreground, mid and background depth, empty center-bottom for text. No figures. No text, no lettering, no watermark, no logo.
```

### Region plate: The Overgrowth  `art/site/region-overgrowth.jpg`

- **Used for:** World page region card (also usable as a map vignette)
- **Generate at:** 1536x1024
- **Format:** JPG

```text
Charcoal and ink painting of The Overgrowth: a drowned suburb swallowed by forest, roots through server rooms, moss on monitors, mailboxes in the ferns. Sin City ink style: stark black and white with heavy contrast and one accent color, flat angular geometry, bold clean contour lines, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity. Washed about 65% in #3f7d45 with small accents of hot pink and gold. 3:2 landscape, strong foreground, mid and background depth, empty center-bottom for text. No figures. No text, no lettering, no watermark, no logo.
```

### Region plate: Ashfall Reach  `art/site/region-ashfall-reach.jpg`

- **Used for:** World page region card (also usable as a map vignette)
- **Generate at:** 1536x1024
- **Format:** JPG

```text
Charcoal and ink painting of Ashfall Reach: dust, tombs and buried bunkers, sealed vault doors, long guard posts, ash drifting like snow. Sin City ink style: stark black and white with heavy contrast and one accent color, flat angular geometry, bold clean contour lines, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity. Washed about 65% in #bdb7a4 with small accents of hot pink and gold. 3:2 landscape, strong foreground, mid and background depth, empty center-bottom for text. No figures. No text, no lettering, no watermark, no logo.
```

### World map  `art/site/world-map.jpg`

- **Used for:** World page: interactive map backdrop
- **Generate at:** 1792x1024
- **Format:** JPG

```text
A hand-inked top-down map of a post-apocalyptic region on dark parchment: five areas (a central misty wasteland, a coastline of power-line pylons, a cluster of tall ruined towers, a forest swallowing a suburb, an ash desert with bunkers), drawn roads, rivers, railway lines, small icons for keeps, radio masts and tombs. Dark charcoal ink with violet, gold and teal washes, subtle grid lines and a compass rose. Leave all labels blank. No text, no lettering, no watermark, no logo.
```

### Human crest  `art/site/crest-human.png`

- **Used for:** Filter buttons, tabs, people headers, gallery section banner (replaces the small line icon)
- **Generate at:** 1024x1024
- **Format:** PNG, transparent

```text
A heraldic emblem of the Human people: a cracked steering wheel crossed with a radio antenna. Flat angular geometry in the style of a 1980s metal-band patch crossed with a coat of arms, bold black outline, main color #d9a521, light tint #f3d98b, white highlights, thin gold rim. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Human banner  `art/site/banner-human.jpg`

- **Used for:** Top of the gallery when this people is filtered, and the people page header
- **Generate at:** 2400x600 (wide strip; generate 1792x1024 and crop)
- **Format:** JPG

```text
A wide panoramic painting for the Human people: a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners. Charcoal and ink painting washed about 65% in GOLD #d9a521, Sin City contrast, 1980s post-apocalyptic dark-age mood, a low horizon and a calm dark band across the bottom for overlaid text. No figures, no creatures. No text, no lettering, no watermark, no logo.
```

### Vampire crest  `art/site/crest-vampire.png`

- **Used for:** Filter buttons, tabs, people headers, gallery section banner (replaces the small line icon)
- **Generate at:** 1024x1024
- **Format:** PNG, transparent

```text
A heraldic emblem of the Vampire people: a pair of fangs inside a crescent moon with a lightning bolt. Flat angular geometry in the style of a 1980s metal-band patch crossed with a coat of arms, bold black outline, main color #16161c, light tint #8a8a99, white highlights, thin gold rim. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Vampire banner  `art/site/banner-vampire.jpg`

- **Used for:** Top of the gallery when this people is filtered, and the people page header
- **Generate at:** 2400x600 (wide strip; generate 1792x1024 and crop)
- **Format:** JPG

```text
A wide panoramic painting for the Vampire people: a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain. Charcoal and ink painting washed about 65% in BLACK #16161c, Sin City contrast, 1980s post-apocalyptic dark-age mood, a low horizon and a calm dark band across the bottom for overlaid text. No figures, no creatures. No text, no lettering, no watermark, no logo.
```

### Were-Creature crest  `art/site/crest-were.png`

- **Used for:** Filter buttons, tabs, people headers, gallery section banner (replaces the small line icon)
- **Generate at:** 1024x1024
- **Format:** PNG, transparent

```text
A heraldic emblem of the Were-Creature people: a clawed paw print inside a ring of jagged teeth. Flat angular geometry in the style of a 1980s metal-band patch crossed with a coat of arms, bold black outline, main color #b4532a, light tint #e8a07e, white highlights, thin gold rim. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Were-Creature banner  `art/site/banner-were.jpg`

- **Used for:** Top of the gallery when this people is filtered, and the people page header
- **Generate at:** 2400x600 (wide strip; generate 1792x1024 and crop)
- **Format:** JPG

```text
A wide panoramic painting for the Were-Creature people: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. Charcoal and ink painting washed about 65% in RUST #b4532a, Sin City contrast, 1980s post-apocalyptic dark-age mood, a low horizon and a calm dark band across the bottom for overlaid text. No figures, no creatures. No text, no lettering, no watermark, no logo.
```

### Ghost crest  `art/site/crest-ghost.png`

- **Used for:** Filter buttons, tabs, people headers, gallery section banner (replaces the small line icon)
- **Generate at:** 1024x1024
- **Format:** PNG, transparent

```text
A heraldic emblem of the Ghost people: a sheet-ghost silhouette whose body is a CRT test-pattern screen. Flat angular geometry in the style of a 1980s metal-band patch crossed with a coat of arms, bold black outline, main color #8fcfe0, light tint #d6f1f7, white highlights, thin gold rim. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Ghost banner  `art/site/banner-ghost.jpg`

- **Used for:** Top of the gallery when this people is filtered, and the people page header
- **Generate at:** 2400x600 (wide strip; generate 1792x1024 and crop)
- **Format:** JPG

```text
A wide panoramic painting for the Ghost people: a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog. Charcoal and ink painting washed about 65% in ICE #8fcfe0, Sin City contrast, 1980s post-apocalyptic dark-age mood, a low horizon and a calm dark band across the bottom for overlaid text. No figures, no creatures. No text, no lettering, no watermark, no logo.
```

### Undead crest  `art/site/crest-undead.png`

- **Used for:** Filter buttons, tabs, people headers, gallery section banner (replaces the small line icon)
- **Generate at:** 1024x1024
- **Format:** PNG, transparent

```text
A heraldic emblem of the Undead people: a skull wearing a rusted helmet above two crossed bones. Flat angular geometry in the style of a 1980s metal-band patch crossed with a coat of arms, bold black outline, main color #bdb7a4, light tint #e8e4d6, white highlights, thin gold rim. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Undead banner  `art/site/banner-undead.jpg`

- **Used for:** Top of the gallery when this people is filtered, and the people page header
- **Generate at:** 2400x600 (wide strip; generate 1792x1024 and crop)
- **Format:** JPG

```text
A wide panoramic painting for the Undead people: a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts. Charcoal and ink painting washed about 65% in BONE #bdb7a4, Sin City contrast, 1980s post-apocalyptic dark-age mood, a low horizon and a calm dark band across the bottom for overlaid text. No figures, no creatures. No text, no lettering, no watermark, no logo.
```

### Forest Spirit crest  `art/site/crest-forest.png`

- **Used for:** Filter buttons, tabs, people headers, gallery section banner (replaces the small line icon)
- **Generate at:** 1024x1024
- **Format:** PNG, transparent

```text
A heraldic emblem of the Forest Spirit people: a tree whose roots are circuit-board traces growing through a cracked monitor. Flat angular geometry in the style of a 1980s metal-band patch crossed with a coat of arms, bold black outline, main color #3f7d45, light tint #9fd2a1, white highlights, thin gold rim. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Forest Spirit banner  `art/site/banner-forest.jpg`

- **Used for:** Top of the gallery when this people is filtered, and the people page header
- **Generate at:** 2400x600 (wide strip; generate 1792x1024 and crop)
- **Format:** JPG

```text
A wide panoramic painting for the Forest Spirit people: a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist. Charcoal and ink painting washed about 65% in MOSS #3f7d45, Sin City contrast, 1980s post-apocalyptic dark-age mood, a low horizon and a calm dark band across the bottom for overlaid text. No figures, no creatures. No text, no lettering, no watermark, no logo.
```

### Eldritch crest  `art/site/crest-eldritch.png`

- **Used for:** Filter buttons, tabs, people headers, gallery section banner (replaces the small line icon)
- **Generate at:** 1024x1024
- **Format:** PNG, transparent

```text
A heraldic emblem of the Eldritch people: a single eye inside a spiral of tentacles with a five-pointed star. Flat angular geometry in the style of a 1980s metal-band patch crossed with a coat of arms, bold black outline, main color #0b7a75, light tint #6fd6cf, white highlights, thin gold rim. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Eldritch banner  `art/site/banner-eldritch.jpg`

- **Used for:** Top of the gallery when this people is filtered, and the people page header
- **Generate at:** 2400x600 (wide strip; generate 1792x1024 and crop)
- **Format:** JPG

```text
A wide panoramic painting for the Eldritch people: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. Charcoal and ink painting washed about 65% in ABYSS #0b7a75, Sin City contrast, 1980s post-apocalyptic dark-age mood, a low horizon and a calm dark band across the bottom for overlaid text. No figures, no creatures. No text, no lettering, no watermark, no logo.
```

### Magic crest  `art/site/crest-magic.png`

- **Used for:** Filter buttons, tabs, people headers, gallery section banner (replaces the small line icon)
- **Generate at:** 1024x1024
- **Format:** PNG, transparent

```text
A heraldic emblem of the Magic people: a crystal ball ringed by four small sigils: a radio dial, a mushroom, a bleeding eye-star and an hourglass. Flat angular geometry in the style of a 1980s metal-band patch crossed with a coat of arms, bold black outline, main color #6b3fa6, light tint #b79ae0, white highlights, thin gold rim. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Magic banner  `art/site/banner-magic.jpg`

- **Used for:** Top of the gallery when this people is filtered, and the people page header
- **Generate at:** 2400x600 (wide strip; generate 1792x1024 and crop)
- **Format:** JPG

```text
A wide panoramic painting for the Magic people: a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow. Charcoal and ink painting washed about 65% in VIOLET #6b3fa6, Sin City contrast, 1980s post-apocalyptic dark-age mood, a low horizon and a calm dark band across the bottom for overlaid text. No figures, no creatures. No text, no lettering, no watermark, no logo.
```

### Magic class sigil: Wizard  `art/site/sigil-wizard.png`

- **Used for:** Class headers in the Magic tree and gallery
- **Generate at:** 1024x1024
- **Format:** PNG, transparent

```text
A magical sigil for the Wizard class (The Academic Scientist): a radio dial with a star pointer inside a compass ring. Flat angular geometry, bold black outline, violet (#6b3fa6) main with light violet (#b79ae0) highlights and a single gold accent, glowing thin lines. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Magic class sigil: Witch  `art/site/sigil-witch.png`

- **Used for:** Class headers in the Magic tree and gallery
- **Generate at:** 1024x1024
- **Format:** PNG, transparent

```text
A magical sigil for the Witch class (The Naturalist Ritualist): a mushroom cap and a crescent moon tangled with thorn vines. Flat angular geometry, bold black outline, violet (#6b3fa6) main with light violet (#b79ae0) highlights and a single gold accent, glowing thin lines. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Magic class sigil: Warlock  `art/site/sigil-warlock.png`

- **Used for:** Class headers in the Magic tree and gallery
- **Generate at:** 1024x1024
- **Format:** PNG, transparent

```text
A magical sigil for the Warlock class (The Dangerous Renegade): an inverted triangle holding a bleeding eye inside a broken chain. Flat angular geometry, bold black outline, violet (#6b3fa6) main with light violet (#b79ae0) highlights and a single gold accent, glowing thin lines. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Magic class sigil: Mage  `art/site/sigil-mage.png`

- **Used for:** Class headers in the Magic tree and gallery
- **Generate at:** 1024x1024
- **Format:** PNG, transparent

```text
A magical sigil for the Mage class (The Living Conduit): a human silhouette made of lightning inside an hourglass. Flat angular geometry, bold black outline, violet (#6b3fa6) main with light violet (#b79ae0) highlights and a single gold accent, glowing thin lines. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```


---

## Type badges

### Type icon: Tank (T)  `art/site/type-tank.png`

- **Used for:** The small tile badge and the details page (replaces the single letter, optional)
- **Generate at:** 512x512
- **Format:** PNG, transparent

```text
A game class icon for the Tank type (Soaks damage and holds the line.): a heavy tower shield with a crack. Flat bold angular shapes, thick outline, white fill with one hot-gold (#ffd60a) accent, readable at 32 pixels, like an arcade power-up badge. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Type icon: Bruiser (B)  `art/site/type-bruiser.png`

- **Used for:** The small tile badge and the details page (replaces the single letter, optional)
- **Generate at:** 512x512
- **Format:** PNG, transparent

```text
A game class icon for the Bruiser type (Tough front-liner who hits hard up close.): a clenched armored fist with a spike. Flat bold angular shapes, thick outline, white fill with one hot-gold (#ffd60a) accent, readable at 32 pixels, like an arcade power-up badge. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Type icon: Fighter (F)  `art/site/type-fighter.png`

- **Used for:** The small tile badge and the details page (replaces the single letter, optional)
- **Generate at:** 512x512
- **Format:** PNG, transparent

```text
A game class icon for the Fighter type (Balanced all-rounder, strong at everything.): a crossed sword and buckler. Flat bold angular shapes, thick outline, white fill with one hot-gold (#ffd60a) accent, readable at 32 pixels, like an arcade power-up badge. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Type icon: Assassin (A)  `art/site/type-assassin.png`

- **Used for:** The small tile badge and the details page (replaces the single letter, optional)
- **Generate at:** 512x512
- **Format:** PNG, transparent

```text
A game class icon for the Assassin type (Fast, fragile and deadly from stealth.): a pair of curved daggers with a half-mask. Flat bold angular shapes, thick outline, white fill with one hot-gold (#ffd60a) accent, readable at 32 pixels, like an arcade power-up badge. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Type icon: Caster (C)  `art/site/type-caster.png`

- **Used for:** The small tile badge and the details page (replaces the single letter, optional)
- **Generate at:** 512x512
- **Format:** PNG, transparent

```text
A game class icon for the Caster type (Spell and tech damage from a distance.): a staff topped with a flaring star. Flat bold angular shapes, thick outline, white fill with one hot-gold (#ffd60a) accent, readable at 32 pixels, like an arcade power-up badge. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Type icon: Blaster (L)  `art/site/type-blaster.png`

- **Used for:** The small tile badge and the details page (replaces the single letter, optional)
- **Generate at:** 512x512
- **Format:** PNG, transparent

```text
A game class icon for the Blaster type (Ranged firepower and explosive area damage.): a rifle with an explosion burst. Flat bold angular shapes, thick outline, white fill with one hot-gold (#ffd60a) accent, readable at 32 pixels, like an arcade power-up badge. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Type icon: Controller (O)  `art/site/type-controller.png`

- **Used for:** The small tile badge and the details page (replaces the single letter, optional)
- **Generate at:** 512x512
- **Format:** PNG, transparent

```text
A game class icon for the Controller type (Traps, binds and shapes the battlefield.): a chain-link net closing around a hex grid. Flat bold angular shapes, thick outline, white fill with one hot-gold (#ffd60a) accent, readable at 32 pixels, like an arcade power-up badge. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Type icon: Support (S)  `art/site/type-support.png`

- **Used for:** The small tile badge and the details page (replaces the single letter, optional)
- **Generate at:** 512x512
- **Format:** PNG, transparent

```text
A game class icon for the Support type (Heals, shields and rescues allies.): a medical cross with a radio antenna. Flat bold angular shapes, thick outline, white fill with one hot-gold (#ffd60a) accent, readable at 32 pixels, like an arcade power-up badge. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Type icon: Enchanter (E)  `art/site/type-enchanter.png`

- **Used for:** The small tile badge and the details page (replaces the single letter, optional)
- **Generate at:** 512x512
- **Format:** PNG, transparent

```text
A game class icon for the Enchanter type (Buffs allies, weakens enemies, bends morale.): a charm necklace with a glowing bell. Flat bold angular shapes, thick outline, white fill with one hot-gold (#ffd60a) accent, readable at 32 pixels, like an arcade power-up badge. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Role icon: Combat  `art/site/role-combat.png`

- **Used for:** Role filter and tile tag
- **Generate at:** 512x512
- **Format:** PNG, transparent

```text
Icon of two crossed swords over a small lightning bolt, flat bold angular shapes, thick black outline, white with one red (#d00000) accent, readable at 32 pixels. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### Role icon: Support  `art/site/role-support.png`

- **Used for:** Role filter and tile tag
- **Generate at:** 512x512
- **Format:** PNG, transparent

```text
Icon of an open hand holding a small glowing shield with a plus sign, flat bold angular shapes, thick black outline, white with one teal (#06d6a0) accent, readable at 32 pixels. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```


---

## Textures and UI

### Ink and paper grain  `art/site/tex-ink-grain.png`

- **Used for:** Seamless overlay for the whole site (multiply or soft-light, 6 to 10% opacity)
- **Generate at:** 1024x1024 (must tile)
- **Format:** PNG

```text
A seamless tileable texture of dark charcoal paper with subtle ink speckle, fine scratches and faint halftone dots, near-black with soft grey variation, very low contrast, no objects, no pattern repeats visible. No text.
```

### Halftone dots  `art/site/tex-halftone.png`

- **Used for:** Overlay for hero and panel corners
- **Generate at:** 1024x1024 (must tile)
- **Format:** PNG, transparent

```text
A seamless tileable halftone dot pattern in white dots on transparent background, dots fading from large to small diagonally, comic-book Ben-Day style. No text. Transparent background (true alpha).
```

### Rain streaks  `art/site/tex-rain.png`

- **Used for:** Animated overlay (CSS scroll) on the hero and viewer
- **Generate at:** 1024x1536 (must tile vertically)
- **Format:** PNG, transparent

```text
Seamless vertically tileable diagonal rain streaks, thin white and pale blue lines of varied length and opacity on transparent background, soft motion blur, no splashes, no objects. Transparent background (true alpha).
```

### TV static  `art/site/tex-static.png`

- **Used for:** Page transition flash and loading shimmer
- **Generate at:** 1024x1024 (must tile)
- **Format:** PNG

```text
A seamless tileable black and white analog TV static noise texture with a few horizontal tracking glitch lines, high contrast. No text.
```

### Synth grid floor  `art/site/tex-synth-grid.png`

- **Used for:** Behind the footer and empty states (perspective grid)
- **Generate at:** 1792x1024
- **Format:** PNG, transparent

```text
A perspective synthwave grid floor receding to a horizon, thin cyan and hot-pink glowing lines on transparent background, subtle fade to transparent at the horizon and near edge. No sun, no sky. Transparent background (true alpha).
```

### Panel corner ornament  `art/site/frame-corner.png`

- **Used for:** Glass panel corners (rotate for four corners)
- **Generate at:** 512x512
- **Format:** PNG, transparent

```text
A single ornamental corner bracket for a UI panel, angular gothic-meets-arcade style: a thick L-shaped bracket with a small spike, a notch and a tiny lightning bolt, white with a thin gold line, flat vector-like. No text. Transparent background (true alpha), shape anchored to the top-left corner.
```

### Section divider  `art/site/divider.png`

- **Used for:** Between page sections
- **Generate at:** 1792x256 (wide strip)
- **Format:** PNG, transparent

```text
A horizontal divider ornament: a thin line with a central small lightning bolt flanked by two crossed antennas and tiny diamonds, fading at both ends, white and gold, flat angular style. No text. Transparent background (true alpha).
```

### Plaque frame  `art/site/plaque-frame.png`

- **Used for:** Art viewer plaque (character name plate)
- **Generate at:** 1536x384
- **Format:** PNG, transparent

```text
A wide ornamental name-plate frame, dark metal with riveted corners, a thin neon-gold inner line, small antenna ornaments at both ends, empty dark center for text, flat angular 1980s style. No text. Transparent background (true alpha).
```

### Muted placeholder tile  `art/site/placeholder-tile.jpg`

- **Used for:** Gallery tile for characters without art yet (the dull default)
- **Generate at:** 900x1200
- **Format:** JPG

```text
A dull, muted, near-greyscale placeholder poster: a big empty circular spotlight on a dark charcoal wall, a diagonal light shaft, scratched concrete, faint halftone, nothing else. Very low saturation, dark, no figures. No text.
```

### Empty state illustration  `art/site/empty-state.png`

- **Used for:** When no filter results are shown
- **Generate at:** 1024x1024
- **Format:** PNG, transparent

```text
A small spot illustration of an empty arcade cabinet with a flickering blank screen and a single dangling cable, flat angular shapes, white and grey with a hot-pink (#ff5fb0) accent. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```

### 404 illustration  `art/site/not-found.jpg`

- **Used for:** Missing page
- **Generate at:** 1536x1024
- **Format:** JPG

```text
A lone figure silhouette holding a flashlight in a fog-filled dead-end street with a smashed neon sign and a rain-slick road ending at a chain-link fence. Sin City ink style: stark black and white with heavy contrast and one accent color, flat angular geometry, bold clean contour lines, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity, violet-washed with a gold accent. Empty space at the top for text. No text, no lettering, no watermark, no logo.
```

### Loader mark  `art/site/loader.png`

- **Used for:** Page loading spinner (animate rotation in CSS)
- **Generate at:** 512x512
- **Format:** PNG, transparent

```text
A circular loading mark: a vinyl record whose grooves form a spinning radar sweep, with one lightning bolt notch, flat bold white and hot-pink lines. No text, no lettering, no watermark, no logo. transparent background (true alpha), isolated, centered with generous margin, no shadow, no floor.
```


---

## Roadmap and manual

### Phase 1: The Project Website  `art/site/roadmap-phase-site.jpg`

- **Used for:** Roadmap phase header illustration
- **Generate at:** 1536x512 (wide; crop from 1792x1024)
- **Format:** JPG

```text
Wide painted illustration: a glowing control room: a wall of CRT screens showing character silhouettes, a drafting table with ink brushes and a radio. Sin City ink style: stark black and white with heavy contrast and one accent color, flat angular geometry, bold clean contour lines, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity, washed in deep violet with gold and cyan accents, calm dark left side for the title. No figures with faces. No text, no lettering, no watermark, no logo.
```

### Phase 2: Comics  `art/site/roadmap-phase-comics.jpg`

- **Used for:** Roadmap phase header illustration
- **Generate at:** 1536x512 (wide; crop from 1792x1024)
- **Format:** JPG

```text
Wide painted illustration: a stack of comic pages spilling across a drafting table, ink bottles, brushes, speech-bubble shapes without text, panel borders. Sin City ink style: stark black and white with heavy contrast and one accent color, flat angular geometry, bold clean contour lines, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity, washed in deep violet with gold and cyan accents, calm dark left side for the title. No figures with faces. No text, no lettering, no watermark, no logo.
```

### Phase 3: Board Game  `art/site/roadmap-phase-board.jpg`

- **Used for:** Roadmap phase header illustration
- **Generate at:** 1536x512 (wide; crop from 1792x1024)
- **Format:** JPG

```text
Wide painted illustration: a game table in a dim room: hex tiles, cards, dice made of circuit boards, painted miniatures as black silhouettes. Sin City ink style: stark black and white with heavy contrast and one accent color, flat angular geometry, bold clean contour lines, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity, washed in deep violet with gold and cyan accents, calm dark left side for the title. No figures with faces. No text, no lettering, no watermark, no logo.
```

### Phase 4: The MMO  `art/site/roadmap-phase-mmo.jpg`

- **Used for:** Roadmap phase header illustration
- **Generate at:** 1536x512 (wide; crop from 1792x1024)
- **Format:** JPG

```text
Wide painted illustration: a vast map of the whole wasteland seen from above with glowing connection lines between keeps and towers, server racks growing like trees. Sin City ink style: stark black and white with heavy contrast and one accent color, flat angular geometry, bold clean contour lines, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity, washed in deep violet with gold and cyan accents, calm dark left side for the title. No figures with faces. No text, no lettering, no watermark, no logo.
```

### Monster Manual header  `art/site/manual-header.jpg`

- **Used for:** Top of the Monster Manual page
- **Generate at:** 1792x1024 (crop wide)
- **Format:** JPG

```text
An old tattered field-guide spread on a desk: yellowed pages with ink sketches of monsters (no readable text), a magnifying lens, pressed fungus, a cassette tape, a lantern, dim amber light. Sin City ink style: stark black and white with heavy contrast and one accent color, flat angular geometry, bold clean contour lines, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity, amber-washed with a hot-pink accent. No text, no lettering, no watermark, no logo.
```

### NPC card frame  `art/site/manual-card-frame.png`

- **Used for:** Monster Manual NPC cards
- **Generate at:** 1024x1536
- **Format:** PNG, transparent

```text
A vertical trading-card frame for a monster-manual entry: dark metal border with spiky corners and a thin neon-gold line, a large empty portrait window in the upper two thirds and an empty text band below, flat angular 1980s style. No text. Transparent background (true alpha), the portrait window also fully transparent.
```


---

## Art direction

### Pillar: David Bowie's Batman  `art/site/art-pillar-bowie.jpg`

- **Used for:** Art Direction page pillar card
- **Generate at:** 1024x1024
- **Format:** JPG

```text
A glam-gothic rooftop at night under a lightning-streaked sky, a cape billowing from an unseen figure's silhouette seen from behind, a spotlight beam, a lightning bolt stage prop. Sin City ink style: stark black and white with heavy contrast and one accent color, flat angular geometry, bold clean contour lines, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity, violet and hot-pink wash. Face hidden. No text, no lettering, no watermark, no logo.
```

### Pillar: Sin City ink  `art/site/art-pillar-ink.jpg`

- **Used for:** Art Direction page pillar card
- **Generate at:** 1024x1024
- **Format:** JPG

```text
A rainy alley in extreme black-and-white ink contrast, a single red neon sign casting a long shape on the wet pavement, a trench-coat silhouette far away. Sin City style, one spot color red (#d00000). No text, no lettering, no watermark, no logo.
```

### Pillar: Four colors, always  `art/site/art-pillar-fourcolor.jpg`

- **Used for:** Art Direction page pillar card
- **Generate at:** 1024x1024
- **Format:** JPG

```text
An abstract poster of four overlapping flat color shapes (gold, violet, hot pink and teal) over a black and grey ink-painted cityscape, geometric and clean. No text, no lettering, no watermark, no logo.
```

### Pillar: Not just neon  `art/site/art-pillar-notneon.jpg`

- **Used for:** Art Direction page pillar card
- **Generate at:** 1024x1024
- **Format:** JPG

```text
A dusk scene in chalky pastel tones: pale peach sky, sodium-amber street lamps, dusty teal buildings, a calm empty road, a single soft pink sign. Painted ink and charcoal texture, quiet and moody. No text, no lettering, no watermark, no logo.
```


---

## Story page

### Story scene: The Last Broadcast  `art/site/story-broadcast.jpg`

- **Used for:** Story page, chapter 1 (the 1986 announcement)
- **Generate at:** 1792x1024
- **Format:** JPG

```text
A wide cinematic painting: a colossal 1980s Soviet-era concrete broadcast tower rising from a snowy night city, enormous concentric rings of radio waves rippling outward across a stormy sky, dozens of tiny glowing CRT television screens in apartment windows all showing white static, a lone empty street below. Cold teal and white wash with one blood-red warning light at the tower's top. No people, no text, no flags, no real logos. Sin City ink style: stark black and white with heavy contrast and one dominant wash color, charcoal and ink painting on toned paper, rain and haze, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity. 16:9 landscape, strong foreground, midground and background depth, a calm darker area on the left third for overlaid text. No text, no lettering, no watermark.
```

### Story scene: The War to End the Old World  `art/site/story-war.jpg`

- **Used for:** Story page, chapter 2
- **Generate at:** 1792x1024
- **Format:** JPG

```text
A wide cinematic painting: a ruined metropolis during a world war: collapsed suspension bridge in a river, toppled power pylons with sparking lines, burning high-rises, searchlights crossing a smoke-filled sky, a dead satellite dish on its side, abandoned tanks in the foreground. Orange and charcoal wash with sooty black. No people, no text, no flags. Sin City ink style: stark black and white with heavy contrast and one dominant wash color, charcoal and ink painting on toned paper, rain and haze, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity. 16:9 landscape, strong foreground, midground and background depth, a calm darker area on the left third for overlaid text. No text, no lettering, no watermark.
```

### Story scene: The Dim  `art/site/story-dim.jpg`

- **Used for:** Story page, chapter 3
- **Generate at:** 1792x1024
- **Format:** JPG

```text
A wide cinematic painting: a fortified dark-ages settlement built from stacked shipping containers and tire walls with wooden palisades, torches and braziers burning, a tall radio mast with one tiny red light, banners made of old tarps, rain-slick cobblestones, a single pink neon sign glowing in the fog. Dusty amber and gold wash. No people, no readable text. Sin City ink style: stark black and white with heavy contrast and one dominant wash color, charcoal and ink painting on toned paper, rain and haze, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity. 16:9 landscape, strong foreground, midground and background depth, a calm darker area on the left third for overlaid text. No text, no lettering, no watermark.
```

### Story scene: The Black Pyramid  `art/site/story-pyramid.jpg`

- **Used for:** Story page, chapter 6
- **Generate at:** 1792x1024
- **Format:** JPG

```text
A wide cinematic painting: a huge black pyramid under a moon in an ash desert, a thin beam of pale gold light rising from its apex into storm clouds, a long line of tiny torches winding up the dunes toward its entrance, ancient statues half-buried in sand, broken old-world highway signs sticking out of the dunes. Deep violet and gold wash with black. No people close up, no text. Sin City ink style: stark black and white with heavy contrast and one dominant wash color, charcoal and ink painting on toned paper, rain and haze, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity. 16:9 landscape, strong foreground, midground and background depth, a calm darker area on the left third for overlaid text. No text, no lettering, no watermark.
```

### Story scene: The Block  `art/site/story-block.jpg`

- **Used for:** Story page, chapter 7
- **Generate at:** 1792x1024
- **Format:** JPG

```text
A wide cinematic painting: a brutalist concrete prison fortress on a barren hill at night, searchlights sweeping, razor wire, a heavy gate, a long road approaching through fog lined with the dark silhouettes of armored zombie guards standing in a line (no gore, only silhouettes), a small old temple with a statue on a small hill to one side. Sickly green and grey wash. No text. Sin City ink style: stark black and white with heavy contrast and one dominant wash color, charcoal and ink painting on toned paper, rain and haze, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity. 16:9 landscape, strong foreground, midground and background depth, a calm darker area on the left third for overlaid text. No text, no lettering, no watermark.
```

### Story scene: Nine Empty Chairs  `art/site/story-chairs.jpg`

- **Used for:** Story page, chapter 9 (the Elders are dead)
- **Generate at:** 1792x1024
- **Format:** JPG

```text
A wide cinematic painting: a vast ruined stone council chamber with nine tall empty high-backed chairs arranged in a half circle, each with a snuffed-out candle and a thin curl of smoke, moonlight falling through a broken dome, drifting dust and a few scattered scarab beetles on the floor, a seal on the floor with three symbols. Deep red and charcoal wash with cold moonlight. No people, no text. Sin City ink style: stark black and white with heavy contrast and one dominant wash color, charcoal and ink painting on toned paper, rain and haze, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity. 16:9 landscape, strong foreground, midground and background depth, a calm darker area on the left third for overlaid text. No text, no lettering, no watermark.
```

### Story scene: The Heirs  `art/site/story-heirs.jpg`

- **Used for:** Story page, chapter 11
- **Generate at:** 1792x1024
- **Format:** JPG

```text
A wide cinematic painting: eight young silhouettes seen from behind standing on a ridge at dusk looking over a ruined neon city and the dark wilderness beyond: one with a staff, one with a sword and sparks of lightning, one with a crossbow, one small child floating a few inches above the ground, a young woman with long hair, one with a wolf shadow, one with flames in a raised hand, one with a hood. Violet and magenta sunset sky with a striped half sun. Silhouettes only, no faces, no text. Sin City ink style: stark black and white with heavy contrast and one dominant wash color, charcoal and ink painting on toned paper, rain and haze, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood, mature tone, no gore, no nudity. 16:9 landscape, strong foreground, midground and background depth, a calm darker area on the left third for overlaid text. No text, no lettering, no watermark.
```

