/* ============================================================================
   NutraTills, sales-visit playbook data.
   SCENARIO: Nutravet rep, first visit to an independent practice that stocks
   YuMove, to introduce Nutraquin Chews. (Assessor role-play brief, 2026-06.)
   Commercial terms are taken from the assessor's email (authoritative).
   Competitor/channel facts are research-verified; content DERIVED for the pitch,
   not veterinary advice.
   ============================================================================ */

window.BRIEF = {
  title: "Nutraquin Chews, first sales visit",
  scenario:
    "You are a Nutravet Sales Representative visiting an independent veterinary practice for the first time " +
    "to introduce Nutraquin Chews. The practice currently stocks YuMove but may be open to alternatives, " +
    "because they're frustrated that owners buy YuMove online instead of from the practice.",
  goal: "Run it like a real sales visit and earn a trial order, by solving their problem, not just pitching a product.",
  winningStrategy:
    "Their pain is not clinical, it's margin leakage: they recommend YuMove, the owner buys it cheaper on " +
    "Amazon, and the practice loses the repeat dispensing revenue. Your clean, verifiable win is channel " +
    "exclusivity: Nutravet sells ONLY through veterinary practices and authorised stockists, never Amazon or " +
    "internet pharmacies. Stock Nutraquin Chews and the sale can't leak online, so the practice keeps the income.",
  keyFacts: [
    "Nutravet does NOT supply Amazon or internet pharmacies (vet-channel exclusive).",
    "YuMove is sold on Amazon, Pets at Home, Sainsbury's and its own site with 50% / 20% subscription discounts.",
    "Practice margin on Nutraquin Chews is about 41.7% on every pot, and it can't be undercut online.",
    "Next working day delivery if ordered before 4pm; free shipping over £100.",
    "Support materials: product brochures + mobility score cards (recommendation tools)."
  ]
};

/* ------------------------------- The product ------------------------------ */
window.PRODUCT = {
  name: "Nutraquin Chews",
  tagline: "Tasty daily chews for joints, mobility & structural support",
  species: "Dogs",
  form: "Soft chew (3g), hydrolysed chicken-liver flavour",
  onset: "Noticeable on average within ~1 week (present as a claim).",
  sizes: [
    { size: "50s pot", practice: "£20.41", rrp: "£34.99" },
    { size: "100s pot", practice: "£34.99", rrp: "£59.99" }
  ],
  whatItDoes: [
    "Daily support for joint & mobility health",
    "Aids joint structure, tendons & cartilage",
    "Soothes & comforts stiff joints",
    "Tasty formula built for easy administration & compliance"
  ],
  benefits: [
    ["Palatability = compliance", "A hydrolysed chicken-liver chew dogs actually take, so owners keep giving it."],
    ["Structural support", "Egg shell membrane delivers multiple joint nutrients from one source."],
    ["Natural anti-inflammatory angle", "Standardised-AKBA boswellia supports the natural systems that control inflammation."],
    ["Gut-joint axis", "Pre & postbiotics support absorption of joint nutrients, a point of difference."]
  ],
  ingredients: [
    { name: "Egg shell membrane (175mg)", cls: "Structural multi-nutrient", detail: "Naturally contains collagen, hyaluronic acid, glucosamine, chondroitin and ~400 proteins. 20+ studies. Supports cartilage & tendons." },
    { name: "Boswellia extract (50mg)", cls: "Natural anti-inflammatory", detail: "Standardised Acetyl-11-keto-boswellic acid (AKBA), the active fraction. 400+ trials behind boswellia." },
    { name: "Omega-3 (142.5mg; EPA 70 / DHA 47.5)", cls: "Essential fatty acids", detail: "High-purity refined fish oil. Supports natural anti-inflammatory systems and blood flow to the joints." },
    { name: "Pre & postbiotics (hydrolysed yeast)", cls: "Gut-joint axis", detail: "Supports a healthier gut to improve absorption of joint nutrients." }
  ],
  dosing: {
    note: "Daily chew, by bodyweight. No loading phase.",
    rows: [
      ["Small dog", "0 to 9.99kg", "0.5 chew/day"],
      ["Medium / large dog", "10 to 29.99kg", "1 chew/day"],
      ["Large dog", "30kg+", "2 chews/day"]
    ]
  },
  honestFraming: [
    "Different formulation to YuMove (egg shell membrane + boswellia + omega-3), NOT high-dose glucosamine/GLM. Frame as a different mechanism, not 'more glucosamine'.",
    "The ~1 week onset is a claim; YuMove's 6-week figure is the more formally published (RVC trial).",
    "Lead with channel + margin + compliance, then support with the natural formula. Don't out-science the No.1 brand."
  ]
};

