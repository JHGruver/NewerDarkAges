// THE NEWER DARK AGES: Version 2 data.
// Direction: neo-retro cyberpunk, 1980s post-apocalypse, lived like the dark ages. Mantra: "David Bowie's Batman".
// Sin City ink + a four-color system: each PEOPLE owns a background color, each CHARACTER owns a trio of accent colors.
// Version 1 (gold and glass) is archived under /v1 and reachable from the hamburger menu.

// Leaf builder: a selectable character.  role = "combat" | "support"
window.L = (id, name, icon, role, tagline, summary, lore, strengths, weaknesses, abilities, gear, look, pal) =>
  ({ id, name, icon, role, tagline, summary, lore, strengths, weaknesses, abilities, gear, look, pal });
// Mid-level builder: a subclass with its own leaves
window.M = (id, name, icon, tagline, summary, lore, subs) => ({ id, name, icon, tagline, summary, lore, subs });
window.GROUP_ORDER = ["human", "vampire", "were", "ghost", "undead", "forest", "eldritch", "magic"];
window.GROUP_DEFS = window.GROUP_DEFS || {};

window.WORLD = {
  title: "The Newer Dark Ages",
  mantra: "David Bowie's Batman",
  pitch:
    "In 1986 the Last Broadcast went out across every dial, and then the grid went dark. Nobody agrees what came next. What is certain is that the cities lie in ruin, the sky flickers and the rain never quite stops. Decades on, the survivors live like it is the Dark Ages: keeps and guilds, oaths and blood-feuds, hand-forged steel. Only the old world's relics (cassettes, CRT monitors, hand-crank radios, neon tube, copper cable) are now sacred tools, holy weapons and the best loot in the land. Eight peoples fight over what is left, in a world that looks like a glam-rock noir comic: black ink, spotlights, chrome, and one blazing color at a time.",
  tone: [
    "Sin City ink: blacks, whites and greys, with color as a weapon, never wallpaper.",
    "David Bowie's Batman: glam, gadgets, spotlights and gothic rooftops. Dangerous, stylish, theatrical.",
    "Mature and combat-focused. Weapons, tactics and consequences, with no nudity and no gore.",
    "1980s post-apocalypse: synth, cassette, neon tube, chrome, rain on cobblestones. Not everything is neon; pastels and dusk-light are welcome.",
  ],
  regions: [
    { name: "The Dim", icon: "cloud-fog", text: "The central wasteland. Rain, fog and flickering signs where the old highways cross. Every keep has a radio mast and a grudge." },
    { name: "The Pylon Coast", icon: "waves", text: "A shoreline of dead power lines strung like cathedral rigging. Smugglers, river-jackers and drowned relic-vaults." },
    { name: "The Static Spires", icon: "castle", text: "Skyscraper husks turned into vampire courts and wizard towers. Glam, glass and old tape-hiss in the stairwells." },
    { name: "The Overgrowth", icon: "tree-pine", text: "A drowned suburb swallowed by forest. Roots through server rooms, moss on monitors, and the old folk who live there." },
    { name: "Ashfall Reach", icon: "sun", text: "Dust, tombs and buried bunkers. The Undead keep their long guard here beside sealed vaults nobody dares open." },
  ],
};

window.STORY = [
  { title: "The Last Broadcast", text: "One night every radio, TV and tape deck played the same sixty seconds of sound. Then the lights went out and stayed out." },
  { title: "The Dim", text: "A flickering half-dark settled over everything. Magic, ghosts and the monsters of old stories came back with it, and nobody asked them to." },
  { title: "The Relic Wars", text: "Keeps and guilds now fight over salvage that still works: a battery, a transmitter, a working light. A single relic can raise a house or burn one." },
  { title: "The Second Signal", text: "Something is broadcasting again, faint and rhythmic, from beneath the Static Spires. Every people has an opinion on who should answer it." },
];

