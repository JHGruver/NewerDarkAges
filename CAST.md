# The Newer Dark Ages: Cast Bible

Generated from the site data and [ART-DIRECTION.md](ART-DIRECTION.md). 126 characters across 8 peoples. Also available as a spreadsheet: **CAST.xlsx** (same data, one row per character) and **CAST.json**.

**Gender split:** Male 63, Female 48, Nonbinary 15. **Combat/support:** 101/25. **With final art:** 11.

## Art direction in one screen

**Core principle: design for silhouette first, character second, detail last.** Samurai Jack flat geometry + Sin City heavy blacks + 1980s glam-gothic + salvaged retro-cyberpunk + classic fantasy.

- **Required:** strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
- **Forbidden:** photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
- **Colors:** exactly three accents per character: main about 60%, secondary about 30%, pop about 10%, plus black, white and grey. Exact hex, flat fills. The People background color is never a character color.
- **The Samurai Jack check (every portrait must pass all five):** (1) Would the silhouette remain recognizable if filled entirely with black? (2) Could the character be animated using relatively few large shapes? (3) Is the design readable at thumbnail size? (4) Are the colors flat and intentionally separated? (5) Is the character distinctive without relying on elaborate surface details?

## How to use the prompts

- Characters: gpt-image-1.5, 1024x1536, transparent PNG. Backgrounds: gpt-image-2, 1536x1024. `node tools/generate-character.mjs <id>` does both, attaches the approved characters as style references, self-vets every attempt and retries.
- Each prompt is self-contained and under 4000 characters. Hierarchy: People › Class › Subclass.


---

# Human
*People color: Gold #d9a521. Background setting: a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners.*

**Tagline:** No fangs, no fur. Just chrome, nerve and a very loud stereo.  
**Classes:** Roadwar Convoys (Interceptors, Outriders, Fuel Zealots); Arcade Clans (Joystick Duelists, Pinball Gunners, Token Brokers); Pirate Radio (Static Jammers, Skyline DJs, Late-Night Hosts); Mall Republic (Riot Marshals, Escalator Lancers, Concierge Diplomats)


## Human › Roadwar Convoys

### Interceptors  `interceptors`

*Road's closed. Permanently.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | wiry and hard-jawed; medium size; mobility: vehicle |
| Ethnicity + nationality | Irish-Scottish heritage, Scottish |
| Identity | male being, character |
| Wardrobe | hard-jawed human driver in a spiked black leather jacket, driving gloves, goggles pushed up on the forehead and boots, one hand gripping a heavy tire-iron, the other fist wrapped in a spiked knuckle-duster |
| Accessories | Armored coupe; ram-bar; tire-iron; driving gloves |
| Pose | wide fighting stance with the crowbar swung back over one shoulder |
| Facial expression | fierce, jaw set, one eyebrow cocked |
| People | Human |
| Class | Roadwar Convoys |
| Subclass | Interceptors |
| Type | Bruiser |
| Combat or support | Combat |
| Silhouette hook | wide fighting stance with the crowbar swung back over one shoulder; the Armored coupe and the ram-bar break the outline so it reads instantly as a black shape |
| Shape language | heavy trapezoids, oversized fists and shoulders |
| Main color (60%) | #d00000: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #f8f9fa: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #ffba08: the eyes, the Armored coupe and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Done: `art/v2/human-interceptors.png` and `art/v2/human-interceptors-bg.jpg` |
| Last vet | Final art accepted (made before the vetting pipeline) |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as wide fighting stance with the crowbar swung back over one shoulder.
2. Few large shapes: heavy trapezoids, oversized fists and shoulders; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Armored coupe and the pose must be visible at 64 px.
4. Flat colors: #d00000 / #f8f9fa / #ffba08 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Armored coupe and ram-bar and the bruiser shape language.

**Background**

| Field | Value |
|---|---|
| Background | a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners |
| Colors | wash #d9a521 (about 65%); accents #d00000 / #f8f9fa / #ffba08 (about 20%) |
| Midground | an armored coupe with a spiked ram-bar and one glowing amber headlight parked at the lower-right, stacks of spare tires |
| Foreground | a fuel drum, a hand-painted convoy banner |
| Character-relevant items | an armored coupe with a spiked ram-bar and one glowing amber headlight parked at the lower-right, stacks of spare tires, a fuel drum, a hand-painted convoy banner |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Interceptors, male being, character (Irish-Scottish heritage, Scottish), apparent age mid 40s.
DESIGN FOR SILHOUETTE FIRST: wide fighting stance with the crowbar swung back over one shoulder; the Armored coupe and the ram-bar break the outline so it reads instantly as a black shape. Shape language: heavy trapezoids, oversized fists and shoulders.
BODY: wiry and hard-jawed, medium size, vehicle. POSE: wide fighting stance with the crowbar swung back over one shoulder. EXPRESSION: fierce, jaw set, one eyebrow cocked, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): hard-jawed human driver in a spiked black leather jacket, driving gloves, goggles pushed up on the forehead and boots, one hand gripping a heavy tire-iron, the other fist wrapped in a spiked knuckle-duster.
COLOR (exact hex values, flat fills): main #d00000 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #f8f9fa about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #ffba08 about 10%, used on the eyes, the Armored coupe and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #d9a521 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Bruiser (combat) of the Human people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners. An empty environment for Interceptors with no people, creatures, figures, silhouettes or text. Midground: an armored coupe with a spiked ram-bar and one glowing amber headlight parked at the lower-right, stacks of spare tires. Foreground: a fuel drum, a hand-painted convoy banner, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a GOLD-washed painting. The people color #d9a521 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #d00000 for the biggest glowing sources and surfaces, secondary #f8f9fa for medium panels, banners and lights, pop #ffba08 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Outriders  `outriders`

*Two wheels. No rules.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | lean and quick; medium size; mobility: vehicle |
| Ethnicity + nationality | Mexican-Native heritage, Mexican |
| Identity | female being, character |
| Wardrobe | lean human rider in a patched riding jacket, spiked shoulder pads, bandana mask and boots, a coiled chain whip in one hand and a compact crossbow in the other |
| Accessories | Chopper; chain whip; crossbow; spiked pads |
| Pose | hunched low in a speeding lean, chain whip trailing behind |
| Facial expression | fierce lopsided grin |
| People | Human |
| Class | Roadwar Convoys |
| Subclass | Outriders |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | hunched low in a speeding lean, chain whip trailing behind; the Chopper and the chain whip break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #3a86ff: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ff006e: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff7c7: the eyes, the Chopper and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as hunched low in a speeding lean, chain whip trailing behind.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Chopper and the pose must be visible at 64 px.
4. Flat colors: #3a86ff / #ff006e / #fff7c7 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Chopper and chain whip and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners |
| Colors | wash #d9a521 (about 65%); accents #3a86ff / #ff006e / #fff7c7 (about 20%) |
| Midground | a stripped-down chopper motorcycle with fat tires leaning on its kickstand, a tangle of chains |
| Foreground | a stack of tires, a painted wall of crew marks |
| Character-relevant items | a stripped-down chopper motorcycle with fat tires leaning on its kickstand, a tangle of chains, a stack of tires, a painted wall of crew marks |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Outriders, female being, character (Mexican-Native heritage, Mexican), apparent age early 70s.
DESIGN FOR SILHOUETTE FIRST: hunched low in a speeding lean, chain whip trailing behind; the Chopper and the chain whip break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: lean and quick, medium size, vehicle. POSE: hunched low in a speeding lean, chain whip trailing behind. EXPRESSION: fierce lopsided grin, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): lean human rider in a patched riding jacket, spiked shoulder pads, bandana mask and boots, a coiled chain whip in one hand and a compact crossbow in the other.
COLOR (exact hex values, flat fills): main #3a86ff about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ff006e about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff7c7 about 10%, used on the eyes, the Chopper and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #d9a521 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Human people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners. An empty environment for Outriders with no people, creatures, figures, silhouettes or text. Midground: a stripped-down chopper motorcycle with fat tires leaning on its kickstand, a tangle of chains. Foreground: a stack of tires, a painted wall of crew marks, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a GOLD-washed painting. The people color #d9a521 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #3a86ff for the biggest glowing sources and surfaces, secondary #ff006e for medium panels, banners and lights, pop #fff7c7 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Fuel Zealots  `fuelpriests`

*The tank is a sacrament.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | stocky and robed; medium size; mobility: grounded |
| Ethnicity + nationality | Armenian heritage, Armenian-American |
| Identity | male being, character |
| Wardrobe | robed human mechanic-zealot in a stenciled fuel-company vestment, a heavy wrench in one hand and a smoking hand-censer on a short chain in the other, a bandolier of small oil flasks |
| Accessories | Fuel censer; jerry cans; wrench; stenciled vestments |
| Pose | arms spread wide, smoking censer swinging from one hand |
| Facial expression | solemn, eyes lifted in devotion |
| People | Human |
| Class | Roadwar Convoys |
| Subclass | Fuel Zealots |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | arms spread wide, smoking censer swinging from one hand; the Fuel censer and the jerry cans break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #06d6a0: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #e63946: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #2e2200: the eyes, the Fuel censer and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as arms spread wide, smoking censer swinging from one hand.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Fuel censer and the pose must be visible at 64 px.
4. Flat colors: #06d6a0 / #e63946 / #2e2200 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Fuel censer and jerry cans and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners |
| Colors | wash #d9a521 (about 65%); accents #06d6a0 / #e63946 / #2e2200 (about 20%) |
| Midground | a dead gas station pump island, a stack of jerry cans, a fuel tanker truck on its side |
| Foreground | a hand-painted altar made from a tire stack, flickering flames in a barrel |
| Character-relevant items | a dead gas station pump island, a stack of jerry cans, a fuel tanker truck on its side, a hand-painted altar made from a tire stack, flickering flames in a barrel |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Fuel Zealots, male being, character (Armenian heritage, Armenian-American), apparent age mid 40s.
DESIGN FOR SILHOUETTE FIRST: arms spread wide, smoking censer swinging from one hand; the Fuel censer and the jerry cans break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: stocky and robed, medium size, grounded. POSE: arms spread wide, smoking censer swinging from one hand. EXPRESSION: solemn, eyes lifted in devotion, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): robed human mechanic-zealot in a stenciled fuel-company vestment, a heavy wrench in one hand and a smoking hand-censer on a short chain in the other, a bandolier of small oil flasks.
COLOR (exact hex values, flat fills): main #06d6a0 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #e63946 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #2e2200 about 10%, used on the eyes, the Fuel censer and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #d9a521 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Human people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners. An empty environment for Fuel Zealots with no people, creatures, figures, silhouettes or text. Midground: a dead gas station pump island, a stack of jerry cans, a fuel tanker truck on its side. Foreground: a hand-painted altar made from a tire stack, flickering flames in a barrel, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a GOLD-washed painting. The people color #d9a521 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #06d6a0 for the biggest glowing sources and surfaces, secondary #e63946 for medium panels, banners and lights, pop #2e2200 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Human › Arcade Clans

### Joystick Duelists  `joystick`

*Player one has entered the arena.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | lean and precise; medium size; mobility: agile |
| Ethnicity + nationality | Korean heritage, South Korean |
| Identity | male being, character |
| Wardrobe | lean human fighter in a high-score jacket, wrist-guards, a glowing score-visor over the eyes and a token pouch at the belt, wielding a blade whose hilt is an arcade joystick |
| Accessories | Arcade-stick blade; wrist-guards; score visor; token pouch |
| Pose | mid-combo lunge, joystick-blade arcing overhead |
| Facial expression | intense focus, eyes narrowed behind the visor |
| People | Human |
| Class | Arcade Clans |
| Subclass | Joystick Duelists |
| Type | Fighter |
| Combat or support | Combat |
| Silhouette hook | mid-combo lunge, joystick-blade arcing overhead; the Arcade-stick blade and the wrist-guards break the outline so it reads instantly as a black shape |
| Shape language | balanced diagonals with one clear weapon line |
| Main color (60%) | #9d4edd: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #f4e846: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #00f5d4: the eyes, the Arcade-stick blade and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as mid-combo lunge, joystick-blade arcing overhead.
2. Few large shapes: balanced diagonals with one clear weapon line; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Arcade-stick blade and the pose must be visible at 64 px.
4. Flat colors: #9d4edd / #f4e846 / #00f5d4 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Arcade-stick blade and wrist-guards and the fighter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners |
| Colors | wash #d9a521 (about 65%); accents #9d4edd / #f4e846 / #00f5d4 (about 20%) |
| Midground | a row of dead arcade cabinets with blank screens, a glowing coin-op machine, a pinball table |
| Foreground | scattered tokens on the floor, a high-score board on the wall |
| Character-relevant items | a row of dead arcade cabinets with blank screens, a glowing coin-op machine, a pinball table, scattered tokens on the floor, a high-score board on the wall |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Joystick Duelists, male being, character (Korean heritage, South Korean), apparent age late 30s.
DESIGN FOR SILHOUETTE FIRST: mid-combo lunge, joystick-blade arcing overhead; the Arcade-stick blade and the wrist-guards break the outline so it reads instantly as a black shape. Shape language: balanced diagonals with one clear weapon line.
BODY: lean and precise, medium size, agile. POSE: mid-combo lunge, joystick-blade arcing overhead. EXPRESSION: intense focus, eyes narrowed behind the visor, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): lean human fighter in a high-score jacket, wrist-guards, a glowing score-visor over the eyes and a token pouch at the belt, wielding a blade whose hilt is an arcade joystick.
COLOR (exact hex values, flat fills): main #9d4edd about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #f4e846 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #00f5d4 about 10%, used on the eyes, the Arcade-stick blade and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #d9a521 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Fighter (combat) of the Human people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners. An empty environment for Joystick Duelists with no people, creatures, figures, silhouettes or text. Midground: a row of dead arcade cabinets with blank screens, a glowing coin-op machine, a pinball table. Foreground: scattered tokens on the floor, a high-score board on the wall, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a GOLD-washed painting. The people color #d9a521 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #9d4edd for the biggest glowing sources and surfaces, secondary #f4e846 for medium panels, banners and lights, pop #00f5d4 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Pinball Gunners  `pinball`

*Tilt. Fire. Tilt.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | rangy and loose-limbed; medium size; mobility: agile |
| Ethnicity + nationality | Igbo heritage, Nigerian |
| Identity | female being, character |
| Wardrobe | rangy human gunner in a padded jacket with a small bumper-shaped shield on one arm, a ricochet rifle in both hands and a plunger-tipped spear slung across the back |
| Accessories | Ricochet rifle; bumper shield; plunger-spear; pocket flippers |
| Pose | braced at one knee, rifle shouldered and angled for a bank shot |
| Facial expression | gleeful squint, one eye closed to aim |
| People | Human |
| Class | Arcade Clans |
| Subclass | Pinball Gunners |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | braced at one knee, rifle shouldered and angled for a bank shot; the Ricochet rifle and the bumper shield break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #ff5d8f: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #00bbf9: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff7c7: the eyes, the Ricochet rifle and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as braced at one knee, rifle shouldered and angled for a bank shot.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Ricochet rifle and the pose must be visible at 64 px.
4. Flat colors: #ff5d8f / #00bbf9 / #fff7c7 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Ricochet rifle and bumper shield and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners |
| Colors | wash #d9a521 (about 65%); accents #ff5d8f / #00bbf9 / #fff7c7 (about 20%) |
| Midground | a giant pinball table with glowing bumpers, flippers and rails built into the wall, an arcade claw machine |
| Foreground | bumper-shaped barricades, scattered steel balls |
| Character-relevant items | a giant pinball table with glowing bumpers, flippers and rails built into the wall, an arcade claw machine, bumper-shaped barricades, scattered steel balls |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Pinball Gunners, female being, character (Igbo heritage, Nigerian), apparent age late 30s.
DESIGN FOR SILHOUETTE FIRST: braced at one knee, rifle shouldered and angled for a bank shot; the Ricochet rifle and the bumper shield break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: rangy and loose-limbed, medium size, agile. POSE: braced at one knee, rifle shouldered and angled for a bank shot. EXPRESSION: gleeful squint, one eye closed to aim, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): rangy human gunner in a padded jacket with a small bumper-shaped shield on one arm, a ricochet rifle in both hands and a plunger-tipped spear slung across the back.
COLOR (exact hex values, flat fills): main #ff5d8f about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #00bbf9 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff7c7 about 10%, used on the eyes, the Ricochet rifle and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #d9a521 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Human people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners. An empty environment for Pinball Gunners with no people, creatures, figures, silhouettes or text. Midground: a giant pinball table with glowing bumpers, flippers and rails built into the wall, an arcade claw machine. Foreground: bumper-shaped barricades, scattered steel balls, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a GOLD-washed painting. The people color #d9a521 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #ff5d8f for the biggest glowing sources and surfaces, secondary #00bbf9 for medium panels, banners and lights, pop #fff7c7 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Token Brokers  `tokenbrokers`

*Everybody pays. Everybody plays.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | sharp and slight; medium size; mobility: grounded |
| Ethnicity + nationality | Lebanese heritage, Brazilian |
| Identity | male being, character |
| Wardrobe | sharp human broker in a satin jacket with a bandolier of glowing tokens, a calculator-gauntlet on one forearm and a leather ledger under the other arm, one coin flipping in the hand |
| Accessories | Token bandolier; calculator-gauntlet; lucky die; ledger |
| Pose | flipping a coin with one hand, ledger tucked under the other arm |
| Facial expression | sly knowing smirk |
| People | Human |
| Class | Arcade Clans |
| Subclass | Token Brokers |
| Type | Enchanter |
| Combat or support | Support |
| Silhouette hook | flipping a coin with one hand, ledger tucked under the other arm; the Token bandolier and the calculator-gauntlet break the outline so it reads instantly as a black shape |
| Shape language | circles and stars around a charm, instrument or talisman |
| Main color (60%) | #f8e777: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #06d6a0: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #282956: the eyes, the Token bandolier and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as flipping a coin with one hand, ledger tucked under the other arm.
2. Few large shapes: circles and stars around a charm, instrument or talisman; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Token bandolier and the pose must be visible at 64 px.
4. Flat colors: #f8e777 / #06d6a0 / #282956 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Token bandolier and calculator-gauntlet and the enchanter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners |
| Colors | wash #d9a521 (about 65%); accents #f8e777 / #06d6a0 / #282956 (about 20%) |
| Midground | a token-exchange counter with brass cages and a glowing change machine, stacks of tokens in glass tubes |
| Foreground | a betting board, a vault door |
| Character-relevant items | a token-exchange counter with brass cages and a glowing change machine, stacks of tokens in glass tubes, a betting board, a vault door |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Token Brokers, male being, character (Lebanese heritage, Brazilian), apparent age late 50s.
DESIGN FOR SILHOUETTE FIRST: flipping a coin with one hand, ledger tucked under the other arm; the Token bandolier and the calculator-gauntlet break the outline so it reads instantly as a black shape. Shape language: circles and stars around a charm, instrument or talisman.
BODY: sharp and slight, medium size, grounded. POSE: flipping a coin with one hand, ledger tucked under the other arm. EXPRESSION: sly knowing smirk, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): sharp human broker in a satin jacket with a bandolier of glowing tokens, a calculator-gauntlet on one forearm and a leather ledger under the other arm, one coin flipping in the hand.
COLOR (exact hex values, flat fills): main #f8e777 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #06d6a0 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #282956 about 10%, used on the eyes, the Token bandolier and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #d9a521 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Enchanter (support) of the Human people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners. An empty environment for Token Brokers with no people, creatures, figures, silhouettes or text. Midground: a token-exchange counter with brass cages and a glowing change machine, stacks of tokens in glass tubes. Foreground: a betting board, a vault door, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a GOLD-washed painting. The people color #d9a521 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #f8e777 for the biggest glowing sources and surfaces, secondary #06d6a0 for medium panels, banners and lights, pop #282956 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Human › Pirate Radio

### Static Jammers  `jammers`

*No signal. No problem.*

**Character**

| Field | Value |
|---|---|
| Gender | Nonbinary |
| Physique | average build under a heavy pack; medium size; mobility: grounded |
| Ethnicity + nationality | Filipino heritage, Filipino |
| Identity | nonbinary being, character |
| Wardrobe | human broadcaster in a patched jacket with a humming jammer pack on the back, a headset, patch cables looped at the belt and a crackling shortwave baton in one hand |
| Accessories | Jammer pack; shortwave baton; patch cables; headset |
| Pose | baton pointed forward, shoulders turned as the pack hums |
| Facial expression | calm and alert, lips pressed |
| People | Human |
| Class | Pirate Radio |
| Subclass | Static Jammers |
| Type | Controller |
| Combat or support | Combat |
| Silhouette hook | baton pointed forward, shoulders turned as the pack hums; the Jammer pack and the shortwave baton break the outline so it reads instantly as a black shape |
| Shape language | hexagons and wide arc gestures with tools hanging off the body |
| Main color (60%) | #11b98a: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ff006e: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff7c7: the eyes, the Jammer pack and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as baton pointed forward, shoulders turned as the pack hums.
2. Few large shapes: hexagons and wide arc gestures with tools hanging off the body; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Jammer pack and the pose must be visible at 64 px.
4. Flat colors: #11b98a / #ff006e / #fff7c7 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Jammer pack and shortwave baton and the controller shape language.

**Background**

| Field | Value |
|---|---|
| Background | a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners |
| Colors | wash #d9a521 (about 65%); accents #11b98a / #ff006e / #fff7c7 (about 20%) |
| Midground | a rooftop radio mast with guy-wires, rows of dead monitors, a tangle of cables |
| Foreground | a signal-jammer dish, a transmitter rack |
| Character-relevant items | a rooftop radio mast with guy-wires, rows of dead monitors, a tangle of cables, a signal-jammer dish, a transmitter rack |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Static Jammers, nonbinary being, character (Filipino heritage, Filipino), apparent age mid 30s.
DESIGN FOR SILHOUETTE FIRST: baton pointed forward, shoulders turned as the pack hums; the Jammer pack and the shortwave baton break the outline so it reads instantly as a black shape. Shape language: hexagons and wide arc gestures with tools hanging off the body.
BODY: average build under a heavy pack, medium size, grounded. POSE: baton pointed forward, shoulders turned as the pack hums. EXPRESSION: calm and alert, lips pressed, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): human broadcaster in a patched jacket with a humming jammer pack on the back, a headset, patch cables looped at the belt and a crackling shortwave baton in one hand.
COLOR (exact hex values, flat fills): main #11b98a about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ff006e about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff7c7 about 10%, used on the eyes, the Jammer pack and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #d9a521 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Controller (combat) of the Human people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners. An empty environment for Static Jammers with no people, creatures, figures, silhouettes or text. Midground: a rooftop radio mast with guy-wires, rows of dead monitors, a tangle of cables. Foreground: a signal-jammer dish, a transmitter rack, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a GOLD-washed painting. The people color #d9a521 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #11b98a for the biggest glowing sources and surfaces, secondary #ff006e for medium panels, banners and lights, pop #fff7c7 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Skyline DJs  `snipercaster`

*This one's for the sniper.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | lean marksman; medium size; mobility: climbing |
| Ethnicity + nationality | Ethiopian heritage, Ethiopian |
| Identity | female being, character |
| Wardrobe | human marksman in a bomber jacket, big over-ear headphones around the neck, a long beat-rifle held in both hands, a cassette player clipped at the belt |
| Accessories | Beat rifle; headphones; rooftop rig; tape deck |
| Pose | kneeling on one knee with the rifle braced on a raised thigh |
| Facial expression | cool, unblinking concentration |
| People | Human |
| Class | Pirate Radio |
| Subclass | Skyline DJs |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | kneeling on one knee with the rifle braced on a raised thigh; the Beat rifle and the headphones break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #fed6ad: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #7b2cbf: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #a2cd9e: the eyes, the Beat rifle and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as kneeling on one knee with the rifle braced on a raised thigh.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Beat rifle and the pose must be visible at 64 px.
4. Flat colors: #fed6ad / #7b2cbf / #a2cd9e as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Beat rifle and headphones and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners |
| Colors | wash #d9a521 (about 65%); accents #fed6ad / #7b2cbf / #a2cd9e (about 20%) |
| Midground | a rusted antenna mast with a rooftop sniper perch, a stack of speakers, a boombox |
| Foreground | cables, a rooftop tape deck rig bolted to a rail |
| Character-relevant items | a rusted antenna mast with a rooftop sniper perch, a stack of speakers, a boombox, cables, a rooftop tape deck rig bolted to a rail |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Skyline DJs, female being, character (Ethiopian heritage, Ethiopian), apparent age mid 30s.
DESIGN FOR SILHOUETTE FIRST: kneeling on one knee with the rifle braced on a raised thigh; the Beat rifle and the headphones break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: lean marksman, medium size, climbing. POSE: kneeling on one knee with the rifle braced on a raised thigh. EXPRESSION: cool, unblinking concentration, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): human marksman in a bomber jacket, big over-ear headphones around the neck, a long beat-rifle held in both hands, a cassette player clipped at the belt.
COLOR (exact hex values, flat fills): main #fed6ad about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #7b2cbf about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #a2cd9e about 10%, used on the eyes, the Beat rifle and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #d9a521 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Human people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners. An empty environment for Skyline DJs with no people, creatures, figures, silhouettes or text. Midground: a rusted antenna mast with a rooftop sniper perch, a stack of speakers, a boombox. Foreground: cables, a rooftop tape deck rig bolted to a rail, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a GOLD-washed painting. The people color #d9a521 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #fed6ad for the biggest glowing sources and surfaces, secondary #7b2cbf for medium panels, banners and lights, pop #a2cd9e for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Late-Night Hosts  `latenightcallers`

*You're on the air. Talk to me.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | soft and relaxed; medium size; mobility: grounded |
| Ethnicity + nationality | Black American heritage, American (Louisiana) |
| Identity | male being, character |
| Wardrobe | smooth-voiced human host in a cardigan over a collared shirt, headphones on, one hand holding a vintage microphone, the other holding a cassette, a warm calm expression |
| Accessories | Studio mic; tape deck; phone-bank; warm smile |
| Pose | leaning in toward a vintage microphone, one finger raised |
| Facial expression | warm easy smile |
| People | Human |
| Class | Pirate Radio |
| Subclass | Late-Night Hosts |
| Type | Enchanter |
| Combat or support | Support |
| Silhouette hook | leaning in toward a vintage microphone, one finger raised; the Studio mic and the tape deck break the outline so it reads instantly as a black shape |
| Shape language | circles and stars around a charm, instrument or talisman |
| Main color (60%) | #b5ec69: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #8338ec: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #2e2200: the eyes, the Studio mic and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as leaning in toward a vintage microphone, one finger raised.
2. Few large shapes: circles and stars around a charm, instrument or talisman; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Studio mic and the pose must be visible at 64 px.
4. Flat colors: #b5ec69 / #8338ec / #2e2200 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Studio mic and tape deck and the enchanter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners |
| Colors | wash #d9a521 (about 65%); accents #b5ec69 / #8338ec / #2e2200 (about 20%) |
| Midground | a cramped radio studio booth with a big mixing desk, an on-air sign, a phone-bank switchboard |
| Foreground | a coffee pot, shelves of tapes, a glowing glass window |
| Character-relevant items | a cramped radio studio booth with a big mixing desk, an on-air sign, a phone-bank switchboard, a coffee pot, shelves of tapes, a glowing glass window |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Late-Night Hosts, male being, character (Black American heritage, American (Louisiana)), apparent age mid 40s.
DESIGN FOR SILHOUETTE FIRST: leaning in toward a vintage microphone, one finger raised; the Studio mic and the tape deck break the outline so it reads instantly as a black shape. Shape language: circles and stars around a charm, instrument or talisman.
BODY: soft and relaxed, medium size, grounded. POSE: leaning in toward a vintage microphone, one finger raised. EXPRESSION: warm easy smile, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): smooth-voiced human host in a cardigan over a collared shirt, headphones on, one hand holding a vintage microphone, the other holding a cassette, a warm calm expression.
COLOR (exact hex values, flat fills): main #b5ec69 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #8338ec about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #2e2200 about 10%, used on the eyes, the Studio mic and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #d9a521 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Enchanter (support) of the Human people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners. An empty environment for Late-Night Hosts with no people, creatures, figures, silhouettes or text. Midground: a cramped radio studio booth with a big mixing desk, an on-air sign, a phone-bank switchboard. Foreground: a coffee pot, shelves of tapes, a glowing glass window, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a GOLD-washed painting. The people color #d9a521 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #b5ec69 for the biggest glowing sources and surfaces, secondary #8338ec for medium panels, banners and lights, pop #2e2200 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Human › Mall Republic

### Riot Marshals  `riotmarshals`

*Stay behind the line.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | broad and armored; large size; mobility: grounded |
| Ethnicity + nationality | Samoan heritage, New Zealander |
| Identity | female being, character |
| Wardrobe | armored human marshal in a matching mall-security jacket, helmet with a visor and shoulder guards, a big stenciled riot shield on one arm and a baton in the other hand |
| Accessories | Riot shield; baton; helmet visor; mall-security jacket |
| Pose | braced low behind the shield with the baton cocked |
| Facial expression | stern, immovable resolve |
| People | Human |
| Class | Mall Republic |
| Subclass | Riot Marshals |
| Type | Tank |
| Combat or support | Combat |
| Silhouette hook | braced low behind the shield with the baton cocked; the Riot shield and the baton break the outline so it reads instantly as a black shape |
| Shape language | wide blocky rectangles and a big shield shape |
| Main color (60%) | #118ab2: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ef476f: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #eef6ff: the eyes, the Riot shield and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as braced low behind the shield with the baton cocked.
2. Few large shapes: wide blocky rectangles and a big shield shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Riot shield and the pose must be visible at 64 px.
4. Flat colors: #118ab2 / #ef476f / #eef6ff as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Riot shield and baton and the tank shape language.

**Background**

| Field | Value |
|---|---|
| Background | a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners |
| Colors | wash #d9a521 (about 65%); accents #118ab2 / #ef476f / #eef6ff (about 20%) |
| Midground | a shuttered mall entrance with a roll-down gate, a row of barricades, a security booth |
| Foreground | a fountain full of rubble, a mall directory sign |
| Character-relevant items | a shuttered mall entrance with a roll-down gate, a row of barricades, a security booth, a fountain full of rubble, a mall directory sign |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Riot Marshals, female being, character (Samoan heritage, New Zealander), apparent age late 20s.
DESIGN FOR SILHOUETTE FIRST: braced low behind the shield with the baton cocked; the Riot shield and the baton break the outline so it reads instantly as a black shape. Shape language: wide blocky rectangles and a big shield shape.
BODY: broad and armored, large size, grounded. POSE: braced low behind the shield with the baton cocked. EXPRESSION: stern, immovable resolve, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): armored human marshal in a matching mall-security jacket, helmet with a visor and shoulder guards, a big stenciled riot shield on one arm and a baton in the other hand.
COLOR (exact hex values, flat fills): main #118ab2 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ef476f about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #eef6ff about 10%, used on the eyes, the Riot shield and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #d9a521 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Tank (combat) of the Human people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners. An empty environment for Riot Marshals with no people, creatures, figures, silhouettes or text. Midground: a shuttered mall entrance with a roll-down gate, a row of barricades, a security booth. Foreground: a fountain full of rubble, a mall directory sign, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a GOLD-washed painting. The people color #d9a521 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #118ab2 for the biggest glowing sources and surfaces, secondary #ef476f for medium panels, banners and lights, pop #eef6ff for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Escalator Lancers  `escalator`

*Rise to the occasion.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | athletic and padded; medium size; mobility: agile |
| Ethnicity + nationality | Afro-Brazilian heritage, Brazilian |
| Identity | male being, character |
| Wardrobe | armored human lancer in a padded suit with slide-pads on the knees, a helmet lamp and a climbing harness, a long lance held across the body |
| Accessories | Lance; slide-pads; helmet lamp; climbing harness |
| Pose | mid-slide with the lance leveled forward |
| Facial expression | determined shout |
| People | Human |
| Class | Mall Republic |
| Subclass | Escalator Lancers |
| Type | Bruiser |
| Combat or support | Combat |
| Silhouette hook | mid-slide with the lance leveled forward; the Lance and the slide-pads break the outline so it reads instantly as a black shape |
| Shape language | heavy trapezoids, oversized fists and shoulders |
| Main color (60%) | #b1690f: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #4361ee: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff2cf: the eyes, the Lance and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as mid-slide with the lance leveled forward.
2. Few large shapes: heavy trapezoids, oversized fists and shoulders; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Lance and the pose must be visible at 64 px.
4. Flat colors: #b1690f / #4361ee / #fff2cf as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Lance and slide-pads and the bruiser shape language.

**Background**

| Field | Value |
|---|---|
| Background | a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners |
| Colors | wash #d9a521 (about 65%); accents #b1690f / #4361ee / #fff2cf (about 20%) |
| Midground | a stopped escalator running up to a skylight, a glass elevator |
| Foreground | a mall atrium balcony with railings, hanging banners |
| Character-relevant items | a stopped escalator running up to a skylight, a glass elevator, a mall atrium balcony with railings, hanging banners |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Escalator Lancers, male being, character (Afro-Brazilian heritage, Brazilian), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: mid-slide with the lance leveled forward; the Lance and the slide-pads break the outline so it reads instantly as a black shape. Shape language: heavy trapezoids, oversized fists and shoulders.
BODY: athletic and padded, medium size, agile. POSE: mid-slide with the lance leveled forward. EXPRESSION: determined shout, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): armored human lancer in a padded suit with slide-pads on the knees, a helmet lamp and a climbing harness, a long lance held across the body.
COLOR (exact hex values, flat fills): main #b1690f about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #4361ee about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff2cf about 10%, used on the eyes, the Lance and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #d9a521 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Bruiser (combat) of the Human people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners. An empty environment for Escalator Lancers with no people, creatures, figures, silhouettes or text. Midground: a stopped escalator running up to a skylight, a glass elevator. Foreground: a mall atrium balcony with railings, hanging banners, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a GOLD-washed painting. The people color #d9a521 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #b1690f for the biggest glowing sources and surfaces, secondary #4361ee for medium panels, banners and lights, pop #fff2cf for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Concierge Diplomats  `concierge`

*How may we help you? Surrender.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | immaculate and upright; medium size; mobility: grounded |
| Ethnicity + nationality | Punjabi heritage, Indian |
| Identity | female being, character |
| Wardrobe | immaculate human in a gold-trimmed bellhop jacket and cap with a name badge, a big ring of keys on the belt, a silver serving tray in one hand and a small bell in the other |
| Accessories | Key ring; name badge; silver tray; bellhop jacket |
| Pose | silver tray raised in one hand, service bell held up in the other |
| Facial expression | polite, unflappable smile |
| People | Human |
| Class | Mall Republic |
| Subclass | Concierge Diplomats |
| Type | Support |
| Combat or support | Support |
| Silhouette hook | silver tray raised in one hand, service bell held up in the other; the Key ring and the name badge break the outline so it reads instantly as a black shape |
| Shape language | soft rounded rectangles with an open palm and a visible kit |
| Main color (60%) | #2a9d8f: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #d1ce70: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #264653: the eyes, the Key ring and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as silver tray raised in one hand, service bell held up in the other.
2. Few large shapes: soft rounded rectangles with an open palm and a visible kit; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Key ring and the pose must be visible at 64 px.
4. Flat colors: #2a9d8f / #d1ce70 / #264653 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Key ring and name badge and the support shape language.

**Background**

| Field | Value |
|---|---|
| Background | a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners |
| Colors | wash #d9a521 (about 65%); accents #2a9d8f / #d1ce70 / #264653 (about 20%) |
| Midground | a grand hotel lobby desk with a brass bell and a wall of key hooks, a luggage cart |
| Foreground | a marble staircase, a rotating door |
| Character-relevant items | a grand hotel lobby desk with a brass bell and a wall of key hooks, a luggage cart, a marble staircase, a rotating door |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Concierge Diplomats, female being, character (Punjabi heritage, Indian), apparent age early 70s.
DESIGN FOR SILHOUETTE FIRST: silver tray raised in one hand, service bell held up in the other; the Key ring and the name badge break the outline so it reads instantly as a black shape. Shape language: soft rounded rectangles with an open palm and a visible kit.
BODY: immaculate and upright, medium size, grounded. POSE: silver tray raised in one hand, service bell held up in the other. EXPRESSION: polite, unflappable smile, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): immaculate human in a gold-trimmed bellhop jacket and cap with a name badge, a big ring of keys on the belt, a silver serving tray in one hand and a small bell in the other.
COLOR (exact hex values, flat fills): main #2a9d8f about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #d1ce70 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #264653 about 10%, used on the eyes, the Key ring and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #d9a521 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Support (support) of the Human people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a barricaded highway-overpass settlement: stacked shipping containers, riveted gates, a tall radio mast, sodium street lamps, rain-slick asphalt, tarp banners. An empty environment for Concierge Diplomats with no people, creatures, figures, silhouettes or text. Midground: a grand hotel lobby desk with a brass bell and a wall of key hooks, a luggage cart. Foreground: a marble staircase, a rotating door, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a GOLD-washed painting. The people color #d9a521 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #2a9d8f for the biggest glowing sources and surfaces, secondary #d1ce70 for medium panels, banners and lights, pop #264653 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


---

# Vampire
*People color: Black #16161c. Background setting: a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain.*

**Tagline:** Glam, patient and very hard to kill.  
**Classes:** Chrome Court (Razor Dandies, Mirror-Ball Executioners, Velvet Chaperones); Neon Nocturnes (Strobe Duelists, Bassline Brawlers, VIP Hosts); Night Watch (Owlwing Watch, Gargoyle Sentries, Antenna Wraiths); Coterie of Masks (Masked Assassins, Thorn Poisoners, Spotlight Understudies)


## Vampire › Chrome Court

### Razor Dandies  `razordandies`

*Style is a weapon.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | tall and elegant; medium size; mobility: agile |
| Ethnicity + nationality | Franco-Algerian heritage, French |
| Identity | male being, character |
| Wardrobe | tall pale vampire duelist in a sharp floor-length black longcoat with a high collar and gold wire trim, signet ring, a slim wired-grip rapier in one hand and a parrying dagger in the other |
| Accessories | Wired-grip rapier; parry dagger; signet ring; floor-length longcoat |
| Pose | full lunge, rapier extended, parry dagger trailing behind |
| Facial expression | haughty, one corner of the mouth lifted |
| People | Vampire |
| Class | Chrome Court |
| Subclass | Razor Dandies |
| Type | Fighter |
| Combat or support | Combat |
| Silhouette hook | full lunge, rapier extended, parry dagger trailing behind; the Wired-grip rapier and the parry dagger break the outline so it reads instantly as a black shape |
| Shape language | balanced diagonals with one clear weapon line |
| Main color (60%) | #ad0c2a: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #fee7bb: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #7d99ca: the eyes, the Wired-grip rapier and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as full lunge, rapier extended, parry dagger trailing behind.
2. Few large shapes: balanced diagonals with one clear weapon line; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Wired-grip rapier and the pose must be visible at 64 px.
4. Flat colors: #ad0c2a / #fee7bb / #7d99ca as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Wired-grip rapier and parry dagger and the fighter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain |
| Colors | wash #16161c (about 65%); accents #ad0c2a / #fee7bb / #7d99ca (about 20%) |
| Midground | a gutted skyscraper ballroom rooftop with a chandelier wired to car batteries, a duel ring marked in chalk |
| Foreground | a spotlight on a stand, velvet ropes |
| Character-relevant items | a gutted skyscraper ballroom rooftop with a chandelier wired to car batteries, a duel ring marked in chalk, a spotlight on a stand, velvet ropes |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Razor Dandies, male being, character (Franco-Algerian heritage, French), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: full lunge, rapier extended, parry dagger trailing behind; the Wired-grip rapier and the parry dagger break the outline so it reads instantly as a black shape. Shape language: balanced diagonals with one clear weapon line.
BODY: tall and elegant, medium size, agile. POSE: full lunge, rapier extended, parry dagger trailing behind. EXPRESSION: haughty, one corner of the mouth lifted, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): tall pale vampire duelist in a sharp floor-length black longcoat with a high collar and gold wire trim, signet ring, a slim wired-grip rapier in one hand and a parrying dagger in the other.
COLOR (exact hex values, flat fills): main #ad0c2a about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #fee7bb about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #7d99ca about 10%, used on the eyes, the Wired-grip rapier and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #16161c on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Fighter (combat) of the Vampire people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain. An empty environment for Razor Dandies with no people, creatures, figures, silhouettes or text. Midground: a gutted skyscraper ballroom rooftop with a chandelier wired to car batteries, a duel ring marked in chalk. Foreground: a spotlight on a stand, velvet ropes, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BLACK-washed painting. The people color #16161c washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #ad0c2a for the biggest glowing sources and surfaces, secondary #fee7bb for medium panels, banners and lights, pop #7d99ca for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Mirror-Ball Executioners  `mirrorball`

*The final dance.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | athletic and theatrical; medium size; mobility: agile |
| Ethnicity + nationality | Trinidadian heritage, British-Trinidadian |
| Identity | female being, character |
| Wardrobe | elegant pale vampire executioner in a sequined cape and heeled boots, a mirrored blade in one hand and a faceted mirror-ball swinging on a chain from the other |
| Accessories | Chain-mirrorball; mirror-blades; sequined cape; heeled boots |
| Pose | mid-spin, mirror-ball swinging out on its chain |
| Facial expression | theatrical, lips parted in a thrill |
| People | Vampire |
| Class | Chrome Court |
| Subclass | Mirror-Ball Executioners |
| Type | Bruiser |
| Combat or support | Combat |
| Silhouette hook | mid-spin, mirror-ball swinging out on its chain; the Chain-mirrorball and the mirror-blades break the outline so it reads instantly as a black shape |
| Shape language | heavy trapezoids, oversized fists and shoulders |
| Main color (60%) | #e5383b: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffd60a: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #eef6ff: the eyes, the Chain-mirrorball and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as mid-spin, mirror-ball swinging out on its chain.
2. Few large shapes: heavy trapezoids, oversized fists and shoulders; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Chain-mirrorball and the pose must be visible at 64 px.
4. Flat colors: #e5383b / #ffd60a / #eef6ff as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Chain-mirrorball and mirror-blades and the bruiser shape language.

**Background**

| Field | Value |
|---|---|
| Background | a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain |
| Colors | wash #16161c (about 65%); accents #e5383b / #ffd60a / #eef6ff (about 20%) |
| Midground | a dead nightclub dance floor with a hanging disco ball, a stage and light rig, a DJ booth |
| Foreground | broken mirrors, fog machines |
| Character-relevant items | a dead nightclub dance floor with a hanging disco ball, a stage and light rig, a DJ booth, broken mirrors, fog machines |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Mirror-Ball Executioners, female being, character (Trinidadian heritage, British-Trinidadian), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: mid-spin, mirror-ball swinging out on its chain; the Chain-mirrorball and the mirror-blades break the outline so it reads instantly as a black shape. Shape language: heavy trapezoids, oversized fists and shoulders.
BODY: athletic and theatrical, medium size, agile. POSE: mid-spin, mirror-ball swinging out on its chain. EXPRESSION: theatrical, lips parted in a thrill, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): elegant pale vampire executioner in a sequined cape and heeled boots, a mirrored blade in one hand and a faceted mirror-ball swinging on a chain from the other.
COLOR (exact hex values, flat fills): main #e5383b about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffd60a about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #eef6ff about 10%, used on the eyes, the Chain-mirrorball and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #16161c on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Bruiser (combat) of the Vampire people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain. An empty environment for Mirror-Ball Executioners with no people, creatures, figures, silhouettes or text. Midground: a dead nightclub dance floor with a hanging disco ball, a stage and light rig, a DJ booth. Foreground: broken mirrors, fog machines, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BLACK-washed painting. The people color #16161c washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #e5383b for the biggest glowing sources and surfaces, secondary #ffd60a for medium panels, banners and lights, pop #eef6ff for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Velvet Chaperones  `chaperones`

*Introductions are everything.*

**Character**

| Field | Value |
|---|---|
| Gender | Nonbinary |
| Physique | poised and slender; medium size; mobility: grounded |
| Ethnicity + nationality | Hungarian heritage, Hungarian |
| Identity | nonbinary being, character |
| Wardrobe | poised pale vampire in a long black coat with impeccable cuffs and a signet ring, a leather ledger tucked under one arm and a small silver bell held in the other hand |
| Accessories | Ledger; silver bell; signet ring; impeccable cuffs |
| Pose | ledger open in one hand, silver bell held up between two fingers |
| Facial expression | polite, one eyebrow raised |
| People | Vampire |
| Class | Chrome Court |
| Subclass | Velvet Chaperones |
| Type | Enchanter |
| Combat or support | Support |
| Silhouette hook | ledger open in one hand, silver bell held up between two fingers; the Ledger and the silver bell break the outline so it reads instantly as a black shape |
| Shape language | circles and stars around a charm, instrument or talisman |
| Main color (60%) | #7b2cbf: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffd166: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff4df: the eyes, the Ledger and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as ledger open in one hand, silver bell held up between two fingers.
2. Few large shapes: circles and stars around a charm, instrument or talisman; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Ledger and the pose must be visible at 64 px.
4. Flat colors: #7b2cbf / #ffd166 / #fff4df as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Ledger and silver bell and the enchanter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain |
| Colors | wash #16161c (about 65%); accents #7b2cbf / #ffd166 / #fff4df (about 20%) |
| Midground | a velvet-roped entrance with a guest-list podium, a grand staircase |
| Foreground | a coat-check counter, a wall of framed portraits |
| Character-relevant items | a velvet-roped entrance with a guest-list podium, a grand staircase, a coat-check counter, a wall of framed portraits |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Velvet Chaperones, nonbinary being, character (Hungarian heritage, Hungarian), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: ledger open in one hand, silver bell held up between two fingers; the Ledger and the silver bell break the outline so it reads instantly as a black shape. Shape language: circles and stars around a charm, instrument or talisman.
BODY: poised and slender, medium size, grounded. POSE: ledger open in one hand, silver bell held up between two fingers. EXPRESSION: polite, one eyebrow raised, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): poised pale vampire in a long black coat with impeccable cuffs and a signet ring, a leather ledger tucked under one arm and a small silver bell held in the other hand.
COLOR (exact hex values, flat fills): main #7b2cbf about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffd166 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff4df about 10%, used on the eyes, the Ledger and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #16161c on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Enchanter (support) of the Vampire people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain. An empty environment for Velvet Chaperones with no people, creatures, figures, silhouettes or text. Midground: a velvet-roped entrance with a guest-list podium, a grand staircase. Foreground: a coat-check counter, a wall of framed portraits, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BLACK-washed painting. The people color #16161c washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #7b2cbf for the biggest glowing sources and surfaces, secondary #ffd166 for medium panels, banners and lights, pop #fff4df for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Vampire › Neon Nocturnes

### Strobe Duelists  `strobeblades`

*Freeze. Strike.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | slim and quick; medium size; mobility: agile |
| Ethnicity + nationality | Japanese heritage, Japanese |
| Identity | female being, character |
| Wardrobe | slim pale vampire duelist in a sequin jacket and light-up sneakers, a glowing visor over the eyes, a short blade whose hilt is a strobe light |
| Accessories | Strobe blade; glow-visor; sequin jacket; light-up sneakers |
| Pose | caught mid-strike, blade extended with a sharp afterimage |
| Facial expression | icy, half-lidded stare |
| People | Vampire |
| Class | Neon Nocturnes |
| Subclass | Strobe Duelists |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | caught mid-strike, blade extended with a sharp afterimage; the Strobe blade and the glow-visor break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #f72585: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #4cc9f0: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff3b0: the eyes, the Strobe blade and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as caught mid-strike, blade extended with a sharp afterimage.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Strobe blade and the pose must be visible at 64 px.
4. Flat colors: #f72585 / #4cc9f0 / #fff3b0 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Strobe blade and glow-visor and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain |
| Colors | wash #16161c (about 65%); accents #f72585 / #4cc9f0 / #fff3b0 (about 20%) |
| Midground | a dead nightclub with a mirrored dance floor, strobe-light rigs, a bar counter |
| Foreground | a stack of speakers, neon tubes on the wall |
| Character-relevant items | a dead nightclub with a mirrored dance floor, strobe-light rigs, a bar counter, a stack of speakers, neon tubes on the wall |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Strobe Duelists, female being, character (Japanese heritage, Japanese), apparent age early 20s.
DESIGN FOR SILHOUETTE FIRST: caught mid-strike, blade extended with a sharp afterimage; the Strobe blade and the glow-visor break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: slim and quick, medium size, agile. POSE: caught mid-strike, blade extended with a sharp afterimage. EXPRESSION: icy, half-lidded stare, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): slim pale vampire duelist in a sequin jacket and light-up sneakers, a glowing visor over the eyes, a short blade whose hilt is a strobe light.
COLOR (exact hex values, flat fills): main #f72585 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #4cc9f0 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff3b0 about 10%, used on the eyes, the Strobe blade and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #16161c on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Vampire people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain. An empty environment for Strobe Duelists with no people, creatures, figures, silhouettes or text. Midground: a dead nightclub with a mirrored dance floor, strobe-light rigs, a bar counter. Foreground: a stack of speakers, neon tubes on the wall, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BLACK-washed painting. The people color #16161c washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #f72585 for the biggest glowing sources and surfaces, secondary #4cc9f0 for medium panels, banners and lights, pop #fff3b0 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Bassline Brawlers  `bassline`

*Feel it in your chest.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | broad and heavy-shouldered; large size; mobility: grounded |
| Ethnicity + nationality | Jamaican heritage, Jamaican |
| Identity | male being, character |
| Wardrobe | broad pale vampire brawler in a studded leather vest and ear-guards, a backpack-sized bass unit on the back, huge subwoofer-gauntlets on both fists |
| Accessories | Subwoofer gauntlets; bass-pack; leather vest; ear-guards |
| Pose | swinging a subwoofer gauntlet in a wide overhand punch |
| Facial expression | fierce roar, fangs bared |
| People | Vampire |
| Class | Neon Nocturnes |
| Subclass | Bassline Brawlers |
| Type | Bruiser |
| Combat or support | Combat |
| Silhouette hook | swinging a subwoofer gauntlet in a wide overhand punch; the Subwoofer gauntlets and the bass-pack break the outline so it reads instantly as a black shape |
| Shape language | heavy trapezoids, oversized fists and shoulders |
| Main color (60%) | #6403a2: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #06d6a0: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #ffbe0b: the eyes, the Subwoofer gauntlets and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as swinging a subwoofer gauntlet in a wide overhand punch.
2. Few large shapes: heavy trapezoids, oversized fists and shoulders; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Subwoofer gauntlets and the pose must be visible at 64 px.
4. Flat colors: #6403a2 / #06d6a0 / #ffbe0b as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Subwoofer gauntlets and bass-pack and the bruiser shape language.

**Background**

| Field | Value |
|---|---|
| Background | a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain |
| Colors | wash #16161c (about 65%); accents #6403a2 / #06d6a0 / #ffbe0b (about 20%) |
| Midground | a wall of stacked speaker cabinets, a gutted cinema stage, a sound-mixing desk |
| Foreground | shaking dust, a drum riser |
| Character-relevant items | a wall of stacked speaker cabinets, a gutted cinema stage, a sound-mixing desk, shaking dust, a drum riser |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Bassline Brawlers, male being, character (Jamaican heritage, Jamaican), apparent age mid 30s.
DESIGN FOR SILHOUETTE FIRST: swinging a subwoofer gauntlet in a wide overhand punch; the Subwoofer gauntlets and the bass-pack break the outline so it reads instantly as a black shape. Shape language: heavy trapezoids, oversized fists and shoulders.
BODY: broad and heavy-shouldered, large size, grounded. POSE: swinging a subwoofer gauntlet in a wide overhand punch. EXPRESSION: fierce roar, fangs bared, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): broad pale vampire brawler in a studded leather vest and ear-guards, a backpack-sized bass unit on the back, huge subwoofer-gauntlets on both fists.
COLOR (exact hex values, flat fills): main #6403a2 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #06d6a0 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #ffbe0b about 10%, used on the eyes, the Subwoofer gauntlets and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #16161c on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Bruiser (combat) of the Vampire people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain. An empty environment for Bassline Brawlers with no people, creatures, figures, silhouettes or text. Midground: a wall of stacked speaker cabinets, a gutted cinema stage, a sound-mixing desk. Foreground: shaking dust, a drum riser, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BLACK-washed painting. The people color #16161c washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #6403a2 for the biggest glowing sources and surfaces, secondary #06d6a0 for medium panels, banners and lights, pop #ffbe0b for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### VIP Hosts  `viphosts`

*Right this way. Always.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | imposing and broad-shouldered; large size; mobility: grounded |
| Ethnicity + nationality | Nigerian Yoruba heritage, British-Nigerian |
| Identity | male being, character |
| Wardrobe | imposing pale vampire in a sharp dark suit with an earpiece, one hand holding a velvet rope on a short stanchion, the other holding a clipboard |
| Accessories | Velvet rope; earpiece; clipboard; sharp suit |
| Pose | one hand holding a velvet rope, the other raised to stop traffic |
| Facial expression | impassive, arms-crossed calm |
| People | Vampire |
| Class | Neon Nocturnes |
| Subclass | VIP Hosts |
| Type | Support |
| Combat or support | Support |
| Silhouette hook | one hand holding a velvet rope, the other raised to stop traffic; the Velvet rope and the earpiece break the outline so it reads instantly as a black shape |
| Shape language | soft rounded rectangles with an open palm and a visible kit |
| Main color (60%) | #ff6d5f: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffd166: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #2b2957: the eyes, the Velvet rope and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as one hand holding a velvet rope, the other raised to stop traffic.
2. Few large shapes: soft rounded rectangles with an open palm and a visible kit; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Velvet rope and the pose must be visible at 64 px.
4. Flat colors: #ff6d5f / #ffd166 / #2b2957 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Velvet rope and earpiece and the support shape language.

**Background**

| Field | Value |
|---|---|
| Background | a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain |
| Colors | wash #16161c (about 65%); accents #ff6d5f / #ffd166 / #2b2957 (about 20%) |
| Midground | a velvet-roped club doorway with brass stanchions, a neon club sign, a red carpet |
| Foreground | a stack of crates, a coat-check window |
| Character-relevant items | a velvet-roped club doorway with brass stanchions, a neon club sign, a red carpet, a stack of crates, a coat-check window |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: VIP Hosts, male being, character (Nigerian Yoruba heritage, British-Nigerian), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: one hand holding a velvet rope, the other raised to stop traffic; the Velvet rope and the earpiece break the outline so it reads instantly as a black shape. Shape language: soft rounded rectangles with an open palm and a visible kit.
BODY: imposing and broad-shouldered, large size, grounded. POSE: one hand holding a velvet rope, the other raised to stop traffic. EXPRESSION: impassive, arms-crossed calm, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): imposing pale vampire in a sharp dark suit with an earpiece, one hand holding a velvet rope on a short stanchion, the other holding a clipboard.
COLOR (exact hex values, flat fills): main #ff6d5f about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffd166 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #2b2957 about 10%, used on the eyes, the Velvet rope and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #16161c on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Support (support) of the Vampire people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain. An empty environment for VIP Hosts with no people, creatures, figures, silhouettes or text. Midground: a velvet-roped club doorway with brass stanchions, a neon club sign, a red carpet. Foreground: a stack of crates, a coat-check window, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BLACK-washed painting. The people color #16161c washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #ff6d5f for the biggest glowing sources and surfaces, secondary #ffd166 for medium panels, banners and lights, pop #2b2957 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Vampire › Night Watch

### Owlwing Watch  `owlwings`

*Strike from the dark. Gone before the sound.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | gaunt and lean; medium size; mobility: flying |
| Ethnicity + nationality | Pale gothic, unspecified European-inspired |
| Identity | male being, character |
| Wardrobe | gaunt pale vampire scout crouched on one knee, in a plated feather cloak with salvaged metal plates, a bandolier of throwing talons, a hand-crank radio on the belt, a curved talon-blade across the raised knee and a small spark lantern held at the foot |
| Accessories | Curved talon-blade; throwing talons; hand-crank radio; spark lantern |
| Pose | crouched on one knee, blade across the raised knee, lantern held low |
| Facial expression | half-lidded wary stare |
| People | Vampire |
| Class | Night Watch |
| Subclass | Owlwing Watch |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | crouched on one knee, blade across the raised knee, lantern held low; the Curved talon-blade and the throwing talons break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #19e6ff: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ff2bd6: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #ffb000: the eyes, the Curved talon-blade and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Done: `art/v2/vampire-owlwings.png` and `art/v2/vampire-owlwings-bg.jpg` |
| Last vet | Final art accepted (made before the vetting pipeline) |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as crouched on one knee, blade across the raised knee, lantern held low.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Curved talon-blade and the pose must be visible at 64 px.
4. Flat colors: #19e6ff / #ff2bd6 / #ffb000 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Curved talon-blade and throwing talons and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain |
| Colors | wash #16161c (about 65%); accents #19e6ff / #ff2bd6 / #ffb000 (about 20%) |
| Midground | a gutted skyscraper roof with a dead antenna forest, a rusted water tank, a chandelier on a cable |
| Foreground | a wrecked helicopter, gargoyle ledges |
| Character-relevant items | a gutted skyscraper roof with a dead antenna forest, a rusted water tank, a chandelier on a cable, a wrecked helicopter, gargoyle ledges |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Owlwing Watch, male being, character (Pale gothic, unspecified European-inspired), apparent age late 30s.
DESIGN FOR SILHOUETTE FIRST: crouched on one knee, blade across the raised knee, lantern held low; the Curved talon-blade and the throwing talons break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: gaunt and lean, medium size, flying. POSE: crouched on one knee, blade across the raised knee, lantern held low. EXPRESSION: half-lidded wary stare, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): gaunt pale vampire scout crouched on one knee, in a plated feather cloak with salvaged metal plates, a bandolier of throwing talons, a hand-crank radio on the belt, a curved talon-blade across the raised knee and a small spark lantern held at the foot.
COLOR (exact hex values, flat fills): main #19e6ff about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ff2bd6 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #ffb000 about 10%, used on the eyes, the Curved talon-blade and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #16161c on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Vampire people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain. An empty environment for Owlwing Watch with no people, creatures, figures, silhouettes or text. Midground: a gutted skyscraper roof with a dead antenna forest, a rusted water tank, a chandelier on a cable. Foreground: a wrecked helicopter, gargoyle ledges, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BLACK-washed painting. The people color #16161c washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #19e6ff for the biggest glowing sources and surfaces, secondary #ff2bd6 for medium panels, banners and lights, pop #ffb000 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Gargoyle Sentries  `gargoyle`

*They don't move. Then they do.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | hunched and stone-skinned; large size; mobility: climbing |
| Ethnicity + nationality | Romanian heritage, Romanian |
| Identity | male being, character |
| Wardrobe | hunched stone-skinned vampire sentinel in a helmeted hood and a heavy wing-cloak, huge stone-knuckled fists planted on the ground, ledge-anchors on the belt |
| Accessories | Stone knuckles; ledge-anchors; helmeted hood; wing-cloak |
| Pose | hunched on all fours with fists planted, wings folded like a cloak |
| Facial expression | grim, heavy-browed |
| People | Vampire |
| Class | Night Watch |
| Subclass | Gargoyle Sentries |
| Type | Tank |
| Combat or support | Combat |
| Silhouette hook | hunched on all fours with fists planted, wings folded like a cloak; the Stone knuckles and the ledge-anchors break the outline so it reads instantly as a black shape |
| Shape language | wide blocky rectangles and a big shield shape |
| Main color (60%) | #8bb9e5: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ff4d6d: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #023054: the eyes, the Stone knuckles and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as hunched on all fours with fists planted, wings folded like a cloak.
2. Few large shapes: wide blocky rectangles and a big shield shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Stone knuckles and the pose must be visible at 64 px.
4. Flat colors: #8bb9e5 / #ff4d6d / #023054 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Stone knuckles and ledge-anchors and the tank shape language.

**Background**

| Field | Value |
|---|---|
| Background | a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain |
| Colors | wash #16161c (about 65%); accents #8bb9e5 / #ff4d6d / #023054 (about 20%) |
| Midground | a gothic ledge of a skyscraper roof with stone gargoyle statues, a stone parapet, rain gutters |
| Foreground | a clock tower, a crane arm |
| Character-relevant items | a gothic ledge of a skyscraper roof with stone gargoyle statues, a stone parapet, rain gutters, a clock tower, a crane arm |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Gargoyle Sentries, male being, character (Romanian heritage, Romanian), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: hunched on all fours with fists planted, wings folded like a cloak; the Stone knuckles and the ledge-anchors break the outline so it reads instantly as a black shape. Shape language: wide blocky rectangles and a big shield shape.
BODY: hunched and stone-skinned, large size, climbing. POSE: hunched on all fours with fists planted, wings folded like a cloak. EXPRESSION: grim, heavy-browed, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): hunched stone-skinned vampire sentinel in a helmeted hood and a heavy wing-cloak, huge stone-knuckled fists planted on the ground, ledge-anchors on the belt.
COLOR (exact hex values, flat fills): main #8bb9e5 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ff4d6d about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #023054 about 10%, used on the eyes, the Stone knuckles and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #16161c on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Tank (combat) of the Vampire people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain. An empty environment for Gargoyle Sentries with no people, creatures, figures, silhouettes or text. Midground: a gothic ledge of a skyscraper roof with stone gargoyle statues, a stone parapet, rain gutters. Foreground: a clock tower, a crane arm, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BLACK-washed painting. The people color #16161c washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #8bb9e5 for the biggest glowing sources and surfaces, secondary #ff4d6d for medium panels, banners and lights, pop #023054 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Antenna Wraiths  `antennawraiths`

*We listen. We strike.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | slim and long-limbed; medium size; mobility: climbing |
| Ethnicity + nationality | Thai heritage, Thai |
| Identity | female being, character |
| Wardrobe | slim pale vampire scout in a headset and a harness covered in short antennas, climbing spikes on the boots, a tuning-fork blade humming in one hand |
| Accessories | Tuning fork blade; headset; antenna harness; climbing spikes |
| Pose | arm raised with the tuning-fork blade held to the ear |
| Facial expression | serene, eyes half-closed as if listening |
| People | Vampire |
| Class | Night Watch |
| Subclass | Antenna Wraiths |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | arm raised with the tuning-fork blade held to the ear; the Tuning fork blade and the headset break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #33bede: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #f72585: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #ffd60a: the eyes, the Tuning fork blade and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as arm raised with the tuning-fork blade held to the ear.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Tuning fork blade and the pose must be visible at 64 px.
4. Flat colors: #33bede / #f72585 / #ffd60a as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Tuning fork blade and headset and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain |
| Colors | wash #16161c (about 65%); accents #33bede / #f72585 / #ffd60a (about 20%) |
| Midground | a tall dead radio tower with a ladder and a service platform, a satellite dish |
| Foreground | cable bundles, a rooftop transmitter shack |
| Character-relevant items | a tall dead radio tower with a ladder and a service platform, a satellite dish, cable bundles, a rooftop transmitter shack |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Antenna Wraiths, female being, character (Thai heritage, Thai), apparent age early 40s.
DESIGN FOR SILHOUETTE FIRST: arm raised with the tuning-fork blade held to the ear; the Tuning fork blade and the headset break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: slim and long-limbed, medium size, climbing. POSE: arm raised with the tuning-fork blade held to the ear. EXPRESSION: serene, eyes half-closed as if listening, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): slim pale vampire scout in a headset and a harness covered in short antennas, climbing spikes on the boots, a tuning-fork blade humming in one hand.
COLOR (exact hex values, flat fills): main #33bede about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #f72585 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #ffd60a about 10%, used on the eyes, the Tuning fork blade and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #16161c on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Vampire people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain. An empty environment for Antenna Wraiths with no people, creatures, figures, silhouettes or text. Midground: a tall dead radio tower with a ladder and a service platform, a satellite dish. Foreground: cable bundles, a rooftop transmitter shack, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BLACK-washed painting. The people color #16161c washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #33bede for the biggest glowing sources and surfaces, secondary #f72585 for medium panels, banners and lights, pop #ffd60a for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Vampire › Coterie of Masks

### Masked Assassins  `maskedassassins`

*The mask is a promise.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | elegant and slim; medium size; mobility: agile |
| Ethnicity + nationality | Persian heritage, Iranian |
| Identity | male being, character |
| Wardrobe | elegant pale vampire in a half-mask and a long coat with evening gloves, a rack of different masks on a shoulder strap, a stiletto concealed behind one gloved hand, a poison ring |
| Accessories | Mask collection; hidden stiletto; poison ring; evening gloves |
| Pose | stepping forward with a stiletto concealed behind one hand |
| Facial expression | cool, expressionless behind the half-mask |
| People | Vampire |
| Class | Coterie of Masks |
| Subclass | Masked Assassins |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | stepping forward with a stiletto concealed behind one hand; the Mask collection and the hidden stiletto break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #c71856: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #dbe8ac: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #320b50: the eyes, the Mask collection and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as stepping forward with a stiletto concealed behind one hand.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Mask collection and the pose must be visible at 64 px.
4. Flat colors: #c71856 / #dbe8ac / #320b50 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Mask collection and hidden stiletto and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain |
| Colors | wash #16161c (about 65%); accents #c71856 / #dbe8ac / #320b50 (about 20%) |
| Midground | a masked ball in a ruined ballroom: a long banquet table, hanging chandeliers, a wall of carved masks |
| Foreground | a balcony, a grand piano |
| Character-relevant items | a masked ball in a ruined ballroom: a long banquet table, hanging chandeliers, a wall of carved masks, a balcony, a grand piano |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Masked Assassins, male being, character (Persian heritage, Iranian), apparent age late 40s.
DESIGN FOR SILHOUETTE FIRST: stepping forward with a stiletto concealed behind one hand; the Mask collection and the hidden stiletto break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: elegant and slim, medium size, agile. POSE: stepping forward with a stiletto concealed behind one hand. EXPRESSION: cool, expressionless behind the half-mask, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): elegant pale vampire in a half-mask and a long coat with evening gloves, a rack of different masks on a shoulder strap, a stiletto concealed behind one gloved hand, a poison ring.
COLOR (exact hex values, flat fills): main #c71856 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #dbe8ac about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #320b50 about 10%, used on the eyes, the Mask collection and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #16161c on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Vampire people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain. An empty environment for Masked Assassins with no people, creatures, figures, silhouettes or text. Midground: a masked ball in a ruined ballroom: a long banquet table, hanging chandeliers, a wall of carved masks. Foreground: a balcony, a grand piano, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BLACK-washed painting. The people color #16161c washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #c71856 for the biggest glowing sources and surfaces, secondary #dbe8ac for medium panels, banners and lights, pop #320b50 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Thorn Poisoners  `thornpoisoners`

*Every rose has an edge.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | poised and narrow; medium size; mobility: grounded |
| Ethnicity + nationality | Scandinavian heritage, Danish |
| Identity | female being, character |
| Wardrobe | poised pale vampire in a long coat with rose-vine gloves, a bandolier of colored vials, a thorned whip coiled in one hand, an apothecary belt |
| Accessories | Thorn whip; toxin vials; rose-vine gloves; apothecary belt |
| Pose | coiling the thorn whip with one arm, vial held up in the other |
| Facial expression | serene, faintly amused |
| People | Vampire |
| Class | Coterie of Masks |
| Subclass | Thorn Poisoners |
| Type | Controller |
| Combat or support | Combat |
| Silhouette hook | coiling the thorn whip with one arm, vial held up in the other; the Thorn whip and the toxin vials break the outline so it reads instantly as a black shape |
| Shape language | hexagons and wide arc gestures with tools hanging off the body |
| Main color (60%) | #b34907: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #80ed99: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #320b50: the eyes, the Thorn whip and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as coiling the thorn whip with one arm, vial held up in the other.
2. Few large shapes: hexagons and wide arc gestures with tools hanging off the body; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Thorn whip and the pose must be visible at 64 px.
4. Flat colors: #b34907 / #80ed99 / #320b50 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Thorn whip and toxin vials and the controller shape language.

**Background**

| Field | Value |
|---|---|
| Background | a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain |
| Colors | wash #16161c (about 65%); accents #b34907 / #80ed99 / #320b50 (about 20%) |
| Midground | an overgrown poison garden greenhouse with glass panes, rows of potted thorn roses |
| Foreground | a potting bench with labeled bottles, a copper still |
| Character-relevant items | an overgrown poison garden greenhouse with glass panes, rows of potted thorn roses, a potting bench with labeled bottles, a copper still |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Thorn Poisoners, female being, character (Scandinavian heritage, Danish), apparent age late 40s.
DESIGN FOR SILHOUETTE FIRST: coiling the thorn whip with one arm, vial held up in the other; the Thorn whip and the toxin vials break the outline so it reads instantly as a black shape. Shape language: hexagons and wide arc gestures with tools hanging off the body.
BODY: poised and narrow, medium size, grounded. POSE: coiling the thorn whip with one arm, vial held up in the other. EXPRESSION: serene, faintly amused, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): poised pale vampire in a long coat with rose-vine gloves, a bandolier of colored vials, a thorned whip coiled in one hand, an apothecary belt.
COLOR (exact hex values, flat fills): main #b34907 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #80ed99 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #320b50 about 10%, used on the eyes, the Thorn whip and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #16161c on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Controller (combat) of the Vampire people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain. An empty environment for Thorn Poisoners with no people, creatures, figures, silhouettes or text. Midground: an overgrown poison garden greenhouse with glass panes, rows of potted thorn roses. Foreground: a potting bench with labeled bottles, a copper still, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BLACK-washed painting. The people color #16161c washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #b34907 for the biggest glowing sources and surfaces, secondary #80ed99 for medium panels, banners and lights, pop #320b50 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Spotlight Understudies  `understudies`

*I know every part.*

**Character**

| Field | Value |
|---|---|
| Gender | Nonbinary |
| Physique | slim and adaptable; medium size; mobility: agile |
| Ethnicity + nationality | Italian heritage, Italian |
| Identity | nonbinary being, character |
| Wardrobe | slim pale vampire in a half-mask and an understudy's cape, a prompt-book held open in one hand, a stage dagger in the other, a rack of small masks on the belt |
| Accessories | Prompt-book; stage dagger; mask rack; understudy cape |
| Pose | copying a rival's stance, prompt-book held open |
| Facial expression | wry, mid-impression |
| People | Vampire |
| Class | Coterie of Masks |
| Subclass | Spotlight Understudies |
| Type | Fighter |
| Combat or support | Combat |
| Silhouette hook | copying a rival's stance, prompt-book held open; the Prompt-book and the stage dagger break the outline so it reads instantly as a black shape |
| Shape language | balanced diagonals with one clear weapon line |
| Main color (60%) | #eb25b4: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #8ecae6: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff7c7: the eyes, the Prompt-book and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as copying a rival's stance, prompt-book held open.
2. Few large shapes: balanced diagonals with one clear weapon line; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Prompt-book and the pose must be visible at 64 px.
4. Flat colors: #eb25b4 / #8ecae6 / #fff7c7 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Prompt-book and stage dagger and the fighter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain |
| Colors | wash #16161c (about 65%); accents #eb25b4 / #8ecae6 / #fff7c7 (about 20%) |
| Midground | a ruined theater stage with a curtain, a prompter's box, a costume rack |
| Foreground | a row of spotlights, a trapdoor in the floor |
| Character-relevant items | a ruined theater stage with a curtain, a prompter's box, a costume rack, a row of spotlights, a trapdoor in the floor |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Spotlight Understudies, nonbinary being, character (Italian heritage, Italian), apparent age late 40s.
DESIGN FOR SILHOUETTE FIRST: copying a rival's stance, prompt-book held open; the Prompt-book and the stage dagger break the outline so it reads instantly as a black shape. Shape language: balanced diagonals with one clear weapon line.
BODY: slim and adaptable, medium size, agile. POSE: copying a rival's stance, prompt-book held open. EXPRESSION: wry, mid-impression, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): slim pale vampire in a half-mask and an understudy's cape, a prompt-book held open in one hand, a stage dagger in the other, a rack of small masks on the belt.
COLOR (exact hex values, flat fills): main #eb25b4 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #8ecae6 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff7c7 about 10%, used on the eyes, the Prompt-book and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #16161c on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Fighter (combat) of the Vampire people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a gutted skyscraper rooftop at night: a chandelier wired to car batteries, a dead neon sign, gothic antenna spires, a distant ruined skyline, rain. An empty environment for Spotlight Understudies with no people, creatures, figures, silhouettes or text. Midground: a ruined theater stage with a curtain, a prompter's box, a costume rack. Foreground: a row of spotlights, a trapdoor in the floor, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BLACK-washed painting. The people color #16161c washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #eb25b4 for the biggest glowing sources and surfaces, secondary #8ecae6 for medium panels, banners and lights, pop #fff7c7 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


---

# Were-Creature
*People color: Rust #b4532a. Background setting: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles.*

**Tagline:** Two hearts, one war-band.  
**Classes:** Wolf-kin (Moonrunners, Frostfang Wanderers, Hearth Hounds); Raccoon-kin (Mask Bandits, Gizmo Tinkers, Vault Lockbreakers); Crocodile-kin (Mire Matriarchs, Snapjaw Riverjackers, Slow-Strike Sages); Capybara-kin (Hot-Spring Healers, Reed-Lodge Diplomats, Dam Wardens); Axolotl-kin (Regrowth Medics, Gillstorm Casters, Mudglow Lurkers); Raven-kin (Gloamwing Oracles, Salvage Magpies, Murder Vanguard); Owl-kin (Hushwing Strikers, Night-Eye Snipers, Rotating Watch); Octopus-kin (Ink Spies, Tentacle Engineers, Abyssal Scholars); Mantis Shrimp-kin (Punch-Claw Duelists, Prism Gunners, Reef Shell-Guard); Moth-kin (Lantern Cultists, Dreamdust Weavers, Signal-Tower Wardens); Pangolin-kin (Plate-Wall Bulwarks, Tunnel Diggers, Curl-Ball Rollers); Spider-kin (Loomweavers, Silkroad Messengers, Dewdrop Dancers)


## Were-Creature › Wolf-kin

### Moonrunners  `moonrunners`

*Fast, loud and in your flank.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | lean and long-limbed; medium size; mobility: agile |
| Ethnicity + nationality | wolf-kin (not human) |
| Identity | male being, character |
| Wardrobe | lean wolf-kin in a ragged cloak and a pack-colored scarf, a hunting axe in one hand, a bandolier of throwing hatchets and a signal horn on the belt |
| Accessories | Hunting axe; throwing hatchets; pack-scarf; signal horn |
| Pose | mid-leap, axe swinging toward the viewer |
| Facial expression | snarling grin |
| People | Were-Creature |
| Class | Wolf-kin |
| Subclass | Moonrunners |
| Type | Fighter |
| Combat or support | Combat |
| Silhouette hook | mid-leap, axe swinging toward the viewer; the Hunting axe and the throwing hatchets break the outline so it reads instantly as a black shape |
| Shape language | balanced diagonals with one clear weapon line |
| Main color (60%) | #e9ecef: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #264653: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #e9c46a: the eyes, the Hunting axe and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Done: `art/v2/were-moonrunners.png` and `art/v2/were-moonrunners-bg.jpg` |
| Last vet | Final art accepted (made before the vetting pipeline) |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as mid-leap, axe swinging toward the viewer.
2. Few large shapes: balanced diagonals with one clear weapon line; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Hunting axe and the pose must be visible at 64 px.
4. Flat colors: #e9ecef / #264653 / #e9c46a as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Hunting axe and throwing hatchets and the fighter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #e9ecef / #264653 / #e9c46a (about 20%) |
| Midground | a scrapyard war-den of rusted buses, a campfire barrel, a tire-wall palisade |
| Foreground | a painted war totem, a tall signal pole |
| Character-relevant items | a scrapyard war-den of rusted buses, a campfire barrel, a tire-wall palisade, a painted war totem, a tall signal pole |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Moonrunners, male being, character (wolf-kin (not human)), apparent age early 20s.
DESIGN FOR SILHOUETTE FIRST: mid-leap, axe swinging toward the viewer; the Hunting axe and the throwing hatchets break the outline so it reads instantly as a black shape. Shape language: balanced diagonals with one clear weapon line.
BODY: lean and long-limbed, medium size, agile. POSE: mid-leap, axe swinging toward the viewer. EXPRESSION: snarling grin, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): lean wolf-kin in a ragged cloak and a pack-colored scarf, a hunting axe in one hand, a bandolier of throwing hatchets and a signal horn on the belt.
COLOR (exact hex values, flat fills): main #e9ecef about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #264653 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #e9c46a about 10%, used on the eyes, the Hunting axe and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Fighter (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Moonrunners with no people, creatures, figures, silhouettes or text. Midground: a scrapyard war-den of rusted buses, a campfire barrel, a tire-wall palisade. Foreground: a painted war totem, a tall signal pole, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #e9ecef for the biggest glowing sources and surfaces, secondary #264653 for medium panels, banners and lights, pop #e9c46a for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Frostfang Wanderers  `frostfangs`

*You never see the second shot.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | pale and rangy; medium size; mobility: grounded |
| Ethnicity + nationality | wolf-kin (not human) |
| Identity | female being, character |
| Wardrobe | pale arctic wolf-kin in a white fur mantle with goggles pushed up, a long rifle held in both hands, ice picks on the belt |
| Accessories | Long rifle; white fur mantle; goggles; ice picks |
| Pose | crouched in a snowdrift, rifle leveled |
| Facial expression | calm, steady stare |
| People | Were-Creature |
| Class | Wolf-kin |
| Subclass | Frostfang Wanderers |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | crouched in a snowdrift, rifle leveled; the Long rifle and the white fur mantle break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #add6fe: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #4ea8de: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #1d3557: the eyes, the Long rifle and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as crouched in a snowdrift, rifle leveled.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Long rifle and the pose must be visible at 64 px.
4. Flat colors: #add6fe / #4ea8de / #1d3557 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Long rifle and white fur mantle and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #add6fe / #4ea8de / #1d3557 (about 20%) |
| Midground | a frozen mountain pass with a snow-covered supply sled, a dead truck buried in drifts |
| Foreground | a camp tent, an ice-covered bridge |
| Character-relevant items | a frozen mountain pass with a snow-covered supply sled, a dead truck buried in drifts, a camp tent, an ice-covered bridge |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Frostfang Wanderers, female being, character (wolf-kin (not human)), apparent age late 40s.
DESIGN FOR SILHOUETTE FIRST: crouched in a snowdrift, rifle leveled; the Long rifle and the white fur mantle break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: pale and rangy, medium size, grounded. POSE: crouched in a snowdrift, rifle leveled. EXPRESSION: calm, steady stare, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): pale arctic wolf-kin in a white fur mantle with goggles pushed up, a long rifle held in both hands, ice picks on the belt.
COLOR (exact hex values, flat fills): main #add6fe about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #4ea8de about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #1d3557 about 10%, used on the eyes, the Long rifle and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Frostfang Wanderers with no people, creatures, figures, silhouettes or text. Midground: a frozen mountain pass with a snow-covered supply sled, a dead truck buried in drifts. Foreground: a camp tent, an ice-covered bridge, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #add6fe for the biggest glowing sources and surfaces, secondary #4ea8de for medium panels, banners and lights, pop #1d3557 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Hearth Hounds  `hearthhounds`

*We get everyone home.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | shaggy and sturdy; medium size; mobility: grounded |
| Ethnicity + nationality | wolf-kin (not human) |
| Identity | female being, character |
| Wardrobe | shaggy shepherd wolf-kin in a collar with a small radio and a tow harness, a flare gun in one hand, a field med pack on the back |
| Accessories | Collar-radio; tow harness; flare gun; med pack |
| Pose | dragging a wounded ally with one arm, flare gun raised in the other |
| Facial expression | gentle, determined |
| People | Were-Creature |
| Class | Wolf-kin |
| Subclass | Hearth Hounds |
| Type | Support |
| Combat or support | Support |
| Silhouette hook | dragging a wounded ally with one arm, flare gun raised in the other; the Collar-radio and the tow harness break the outline so it reads instantly as a black shape |
| Shape language | soft rounded rectangles with an open palm and a visible kit |
| Main color (60%) | #f2c458: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #118ab2: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff7c7: the eyes, the Collar-radio and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as dragging a wounded ally with one arm, flare gun raised in the other.
2. Few large shapes: soft rounded rectangles with an open palm and a visible kit; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Collar-radio and the pose must be visible at 64 px.
4. Flat colors: #f2c458 / #118ab2 / #fff7c7 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Collar-radio and tow harness and the support shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #f2c458 / #118ab2 / #fff7c7 (about 20%) |
| Midground | a caravan camp with a parked supply truck, hitched wagons, a campfire |
| Foreground | a roadside lantern post, a barricaded gate |
| Character-relevant items | a caravan camp with a parked supply truck, hitched wagons, a campfire, a roadside lantern post, a barricaded gate |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Hearth Hounds, female being, character (wolf-kin (not human)), apparent age early 40s.
DESIGN FOR SILHOUETTE FIRST: dragging a wounded ally with one arm, flare gun raised in the other; the Collar-radio and the tow harness break the outline so it reads instantly as a black shape. Shape language: soft rounded rectangles with an open palm and a visible kit.
BODY: shaggy and sturdy, medium size, grounded. POSE: dragging a wounded ally with one arm, flare gun raised in the other. EXPRESSION: gentle, determined, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): shaggy shepherd wolf-kin in a collar with a small radio and a tow harness, a flare gun in one hand, a field med pack on the back.
COLOR (exact hex values, flat fills): main #f2c458 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #118ab2 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff7c7 about 10%, used on the eyes, the Collar-radio and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Support (support) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Hearth Hounds with no people, creatures, figures, silhouettes or text. Midground: a caravan camp with a parked supply truck, hitched wagons, a campfire. Foreground: a roadside lantern post, a barricaded gate, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #f2c458 for the biggest glowing sources and surfaces, secondary #118ab2 for medium panels, banners and lights, pop #fff7c7 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Were-Creature › Raccoon-kin

### Mask Bandits  `maskbandits`

*A locked door is a challenge.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | small and wiry; small size; mobility: agile |
| Ethnicity + nationality | raccoon-kin (not human) |
| Identity | female being, character |
| Wardrobe | masked raccoon-kin in a patched trench coat, a striped eye-mask, a crowbar in one hand, a smoke bomb in the other, a roll of lockpicks at the belt |
| Accessories | Crowbar; smoke bombs; lockpick roll; striped mask |
| Pose | crouched over a safe with a crowbar levering it open |
| Facial expression | mischievous grin |
| People | Were-Creature |
| Class | Raccoon-kin |
| Subclass | Mask Bandits |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | crouched over a safe with a crowbar levering it open; the Crowbar and the smoke bombs break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #dea013: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #7d99ca: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #282956: the eyes, the Crowbar and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as crouched over a safe with a crowbar levering it open.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Crowbar and the pose must be visible at 64 px.
4. Flat colors: #dea013 / #7d99ca / #282956 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Crowbar and smoke bombs and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #dea013 / #7d99ca / #282956 (about 20%) |
| Midground | a half-opened steel safe, a cracked vault door, a stack of stolen crates |
| Foreground | a dumpster, a bundle of cables |
| Character-relevant items | a half-opened steel safe, a cracked vault door, a stack of stolen crates, a dumpster, a bundle of cables |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Mask Bandits, female being, character (raccoon-kin (not human)), apparent age late 40s.
DESIGN FOR SILHOUETTE FIRST: crouched over a safe with a crowbar levering it open; the Crowbar and the smoke bombs break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: small and wiry, small size, agile. POSE: crouched over a safe with a crowbar levering it open. EXPRESSION: mischievous grin, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): masked raccoon-kin in a patched trench coat, a striped eye-mask, a crowbar in one hand, a smoke bomb in the other, a roll of lockpicks at the belt.
COLOR (exact hex values, flat fills): main #dea013 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #7d99ca about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #282956 about 10%, used on the eyes, the Crowbar and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Mask Bandits with no people, creatures, figures, silhouettes or text. Midground: a half-opened steel safe, a cracked vault door, a stack of stolen crates. Foreground: a dumpster, a bundle of cables, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #dea013 for the biggest glowing sources and surfaces, secondary #7d99ca for medium panels, banners and lights, pop #282956 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Gizmo Tinkers  `gizmotinkers`

*It's not broken. It's armed.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | small and stocky; small size; mobility: grounded |
| Ethnicity + nationality | raccoon-kin (not human) |
| Identity | male being, character |
| Wardrobe | raccoon-kin in goggles and an apron wired with gadgets, a tool bandolier across the chest, a small soldering torch in one hand |
| Accessories | Scrap turret; tool bandolier; soldering torch; goggles |
| Pose | twisting a screwdriver into a wired gadget, torch in the other paw |
| Facial expression | absorbed, tongue between teeth |
| People | Were-Creature |
| Class | Raccoon-kin |
| Subclass | Gizmo Tinkers |
| Type | Controller |
| Combat or support | Combat |
| Silhouette hook | twisting a screwdriver into a wired gadget, torch in the other paw; the Scrap turret and the tool bandolier break the outline so it reads instantly as a black shape |
| Shape language | hexagons and wide arc gestures with tools hanging off the body |
| Main color (60%) | #44f1b9: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ee8613: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #221c48: the eyes, the Scrap turret and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as twisting a screwdriver into a wired gadget, torch in the other paw.
2. Few large shapes: hexagons and wide arc gestures with tools hanging off the body; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Scrap turret and the pose must be visible at 64 px.
4. Flat colors: #44f1b9 / #ee8613 / #221c48 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Scrap turret and tool bandolier and the controller shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #44f1b9 / #ee8613 / #221c48 (about 20%) |
| Midground | a cobbled-together scrap turret on a tripod, a shopping-cart workbench with a generator |
| Foreground | heaps of electronic junk, a sparking tesla coil |
| Character-relevant items | a cobbled-together scrap turret on a tripod, a shopping-cart workbench with a generator, heaps of electronic junk, a sparking tesla coil |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Gizmo Tinkers, male being, character (raccoon-kin (not human)), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: twisting a screwdriver into a wired gadget, torch in the other paw; the Scrap turret and the tool bandolier break the outline so it reads instantly as a black shape. Shape language: hexagons and wide arc gestures with tools hanging off the body.
BODY: small and stocky, small size, grounded. POSE: twisting a screwdriver into a wired gadget, torch in the other paw. EXPRESSION: absorbed, tongue between teeth, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): raccoon-kin in goggles and an apron wired with gadgets, a tool bandolier across the chest, a small soldering torch in one hand.
COLOR (exact hex values, flat fills): main #44f1b9 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ee8613 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #221c48 about 10%, used on the eyes, the Scrap turret and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Controller (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Gizmo Tinkers with no people, creatures, figures, silhouettes or text. Midground: a cobbled-together scrap turret on a tripod, a shopping-cart workbench with a generator. Foreground: heaps of electronic junk, a sparking tesla coil, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #44f1b9 for the biggest glowing sources and surfaces, secondary #ee8613 for medium panels, banners and lights, pop #221c48 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Vault Lockbreakers  `vaultlockbreakers`

*Every vault has a weakness. Usually its owner.*

**Character**

| Field | Value |
|---|---|
| Gender | Nonbinary |
| Physique | padded and stocky; small size; mobility: grounded |
| Ethnicity + nationality | raccoon-kin (not human) |
| Identity | nonbinary being, character |
| Wardrobe | raccoon-kin in a padded vest, bolt cutters held in both hands, a belt of shaped charges and a ring of skeleton keys |
| Accessories | Shaped charges; bolt cutters; skeleton keys; padded vest |
| Pose | slapping a shaped charge on a door, bolt cutters on the belt |
| Facial expression | gleeful, eyes wide |
| People | Were-Creature |
| Class | Raccoon-kin |
| Subclass | Vault Lockbreakers |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | slapping a shaped charge on a door, bolt cutters on the belt; the Shaped charges and the bolt cutters break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #fd9794: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #a8dadc: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #1d3557: the eyes, the Shaped charges and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as slapping a shaped charge on a door, bolt cutters on the belt.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Shaped charges and the pose must be visible at 64 px.
4. Flat colors: #fd9794 / #a8dadc / #1d3557 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Shaped charges and bolt cutters and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #fd9794 / #a8dadc / #1d3557 (about 20%) |
| Midground | a sealed bunker vault door with a huge wheel, steel shelving |
| Foreground | a safe-deposit wall, a collapsed ceiling with cables |
| Character-relevant items | a sealed bunker vault door with a huge wheel, steel shelving, a safe-deposit wall, a collapsed ceiling with cables |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Vault Lockbreakers, nonbinary being, character (raccoon-kin (not human)), apparent age late 30s.
DESIGN FOR SILHOUETTE FIRST: slapping a shaped charge on a door, bolt cutters on the belt; the Shaped charges and the bolt cutters break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: padded and stocky, small size, grounded. POSE: slapping a shaped charge on a door, bolt cutters on the belt. EXPRESSION: gleeful, eyes wide, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): raccoon-kin in a padded vest, bolt cutters held in both hands, a belt of shaped charges and a ring of skeleton keys.
COLOR (exact hex values, flat fills): main #fd9794 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #a8dadc about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #1d3557 about 10%, used on the eyes, the Shaped charges and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Vault Lockbreakers with no people, creatures, figures, silhouettes or text. Midground: a sealed bunker vault door with a huge wheel, steel shelving. Foreground: a safe-deposit wall, a collapsed ceiling with cables, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #fd9794 for the biggest glowing sources and surfaces, secondary #a8dadc for medium panels, banners and lights, pop #1d3557 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Were-Creature › Crocodile-kin

### Mire Matriarchs  `mirematriarchs`

*Mind the nest.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | broad and armored; large size; mobility: aquatic |
| Ethnicity + nationality | crocodile-kin (not human) |
| Identity | female being, character |
| Wardrobe | broad crocodile-kin in a shawl over scrap nest-armor, a long boat hook in one hand, a signal bell on the belt, a small basket of eggs on the other arm |
| Accessories | Boat hook; nest-armor; signal bell; egg basket |
| Pose | boat hook raised, nest basket cradled on the other arm |
| Facial expression | stern, protective glare |
| People | Were-Creature |
| Class | Crocodile-kin |
| Subclass | Mire Matriarchs |
| Type | Tank |
| Combat or support | Combat |
| Silhouette hook | boat hook raised, nest basket cradled on the other arm; the Boat hook and the nest-armor break the outline so it reads instantly as a black shape |
| Shape language | wide blocky rectangles and a big shield shape |
| Main color (60%) | #7cb518: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #3a0ca3: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #ffe8d7: the eyes, the Boat hook and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as boat hook raised, nest basket cradled on the other arm.
2. Few large shapes: wide blocky rectangles and a big shield shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Boat hook and the pose must be visible at 64 px.
4. Flat colors: #7cb518 / #3a0ca3 / #ffe8d7 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Boat hook and nest-armor and the tank shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #7cb518 / #3a0ca3 / #ffe8d7 (about 20%) |
| Midground | a stilt nest-fortress over the water with rope bridges, a moored barge |
| Foreground | a wall of woven reeds, hatchling nests |
| Character-relevant items | a stilt nest-fortress over the water with rope bridges, a moored barge, a wall of woven reeds, hatchling nests |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Mire Matriarchs, female being, character (crocodile-kin (not human)), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: boat hook raised, nest basket cradled on the other arm; the Boat hook and the nest-armor break the outline so it reads instantly as a black shape. Shape language: wide blocky rectangles and a big shield shape.
BODY: broad and armored, large size, aquatic. POSE: boat hook raised, nest basket cradled on the other arm. EXPRESSION: stern, protective glare, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): broad crocodile-kin in a shawl over scrap nest-armor, a long boat hook in one hand, a signal bell on the belt, a small basket of eggs on the other arm.
COLOR (exact hex values, flat fills): main #7cb518 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #3a0ca3 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #ffe8d7 about 10%, used on the eyes, the Boat hook and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Tank (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Mire Matriarchs with no people, creatures, figures, silhouettes or text. Midground: a stilt nest-fortress over the water with rope bridges, a moored barge. Foreground: a wall of woven reeds, hatchling nests, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #7cb518 for the biggest glowing sources and surfaces, secondary #3a0ca3 for medium panels, banners and lights, pop #ffe8d7 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Snapjaw Riverjackers  `riverjackers`

*Pay the toll. Or the river will.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | lean and scarred; large size; mobility: aquatic |
| Ethnicity + nationality | crocodile-kin (not human) |
| Identity | male being, character |
| Wardrobe | smug crocodile-kin captain in a tilted captain's hat and a vest with many pockets, a scrap cutlass in one hand, a lantern on a short pole in the other |
| Accessories | Boat hook; scrap cutlass; captain's hat; lantern pole |
| Pose | one foot up on a crate, cutlass over the shoulder, lantern pole raised |
| Facial expression | smug, tooth-baring grin |
| People | Were-Creature |
| Class | Crocodile-kin |
| Subclass | Snapjaw Riverjackers |
| Type | Fighter |
| Combat or support | Combat |
| Silhouette hook | one foot up on a crate, cutlass over the shoulder, lantern pole raised; the Boat hook and the scrap cutlass break the outline so it reads instantly as a black shape |
| Shape language | balanced diagonals with one clear weapon line |
| Main color (60%) | #67cdc1: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffbf69: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #1b263b: the eyes, the Boat hook and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as one foot up on a crate, cutlass over the shoulder, lantern pole raised.
2. Few large shapes: balanced diagonals with one clear weapon line; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Boat hook and the pose must be visible at 64 px.
4. Flat colors: #67cdc1 / #ffbf69 / #1b263b as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Boat hook and scrap cutlass and the fighter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #67cdc1 / #ffbf69 / #1b263b (about 20%) |
| Midground | an armed river barge with a mounted harpoon and a pirate flag, a drowned highway sign |
| Foreground | a wooden dock, fog on the water |
| Character-relevant items | an armed river barge with a mounted harpoon and a pirate flag, a drowned highway sign, a wooden dock, fog on the water |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Snapjaw Riverjackers, male being, character (crocodile-kin (not human)), apparent age late 40s.
DESIGN FOR SILHOUETTE FIRST: one foot up on a crate, cutlass over the shoulder, lantern pole raised; the Boat hook and the scrap cutlass break the outline so it reads instantly as a black shape. Shape language: balanced diagonals with one clear weapon line.
BODY: lean and scarred, large size, aquatic. POSE: one foot up on a crate, cutlass over the shoulder, lantern pole raised. EXPRESSION: smug, tooth-baring grin, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): smug crocodile-kin captain in a tilted captain's hat and a vest with many pockets, a scrap cutlass in one hand, a lantern on a short pole in the other.
COLOR (exact hex values, flat fills): main #67cdc1 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffbf69 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #1b263b about 10%, used on the eyes, the Boat hook and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Fighter (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Snapjaw Riverjackers with no people, creatures, figures, silhouettes or text. Midground: an armed river barge with a mounted harpoon and a pirate flag, a drowned highway sign. Foreground: a wooden dock, fog on the water, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #67cdc1 for the biggest glowing sources and surfaces, secondary #ffbf69 for medium panels, banners and lights, pop #1b263b for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Slow-Strike Sages  `slowstrikesages`

*One blow. Take your time.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | ancient and broad; large size; mobility: grounded |
| Ethnicity + nationality | crocodile-kin (not human) |
| Identity | male being, character |
| Wardrobe | ancient mossy crocodile-kin in a heavy mossy cloak and stone bracers, a thick staff planted at the side, a scroll of treaties at the belt |
| Accessories | Heavy staff; mossy cloak; scroll of treaties; stone bracers |
| Pose | seated upright with the staff planted, one eye cracking open |
| Facial expression | half-lidded, patient |
| People | Were-Creature |
| Class | Crocodile-kin |
| Subclass | Slow-Strike Sages |
| Type | Bruiser |
| Combat or support | Combat |
| Silhouette hook | seated upright with the staff planted, one eye cracking open; the Heavy staff and the mossy cloak break the outline so it reads instantly as a black shape |
| Shape language | heavy trapezoids, oversized fists and shoulders |
| Main color (60%) | #a7c957: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #6d597a: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fee7ab: the eyes, the Heavy staff and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as seated upright with the staff planted, one eye cracking open.
2. Few large shapes: heavy trapezoids, oversized fists and shoulders; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Heavy staff and the pose must be visible at 64 px.
4. Flat colors: #a7c957 / #6d597a / #fee7ab as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Heavy staff and mossy cloak and the bruiser shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #a7c957 / #6d597a / #fee7ab (about 20%) |
| Midground | a warm flat basking rock in a swamp, a collapsed overpass |
| Foreground | hanging moss, a stack of carved treaty stones |
| Character-relevant items | a warm flat basking rock in a swamp, a collapsed overpass, hanging moss, a stack of carved treaty stones |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Slow-Strike Sages, male being, character (crocodile-kin (not human)), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: seated upright with the staff planted, one eye cracking open; the Heavy staff and the mossy cloak break the outline so it reads instantly as a black shape. Shape language: heavy trapezoids, oversized fists and shoulders.
BODY: ancient and broad, large size, grounded. POSE: seated upright with the staff planted, one eye cracking open. EXPRESSION: half-lidded, patient, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): ancient mossy crocodile-kin in a heavy mossy cloak and stone bracers, a thick staff planted at the side, a scroll of treaties at the belt.
COLOR (exact hex values, flat fills): main #a7c957 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #6d597a about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fee7ab about 10%, used on the eyes, the Heavy staff and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Bruiser (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Slow-Strike Sages with no people, creatures, figures, silhouettes or text. Midground: a warm flat basking rock in a swamp, a collapsed overpass. Foreground: hanging moss, a stack of carved treaty stones, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #a7c957 for the biggest glowing sources and surfaces, secondary #6d597a for medium panels, banners and lights, pop #fee7ab for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Were-Creature › Capybara-kin

### Hot-Spring Healers  `hotspringhealers`

*Soak. Heal. Forgive.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | tall, soft and round; medium size; mobility: aquatic |
| Ethnicity + nationality | capybara-kin (not human) |
| Identity | female being, character |
| Wardrobe | tall, soft capybara-kin with flowers and ribbons in her hair, wearing a layered mint-and-pink ribbon robe with a bow sash, a steaming iron kettle in one hand, a bundle of herbs and lavender in the crook of the other arm, glass spring-water vials and a flask at the belt; at her feet a small raccoon assistant in a green scarf with a belt of glowing crystals |
| Accessories | Steam kettle; herb bundle; ribbon sash; spring-water vials; a crystal-wearing raccoon companion |
| Pose | pouring steam from the kettle with one arm raised, the other paw open in welcome, the crystal raccoon beside her feet |
| Facial expression | soft, serene smile |
| People | Were-Creature |
| Class | Capybara-kin |
| Subclass | Hot-Spring Healers |
| Type | Support |
| Combat or support | Support |
| Silhouette hook | pouring steam from the kettle with one arm raised, the other paw open in welcome, the crystal raccoon beside her feet; the Steam kettle and the herb bundle break the outline so it reads instantly as a black shape |
| Shape language | soft rounded rectangles with an open palm and a visible kit |
| Main color (60%) | #bcfec8: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffadad: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #c9c588: the eyes, the Steam kettle and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Done: `art/v2/were-hotspringhealers.png` and `art/v2/were-hotspringhealers-bg.jpg` |
| Last vet | Final art accepted (made before the vetting pipeline) |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as pouring steam from the kettle with one arm raised, the other paw open in welcome, the crystal raccoon beside her feet.
2. Few large shapes: soft rounded rectangles with an open palm and a visible kit; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Steam kettle and the pose must be visible at 64 px.
4. Flat colors: #bcfec8 / #ffadad / #c9c588 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Steam kettle and herb bundle and the support shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #bcfec8 / #ffadad / #c9c588 (about 20%) |
| Midground | an outdoor hot spring with stone pools and steam, a bathhouse hut, a bamboo screen |
| Foreground | a pile of towels, a hand-pumped water tower |
| Character-relevant items | an outdoor hot spring with stone pools and steam, a bathhouse hut, a bamboo screen, a pile of towels, a hand-pumped water tower |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Hot-Spring Healers, female being, character (capybara-kin (not human)), apparent age late 30s.
DESIGN FOR SILHOUETTE FIRST: pouring steam from the kettle with one arm raised, the other paw open in welcome, the crystal raccoon beside her feet; the Steam kettle and the herb bundle break the outline so it reads instantly as a black shape. Shape language: soft rounded rectangles with an open palm and a visible kit.
BODY: tall, soft and round, medium size, aquatic. POSE: pouring steam from the kettle with one arm raised, the other paw open in welcome, the crystal raccoon beside her feet. EXPRESSION: soft, serene smile, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): tall, soft capybara-kin with flowers and ribbons in her hair, wearing a layered mint-and-pink ribbon robe with a bow sash, a steaming iron kettle in one hand, a bundle of herbs and lavender in the crook of the other arm, glass spring-water vials and a flask at the belt; at her feet a small raccoon assistant in a green scarf with a belt of glowing crystals.
COLOR (exact hex values, flat fills): main #bcfec8 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffadad about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #c9c588 about 10%, used on the eyes, the Steam kettle and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Support (support) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Hot-Spring Healers with no people, creatures, figures, silhouettes or text. Midground: an outdoor hot spring with stone pools and steam, a bathhouse hut, a bamboo screen. Foreground: a pile of towels, a hand-pumped water tower, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #bcfec8 for the biggest glowing sources and surfaces, secondary #ffadad for medium panels, banners and lights, pop #c9c588 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Reed-Lodge Diplomats  `reeddiplomats`

*Let's talk about this. Slowly.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | round and calm; medium size; mobility: grounded |
| Ethnicity + nationality | capybara-kin (not human) |
| Identity | male being, character |
| Wardrobe | calm capybara-kin in a reed-woven robe, a rolled treaty scroll in one hand and a small gavel in the other, a tea tin at the belt |
| Accessories | Reed mat; treaty scroll; gavel; tea set |
| Pose | holding a treaty scroll and a teapot out in offer |
| Facial expression | calm, untroubled |
| People | Were-Creature |
| Class | Capybara-kin |
| Subclass | Reed-Lodge Diplomats |
| Type | Enchanter |
| Combat or support | Support |
| Silhouette hook | holding a treaty scroll and a teapot out in offer; the Reed mat and the treaty scroll break the outline so it reads instantly as a black shape |
| Shape language | circles and stars around a charm, instrument or talisman |
| Main color (60%) | #abdbd0: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #e86c65: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #264653: the eyes, the Reed mat and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as holding a treaty scroll and a teapot out in offer.
2. Few large shapes: circles and stars around a charm, instrument or talisman; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Reed mat and the pose must be visible at 64 px.
4. Flat colors: #abdbd0 / #e86c65 / #264653 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Reed mat and treaty scroll and the enchanter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #abdbd0 / #e86c65 / #264653 (about 20%) |
| Midground | a reed-mat lodge at the water's edge with a low tea table and cushions, a hanging lantern string |
| Foreground | a bridge over a pond, a signing desk |
| Character-relevant items | a reed-mat lodge at the water's edge with a low tea table and cushions, a hanging lantern string, a bridge over a pond, a signing desk |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Reed-Lodge Diplomats, male being, character (capybara-kin (not human)), apparent age mid 30s.
DESIGN FOR SILHOUETTE FIRST: holding a treaty scroll and a teapot out in offer; the Reed mat and the treaty scroll break the outline so it reads instantly as a black shape. Shape language: circles and stars around a charm, instrument or talisman.
BODY: round and calm, medium size, grounded. POSE: holding a treaty scroll and a teapot out in offer. EXPRESSION: calm, untroubled, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): calm capybara-kin in a reed-woven robe, a rolled treaty scroll in one hand and a small gavel in the other, a tea tin at the belt.
COLOR (exact hex values, flat fills): main #abdbd0 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #e86c65 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #264653 about 10%, used on the eyes, the Reed mat and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Enchanter (support) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Reed-Lodge Diplomats with no people, creatures, figures, silhouettes or text. Midground: a reed-mat lodge at the water's edge with a low tea table and cushions, a hanging lantern string. Foreground: a bridge over a pond, a signing desk, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #abdbd0 for the biggest glowing sources and surfaces, secondary #e86c65 for medium panels, banners and lights, pop #264653 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Dam Wardens  `damwardens`

*We built it. We keep it.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | broad and heavy-set; large size; mobility: grounded |
| Ethnicity + nationality | capybara-kin (not human) |
| Identity | male being, character |
| Wardrobe | broad capybara-kin in a hard hat and a canvas work vest, a slab tower shield on one arm and a sledgehammer in the other hand |
| Accessories | Tower shield; sledge; scaffolding rig; hard hat |
| Pose | planted behind a slab shield, sledge resting on one shoulder |
| Facial expression | stolid, unbothered |
| People | Were-Creature |
| Class | Capybara-kin |
| Subclass | Dam Wardens |
| Type | Tank |
| Combat or support | Combat |
| Silhouette hook | planted behind a slab shield, sledge resting on one shoulder; the Tower shield and the sledge break the outline so it reads instantly as a black shape |
| Shape language | wide blocky rectangles and a big shield shape |
| Main color (60%) | #b0970b: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #3d5a80: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #d8fdff: the eyes, the Tower shield and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as planted behind a slab shield, sledge resting on one shoulder.
2. Few large shapes: wide blocky rectangles and a big shield shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Tower shield and the pose must be visible at 64 px.
4. Flat colors: #b0970b / #3d5a80 / #d8fdff as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Tower shield and sledge and the tank shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #b0970b / #3d5a80 / #d8fdff (about 20%) |
| Midground | a half-built dam wall with scaffolding, a crane, sandbags |
| Foreground | a flooded road, a concrete spillway, a work generator |
| Character-relevant items | a half-built dam wall with scaffolding, a crane, sandbags, a flooded road, a concrete spillway, a work generator |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Dam Wardens, male being, character (capybara-kin (not human)), apparent age early 30s.
DESIGN FOR SILHOUETTE FIRST: planted behind a slab shield, sledge resting on one shoulder; the Tower shield and the sledge break the outline so it reads instantly as a black shape. Shape language: wide blocky rectangles and a big shield shape.
BODY: broad and heavy-set, large size, grounded. POSE: planted behind a slab shield, sledge resting on one shoulder. EXPRESSION: stolid, unbothered, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): broad capybara-kin in a hard hat and a canvas work vest, a slab tower shield on one arm and a sledgehammer in the other hand.
COLOR (exact hex values, flat fills): main #b0970b about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #3d5a80 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #d8fdff about 10%, used on the eyes, the Tower shield and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Tank (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Dam Wardens with no people, creatures, figures, silhouettes or text. Midground: a half-built dam wall with scaffolding, a crane, sandbags. Foreground: a flooded road, a concrete spillway, a work generator, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #b0970b for the biggest glowing sources and surfaces, secondary #3d5a80 for medium panels, banners and lights, pop #d8fdff for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Were-Creature › Axolotl-kin

### Regrowth Medics  `regrowthmedics`

*We can regrow that.*

**Character**

| Field | Value |
|---|---|
| Gender | Nonbinary |
| Physique | slim with feathery gills; medium size; mobility: aquatic |
| Ethnicity + nationality | axolotl-kin (not human) |
| Identity | nonbinary being, character |
| Wardrobe | smiling axolotl-kin with glowing pink gills, a field coat with a med satchel, a glow-gel flask in one hand and a reel of bandage in the other |
| Accessories | Med satchel; glow-gel flask; bandage reel; field lamp |
| Pose | kneeling with a glowing hand over a wound, satchel open |
| Facial expression | bright, reassuring smile |
| People | Were-Creature |
| Class | Axolotl-kin |
| Subclass | Regrowth Medics |
| Type | Support |
| Combat or support | Support |
| Silhouette hook | kneeling with a glowing hand over a wound, satchel open; the Med satchel and the glow-gel flask break the outline so it reads instantly as a black shape |
| Shape language | soft rounded rectangles with an open palm and a visible kit |
| Main color (60%) | #f790c3: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #4cc9f0: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff0d1: the eyes, the Med satchel and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as kneeling with a glowing hand over a wound, satchel open.
2. Few large shapes: soft rounded rectangles with an open palm and a visible kit; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Med satchel and the pose must be visible at 64 px.
4. Flat colors: #f790c3 / #4cc9f0 / #fff0d1 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Med satchel and glow-gel flask and the support shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #f790c3 / #4cc9f0 / #fff0d1 (about 20%) |
| Midground | a flooded clinic basement with glowing tanks, a hospital bed, a rolling IV stand |
| Foreground | an old x-ray lightbox, bubbling aquariums |
| Character-relevant items | a flooded clinic basement with glowing tanks, a hospital bed, a rolling IV stand, an old x-ray lightbox, bubbling aquariums |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Regrowth Medics, nonbinary being, character (axolotl-kin (not human)), apparent age late 40s.
DESIGN FOR SILHOUETTE FIRST: kneeling with a glowing hand over a wound, satchel open; the Med satchel and the glow-gel flask break the outline so it reads instantly as a black shape. Shape language: soft rounded rectangles with an open palm and a visible kit.
BODY: slim with feathery gills, medium size, aquatic. POSE: kneeling with a glowing hand over a wound, satchel open. EXPRESSION: bright, reassuring smile, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): smiling axolotl-kin with glowing pink gills, a field coat with a med satchel, a glow-gel flask in one hand and a reel of bandage in the other.
COLOR (exact hex values, flat fills): main #f790c3 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #4cc9f0 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff0d1 about 10%, used on the eyes, the Med satchel and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Support (support) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Regrowth Medics with no people, creatures, figures, silhouettes or text. Midground: a flooded clinic basement with glowing tanks, a hospital bed, a rolling IV stand. Foreground: an old x-ray lightbox, bubbling aquariums, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #f790c3 for the biggest glowing sources and surfaces, secondary #4cc9f0 for medium panels, banners and lights, pop #fff0d1 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Gillstorm Casters  `gillstorm`

*The tide is a spell.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | slim and wet-suited; medium size; mobility: aquatic |
| Ethnicity + nationality | axolotl-kin (not human) |
| Identity | female being, character |
| Wardrobe | axolotl-kin in a wet-suit coat with crackling blue gills, a battery pack on the back, goggles pushed up, a storm staff held in both hands |
| Accessories | Storm staff; wet-suit coat; battery pack; goggles |
| Pose | staff raised overhead as lightning arcs between the gills |
| Facial expression | intense, gills flared |
| People | Were-Creature |
| Class | Axolotl-kin |
| Subclass | Gillstorm Casters |
| Type | Caster |
| Combat or support | Combat |
| Silhouette hook | staff raised overhead as lightning arcs between the gills; the Storm staff and the wet-suit coat break the outline so it reads instantly as a black shape |
| Shape language | flowing diamonds and a bright flat focus shape |
| Main color (60%) | #13a6c7: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ff5d8f: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #2e2200: the eyes, the Storm staff and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as staff raised overhead as lightning arcs between the gills.
2. Few large shapes: flowing diamonds and a bright flat focus shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Storm staff and the pose must be visible at 64 px.
4. Flat colors: #13a6c7 / #ff5d8f / #2e2200 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Storm staff and wet-suit coat and the caster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #13a6c7 / #ff5d8f / #2e2200 (about 20%) |
| Midground | a flooded power substation with puddles and fallen transformers, a lightning rod tower |
| Foreground | a coil of cables, storm clouds |
| Character-relevant items | a flooded power substation with puddles and fallen transformers, a lightning rod tower, a coil of cables, storm clouds |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Gillstorm Casters, female being, character (axolotl-kin (not human)), apparent age mid 30s.
DESIGN FOR SILHOUETTE FIRST: staff raised overhead as lightning arcs between the gills; the Storm staff and the wet-suit coat break the outline so it reads instantly as a black shape. Shape language: flowing diamonds and a bright flat focus shape.
BODY: slim and wet-suited, medium size, aquatic. POSE: staff raised overhead as lightning arcs between the gills. EXPRESSION: intense, gills flared, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): axolotl-kin in a wet-suit coat with crackling blue gills, a battery pack on the back, goggles pushed up, a storm staff held in both hands.
COLOR (exact hex values, flat fills): main #13a6c7 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ff5d8f about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #2e2200 about 10%, used on the eyes, the Storm staff and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Caster (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Gillstorm Casters with no people, creatures, figures, silhouettes or text. Midground: a flooded power substation with puddles and fallen transformers, a lightning rod tower. Foreground: a coil of cables, storm clouds, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #13a6c7 for the biggest glowing sources and surfaces, secondary #ff5d8f for medium panels, banners and lights, pop #2e2200 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Mudglow Lurkers  `mudglowlurkers`

*Hold still. It's already behind you.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | wide-faced and low-slung; medium size; mobility: aquatic |
| Ethnicity + nationality | axolotl-kin (not human) |
| Identity | male being, character |
| Wardrobe | wide-faced axolotl-kin in a muddy cloak and wading boots, glowing lure-tips on the gills, a hooked spear held in both hands |
| Accessories | Hooked spear; glow-lure; mud-cloak; wading boots |
| Pose | low in a crouch, hooked spear lowered with the lure-tips glowing |
| Facial expression | wide, unblinking stare |
| People | Were-Creature |
| Class | Axolotl-kin |
| Subclass | Mudglow Lurkers |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | low in a crouch, hooked spear lowered with the lure-tips glowing; the Hooked spear and the glow-lure break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #5a20c7: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #b5e48c: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #e4ffda: the eyes, the Hooked spear and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as low in a crouch, hooked spear lowered with the lure-tips glowing.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Hooked spear and the pose must be visible at 64 px.
4. Flat colors: #5a20c7 / #b5e48c / #e4ffda as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Hooked spear and glow-lure and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #5a20c7 / #b5e48c / #e4ffda (about 20%) |
| Midground | a muddy marsh with half-sunken cars, glowing swamp lures on stalks, a rotten dock |
| Foreground | reeds, a sunken bus |
| Character-relevant items | a muddy marsh with half-sunken cars, glowing swamp lures on stalks, a rotten dock, reeds, a sunken bus |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Mudglow Lurkers, male being, character (axolotl-kin (not human)), apparent age early 20s.
DESIGN FOR SILHOUETTE FIRST: low in a crouch, hooked spear lowered with the lure-tips glowing; the Hooked spear and the glow-lure break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: wide-faced and low-slung, medium size, aquatic. POSE: low in a crouch, hooked spear lowered with the lure-tips glowing. EXPRESSION: wide, unblinking stare, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): wide-faced axolotl-kin in a muddy cloak and wading boots, glowing lure-tips on the gills, a hooked spear held in both hands.
COLOR (exact hex values, flat fills): main #5a20c7 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #b5e48c about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #e4ffda about 10%, used on the eyes, the Hooked spear and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Mudglow Lurkers with no people, creatures, figures, silhouettes or text. Midground: a muddy marsh with half-sunken cars, glowing swamp lures on stalks, a rotten dock. Foreground: reeds, a sunken bus, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #5a20c7 for the biggest glowing sources and surfaces, secondary #b5e48c for medium panels, banners and lights, pop #e4ffda for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Were-Creature › Raven-kin

### Gloamwing Oracles  `gloamwings`

*Your fortune, for a feather.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | slender and feathered; medium size; mobility: flying |
| Ethnicity + nationality | raven-kin (not human) |
| Identity | female being, character |
| Wardrobe | slender raven-kin in a star-sewn cloak, a crystal-ball lens held up in one hand, a feather staff in the other, a bandolier of signal flares |
| Accessories | Crystal-ball lens; feather staff; star-sewn cloak; signal flares |
| Pose | orb held aloft in one hand, crescent staff pointed in the other |
| Facial expression | mysterious, knowing |
| People | Were-Creature |
| Class | Raven-kin |
| Subclass | Gloamwing Oracles |
| Type | Enchanter |
| Combat or support | Support |
| Silhouette hook | orb held aloft in one hand, crescent staff pointed in the other; the Crystal-ball lens and the feather staff break the outline so it reads instantly as a black shape |
| Shape language | circles and stars around a charm, instrument or talisman |
| Main color (60%) | #3a0ca3: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #f9c74f: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #90e0ef: the eyes, the Crystal-ball lens and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as orb held aloft in one hand, crescent staff pointed in the other.
2. Few large shapes: circles and stars around a charm, instrument or talisman; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Crystal-ball lens and the pose must be visible at 64 px.
4. Flat colors: #3a0ca3 / #f9c74f / #90e0ef as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Crystal-ball lens and feather staff and the enchanter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #3a0ca3 / #f9c74f / #90e0ef (about 20%) |
| Midground | a moonlit cliff terrace with an armillary sphere, a stone altar of feathers, a rusted dish |
| Foreground | a bell tower, stacked scrolls |
| Character-relevant items | a moonlit cliff terrace with an armillary sphere, a stone altar of feathers, a rusted dish, a bell tower, stacked scrolls |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Gloamwing Oracles, female being, character (raven-kin (not human)), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: orb held aloft in one hand, crescent staff pointed in the other; the Crystal-ball lens and the feather staff break the outline so it reads instantly as a black shape. Shape language: circles and stars around a charm, instrument or talisman.
BODY: slender and feathered, medium size, flying. POSE: orb held aloft in one hand, crescent staff pointed in the other. EXPRESSION: mysterious, knowing, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): slender raven-kin in a star-sewn cloak, a crystal-ball lens held up in one hand, a feather staff in the other, a bandolier of signal flares.
COLOR (exact hex values, flat fills): main #3a0ca3 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #f9c74f about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #90e0ef about 10%, used on the eyes, the Crystal-ball lens and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Enchanter (support) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Gloamwing Oracles with no people, creatures, figures, silhouettes or text. Midground: a moonlit cliff terrace with an armillary sphere, a stone altar of feathers, a rusted dish. Foreground: a bell tower, stacked scrolls, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #3a0ca3 for the biggest glowing sources and surfaces, secondary #f9c74f for medium panels, banners and lights, pop #90e0ef for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Salvage Magpies  `magpies`

*Finders, keepers, fighters.*

**Character**

| Field | Value |
|---|---|
| Gender | Nonbinary |
| Physique | small and quick; small size; mobility: flying |
| Ethnicity + nationality | magpie-kin (not human) |
| Identity | nonbinary being, character |
| Wardrobe | magpie-kin in a ring-covered coat and magnifying goggles, a hook-blade in each hand, a relic bag slung over one shoulder and a gem pouch |
| Accessories | Twin hook-blades; relic bag; magnifying goggles; gem pouch |
| Pose | hooking a gem with one blade, bag swinging from the shoulder |
| Facial expression | greedy delight |
| People | Were-Creature |
| Class | Raven-kin |
| Subclass | Salvage Magpies |
| Type | Fighter |
| Combat or support | Combat |
| Silhouette hook | hooking a gem with one blade, bag swinging from the shoulder; the Twin hook-blades and the relic bag break the outline so it reads instantly as a black shape |
| Shape language | balanced diagonals with one clear weapon line |
| Main color (60%) | #aafdff: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #1d3557: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #f54852: the eyes, the Twin hook-blades and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as hooking a gem with one blade, bag swinging from the shoulder.
2. Few large shapes: balanced diagonals with one clear weapon line; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Twin hook-blades and the pose must be visible at 64 px.
4. Flat colors: #aafdff / #1d3557 / #f54852 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Twin hook-blades and relic bag and the fighter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #aafdff / #1d3557 / #f54852 (about 20%) |
| Midground | a magpie's treasure nest of shelves and crates full of salvaged relics, a stack of TVs |
| Foreground | a shop counter, glittering heaps of scrap |
| Character-relevant items | a magpie's treasure nest of shelves and crates full of salvaged relics, a stack of TVs, a shop counter, glittering heaps of scrap |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Salvage Magpies, nonbinary being, character (magpie-kin (not human)), apparent age early 30s.
DESIGN FOR SILHOUETTE FIRST: hooking a gem with one blade, bag swinging from the shoulder; the Twin hook-blades and the relic bag break the outline so it reads instantly as a black shape. Shape language: balanced diagonals with one clear weapon line.
BODY: small and quick, small size, flying. POSE: hooking a gem with one blade, bag swinging from the shoulder. EXPRESSION: greedy delight, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): magpie-kin in a ring-covered coat and magnifying goggles, a hook-blade in each hand, a relic bag slung over one shoulder and a gem pouch.
COLOR (exact hex values, flat fills): main #aafdff about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #1d3557 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #f54852 about 10%, used on the eyes, the Twin hook-blades and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Fighter (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Salvage Magpies with no people, creatures, figures, silhouettes or text. Midground: a magpie's treasure nest of shelves and crates full of salvaged relics, a stack of TVs. Foreground: a shop counter, glittering heaps of scrap, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #aafdff for the biggest glowing sources and surfaces, secondary #1d3557 for medium panels, banners and lights, pop #f54852 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Murder Vanguard  `murdervanguard`

*One of us. All of us.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | lean and feathered; medium size; mobility: flying |
| Ethnicity + nationality | raven-kin (not human) |
| Identity | male being, character |
| Wardrobe | raven-kin in a black-iron beak mask and a feather mantle, a talon-blade in each hand, a grudge ledger tied at the hip |
| Accessories | Talon-blades; feather mantle; black-iron beak mask; grudge ledger |
| Pose | diving forward with talon-blades out, crows streaming behind |
| Facial expression | cold, beaked glare |
| People | Were-Creature |
| Class | Raven-kin |
| Subclass | Murder Vanguard |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | diving forward with talon-blades out, crows streaming behind; the Talon-blades and the feather mantle break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #282956: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ef233c: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #def6ff: the eyes, the Talon-blades and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as diving forward with talon-blades out, crows streaming behind.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Talon-blades and the pose must be visible at 64 px.
4. Flat colors: #282956 / #ef233c / #def6ff as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Talon-blades and feather mantle and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #282956 / #ef233c / #def6ff (about 20%) |
| Midground | a dead tree of perched scrap and wire, a rooftop crow roost, a chain-link fence |
| Foreground | a burned-out bus, a stack of ledgers |
| Character-relevant items | a dead tree of perched scrap and wire, a rooftop crow roost, a chain-link fence, a burned-out bus, a stack of ledgers |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Murder Vanguard, male being, character (raven-kin (not human)), apparent age early 40s.
DESIGN FOR SILHOUETTE FIRST: diving forward with talon-blades out, crows streaming behind; the Talon-blades and the feather mantle break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: lean and feathered, medium size, flying. POSE: diving forward with talon-blades out, crows streaming behind. EXPRESSION: cold, beaked glare, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): raven-kin in a black-iron beak mask and a feather mantle, a talon-blade in each hand, a grudge ledger tied at the hip.
COLOR (exact hex values, flat fills): main #282956 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ef233c about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #def6ff about 10%, used on the eyes, the Talon-blades and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Murder Vanguard with no people, creatures, figures, silhouettes or text. Midground: a dead tree of perched scrap and wire, a rooftop crow roost, a chain-link fence. Foreground: a burned-out bus, a stack of ledgers, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #282956 for the biggest glowing sources and surfaces, secondary #ef233c for medium panels, banners and lights, pop #def6ff for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Were-Creature › Owl-kin

### Hushwing Strikers  `hushwings`

*Silent flight. Silent end.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | round and fluffy; medium size; mobility: flying |
| Ethnicity + nationality | owl-kin (not human) |
| Identity | female being, character |
| Wardrobe | fluffy owl-kin in a scarf and plate bracers with round spectacles, a talon-blade in each hand, a scroll case at the belt |
| Accessories | Talon-blades; spectacles; scroll case; wing-cloak |
| Pose | diving with talon-blades extended and wings half-spread |
| Facial expression | grave, unblinking |
| People | Were-Creature |
| Class | Owl-kin |
| Subclass | Hushwing Strikers |
| Type | Fighter |
| Combat or support | Combat |
| Silhouette hook | diving with talon-blades extended and wings half-spread; the Talon-blades and the spectacles break the outline so it reads instantly as a black shape |
| Shape language | balanced diagonals with one clear weapon line |
| Main color (60%) | #7aa1ce: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #5f0f40: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #f78f0a: the eyes, the Talon-blades and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as diving with talon-blades extended and wings half-spread.
2. Few large shapes: balanced diagonals with one clear weapon line; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Talon-blades and the pose must be visible at 64 px.
4. Flat colors: #7aa1ce / #5f0f40 / #f78f0a as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Talon-blades and spectacles and the fighter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #7aa1ce / #5f0f40 / #f78f0a (about 20%) |
| Midground | a moonlit treetop watchpost, a signal platform on a dead pylon, a hollow tree |
| Foreground | a bell, a hanging lantern |
| Character-relevant items | a moonlit treetop watchpost, a signal platform on a dead pylon, a hollow tree, a bell, a hanging lantern |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Hushwing Strikers, female being, character (owl-kin (not human)), apparent age early 20s.
DESIGN FOR SILHOUETTE FIRST: diving with talon-blades extended and wings half-spread; the Talon-blades and the spectacles break the outline so it reads instantly as a black shape. Shape language: balanced diagonals with one clear weapon line.
BODY: round and fluffy, medium size, flying. POSE: diving with talon-blades extended and wings half-spread. EXPRESSION: grave, unblinking, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): fluffy owl-kin in a scarf and plate bracers with round spectacles, a talon-blade in each hand, a scroll case at the belt.
COLOR (exact hex values, flat fills): main #7aa1ce about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #5f0f40 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #f78f0a about 10%, used on the eyes, the Talon-blades and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Fighter (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Hushwing Strikers with no people, creatures, figures, silhouettes or text. Midground: a moonlit treetop watchpost, a signal platform on a dead pylon, a hollow tree. Foreground: a bell, a hanging lantern, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #7aa1ce for the biggest glowing sources and surfaces, secondary #5f0f40 for medium panels, banners and lights, pop #f78f0a for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Night-Eye Snipers  `nighteyesnipers`

*Enormous eyes. One bullet.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | compact with huge eyes; medium size; mobility: flying |
| Ethnicity + nationality | owl-kin (not human) |
| Identity | male being, character |
| Wardrobe | owl-kin with huge golden eyes in a ghillie-cloak with night-vision goggles, a long scoped rifle held in both hands |
| Accessories | Long rifle with thermal scope; night-goggles; ghillie cloak |
| Pose | perched with the rifle braced across a raised knee |
| Facial expression | steady, enormous-eyed focus |
| People | Were-Creature |
| Class | Owl-kin |
| Subclass | Night-Eye Snipers |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | perched with the rifle braced across a raised knee; the Long rifle with thermal scope and the night-goggles break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #fff5bc: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #3c096c: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #c6e2fe: the eyes, the Long rifle with thermal scope and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as perched with the rifle braced across a raised knee.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Long rifle with thermal scope and the pose must be visible at 64 px.
4. Flat colors: #fff5bc / #3c096c / #c6e2fe as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Long rifle with thermal scope and night-goggles and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #fff5bc / #3c096c / #c6e2fe (about 20%) |
| Midground | a rusted high-tension pylon with a sniper perch, a dead rail yard |
| Foreground | a collapsed bridge, a searchlight |
| Character-relevant items | a rusted high-tension pylon with a sniper perch, a dead rail yard, a collapsed bridge, a searchlight |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Night-Eye Snipers, male being, character (owl-kin (not human)), apparent age early 70s.
DESIGN FOR SILHOUETTE FIRST: perched with the rifle braced across a raised knee; the Long rifle with thermal scope and the night-goggles break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: compact with huge eyes, medium size, flying. POSE: perched with the rifle braced across a raised knee. EXPRESSION: steady, enormous-eyed focus, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): owl-kin with huge golden eyes in a ghillie-cloak with night-vision goggles, a long scoped rifle held in both hands.
COLOR (exact hex values, flat fills): main #fff5bc about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #3c096c about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #c6e2fe about 10%, used on the eyes, the Long rifle with thermal scope and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Night-Eye Snipers with no people, creatures, figures, silhouettes or text. Midground: a rusted high-tension pylon with a sniper perch, a dead rail yard. Foreground: a collapsed bridge, a searchlight, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #fff5bc for the biggest glowing sources and surfaces, secondary #3c096c for medium panels, banners and lights, pop #c6e2fe for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Rotating Watch  `rotatingwatch`

*All around. Always.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | round and sturdy; medium size; mobility: grounded |
| Ethnicity + nationality | owl-kin (not human) |
| Identity | male being, character |
| Wardrobe | round owl-kin sentry in a reinforced helm, a halberd in one hand, an alarm horn at the belt, head turned all the way around over the shoulder |
| Accessories | Halberd; signal lamp; alarm horn; reinforced helm |
| Pose | standing at a post, halberd upright, head swivelled over the shoulder |
| Facial expression | alert, head turned right around |
| People | Were-Creature |
| Class | Owl-kin |
| Subclass | Rotating Watch |
| Type | Tank |
| Combat or support | Combat |
| Silhouette hook | standing at a post, halberd upright, head swivelled over the shoulder; the Halberd and the signal lamp break the outline so it reads instantly as a black shape |
| Shape language | wide blocky rectangles and a big shield shape |
| Main color (60%) | #7091a1: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #f28c16: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #023047: the eyes, the Halberd and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as standing at a post, halberd upright, head swivelled over the shoulder.
2. Few large shapes: wide blocky rectangles and a big shield shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Halberd and the pose must be visible at 64 px.
4. Flat colors: #7091a1 / #f28c16 / #023047 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Halberd and signal lamp and the tank shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #7091a1 / #f28c16 / #023047 (about 20%) |
| Midground | a border watch post with a signal lamp, a barbed-wire fence, a guard tower |
| Foreground | a barricade, a ringing alarm bell |
| Character-relevant items | a border watch post with a signal lamp, a barbed-wire fence, a guard tower, a barricade, a ringing alarm bell |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Rotating Watch, male being, character (owl-kin (not human)), apparent age early 70s.
DESIGN FOR SILHOUETTE FIRST: standing at a post, halberd upright, head swivelled over the shoulder; the Halberd and the signal lamp break the outline so it reads instantly as a black shape. Shape language: wide blocky rectangles and a big shield shape.
BODY: round and sturdy, medium size, grounded. POSE: standing at a post, halberd upright, head swivelled over the shoulder. EXPRESSION: alert, head turned right around, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): round owl-kin sentry in a reinforced helm, a halberd in one hand, an alarm horn at the belt, head turned all the way around over the shoulder.
COLOR (exact hex values, flat fills): main #7091a1 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #f28c16 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #023047 about 10%, used on the eyes, the Halberd and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Tank (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Rotating Watch with no people, creatures, figures, silhouettes or text. Midground: a border watch post with a signal lamp, a barbed-wire fence, a guard tower. Foreground: a barricade, a ringing alarm bell, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #7091a1 for the biggest glowing sources and surfaces, secondary #f28c16 for medium panels, banners and lights, pop #023047 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Were-Creature › Octopus-kin

### Ink Spies  `inkspies`

*You'll never see them.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | slim and tentacled; medium size; mobility: agile |
| Ethnicity + nationality | octopus-kin (not human) |
| Identity | female being, character |
| Wardrobe | octopus-kin in a camo cloak with suction-grip gloves, a silenced pistol in one tentacle-hand and an ink-bomb pouch at the belt |
| Accessories | Ink-bomb pouch; suction-grip gloves; silenced pistol; camo cloak |
| Pose | slipping sideways with the silenced pistol raised, tentacles curling |
| Facial expression | coolly amused |
| People | Were-Creature |
| Class | Octopus-kin |
| Subclass | Ink Spies |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | slipping sideways with the silenced pistol raised, tentacles curling; the Ink-bomb pouch and the suction-grip gloves break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #9518a2: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #06d6a0: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #002645: the eyes, the Ink-bomb pouch and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as slipping sideways with the silenced pistol raised, tentacles curling.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Ink-bomb pouch and the pose must be visible at 64 px.
4. Flat colors: #9518a2 / #06d6a0 / #002645 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Ink-bomb pouch and suction-grip gloves and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #9518a2 / #06d6a0 / #002645 (about 20%) |
| Midground | a flooded subway tunnel with a dripping ceiling, a sunken turnstile |
| Foreground | a locked data vault, a wall of dead monitors |
| Character-relevant items | a flooded subway tunnel with a dripping ceiling, a sunken turnstile, a locked data vault, a wall of dead monitors |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Ink Spies, female being, character (octopus-kin (not human)), apparent age early 20s.
DESIGN FOR SILHOUETTE FIRST: slipping sideways with the silenced pistol raised, tentacles curling; the Ink-bomb pouch and the suction-grip gloves break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: slim and tentacled, medium size, agile. POSE: slipping sideways with the silenced pistol raised, tentacles curling. EXPRESSION: coolly amused, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): octopus-kin in a camo cloak with suction-grip gloves, a silenced pistol in one tentacle-hand and an ink-bomb pouch at the belt.
COLOR (exact hex values, flat fills): main #9518a2 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #06d6a0 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #002645 about 10%, used on the eyes, the Ink-bomb pouch and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Ink Spies with no people, creatures, figures, silhouettes or text. Midground: a flooded subway tunnel with a dripping ceiling, a sunken turnstile. Foreground: a locked data vault, a wall of dead monitors, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #9518a2 for the biggest glowing sources and surfaces, secondary #06d6a0 for medium panels, banners and lights, pop #002645 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Tentacle Engineers  `tentacleengineers`

*Eight hands. Eight tools.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | many-limbed and busy; medium size; mobility: grounded |
| Ethnicity + nationality | octopus-kin (not human) |
| Identity | male being, character |
| Wardrobe | octopus-kin in goggles and a multi-tool harness, a different tool in each of several limbs: wrench, welder, rifle, screwdriver |
| Accessories | Multi-tool harness; welder; scrap turret; goggles |
| Pose | working on several tools at once with a limb for each |
| Facial expression | frazzled, delighted focus |
| People | Were-Creature |
| Class | Octopus-kin |
| Subclass | Tentacle Engineers |
| Type | Controller |
| Combat or support | Combat |
| Silhouette hook | working on several tools at once with a limb for each; the Multi-tool harness and the welder break the outline so it reads instantly as a black shape |
| Shape language | hexagons and wide arc gestures with tools hanging off the body |
| Main color (60%) | #fda96c: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #00b4d8: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #282956: the eyes, the Multi-tool harness and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as working on several tools at once with a limb for each.
2. Few large shapes: hexagons and wide arc gestures with tools hanging off the body; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Multi-tool harness and the pose must be visible at 64 px.
4. Flat colors: #fda96c / #00b4d8 / #282956 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Multi-tool harness and welder and the controller shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #fda96c / #00b4d8 / #282956 (about 20%) |
| Midground | a flooded workshop with a half-built scrap turret, a welding rig, parts bins |
| Foreground | a generator, a pile of drones |
| Character-relevant items | a flooded workshop with a half-built scrap turret, a welding rig, parts bins, a generator, a pile of drones |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Tentacle Engineers, male being, character (octopus-kin (not human)), apparent age early 30s.
DESIGN FOR SILHOUETTE FIRST: working on several tools at once with a limb for each; the Multi-tool harness and the welder break the outline so it reads instantly as a black shape. Shape language: hexagons and wide arc gestures with tools hanging off the body.
BODY: many-limbed and busy, medium size, grounded. POSE: working on several tools at once with a limb for each. EXPRESSION: frazzled, delighted focus, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): octopus-kin in goggles and a multi-tool harness, a different tool in each of several limbs: wrench, welder, rifle, screwdriver.
COLOR (exact hex values, flat fills): main #fda96c about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #00b4d8 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #282956 about 10%, used on the eyes, the Multi-tool harness and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Controller (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Tentacle Engineers with no people, creatures, figures, silhouettes or text. Midground: a flooded workshop with a half-built scrap turret, a welding rig, parts bins. Foreground: a generator, a pile of drones, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #fda96c for the biggest glowing sources and surfaces, secondary #00b4d8 for medium panels, banners and lights, pop #282956 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Abyssal Scholars  `abyssalscholars`

*Knowledge is deep. So are we.*

**Character**

| Field | Value |
|---|---|
| Gender | Nonbinary |
| Physique | robed and tentacled; medium size; mobility: aquatic |
| Ethnicity + nationality | octopus-kin (not human) |
| Identity | nonbinary being, character |
| Wardrobe | octopus-kin in a diving-bell helmet, a sodden tome open in one limb, an ink wand in another, a scroll case at the belt |
| Accessories | Sodden tome; ink wand; diving-bell helm; scroll case |
| Pose | reading from an open tome while spectral limbs coil around |
| Facial expression | serene, eyes half-shut |
| People | Were-Creature |
| Class | Octopus-kin |
| Subclass | Abyssal Scholars |
| Type | Caster |
| Combat or support | Combat |
| Silhouette hook | reading from an open tome while spectral limbs coil around; the Sodden tome and the ink wand break the outline so it reads instantly as a black shape |
| Shape language | flowing diamonds and a bright flat focus shape |
| Main color (60%) | #270077: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #e0aaff: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #1c2337: the eyes, the Sodden tome and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as reading from an open tome while spectral limbs coil around.
2. Few large shapes: flowing diamonds and a bright flat focus shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Sodden tome and the pose must be visible at 64 px.
4. Flat colors: #270077 / #e0aaff / #1c2337 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Sodden tome and ink wand and the caster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #270077 / #e0aaff / #1c2337 (about 20%) |
| Midground | a flooded library with half-sunken shelves, a diving-bell chamber, a wall of tide charts |
| Foreground | floating books, a drowned reading desk |
| Character-relevant items | a flooded library with half-sunken shelves, a diving-bell chamber, a wall of tide charts, floating books, a drowned reading desk |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Abyssal Scholars, nonbinary being, character (octopus-kin (not human)), apparent age early 20s.
DESIGN FOR SILHOUETTE FIRST: reading from an open tome while spectral limbs coil around; the Sodden tome and the ink wand break the outline so it reads instantly as a black shape. Shape language: flowing diamonds and a bright flat focus shape.
BODY: robed and tentacled, medium size, aquatic. POSE: reading from an open tome while spectral limbs coil around. EXPRESSION: serene, eyes half-shut, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): octopus-kin in a diving-bell helmet, a sodden tome open in one limb, an ink wand in another, a scroll case at the belt.
COLOR (exact hex values, flat fills): main #270077 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #e0aaff about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #1c2337 about 10%, used on the eyes, the Sodden tome and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Caster (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Abyssal Scholars with no people, creatures, figures, silhouettes or text. Midground: a flooded library with half-sunken shelves, a diving-bell chamber, a wall of tide charts. Foreground: floating books, a drowned reading desk, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #270077 for the biggest glowing sources and surfaces, secondary #e0aaff for medium panels, banners and lights, pop #1c2337 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Were-Creature › Mantis Shrimp-kin

### Punch-Claw Duelists  `punchclawduelists`

*One strike. Done.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | armored and compact; medium size; mobility: aquatic |
| Ethnicity + nationality | mantis shrimp-kin (not human) |
| Identity | male being, character |
| Wardrobe | armored mantis-shrimp-kin with plated carapace and striking gauntlets, club-claws cocked back, a reef-cloak |
| Accessories | Club-claws; plated carapace; striking gauntlets; reef-cloak |
| Pose | one club-claw cocked back, the other braced forward |
| Facial expression | taut, predatory |
| People | Were-Creature |
| Class | Mantis Shrimp-kin |
| Subclass | Punch-Claw Duelists |
| Type | Bruiser |
| Combat or support | Combat |
| Silhouette hook | one club-claw cocked back, the other braced forward; the Club-claws and the plated carapace break the outline so it reads instantly as a black shape |
| Shape language | heavy trapezoids, oversized fists and shoulders |
| Main color (60%) | #ca148b: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffd60a: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #023e8a: the eyes, the Club-claws and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as one club-claw cocked back, the other braced forward.
2. Few large shapes: heavy trapezoids, oversized fists and shoulders; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Club-claws and the pose must be visible at 64 px.
4. Flat colors: #ca148b / #ffd60a / #023e8a as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Club-claws and plated carapace and the bruiser shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #ca148b / #ffd60a / #023e8a (about 20%) |
| Midground | a flooded stadium with a duel ring marked in the floor, shattered glass |
| Foreground | a scoreboard, a collapsed bleacher |
| Character-relevant items | a flooded stadium with a duel ring marked in the floor, shattered glass, a scoreboard, a collapsed bleacher |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Punch-Claw Duelists, male being, character (mantis shrimp-kin (not human)), apparent age early 30s.
DESIGN FOR SILHOUETTE FIRST: one club-claw cocked back, the other braced forward; the Club-claws and the plated carapace break the outline so it reads instantly as a black shape. Shape language: heavy trapezoids, oversized fists and shoulders.
BODY: armored and compact, medium size, aquatic. POSE: one club-claw cocked back, the other braced forward. EXPRESSION: taut, predatory, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): armored mantis-shrimp-kin with plated carapace and striking gauntlets, club-claws cocked back, a reef-cloak.
COLOR (exact hex values, flat fills): main #ca148b about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffd60a about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #023e8a about 10%, used on the eyes, the Club-claws and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Bruiser (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Punch-Claw Duelists with no people, creatures, figures, silhouettes or text. Midground: a flooded stadium with a duel ring marked in the floor, shattered glass. Foreground: a scoreboard, a collapsed bleacher, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #ca148b for the biggest glowing sources and surfaces, secondary #ffd60a for medium panels, banners and lights, pop #023e8a for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Prism Gunners  `prismgunners`

*Sixteen colors. One shot.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | armored with stalked eyes; medium size; mobility: aquatic |
| Ethnicity + nationality | mantis shrimp-kin (not human) |
| Identity | female being, character |
| Wardrobe | mantis-shrimp-kin with stalked independent eyes behind multi-lens goggles, a prism rifle in both hands, a bandolier of color-coded ammo, a reef-cloak |
| Accessories | Prism rifle; multi-lens goggles; color-coded ammo; reef-cloak |
| Pose | braced firing stance with a prism rifle |
| Facial expression | fiercely focused, stalk-eyes aimed in different directions |
| People | Were-Creature |
| Class | Mantis Shrimp-kin |
| Subclass | Prism Gunners |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | braced firing stance with a prism rifle; the Prism rifle and the multi-lens goggles break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #4dfff2: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #f15bb5: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #9b5de5: the eyes, the Prism rifle and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as braced firing stance with a prism rifle.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Prism rifle and the pose must be visible at 64 px.
4. Flat colors: #4dfff2 / #f15bb5 / #9b5de5 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Prism rifle and multi-lens goggles and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #4dfff2 / #f15bb5 / #9b5de5 (about 20%) |
| Midground | a reef-fort firing line with a gun rack, a stack of ammo crates |
| Foreground | a prism target board, a glowing lens array |
| Character-relevant items | a reef-fort firing line with a gun rack, a stack of ammo crates, a prism target board, a glowing lens array |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Prism Gunners, female being, character (mantis shrimp-kin (not human)), apparent age early 70s.
DESIGN FOR SILHOUETTE FIRST: braced firing stance with a prism rifle; the Prism rifle and the multi-lens goggles break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: armored with stalked eyes, medium size, aquatic. POSE: braced firing stance with a prism rifle. EXPRESSION: fiercely focused, stalk-eyes aimed in different directions, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): mantis-shrimp-kin with stalked independent eyes behind multi-lens goggles, a prism rifle in both hands, a bandolier of color-coded ammo, a reef-cloak.
COLOR (exact hex values, flat fills): main #4dfff2 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #f15bb5 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #9b5de5 about 10%, used on the eyes, the Prism rifle and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Prism Gunners with no people, creatures, figures, silhouettes or text. Midground: a reef-fort firing line with a gun rack, a stack of ammo crates. Foreground: a prism target board, a glowing lens array, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #4dfff2 for the biggest glowing sources and surfaces, secondary #f15bb5 for medium panels, banners and lights, pop #9b5de5 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Reef Shell-Guard  `reefshellguard`

*Behind the shell.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | heavily armored; large size; mobility: aquatic |
| Ethnicity + nationality | mantis shrimp-kin (not human) |
| Identity | male being, character |
| Wardrobe | heavily armored mantis-shrimp-kin in a helmet, a ridged shell shield on one arm, a short club-claw in the other hand |
| Accessories | Shell shield; plated carapace; short club-claws; helmet |
| Pose | crouched behind a ridged shield, short claw ready |
| Facial expression | grim, unmoved |
| People | Were-Creature |
| Class | Mantis Shrimp-kin |
| Subclass | Reef Shell-Guard |
| Type | Tank |
| Combat or support | Combat |
| Silhouette hook | crouched behind a ridged shield, short claw ready; the Shell shield and the plated carapace break the outline so it reads instantly as a black shape |
| Shape language | wide blocky rectangles and a big shield shape |
| Main color (60%) | #e95cbf: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #118ab2: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #ffd166: the eyes, the Shell shield and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as crouched behind a ridged shield, short claw ready.
2. Few large shapes: wide blocky rectangles and a big shield shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Shell shield and the pose must be visible at 64 px.
4. Flat colors: #e95cbf / #118ab2 / #ffd166 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Shell shield and plated carapace and the tank shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #e95cbf / #118ab2 / #ffd166 (about 20%) |
| Midground | a reef-fort gate with ridged walls, a drawbridge |
| Foreground | barnacled barricades, a watchtower |
| Character-relevant items | a reef-fort gate with ridged walls, a drawbridge, barnacled barricades, a watchtower |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Reef Shell-Guard, male being, character (mantis shrimp-kin (not human)), apparent age late 20s.
DESIGN FOR SILHOUETTE FIRST: crouched behind a ridged shield, short claw ready; the Shell shield and the plated carapace break the outline so it reads instantly as a black shape. Shape language: wide blocky rectangles and a big shield shape.
BODY: heavily armored, large size, aquatic. POSE: crouched behind a ridged shield, short claw ready. EXPRESSION: grim, unmoved, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): heavily armored mantis-shrimp-kin in a helmet, a ridged shell shield on one arm, a short club-claw in the other hand.
COLOR (exact hex values, flat fills): main #e95cbf about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #118ab2 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #ffd166 about 10%, used on the eyes, the Shell shield and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Tank (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Reef Shell-Guard with no people, creatures, figures, silhouettes or text. Midground: a reef-fort gate with ridged walls, a drawbridge. Foreground: barnacled barricades, a watchtower, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #e95cbf for the biggest glowing sources and surfaces, secondary #118ab2 for medium panels, banners and lights, pop #ffd166 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Were-Creature › Moth-kin

### Lantern Cultists  `lanterncultists`

*Follow the light. Burn for it.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | slim and winged; medium size; mobility: flying |
| Ethnicity + nationality | moth-kin (not human) |
| Identity | female being, character |
| Wardrobe | moth-kin with huge eye-patterned wings in ash-dusted robes, a lantern staff in one hand, a flare launcher in the other, a signal mirror at the belt |
| Accessories | Flare launcher; lantern staff; ash-dusted robes; signal mirror |
| Pose | lantern staff raised, flare launcher cocked on the hip |
| Facial expression | rapt, glowing devotion |
| People | Were-Creature |
| Class | Moth-kin |
| Subclass | Lantern Cultists |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | lantern staff raised, flare launcher cocked on the hip; the Flare launcher and the lantern staff break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #d7ce04: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #cc0b38: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #410f1f: the eyes, the Flare launcher and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as lantern staff raised, flare launcher cocked on the hip.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Flare launcher and the pose must be visible at 64 px.
4. Flat colors: #d7ce04 / #cc0b38 / #410f1f as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Flare launcher and lantern staff and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #d7ce04 / #cc0b38 / #410f1f (about 20%) |
| Midground | a dead lighthouse-like beacon tower, a shrine of candles and lamps |
| Foreground | a ring of lanterns on poles, a burnt-out truck |
| Character-relevant items | a dead lighthouse-like beacon tower, a shrine of candles and lamps, a ring of lanterns on poles, a burnt-out truck |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Lantern Cultists, female being, character (moth-kin (not human)), apparent age late 20s.
DESIGN FOR SILHOUETTE FIRST: lantern staff raised, flare launcher cocked on the hip; the Flare launcher and the lantern staff break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: slim and winged, medium size, flying. POSE: lantern staff raised, flare launcher cocked on the hip. EXPRESSION: rapt, glowing devotion, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): moth-kin with huge eye-patterned wings in ash-dusted robes, a lantern staff in one hand, a flare launcher in the other, a signal mirror at the belt.
COLOR (exact hex values, flat fills): main #d7ce04 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #cc0b38 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #410f1f about 10%, used on the eyes, the Flare launcher and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Lantern Cultists with no people, creatures, figures, silhouettes or text. Midground: a dead lighthouse-like beacon tower, a shrine of candles and lamps. Foreground: a ring of lanterns on poles, a burnt-out truck, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #d7ce04 for the biggest glowing sources and surfaces, secondary #cc0b38 for medium panels, banners and lights, pop #410f1f for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Dreamdust Weavers  `dreamdustweavers`

*Sleep well. Fight better.*

**Character**

| Field | Value |
|---|---|
| Gender | Nonbinary |
| Physique | delicate and winged; medium size; mobility: flying |
| Ethnicity + nationality | moth-kin (not human) |
| Identity | nonbinary being, character |
| Wardrobe | moth-kin with shimmering dusty wings in a shawl, a feather-duster staff in one hand, a satchel and pots of scale-powder at the belt |
| Accessories | Dust-satchel; feather duster staff; scale-powder pots; shawl |
| Pose | shaking glowing dust from a feather duster over an ally |
| Facial expression | drowsy, dreamy smile |
| People | Were-Creature |
| Class | Moth-kin |
| Subclass | Dreamdust Weavers |
| Type | Enchanter |
| Combat or support | Support |
| Silhouette hook | shaking glowing dust from a feather duster over an ally; the Dust-satchel and the feather duster staff break the outline so it reads instantly as a black shape |
| Shape language | circles and stars around a charm, instrument or talisman |
| Main color (60%) | #b668f9: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffc8dd: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #2e0d52: the eyes, the Dust-satchel and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as shaking glowing dust from a feather duster over an ally.
2. Few large shapes: circles and stars around a charm, instrument or talisman; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Dust-satchel and the pose must be visible at 64 px.
4. Flat colors: #b668f9 / #ffc8dd / #2e0d52 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Dust-satchel and feather duster staff and the enchanter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #b668f9 / #ffc8dd / #2e0d52 (about 20%) |
| Midground | a dream-parlor with hanging dust-curtains, a bed with a lamp |
| Foreground | a glowing dust machine, a wall of music boxes |
| Character-relevant items | a dream-parlor with hanging dust-curtains, a bed with a lamp, a glowing dust machine, a wall of music boxes |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Dreamdust Weavers, nonbinary being, character (moth-kin (not human)), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: shaking glowing dust from a feather duster over an ally; the Dust-satchel and the feather duster staff break the outline so it reads instantly as a black shape. Shape language: circles and stars around a charm, instrument or talisman.
BODY: delicate and winged, medium size, flying. POSE: shaking glowing dust from a feather duster over an ally. EXPRESSION: drowsy, dreamy smile, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): moth-kin with shimmering dusty wings in a shawl, a feather-duster staff in one hand, a satchel and pots of scale-powder at the belt.
COLOR (exact hex values, flat fills): main #b668f9 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffc8dd about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #2e0d52 about 10%, used on the eyes, the Dust-satchel and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Enchanter (support) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Dreamdust Weavers with no people, creatures, figures, silhouettes or text. Midground: a dream-parlor with hanging dust-curtains, a bed with a lamp. Foreground: a glowing dust machine, a wall of music boxes, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #b668f9 for the biggest glowing sources and surfaces, secondary #ffc8dd for medium panels, banners and lights, pop #2e0d52 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Signal-Tower Wardens  `signaltowerwardens`

*Keep the old signal alive.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | slim and winged; medium size; mobility: climbing |
| Ethnicity + nationality | moth-kin (not human) |
| Identity | male being, character |
| Wardrobe | moth-kin in a radio headset and a harness with an antenna pack, climbing gear on the belt, a signal rod held in both hands |
| Accessories | Signal rod; radio headset; antenna pack; climbing harness |
| Pose | climbing stance, signal rod pointed outward |
| Facial expression | alert, antennae twitching |
| People | Were-Creature |
| Class | Moth-kin |
| Subclass | Signal-Tower Wardens |
| Type | Caster |
| Combat or support | Combat |
| Silhouette hook | climbing stance, signal rod pointed outward; the Signal rod and the radio headset break the outline so it reads instantly as a black shape |
| Shape language | flowing diamonds and a bright flat focus shape |
| Main color (60%) | #30a8f5: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #f72585: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #4a4e69: the eyes, the Signal rod and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as climbing stance, signal rod pointed outward.
2. Few large shapes: flowing diamonds and a bright flat focus shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Signal rod and the pose must be visible at 64 px.
4. Flat colors: #30a8f5 / #f72585 / #4a4e69 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Signal rod and radio headset and the caster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #30a8f5 / #f72585 / #4a4e69 (about 20%) |
| Midground | a dead radio tower with a service ladder, a transmitter shack, a satellite dish |
| Foreground | cable bundles, a flickering beacon |
| Character-relevant items | a dead radio tower with a service ladder, a transmitter shack, a satellite dish, cable bundles, a flickering beacon |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Signal-Tower Wardens, male being, character (moth-kin (not human)), apparent age late 20s.
DESIGN FOR SILHOUETTE FIRST: climbing stance, signal rod pointed outward; the Signal rod and the radio headset break the outline so it reads instantly as a black shape. Shape language: flowing diamonds and a bright flat focus shape.
BODY: slim and winged, medium size, climbing. POSE: climbing stance, signal rod pointed outward. EXPRESSION: alert, antennae twitching, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): moth-kin in a radio headset and a harness with an antenna pack, climbing gear on the belt, a signal rod held in both hands.
COLOR (exact hex values, flat fills): main #30a8f5 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #f72585 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #4a4e69 about 10%, used on the eyes, the Signal rod and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Caster (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Signal-Tower Wardens with no people, creatures, figures, silhouettes or text. Midground: a dead radio tower with a service ladder, a transmitter shack, a satellite dish. Foreground: cable bundles, a flickering beacon, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #30a8f5 for the biggest glowing sources and surfaces, secondary #f72585 for medium panels, banners and lights, pop #4a4e69 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Were-Creature › Pangolin-kin

### Plate-Wall Bulwarks  `platewallbulwarks`

*Layered. Impenetrable.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | armored in overlapping plates; large size; mobility: grounded |
| Ethnicity + nationality | pangolin-kin (not human) |
| Identity | female being, character |
| Wardrobe | pangolin-kin in layered salvage-plate armor with overlapping scales, a tower shield on one arm and a hand-forged mace in the other |
| Accessories | Layered plate armor; tower shield; hand-forged mace; shoulder plates |
| Pose | planted wide behind a tower shield, mace raised |
| Facial expression | unshakable, jaw set |
| People | Were-Creature |
| Class | Pangolin-kin |
| Subclass | Plate-Wall Bulwarks |
| Type | Tank |
| Combat or support | Combat |
| Silhouette hook | planted wide behind a tower shield, mace raised; the Layered plate armor and the tower shield break the outline so it reads instantly as a black shape |
| Shape language | wide blocky rectangles and a big shield shape |
| Main color (60%) | #febab2: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #4a4e69: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fdce53: the eyes, the Layered plate armor and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as planted wide behind a tower shield, mace raised.
2. Few large shapes: wide blocky rectangles and a big shield shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Layered plate armor and the pose must be visible at 64 px.
4. Flat colors: #febab2 / #4a4e69 / #fdce53 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Layered plate armor and tower shield and the tank shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #febab2 / #4a4e69 / #fdce53 (about 20%) |
| Midground | a barricaded bunker gate with a portcullis, stacks of spare plates |
| Foreground | a forge with an anvil, a wall of steel doors |
| Character-relevant items | a barricaded bunker gate with a portcullis, stacks of spare plates, a forge with an anvil, a wall of steel doors |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Plate-Wall Bulwarks, female being, character (pangolin-kin (not human)), apparent age mid 30s.
DESIGN FOR SILHOUETTE FIRST: planted wide behind a tower shield, mace raised; the Layered plate armor and the tower shield break the outline so it reads instantly as a black shape. Shape language: wide blocky rectangles and a big shield shape.
BODY: armored in overlapping plates, large size, grounded. POSE: planted wide behind a tower shield, mace raised. EXPRESSION: unshakable, jaw set, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): pangolin-kin in layered salvage-plate armor with overlapping scales, a tower shield on one arm and a hand-forged mace in the other.
COLOR (exact hex values, flat fills): main #febab2 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #4a4e69 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fdce53 about 10%, used on the eyes, the Layered plate armor and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Tank (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Plate-Wall Bulwarks with no people, creatures, figures, silhouettes or text. Midground: a barricaded bunker gate with a portcullis, stacks of spare plates. Foreground: a forge with an anvil, a wall of steel doors, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #febab2 for the biggest glowing sources and surfaces, secondary #4a4e69 for medium panels, banners and lights, pop #fdce53 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Tunnel Diggers  `tunneldiggers`

*Under you. Around you.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | stocky with huge claws; medium size; mobility: burrowing |
| Ethnicity + nationality | pangolin-kin (not human) |
| Identity | male being, character |
| Wardrobe | pangolin-kin in a mining helmet with a shaft-lamp, huge digging claws, a belt of dynamite sticks |
| Accessories | Digging claws; mining helmet; shaft-lamp; dynamite belt |
| Pose | bursting up through the ground with both claws out |
| Facial expression | gritty, determined |
| People | Were-Creature |
| Class | Pangolin-kin |
| Subclass | Tunnel Diggers |
| Type | Bruiser |
| Combat or support | Combat |
| Silhouette hook | bursting up through the ground with both claws out; the Digging claws and the mining helmet break the outline so it reads instantly as a black shape |
| Shape language | heavy trapezoids, oversized fists and shoulders |
| Main color (60%) | #663502: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #f4a261: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #264653: the eyes, the Digging claws and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as bursting up through the ground with both claws out.
2. Few large shapes: heavy trapezoids, oversized fists and shoulders; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Digging claws and the pose must be visible at 64 px.
4. Flat colors: #663502 / #f4a261 / #264653 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Digging claws and mining helmet and the bruiser shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #663502 / #f4a261 / #264653 (about 20%) |
| Midground | a mine tunnel with timber supports, a mine cart on rails, a drill rig |
| Foreground | a collapsed ceiling, a dynamite crate |
| Character-relevant items | a mine tunnel with timber supports, a mine cart on rails, a drill rig, a collapsed ceiling, a dynamite crate |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Tunnel Diggers, male being, character (pangolin-kin (not human)), apparent age late 20s.
DESIGN FOR SILHOUETTE FIRST: bursting up through the ground with both claws out; the Digging claws and the mining helmet break the outline so it reads instantly as a black shape. Shape language: heavy trapezoids, oversized fists and shoulders.
BODY: stocky with huge claws, medium size, burrowing. POSE: bursting up through the ground with both claws out. EXPRESSION: gritty, determined, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): pangolin-kin in a mining helmet with a shaft-lamp, huge digging claws, a belt of dynamite sticks.
COLOR (exact hex values, flat fills): main #663502 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #f4a261 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #264653 about 10%, used on the eyes, the Digging claws and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Bruiser (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Tunnel Diggers with no people, creatures, figures, silhouettes or text. Midground: a mine tunnel with timber supports, a mine cart on rails, a drill rig. Foreground: a collapsed ceiling, a dynamite crate, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #663502 for the biggest glowing sources and surfaces, secondary #f4a261 for medium panels, banners and lights, pop #264653 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Curl-Ball Rollers  `curlballrollers`

*Roll out.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | armored and round; medium size; mobility: grounded |
| Ethnicity + nationality | pangolin-kin (not human) |
| Identity | male being, character |
| Wardrobe | pangolin-kin in spiked plates and a charge helm with goggles, a rolling harness across the chest, half curled forward ready to roll |
| Accessories | Spiked plates; rolling harness; charge helm; goggles |
| Pose | half curled forward, about to roll |
| Facial expression | wild-eyed thrill |
| People | Were-Creature |
| Class | Pangolin-kin |
| Subclass | Curl-Ball Rollers |
| Type | Bruiser |
| Combat or support | Combat |
| Silhouette hook | half curled forward, about to roll; the Spiked plates and the rolling harness break the outline so it reads instantly as a black shape |
| Shape language | heavy trapezoids, oversized fists and shoulders |
| Main color (60%) | #e5f102: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #fd4d50: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #3a0ca3: the eyes, the Spiked plates and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as half curled forward, about to roll.
2. Few large shapes: heavy trapezoids, oversized fists and shoulders; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Spiked plates and the pose must be visible at 64 px.
4. Flat colors: #e5f102 / #fd4d50 / #3a0ca3 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Spiked plates and rolling harness and the bruiser shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #e5f102 / #fd4d50 / #3a0ca3 (about 20%) |
| Midground | a steep rubble hill with a ramp, a line of wrecked barricades to knock down |
| Foreground | a banked racing track, skid marks |
| Character-relevant items | a steep rubble hill with a ramp, a line of wrecked barricades to knock down, a banked racing track, skid marks |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Curl-Ball Rollers, male being, character (pangolin-kin (not human)), apparent age mid 40s.
DESIGN FOR SILHOUETTE FIRST: half curled forward, about to roll; the Spiked plates and the rolling harness break the outline so it reads instantly as a black shape. Shape language: heavy trapezoids, oversized fists and shoulders.
BODY: armored and round, medium size, grounded. POSE: half curled forward, about to roll. EXPRESSION: wild-eyed thrill, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): pangolin-kin in spiked plates and a charge helm with goggles, a rolling harness across the chest, half curled forward ready to roll.
COLOR (exact hex values, flat fills): main #e5f102 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #fd4d50 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #3a0ca3 about 10%, used on the eyes, the Spiked plates and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Bruiser (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Curl-Ball Rollers with no people, creatures, figures, silhouettes or text. Midground: a steep rubble hill with a ramp, a line of wrecked barricades to knock down. Foreground: a banked racing track, skid marks, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #e5f102 for the biggest glowing sources and surfaces, secondary #fd4d50 for medium panels, banners and lights, pop #3a0ca3 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Were-Creature › Spider-kin

### Loomweavers  `loomweavers`

*The trap is already built.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | many-limbed and slender; medium size; mobility: climbing |
| Ethnicity + nationality | spider-kin (not human) |
| Identity | female being, character |
| Wardrobe | many-limbed spider-kin in a silk-and-wire coat, a spinneret gauntlet, a spool of razor-wire at the belt, hook knives in two hands |
| Accessories | Spool of razor-wire; spinneret gauntlet; silk shawl; hook knives |
| Pose | pulling taut threads of wire with all four hands |
| Facial expression | serene, intent |
| People | Were-Creature |
| Class | Spider-kin |
| Subclass | Loomweavers |
| Type | Controller |
| Combat or support | Combat |
| Silhouette hook | pulling taut threads of wire with all four hands; the Spool of razor-wire and the spinneret gauntlet break the outline so it reads instantly as a black shape |
| Shape language | hexagons and wide arc gestures with tools hanging off the body |
| Main color (60%) | #e0aaff: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #06d6a0: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #201c49: the eyes, the Spool of razor-wire and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as pulling taut threads of wire with all four hands.
2. Few large shapes: hexagons and wide arc gestures with tools hanging off the body; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Spool of razor-wire and the pose must be visible at 64 px.
4. Flat colors: #e0aaff / #06d6a0 / #201c49 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Spool of razor-wire and spinneret gauntlet and the controller shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #e0aaff / #06d6a0 / #201c49 (about 20%) |
| Midground | a giant web of copper wire strung across a ruined hall, a loom, spools of wire on racks |
| Foreground | hanging snares, a pylon |
| Character-relevant items | a giant web of copper wire strung across a ruined hall, a loom, spools of wire on racks, hanging snares, a pylon |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Loomweavers, female being, character (spider-kin (not human)), apparent age early 30s.
DESIGN FOR SILHOUETTE FIRST: pulling taut threads of wire with all four hands; the Spool of razor-wire and the spinneret gauntlet break the outline so it reads instantly as a black shape. Shape language: hexagons and wide arc gestures with tools hanging off the body.
BODY: many-limbed and slender, medium size, climbing. POSE: pulling taut threads of wire with all four hands. EXPRESSION: serene, intent, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): many-limbed spider-kin in a silk-and-wire coat, a spinneret gauntlet, a spool of razor-wire at the belt, hook knives in two hands.
COLOR (exact hex values, flat fills): main #e0aaff about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #06d6a0 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #201c49 about 10%, used on the eyes, the Spool of razor-wire and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Controller (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Loomweavers with no people, creatures, figures, silhouettes or text. Midground: a giant web of copper wire strung across a ruined hall, a loom, spools of wire on racks. Foreground: hanging snares, a pylon, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #e0aaff for the biggest glowing sources and surfaces, secondary #06d6a0 for medium panels, banners and lights, pop #201c49 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Silkroad Messengers  `silkroad`

*The message arrives first.*

**Character**

| Field | Value |
|---|---|
| Gender | Nonbinary |
| Physique | slim and agile; small size; mobility: climbing |
| Ethnicity + nationality | spider-kin (not human) |
| Identity | nonbinary being, character |
| Wardrobe | upside-down spider-kin hanging from a thread, a courier bag across the body, a hand-crank radio at the hip, a tiny cap, a letter held in one limb |
| Accessories | Courier bag; signal spool; hand-crank radio; tiny cap |
| Pose | hanging upside-down from a thread, letter in one limb |
| Facial expression | cheerful and brisk |
| People | Were-Creature |
| Class | Spider-kin |
| Subclass | Silkroad Messengers |
| Type | Support |
| Combat or support | Support |
| Silhouette hook | hanging upside-down from a thread, letter in one limb; the Courier bag and the signal spool break the outline so it reads instantly as a black shape |
| Shape language | soft rounded rectangles with an open palm and a visible kit |
| Main color (60%) | #dc8495: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #4ecdc4: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff3b0: the eyes, the Courier bag and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as hanging upside-down from a thread, letter in one limb.
2. Few large shapes: soft rounded rectangles with an open palm and a visible kit; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Courier bag and the pose must be visible at 64 px.
4. Flat colors: #dc8495 / #4ecdc4 / #fff3b0 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Courier bag and signal spool and the support shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #dc8495 / #4ecdc4 / #fff3b0 (about 20%) |
| Midground | a cable-road junction with strung lines across a canyon, a mail sorting station |
| Foreground | a dead telephone pole, a letterbox wall |
| Character-relevant items | a cable-road junction with strung lines across a canyon, a mail sorting station, a dead telephone pole, a letterbox wall |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Silkroad Messengers, nonbinary being, character (spider-kin (not human)), apparent age early 40s.
DESIGN FOR SILHOUETTE FIRST: hanging upside-down from a thread, letter in one limb; the Courier bag and the signal spool break the outline so it reads instantly as a black shape. Shape language: soft rounded rectangles with an open palm and a visible kit.
BODY: slim and agile, small size, climbing. POSE: hanging upside-down from a thread, letter in one limb. EXPRESSION: cheerful and brisk, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): upside-down spider-kin hanging from a thread, a courier bag across the body, a hand-crank radio at the hip, a tiny cap, a letter held in one limb.
COLOR (exact hex values, flat fills): main #dc8495 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #4ecdc4 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff3b0 about 10%, used on the eyes, the Courier bag and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Support (support) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Silkroad Messengers with no people, creatures, figures, silhouettes or text. Midground: a cable-road junction with strung lines across a canyon, a mail sorting station. Foreground: a dead telephone pole, a letterbox wall, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #dc8495 for the biggest glowing sources and surfaces, secondary #4ecdc4 for medium panels, banners and lights, pop #fff3b0 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Dewdrop Dancers  `dewdrop`

*Tiny. Quick. Everywhere.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | tiny and acrobatic; tiny size; mobility: agile |
| Ethnicity + nationality | jumping spider-kin (not human) |
| Identity | female being, character |
| Wardrobe | tiny jumping-spider-kin in a tiny cape and jump-boots, a hooked blade in each of two hands, a dewdrop-shaped buckler |
| Accessories | Twin hooked blades; jump-boots; dewdrop buckler; tiny cape |
| Pose | mid-leap with both blades flashing |
| Facial expression | mischievous glee |
| People | Were-Creature |
| Class | Spider-kin |
| Subclass | Dewdrop Dancers |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | mid-leap with both blades flashing; the Twin hooked blades and the jump-boots break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #fe73e6: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #90e0ef: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff1e6: the eyes, the Twin hooked blades and one small magical detail |
| Natural base tones | Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as mid-leap with both blades flashing.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Twin hooked blades and the pose must be visible at 64 px.
4. Flat colors: #fe73e6 / #90e0ef / #fff1e6 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Twin hooked blades and jump-boots and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles |
| Colors | wash #b4532a (about 65%); accents #fe73e6 / #90e0ef / #fff1e6 (about 20%) |
| Midground | a treetop acrobat arena with hanging hoops and ropes, trampolines of woven silk |
| Foreground | dew-covered leaves, a spotlight |
| Character-relevant items | a treetop acrobat arena with hanging hoops and ropes, trampolines of woven silk, dew-covered leaves, a spotlight |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Dewdrop Dancers, female being, character (jumping spider-kin (not human)), apparent age early 20s.
DESIGN FOR SILHOUETTE FIRST: mid-leap with both blades flashing; the Twin hooked blades and the jump-boots break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: tiny and acrobatic, tiny size, agile. POSE: mid-leap with both blades flashing. EXPRESSION: mischievous glee, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): tiny jumping-spider-kin in a tiny cape and jump-boots, a hooked blade in each of two hands, a dewdrop-shaped buckler.
COLOR (exact hex values, flat fills): main #fe73e6 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #90e0ef about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff1e6 about 10%, used on the eyes, the Twin hooked blades and one small magical detail. Black, white and neutral grey are also allowed. Natural fur, skin or shell base tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #b4532a on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Were-Creature people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a scrapyard war-den of rusted buses and tire-wall palisades, campfire barrels, hand-painted war totems, signal horns on tall poles. An empty environment for Dewdrop Dancers with no people, creatures, figures, silhouettes or text. Midground: a treetop acrobat arena with hanging hoops and ropes, trampolines of woven silk. Foreground: dew-covered leaves, a spotlight, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a RUST-washed painting. The people color #b4532a washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #fe73e6 for the biggest glowing sources and surfaces, secondary #90e0ef for medium panels, banners and lights, pop #fff1e6 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


---

# Ghost
*People color: Ice #8fcfe0. Background setting: a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog.*

**Tagline:** Dead, signal-bound and not done.  
**Classes:** Dead Air (Static Wraiths, Test-Pattern Seers, Emergency Broadcasters); Hollow Machines (Rust-Wraith Possessors, Cabinet Spirits, Circuit Seers); The Last Call (Last-Dance Revelers, Wake-Wardens, Redial Wraiths); The Lingerers (Highway Banshees, Billboard Haunts, Hospice Haunts)


## Ghost › Dead Air

### Static Wraiths  `staticwraiths`

*Snow on every screen.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | translucent and lean; medium size; mobility: phasing |
| Ethnicity + nationality | In life: Haitian heritage, Haitian |
| Identity | male being, character |
| Wardrobe | pale translucent ghost wrapped in a cloak of TV static, crackling gauntlets with antenna blades on the forearms, a cable trailing as a tail |
| Accessories | Antenna blades; static cloak; crackling gauntlets; cable tail |
| Pose | mid-lunge with blade-claws crossed, cable tail trailing |
| Facial expression | blank, hollow mask-face |
| People | Ghost |
| Class | Dead Air |
| Subclass | Static Wraiths |
| Type | Caster |
| Combat or support | Combat |
| Silhouette hook | mid-lunge with blade-claws crossed, cable tail trailing; the Antenna blades and the static cloak break the outline so it reads instantly as a black shape |
| Shape language | flowing diamonds and a bright flat focus shape |
| Main color (60%) | #076982: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #f72585: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff5da: the eyes, the Antenna blades and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Done: `art/v2/ghost-staticwraiths.png` and `art/v2/ghost-staticwraiths-bg.jpg` |
| Last vet | Final art accepted (made before the vetting pipeline) |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as mid-lunge with blade-claws crossed, cable tail trailing.
2. Few large shapes: flowing diamonds and a bright flat focus shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Antenna blades and the pose must be visible at 64 px.
4. Flat colors: #076982 / #f72585 / #fff5da as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Antenna blades and static cloak and the caster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog |
| Colors | wash #8fcfe0 (about 65%); accents #076982 / #f72585 / #fff5da (about 20%) |
| Midground | a wall of dead TV monitors playing white noise, a broadcast tower, tangled cables |
| Foreground | a satellite dish, a flickering test pattern screen |
| Character-relevant items | a wall of dead TV monitors playing white noise, a broadcast tower, tangled cables, a satellite dish, a flickering test pattern screen |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Static Wraiths, male being, character (In life: Haitian heritage, Haitian), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: mid-lunge with blade-claws crossed, cable tail trailing; the Antenna blades and the static cloak break the outline so it reads instantly as a black shape. Shape language: flowing diamonds and a bright flat focus shape.
BODY: translucent and lean, medium size, phasing. POSE: mid-lunge with blade-claws crossed, cable tail trailing. EXPRESSION: blank, hollow mask-face, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): pale translucent ghost wrapped in a cloak of TV static, crackling gauntlets with antenna blades on the forearms, a cable trailing as a tail.
COLOR (exact hex values, flat fills): main #076982 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #f72585 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff5da about 10%, used on the eyes, the Antenna blades and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #8fcfe0 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Caster (combat) of the Ghost people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog. An empty environment for Static Wraiths with no people, creatures, figures, silhouettes or text. Midground: a wall of dead TV monitors playing white noise, a broadcast tower, tangled cables. Foreground: a satellite dish, a flickering test pattern screen, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ICE-washed painting. The people color #8fcfe0 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #076982 for the biggest glowing sources and surfaces, secondary #f72585 for medium panels, banners and lights, pop #fff5da for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Test-Pattern Seers  `testpattern`

*Please stand by.*

**Character**

| Field | Value |
|---|---|
| Gender | Nonbinary |
| Physique | tall and striped; large size; mobility: phasing |
| Ethnicity + nationality | In life: Welsh heritage, Welsh |
| Identity | nonbinary being, character |
| Wardrobe | tall ghost with a striped color-bar face and a TV-tube visor, a prism lens in one hand, a small color-bar shield on the other arm, an antenna on the head |
| Accessories | Prism lens; color-bar shield; broadcast antenna; TV-head visor |
| Pose | raising a prism lens, color-bar shield forward |
| Facial expression | serene, striped face unmoving |
| People | Ghost |
| Class | Dead Air |
| Subclass | Test-Pattern Seers |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | raising a prism lens, color-bar shield forward; the Prism lens and the color-bar shield break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #ce8106: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #3a86ff: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #e63946: the eyes, the Prism lens and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as raising a prism lens, color-bar shield forward.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Prism lens and the pose must be visible at 64 px.
4. Flat colors: #ce8106 / #3a86ff / #e63946 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Prism lens and color-bar shield and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog |
| Colors | wash #8fcfe0 (about 65%); accents #ce8106 / #3a86ff / #e63946 (about 20%) |
| Midground | a dead broadcast studio with a huge color-bar test-pattern wall, studio cameras on dollies |
| Foreground | a control desk, a rack of monitors |
| Character-relevant items | a dead broadcast studio with a huge color-bar test-pattern wall, studio cameras on dollies, a control desk, a rack of monitors |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Test-Pattern Seers, nonbinary being, character (In life: Welsh heritage, Welsh), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: raising a prism lens, color-bar shield forward; the Prism lens and the color-bar shield break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: tall and striped, large size, phasing. POSE: raising a prism lens, color-bar shield forward. EXPRESSION: serene, striped face unmoving, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): tall ghost with a striped color-bar face and a TV-tube visor, a prism lens in one hand, a small color-bar shield on the other arm, an antenna on the head.
COLOR (exact hex values, flat fills): main #ce8106 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #3a86ff about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #e63946 about 10%, used on the eyes, the Prism lens and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #8fcfe0 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Ghost people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog. An empty environment for Test-Pattern Seers with no people, creatures, figures, silhouettes or text. Midground: a dead broadcast studio with a huge color-bar test-pattern wall, studio cameras on dollies. Foreground: a control desk, a rack of monitors, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ICE-washed painting. The people color #8fcfe0 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #ce8106 for the biggest glowing sources and surfaces, secondary #3a86ff for medium panels, banners and lights, pop #e63946 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Emergency Broadcasters  `emergencybroadcast`

*This is not a test.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | calm and translucent; medium size; mobility: phasing |
| Ethnicity + nationality | In life: Mexican heritage, Mexican |
| Identity | female being, character |
| Wardrobe | calm ghost in a translucent reflective vest, a siren horn held aloft in one hand, a hand-crank radio in the other, an emergency lamp at the belt |
| Accessories | Siren horn; emergency lamp; hand-crank radio; reflective vest |
| Pose | siren horn raised overhead, radio in the other hand |
| Facial expression | calm, steady, reassuring |
| People | Ghost |
| Class | Dead Air |
| Subclass | Emergency Broadcasters |
| Type | Support |
| Combat or support | Support |
| Silhouette hook | siren horn raised overhead, radio in the other hand; the Siren horn and the emergency lamp break the outline so it reads instantly as a black shape |
| Shape language | soft rounded rectangles with an open palm and a visible kit |
| Main color (60%) | #f67604: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #e4ffda: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #023e8a: the eyes, the Siren horn and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as siren horn raised overhead, radio in the other hand.
2. Few large shapes: soft rounded rectangles with an open palm and a visible kit; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Siren horn and the pose must be visible at 64 px.
4. Flat colors: #f67604 / #e4ffda / #023e8a as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Siren horn and emergency lamp and the support shape language.

**Background**

| Field | Value |
|---|---|
| Background | a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog |
| Colors | wash #8fcfe0 (about 65%); accents #f67604 / #e4ffda / #023e8a (about 20%) |
| Midground | an emergency-alert studio with a flashing red light, a wall of civil-defense signs |
| Foreground | a siren tower, a stack of supply crates |
| Character-relevant items | an emergency-alert studio with a flashing red light, a wall of civil-defense signs, a siren tower, a stack of supply crates |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Emergency Broadcasters, female being, character (In life: Mexican heritage, Mexican), apparent age early 20s.
DESIGN FOR SILHOUETTE FIRST: siren horn raised overhead, radio in the other hand; the Siren horn and the emergency lamp break the outline so it reads instantly as a black shape. Shape language: soft rounded rectangles with an open palm and a visible kit.
BODY: calm and translucent, medium size, phasing. POSE: siren horn raised overhead, radio in the other hand. EXPRESSION: calm, steady, reassuring, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): calm ghost in a translucent reflective vest, a siren horn held aloft in one hand, a hand-crank radio in the other, an emergency lamp at the belt.
COLOR (exact hex values, flat fills): main #f67604 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #e4ffda about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #023e8a about 10%, used on the eyes, the Siren horn and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #8fcfe0 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Support (support) of the Ghost people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog. An empty environment for Emergency Broadcasters with no people, creatures, figures, silhouettes or text. Midground: an emergency-alert studio with a flashing red light, a wall of civil-defense signs. Foreground: a siren tower, a stack of supply crates, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ICE-washed painting. The people color #8fcfe0 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #f67604 for the biggest glowing sources and surfaces, secondary #e4ffda for medium panels, banners and lights, pop #023e8a for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Ghost › Hollow Machines

### Rust-Wraith Possessors  `rustwraith`

*Drive me.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | hulking and vehicle-fused; large size; mobility: vehicle |
| Ethnicity + nationality | In life: Polish heritage, Polish |
| Identity | male being, character |
| Wardrobe | translucent ghost in a rust-colored cloak with glowing headlight-shaped eyes, a spectral blade shaped like a hood ornament in one hand |
| Accessories | Possessed wreck; hood-spirit blade; rust cloak; headlight eyes |
| Pose | hunched forward, hood-ornament blade slung back |
| Facial expression | scowling, headlight eyes ablaze |
| People | Ghost |
| Class | Hollow Machines |
| Subclass | Rust-Wraith Possessors |
| Type | Bruiser |
| Combat or support | Combat |
| Silhouette hook | hunched forward, hood-ornament blade slung back; the Possessed wreck and the hood-spirit blade break the outline so it reads instantly as a black shape |
| Shape language | heavy trapezoids, oversized fists and shoulders |
| Main color (60%) | #df9062: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #c2f4f6: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #002645: the eyes, the Possessed wreck and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as hunched forward, hood-ornament blade slung back.
2. Few large shapes: heavy trapezoids, oversized fists and shoulders; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Possessed wreck and the pose must be visible at 64 px.
4. Flat colors: #df9062 / #c2f4f6 / #002645 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Possessed wreck and hood-spirit blade and the bruiser shape language.

**Background**

| Field | Value |
|---|---|
| Background | a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog |
| Colors | wash #8fcfe0 (about 65%); accents #df9062 / #c2f4f6 / #002645 (about 20%) |
| Midground | a scrapyard of rusted wrecked cars with their hoods open, a crushed coupe, a tow truck |
| Foreground | a stack of tires, a flickering headlight |
| Character-relevant items | a scrapyard of rusted wrecked cars with their hoods open, a crushed coupe, a tow truck, a stack of tires, a flickering headlight |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Rust-Wraith Possessors, male being, character (In life: Polish heritage, Polish), apparent age mid 30s.
DESIGN FOR SILHOUETTE FIRST: hunched forward, hood-ornament blade slung back; the Possessed wreck and the hood-spirit blade break the outline so it reads instantly as a black shape. Shape language: heavy trapezoids, oversized fists and shoulders.
BODY: hulking and vehicle-fused, large size, vehicle. POSE: hunched forward, hood-ornament blade slung back. EXPRESSION: scowling, headlight eyes ablaze, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): translucent ghost in a rust-colored cloak with glowing headlight-shaped eyes, a spectral blade shaped like a hood ornament in one hand.
COLOR (exact hex values, flat fills): main #df9062 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #c2f4f6 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #002645 about 10%, used on the eyes, the Possessed wreck and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #8fcfe0 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Bruiser (combat) of the Ghost people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog. An empty environment for Rust-Wraith Possessors with no people, creatures, figures, silhouettes or text. Midground: a scrapyard of rusted wrecked cars with their hoods open, a crushed coupe, a tow truck. Foreground: a stack of tires, a flickering headlight, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ICE-washed painting. The people color #8fcfe0 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #df9062 for the biggest glowing sources and surfaces, secondary #c2f4f6 for medium panels, banners and lights, pop #002645 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Cabinet Spirits  `cabinetspirits`

*Game over is a rumor.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | blocky and pixelated; medium size; mobility: grounded |
| Ethnicity + nationality | In life: Japanese heritage, Japanese |
| Identity | male being, character |
| Wardrobe | ghost with a CRT monitor for a head and pixelated limbs, joystick staff in one hand, a score-ribbon across the chest, pixel-block gauntlets |
| Accessories | Pixel gauntlets; joystick staff; CRT-head; score-ribbon |
| Pose | firing a stream of sprites from pixel gauntlets |
| Facial expression | blank pixel grin on a screen-face |
| People | Ghost |
| Class | Hollow Machines |
| Subclass | Cabinet Spirits |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | firing a stream of sprites from pixel gauntlets; the Pixel gauntlets and the joystick staff break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #795ef1: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #00f5d4: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #ffd166: the eyes, the Pixel gauntlets and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as firing a stream of sprites from pixel gauntlets.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Pixel gauntlets and the pose must be visible at 64 px.
4. Flat colors: #795ef1 / #00f5d4 / #ffd166 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Pixel gauntlets and joystick staff and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog |
| Colors | wash #8fcfe0 (about 65%); accents #795ef1 / #00f5d4 / #ffd166 (about 20%) |
| Midground | a dark arcade hall full of glowing cabinets, a giant pixel-art mural, a claw machine |
| Foreground | a prize counter, a coin slot |
| Character-relevant items | a dark arcade hall full of glowing cabinets, a giant pixel-art mural, a claw machine, a prize counter, a coin slot |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Cabinet Spirits, male being, character (In life: Japanese heritage, Japanese), apparent age early 30s.
DESIGN FOR SILHOUETTE FIRST: firing a stream of sprites from pixel gauntlets; the Pixel gauntlets and the joystick staff break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: blocky and pixelated, medium size, grounded. POSE: firing a stream of sprites from pixel gauntlets. EXPRESSION: blank pixel grin on a screen-face, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): ghost with a CRT monitor for a head and pixelated limbs, joystick staff in one hand, a score-ribbon across the chest, pixel-block gauntlets.
COLOR (exact hex values, flat fills): main #795ef1 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #00f5d4 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #ffd166 about 10%, used on the eyes, the Pixel gauntlets and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #8fcfe0 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Ghost people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog. An empty environment for Cabinet Spirits with no people, creatures, figures, silhouettes or text. Midground: a dark arcade hall full of glowing cabinets, a giant pixel-art mural, a claw machine. Foreground: a prize counter, a coin slot, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ICE-washed painting. The people color #8fcfe0 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #795ef1 for the biggest glowing sources and surfaces, secondary #00f5d4 for medium panels, banners and lights, pop #ffd166 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Circuit Seers  `hardwaresurgeons`

*I see the trace.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | slender and wired; medium size; mobility: phasing |
| Ethnicity + nationality | In life: Indian heritage, Indian |
| Identity | female being, character |
| Wardrobe | slender ghost in a circuit-board mantle with jumper cables at the belt, a trace-lens in one hand and a thin probe in the other |
| Accessories | Trace-lens; jumper cables; circuit-board mantle; probe |
| Pose | probe extended toward a device, jumper cables trailing |
| Facial expression | curious, tilted head |
| People | Ghost |
| Class | Hollow Machines |
| Subclass | Circuit Seers |
| Type | Controller |
| Combat or support | Combat |
| Silhouette hook | probe extended toward a device, jumper cables trailing; the Trace-lens and the jumper cables break the outline so it reads instantly as a black shape |
| Shape language | hexagons and wide arc gestures with tools hanging off the body |
| Main color (60%) | #48d763: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #e63946: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #e4ffda: the eyes, the Trace-lens and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as probe extended toward a device, jumper cables trailing.
2. Few large shapes: hexagons and wide arc gestures with tools hanging off the body; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Trace-lens and the pose must be visible at 64 px.
4. Flat colors: #48d763 / #e63946 / #e4ffda as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Trace-lens and jumper cables and the controller shape language.

**Background**

| Field | Value |
|---|---|
| Background | a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog |
| Colors | wash #8fcfe0 (about 65%); accents #48d763 / #e63946 / #e4ffda (about 20%) |
| Midground | a ghostly computer lab with open machines on workbenches, a server rack |
| Foreground | a soldering station, a wall of oscilloscopes |
| Character-relevant items | a ghostly computer lab with open machines on workbenches, a server rack, a soldering station, a wall of oscilloscopes |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Circuit Seers, female being, character (In life: Indian heritage, Indian), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: probe extended toward a device, jumper cables trailing; the Trace-lens and the jumper cables break the outline so it reads instantly as a black shape. Shape language: hexagons and wide arc gestures with tools hanging off the body.
BODY: slender and wired, medium size, phasing. POSE: probe extended toward a device, jumper cables trailing. EXPRESSION: curious, tilted head, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): slender ghost in a circuit-board mantle with jumper cables at the belt, a trace-lens in one hand and a thin probe in the other.
COLOR (exact hex values, flat fills): main #48d763 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #e63946 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #e4ffda about 10%, used on the eyes, the Trace-lens and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #8fcfe0 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Controller (combat) of the Ghost people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog. An empty environment for Circuit Seers with no people, creatures, figures, silhouettes or text. Midground: a ghostly computer lab with open machines on workbenches, a server rack. Foreground: a soldering station, a wall of oscilloscopes, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ICE-washed painting. The people color #8fcfe0 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #48d763 for the biggest glowing sources and surfaces, secondary #e63946 for medium panels, banners and lights, pop #e4ffda for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Ghost › The Last Call

### Last-Dance Revelers  `lastdance`

*One more song.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | elegant and graceful; medium size; mobility: agile |
| Ethnicity + nationality | In life: Argentine heritage, Argentine |
| Identity | female being, character |
| Wardrobe | elegant ghost in a shimmering party coat mid-pirouette, a party blade in one hand and a sparkler in the other |
| Accessories | Ghostly party blade; sparkler; glittering coat; phantom turntable |
| Pose | mid-pirouette, party blade sweeping a circle |
| Facial expression | dreamy, lost in the music |
| People | Ghost |
| Class | The Last Call |
| Subclass | Last-Dance Revelers |
| Type | Fighter |
| Combat or support | Combat |
| Silhouette hook | mid-pirouette, party blade sweeping a circle; the Ghostly party blade and the sparkler break the outline so it reads instantly as a black shape |
| Shape language | balanced diagonals with one clear weapon line |
| Main color (60%) | #d24a78: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffd60a: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #3a0ca3: the eyes, the Ghostly party blade and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as mid-pirouette, party blade sweeping a circle.
2. Few large shapes: balanced diagonals with one clear weapon line; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Ghostly party blade and the pose must be visible at 64 px.
4. Flat colors: #d24a78 / #ffd60a / #3a0ca3 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Ghostly party blade and sparkler and the fighter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog |
| Colors | wash #8fcfe0 (about 65%); accents #d24a78 / #ffd60a / #3a0ca3 (about 20%) |
| Midground | a ruined party hall with a phantom turntable and speakers, a mirror ball, streamers |
| Foreground | a long banquet table, a bar |
| Character-relevant items | a ruined party hall with a phantom turntable and speakers, a mirror ball, streamers, a long banquet table, a bar |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Last-Dance Revelers, female being, character (In life: Argentine heritage, Argentine), apparent age late 20s.
DESIGN FOR SILHOUETTE FIRST: mid-pirouette, party blade sweeping a circle; the Ghostly party blade and the sparkler break the outline so it reads instantly as a black shape. Shape language: balanced diagonals with one clear weapon line.
BODY: elegant and graceful, medium size, agile. POSE: mid-pirouette, party blade sweeping a circle. EXPRESSION: dreamy, lost in the music, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): elegant ghost in a shimmering party coat mid-pirouette, a party blade in one hand and a sparkler in the other.
COLOR (exact hex values, flat fills): main #d24a78 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffd60a about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #3a0ca3 about 10%, used on the eyes, the Ghostly party blade and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #8fcfe0 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Fighter (combat) of the Ghost people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog. An empty environment for Last-Dance Revelers with no people, creatures, figures, silhouettes or text. Midground: a ruined party hall with a phantom turntable and speakers, a mirror ball, streamers. Foreground: a long banquet table, a bar, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ICE-washed painting. The people color #8fcfe0 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #d24a78 for the biggest glowing sources and surfaces, secondary #ffd60a for medium panels, banners and lights, pop #3a0ca3 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Wake-Wardens  `wakewardens`

*Rest easy. We'll watch.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | gentle and shrouded; medium size; mobility: phasing |
| Ethnicity + nationality | In life: Irish heritage, Irish |
| Identity | male being, character |
| Wardrobe | gentle ghost in a long shroud-cloak, a funeral bell in one hand, a candle lantern in the other, a memory book at the belt |
| Accessories | Funeral bell; candle lantern; shroud cloak; memory book |
| Pose | ringing a funeral bell, candle lantern held low |
| Facial expression | gentle, heavy-lidded |
| People | Ghost |
| Class | The Last Call |
| Subclass | Wake-Wardens |
| Type | Support |
| Combat or support | Support |
| Silhouette hook | ringing a funeral bell, candle lantern held low; the Funeral bell and the candle lantern break the outline so it reads instantly as a black shape |
| Shape language | soft rounded rectangles with an open palm and a visible kit |
| Main color (60%) | #878d71: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffb703: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #023047: the eyes, the Funeral bell and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as ringing a funeral bell, candle lantern held low.
2. Few large shapes: soft rounded rectangles with an open palm and a visible kit; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Funeral bell and the pose must be visible at 64 px.
4. Flat colors: #878d71 / #ffb703 / #023047 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Funeral bell and candle lantern and the support shape language.

**Background**

| Field | Value |
|---|---|
| Background | a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog |
| Colors | wash #8fcfe0 (about 65%); accents #878d71 / #ffb703 / #023047 (about 20%) |
| Midground | a quiet funeral parlor with rows of chairs, a coffin on a stand, hanging candles |
| Foreground | a wall of framed photographs, a wreath |
| Character-relevant items | a quiet funeral parlor with rows of chairs, a coffin on a stand, hanging candles, a wall of framed photographs, a wreath |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Wake-Wardens, male being, character (In life: Irish heritage, Irish), apparent age early 30s.
DESIGN FOR SILHOUETTE FIRST: ringing a funeral bell, candle lantern held low; the Funeral bell and the candle lantern break the outline so it reads instantly as a black shape. Shape language: soft rounded rectangles with an open palm and a visible kit.
BODY: gentle and shrouded, medium size, phasing. POSE: ringing a funeral bell, candle lantern held low. EXPRESSION: gentle, heavy-lidded, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): gentle ghost in a long shroud-cloak, a funeral bell in one hand, a candle lantern in the other, a memory book at the belt.
COLOR (exact hex values, flat fills): main #878d71 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffb703 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #023047 about 10%, used on the eyes, the Funeral bell and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #8fcfe0 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Support (support) of the Ghost people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog. An empty environment for Wake-Wardens with no people, creatures, figures, silhouettes or text. Midground: a quiet funeral parlor with rows of chairs, a coffin on a stand, hanging candles. Foreground: a wall of framed photographs, a wreath, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ICE-washed painting. The people color #8fcfe0 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #878d71 for the biggest glowing sources and surfaces, secondary #ffb703 for medium panels, banners and lights, pop #023047 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Redial Wraiths  `redialwraiths`

*Please try your call again.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | gaunt and wired; medium size; mobility: phasing |
| Ethnicity + nationality | In life: Korean heritage, South Korean |
| Identity | female being, character |
| Wardrobe | ghost in a headset with a rotary-dial blade in one hand, a coiled phone-cord whip in the other, a small answering-machine shield on the forearm |
| Accessories | Rotary-dial blade; phone-cord whip; headset; answering-machine shield |
| Pose | whip-cracking a phone-cord, rotary blade raised |
| Facial expression | tense, repeating stare |
| People | Ghost |
| Class | The Last Call |
| Subclass | Redial Wraiths |
| Type | Fighter |
| Combat or support | Combat |
| Silhouette hook | whip-cracking a phone-cord, rotary blade raised; the Rotary-dial blade and the phone-cord whip break the outline so it reads instantly as a black shape |
| Shape language | balanced diagonals with one clear weapon line |
| Main color (60%) | #6878a6: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #fb8500: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #1d3557: the eyes, the Rotary-dial blade and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as whip-cracking a phone-cord, rotary blade raised.
2. Few large shapes: balanced diagonals with one clear weapon line; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Rotary-dial blade and the pose must be visible at 64 px.
4. Flat colors: #6878a6 / #fb8500 / #1d3557 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Rotary-dial blade and phone-cord whip and the fighter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog |
| Colors | wash #8fcfe0 (about 65%); accents #6878a6 / #fb8500 / #1d3557 (about 20%) |
| Midground | a dead phone exchange with a switchboard, rows of rotary phones off the hook |
| Foreground | a phone booth, tangled phone lines |
| Character-relevant items | a dead phone exchange with a switchboard, rows of rotary phones off the hook, a phone booth, tangled phone lines |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Redial Wraiths, female being, character (In life: Korean heritage, South Korean), apparent age late 20s.
DESIGN FOR SILHOUETTE FIRST: whip-cracking a phone-cord, rotary blade raised; the Rotary-dial blade and the phone-cord whip break the outline so it reads instantly as a black shape. Shape language: balanced diagonals with one clear weapon line.
BODY: gaunt and wired, medium size, phasing. POSE: whip-cracking a phone-cord, rotary blade raised. EXPRESSION: tense, repeating stare, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): ghost in a headset with a rotary-dial blade in one hand, a coiled phone-cord whip in the other, a small answering-machine shield on the forearm.
COLOR (exact hex values, flat fills): main #6878a6 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #fb8500 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #1d3557 about 10%, used on the eyes, the Rotary-dial blade and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #8fcfe0 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Fighter (combat) of the Ghost people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog. An empty environment for Redial Wraiths with no people, creatures, figures, silhouettes or text. Midground: a dead phone exchange with a switchboard, rows of rotary phones off the hook. Foreground: a phone booth, tangled phone lines, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ICE-washed painting. The people color #8fcfe0 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #6878a6 for the biggest glowing sources and surfaces, secondary #fb8500 for medium panels, banners and lights, pop #1d3557 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Ghost › The Lingerers

### Highway Banshees  `highwaybanshees`

*Brake lights in the fog.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | tall and pale; medium size; mobility: phasing |
| Ethnicity + nationality | In life: Navajo heritage, American |
| Identity | female being, character |
| Wardrobe | pale ghost in a tattered long coat with a glowing brake-light lantern in one hand, a road-flare wand in the other, mouth open in a wail |
| Accessories | Brake-light lantern; road-flare wand; tattered coat; mile marker |
| Pose | arm out with a brake-light lantern, coat flaring |
| Facial expression | mouth open mid-wail |
| People | Ghost |
| Class | The Lingerers |
| Subclass | Highway Banshees |
| Type | Controller |
| Combat or support | Combat |
| Silhouette hook | arm out with a brake-light lantern, coat flaring; the Brake-light lantern and the road-flare wand break the outline so it reads instantly as a black shape |
| Shape language | hexagons and wide arc gestures with tools hanging off the body |
| Main color (60%) | #c4635a: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #e4ffda: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #4979a0: the eyes, the Brake-light lantern and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as arm out with a brake-light lantern, coat flaring.
2. Few large shapes: hexagons and wide arc gestures with tools hanging off the body; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Brake-light lantern and the pose must be visible at 64 px.
4. Flat colors: #c4635a / #e4ffda / #4979a0 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Brake-light lantern and road-flare wand and the controller shape language.

**Background**

| Field | Value |
|---|---|
| Background | a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog |
| Colors | wash #8fcfe0 (about 65%); accents #c4635a / #e4ffda / #4979a0 (about 20%) |
| Midground | a dark highway shoulder with a mile marker, a stalled car with brake lights, a guardrail |
| Foreground | a road sign, fog |
| Character-relevant items | a dark highway shoulder with a mile marker, a stalled car with brake lights, a guardrail, a road sign, fog |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Highway Banshees, female being, character (In life: Navajo heritage, American), apparent age late 30s.
DESIGN FOR SILHOUETTE FIRST: arm out with a brake-light lantern, coat flaring; the Brake-light lantern and the road-flare wand break the outline so it reads instantly as a black shape. Shape language: hexagons and wide arc gestures with tools hanging off the body.
BODY: tall and pale, medium size, phasing. POSE: arm out with a brake-light lantern, coat flaring. EXPRESSION: mouth open mid-wail, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): pale ghost in a tattered long coat with a glowing brake-light lantern in one hand, a road-flare wand in the other, mouth open in a wail.
COLOR (exact hex values, flat fills): main #c4635a about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #e4ffda about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #4979a0 about 10%, used on the eyes, the Brake-light lantern and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #8fcfe0 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Controller (combat) of the Ghost people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog. An empty environment for Highway Banshees with no people, creatures, figures, silhouettes or text. Midground: a dark highway shoulder with a mile marker, a stalled car with brake lights, a guardrail. Foreground: a road sign, fog, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ICE-washed painting. The people color #8fcfe0 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #c4635a for the biggest glowing sources and surfaces, secondary #e4ffda for medium panels, banners and lights, pop #4979a0 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Billboard Haunts  `billboardhaunts`

*Your face is on my wall.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | giant and frame-built; huge size; mobility: grounded |
| Ethnicity + nationality | In life: American advertising-era smile |
| Identity | male being, character |
| Wardrobe | giant ghost with a fixed smiling face-mask and neon-tube arms, scaffolding-frame shoulders |
| Accessories | Billboard frame; neon tubes; scaffolding; smiling mask |
| Pose | towering stance with neon-tube arms spread |
| Facial expression | fixed, painted grin |
| People | Ghost |
| Class | The Lingerers |
| Subclass | Billboard Haunts |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | towering stance with neon-tube arms spread; the Billboard frame and the neon tubes break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #96830b: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ff006e: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #3a86ff: the eyes, the Billboard frame and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as towering stance with neon-tube arms spread.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Billboard frame and the pose must be visible at 64 px.
4. Flat colors: #96830b / #ff006e / #3a86ff as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Billboard frame and neon tubes and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog |
| Colors | wash #8fcfe0 (about 65%); accents #96830b / #ff006e / #3a86ff (about 20%) |
| Midground | a huge faded billboard frame on a scaffold with neon tubes, a catwalk ladder |
| Foreground | a dead parking lot, a floodlight |
| Character-relevant items | a huge faded billboard frame on a scaffold with neon tubes, a catwalk ladder, a dead parking lot, a floodlight |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Billboard Haunts, male being, character (In life: American advertising-era smile), apparent age late 30s.
DESIGN FOR SILHOUETTE FIRST: towering stance with neon-tube arms spread; the Billboard frame and the neon tubes break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: giant and frame-built, huge size, grounded. POSE: towering stance with neon-tube arms spread. EXPRESSION: fixed, painted grin, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): giant ghost with a fixed smiling face-mask and neon-tube arms, scaffolding-frame shoulders.
COLOR (exact hex values, flat fills): main #96830b about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ff006e about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #3a86ff about 10%, used on the eyes, the Billboard frame and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #8fcfe0 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Ghost people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog. An empty environment for Billboard Haunts with no people, creatures, figures, silhouettes or text. Midground: a huge faded billboard frame on a scaffold with neon tubes, a catwalk ladder. Foreground: a dead parking lot, a floodlight, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ICE-washed painting. The people color #8fcfe0 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #96830b for the biggest glowing sources and surfaces, secondary #ff006e for medium panels, banners and lights, pop #3a86ff for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Hospice Haunts  `hospicehaunts`

*Visiting hours are over. Rest.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | quiet and pale; medium size; mobility: phasing |
| Ethnicity + nationality | In life: Nigerian heritage, Nigerian |
| Identity | female being, character |
| Wardrobe | quiet ghost in a pale nurse's coat and soft slippers, an IV-stand staff glowing in one hand, a clipboard in the other, a nurse's lantern at the belt |
| Accessories | Clipboard; nurse's lantern; IV-stand staff; soft slippers |
| Pose | leaning on an IV-stand staff, clipboard held to the chest |
| Facial expression | quiet, tender calm |
| People | Ghost |
| Class | The Lingerers |
| Subclass | Hospice Haunts |
| Type | Support |
| Combat or support | Support |
| Silhouette hook | leaning on an IV-stand staff, clipboard held to the chest; the Clipboard and the nurse's lantern break the outline so it reads instantly as a black shape |
| Shape language | soft rounded rectangles with an open palm and a visible kit |
| Main color (60%) | #a08bc1: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffafcc: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #eef6ff: the eyes, the Clipboard and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as leaning on an IV-stand staff, clipboard held to the chest.
2. Few large shapes: soft rounded rectangles with an open palm and a visible kit; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Clipboard and the pose must be visible at 64 px.
4. Flat colors: #a08bc1 / #ffafcc / #eef6ff as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Clipboard and nurse's lantern and the support shape language.

**Background**

| Field | Value |
|---|---|
| Background | a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog |
| Colors | wash #8fcfe0 (about 65%); accents #a08bc1 / #ffafcc / #eef6ff (about 20%) |
| Midground | an empty hospice ward with rows of beds, a rolling IV stand, a nurses' station |
| Foreground | a flickering corridor light, a wheelchair |
| Character-relevant items | an empty hospice ward with rows of beds, a rolling IV stand, a nurses' station, a flickering corridor light, a wheelchair |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Hospice Haunts, female being, character (In life: Nigerian heritage, Nigerian), apparent age early 20s.
DESIGN FOR SILHOUETTE FIRST: leaning on an IV-stand staff, clipboard held to the chest; the Clipboard and the nurse's lantern break the outline so it reads instantly as a black shape. Shape language: soft rounded rectangles with an open palm and a visible kit.
BODY: quiet and pale, medium size, phasing. POSE: leaning on an IV-stand staff, clipboard held to the chest. EXPRESSION: quiet, tender calm, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): quiet ghost in a pale nurse's coat and soft slippers, an IV-stand staff glowing in one hand, a clipboard in the other, a nurse's lantern at the belt.
COLOR (exact hex values, flat fills): main #a08bc1 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffafcc about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #eef6ff about 10%, used on the eyes, the Clipboard and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #8fcfe0 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Support (support) of the Ghost people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a dead broadcast station: racks of dark CRT monitors, cables drooping like willow branches, one flickering test-pattern screen, drifting fog. An empty environment for Hospice Haunts with no people, creatures, figures, silhouettes or text. Midground: an empty hospice ward with rows of beds, a rolling IV stand, a nurses' station. Foreground: a flickering corridor light, a wheelchair, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ICE-washed painting. The people color #8fcfe0 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #a08bc1 for the biggest glowing sources and surfaces, secondary #ffafcc for medium panels, banners and lights, pop #eef6ff for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


---

# Undead
*People color: Bone #bdb7a4. Background setting: a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts.*

**Tagline:** Not dead. Just on a very long shift.  
**Classes:** Dead Zone Legion (Riot-Line Bonebreakers, Rattle-Cannon Gunners, Drum-Major Stewards); Risen Labor Union (Demolition Crews, Wrecking-Ball Lumberers, Shop Stewards); Lich Bureaucracy (Soul Notaries, Phylactery Auditors, Contract Reapers); Reach Court (Sarcophagus Lancers, Gold-Mask Duelists, Embalmer Alchemists)


## Undead › Dead Zone Legion

### Riot-Line Bonebreakers  `bonebreakers`

*Square up.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | skeletal and armored; medium size; mobility: grounded |
| Ethnicity + nationality | In life: Spanish heritage, Spanish |
| Identity | male being, character |
| Wardrobe | rattling skeleton in a brass breastplate and helmet, a door-shield stenciled with a number on one arm, a bone mace in the other hand |
| Accessories | Door-shield; bone mace; brass breastplate; helmet |
| Pose | mace raised overhead behind a numbered door-shield |
| Facial expression | fixed skeletal grin |
| People | Undead |
| Class | Dead Zone Legion |
| Subclass | Riot-Line Bonebreakers |
| Type | Tank |
| Combat or support | Combat |
| Silhouette hook | mace raised overhead behind a numbered door-shield; the Door-shield and the bone mace break the outline so it reads instantly as a black shape |
| Shape language | wide blocky rectangles and a big shield shape |
| Main color (60%) | #88080a: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #fae4a8: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #faa307: the eyes, the Door-shield and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Done: `art/v2/undead-bonebreakers.png` and `art/v2/undead-bonebreakers-bg.jpg` |
| Last vet | Final art accepted (made before the vetting pipeline) |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as mace raised overhead behind a numbered door-shield.
2. Few large shapes: wide blocky rectangles and a big shield shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Door-shield and the pose must be visible at 64 px.
4. Flat colors: #88080a / #fae4a8 / #faa307 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Door-shield and bone mace and the tank shape language.

**Background**

| Field | Value |
|---|---|
| Background | a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts |
| Colors | wash #bdb7a4 (about 65%); accents #88080a / #fae4a8 / #faa307 (about 20%) |
| Midground | a barricaded corridor of lockers and sandbags, a row of door-shields leaning on a wall |
| Foreground | a blast door, a drill square |
| Character-relevant items | a barricaded corridor of lockers and sandbags, a row of door-shields leaning on a wall, a blast door, a drill square |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Riot-Line Bonebreakers, male being, character (In life: Spanish heritage, Spanish), apparent age late 40s.
DESIGN FOR SILHOUETTE FIRST: mace raised overhead behind a numbered door-shield; the Door-shield and the bone mace break the outline so it reads instantly as a black shape. Shape language: wide blocky rectangles and a big shield shape.
BODY: skeletal and armored, medium size, grounded. POSE: mace raised overhead behind a numbered door-shield. EXPRESSION: fixed skeletal grin, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): rattling skeleton in a brass breastplate and helmet, a door-shield stenciled with a number on one arm, a bone mace in the other hand.
COLOR (exact hex values, flat fills): main #88080a about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #fae4a8 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #faa307 about 10%, used on the eyes, the Door-shield and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #bdb7a4 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Tank (combat) of the Undead people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts. An empty environment for Riot-Line Bonebreakers with no people, creatures, figures, silhouettes or text. Midground: a barricaded corridor of lockers and sandbags, a row of door-shields leaning on a wall. Foreground: a blast door, a drill square, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BONE-washed painting. The people color #bdb7a4 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #88080a for the biggest glowing sources and surfaces, secondary #fae4a8 for medium panels, banners and lights, pop #faa307 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Rattle-Cannon Gunners  `rattlecannon`

*Fire at will. Reload at will.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | skeletal and angular; medium size; mobility: grounded |
| Ethnicity + nationality | In life: Ghanaian heritage, Ghanaian |
| Identity | female being, character |
| Wardrobe | grinning skeleton in a helmet with a forearm cannon, an ammo pouch of bone shards and a powder horn at the belt |
| Accessories | Forearm cannon; bone ammo pouch; powder horn; helmet |
| Pose | firing a forearm cannon in a spread of bone |
| Facial expression | grinning, jaw unhinged |
| People | Undead |
| Class | Dead Zone Legion |
| Subclass | Rattle-Cannon Gunners |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | firing a forearm cannon in a spread of bone; the Forearm cannon and the bone ammo pouch break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #8f5600: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #fae4a8: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #410f1f: the eyes, the Forearm cannon and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as firing a forearm cannon in a spread of bone.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Forearm cannon and the pose must be visible at 64 px.
4. Flat colors: #8f5600 / #fae4a8 / #410f1f as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Forearm cannon and bone ammo pouch and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts |
| Colors | wash #bdb7a4 (about 65%); accents #8f5600 / #fae4a8 / #410f1f (about 20%) |
| Midground | a firing line of sandbags and an ammo crate stack, a mounted siege cannon |
| Foreground | a target wall, a smoke-filled trench |
| Character-relevant items | a firing line of sandbags and an ammo crate stack, a mounted siege cannon, a target wall, a smoke-filled trench |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Rattle-Cannon Gunners, female being, character (In life: Ghanaian heritage, Ghanaian), apparent age late 50s.
DESIGN FOR SILHOUETTE FIRST: firing a forearm cannon in a spread of bone; the Forearm cannon and the bone ammo pouch break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: skeletal and angular, medium size, grounded. POSE: firing a forearm cannon in a spread of bone. EXPRESSION: grinning, jaw unhinged, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): grinning skeleton in a helmet with a forearm cannon, an ammo pouch of bone shards and a powder horn at the belt.
COLOR (exact hex values, flat fills): main #8f5600 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #fae4a8 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #410f1f about 10%, used on the eyes, the Forearm cannon and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #bdb7a4 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Undead people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts. An empty environment for Rattle-Cannon Gunners with no people, creatures, figures, silhouettes or text. Midground: a firing line of sandbags and an ammo crate stack, a mounted siege cannon. Foreground: a target wall, a smoke-filled trench, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BONE-washed painting. The people color #bdb7a4 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #8f5600 for the biggest glowing sources and surfaces, secondary #fae4a8 for medium panels, banners and lights, pop #410f1f for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Drum-Major Stewards  `drummajor`

*March. Steady. March.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | tall and skeletal; medium size; mobility: grounded |
| Ethnicity + nationality | In life: Cuban heritage, Cuban |
| Identity | male being, character |
| Wardrobe | grinning skeleton drum-major in a plumed helm, a baton in one hand, a banner pole in the other, a war-drum strapped to the front |
| Accessories | War-drum; baton; plumed helm; banner |
| Pose | marching mid-stride, baton raised over a war-drum |
| Facial expression | proud, plumed grin |
| People | Undead |
| Class | Dead Zone Legion |
| Subclass | Drum-Major Stewards |
| Type | Enchanter |
| Combat or support | Support |
| Silhouette hook | marching mid-stride, baton raised over a war-drum; the War-drum and the baton break the outline so it reads instantly as a black shape |
| Shape language | circles and stars around a charm, instrument or talisman |
| Main color (60%) | #a84a52: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffd60a: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #221c48: the eyes, the War-drum and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as marching mid-stride, baton raised over a war-drum.
2. Few large shapes: circles and stars around a charm, instrument or talisman; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the War-drum and the pose must be visible at 64 px.
4. Flat colors: #a84a52 / #ffd60a / #221c48 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by War-drum and baton and the enchanter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts |
| Colors | wash #bdb7a4 (about 65%); accents #a84a52 / #ffd60a / #221c48 (about 20%) |
| Midground | a parade ground with a reviewing stand, a column of banners, rows of drums |
| Foreground | a bandstand, a brass band stand |
| Character-relevant items | a parade ground with a reviewing stand, a column of banners, rows of drums, a bandstand, a brass band stand |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Drum-Major Stewards, male being, character (In life: Cuban heritage, Cuban), apparent age early 70s.
DESIGN FOR SILHOUETTE FIRST: marching mid-stride, baton raised over a war-drum; the War-drum and the baton break the outline so it reads instantly as a black shape. Shape language: circles and stars around a charm, instrument or talisman.
BODY: tall and skeletal, medium size, grounded. POSE: marching mid-stride, baton raised over a war-drum. EXPRESSION: proud, plumed grin, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): grinning skeleton drum-major in a plumed helm, a baton in one hand, a banner pole in the other, a war-drum strapped to the front.
COLOR (exact hex values, flat fills): main #a84a52 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffd60a about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #221c48 about 10%, used on the eyes, the War-drum and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #bdb7a4 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Enchanter (support) of the Undead people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts. An empty environment for Drum-Major Stewards with no people, creatures, figures, silhouettes or text. Midground: a parade ground with a reviewing stand, a column of banners, rows of drums. Foreground: a bandstand, a brass band stand, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BONE-washed painting. The people color #bdb7a4 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #a84a52 for the biggest glowing sources and surfaces, secondary #ffd60a for medium panels, banners and lights, pop #221c48 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Undead › Risen Labor Union

### Demolition Crews  `demolition`

*Knock it down. Then the other one.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | hulking and slouched; large size; mobility: grounded |
| Ethnicity + nationality | In life: Polish heritage, Polish-American |
| Identity | male being, character |
| Wardrobe | hulking zombie in a hard hat and a work vest, a sledgehammer in both hands, a rebar spear on the back |
| Accessories | Sledgehammer; hard hat; work vest; rebar spear |
| Pose | hauling a sledgehammer back for a full swing |
| Facial expression | slack, steady stare |
| People | Undead |
| Class | Risen Labor Union |
| Subclass | Demolition Crews |
| Type | Bruiser |
| Combat or support | Combat |
| Silhouette hook | hauling a sledgehammer back for a full swing; the Sledgehammer and the hard hat break the outline so it reads instantly as a black shape |
| Shape language | heavy trapezoids, oversized fists and shoulders |
| Main color (60%) | #64fe71: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #002645: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #e63946: the eyes, the Sledgehammer and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as hauling a sledgehammer back for a full swing.
2. Few large shapes: heavy trapezoids, oversized fists and shoulders; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Sledgehammer and the pose must be visible at 64 px.
4. Flat colors: #64fe71 / #002645 / #e63946 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Sledgehammer and hard hat and the bruiser shape language.

**Background**

| Field | Value |
|---|---|
| Background | a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts |
| Colors | wash #bdb7a4 (about 65%); accents #64fe71 / #002645 / #e63946 (about 20%) |
| Midground | a demolition site with a half-collapsed building, a wrecking crane, rubble heaps |
| Foreground | a bulldozer, a cement mixer |
| Character-relevant items | a demolition site with a half-collapsed building, a wrecking crane, rubble heaps, a bulldozer, a cement mixer |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Demolition Crews, male being, character (In life: Polish heritage, Polish-American), apparent age late 30s.
DESIGN FOR SILHOUETTE FIRST: hauling a sledgehammer back for a full swing; the Sledgehammer and the hard hat break the outline so it reads instantly as a black shape. Shape language: heavy trapezoids, oversized fists and shoulders.
BODY: hulking and slouched, large size, grounded. POSE: hauling a sledgehammer back for a full swing. EXPRESSION: slack, steady stare, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): hulking zombie in a hard hat and a work vest, a sledgehammer in both hands, a rebar spear on the back.
COLOR (exact hex values, flat fills): main #64fe71 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #002645 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #e63946 about 10%, used on the eyes, the Sledgehammer and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #bdb7a4 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Bruiser (combat) of the Undead people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts. An empty environment for Demolition Crews with no people, creatures, figures, silhouettes or text. Midground: a demolition site with a half-collapsed building, a wrecking crane, rubble heaps. Foreground: a bulldozer, a cement mixer, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BONE-washed painting. The people color #bdb7a4 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #64fe71 for the biggest glowing sources and surfaces, secondary #002645 for medium panels, banners and lights, pop #e63946 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Wrecking-Ball Lumberers  `wreckinglumber`

*Swing, brother.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | massive and slow; huge size; mobility: grounded |
| Ethnicity + nationality | In life: Samoan heritage, Samoan |
| Identity | male being, character |
| Wardrobe | massive zombie in a hard hat, safety vest and steel-toe boots, a chained wrecking ball bolted to one arm |
| Accessories | Chained wrecking ball; steel-toe boots; safety vest; hard hat |
| Pose | heaving a chained wrecking ball in a wide arc |
| Facial expression | vacant, patient |
| People | Undead |
| Class | Risen Labor Union |
| Subclass | Wrecking-Ball Lumberers |
| Type | Bruiser |
| Combat or support | Combat |
| Silhouette hook | heaving a chained wrecking ball in a wide arc; the Chained wrecking ball and the steel-toe boots break the outline so it reads instantly as a black shape |
| Shape language | heavy trapezoids, oversized fists and shoulders |
| Main color (60%) | #6d940e: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #7d99ca: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #282956: the eyes, the Chained wrecking ball and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as heaving a chained wrecking ball in a wide arc.
2. Few large shapes: heavy trapezoids, oversized fists and shoulders; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Chained wrecking ball and the pose must be visible at 64 px.
4. Flat colors: #6d940e / #7d99ca / #282956 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Chained wrecking ball and steel-toe boots and the bruiser shape language.

**Background**

| Field | Value |
|---|---|
| Background | a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts |
| Colors | wash #bdb7a4 (about 65%); accents #6d940e / #7d99ca / #282956 (about 20%) |
| Midground | a collapsing tower block, a crane with a hanging chain, concrete rubble |
| Foreground | an overturned dump truck, a barricade of cinder blocks |
| Character-relevant items | a collapsing tower block, a crane with a hanging chain, concrete rubble, an overturned dump truck, a barricade of cinder blocks |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Wrecking-Ball Lumberers, male being, character (In life: Samoan heritage, Samoan), apparent age late 40s.
DESIGN FOR SILHOUETTE FIRST: heaving a chained wrecking ball in a wide arc; the Chained wrecking ball and the steel-toe boots break the outline so it reads instantly as a black shape. Shape language: heavy trapezoids, oversized fists and shoulders.
BODY: massive and slow, huge size, grounded. POSE: heaving a chained wrecking ball in a wide arc. EXPRESSION: vacant, patient, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): massive zombie in a hard hat, safety vest and steel-toe boots, a chained wrecking ball bolted to one arm.
COLOR (exact hex values, flat fills): main #6d940e about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #7d99ca about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #282956 about 10%, used on the eyes, the Chained wrecking ball and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #bdb7a4 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Bruiser (combat) of the Undead people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts. An empty environment for Wrecking-Ball Lumberers with no people, creatures, figures, silhouettes or text. Midground: a collapsing tower block, a crane with a hanging chain, concrete rubble. Foreground: an overturned dump truck, a barricade of cinder blocks, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BONE-washed painting. The people color #bdb7a4 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #6d940e for the biggest glowing sources and surfaces, secondary #7d99ca for medium panels, banners and lights, pop #282956 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Shop Stewards  `shopstewards`

*Everybody gets their rest. In the grave.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | lanky and rumpled; medium size; mobility: grounded |
| Ethnicity + nationality | In life: Italian-American heritage, American |
| Identity | female being, character |
| Wardrobe | zombie in a loose tie and a hard hat with a union badge, a picket sign in one hand, a clipboard in the other |
| Accessories | Clipboard; picket sign; hard hat; union badge |
| Pose | raising a picket sign, clipboard under the other arm |
| Facial expression | wry, bureaucratic smirk |
| People | Undead |
| Class | Risen Labor Union |
| Subclass | Shop Stewards |
| Type | Enchanter |
| Combat or support | Support |
| Silhouette hook | raising a picket sign, clipboard under the other arm; the Clipboard and the picket sign break the outline so it reads instantly as a black shape |
| Shape language | circles and stars around a charm, instrument or talisman |
| Main color (60%) | #139b5e: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ef476f: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #002645: the eyes, the Clipboard and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as raising a picket sign, clipboard under the other arm.
2. Few large shapes: circles and stars around a charm, instrument or talisman; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Clipboard and the pose must be visible at 64 px.
4. Flat colors: #139b5e / #ef476f / #002645 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Clipboard and picket sign and the enchanter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts |
| Colors | wash #bdb7a4 (about 65%); accents #139b5e / #ef476f / #002645 (about 20%) |
| Midground | a union hall with a banner, a strike line of picket signs |
| Foreground | a folding table with paperwork, a bulletin board |
| Character-relevant items | a union hall with a banner, a strike line of picket signs, a folding table with paperwork, a bulletin board |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Shop Stewards, female being, character (In life: Italian-American heritage, American), apparent age early 40s.
DESIGN FOR SILHOUETTE FIRST: raising a picket sign, clipboard under the other arm; the Clipboard and the picket sign break the outline so it reads instantly as a black shape. Shape language: circles and stars around a charm, instrument or talisman.
BODY: lanky and rumpled, medium size, grounded. POSE: raising a picket sign, clipboard under the other arm. EXPRESSION: wry, bureaucratic smirk, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): zombie in a loose tie and a hard hat with a union badge, a picket sign in one hand, a clipboard in the other.
COLOR (exact hex values, flat fills): main #139b5e about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ef476f about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #002645 about 10%, used on the eyes, the Clipboard and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #bdb7a4 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Enchanter (support) of the Undead people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts. An empty environment for Shop Stewards with no people, creatures, figures, silhouettes or text. Midground: a union hall with a banner, a strike line of picket signs. Foreground: a folding table with paperwork, a bulletin board, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BONE-washed painting. The people color #bdb7a4 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #139b5e for the biggest glowing sources and surfaces, secondary #ef476f for medium panels, banners and lights, pop #002645 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Undead › Lich Bureaucracy

### Soul Notaries  `soulnotaries`

*Please sign here. In blood.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | tall and fussy; large size; mobility: grounded |
| Ethnicity + nationality | In life: Egyptian heritage, Egyptian |
| Identity | male being, character |
| Wardrobe | tall skeletal lich in a fussy robe and a pince-nez, a giant soul-stamp in one hand, a contract scroll in the other, a quill behind the ear |
| Accessories | Soul-stamp; contract scroll; quill; pince-nez |
| Pose | slamming a huge stamp onto a glowing contract |
| Facial expression | pursed, fussy |
| People | Undead |
| Class | Lich Bureaucracy |
| Subclass | Soul Notaries |
| Type | Controller |
| Combat or support | Combat |
| Silhouette hook | slamming a huge stamp onto a glowing contract; the Soul-stamp and the contract scroll break the outline so it reads instantly as a black shape |
| Shape language | hexagons and wide arc gestures with tools hanging off the body |
| Main color (60%) | #6f4a9a: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffba08: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #271948: the eyes, the Soul-stamp and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as slamming a huge stamp onto a glowing contract.
2. Few large shapes: hexagons and wide arc gestures with tools hanging off the body; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Soul-stamp and the pose must be visible at 64 px.
4. Flat colors: #6f4a9a / #ffba08 / #271948 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Soul-stamp and contract scroll and the controller shape language.

**Background**

| Field | Value |
|---|---|
| Background | a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts |
| Colors | wash #bdb7a4 (about 65%); accents #6f4a9a / #ffba08 / #271948 (about 20%) |
| Midground | a vast archive office with rows of filing cabinets, a notary desk, floating stamp-pads |
| Foreground | a conveyor of forms, a clock |
| Character-relevant items | a vast archive office with rows of filing cabinets, a notary desk, floating stamp-pads, a conveyor of forms, a clock |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Soul Notaries, male being, character (In life: Egyptian heritage, Egyptian), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: slamming a huge stamp onto a glowing contract; the Soul-stamp and the contract scroll break the outline so it reads instantly as a black shape. Shape language: hexagons and wide arc gestures with tools hanging off the body.
BODY: tall and fussy, large size, grounded. POSE: slamming a huge stamp onto a glowing contract. EXPRESSION: pursed, fussy, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): tall skeletal lich in a fussy robe and a pince-nez, a giant soul-stamp in one hand, a contract scroll in the other, a quill behind the ear.
COLOR (exact hex values, flat fills): main #6f4a9a about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffba08 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #271948 about 10%, used on the eyes, the Soul-stamp and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #bdb7a4 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Controller (combat) of the Undead people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts. An empty environment for Soul Notaries with no people, creatures, figures, silhouettes or text. Midground: a vast archive office with rows of filing cabinets, a notary desk, floating stamp-pads. Foreground: a conveyor of forms, a clock, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BONE-washed painting. The people color #bdb7a4 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #6f4a9a for the biggest glowing sources and surfaces, secondary #ffba08 for medium panels, banners and lights, pop #271948 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Phylactery Auditors  `phylacteryauditors`

*Where is the jar?*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | tall and narrow; large size; mobility: grounded |
| Ethnicity + nationality | In life: Chinese heritage, Chinese |
| Identity | female being, character |
| Wardrobe | tall lich in a pointed hat, a soul-lens held up in one hand, a crowbar in the other, a ledger tucked under the arm |
| Accessories | Soul-lens; ledger; crowbar; pointed hat |
| Pose | holding a soul-lens to an unseen jar, crowbar over the shoulder |
| Facial expression | suspicious squint |
| People | Undead |
| Class | Lich Bureaucracy |
| Subclass | Phylactery Auditors |
| Type | Caster |
| Combat or support | Combat |
| Silhouette hook | holding a soul-lens to an unseen jar, crowbar over the shoulder; the Soul-lens and the ledger break the outline so it reads instantly as a black shape |
| Shape language | flowing diamonds and a bright flat focus shape |
| Main color (60%) | #00807f: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #3c096c: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #ff9e00: the eyes, the Soul-lens and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as holding a soul-lens to an unseen jar, crowbar over the shoulder.
2. Few large shapes: flowing diamonds and a bright flat focus shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Soul-lens and the pose must be visible at 64 px.
4. Flat colors: #00807f / #3c096c / #ff9e00 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Soul-lens and ledger and the caster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts |
| Colors | wash #bdb7a4 (about 65%); accents #00807f / #3c096c / #ff9e00 (about 20%) |
| Midground | a warehouse of hidden jars and labeled shelves, a ladder, a stack of ledgers |
| Foreground | an inventory desk, a cracked tea set |
| Character-relevant items | a warehouse of hidden jars and labeled shelves, a ladder, a stack of ledgers, an inventory desk, a cracked tea set |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Phylactery Auditors, female being, character (In life: Chinese heritage, Chinese), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: holding a soul-lens to an unseen jar, crowbar over the shoulder; the Soul-lens and the ledger break the outline so it reads instantly as a black shape. Shape language: flowing diamonds and a bright flat focus shape.
BODY: tall and narrow, large size, grounded. POSE: holding a soul-lens to an unseen jar, crowbar over the shoulder. EXPRESSION: suspicious squint, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): tall lich in a pointed hat, a soul-lens held up in one hand, a crowbar in the other, a ledger tucked under the arm.
COLOR (exact hex values, flat fills): main #00807f about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #3c096c about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #ff9e00 about 10%, used on the eyes, the Soul-lens and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #bdb7a4 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Caster (combat) of the Undead people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts. An empty environment for Phylactery Auditors with no people, creatures, figures, silhouettes or text. Midground: a warehouse of hidden jars and labeled shelves, a ladder, a stack of ledgers. Foreground: an inventory desk, a cracked tea set, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BONE-washed painting. The people color #bdb7a4 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #00807f for the biggest glowing sources and surfaces, secondary #3c096c for medium panels, banners and lights, pop #ff9e00 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Contract Reapers  `contractreapers`

*Terms are final.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | gaunt and robed; large size; mobility: grounded |
| Ethnicity + nationality | In life: Mongolian heritage, Mongolian |
| Identity | male being, character |
| Wardrobe | skeletal lich in black robes with a stamp ring and contract shackles at the belt, a long scythe held in both hands |
| Accessories | Scythe; contract shackles; black robes; stamp ring |
| Pose | swinging a long scythe through a wide arc |
| Facial expression | cold, decided |
| People | Undead |
| Class | Lich Bureaucracy |
| Subclass | Contract Reapers |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | swinging a long scythe through a wide arc; the Scythe and the contract shackles break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #c746b9: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #e4ffda: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #1d3557: the eyes, the Scythe and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as swinging a long scythe through a wide arc.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Scythe and the pose must be visible at 64 px.
4. Flat colors: #c746b9 / #e4ffda / #1d3557 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Scythe and contract shackles and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts |
| Colors | wash #bdb7a4 (about 65%); accents #c746b9 / #e4ffda / #1d3557 (about 20%) |
| Midground | a courthouse of marble columns, a judge's bench, a pile of unsigned contracts |
| Foreground | a wooden gallows, a clock tower |
| Character-relevant items | a courthouse of marble columns, a judge's bench, a pile of unsigned contracts, a wooden gallows, a clock tower |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Contract Reapers, male being, character (In life: Mongolian heritage, Mongolian), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: swinging a long scythe through a wide arc; the Scythe and the contract shackles break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: gaunt and robed, large size, grounded. POSE: swinging a long scythe through a wide arc. EXPRESSION: cold, decided, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): skeletal lich in black robes with a stamp ring and contract shackles at the belt, a long scythe held in both hands.
COLOR (exact hex values, flat fills): main #c746b9 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #e4ffda about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #1d3557 about 10%, used on the eyes, the Scythe and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #bdb7a4 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Undead people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts. An empty environment for Contract Reapers with no people, creatures, figures, silhouettes or text. Midground: a courthouse of marble columns, a judge's bench, a pile of unsigned contracts. Foreground: a wooden gallows, a clock tower, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BONE-washed painting. The people color #bdb7a4 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #c746b9 for the biggest glowing sources and surfaces, secondary #e4ffda for medium panels, banners and lights, pop #1d3557 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Undead › Reach Court

### Sarcophagus Lancers  `sarcophaguslancers`

*Open wide.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | armored and wrapped; large size; mobility: grounded |
| Ethnicity + nationality | In life: Nubian heritage, Sudanese |
| Identity | male being, character |
| Wardrobe | mummy knight in a bandage cape with a scarab brooch, a gilded sarcophagus lid carried as a shield on one arm, a gilded lance in the other hand |
| Accessories | Sarcophagus shield; gilded lance; scarab brooch; bandage cape |
| Pose | charging forward behind a sarcophagus lid, lance leveled |
| Facial expression | stoic, gold-masked |
| People | Undead |
| Class | Reach Court |
| Subclass | Sarcophagus Lancers |
| Type | Tank |
| Combat or support | Combat |
| Silhouette hook | charging forward behind a sarcophagus lid, lance leveled; the Sarcophagus shield and the gilded lance break the outline so it reads instantly as a black shape |
| Shape language | wide blocky rectangles and a big shield shape |
| Main color (60%) | #6f6704: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #006d77: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #221c48: the eyes, the Sarcophagus shield and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as charging forward behind a sarcophagus lid, lance leveled.
2. Few large shapes: wide blocky rectangles and a big shield shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Sarcophagus shield and the pose must be visible at 64 px.
4. Flat colors: #6f6704 / #006d77 / #221c48 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Sarcophagus shield and gilded lance and the tank shape language.

**Background**

| Field | Value |
|---|---|
| Background | a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts |
| Colors | wash #bdb7a4 (about 65%); accents #6f6704 / #006d77 / #221c48 (about 20%) |
| Midground | a buried vault with a row of upright sarcophagi, hieroglyph walls, a golden throne |
| Foreground | sand drifts, torches |
| Character-relevant items | a buried vault with a row of upright sarcophagi, hieroglyph walls, a golden throne, sand drifts, torches |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Sarcophagus Lancers, male being, character (In life: Nubian heritage, Sudanese), apparent age late 30s.
DESIGN FOR SILHOUETTE FIRST: charging forward behind a sarcophagus lid, lance leveled; the Sarcophagus shield and the gilded lance break the outline so it reads instantly as a black shape. Shape language: wide blocky rectangles and a big shield shape.
BODY: armored and wrapped, large size, grounded. POSE: charging forward behind a sarcophagus lid, lance leveled. EXPRESSION: stoic, gold-masked, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): mummy knight in a bandage cape with a scarab brooch, a gilded sarcophagus lid carried as a shield on one arm, a gilded lance in the other hand.
COLOR (exact hex values, flat fills): main #6f6704 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #006d77 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #221c48 about 10%, used on the eyes, the Sarcophagus shield and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #bdb7a4 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Tank (combat) of the Undead people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts. An empty environment for Sarcophagus Lancers with no people, creatures, figures, silhouettes or text. Midground: a buried vault with a row of upright sarcophagi, hieroglyph walls, a golden throne. Foreground: sand drifts, torches, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BONE-washed painting. The people color #bdb7a4 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #6f6704 for the biggest glowing sources and surfaces, secondary #006d77 for medium panels, banners and lights, pop #221c48 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Gold-Mask Duelists  `goldmaskduelists`

*May I present your end.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | regal and slim; medium size; mobility: agile |
| Ethnicity + nationality | In life: Egyptian heritage, Egyptian |
| Identity | female being, character |
| Wardrobe | regal mummy in a golden mask and trailing wraps, a gilded scimitar in one hand and a bandage whip in the other |
| Accessories | Gilded scimitar; gold mask; bandage whip |
| Pose | scimitar raised in salute, bandage whip trailing |
| Facial expression | regal, unreadable |
| People | Undead |
| Class | Reach Court |
| Subclass | Gold-Mask Duelists |
| Type | Fighter |
| Combat or support | Combat |
| Silhouette hook | scimitar raised in salute, bandage whip trailing; the Gilded scimitar and the gold mask break the outline so it reads instantly as a black shape |
| Shape language | balanced diagonals with one clear weapon line |
| Main color (60%) | #c66d97: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #d4a017: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #0b6e4f: the eyes, the Gilded scimitar and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as scimitar raised in salute, bandage whip trailing.
2. Few large shapes: balanced diagonals with one clear weapon line; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Gilded scimitar and the pose must be visible at 64 px.
4. Flat colors: #c66d97 / #d4a017 / #0b6e4f as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Gilded scimitar and gold mask and the fighter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts |
| Colors | wash #bdb7a4 (about 65%); accents #c66d97 / #d4a017 / #0b6e4f (about 20%) |
| Midground | a buried throne hall with a golden throne, carved pillars, a dueling ring of sand |
| Foreground | a brazier, banners of the court |
| Character-relevant items | a buried throne hall with a golden throne, carved pillars, a dueling ring of sand, a brazier, banners of the court |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Gold-Mask Duelists, female being, character (In life: Egyptian heritage, Egyptian), apparent age late 50s.
DESIGN FOR SILHOUETTE FIRST: scimitar raised in salute, bandage whip trailing; the Gilded scimitar and the gold mask break the outline so it reads instantly as a black shape. Shape language: balanced diagonals with one clear weapon line.
BODY: regal and slim, medium size, agile. POSE: scimitar raised in salute, bandage whip trailing. EXPRESSION: regal, unreadable, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): regal mummy in a golden mask and trailing wraps, a gilded scimitar in one hand and a bandage whip in the other.
COLOR (exact hex values, flat fills): main #c66d97 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #d4a017 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #0b6e4f about 10%, used on the eyes, the Gilded scimitar and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #bdb7a4 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Fighter (combat) of the Undead people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts. An empty environment for Gold-Mask Duelists with no people, creatures, figures, silhouettes or text. Midground: a buried throne hall with a golden throne, carved pillars, a dueling ring of sand. Foreground: a brazier, banners of the court, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BONE-washed painting. The people color #bdb7a4 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #c66d97 for the biggest glowing sources and surfaces, secondary #d4a017 for medium panels, banners and lights, pop #0b6e4f for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Embalmer Alchemists  `embalmeralchemists`

*Preserved. Improved.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | round and aproned; medium size; mobility: grounded |
| Ethnicity + nationality | In life: Greek heritage, Greek |
| Identity | female being, character |
| Wardrobe | mummy in an ornate apron, a belt of oil flasks, a canopic jar in one hand, a roll of bandage in the other |
| Accessories | Oil flasks; canopic jar; bandage roll; ornate apron |
| Pose | hurling a glowing flask, canopic jar at the belt |
| Facial expression | bright, clinical |
| People | Undead |
| Class | Reach Court |
| Subclass | Embalmer Alchemists |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | hurling a glowing flask, canopic jar at the belt; the Oil flasks and the canopic jar break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #33ab1c: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #06d6a0: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #282956: the eyes, the Oil flasks and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as hurling a glowing flask, canopic jar at the belt.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Oil flasks and the pose must be visible at 64 px.
4. Flat colors: #33ab1c / #06d6a0 / #282956 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Oil flasks and canopic jar and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts |
| Colors | wash #bdb7a4 (about 65%); accents #33ab1c / #06d6a0 / #282956 (about 20%) |
| Midground | an embalming workshop with a stone table, canopic jar shelves, a brazier with a cauldron |
| Foreground | a stack of linen, a funnel and still |
| Character-relevant items | an embalming workshop with a stone table, canopic jar shelves, a brazier with a cauldron, a stack of linen, a funnel and still |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Embalmer Alchemists, female being, character (In life: Greek heritage, Greek), apparent age early 30s.
DESIGN FOR SILHOUETTE FIRST: hurling a glowing flask, canopic jar at the belt; the Oil flasks and the canopic jar break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: round and aproned, medium size, grounded. POSE: hurling a glowing flask, canopic jar at the belt. EXPRESSION: bright, clinical, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): mummy in an ornate apron, a belt of oil flasks, a canopic jar in one hand, a roll of bandage in the other.
COLOR (exact hex values, flat fills): main #33ab1c about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #06d6a0 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #282956 about 10%, used on the eyes, the Oil flasks and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #bdb7a4 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Undead people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a buried bunker vault and ash trench: steel blast doors, sandbag walls, a long corridor of lockers, dust-lit ventilation shafts. An empty environment for Embalmer Alchemists with no people, creatures, figures, silhouettes or text. Midground: an embalming workshop with a stone table, canopic jar shelves, a brazier with a cauldron. Foreground: a stack of linen, a funnel and still, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a BONE-washed painting. The people color #bdb7a4 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #33ab1c for the biggest glowing sources and surfaces, secondary #06d6a0 for medium panels, banners and lights, pop #282956 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


---

# Forest Spirit
*People color: Moss #3f7d45. Background setting: a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist.*

**Tagline:** The woods have opinions. They also have weapons.  
**Classes:** Cul-de-Sac Court (Lawnmower Knights, Sprinkler Sprites, HOA Mediators); Root-Server Dryads (Rootlink Warlocks, Moss-Plate Wardens, Greenhouse Healers); Basement Gnomes (Sump Sappers, Boiler-Room Brawlers, Toll Brokers); Hob Neighbors (Doorbell Ambushers, Pantry Poisoners, Block-Watch Sentries)


## Forest Spirit › Cul-de-Sac Court

### Lawnmower Knights  `mowerknights`

*Keep it trimmed.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | small and armored; small size; mobility: vehicle |
| Ethnicity + nationality | Fae (adapted from English folk tradition) |
| Identity | male being, character |
| Wardrobe | winged fae knight in a grass-green visor helm with a leaf-and-hedge armor, a long hedge-lance in one hand, a grass shield on the other arm |
| Accessories | Armored mower; hedge-lance; grass shield; visor |
| Pose | charging with the hedge-lance leveled |
| Facial expression | proud, chin up |
| People | Forest Spirit |
| Class | Cul-de-Sac Court |
| Subclass | Lawnmower Knights |
| Type | Bruiser |
| Combat or support | Combat |
| Silhouette hook | charging with the hedge-lance leveled; the Armored mower and the hedge-lance break the outline so it reads instantly as a black shape |
| Shape language | heavy trapezoids, oversized fists and shoulders |
| Main color (60%) | #8bae63: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ff5d8f: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff7c7: the eyes, the Armored mower and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as charging with the hedge-lance leveled.
2. Few large shapes: heavy trapezoids, oversized fists and shoulders; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Armored mower and the pose must be visible at 64 px.
4. Flat colors: #8bae63 / #ff5d8f / #fff7c7 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Armored mower and hedge-lance and the bruiser shape language.

**Background**

| Field | Value |
|---|---|
| Background | a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist |
| Colors | wash #3f7d45 (about 65%); accents #8bae63 / #ff5d8f / #fff7c7 (about 20%) |
| Midground | an armored ride-on lawn mower with spinning blades and a banner, a manicured hedge wall |
| Foreground | a picket fence, a garden gnome statue |
| Character-relevant items | an armored ride-on lawn mower with spinning blades and a banner, a manicured hedge wall, a picket fence, a garden gnome statue |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Lawnmower Knights, male being, character (Fae (adapted from English folk tradition)), apparent age late 30s.
DESIGN FOR SILHOUETTE FIRST: charging with the hedge-lance leveled; the Armored mower and the hedge-lance break the outline so it reads instantly as a black shape. Shape language: heavy trapezoids, oversized fists and shoulders.
BODY: small and armored, small size, vehicle. POSE: charging with the hedge-lance leveled. EXPRESSION: proud, chin up, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): winged fae knight in a grass-green visor helm with a leaf-and-hedge armor, a long hedge-lance in one hand, a grass shield on the other arm.
COLOR (exact hex values, flat fills): main #8bae63 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ff5d8f about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff7c7 about 10%, used on the eyes, the Armored mower and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #3f7d45 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Bruiser (combat) of the Forest Spirit people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist. An empty environment for Lawnmower Knights with no people, creatures, figures, silhouettes or text. Midground: an armored ride-on lawn mower with spinning blades and a banner, a manicured hedge wall. Foreground: a picket fence, a garden gnome statue, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a MOSS-washed painting. The people color #3f7d45 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #8bae63 for the biggest glowing sources and surfaces, secondary #ff5d8f for medium panels, banners and lights, pop #fff7c7 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Sprinkler Sprites  `sprinklersprites`

*Water is a weapon.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | tiny and winged; tiny size; mobility: flying |
| Ethnicity + nationality | Fae (adapted from Japanese folk tradition) |
| Identity | female being, character |
| Wardrobe | tiny winged sprite in a rain cape and rubber boots, a garden-hose whip in one hand, a sprinkler-head staff in the other |
| Accessories | Garden hose whip; sprinkler staff; rain cape; rubber boots |
| Pose | spinning in a ring of water jets, hose whip snapping |
| Facial expression | delighted, giggling |
| People | Forest Spirit |
| Class | Cul-de-Sac Court |
| Subclass | Sprinkler Sprites |
| Type | Controller |
| Combat or support | Combat |
| Silhouette hook | spinning in a ring of water jets, hose whip snapping; the Garden hose whip and the sprinkler staff break the outline so it reads instantly as a black shape |
| Shape language | hexagons and wide arc gestures with tools hanging off the body |
| Main color (60%) | #65b2ac: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffd166: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #2ee3ac: the eyes, the Garden hose whip and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as spinning in a ring of water jets, hose whip snapping.
2. Few large shapes: hexagons and wide arc gestures with tools hanging off the body; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Garden hose whip and the pose must be visible at 64 px.
4. Flat colors: #65b2ac / #ffd166 / #2ee3ac as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Garden hose whip and sprinkler staff and the controller shape language.

**Background**

| Field | Value |
|---|---|
| Background | a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist |
| Colors | wash #3f7d45 (about 65%); accents #65b2ac / #ffd166 / #2ee3ac (about 20%) |
| Midground | a garden with a rotating lawn sprinkler, a water tower, a rain barrel |
| Foreground | a coiled hose, a rainbow in the spray |
| Character-relevant items | a garden with a rotating lawn sprinkler, a water tower, a rain barrel, a coiled hose, a rainbow in the spray |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Sprinkler Sprites, female being, character (Fae (adapted from Japanese folk tradition)), apparent age early 20s.
DESIGN FOR SILHOUETTE FIRST: spinning in a ring of water jets, hose whip snapping; the Garden hose whip and the sprinkler staff break the outline so it reads instantly as a black shape. Shape language: hexagons and wide arc gestures with tools hanging off the body.
BODY: tiny and winged, tiny size, flying. POSE: spinning in a ring of water jets, hose whip snapping. EXPRESSION: delighted, giggling, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): tiny winged sprite in a rain cape and rubber boots, a garden-hose whip in one hand, a sprinkler-head staff in the other.
COLOR (exact hex values, flat fills): main #65b2ac about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffd166 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #2ee3ac about 10%, used on the eyes, the Garden hose whip and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #3f7d45 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Controller (combat) of the Forest Spirit people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist. An empty environment for Sprinkler Sprites with no people, creatures, figures, silhouettes or text. Midground: a garden with a rotating lawn sprinkler, a water tower, a rain barrel. Foreground: a coiled hose, a rainbow in the spray, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a MOSS-washed painting. The people color #3f7d45 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #65b2ac for the biggest glowing sources and surfaces, secondary #ffd166 for medium panels, banners and lights, pop #2ee3ac for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### HOA Mediators  `hoamediators`

*This violates the covenant.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | small and winged; small size; mobility: flying |
| Ethnicity + nationality | Fae (adapted from American suburban folklore) |
| Identity | female being, character |
| Wardrobe | winged fae in a sun hat, a clipboard in one hand, a tiny gavel in the other, a bundle of violation tags at the belt |
| Accessories | Clipboard; violation tags; tiny gavel; sun hat |
| Pose | holding a clipboard up like a shield, tiny gavel raised |
| Facial expression | pleasant, immovable |
| People | Forest Spirit |
| Class | Cul-de-Sac Court |
| Subclass | HOA Mediators |
| Type | Enchanter |
| Combat or support | Support |
| Silhouette hook | holding a clipboard up like a shield, tiny gavel raised; the Clipboard and the violation tags break the outline so it reads instantly as a black shape |
| Shape language | circles and stars around a charm, instrument or talisman |
| Main color (60%) | #a5d39a: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffadad: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #264653: the eyes, the Clipboard and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as holding a clipboard up like a shield, tiny gavel raised.
2. Few large shapes: circles and stars around a charm, instrument or talisman; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Clipboard and the pose must be visible at 64 px.
4. Flat colors: #a5d39a / #ffadad / #264653 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Clipboard and violation tags and the enchanter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist |
| Colors | wash #3f7d45 (about 65%); accents #a5d39a / #ffadad / #264653 (about 20%) |
| Midground | a neighborhood meeting table with a mailbox row, a picket fence with a sign |
| Foreground | a lawn with a flag, a clubhouse porch |
| Character-relevant items | a neighborhood meeting table with a mailbox row, a picket fence with a sign, a lawn with a flag, a clubhouse porch |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: HOA Mediators, female being, character (Fae (adapted from American suburban folklore)), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: holding a clipboard up like a shield, tiny gavel raised; the Clipboard and the violation tags break the outline so it reads instantly as a black shape. Shape language: circles and stars around a charm, instrument or talisman.
BODY: small and winged, small size, flying. POSE: holding a clipboard up like a shield, tiny gavel raised. EXPRESSION: pleasant, immovable, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): winged fae in a sun hat, a clipboard in one hand, a tiny gavel in the other, a bundle of violation tags at the belt.
COLOR (exact hex values, flat fills): main #a5d39a about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffadad about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #264653 about 10%, used on the eyes, the Clipboard and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #3f7d45 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Enchanter (support) of the Forest Spirit people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist. An empty environment for HOA Mediators with no people, creatures, figures, silhouettes or text. Midground: a neighborhood meeting table with a mailbox row, a picket fence with a sign. Foreground: a lawn with a flag, a clubhouse porch, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a MOSS-washed painting. The people color #3f7d45 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #a5d39a for the biggest glowing sources and surfaces, secondary #ffadad for medium panels, banners and lights, pop #264653 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Forest Spirit › Root-Server Dryads

### Rootlink Warlocks  `rootlinkwarlocks`

*Log in. Grow.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | tall and bark-skinned; large size; mobility: grounded |
| Ethnicity + nationality | Dryad (adapted from Greek tradition) |
| Identity | female being, character |
| Wardrobe | bark-skinned dryad in moss-plate armor with cable-vines wrapped on the arms, a root staff in one hand, a small monitor-shaped shield on the other arm |
| Accessories | Root staff; cable vines; monitor shield; moss-plate armor |
| Pose | staff raised overhead, shield forward |
| Facial expression | cold, luminous stare |
| People | Forest Spirit |
| Class | Root-Server Dryads |
| Subclass | Rootlink Warlocks |
| Type | Caster |
| Combat or support | Combat |
| Silhouette hook | staff raised overhead, shield forward; the Root staff and the cable vines break the outline so it reads instantly as a black shape |
| Shape language | flowing diamonds and a bright flat focus shape |
| Main color (60%) | #2d4700: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #4cc9f0: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #e4ffda: the eyes, the Root staff and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Done: `art/v2/forest-rootlinkwarlocks.png` and `art/v2/forest-rootlinkwarlocks-bg.jpg` |
| Last vet | Final art accepted (made before the vetting pipeline) |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as staff raised overhead, shield forward.
2. Few large shapes: flowing diamonds and a bright flat focus shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Root staff and the pose must be visible at 64 px.
4. Flat colors: #2d4700 / #4cc9f0 / #e4ffda as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Root staff and cable vines and the caster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist |
| Colors | wash #3f7d45 (about 65%); accents #2d4700 / #4cc9f0 / #e4ffda (about 20%) |
| Midground | a flooded data center with server racks overgrown with vines, a root-covered terminal |
| Foreground | glowing cables, a skylight |
| Character-relevant items | a flooded data center with server racks overgrown with vines, a root-covered terminal, glowing cables, a skylight |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Rootlink Warlocks, female being, character (Dryad (adapted from Greek tradition)), apparent age early 20s.
DESIGN FOR SILHOUETTE FIRST: staff raised overhead, shield forward; the Root staff and the cable vines break the outline so it reads instantly as a black shape. Shape language: flowing diamonds and a bright flat focus shape.
BODY: tall and bark-skinned, large size, grounded. POSE: staff raised overhead, shield forward. EXPRESSION: cold, luminous stare, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): bark-skinned dryad in moss-plate armor with cable-vines wrapped on the arms, a root staff in one hand, a small monitor-shaped shield on the other arm.
COLOR (exact hex values, flat fills): main #2d4700 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #4cc9f0 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #e4ffda about 10%, used on the eyes, the Root staff and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #3f7d45 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Caster (combat) of the Forest Spirit people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist. An empty environment for Rootlink Warlocks with no people, creatures, figures, silhouettes or text. Midground: a flooded data center with server racks overgrown with vines, a root-covered terminal. Foreground: glowing cables, a skylight, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a MOSS-washed painting. The people color #3f7d45 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #2d4700 for the biggest glowing sources and surfaces, secondary #4cc9f0 for medium panels, banners and lights, pop #e4ffda for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Moss-Plate Wardens  `mossplate`

*Grow stronger.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | armored and mossy; large size; mobility: grounded |
| Ethnicity + nationality | Dryad (adapted from Celtic tradition) |
| Identity | male being, character |
| Wardrobe | armored dryad in moss-covered rack-plate armor, a server-rack shield on one arm, a root hammer in the other hand, a vine whip at the belt |
| Accessories | Rack-plate shield; root hammer; moss cape; vine whip |
| Pose | braced behind a rack-plate shield, root hammer raised |
| Facial expression | calm, mossy stoicism |
| People | Forest Spirit |
| Class | Root-Server Dryads |
| Subclass | Moss-Plate Wardens |
| Type | Tank |
| Combat or support | Combat |
| Silhouette hook | braced behind a rack-plate shield, root hammer raised; the Rack-plate shield and the root hammer break the outline so it reads instantly as a black shape |
| Shape language | wide blocky rectangles and a big shield shape |
| Main color (60%) | #b8b07c: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #bc4749: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fee7ab: the eyes, the Rack-plate shield and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as braced behind a rack-plate shield, root hammer raised.
2. Few large shapes: wide blocky rectangles and a big shield shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Rack-plate shield and the pose must be visible at 64 px.
4. Flat colors: #b8b07c / #bc4749 / #fee7ab as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Rack-plate shield and root hammer and the tank shape language.

**Background**

| Field | Value |
|---|---|
| Background | a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist |
| Colors | wash #3f7d45 (about 65%); accents #b8b07c / #bc4749 / #fee7ab (about 20%) |
| Midground | a data-center gate with a mossy barricade of server racks, stacked cable spools |
| Foreground | a forklift, ferns on a rack |
| Character-relevant items | a data-center gate with a mossy barricade of server racks, stacked cable spools, a forklift, ferns on a rack |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Moss-Plate Wardens, male being, character (Dryad (adapted from Celtic tradition)), apparent age early 20s.
DESIGN FOR SILHOUETTE FIRST: braced behind a rack-plate shield, root hammer raised; the Rack-plate shield and the root hammer break the outline so it reads instantly as a black shape. Shape language: wide blocky rectangles and a big shield shape.
BODY: armored and mossy, large size, grounded. POSE: braced behind a rack-plate shield, root hammer raised. EXPRESSION: calm, mossy stoicism, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): armored dryad in moss-covered rack-plate armor, a server-rack shield on one arm, a root hammer in the other hand, a vine whip at the belt.
COLOR (exact hex values, flat fills): main #b8b07c about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #bc4749 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fee7ab about 10%, used on the eyes, the Rack-plate shield and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #3f7d45 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Tank (combat) of the Forest Spirit people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist. An empty environment for Moss-Plate Wardens with no people, creatures, figures, silhouettes or text. Midground: a data-center gate with a mossy barricade of server racks, stacked cable spools. Foreground: a forklift, ferns on a rack, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a MOSS-washed painting. The people color #3f7d45 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #b8b07c for the biggest glowing sources and surfaces, secondary #bc4749 for medium panels, banners and lights, pop #fee7ab for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Greenhouse Healers  `seedbank`

*Everything blooms.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | gentle and graceful; medium size; mobility: grounded |
| Ethnicity + nationality | Dryad (adapted from Slavic tradition) |
| Identity | female being, character |
| Wardrobe | gentle dryad in a flower crown, a seed satchel at the hip, a watering can in one hand and a grafting knife in the other |
| Accessories | Seed satchel; watering can; grafting knife; flower crown |
| Pose | pouring glowing water over a kneeling ally |
| Facial expression | warm, patient |
| People | Forest Spirit |
| Class | Root-Server Dryads |
| Subclass | Greenhouse Healers |
| Type | Support |
| Combat or support | Support |
| Silhouette hook | pouring glowing water over a kneeling ally; the Seed satchel and the watering can break the outline so it reads instantly as a black shape |
| Shape language | soft rounded rectangles with an open palm and a visible kit |
| Main color (60%) | #f9c9e9: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #a7c957: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #3d405b: the eyes, the Seed satchel and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as pouring glowing water over a kneeling ally.
2. Few large shapes: soft rounded rectangles with an open palm and a visible kit; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Seed satchel and the pose must be visible at 64 px.
4. Flat colors: #f9c9e9 / #a7c957 / #3d405b as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Seed satchel and watering can and the support shape language.

**Background**

| Field | Value |
|---|---|
| Background | a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist |
| Colors | wash #3f7d45 (about 65%); accents #f9c9e9 / #a7c957 / #3d405b (about 20%) |
| Midground | a seed-vault greenhouse with glass panes, rows of seed drawers, planting benches |
| Foreground | a misting system, a rain-barrel |
| Character-relevant items | a seed-vault greenhouse with glass panes, rows of seed drawers, planting benches, a misting system, a rain-barrel |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Greenhouse Healers, female being, character (Dryad (adapted from Slavic tradition)), apparent age early 40s.
DESIGN FOR SILHOUETTE FIRST: pouring glowing water over a kneeling ally; the Seed satchel and the watering can break the outline so it reads instantly as a black shape. Shape language: soft rounded rectangles with an open palm and a visible kit.
BODY: gentle and graceful, medium size, grounded. POSE: pouring glowing water over a kneeling ally. EXPRESSION: warm, patient, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): gentle dryad in a flower crown, a seed satchel at the hip, a watering can in one hand and a grafting knife in the other.
COLOR (exact hex values, flat fills): main #f9c9e9 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #a7c957 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #3d405b about 10%, used on the eyes, the Seed satchel and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #3f7d45 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Support (support) of the Forest Spirit people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist. An empty environment for Greenhouse Healers with no people, creatures, figures, silhouettes or text. Midground: a seed-vault greenhouse with glass panes, rows of seed drawers, planting benches. Foreground: a misting system, a rain-barrel, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a MOSS-washed painting. The people color #3f7d45 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #f9c9e9 for the biggest glowing sources and surfaces, secondary #a7c957 for medium panels, banners and lights, pop #3d405b for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Forest Spirit › Basement Gnomes

### Sump Sappers  `sumpsappers`

*Dig. Plant. Run.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | short and stout; small size; mobility: burrowing |
| Ethnicity + nationality | Gnome (adapted from German tradition) |
| Identity | male being, character |
| Wardrobe | stout bearded gnome in a crystal-crowned mining helmet with a head-lamp, a pickaxe in one hand, a belt of small mining charges |
| Accessories | Pickaxe; mining charges; helmet lamp; sump pump |
| Pose | carrying a charge in one hand, pickaxe raised in the other |
| Facial expression | grumpy, gritted teeth |
| People | Forest Spirit |
| Class | Basement Gnomes |
| Subclass | Sump Sappers |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | carrying a charge in one hand, pickaxe raised in the other; the Pickaxe and the mining charges break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #9ca2fa: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ff9e00: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #282956: the eyes, the Pickaxe and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as carrying a charge in one hand, pickaxe raised in the other.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Pickaxe and the pose must be visible at 64 px.
4. Flat colors: #9ca2fa / #ff9e00 / #282956 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Pickaxe and mining charges and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist |
| Colors | wash #3f7d45 (about 65%); accents #9ca2fa / #ff9e00 / #282956 (about 20%) |
| Midground | a flooded basement tunnel with a sump pump, a mining cart, a support beam |
| Foreground | a charge crate, a hole in the wall |
| Character-relevant items | a flooded basement tunnel with a sump pump, a mining cart, a support beam, a charge crate, a hole in the wall |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Sump Sappers, male being, character (Gnome (adapted from German tradition)), apparent age late 40s.
DESIGN FOR SILHOUETTE FIRST: carrying a charge in one hand, pickaxe raised in the other; the Pickaxe and the mining charges break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: short and stout, small size, burrowing. POSE: carrying a charge in one hand, pickaxe raised in the other. EXPRESSION: grumpy, gritted teeth, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): stout bearded gnome in a crystal-crowned mining helmet with a head-lamp, a pickaxe in one hand, a belt of small mining charges.
COLOR (exact hex values, flat fills): main #9ca2fa about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ff9e00 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #282956 about 10%, used on the eyes, the Pickaxe and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #3f7d45 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Forest Spirit people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist. An empty environment for Sump Sappers with no people, creatures, figures, silhouettes or text. Midground: a flooded basement tunnel with a sump pump, a mining cart, a support beam. Foreground: a charge crate, a hole in the wall, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a MOSS-washed painting. The people color #3f7d45 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #9ca2fa for the biggest glowing sources and surfaces, secondary #ff9e00 for medium panels, banners and lights, pop #282956 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Boiler-Room Brawlers  `boilerbrawlers`

*Steam and rage.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | stout and armored; small size; mobility: grounded |
| Ethnicity + nationality | Gnome (adapted from Dutch tradition) |
| Identity | male being, character |
| Wardrobe | bearded gnome in bulky boiler-plate armor with steam vents, goggles, heavy pressure-fist gauntlets on both hands |
| Accessories | Pressure-fist gauntlets; boiler armor; goggles; steam pipe |
| Pose | cocking a steaming gauntleted fist |
| Facial expression | red-faced, scowling |
| People | Forest Spirit |
| Class | Basement Gnomes |
| Subclass | Boiler-Room Brawlers |
| Type | Bruiser |
| Combat or support | Combat |
| Silhouette hook | cocking a steaming gauntleted fist; the Pressure-fist gauntlets and the boiler armor break the outline so it reads instantly as a black shape |
| Shape language | heavy trapezoids, oversized fists and shoulders |
| Main color (60%) | #8b3701: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #7d99ca: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #264653: the eyes, the Pressure-fist gauntlets and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as cocking a steaming gauntleted fist.
2. Few large shapes: heavy trapezoids, oversized fists and shoulders; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Pressure-fist gauntlets and the pose must be visible at 64 px.
4. Flat colors: #8b3701 / #7d99ca / #264653 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Pressure-fist gauntlets and boiler armor and the bruiser shape language.

**Background**

| Field | Value |
|---|---|
| Background | a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist |
| Colors | wash #3f7d45 (about 65%); accents #8b3701 / #7d99ca / #264653 (about 20%) |
| Midground | a boiler room with a giant boiler, pipes venting steam, a coal pile |
| Foreground | a pressure gauge wall, a valve wheel |
| Character-relevant items | a boiler room with a giant boiler, pipes venting steam, a coal pile, a pressure gauge wall, a valve wheel |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Boiler-Room Brawlers, male being, character (Gnome (adapted from Dutch tradition)), apparent age early 40s.
DESIGN FOR SILHOUETTE FIRST: cocking a steaming gauntleted fist; the Pressure-fist gauntlets and the boiler armor break the outline so it reads instantly as a black shape. Shape language: heavy trapezoids, oversized fists and shoulders.
BODY: stout and armored, small size, grounded. POSE: cocking a steaming gauntleted fist. EXPRESSION: red-faced, scowling, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): bearded gnome in bulky boiler-plate armor with steam vents, goggles, heavy pressure-fist gauntlets on both hands.
COLOR (exact hex values, flat fills): main #8b3701 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #7d99ca about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #264653 about 10%, used on the eyes, the Pressure-fist gauntlets and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #3f7d45 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Bruiser (combat) of the Forest Spirit people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist. An empty environment for Boiler-Room Brawlers with no people, creatures, figures, silhouettes or text. Midground: a boiler room with a giant boiler, pipes venting steam, a coal pile. Foreground: a pressure gauge wall, a valve wheel, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a MOSS-washed painting. The people color #3f7d45 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #8b3701 for the biggest glowing sources and surfaces, secondary #7d99ca for medium panels, banners and lights, pop #264653 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Toll Brokers  `tollbrokers`

*Pay up. Move along.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | short and bearded; small size; mobility: grounded |
| Ethnicity + nationality | Gnome (adapted from Norse tradition) |
| Identity | male being, character |
| Wardrobe | short bearded gnome in a tall pointy hat, a toll ledger in one hand, a gate key in the other, a signal horn at the belt |
| Accessories | Toll ledger; gate key; signal horn; tall pointy hat |
| Pose | holding the ledger up, gate key in the other hand |
| Facial expression | sour, businesslike |
| People | Forest Spirit |
| Class | Basement Gnomes |
| Subclass | Toll Brokers |
| Type | Enchanter |
| Combat or support | Support |
| Silhouette hook | holding the ledger up, gate key in the other hand; the Toll ledger and the gate key break the outline so it reads instantly as a black shape |
| Shape language | circles and stars around a charm, instrument or talisman |
| Main color (60%) | #b3907c: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffb703: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #f3f1b3: the eyes, the Toll ledger and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as holding the ledger up, gate key in the other hand.
2. Few large shapes: circles and stars around a charm, instrument or talisman; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Toll ledger and the pose must be visible at 64 px.
4. Flat colors: #b3907c / #ffb703 / #f3f1b3 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Toll ledger and gate key and the enchanter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist |
| Colors | wash #3f7d45 (about 65%); accents #b3907c / #ffb703 / #f3f1b3 (about 20%) |
| Midground | a stone toll gate over a tunnel with a lowered bar, a coin box, a price sign |
| Foreground | a rope barrier, a lantern post |
| Character-relevant items | a stone toll gate over a tunnel with a lowered bar, a coin box, a price sign, a rope barrier, a lantern post |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Toll Brokers, male being, character (Gnome (adapted from Norse tradition)), apparent age late 40s.
DESIGN FOR SILHOUETTE FIRST: holding the ledger up, gate key in the other hand; the Toll ledger and the gate key break the outline so it reads instantly as a black shape. Shape language: circles and stars around a charm, instrument or talisman.
BODY: short and bearded, small size, grounded. POSE: holding the ledger up, gate key in the other hand. EXPRESSION: sour, businesslike, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): short bearded gnome in a tall pointy hat, a toll ledger in one hand, a gate key in the other, a signal horn at the belt.
COLOR (exact hex values, flat fills): main #b3907c about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffb703 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #f3f1b3 about 10%, used on the eyes, the Toll ledger and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #3f7d45 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Enchanter (support) of the Forest Spirit people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist. An empty environment for Toll Brokers with no people, creatures, figures, silhouettes or text. Midground: a stone toll gate over a tunnel with a lowered bar, a coin box, a price sign. Foreground: a rope barrier, a lantern post, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a MOSS-washed painting. The people color #3f7d45 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #b3907c for the biggest glowing sources and surfaces, secondary #ffb703 for medium panels, banners and lights, pop #f3f1b3 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Forest Spirit › Hob Neighbors

### Doorbell Ambushers  `doorbellambushers`

*Ding dong. Surprise.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | tiny and quick; tiny size; mobility: agile |
| Ethnicity + nationality | Hob (adapted from English folk tradition) |
| Identity | female being, character |
| Wardrobe | tiny hob in a thimble helmet, a tiny hammer in one hand, a doorbell-shaped bomb in the other, a lockpick at the belt |
| Accessories | Doorbell bomb; tiny hammer; welcome mat; lockpick |
| Pose | crouched beside a rigged doorbell with the hammer up |
| Facial expression | gleeful mischief |
| People | Forest Spirit |
| Class | Hob Neighbors |
| Subclass | Doorbell Ambushers |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | crouched beside a rigged doorbell with the hammer up; the Doorbell bomb and the tiny hammer break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #d78dfc: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #d62828: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #221c48: the eyes, the Doorbell bomb and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as crouched beside a rigged doorbell with the hammer up.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Doorbell bomb and the pose must be visible at 64 px.
4. Flat colors: #d78dfc / #d62828 / #221c48 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Doorbell bomb and tiny hammer and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist |
| Colors | wash #3f7d45 (about 65%); accents #d78dfc / #d62828 / #221c48 (about 20%) |
| Midground | a front door with a welcome mat and a doorbell, a porch light, a mailbox |
| Foreground | a flower pot, a rigged tripwire |
| Character-relevant items | a front door with a welcome mat and a doorbell, a porch light, a mailbox, a flower pot, a rigged tripwire |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Doorbell Ambushers, female being, character (Hob (adapted from English folk tradition)), apparent age late 50s.
DESIGN FOR SILHOUETTE FIRST: crouched beside a rigged doorbell with the hammer up; the Doorbell bomb and the tiny hammer break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: tiny and quick, tiny size, agile. POSE: crouched beside a rigged doorbell with the hammer up. EXPRESSION: gleeful mischief, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): tiny hob in a thimble helmet, a tiny hammer in one hand, a doorbell-shaped bomb in the other, a lockpick at the belt.
COLOR (exact hex values, flat fills): main #d78dfc about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #d62828 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #221c48 about 10%, used on the eyes, the Doorbell bomb and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #3f7d45 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Forest Spirit people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist. An empty environment for Doorbell Ambushers with no people, creatures, figures, silhouettes or text. Midground: a front door with a welcome mat and a doorbell, a porch light, a mailbox. Foreground: a flower pot, a rigged tripwire, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a MOSS-washed painting. The people color #3f7d45 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #d78dfc for the biggest glowing sources and surfaces, secondary #d62828 for medium panels, banners and lights, pop #221c48 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Pantry Poisoners  `pantrypoisoners`

*Please. Have some.*

**Character**

| Field | Value |
|---|---|
| Gender | Nonbinary |
| Physique | tiny and aproned; tiny size; mobility: agile |
| Ethnicity + nationality | Hob (adapted from Scottish folk tradition) |
| Identity | nonbinary being, character |
| Wardrobe | tiny hob in an apron and oven mitts, a tray of suspicious cookies in one hand, a rolling pin in the other, a bandolier of tiny spice vials |
| Accessories | Cookie tray; rolling pin; spice vials; oven mitts |
| Pose | offering a tray of cookies, rolling pin behind the back |
| Facial expression | sweetly innocent |
| People | Forest Spirit |
| Class | Hob Neighbors |
| Subclass | Pantry Poisoners |
| Type | Controller |
| Combat or support | Combat |
| Silhouette hook | offering a tray of cookies, rolling pin behind the back; the Cookie tray and the rolling pin break the outline so it reads instantly as a black shape |
| Shape language | hexagons and wide arc gestures with tools hanging off the body |
| Main color (60%) | #8fe00f: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #2ec4b6: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff7c7: the eyes, the Cookie tray and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as offering a tray of cookies, rolling pin behind the back.
2. Few large shapes: hexagons and wide arc gestures with tools hanging off the body; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Cookie tray and the pose must be visible at 64 px.
4. Flat colors: #8fe00f / #2ec4b6 / #fff7c7 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Cookie tray and rolling pin and the controller shape language.

**Background**

| Field | Value |
|---|---|
| Background | a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist |
| Colors | wash #3f7d45 (about 65%); accents #8fe00f / #2ec4b6 / #fff7c7 (about 20%) |
| Midground | an overgrown pantry kitchen with an oven, a spice rack, a cookie jar |
| Foreground | a rolling counter, a stove with a pot |
| Character-relevant items | an overgrown pantry kitchen with an oven, a spice rack, a cookie jar, a rolling counter, a stove with a pot |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Pantry Poisoners, nonbinary being, character (Hob (adapted from Scottish folk tradition)), apparent age early 50s.
DESIGN FOR SILHOUETTE FIRST: offering a tray of cookies, rolling pin behind the back; the Cookie tray and the rolling pin break the outline so it reads instantly as a black shape. Shape language: hexagons and wide arc gestures with tools hanging off the body.
BODY: tiny and aproned, tiny size, agile. POSE: offering a tray of cookies, rolling pin behind the back. EXPRESSION: sweetly innocent, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): tiny hob in an apron and oven mitts, a tray of suspicious cookies in one hand, a rolling pin in the other, a bandolier of tiny spice vials.
COLOR (exact hex values, flat fills): main #8fe00f about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #2ec4b6 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff7c7 about 10%, used on the eyes, the Cookie tray and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #3f7d45 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Controller (combat) of the Forest Spirit people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist. An empty environment for Pantry Poisoners with no people, creatures, figures, silhouettes or text. Midground: an overgrown pantry kitchen with an oven, a spice rack, a cookie jar. Foreground: a rolling counter, a stove with a pot, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a MOSS-washed painting. The people color #3f7d45 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #8fe00f for the biggest glowing sources and surfaces, secondary #2ec4b6 for medium panels, banners and lights, pop #fff7c7 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Block-Watch Sentries  `blockwatch`

*We see everything. Quietly.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | tiny and alert; tiny size; mobility: grounded |
| Ethnicity + nationality | Hob (adapted from Irish folk tradition) |
| Identity | male being, character |
| Wardrobe | tiny hob in a cap blowing a whistle, a lantern in one hand, a tiny baseball bat on one shoulder |
| Accessories | Lantern; whistle; tiny bat; tiny cap |
| Pose | blowing a whistle, tiny bat over one shoulder |
| Facial expression | alert and officious |
| People | Forest Spirit |
| Class | Hob Neighbors |
| Subclass | Block-Watch Sentries |
| Type | Fighter |
| Combat or support | Combat |
| Silhouette hook | blowing a whistle, tiny bat over one shoulder; the Lantern and the whistle break the outline so it reads instantly as a black shape |
| Shape language | balanced diagonals with one clear weapon line |
| Main color (60%) | #cf82c6: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #3bceac: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #540d6e: the eyes, the Lantern and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as blowing a whistle, tiny bat over one shoulder.
2. Few large shapes: balanced diagonals with one clear weapon line; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Lantern and the pose must be visible at 64 px.
4. Flat colors: #cf82c6 / #3bceac / #540d6e as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Lantern and whistle and the fighter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist |
| Colors | wash #3f7d45 (about 65%); accents #cf82c6 / #3bceac / #540d6e (about 20%) |
| Midground | a street corner with a porch-light house row, a streetlamp, a mailbox |
| Foreground | a neighborhood-watch sign, a picket fence |
| Character-relevant items | a street corner with a porch-light house row, a streetlamp, a mailbox, a neighborhood-watch sign, a picket fence |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Block-Watch Sentries, male being, character (Hob (adapted from Irish folk tradition)), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: blowing a whistle, tiny bat over one shoulder; the Lantern and the whistle break the outline so it reads instantly as a black shape. Shape language: balanced diagonals with one clear weapon line.
BODY: tiny and alert, tiny size, grounded. POSE: blowing a whistle, tiny bat over one shoulder. EXPRESSION: alert and officious, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): tiny hob in a cap blowing a whistle, a lantern in one hand, a tiny baseball bat on one shoulder.
COLOR (exact hex values, flat fills): main #cf82c6 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #3bceac about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #540d6e about 10%, used on the eyes, the Lantern and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #3f7d45 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Fighter (combat) of the Forest Spirit people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a drowned suburb overtaken by forest: roots through a server room, mossy satellite dishes, ferns on car roofs, low mist. An empty environment for Block-Watch Sentries with no people, creatures, figures, silhouettes or text. Midground: a street corner with a porch-light house row, a streetlamp, a mailbox. Foreground: a neighborhood-watch sign, a picket fence, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a MOSS-washed painting. The people color #3f7d45 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #cf82c6 for the biggest glowing sources and surfaces, secondary #3bceac for medium panels, banners and lights, pop #540d6e for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


---

# Eldritch
*People color: Abyss #0b7a75. Background setting: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls.*

**Tagline:** Not from here. Not from now. Armed anyway.  
**Classes:** Deep Ones (Tidecall Priests, Coralbone Sentinels, Pearl-Eyed Oracles); Mi-Go (Braincase Surgeons, Etherwing Navigators, Signal-Hive Engineers); Shoggoths (Many-Maw Devourers, Mimic-Flesh Infiltrators, Memory-Mass Archivists); Elder Things (Starstone Architects, Fossil-Script Historians, Wingfold Wardens); Nightgaunts (Dream-Snatchers, Voidwing Scouts, Nightmare Shepherds); Hounds of Tindalos (Corner-Stalkers, Time-Scent Trackers, Fracture-Jaw Reapers)


## Eldritch › Deep Ones

### Tidecall Priests  `tidecallpriests`

*The tide answers. Kneel.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | hunched and amphibious; large size; mobility: aquatic |
| Ethnicity + nationality | Deep One (adapted from coastal folklore) |
| Identity | female being, an amphibious fish-man: scaled skin, wide fish eyes, gills at the neck, webbed hands and feet, a finned crest |
| Wardrobe | tall hunched amphibious Deep One priest in sodden ceremonial wet-robes, fins and gills, webbed hands holding a shell staff and a brine censer, a tide chart scroll at the belt |
| Accessories | Shell staff; brine censer; wet-robes; tide chart |
| Pose | raising the shell staff as the tide rises at the feet |
| Facial expression | serene, slow-blinking |
| People | Eldritch |
| Class | Deep Ones |
| Subclass | Tidecall Priests |
| Type | Support |
| Combat or support | Support |
| Silhouette hook | raising the shell staff as the tide rises at the feet; the Shell staff and the brine censer break the outline so it reads instantly as a black shape |
| Shape language | soft rounded rectangles with an open palm and a visible kit |
| Main color (60%) | #a35085: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #fff0d1: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #9d4edd: the eyes, the Shell staff and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as raising the shell staff as the tide rises at the feet.
2. Few large shapes: soft rounded rectangles with an open palm and a visible kit; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Shell staff and the pose must be visible at 64 px.
4. Flat colors: #a35085 / #fff0d1 / #9d4edd as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Shell staff and brine censer and the support shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #a35085 / #fff0d1 / #9d4edd (about 20%) |
| Midground | a drowned subway platform at low tide with a flooded altar, a shell-covered pillar |
| Foreground | tide pools, a tide-clock on the wall |
| Character-relevant items | a drowned subway platform at low tide with a flooded altar, a shell-covered pillar, tide pools, a tide-clock on the wall |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Tidecall Priests, female being, an amphibious fish-man: scaled skin, wide fish eyes, gills at the neck, webbed hands and feet, a finned crest (Deep One (adapted from coastal folklore)), apparent age late 30s.
DESIGN FOR SILHOUETTE FIRST: raising the shell staff as the tide rises at the feet; the Shell staff and the brine censer break the outline so it reads instantly as a black shape. Shape language: soft rounded rectangles with an open palm and a visible kit.
BODY: hunched and amphibious, large size, aquatic. POSE: raising the shell staff as the tide rises at the feet. EXPRESSION: serene, slow-blinking, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): tall hunched amphibious Deep One priest in sodden ceremonial wet-robes, fins and gills, webbed hands holding a shell staff and a brine censer, a tide chart scroll at the belt.
COLOR (exact hex values, flat fills): main #a35085 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #fff0d1 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #9d4edd about 10%, used on the eyes, the Shell staff and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Support (support) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Tidecall Priests with no people, creatures, figures, silhouettes or text. Midground: a drowned subway platform at low tide with a flooded altar, a shell-covered pillar. Foreground: tide pools, a tide-clock on the wall, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #a35085 for the biggest glowing sources and surfaces, secondary #fff0d1 for medium panels, banners and lights, pop #9d4edd for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Coralbone Sentinels  `coralbone`

*The reef does not retreat.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | broad and squat, reef-armored; large size; mobility: aquatic |
| Ethnicity + nationality | Deep One (reef-grown) |
| Identity | male being, an amphibious fish-man: scaled skin, wide fish eyes, gills at the neck, webbed hands and feet, a finned crest |
| Wardrobe | broad squat Deep One in jagged coral-plate armor with fins and gills, a barnacle shield on one arm, a trident in the other, an anchor chain across the chest |
| Accessories | Coral-plate armor; trident; barnacle shield; anchor chain |
| Pose | trident planted, barnacle shield braced |
| Facial expression | stoic, barnacled scowl |
| People | Eldritch |
| Class | Deep Ones |
| Subclass | Coralbone Sentinels |
| Type | Tank |
| Combat or support | Combat |
| Silhouette hook | trident planted, barnacle shield braced; the Coral-plate armor and the trident break the outline so it reads instantly as a black shape |
| Shape language | wide blocky rectangles and a big shield shape |
| Main color (60%) | #803c49: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #389d83: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #e4ffda: the eyes, the Coral-plate armor and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as trident planted, barnacle shield braced.
2. Few large shapes: wide blocky rectangles and a big shield shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Coral-plate armor and the pose must be visible at 64 px.
4. Flat colors: #803c49 / #389d83 / #e4ffda as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Coral-plate armor and trident and the tank shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #803c49 / #389d83 / #e4ffda (about 20%) |
| Midground | a coral-grown flooded gate with an iron portcullis, a reef wall |
| Foreground | a sunken ship's prow, an anchor on a chain |
| Character-relevant items | a coral-grown flooded gate with an iron portcullis, a reef wall, a sunken ship's prow, an anchor on a chain |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Coralbone Sentinels, male being, an amphibious fish-man: scaled skin, wide fish eyes, gills at the neck, webbed hands and feet, a finned crest (Deep One (reef-grown)), apparent age late 20s.
DESIGN FOR SILHOUETTE FIRST: trident planted, barnacle shield braced; the Coral-plate armor and the trident break the outline so it reads instantly as a black shape. Shape language: wide blocky rectangles and a big shield shape.
BODY: broad and squat, reef-armored, large size, aquatic. POSE: trident planted, barnacle shield braced. EXPRESSION: stoic, barnacled scowl, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): broad squat Deep One in jagged coral-plate armor with fins and gills, a barnacle shield on one arm, a trident in the other, an anchor chain across the chest.
COLOR (exact hex values, flat fills): main #803c49 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #389d83 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #e4ffda about 10%, used on the eyes, the Coral-plate armor and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Tank (combat) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Coralbone Sentinels with no people, creatures, figures, silhouettes or text. Midground: a coral-grown flooded gate with an iron portcullis, a reef wall. Foreground: a sunken ship's prow, an anchor on a chain, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #803c49 for the biggest glowing sources and surfaces, secondary #389d83 for medium panels, banners and lights, pop #e4ffda for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Pearl-Eyed Oracles  `pearleyed`

*I remember what you will do.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | slender and amphibious; medium size; mobility: aquatic |
| Ethnicity + nationality | Deep One (tide-pool oracle) |
| Identity | female being, an amphibious fish-man: scaled skin, wide fish eyes, gills at the neck, webbed hands and feet, a finned crest |
| Wardrobe | slender Deep One oracle with luminous pearl eyes and a kelp veil, a bone staff in one hand, a tide-glass orb in the other |
| Accessories | Pearl-eye lenses; bone staff; tide-glass orb; kelp veil |
| Pose | holding up a tide-glass orb, kelp veil drifting |
| Facial expression | luminous, distant |
| People | Eldritch |
| Class | Deep Ones |
| Subclass | Pearl-Eyed Oracles |
| Type | Caster |
| Combat or support | Combat |
| Silhouette hook | holding up a tide-glass orb, kelp veil drifting; the Pearl-eye lenses and the bone staff break the outline so it reads instantly as a black shape |
| Shape language | flowing diamonds and a bright flat focus shape |
| Main color (60%) | #caa2ab: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #d00000: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #3a0ca3: the eyes, the Pearl-eye lenses and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as holding up a tide-glass orb, kelp veil drifting.
2. Few large shapes: flowing diamonds and a bright flat focus shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Pearl-eye lenses and the pose must be visible at 64 px.
4. Flat colors: #caa2ab / #d00000 / #3a0ca3 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Pearl-eye lenses and bone staff and the caster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #caa2ab / #d00000 / #3a0ca3 (about 20%) |
| Midground | a tide-pool temple with a glowing pearl altar, stone steps into water |
| Foreground | hanging kelp, a ring of standing stones |
| Character-relevant items | a tide-pool temple with a glowing pearl altar, stone steps into water, hanging kelp, a ring of standing stones |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Pearl-Eyed Oracles, female being, an amphibious fish-man: scaled skin, wide fish eyes, gills at the neck, webbed hands and feet, a finned crest (Deep One (tide-pool oracle)), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: holding up a tide-glass orb, kelp veil drifting; the Pearl-eye lenses and the bone staff break the outline so it reads instantly as a black shape. Shape language: flowing diamonds and a bright flat focus shape.
BODY: slender and amphibious, medium size, aquatic. POSE: holding up a tide-glass orb, kelp veil drifting. EXPRESSION: luminous, distant, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): slender Deep One oracle with luminous pearl eyes and a kelp veil, a bone staff in one hand, a tide-glass orb in the other.
COLOR (exact hex values, flat fills): main #caa2ab about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #d00000 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #3a0ca3 about 10%, used on the eyes, the Pearl-eye lenses and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Caster (combat) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Pearl-Eyed Oracles with no people, creatures, figures, silhouettes or text. Midground: a tide-pool temple with a glowing pearl altar, stone steps into water. Foreground: hanging kelp, a ring of standing stones, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #caa2ab for the biggest glowing sources and surfaces, secondary #d00000 for medium panels, banners and lights, pop #3a0ca3 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Eldritch › Mi-Go

### Braincase Surgeons  `braincase`

*We keep what you were.*

**Character**

| Field | Value |
|---|---|
| Gender | Nonbinary |
| Physique | segmented and winged; medium size; mobility: flying |
| Ethnicity + nationality | Mi-Go (alien) |
| Identity | nonbinary being, an alien fungoid-insectoid technologist: a segmented chitinous body of bone-cream and charcoal plates, a bulbous ridged head with short antenna tendrils and mandibles instead of a face, four thin jointed arms and a pair of large membranous wings |
| Wardrobe | segmented winged fungus-crustacean Mi-Go in a clinical harness of glowing brain-cylinders, a delicate memory probe in one claw, a tape reel at the belt |
| Accessories | Brain-cylinder harness; memory probe; surgical wings; tape reel |
| Pose | poised with a memory probe, cylinders glowing at the chest |
| Facial expression | clinical, curious tilt |
| People | Eldritch |
| Class | Mi-Go |
| Subclass | Braincase Surgeons |
| Type | Support |
| Combat or support | Support |
| Silhouette hook | poised with a memory probe, cylinders glowing at the chest; the Brain-cylinder harness and the memory probe break the outline so it reads instantly as a black shape |
| Shape language | soft rounded rectangles with an open palm and a visible kit |
| Main color (60%) | #9066a9: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #f8961e: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #2e0d52: the eyes, the Brain-cylinder harness and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as poised with a memory probe, cylinders glowing at the chest.
2. Few large shapes: soft rounded rectangles with an open palm and a visible kit; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Brain-cylinder harness and the pose must be visible at 64 px.
4. Flat colors: #9066a9 / #f8961e / #2e0d52 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Brain-cylinder harness and memory probe and the support shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #9066a9 / #f8961e / #2e0d52 (about 20%) |
| Midground | an alien surgery lab with rows of glowing cylinders, a surgical table |
| Foreground | a reel-to-reel tape bank, a wall of monitors |
| Character-relevant items | an alien surgery lab with rows of glowing cylinders, a surgical table, a reel-to-reel tape bank, a wall of monitors |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Braincase Surgeons, nonbinary being, an alien fungoid-insectoid technologist: a segmented chitinous body of bone-cream and charcoal plates, a bulbous ridged head with short antenna tendrils and mandibles instead of a face, four thin jointed arms and a pair of large membranous wings (Mi-Go (alien)), apparent age mid 40s.
DESIGN FOR SILHOUETTE FIRST: poised with a memory probe, cylinders glowing at the chest; the Brain-cylinder harness and the memory probe break the outline so it reads instantly as a black shape. Shape language: soft rounded rectangles with an open palm and a visible kit.
BODY: segmented and winged, medium size, flying. POSE: poised with a memory probe, cylinders glowing at the chest. EXPRESSION: clinical, curious tilt, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): segmented winged fungus-crustacean Mi-Go in a clinical harness of glowing brain-cylinders, a delicate memory probe in one claw, a tape reel at the belt.
COLOR (exact hex values, flat fills): main #9066a9 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #f8961e about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #2e0d52 about 10%, used on the eyes, the Brain-cylinder harness and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Support (support) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Braincase Surgeons with no people, creatures, figures, silhouettes or text. Midground: an alien surgery lab with rows of glowing cylinders, a surgical table. Foreground: a reel-to-reel tape bank, a wall of monitors, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #9066a9 for the biggest glowing sources and surfaces, secondary #f8961e for medium panels, banners and lights, pop #2e0d52 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Etherwing Navigators  `etherwing`

*The shortest path is through.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | insectoid and winged; medium size; mobility: flying |
| Ethnicity + nationality | Mi-Go (alien) |
| Identity | male being, an alien fungoid-insectoid technologist: a segmented chitinous body of bone-cream and charcoal plates, a bulbous ridged head with short antenna tendrils and mandibles instead of a face, four thin jointed arms and a pair of large membranous wings |
| Wardrobe | winged fungus-crustacean Mi-Go navigator with circuit-patterned wings, a navigator wand in one claw, a brass sextant and a beacon pack at the belt |
| Accessories | Navigator wand; wing-sails; brass sextant; beacon pack |
| Pose | staff raised, sextant in the other claw, wings flared |
| Facial expression | wary, mandibles flared |
| People | Eldritch |
| Class | Mi-Go |
| Subclass | Etherwing Navigators |
| Type | Caster |
| Combat or support | Combat |
| Silhouette hook | staff raised, sextant in the other claw, wings flared; the Navigator wand and the wing-sails break the outline so it reads instantly as a black shape |
| Shape language | flowing diamonds and a bright flat focus shape |
| Main color (60%) | #1b6eda: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffbe0b: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #7209b7: the eyes, the Navigator wand and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Done: `art/v2/eldritch-etherwing.png` and `art/v2/eldritch-etherwing-bg.jpg` |
| Last vet | Final art accepted (made before the vetting pipeline) |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as staff raised, sextant in the other claw, wings flared.
2. Few large shapes: flowing diamonds and a bright flat focus shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Navigator wand and the pose must be visible at 64 px.
4. Flat colors: #1b6eda / #ffbe0b / #7209b7 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Navigator wand and wing-sails and the caster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #1b6eda / #ffbe0b / #7209b7 (about 20%) |
| Midground | a dimensional gate ring on a rooftop, a navigation chart wall, floating beacons |
| Foreground | a landing pad, a huge sextant statue |
| Character-relevant items | a dimensional gate ring on a rooftop, a navigation chart wall, floating beacons, a landing pad, a huge sextant statue |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Etherwing Navigators, male being, an alien fungoid-insectoid technologist: a segmented chitinous body of bone-cream and charcoal plates, a bulbous ridged head with short antenna tendrils and mandibles instead of a face, four thin jointed arms and a pair of large membranous wings (Mi-Go (alien)), apparent age late 50s.
DESIGN FOR SILHOUETTE FIRST: staff raised, sextant in the other claw, wings flared; the Navigator wand and the wing-sails break the outline so it reads instantly as a black shape. Shape language: flowing diamonds and a bright flat focus shape.
BODY: insectoid and winged, medium size, flying. POSE: staff raised, sextant in the other claw, wings flared. EXPRESSION: wary, mandibles flared, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): winged fungus-crustacean Mi-Go navigator with circuit-patterned wings, a navigator wand in one claw, a brass sextant and a beacon pack at the belt.
COLOR (exact hex values, flat fills): main #1b6eda about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ffbe0b about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #7209b7 about 10%, used on the eyes, the Navigator wand and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Caster (combat) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Etherwing Navigators with no people, creatures, figures, silhouettes or text. Midground: a dimensional gate ring on a rooftop, a navigation chart wall, floating beacons. Foreground: a landing pad, a huge sextant statue, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #1b6eda for the biggest glowing sources and surfaces, secondary #ffbe0b for medium panels, banners and lights, pop #7209b7 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Signal-Hive Engineers  `signalhive`

*We heard you before you spoke.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | many-limbed and winged; large size; mobility: flying |
| Ethnicity + nationality | Mi-Go (alien) |
| Identity | female being, an alien fungoid-insectoid technologist: a segmented chitinous body of bone-cream and charcoal plates, a bulbous ridged head with short antenna tendrils and mandibles instead of a face, four thin jointed arms and a pair of large membranous wings |
| Wardrobe | many-limbed winged fungus-crustacean Mi-Go engineer in a harness, an antenna lance in one claw, a signal horn and a cable bundle at the belt |
| Accessories | Relay tower pack; signal horn; antenna lance; cable bundle |
| Pose | antenna lance leveled, signal horn raised |
| Facial expression | intent, antennae forward |
| People | Eldritch |
| Class | Mi-Go |
| Subclass | Signal-Hive Engineers |
| Type | Controller |
| Combat or support | Combat |
| Silhouette hook | antenna lance leveled, signal horn raised; the Relay tower pack and the signal horn break the outline so it reads instantly as a black shape |
| Shape language | hexagons and wide arc gestures with tools hanging off the body |
| Main color (60%) | #a30364: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #06d6a0: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #ffd60a: the eyes, the Relay tower pack and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as antenna lance leveled, signal horn raised.
2. Few large shapes: hexagons and wide arc gestures with tools hanging off the body; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Relay tower pack and the pose must be visible at 64 px.
4. Flat colors: #a30364 / #06d6a0 / #ffd60a as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Relay tower pack and signal horn and the controller shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #a30364 / #06d6a0 / #ffd60a (about 20%) |
| Midground | a relay-tower field with an alien transmitter dome, a ring of dishes |
| Foreground | a hive of cables, a humming machine core |
| Character-relevant items | a relay-tower field with an alien transmitter dome, a ring of dishes, a hive of cables, a humming machine core |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Signal-Hive Engineers, female being, an alien fungoid-insectoid technologist: a segmented chitinous body of bone-cream and charcoal plates, a bulbous ridged head with short antenna tendrils and mandibles instead of a face, four thin jointed arms and a pair of large membranous wings (Mi-Go (alien)), apparent age late 30s.
DESIGN FOR SILHOUETTE FIRST: antenna lance leveled, signal horn raised; the Relay tower pack and the signal horn break the outline so it reads instantly as a black shape. Shape language: hexagons and wide arc gestures with tools hanging off the body.
BODY: many-limbed and winged, large size, flying. POSE: antenna lance leveled, signal horn raised. EXPRESSION: intent, antennae forward, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): many-limbed winged fungus-crustacean Mi-Go engineer in a harness, an antenna lance in one claw, a signal horn and a cable bundle at the belt.
COLOR (exact hex values, flat fills): main #a30364 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #06d6a0 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #ffd60a about 10%, used on the eyes, the Relay tower pack and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Controller (combat) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Signal-Hive Engineers with no people, creatures, figures, silhouettes or text. Midground: a relay-tower field with an alien transmitter dome, a ring of dishes. Foreground: a hive of cables, a humming machine core, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #a30364 for the biggest glowing sources and surfaces, secondary #06d6a0 for medium panels, banners and lights, pop #ffd60a for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Eldritch › Shoggoths

### Many-Maw Devourers  `manymaw`

*Everything is a mouth.*

**Character**

| Field | Value |
|---|---|
| Gender | Nonbinary |
| Physique | shapeless and bristling; huge size; mobility: grounded |
| Ethnicity + nationality | Shoggoth (living flesh) |
| Identity | nonbinary being, a living-flesh creature: a mass of dark glossy flesh with many eyes and mouths opening across a body that reshapes itself |
| Wardrobe | shapeless dark Shoggoth mass bristling with eyes, jaws and tendrils, a scavenged armor shard half-swallowed into the body |
| Accessories | Bone-plate lumps; tendril whips; hungering mouths; scavenged armor shards |
| Pose | lunging with tendrils and jaws on every side |
| Facial expression | many eyes, many mouths grinning |
| People | Eldritch |
| Class | Shoggoths |
| Subclass | Many-Maw Devourers |
| Type | Bruiser |
| Combat or support | Combat |
| Silhouette hook | lunging with tendrils and jaws on every side; the Bone-plate lumps and the tendril whips break the outline so it reads instantly as a black shape |
| Shape language | heavy trapezoids, oversized fists and shoulders |
| Main color (60%) | #62000f: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #e4ffda: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #1d3557: the eyes, the Bone-plate lumps and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as lunging with tendrils and jaws on every side.
2. Few large shapes: heavy trapezoids, oversized fists and shoulders; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Bone-plate lumps and the pose must be visible at 64 px.
4. Flat colors: #62000f / #e4ffda / #1d3557 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Bone-plate lumps and tendril whips and the bruiser shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #62000f / #e4ffda / #1d3557 (about 20%) |
| Midground | a collapsed warehouse with gnawed walls, scattered scrap armor |
| Foreground | a trail of slime, a ripped shutter door |
| Character-relevant items | a collapsed warehouse with gnawed walls, scattered scrap armor, a trail of slime, a ripped shutter door |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Many-Maw Devourers, nonbinary being, a living-flesh creature: a mass of dark glossy flesh with many eyes and mouths opening across a body that reshapes itself (Shoggoth (living flesh)), apparent age late 30s.
DESIGN FOR SILHOUETTE FIRST: lunging with tendrils and jaws on every side; the Bone-plate lumps and the tendril whips break the outline so it reads instantly as a black shape. Shape language: heavy trapezoids, oversized fists and shoulders.
BODY: shapeless and bristling, huge size, grounded. POSE: lunging with tendrils and jaws on every side. EXPRESSION: many eyes, many mouths grinning, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): shapeless dark Shoggoth mass bristling with eyes, jaws and tendrils, a scavenged armor shard half-swallowed into the body.
COLOR (exact hex values, flat fills): main #62000f about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #e4ffda about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #1d3557 about 10%, used on the eyes, the Bone-plate lumps and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Bruiser (combat) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Many-Maw Devourers with no people, creatures, figures, silhouettes or text. Midground: a collapsed warehouse with gnawed walls, scattered scrap armor. Foreground: a trail of slime, a ripped shutter door, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #62000f for the biggest glowing sources and surfaces, secondary #e4ffda for medium panels, banners and lights, pop #1d3557 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Mimic-Flesh Infiltrators  `mimicflesh`

*That wasn't me. It was.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | humanoid with a melting face; medium size; mobility: agile |
| Ethnicity + nationality | Shoggoth (living flesh) |
| Identity | female being, a living-flesh creature: a mass of dark glossy flesh with many eyes and mouths opening across a body that reshapes itself |
| Wardrobe | humanoid shoggoth figure with a face melting at the edges into an eye, a borrowed coat, one hand a pale blade, a half-worn mask in the other hand |
| Accessories | Borrowed coat; voice-box; blade-limb; mask collection |
| Pose | stepping from a crowd with one blade-limb out |
| Facial expression | face melting, one eye over the other |
| People | Eldritch |
| Class | Shoggoths |
| Subclass | Mimic-Flesh Infiltrators |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | stepping from a crowd with one blade-limb out; the Borrowed coat and the voice-box break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #07c621: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ff595e: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #2e2200: the eyes, the Borrowed coat and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as stepping from a crowd with one blade-limb out.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Borrowed coat and the pose must be visible at 64 px.
4. Flat colors: #07c621 / #ff595e / #2e2200 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Borrowed coat and voice-box and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #07c621 / #ff595e / #2e2200 (about 20%) |
| Midground | a party with a coat check and a wall of mirrors, a stack of mannequins |
| Foreground | a costume rack, a velvet-roped stage |
| Character-relevant items | a party with a coat check and a wall of mirrors, a stack of mannequins, a costume rack, a velvet-roped stage |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Mimic-Flesh Infiltrators, female being, a living-flesh creature: a mass of dark glossy flesh with many eyes and mouths opening across a body that reshapes itself (Shoggoth (living flesh)), apparent age early 40s.
DESIGN FOR SILHOUETTE FIRST: stepping from a crowd with one blade-limb out; the Borrowed coat and the voice-box break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: humanoid with a melting face, medium size, agile. POSE: stepping from a crowd with one blade-limb out. EXPRESSION: face melting, one eye over the other, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): humanoid shoggoth figure with a face melting at the edges into an eye, a borrowed coat, one hand a pale blade, a half-worn mask in the other hand.
COLOR (exact hex values, flat fills): main #07c621 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ff595e about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #2e2200 about 10%, used on the eyes, the Borrowed coat and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Mimic-Flesh Infiltrators with no people, creatures, figures, silhouettes or text. Midground: a party with a coat check and a wall of mirrors, a stack of mannequins. Foreground: a costume rack, a velvet-roped stage, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #07c621 for the biggest glowing sources and surfaces, secondary #ff595e for medium panels, banners and lights, pop #2e2200 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Memory-Mass Archivists  `memorymass`

*I remember every one of you.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | hulking and book-layered; huge size; mobility: grounded |
| Ethnicity + nationality | Shoggoth (living flesh) |
| Identity | male being, a living-flesh creature: a mass of dark glossy flesh with many eyes and mouths opening across a body that reshapes itself |
| Wardrobe | hulking amorphous Shoggoth mass layered with half-digested books and small memory-lamps, one big eye peering out of a page, an archive satchel |
| Accessories | Layered shell of scavenged books; memory-lamps; archive satchel; slime-spine |
| Pose | hulking forward with books and lamps layered on the body |
| Facial expression | single heavy-lidded eye in a page |
| People | Eldritch |
| Class | Shoggoths |
| Subclass | Memory-Mass Archivists |
| Type | Caster |
| Combat or support | Combat |
| Silhouette hook | hulking forward with books and lamps layered on the body; the Layered shell of scavenged books and the memory-lamps break the outline so it reads instantly as a black shape |
| Shape language | flowing diamonds and a bright flat focus shape |
| Main color (60%) | #8b3b7b: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #41d1c3: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #3d405b: the eyes, the Layered shell of scavenged books and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as hulking forward with books and lamps layered on the body.
2. Few large shapes: flowing diamonds and a bright flat focus shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Layered shell of scavenged books and the pose must be visible at 64 px.
4. Flat colors: #8b3b7b / #41d1c3 / #3d405b as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Layered shell of scavenged books and memory-lamps and the caster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #8b3b7b / #41d1c3 / #3d405b (about 20%) |
| Midground | a library of towering shelves with floating pages, a reading desk, a card catalog |
| Foreground | glowing lamps, a grand staircase |
| Character-relevant items | a library of towering shelves with floating pages, a reading desk, a card catalog, glowing lamps, a grand staircase |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Memory-Mass Archivists, male being, a living-flesh creature: a mass of dark glossy flesh with many eyes and mouths opening across a body that reshapes itself (Shoggoth (living flesh)), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: hulking forward with books and lamps layered on the body; the Layered shell of scavenged books and the memory-lamps break the outline so it reads instantly as a black shape. Shape language: flowing diamonds and a bright flat focus shape.
BODY: hulking and book-layered, huge size, grounded. POSE: hulking forward with books and lamps layered on the body. EXPRESSION: single heavy-lidded eye in a page, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): hulking amorphous Shoggoth mass layered with half-digested books and small memory-lamps, one big eye peering out of a page, an archive satchel.
COLOR (exact hex values, flat fills): main #8b3b7b about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #41d1c3 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #3d405b about 10%, used on the eyes, the Layered shell of scavenged books and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Caster (combat) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Memory-Mass Archivists with no people, creatures, figures, silhouettes or text. Midground: a library of towering shelves with floating pages, a reading desk, a card catalog. Foreground: glowing lamps, a grand staircase, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #8b3b7b for the biggest glowing sources and surfaces, secondary #41d1c3 for medium panels, banners and lights, pop #3d405b for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Eldritch › Elder Things

### Starstone Architects  `starstone`

*We built that. We can unbuild it.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | barrel-bodied with five limbs; large size; mobility: grounded |
| Ethnicity + nationality | Elder Thing (alien) |
| Identity | male being, an ancient alien architect: a tall ribbed barrel-shaped torso with five vertical ridges, a five-pointed starfish-shaped head with a bright eye at each point, five jointed limbs and folded membranous wings |
| Wardrobe | barrel-bodied star-headed Elder Thing with five radiating limbs holding a starstone mallet and a surveying rod, wing-clamps folded at the back |
| Accessories | Starstone mallet; surveying rod; tessellation tablets; wing-clamps |
| Pose | raising a starstone mallet, rod in another limb |
| Facial expression | calm, five-pointed head tilted |
| People | Eldritch |
| Class | Elder Things |
| Subclass | Starstone Architects |
| Type | Controller |
| Combat or support | Combat |
| Silhouette hook | raising a starstone mallet, rod in another limb; the Starstone mallet and the surveying rod break the outline so it reads instantly as a black shape |
| Shape language | hexagons and wide arc gestures with tools hanging off the body |
| Main color (60%) | #8e44ad: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #e9c46a: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #06d6a0: the eyes, the Starstone mallet and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as raising a starstone mallet, rod in another limb.
2. Few large shapes: hexagons and wide arc gestures with tools hanging off the body; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Starstone mallet and the pose must be visible at 64 px.
4. Flat colors: #8e44ad / #e9c46a / #06d6a0 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Starstone mallet and surveying rod and the controller shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #8e44ad / #e9c46a / #06d6a0 (about 20%) |
| Midground | a field of tessellated starstone pillars, a half-built geometric tower |
| Foreground | a surveying tripod, glowing prism pillars |
| Character-relevant items | a field of tessellated starstone pillars, a half-built geometric tower, a surveying tripod, glowing prism pillars |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Starstone Architects, male being, an ancient alien architect: a tall ribbed barrel-shaped torso with five vertical ridges, a five-pointed starfish-shaped head with a bright eye at each point, five jointed limbs and folded membranous wings (Elder Thing (alien)), apparent age mid 30s.
DESIGN FOR SILHOUETTE FIRST: raising a starstone mallet, rod in another limb; the Starstone mallet and the surveying rod break the outline so it reads instantly as a black shape. Shape language: hexagons and wide arc gestures with tools hanging off the body.
BODY: barrel-bodied with five limbs, large size, grounded. POSE: raising a starstone mallet, rod in another limb. EXPRESSION: calm, five-pointed head tilted, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): barrel-bodied star-headed Elder Thing with five radiating limbs holding a starstone mallet and a surveying rod, wing-clamps folded at the back.
COLOR (exact hex values, flat fills): main #8e44ad about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #e9c46a about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #06d6a0 about 10%, used on the eyes, the Starstone mallet and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Controller (combat) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Starstone Architects with no people, creatures, figures, silhouettes or text. Midground: a field of tessellated starstone pillars, a half-built geometric tower. Foreground: a surveying tripod, glowing prism pillars, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #8e44ad for the biggest glowing sources and surfaces, secondary #e9c46a for medium panels, banners and lights, pop #06d6a0 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Fossil-Script Historians  `fossilscript`

*It's all written down. In rock.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | barrel-bodied scholar; large size; mobility: grounded |
| Ethnicity + nationality | Elder Thing (alien) |
| Identity | female being, an ancient alien architect: a tall ribbed barrel-shaped torso with five vertical ridges, a five-pointed starfish-shaped head with a bright eye at each point, five jointed limbs and folded membranous wings |
| Wardrobe | barrel-bodied star-headed Elder Thing scholar with folded wings, a fine strata brush in one radial limb and a chisel in another, a small fossil lamp |
| Accessories | Chisel; strata-brush; rubbing sheets; fossil lamp |
| Pose | brushing a glowing tablet, wings folded behind |
| Facial expression | absorbed, patient |
| People | Eldritch |
| Class | Elder Things |
| Subclass | Fossil-Script Historians |
| Type | Enchanter |
| Combat or support | Support |
| Silhouette hook | brushing a glowing tablet, wings folded behind; the Chisel and the strata-brush break the outline so it reads instantly as a black shape |
| Shape language | circles and stars around a charm, instrument or talisman |
| Main color (60%) | #635ebe: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #264653: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #e76f51: the eyes, the Chisel and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as brushing a glowing tablet, wings folded behind.
2. Few large shapes: circles and stars around a charm, instrument or talisman; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Chisel and the pose must be visible at 64 px.
4. Flat colors: #635ebe / #264653 / #e76f51 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Chisel and strata-brush and the enchanter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #635ebe / #264653 / #e76f51 (about 20%) |
| Midground | an excavation site with a glowing carved stone tablet wall, a rock-cut stairway |
| Foreground | scaffolding, a stack of rubbing sheets |
| Character-relevant items | an excavation site with a glowing carved stone tablet wall, a rock-cut stairway, scaffolding, a stack of rubbing sheets |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Fossil-Script Historians, female being, an ancient alien architect: a tall ribbed barrel-shaped torso with five vertical ridges, a five-pointed starfish-shaped head with a bright eye at each point, five jointed limbs and folded membranous wings (Elder Thing (alien)), apparent age mid 60s.
DESIGN FOR SILHOUETTE FIRST: brushing a glowing tablet, wings folded behind; the Chisel and the strata-brush break the outline so it reads instantly as a black shape. Shape language: circles and stars around a charm, instrument or talisman.
BODY: barrel-bodied scholar, large size, grounded. POSE: brushing a glowing tablet, wings folded behind. EXPRESSION: absorbed, patient, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): barrel-bodied star-headed Elder Thing scholar with folded wings, a fine strata brush in one radial limb and a chisel in another, a small fossil lamp.
COLOR (exact hex values, flat fills): main #635ebe about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #264653 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #e76f51 about 10%, used on the eyes, the Chisel and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Enchanter (support) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Fossil-Script Historians with no people, creatures, figures, silhouettes or text. Midground: an excavation site with a glowing carved stone tablet wall, a rock-cut stairway. Foreground: scaffolding, a stack of rubbing sheets, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #635ebe for the biggest glowing sources and surfaces, secondary #264653 for medium panels, banners and lights, pop #e76f51 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Wingfold Wardens  `wingfold`

*Fold. Strike. Unfold.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | barrel-bodied and slate-armored; large size; mobility: flying |
| Ethnicity + nationality | Elder Thing (alien) |
| Identity | male being, an ancient alien architect: a tall ribbed barrel-shaped torso with five vertical ridges, a five-pointed starfish-shaped head with a bright eye at each point, five jointed limbs and folded membranous wings |
| Wardrobe | barrel-bodied star-headed Elder Thing guardian with slate-like folded wings as armor, a spear in one limb, shield-clamps, a star visor |
| Accessories | Slate-plate wings; spear; shield-clamps; star-visor |
| Pose | wings half-unfurled, spear leveled |
| Facial expression | severe, star-visor down |
| People | Eldritch |
| Class | Elder Things |
| Subclass | Wingfold Wardens |
| Type | Tank |
| Combat or support | Combat |
| Silhouette hook | wings half-unfurled, spear leveled; the Slate-plate wings and the spear break the outline so it reads instantly as a black shape |
| Shape language | wide blocky rectangles and a big shield shape |
| Main color (60%) | #db09fb: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #8338ec: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff1e6: the eyes, the Slate-plate wings and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as wings half-unfurled, spear leveled.
2. Few large shapes: wide blocky rectangles and a big shield shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Slate-plate wings and the pose must be visible at 64 px.
4. Flat colors: #db09fb / #8338ec / #fff1e6 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Slate-plate wings and spear and the tank shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #db09fb / #8338ec / #fff1e6 (about 20%) |
| Midground | a slate-roofed watchtower with a wing-shaped gate, a ring of standing slate walls |
| Foreground | a signal beacon |
| Character-relevant items | a slate-roofed watchtower with a wing-shaped gate, a ring of standing slate walls, a signal beacon |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Wingfold Wardens, male being, an ancient alien architect: a tall ribbed barrel-shaped torso with five vertical ridges, a five-pointed starfish-shaped head with a bright eye at each point, five jointed limbs and folded membranous wings (Elder Thing (alien)), apparent age early 50s.
DESIGN FOR SILHOUETTE FIRST: wings half-unfurled, spear leveled; the Slate-plate wings and the spear break the outline so it reads instantly as a black shape. Shape language: wide blocky rectangles and a big shield shape.
BODY: barrel-bodied and slate-armored, large size, flying. POSE: wings half-unfurled, spear leveled. EXPRESSION: severe, star-visor down, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): barrel-bodied star-headed Elder Thing guardian with slate-like folded wings as armor, a spear in one limb, shield-clamps, a star visor.
COLOR (exact hex values, flat fills): main #db09fb about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #8338ec about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff1e6 about 10%, used on the eyes, the Slate-plate wings and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Tank (combat) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Wingfold Wardens with no people, creatures, figures, silhouettes or text. Midground: a slate-roofed watchtower with a wing-shaped gate, a ring of standing slate walls. Foreground: a signal beacon, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #db09fb for the biggest glowing sources and surfaces, secondary #8338ec for medium panels, banners and lights, pop #fff1e6 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Eldritch › Nightgaunts

### Dream-Snatchers  `dreamsnatchers`

*Sleep. Be carried.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | tall, faceless and long-limbed; large size; mobility: flying |
| Ethnicity + nationality | Nightgaunt (alien) |
| Identity | male being, a tall faceless winged horror: smooth featureless black head with curling horns, long thin limbs, a barbed tail and bat-like wings |
| Wardrobe | tall smooth-faced faceless winged Nightgaunt with long limbs, barbed tail, a carry-harness across the chest, a sleep-glass lamp in one clawed hand |
| Accessories | Barbed tail; sleep-glass lamp; carry-harness; black wing-cloak |
| Pose | clutching a limp bundle in long limbs, barbed tail curled |
| Facial expression | faceless, smooth and blank |
| People | Eldritch |
| Class | Nightgaunts |
| Subclass | Dream-Snatchers |
| Type | Controller |
| Combat or support | Combat |
| Silhouette hook | clutching a limp bundle in long limbs, barbed tail curled; the Barbed tail and the sleep-glass lamp break the outline so it reads instantly as a black shape |
| Shape language | hexagons and wide arc gestures with tools hanging off the body |
| Main color (60%) | #862ef4: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #e0aaff: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #ff6d00: the eyes, the Barbed tail and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as clutching a limp bundle in long limbs, barbed tail curled.
2. Few large shapes: hexagons and wide arc gestures with tools hanging off the body; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Barbed tail and the pose must be visible at 64 px.
4. Flat colors: #862ef4 / #e0aaff / #ff6d00 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Barbed tail and sleep-glass lamp and the controller shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #862ef4 / #e0aaff / #ff6d00 (about 20%) |
| Midground | a dream-road bridge over a void, a bed on a floating platform |
| Foreground | a row of sleeping cots, hanging sleep-lanterns |
| Character-relevant items | a dream-road bridge over a void, a bed on a floating platform, a row of sleeping cots, hanging sleep-lanterns |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Dream-Snatchers, male being, a tall faceless winged horror: smooth featureless black head with curling horns, long thin limbs, a barbed tail and bat-like wings (Nightgaunt (alien)), apparent age early 20s.
DESIGN FOR SILHOUETTE FIRST: clutching a limp bundle in long limbs, barbed tail curled; the Barbed tail and the sleep-glass lamp break the outline so it reads instantly as a black shape. Shape language: hexagons and wide arc gestures with tools hanging off the body.
BODY: tall, faceless and long-limbed, large size, flying. POSE: clutching a limp bundle in long limbs, barbed tail curled. EXPRESSION: faceless, smooth and blank, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): tall smooth-faced faceless winged Nightgaunt with long limbs, barbed tail, a carry-harness across the chest, a sleep-glass lamp in one clawed hand.
COLOR (exact hex values, flat fills): main #862ef4 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #e0aaff about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #ff6d00 about 10%, used on the eyes, the Barbed tail and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Controller (combat) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Dream-Snatchers with no people, creatures, figures, silhouettes or text. Midground: a dream-road bridge over a void, a bed on a floating platform. Foreground: a row of sleeping cots, hanging sleep-lanterns, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #862ef4 for the biggest glowing sources and surfaces, secondary #e0aaff for medium panels, banners and lights, pop #ff6d00 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Voidwing Scouts  `voidwing`

*You did not see us pass.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | tall and faceless; large size; mobility: flying |
| Ethnicity + nationality | Nightgaunt (alien) |
| Identity | female being, a tall faceless winged horror: smooth featureless black head with curling horns, long thin limbs, a barbed tail and bat-like wings |
| Wardrobe | tall faceless winged Nightgaunt with long limbs and a dark visor, a barbed knife in one hand, a signal lantern at the hip |
| Accessories | Wing-sail; barbed knife; signal lantern; dark visor |
| Pose | gliding with one long arm pointed down, knife drawn |
| Facial expression | faceless, dark visor |
| People | Eldritch |
| Class | Nightgaunts |
| Subclass | Voidwing Scouts |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | gliding with one long arm pointed down, knife drawn; the Wing-sail and the barbed knife break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #810070: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #4cc9f0: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #2e2200: the eyes, the Wing-sail and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as gliding with one long arm pointed down, knife drawn.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Wing-sail and the pose must be visible at 64 px.
4. Flat colors: #810070 / #4cc9f0 / #2e2200 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Wing-sail and barbed knife and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #810070 / #4cc9f0 / #2e2200 (about 20%) |
| Midground | a high cliff ledge with a moon, a derelict watchtower |
| Foreground | a cable stretched across a canyon, a signal beacon |
| Character-relevant items | a high cliff ledge with a moon, a derelict watchtower, a cable stretched across a canyon, a signal beacon |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Voidwing Scouts, female being, a tall faceless winged horror: smooth featureless black head with curling horns, long thin limbs, a barbed tail and bat-like wings (Nightgaunt (alien)), apparent age early 70s.
DESIGN FOR SILHOUETTE FIRST: gliding with one long arm pointed down, knife drawn; the Wing-sail and the barbed knife break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: tall and faceless, large size, flying. POSE: gliding with one long arm pointed down, knife drawn. EXPRESSION: faceless, dark visor, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): tall faceless winged Nightgaunt with long limbs and a dark visor, a barbed knife in one hand, a signal lantern at the hip.
COLOR (exact hex values, flat fills): main #810070 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #4cc9f0 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #2e2200 about 10%, used on the eyes, the Wing-sail and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Voidwing Scouts with no people, creatures, figures, silhouettes or text. Midground: a high cliff ledge with a moon, a derelict watchtower. Foreground: a cable stretched across a canyon, a signal beacon, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #810070 for the biggest glowing sources and surfaces, secondary #4cc9f0 for medium panels, banners and lights, pop #2e2200 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Nightmare Shepherds  `nightmareshepherds`

*Come, little dreams.*

**Character**

| Field | Value |
|---|---|
| Gender | Nonbinary |
| Physique | tall, faceless and long-limbed; large size; mobility: flying |
| Ethnicity + nationality | Nightgaunt (alien) |
| Identity | nonbinary being, a tall faceless winged horror: smooth featureless black head with curling horns, long thin limbs, a barbed tail and bat-like wings |
| Wardrobe | tall faceless winged Nightgaunt herder with long limbs, a long hooked crook in one hand, a dream-whistle and a flock lantern at the belt |
| Accessories | Hooked crook; dream-whistle; flock lantern; wing-cloak |
| Pose | leaning on a hooked crook with a drifting flock behind |
| Facial expression | faceless and patient |
| People | Eldritch |
| Class | Nightgaunts |
| Subclass | Nightmare Shepherds |
| Type | Caster |
| Combat or support | Combat |
| Silhouette hook | leaning on a hooked crook with a drifting flock behind; the Hooked crook and the dream-whistle break the outline so it reads instantly as a black shape |
| Shape language | flowing diamonds and a bright flat focus shape |
| Main color (60%) | #4e52e2: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #8ecae6: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #3a0ca3: the eyes, the Hooked crook and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as leaning on a hooked crook with a drifting flock behind.
2. Few large shapes: flowing diamonds and a bright flat focus shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Hooked crook and the pose must be visible at 64 px.
4. Flat colors: #4e52e2 / #8ecae6 / #3a0ca3 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Hooked crook and dream-whistle and the caster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #4e52e2 / #8ecae6 / #3a0ca3 (about 20%) |
| Midground | a dim fold of dream-pasture with a fence, a lantern-lit pen |
| Foreground | drifting half-formed shapes in the mist, a crooked gate |
| Character-relevant items | a dim fold of dream-pasture with a fence, a lantern-lit pen, drifting half-formed shapes in the mist, a crooked gate |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Nightmare Shepherds, nonbinary being, a tall faceless winged horror: smooth featureless black head with curling horns, long thin limbs, a barbed tail and bat-like wings (Nightgaunt (alien)), apparent age late 50s.
DESIGN FOR SILHOUETTE FIRST: leaning on a hooked crook with a drifting flock behind; the Hooked crook and the dream-whistle break the outline so it reads instantly as a black shape. Shape language: flowing diamonds and a bright flat focus shape.
BODY: tall, faceless and long-limbed, large size, flying. POSE: leaning on a hooked crook with a drifting flock behind. EXPRESSION: faceless and patient, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): tall faceless winged Nightgaunt herder with long limbs, a long hooked crook in one hand, a dream-whistle and a flock lantern at the belt.
COLOR (exact hex values, flat fills): main #4e52e2 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #8ecae6 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #3a0ca3 about 10%, used on the eyes, the Hooked crook and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Caster (combat) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Nightmare Shepherds with no people, creatures, figures, silhouettes or text. Midground: a dim fold of dream-pasture with a fence, a lantern-lit pen. Foreground: drifting half-formed shapes in the mist, a crooked gate, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #4e52e2 for the biggest glowing sources and surfaces, secondary #8ecae6 for medium panels, banners and lights, pop #3a0ca3 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Eldritch › Hounds of Tindalos

### Corner-Stalkers  `cornerstalkers`

*Never stand in a corner.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | angular quadruped; large size; mobility: phasing |
| Ethnicity + nationality | Hound of Tindalos (alien) |
| Identity | male being, an angular wedge-bodied hound whose jaw and limbs are made of sharp planes, with a long narrow snout and glowing eyes |
| Wardrobe | angular quadrupedal Hound of Tindalos built from sharp wedges and impossible joints, wedge-claws, a shard tail, a corner-lens collar |
| Accessories | Wedge-claws; angular plates; corner-lens; shard-tail |
| Pose | bursting out of a sharp corner mid-pounce |
| Facial expression | snarling wedge-jaw |
| People | Eldritch |
| Class | Hounds of Tindalos |
| Subclass | Corner-Stalkers |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | bursting out of a sharp corner mid-pounce; the Wedge-claws and the angular plates break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #622367: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #00f5d4: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #002645: the eyes, the Wedge-claws and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as bursting out of a sharp corner mid-pounce.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Wedge-claws and the pose must be visible at 64 px.
4. Flat colors: #622367 / #00f5d4 / #002645 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Wedge-claws and angular plates and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #622367 / #00f5d4 / #002645 (about 20%) |
| Midground | a room of sharp angular corners with impossible geometry, a staircase that folds |
| Foreground | glowing cracks in the walls, an empty hallway |
| Character-relevant items | a room of sharp angular corners with impossible geometry, a staircase that folds, glowing cracks in the walls, an empty hallway |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Corner-Stalkers, male being, an angular wedge-bodied hound whose jaw and limbs are made of sharp planes, with a long narrow snout and glowing eyes (Hound of Tindalos (alien)), apparent age early 50s.
DESIGN FOR SILHOUETTE FIRST: bursting out of a sharp corner mid-pounce; the Wedge-claws and the angular plates break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: angular quadruped, large size, phasing. POSE: bursting out of a sharp corner mid-pounce. EXPRESSION: snarling wedge-jaw, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): angular quadrupedal Hound of Tindalos built from sharp wedges and impossible joints, wedge-claws, a shard tail, a corner-lens collar.
COLOR (exact hex values, flat fills): main #622367 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #00f5d4 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #002645 about 10%, used on the eyes, the Wedge-claws and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Corner-Stalkers with no people, creatures, figures, silhouettes or text. Midground: a room of sharp angular corners with impossible geometry, a staircase that folds. Foreground: glowing cracks in the walls, an empty hallway, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #622367 for the biggest glowing sources and surfaces, secondary #00f5d4 for medium panels, banners and lights, pop #002645 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Time-Scent Trackers  `timescent`

*I smell what you'll do.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | angular wedge-built hound; large size; mobility: phasing |
| Ethnicity + nationality | Hound of Tindalos (alien) |
| Identity | female being, an angular wedge-bodied hound whose jaw and limbs are made of sharp planes, with a long narrow snout and glowing eyes |
| Wardrobe | angular wedge-built Hound of Tindalos with a wedge jaw, an hourglass lens collar, angular plating across the body |
| Accessories | Chrono-fang; wedge-jaw; hourglass lens; angular plating |
| Pose | sniffing a crack in the air with a ghostly copy a half-second behind |
| Facial expression | nose to the air, jaws parted |
| People | Eldritch |
| Class | Hounds of Tindalos |
| Subclass | Time-Scent Trackers |
| Type | Fighter |
| Combat or support | Combat |
| Silhouette hook | sniffing a crack in the air with a ghostly copy a half-second behind; the Chrono-fang and the wedge-jaw break the outline so it reads instantly as a black shape |
| Shape language | balanced diagonals with one clear weapon line |
| Main color (60%) | #a7777e: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #7b2cbf: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #201c49: the eyes, the Chrono-fang and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as sniffing a crack in the air with a ghostly copy a half-second behind.
2. Few large shapes: balanced diagonals with one clear weapon line; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Chrono-fang and the pose must be visible at 64 px.
4. Flat colors: #a7777e / #7b2cbf / #201c49 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Chrono-fang and wedge-jaw and the fighter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #a7777e / #7b2cbf / #201c49 (about 20%) |
| Midground | a hallway of clock faces and fractured doorframes, a cracked-glass wall |
| Foreground | hourglasses, a crack of light in the air |
| Character-relevant items | a hallway of clock faces and fractured doorframes, a cracked-glass wall, hourglasses, a crack of light in the air |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Time-Scent Trackers, female being, an angular wedge-bodied hound whose jaw and limbs are made of sharp planes, with a long narrow snout and glowing eyes (Hound of Tindalos (alien)), apparent age early 30s.
DESIGN FOR SILHOUETTE FIRST: sniffing a crack in the air with a ghostly copy a half-second behind; the Chrono-fang and the wedge-jaw break the outline so it reads instantly as a black shape. Shape language: balanced diagonals with one clear weapon line.
BODY: angular wedge-built hound, large size, phasing. POSE: sniffing a crack in the air with a ghostly copy a half-second behind. EXPRESSION: nose to the air, jaws parted, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): angular wedge-built Hound of Tindalos with a wedge jaw, an hourglass lens collar, angular plating across the body.
COLOR (exact hex values, flat fills): main #a7777e about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #7b2cbf about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #201c49 about 10%, used on the eyes, the Chrono-fang and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Fighter (combat) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Time-Scent Trackers with no people, creatures, figures, silhouettes or text. Midground: a hallway of clock faces and fractured doorframes, a cracked-glass wall. Foreground: hourglasses, a crack of light in the air, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #a7777e for the biggest glowing sources and surfaces, secondary #7b2cbf for medium panels, banners and lights, pop #201c49 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Fracture-Jaw Reapers  `fracturejaw`

*Close. Then closer.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | angular with split jaws; large size; mobility: phasing |
| Ethnicity + nationality | Hound of Tindalos (alien) |
| Identity | male being, an angular wedge-bodied hound whose jaw and limbs are made of sharp planes, with a long narrow snout and glowing eyes |
| Wardrobe | angular wedge-built Hound of Tindalos with a jaw splitting open along a bright plane, wedge-plate shoulder spikes, dimensional shears, a shard tail |
| Accessories | Split jaws; wedge-plate shoulder spikes; dimensional shears; shard-tail |
| Pose | lunging with the split jaws wide open |
| Facial expression | jaw splitting along a bright plane |
| People | Eldritch |
| Class | Hounds of Tindalos |
| Subclass | Fracture-Jaw Reapers |
| Type | Bruiser |
| Combat or support | Combat |
| Silhouette hook | lunging with the split jaws wide open; the Split jaws and the wedge-plate shoulder spikes break the outline so it reads instantly as a black shape |
| Shape language | heavy trapezoids, oversized fists and shoulders |
| Main color (60%) | #5b013d: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #def6ff: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #242a57: the eyes, the Split jaws and one small magical detail |
| Natural base tones | Species skin and anatomy may use simplified, flat, muted neutral base tones. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as lunging with the split jaws wide open.
2. Few large shapes: heavy trapezoids, oversized fists and shoulders; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Split jaws and the pose must be visible at 64 px.
4. Flat colors: #5b013d / #def6ff / #242a57 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Split jaws and wedge-plate shoulder spikes and the bruiser shape language.

**Background**

| Field | Value |
|---|---|
| Background | a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls |
| Colors | wash #0b7a75 (about 65%); accents #5b013d / #def6ff / #242a57 (about 20%) |
| Midground | a fractured landscape with a floating slab of wall, wedge-shaped rock plates |
| Foreground | a crack in the sky, a collapsed arch |
| Character-relevant items | a fractured landscape with a floating slab of wall, wedge-shaped rock plates, a crack in the sky, a collapsed arch |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Fracture-Jaw Reapers, male being, an angular wedge-bodied hound whose jaw and limbs are made of sharp planes, with a long narrow snout and glowing eyes (Hound of Tindalos (alien)), apparent age early 30s.
DESIGN FOR SILHOUETTE FIRST: lunging with the split jaws wide open; the Split jaws and the wedge-plate shoulder spikes break the outline so it reads instantly as a black shape. Shape language: heavy trapezoids, oversized fists and shoulders.
BODY: angular with split jaws, large size, phasing. POSE: lunging with the split jaws wide open. EXPRESSION: jaw splitting along a bright plane, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): angular wedge-built Hound of Tindalos with a jaw splitting open along a bright plane, wedge-plate shoulder spikes, dimensional shears, a shard tail.
COLOR (exact hex values, flat fills): main #5b013d about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #def6ff about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #242a57 about 10%, used on the eyes, the Split jaws and one small magical detail. Black, white and neutral grey are also allowed. Species skin and anatomy may use simplified, flat, muted neutral base tones. No other saturated colors. Do not use #0b7a75 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Bruiser (combat) of the Eldritch people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a flooded subway cathedral beneath the ruins: impossible angled architecture, sunken escalators, a dead monolith of glowing glyphs, rising black water, wrong geometry in the walls. An empty environment for Fracture-Jaw Reapers with no people, creatures, figures, silhouettes or text. Midground: a fractured landscape with a floating slab of wall, wedge-shaped rock plates. Foreground: a crack in the sky, a collapsed arch, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a ABYSS-washed painting. The people color #0b7a75 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #5b013d for the biggest glowing sources and surfaces, secondary #def6ff for medium panels, banners and lights, pop #242a57 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


---

# Magic
*People color: Violet #6b3fa6. Background setting: a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow.*

**Tagline:** Four ways to hold power.  
**Classes:** Wizard (Signal Savants, Circuit Arcanists, Sticky Wizards); Witch (Spore Coven, Scraphex Witches, Thornblood Coven); Warlock (Voidbound, Bloodwire Apostates, Mirror Oathbreakers); Mage (Chronofractures, Mindweavers, Fluxborn)


## Magic › Wizard

### Signal Savants  `signalsavants`

*Radio-frequency magic, broadcasting, and interference.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | tall and elegant; medium size; mobility: grounded |
| Ethnicity + nationality | Black American heritage, American |
| Identity | a woman in her forties, dark-skinned, with long white braids |
| Wardrobe | wizard in a structured green coat and an antenna-crowned hat, a radio-shaped staff in one hand and a gold-ringed dial gauntlet on the other forearm, a shortwave charm necklace |
| Accessories | Radio staff; dial gauntlet; antenna hat; shortwave charm |
| Pose | radio staff held up, dial gauntlet thrust forward crackling |
| Facial expression | poised, razor-sharp focus |
| People | Magic |
| Class | Wizard |
| Subclass | Signal Savants |
| Type | Controller |
| Combat or support | Combat |
| Silhouette hook | radio staff held up, dial gauntlet thrust forward crackling; the Radio staff and the dial gauntlet break the outline so it reads instantly as a black shape |
| Shape language | hexagons and wide arc gestures with tools hanging off the body |
| Main color (60%) | #5a844c: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #f72585: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #ffd60a: the eyes, the Radio staff and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Done: `art/v2/witch-dialturners.png` and `art/v2/witch-dialturners-bg.jpg` |
| Last vet | Final art accepted (made before the vetting pipeline) |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as radio staff held up, dial gauntlet thrust forward crackling.
2. Few large shapes: hexagons and wide arc gestures with tools hanging off the body; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Radio staff and the pose must be visible at 64 px.
4. Flat colors: #5a844c / #f72585 / #ffd60a as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Radio staff and dial gauntlet and the controller shape language.

**Background**

| Field | Value |
|---|---|
| Background | a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow |
| Colors | wash #6b3fa6 (about 65%); accents #5a844c / #f72585 / #ffd60a (about 20%) |
| Midground | a radio station room with a huge shortwave set with glowing dials, a mixing desk |
| Foreground | an antenna array outside the window, a wall of tubes |
| Character-relevant items | a radio station room with a huge shortwave set with glowing dials, a mixing desk, an antenna array outside the window, a wall of tubes |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Signal Savants, a woman in her forties, dark-skinned, with long white braids (Black American heritage, American), apparent age mid 40s.
DESIGN FOR SILHOUETTE FIRST: radio staff held up, dial gauntlet thrust forward crackling; the Radio staff and the dial gauntlet break the outline so it reads instantly as a black shape. Shape language: hexagons and wide arc gestures with tools hanging off the body.
BODY: tall and elegant, medium size, grounded. POSE: radio staff held up, dial gauntlet thrust forward crackling. EXPRESSION: poised, razor-sharp focus, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): wizard in a structured green coat and an antenna-crowned hat, a radio-shaped staff in one hand and a gold-ringed dial gauntlet on the other forearm, a shortwave charm necklace.
COLOR (exact hex values, flat fills): main #5a844c about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #f72585 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #ffd60a about 10%, used on the eyes, the Radio staff and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #6b3fa6 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Controller (combat) of the Magic people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow. An empty environment for Signal Savants with no people, creatures, figures, silhouettes or text. Midground: a radio station room with a huge shortwave set with glowing dials, a mixing desk. Foreground: an antenna array outside the window, a wall of tubes, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a VIOLET-washed painting. The people color #6b3fa6 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #5a844c for the biggest glowing sources and surfaces, secondary #f72585 for medium panels, banners and lights, pop #ffd60a for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Circuit Arcanists  `circuitarcanists`

*Magical engineering, enchanted circuits, and technological spellcraft.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | lean and quick; medium size; mobility: agile |
| Ethnicity + nationality | Mexican heritage, Mexican |
| Identity | a young man in his twenties of Mexican-inspired features, sharp sideburns |
| Wardrobe | wizard in a sharp short coat, a coil-hilt rapier in one hand, capacitor bracers on both wrists, insulated gloves |
| Accessories | Coil-hilt rapier; capacitor bracers; insulated gloves; short coat |
| Pose | full lunge, coil-rapier extended with a discharge arc |
| Facial expression | cocky, sparking grin |
| People | Magic |
| Class | Wizard |
| Subclass | Circuit Arcanists |
| Type | Fighter |
| Combat or support | Combat |
| Silhouette hook | full lunge, coil-rapier extended with a discharge arc; the Coil-hilt rapier and the capacitor bracers break the outline so it reads instantly as a black shape |
| Shape language | balanced diagonals with one clear weapon line |
| Main color (60%) | #8283f7: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ff5d8f: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff7c7: the eyes, the Coil-hilt rapier and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as full lunge, coil-rapier extended with a discharge arc.
2. Few large shapes: balanced diagonals with one clear weapon line; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Coil-hilt rapier and the pose must be visible at 64 px.
4. Flat colors: #8283f7 / #ff5d8f / #fff7c7 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Coil-hilt rapier and capacitor bracers and the fighter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow |
| Colors | wash #6b3fa6 (about 65%); accents #8283f7 / #ff5d8f / #fff7c7 (about 20%) |
| Midground | a duel ring on a rooftop with a bank of tall capacitors |
| Foreground | a coil tower arcing lightning and rubber safety mats |
| Character-relevant items | a duel ring on a rooftop with a bank of tall capacitors, a coil tower arcing lightning and rubber safety mats |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Circuit Arcanists, a young man in his twenties of Mexican-inspired features, sharp sideburns (Mexican heritage, Mexican), apparent age mid 20s.
DESIGN FOR SILHOUETTE FIRST: full lunge, coil-rapier extended with a discharge arc; the Coil-hilt rapier and the capacitor bracers break the outline so it reads instantly as a black shape. Shape language: balanced diagonals with one clear weapon line.
BODY: lean and quick, medium size, agile. POSE: full lunge, coil-rapier extended with a discharge arc. EXPRESSION: cocky, sparking grin, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): wizard in a sharp short coat, a coil-hilt rapier in one hand, capacitor bracers on both wrists, insulated gloves.
COLOR (exact hex values, flat fills): main #8283f7 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ff5d8f about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff7c7 about 10%, used on the eyes, the Coil-hilt rapier and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #6b3fa6 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Fighter (combat) of the Magic people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow. An empty environment for Circuit Arcanists with no people, creatures, figures, silhouettes or text. Midground: a duel ring on a rooftop with a bank of tall capacitors. Foreground: a coil tower arcing lightning and rubber safety mats, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a VIOLET-washed painting. The people color #6b3fa6 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #8283f7 for the biggest glowing sources and surfaces, secondary #ff5d8f for medium panels, banners and lights, pop #fff7c7 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Sticky Wizards  `stickywizards`

*Adhesive alchemy, enchanted slime, and bouncing magic. Includes Mike Mears' Sticky Wizard.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | tall and lanky; medium size; mobility: agile |
| Ethnicity + nationality | Dutch-Indonesian heritage, Dutch (the wizard); frog (the companion) |
| Identity | Sticky Wizard (created by Mike Mears): a lanky, hatless male wizard in his thirties with messy hair and a playful, capable manner, and at his feet a small round frog wearing the wizard hat |
| Wardrobe | lanky bareheaded human wizard in a patched laboratory robe, messy hair, a bandolier of goo jars across the chest, a sling-staff aimed mid-shot and a confident grin; at his feet a small round green frog wearing a floppy oversized pointed wizard hat, looking up proudly |
| Accessories | Sling-staff; goo-jar bandolier; alchemy satchel; a frog companion wearing the wizard hat |
| Pose | leaning into a sling-shot of goo, the hatless wizard mid-stride while the frog at his feet holds its hat on with one hand |
| Facial expression | cheerful, wide-eyed confidence; the frog looks smug under the hat |
| People | Magic |
| Class | Wizard |
| Subclass | Sticky Wizards |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | leaning into a sling-shot of goo, the hatless wizard mid-stride while the frog at his feet holds its hat on with one hand; the Sling-staff and the goo-jar bandolier break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #0de609: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ffd23f: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #ff6b9d: the eyes, the Sling-staff and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Done: `art/v2/magic-stickywizards.png` and `art/v2/magic-stickywizards-bg.jpg` |
| Last vet | Final art accepted (made before the vetting pipeline) |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as leaning into a sling-shot of goo, the hatless wizard mid-stride while the frog at his feet holds its hat on with one hand.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Sling-staff and the pose must be visible at 64 px.
4. Flat colors: #0de609 / #ffd23f / #ff6b9d as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Sling-staff and goo-jar bandolier and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow |
| Colors | wash #6b3fa6 (about 65%); accents #0de609 / #ffd23f / #ff6b9d (about 20%) |
| Midground | a flooded alchemy basement with bubbling goo vats, dripping pipes |
| Foreground | glued-down furniture and shelves of jars |
| Character-relevant items | a flooded alchemy basement with bubbling goo vats, dripping pipes, glued-down furniture and shelves of jars |

**Character prompt**

```text
Full-body character illustration of the Sticky Wizard: a lanky, hatless male wizard in his thirties (Dutch-Indonesian heritage) with messy hair, a cheerful wide-eyed grin and a patched laboratory robe, a bandolier of goo jars across his chest, leaning mid-stride into a sling-staff shot of glowing goo. His head is bare: the wizard wears NO hat. At his boots stands a small, round, green frog wearing a floppy oversized pointed wizard hat that is far too big for it, one hand holding the hat on, looking up proudly and smug. Both the wizard and the frog are fully visible head to toe, neither is cropped, with clear margin around the pair. Only worn and hand-held items: no vehicles, furniture, scenery, floor, cast shadow or text. Palette: main #0de609 (about 60%), secondary #ffd23f (about 30%), pop #ff6b9d (about 10%), plus black, white and grey. Samurai Jack animation style: flat color shapes, extremely simplified angular geometry, bold silhouette, minimal clean contour lines, at most two tones per material, no gradients, no texture noise, heavy solid black shapes with stark white highlights. A blaster (combat) of the Magic people, Wizard class, mature dark-age tone, playful but capable. 3:4 portrait, transparent background.
```

**Background prompt**

```text
Charcoal and ink painting on toned paper, 16:9 landscape, Sin City contrast, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood. A flooded alchemy basement with no people, creatures or figures and no text: bubbling goo vats and dripping pipes in the midground, glued-down furniture, shelves of jars and stacked crates in the foreground, a flooded stone floor reflecting light, a broken substation glow through a high window. Color: a VIOLET-washed painting; the people color #6b3fa6 washes about 65% of the image across sky, fog, floor and walls. Accents about 20%: main #0de609 (slime-green) for the biggest glowing sources and surfaces such as goo vats and lamp glow and their reflections, secondary #ffd23f for medium panels, banners and lights, pop #ff6b9d for small sparks, glints and bubbles. Composition: horizon at one-third height, a moon upper-left through a ceiling breach, empty open space in the lower center for two standing characters, props pushed to the left and right edges. 16:9 landscape.
```


## Magic › Witch

### Spore Coven  `sporecoven`

*Fungal magic, spores, poisons, and regeneration.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | tall and sturdy; medium size; mobility: grounded |
| Ethnicity + nationality | Mixed Jamaican and Irish heritage, Jamaican |
| Identity | a warm, bearded man in his forties with long red dreadlocks threaded with mushrooms and leaves, with a pet snail chef at his feet |
| Wardrobe | tall sturdy man with red dreadlocks and a beard, a leaf-and-mushroom shawl, a vine-wrapped cane in one hand, a basket of glowing spore jars at the hip and the other hand conjuring pink spore smoke; at his feet a large pet snail with a spiral shell, a tiny white chef hat, a glowing mushroom and a spatula on its shell |
| Accessories | Spore-jar basket; fungus-wrapped cane; mushroom-cap shawl; poultice pouch; a pet snail chef with a glowing mushroom on its shell; a chef hat and a spatula |
| Pose | leaning on the vine-wrapped cane, one hand conjuring pink spore smoke, the chef-hat snail beside his boot |
| Facial expression | warm, easy, knowing smile |
| People | Magic |
| Class | Witch |
| Subclass | Spore Coven |
| Type | Support |
| Combat or support | Support |
| Silhouette hook | leaning on the vine-wrapped cane, one hand conjuring pink spore smoke, the chef-hat snail beside his boot; the Spore-jar basket and the fungus-wrapped cane break the outline so it reads instantly as a black shape |
| Shape language | soft rounded rectangles with an open palm and a visible kit |
| Main color (60%) | #d0e2a3: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #2f6f4f: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #ffb4a2: the eyes, the Spore-jar basket and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Done: `art/v2/magic-sporecoven.png` and `art/v2/magic-sporecoven-bg.jpg` |
| Last vet | Final art accepted (made before the vetting pipeline) |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as leaning on the vine-wrapped cane, one hand conjuring pink spore smoke, the chef-hat snail beside his boot.
2. Few large shapes: soft rounded rectangles with an open palm and a visible kit; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Spore-jar basket and the pose must be visible at 64 px.
4. Flat colors: #d0e2a3 / #2f6f4f / #ffb4a2 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Spore-jar basket and fungus-wrapped cane and the support shape language.

**Background**

| Field | Value |
|---|---|
| Background | a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow |
| Colors | wash #6b3fa6 (about 65%); accents #d0e2a3 / #2f6f4f / #ffb4a2 (about 20%) |
| Midground | a factory floor furred with glowing mycelium, a long table of growing trays |
| Foreground | a hanging rack of mushroom caps and old machine hulks |
| Character-relevant items | a factory floor furred with glowing mycelium, a long table of growing trays, a hanging rack of mushroom caps and old machine hulks |

**Character prompt**

```text
Full-body character illustration of the Spore Coven's cultivator: a tall, sturdy, bearded man in his forties (mixed Jamaican and Irish heritage) with long red dreadlocks threaded with mushrooms and leaves, a warm easy smile and a leaf-and-mushroom shawl, leaning on a vine-wrapped cane, a basket of glowing spore jars at his hip, one hand conjuring pink spore smoke. At his feet, a large pet snail chef with a spiral shell wears a tiny white chef's hat and carries a glowing mushroom and a spatula on its shell, looking up at him fondly. Both the man and the snail are fully visible head to toe, neither is cropped, with clear margin around the pair. Only worn and hand-held items: no vehicles, furniture, scenery, floor, cast shadow or text. Palette: main #d0e2a3 (about 60%), secondary #2f6f4f (about 30%), pop #ffb4a2 (about 10%), plus black, white and grey. Samurai Jack animation style: flat color shapes, extremely simplified angular geometry, bold silhouette, minimal clean contour lines, at most two tones per material, no gradients, no texture noise, heavy solid black shapes with stark white highlights. A support (healer) of the Magic people, Witch class, mature dark-age tone, warm but formidable. 3:4 portrait, transparent background.
```

**Background prompt**

```text
Charcoal and ink painting on toned paper, 16:9 landscape, Sin City contrast, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood. An abandoned factory floor furred with glowing mycelium, with no people, creatures or figures and no text: a long table of growing trays and a hanging rack of mushroom caps in the midground, old machine hulks overgrown with fungus and ivy at the edges, clusters of bioluminescent caps in the foreground, a damp concrete floor reflecting light, a breach in the roof showing the moon. Color: a VIOLET-washed painting; the people color #6b3fa6 washes about 65% of the image across sky, fog, floor and walls. Accents about 20%: main #d0e2a3 (pale spore-green) for the biggest glowing sources and surfaces such as mushroom caps, lamp glow and their reflections, secondary #2f6f4f for medium panels, banners, leaves and cables, pop #ffb4a2 for small sparks, glints and spore motes. Composition: horizon at one-third height, a moon upper-left, empty open space in the lower center for two characters, props pushed to the left and right edges. 16:9 landscape.
```

### Scraphex Witches  `scraphexwitches`

*Haunted electronics, cursed relics, and sympathetic magic.*

**Character**

| Field | Value |
|---|---|
| Gender | Female |
| Physique | average and shawled; medium size; mobility: grounded |
| Ethnicity + nationality | Lebanese heritage, Lebanese |
| Identity | a woman in her mid-thirties of Lebanese-inspired features, dark headscarf |
| Wardrobe | woman in a layered shawl and headscarf, a bent antenna wand in one hand and a battered hex radio on a strap, curse tapes tucked in a bandolier |
| Accessories | Hex radio; antenna wand; curse cassettes; shawl |
| Pose | antenna wand pointing out, radio held against the hip |
| Facial expression | smoldering, lips moving in a murmur |
| People | Magic |
| Class | Witch |
| Subclass | Scraphex Witches |
| Type | Controller |
| Combat or support | Combat |
| Silhouette hook | antenna wand pointing out, radio held against the hip; the Hex radio and the antenna wand break the outline so it reads instantly as a black shape |
| Shape language | hexagons and wide arc gestures with tools hanging off the body |
| Main color (60%) | #b703ec: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #00b4d8: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #e4ffda: the eyes, the Hex radio and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as antenna wand pointing out, radio held against the hip.
2. Few large shapes: hexagons and wide arc gestures with tools hanging off the body; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Hex radio and the pose must be visible at 64 px.
4. Flat colors: #b703ec / #00b4d8 / #e4ffda as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Hex radio and antenna wand and the controller shape language.

**Background**

| Field | Value |
|---|---|
| Background | a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow |
| Colors | wash #6b3fa6 (about 65%); accents #b703ec / #00b4d8 / #e4ffda (about 20%) |
| Midground | a cluttered radio shack with a wall of dead radios on shelves, a hex-tuned dial board |
| Foreground | a table of curse tapes and a window of antennas |
| Character-relevant items | a cluttered radio shack with a wall of dead radios on shelves, a hex-tuned dial board, a table of curse tapes and a window of antennas |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Scraphex Witches, a woman in her mid-thirties of Lebanese-inspired features, dark headscarf (Lebanese heritage, Lebanese), apparent age mid 30s.
DESIGN FOR SILHOUETTE FIRST: antenna wand pointing out, radio held against the hip; the Hex radio and the antenna wand break the outline so it reads instantly as a black shape. Shape language: hexagons and wide arc gestures with tools hanging off the body.
BODY: average and shawled, medium size, grounded. POSE: antenna wand pointing out, radio held against the hip. EXPRESSION: smoldering, lips moving in a murmur, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): woman in a layered shawl and headscarf, a bent antenna wand in one hand and a battered hex radio on a strap, curse tapes tucked in a bandolier.
COLOR (exact hex values, flat fills): main #b703ec about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #00b4d8 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #e4ffda about 10%, used on the eyes, the Hex radio and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #6b3fa6 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Controller (combat) of the Magic people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow. An empty environment for Scraphex Witches with no people, creatures, figures, silhouettes or text. Midground: a cluttered radio shack with a wall of dead radios on shelves, a hex-tuned dial board. Foreground: a table of curse tapes and a window of antennas, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a VIOLET-washed painting. The people color #6b3fa6 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #b703ec for the biggest glowing sources and surfaces, secondary #00b4d8 for medium panels, banners and lights, pop #e4ffda for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Thornblood Coven  `thornbloodcoven`

*Plant magic, ancestral spirits, healing, and binding.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | warm and sturdy; medium size; mobility: grounded |
| Ethnicity + nationality | West African heritage, Senegalese |
| Identity | a man in his forties of West African-inspired features, close-cropped beard |
| Wardrobe | warm man in a long herb-stained coat and a woven sash, a mortar and pestle in one hand and a root-carved cane in the other, a herb satchel at the hip |
| Accessories | Herb satchel; mortar and pestle; root-carved cane; woven sash |
| Pose | grinding herbs in a mortar, cane tucked under the arm |
| Facial expression | warm, reassuring |
| People | Magic |
| Class | Witch |
| Subclass | Thornblood Coven |
| Type | Support |
| Combat or support | Support |
| Silhouette hook | grinding herbs in a mortar, cane tucked under the arm; the Herb satchel and the mortar and pestle break the outline so it reads instantly as a black shape |
| Shape language | soft rounded rectangles with an open palm and a visible kit |
| Main color (60%) | #0d5faf: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #f4a261: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff7c7: the eyes, the Herb satchel and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as grinding herbs in a mortar, cane tucked under the arm.
2. Few large shapes: soft rounded rectangles with an open palm and a visible kit; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Herb satchel and the pose must be visible at 64 px.
4. Flat colors: #0d5faf / #f4a261 / #fff7c7 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Herb satchel and mortar and pestle and the support shape language.

**Background**

| Field | Value |
|---|---|
| Background | a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow |
| Colors | wash #6b3fa6 (about 65%); accents #0d5faf / #f4a261 / #fff7c7 (about 20%) |
| Midground | a root-cellar clinic with hanging herb bundles, a long wooden table of poultices |
| Foreground | a boiling kettle and shelves of tonic jars |
| Character-relevant items | a root-cellar clinic with hanging herb bundles, a long wooden table of poultices, a boiling kettle and shelves of tonic jars |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Thornblood Coven, a man in his forties of West African-inspired features, close-cropped beard (West African heritage, Senegalese), apparent age mid 40s.
DESIGN FOR SILHOUETTE FIRST: grinding herbs in a mortar, cane tucked under the arm; the Herb satchel and the mortar and pestle break the outline so it reads instantly as a black shape. Shape language: soft rounded rectangles with an open palm and a visible kit.
BODY: warm and sturdy, medium size, grounded. POSE: grinding herbs in a mortar, cane tucked under the arm. EXPRESSION: warm, reassuring, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): warm man in a long herb-stained coat and a woven sash, a mortar and pestle in one hand and a root-carved cane in the other, a herb satchel at the hip.
COLOR (exact hex values, flat fills): main #0d5faf about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #f4a261 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff7c7 about 10%, used on the eyes, the Herb satchel and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #6b3fa6 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Support (support) of the Magic people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow. An empty environment for Thornblood Coven with no people, creatures, figures, silhouettes or text. Midground: a root-cellar clinic with hanging herb bundles, a long wooden table of poultices. Foreground: a boiling kettle and shelves of tonic jars, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a VIOLET-washed painting. The people color #6b3fa6 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #0d5faf for the biggest glowing sources and surfaces, secondary #f4a261 for medium panels, banners and lights, pop #fff7c7 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Magic › Warlock

### Voidbound  `voidbound`

*Eldritch patrons, dimensional magic, and cosmic corruption.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | gaunt and tall; medium size; mobility: grounded |
| Ethnicity + nationality | Greek heritage, Greek |
| Identity | a young man in his twenties of Greek-inspired features, shaven head |
| Wardrobe | young man in a jagged mantle and asymmetric armor, a ritual mark glowing on one open palm and a small offering bowl in the other, a thin crown of black spikes |
| Accessories | Offering bowl; void-marked gauntlet; ritual-scar mantle; jagged crown |
| Pose | kneeling to cast, one palm glowing, offering bowl held out |
| Facial expression | hollow, reverent smile |
| People | Magic |
| Class | Warlock |
| Subclass | Voidbound |
| Type | Blaster |
| Combat or support | Combat |
| Silhouette hook | kneeling to cast, one palm glowing, offering bowl held out; the Offering bowl and the void-marked gauntlet break the outline so it reads instantly as a black shape |
| Shape language | long straight lines and a bold wedge-shaped weapon |
| Main color (60%) | #065255: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #6a4c93: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #caf9ff: the eyes, the Offering bowl and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as kneeling to cast, one palm glowing, offering bowl held out.
2. Few large shapes: long straight lines and a bold wedge-shaped weapon; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Offering bowl and the pose must be visible at 64 px.
4. Flat colors: #065255 / #6a4c93 / #caf9ff as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Offering bowl and void-marked gauntlet and the blaster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow |
| Colors | wash #6b3fa6 (about 65%); accents #065255 / #6a4c93 / #caf9ff (about 20%) |
| Midground | a ritual chamber with a floating black void-portal, an altar of offering bowls |
| Foreground | chalk-circle floor and hanging chains |
| Character-relevant items | a ritual chamber with a floating black void-portal, an altar of offering bowls, chalk-circle floor and hanging chains |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Voidbound, a young man in his twenties of Greek-inspired features, shaven head (Greek heritage, Greek), apparent age mid 20s.
DESIGN FOR SILHOUETTE FIRST: kneeling to cast, one palm glowing, offering bowl held out; the Offering bowl and the void-marked gauntlet break the outline so it reads instantly as a black shape. Shape language: long straight lines and a bold wedge-shaped weapon.
BODY: gaunt and tall, medium size, grounded. POSE: kneeling to cast, one palm glowing, offering bowl held out. EXPRESSION: hollow, reverent smile, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): young man in a jagged mantle and asymmetric armor, a ritual mark glowing on one open palm and a small offering bowl in the other, a thin crown of black spikes.
COLOR (exact hex values, flat fills): main #065255 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #6a4c93 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #caf9ff about 10%, used on the eyes, the Offering bowl and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #6b3fa6 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Blaster (combat) of the Magic people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow. An empty environment for Voidbound with no people, creatures, figures, silhouettes or text. Midground: a ritual chamber with a floating black void-portal, an altar of offering bowls. Foreground: chalk-circle floor and hanging chains, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a VIOLET-washed painting. The people color #6b3fa6 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #065255 for the biggest glowing sources and surfaces, secondary #6a4c93 for medium panels, banners and lights, pop #caf9ff for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Bloodwire Apostates  `bloodwireapostates`

*Blood-powered technology, life-force sacrifice, and overload magic.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | lean and sinewy; medium size; mobility: agile |
| Ethnicity + nationality | Vietnamese heritage, Vietnamese |
| Identity | a man in his twenties of Vietnamese-inspired features, circuit tattoos |
| Wardrobe | lean man with glowing circuit tattoos along both arms, a bladed capacitor in each hand mid-slash, thorn plates on the shoulders |
| Accessories | Vein-lit twin blades; wired arm sleeves; thorn plates; glowing circuit tattoos |
| Pose | crossed blades mid-slash with circuits blazing |
| Facial expression | feral, sinewy grin |
| People | Magic |
| Class | Warlock |
| Subclass | Bloodwire Apostates |
| Type | Fighter |
| Combat or support | Combat |
| Silhouette hook | crossed blades mid-slash with circuits blazing; the Vein-lit twin blades and the wired arm sleeves break the outline so it reads instantly as a black shape |
| Shape language | balanced diagonals with one clear weapon line |
| Main color (60%) | #b368c9: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #7b47cf: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff1e6: the eyes, the Vein-lit twin blades and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as crossed blades mid-slash with circuits blazing.
2. Few large shapes: balanced diagonals with one clear weapon line; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Vein-lit twin blades and the pose must be visible at 64 px.
4. Flat colors: #b368c9 / #7b47cf / #fff1e6 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Vein-lit twin blades and wired arm sleeves and the fighter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow |
| Colors | wash #6b3fa6 (about 65%); accents #b368c9 / #7b47cf / #fff1e6 (about 20%) |
| Midground | a dead power substation with a humming transformer, cable trenches |
| Foreground | a generator hall and warning signs |
| Character-relevant items | a dead power substation with a humming transformer, cable trenches, a generator hall and warning signs |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Bloodwire Apostates, a man in his twenties of Vietnamese-inspired features, circuit tattoos (Vietnamese heritage, Vietnamese), apparent age mid 20s.
DESIGN FOR SILHOUETTE FIRST: crossed blades mid-slash with circuits blazing; the Vein-lit twin blades and the wired arm sleeves break the outline so it reads instantly as a black shape. Shape language: balanced diagonals with one clear weapon line.
BODY: lean and sinewy, medium size, agile. POSE: crossed blades mid-slash with circuits blazing. EXPRESSION: feral, sinewy grin, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): lean man with glowing circuit tattoos along both arms, a bladed capacitor in each hand mid-slash, thorn plates on the shoulders.
COLOR (exact hex values, flat fills): main #b368c9 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #7b47cf about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff1e6 about 10%, used on the eyes, the Vein-lit twin blades and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #6b3fa6 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Fighter (combat) of the Magic people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow. An empty environment for Bloodwire Apostates with no people, creatures, figures, silhouettes or text. Midground: a dead power substation with a humming transformer, cable trenches. Foreground: a generator hall and warning signs, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a VIOLET-washed painting. The people color #6b3fa6 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #b368c9 for the biggest glowing sources and surfaces, secondary #7b47cf for medium panels, banners and lights, pop #fff1e6 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Mirror Oathbreakers  `mirroroathbreakers`

*Reflection magic, duplicates, and deceptive illusions.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | slim and quick; medium size; mobility: phasing |
| Ethnicity + nationality | Persian heritage, Iranian |
| Identity | a man in his thirties of Persian-inspired features, a mirrored half-mask |
| Wardrobe | slim man in a coat of mirrored glass panels and a reflective half-mask, a mirror-shard dagger in each hand, caught mid-step |
| Accessories | Mirror-shard daggers; reflective half-mask; glass-panel coat; silver gloves |
| Pose | stepping out of a reflection, dagger low |
| Facial expression | impassive, only the eyes visible |
| People | Magic |
| Class | Warlock |
| Subclass | Mirror Oathbreakers |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | stepping out of a reflection, dagger low; the Mirror-shard daggers and the reflective half-mask break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #00343e: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #0077b6: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #f72585: the eyes, the Mirror-shard daggers and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as stepping out of a reflection, dagger low.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Mirror-shard daggers and the pose must be visible at 64 px.
4. Flat colors: #00343e / #0077b6 / #f72585 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Mirror-shard daggers and reflective half-mask and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow |
| Colors | wash #6b3fa6 (about 65%); accents #00343e / #0077b6 / #f72585 (about 20%) |
| Midground | a hall of broken mirrors and dead screens, a shattered storefront window |
| Foreground | a mirror-lined corridor and glass shards on the floor |
| Character-relevant items | a hall of broken mirrors and dead screens, a shattered storefront window, a mirror-lined corridor and glass shards on the floor |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Mirror Oathbreakers, a man in his thirties of Persian-inspired features, a mirrored half-mask (Persian heritage, Iranian), apparent age mid 30s.
DESIGN FOR SILHOUETTE FIRST: stepping out of a reflection, dagger low; the Mirror-shard daggers and the reflective half-mask break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: slim and quick, medium size, phasing. POSE: stepping out of a reflection, dagger low. EXPRESSION: impassive, only the eyes visible, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): slim man in a coat of mirrored glass panels and a reflective half-mask, a mirror-shard dagger in each hand, caught mid-step.
COLOR (exact hex values, flat fills): main #00343e about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #0077b6 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #f72585 about 10%, used on the eyes, the Mirror-shard daggers and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #6b3fa6 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Magic people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow. An empty environment for Mirror Oathbreakers with no people, creatures, figures, silhouettes or text. Midground: a hall of broken mirrors and dead screens, a shattered storefront window. Foreground: a mirror-lined corridor and glass shards on the floor, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a VIOLET-washed painting. The people color #6b3fa6 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #00343e for the biggest glowing sources and surfaces, secondary #0077b6 for medium panels, banners and lights, pop #f72585 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```


## Magic › Mage

### Chronofractures  `chronofractures`

*Time manipulation, rewinds, and temporal displacement.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | lean and restless; medium size; mobility: agile |
| Ethnicity + nationality | Nigerian heritage, Nigerian |
| Identity | a young man in his twenties of Nigerian-inspired features, close-cropped hair |
| Wardrobe | lean young man in a scuffed jacket mid-dodge, a narrow blade drawn, a pocket watch swinging on a chain |
| Accessories | Pocket watch; narrow blade; scuffed jacket; glowing second-hand charm |
| Pose | leaning out of a dodge with a ghost-copy a step behind |
| Facial expression | restless, half-smiling |
| People | Magic |
| Class | Mage |
| Subclass | Chronofractures |
| Type | Fighter |
| Combat or support | Combat |
| Silhouette hook | leaning out of a dodge with a ghost-copy a step behind; the Pocket watch and the narrow blade break the outline so it reads instantly as a black shape |
| Shape language | balanced diagonals with one clear weapon line |
| Main color (60%) | #8c606f: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #fff3b0: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #d00000: the eyes, the Pocket watch and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as leaning out of a dodge with a ghost-copy a step behind.
2. Few large shapes: balanced diagonals with one clear weapon line; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Pocket watch and the pose must be visible at 64 px.
4. Flat colors: #8c606f / #fff3b0 / #d00000 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Pocket watch and narrow blade and the fighter shape language.

**Background**

| Field | Value |
|---|---|
| Background | a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow |
| Colors | wash #6b3fa6 (about 65%); accents #8c606f / #fff3b0 / #d00000 (about 20%) |
| Midground | a stopped-clock plaza with a giant frozen clock tower |
| Foreground | a fountain of suspended droplets and a rain-slick street |
| Character-relevant items | a stopped-clock plaza with a giant frozen clock tower, a fountain of suspended droplets and a rain-slick street |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Chronofractures, a young man in his twenties of Nigerian-inspired features, close-cropped hair (Nigerian heritage, Nigerian), apparent age mid 20s.
DESIGN FOR SILHOUETTE FIRST: leaning out of a dodge with a ghost-copy a step behind; the Pocket watch and the narrow blade break the outline so it reads instantly as a black shape. Shape language: balanced diagonals with one clear weapon line.
BODY: lean and restless, medium size, agile. POSE: leaning out of a dodge with a ghost-copy a step behind. EXPRESSION: restless, half-smiling, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): lean young man in a scuffed jacket mid-dodge, a narrow blade drawn, a pocket watch swinging on a chain.
COLOR (exact hex values, flat fills): main #8c606f about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #fff3b0 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #d00000 about 10%, used on the eyes, the Pocket watch and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #6b3fa6 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Fighter (combat) of the Magic people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow. An empty environment for Chronofractures with no people, creatures, figures, silhouettes or text. Midground: a stopped-clock plaza with a giant frozen clock tower. Foreground: a fountain of suspended droplets and a rain-slick street, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a VIOLET-washed painting. The people color #6b3fa6 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #8c606f for the biggest glowing sources and surfaces, secondary #fff3b0 for medium panels, banners and lights, pop #d00000 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Mindweavers  `mindweavers`

*Psychic magic, telekinesis, and mental manipulation.*

**Character**

| Field | Value |
|---|---|
| Gender | Male |
| Physique | slender and composed; medium size; mobility: grounded |
| Ethnicity + nationality | Japanese heritage, Japanese |
| Identity | a man in his thirties of Japanese-inspired features, a plain headband |
| Wardrobe | slender man in a plain wrapped robe and a headband, one hand outstretched with a few thought-blades hovering near it, eyes shut |
| Accessories | Wrapped fists; plain headband; floating-blade focus; simple robe |
| Pose | one hand extended with three thought-blades floating |
| Facial expression | composed, eyes shut |
| People | Magic |
| Class | Mage |
| Subclass | Mindweavers |
| Type | Caster |
| Combat or support | Combat |
| Silhouette hook | one hand extended with three thought-blades floating; the Wrapped fists and the plain headband break the outline so it reads instantly as a black shape |
| Shape language | flowing diamonds and a bright flat focus shape |
| Main color (60%) | #fe6eb5: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #fee440: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #d8fdff: the eyes, the Wrapped fists and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as one hand extended with three thought-blades floating.
2. Few large shapes: flowing diamonds and a bright flat focus shape; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Wrapped fists and the pose must be visible at 64 px.
4. Flat colors: #fe6eb5 / #fee440 / #d8fdff as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Wrapped fists and plain headband and the caster shape language.

**Background**

| Field | Value |
|---|---|
| Background | a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow |
| Colors | wash #6b3fa6 (about 65%); accents #fe6eb5 / #fee440 / #d8fdff (about 20%) |
| Midground | a bare stone dojo with paper screens, a rack of practice weapons |
| Foreground | a quiet pond and a single hanging lantern |
| Character-relevant items | a bare stone dojo with paper screens, a rack of practice weapons, a quiet pond and a single hanging lantern |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Mindweavers, a man in his thirties of Japanese-inspired features, a plain headband (Japanese heritage, Japanese), apparent age mid 30s.
DESIGN FOR SILHOUETTE FIRST: one hand extended with three thought-blades floating; the Wrapped fists and the plain headband break the outline so it reads instantly as a black shape. Shape language: flowing diamonds and a bright flat focus shape.
BODY: slender and composed, medium size, grounded. POSE: one hand extended with three thought-blades floating. EXPRESSION: composed, eyes shut, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): slender man in a plain wrapped robe and a headband, one hand outstretched with a few thought-blades hovering near it, eyes shut.
COLOR (exact hex values, flat fills): main #fe6eb5 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #fee440 about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #d8fdff about 10%, used on the eyes, the Wrapped fists and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #6b3fa6 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Caster (combat) of the Magic people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow. An empty environment for Mindweavers with no people, creatures, figures, silhouettes or text. Midground: a bare stone dojo with paper screens, a rack of practice weapons. Foreground: a quiet pond and a single hanging lantern, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a VIOLET-washed painting. The people color #6b3fa6 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #fe6eb5 for the biggest glowing sources and surfaces, secondary #fee440 for medium panels, banners and lights, pop #d8fdff for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```

### Fluxborn  `fluxborn`

*Energy absorption, magical discharge, and resonance.*

**Character**

| Field | Value |
|---|---|
| Gender | Nonbinary |
| Physique | wiry and androgynous; medium size; mobility: agile |
| Ethnicity + nationality | Peruvian heritage, Peruvian |
| Identity | a wiry person in their twenties of Peruvian-inspired features, short cropped hair |
| Wardrobe | wiry person in a short insulated cape, both hands crackling with lightning, a line of scorched sparks trailing behind, no weapons |
| Accessories | Insulated shoulder cape; sparkgap gloves; plain boots; wrapped knuckles |
| Pose | mid-dash with lightning crackling in both hands |
| Facial expression | wild, laughing |
| People | Magic |
| Class | Mage |
| Subclass | Fluxborn |
| Type | Assassin |
| Combat or support | Combat |
| Silhouette hook | mid-dash with lightning crackling in both hands; the Insulated shoulder cape and the sparkgap gloves break the outline so it reads instantly as a black shape |
| Shape language | sharp triangles, long thin blades, a low coiled posture |
| Main color (60%) | #fffe64: the largest garment, armor, fur-marking or body areas |
| Secondary color (30%) | #ff4d6d: trim, sash, straps, secondary garment pieces and held gear |
| Pop color (10%) | #fff0d1: the eyes, the Insulated shoulder cape and one small magical detail |
| Natural base tones | Natural skin tones are allowed but must be simplified, flat and muted. |
| Art status | Not yet generated |
| Last vet | Not yet generated |

**Samurai Jack check (targets for this character)**

1. Black-fill test: the silhouette must still read as mid-dash with lightning crackling in both hands.
2. Few large shapes: sharp triangles, long thin blades, a low coiled posture; no more than about a dozen major shapes (head, torso, limbs, main garment, signature gear).
3. Thumbnail test: the Insulated shoulder cape and the pose must be visible at 64 px.
4. Flat colors: #fffe64 / #ff4d6d / #fff0d1 as separate flat shapes divided by black line; no gradients or glow.
5. Distinctive without detail: identifiable by Insulated shoulder cape and sparkgap gloves and the assassin shape language.

**Background**

| Field | Value |
|---|---|
| Background | a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow |
| Colors | wash #6b3fa6 (about 65%); accents #fffe64 / #ff4d6d / #fff0d1 (about 20%) |
| Midground | a thunderstorm rooftop with a lightning-rod forest, scorched concrete |
| Foreground | a cracked water tank and arcing cables |
| Character-relevant items | a thunderstorm rooftop with a lightning-rod forest, scorched concrete, a cracked water tank and arcing cables |

**Character prompt**

```text
Full-body character design for a 2D animated dark-fantasy TV series, in the style of Samurai Jack crossed with Sin City: flat geometric cel animation with heavy solid black shapes. Character: Fluxborn, a wiry person in their twenties of Peruvian-inspired features, short cropped hair (Peruvian heritage, Peruvian), apparent age mid 20s.
DESIGN FOR SILHOUETTE FIRST: mid-dash with lightning crackling in both hands; the Insulated shoulder cape and the sparkgap gloves break the outline so it reads instantly as a black shape. Shape language: sharp triangles, long thin blades, a low coiled posture.
BODY: wiry and androgynous, medium size, agile. POSE: mid-dash with lightning crackling in both hands. EXPRESSION: wild, laughing, stylized and expressive.
WARDROBE AND HELD GEAR (worn or hand-held only): wiry person in a short insulated cape, both hands crackling with lightning, a line of scorched sparks trailing behind, no weapons.
COLOR (exact hex values, flat fills): main #fffe64 about 60%, used on the largest garment, armor, fur-marking or body areas; secondary #ff4d6d about 30%, used on trim, sash, straps, secondary garment pieces and held gear; pop #fff0d1 about 10%, used on the eyes, the Insulated shoulder cape and one small magical detail. Black, white and neutral grey are also allowed. Natural skin tones are allowed but must be simplified, flat and muted. No other saturated colors. Do not use #6b3fa6 on the character (it is reserved for the background).
REQUIRED STYLE: strong, recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean, minimal contour lines; heavy, solid black shapes; stark white highlights; maximum two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized, expressive face; strong negative space around arms, legs, weapons and accessories; consistent visual weight with the rest of the roster.
FORBIDDEN: photorealism; 3D rendering or CGI; painterly brushwork; watercolor or oil-paint texture; anime-style fine detail; soft airbrushing; gradients; bloom, lens flare or realistic glow (any glow is a flat solid shape); detailed fabric textures; excessive tiny costume decorations; individual hairs or fur strands; realistic material reflections; generic fantasy concept-art rendering.
SOLIDITY: every large shape is a fully filled, opaque, closed shape with a black contour line; no region fades, dissolves or disappears into the transparency; avoid large pale pink, light grey or white body areas (fill large areas with the assigned colors, a dark base tone or bone-cream edged in black); the figure is one connected body with all parts attached.
SAMURAI JACK CHECK: it must still read when filled solid black; be animatable with a few large shapes; read at thumbnail size; use flat, separated colors; be distinctive without surface detail.
COMPOSITION: a single full-body figure, head to toe fully visible, nothing cropped, clear margin around it, centered. Transparent background (true alpha): no floor, shadow, scene, checkerboard, border or text. 3:4 portrait. A Assassin (combat) of the Magic people, mature dark-age tone, no nudity, no gore.
```

**Background prompt**

```text
Heavily stippled charcoal and ink illustration on toned paper, a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 16:9 landscape, 1980s post-apocalyptic neo-retro cyberpunk dark-age mood.
SCENE: a ruined broadcast-and-ritual precinct: a leaning radio-tower observatory, a mushroom-furred factory floor, a chalk summoning circle on cracked concrete, a broken substation, drifting arcane glow. An empty environment for Fluxborn with no people, creatures, figures, silhouettes or text. Midground: a thunderstorm rooftop with a lightning-rod forest, scorched concrete. Foreground: a cracked water tank and arcing cables, plus wet ground reflecting light. Large props the character cannot wear or carry live here, never in a hand.
COLOR (most important): a VIOLET-washed painting. The people color #6b3fa6 washes about 65% of the image across sky, fog, ground, walls and haze. Accents about 20%, clearly visible: main #fffe64 for the biggest glowing sources and surfaces, secondary #ff4d6d for medium panels, banners and lights, pop #fff0d1 for small sparks and glints, reflected on the ground. Black and white for ink linework, deep shadows and highlights.
COMPOSITION: horizon at one-third height, a moon upper-left, open empty space in the lower center where the character will stand, props pushed to the left and right edges.
```
