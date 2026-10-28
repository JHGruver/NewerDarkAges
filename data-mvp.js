// THE MVP ROSTER (#/vote/mvp): the characters chosen to launch with. Three per people, eight peoples, 24 slots.
// Chosen by Jacob and Mike after the vote. A slot is either a roster character (id) or a "tbd" slot with candidates.
// Edit here, then the MVP tab and its progress numbers update on their own (art status is read from the live roster).
window.MVP = {
  chosen: "Jacob and Mike",
  picks: {
    human: [
      { id: "fuelpriests" },
      { id: "pinball", note: "Jacob: wants real guns on the art." },
      { id: "pipedpipers", note: "Takes the summoner slot from the Ninja Shoguns. An 80s techno flute, keytar adjacent, summons thieves, fighters and more.", isNew: true },
    ],
    vampire: [
      { id: "gargoyle", note: "Stone by day. At night, anywhere from humanoid to monstrous.", redesign: true },
      { id: "batcallers", note: "The vampire summoner." },
      { tbd: "Third pick to be decided", ask: "Pick one of the vote's top vampires, or invent something new.", candidates: ["owlwings", "strobeblades", "maskedassassins", "thornpoisoners"] },
    ],
    were: [
      { id: "bonecrushers" },
      { id: "flyingsquirrels" },
      { id: "scarabshifters", note: "The new Were summoner. A beetle-kin who morphs into beetle forms himself and pours scarabs from his own armor.", isNew: true },
    ],
    ghost: [
      { id: "rustwraith" },
      { id: "staticwraiths" },
      { id: "seanceoperators", note: "The ghost summoner. Dials the dead lines." },
    ],
    undead: [
      { id: "contractreapers" },
      { id: "embalmeralchemists" },
      { id: "marrowpuppeteers", note: "The undead summoner. Steers the skeletons inside the living." },
    ],
    forest: [
      { id: "canopybeastmasters", note: "The forest summoner." },
      { id: "mossplate" },
      { tbd: "A faerie, to be designed", ask: "No faerie exists in the roster yet. The nearest is Sprinkler Sprites.", candidates: ["sprinklersprites", "hoamediators"], concept: true },
    ],
    eldritch: [
      { id: "nightmareshepherds" },
      { id: "manymaw" },
      { id: "etherwing" },
    ],
    magic: [
      { id: "necromancers", note: "The magic summoner." },
      { id: "stickywizards" },
      { id: "sporecoven" },
    ],
  },
  changes: [
    { t: "Neon Pied Pipers added", d: "A new human summoner for the MVP in place of the Ninja Shoguns. The Shoguns stay in the roster." },
    { t: "Gargoyle Sentries redesigned", d: "Now stone by day and a shifter by night, from humanoid to monstrous. No art exists yet, so the new look is the first look." },
    { t: "Scarab Shifters added", d: "A new Were summoner who morphs into beetle forms. Lore note: Ezekiel already controls scarabs, so the two should be connected." },
    { t: "Azathoth Pipers renamed Azathoth Reed-Priests", d: "So the Eldritch flute-priests are never confused with the human Pied Pipers." },
  ],
  open: [
    "Vampire third pick",
    "Forest faerie concept",
    "Whether the Squirrel Commanders and Ninja Shoguns stay in the full roster or go to a later season",
  ],
};
