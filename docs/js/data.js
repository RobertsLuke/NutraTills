/* ============================================================================
   NutraTills, data layer (category-agnostic schema)
   First category: DIGESTIVE (Nutrabio range)
   Sources: documentation/datasheets + RANGE transcript (Emma, clinical advisor)
   Content is DERIVED for sales-readiness, not veterinary advice.
   ============================================================================ */

window.CATEGORY = {
  id: "digestive",
  name: "Digestive Health",
  emoji: "🦴",
  tagline: "The Nutrabio range, gut support, problem by problem.",
  rangeStory:
    "The Nutrabio digestive range is organised by the problem in front of you. For acute upsets you've got " +
    "the Rapid Stool Support Chews (consumer, mild–moderate) and the Advanced Rapid Digestive Support Paste " +
    "(vet-exclusive, mild–severe). For chronic/ongoing cases there's the Daily Digestive Support Powder " +
    "(consumer) stepping up to the Advanced Daily Powder (vet-exclusive, postbiotic). Anal Gland Support " +
    "covers fibre-led anal-gland cases.",
  sharedEvidence: [
    "Branded, evidence-backed actives: Calsporin (patented Bacillus velezensis), ProFeed (scFOS), Oralin (EC-licensed Enterococcus faecium), EpiCor (Cargill postbiotic).",
    "Oralin is the only Enterococcus faecium strain with EC licence approval for dogs & cats.",
    "Made in Britain, 'Backed by science, trusted by vets, loved by pets.'"
  ]
};

/* -------- Problem groups: the problem-led spine from the range video -------- */
window.PROBLEM_GROUPS = [
  {
    id: "acute",
    name: "Acute diarrhoea",
    blurb: "Short-term upsets. Two options split by severity and channel.",
    scenario: "A patient presents with sudden, short-term acute diarrhoea. What do you reach for?",
    productIds: ["rapid-stool-chews", "advanced-rapid-paste"],
    comparison: {
      caption: "Chews vs Paste, same problem, different positioning.",
      axes: [
        { label: "Channel", values: { "rapid-stool-chews": "Consumer", "advanced-rapid-paste": "Vet-practice exclusive" } },
        { label: "Severity", values: { "rapid-stool-chews": "Mild → moderate", "advanced-rapid-paste": "Mild → severe" } },
        { label: "Probiotic", values: { "rapid-stool-chews": "Bacillus velezensis (Calsporin)", "advanced-rapid-paste": "Enterococcus faecium (4bn CFU/notch)" } },
        { label: "Clay / adsorbent", values: { "rapid-stool-chews": "Montmorillonite (high content)", "advanced-rapid-paste": "Kaolin (low, no constipation risk)" } },
        { label: "Best for", values: { "rapid-stool-chews": "Fit-in-themselves, occasional loose stools, chew-takers", "advanced-rapid-paste": "More severe; elderly cats that flip-flop diarrhoea↔constipation" } },
        { label: "Price/day", values: { "rapid-stool-chews": "£5.33 (3-day pack)", "advanced-rapid-paste": "Day 1 £6.15, Day 2+ £4.10 (20kg dog)" } }
      ]
    }
  },
  {
    id: "chronic",
    name: "Chronic diarrhoea",
    blurb: "Ongoing / niggly gut. Daily powder, stepping up to the Advanced postbiotic powder.",
    scenario: "A patient presents with chronic, ongoing or recurring, digestive upset. What's your plan?",
    productIds: ["daily-powder", "advanced-daily-powder"],
    comparison: {
      caption: "Daily vs Advanced powder, when to step up.",
      axes: [
        { label: "Channel", values: { "daily-powder": "Consumer", "advanced-daily-powder": "Vet-practice exclusive" } },
        { label: "Severity", values: { "daily-powder": "Mild → moderate", "advanced-daily-powder": "Mild → severe" } },
        { label: "Biotics", values: { "daily-powder": "Pre + probiotic", "advanced-daily-powder": "Pre + POSTbiotic (EpiCor)" } },
        { label: "B vitamins", values: { "daily-powder": "B12", "advanced-daily-powder": "B12 + B9 (folic acid)" } },
        { label: "Immunocompromised", values: { "daily-powder": "Live probiotic", "advanced-daily-powder": "Safe, no live microbes needed" } },
        { label: "Price/day", values: { "daily-powder": "97p (20kg dog)", "advanced-daily-powder": "£1.33" } }
      ]
    }
  },
  {
    id: "anal-gland",
    name: "Anal gland support",
    blurb: "Fibre-led support for stool quality & normal anal gland expression.",
    scenario: "A patient presents with recurrent anal gland problems tied to poor stool quality.",
    productIds: ["anal-gland"],
    comparison: null
  }
];