/* ------------------------------ The commercials --------------------------- */
window.COMMERCIALS = {
  margins: [
    { size: "50s pot", practice: "£20.41", rrp: "£34.99", profit: "£14.58", margin: "41.7%" },
    { size: "100s pot", practice: "£34.99", rrp: "£59.99", profit: "£25.00", margin: "41.7%" }
  ],
  marginLine: "About 41.7% margin on every pot (~71% markup on cost), and you keep all of it because it can't be undercut online.",
  delivery: "Next working day delivery when ordered before 4pm.",
  freeShipping: "Free shipping on orders over £100.",
  discountTiers: [
    ["Over £250", "10% discount"],
    ["Over £500", "15% discount"],
    ["Over £750", "20% discount"]
  ],
  supportMaterials: [
    ["Product brochures", "Hand to owners to support the recommendation at the point of sale."],
    ["Mobility score cards", "A tool for the team to identify mobility candidates and start owner conversations, which drives in-practice recommendations (and sales)."]
  ],
  useInPitch: [
    "Turn margin into a sentence: 'You make around £14.58 a pot on the 50s and £25 on the 100s, and none of it leaks online.'",
    "Lower the commitment: 'An opening order of just five pots clears the £100 free-shipping threshold.'",
    "Use the tiers to grow the order: 'If you take a starter range across sizes you're close to the £250 / 10% tier.'",
    "Position the mobility score cards as a recommendation engine, not a freebie."
  ]
};

/* ------------------------------ The competitor ---------------------------- */
window.COMPETITOR = {
  name: "YuMove (Lintbells)",
  respect: [
    "Genuinely the UK's No.1 vet-recommended joint supplement brand (Kynetec 2025, 84% of vets).",
    "Hero ingredient: ActivEase Green Lipped Mussel; also glucosamine, hyaluronic acid, manganese, vitamins.",
    "Marketed as scientifically proven in 6 weeks (double-blind, placebo-controlled; RVC-linked trial)."
  ],
  leakage: [
    "Sold on Amazon UK, Pets at Home, Sainsbury's, eBay and third-party online retailers.",
    "Its own site offers 50% off the first 2 months and 20% off ongoing via Subscribe & Save, plus multibuy deals.",
    "So a practice selling YuMove at RRP simply cannot compete with the online price, which is why owners buy online."
  ],
  counter: [
    "Nutravet sells ONLY through veterinary practices and authorised stockists.",
    "It does NOT supply Amazon or internet pharmacies, so there's no online channel undercutting your shelf price.",
    "Stock Nutraquin Chews and the recommendation converts to a sale that stays in your practice."
  ],
  compare: [
    { axis: "Channel", nutra: "Vet practices / authorised stockists only", yumove: "Amazon, supermarkets, Pets at Home, D2C subscriptions" },
    { axis: "Online undercut", nutra: "None, not supplied to online discounters", yumove: "Routinely discounted 20 to 50% online" },
    { axis: "Lead actives", nutra: "Egg shell membrane + boswellia (AKBA) + omega-3", yumove: "Green Lipped Mussel (ActivEase) + glucosamine" },
    { axis: "Format", nutra: "Soft chew, chicken-liver flavour", yumove: "Tablets, Tasty Tablets, Daily Bites" },
    { axis: "Onset claim", nutra: "~1 week (claim)", yumove: "6 weeks (RVC trial)" },
    { axis: "Practice revenue", nutra: "Protected, sale stays in practice", yumove: "Leaks to online channels" }
  ],
  guardrails: [
    "Do NOT claim a formally-named 'margin-protection policy'. Say: 'They don't supply Amazon or internet pharmacies, so nothing undercuts your shelf price.'",
    "Do NOT claim Nutraquin Chews are 'stronger' or have 'more glucosamine' than YuMove. Different formulation, frame as a different mechanism.",
    "Do NOT trash YuMove, it's the No.1 vet-recommended brand. Respect it, then pivot to channel + margin.",
    "Treat the ~1 week onset as a claim, not a published head-to-head result."
  ]
};

