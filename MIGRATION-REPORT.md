# Magic Peoples Migration and Validation Report

## Result
- **Update:** the four are now one people, **Magic** (Violet), with four traditions as tags on its 12 subclasses. The roster is 8 peoples, 50 subclasses, 150 characters.
- **4 peoples** (Wizard, Witch, Warlock, Mage) x **3 subclasses** x **3 specializations** = **36 characters**, all live in `data-magic.js`.
- Whole roster: 11 peoples, 50 subclasses, 150 characters, 120 combat / 30 support (80.0%).
- Rule encoded in each people's text: Wizards study power, Witches cultivate it, Warlocks bargain for it, Mages embody it.

## Migration
| Old | New | Notes |
|---|---|---|
| Combined "Witch / Wizard" people | Split into Wizard, Witch, Warlock, Mage | Old group archived in `data-archive.js` (`ARCHIVE.witchWizard`) |
| Astral Cartographers, Moonwell Sisters, Ashen Pactkeepers, Stormborn | Retired | These names never existed in this build's active data (grep found none). Names recorded in `ARCHIVE.retiredSubclasses`. |
| Dial-Turners | Frequency Interceptors (Wizard > Signal Savants) | Reviewed against Scraphex Witches: kept with Wizards because they study signals. Art and trio preserved. |
| Frequency Hexers concept | Dial-Hexers (Witch > Scraphex Witches) | Cultivates the same craft as a folk hex |
| Other old witch characters | Archived (`ARCHIVE.meta`, `ARCHIVE.spec`) | Art assets untouched |
| Rootlink Warlocks (Forest Spirit) | Unchanged | Reviewed for overlap with Thornblood Coven: different source (forest network vs ancestors), not auto-migrated |
| Marvella / Mirabelle (manual) | Marvella now a Mage; text updated | |
| **Sticky Wizard** (Mike Mears) | Slime-Sling Alchemists, Wizard > Sticky Wizards | Frog wizard mascot with real gameplay (goo slings, adhesive control); credited in lore and `who` |

## Validation (scripted, `check.js`)
- Duplicate ids/names: none. Missing meta/art spec: none. Role/type mismatches: none. Missing icons: none.
- Prompt lint (14 checks incl. Samurai Jack style, full body, alpha transparency, trio, banned words): **0 failures** on all 150.
- Colors: all 150 main colors unique (min OKLab distance 0.053); some magic trios used fallback picks.
- Overlap review: each specialization has its own type/physique/size/mobility combination within its subclass and its own signature gear; abilities are named per character.
- Casting: Male 67, Female 63, Nonbinary 20; ethnicity, pose and expression are unique per character in `data-cast.js` (see `CAST.md`).
- Lore: each subclass follows its people's power source; Warlocks always carry a price, Mages need no tool.

## New files
`data-magic.js`, `data-archive.js` (not loaded), `data-cast.js` (not loaded), `CAST.md` (150-character bible with DALL·E prompts), this report.
