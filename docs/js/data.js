/* ============================================================================
   NutraTills, sales-visit playbook data (CORRECTED channel model).
   SCENARIO: Nutravet rep, first visit to an independent practice that stocks
   YuMove, to introduce Nutraquin Chews.

   CORRECTED PREMISE (important):
   Nutravet has BOTH (a) open-market products anyone can buy (like YuMove) AND
   (b) a VET / STOCKIST-EXCLUSIVE range available only through practices &
   authorised stockists. The sales angle is (b): stocking unlocks exclusive lines
   owners CANNOT buy online or in supermarkets, which directly tackles the
   practice's online-leakage frustration. Do NOT claim "Nutravet can't be bought
   online", that is false.

   ✅ CONFIRMED (from nutravet.co.uk shop, vet-exclusive filter, 2026-06):
   - 8 vet/stockist-exclusive products (see EXCLUSIVES.list), each marked on the
     site "Only available via our stockists".
   - Nutraquin Chews is OPEN-market (not in the exclusive list), so it's the
     door-opener; the exclusive range is the leakage fix.
   ============================================================================ */

/* --------------------------- The corrected angle -------------------------- */
window.STRATEGY = {
  scenarioLine: "First visit to an independent practice that stocks YuMove and is frustrated owners buy it online.",
  core:
    "Their pain is margin leakage: they recommend a joint supplement, the owner buys it cheaper online or grabs " +
    "it in a supermarket, and the practice loses the sale. The honest, winning angle is EXCLUSIVITY, not 'we're " +
    "never sold online'. Nutravet has open-market lines like everyone else, but it ALSO has a vet/stockist-exclusive " +
    "range. Become a stockist and you unlock products owners simply cannot buy on Amazon or pick up in Sainsbury's, " +
    "so those recommendations have to convert through your practice.",
  twoTier: [
    "Open-market lines: anyone can buy them (same as YuMove). Not your differentiator.",
    "Stockist-exclusive range: only available through veterinary practices & authorised stockists.",
    "The exclusive range is the part of the pitch that actually solves their leakage problem."
  ],
  exclusivityAngle: [
    "Recommend an exclusive line and the only place the owner can get it is from you, the sale stays in-practice.",
    "Position the exclusivity as a premium / considered purchase, not a limitation.",
    "Nutraquin Chews is the easy first step / door-opener into becoming a Nutravet stockist and unlocking that range."
  ],
  ubiquityAngle: [
    "YuMove is everywhere, Sainsbury's, Pets at Home, Amazon, so owners grab it on impulse while shopping for other things.",
    "That casual availability is exactly how the sale leaks out of the practice.",
    "An exclusive line can't be impulse-bought elsewhere, it's a practice-led recommendation, which keeps the relationship and the revenue with the practice."
  ],
  honestCaveats: [
    "Do NOT say 'Nutravet can't be bought online', it can. The angle is the EXCLUSIVE range, not the whole brand.",
    "Nutraquin Chews is OPEN-market (confirmed not in the vet-exclusive list), so don't imply it can't be bought elsewhere. It's the door-opener; the exclusive range is the leakage fix.",
    "Respect YuMove (UK No.1 vet-recommended). Win on exclusivity & relationship, not by trashing it or out-claiming the science."
  ]
};

