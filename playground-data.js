// Playground: one character (Owlwing Watch) compared across a 3x3 matrix.
// Columns = visual STYLE, rows = THEME (tone of the content). Cell id is "s{style}t{theme}".
// Dedicated art for a cell is looked up at:
//   art/playground/moonrunners-s{style}t{theme}-character.png   (transparent PNG, 3:4 portrait)
//   art/playground/moonrunners-s{style}t{theme}-background.jpg  (16:9 landscape, no characters)
// Until a file exists, the cell falls back to the current Moonrunners art with a CSS treatment and shows an "art needed" tag.
window.PG = {
  char: { id: "owlwings", path: ["vampire", "briarwild", "owlwings"], baseArt: "art/vampire-owlwings.png", baseBg: "art/bg/vampire-owlwings.jpg", name: "Owlwing Watcher" },
  styles: {
    1: { name: "Default", note: "The look we have now: gold, glass, painted fantasy." },
    2: { name: "More childish", note: "Bubbly, bright, sticker-style. Big shapes, soft corners." },
    3: { name: "Much more adult", note: "Noir and editorial. Greyscale world, one accent color." },
  },
  themes: {
    1: { name: "Default", note: "Playful. The tone of the current site.", eyebrow: "Character details" },
    2: { name: "Mature but fun", note: "Gothic-punk intrigue, in the spirit of the White Wolf games.", eyebrow: "Dossier" },
    3: { name: "Adult combat", note: "Weapons, tactics, doctrine. No nudity, no gore.", eyebrow: "Combat file" },
  },
  // Theme 2 and 3 copy for Owlwing Watch (theme 1 comes from the real data files).
  copy: {
    2: {
      tagline: "Silent flight, silent judgment. Loud opinions, in private.",
      summary: "Briar Wilds who patrol the night as owls and carry the Long Table's secrets by wing. The Watch sees every rooftop meeting and keeps its mouth shut, which is the only reason anyone lets them live.",
      lore: "Owlwings deliver reports that no ordinary courier could survive carrying. They have read your letters, they remember your visitors, and they are paid in silence. Some say the Watch keeps a second ledger of everything it chose not to report.",
      mask: "The Discreet Observer",
      appetite: "Being the one who knows",
      gifts: ["Sees every meeting held after midnight", "Carries messages that would get a courier killed", "Trusted by factions that trust no one else"],
      burdens: ["Knows too much to be left alone", "Every silence they keep is a debt someone may collect"],
      moves: ["Silent Glide: cross the city unseen and unheard", "Overheard: recall every word spoken in a place you watched", "Quiet Verdict: deliver a sealed judgment to a rival's door"],
      whisper: "One letter you carried tonight was addressed to you. You have not opened it. It is in your handwriting.",
    },
    3: {
      tagline: "Strike from the dark. Gone before the sound.",
      summary: "Night scout and ambusher. Owlwing Watchers excel at reconnaissance, silent engagement and hit-and-fade skirmishing.",
      lore: "Doctrine: observe, mark, strike once, vanish. A Watcher never fights twice from the same perch, and every engagement begins with the target already unaware.",
      strengths: ["Silent flight and night vision", "High burst damage from ambush", "Reveals enemy positions for the team"],
      exposed: ["Fragile when caught in the open", "Struggles in bright light"],
      techniques: ["Talon Dive: swoop from above for heavy damage", "Marked Prey: reveal and tag a target for allies", "Wing Cloak: vanish for one turn after striking"],
      loadout: [["Primary", "Curved talon-blade"], ["Sidearm", "Throwing talons"], ["Armor", "Feathered cloak with bone plating"]],
      stats: { Attack: 4, Guard: 2, Mobility: 5, Control: 3 },
    },
  },
};