/* ------------------------------- The visit -------------------------------- */
/* The call structure: Open -> Discover -> Pitch -> Handle -> Close */
window.VISIT = [
  {
    stage: "1. Open",
    purpose: "Introduce yourself and Nutravet, build rapport, earn permission for a few minutes.",
    say: [
      "Introduce yourself, Nutravet, and that it's your first visit.",
      "Be warm and concise; respect their time. Ask for a few minutes.",
      "Signal you're here to help with a problem, not just sell a box."
    ],
    ask: [
      "'Is now an ok moment for a quick introduction?'",
      "'How familiar are you already with Nutravet?'"
    ]
  },
  {
    stage: "2. Discover",
    purpose: "Surface the YuMove frustration in their own words before you pitch. Listen more than you talk.",
    say: [
      "Acknowledge they already do joint care well with YuMove.",
      "Probe the online-leakage pain so THEY say it out loud."
    ],
    ask: [
      "'How are you finding YuMove with your clients at the moment?'",
      "'When you recommend a joint supplement, how often do you think the owner buys it from you versus online?'",
      "'How much does that lost dispensing revenue matter to the practice?'",
      "'What would make you consider stocking a second option?'"
    ]
  },
  {
    stage: "3. Pitch",
    purpose: "Bridge from their pain to Nutraquin Chews. Lead with channel + margin, support with the product.",
    say: [
      "Bridge: 'That online leakage is exactly the problem Nutraquin solves.'",
      "Channel: Nutravet doesn't supply Amazon or internet pharmacies, so the sale stays with you.",
      "Margin: ~41.7% on every pot, and none of it leaks online.",
      "Product: a palatable daily chew (egg shell membrane + boswellia + omega-3) that drives compliance.",
      "Support: brochures + mobility score cards to drive recommendations; next-day delivery before 4pm."
    ],
    ask: [
      "'Does protecting that dispensing income sound useful to you?'",
      "'Would a palatable chew help with the fussy dogs you struggle to dose?'"
    ]
  },
  {
    stage: "4. Handle",
    purpose: "Meet objections calmly. Respect YuMove, re-anchor on channel, margin and compliance.",
    say: [
      "Don't argue clinically against the No.1 brand; position Nutraquin as the option owners can't buy cheaper online.",
      "Use honest framing; never overclaim (see guardrails).",
      "See the Objections section for the full bank."
    ],
    ask: [
      "'If the clinical outcome is comparable, would keeping the sale in-practice tip it for you?'"
    ]
  },
  {
    stage: "5. Close",
    purpose: "Ask for a small, easy commitment, a trial order, and agree next steps.",
    say: [
      "Make it low-risk: suggest a trial of a pot of each size.",
      "Reduce friction: 'Five pots clears free shipping, and it's next-day if you order before 4pm.'",
      "Leave the mobility score cards so the team can start identifying candidates this week.",
      "Agree a follow-up to review how it's going."
    ],
    ask: [
      "'Shall we start with a trial, a pot of each size, on next-day delivery?'",
      "'Can I check back in a couple of weeks to see how the team are finding it?'"
    ]
  }
];

/* ------------------------------ Objections -------------------------------- */
window.OBJECTIONS = [
  { tag: "Loyalty", q: "\"We already use YuMove and we're happy with it.\"",
    a: ["Great, it's a strong product and clearly working clinically, I'm not asking you to drop it.",
        "The issue you raised is that owners buy it online, so you recommend it but lose the sale.",
        "Nutraquin gives you a joint recommendation that can't leak online, because Nutravet doesn't supply Amazon or internet pharmacies.",
        "Think of it as protecting the revenue on the recommendations you're already making."] },
  { tag: "Client demand", q: "\"Our clients ask for YuMove by name.\"",
    a: ["Understandable, it's the No.1 vet-recommended brand and brilliantly marketed.",
        "But the clients asking by name are often the ones buying it cheaper online afterwards.",
        "When the practice actively recommends Nutraquin as your first-line chew, owners follow your lead, and that sale stays with you.",
        "The mobility score cards help the team start that conversation consistently."] },
  { tag: "Effort / change", q: "\"Switching is hassle, why change what works?\"",
    a: ["You don't have to switch, you can add it as your protected-margin first-line chew.",
        "Ordering is simple: next working day before 4pm, free shipping over £100.",
        "A trial of a pot of each size is a tiny, low-risk first step.",
        "I'll set it up and leave the support materials so there's nothing for your team to figure out."] },
  { tag: "Clinical proof", q: "\"Is it as clinically proven as YuMove?\"",
    a: ["YuMove has a strong published trial, I'd never claim to out-science the No.1 brand.",
        "Nutraquin uses a different, well-evidenced formula: egg shell membrane, standardised-AKBA boswellia (400+ trials) and omega-3.",
        "For most everyday mobility cases the outcome is comparable, and it's a more palatable daily chew.",
        "If the clinical result is comparable, keeping the sale in-practice is the deciding factor."] },
  { tag: "Price", q: "\"It looks more expensive than YuMove online.\"",
    a: ["Online YuMove looks cheap precisely because it's discounted on Amazon and subscriptions, that's your leak.",
        "At RRP you make around 41.7% on every Nutraquin pot, roughly £14.58 on the 50s and £25 on the 100s.",
        "Because it isn't sold online, that RRP holds and your margin is protected.",
        "It's not about being cheaper, it's about keeping the income on the sale."] },
  { tag: "Risk", q: "\"What if it doesn't sell?\"",
    a: ["That's why I'd start you on a small trial, a pot of each size, not a big commitment.",
        "The mobility score cards help the team identify candidates so it moves off the shelf.",
        "Next-day delivery means you never over-stock, reorder only as it sells.",
        "I'll follow up in a couple of weeks to review how it's going."] },
  { tag: "Range overlap", q: "\"We don't want two joint products competing on the shelf.\"",
    a: ["Fair, so position them by job: YuMove for the clients set on it, Nutraquin as your recommended, margin-protected first-line.",
        "The key difference is channel, Nutraquin is the one owners can't buy cheaper elsewhere.",
        "Over time you'll see which protects your dispensing revenue best.",
        "Start with the trial and let the numbers decide."] }
];

