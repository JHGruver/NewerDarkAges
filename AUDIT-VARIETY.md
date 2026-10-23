# Variety audit: poses, physique and ages (Oct 23, 2026)

**Scope:** all 126 characters. The 16 characters with finished art keep the pose, physique and age that match their art. The other 110 were rewritten.

## What the audit found
- **Physique:** 5 exact duplicates ("broad and armored", "tall and elegant", "slim and quick", "slim and winged", "tall, faceless and long-limbed"), and most entries were 2 to 4 vague words, so the image model fell back to a default body. The most common words were tall, lean, armored and slim.
- **Poses:** 28 of 126 were some version of "weapon or tool raised", and most were a standing, planted, mostly symmetrical stance. Many shared the same line of action, so a roster page would read as one pose repeated.
- **Ages:** 22 of 126 were "mid 60s" (a naming shortcut in the generator), and the Magic characters were nearly all in their twenties.
- **Classes with a repeat:** the Spider-kin, The Lingerers and Lich Bureaucracy each had two characters with the same pose family.

## What changed
- **Every physique is now unique** and specific: height in heads where it matters, a body shape (pear, inverted triangle, barrel, hourglass, rectangle, coat hanger), one proportion that breaks the silhouette (an oversized arm, a hump back, a head that turns around, feathery gills), and a posture.
- **Every pose is unique** and each has a *pose family* (line of action) so the roster has a spread of body lines. New column: "Pose family (line of action)" in `CAST.xlsx`.
- **Ages** are assigned deliberately, from early 20s to early 70s, instead of by a shortcut.
- No class now has two characters sharing a pose family (apart from the finished ones).

## Pose family spread (126 characters)
LEAN 16 · PLANTED 12 · STRIDE 10 · LUNGE 9 · TWIST 9 · HANG 8 · LEAP 8 · FLOAT 8 · KNEEL 6 · SPIN 6 · STOOP 6 · CROUCH 6 · SIT 5 · BALANCE 5 · RUN 5 · CRAWL 4 · SLIDE 2 · DIVE 2. Duplicate poses: 0. Duplicate physiques: 0.

Source of the rewrite: `tools/pose-physique-data.tsv` (id, age, pose family, physique, pose).