// People colors: each people's primary BACKGROUND color in artwork. color2 = lighter tint for UI.
window.PEOPLE_COLORS = {
  human:   { color: "#d9a521", color2: "#f3d98b", name: "Gold" },
  vampire: { color: "#16161c", color2: "#8a8a99", name: "Black" },
  were:    { color: "#b4532a", color2: "#e8a07e", name: "Rust" },
  ghost:   { color: "#8fcfe0", color2: "#d6f1f7", name: "Ice" },
  undead:  { color: "#bdb7a4", color2: "#e8e4d6", name: "Bone" },
  forest:  { color: "#3f7d45", color2: "#9fd2a1", name: "Moss" },
  eldritch: { color: "#0b7a75", color2: "#6fd6cf", name: "Abyss" },
  wizard:  { color: "#6b3fa6", color2: "#b79ae0", name: "Violet" },
  witch:   { color: "#b83a7a", color2: "#e8a4c4", name: "Rose" },
  warlock: { color: "#9b1c2c", color2: "#e08a96", name: "Oxblood" },
  mage:    { color: "#2f62d6", color2: "#9db8f2", name: "Cobalt" },
};

const K = (id, t, done) => ({ id, t, done: !!done });
window.PHASES = [
  {
    id: "p1", name: "Phase 1: The Project Website (V2)", status: "in-progress",
    summary: "The living project hub, rebuilt for the neo-retro cyberpunk direction. Version 1 is archived in the menu. Audited: 17 of 30 tasks are done; the rest is mostly art generation and balance.",
    tasks: [
      K("world", "New world, peoples, subclasses and specializations (8 peoples, 131 characters in 8 peoples, 8 in 10 combat)", true),
      K("magic", "Magic people: four classes (Wizard, Witch, Warlock, Mage) with 12 subclass characters, Sticky Wizard included", true),
      K("fourcolor", "Four-color system: people color + a unique trio for every character (color audit done)", true),
      K("types", "Character types (9), attributes (physique, size, mobility) and combat/support tile badges", true),
      K("gallery", "Character select gallery and details view in the new theme (filters, completed filter, tabs)", true),
      K("viewer", "Art-only view with carousel, swipe, zoom and the character plaque", true),
      K("menu", "Hamburger menu with archived versions", true),
      K("motion", "Motion pass: shared-element morph, hover states, silky mouse-leave, 80s hover shapes per people", true),
      K("responsive", "Mobile and tablet responsive pass", true),
      K("prompts", "Prompt system: character + background prompts with the Samurai Jack lint (14 checks)", true),
      K("cast", "Cast bible (CAST.md): every character's attributes plus DALL·E prompts", true),
      K("deploy", "GitHub Pages deploy from main", true),
      K("core", "Generate the core characters and backgrounds (done: one per people, plus the Sticky Wizard)", true),
      K("manual", "Monster Manual NPCs reassigned to the new peoples", true),
      K("allart", "Generate all 131 characters and their backgrounds (61 of 131 done)"),
      K("siteart", "Site art, part 1 (done): logo, wordmark, 8 crests, 4 Magic sigils, 9 type icons, textures, UI frames, placeholder tile. Part 2 (todo): banners, region plates, story panels, share image, world map", true),
      K("siteart2", "Site art, part 2: painted scenes from SITE-ASSETS.md (hero, regions, banners, story, map, headers) and wire them in"),
      K("pipeline", "Script the image generation from CAST.md (API, transparent PNG, auto-resize)"),
      K("sticky", "Sticky Wizard credit review with Mike Mears (art is in)"),
      K("stats", "Balance and stat sheet for each specialization"),
      K("lore", "Consolidate the lore bible: unified from the World Outline and Characters sheet, with a Lore page and LORE-BIBLE.md", true),
      K("lore-approve", "Approve or change the bridging lore tagged A (Thoth-Ra / Ramuset / Imhotep, the 1986 broadcast, how the peoples fit)"),
      K("vote", "Character voting page (#/vote): swipe deck with like / super like / dislike, comments and a spreadsheet export", true),
      K("summoners", "Summoner / minionmancer class added to every people (8 new characters) with prompts, lore and attributes", true),
      K("summoner-art", "Make the art for the 8 new Summoners (prompts are in PROMPTS.md)"),
      K("vote-review", "Collect votes from testers and review the exported spreadsheets"),
      K("music", "Soundtrack: Last Game Before Dawn is in audio/soundtrack.mp3 and blends in from the static", true),
      K("story", "Scrolling story home page: the dial that tunes through the world's story to the Pick a character button", true),
      K("a11y", "Accessibility pass: keyboard focus, contrast, reduced motion and screen-reader labels"),
      K("share", "Custom domain and share/OG preview image"),
      K("notes", "Refresh V2-NOTES.md and the core prompt file for 8 peoples and 131 characters"),
    ],
  },
  {
    id: "p2", name: "Phase 2: Comics", status: "planned",
    summary: "A comic for each people and each subclass: black ink, spot color, glam-noir panels.",
    tasks: [K("c-style", "Comic style guide (ink, spot color, lettering)"), K("c-intro", "8 people intro comics"), K("c-sub", "Subclass comics (one per character group)"), K("c-magic", "Magic class shorts: study, cultivate, bargain, embody"), K("c-cross", "Crossover: the Second Signal"), K("c-pub", "Publish inside the site")],
  },
  {
    id: "p3", name: "Phase 3: Board Game (Physical + Digital)", status: "planned",
    summary: "Every player can be any specialization. Boxes hold a subset; the full box holds all of them.",
    tasks: [K("b-rules", "Core rules and turn structure"), K("b-decks", "Specialization decks"), K("b-bal", "Balance across all 131 (builds on the Phase 1 stat sheets)"), K("b-roles", "Combat and support role rules (the 8/2 split)"), K("b-box", "Box set plan"), K("b-dig", "Digital prototype"), K("b-phys", "Physical prototype and playtests"), K("b-price", "Pricing and manufacturing plan")],
  },
  {
    id: "p4", name: "Phase 4: The MMO", status: "planned",
    summary: "Use everything built so far to design the persistent world.",
    tasks: [K("m-port", "Port abilities into MMO systems"), K("m-map", "World map and zones"), K("m-tech", "Tech stack and cost research"), K("m-prog", "Progression, resources and magic systems (Corruption, Resonance, Charge)"), K("m-slice", "Vertical slice plan")],
  },
];