/* ------------------------------- Products --------------------------------- */
window.PRODUCTS = [
  {
    id: "rapid-stool-chews",
    name: "Nutrabio Rapid Stool Support Chews",
    short: "Rapid Stool Chews",
    subBrand: "nutrabio",
    species: ["Dogs"],
    format: "Chew (2.5g / 3.75g)",
    formShort: "Chewable",
    doseBullet: "Dosing: 1 chew twice daily for 3 days, then see a vet if no improvement.",
    channel: "Consumer",
    legacy: false,
    positioning: "A triple-action digestive chew that helps maintain healthy digestion, normal stool consistency and a balanced gut microbiome, short-term support for acute upsets.",
    whatItDoes: ["Firms loose stools", "Binds toxins & intestinal irritants", "Aids overall digestive function"],
    benefits: [
      ["High clay content", "Montmorillonite clay drives stool firmness."],
      ["Probiotic support", "Spore-forming probiotic that survives manufacture."],
      ["Highly palatable", "Tasty chew, easy to administer."],
      ["Easy administration", "No syringes or pastes."]
    ],
    keyIngredients: ["Montmorillonite clay", "Activated charcoal", "Bacillus velezensis (Calsporin)", "Inulin", "Beta-glucans"],
    ingredientDeepDive: [
      { name: "Montmorillonite clay", cls: "Adsorbent clay", mechanism: "Natural adsorbent, binds excess moisture, toxins and unwanted substances in the gut.", benefit: "Key driver of stool firmness." },
      { name: "Activated charcoal (coconut)", cls: "Adsorbent", mechanism: "Highly porous surface absorbs gas molecules and toxins, preventing the body absorbing them.", benefit: "Reduces flatulence and helps bloating." },
      { name: "Bacillus velezensis (Calsporin)", cls: "Probiotic (spore-forming)", mechanism: "Live bacteria that stabilises gut flora; spore-former chosen specifically because it survives chew manufacture and stays live.", benefit: "Stable, live probiotic in a chew.", hook: "Calsporin is a patented strain, additional supporting data & research behind it." },
      { name: "Prebiotics, inulin (chicory) + beta-glucans (yeast)", cls: "Prebiotic", mechanism: "Restore the gut environment and feed the probiotics.", benefit: "Supports overall microbiome health." }
    ],
    quantified: { unitLabel: "per 2.5g / 3.75g chew", rows: [
      ["Montmorillonite clay", "1.03g / 1.55g"], ["Inulin", "26mg / 39mg"], ["Chia seed", "26mg / 39mg"],
      ["Activated charcoal", "26mg / 39mg"], ["Vitamin C", "26mg / 39mg"], ["Hydrolysed yeast", "11mg / 16.5mg"],
      ["Vitamin D", "200iu / 300iu"], ["Bacillus velezensis", "6×10⁸ / 9×10⁸ CFU"]
    ]},
    dosing: { note: "1 chew twice daily for 3 days. If no improvement after 3 days, seek veterinary advice (do not continue).", rows: [
      ["Under 25kg", "", "2 × 2.5g chews/day"], ["Over 25kg", "", "2 × 3.75g chews/day"]
    ]},
    pricePerDay: "£5.33 (3-day pack)",
    evidence: ["Calsporin patented probiotic"]
  },

  {
    id: "advanced-rapid-paste",
    name: "Nutrabio Advanced Rapid Digestive Support Paste",
    short: "Advanced Rapid Paste",
    subBrand: "nutrabio advanced",
    species: ["Dogs", "Cats"],
    format: "Oral paste (20ml)",
    formShort: "Oral paste",
    doseBullet: "Dosing: a loading dose on day 1, then daily maintenance.",
    channel: "Vet-practice exclusive",
    legacy: false,
    positioning: "A high-strength, palatable oral paste that naturally corrects gut microflora to quickly and effectively resolve the root cause of acute diarrhoea.",
    whatItDoes: ["Firms loose stools", "Aids digestive function", "Soothes an irritated / inflamed gut lining"],
    benefits: [
      ["Very high strength", "4 billion CFU per 2ml notch."],
      ["Pre & probiotic support", "Boosts good flora, blocks bad."],
      ["Highly palatable", "Easy syringe administration."]
    ],
    keyIngredients: ["Enterococcus faecium", "FOS", "MOS", "Sweet basil extract", "Kaolin"],
    ingredientDeepDive: [
      { name: "Enterococcus faecium", cls: "Probiotic (high strength)", mechanism: "4 billion CFU per 2ml notch, boosts and supports positive gut flora.", benefit: "Particularly effective against acute diarrhoea from infection, dietary indiscretion and stress." },
      { name: "Prebiotics, FOS & MOS", cls: "Prebiotic", mechanism: "Increase beneficial bacteria while blocking bad bacteria from attaching to the gut wall.", benefit: "Healthier microbiome environment." },
      { name: "Kaolin (low levels)", cls: "Adsorbent", mechanism: "Binds toxins and absorbs some excess moisture, kept low to avoid over-binding.", benefit: "Firms stools with reduced constipation risk; helps suppress E. coli, salmonella & pseudomonas." },
      { name: "Sweet basil extract", cls: "Botanical", mechanism: "Normalises gut motility and facilitates natural absorption of excess moisture.", benefit: "Works with kaolin to form stools without over-binding." }
    ],
    quantified: { unitLabel: "composition", rows: [
      ["Enterococcus faecium", "DSM 10663 / NCIMB 10415 (4b1707), 2×10¹² CFU/kg"],
      ["Kaolin clay", "100g/kg"], ["Prebiotics", "FOS + MOS"],
      ["Other", "Sunflower & canola oil, sweet basil extract, yeast extract"]
    ]},
    dosing: { note: "Loading dose Day 1, then maintenance Days 2+. (1 notch = 2ml.)", rows: [
      ["Cats / Small dog", "0–9.99kg", "4ml (2 notch) → 2ml"],
      ["Medium dog", "10–24.99kg", "6ml (3 notch) → 4ml"],
      ["Large dog", "25–49.99kg", "8ml (4 notch) → 4ml"],
      ["Large dog", "50kg+", "10ml (5 notch) → 6ml"]
    ]},
    pricePerDay: "Day 1 £6.15, Day 2+ £4.10 (20kg dog)",
    evidence: ["High-CFU Enterococcus faecium", "Vet-exclusive positioning"]
  },

  {
    id: "daily-powder",
    name: "Nutrabio Daily Digestive Support Powder",
    short: "Daily Powder",
    subBrand: "nutrabio",
    species: ["Dogs", "Cats"],
    format: "Powder sachet (1g)",
    formShort: "Powder sachet",
    doseBullet: "Dosing: 1 sachet daily, suitable for any bodyweight.",
    channel: "Consumer",
    legacy: false,
    positioning: "A gentle daily supplement supporting healthy digestion through prebiotics, probiotics and yeast-derived gut support, rebuilds gut balance, optimises stool and promotes immunity & vitality.",
    whatItDoes: ["Aids digestive function", "Optimises stool consistency", "Supports immunity & vitality"],
    benefits: [
      ["2 billion CFU probiotics", "High probiotic level per sachet."],
      ["Added prebiotics & B12", "ProFeed prebiotic + vitamin B12."],
      ["Highly palatable", "Added palatant, very tasty, easy mixing."]
    ],
    keyIngredients: ["ProFeed (scFOS prebiotic)", "Oralin / Enterococcus faecium", "Vitamin B12"],
    ingredientDeepDive: [
      { name: "ProFeed (prebiotic, scFOS)", cls: "Prebiotic (branded)", mechanism: "Short-chain fructo-oligosaccharides nourish beneficial gut bacteria and optimise GI function.", benefit: "Supports microbiome balance and digestive comfort.", hook: "ProFeed is a branded prebiotic, additional research & data behind it." },
      { name: "Oralin / Enterococcus faecium", cls: "Probiotic (branded)", mechanism: "Found naturally in the gut; boosting it rebalances the microbiome. 2 billion CFU/sachet, micro-encapsulated to pass safely through the digestive tract.", benefit: "Normalises gut microbiota and supports immunity.", hook: "Only Enterococcus faecium strain with EC licence approval for dogs & cats." },
      { name: "Vitamin B12", cls: "Vitamin", mechanism: "Supports nervous-system health, metabolic energy and red-blood-cell production.", benefit: "Replaces B12 that drops with long-term gut issues / poor absorption." }
    ],
    quantified: { unitLabel: "per 1g sachet", rows: [
      ["Hydrolysed yeast (inc prebiotics)", "715mg"], ["Enterococcus faecium", "2×10⁹ CFU"], ["Vitamin B12", "0.25mg"]
    ]},
    dosing: { note: "One-size daily dosing, sprinkle onto/into food; can split over meals.", rows: [
      ["All weights", "", "1 sachet/day"]
    ]},
    pricePerDay: "97p (20kg dog)",
    evidence: ["ProFeed branded prebiotic", "Oralin, EC-licensed strain"]
  },

  {
    id: "advanced-daily-powder",
    name: "Nutrabio Advanced Daily Digestive Support Powder",
    short: "Advanced Daily Powder",
    subBrand: "nutrabio advanced",
    species: ["Dogs", "Cats"],
    format: "Powder sachet (1g / 3g / 4.5g)",
    formShort: "Powder sachet",
    doseBullet: "Dosing: 1 weight specific sachet daily.",
    channel: "Vet-practice exclusive",
    legacy: false,
    positioning: "Triple-action gut support, ready-to-use postbiotic compounds plus prebiotic support and essential B vitamins. Ideal for ongoing digestive sensitivity.",
    whatItDoes: ["Aids digestion & immunity", "Maintains the gut microbiome", "Supplements B12 & B9 deficiencies"],
    benefits: [
      ["Evidence-based pre & postbiotics", "FOS/MOS + EpiCor postbiotic."],
      ["High cyanocobalamin (B12)", "Plus folic acid (B9)."],
      ["Highly palatable", "Tasty, easy-to-mix powder."]
    ],
    keyIngredients: ["FOS & MOS prebiotics", "EpiCor postbiotic", "Vitamin B12", "Folic acid (B9)"],
    ingredientDeepDive: [
      { name: "Prebiotics, FOS & MOS", cls: "Prebiotic", mechanism: "Feed good bacteria and block harmful pathogens from attaching to the gut lining.", benefit: "Microbiome balance." },
      { name: "EpiCor (postbiotic)", cls: "Postbiotic", mechanism: "Yeast-derived (Saccharomyces cerevisiae) bioactive fermentation metabolites, support immune function and gut health WITHOUT containing live microbes.", benefit: "Safe option for severely immunocompromised patients where live probiotics may be unwise.", hook: "EpiCor is a registered trademark (Cargill), branded, evidence-backed postbiotic." },
      { name: "Vitamin B12 (cyanocobalamin)", cls: "Vitamin", mechanism: "Red-blood-cell formation, neurological function and energy metabolism.", benefit: "High levels for pets with absorption issues." },
      { name: "Folic acid (B9)", cls: "Vitamin", mechanism: "Supports cell growth and metabolic function.", benefit: "Works with B12 to support GI health." }
    ],
    quantified: { unitLabel: "per 1g / 3g / 4.5g sachet", rows: [
      ["Hydrolysed yeast", "915mg / 2,745mg / 4,115mg"], ["EpiCor", "70mg / 210mg / 315mg"],
      ["Vitamin B12", "0.5mg / 1.5mg / 2.25mg"], ["Vitamin E", "1mg / 3mg / 4.5mg"], ["Folic acid", "0.2mg / 0.6mg / 0.9mg"]
    ]},
    dosing: { note: "Weight-specific sachets, sprinkle onto/into food; can split over meals.", rows: [
      ["Under 10kg", "", "1 × 1g sachet"], ["10–30kg", "", "1 × 3g sachet"], ["30kg+", "", "1 × 4.5g sachet"]
    ]},
    pricePerDay: "£1.33 (20kg dog)",
    evidence: ["EpiCor (Cargill) postbiotic", "Vet-exclusive positioning"]
  },

  {
    id: "anal-gland",
    name: "Nutrabio Anal Gland Support",
    short: "Anal Gland Support",
    subBrand: "nutrabio",
    aka: "formerly Nutrafiber",
    species: ["Dogs"],
    format: "Pellets (10g scoop)",
    formShort: "Pellets",
    doseBullet: "Dosing: 0.5 to 3 scoops daily depending on bodyweight.",
    channel: "Consumer",
    legacy: false,
    positioning: "A high-fibre supplement with added pre & probiotics to support healthy digestion, stool quality and regular bowel movements, and normal anal gland function, especially on low-fibre or high-meat diets.",
    whatItDoes: ["Encourages normal bowel movements", "Optimises stool consistency (firms loose AND softens hard)", "Aids long-term gut health"],
    benefits: [
      ["High fibre", "Soluble + insoluble fibre blend."],
      ["Prebiotics & probiotics", "Comprehensive microbiome support."],
      ["Palatable", "Eaten in food or as a treat."]
    ],
    keyIngredients: ["Dried apple", "Sugar beet pulp", "Psyllium husk", "Hydrolysed fish protein", "Bacillus velezensis (Calsporin)", "Inulin"],
    ingredientDeepDive: [
      { name: "Dried apple & sugar beet pulp", cls: "Soluble + insoluble fibre", mechanism: "Excellent sources of both fibre types; absorb excess water in the intestines.", benefit: "Normalise faecal consistency, important for emptying anal glands." },
      { name: "Psyllium husk", cls: "Soluble fibre (high water-binding)", mechanism: "Increases faecal bulk and forms a lubricating gel around the faeces.", benefit: "Bulk without constipation; encourages normal anal gland expression." },
      { name: "Hydrolysed fish protein", cls: "Peptides", mechanism: "Provides peptides (e.g. gastrins) that help maintain a healthy gut in food-sensitive animals.", benefit: "Gut support + high palatability." },
      { name: "Bacillus velezensis (Calsporin) + inulin/yeast", cls: "Probiotic + prebiotic", mechanism: "Live bacteria (survives manufacture into pellets) plus prebiotic fibre rebalance the gut environment.", benefit: "Comprehensive microbiome support for problem anal-gland cases." }
    ],
    quantified: { unitLabel: "per 10g scoop", rows: [
      ["Dried apple", "5,000mg"], ["Sugar beet pulp", "2,750mg"], ["Psyllium husk (99%)", "1,000mg"],
      ["Hydrolysed fish protein", "500mg"], ["Yeast extract", "500mg"], ["Inulin", "162mg"], ["Bacillus velezensis (C-3102)", "2×10⁸ CFU"]
    ]},
    dosing: { note: "1 rounded scoop = 10g.", rows: [
      ["0–10kg", "", "0.5 scoop/day"], ["10–25kg", "", "1 scoop/day"], ["25–40kg", "", "2 scoops/day"], ["40kg+", "", "3 scoops/day"]
    ]},
    pricePerDay: null,
    evidence: ["Calsporin probiotic", "Vet/RVN testimonials on faecal-score improvement"]
  }
];

