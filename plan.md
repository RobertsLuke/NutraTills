# NutraTills — Project Plan

## Purpose

A web app to make **me (Luke) interview-ready for a Nutravet sales-rep role**.

The role is **consultative selling to veterinary professionals** (vets and RVNs), not retail. The
catalogue is explicit that Nutravet "don't employ pushy sales reps — account managers are Registered
Veterinary Nurses" who deliver practice training and field technical/clinical queries. So the buyer is
clinically literate, and the app must build clinical reasoning and product fluency, not just facts.

Everything below is in service of that single goal.

---

## Goals & success criteria

**The one goal everything serves:** make Luke **interview-ready for the Nutravet sales-rep role** — a
consultative role selling *to vets and RVNs*. A feature is justified only if it moves toward that.

### Learning goals — what Luke must be able to *do*
1. **Recall** product facts instantly (species, format, key ingredients, dosing).
2. **Map problem → product** — given a clinical scenario, pick the right product(s) and justify it.
3. **Explain the science** — talk through ingredient mechanisms, not just name them.
4. **Compare & ladder** — differentiate across fixed axes (channel, severity, active difference, edge-case, price).
5. **Handle objections** — field pushback on price, evidence, formulation rationale.
6. **Deliver the credibility hooks** — reproduce the branded-ingredient / "backed by research" moves.
7. **Tell the range as a story** — the 30-second consultative walkthrough.

### Product goals — what the app must do
1. Encode the range structure → **LEARN** stage.
2. Encode the FAQ/rebuttals → **DEFEND** stage (tagged to products, surfaced after learning).
3. Simulate the real thing → **MOCK INTERVIEW** stage (interleaved).
4. Make studying feel good → clinical-warm, more-playful design (so it actually gets used).
5. Be scalable → category-agnostic UI; adding a category = adding data.
6. Show progress → legible Learn → Defend → Mock states.

### Definition of done
- **v1:** can sit a mock interview on the **digestive range** and confidently field any clinical scenario
  *and* any objection across those 6 products.
- **Full:** the same, across all categories.

### Explicit non-goals (scope guardrails)
- ❌ Not a clinical decision/advice tool — content is *derived* for sales-readiness, not veterinary advice.
- ❌ Not for Nutravet or their customers — a private prep tool (hence free to borrow the aesthetic).
- ❌ Not a records/CRM system — we borrow the vet-scribe *look*, not its function.
- ❌ Not "all 35 products at once" — digestive vertical slice first, then scale.

---

## The core idea

A **three-stage learning progression** per health category:

1. **LEARN** — build the mental model using the *problem-led* structure we reverse-engineered from
   Nutravet's **range presentation videos**.
2. **DEFEND** — once the product is understood, drill the **objection / rebuttal bank** sourced from the
   **singular product videos' FAQ** sections.
3. **MOCK INTERVIEW** — interleave the two (knowledge + pushback, mixed and unpredictable) to simulate a
   real interview.

### Why this shape (the reasoning it's based on)

- **Product knowledge and objection handling are different skills, with a dependency:** you can't rebut a
  claim you don't yet understand. → Objections must come *after* core learning, not interwoven. This is
  why DEFEND follows LEARN rather than being layered through it.
- **Objections are product/claim-specific, not generic** (e.g. "why did you remove GABA from Nutracalm",
  "why so much passion flower"). → Rebuttals are **tagged to their product/claim in the data**, even though
  they're surfaced as a separate phase in the UX. Separate *phase*, linked *data*.
- **A real interviewer interleaves** product questions with pressure-tests. → MOCK INTERVIEW mixes both.

---

## Research basis (what the plan is built on)

### 1. The LEARN structure — from the RANGE video transcript
Source: `documentation/transcripts/RANGE/Nutrabio_Range_Transcript.md` (clinical advisor webinar).

Reverse-engineered pattern (three nested levels):

- **Macro:** credentialed intro → body **organised by clinical problem** (not by product) → close.
  - Organising principle: **clinical need first, product second** — the consultative sell.
- **Meso (per clinical-problem block):** present each product → then a **comparison section** across a
  *fixed set of axes*: channel (consumer vs vet-exclusive) · severity band · which biotic/active differs ·
  a distinguishing clinical edge-case · price-per-day. (Range video also compares against an older product
  to position a step-up.)
