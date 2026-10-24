// THE LORE BIBLE (unified). Built from two source documents (data-lore-source.js) and merged with the game's peoples, classes and subclasses.
// Every entry carries a source tag:
//   S = from the World Outline   X = from the Characters sheet   A = added to bridge the sources with the game (needs author approval)
// Edit here; LORE-BIBLE.md is generated from this file (node tools/build-lore-md.mjs).
window.LORE = {
  meta: {
    title: "The Newer Dark Ages: Lore Bible",
    version: "1.0 (draft for approval)",
    tagline: "In 1986 the world found out the monsters were real. The war that followed ended the old world.",
    legend: { S: "From your World Outline", X: "From your Characters sheet", A: "Added to bridge the sources with the game. Needs your approval" },
  },

  // ---------- one-paragraph answer ----------
  logline: "In the Cold War year of 1986, Moscow went on every frequency and announced that vampires exist. The panic became a war that tore down the old world's infrastructure and stunted its technology for decades. Humans, vampires and werewolves now live behind cordons under a fragile treaty enforced by their Mystics, who meet every three months at the Temple of Imhotep. Power is inherited only by those who survive the trials of the Mummy Sorcerer Thoth-Ra in the Black Pyramid; the rest of the Mystics' secrets are sold in blood. Now the Elders of all three tribes are dead, the Chieftains are not who they seem, and a generation of children with powers is about to inherit a world that looks like the Dark Ages lit by neon.",

  pillars: [
    { id: "p1", title: "The Broadcast broke the world", text: "The Last Broadcast is a Cold War event, not a magic one: a government told the truth on every frequency and the world could not live with it. That is why radios, static and signals are sacred and dangerous in the Dim.", src: "S+A" },
    { id: "p2", title: "Three tribes, one treaty", text: "Humans, vampires and werewolves each rule themselves, never cross each other's borders, and answer to the same laws. Peace is the only thing keeping the old war from restarting.", src: "S" },
    { id: "p3", title: "Power has a price and a pyramid", text: "Real power (magic) comes from one place: the trials of Thoth-Ra in the Black Pyramid. Pass and you become a Mystic. Fail and your soul is forfeit.", src: "S" },
    { id: "p4", title: "Justice is a one-way road", text: "Everyone is tried by the same law. The worst are sent to the Block and escorted through the Zombie Territories by Dr. Stein's modified zombies. Nobody comes back.", src: "S" },
    { id: "p5", title: "The old are dying, the young are waking", text: "All nine Elders are dead. The Chieftains hold the chairs. The people who will decide what happens next are between 6 and 28 years old and each carries a power.", src: "X+A" },
  ],

  // ---------- timeline ----------
  timeline: [
    { id: "t0", when: "Before", title: "The Quiet World", text: "Humans, vampires and werewolves already shared the planet, hidden from each other. Older still: Egyptian gods, a Black Pyramid in the south, and a Mummy Sorcerer who was waiting.", src: "S+A" },
    { id: "t1", when: "1986", title: "The Last Broadcast", text: "At the height of the Cold War, Russia announced the existence of vampires on every frequency. Sixty seconds of transmission, then nothing but static. The world could not take it back.", src: "S+A" },
    { id: "t2", when: "1986 to the 1990s", title: "The War to End the Old World", text: "The announcement became a full-fledged war across the world. Infrastructure was torn apart. Technology was stunted for the years that followed.", src: "S" },
    { id: "t3", when: "After the war", title: "The Dim", text: "The lights did not come back. Rain, fog, dead radio towers and a world that reverted to keeps, oaths and torches, with the old world's relics (cassettes, CRT screens, batteries) as treasure.", src: "S+A" },
    { id: "t4", when: "After the war", title: "The Cordon", text: "Humans, vampires and werewolves each cordoned off their own territory and agreed to strict rules of peace so that each tribe could rebuild.", src: "S" },
    { id: "t5", when: "Every 3 months", title: "The Mystic Meetings", text: "The Mystics of each colony travel to the Temple of Imhotep, god of wisdom, medicine and magic, to air grievances and renew the treaty.", src: "S" },
    { id: "t6", when: "Ongoing", title: "The Trials", text: "Each tribe's Senate, Counsel or Pack Leads choose who may rise, but the Mystics pick the one to ascend. The chosen must reach the Black Pyramid to the south and pass the trials of the Mummy Sorcerer Thoth-Ra. Those who fail are sacrificed and their souls are forfeit.", src: "S" },
    { id: "t7", when: "After the cordon", title: "Dr. Stein's Sentries", text: "Human scientist Franklin Stein captured zombies and implanted behavior-modification chips. Zombies do not attack their own, so modified zombies masked the colony's scent and became sentries. The Vampire Lords were impressed. The Werewolf Greys did not like zombies at their borders, but agreed to use them as prisoner escorts.", src: "S" },
    { id: "t8", when: "After the cordon", title: "The Block", text: "A large prison in neutral territory. Prisoners from all three colonies go there and there is no chance of release. Escorts walk them through the Zombie Territories.", src: "S" },
    { id: "t9", when: "Later", title: "The Upgrades", text: "To ferry prisoners, Stein built cybernetic zombies: stronger, armored, able to take basic commands and run contingency plans for escapes. Not mindless any more, but still docile.", src: "S" },
    { id: "t10", when: "Later", title: "The Temple of Ramuset", text: "Just north of the Block, on a small hill, stands a temple to the god Ramuset, left over from the old world.", src: "S" },
    { id: "t11", when: "Recent", title: "The Elders Die", text: "All nine Elders (three per tribe) are dead, including Dante, Magnus, Sullivan, Cessily, Gabriel, Salina, Frederick, Lucas and Miriam. Sullivan shared secrets with Ezekiel before he died. Dr. Stein is dead too.", src: "X" },
    { id: "t12", when: "Now", title: "The Heirs", text: "Chieftain Ezekiel (an agent of the god Ramuset), Demetrius and Erik hold the chairs. Their children and grandchildren, aged 6 to 28, are waking with powers just as the next treaty renewal approaches.", src: "X+A" },
  ],

  // ---------- places ----------
  places: [
    { id: "dim", name: "The Dim (Human Colony)", kind: "territory", people: "human", x: 34, y: 68, text: "The central wasteland where the old highways cross: radio masts, containers and torch-lit gates. The human colony, ruled by a Senate and a Chieftain, advised by Elders.", src: "S+A" },
    { id: "spires", name: "The Static Spires (Vampire Colony)", kind: "territory", people: "vampire", x: 74, y: 30, text: "Skyscraper husks turned into courts. The vampire colony, ruled by a Counsel and a High Priest, advised by Lords.", src: "S+A" },
    { id: "coast", name: "The Pylon Coast and the Scrapwild (Werewolf Colony)", kind: "territory", people: "were", x: 14, y: 44, text: "Dead power lines strung like cathedral rigging, tire-wall war-dens and drowned vaults. The Pack, led by Pack Leaders and an Alpha Wolf, advised by Greys. The other were-kin clans (raccoon, crocodile, capybara and more) shelter under the Pack's banner.", src: "S+A" },
    { id: "wilds", name: "The Zombie Territories", kind: "wilds", people: "undead", x: 34, y: 24, text: "The wild lands between the colonies and the Block, overrun by zombies. Nobody crosses without an escort. Forest spirits call the greener edge of it the Overgrowth.", src: "S+A" },
    { id: "block", name: "The Block", kind: "prison", people: "undead", x: 52, y: 10, text: "A large prison in neutral territory for the prisoners of all three colonies. Guarded by Stein's modified zombies. No release.", src: "S" },
    { id: "ramuset", name: "Temple of Ramuset", kind: "temple", people: "magic", x: 70, y: 10, text: "A temple to the god Ramuset on a small hill just north of the Block. Standing since the old world.", src: "S" },
    { id: "imhotep", name: "Temple of Imhotep", kind: "temple", people: "magic", x: 50, y: 46, text: "Neutral ground where the Mystics of all three tribes meet every three months to renew the treaty.", src: "S+A" },
    { id: "pyramid", name: "The Black Pyramid", kind: "pyramid", people: "undead", x: 50, y: 90, text: "To the south. Home of the Mummy Sorcerer Thoth-Ra and his trials. The only place a Chieftain, High Priest or Alpha can be made. Ashfall Reach is the dust and tombs that surround it.", src: "S+A" },
    { id: "undercity", name: "The Drowned Undercity", kind: "hidden", people: "eldritch", x: 80, y: 58, text: "Under the Static Spires: flooded subways and a drowned cathedral where the war's flood and the Broadcast's echo let the unmoored things come up. Outside the treaty.", src: "A" },
    { id: "deadair", name: "The Dead Air Stations", kind: "scattered", people: "ghost", x: 24, y: 86, text: "Dead broadcast stations and haunted highways, scattered over every territory. The war dead cling to old electronics. Neutral by default.", src: "A" },
  ],

  // ---------- the three tribes ----------
  tribes: [
    { id: "human", name: "Humans", people: "human", territory: "The Dim", head: "Chieftain", council: "Senate", mystics: "Elders", head_name: "Ezekiel", elders: ["Dante", "Magnus", "Sullivan"], senate: ["Monica", "Natasha", "Nathan", "Selma", "Victor", "Wilson"], src: "S+X" },
    { id: "vampire", name: "Vampires", people: "vampire", territory: "The Static Spires", head: "High Priest", council: "Counsel", mystics: "Lords", head_name: "Demetrius", elders: ["Cessily", "Gabriel", "Salina"], senate: ["Anthony", "Lucian", "Malinda", "Piper", "Rose", "William"], src: "S+X" },
    { id: "were", name: "Werewolves", people: "were", territory: "The Pylon Coast and the Scrapwild", head: "Alpha Wolf", council: "Pack Leaders", mystics: "Greys", head_name: "Erik", elders: ["Frederick", "Lucas", "Miriam"], senate: ["Hector", "Jasmine", "Norman", "Shauna", "Vincent", "Wanda"], src: "S+X" },
  ],
  rank_note: "The Characters sheet uses one set of class names for all three tribes (Chieftain, Elder, Senate). The Outline gives each tribe its own words. In this bible: Chieftain = Chieftain / High Priest / Alpha Wolf. Elder = Elder / Lord / Grey (the Mystics). Senate = Senate / Counsel / Pack Leaders.",
  ascension: [
    { step: 1, title: "Voted in", text: "The colony votes members into the Senate, Counsel or Pack Leads. They run the colony and report to the head.", src: "S" },
    { step: 2, title: "Chosen", text: "The Mystics choose one of the council to ascend to Chieftain, High Priest or Alpha Wolf.", src: "S" },
    { step: 3, title: "The Black Pyramid", text: "The chosen travels south to the Black Pyramid and attempts the trials of the Mummy Sorcerer Thoth-Ra.", src: "S" },
    { step: 4, title: "Pass: a limited gift", text: "They receive limited magical abilities, return home and learn the mystic arts from the Elders, Lords or Greys.", src: "S" },
    { step: 5, title: "Fail: forfeit", text: "They are sacrificed to the Mummy and their souls are forfeit.", src: "S" },
  ],

  // ---------- reconciliations ----------
  reconcile: [
    { q: "The Last Broadcast", a: "Becomes the Russian announcement of 1986, sent on every frequency. The sixty seconds of sound that followed is a design addition and is the root of the Second Signal.", src: "S+A" },
    { q: "Thoth-Ra, Imhotep and Ramuset", a: "Three names in the sources. Proposed: Imhotep is the neutral god the Mystics meet under. Ramuset is a darker god who is worshipped north of the Block and whose agent is Ezekiel. Thoth-Ra is Ramuset's sorcerer, the Mummy at the Black Pyramid who runs the trials. This makes every ascended leader a possible agent of Ramuset.", src: "A" },
    { q: "The game's eight peoples", a: "Humans, Vampires and Werewolves are the three tribes. Zombies, Zombie-Hybrids and the Mummy are the Undead. The Ghosts, Forest Spirits and Eldritch are the old world's leftovers and the things the war woke up. Magic is the Mystic tradition made into four classes.", src: "A" },
    { q: "Werewolves versus the Were-Creature people", a: "The Pack (wolf-kin) is the werewolf colony. The other were-kin (raccoon, crocodile, capybara, squirrel, axolotl, raven, owl, cephalopod (octopus, squid, cuttlefish), mantis shrimp, moth, pangolin, spider) are clans that swore to the Pack in the cordon years.", src: "A" },
    { q: "Where magic comes from", a: "From the Black Pyramid. The Wizards study what the trials teach, the Witches grow it, the Warlocks bargain for it (many through failed trials), and the Mages are born carrying it.", src: "A" },
  ],

  // ---------- named cast, mapped onto the game ----------
  cast: [
    { id: "ezekiel", name: "Ezekiel", tribe: "human", rank: "Chieftain", age: "", status: "alive", powers: "Control of scarabs", notes: "Agent of Ramuset. Father of Anna. Shared secrets with Sullivan. Allied with Vincent.", people: "magic", cls: "Warlock", sub: "Voidbound", role: "The man on the human chair who answers to a god.", src: "X+A" },
    { id: "anna", name: "Anna", tribe: "human", rank: "Heir", age: "19", status: "alive", powers: "Empathic premonitions", notes: "Ezekiel's daughter. Dating Josh.", kit: "Staff, smoke pellets and pouch, barbed whip, round shield, chest plate", people: "magic", cls: "Mage", sub: "Chronofractures", role: "Feels what is about to happen to the people around her.", src: "X+A" },
    { id: "josh", name: "Josh", tribe: "human", rank: "Heir", age: "22", status: "alive", powers: "Lightning bursts", notes: "Dating Anna. His father Daniel is a prisoner.", kit: "Armored arm guards, broadsword and sheath, oval shield, chest plate", people: "magic", cls: "Mage", sub: "Fluxborn", role: "Carries the storm. Wants his father out of the Block.", src: "X+A" },
    { id: "tom", name: "Tom", tribe: "human", rank: "Heir", age: "16", status: "alive", powers: "\"Sight\"", notes: "Dante's grandson.", kit: "Diamond shield, chest plate, silver compass, silver telescope, arm-guard crossbow, silver and wood arrows, thigh quivers", people: "magic", cls: "Mage", sub: "Mindweavers", role: "Sees what others hide. The youngest of the three humans.", src: "X+A" },
    { id: "daniel", name: "Daniel", tribe: "human", rank: "Prisoner", age: "", status: "alive", powers: "", notes: "Josh's dad. In the Block.", people: "human", cls: "Human", sub: "Roadwar Convoys", role: "The reason Josh wants the prison opened.", src: "X+A" },
    { id: "stein", name: "Franklin Stein", tribe: "human", rank: "Scientist", age: "", status: "dead", powers: "", notes: "Built the sentry chips and the cyber-zombies.", people: "undead", cls: "Undead", sub: "Dead Zone Legion", role: "Made the Block's guards. Left a son behind.", src: "S+X+A" },
    { id: "kristoff", name: "Kristoff", tribe: "monster", rank: "Monster", age: "N/A", status: "alive", powers: "Invulnerability", notes: "Dr. Stein's son.", people: "undead", cls: "Undead", sub: "Dead Zone Legion", role: "Stein's last project. Nothing hurts him.", src: "X+A" },
    { id: "demetrius", name: "Demetrius", tribe: "vampire", rank: "High Priest", age: "", status: "alive", powers: "", notes: "Head of the Vampire Counsel.", people: "vampire", cls: "Vampire", sub: "Chrome Court", role: "Sits the vampire chair.", src: "X+A" },
    { id: "delilah", name: "Delilah", tribe: "vampire", rank: "Heir", age: "17", status: "alive", powers: "Hypnotic gaze", notes: "", people: "magic", cls: "Mage", sub: "Mindweavers", role: "Talks people into things with a look.", src: "X+A" },
    { id: "emma", name: "Emma", tribe: "vampire", rank: "Heir", age: "6", status: "alive", powers: "Flight", notes: "", people: "magic", cls: "Mage", sub: "Fluxborn", role: "A six-year-old vampire who flies. Nobody expected a child.", src: "X+A" },
    { id: "jacob", name: "Jacob", tribe: "vampire", rank: "Heir", age: "28", status: "alive", powers: "Animal mind control", notes: "", people: "magic", cls: "Mage", sub: "Mindweavers", role: "Hunts with borrowed eyes.", src: "X+A" },
    { id: "erik", name: "Erik", tribe: "were", rank: "Alpha Wolf", age: "", status: "alive", powers: "", notes: "Father of Greta and Nicholias. Shauna was loyal to him.", people: "were", cls: "Were-Creature", sub: "Wolf-kin", role: "Sits the Pack chair.", src: "X+A" },
    { id: "greta", name: "Greta", tribe: "were", rank: "Heir", age: "24", status: "alive", powers: "Shadow walking", notes: "Erik's cub.", people: "magic", cls: "Mage", sub: "Chronofractures", role: "Steps through the dark between one moment and the next.", src: "X+A" },
    { id: "nicholias", name: "Nicholias", tribe: "were", rank: "Heir", age: "24", status: "alive", powers: "Firecasting", notes: "Erik's cub.", people: "magic", cls: "Mage", sub: "Fluxborn", role: "Burns what he cannot bite.", src: "X+A" },
    { id: "vincent", name: "Vincent", tribe: "were", rank: "Pack Leader", age: "", status: "alive", powers: "", notes: "Allied with Ezekiel. Carries a sun amulet.", people: "were", cls: "Were-Creature", sub: "Wolf-kin", role: "A werewolf who has chosen a human ally.", src: "X+A" },
    { id: "morgan", name: "Morgan", tribe: "were", rank: "Mutt", age: "", status: "alive", powers: "Change from wolf to man", notes: "Agent of Vincent.", people: "were", cls: "Were-Creature", sub: "Raccoon-kin", role: "A mutt: neither pack nor outsider. Does Vincent's errands.", src: "X+A" },
    { id: "ramuset", name: "Ramuset", tribe: "mummy", rank: "God", age: "", status: "alive", powers: "Magic", notes: "A Mummy god. Temple north of the Block.", people: "undead", cls: "Undead", sub: "Reach Court", role: "The god behind the Chieftain.", src: "S+X" },
    { id: "thothra", name: "Thoth-Ra", tribe: "mummy", rank: "Mummy Sorcerer", age: "", status: "alive", powers: "Trials of the Black Pyramid", notes: "Judges every chosen one. Takes the souls of those who fail.", people: "undead", cls: "Undead", sub: "Lich Bureaucracy", role: "Runs the trials, keeps the forfeit souls on file.", src: "S+A" },
  ],
  fallen: [
    { name: "Dante", tribe: "human", note: "Elder. Husband of Salina. Grandfather of Tom." },
    { name: "Magnus", tribe: "human", note: "Elder." },
    { name: "Sullivan", tribe: "human", note: "Elder. Shared secrets with Ezekiel." },
    { name: "Cessily", tribe: "vampire", note: "Lord." },
    { name: "Gabriel", tribe: "vampire", note: "Lord." },
    { name: "Salina", tribe: "vampire", note: "Lord. Dante's wife." },
    { name: "Frederick", tribe: "were", note: "Grey." },
    { name: "Lucas", tribe: "were", note: "Grey." },
    { name: "Miriam", tribe: "were", note: "Grey." },
    { name: "Norman", tribe: "were", note: "Pack Leader." },
    { name: "Shauna", tribe: "were", note: "Pack Leader. Loyal to Erik." },
    { name: "Franklin Stein", tribe: "human", note: "Scientist. Creator of the Block's guards." },
  ],
  relations: [
    ["ezekiel", "anna", "father of"], ["anna", "josh", "dating"], ["daniel", "josh", "father of"], ["tom", "dante", "grandson of"],
    ["ezekiel", "vincent", "allied"], ["vincent", "morgan", "commands"], ["erik", "greta", "father of"], ["erik", "nicholias", "father of"],
    ["stein", "kristoff", "father of"], ["ezekiel", "ramuset", "agent of"], ["thothra", "ramuset", "serves (proposed)"], ["ezekiel", "sullivan", "shared secrets"],
  ],

  // ---------- how our peoples fit ----------
  placements: {
    human: { place: "The Dim", text: "The human colony. Chieftain, Senate and Elders. Nothing innate, so they win on nerve, wheels and salvage.", subs: {
      roadwar: "The convoys that connect the colony to the Block, the Temple of Imhotep and the south road. Their drivers escort Mystics.",
      arcade: "The colony's training clans. Competition is how the Senate finds talent.",
      pirateradio: "The colony's voice. They are the only ones who still remember the exact words of the Broadcast.",
      mallguard: "The seat of the Senate and the colony's police and envoys." } },
    vampire: { place: "The Static Spires", text: "The vampire colony. High Priest, Counsel and Lords. Rule by aristocracy and style.", subs: {
      chromecourt: "The Counsel's households and their duelists. The nobility.",
      neonnocturnes: "The night clubs that double as barracks and information markets.",
      nightwatch: "Rooftop guards who patrol the borders and enforce the treaty line.",
      coterie: "The High Priest's spies and quiet knives." } },
    were: { place: "The Pylon Coast and the Scrapwild", text: "The werewolf colony and the clans that swore to the Pack. Alpha Wolf, Pack Leaders and Greys.", subs: {
      wolf: "The Pack itself: Erik's line and the war-bands.",
      raccoon: "Scavengers and fixers who keep the colony's salvage economy alive.",
      crocodile: "River-holders on the coast. Smugglers and matriarchs.",
      capybara: "The calm clans: healers and diplomats who sit at the Mystic meetings.",
      axolotl: "Coastal healers and swamp ambushers.",
      raven: "Oracles and scouts who watch the borders.",
      owl: "Night sentries.",
      cephalopod: "The flooded harbors' three cephalopod trades: cuttlefish spies, squid engineers and octopus scholars.",
      mantisshrimp: "Reef guards and shock troops.",
      moth: "Light-keepers who tend the old signal towers.",
      pangolin: "Wall-builders and miners.",
      spider: "Couriers and weavers who run the Pack's message lines." } },
    ghost: { place: "The Dead Air Stations", text: "The war dead who stayed in the machines. Neutral, and the only ones who remember the last day.", subs: {
      deadair: "Haunters of dead broadcast stations: the Broadcast's own echo.",
      hollowmachines: "Spirits bound into old hardware.",
      lastcall: "Those who died celebrating the end of the world.",
      lingerers: "Bound to the roads and wards where they died." } },
    undead: { place: "The Block, the Zombie Territories and the Black Pyramid", text: "Zombies, Dr. Stein's cybernetic zombie-hybrids, and the Mummy court of Thoth-Ra and Ramuset.", subs: {
      deadzone: "The Block's guards: Dr. Stein's modified, armored zombies. The line never breaks.",
      laborunion: "Unmodified zombies who keep working because nobody told them to stop.",
      notaries: "The Mummy's bureaucracy: the Soul Notaries who file the souls forfeited in the trials.",
      sandkings: "The Mummy court: Thoth-Ra's royal guard and Ramuset's embalmers at the Black Pyramid." } },
    forest: { place: "The Overgrowth", text: "The old folk of the green edge of the Zombie Territories. They kept to themselves when the world burned.", subs: {
      culdesac: "A suburb swallowed by woods, still keeping its rules.",
      rootserver: "Dryads who grew into a dead data center.",
      basementgnomes: "Fortified cellars under the colonies' ruins.",
      hobneighbors: "Small helpers who attach themselves to households and never leave." } },
    eldritch: { place: "The Drowned Undercity", text: "Not from here. The flood and the Broadcast's echo let the unmoored things up under the Static Spires. Outside the treaty.", subs: {
      deepones: "The drowned civilization under the Spires.",
      migo: "The alien technologists who read the Broadcast and keep answering it.",
      shoggoths: "Living flesh that got loose in the flood.",
      elderthings: "The first architects, remembered in the pyramids.",
      nightgaunts: "Hunters in the dark between the colonies.",
      hounds: "Things that come through the sharp angles of time." } },
    magic: { place: "Every colony, and the Black Pyramid", text: "The Mystic tradition. Four ways to hold the power that Thoth-Ra grants and the power some are simply born with.", subs: {
      wizard: "The academic Mystics: Elders and Lords who study what the trials teach.",
      witch: "The naturalist Mystics: Greys and wild practitioners who cultivate it.",
      warlock: "Those who bargained: the failed, the bound and the oathbreakers.",
      mage: "The born conduits: the generation now waking with powers." } },
  },

  // ---------- open threads ----------
  threads: [
    { id: "who", q: "Who killed the nine Elders?", text: "All nine Mystic Elders of all three tribes are dead, and Sullivan shared secrets with Ezekiel first. The chairs they left are held by Chieftains who benefit.", src: "X+A" },
    { id: "god", q: "What does Ramuset want?", text: "Ezekiel is his agent and controls scarabs. If every ascended leader passed Thoth-Ra's trial, how many are his?", src: "X+A" },
    { id: "daniel", q: "Why is Daniel in the Block?", text: "No one is released from the Block, and Josh knows it. What did his father do?", src: "X+A" },
    { id: "salina", q: "Dante and Salina", text: "A human Elder married a vampire Lord, in a world where nobody crosses borders. What happened to their family, and is Tom connected to both?", src: "X+A" },
    { id: "kristoff", q: "What is Kristoff for?", text: "Dr. Stein's son is invulnerable. Was he built to protect a secret, or to carry one?", src: "X+A" },
    { id: "vincent", q: "Why is a werewolf allied with a human Chieftain?", text: "Vincent wears a sun amulet and sends Morgan to run his errands. Who benefits from this alliance?", src: "X+A" },
    { id: "emma", q: "A six-year-old vampire who flies", text: "Emma is younger than the Cordon years suggest she should be. Are vampires being born again?", src: "X+A" },
    { id: "signal", q: "The Second Signal", text: "Something is still transmitting. The Mi-Go and the Dead Air stations both hear it.", src: "A" },
    { id: "next", q: "The next treaty meeting", text: "In under three months the Mystics gather at the Temple of Imhotep, and there are almost no Mystics left to attend.", src: "A" },
  ],

  glossary: [
    ["The Last Broadcast", "Russia's 1986 announcement of the existence of vampires, sent on every frequency."],
    ["The Dim", "The long half-dark after the war: ruined grids, stunted technology, torches and neon."],
    ["The Cordon", "The three tribes' self-contained territories."],
    ["Mystic", "An Elder, Lord or Grey who passed the trials of Thoth-Ra."],
    ["The Trials", "The test at the Black Pyramid. Pass for limited magic, fail and your soul is forfeit."],
    ["The Block", "The neutral-territory prison for all three tribes. No release."],
    ["Zombie Territories", "The wilds between the colonies and the Block."],
    ["Modified zombie", "A zombie with Dr. Stein's behavior chip."],
    ["Zombie-hybrid", "A modified zombie with cybernetic upgrades and body armor."],
    ["Mutt", "A werewolf outside the Pack: neither pack nor stranger."],
  ],
};