/* ------------------------- DEFEND: objection bank -------------------------- */
/* Derived from the range video's comparison sections + sales reasoning.
   (Digestive has no singular FAQ video yet, graceful degradation per plan.md.) */
window.OBJECTIONS = [
  { id: "ob1", tag: "Differentiation",
    q: "\"Why would I stock both the chews and the paste, aren't they the same?\"",
    a: ["Same problem (acute diarrhoea), different positioning.",
        "Chews: consumer, mild→moderate, Bacillus velezensis, high montmorillonite clay, for fit-in-themselves dogs or occasional loose stools.",
        "Paste: vet-exclusive, mild→severe, high-strength Enterococcus faecium, low kaolin (no constipation risk).",
        "So you reach for the paste on the more severe cases coming through the practice."] },
  { id: "ob2", tag: "Differentiation",
    q: "\"What's the difference between the Daily and the Advanced powder?\"",
    a: ["Daily = pre + probiotic, B12, consumer, mild→moderate.",
        "Advanced = pre + POSTbiotic (EpiCor), B12 + B9, vet-exclusive, mild→severe.",
        "The postbiotic is the headline: it supports the gut WITHOUT live microbes, so it's a safe option in severely immunocompromised patients where a live probiotic may be unwise."] },
  { id: "ob4", tag: "Science",
    q: "\"What even is a postbiotic, and why put one in?\"",
    a: ["EpiCor is a yeast-derived (Saccharomyces cerevisiae) postbiotic, the bioactive metabolites from fermentation.",
        "It directly supports immune function, gut health and resilience without relying on live bacteria.",
        "That's exactly why it's valuable for immunocompromised patients you still need to get GI-stable."] },
  { id: "ob5", tag: "Price",
    q: "\"The chews are £5.33 a day, that's pricey.\"",
    a: ["It's a 3-day pack for short-term acute support, not an ongoing cost.",
        "For that you get high clay content, activated charcoal toxin-binding and a live probiotic.",
        "If it isn't resolving in 3 days the advice is to see a vet anyway, so it's a bounded, low-total spend."] },
  { id: "ob6", tag: "Science",
    q: "\"Why montmorillonite in the chews but kaolin in the paste?\"",
    a: ["Montmorillonite is a high-adsorbency clay, great for firming, used at high content in the chews.",
        "Kaolin is used at LOW levels in the paste specifically to avoid over-binding and constipation risk.",
        "Plus the paste's sweet basil normalises motility, so it firms without tipping a patient into constipation (handy for elderly cats that flip-flop)."] },
  { id: "ob7", tag: "Suitability",
    q: "\"Can I use these in cats?\"",
    a: ["Cats & dogs: the Paste, Daily Powder and Advanced Daily Powder.",
        "Dogs only: the Rapid Stool Support Chews and Anal Gland Support.",
        "So for a cat with an acute upset, reach for the Paste, not the chews."] },
  { id: "ob8", tag: "Clinical fit",
    q: "\"A dog keeps having recurrent anal gland issues on a high-meat, low-fibre diet.\"",
    a: ["Anal Gland Support, a fibre-led formula built for exactly this.",
        "Psyllium husk + dried apple + sugar beet pulp give bulk plus a lubricating gel → normal anal gland expression without constipation.",
        "Plus Calsporin probiotic and prebiotic fibre for long-term gut health."] },
  { id: "ob9", tag: "Science",
    q: "\"Will the probiotic actually survive, being made into a chew, or the stomach?\"",
    a: ["Chews use Bacillus velezensis (Calsporin) precisely because the spore-former survives manufacture and stays live.",
        "The Daily Powder's Enterococcus faecium is micro-encapsulated to pass safely through the digestive tract.",
        "The Paste's high-CFU Enterococcus faecium is delivered at strength to colonise the lower gut."] },
  { id: "ob10", tag: "Evidence",
    q: "\"How is any of this evidence-based?\"",
    a: ["The actives are branded, data-backed ingredients: Calsporin (patented), ProFeed (scFOS), Oralin and EpiCor (Cargill).",
        "Oralin is the only Enterococcus faecium strain with EC licence approval for dogs & cats.",
        "That's the 'backed by science' story you can stand behind in front of a vet."] }
];

