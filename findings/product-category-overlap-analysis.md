# Product ↔ Category Overlap Analysis

**Source:** https://nutravet.co.uk/health-categories (Nutravet UK consumer shop — Wix store)
**Date investigated:** 2026-06-08
**Method:** Fetched all 14 health-category pages; product grids are JavaScript-rendered (Wix), so product names were extracted from the embedded JSON warmup data in the raw HTML.

---

## Key finding

**Category membership is many-to-many, not one-to-one.** Several products appear in multiple health categories. Our data model must allow a product to carry multiple category tags (ideally with a "primary" vs "also-supports" distinction).

---

## Products that span multiple categories

| Product | # Categories | Categories it appears in |
|---|---|---|
| **Nutramega** (high-strength omega-3 EPA & DHA) | **7** | Joints & mobility · Skin & coat · Cognitive function · Kidney function · Liver function · General health · Immune health |
| **Nutramed** (multi-action support for ageing pets) | **3** | Joints & mobility · Kidney function · Liver function |
| **Pet Ready – Shampoo** | 2 | Skin & coat · Grooming |
| **Pet Ready – Conditioner** | 2 | Skin & coat · Grooming |
| **Pet Ready – Deodorising Spray** | 2 | Skin & coat · Grooming |
| **Pet Ready – Cleaning Wipes** | 2 | Skin & coat · Grooming |
| **Pet Ready – Soothing Balm** | 2 | Skin & coat · Grooming |
| **Pet Ready – Lifestage Chews (Puppy)** | 2 | General health · Immune health |
| **Pet Ready – Lifestage Chews (Adult)** | 2 | General health · Immune health |
| **Pet Ready – Lifestage Chews (Senior)** | 2 | General health · Immune health |
| **Nutraflora** (high-strength probiotic) | 2 | Digestive health · Immune health |

**Single-category products:** Nutraflex, Nutraquin (chews), Nutraquin+, Nutracalm (×2: daily chews, rapid capsules), Nutrabio (×5: Anal Gland, Daily, Rapid stool chews, Advanced Daily, Advanced Rapid), Nutracoat (×2: daily, chews), Nutraotic (×2: cleaner, wipes), Nutramind, Nutraplaque (×2: advanced, purée), Nutraren, Nutramarin Advanced (×2: liver support, liver support chews), Nutracys+, Nutramed wound-care (×3: gel all-animals, gel equine, spray).

---

## Sales-relevant takeaways

- **Nutramega is the universal cross-seller** — present in 7 of 14 categories. An omega-3 that supports joints, skin, brain, kidney, liver, immune and general health; a rep can attach it to almost any consultation.
- **Nutramed (ageing pets)** is the second multi-tasker — joints / kidney / liver, the classic senior-pet trio.
- The Pet Ready grooming range and Lifestage chews each double-up across two related categories.

---

## Full category → product map (14 categories)

- **Joints & mobility (6 listings):** Nutraflex, Nutramed (ageing), Nutramega, Nutraquin chews, Nutraquin+ *(listed twice via name variants "&"/"and")*
- **Stress & anxiety (2):** Nutracalm Daily calm chews, Nutracalm Rapid calm capsules
- **Digestive health (6):** Nutrabio Anal Gland, Nutrabio Daily, Nutrabio Rapid stool chews, Nutrabio Advanced Daily, Nutrabio Advanced Rapid, Nutraflora
- **Skin & coat (8):** Nutracoat chews, Nutracoat daily, Nutramega, Pet Ready Wipes, Pet Ready Spray, Pet Ready Shampoo, Pet Ready Conditioner, Pet Ready Balm
- **Ear health (2):** Nutraotic ear cleaner, Nutraotic ear cleaning wipes
- **Cognitive function (2):** Nutramega, Nutramind
- **Teeth & gums (2):** Nutraplaque advanced, Nutraplaque Purée
- **Grooming (5):** Pet Ready Wipes, Spray, Shampoo, Conditioner, Balm
- **Kidney function (3):** Nutramed (ageing), Nutramega, Nutraren
- **Liver function (4):** Nutramarin Advanced (liver support), Nutramarin Advanced (chews), Nutramed (ageing), Nutramega
- **Urinary tract function (1):** Nutracys+
- **General health (4):** Nutramega, Pet Ready Lifestage (Adult, Puppy, Senior)
- **Immune health (5):** Nutraflora, Nutramega, Pet Ready Lifestage (Adult, Puppy, Senior)
- **Wound care (3):** Nutramed Antimicrobial gel (all animals), Nutramed gel (equine), Nutramed spray

---

## Discrepancies & open items (verify before treating range as complete)

1. **Website taxonomy ≠ 2026 catalogue taxonomy.** The site splits the catalogue's "Cognitive & nervous system" into **Stress & anxiety** + **Cognitive function**, renames "Renal → Kidney function", and adds **Immune health** and **Wound care** as standalone categories. Catalogue "Recovery" maps to website "Wound care".

2. **15th category exists:** an **Eye health** category (`/product-page/eye-health/`) is linked in the site nav but was **not** on the /health-categories page and was not scraped. Not yet mapped.

3. **"Nutramed" name clash:** the *ageing-pets* Nutramed (sprinkle capsules) and the *wound-care* Nutramed (antimicrobial gel/spray) are **different products sharing a brand name**. → Schema must use a unique product ID, not name-based keys.

4. **Nutravive (Vitality / recuperation support)** appears in **none** of the 14 category pages. May be discontinued on the .co.uk shop or filed elsewhere. Unverified.

---

## Implication for the data model

- Product → Category is **many-to-many**. Represent as a join (tags), not a single field.
- Consider a **primary category** + **also-supports categories** distinction (e.g. Nutramega: primary = General health; also-supports = 6 others). Powers cross-sell / "what else could I recommend" logic in the learning app.
- Use a **stable unique product ID** (name collisions exist).
