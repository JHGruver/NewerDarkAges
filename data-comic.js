// THE PREQUEL COMIC (#/comic): seed content. Edits made on the page live in each browser (localStorage) and are shared by Export / Import.
// New ids added here show up for everyone automatically; to bring edits back into this file, send the exported JSON and it gets merged in.
// Source tags match the lore bible: S = World Outline, X = Characters sheet, A = added to bridge things (needs approval), M = Mike's pitch.
window.COMIC = {
  rev: 1,
  title: "The Last Broadcast",
  workingTitle: "Working title. The lore bible already calls the 1986 event the Last Broadcast.",
  pitch: "1986 the US embassy and russia its frantic they are away =its about to be a pres release they are ready to ship out. TV broadcast its announced that through the world tensions its now good for the people to know that fanstasy creatures are real. Then a new ages enters as people go into survival mode nukes and what not. Its an end to civilization. From the ashes the strongest humans and the peoples in our roster is a civil war for decades. After this the elders are killed. Then the timeline for the players is NOW.",
  pitchBy: "Mike",
  // the pitch as one clean line per beat, so each can be checked against the lore bible
  pitchBeats: [
    { m: "1986. The US embassy and Russia are frantic. They are about to release a press statement and are ready to ship it out.", lore: "t1", fit: "adjust", note: "The lore bible has Moscow making the announcement. Keep that as what the world sees, and add the US embassy in the room the night before. The press release is the thing that goes out." },
    { m: "A TV broadcast announces that, with world tensions what they are, it is good for people to know that fantasy creatures are real.", lore: "t1", fit: "adjust", note: "The site opens with 'Moscow cut into every radio and television with one sentence: vampires exist' and sixty seconds of signal. Prequel keeps that line and sixty seconds. 'Fantasy creatures' becomes the wider list that follows the vampire line. See decision D2." },
    { m: "A new age begins. People go into survival mode. Nukes and what not. The end of civilization.", lore: "t2", fit: "adjust", note: "Lore: the war took the bridges, the grid and the satellites and stunted technology for decades. Nukes are new. See decision D3 for how many." },
    { m: "From the ashes the strongest humans and the peoples in our roster fight a civil war for decades.", lore: "t2", fit: "fits", note: "This is the war years. The lore bible ends them with the Cordon and the treaty at the Temple of Imhotep, so the war has a clear last chapter." },
    { m: "After this the elders are killed.", lore: "t11", fit: "adjust", note: "Lore has a long peace under the treaty and the Elders dying 'recently'. The prequel jumps years between the treaty and the Elders' deaths so the final issue hands straight to NOW." },
    { m: "Then the timeline for the players is NOW.", lore: "t12", fit: "fits", note: "The heirs (age 6 to 28) wake with powers as the next treaty renewal approaches. The last page of the prequel is the first page of the game." },
  ],
  // decisions that change the story. rec = Claude's recommendation. answer is filled in on the page.
  decisions: [
    { id: "d1", q: "Who actually makes the broadcast?", opts: ["Moscow alone, as the lore bible says", "A joint US and Soviet release that Moscow's transmitter sends first", "A rogue operator hijacks the release"], rec: 1, why: "It honors Mike's pitch (both embassies, a shared press release) and the site's line that Moscow went on every frequency. It also lets the sixty-second cutoff be a mystery nobody in the room caused.", src: "M+A" },
    { id: "d2", q: "What exactly does the broadcast say?", opts: ["Only 'vampires exist'", "Vampires first, then a longer list of creatures", "A blanket statement that fantasy creatures are real"], rec: 1, why: "Keeps the page intro's single sentence as the hook, then widens to Mike's 'fantasy creatures' in the same minute. Ghosts, spirits and the Eldritch can still be discovered later in the war.", src: "M+A" },
    { id: "d3", q: "How big is the nuclear exchange?", opts: ["A handful of strikes on grids and bases, mostly off-screen", "Every capital falls", "No nukes. Conventional war only."], rec: 0, why: "'The end of civilization' without every city gone. A few strikes explain the dead grid and satellites in the lore bible and leave ruins to live in. It is also easier to draw.", src: "M+A" },
    { id: "d4", q: "What year is NOW?", opts: ["About 40 years on (c. 2026)", "About 30 years on", "Never say a year"], rec: 0, why: "The heirs are 6 to 28 and none were alive for the war. Forty years fits decades of war, then a long treaty, then the Elders dying of old age and murder.", src: "A" },
    { id: "d5", q: "Who fights the civil war?", opts: ["Three-way: human warbands, vampire courts, werewolf packs, with shifting alliances", "Humans against everyone", "Vampires against everyone"], rec: 0, why: "Matches the three tribes in the lore bible, and the Dante and Salina marriage (a human Elder wed to a vampire Lord) becomes a war story.", src: "M+A" },
    { id: "d6", q: "Whose eyes do we see it through?", opts: ["The nine future Elders, young", "One new viewpoint character who is not in the game", "An ensemble of embassy staff only"], rec: 0, why: "Every Elder is already named in the lore bible. Readers meet them alive, then see the nine empty chairs on the story page land harder.", src: "A" },
    { id: "d7", q: "Do we show who killed the Elders?", opts: ["No. Show the night, not the killer", "Show the killer", "Show only that Sullivan talked to Ezekiel first"], rec: 0, why: "The lore bible lists 'Who killed the nine Elders?' as the first open thread. The prequel should feed that thread, not close it.", src: "A" },
    { id: "d8", q: "How long is the prequel?", opts: ["5 issues of 22 pages", "One 100 page graphic novel", "A 3 issue short run"], rec: 0, why: "Five issues map one to one to the five movements of the pitch and let each issue end on a hook. 22 pages is the usual monthly length and keeps art work per issue sane.", src: "A" },
    { id: "d9", q: "Who draws the 1986 cast?", opts: ["Jacob makes character sheets in ChatGPT as with the roster, then pages are composed from them", "A hired comic artist", "Wait until the game art is done"], rec: 0, why: "Same pipeline that is already working. The 1986 cast needs about a dozen new character sheets before pages can be drawn.", src: "A" },
  ],
  // what the prequel must plant for NOW (from the lore bible's open threads and the story page)
  plants: [
    { t: "The sixty seconds of static", why: "Root of the Second Signal that the Mi-Go and the Dead Air stations still hear.", lore: "signal" },
    { t: "Dante and Salina", why: "A human Elder wed to a vampire Lord. Tom is Dante's grandson.", lore: "salina" },
    { t: "Sullivan and Ezekiel", why: "Sullivan shared secrets with Ezekiel before he died.", lore: "who" },
    { t: "Ramuset and Thoth-Ra", why: "Who gets the first magic and what they paid for it.", lore: "god" },
    { t: "Dr. Stein's chips", why: "Stein captured zombies during the war. His son Kristoff is the last project.", lore: "kristoff" },
    { t: "The nine chairs", why: "End on the Elders' last night so the story page's candles mean something.", lore: "who" },
  ],
  beats: [
    { id: "i1", n: "Issue 1", title: "Ready to Ship", when: "1986", pages: 22, hook: "The broadcast goes out. Sixty seconds later it stops, and nobody in the room did it.",
      items: [
        { id: "i1b1", t: "Two buildings awake", text: "Moscow, 3 a.m. The US embassy and the Soviet ministry are both lit. Both staffs have just learned the same impossible thing.", lore: "t1", src: "M+A" },
        { id: "i1b2", t: "The proof", text: "What they are holding: reports, a photograph with no reflection, a body that was not a man. Nobody wants to be the one who says it out loud.", lore: "t1", src: "M+A" },
        { id: "i1b3", t: "The back channel", text: "Sullivan (embassy aide) and a Soviet counterpart agree in a kitchen of a hotel that telling the world together is safer than someone else doing it first. The argument: with tensions this high, the truth lowers the temperature.", lore: "t1", src: "M+A" },
        { id: "i1b4", t: "Ready to ship out", text: "The press release is drafted, translated and sealed. Couriers are staged. Both governments have a hand on it and neither fully trusts the other.", lore: "t1", src: "M" },
        { id: "i1b5", t: "On air", text: "A studio, a red light, the sentence from the story page: they are real. Vampires first, then the longer list.", lore: "t1", src: "S+M" },
        { id: "i1b6", t: "Sixty seconds", text: "The signal cuts to static at the sixty-second mark. The engineers swear nobody touched anything. Last panel: the static is not quite silent.", lore: "signal", src: "A" },
      ] },
    { id: "i2", n: "Issue 2", title: "Static", when: "1986, the first weeks", pages: 22, hook: "The first missile launches. The world has run out of ways to say no.",
      items: [
        { id: "i2b1", t: "The first night", text: "Cities that believe and cities that do not. Hospitals, churches, shops. Somewhere, something steps out of the dark in public for the first time.", lore: "t2", src: "A" },
        { id: "i2b2", t: "Both sides turn", text: "The two embassies that wrote the release now blame each other for what it caused.", lore: "t2", src: "M+A" },
        { id: "i2b3", t: "Survival mode", text: "Hoarding, curfews, blackouts, borders slamming shut. The new age begins in small panic.", lore: "t2", src: "M" },
        { id: "i2b4", t: "The exchange", text: "Nukes and what not. A handful of strikes on grids, bases and satellites. Shown from a distance, from the ground, never as a map.", lore: "t2", src: "M+A" },
        { id: "i2b5", t: "The grid goes out", text: "End of civilization as a night with the lights off. Final panel: the first torch, the first radio that will never carry a voice again.", lore: "t3", src: "S+M" },
      ] },
    { id: "i3", n: "Issue 3", title: "Ashes", when: "1987 to 1989", pages: 22, hook: "From the ashes, three peoples stop hiding and begin counting each other's dead.",
      items: [
        { id: "i3b1", t: "Who is left", text: "The strongest, the luckiest and the most ruthless. Humans form warbands. Vampires step out of their hidden courts. Werewolves leave the margins.", lore: "t2", src: "M+A" },
        { id: "i3b2", t: "The relics", text: "A battery becomes treasure, a cassette becomes scripture. The look of the Dim is born here.", lore: "t3", src: "S+A" },
        { id: "i3b3", t: "Dante and Salina", text: "A human leader and a vampire lord meet across a ruin and do something no one on either side forgives.", lore: "salina", src: "X+A" },
        { id: "i3b4", t: "Dr. Stein's first zombie", text: "Franklin Stein, a human scientist, captures a dead man who walks. The beginning of the chips.", lore: "t7", src: "S+A" },
        { id: "i3b5", t: "Lines drawn", text: "No one calls it a war yet. Last page: three flags go up over three ruins.", lore: "t2", src: "A" },
      ] },
    { id: "i4", n: "Issue 4", title: "The Long War", when: "1990s to the treaty", pages: 22, hook: "To end the war, someone has to go south and pay the price.",
      items: [
        { id: "i4b1", t: "A civil war for decades", text: "Human warbands, vampire courts and werewolf packs in shifting alliances. Montage across years, drawn as a single scrolling battlefield.", lore: "t2", src: "M+A" },
        { id: "i4b2", t: "Ramuset's offer", text: "Somewhere south, a Mummy Sorcerer offers power to those who survive his trials. Ramuset's temple rises north of what will become the Block.", lore: "god", src: "S+A" },
        { id: "i4b3", t: "The first trials", text: "The first to climb the Black Pyramid: some return with magic, some are forfeit. Ezekiel is in the crowd, young.", lore: "t6", src: "S+A" },
        { id: "i4b4", t: "Stein's sentries", text: "Zombies with chips guard the roads between the camps. The Block is built for the worst of all three tribes.", lore: "t7", src: "S" },
        { id: "i4b5", t: "Everyone is tired", text: "The war ends because there is no one left who remembers why it began.", lore: "t4", src: "A" },
      ] },
    { id: "i5", n: "Issue 5", title: "Nine Chairs", when: "The treaty, then years later", pages: 22, hook: "The last page of the prequel is the first page of the game.",
      items: [
        { id: "i5b1", t: "The Temple of Imhotep", text: "The first treaty meeting. The nine who will become the Elders sit down in one room. Salina and Dante are the only two who look at each other.", lore: "t5", src: "S+A" },
        { id: "i5b2", t: "The Cordon", text: "Three territories, a strict peace, and a promise that only Mystics may cross a border.", lore: "t4", src: "S" },
        { id: "i5b3", t: "Years pass", text: "A spread of decades in six panels: children born in the Dim, treaties renewed, a cassette played at a wedding.", lore: "t3", src: "A" },
        { id: "i5b4", t: "The last night", text: "Sullivan talks to Ezekiel. Then, one by one, the Elders die. We see the night, not the killer.", lore: "who", src: "X+A" },
        { id: "i5b5", t: "Nine empty chairs", text: "The candles from the story page, drawn as a final spread. A six-year-old flies over the Spires.", lore: "t11", src: "X+A" },
        { id: "i5b6", t: "NOW", text: "Cut to Anna, Josh, Tom and Emma. The next treaty meeting is under three months away.", lore: "t12", src: "X+A" },
      ] },
  ],
  // the prequel cast. 'becomes' says who they are in the game's NOW.
  cast: [
    { id: "c-sullivan", n: "Sullivan", k: "human", role: "US embassy aide, the one who says the sentence out loud", becomes: "A human Elder. Shared secrets with Ezekiel before he died.", src: "X+A", fixed: true },
    { id: "c-dante", n: "Dante", k: "human", role: "A warband leader who rises from the ashes", becomes: "A human Elder. Husband of Salina, grandfather of Tom.", src: "X+A", fixed: true },
    { id: "c-magnus", n: "Magnus", k: "human", role: "The engineer who keeps the lights on in one town", becomes: "A human Elder.", src: "X+A", fixed: true },
    { id: "c-salina", n: "Salina", k: "vampire", role: "A court lord who steps out of hiding when the broadcast goes out", becomes: "A vampire Lord. Wife of Dante.", src: "X+A", fixed: true },
    { id: "c-cessily", n: "Cessily", k: "vampire", role: "Her rival at court who wants the old secrecy back", becomes: "A vampire Lord.", src: "X+A", fixed: true },
    { id: "c-gabriel", n: "Gabriel", k: "vampire", role: "The diplomat of the courts", becomes: "A vampire Lord.", src: "X+A", fixed: true },
    { id: "c-frederick", n: "Frederick", k: "were", role: "A pack leader who lost his territory in the first month", becomes: "A werewolf Grey.", src: "X+A", fixed: true },
    { id: "c-lucas", n: "Lucas", k: "were", role: "A scout who finds the Black Pyramid first", becomes: "A werewolf Grey.", src: "X+A", fixed: true },
    { id: "c-miriam", n: "Miriam", k: "were", role: "A healer between the packs", becomes: "A werewolf Grey.", src: "X+A", fixed: true },
    { id: "c-stein", n: "Franklin Stein", k: "human", role: "A scientist who sees what a dead man can be made to do", becomes: "Dead. Built the Block's guards. Father of Kristoff.", src: "S+X+A", fixed: true },
    { id: "c-ezekiel", n: "Ezekiel", k: "human", role: "A young man in the crowd at the pyramid", becomes: "Chieftain of the humans, agent of Ramuset.", src: "X+A", fixed: true },
    { id: "c-orlova", n: "Colonel Orlova", k: "human", role: "Soviet counterpart in the back channel (invented for the prequel)", becomes: "Not in the game. Fate open.", src: "A", fixed: false },
    { id: "c-engineer", n: "The transmitter engineer", k: "human", role: "The one who swears he did not cut the signal (invented)", becomes: "Not in the game. Hears the static for the rest of his life.", src: "A", fixed: false },
    { id: "c-thothra", n: "Thoth-Ra", k: "undead", role: "The Mummy Sorcerer, first seen at the pyramid in Issue 4", becomes: "Runs the trials. Serves Ramuset (proposed).", src: "S+X+A", fixed: true },
  ],
  // how a panel looks: shot types, backgrounds, moods, page layouts
  shots: [
    ["est", "Establishing", 0.3], ["wide", "Wide", 0.5], ["med", "Medium", 0.8], ["close", "Close-up", 1.5], ["insert", "Insert (object)", 0], ["ots", "Over the shoulder", 1], ["aerial", "Aerial", 0.22],
  ],
  bgs: [
    ["", "Plain"], ["art/site/story-broadcast.jpg", "Broadcast"], ["art/site/story-war.jpg", "War"], ["art/site/story-dim.jpg", "The Dim"], ["art/site/story-chairs.jpg", "Empty chairs"],
    ["art/site/story-block.jpg", "The Block"], ["art/site/story-pyramid.jpg", "Black Pyramid"], ["art/site/story-heirs.jpg", "The heirs"], ["art/site/hero-key-art.jpg", "Key art"],
  ],
  moods: [["", "Neutral", ""], ["cold", "Cold embassy blue", "#2d6fa8"], ["static", "Static grey", "#8a8a99"], ["ember", "War ember", "#c4561f"], ["dim", "The Dim gold", "#d9a521"], ["night", "Night violet", "#4b2a8a"], ["blood", "Blood red", "#9b1c2c"]],
  layouts: [
    ["splash", "Splash", ["a"], '"a"'], ["two", "Two stacked", ["a", "b"], '"a" "b"'], ["three", "Three rows", ["a", "b", "c"], '"a" "b" "c"'],
    ["top2", "Wide + two", ["a", "b", "c"], '"a a" "b c"'], ["bot2", "Two + wide", ["a", "b", "c"], '"a b" "c c"'], ["tall", "Tall + two", ["a", "b", "c"], '"a b" "a c"'],
    ["grid4", "Four grid", ["a", "b", "c", "d"], '"a b" "c d"'], ["cinema", "Cinema", ["a", "b", "c", "d"], '"a a" "b c" "d d"'], ["grid6", "Six grid", ["a", "b", "c", "d", "e", "f"], '"a b" "c d" "e f"'],
  ],
  // the storyboard. Issue 1 is planned in detail. Others have page beats to fill in.
  issues: [
    { id: "i1", pages: [
      { id: "i1p1", layout: "splash", beat: "Establishing: the night the world changes.", panels: [
        { id: "i1p1a", shot: "est", bg: "art/site/story-broadcast.jpg", mood: "cold", chars: [], action: "Snow on Moscow at night. The US embassy lit on one side of the frame, a Soviet ministry lit on the other, the river between them black. Every window awake.", caption: "MOSCOW. 1986. 3:12 A.M.\nTwo buildings that agree on nothing are awake for the same reason.", dialogue: "", sfx: "", notes: "Echo the site's opening lines: 1986. Every radio. Every television. One announcement. Wide splash, lots of negative sky for the title.", status: "draft" },
      ] },
      { id: "i1p2", layout: "top2", beat: "The proof reaches the embassy.", panels: [
        { id: "i1p2a", shot: "wide", bg: "", mood: "cold", chars: [{ n: "Sullivan", x: 30, k: "human" }, { n: "Staff", x: 70, k: "human" }], action: "Embassy communications room. Staff move fast with folders stamped EYES ONLY. A telex machine prints without stopping.", caption: "", dialogue: "STAFF: Third cable in an hour.\nSULLIVAN: Same answer?", sfx: "CLACK CLACK CLACK", notes: "", status: "draft" },
        { id: "i1p2b", shot: "insert", bg: "", mood: "cold", chars: [], action: "The telex paper. One line is circled: CONFIRMED. SEVENTEEN SITES. SAME DESCRIPTION.", caption: "", dialogue: "", sfx: "", notes: "Hand-lettered type on paper.", status: "idea" },
        { id: "i1p2c", shot: "close", bg: "", mood: "cold", chars: [{ n: "Sullivan", x: 50, k: "human" }], action: "Sullivan holds a photograph up to the light. The man in it has no reflection in the mirror behind him.", caption: "", dialogue: "SULLIVAN: Somebody tell me this is a trick of the film.", sfx: "", notes: "This is the line that makes it real.", status: "draft" },
      ] },
      { id: "i1p3", layout: "grid4", beat: "The back channel: two sides decide to tell everyone together.", panels: [
        { id: "i1p3a", shot: "wide", bg: "", mood: "dim", chars: [{ n: "Sullivan", x: 25, k: "human" }, { n: "Col. Orlova", x: 75, k: "human" }], action: "A hotel kitchen at night. Steel tables, a single hanging bulb. Two people who are not supposed to meet.", caption: "", dialogue: "", sfx: "", notes: "", status: "idea" },
        { id: "i1p3b", shot: "med", bg: "", mood: "dim", chars: [{ n: "Col. Orlova", x: 50, k: "human" }], action: "Orlova slides a folder across the steel. Her hand stays on it a moment too long.", caption: "", dialogue: "ORLOVA: My side says we wait. My side has not seen the photographs.", sfx: "", notes: "", status: "idea" },
        { id: "i1p3c", shot: "close", bg: "", mood: "dim", chars: [{ n: "Sullivan", x: 50, k: "human" }], action: "Sullivan, tired, reasonable, frightened.", caption: "", dialogue: "SULLIVAN: If we say it first, together, it is news. If someone else says it, it is a weapon.", sfx: "", notes: "This is Mike's logic: tensions are high, so truth lowers the temperature.", status: "draft" },
        { id: "i1p3d", shot: "insert", bg: "", mood: "dim", chars: [], action: "Two hands over one document. The signatures are still wet.", caption: "", dialogue: "", sfx: "", notes: "", status: "idea" },
      ] },
      { id: "i1p4", layout: "cinema", beat: "The release is ready to ship out.", panels: [
        { id: "i1p4a", shot: "wide", bg: "", mood: "cold", chars: [{ n: "Courier", x: 20, k: "human" }, { n: "Courier", x: 50, k: "human" }, { n: "Courier", x: 80, k: "human" }], action: "A loading dock. Couriers in coats receive sealed envelopes. Translators at a table behind them stack paper in six languages.", caption: "READY TO SHIP OUT.", dialogue: "", sfx: "", notes: "Mike's phrase. Keep it on the page.", status: "draft" },
        { id: "i1p4b", shot: "insert", bg: "", mood: "cold", chars: [], action: "The press release, first line only: 'The Governments of the United States and the Soviet Union wish to inform the public...'", caption: "", dialogue: "", sfx: "", notes: "", status: "idea" },
        { id: "i1p4c", shot: "close", bg: "", mood: "ember", chars: [{ n: "Sullivan", x: 50, k: "human" }], action: "Sullivan looks at the wall clock. It is nearly time.", caption: "", dialogue: "SULLIVAN: Once it leaves this room we do not get it back.", sfx: "", notes: "", status: "idea" },
        { id: "i1p4d", shot: "wide", bg: "art/site/story-broadcast.jpg", mood: "cold", chars: [], action: "Exterior of the broadcast tower, red light on top, snow falling past it.", caption: "", dialogue: "", sfx: "", notes: "", status: "idea" },
      ] },
      { id: "i1p5", layout: "splash", beat: "The broadcast. Page turn.", panels: [
        { id: "i1p5a", shot: "close", bg: "art/site/story-broadcast.jpg", mood: "static", chars: [{ n: "Announcer", x: 50, k: "human" }], action: "A studio. A red ON AIR light behind the announcer's head. He reads the sentence for the first time in his life.", caption: "", dialogue: "ANNOUNCER: In view of the tensions between our peoples, it is now in the interest of all that you know the truth. They are real.", sfx: "", notes: "The page intro: They are real. Keep that exact line. Vampires first, then the longer list on page 6.", status: "draft" },
      ] },
    ] },
    { id: "i2", pages: [
      { id: "i2p1", layout: "grid6", beat: "The first night: six cities, six reactions.", panels: [
        { id: "i2p1a", shot: "wide", bg: "art/site/story-war.jpg", mood: "ember", chars: [], action: "A crowded street outside a church. Doors open, candles, people kneeling and people running.", caption: "NIGHT ONE.", dialogue: "", sfx: "", notes: "", status: "idea" },
      ] },
      { id: "i2p2", layout: "top2", beat: "The two embassies turn on each other.", panels: [
        { id: "i2p2a", shot: "wide", bg: "", mood: "cold", chars: [{ n: "Sullivan", x: 30, k: "human" }, { n: "Col. Orlova", x: 70, k: "human" }], action: "The same kitchen, the same bulb, no folder this time.", caption: "", dialogue: "", sfx: "", notes: "", status: "idea" },
      ] },
    ] },
    { id: "i3", pages: [
      { id: "i3p1", layout: "splash", beat: "Three peoples step out of hiding.", panels: [
        { id: "i3p1a", shot: "est", bg: "art/site/story-dim.jpg", mood: "dim", chars: [], action: "A ruined highway at dusk. Three groups at three different points, none sure about the others.", caption: "ASHES.", dialogue: "", sfx: "", notes: "", status: "idea" },
      ] },
    ] },
    { id: "i4", pages: [
      { id: "i4p1", layout: "cinema", beat: "A civil war shown as one long scroll across years.", panels: [
        { id: "i4p1a", shot: "aerial", bg: "art/site/story-war.jpg", mood: "ember", chars: [], action: "A battlefield seen from above, half snow, half summer, half ruin, half green: the same field over ten years.", caption: "", dialogue: "", sfx: "", notes: "", status: "idea" },
      ] },
    ] },
    { id: "i5", pages: [
      { id: "i5p1", layout: "splash", beat: "Nine chairs and nine candles.", panels: [
        { id: "i5p1a", shot: "wide", bg: "art/site/story-chairs.jpg", mood: "blood", chars: [], action: "The candle spread from the story page, made canon: nine empty chairs, nine candles, nobody left to ask.", caption: "NINE EMPTY CHAIRS.", dialogue: "", sfx: "", notes: "Last page of the prequel before the cut to NOW.", status: "idea" },
      ] },
    ] },
  ],
};
