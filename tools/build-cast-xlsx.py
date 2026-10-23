#!/usr/bin/env python3
"""Builds CAST.xlsx (the production workbook) from CAST.json. Sheets: START HERE, Character Art Roster, FOREGROUND/BACKGROUND CHAT PROMPT,
PRODUCTION TRACKER, ART DIRECTION, BRAND LOCK, PEOPLES & PALETTE, LORE LINK, VALIDATION. Needs the project venv (openpyxl)."""
import json, os, itertools
import numpy as np
from openpyxl import Workbook
from openpyxl.styles import Font, PatternFill, Alignment, Border, Side
from openpyxl.utils import get_column_letter
from openpyxl.worksheet.datavalidation import DataValidation
from openpyxl.formatting.rule import CellIsRule

root = os.path.join(os.path.dirname(os.path.abspath(__file__)), "..")
D = json.load(open(os.path.join(root, "CAST.json"))); CH = D["characters"]; AD = D["artDirection"]
HDR = PatternFill("solid", fgColor="1F1F2B"); HF = Font(bold=True, color="FFFFFF"); thin = Side(style="thin", color="DDDDDD")
def fill(h): return PatternFill("solid", fgColor=h.lstrip("#").upper())
def lum(h): h = h.lstrip("#"); r, g, b = (int(h[i:i+2], 16) for i in (0, 2, 4)); return 0.299 * r + 0.587 * g + 0.114 * b
def lin(c): c = np.array(c) / 255; return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)
def lab(h):
    h = h.lstrip("#"); l = lin([int(h[i:i+2], 16) for i in (0, 2, 4)])
    M1 = np.array([[0.4122214708, 0.5363325363, 0.0514459929], [0.2119034982, 0.6806995451, 0.1073969566], [0.0883024619, 0.2817188376, 0.6299787005]]); lms = np.cbrt(M1 @ l)
    return np.array([[0.2104542553, 0.7936177850, -0.0040720468], [1.9779984951, -2.4285922050, 0.4505937099], [0.0259040371, 0.7827717662, -0.8086757660]]) @ lms

def style(ws, widths, hdr_row=1, wrap=(), swatch=(), freeze="D2"):
    for c in ws[hdr_row]: c.fill = HDR; c.font = HF; c.alignment = Alignment(vertical="center", wrap_text=True)
    for i, w in enumerate(widths, 1): ws.column_dimensions[get_column_letter(i)].width = w
    for row in ws.iter_rows(min_row=hdr_row + 1):
        for c in row:
            c.alignment = Alignment(vertical="top", wrap_text=((c.column - 1) in wrap)); c.border = Border(bottom=thin)
            if (c.column - 1) in swatch and isinstance(c.value, str) and c.value.startswith("#"):
                c.fill = fill(c.value); c.font = Font(color="000000" if lum(c.value) > 140 else "FFFFFF", bold=True)
    if freeze: ws.freeze_panes = freeze
    ws.auto_filter.ref = ws.dimensions

wb = Workbook()

