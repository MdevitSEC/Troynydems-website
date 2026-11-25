"""Build the Holiday Posts artifact page.

  python holiday-posts/page/build.py holiday-posts OUT.html holiday-posts/page/template.html

Mark posts already scheduled on Facebook in the SCHEDULED set in template.html.
"""
import json, re, sys, html
src = sys.argv[1]; out = sys.argv[2]
readme = open(f"{src}/README.md", encoding="utf-8").read()
meta = {p["id"]: p for p in json.load(open(f"{src}/posts.json", encoding="utf-8"))}
posts = []
for m in re.finditer(r"^### (.+?) · (.+?)\nGraphic: `(.+?)`\n\n((?:>.*\n?)+)", readme, re.M):
    name, when, file, block = m.groups()
    copy = "\n".join(re.sub(r"^> ?", "", l) for l in block.strip().split("\n"))
    pid = file[:-4]; p = meta[pid]
    alt = f'Graphic reading "{p["kicker"]}. {p["headline"]}. {p["sub"]}." Troy Democratic Committee logo and troynydems.com.'
    posts.append({"id": pid, "name": name, "when": when, "date": pid[:10], "file": "graphics/" + file, "copy": copy, "alt": alt})
assert len(posts) == len(meta), (len(posts), len(meta))
tpl = open(sys.argv[3], encoding="utf-8").read()
open(out, "w", encoding="utf-8").write(tpl.replace("/*DATA*/[]", json.dumps(posts, ensure_ascii=False).replace("</", "<\\/")))
print(len(posts), "posts")