window.ART = {
  pillars: [
    { title: "David Bowie's Batman", text: "The mantra. Glam-rock flamboyance meets the Dark Knight: lightning, spotlights, capes, gadgets, gothic rooftops, androgynous swagger. Everything should look like a stage and a crime scene at once." },
    { title: "Sin City ink", text: "Backgrounds are charcoal and ink paintings: blacks, whites and greys with heavy contrast and rain. Characters are Samurai Jack-style flat geometric 2D cel art with bold dark outlines." },
    { title: "Four colors, always", text: "Every image uses four colors on top of the greys: ONE people color (the background) plus the character's trio. The people color dominates the scene; the trio dominates the character." },
    { title: "Not just neon", text: "Neon is a tool, not the rule. Pastels, dusk light, sodium amber and chalky tones are welcome, as long as the four colors stay balanced and beautiful together." },
  ],
  rules: [
    "A background is painted (charcoal, ink, gouache wash): never a render. The people color tints the light and the key shapes.",
    "A character carries 3 colors: a main (about 60%), a secondary (about 30%) and a pop (about 10%).",
    "The trio is chosen to read against the people color and to say who the character is.",
    "Same pose and camera for comparison renders. Silhouettes stay angular and instantly readable.",
    "Adult combat tone: weapons, armor, tactics. Never nudity or gore.",
  ],
};