# ------------------------------------------------------------------ START HERE
ws = wb.active; ws.title = "START HERE"
n_art = sum(1 for c in CH if c.get("art"))
for r in [
    ["NEWER DARK AGES: PRODUCTION WORKBOOK", "Generated from the site data, so it never drifts from the game. Rebuild any time with: node tools/build-cast.cjs"],
    ["Counts", f"{len(CH)} characters across {len(D['peoples'])} peoples (People > Class > Subclass). {sum(1 for c in CH if c['role']=='Combat')} combat, {sum(1 for c in CH if c['role']=='Support')} support. {n_art} have final art."],
    ["One row = one character", "Sheet 'Character Art Roster'. Every attribute, the exact three hex colors, where each color is used, both prompts, filenames and status."],
    ["Character prompt", "Column 'CHARACTER prompt'. Self-contained (under 4000 characters). Use with gpt-image (1024x1536, transparent PNG) or paste into a chat with the approved references attached."],
    ["Background prompt", "Column 'BACKGROUND prompt'. Environment only: no living beings, no figures, no silhouettes. Open center for the character."],
    ["Two-chat workflow", "FOREGROUND CHAT PROMPT and BACKGROUND CHAT PROMPT sheets hold the briefing to paste into two fresh chats. Use the same ID in both."],
    ["Automated workflow", "node tools/generate-character.mjs <id>: generates both images with the approved characters as style references, vets each attempt against the Samurai Jack check, retries on failure, and saves a vet report."],
    ["Style authority", "ART DIRECTION sheet = your Official Character Art Direction (v1.0) plus the style lock from the earlier workbook. BRAND LOCK = the short mandatory list."],
    ["Approved benchmarks", "Human Interceptors, Vampire Owlwing Watch and Were-Creature Moonrunners are the graphic-style targets (silhouette, flat shapes, heavy black, stark white)."],
    ["Colors", "Exactly three accents per character (60/30/10) plus black, white, grey. The People background color is for backgrounds and UI only, never a character color."],
    ["Status", "PRODUCTION TRACKER is pre-filled from the real art on disk and the last vet report. VALIDATION lists consistency checks (palette uniqueness, ratio, prompt length)."],
    ["What to reject", "A generic version of the species; a glossy or 3D or anime render; gradients or glow; a cropped limb; a checkerboard baked into the pixels; a figure in a background; wrong gender, gear, pose or colors."],
]: ws.append(r)
ws.column_dimensions["A"].width = 30; ws.column_dimensions["B"].width = 140
for row in ws.iter_rows():
    row[0].font = Font(bold=True); row[0].fill = HDR if row[0].row == 1 else PatternFill(); 
    if row[0].row == 1: row[0].font = HF; row[1].font = HF; row[1].fill = HDR
    for c in row: c.alignment = Alignment(wrap_text=True, vertical="top")

# ------------------------------------------------------------------ ROSTER
ws = wb.create_sheet("Character Art Roster")
H = ["ID", "Slug", "People", "Class", "Subclass (character)", "Character", "Gender", "Apparent age", "Physique", "Size", "Mobility", "Heritage inspiration", "Canon status", "Tagline", "Type", "Role",
     "Signature gear", "Companion", "Unique pose", "Facial expression", "Wardrobe", "Palette (main / secondary / pop)", "Main (60%)", "Secondary (30%)", "Pop (10%)", "Main used on", "Secondary used on", "Pop used on", "Natural base tones",
     "Silhouette hook", "Shape language", "2D silhouette & simplification", "SJ check 1: black fill", "SJ check 2: few shapes", "SJ check 3: thumbnail", "SJ check 4: flat colors", "SJ check 5: distinctive", "Visual benchmark",
     "CHARACTER prompt (transparent art)", "BACKGROUND prompt (stippled ink)", "Environment concept", "People background color", "Midground", "Foreground", "Background items",
     "Character filename", "Background filename", "Source appearance", "Source overview", "Source abilities", "Strengths", "Weaknesses", "Lore placement", "Design status", "Prompt length (char / bg)"]
for c in CH:
    cut = c["wardrobe"].split(",")[:3]
    canon = "creative casting; adapt to fictional world" if c["ethnicity"].endswith("(not human)") is False else "species design"
    ws.append([c["nda"], c["id"], c["people"], c["cls"], c["subclass"], c["name"], c["gender"], c["age"], c["physique"], c["size"], c["mobility"], c["ethnicity"], canon, c["tagline"], c["type"], c["role"],
        c["accessories"], c.get("companion", ""), c["pose"], c["expression"], c["wardrobe"], f'{c["main"]} / {c["secondary"]} / {c["pop"]}', c["main"], c["secondary"], c["pop"], c["mainUse"], c["secondaryUse"], c["popUse"], c["baseTones"],
        c["silhouette"], c["shape"], f'Cut 60-75% of source micro-detail. Keep 2-3 costume masses ({"; ".join(x.strip() for x in cut)}) and one hero prop ({c["accessories"].split(";")[0]}). Shape language: {c["shape"]}. Two flat tonal planes per material.',
        *c["jack"], "Approved: Human Interceptors, Vampire Owlwing Watch, Were Moonrunners", c["charPrompt"], c["bgPrompt"], c["scene"], c["peopleColor"], c["midground"], c["foreground"], c["bgItems"],
        c["fileChar"], c["fileBg"], c.get("look", ""), c.get("summary", ""), c.get("abilities", ""), c.get("strengths", ""), c.get("weaknesses", ""), c.get("lorePlace", ""),
        "Final art accepted" if c.get("art") else "Prompt ready", f'{len(c["charPrompt"])} / {len(c["bgPrompt"])}'])
