// MAGIC: one people, four classes (Wizard, Witch, Warlock, Mage), each with three subclasses. The twelve subclasses are the characters.
//   Wizards study power. Witches cultivate power. Warlocks bargain for power. Mages embody power.
// The earlier 36 specializations are archived in data-archive.js (ARCHIVE.magic36).
window.PEOPLE_COLORS.magic = { color: "#6b3fa6", color2: "#b79ae0", name: "Violet" };
["wizard","witch","warlock","mage"].forEach((t) => delete PEOPLE_COLORS[t]);
GROUP_DEFS.magic = {
  id: "magic", name: "Magic", icon: "crystal-ball", color: "#6b3fa6", color2: "#b79ae0",
  levelNames: ["Class", "Subclass"],
  tagline: "Four ways to hold power.",
  summary: "One people, four classes: Wizard (the academic scientist), Witch (the naturalist ritualist), Warlock (the dangerous renegade) and Mage (the living conduit). Each class has three subclasses, and each subclass is a playable character.",
  lore: "When the Last Broadcast went out, the world's magic came loose. Some people measured it, some grew it, some made deals with it and some were simply born carrying it. They fight each other over it, and they all fear the things it brought back.",
  traits: { Power: 5, Resilience: 2, Mystery: 5, Social: 2, Versatility: 5 },
  playstyle: "Spell-driven play. Pick a class for how you get power: study (Wizard), cultivation (Witch), a bargain (Warlock) or your own body (Mage).",
  subs: [ { "id": "wizard", "name": "Wizard", "icon": "telescope", "tagline": "The Academic Scientist", "summary": "Wizards study power. The academic scientists of the arcane. Wizards learn to manipulate universal laws through mathematics, research, experimentation and engineered instruments. In the Dim they are the ones who figured out what the old world's machines were actually doing, and built better ones.", "lore": "When the Last Broadcast died, the Wizards were the only people who recognized it as a spell. They gathered in the Static Spires and rebuilt magic as an engineering discipline: laws, units, instruments and peer review. They are dangerous in exactly the way a very prepared person is dangerous: they have a plan, a calculation and a backup.", "extras": [ { "title": "How Wizards work", "items": [ { "name": "Source: knowledge", "desc": "Wizards draw on universal laws. Understanding a law lets them bend it, so research and preparation are their power." }, { "name": "Resource: Mana and Focus", "desc": "Mana pays for spells and Focus keeps a prepared spell stable. A Wizard who runs low on Focus fumbles even simple casts." }, { "name": "Gameplay", "desc": "Prepared spells, calculated area control and technical utility. Wizards win fights before they start by choosing the ground and the formula." }, { "name": "Weakness", "desc": "They need preparation and careful resource management. Surprised, rushed or out of instruments, a Wizard is fragile." }, { "name": "Aesthetic", "desc": "Architectural silhouettes, structured coats, instruments, scrolls and precise geometry." } ] } ], "subs": [ { "id": "signalsavants", "name": "Signal Savants", "icon": "radio", "role": "combat", "tagline": "Radio-frequency magic, broadcasting, and interference.", "summary": "Scholars who decode magical frequencies from surviving radio towers, shortwave receivers and broadcast systems.", "lore": "Every dead transmitter still carries an echo of the Last Broadcast. Savants tune to it, read it and cast through it, the way a physicist reads a spectrum.", "strengths": [ "Counterspells and jamming of enemy casters", "Strong damage against targets they have tuned" ], "weaknesses": [ "Needs a moment to tune", "Fragile if interrupted" ], "abilities": [ "Tune In: find a target's resonance", "Counter-Burst: cancel a spell as it is cast", "Resonance Beam: heavy damage on a tuned target" ], "gear": "Radio staff, dial gauntlet, antenna hat, shortwave charm", "look": "Tall, elegant wizard in a structured green coat and an antenna-crowned hat, a radio-topped staff in one hand and a gold-ringed dial gauntlet crackling in the other.", "pal": [ "#5a844c", "#f72585", "#ffd60a" ] }, { "id": "circuitarcanists", "name": "Circuit Arcanists", "icon": "cog", "role": "combat", "tagline": "Magical engineering, enchanted circuits, and technological spellcraft.", "summary": "Engineers who construct spells using mathematical circuits, salvaged components and programmable magical devices.", "lore": "Their workshops are salvage yards of copper and carved glass. A Circuit Arcanist does not memorize a spell; they wire one.", "strengths": [ "Stored-energy burst damage", "Fast, precise rapid discharges" ], "weaknesses": [ "Weak when drained", "Needs time to recharge between flurries" ], "abilities": [ "Charge Store: bank energy from a parry", "Discharge Thrust: release a string of strikes", "Arc Riposte: counter an attack with lightning" ], "gear": "Coil-hilt rapier, capacitor bracers, insulated gloves, short coat", "look": "Lean young wizard in a sharp short coat mid-lunge, a coil-wrapped rapier extended and glowing capacitor bracers on both wrists.", "pal": [ "#8283f7", "#ff5d8f", "#fff7c7" ] }, { "id": "stickywizards", "name": "Sticky Wizards", "icon": "frog", "role": "combat", "tagline": "Adhesive alchemy, enchanted slime, and bouncing magic. Includes Mike Mears' Sticky Wizard.", "summary": "An amphibious school of experimental wizardry centered on adhesive alchemy, enchanted gels, elasticity and bouncing magic. Cute is a tactic: the wizard lost his hat to a frog years ago and has never gotten it back. The school has never lost a seminar.", "lore": "The Sticky school keeps its laboratories in flooded basements, where the humidity suits both the experiments and the students. Strategically they are some of the sharpest minds in the Static Spires: control the enemy's movement and the fight is already won.", "strengths": [ "Pins and immobilizes enemies at range", "Setups that make every ally's hit land" ], "weaknesses": [ "Short on raw damage", "Gel runs out without refills" ], "abilities": [ "Goo Shot: ranged adhesive that roots a target", "Gluey Hat Trick: yank an enemy's weapon from their hands", "Sticky Situation: coat an area so enemies move slowly" ], "gear": "Sling-staff, goo-jar bandolier, alchemy satchel, a frog companion wearing the wizard hat", "look": "A lanky, hatless wizard with messy hair and a goo-jar bandolier, a sling-staff aimed mid-shot, and at his feet a small, round frog proudly wearing the wizard hat that is far too big for it.", "pal": [ "#0de609", "#ffd23f", "#ff6b9d" ] } ] }, { "id": "witch", "name": "Witch", "icon": "moon-star", "tagline": "The Naturalist Ritualist", "summary": "Witches cultivate power. The naturalist ritualists. Witches practice inherited traditions of nature, spirits, materials and sympathetic ritual. Their power does not come from a book; it comes from a relationship with the world: its fungi, its roots, its dead machines and the spirits that live in them.", "lore": "When the Last Broadcast died, the Witches were not surprised. They had always known the world was listening. They moved into the ruined factories, the damp basements and the reclaimed groves and went on doing what their grandmothers did, now with spores in the walls and static in the wire. Their covens are families, apprenticeships and, at the edges, feuds.", "extras": [ { "title": "How Witches work", "items": [ { "name": "Source: nature, spirits and folk tradition", "desc": "A Witch's power emerges from relationships: with the plants and fungi that feed her, the spirits in her house and the dead who are still listening." }, { "name": "Resource: herbs, catalysts and ritual components", "desc": "Every working needs something real: a sprig, a jar of spores, a lock of hair, a burnt-out radio tube. Gathering is half the craft." }, { "name": "Gameplay", "desc": "Curses, alchemy, damage over time, healing and environmental synergy. Witches stack slow effects and let the world finish the job." }, { "name": "Weakness", "desc": "They rely on components, preparation and favorable conditions. A Witch without her kit, or in a sterile place, is merely stubborn." }, { "name": "Aesthetic", "desc": "Organic asymmetry, herbs, bones, vials, charms and weathered cloaks." } ] } ], "subs": [ { "id": "sporecoven", "name": "Spore Coven", "icon": "mushroom", "role": "support", "tagline": "Fungal magic, spores, poisons, and regeneration.", "summary": "Ritualists who cultivate fungi and symbiotic organisms in abandoned factories, damp ruins and reclaimed wilderness.", "lore": "A Spore Coven's hall is a factory floor furred with mycelium and lit by bioluminescent caps. Every member shares a living network, and what hurts one is felt by all.", "strengths": [ "Healing networks that share damage across allies", "Regenerates the party between fights" ], "weaknesses": [ "Slow burst healing", "Fire destroys the network" ], "abilities": [ "Mycelial Web: link allies and spread their damage", "Spore Bloom: heal everyone in a ring over time", "Network Pulse: send healing along the web to any ally" ], "gear": "Spore-jar basket, fungus-wrapped cane, mushroom-cap shawl, poultice pouch, a pet snail chef with a glowing mushroom on its shell, a chef hat and a spatula", "look": "Tall, sturdy red-dreadlocked, bearded cultivator in a leaf-and-mushroom shawl, leaning on a vine-wrapped cane with a basket of glowing spore jars at the hip and one hand conjuring pink spore smoke, and at his feet a pet snail chef in a tiny chef hat carrying a glowing mushroom and a spatula on its shell.", "pal": [ "#d0e2a3", "#2f6f4f", "#ffb4a2" ] }, { "id": "scraphexwitches", "name": "Scraphex Witches", "icon": "radio", "role": "combat", "tagline": "Haunted electronics, cursed relics, and sympathetic magic.", "summary": "Folk practitioners who bind spirits and curses into obsolete electronic devices, wires, broken screens and household relics.", "lore": "A Scraphex witch never throws anything away. The dead radio, the cracked television and the dead telephone are all, to her, a house with someone living in it.", "strengths": [ "Curses that follow a target across the battlefield", "Weaken enemy defenses at range" ], "weaknesses": [ "The curse is slow to take hold", "Needs a working radio" ], "abilities": [ "Tuned Curse: a hex that tracks one target", "Dead Air: silence a target's spells", "Spirit Static: a curse that spreads to nearby enemies" ], "gear": "Hex radio, antenna wand, curse cassettes, shawl", "look": "Woman in her thirties in a layered shawl and headscarf, a bent antenna wand raised in one hand and a battered hex radio on a strap at the hip, curse tapes tucked in a bandolier.", "pal": [ "#b703ec", "#00b4d8", "#e4ffda" ] }, { "id": "thornbloodcoven", "name": "Thornblood Coven", "icon": "tree-pine", "role": "support", "tagline": "Plant magic, ancestral spirits, healing, and binding.", "summary": "Ancestral practitioners who manipulate roots, thorns, medicinal plants and the spirits of reclaimed forests.", "lore": "Their groves grow in ruined parking lots and over old highways. A Thornblood Witch is her family's seed: she keeps their names in the bark.", "strengths": [ "Regenerative medicine and plant-based restoration", "Cleanses poisons and disease" ], "weaknesses": [ "Slow, steady healing", "Needs fresh herbs" ], "abilities": [ "Poultice: heal over time", "Bitter Tea: cleanse poison and disease", "Regrow: restore a downed ally to their feet" ], "gear": "Herb satchel, mortar and pestle, root-carved cane, woven sash", "look": "Warm middle-aged man in a woven sash and a long herb-stained coat, a mortar and pestle in one hand and a root-carved cane in the other, a satchel of herbs at the hip.", "pal": [ "#0d5faf", "#f4a261", "#fff7c7" ] } ] }, { "id": "warlock", "name": "Warlock", "icon": "flame", "tagline": "The Dangerous Renegade", "summary": "Warlocks bargain for power. The dangerous renegades. Warlocks obtain supernatural power through binding agreements with entities that should not be bargained with. They are rarely trusted, rarely alone and almost never at peace with the terms.", "lore": "When the Last Broadcast went out, something answered, and a few people picked up. Warlocks are the ones who said yes to what was on the other end. Their patrons live in the void, in the old machinery and behind dead glass, and they collect in blood, health, memory and obligation.", "extras": [ { "title": "How Warlocks work", "items": [ { "name": "Source: patrons and forbidden pacts", "desc": "A Warlock's power is borrowed. A patron grants it in exchange for service, sacrifice or silence." }, { "name": "Resource: health, corruption, souls and patron favor", "desc": "Gifts cost Health or raise Corruption. Spending a soul or a memory buys the strongest gifts; patron favor keeps the line open." }, { "name": "Gameplay", "desc": "High-impact attacks, sacrifices, summons and lifesteal. A Warlock is a glass cannon who can trade their own life for a decisive turn." }, { "name": "Weakness", "desc": "Dangerous costs and patron obligations. Ignore a patron's demand and the gifts stop, then the debt arrives." }, { "name": "Aesthetic", "desc": "Jagged gothic silhouettes, ritual marks, cursed relics and asymmetric armor." } ] } ], "subs": [ { "id": "voidbound", "name": "Voidbound", "icon": "star", "role": "combat", "tagline": "Eldritch patrons, dimensional magic, and cosmic corruption.", "summary": "Renegades who negotiate with cosmic intelligences, dimensional entities and Eldritch patrons.", "lore": "The Voidbound speak to something enormous and patient. It always honors the contract, which is the most frightening thing about it.", "strengths": [ "Void bolts and dimensional wounds", "Strong ranged damage that ignores armor" ], "weaknesses": [ "Costs health to cast", "Fragile in close combat" ], "abilities": [ "Void Bolt: a ranged blast that ignores armor", "Dimensional Wound: a tear that bleeds damage over time", "Offering: spend health to double the next bolt" ], "gear": "Offering bowl, void-marked gauntlet, ritual-scar mantle, jagged crown", "look": "Young man in a jagged mantle and asymmetric armor, a ritual mark glowing on one open palm and an offering bowl in the other, a thin crown of black spikes on his head.", "pal": [ "#065255", "#6a4c93", "#caf9ff" ] }, { "id": "bloodwireapostates", "name": "Bloodwire Apostates", "icon": "bolt", "role": "combat", "tagline": "Blood-powered technology, life-force sacrifice, and overload magic.", "summary": "Forbidden practitioners who connect their life force to dangerous pre-collapse machinery.", "lore": "The Apostates run cable from their wrists to buried generators. The machines are hungry, and the Apostates are generous with their blood.", "strengths": [ "Lifesteal and close-range energy weapons", "Sustained damage through draining" ], "weaknesses": [ "Short range", "Burns through its own health when starved" ], "abilities": [ "Siphon Cut: strike and heal from the damage", "Arc Reave: a sweeping energy slash", "Circuit Frenzy: gain attack speed with every kill" ], "gear": "Vein-lit twin blades, wired arm sleeves, thorn plates, glowing circuit tattoos", "look": "Lean man with glowing circuit tattoos along both arms, a bladed capacitor in each hand mid-slash, thorn plates jutting from the shoulders.", "pal": [ "#b368c9", "#7b47cf", "#fff1e6" ] }, { "id": "mirroroathbreakers", "name": "Mirror Oathbreakers", "icon": "mirror", "role": "combat", "tagline": "Reflection magic, duplicates, and deceptive illusions.", "summary": "Pact-makers bound to entities inhabiting mirrors, reflective glass and dead electronic screens.", "lore": "Every dark screen is a window. The Oathbreakers answered what looked back, and now they cannot leave a reflective surface without someone else leaving with them.", "strengths": [ "Reflection-based repositioning and ambush", "Extremely hard to pin down" ], "weaknesses": [ "Needs a reflective surface nearby", "Fragile" ], "abilities": [ "Glasswalk: step between any two reflections", "Shard Strike: a blade of mirror that ignores guard", "Hollow Reflection: leave a mirror image behind" ], "gear": "Mirror-shard daggers, reflective half-mask, glass-panel coat, silver gloves", "look": "Slim man in a coat of mirrored glass panels and a reflective half-mask, a mirror-shard dagger in each hand, caught mid-step as if emerging from the air.", "pal": [ "#00343e", "#0077b6", "#f72585" ] } ] }, { "id": "mage", "name": "Mage", "icon": "sparkles", "tagline": "The Living Conduit", "summary": "Mages embody power. The living conduits. Mages generate, absorb or channel supernatural power through their own bodies. They cast intuitively: no formal study, no ritual ingredients and no contracts. The magic is theirs, and it moves when they do.", "lore": "In the first hour of the Last Broadcast, some people were standing in exactly the wrong place. The signal went through them, and they came out changed. Mages are the unplanned result: people whose bodies learned to hold a power nobody meant to give them. Their gifts do not come with a manual, and the older Mages say that is the point.", "extras": [ { "title": "How Mages work", "items": [ { "name": "Source: innate or internal energy", "desc": "Mages don't learn magic; they have it. The power comes from within, shaped by the Mage's body, temperament and history." }, { "name": "Resource: Resonance and Arcane Charge", "desc": "Every cast builds Resonance. Spent in time it is a weapon; held too long it overloads, and overloads hurt everyone." }, { "name": "Gameplay", "desc": "Reactive casting, mobility, energy manipulation and overload mechanics. Mages play fast and improvise." }, { "name": "Weakness", "desc": "Instability and limited specialization. A Mage can do one kind of thing brilliantly and cannot study their way out of a bad situation." }, { "name": "Aesthetic", "desc": "Expressive poses, kinetic silhouettes, anatomical energy patterns and minimal equipment." } ] } ], "subs": [ { "id": "chronofractures", "name": "Chronofractures", "icon": "clock", "role": "combat", "tagline": "Time manipulation, rewinds, and temporal displacement.", "summary": "Individuals whose bodies became temporally displaced during the Collapse.", "lore": "Chronofractures live a half-second out of step with everyone else. They often arrive somewhere a moment before they leave.", "strengths": [ "Short-range rewinds and evasive combat", "Superb counter-attack timing" ], "weaknesses": [ "Short rewind range", "Exhausting in long fights" ], "abilities": [ "Slip Back: rewind to where you stood a second ago", "Replay: repeat your last strike for free", "Clean Cut: counter an attack that has already missed" ], "gear": "Pocket watch, narrow blade, scuffed jacket, glowing second-hand charm", "look": "Lean young man in a scuffed jacket mid-dodge with a narrow blade drawn, a faint ghost-copy of himself a half-step behind and a pocket watch swinging on its chain.", "pal": [ "#8c606f", "#fff3b0", "#d00000" ] }, { "id": "mindweavers", "name": "Mindweavers", "icon": "brain", "role": "combat", "tagline": "Psychic magic, telekinesis, and mental manipulation.", "summary": "Innate psychics who directly manipulate thought, perception, memory and matter.", "lore": "A Mindweaver doesn't cast; they decide. The world gives way because they stopped expecting it not to.", "strengths": [ "Telekinetic weapons and precise strikes", "Strong against single targets" ], "weaknesses": [ "Needs a clear mind", "Breaks concentration when hit" ], "abilities": [ "Will Blade: conjure a floating blade of thought", "Mind's Edge: a precise strike that ignores armor", "Telekinetic Throw: fling a foe or an object" ], "gear": "Wrapped fists, plain headband, floating-blade focus, simple robe", "look": "Slender man in a plain wrapped robe and a headband, one hand outstretched with three translucent thought-blades hovering around it, eyes shut in concentration.", "pal": [ "#fe6eb5", "#fee440", "#d8fdff" ] }, { "id": "fluxborn", "name": "Fluxborn", "icon": "battery", "role": "combat", "tagline": "Energy absorption, magical discharge, and resonance.", "summary": "Living magical batteries whose bodies absorb and discharge energy from the world's damaged power systems.", "lore": "The Fluxborn were born near dead substations and failed turbines. They hum in the dark, and lamps flicker as they walk by.", "strengths": [ "Rapid energy discharges and mobility", "Hard to pin down and strong in short bursts" ], "weaknesses": [ "Burns out quickly", "Little defense" ], "abilities": [ "Arc Blink: teleport along a line of electricity", "Flash Strike: a rapid discharge on arrival", "Chain Discharge: bounce the strike to nearby enemies" ], "gear": "Insulated shoulder cape, sparkgap gloves, plain boots, wrapped knuckles", "look": "Wiry person in a short insulated cape mid-dash, both hands crackling with lightning and a line of scorched sparks trailing behind them.", "pal": [ "#fffe64", "#ff4d6d", "#fff0d1" ] } ] } ],
};
Object.assign(CHAR_META, {
 "signalsavants": {
  "type": "controller",
  "physique": "tall and elegant",
  "size": "medium",
  "move": "grounded",
  "who": "a woman in her forties, dark-skinned, with long white braids"
 },
 "circuitarcanists": {
  "type": "fighter",
  "physique": "lean and quick, a coil-wound sleeve, a short coat",
  "size": "medium",
  "move": "agile",
  "who": "a young man in his twenties of Mexican-inspired features, sharp sideburns"
 },
 "stickywizards": {
  "type": "blaster",
  "physique": "tall and lanky",
  "size": "medium",
  "move": "agile",
  "who": "Sticky Wizard (created by Mike Mears): a lanky, hatless male wizard in his thirties with messy hair and a playful, capable manner, and at his feet a small round frog wearing the wizard hat"
 },
 "sporecoven": {
  "type": "support",
  "physique": "tall and sturdy",
  "size": "medium",
  "move": "grounded",
  "who": "a warm, bearded man in his forties with long red dreadlocks threaded with mushrooms and leaves, with a pet snail chef at his feet"
 },
 "scraphexwitches": {
  "type": "controller",
  "physique": "average and shawled, a stooped back, a heavy patchwork shawl",
  "size": "medium",
  "move": "grounded",
  "who": "a woman in her mid-thirties of Lebanese-inspired features, dark headscarf"
 },
 "thornbloodcoven": {
  "type": "support",
  "physique": "warm and sturdy, a barrel chest, wide forearms",
  "size": "medium",
  "move": "grounded",
  "who": "a man in his forties of West African-inspired features, close-cropped beard"
 },
 "voidbound": {
  "type": "blaster",
  "physique": "gaunt and tall, sunken cheeks, long pale hands",
  "size": "medium",
  "move": "grounded",
  "who": "a young man in his twenties of Greek-inspired features, shaven head"
 },
 "bloodwireapostates": {
  "type": "fighter",
  "physique": "lean and sinewy, wire-wrapped forearms, a shaved head",
  "size": "medium",
  "move": "agile",
  "who": "a man in his twenties of Vietnamese-inspired features, circuit tattoos"
 },
 "mirroroathbreakers": {
  "type": "assassin",
  "physique": "slim and quick, a coat with a high collar",
  "size": "medium",
  "move": "phasing",
  "who": "a man in his thirties of Persian-inspired features, a mirrored half-mask"
 },
 "chronofractures": {
  "type": "fighter",
  "physique": "lean and restless, a thin frame, a loose jacket",
  "size": "medium",
  "move": "agile",
  "who": "a young man in his twenties of Nigerian-inspired features, close-cropped hair"
 },
 "mindweavers": {
  "type": "caster",
  "physique": "slender and composed, a long neck, still hands",
  "size": "medium",
  "move": "grounded",
  "who": "a man in his thirties of Japanese-inspired features, a plain headband"
 },
 "fluxborn": {
  "type": "assassin",
  "physique": "wiry and androgynous, a short crop of hair",
  "size": "medium",
  "move": "agile",
  "who": "a wiry person in their twenties of Peruvian-inspired features, short cropped hair"
 }
});
Object.assign(ART_SPEC, {
 "signalsavants": {
  "w": "wizard in a structured green coat and an antenna-crowned hat, a radio-shaped staff in one hand and a gold-ringed dial gauntlet on the other forearm, a shortwave charm necklace",
  "p": "a radio station room with a huge shortwave set with glowing dials, a mixing desk, an antenna array outside the window, a wall of tubes"
 },
 "circuitarcanists": {
  "w": "wizard in a sharp short coat, a coil-hilt rapier in one hand, capacitor bracers on both wrists, insulated gloves",
  "p": "a duel ring on a rooftop with a bank of tall capacitors, a coil tower arcing lightning and rubber safety mats"
 },
 "stickywizards": {
  "w": "lanky bareheaded human wizard in a patched laboratory robe, messy brown hair and a beard, a green-and-gold robe, a bandolier of goo jars across the chest, a sling-staff aimed mid-shot and a confident grin; at his feet a small round green frog wearing a floppy oversized pointed wizard hat, looking up proudly",
  "p": "a flooded alchemy lab under a violet moon with tall glowing green goo vats, dripping pipes, a shelf of colorful jars, glowing pink mushrooms, a leaning radio-tower spire, waterfalls and lanterns"
 },
 "sporecoven": {
  "w": "tall sturdy man with red dreadlocks and a beard, a leaf-and-mushroom shawl, a vine-wrapped cane in one hand, a basket of glowing spore jars at the hip and the other hand conjuring pink spore smoke; at his feet a large pet snail with a spiral shell, a tiny white chef hat, a glowing mushroom and a spatula on its shell",
  "p": "a factory floor furred with glowing mushrooms under a violet moon: long tables of growing trays, hanging mushroom-cap bells and a hanging mushroom basket, big pipes dripping green slime, a leaning tower with lit windows, waterfalls and a glowing circle on the floor"
 },
 "scraphexwitches": {
  "w": "woman in a layered shawl and headscarf, a bent antenna wand in one hand and a battered hex radio on a strap, curse tapes tucked in a bandolier",
  "p": "a cluttered radio shack with a wall of dead radios on shelves, a hex-tuned dial board, a table of curse tapes and a window of antennas"
 },
 "thornbloodcoven": {
  "w": "warm man in a long herb-stained coat and a woven sash, a mortar and pestle in one hand and a root-carved cane in the other, a herb satchel at the hip",
  "p": "a root-cellar clinic with hanging herb bundles, a long wooden table of poultices, a boiling kettle and shelves of tonic jars"
 },
 "voidbound": {
  "w": "young man in a jagged mantle and asymmetric armor, a ritual mark glowing on one open palm and a small offering bowl in the other, a thin crown of black spikes",
  "p": "a ritual chamber with a floating black void-portal, an altar of offering bowls, chalk-circle floor and hanging chains"
 },
 "bloodwireapostates": {
  "w": "lean man with glowing circuit tattoos along both arms, a bladed capacitor in each hand mid-slash, thorn plates on the shoulders",
  "p": "a dead power substation with a humming transformer, cable trenches, a generator hall and warning signs"
 },
 "mirroroathbreakers": {
  "w": "slim man in a coat of mirrored glass panels and a reflective half-mask, a mirror-shard dagger in each hand, caught mid-step",
  "p": "a hall of broken mirrors and dead screens, a shattered storefront window, a mirror-lined corridor and glass shards on the floor"
 },
 "chronofractures": {
  "w": "lean young man in a scuffed jacket mid-dodge, a narrow blade drawn, a pocket watch swinging on a chain",
  "p": "a stopped-clock plaza with a giant frozen clock tower, a fountain of suspended droplets and a rain-slick street"
 },
 "mindweavers": {
  "w": "slender man in a plain wrapped robe and a headband, one hand outstretched with a few thought-blades hovering near it, eyes shut",
  "p": "a bare stone dojo with paper screens, a rack of practice weapons, a quiet pond and a single hanging lantern"
 },
 "fluxborn": {
  "w": "wiry person in a short insulated cape, both hands crackling with lightning, a line of scorched sparks trailing behind, no weapons",
  "p": "a thunderstorm rooftop with a lightning-rod forest, scorched concrete, a cracked water tank and arcing cables"
 }
});
