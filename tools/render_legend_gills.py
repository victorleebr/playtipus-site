"""Renders img/genes_legend.png: the breeding bench's baby with Legendary axolotl gills, animated (8 frames a pet).
Run: python tools/render_legend_gills.py   (needs the game repo at C:/Projects/Playtipus for tools/pets2)
Pet j (0-255) = head, body, legs, tail in base 4 (0 Platypus, 1 Axolotl, 2 Fennec fox, 3 Saiga); the Special is always the gills.
Layout: 2 pets a row, 8 frames each (16 cells of 57 x 47); the crop matches img/genes.png exactly."""
import os, sys
RIG = r'C:\Projects\Playtipus\tools\pets2'
OUT = os.path.join(os.path.dirname(os.path.abspath(__file__)), '..', 'img', 'genes_legend.png')
sys.path.insert(0, RIG); os.chdir(RIG)
from PIL import Image
import rig
M = rig.M; Q = [M.P, M.A, M.F, M.S]; X, Y, NF = 6, 39, 8
sheet = Image.new('RGBA', (16 * 57, 128 * 47), (0, 0, 0, 0))
for j in range(256):
    h, b, l, t = (j >> 6) & 3, (j >> 4) & 3, (j >> 2) & 3, j & 3
    for f in range(NF):
        im = M.draw(Q[h], Q[b], 'side', dict(noshadow=True, gt=f / NF, t=int(round(f * 22 / NF))),
                    rig.look_of(Q[b], Q[l], Q[t], Q[1], legendary='gills'))
        sheet.paste(im.crop((X, Y, X + 57, Y + 47)), (((j & 1) * 8 + f) * 57, (j >> 1) * 47))
sheet.save(OUT, optimize=True)
