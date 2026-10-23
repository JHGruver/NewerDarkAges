# NEWER DARK AGES
## Official Character Art Direction & Brand Guidelines
**Version 1.0: Master AI Art Instructions** (provided by the author; verbatim)

> Note: the pasted text ended at "4. Character Composition. Standard foreground deliverable:". The rest of section 4 (and any later sections) has not been received yet.

### 1. Creative Vision

NewerDarkAges is a post-apocalyptic dark-fantasy world where medieval civilizations, supernatural creatures, ruined technology, and remnants of 1980s retro-futurism coexist.

The character art combines:

- **Samurai Jack:** Strong silhouettes, angular geometry, flat colors, minimalist animation design.
- **Sin City:** Heavy black shapes, stark contrast, dramatic negative space.
- **1980s glam-gothic fantasy:** Theatrical silhouettes, long coats, exaggerated collars, striking accessories, dark romanticism.
- **Post-apocalyptic retro-cyberpunk:** Salvaged electronics, worn machinery, analog instruments, repurposed materials.
- **Classic fantasy:** Distinct races, recognizable professions, supernatural abilities, mythical creatures, and cultural traditions.

The result should feel like a cohesive animated dark-fantasy universe, not a collection of unrelated fantasy illustrations.

**Core principle: Design for silhouette first, character second, detail last.**

---

### 2. Mandatory Visual Style

All characters must use a consistent, simplified 2D animation aesthetic.

**Required:**
- Strong, recognizable full-body silhouette
- Flat geometric color shapes
- Angular construction and deliberate exaggeration
- Clean, minimal contour lines
- Heavy, solid black shapes
- Stark white highlights
- Maximum two tonal planes per material
- Clear separation between overlapping forms
- Readable anatomy and gestures
- Stylized, expressive faces
- Strong negative space around arms, legs, weapons, and accessories
- Consistent visual weight across the entire roster

**Forbidden:**
- Photorealism
- 3D rendering or CGI
- Painterly brushwork
- Watercolor or oil-paint textures on characters
- Anime-style rendering with excessive fine detail
- Soft airbrushing
- Gradients
- Bloom, lens flare, or realistic glow
- Detailed fabric textures
- Excessive tiny costume decorations
- Intricate rendering of individual hairs or fur strands
- Realistic material reflections
- Generic fantasy concept-art rendering

Characters should look like they could be animated efficiently in the same television series.

### The Samurai Jack Check

Before accepting any character design, ask:

1. Would the silhouette remain recognizable if filled entirely with black?
2. Could the character be animated using relatively few large shapes?
3. Is the design readable at thumbnail size?
4. Are the colors flat and intentionally separated?
5. Is the character distinctive without relying on elaborate surface details?

If any answer is no, simplify and revise.

---

### 3. Color System

Every character receives exactly three designated accent colors.

**Main color: approximately 60%**

The dominant character color. Establishes the visual identity through major garments, armor, fur markings, or equipment.

**Secondary color: approximately 30%**

Supports the main color and creates visual separation between major shapes.

**Pop color: approximately 10%**

Reserved for focal points, small magical details, eyes, ornaments, or important equipment.

Black, white, and neutral grey may be used in addition to these three colors.

Color percentages are approximate proportions of the colored design, not the transparent canvas.

#### Important Color Rules

- Use the exact supplied hexadecimal colors.
- Do not introduce additional saturated accent colors.
- Do not replace the assigned palette with generic fantasy colors.
- Use flat fills rather than gradients.
- Keep highlights and shadows limited to clearly defined shapes.
- Do not let the pop color dominate the composition.
- Natural skin, fur, and species anatomy may use simplified neutral or natural base tones when necessary, but should not introduce competing saturated colors.

#### People Background Color

Each People category also has an assigned environmental/background color.

**This color is reserved for background artwork and interface presentation.**

It is not a fourth character accent color.

Character artwork must remain isolated on transparency even when a People background color is supplied.

---

### 4. Character Composition

**Standard foreground deliverable:** *(text not yet received)*

---

## How this is enforced in the pipeline

1. **Prompts** (`CAST.md`, `CAST.xlsx`, `CAST.json`) carry the required and forbidden lists, the exact hex colors with where each is used, a silhouette hook and a shape language for every character.
2. **Style references:** new portraits are generated with the approved art (Interceptors, Owlwings, Moonrunners) attached as style references, so the model copies the rendering style, not just the words.
3. **Self-vetting** (`tools/generate-character.mjs`): every attempt is scored by a vision model against the five Samurai Jack questions, the color rules, anatomy and the character description, compared side by side with the approved references, plus hard pixel checks (real transparency, nothing cropped, palette present, no stray saturated colors). A failing attempt is regenerated with the critique added to the prompt (up to 3 tries). The best attempt wins and its full report is saved next to the art (`*.vet.json`) and shown in `CAST.md`.
4. **Human review** is still the last gate: nothing is committed until you approve it.
