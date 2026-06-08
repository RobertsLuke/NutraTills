# NutraTills

A small web app to get **interview-ready for a Nutravet sales-rep role** — a consultative
role selling to veterinary professionals (vets and RVNs).

It walks the product range the way the interview tests it: **Learn → Defend → Mock**.

- **Learn** — a guided, click-through walkthrough organised by clinical problem: each problem,
  then its solution products (broken into *What it does · How it does it · Ingredient details*),
  then a self-test comparison table.
- **Defend** — an objection / rebuttal bank (price, evidence, "why this not that").
- **Mock Interview** — interleaved scenarios and pushback, self-scored.

First category built out: **Digestive (Nutrabio)**. The UI is category-agnostic, so adding a
category is a data exercise (`docs/js/data.js`).

## Live site

https://robertsluke.github.io/NutraTills/

## Run locally

It's a static site (no build step). From the repo root:

```bash
cd docs
python -m http.server 8420
# then open http://127.0.0.1:8420/
```

## Project structure

```
docs/            the web app (served by GitHub Pages)
  index.html
  css/styles.css
  js/data.js     all category content lives here
  js/app.js      views & carousel logic
findings/        research notes (e.g. product↔category overlap analysis)
plan.md          goals, learning model, data-model decisions
design.md        visual / UX direction
```

## Notes

- This is a **personal study tool** and is **not affiliated with or endorsed by Nutravet**.
- All product/clinical content is **derived for sales-readiness from public materials** and is
  **not veterinary advice**.
- Source PDFs and video transcripts used during research are kept out of this repository.