widths = [6, 18, 14, 18, 22, 22, 10, 11, 22, 8, 11, 26, 20, 28, 11, 9, 34, 26, 38, 22, 52, 28, 11, 11, 11, 28, 28, 28, 30, 44, 30, 50, 40, 40, 36, 40, 40, 30, 90, 90, 44, 12, 34, 30, 36, 34, 34, 44, 40, 40, 30, 30, 44, 18, 14]
style(ws, widths, wrap={8, 9, 11, 13, 16, 17, 18, 19, 20, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 47, 48, 49, 50, 51}, swatch={22, 23, 24, 41}, freeze="G2")
ws.row_dimensions[1].height = 34

# ------------------------------------------------------------------ CHAT PROMPTS
FG = """You are the dedicated FOREGROUND CHARACTER ARTIST for Newer Dark Ages. The attached CAST.xlsx is the ONLY source of truth for character identity. Read the workbook before generating. The characters are on the sheet 'Character Art Roster' (one row each: People > Class > Subclass), with gender, apparent age, physique, heritage, pose, gear, exact hex palette, color usage and the authoritative prompt in the column 'CHARACTER prompt (transparent art)'.

DESIGN LANGUAGE (Official Character Art Direction v1.0): Samurai Jack flat geometric cel animation + Sin City heavy solid black shapes and stark white highlights + 1980s glam-gothic silhouettes + salvaged retro-cyberpunk props. Design for silhouette first, character second, detail last. REQUIRED: a strong recognizable full-body silhouette; flat geometric color shapes; angular construction and deliberate exaggeration; clean minimal contour lines; heavy solid black shapes; stark white highlights; at most two tonal planes per material; clear separation between overlapping forms; readable anatomy and gestures; stylized expressive faces; strong negative space around limbs and gear. FORBIDDEN: photorealism, 3D or CGI, painterly brushwork, watercolor or oil texture, anime-style fine detail, airbrushing, gradients, bloom or lens flare or realistic glow (any glow is a flat solid shape), fabric textures, tiny costume decorations, individual hairs or fur strands, realistic reflections, generic fantasy concept art.

SIMPLIFICATION (this is what makes it pass the Samurai Jack check): the figure is only about 12 to 15 big shapes; one thin uniform black outline; flat color plus at most one flat shadow per material; a minimal face (simple eye shapes, one nose line, one mouth line, no eyelashes, no eye shine); hair as two to four big solid shapes, never strands or braids; fabric as large angular planes with no patterns, trim, tassels, studs, buckles or ragged ribbons; metal as plain flat shapes; one hero prop gets the detail and everything else is a plain silhouette shape. Cut about 70% of the source costume detail.\n\nCOLOR: exactly the three hex colors in the row (main about 60%, secondary about 30%, pop about 10%) plus black, white and neutral grey. Natural skin or fur base tones allowed, simplified and muted. No other saturated colors. The People background color is NEVER used on the character.

OUTPUT: one FULL-BODY SINGLE CHARACTER on a TRUE TRANSPARENT alpha background (PNG, 3:4 portrait). No backdrop of any color (black is not transparency), no checkerboard, floor, shadow, scenery, border, text, watermark or extra characters. Only worn or hand-held items and any small companion named in the row. All limbs and gear inside the canvas.

THE SAMURAI JACK CHECK (apply before you answer; revise if any answer is no): 1. Would the silhouette remain recognizable if filled entirely with black? 2. Could it be animated with relatively few large shapes? 3. Is it readable at thumbnail size? 4. Are the colors flat and intentionally separated? 5. Is it distinctive without elaborate surface detail?

WORKFLOW: select the row by ID or exact name. Read ALL fields of that row. Do not fall back to a stereotypical version of the species. After rendering, run the five-question check out loud and state honestly which row details (gender, age, gear, pose, colors) the image got right or wrong. The background prompt is NOT part of this image.

START: confirm you have read the workbook, then ask which character ID to generate first, unless my next message already names one."""
BG = """You are the dedicated BACKGROUND ENVIRONMENT ARTIST for Newer Dark Ages. The attached CAST.xlsx is the source of truth. Use the sheet 'Character Art Roster' and the column 'BACKGROUND prompt (stippled ink)' for the chosen ID, plus 'PEOPLES & PALETTE' for the people wash color.

STYLE: a heavily stippled charcoal and ink illustration on toned paper, like a graphic-novel panel with Sin City contrast: dense dotted halftone and grainy ink texture over every surface, bold black ink linework, hand-drawn painted shapes. NOT photorealistic, NOT a 3D render, NOT smooth digital concept art, no lens flare. 1980s post-apocalyptic neo-retro cyberpunk dark-age mood. 16:9 landscape (1536x1024), opaque, full bleed.

COLOR: the People color washes about 65% of the image (sky, fog, ground, walls, haze). The character's three hex colors appear as clearly visible accents (about 20% combined): main for the largest glowing sources and surfaces, secondary for medium panels, banners and lights, pop for small sparks and glints, reflected on wet ground. Black and white for linework and deep shadows. Never let the image go mostly grey.

COMPOSITION: horizon at one-third height, a moon upper-left, an open, lower-contrast empty area in the lower center where the character will be placed, props and detail pushed to the left and right edges. Large props the character cannot wear (vehicles, machines, towers, thrones, stages) belong here, never in a figure's hands.

NEVER: people, creatures, animals, faces, figures, silhouettes of beings, character-shaped forms, text, logos or watermarks. After rendering, state honestly whether the style (stippled ink, not photoreal), the wash color and the open center are right.

START: confirm you have read the workbook, then ask for the character ID."""
for name, txt, note in (("FOREGROUND CHAT PROMPT", FG, "Attach CAST.xlsx and the three approved character images (Interceptors, Owlwing Watch, Moonrunners) as style references."), ("BACKGROUND CHAT PROMPT", BG, "Attach CAST.xlsx and one or two approved backgrounds as style references. Use the SAME ID as the foreground chat.")):
    w = wb.create_sheet(name); w.append(["COPY THE COMPLETE PROMPT IN A2", "Note"]); w.append([txt, note])
    w.column_dimensions["A"].width = 150; w.column_dimensions["B"].width = 50
    for c in w[1]: c.fill = HDR; c.font = HF
    for c in w[2]: c.alignment = Alignment(wrap_text=True, vertical="top")

