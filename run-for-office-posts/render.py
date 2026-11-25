"""Render run-for-office graphics (1080x1080) from posts.json.

  python run-for-office-posts/render.py              # render every post
  python run-for-office-posts/render.py invitation   # render posts whose id contains "invitation"

Each post in posts.json: id, photo (a file in images/), pos (CSS object-position for the
photo crop, default "center"), bw (true shows the photo in black and white), photo_h (photo height in px,
default 600; use a shorter one for wide group photos so nobody is cropped out), fit ("width" shows the whole width of
a wide group photo over a blurred copy instead of cropping it), kicker,
headline, sub, cta, size (headline px). Always look at the PNG afterward.
"""
import html
import json
import os
import shutil
import subprocess
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
SITE = os.path.dirname(HERE)
OUT_DIR = os.path.join(HERE, "graphics")
CHROME_PATHS = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
]


def main():
    match = sys.argv[1] if len(sys.argv) > 1 else ""
    posts = json.load(open(os.path.join(HERE, "posts.json"), encoding="utf-8"))
    tpl = open(os.path.join(HERE, "template.html"), encoding="utf-8").read()
    chrome = next((c for c in CHROME_PATHS if os.path.exists(c)), None)
    if not chrome:
        raise SystemExit("Chrome or Edge not found.")
    work = tempfile.mkdtemp()
    shutil.copy(os.path.join(SITE, "holiday-posts", "logo.png"), work)
    os.makedirs(OUT_DIR, exist_ok=True)

    for p in posts:
        if match not in p["id"]:
            continue
        shutil.copy(os.path.join(SITE, "images", p["photo"]), work)
        page = (tpl.replace("__PHOTO__", html.escape(p["photo"]))
                   .replace("__POS__", p.get("pos", "center"))
                   .replace("__FILTER__", "grayscale(1) contrast(1.05)" if p.get("bw") else "none")
                   .replace("__FILTER2__", "grayscale(1)" if p.get("bw") else "")
                   .replace("__FIT__", "wide" if p.get("fit") == "width" else "")
                   .replace("__PH__", str(p.get("photo_h", 600)))
                   .replace("__DT__", str(p.get("photo_h", 600) - 130))
                   .replace("__KICKER__", html.escape(p["kicker"]))
                   .replace("__HEADLINE__", html.escape(p["headline"]))
                   .replace("__SUB__", html.escape(p["sub"]))
                   .replace("__HS__", str(p.get("size", 96)))
                   .replace("__CTA__", html.escape(p["cta"])))
        src = os.path.join(work, p["id"] + ".html")
        open(src, "w", encoding="utf-8").write(page)
        tmp = os.path.join(work, p["id"] + ".png")
        subprocess.run([chrome, "--headless=new", "--disable-gpu", "--hide-scrollbars",
                        "--force-device-scale-factor=1", "--window-size=1080,1080",
                        "--virtual-time-budget=8000", f"--screenshot={tmp}",
                        "file:///" + src.replace("\\", "/")],
                       check=False, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        out = os.path.join(OUT_DIR, p["id"] + ".png")
        if not os.path.exists(tmp):
            print("FAIL " + out)
            continue
        shutil.copyfile(tmp, out)  # copy over instead of delete, so a file open elsewhere doesn't block it
        print("ok   " + out)


if __name__ == "__main__":
    main()