/* ------- Stockist-exclusive range (CONFIRMED from nutravet.co.uk shop) ----- */
window.EXCLUSIVES = {
  intro:
    "This is the heart of the pitch. As a Nutravet stockist the practice gets access to lines owners cannot " +
    "buy online or in a supermarket, the direct answer to 'our clients just buy it online'.",
  proof:
    "On Nutravet's own shop these products show 'Only available via our stockists' with a 'Find a stockist' " +
    "button and NO add-to-basket. That is your on-the-record proof of the exclusivity, an owner literally " +
    "cannot buy them online.",
  pitch: [
    "'You're frustrated owners buy YuMove online. The fix is recommending lines they can only get from you.'",
    "'As a Nutravet stockist you unlock the exclusive range, no Amazon, no supermarket shelf, no online basket.'",
    "'Every recommendation on those lines is a sale that has to come back to your practice.'",
    "'Nutraquin Chews is your easy way in; the exclusive range is what protects your dispensing revenue.'"
  ],
  source: "Confirmed from the nutravet.co.uk shop, vet-exclusive filter (8 products, each marked 'Only available via our stockists').",
  list: [
    { name: "Nutraflex", category: "Joint & mobility", note: "Veterinary strength" },
    { name: "Nutracys+", category: "Urinary tract", note: "Veterinary strength" },
    { name: "Nutraren", category: "Renal / kidney", note: "Veterinary strength" },
    { name: "Nutramed", category: "General / ageing pets", note: "Multi-action veterinary strength" },
    { name: "Nutramarin Advanced - Liver support", category: "Liver", note: "Advanced range" },
    { name: "Nutramarin Advanced - Liver support chews", category: "Liver", note: "Advanced range" },
    { name: "Nutrabio Advanced - Daily digestive support", category: "Digestive", note: "Advanced range" },
    { name: "Nutrabio Advanced - Rapid digestive support", category: "Digestive", note: "Advanced range" }
  ],
  nutraquinNote: "Nutraquin Chews is NOT on this list, it's open-market. That's exactly why it's the door-opener: it gets you stocking Nutravet, and the exclusive range above is the strategic leakage fix."
};

/* ------------------------------ The competitor ---------------------------- */
window.COMPETITOR = {
  name: "YuMove (Lintbells)",
  respect: [
    "Genuinely the UK's No.1 vet-recommended joint supplement brand (Kynetec 2025, 84% of vets).",
    "Hero ingredient: ActivEase Green Lipped Mussel; plus glucosamine, hyaluronic acid, manganese, vitamins.",
    "Marketed as scientifically proven in 6 weeks (double-blind, placebo-controlled; RVC-linked trial)."
  ],
  ubiquityLeak: [
    "Sold in Sainsbury's, Pets at Home, Amazon, eBay and on its own site with subscriptions.",
    "Owners see it on a shelf while shopping for other things and grab it, the sale never reaches the practice.",
    "Its own site discounts heavily (50% off first 2 months, 20% ongoing), so the practice can't compete on price either.",
    "Net effect: the practice recommends it but loses the sale. That's the frustration to lean into."
  ],
  counter: [
    "You can't out-ubiquity YuMove, so flip it: exclusivity is the answer.",
    "An exclusive line isn't on a supermarket shelf or Amazon, it can only come from the practice.",
    "Frame the scarcity as premium and practice-led: 'this is something you offer that they can't get anywhere else.'",
    "Nutraquin Chews opens the door; the exclusive range is what protects the dispensing revenue."
  ],
  compare: [
    { axis: "Where owners buy it", nutra: "Exclusive range: only via practice / authorised stockist", yumove: "Supermarkets, Pets at Home, Amazon, D2C" },
    { axis: "Impulse availability", nutra: "Can't be grabbed elsewhere, considered, practice-led", yumove: "Picked up casually while shopping" },
    { axis: "Sale stays in-practice", nutra: "Yes, for the exclusive lines", yumove: "Leaks to retail & online" },
    { axis: "Online discounting", nutra: "No online channel undercutting exclusive lines", yumove: "Routinely 20 to 50% off online" },
    { axis: "Brand strength", nutra: "Smaller, vet-focused, relationship-led", yumove: "No.1 vet-recommended, mass-market" }
  ],
  guardrails: [
    "Do NOT claim 'Nutravet can't be bought online', it can. The angle is the EXCLUSIVE range only.",
    "Nutraquin Chews is OPEN-market (not in the vet-exclusive list), don't imply owners can't buy it elsewhere.",
    "Do NOT claim Nutraquin Chews has 'more glucosamine' or is 'stronger' than YuMove, different formulation.",
    "Do NOT trash YuMove, respect the No.1 brand, then pivot to exclusivity and relationship."
  ]
};