/* ------------------------------- Role-play -------------------------------- */
/* Rehearse the visit: the 'practice' speaks, you answer aloud, reveal, self-score. */
window.ROLEPLAY = [
  { stage: "Open", q: "(Vet, a little guarded) 'We're pretty happy with what we use, but you've got two minutes.'",
    answer: ["Thank them and stay relaxed, two minutes is enough.",
             "Quick intro: you, Nutravet, first visit, here to help with a specific problem.",
             "Earn the discovery: 'Can I ask one question about how you currently handle joint recommendations?'"] },
  { stage: "Discover", q: "(Vet) 'Yeah, we recommend YuMove a lot. Why?'",
    answer: ["Affirm it's a great product, then probe the leak.",
             "'When you recommend it, how often do you think the owner actually buys it from you versus online?'",
             "Let them say the frustration out loud, that's your opening."] },
  { stage: "Pitch", q: "(Vet) 'Go on then, what makes Nutraquin different?'",
    answer: ["Lead with channel: Nutravet doesn't supply Amazon or internet pharmacies, so the sale can't leak online.",
             "Then margin: ~41.7% a pot and it can't be undercut.",
             "Then product: palatable daily chew, egg shell membrane + boswellia + omega-3, drives compliance.",
             "Support: brochures + mobility score cards, next-day before 4pm."] },
  { stage: "Handle", q: "(Vet) 'But YuMove is the number one vet-recommended brand, and it's proven in six weeks.'",
    answer: ["Agree, don't argue: it's the No.1 brand and well-proven.",
             "Re-anchor: the problem you raised is owners buying it online, not whether it works.",
             "Nutraquin is the clinically credible option that keeps the sale in-practice.",
             "Avoid overclaiming on speed or strength (guardrails)."] },
  { stage: "Handle", q: "(Vet) 'Honestly, it looks dearer than what people pay online for YuMove.'",
    answer: ["Reframe: that low online price IS the leak, it's discounted on Amazon and subscriptions.",
             "Nutraquin's RRP holds because it isn't sold online, so your ~41.7% margin is protected.",
             "It's about keeping the income, not being the cheapest box."] },
  { stage: "Discover", q: "(Vet) 'We're a busy independent, we don't have time to push new products.'",
    answer: ["Empathise, then make it effortless.",
             "Mobility score cards let the team flag candidates in seconds, no 'selling' needed.",
             "Ordering is next-day before 4pm; I set up the trial and leave everything ready."] },
  { stage: "Close", q: "(Vet) 'Okay, it's interesting. Leave me some info and I'll think about it.'",
    answer: ["Welcome it, but ask for a small commitment now to create momentum.",
             "'Shall we start with a trial, a pot of each size? Five pots clears free shipping and it's next-day.'",
             "Leave brochures + score cards; agree a follow-up date to review.",
             "Confirm the order before you leave."] },
  { stage: "Close", q: "(Vet) 'Fine, send a pot of each and we'll trial it.'",
    answer: ["Confirm clearly: a 50s and a 100s, ordered today before 4pm for next-day delivery.",
             "Set up the team: leave the mobility score cards and brochures.",
             "Lock the follow-up: 'I'll check in in two weeks to see how it's landing.'",
             "Thank them and leave a strong final impression."] }
];

window.GUARDRAILS = window.COMPETITOR.guardrails;
