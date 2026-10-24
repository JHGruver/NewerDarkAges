// SUMMONERS / MINIONMANCERS: a new class in every people, each with one character who calls minions to fight for them.
//   Human: Ninja Shoguns (ninjas)        Vampire: Belfry Batcallers (bats)       Were-Creature: Squirrel Commanders (a squirrel-kin who commands squirrels)
//   Ghost: Seance Operators (demons)     Undead: Marrow Puppeteers (reverse necromancy: they steer the skeletons inside living creatures)
//   Forest Spirit: Canopy Beastmasters   Eldritch: Azathoth Pipers (Lovecraft: flute-priests who call Byakhee)   Magic: Necromancers
// Registers the class, CHAR_META and ART_SPEC. The new TYPE ("summoner") lives in data-types.js. All eight are combat.
(function () {
  const classOf = (id, intro) => M("summoners", "Summoners", "summon", "Never fight alone.", intro.summary, intro.lore, []);
  const add = (people, intro, ch) => {
    const g = GROUP_DEFS[people], cls = classOf(people, intro);
    cls.subs.push(L(ch.id, ch.name, ch.icon, "combat", ch.tagline, ch.summary, ch.lore, ch.strengths, ch.weaknesses, ch.abilities, ch.gear, ch.look, ch.pal));
    g.subs.push(cls);
    CHAR_META[ch.id] = { type: "summoner", physique: ch.physique, size: ch.size, move: ch.move, who: ch.who };
    ART_SPEC[ch.id] = { w: ch.w, p: ch.p };
  };

  add("human", { summary: "The shadow-war houses of the Dim. A Shogun never marches alone: they carry a scroll, and the scroll carries a clan.", lore: "Humans have no innate powers, so the cleverest of them learned to hire the dark." },
    { id: "ninjashoguns", name: "Ninja Shoguns", icon: "sword", tagline: "Sign the scroll. Call the clan.",
      summary: "War-lords who command a shadow clan. A Shogun flicks open a scroll and a squad of ninjas leaps out to strike, scout and vanish.",
      lore: "Every Shogun inherits a war fan and a scroll of ninja contracts, signed in ink that never dries. The Senate pretends not to know them. The Senate has never refused a favor from one.",
      strengths: ["Calls a squad of ninjas onto the field", "Wins through numbers, flanking and control"], weaknesses: ["Weak alone", "Summons vanish if the Shogun falls"],
      abilities: ["Clan Scroll: call a squad of ninjas", "War Fan Signal: every ninja strikes the same target", "Smoke Recall: pull the squad back to safety"],
      gear: "War fan, summoning scroll, lacquered armor, three small summoned ninjas",
      look: "Stern armored commander with a huge crested helmet, a war fan in one hand and an open scroll in the other, three small black ninjas leaping out of the scroll.",
      pal: ["#861349", "#1b1f3a", "#ffd23f"], physique: "broad-chested and square, a very wide helmet crest, short strong legs", size: "medium", move: "grounded",
      who: "a stern man in his fifties of Japanese heritage with a thin mustache",
      w: "stern commander in lacquered crimson armor with a huge crested helmet and a dark cape, a large war fan raised in one hand and an open scroll in the other, three small black-clad ninjas leaping out of the scroll",
      p: "a mountain-fort courtyard with lacquered gates, paper lanterns, a rack of ninja weapons, a banner wall and a stone garden" });

  add("vampire", { summary: "Rooftop lords who rule the night with a colony at their back: the bats see, carry and strike for them.", lore: "In the Static Spires, a vampire's most trusted servants have wings." },
    { id: "batcallers", name: "Belfry Batcallers", icon: "bat", tagline: "The belfry answers.",
      summary: "Vampire bat-lords who call swarms from the rooftops. The bats scout, scatter and carry their master's will across the Spires.",
      lore: "Every belfry in the Static Spires belongs to a colony, and every colony has a Batcaller who knows each bat by name. The High Priest sees through their eyes before he sees the ballroom.",
      strengths: ["Calls fast swarms that scout and harass", "Sees through its bats"], weaknesses: ["Swarms scatter from fire and light", "Fragile in melee"],
      abilities: ["Swarm Call: summon a flock of bats", "Echo Sight: see through any bat in play", "Cloak of Wings: the swarm wraps and shields the Batcaller"],
      gear: "Bat-wing cloak, silver bell, belfry rope, a flock of small summoned bats",
      look: "Tall pale vampire with arms flung wide as a swarm of bats peels away from the cloak, a small silver bell in one hand.",
      pal: ["#52358d", "#d9d2f0", "#ff4b6e"], physique: "very tall and thin, a swan neck, a huge bat-wing cloak that doubles the width", size: "medium", move: "flying",
      who: "a gaunt woman in her sixties of Hungarian heritage with a high white widow's peak",
      w: "tall gaunt vampire with a high collar, a long violet bat-wing cloak, a thin black bodice and boots, a small silver bell in one hand, five small bats peeling off the cloak around her",
      p: "a ruined bell-loft with a huge cracked bell, rope pulls, stone gargoyles, hanging bat roosts and a broken stained-glass window" });

  add("were", { summary: "Tiny drill-sergeants who command whole armies of squirrels with a whistle and a stern look.", lore: "The Pack runs on messages, and the quickest messengers have bushy tails." },
    { id: "squirrelcommanders", name: "Squirrel Commanders", icon: "squirrel", tagline: "Fall in. Acorns up.",
      summary: "Squirrel-kin drill-sergeants who command a scurry of squirrels: scouts, couriers and thieves with tiny teeth, all of them very well trained.",
      lore: "The squirrel-kin took to the scrapyard oaks when the old world fell, and made a drill of everything. A Squirrel Commander can have a message across the territory before the treaty ink dries, or a hundred squirrels at your ankles before you finish a sentence.",
      strengths: ["Commands dozens of small fast squirrels", "Scouts and carries items across any ground"], weaknesses: ["Squirrels are fragile", "Tiny and easy to catch on her own"],
      abilities: ["Fall In: summon a scurry of squirrels", "Acorn Volley: the squirrels hurl acorns", "Scamper Relay: carry an ally's item or message to anyone"],
      gear: "Acorn-cap helmet, carved acorn whistle, seed pouch, a scurry of small summoned squirrels",
      look: "Small wiry squirrel-kin commander with a huge arched tail, an acorn whistle at her lips and one paw pointing forward as five squirrels charge around her feet.",
      pal: ["#6f4f2a", "#e8c07a", "#df590c"], physique: "small and wiry, long hind legs, a huge bushy tail that arches higher than her head", size: "small", move: "agile",
      who: "a small, wiry, bossy squirrel-kin commander",
      w: "small wiry squirrel-kin commander with a huge bushy tail arched over her back, an acorn-cap helmet, a brown leather harness with a seed pouch, a carved acorn whistle at her lips, one paw pointing forward, five small squirrels charging around her feet",
      p: "an oak glade at the edge of a scrapyard with acorn caches, rope bridges between branches, a stump parade ground and a pile of hollow logs" });

  add("ghost", { summary: "Dead-line operators who answer calls from places that should be silent, and let what answers climb through.", lore: "The old exchanges never hung up, and neither did what lives in the wire." },
    { id: "seanceoperators", name: "Seance Operators", icon: "ghost", tagline: "Please hold. Something is coming through.",
      summary: "Ghost switchboard operators who dial the dead lines and let demons climb out of the cord: little static fiends born from the Last Broadcast.",
      lore: "The old exchanges never hung up. An Operator plugs a cord into the dark, says a name that is not a name, and the Dial-Tone Demons come up the line grinning.",
      strengths: ["Calls several small, fast demons", "Demons can strike through walls and wires"], weaknesses: ["Demons fade without a live line", "Low health"],
      abilities: ["Dead Line: dial a squad of Dial-Tone Demons", "Wrong Number: swap a demon with an enemy", "Disconnect: banish all demons for a burst of damage"],
      gear: "Switchboard headset, patch-cord, rotary dial, a squad of small summoned demons",
      look: "Slender ghost in a headset holding a patch-cord, three small horned demons climbing out of the cord with static sparking around them.",
      pal: ["#e26132", "#1d1d3a", "#79d1ec"], physique: "slender and bent forward like a hanging coat, an overlong neck, huge hands", size: "medium", move: "phasing",
      who: "a thin ghost woman in her forties of Filipino heritage with a severe bob",
      w: "thin ghost operator with a short black bob and a headset, an orange cardigan-coat over a dark dress, a patch-cord held out in one hand, three small horned orange demons climbing out of the cord",
      p: "a dead telephone exchange with a huge switchboard, hanging cords, a wall of unlit lamps, swivel chairs and a single ringing handset" });

  add("undead", { summary: "Reverse necromancers: they do not raise the dead, they take the strings of the living.", lore: "The Undead keep a few of these near the Block, where the wilds' beasts come to hunt." },
    { id: "marrowpuppeteers", name: "Marrow Puppeteers", icon: "bone", tagline: "Everything alive has a skeleton. Everything with a skeleton can dance.",
      summary: "Reverse necromancers: instead of raising the dead, they take hold of the skeletons inside the living and pull the strings.",
      lore: "A necromancer asks the dead to stand. A Marrow Puppeteer does not ask. The Undead keep them near the Block, where wild things come looking for a meal and leave marching in step.",
      strengths: ["Takes control of living animals and enemies through their bones", "Strong crowd control"], weaknesses: ["Needs line of sight to the strings", "Controlled creatures break free if he is hit"],
      abilities: ["Pull the Strings: steer a living creature by its skeleton", "Marrow March: a controlled creature fights for him", "Snap: cut the strings, hurting every creature on them"],
      gear: "Bone baton, marionette strings, tailcoat, two living animals moved by glowing bone-white strings",
      look: "Gaunt skeletal conductor in a tailcoat with glowing strings from his fingertips to a live crow and a live wolf, their bones glowing through the fur.",
      pal: ["#f547ef", "#e8e1c8", "#1f2a44"], physique: "stretched and doll-jointed, arms too long, a tailcoat that ends in splinters", size: "medium", move: "grounded",
      who: "a long, skeletal man of ancient age in a conductor's tailcoat, once a street performer in Cairo",
      w: "tall skeletal conductor in a magenta tailcoat with bone-white cuffs, a bone baton in one hand, glowing bone-white strings running from his fingers to a crow and a wolf at his feet, their ribs shining through",
      p: "an abandoned puppet theater with a torn velvet curtain, a rigging loft, strings hanging from the ceiling, a stage and a pile of broken marionettes" });

  add("forest", { summary: "Wardens who ask the forest for help and get a whole cast of animals, each with a job.", lore: "The Overgrowth was never empty. It was waiting to be asked." },
    { id: "canopybeastmasters", name: "Canopy Beastmasters", icon: "fox", tagline: "The forest brought friends.",
      summary: "Beastmasters of the Overgrowth who call a rotating cast of forest and jungle animals: fox, owl, panther, monkey and a very serious toucan.",
      lore: "The old forest folk say the woods were never empty, only waiting to be asked. A Beastmaster asks with a horn and a promise, and every creature that answers gets a name.",
      strengths: ["Calls a varied cast with different roles", "Flexible: scout, tank or damage"], weaknesses: ["Each animal is weak alone", "Animals leave if she is harmed"],
      abilities: ["Roll Call: summon a mixed team of forest creatures", "Pack Tactics: summoned animals gain damage next to each other", "Stampede: every animal charges at once"],
      gear: "Carved horn, antler crown, woven leaf cloak, a fox, an owl, a panther cub and a monkey",
      look: "Fierce woman with an antler crown blowing a carved horn, a fox, an owl, a small panther and a monkey gathered around her.",
      pal: ["#6f2a31", "#f2c14e", "#23b04a"], physique: "tall and lean with wide shoulders, long ropy arms, a huge feathered cloak", size: "medium", move: "agile",
      who: "a fierce woman in her late thirties of Brazilian Amazonian heritage with long braided hair",
      w: "tall woman with an antler crown and braided hair in a green leaf-cloak and straps, a carved horn at her lips, a fox, an owl, a small panther and a monkey gathered at her feet and shoulders",
      p: "a rope-bridge canopy village with a giant tree trunk, hanging fruit lamps, vine ladders and a wide leafy clearing" });

  add("eldritch", { summary: "Mythos flute-priests who pipe for the blind idiot god and call star-winged things to answer.", lore: "In the Drowned Undercity, a tune with no melody keeps something from waking." },
    { id: "azathothpipers", name: "Azathoth Pipers", icon: "music", tagline: "Please do not stop playing.",
      summary: "Mythos flute-priests who pipe for the blind idiot god and call Byakhee: star-winged horrors that ride the notes down from the dark.",
      lore: "In the old stories the pipers dance in the court of Azathoth, playing a tune with no melody so the god never wakes. The Drowned Undercity found one such flute in the flood, and a few who dared to play it.",
      strengths: ["Calls strong flying Byakhee", "The music buffs summoned creatures"], weaknesses: ["Must keep playing to keep them", "Madness: each song costs sanity"],
      abilities: ["The Tune: pipe to call a Byakhee", "Mad Chorus: the Byakhee gain speed and damage while the piper plays", "Silence: stop the music and the Byakhee turn on whoever is closest"],
      gear: "Bone flute, tattered yellow robe, star-chart sash, two Byakhee summoned from the dark",
      look: "Thin robed figure with a blank cloth mask playing a bone flute, two bat-winged, many-eyed Byakhee circling above in a spiral.",
      pal: ["#caca72", "#3b1f5e", "#e83d84"], physique: "tall, narrow and swaying, spindly legs, an overlong neck bent toward the flute", size: "medium", move: "grounded",
      who: "a thin, masked figure of unknowable age and gender, a flute-priest of the Drowned Undercity",
      w: "thin masked flute-priest in a tattered yellow hooded robe with a star-chart sash, a long bone flute at the mouth, two small bat-winged many-eyed Byakhee circling overhead",
      p: "a drowned cathedral plaza with a cracked star-chart floor, broken columns, a pool of black water, a ring of unlit candle stands and a distant dark void" });

  add("magic", { summary: "Mystics who raise the old dead from the Black Pyramid's sands and bind them to a word.", lore: "The Mystics do not forbid it. They only watch." },
    { id: "necromancers", name: "Necromancers", icon: "urn", tagline: "Rest is a loan.",
      summary: "Mystics who raise the old dead from the Black Pyramid's sands and bind them to a word: skeleton guards, grave-wire hounds and one very loyal bone-bird.",
      lore: "Thoth-Ra's trials leave a great many bones behind. A Necromancer is a student who learned to ask them politely. The Mystics do not forbid it. They only watch.",
      strengths: ["Raises a durable bone army", "Strong over time as the army grows"], weaknesses: ["Slow to start", "Raised dead crumble when the Necromancer falls"],
      abilities: ["Rise: raise a squad of skeletons", "Bone Ward: spend a minion to shield an ally", "Grave Call: summon a bone-hound and a bone-bird"],
      gear: "Skull-topped staff, hooded cloak, bone prayer beads, a squad of small skeletons",
      look: "Hooded mystic with a skull-topped staff raised, three small skeletons clawing up around her and a bone-bird on her shoulder.",
      pal: ["#134186", "#8ee8c8", "#ffcf4a"], physique: "tall and hollow-cheeked, a hunched staff-leaning stoop, long ink-stained fingers", size: "medium", move: "grounded",
      who: "a hollow-cheeked woman in her sixties of Egyptian heritage, a Mystic who failed the trials and kept the bones",
      w: "tall hooded woman in a long navy robe with teal bone-bead strings, a skull-topped staff raised in one hand, three small skeletons clawing up around her feet, a small bone bird on her shoulder",
      p: "a sand-buried sarcophagus hall with open stone coffins, a hieroglyph wall, hanging oil lamps, bone piles and a cracked obelisk" });
})();