- **Micro (per product):** name → one-line positioning → target species → key ingredients → what it does →
  key benefits → **ingredient-by-ingredient deep-dive**.
- **Sub-pattern (per ingredient):** what it is (class) → how it functions (mechanism) → resulting benefit →
  **branded/"special form" credibility hook** (e.g. Calsporin, EpiCor — "additional research and data
  behind it", and why that form was chosen).

This problem-led spine is the **untouched backbone** of the LEARN stage.

### 2. The DEFEND layer — from the SINGULAR video transcript
Source: `documentation/transcripts/SINGULAR/Nutracalm_Daily_Chews_Transcript.md` (internal training video).

Singular videos share the **identical micro ingredient template** but add two sections the range video
lacks:
- **Typical cases** — indications / when-to-use scenarios (feeds scenario drills).
- **FAQ** — a long Q&A block that is effectively a **pre-built rebuttal bank**, clustering around: speed of
  action · species/age suitability · long-term safety · **formulation rationale** ("why remove GABA /
  L-theanine") · practicalities (loading dose, calories, combining products) · allergens · "what if it's
  not working".

The FAQ is the raw material for DEFEND.

### 3. Data-model constraints — from the category overlap investigation
Source: `findings/product-category-overlap-analysis.md`.

- **Product → category is many-to-many.** Nutramega appears in 7 categories; Nutramed (ageing) in 3; the
  Pet Ready grooming range and Lifestage chews each in 2; Nutraflora in 2. The schema must allow multiple
  category tags, ideally **primary** vs **also-supports** (powers cross-sell logic).
- **Name collisions exist** (two different "Nutramed" products). → Use a **stable unique product ID**, not
  name-based keys.
- Website taxonomy ≠ catalogue taxonomy; a 15th "Eye health" category and the status of Nutravive are still
  unverified (noted as open items in the findings).

---

## Data model implications

- One **product record** per product, with a **unique ID**.
- Fields are fed by **different transcript types**:
  - From RANGE videos / datasheets → `positioning`, `species[]`, `keyIngredients[]`, `whatItDoes`,
    `benefits[]`, `ingredientDeepDive[]` (name, class, mechanism, benefit, specialFormHook),
    `comparisonAxes` (channel, severity, activeDifference, edgeCase, pricePerDay).
  - From SINGULAR videos → `typicalCases[]`, `objections[]` / `faq[]` (each tagged to product and,
    where possible, the specific claim it defends).
- **Categories** stored as a many-to-many relationship (`primaryCategory` + `alsoSupports[]`).
- **Graceful degradation:** rebuttal content depends on a singular video existing. Products with only
  range-video data still work in LEARN; DEFEND is simply unpopulated for them until a singular source
  exists.

---

## Build approach

- Start with **one category as a vertical slice**, proving LEARN → DEFEND → MOCK end-to-end before scaling.
  - Likely first category: **Digestive (Nutrabio)** — we already have the richest source (full range
    transcript + a singular-style datasheet set), so it best exercises all three stages.
- UI is **category-agnostic** so adding a category = adding data, not rebuilding screens.
- The previous v1 prototype was **scrapped**; this is a ground-up rebuild after a dedicated design phase.

---

## Open decisions (to resolve before/at design phase)

1. **Gated progression vs free-roam.** Is the app a structured course you complete once
   (Learn → Defend → Mock, gated to build readiness), or a free-roam reference you dip into in any order
   (optimised for lookup)? This shapes the whole app. **— still to decide.**
2. **Visual / UX direction** — deferred to the design phase (v1 design was rejected wholesale).
3. **Data structure finalisation** — confirm the per-product schema (above) against a second product before
   committing.
4. **Range completeness** — verify Eye health category + Nutravive status before treating the product set
   as final.

---

## Status

- ✅ Source material harvested: catalogue, 36 datasheets, 14 leaflets (`documentation/`).
- ✅ Category overlap mapped (`findings/`).
- ✅ Presentation structure of RANGE + SINGULAR transcripts reverse-engineered.
- ✅ Core learning model agreed (this document).
- ⬜ Resolve open decisions → design phase → ground-up build.