/* ------------------------------- The visit -------------------------------- */
window.VISIT = [
  {
    stage: "1. Open",
    purpose: "Introduce yourself and Nutravet, build rapport, earn a few minutes.",
    say: [
      "Introduce yourself, Nutravet, and that it's your first visit.",
      "Be warm and concise, respect their time.",
      "Signal you're here to help with a problem they already have, not just sell a box."
    ],
    ask: ["'Is now an ok moment for a quick introduction?'", "'How familiar are you already with Nutravet?'"]
  },
  {
    stage: "2. Discover",
    purpose: "Get them to name the online-leakage pain themselves before you pitch.",
    say: [
      "Acknowledge they already do joint care well with YuMove.",
      "Probe how much of what they recommend actually converts to a sale in-practice."
    ],
    ask: [
      "'How are you finding YuMove with your clients at the moment?'",
      "'When you recommend it, how often do you think the owner buys it from you versus online or in a supermarket?'",
      "'How much does that lost sale matter to the practice?'",
      "'Would access to lines owners can ONLY get from you be useful?'"
    ]
  },
  {
    stage: "3. Pitch",
    purpose: "Introduce Nutraquin Chews, then land the exclusivity angle as the leakage fix.",
    say: [
      "Introduce Nutraquin Chews briefly: a palatable daily joint chew dogs actually take.",
      "Bridge to the real win: 'The bigger thing is what becoming a stockist unlocks.'",
      "Exclusivity: Nutravet has a vet/stockist-exclusive range owners can't buy online or in supermarkets.",
      "So recommendations on those lines convert in-practice, no leaking to Amazon or Sainsbury's.",
      "Frame the exclusivity as premium and relationship-led, something only you can offer clients."
    ],
    ask: [
      "'Does having lines clients can only get from you sound useful?'",
      "'Shall I show you what's in the exclusive range?'"
    ]
  },
  {
    stage: "4. Handle",
    purpose: "Meet objections calmly. Respect YuMove, re-anchor on exclusivity & relationship.",
    say: [
      "Don't fight YuMove clinically; position the exclusive range as what they can't buy elsewhere.",
      "Use honest framing, never overclaim (see guardrails).",
      "See the Objections section for the full bank."
    ],
    ask: ["'If the clinical outcome is comparable, would keeping the sale in-practice tip it for you?'"]
  },
  {
    stage: "5. Close",
    purpose: "Ask for a small, easy commitment and agree next steps.",
    say: [
      "Make it low-risk: start with Nutraquin Chews as the first stocked line.",
      "Open the door to the exclusive range as the next conversation.",
      "Leave support materials so the team can start recommending.",
      "Agree a follow-up to review how it's landing."
    ],
    ask: [
      "'Shall we get you set up as a stockist and start with a Nutraquin Chews trial?'",
      "'Can I come back to walk the team through the exclusive range?'"
    ]
  }
];

/* ------------------------------ Objections -------------------------------- */
window.OBJECTIONS = [
  { tag: "Loyalty", q: "\"We already use YuMove and we're happy with it.\"",
    a: ["Great, keep it, it's a strong product and clearly working clinically.",
        "The problem you raised is that owners buy it online, so you recommend it but lose the sale.",
        "Becoming a Nutravet stockist unlocks an exclusive range owners can't buy on Amazon or in a supermarket.",
        "Those recommendations convert in-practice. Nutraquin Chews is the easy first step in."] },
  { tag: "Client demand", q: "\"Our clients ask for YuMove by name.\"",
    a: ["Of course, it's the No.1 brand and it's on every shelf, so it's front of mind.",
        "But that ubiquity is the problem, they see it in Pets at Home and grab it, bypassing you.",
        "An exclusive line can't be picked up elsewhere, so when you recommend it the sale comes back to you.",
        "You become the only place they can get it."] },
  { tag: "Effort / change", q: "\"Switching is hassle, why change what works?\"",
    a: ["You don't switch, you add Nutraquin Chews and unlock the exclusive range alongside YuMove.",
        "Ordering is simple: next working day before 4pm.",
        "Start with a small Nutraquin trial, tiny commitment.",
        "I set it up and leave the support materials so there's nothing for your team to figure out."] },
  { tag: "Clinical proof", q: "\"Is it as clinically proven as YuMove?\"",
    a: ["YuMove has a strong published trial, I'd never claim to out-science the No.1 brand.",
        "Nutraquin uses a different, well-evidenced formula (egg shell membrane, boswellia, omega-3).",
        "But the deciding point here isn't the science, it's that the exclusive lines keep the sale in your practice.",
        "If the clinical result is comparable, exclusivity is what tips it."] },
  { tag: "Price", q: "\"YuMove is cheaper online than your RRP.\"",
    a: ["It's cheap online precisely because it's discounted everywhere, that's the leak you're frustrated by.",
        "The exclusive range has no online channel undercutting it, so the price and your margin hold.",
        "It's not about being the cheapest box, it's about keeping the income on the sale.",
        "(For Nutraquin Chews specifically, confirm its channel before leaning on this.)"] },
  { tag: "Risk", q: "\"What if it doesn't sell?\"",
    a: ["That's why we start small, a Nutraquin Chews trial, not a big order.",
        "Support materials help the team recommend it so it moves.",
        "Next-day delivery means you reorder only as it sells, never over-stock.",
        "I'll follow up to review how it's going."] },
  { tag: "Range overlap", q: "\"We don't want two joint products competing on the shelf.\"",
    a: ["Fair, position them by job: YuMove for clients set on it, the exclusive lines as your protected recommendations.",
        "The key difference is exclusivity, those are the ones owners can't buy cheaper elsewhere.",
        "Over time you'll see which protects your dispensing revenue.",
        "Start with Nutraquin Chews and let the results decide."] }
];

