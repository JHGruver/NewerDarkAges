#!/usr/bin/env python3
"""Objective checks on a generated character portrait (transparent PNG). Prints JSON.
   usage: vet-pixels.py <png> <mainHex> <secondaryHex> <popHex>
Needs the project venv: python3 -m venv tools/.venv && tools/.venv/bin/pip install pillow numpy scipy openpyxl"""
import sys, json, os
import numpy as np
from PIL import Image
from scipy import ndimage as ndi

def hex2rgb(h): h = h.lstrip("#"); return np.array([int(h[i:i+2], 16) for i in (0, 2, 4)], float)
def srgb2lin(c): c = c / 255.0; return np.where(c <= 0.04045, c / 12.92, ((c + 0.055) / 1.055) ** 2.4)
def oklab(rgb):
    l = srgb2lin(rgb); M1 = np.array([[0.4122214708, 0.5363325363, 0.0514459929], [0.2119034982, 0.6806995451, 0.1073969566], [0.0883024619, 0.2817188376, 0.6299787005]])
    lms = np.cbrt(l @ M1.T); M2 = np.array([[0.2104542553, 0.7936177850, -0.0040720468], [1.9779984951, -2.4285922050, 0.4505937099], [0.0259040371, 0.7827717662, -0.8086757660]])
    return lms @ M2.T

im = Image.open(sys.argv[1]).convert("RGBA"); a = np.asarray(im); H, W = a.shape[:2]
alpha = a[:, :, 3]; opaque = alpha > 200; semi = (alpha > 10) & (alpha <= 200)
out = {"size": [W, H], "transparent_share": round(float((alpha < 10).mean()), 3), "semi_alpha_share": round(float(semi.mean()), 4)}
ys, xs = np.where(alpha > 10)
if len(xs) == 0: print(json.dumps({"error": "empty image"})); sys.exit(0)
x0, x1, y0, y1 = xs.min(), xs.max(), ys.min(), ys.max()
out["bbox_margin_pct"] = {"left": round(100 * x0 / W, 1), "right": round(100 * (W - 1 - x1) / W, 1), "top": round(100 * y0 / H, 1), "bottom": round(100 * (H - 1 - y1) / H, 1)}
edge = np.concatenate([alpha[0, :], alpha[-1, :], alpha[:, 0], alpha[:, -1]]) > 10
out["border_contact"] = round(float(edge.mean()), 4)       # share of the canvas border covered by the figure
out["touches_edge"] = bool(edge.mean() > 0.012)
out["fill_ratio"] = round(float(opaque.sum() / max(1, (x1 - x0 + 1) * (y1 - y0 + 1))), 3)   # how much of the bounding box the silhouette fills
lab_, ncomp = ndi.label(alpha > 10); sizes = ndi.sum(alpha > 10, lab_, range(1, ncomp + 1)) if ncomp else []
out["silhouette_pieces"] = int((np.array(sizes) > 0.003 * W * H).sum()) if ncomp else 0
rgb = a[:, :, :3][opaque].astype(float)
if len(rgb) < 100: print(json.dumps({**out, "error": "almost no opaque pixels"})); sys.exit(0)
# flatness: how many 4-bit colours cover 95% of the figure (flat cel art is low; painterly or shaded art is high)
q = (rgb // 16).astype(int); key = q[:, 0] * 256 + q[:, 1] * 16 + q[:, 2]; vals, counts = np.unique(key, return_counts=True)
order = np.argsort(-counts); cum = np.cumsum(counts[order]) / counts.sum(); out["colors_for_95pct"] = int(np.searchsorted(cum, 0.95) + 1); out["distinct_colors"] = int(len(vals))
# soft-gradient share: pixels with a small but non-zero local gradient (airbrushing, glow, shading ramps)
g = np.asarray(Image.open(sys.argv[1]).convert("RGB").convert("L"), float)
gx = ndi.sobel(g, 1) / 8; gy = ndi.sobel(g, 0) / 8; mag = np.hypot(gx, gy)
inner = ndi.binary_erosion(opaque, iterations=3)
if inner.sum() > 100:
    m = mag[inner]; out["soft_gradient_share"] = round(float(((m > 1.2) & (m < 9)).mean()), 3); out["flat_share"] = round(float((m <= 1.2).mean()), 3)
# palette adherence
labs = oklab(rgb); named = {n: oklab(hex2rgb(h)[None, :])[0] for n, h in zip(("main", "secondary", "pop"), sys.argv[2:5])}
cov = {}
for n, c in named.items(): cov[n] = round(float((np.linalg.norm(labs - c, axis=1) < 0.07).mean()), 3)
out["palette_coverage"] = cov
# foreign saturated colour: chromatic pixels that are far from all three assigned colours and not a natural skin/fur/leather hue
chroma = np.hypot(labs[:, 1], labs[:, 2]); hue = (np.degrees(np.arctan2(labs[:, 2], labs[:, 1])) + 360) % 360
near_assigned = np.min([np.linalg.norm(labs - c, axis=1) for c in named.values()], axis=0) < 0.10
natural = (hue > 20) & (hue < 110) & (labs[:, 0] < 0.8)       # warm browns, tans, ochres (skin, fur, leather)
foreign = (chroma > 0.10) & ~near_assigned & ~natural
out["foreign_saturated_share"] = round(float(foreign.mean()), 3)
# thumbnail read: silhouette still solid at 48px
sm = Image.fromarray((alpha > 10).astype(np.uint8) * 255).resize((48, int(48 * H / W)), Image.LANCZOS); sa = np.asarray(sm) > 128
out["thumbnail_fill"] = round(float(sa.mean()), 3)
# optional visual aids for the vision reviewer: --aids <dir> writes grey.png (on mid-grey), sil.png (black silhouette on white), thumb.png (80 px)
if "--aids" in sys.argv:
    d = sys.argv[sys.argv.index("--aids") + 1]; os.makedirs(d, exist_ok=True)
    big = im.copy(); big.thumbnail((900, 900)); g = Image.new("RGBA", big.size, (122, 122, 122, 255)); g.alpha_composite(big); g.convert("RGB").save(os.path.join(d, "grey.png"))
    sil = Image.new("RGB", big.size, (255, 255, 255)); blk = Image.new("RGB", big.size, (0, 0, 0)); sil.paste(blk, mask=big.getchannel("A").point(lambda v: 255 if v > 40 else 0)); sil.thumbnail((420, 420)); sil.save(os.path.join(d, "sil.png"))
    th = im.copy(); th.thumbnail((80, 120)); t = Image.new("RGBA", th.size, (122, 122, 122, 255)); t.alpha_composite(th); t.convert("RGB").resize((th.width * 2, th.height * 2), Image.NEAREST).save(os.path.join(d, "thumb.png"))
print(json.dumps(out))
