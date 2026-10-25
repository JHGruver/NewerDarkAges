# Site Audit: Where the Website Is Today

A top-down audit by the War Council, from what is in the repository now. Each seat grades its own lens and names one first fix. Fixes feed Phase 0 of the plan.

## Facts

| Item | Today |
| --- | --- |
| Characters with finished art | 84 of 147 (57 percent) |
| Art by people | Were-Creature 41 of 50 · Ghost 12 of 13 · Undead 12 of 13 · Forest Spirit 8 of 13 · Human 6 of 13 · Magic 3 of 13 · Vampire 1 of 13 · Eldritch 1 of 19 |
| Art on disk | 278 MB in the art folder; character images average about 1 MB each; no converted web versions |
| Public pages | World story, Characters, Lore, Vote, Monster Manual, Roadmap, Art Direction, Studio HQ, Team |
| Audience capture | No email signup, no analytics, no share tags, no custom domain |
| Where votes go | Only into each visitor's own browser, then a manual spreadsheet export |
| Repository | Public on GitHub, with the full prompts, the cast spreadsheet and the lore bible |
| Tests and automation | None: no automated checks, no build step, manual cache-busting |
| Revenue paths live | None |

## Grades

| Seat | Grade | Verdict |
| --- | --- | --- |
| Mordant, Chief Creative Officer | B+ | The identity is the asset. Protect it and finish what is nearly done. |
| Tithe, Chief Financial Officer | D | No product, no price, no break-even. Nothing can earn yet. |
| Gantry, Chief Operating Officer | C | Strong momentum, no dates, no owners, no capacity model. |
| Hawker, Chief Growth Officer | F | There is a site but no audience, and no way to find out. |
| Cipher, Chief Technology Officer | C+ | A good static prototype that is heavy and unmeasured. |
| Warden, Chief Legal and IP Officer | D | The public repo and the AI-art question are the biggest unforced risks. |
| Vulture, Chief Strategy Officer | B- | Too wide for two part-timers. Narrow to one season and win it. |

## Mordant: Chief Creative Officer (B+)

The identity is the asset. Protect it and finish what is nearly done.

- A coherent world, a strict art direction and a distinct palette system are rare at this stage. This is the strongest part of the project.
- Three peoples are almost complete (Were-Creature, Ghost, Undead). They can be a whole season now.
- 63 characters still show placeholder posters, which makes the character select feel unfinished.
- The Art Direction page and prompts name third-party works. That weakens the claim that the style is ours.

**First fix.** Finish 11 pairs to complete three peoples, then show only finished peoples by default.

## Tithe: Chief Financial Officer (D)

No product, no price, no break-even. Nothing can earn yet.

- There is no store, supporter page or pre-order. Revenue is zero by construction.
- Costs so far are time and API usage. No budget cap or cost record exists.
- The monetization stack in the business plan has no price attached to any item.

**First fix.** Set the $100 monthly cap, price five store items and open a supporter page.

## Gantry: Chief Operating Officer (C)

Strong momentum, no dates, no owners, no capacity model.

- The roadmap in the site lists tasks but has no owners, dates or hour estimates.
- The work has run through one person and one assistant. The second human has no assigned lane.
- The art is a single bottleneck and nothing yet schedules around it.

**First fix.** Use the plan in Studio HQ: owners, weeks and an hours-versus-capacity check per phase.

## Hawker: Chief Growth Officer (F)

There is a site but no audience, and no way to find out.

- No email signup, so a visitor who loves it cannot be reached again.
- No analytics, so nobody knows who visits or what they do.
- No share tags: a link posted anywhere shows no image or description.
- Votes live in each visitor's browser and are lost to us unless they export and send a file.

**First fix.** Add signup, analytics, share tags and a shared vote collection in the first two weeks.

## Cipher: Chief Technology Officer (C+)

A good static prototype that is heavy and unmeasured.

- Images are unoptimized: about 1 MB each, 170 MB in the main art folder, no responsive sizes.
- No build step, no automated tests, manual cache-busting, one large script per feature.
- Hosting is GitHub Pages from a public repo, which is cheap and good enough for now.
- Accessibility is thin: few labels outside the header, and the canvas scene has no static fallback.

**First fix.** Add an image build (WebP, two sizes), automated route checks and the share tags.

## Warden: Chief Legal and IP Officer (D)

The public repo and the AI-art question are the biggest unforced risks.

- The repository is public and includes the full prompts, cast sheet and lore, which lets anyone reproduce the pipeline.
- Third-party works and artists are named in several public files, including the Art Direction page and the prompt lint.
- Ownership of AI-generated art is unresolved, and platforms may require AI disclosure.
- No privacy page or terms exist, and both are required before collecting email addresses.
- The rights to the music tracks are not recorded.

**First fix.** Scrub the third-party names, move the prompt files out of the public site, add privacy and terms, and spend one attorney hour.

## Vulture: Chief Strategy Officer (B-)

Too wide for two part-timers. Narrow to one season and win it.

- Eight peoples, 147 characters, comics, a board game and an MMO is a studio-sized scope for 13 human hours a week.
- Season One of Were-Creature, Ghost and Undead is 76 characters with 65 already finished. That is a real product.
- The MMO should be a written go or no-go at week 78, never a promise.
- The vote is the best hook in the project: it turns visitors into participants.

**First fix.** Declare Season One, defer the other five peoples to Season Two and hold the MMO as a gated option.