# ------------------------------------------------------------------ PRODUCTION TRACKER
ws = wb.create_sheet("PRODUCTION TRACKER")
ws.append(["ID", "People", "Class", "Character", "Foreground status", "Background status", "Foreground asset", "Background asset", "Samurai Jack check (vision + pixels)", "Vet score", "Foreground verification", "Background verification", "Notes"])
for c in CH:
    v = c.get("vet") or {}
    done = bool(c.get("art"))
    ws.append([c["nda"], c["people"], c["cls"], c["name"], "Accepted" if done else "Not started", "Accepted" if done else "Not started", c["art"]["src"] if done else "", c["art"]["bg"] if done else "",
               ("passed" if v.get("passed") else "needs work") if v else ("accepted by author" if done else "not checked"), v.get("overall", ""), "Author approved" if done else "Not checked", "Author approved" if done else "Not checked", v.get("summary", "") if v else ""])
style(ws, [6, 14, 18, 24, 16, 16, 38, 40, 26, 9, 20, 20, 60], wrap={12}, freeze="E2")
dv = DataValidation(type="list", formula1='"Not started,In progress,Generated,Needs revision,Accepted"', allow_blank=True); ws.add_data_validation(dv); dv.add(f"E2:F{len(CH)+1}")
dv2 = DataValidation(type="list", formula1='"Not checked,Failed,Passed,Author approved"', allow_blank=True); ws.add_data_validation(dv2); dv2.add(f"K2:L{len(CH)+1}")
for col in ("E", "F"):
    rng = f"{col}2:{col}{len(CH)+1}"
    ws.conditional_formatting.add(rng, CellIsRule(operator="equal", formula=['"Accepted"'], fill=PatternFill("solid", bgColor="C6EFCE")))
    ws.conditional_formatting.add(rng, CellIsRule(operator="equal", formula=['"Needs revision"'], fill=PatternFill("solid", bgColor="FFC7CE")))
    ws.conditional_formatting.add(rng, CellIsRule(operator="equal", formula=['"In progress"'], fill=PatternFill("solid", bgColor="FFEB9C")))