/* -------------------------- MOCK interview drills -------------------------- */
/* Interleaves scenario ("which one, when") with objection-style pushback. */
window.MOCK = [
  { id: "m1", type: "Scenario",
    q: "A vet describes a 4-year-old Labrador with sudden loose stools after scavenging on a walk, otherwise bright and well. Owner wants something off-the-shelf. What do you suggest?",
    answer: ["Rapid Stool Support Chews, consumer-available, built for mild→moderate acute upsets in an otherwise-well dog.",
             "Montmorillonite clay + activated charcoal to firm and bind toxins; Bacillus velezensis probiotic.",
             "Set the boundary: 1 chew twice daily for 3 days; if not resolved, see the vet."],
    products: ["rapid-stool-chews"] },
  { id: "m2", type: "Scenario",
    q: "An elderly cat is brought in that swings between diarrhoea and constipation. Which acute product, and why?",
    answer: ["Advanced Rapid Digestive Support Paste, it uses LOW-level kaolin (not high montmorillonite), so no constipation risk.",
             "Sweet basil normalises gut motility, firming without over-binding.",
             "It's vet-exclusive and cat-suitable, ideal for this flip-flop patient."],
    products: ["advanced-rapid-paste"] },
  { id: "m3", type: "Pushback",
    q: "\"Isn't the Advanced Daily Powder just the normal powder with a markup?\"",
    answer: ["No, the actives differ. Daily = pre + probiotic + B12. Advanced = pre + POSTbiotic (EpiCor) + B12 + B9.",
             "The postbiotic works without live microbes, safe for severely immunocompromised patients.",
             "Different clinical job, not just a price tier."],
    products: ["advanced-daily-powder", "daily-powder"] },
  { id: "m4", type: "Scenario",
    q: "A severely immunocompromised dog needs gut support but the vet is wary of live probiotics. Your recommendation?",
    answer: ["Advanced Daily Powder, the EpiCor postbiotic supports gut & immune health without introducing live bacteria.",
             "You still get GI stabilisation safely.",
             "Plus B12 + B9 for absorption-compromised patients."],
    products: ["advanced-daily-powder"] },
  { id: "m6", type: "Scenario",
    q: "Recurrent anal gland problems in a dog on a raw, high-meat diet. What do you reach for?",
    answer: ["Anal Gland Support, fibre-led, designed for low-fibre/high-meat diets.",
             "Psyllium + apple + sugar beet pulp add bulk and a lubricating gel for normal expression.",
             "Dogs only; dose by bodyweight (10g scoop)."],
    products: ["anal-gland"] },
  { id: "m7", type: "Pushback",
    q: "\"How do I know the probiotics survive to do anything?\"",
    answer: ["Each format is matched to the challenge: Calsporin (spore-former) survives chew manufacture.",
             "The Daily Powder's Enterococcus faecium is micro-encapsulated through the gut.",
             "The Paste delivers a high CFU count to colonise the lower gut quickly."],
    products: ["rapid-stool-chews", "daily-powder", "advanced-rapid-paste"] },
  { id: "m8", type: "Scenario",
    q: "Give me the 30-second walkthrough of the whole digestive range as if I'm a vet you've just met.",
    answer: ["Organise it by problem. Acute: Rapid Stool Chews (consumer, mild–mod) → Advanced Rapid Paste (vet, mild–severe).",
             "Chronic: Daily Powder (consumer) → Advanced Daily Powder (vet, postbiotic, B12+B9).",
             "Anal Gland Support for fibre-led anal gland cases.",
             "All built on branded, evidence-backed actives, Calsporin, ProFeed, Oralin, EpiCor."],
    products: ["rapid-stool-chews", "advanced-rapid-paste", "daily-powder", "advanced-daily-powder", "anal-gland"] }
];
