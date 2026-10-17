// Third-level specializations for the other five peoples (Vampire and Were-kin have their own files).
// attach(groupId, subclassId, [N(...), ...]) nests children under an existing subclass in data.js.
(function () {
  const attach = (gid, sid, kids) => {
    const g = GROUPS.find((x) => x.id === gid);
    const s = g.subs.find((x) => x.id === sid);
    s.subs = kids;
  };
  const G = (gid, levelNames) => (GROUPS.find((x) => x.id === gid).levelNames = levelNames);
  G("human", ["Calling", "Order"]); G("ghost", ["Haunt Type", "Circle"]); G("undead", ["Form", "Guild"]);
  G("forest", ["Folk", "Court"]); G("witch", ["Craft", "Tradition"]);

  /* ---------------- HUMAN ---------------- */
  attach("human", "wardens", [
    N("silverlanterns", "Silver Lanterns", "flashlight", "The old guard. Still carries silver.",
      "Traditional monster-hunters who patrol dark roads with silver-edged tools. Stern, careful, and secretly softies.",
      "The Silver Lanterns trace their order to the first night of the Long Dusk. They respect what they hunt and always return the favors they are owed.",
      ["Bonus vs. supernatural", "Silver weapons", "Trap mastery"], ["Reputation", "Rigid"],
      ["Silver Strike: bonus damage to monsters", "Lantern Ward: protective light", "Hunter's Mark: track a foe"],
      "Silver blade, hooded lantern, salt", "Gold lantern glow, long coats."),
    N("teapamphlet", "Tea & Pamphlet Wardens", "coffee", "Let's talk this out. With biscuits.",
      "The new-wave Wardens: diplomats and mediators who prefer a calm cup of tea and a sternly worded pamphlet to a fight.",
      "Founded after the Great Vampire Tea Treaty, this order believes most monster problems are misunderstandings with snacks.",
      ["Defuse fights", "Faction diplomacy", "Calm auras"], ["Weaker combat", "Mocked by old guard"],
      ["Pamphlet Parry: negotiate an enemy to stand down", "Tea Break: heal and buff", "Stern Look: cow a foe"],
      "Teapot, pamphlet stack, umbrella", "Cozy teahouses, warm light."),
  ]);
  attach("human", "tinkerwrights", [
    N("cogsmiths", "Cogsmiths", "wrench", "A clock has no fear.",
      "Builders of clockwork companions, from tiny beetles to hulking butlers.",
      "Cogsmiths spend decades on a single automaton. Their robots are polite, loyal and a little sad.",
      ["Clockwork allies", "Repair", "Sturdy gadgets"], ["Slow to build", "Gears jam"],
      ["Wind Up: activate a clockwork ally", "Spring Fix: repair gear", "Brass Shield: protective plate"],
      "Gear wrench, clockwork butler", "Brass and copper, ticking."),
    N("skyriggers", "Skyriggers", "balloon", "Look up!",
      "Airship pilots and balloon inventors who live among the clouds.",
      "Skyriggers rig floating cities from patched silk and hope. They are the only people the Gloamwood Ravens trust to fly in their airspace.",
      ["Flight gadgets", "Aerial scouting", "Quick travel"], ["Fear of heights (some)", "Fragile craft"],
      ["Glider Pack: fly short distances", "Grapple Line: swing", "Balloon Bomb: area burst"],
      "Goggles, balloon backpack", "Sunset skies, patched sails."),
  ]);
  attach("human", "hearthkeepers", [
    N("openhearths", "Open Hearth Innkeepers", "bell-ring", "Always a room for one more.",
      "Innkeepers who give shelter to anyone: human, vampire or ghost. They keep the peace in their halls.",
      "Open Hearth Innkeepers hold neutral ground. Fighting in their inn means washing every dish by hand.",
      ["Safe haven", "Buff via meals", "Stop fights"], ["Weak offense", "Tied to inn"],
      ["House Rule: forbid combat in area", "Hearty Stew: party buff", "Last Call: end a fight"],
      "Ladle, apron, keyring", "Warm tavern glow."),
    N("waysidehealers", "Wayside Healers", "bandage", "Hold still, this might tingle.",
      "Traveling healers who tend wounds on the road with herbs and cheerful chatter.",
      "Wayside Healers carry little clinics on their backs and never turn away a patient, even one with fangs.",
      ["Strong healing", "Cure ailments", "Travel light"], ["Fragile", "Low damage"],
      ["Poultice: heal over time", "Bandage Roll: remove a debuff", "Soothing Hum: calm allies"],
      "Medicine satchel, herb bundle", "Soft greens, healing glows."),
  ]);
  attach("human", "silvertongues", [
    N("minstrels", "Minstrels", "guitar", "A song for every occasion.",
      "Traveling bards whose songs lift spirits and bend moods.",
      "Minstrels carry the world's news in verse. Every town has a song about them, and half of them are accurate.",
      ["Morale songs", "Crowd control", "News"], ["Fragile", "Need an instrument"],
      ["Lullaby: put foes to sleep", "Battle Hymn: boost allies", "Ballad of Doom: demoralize"],
      "Lute, feathered hat", "Colorful notes, stage lights."),
    N("marketeers", "Marketeers", "shopping-cart", "Everything has a price.",
      "Merchants and hagglers who barter their way across the continent.",
      "Marketeers' caravans bring goods from every corner. They are the only faction trusted by everyone, because everyone owes them.",
      ["Best prices", "Barter with anyone", "Rare goods"], ["Greedy reputation", "Weak combat"],
      ["Haggle: discount or bribe", "Rare Find: unlock special wares", "Fast Talk: escape trouble"],
      "Pack mule, abacus, scales", "Bustling markets, bright awnings."),
  ]);

  /* ---------------- GHOST ---------------- */
  attach("ghost", "rattlers", [
    N("pantrypoltergeists", "Pantry Poltergeists", "utensils", "Dinner is served. At you.",
      "Kitchen-based ghosts who hurl cutlery and rearrange spice racks.",
      "Pantry Poltergeists gossip with the household cats and take huge pride in a well-timed rolling pin.",
      ["Throw objects", "Great in kitchens", "Disruptive"], ["Weak outdoors", "Messy"],
      ["Spoon Barrage: hurl objects", "Cupboard Slam: block", "Flour Cloud: blind"],
      "Ladle, floating plate", "Flying cutlery, clatter."),
    N("doorslammers", "Door-Slammers' Guild", "door-open", "Knock first. Or we will.",
      "Ghost guild specializing in doors, hinges and dramatic exits.",
      "The Door-Slammers' Guild certifies the best doorway haunts in Murkmoor. Their motto: 'Creak with purpose.'",
      ["Control doors", "Teleport via doorways", "Dramatic entrances"], ["Need doors", "Predictable"],
      ["Slam: stun", "Door Hop: teleport between doors", "Creak: unnerve"],
      "Rusty hinge, keyring", "Dark hallways, flickering lights."),
  ]);
  attach("ghost", "anchored", [
    N("manorhaunts", "Manor Haunts", "castle", "Welcome to my house.",
      "Ghosts tied to grand houses, with creaking staircases and portraits that wink.",
      "Manor Haunts host the best parties in the afterlife: black-tie, floating candelabras, endless waltzes.",
      ["Massive home bonuses", "Customizable haunt", "Party magic"], ["Immobile", "Need upkeep"],
      ["Grand Hall: summon guests", "Portrait Watch: spy", "Chandelier Drop: area hit"],
      "Candelabra, silver key", "Grand halls, moonlit windows."),
    N("lighthousekeepers", "Lighthouse Keepers", "tower-control", "Light the way, always.",
      "Anchored to lighthouses, bridges and crossings. They guide the lost, living and dead.",
      "Lighthouse Keepers keep ships and souls off the rocks. They love storms, and tell wonderful stories to anyone who visits.",
      ["Long-range light", "Guide allies", "Storm resistance"], ["Bound to location", "Lonely"],
      ["Beacon: reveal path", "Fog Horn: scare", "Storm Eye: calm weather"],
      "Lantern, spyglass", "Misty coasts, bright beam."),
  ]);
  attach("ghost", "echoes", [
    N("memorychoir", "Memory Choir", "music", "A song remembered is a song alive.",
      "Echoes who replay songs and moments. Together they harmonize into something powerful.",
      "The Memory Choir performs the last song of every soul as a farewell. It is moving, and a little tuneful.",
      ["Group harmonies", "Replay songs", "Heal"], ["Need others", "Fading memory"],
      ["Echo Chorus: group buff", "Replay Song: repeat effect", "Lullaby: calm"],
      "Music box, sheet music", "Soft sound waves, pastel."),
    N("mimicmirrors", "Mimic Mirrors", "mirror", "Two of me. Or more.",
      "Echoes who dwell in mirrors and copy what they see.",
      "Mimic Mirrors are the cheeriest ghosts, delighted to see you again and again and again.",
      ["Copy abilities", "Reflect attacks", "Decoys"], ["Fragile", "Identity confusion"],
      ["Reflect: bounce spells", "Mirror Image: decoys", "Copycat: mimic ability"],
      "Hand mirror, silver frame", "Reflections, shimmering glass."),
  ]);
  attach("ghost", "wisplights", [
    N("marshlamps", "Marsh Lamps", "wheat", "Follow me, gently.",
      "Wisps of the marshes who lead travelers safely through bogs.",
      "Marsh Lamps have saved countless lost travelers, and lured a few into puddles by mistake.",
      ["Navigation", "Light sources", "Safe paths"], ["Fragile", "Wind"],
      ["Marsh Beacon: lights path", "Bog Hop: cross water", "Calming Glow: heal"],
      "Tiny lantern", "Blue-green glows, fog."),
    N("wishwisps", "Wish Wisps", "sparkles", "Make a wish. Maybe.",
      "Wisps that grant tiny, mostly harmless wishes.",
      "Wish Wisps are cousins to shooting stars. Every wish has a small twist, usually funny.",
      ["Grant small buffs", "Lucky charm", "Support"], ["Unreliable", "Twisted wishes"],
      ["Tiny Wish: random buff", "Sparkle: dazzle", "Twinkle Step: teleport"],
      "Star charm", "Sparkles, night sky."),
  ]);

  /* ---------------- UNDEAD ---------------- */
  attach("undead", "boneguard", [
    N("drumcorps", "Drum Corps", "drum", "March to the beat of nothing.",
      "Musical skeletons who drum, rattle and parade. Their rhythm boosts allies.",
      "The Drum Corps leads every parade, funeral and festival, and has never missed a beat (they lack the organs).",
      ["Ally buffs", "Morale", "Crowd control"], ["Loud", "Fragile"],
      ["War Drum: boost allies", "Rattle: scare", "March: speed up"],
      "Drum, bone sticks", "Bright parade colors."),
    N("sappers", "Skeletal Sappers", "pickaxe", "Dig it.",
      "Skeletal diggers and engineers who carve tunnels and traps.",
      "Sappers dig faster than any living miner, because they never need to breathe.",
      ["Tunnels", "Traps", "Break walls"], ["Slow in fights", "Weak to blunt"],
      ["Dig: tunnel", "Bone Mine: trap", "Bone Wall: barricade"],
      "Shovel, helmet", "Dirt, torchlight."),
  ]);
  attach("undead", "mossrisen", [
    N("mossmonks", "Moss Monks", "person-standing", "Be still. Grow.",
      "Quiet meditators covered in moss. They hold the forest's patience.",
      "Moss Monks sit for decades. Birds nest on them. They don't mind.",
      ["Regeneration", "Calm", "Defense"], ["Slow", "Fire"],
      ["Meditate: heal", "Moss Armor: defense", "Calming Aura: slow foes"],
      "Prayer beads, walking stick", "Green, misty."),
    N("mushroomfarmers", "Mushroom Farmers", "mushroom", "Fresh from the shoulder.",
      "Mossrisen who grow mushrooms for food and potions.",
      "Mushroom Farmers produce fine soups and medicines from their own caps. It's not as gross as it sounds.",
      ["Brew", "Spore buffs", "Healing"], ["Slow", "Fire"],
      ["Spore Burst: heal or slow", "Harvest: gain ingredients", "Toadstool Shield: defend"],
      "Basket, trowel", "Reds and whites."),
  ]);
  attach("undead", "phylacterists", [
    N("ledgerliches", "Ledger Liches", "notebook", "Soul properly filed.",
      "Bureaucratic liches who run the afterlife's paperwork.",
      "Ledger Liches track souls, taxes and appointments. Their desks are enormous.",
      ["Death magic", "Paperwork", "Command clerks"], ["Slow", "Stuck at desks"],
      ["Summon Clerk: skeleton help", "Stamp: bind", "Audit: drain"],
      "Ledger, stamp", "Purple, parchment."),
    N("jarhermits", "Jar Hermits", "jar", "Please don't touch the jar.",
      "Reclusive liches who hide their soul-jars in absurd places.",
      "Jar Hermits are the best at not being found. The jar is in the shed. Or is it?",
      ["Respawn", "Stealth", "Hidden"], ["Fragile", "Antisocial"],
      ["Hide Jar: choose a respawn", "Jar Swap: move jars", "Shadow Slip: vanish"],
      "Jar, hood", "Moody, mysterious."),
  ]);
  attach("undead", "gildedwraps", [
    N("tombdiplomats", "Tomb Diplomats", "scroll-text", "May I present His Eternal Majesty.",
      "Dustmarch courtiers who negotiate across centuries.",
      "Tomb Diplomats make treaties with everyone and forget none. Their gold masks are ceremonial.",
      ["Diplomacy", "Contracts", "Curses"], ["Pride", "Slow"],
      ["Royal Decree: command", "Curse of Dust: damage", "Gilded Mask: reflect"],
      "Gold mask, scroll", "Gold, turquoise."),
    N("riddlewraps", "Riddlewraps", "puzzle", "Answer, or be wrapped.",
      "Tomb guardians who set riddles for intruders.",
      "Riddlewraps adore puzzles and take great joy in a clever answer, and an even greater joy in a wrong one.",
      ["Puzzle traps", "Guard", "Curses"], ["Predictable", "Slow"],
      ["Riddle Gate: block", "Unwrap: escape", "Sand Trap: slow"],
      "Gold staff, bandages", "Desert tombs."),
  ]);

  /* ---------------- FOREST SPIRIT ---------------- */
  attach("forest", "gloamcourt", [
    N("duskcourt", "Dusk Court", "sunset", "Sunset is my birthday.",
      "Faeries of dusk, who weave glamours from fading light.",
      "The Dusk Court throws balls at every sunset, and every guest leaves a little changed.",
      ["Glamours", "Illusions", "Sunset power"], ["Weak at noon", "Bound by deals"],
      ["Sunset Glamour: disguise", "Twilight Veil: hide", "Dusk Bargain: trade effects"],
      "Gossamer cloak, wand", "Orange and violet."),
    N("dawncourt", "Dawn Court", "sunrise", "Fresh starts, daily.",
      "Faeries of dawn who heal and bless.",
      "The Dawn Court wakes the forest each morning and sprinkles new beginnings.",
      ["Healing", "Blessings", "Dawn power"], ["Weak at night", "Naive"],
      ["Morning Blessing: heal", "Dew Shield: protect", "First Light: reveal"],
      "Dew wand, flower crown", "Pink and gold."),
  ]);
  attach("forest", "rootgnomes", [
    N("tollkeepers", "Root Road Tollkeepers", "construction", "Pay up, friend.",
      "Gnomes who run the toll gates of the underground road network.",
      "Tollkeepers are fair but firm. Their ledgers have never been wrong.",
      ["Control paths", "Fair deals", "Fast travel"], ["Grumpy", "Slow"],
      ["Toll Gate: block", "Root Road: teleport", "Ledger: track debt"],
      "Gate key, ledger", "Underground glows."),
    N("deepdelvers", "Mushroom Deepdelvers", "gem", "Dig deep. Dig deeper.",
      "Gnome miners who delve for glowing mushrooms and crystals.",
      "Deepdelvers know the underground like the backs of their hands, which are mostly dirt.",
      ["Mining", "Crystals", "Traps"], ["Claustrophobic above", "Short"],
      ["Burrow: dig", "Crystal Light: illuminate", "Mushroom Mine: explode"],
      "Pickaxe, lantern", "Crystal caves."),
  ]);
  attach("forest", "greenwardens", [
    N("groveguardians", "Grove Guardians", "tree-pine", "Not one step further.",
      "Guardians who defend sacred groves.",
      "Grove Guardians wake only when threatened. Then the whole forest moves with them.",
      ["Defense", "Entangle", "Roots"], ["Fire", "Slow"],
      ["Entangle: root", "Bark Skin: armor", "Wake the Wood: summon trees"],
      "Living staff", "Dark greens."),
    N("bloomweavers", "Bloom Weavers", "flower", "Flowers fix everything.",
      "Healers who weave flowers into potent remedies.",
      "Bloom Weavers fill the forest with color, and cure many a heartbreak.",
      ["Healing", "Buffs", "Cleanse"], ["Fragile", "Seasonal"],
      ["Bloom: heal", "Petal Shield: defend", "Pollen Cloud: confuse"],
      "Flower basket", "Bright petals."),
  ]);
  attach("forest", "mischiefhobs", [
    N("hearthhobs", "Hearth Hobs", "house", "Helpful, until you forget the milk.",
      "Household spirits who tidy homes and bring luck.",
      "Hearth Hobs clean as you sleep. Leave out cookies. Do not offer clothes.",
      ["Home bonuses", "Luck", "Cleaning"], ["Sensitive", "Need thanks"],
      ["Tidy Up: cleanse", "Luck Charm: buff", "Hearth Hop: teleport home"],
      "Broom, thimble", "Cozy kitchens."),
    N("waysideboggles", "Wayside Boggles", "signpost", "Roadside pranks.",
      "Pranksters who haunt crossroads and trip travelers.",
      "Wayside Boggles are tiny and cheerful. Their pranks rarely hurt, but your shoes will be tied together.",
      ["Pranks", "Trip", "Stealth"], ["Fragile", "Annoying"],
      ["Trip Wire: trip", "Mud Splash: blind", "Hide: vanish"],
      "String, pebbles", "Dusty roads."),
  ]);

  /* ---------------- WITCH / WIZARD ---------------- */
  attach("witch", "hedgewitches", [
    N("kitchenwitches", "Kitchen Witches", "cooking-pot", "Every spell is a recipe.",
      "Witches who cook their magic into soups, breads and pies.",
      "Kitchen Witches serve spells with dinner. Mind the seasoning.",
      ["Potions", "Healing", "Buffs"], ["Need ingredients", "Slow"],
      ["Bubbling Brew: heal", "Pie Charm: buff", "Spice Hex: debuff"],
      "Cauldron, spoon", "Warm kitchen."),
    N("catcradle", "Cat-Cradle Witches", "cat", "My cat does the spells.",
      "Witches who work with familiars to channel their magic.",
      "Cat-Cradle Witches share a mind with their familiars. The cat is usually in charge.",
      ["Familiars", "Share senses", "Support"], ["Cat dependent", "Moody"],
      ["Familiar: summon", "Share Senses: scout", "Nine Lives: shield"],
      "Cat basket, broom", "Moonlit rooftops."),
  ]);
  attach("witch", "towerwizards", [
    N("stormscholars", "Storm Scholars", "cloud-lightning", "Weather, but make it academic.",
      "Wizards who study and wield storms.",
      "Storm Scholars live atop the highest towers. They are always wet. They like it.",
      ["Lightning", "Wind", "Area damage"], ["Fragile", "Long cast"],
      ["Lightning Bolt: damage", "Gale: push", "Thunder Clap: stun"],
      "Storm staff, cloak", "Storms, lightning."),
    N("stargazers", "Star Gazers", "telescope", "As above, so below.",
      "Wizards who read the stars and call down starlight.",
      "Star Gazers study the cosmos from observatories, and sometimes wave back.",
      ["Starlight", "Prophecy", "Teleport"], ["Fragile", "Need night"],
      ["Starfall: damage", "Constellation Shield: protect", "Starstep: teleport"],
      "Telescope, star chart", "Night sky."),
  ]);
  attach("witch", "hexwrights", [
    N("threadbinders", "Threadbinders", "yarn", "Everything is connected.",
      "Hexwrights who bind objects, people and fates with thread.",
      "Threadbinders knit their spells. Their scarves are warm and slightly cursed.",
      ["Bindings", "Support", "Long buffs"], ["Slow", "Fragile"],
      ["Bind: root", "Scarf Ward: protect", "Fate Knot: link"],
      "Knitting needles, yarn", "Colorful thread."),
    N("poppetmakers", "Poppet Makers", "baby", "A tiny version of you.",
      "Doll-crafters whose poppets mirror their targets.",
      "Poppet Makers are gentle but terrifying. Every doll is carefully sewn, and each has a tiny face.",
      ["Link effects", "Control", "Debuff"], ["Setup time", "Fragile"],
      ["Poppet Link: share damage", "Pin Prick: stun", "Doll Guard: summon"],
      "Dolls, pins", "Patchwork dolls."),
  ]);
  attach("witch", "conjurers", [
    N("stageillusionists", "Stage Illusionists", "tophat", "Now you see me!",
      "Magicians who dazzle with illusions.",
      "Stage Illusionists wow crowds and foes alike. The best trick is the one you don't see.",
      ["Illusions", "Misdirection", "Crowd control"], ["Rely on show", "Fragile"],
      ["Vanish: hide", "Decoy: swap", "Grand Reveal: stun"],
      "Top hat, wand", "Spotlights."),
    N("menagerie", "Menagerie Masters", "lion", "Roll up, roll up!",
      "Conjurers who summon an entire circus of creatures.",
      "Menagerie Masters keep a traveling menagerie. Some of the animals are real.",
      ["Summons", "Variety", "Crowd control"], ["Summons wild", "Costly"],
      ["Summon Lion: ally", "Elephant Stomp: area", "Ringmaster's Whip: command"],
      "Whip, top hat", "Circus colors."),
  ]);
})();