/* ------------------------------- Role-play -------------------------------- */
window.ROLEPLAY = [
  { stage: "Open", q: "(Vet, a little guarded) 'We're happy with what we use, but you've got two minutes.'",
    answer: ["Thank them, stay relaxed, two minutes is enough.",
             "Quick intro: you, Nutravet, first visit, here to help with a specific problem.",
             "Earn discovery: 'Can I ask one question about how you handle joint recommendations?'"] },
  { stage: "Discover", q: "(Vet) 'We recommend YuMove a lot. Why?'",
    answer: ["Affirm it's a great product, then probe the leak.",
             "'When you recommend it, how often does the owner actually buy it from you versus online or in a supermarket?'",
             "Let them voice the frustration, that's your opening for the exclusivity angle."] },
  { stage: "Pitch", q: "(Vet) 'Go on then, what makes this worth my time?'",
    answer: ["Introduce Nutraquin Chews briefly: palatable daily joint chew, great for compliance.",
             "Then the real win: as a stockist you unlock Nutravet's exclusive range.",
             "Those lines aren't on Amazon or supermarket shelves, owners can only get them from you.",
             "So your recommendations convert in-practice instead of leaking online."] },
  { stage: "Handle", q: "(Vet) 'But YuMove is the No.1 vet-recommended brand and it's proven in six weeks.'",
    answer: ["Agree, don't argue: it's the No.1 brand and well-proven.",
             "Re-anchor: the problem you raised is owners buying it elsewhere, not whether it works.",
             "The exclusive range is the credible option they can ONLY get from you.",
             "Avoid overclaiming on speed or strength (guardrails)."] },
  { stage: "Handle", q: "(Vet) 'Clients see YuMove in Sainsbury's and just buy it there.'",
    answer: ["Exactly, that ubiquity is the leak, you recommend, they grab it while shopping.",
             "An exclusive line can't be picked up in Sainsbury's, it has to come from you.",
             "Frame it as a premium, practice-only recommendation, the sale stays in-house."] },
  { stage: "Discover", q: "(Vet) 'We're a busy independent, we don't have time to push new products.'",
    answer: ["Empathise, then make it effortless.",
             "Support materials let the team recommend in seconds, no hard selling.",
             "Ordering is next-day before 4pm, I set up the trial and leave everything ready."] },
  { stage: "Close", q: "(Vet) 'Okay, it's interesting. Leave me some info and I'll think about it.'",
    answer: ["Welcome it, but ask for a small commitment now to build momentum.",
             "'Shall we get you set up as a stockist and start with a Nutraquin Chews trial?'",
             "Open the next step: 'I'll come back to walk the team through the exclusive range.'",
             "Leave support materials and agree a follow-up date."] },
  { stage: "Close", q: "(Vet) 'Fine, set us up and we'll trial the chews.'",
    answer: ["Confirm clearly: stockist set-up + a Nutraquin Chews trial, next-day if ordered before 4pm.",
             "Tee up the bigger play: book the visit to walk the exclusive range.",
             "Leave the support materials so the team can start recommending.",
             "Lock the follow-up and leave a strong final impression."] }
];

window.GUARDRAILS = window.COMPETITOR.guardrails;
