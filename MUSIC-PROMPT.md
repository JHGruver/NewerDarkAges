# Soundtrack prompt (Gemini audio / music maker)

**Use:** background music for the character selection screen (and every page after the story intro). Instrumental, loopable, sits under the UI.
**Save as:** `audio/soundtrack.mp3` (the site already looks for this exact path; until it exists the page is silent after the static fades).

## Prompt (paste this)

> Instrumental lofi 1980s electronic gaming music with modern beats. Neo-retro cyberpunk, post-apocalyptic, melancholy but cool, like a neon-lit arcade at the end of the world while an old radio plays in the next room. 88 BPM, A minor, laid-back head-nod groove.
>
> Drums: modern and crisp, a deep punchy 808-style kick, a tight snappy snare with a short 80s gated-reverb tail, soft rimshot ghost notes, swung 16th hi-hats with subtle trap-style rolls every fourth bar, a dusty lofi texture over the top.
>
> Synths: warm analog Juno-style pads that slowly swell, a mellow detuned saw lead playing a simple memorable minor-key melody, a bubbly arpeggiated sequencer (Moog and Roland style) in the background, FM electric-piano and glassy DX7 bell tones, a round sub bass with a slight sidechain pump. A few tiny chiptune arcade blips and coin-sparkle accents, used sparingly.
>
> Texture: gentle tape wobble, vinyl crackle, a faint thread of radio static and a distant radio-tuning whistle that appears every 16 bars, soft rain ambience. Mix is warm and slightly muffled, not too bright, not busy, no big drops, with plenty of space so it works as quiet background music for a menu screen.
>
> Structure: 4-bar intro of static and pads, then a steady loop that builds slightly (add arpeggio, then lead melody) and returns to the start so it can loop seamlessly. No vocals, no spoken words, no sudden loud sounds.

## Shorter version (if the tool has a character limit)

> Lofi 1980s synthwave gaming music with modern trap-style beats, instrumental, 88 BPM, A minor. Warm analog pads, bubbly arpeggios, glassy FM bells, a mellow lead melody, deep 808 kick, crisp gated-reverb snare, swung hi-hats, tape wobble, vinyl crackle, faint radio static and rain. Neon cyberpunk post-apocalypse mood, melancholy but cool, quiet and loopable, no vocals.

## Tips

- **Length:** ask for 2 to 3 minutes if the tool allows. If it only makes 30 seconds, generate 3 to 4 variations and give me all of them; I can loop and crossfade them.
- **Loop:** end the prompt with "ends the way it begins so it loops seamlessly" if the first result has a hard ending. I can also fade the loop point.
- **Variations worth trying:** (1) as written, (2) swap "melancholy but cool" for "tense and mysterious" for the story pages, (3) "darker, slower, 72 BPM, more pads and fewer drums" for the Lore page.
- **Optional extra, 5 to 8 seconds:** "an old analog radio tuning sweep: static, a rising whistle, a click, and a warm hum settling onto a station" for the moment the static becomes the music.
- **File format:** MP3, 192 kbps or higher, stereo. Drop it in `audio/` and tell me the filenames.