# ------------------------------------------------------------------ ART DIRECTION + BRAND LOCK
ws = wb.create_sheet("ART DIRECTION")
ws.append(["Section", "Rule"])
for x in ["Samurai Jack: strong silhouettes, angular geometry, flat colors, minimalist animation design.", "Sin City: heavy black shapes, stark contrast, dramatic negative space.", "1980s glam-gothic fantasy: theatrical silhouettes, long coats, exaggerated collars, striking accessories, dark romanticism.", "Post-apocalyptic retro-cyberpunk: salvaged electronics, worn machinery, analog instruments, repurposed materials.", "Classic fantasy: distinct races, recognizable professions, supernatural abilities, mythical creatures, cultural traditions.", "Core principle: design for silhouette first, character second, detail last."]: ws.append(["Creative vision", x])
for lbl, key in (("Required", "required"), ("Forbidden", "forbidden"), ("Samurai Jack check", "jackCheck")):
    for x in AD[key]: ws.append([lbl, x])
for k, x in AD["shape"].items(): ws.append(["Shape language: " + k, x])
for lbl, x in [("Color system", "Exactly three accent colors per character: main ~60%, secondary ~30%, pop ~10%. Black, white and neutral grey allowed."), ("Color system", "Use the exact hex values. No extra saturated colors. Flat fills, no gradients. Do not let the pop color dominate."), ("Color system", "Natural skin, fur and species anatomy may use simplified neutral or natural base tones, never competing saturated colors."), ("Color system", "The People background color is reserved for backgrounds and UI; it is NOT a fourth character color; characters stay isolated on transparency."),
               ("Style lock (earlier workbook)", "Must look physically animatable as hand-drawn geometric 2D cel art, NOT rendered concept art."), ("Style lock (earlier workbook)", "Detail budget: cut 60-75% of source micro-detail; 2-3 main costume masses plus a hero prop."), ("Style lock (earlier workbook)", "Silhouette test: readable at 150-pixel height against a solid-color silhouette."), ("Style lock (earlier workbook)", "Fur in jagged groups, leaves in polygon clumps, bones as bold masses. Costume: replace patterned textiles and filigree with simple high-contrast graphic symbols."), ("Style lock (earlier workbook)", "Magic and light: flat-shaped ribbons, stars, flames, rings; no particle haze, painted bloom or spectral fog."),
               ("Backgrounds", "Stippled charcoal and ink graphic-novel panel, opaque, full bleed, 1536x1024, NO living or undead beings and no shadows of beings, open center for the character."), ("Section 4 (Character Composition)", "Not yet received from the author; the standard foreground deliverable is currently: one full-body figure, 1024x1536 (3:4), true transparent PNG.")]: ws.append([lbl, x])
style(ws, [32, 130], wrap={1}, freeze="A2")
ws = wb.create_sheet("BRAND LOCK")
ws.append(["NEWER DARK AGES: FOREGROUND BRAND LOCK", "MANDATORY"])
for r in [["World", "Post-apocalyptic dark fantasy x retro-1980s cyberpunk x glam-gothic x salvaged technology"], ["Shape language", "Samurai Jack: angular, flat, geometric, readable black silhouette; animation-friendly"], ["Ink language", "Sin City: heavy solid black shapes, stark white highlights and negative space"], ["Palette", "Three exact accent hex colors per character, ~60/30/10; black/white/grey permitted"], ["Tonal limit", "Two flat tonal planes per material; no gradients, painterly textures, photorealism or 3D"], ["Format", "1024 x 1536 PNG; true transparent alpha; all body parts and companions visible"], ["Never include", "Background, floor, shadow, scenery, buildings, vehicles, furniture, large freestanding props, text or checkerboard"], ["Props", "Only worn or handheld items; requested small animal companions allowed"], ["People wash", "Reserved for the environment only; never a backdrop behind the character"], ["Background layer", "Separate landscape 1536 x 1024, stippled charcoal and ink, clear central third, no figures"],
          ["Wizard", "Study power: science, formulae, research and preparation"], ["Witch", "Cultivate power: nature, folk ritual, spirits and catalysts"], ["Warlock", "Bargain for power: pacts, corruption and dangerous costs"], ["Mage", "Embody power: innate channeling, resonance and overload"], ["Custom designs", "Sticky Wizard: hatless lanky wizard plus hat-wearing frog. Spore Coven: red-dreadlocked bearded man and chef-hatted snail with spatula. Hot-Spring Healers: capybara matron with a crystal-belted raccoon assistant."]]: ws.append(r)
style(ws, [28, 130], wrap={1}, freeze="A2")