// ---------- the story, told as a sequence of broadcasts (drives the scrolling home page) ----------
LORE.story = [
  { id: "signal", kicker: "Signal lost", title: "Sixty seconds. Every frequency.", text: "", lines: ["1986.", "Every radio. Every television.", "One announcement."] },
  { id: "announcement", kicker: "The Last Broadcast", title: "They are real.", text: "At the height of the Cold War, Moscow cut into every radio and television on Earth with one sentence: vampires exist. The world had sixty seconds to believe it." },
  { id: "war", kicker: "The war to end the old world", title: "Panic became war.", text: "The war took the bridges, the grid and the satellites. When it ended, nobody had the tools to build them back. Technology stalled for decades." },
  { id: "dim", kicker: "The Dim", title: "The lights stayed off.", text: "Keeps, torches and oaths came back. A battery became treasure, a cassette became scripture, and the rain never quite stopped." },
  { id: "cordon", kicker: "Three tribes, one treaty", title: "Nobody crosses a border.", text: "Humans, vampires and werewolves took their own territories and swore to a strict peace. Only a Mystic may cross, and every three months the Mystics meet at the Temple of Imhotep to renew it." },
  { id: "chairs", kicker: "The three chairs", title: "Chieftain. High Priest. Alpha.", text: "Each tribe is run by a council, and led by one chosen by the Mystics. They only rise if they survive what waits in the south." },
  { id: "pyramid", kicker: "The Black Pyramid", title: "Pass, and you are given magic.", text: "The trials of the Mummy Sorcerer Thoth-Ra decide who may lead. Pass and you receive a gift. Fail and your soul is forfeit." },
  { id: "block", kicker: "The Block", title: "No one walks back.", text: "The worst of every tribe go to one prison. The road runs through the Zombie Territories, and the escorts are Dr. Stein's zombies: armored, chipped and obedient." },
  { id: "chairs-empty", kicker: "Nine empty chairs", title: "The Elders are dead.", text: "All nine. One of them shared his secrets with a Chieftain who answers to a god. Then there was nobody left to ask." },
  { id: "others", kicker: "Everything else woke up", title: "The old things are listening.", text: "Ghosts in the dead stations. Spirits in the Overgrowth. Things from under the flooded Spires. They answer a signal the tribes pretend not to hear." },
  { id: "heirs", kicker: "The heirs", title: "The world is theirs to inherit or burn.", text: "Anna feels what is about to happen. Josh carries the lightning. Tom sees through walls. Emma is six and she flies. They are 6 to 28 years old." },
  { id: "choose", kicker: "Your frequency", title: "Which signal do you answer?", text: "Pick a people. Pick a class. Pick a character. The dial is yours." },
];

