#!/usr/bin/env python3
"""Builds data-votes.js (the results dashboard's data) from exported vote spreadsheets.
Usage: python3 tools/build-votes-data.py Jacob=path/to/jacob.xlsx Mike=path/to/voter.xlsx [...]
Each spreadsheet is a voter's export from the vote page (sheet 'Votes')."""
import sys, json, os
sys.path.insert(0, os.path.dirname(__file__))
from xlsx_read import read
SCORE = {"Super Like": 2, "Like": 1, "Dislike": -1}
voters, votes, comments = [], {}, []
for arg in sys.argv[1:]:
    name, path = arg.split("=", 1)
    rows = read(path)["Votes"][1:]
    vi = len(voters); voters.append({"id": name.lower(), "name": name, "n": len(rows), "at": max((r.get("B") or "")[:10] for r in rows)})
    for r in rows:
        s = SCORE.get(r["G"], 0)
        votes.setdefault(r["C"], [None] * 0)
        v = votes[r["C"]]
        while len(v) < vi: v.append(None)
        v.append(s)
        if r.get("I"): comments.append({"id": r["C"], "by": name, "v": s, "t": r["I"]})
for v in votes.values():
    while len(v) < len(voters): v.append(None)
out = "// RESULTS DASHBOARD DATA (#/vote). Built by tools/build-votes-data.py from the voters' exported spreadsheets.\n// votes[characterId] = [score per voter, in the order of voters]; score: super 2, like 1, dislike -1.\nwindow.VOTE_DATA = " + json.dumps({"voters": voters, "votes": votes, "comments": comments}, ensure_ascii=False, separators=(",", ":")) + ";\n"
open(os.path.join(os.path.dirname(__file__), "..", "data-votes.js"), "w").write(out)
print(len(votes), "characters,", len(voters), "voters,", len(comments), "comments")