# ------------------------------------------------------------------ PEOPLES & PALETTE
ws = wb.create_sheet("PEOPLES & PALETTE")
ws.append(["ID", "People", "Background color", "Color name", "Background setting", "Tagline", "Characters", "Combat", "Support"])
for p in D["peoples"]:
    ch = [c for c in CH if c["peopleId"] == p["id"]]
    ws.append([p["id"], p["name"], p["color"], p["colorName"], p["scene"], p["tagline"], len(ch), sum(1 for c in ch if c["role"] == "Combat"), sum(1 for c in ch if c["role"] == "Support")])
style(ws, [12, 18, 16, 14, 80, 44, 11, 9, 9], wrap={4, 5}, swatch={2}, freeze="A2")
ws.append([]); ws.append(["Character palettes (main / secondary / pop) with the closest other main color (OKLab distance; 0.05+ is clearly distinct)"]); start = ws.max_row + 1
ws.append(["ID", "Character", "People", "Main", "Secondary", "Pop", "Closest other main", "Distance"])
labs = {c["id"]: lab(c["main"]) for c in CH}
for c in CH:
    near = min(((float(np.linalg.norm(labs[c["id"]] - labs[o["id"]])), o["name"]) for o in CH if o["id"] != c["id"]))
    ws.append([c["nda"], c["name"], c["people"], c["main"], c["secondary"], c["pop"], near[1], round(near[0], 3)])
for row in ws.iter_rows(min_row=start + 1):
    for cell in row[3:6]:
        if isinstance(cell.value, str) and cell.value.startswith("#"): cell.fill = fill(cell.value); cell.font = Font(color="000000" if lum(cell.value) > 140 else "FFFFFF", bold=True)
for cell in ws[start]: cell.fill = HDR; cell.font = HF

# ------------------------------------------------------------------ LORE LINK
if D.get("lore"):
    ws = wb.create_sheet("LORE LINK")
    ws.append(["Named story character", "Tribe", "Rank", "Age", "Status", "Power", "Game class", "Role in the story", "Notes"])
    for c in D["lore"]["cast"]: ws.append([c["name"], c["tribe"], c["rank"], c.get("age", ""), c["status"], c.get("powers", ""), f'{c["people"]} > {c["cls"]} > {c["sub"]}', c["role"], c.get("notes", "")])
    style(ws, [20, 10, 16, 6, 8, 26, 36, 50, 60], wrap={7, 8}, freeze="B2")
    ws.append([]); ws.append(["How each people fits the world"]); 
    for pid, pl in D["lore"]["placements"].items(): ws.append([pid, pl["place"], "", "", "", "", "", pl["text"]])

# ------------------------------------------------------------------ VALIDATION
ws = wb.create_sheet("VALIDATION")
ws.append(["Check", "Result", "Detail"])
mains = [c["main"] for c in CH]; dup = len(mains) - len(set(mains))
close = sorted(((float(np.linalg.norm(labs[a["id"]] - labs[b["id"]])), a["name"], b["name"]) for a, b in itertools.combinations(CH, 2)))[:3]
support = sum(1 for c in CH if c["role"] == "Support")
for r in [["Characters", len(CH), "one row each"], ["Combat / support ratio", f"{100*(len(CH)-support)/len(CH):.1f}% combat", "target about 80%"], ["Duplicate main colors", dup, "should be 0"],
          ["Closest two main colors", f"{close[0][0]:.3f}", f"{close[0][1]} vs {close[0][2]} (0.05+ is distinct)"], ["Longest character prompt", max(len(c["charPrompt"]) for c in CH), "limit 4000"], ["Longest background prompt", max(len(c["bgPrompt"]) for c in CH), "limit 4000"],
          ["Missing required fields", sum(1 for c in CH for k in ("gender", "age", "physique", "pose", "expression", "wardrobe", "main", "secondary", "pop") if not c.get(k)), "should be 0"], ["With final art", sum(1 for c in CH if c.get("art")), f"of {len(CH)}"],
          ["Vetted by the pipeline", sum(1 for c in CH if c.get("vet")), "see PRODUCTION TRACKER"]]: ws.append(r)
style(ws, [32, 20, 70], freeze="A2")

wb.save(os.path.join(root, "CAST.xlsx")); print("CAST.xlsx written:", len(CH), "rows,", len(wb.sheetnames), "sheets")
