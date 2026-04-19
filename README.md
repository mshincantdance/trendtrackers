# Trend Trackers — Student Hub

A self-contained student-facing web hub for the **Trend Trackers** PBL unit (Algebra 1 A1.3, Double Helix STEAM/PBL School, Athens GA).

## Files

| File | Purpose |
|------|---------|
| `index.html` | Main hub — all screens, styles, and logic |
| `hub-data.js` | All data: team links, protocols, signals, rules, RQ revisions |

## How to use

### Option A — Open directly
Download both files into the same folder. Open `index.html` in Chrome or any modern browser. No server needed.

### Option B — Host on GitHub Pages
1. Upload both files to a GitHub repository
2. Go to **Settings → Pages → Deploy from branch → main → / (root)**
3. Share the `https://yourusername.github.io/repo-name/` URL with students

### Option C — Host anywhere
Upload both files to any static host (Netlify, Vercel, Google Sites custom embed, etc.).

---

## Teams

| Team | Topic | Color |
|------|-------|-------|
| 🏛️ Archer | UGA's impact on Athens-Clarke County | Amber |
| 💊 Julia + Peter | Substance use and youth in Clarke County | Blue |
| 🏘️ Rose + Zuzu | East side vs. West side disparities | Rose |
| 🌿 Wyatt + Ora | CO₂ emissions and water quality | Green |

---

## Screens

1. **Team Selector** — students pick their team; UI shifts to team accent color
2. **Launch Pad Home** — 5 Rules card, data links (team → Athens → general), question card, checklist
3. **Our Question** — signal rotator (11 data flags), condensed links, RQ revision timeline + form
4. **Stuck Flow** — 8 stuck scenarios across 2 pages → protocol detail → pre-filled email to teacher
5. **Teacher View** — all 4 teams at a glance, progress, flagged teams

---

## Updating the hub

### Change the current day
Open `hub-data.js` and edit:
```js
const CURRENT_DAY = 3; // change this number (1–15)
```

### Add or edit team links
Find your team in `hub-data.js` (e.g. `wyatt-ora`) and edit the `links`, `athens`, or `general` arrays.

### Add a new research question revision
Students can do this live in the hub (Question screen → revision form). Or you can add it directly in `hub-data.js` under the team's `question.revisions` array:
```js
{ day: "Day 5", label: "Rev 3", text: "New question here", note: "Why it changed", current: true }
```
Make sure to set `current: false` on the previous revision.

### Update checklist items
Find the team's `checklist` array in `hub-data.js` and set `done: true` for completed items.

### Change teacher email
```js
const TEACHER_EMAIL = 'slaw@doublehelixschool.com';
```

---

## Accessibility

- Font: **Lexend Deca** — designed for reading fluency and dyslexia accessibility
- Minimum font size: 16px (adjustable via Tweaks panel)
- All tap targets: minimum 36px height
- Session persists in `localStorage` — students don't lose their place on refresh

---

## Tweaks panel

Toggle the **Tweaks** button (top right in the preview tool, or add `?tweaks=1` to the URL) to access:
- Current day slider (1–15)
- Font size adjustment (14–20px)
- Team preview selector

---

## The 5 Rules

| # | Rule |
|---|------|
| 01 | Messy is the method. Chaos means you're doing real work. |
| 02 | Dead ends are data too. Not finding what you want is still finding something. |
| 03 | Ctrl+F is your best friend. Hunt for what you need — don't read everything and hope it appears. |
| 04 | Sharpen the question, don't swap it. Your research question will change — revise it, don't escape it. |
| 05 | The data speaks. Follow the evidence. Don't decide the answer first. There is no taboo in data. |

---

*Built for Shin · Double Helix School · Athens GA · April 2026*