// the new Summoners class in every people
Object.entries({
  human: "The Shogun houses: hereditary war-lords who keep a ninja clan on call. The Senate pretends not to know them and borrows them often.",
  vampire: "Belfry colonies tended by Batcallers. The bats are the High Priest's eyes across the Spires, and the first to know when a treaty line is crossed.",
  were: "The Pack's tail-twitching couriers and drill-sergeants: Squirrel Commanders run the acorn network that carries news and orders across the territory faster than any rider.",
  ghost: "Operators of the dead exchanges. They dial a line that should be silent and let the Dial-Tone Demons up: fragments of the Broadcast's static that learned to grin.",
  undead: "Reverse necromancers kept near the Block. They steer the skeletons inside the living, which is how the wilds' beasts leave marching in step.",
  forest: "The Overgrowth's Beastmasters: wardens who ask the forest for help with a horn and a promise, and get a whole cast of creatures.",
  eldritch: "Flute-priests of the Drowned Undercity who pipe for the blind idiot god Azathoth and call Byakhee: Mythos star-steeds that ride the notes. Outside the treaty.",
  magic: "The Mystic tradition's quiet fifth path: students of the Black Pyramid's sands who raise the old dead. The Mystics do not forbid it. They watch. (Proposed, tagged A.)",
}).forEach(([k, v]) => { LORE.placements[k].subs.summoners = v; });
