"""Render holiday graphics (1080x1080) from posts.json.

  python holiday-posts/render.py            # render every post
  python holiday-posts/render.py flag-day   # render posts whose id contains "flag-day"

Each post in posts.json: id, kicker, headline, sub, size (headline px, default 140),
flag (true adds the red-and-white stripe and gold stars). Always look at the PNG afterward.
"""
import html
import json
import os
import shutil
import subprocess
import sys
import tempfile

HERE = os.path.dirname(os.path.abspath(__file__))
OUT_DIR = os.path.join(HERE, "graphics")
CHROME_PATHS = [
    r"C:\Program Files\Google\Chrome\Application\chrome.exe",
    r"C:\Program Files (x86)\Microsoft\Edge\Application\msedge.exe",
]
FLAG = '<div class="stripes"></div><div class="stars">&#9733;&#9733;&#9733;</div>'


def main():
    match = sys.argv[1] if len(sys.argv) > 1 else ""
    posts = json.load(open(os.path.join(HERE, "posts.json"), encoding="utf-8"))
    tpl = open(os.path.join(HERE, "template.html"), encoding="utf-8").read()
    chrome = next((c for c in CHROME_PATHS if os.path.exists(c)), None)
    if not chrome:
        raise SystemExit("Chrome or Edge not found.")
    work = tempfile.mkdtemp()
    shutil.copy(os.path.join(HERE, "logo.png"), work)
    os.makedirs(OUT_DIR, exist_ok=True)

    for p in posts:
        if match not in p["id"]:
            continue
        page = (tpl.replace("__KICKER__", html.escape(p["kicker"]))
                   .replace("__HEADLINE__", html.escape(p["headline"]))
                   .replace("__SUB__", html.escape(p["sub"]))
                   .replace("__HS__", str(p.get("size", 140)))
                   .replace("__FLAG__", FLAG if p.get("flag") else ""))
        src = os.path.join(work, p["id"] + ".html")
        open(src, "w", encoding="utf-8").write(page)
        out = os.path.join(OUT_DIR, p["id"] + ".png")
        if os.path.exists(out):
            os.remove(out)
        subprocess.run([chrome, "--headless=new", "--disable-gpu", "--hide-scrollbars",
                        "--force-device-scale-factor=1", "--window-size=1080,1080",
                        "--virtual-time-budget=8000", f"--screenshot={out}",
                        "file:///" + src.replace("\\", "/")],
                       check=False, stdout=subprocess.DEVNULL, stderr=subprocess.DEVNULL)
        print(("ok   " if os.path.exists(out) else "FAIL ") + out)


if __name__ == "__main__":
    main()
