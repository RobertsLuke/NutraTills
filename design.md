# NutraTills — Design Direction

> Companion to `plan.md`. Captures the **visual / UX language** agreed in the design phase.
> Reference point: a veterinary clinical-visit ("vet scribe") app mockup the user shared — the
> *"clinical credibility, softened by warmth"* aesthetic. **It is our own study tool, not affiliated
> with Nutravet's real brand**, so we adopt the look freely.

## Agreed direction (two locked decisions)

1. **Brand fit → Match the mockup.** Use the emerald/teal + hand-drawn-doodle aesthetic as-is. We are not
   bound to Nutravet's real palette; priority is a study environment that feels good to spend time in.
2. **Tone → More playful.** Lean further into the friendly/playful side than the mockup does, while keeping
   the actual learning content calm and legible.

## The core formula (why the mockup works)

**Zoning:** warmth lives in the *chrome* (gradients + doodles); rigour lives in the *content* (clean white,
structured data). That separation is what makes it read playful without feeling unprofessional.
Because we chose "more playful", we let warmth spill a little further into the experience (illustration,
micro-copy, celebration moments) — but the **reading/study surfaces stay clean** (decorative noise in dense
learning content hurts retention).

## Palette

- **Primary:** emerald / teal green.
- **Gradients:** soft mint → teal, used in chrome zones (login, sidebar, dashboard hero, empty/celebration
  states).
- **Surfaces:** white / near-white for all content and data.
- **Coral / red:** reserved for *active or destructive* states (e.g. a live "recording" mock-interview, a
  high-pressure objection). Used sparingly.
- **Amber / warm yellow:** secondary accent / highlights.
- Low saturation overall; friendly, not corporate.

## Shape & motif language

- Rounded corners everywhere; card-based containers; pill buttons. Nothing sharp.
- **Doodle motifs:** paw prints, medical crosses, bones, squiggles, dashed lines.
  - **Usage zones (more-playful brief):** login, dashboard hero, empty states, section dividers, progress/
    completion & celebration moments, mascot moments.
  - **Keep-out zones:** dense study text, ingredient deep-dives, comparison tables — keep these clean.
- Consider a friendly **mascot / logo animal** as a recurring warm touch.

## Stage colour semantics (maps to the 3-stage model in plan.md)

- **LEARN** → green (calm, knowledge-building).
- **DEFEND** → coral / amber (pressure, objections, being challenged).
- **MOCK INTERVIEW / mastery** → a confident accent + the "recording/live" coral motif (you're on the spot).

This makes progress legible at a glance across Learn → Defend → Mock.

## Component mapping (mockup → our study tool)

| Mockup element | Our use |
|---|---|
| "Clinical Visits" data table | **Category / product browser** (Product · Category · Species · Status) |
| Tabbed visit-detail view | **Product-detail tabs** — Positioning · Ingredients · Comparisons · Typical Cases · Objections (mirrors the transcript structure) |
| Copilot / Conversation / Recording screen | **MOCK INTERVIEW** mode — chat-style Q&A, timer/record motif for "on the spot" |
| Status badges ("Reviewed") | **Progress states** across Learn → Defend → Mock |
| Login + doodle hero | **Login / onboarding**, warm and playful |

## Guardrails

- Playful in the chrome; **clean in the content**.
- Coral is a *signal* colour — don't dilute it with decorative use.
- Accessibility: maintain text contrast on white surfaces even where the surrounding chrome is colourful.
- UI stays **category-agnostic** (per plan.md) — design components once, populate with data.

## Status
- ✅ Visual direction agreed (this document).
- ⬜ Still open (from plan.md): gated vs free-roam progression; final data schema; range completeness.
- ⬜ Next: translate this into concrete screens / a component sketch when we start the build.
