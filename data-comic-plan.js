// THE PREQUEL COMIC: full page plan, 22 pages per issue (110 in all). Loaded after data-comic.js, expands into COMIC.issues.
// Everything here is a DRAFT for Jacob and Mike to edit on the Storyboard tab. Pages keep their ids so edits and art line up.
// Page entry:  "keep:<id>"  keeps a page already in data-comic.js, in this position
//              [layout, beat, id|"", [panel, ...]]   a new page (id "" makes one like i2n3); a real id replaces that seed page
// Panel string: "shot|mood|Characters (comma list)|action|speech", speech lines split with \n, a line starting with # is a caption
(function () {
  const P = {
    i1: [
      "keep:i1p1",
      "keep:i1p2",
      ["three", "The Soviet side holds the same proof.", "", [
        "wide|cold|Col. Orlova,Staff|A ministry office, green lamps, a long table. Orlova reads a thick file while aides stand at the wall.|",
        "insert|cold||A tray of black and white photographs. In three of them the same pale figure stands in a doorway.|",
        "close|cold|Col. Orlova|She puts down the file and takes off her glasses. She has seen this before in her own village, as a child.|ORLOVA: Say nothing to the floor staff. Not yet."]],
      ["grid4", "Washington is told. Moscow is told. Neither answers.", "", [
        "med|cold|Sullivan|Sullivan on a secure phone, one hand pressed flat on the desk.|SULLIVAN: Yes, sir. I understand it sounds like a joke.",
        "insert|cold||A wall clock in the embassy, 11:40 p.m.|",
        "wide|cold|Staff|A hallway of aides carrying boxes toward a shredder, then stopping.|",
        "close|cold|Sullivan|He listens. His face goes slowly blank.|#WASHINGTON: HOLD ALL ACTION."]],
      ["top2", "Moscow after dark, the first public glimpse.", "", [
        "wide|night||A snowy street of tenement blocks. A night-shift tram rattles past lit windows.|",
        "med|night|Staff|A tram conductor stares out of the window at a figure standing perfectly still on the pavement.|",
        "close|night||The figure's face in the tram light. Pale, polite, wrong. It tips its hat.|"]],
      ["grid6", "Two governments, one hour, six phone calls.", "", [
        "med|cold|Sullivan|Embassy: Sullivan on one phone, an aide waiting with another.|",
        "med|cold|Col. Orlova|Ministry: Orlova takes a call and does not speak.|",
        "insert|cold||A red phone off the hook on a desk, forgotten.|",
        "close|cold|Staff|A young aide mouths the word NO to someone off panel.|",
        "wide|cold||A bank of switchboard operators, every light lit.|",
        "close|cold|Sullivan|He puts the phone down very slowly.|#EVERY LINE IN MOSCOW WAS BUSY. NOBODY WAS SAYING THE WORD."]],
      ["two", "Sullivan decides to walk.", "", [
        "wide|cold|Sullivan|The embassy lobby at 2 a.m. Sullivan puts on his coat while a Marine watches.|MARINE: Sir, you cannot leave the compound.",
        "med|cold|Sullivan|He pauses at the door with snow already on his shoulders.|SULLIVAN: Then I was never here."]],
      "keep:i1p3",
      ["bot2", "Who speaks first, and in what language.", "", [
        "med|dim|Sullivan|Sullivan counting on his fingers across the steel table.|SULLIVAN: Both flags. Both languages. Same minute.",
        "med|dim|Col. Orlova|Orlova shaking her head, one corner of her mouth almost smiling.|ORLOVA: Mine will want it in Russian first.",
        "wide|dim|Sullivan,Col. Orlova|Two people in a hotel kitchen pointing at one sheet of paper like cooks arguing over a recipe.|"]],
      ["tall", "Orlova's doubt.", "", [
        "close|dim|Col. Orlova|Orlova holds the photograph by its corner, her eyes wet but her face hard.|",
        "insert|dim||The photograph: the mirror behind the pale figure shows an empty room.|",
        "med|dim|Col. Orlova,Sullivan|She slides the photograph back across the table.|ORLOVA: My grandmother said they were real. We laughed at her."]],
      ["three", "The handshake.", "", [
        "insert|dim||Two hands meet under the hanging bulb. One has a wedding ring, one does not.|",
        "wide|dim|Sullivan,Col. Orlova|A steam pipe hisses behind them. Neither moves.|",
        "close|dim|Sullivan|Sullivan breathes out like a man who has set down something heavy.|SULLIVAN: Then we ship it."]],
      ["grid4", "The words are written.", "", [
        "wide|cold|Staff|A translation room. Six typists, six languages, one lamp each.|",
        "insert|cold||A typewriter strikes the key. The ribbon is nearly dry.|",
        "med|cold|Staff|A translator stops mid-sentence and reads the line again.|STAFF: Do we say vampires first?",
        "close|cold|Sullivan|Sullivan reading over his shoulder.|SULLIVAN: Say it plainly. People can hear plain."]],
      ["cinema", "The general who says no.", "", [
        "wide|ember|Staff|A military office. A general in a heavy coat reads the draft and goes white.|",
        "med|ember|Staff|He picks up a phone. An aide at the door shakes his head.|GENERAL: Stop that release.",
        "close|ember|Col. Orlova|Orlova, from the doorway, calm.|ORLOVA: Comrade General, it has already left the building.",
        "insert|ember||The envelope in a courier's bag, snow on its seal.|"]],
      "keep:i1p4",
      ["grid6", "The race through the snow.", "", [
        "wide|cold|Courier|A courier on a motorbike takes a corner too fast, snow spraying.|",
        "med|cold|Courier|A van driver stares at a map with a flashlight in his teeth.|",
        "insert|cold||Wire service teletypes waiting, hammers raised.|",
        "wide|cold|Courier|A checkpoint soldier waves a car through without looking.|",
        "close|cold|Courier|A courier on foot, breath smoking, running up marble stairs.|",
        "wide|cold||The television tower on the horizon, red light blinking.|#READY TO SHIP OUT. READY TO BE HEARD."]],
      ["top2", "The engineer climbs the tower.", "", [
        "est|cold||The Ostankino-style tower rising into falling snow. A tiny figure on the stairs.|",
        "med|cold|The transmitter engineer|The engineer checks a dial. Needle steady. He wipes his hands on his coat.|",
        "close|cold|The transmitter engineer|His hand hovers over the master switch, trembling.|ENGINEER: Whatever it is, let it say it once and be done."]],
      ["three", "The announcer rehearses the sentence.", "", [
        "med|static|Announcer|A makeup chair. A woman powders the announcer's forehead. He stares at the card.|",
        "close|static|Announcer|He mouths the line silently.|ANNOUNCER: They are real. They are real. They are real.",
        "wide|static|Announcer,Staff|A control room window. Technicians look away from him on purpose.|"]],
      ["grid4", "Sixty seconds from air.", "", [
        "med|cold|Staff|A kitchen in an apartment block. A family at a small television, a kettle boiling.|",
        "med|cold|Staff|A barracks. Conscripts around a set, someone turns the volume down, then up.|",
        "med|cold|Sullivan,Col. Orlova|The hotel kitchen, the two of them facing a small radio.|",
        "insert|cold||A studio clock. Fifteen seconds.|"]],
      "keep:i1p5",
      ["grid6", "The quiet inside the sentence.", "", [
        "close|static||A child at a kitchen table stops chewing.|",
        "close|static||An old man in a pub sets down his glass.|",
        "close|static||A soldier lowers his rifle a few inches.|",
        "close|static|Col. Orlova|Orlova, eyes closed.|",
        "close|static|Sullivan|Sullivan, eyes open.|",
        "wide|static||A city of lit windows, one by one going to silhouettes at the glass.|#SIXTY SECONDS."]],
      ["tall", "The signal dies.", "", [
        "wide|static|Staff|The control room. Every monitor goes to grey snow at once.|",
        "close|static|The transmitter engineer|The engineer at the transmitter with both hands in the air.|ENGINEER: I did not touch it. I did not touch anything.",
        "insert|static||The master switch, still up, untouched.|"]],
      ["splash", "The static is not quite silent.", "", [
        "close|static|Sullivan|Sullivan alone at the radio. The hotel kitchen around him is a blur. A faint pattern is visible in the grey static, like a voice that never quite forms words.|#THE STATIC WAS NOT QUITE SILENT."]],
    ],
    i2: [
      ["grid6", "The first night: six cities, six reactions.", "i2p1", [
        "wide|ember||A crowded street outside a church. Doors open, candles, people kneeling and people running.|#NIGHT ONE.",
        "med|ember||A bar in a mining town. A man stands to say he does not believe it. His friend stands up behind him, fangs bared.|",
        "wide|night||A butcher's queue. Everyone steps back from a woman who does not cast a shadow.|",
        "med|ember||A rooftop in a southern city. A crowd looks up at a shape in the sky.|",
        "wide|cold||Parliament steps. A line of police with shields, the crowd chanting a single word.|",
        "close|night||A mother holds a child at a window and does not turn on the light.|"]],
      ["three", "The hospital.", "", [
        "wide|cold|Staff|A hospital corridor at night. Nurses push a gurney; a doctor looks at an X-ray with too many teeth.|",
        "med|cold|Staff|The doctor holds up a chart and reads aloud to a room that does not want to hear.|",
        "close|cold|Staff|A nurse crosses herself, the first time in twenty years.|"]],
      ["top2", "Something steps out in daylight.", "", [
        "wide|dim|Salina|A market square at noon. Everyone has stopped moving.|",
        "med|dim|Salina|A tall woman in a long coat walks out from a covered alley, one glove removed.|",
        "close|dim|Salina|She speaks in a polite, practiced voice.|SALINA: I am not here to frighten anyone. I am here because you saw."]],
      ["two", "The newsroom.", "", [
        "wide|static|Staff|A Western newsroom, twenty phones ringing, a producer shouting at the ceiling.|",
        "close|static|Staff|An anchor reads the headline for the third time and cannot make his voice flat.|#THE WORLD HAD A NEW STORY, AND NO SECOND PAGE."]],
      ["bot2", "Hoarding.", "", [
        "wide|dim|Staff|A supermarket with a wall of empty shelves and a line of carts at the door.|",
        "med|dim|Staff|Two men tugging a sack of flour in opposite directions.|",
        "insert|dim||A shop sign flipped to CLOSED, with a rifle propped behind the glass.|"]],
      ["grid4", "Curfews and borders.", "", [
        "wide|dim||A checkpoint at a border bridge. Barriers come down.|",
        "med|dim|Staff|A soldier telling a family to turn the car around.|",
        "insert|dim||A rolled-up newspaper in a gutter: CURFEW AT DUSK.|",
        "wide|dim||A whole district goes dark at once, window after window.|"]],
      ["top2", "The two embassies turn on each other.", "i2p2", [
        "wide|cold|Sullivan,Col. Orlova|The same kitchen, the same bulb, no folder this time.|",
        "close|cold|Sullivan|Sullivan, hollow-eyed.|SULLIVAN: My capital says your side leaked the pictures.",
        "close|cold|Col. Orlova|Orlova looks at him for a long time.|ORLOVA: Mine says the same about you."]],
      ["three", "Sullivan is recalled.", "", [
        "med|cold|Sullivan|A cable on a desk: RECALL IMMEDIATELY.|",
        "wide|cold|Sullivan,Staff|Sullivan packs a single bag while a Marine stands at the door.|",
        "close|cold|Sullivan|He pauses at the window overlooking the river.|"]],
      ["cinema", "Each government rewrites the sentence.", "", [
        "wide|cold|Staff|A Soviet press office. A man crosses out a line with a thick pencil.|",
        "wide|cold|Staff|A Washington press room. A different man crosses out a different line.|",
        "insert|cold||Two statements side by side. Same typeface. Opposite meanings.|",
        "close|cold|Col. Orlova|Orlova reading both on a telex.|#THEY HAD TOLD THE TRUTH TOGETHER. THEY WOULD LIE SEPARATELY."]],
      ["grid4", "The generals in the bunkers.", "", [
        "wide|ember|Staff|A war room map with colored pins over every continent.|",
        "med|ember|Staff|A general jabs the map at a pin the color of a vampire court.|GENERAL: That is a hostile power with its own air force.",
        "med|ember|Staff|An admiral shakes his head, tired.|ADMIRAL: Or it's a neighbor we never knew we had.",
        "insert|ember||A telegram: ALL FORCES TO ALERT.|"]],
      ["tall", "A dead line.", "", [
        "close|static|Sullivan|Sullivan, in a transit lounge, dials the hotel kitchen number.|",
        "insert|static||The receiver: a click, a hiss, no ring.|",
        "med|static|Sullivan|He lowers the phone and looks at an empty chair beside him.|"]],
      ["grid6", "Fear on the walls.", "", [
        "insert|dim||A newspaper reading HAVE YOU CHECKED YOUR NEIGHBORS?|",
        "insert|dim||Graffiti on brick: THEY WERE HERE FIRST.|",
        "med|dim|Staff|A man loads a hunting rifle at a kitchen table.|",
        "med|dim|Staff|A priest hands out silver crosses at a church door.|",
        "wide|dim||A lone figure on a hilltop watching a city's lights go out in sections.|",
        "close|dim||A girl in a window drawing a flower on foggy glass.|"]],
      ["two", "A family chooses.", "", [
        "wide|dim|Staff|A farmhouse kitchen. A father, a mother and a teenage son around the radio.|",
        "close|dim|Staff|The son zips a bag and does not meet his father's eyes.|SON: There's a place that takes anyone. Anyone."]],
      ["three", "The silo.", "", [
        "wide|ember|Staff|A missile silo control room. Four officers around two keys.|",
        "close|ember|Staff|A young lieutenant looks at the key on his chain.|",
        "insert|ember||A red telephone ringing.|"]],
      ["grid4", "The launch order.", "", [
        "med|ember|Staff|A major reads the order aloud, voice cracking.|",
        "close|ember|Staff|The lieutenant shakes his head.|LIEUTENANT: Sir, it's not a vampire that gives us this order.",
        "insert|ember||Two keys turning at the same time.|",
        "wide|ember|Staff|A countdown clock in red.|"]],
      ["splash", "The first missile rises.", "", [
        "wide|ember||A silo door opens in a snowy field. A missile rises on a column of fire, pushing back the dark.|#THE WORLD HAD RUN OUT OF WAYS TO SAY NO."]],
      ["cinema", "The exchange, from a distance.", "", [
        "aerial|ember||A curved horizon at night, thin white lines arcing across it.|",
        "aerial|ember||A flash on the horizon, white and silent.|",
        "aerial|ember||A second flash, farther away. And a third.|",
        "est|ember||A wall of cloud rising over a small town in the foreground, children small below it.|"]],
      ["grid4", "From the ground.", "", [
        "wide|ember|Staff|A rooftop. A dozen people watch the horizon change color.|",
        "close|ember|Staff|A girl's face lit orange. She does not understand yet.|",
        "med|ember|Staff|An old woman covers the girl's eyes.|",
        "wide|ember||The street below, empty. Every window lit by the same strange dawn.|"]],
      ["splash", "A city goes dark.", "", [
        "est|dim||A skyline lit up like a map at night. Then, from one edge to the other, it goes out.|#THE GRID FAILED A SECTION AT A TIME."]],
      ["grid6", "Region by region.", "", [
        "wide|dim||A power plant, its cooling tower a black shape.|",
        "insert|dim||A traffic light blinking and dying.|",
        "med|dim|Staff|A man at a lit switchboard watching the lights fall.|",
        "wide|dim||A satellite dish pointing at a sky with no answer.|",
        "insert|dim||A clock radio, its digits fading.|",
        "wide|dim||A continent seen from space, its night lights going out like a tide.|"]],
      ["three", "One last call.", "", [
        "close|static|Sullivan|Sullivan on a battery radio in a basement.|SULLIVAN: Mo-Moscow, this is... anyone, come in.",
        "close|static|Col. Orlova|Orlova, a handheld radio in her glove, standing in snow.|ORLOVA: I hear you. I do not hear you well.",
        "insert|static||A radio dial turning past a station of pure hiss.|"]],
      ["splash", "The first torch.", "", [
        "wide|dim|Sullivan|A dark street. A single torch is lit in a doorway; behind it a battery radio is set on a windowsill, silent, its antenna folded down.|#THE FIRST TORCH. THE LAST VOICE ON THE AIR."]],
    ],
    i3: [
      ["splash", "Three peoples step out of hiding.", "i3p1", [
        "est|dim||A ruined highway at dusk. Three groups at three different points, none sure about the others.|#ASHES."]],
      ["grid6", "Who is left.", "", [
        "wide|dim|Dante|A gas station turned fortress, with armed survivors stacking sandbags.|",
        "med|dim|Magnus|A man in a welder's mask repairs a generator.|",
        "med|dim|Salina|A woman in a long coat counts survivors in a cellar.|",
        "med|dim|Frederick|A man with a scarred jaw stands at the edge of a forest, nose lifted.|",
        "wide|dim||A clearing where hundreds of strangers sit around a fire without speaking.|",
        "close|dim|Miriam|A healer's hands in bloody gloves, steady.|"]],
      ["top2", "Dante's warband.", "", [
        "wide|dim|Dante|A fuel depot at dawn. Fifty men and women arranged in rows.|",
        "close|dim|Dante|Dante, broad-shouldered, in a long coat, scanning faces.|DANTE: Nobody here is a soldier. By Friday everybody is.",
        "med|dim|Dante|He hands a rifle to a thin teenager.|"]],
      ["three", "Magnus keeps one town lit.", "", [
        "wide|dim|Magnus|A small town at night with a single street of lit windows. Everywhere else, darkness.|",
        "med|dim|Magnus|Magnus cranking a hand generator, sweat on his brow.|",
        "close|dim|Staff|A child at a window holding up a bulb like a trophy.|#ONE TOWN. ONE BULB PER HOUSE.|"]],
      ["two", "Salina leaves the cellar.", "", [
        "wide|night|Salina|A stone cellar court with a long table and candles. Vampires seated by rank.|",
        "close|night|Salina|Salina stands, hands flat on the table.|SALINA: We hid for centuries because nobody could hurt us. Now everyone can."]],
      ["grid4", "The courts argue.", "", [
        "med|night|Cessily|Cessily, elegant and cold, shaking her head.|CESSILY: Secrecy has kept us alive for six hundred years.",
        "med|night|Gabriel|Gabriel, in a tailored coat, raising a calming hand.|",
        "close|night|Salina|Salina does not blink.|SALINA: And what did the secret keep us from?",
        "wide|night||A long table of vampires, half standing, half seated.|"]],
      ["tall", "The packs leave the margins.", "", [
        "wide|dim|Frederick|A treeline. A pack of silhouetted wolves steps out, then people.|",
        "med|dim|Frederick|Frederick, wearing nothing but an army coat, looks at a burned territory marker.|",
        "close|dim|Frederick|His expression is flat and tired.|FREDERICK: They took the woods. We'll take the rest."]],
      ["grid4", "Miriam crosses the lines.", "", [
        "wide|dim|Miriam|A ruined clinic. Humans, a vampire and a wolf all waiting on the same bench.|",
        "med|dim|Miriam|Miriam binding a bite on a man's arm.|",
        "close|dim|Miriam|She looks up at a human mother, calm.|MIRIAM: I don't ask whose it is. I ask where it hurts.",
        "insert|dim||A first aid kit with a hand-painted symbol on the lid.|"]],
      ["cinema", "The relics.", "", [
        "insert|dim||A single AA battery on a velvet cloth, lit by a candle.|",
        "wide|dim|Staff|A crowd around a man playing a cassette on a hand-cranked player.|",
        "med|dim|Staff|A woman kisses a cassette tape and tucks it into her coat.|",
        "close|dim|Staff|A boy touching the cracked screen of a dead phone.|#THE LOOK OF THE DIM IS BORN HERE."]],
      ["grid6", "The market.", "", [
        "wide|dim|Staff|A night market of lamps and blankets spread with objects from the old world.|",
        "insert|dim||A Walkman, a lipstick, a toy robot.|",
        "med|dim|Staff|A trader weighs a battery against a pistol.|",
        "med|dim|Staff|A vampire examines a mirror for a long moment, then sets it face down.|",
        "close|dim|Staff|A child traded for nothing; just a hand on her shoulder.|",
        "wide|dim||The whole market lit by one electric bulb run off a bicycle.|"]],
      ["top2", "Across a ruin.", "", [
        "wide|night|Dante,Salina|A collapsed overpass. Dante stands on one side, Salina on the other, a hundred yards of rubble between them.|",
        "close|night|Dante|Dante lowers his rifle.|",
        "close|night|Salina|Salina holds out one gloved hand, palm up.|"]],
      ["three", "They talk.", "", [
        "med|night|Dante,Salina|The two sit on opposite ends of a broken concrete slab.|DANTE: You could have killed my scouts. Why didn't you?",
        "close|night|Salina|Salina smiling slightly.|SALINA: You didn't shoot mine.",
        "wide|night|Dante,Salina|Hours later. They are closer. Both laughing at something offpanel.|"]],
      ["two", "What no one forgives.", "", [
        "close|night|Dante,Salina|Their hands joined over the slab.|",
        "wide|night|Dante,Salina|Behind them, in the shadows of the rubble, a scout from each side watches in horror.|#NEITHER SIDE WOULD EVER FORGIVE IT."]],
      ["grid4", "Word spreads.", "", [
        "med|ember|Cessily|Cessily reading a note.|CESSILY: She has done what?",
        "med|ember|Dante|A human elder spitting on the ground.|ELDER: Dante's gone to the leeches.",
        "close|ember|Frederick|Frederick listening, ears flattened.|",
        "wide|ember||Three camps, three fires, all with a person staring at the same horizon.|"]],
      ["bot2", "Stein's cellar.", "", [
        "wide|cold|Franklin Stein|A university basement lab with the lights run off a car battery. Franklin Stein bends over a steel table.|",
        "close|cold|Franklin Stein|Stein, thin, intense, spectacles reflecting a lamp.|STEIN: I don't need him alive. I need him obedient.",
        "insert|cold||A tray of instruments, and one small metal chip.|"]],
      ["grid4", "The first zombie.", "", [
        "wide|cold|Franklin Stein|The dead man on the table is covered by a sheet.|",
        "insert|cold||His fingers twitch under the sheet.|",
        "close|cold|Franklin Stein|Stein, terrified and delighted, taking notes.|",
        "med|cold|Franklin Stein|The dead man sits up slowly, eyes unfocused.|"]],
      ["three", "The first chip.", "", [
        "insert|cold||Tweezers hold a chip to the back of a neck.|",
        "close|cold|Franklin Stein|Stein whispers a command.|STEIN: Stand.",
        "wide|cold|Franklin Stein|The dead man stands. He is no longer looking for anything.|"]],
      ["grid6", "Counting the dead.", "", [
        "wide|ember||A field of white crosses, newly dug.|",
        "med|ember|Dante|Dante lowering a cloth over a young man's face.|",
        "med|ember|Salina|Salina lighting a candle in a ruined chapel.|",
        "med|ember|Frederick|Frederick burying a wolf in silence.|",
        "insert|ember||A list of names scratched on a wall, the last few still wet.|",
        "wide|ember||Three graveyards, three flags, no end.|"]],
      ["tall", "Seen from above.", "", [
        "aerial|dim||A broken landscape. Three fires burn in three corners.|",
        "aerial|dim||The fires slowly drift closer to one another over time.|",
        "close|dim|Miriam|Miriam, on a hill, drawing a line in the dirt with a stick.|"]],
      ["two", "Three flags are sewn.", "", [
        "med|dim|Staff|A woman at a hand-cranked sewing machine finishing a blue banner.|",
        "wide|dim|Staff|Two other tables, two other banners: one dark, one grey-brown.|#NO ONE CALLED IT A WAR YET."]],
      ["grid4", "Patrols.", "", [
        "wide|dim|Dante|Dante's riders on bicycles passing a road marker.|",
        "wide|night|Gabriel|Vampire scouts on the high bank of a river.|",
        "wide|dim|Frederick|Wolves trotting through a broken fence.|",
        "insert|dim||Three trail markers made of different materials meeting at a crossroads.|"]],
      ["splash", "Three flags over three ruins.", "", [
        "est|dim||A dusk skyline of ruins. In the foreground, three poles stand in three heaps of rubble, each with a different banner snapping in the wind.|#LINES DRAWN."]],
    ],
    i4: [
      ["cinema", "A civil war shown as one long scroll across years.", "i4p1", [
        "aerial|ember||A battlefield seen from above, half snow, half summer.|",
        "aerial|ember||The same field a few years later: half ruin, half green.|",
        "aerial|dim||The field again; a camp, a treaty tent, a burial pit.|",
        "aerial|ember||The field again; scarred, strange, almost beautiful.|#THE SAME FIELD, OVER TEN YEARS."]],
      ["grid6", "Years 1990 to 1995.", "", [
        "wide|ember|Dante|A cavalry charge of bicycles and horses against a barricade.|",
        "wide|night|Salina|A night raid on a monastery, shapes dropping from rooftops.|",
        "wide|dim|Frederick|A pack tearing through a camp, defenders scattering.|",
        "med|ember||A field hospital, the beds all full.|",
        "insert|ember||A flag half-burned, still flying.|",
        "wide|ember||A new border drawn across a map in blood-red ink.|"]],
      ["top2", "Alliances shift.", "", [
        "wide|dim|Dante,Salina|A shared banquet table between human and vampire leaders, strangely formal.|",
        "close|dim|Cessily|Cessily pours wine for Dante and does not look at Salina.|",
        "close|dim|Salina|Salina reading Cessily's face and understanding.|SALINA: She's already sold us."]],
      ["three", "The ambush.", "", [
        "wide|ember|Frederick|A mountain pass. Wolves on both ridges.|",
        "med|ember|Dante|Humans in a column look up, rifles half raised.|",
        "close|ember|Frederick|Frederick's eyes, yellow and calm.|"]],
      ["grid4", "Stein's sentries.", "", [
        "wide|cold|Franklin Stein|A road lined with zombies standing like fence posts.|",
        "insert|cold||A chip glinting at the base of one zombie's skull.|",
        "med|cold|Franklin Stein|Stein checking a clipboard, pleased.|",
        "close|cold||A sentry's eyes follow a passing caravan, expressionless.|"]],
      ["two", "The checkpoint.", "", [
        "wide|cold||A caravan stopped at a barricade. A zombie guard holds up one hand.|",
        "close|cold|Staff|A trader paying with a pistol in a trembling hand.|#THE ROADS BELONGED TO THE DEAD NOW."]],
      ["tall", "Lucas scouts south.", "", [
        "wide|dim|Lucas|A desert at the edge of the map. Lucas on a ridge, binoculars up.|",
        "med|dim|Lucas|He wipes his lens and looks again.|",
        "close|dim|Lucas|His eyes are wide.|LUCAS: That is not a hill."]],
      ["splash", "The Black Pyramid.", "", [
        "est|night||A black pyramid rising from the desert at dusk, vast and impossible, its tip glowing gold. A scout's tiny figure stands at the foot of the frame.|#THE BLACK PYRAMID."]],
      ["three", "Thoth-Ra greets the scout.", "", [
        "wide|night|Thoth-Ra,Lucas|The pyramid's entrance. A bandaged figure in robes waits at the top of the stairs.|",
        "close|night|Thoth-Ra|Thoth-Ra, wrapped in gold-stitched linen, smiles beneath the bandage.|THOTH-RA: Tell them the door is open.",
        "close|night|Lucas|Lucas steps back, suspicious.|LUCAS: And the price?"]],
      ["top2", "The offer.", "", [
        "wide|dim|Staff|A crowd gathered at the foot of the stairs, three peoples mixed together.|",
        "med|night|Thoth-Ra|Thoth-Ra raising one hand; the crowd falls silent.|",
        "close|night|Thoth-Ra|He speaks softly.|THOTH-RA: My master gives power to those who survive his trials."]],
      ["grid4", "The first climbers.", "", [
        "wide|dim|Ezekiel|Dozens climb the stairs, torchlight on their faces.|",
        "med|dim|Ezekiel|A young man in the crowd, watching, who is not climbing yet.|",
        "close|dim|Ezekiel|Ezekiel, no older than twenty, studying every face.|",
        "insert|dim||A bowl of water at the top of the stairs, full to the brim and very still.|"]],
      ["cinema", "The first trial.", "", [
        "wide|night|Staff|A hall of shifting sand and statues. A climber steps in alone.|",
        "med|night|Staff|The statues turn their heads.|",
        "close|night|Staff|The climber's eyes go glassy.|",
        "wide|night||The hall closes like a hand.|"]],
      ["grid6", "Some return.", "", [
        "wide|night||The pyramid entrance at dawn. A figure staggers out.|",
        "close|night|Staff|The returnee's hands are covered in glowing script.|",
        "wide|night||A second climber does not return. The crowd watches the empty doorway.|",
        "med|night|Thoth-Ra|Thoth-Ra marks a name in a long ledger.|",
        "insert|night||Fifty names. Forty of them crossed out.|",
        "close|night|Ezekiel|Ezekiel, carefully expressionless.|"]],
      ["two", "The first magic.", "", [
        "med|night|Staff|The returnee lifts one hand; a small blue flame floats above it, obeying.|",
        "close|night|Staff|His face is exalted and terrified at once.|RETURNEE: I felt it take something. I don't know what yet."]],
      ["three", "Ezekiel decides.", "", [
        "wide|dim|Ezekiel|Ezekiel stands alone at the foot of the stairs after the crowd has left.|",
        "close|dim|Ezekiel|He tightens a strap on his pack.|",
        "med|dim|Ezekiel|He puts one foot on the first stair.|#HE WAS YOUNG. HE WAS PATIENT. HE WAS COUNTING.|"]],
      ["grid4", "The Block.", "", [
        "est|ember||A plain of rubble. A circle of gray walls is being laid out by teams with ropes.|",
        "med|ember|Staff|Workers of three peoples dig a trench side by side without speaking.|",
        "insert|ember||A sign hammered into the dirt: THE BLOCK.|",
        "wide|ember||A watchtower going up at each corner.|"]],
      ["bot2", "Walls for the worst.", "", [
        "wide|ember|Dante|Dante, Salina and Frederick standing together at the gates.|DANTE: This is where we put the worst of us.",
        "close|ember|Salina|Salina nods slowly.|",
        "wide|ember||The gate closing behind the first prisoners.|"]],
      ["grid6", "Everyone is tired.", "", [
        "close|dim|Dante|Dante, older, grey in the beard.|",
        "close|dim|Salina|Salina, the same face but harder.|",
        "close|dim|Frederick|Frederick, silvering, hollow.|",
        "med|dim|Staff|A soldier asleep sitting up against a wall.|",
        "med|dim|Staff|A child asking an adult why the war started. The adult does not know.|",
        "wide|dim||A funeral procession, then another, then another.|"]],
      ["top2", "The quiet field.", "", [
        "wide|dim||The same battlefield, now a still green meadow.|",
        "med|dim|Dante,Salina,Frederick|Three leaders arriving from three sides, each with a handful of followers.|",
        "close|dim|Dante|Dante sets down his rifle on the grass.|DANTE: I forget what I was fighting for.|"]],
      ["three", "Envoys go south.", "", [
        "wide|dim|Miriam|A caravan of three peoples heading into the desert.|",
        "med|dim|Magnus|Magnus checking the wheels of a wagon.|",
        "close|dim|Miriam|Miriam looking back at the home she may never see again.|"]],
      ["two", "The cost.", "", [
        "wide|night|Lucas|The pyramid stairs at midnight. Lucas climbs alone, carrying a banner bearing three colors.|",
        "close|night|Thoth-Ra|Thoth-Ra at the top, hands folded.|THOTH-RA: Someone always pays. Are you the one?"]],
      ["splash", "The door closes.", "", [
        "est|night|Lucas|The black pyramid under a starless sky. A single figure steps through a doorway of light; the door seals behind him.|#SOMEONE HAD TO GO SOUTH AND PAY THE PRICE."]],
    ],
    i5: [
      ["splash", "The Temple of Imhotep.", "", [
        "est|night||A grand temple at sunrise, pale sandstone against a pale sky, a wide stair leading to a doorway lit within.|#THE TEMPLE OF IMHOTEP.|"]],
      ["grid4", "Nine arrive.", "", [
        "med|dim|Sullivan|A thin man in a rumpled suit climbs the steps, briefcase in hand.|",
        "med|dim|Magnus|Magnus brushing dust from his sleeves.|",
        "med|night|Salina|Salina and Gabriel, dressed in black.|",
        "med|dim|Frederick|Frederick, Lucas and Miriam arriving on foot.|"]],
      ["cinema", "Nine chairs.", "", [
        "wide|dim||An empty round chamber. Nine chairs in a ring.|",
        "med|dim||Nine people enter from different doors.|",
        "wide|dim||They hesitate, then sit one at a time.|",
        "close|dim|Sullivan|Sullivan at last. He opens his briefcase and sets a single sheet on the table.|"]],
      ["top2", "Two who look at each other.", "", [
        "wide|dim||The round table, nine seated figures.|",
        "close|night|Dante|Dante, across the table, meets a gaze.|",
        "close|night|Salina|Salina looks back and does not look away.|"]],
      ["three", "The terms.", "", [
        "close|dim|Sullivan|Sullivan reading the first clause aloud.|SULLIVAN: Three territories. No crossing without leave.",
        "close|dim|Frederick|Frederick, unconvinced.|FREDERICK: Who watches the border?",
        "close|dim|Gabriel|Gabriel smoothing the tension.|GABRIEL: Everyone. That's the point."]],
      ["grid6", "The Cordon.", "", [
        "insert|dim||A hand drawing a first line on a map.|",
        "insert|dim||A second line crossing the first.|",
        "insert|dim||A third.|",
        "wide|dim||The finished map: three territories, three colors, a wide grey band between.|",
        "med|dim|Staff|Soldiers planting border posts.|",
        "wide|dim||Smoke rising from a line of campfires along the Cordon.|"]],
      ["two", "Only Mystics may cross.", "", [
        "close|night|Thoth-Ra|Thoth-Ra at the chamber door, as if he had always been there.|THOTH-RA: Those who carry the old power cross freely. All others do not.",
        "wide|night||The nine look at him, then at each other. Nobody objects.|"]],
      ["splash", "The treaty is signed.", "", [
        "wide|dim||A wide shot of the round chamber. Nine signatures on one long parchment. Nine hands pulling away.|#THE FIRST TREATY.|"]],
      ["grid6", "Years pass.", "", [
        "wide|dim||A newborn held up in a doorway at dawn.|#YEAR ONE.",
        "wide|dim||A wedding, a cassette player on a table, a slow song.|#YEAR SIX.",
        "wide|dim||A caravan crossing a border post, the guard waving them through.|#YEAR ELEVEN.",
        "wide|dim||The Block's gates opening, a handful of prisoners walking out.|#YEAR FIFTEEN.",
        "wide|dim||A school, children of three peoples drawing at the same table.|#YEAR TWENTY.",
        "wide|dim||The treaty renewed, nine older faces signing.|#YEAR TWENTY-FIVE."]],
      ["top2", "The cassette at the wedding.", "", [
        "wide|dim||A rooftop wedding under strings of bulbs.|",
        "close|dim|Staff|The bride and groom, one human, one wolf, laughing.|",
        "insert|dim||A cassette in a battered player, the label reading simply DANCE.|"]],
      ["three", "A child of two peoples.", "", [
        "med|night|Dante,Salina|Dante and Salina in a quiet room, a cradle between them.|",
        "close|night|Salina|Salina gently touching the infant's cheek with a gloved finger.|",
        "close|night|Dante|Dante, wiping his eyes.|DANTE: She has your hands.|"]],
      ["grid4", "The Elders age.", "", [
        "close|dim|Sullivan|Sullivan, grey and shrunken.|",
        "close|dim|Magnus|Magnus, hands calloused and shaking.|",
        "close|dim|Miriam|Miriam, silver braid, serene.|",
        "wide|dim||The nine at the round table again, fewer teeth, more stories.|"]],
      ["tall", "Sullivan carries a secret.", "", [
        "wide|dim|Sullivan|Sullivan alone at a desk with a candle, an unmarked ledger open.|",
        "insert|dim||A page in the ledger: a list of names, each with a date and a single word.|",
        "close|dim|Sullivan|He closes the ledger and holds it to his chest.|"]],
      ["three", "Sullivan walks to Ezekiel.", "", [
        "wide|night|Sullivan|A long corridor of black stone. Sullivan carries a lantern and the ledger.|",
        "med|night|Ezekiel|A tall man in a pale robe waits at the door of the temple.|",
        "close|night|Ezekiel|Ezekiel, now middle-aged, calm.|EZEKIEL: You came late.|"]],
      ["two", "What Sullivan says.", "", [
        "close|night|Sullivan|Sullivan, voice low.|SULLIVAN: The broadcast. I've never told anyone what we heard after.",
        "close|night|Ezekiel|Ezekiel listening with perfect stillness.|"]],
      ["grid4", "The last night begins.", "", [
        "wide|night||The Spires under a black sky.|",
        "med|night|Magnus|Magnus lighting a candle on a windowsill.|",
        "med|night|Miriam|Miriam lighting another in her clinic.|",
        "insert|night||A line of candles in a dozen windows.|"]],
      ["cinema", "One by one.", "", [
        "wide|blood||A long hall. A candle goes out, then another.|",
        "med|blood|Gabriel|Gabriel turns toward a sound and the frame cuts away.|",
        "insert|blood||A chair pushed back, a cup fallen on the floor.|",
        "wide|blood||All the candles in the hall are out but one.|"]],
      ["grid6", "Chairs emptying.", "", [
        "insert|blood||An empty chair with a coat over the back.|",
        "insert|blood||A second chair, a hat on the seat.|",
        "insert|blood||A third chair, a glass overturned.|",
        "insert|blood||A fourth chair, a pair of spectacles.|",
        "insert|blood||A fifth chair, a pen still rolling.|",
        "insert|blood||A sixth chair. The seventh. The eighth.|"]],
      ["three", "Dawn.", "", [
        "wide|dim|Staff|A servant opening the round chamber doors on a grey morning.|",
        "wide|dim|Staff|Nine chairs, all empty, all in a ring.|",
        "close|dim|Staff|The servant drops his tray.|"]],
      ["splash", "Nine empty chairs.", "i5p1", [
        "wide|blood||The candle spread from the story page, made canon: nine empty chairs, nine candles, nobody left to ask.|#NINE EMPTY CHAIRS.|"]],
      ["tall", "A child over the Spires.", "", [
        "wide|dim||The Spires at sunrise, towers of stone and glass.|",
        "med|dim||A six-year-old girl floats just above a rooftop, arms out, laughing.|",
        "close|dim||Her shadow on the roof below is much larger than her.|"]],
      ["cinema", "NOW.", "", [
        "wide|dim|Anna|Anna wakes in a bed, hands glowing slightly.|#NOW.",
        "wide|dim|Josh|Josh at a workbench, hovering a wrench in mid-air without touching it.|",
        "wide|dim|Tom|Tom on a rooftop, looking down at a wolf pack.|",
        "wide|dim|Emma|Emma on a balcony, the Spires behind her, a calendar on the wall: THE NEXT TREATY: 3 MONTHS.|"]],
    ],
  };

  // ---------- expand into COMIC.issues ----------
  const K = { "Sullivan": "human", "Col. Orlova": "human", "Dante": "human", "Magnus": "human", "Franklin Stein": "human", "Ezekiel": "human", "Staff": "human", "Courier": "human", "Announcer": "human", "The transmitter engineer": "human", "Anna": "human", "Josh": "human", "Tom": "human", "Emma": "human", "Salina": "vampire", "Cessily": "vampire", "Gabriel": "vampire", "Frederick": "were", "Lucas": "were", "Miriam": "were", "Thoth-Ra": "undead" };
  const C = window.COMIC; if (!C) return;
  const LETTERS = "abcdefghijklmnopqrstuvwxyz";
  C.rev = Math.max(C.rev || 1, 2);
  const cells = (l) => (C.layouts.find((x) => x[0] === l) || [0, 0, ["a"]])[2].length;
  const mkPanel = (pid, s) => {
    const f = s.split("|"), names = (f[2] || "").split(",").map((x) => x.trim()).filter(Boolean);
    const sp = (f[4] || "").split("\n").filter(Boolean), cap = sp.filter((x) => x[0] === "#").map((x) => x.slice(1)).join("\n"), dia = sp.filter((x) => x[0] !== "#").join("\n");
    return { id: pid, shot: f[0], bg: "", mood: f[1] || "", chars: names.map((n, i) => ({ n, x: Math.round(((i + 1) / (names.length + 1)) * 100), k: K[n] || "human" })), action: f[3] || "", caption: cap, dialogue: dia, sfx: "", notes: "", status: "draft" };
  };
  C.issues.forEach((iss) => {
    const plan = P[iss.id]; if (!plan) return;
    const old = Object.fromEntries(iss.pages.map((p) => [p.id, p])), out = [];
    plan.forEach((e, k) => {
      if (typeof e === "string") { const p = old[e.slice(5)]; if (p) out.push(p); return; }
      const id = e[2] || `${iss.id}n${k + 1}`, n = cells(e[0]);
      out.push({ id, layout: e[0], beat: e[1], panels: e[3].slice(0, n).map((s, j) => mkPanel(id + LETTERS[j], s)) });
    });
    iss.pages = out;
  });
})();
