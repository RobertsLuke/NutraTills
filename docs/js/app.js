/* ============================================================================
   NutraTills, app logic (vanilla JS, category-agnostic views).
   Stages: Dashboard, LEARN (guided carousel), DEFEND, MOCK.
   Progress persisted to localStorage.
   ============================================================================ */

const el = (h) => { const t = document.createElement("template"); t.innerHTML = h.trim(); return t.content.firstChild; };
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const P  = (id) => PRODUCTS.find(p => p.id === id);

/* ---------------- progress store ---------------- */
const STORE_KEY = "nutratills.progress.v1";
const progress = loadProgress();
function loadProgress() {
  try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; }
  catch { return {}; }
}
function saveProgress() { try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch {} }
function mark(stage, id) { (progress[stage] = progress[stage] || {})[id] = true; saveProgress(); refreshBadges(); }
function isDone(stage, id) { return !!(progress[stage] && progress[stage][id]); }
function countDone(stage, validIds) {
  if (!progress[stage]) return 0;
  const keys = Object.keys(progress[stage]);
  return validIds ? keys.filter(k => validIds.includes(k)).length : keys.length;
}

/* ---------------- nav model ---------------- */
const NAV = [
  { id:"dashboard", label:"Dashboard", ic:"🏠" },
  { id:"learn",     label:"Learn",     ic:"📘", stage:true },
  { id:"defend",    label:"Defend",    ic:"🛡️", stage:true },
  { id:"mock",      label:"Mock Interview", ic:"🎤", stage:true },
];

/* ---------------- shell ---------------- */
function renderShell() {
  document.body.innerHTML = "";
  const app = el(`<div class="app"></div>`);
  app.appendChild(el(`
    <aside class="sidebar doodles">
      <div class="logo"><span class="mark">🐾</span><div><b>Nutra</b><span>Tills</span></div></div>
      <div class="side-sub">Sales-rep interview prep</div>
      <nav class="nav" id="nav"></nav>
      <div class="side-foot">
        Category: <b style="color:#eafaf5">${CATEGORY.name}</b><br>
        ${PRODUCTS.length} products, ${PROBLEM_GROUPS.length} problem groups<br><br>
        Tip: do <b style="color:#eafaf5">Learn, Defend, Mock</b> in order, out loud.
      </div>
    </aside>`));

  const nav = $(".nav", app);
  nav.appendChild(el(`<div class="grp-label">Overview</div>`));
  navBtn(nav, NAV[0]);
  nav.appendChild(el(`<div class="grp-label">The 3 stages</div>`));
  NAV.slice(1).forEach(n => navBtn(nav, n));

  const main = el(`
    <div class="main">
      <div class="topbar">
        <div class="crumb" id="crumb"></div>
        <div class="who"><span>John Doe</span><span class="av">JD</span></div>
      </div>
      <div class="content" id="content"></div>
    </div>`);
  app.appendChild(main);
  document.body.appendChild(app);
  refreshBadges();
}
function navBtn(nav, n) {
  const b = el(`<button data-view="${n.id}"><span class="ic">${n.ic}</span>${n.label}${n.stage ? `<span class="badge" data-badge="${n.id}"></span>` : ""}</button>`);
  b.addEventListener("click", () => go(n.id));
  nav.appendChild(b);
}
function refreshBadges() {
  const productIds = PRODUCTS.map(p => p.id);
  const objIds = OBJECTIONS.map(o => o.id);
  const mockIds = MOCK.map(m => m.id);
  const totals = { learn: [PRODUCTS.length, productIds], defend: [OBJECTIONS.length, objIds], mock: [MOCK.length, mockIds] };
  $$("[data-badge]").forEach(s => {
    const k = s.dataset.badge;
    s.textContent = `${countDone(k, totals[k][1])}/${totals[k][0]}`;
  });
}

/* ---------------- router ---------------- */
const VIEWS = { dashboard: viewDashboard, learn: viewLearn, defend: viewDefend, mock: viewMock };
function go(id) {
  if (!VIEWS[id]) id = "dashboard";
  $$(".nav button").forEach(b => b.classList.toggle("active", b.dataset.view === id));
  const labels = { dashboard:"Dashboard", learn:"Learn", defend:"Defend", mock:"Mock Interview" };
  $("#crumb").innerHTML = `${CATEGORY.emoji} <b>${CATEGORY.name}</b> &nbsp;/&nbsp; ${labels[id]}`;
  const c = $("#content"); c.innerHTML = "";
  VIEWS[id](c);
  window.scrollTo(0, 0);
  location.hash = id;
}

/* ====================================================================
   DASHBOARD
   ==================================================================== */
function viewDashboard(c) {
  c.appendChild(el(`
    <div class="page-hero learn doodles">
      <div class="eyebrow">${CATEGORY.name}</div>
      <h1>${CATEGORY.tagline}</h1>
      <p>Work the three stages in order. <b>Learn</b> the range, <b>Defend</b> it against pushback, then <b>Mock</b> the interview. Everything here is built from Nutravet's own datasheets and range video.</p>
    </div>`));

  const learn = countDone("learn", PRODUCTS.map(p=>p.id));
  const defend = countDone("defend", OBJECTIONS.map(o=>o.id));
  const mock = countDone("mock", MOCK.map(m=>m.id));
  c.appendChild(el(`
    <div class="stat-grid">
      <div class="stat"><div class="n">${PRODUCTS.length}</div><div class="l">Products</div></div>
      <div class="stat"><div class="n">${learn}/${PRODUCTS.length}</div><div class="l">Learned</div></div>
      <div class="stat"><div class="n">${defend}/${OBJECTIONS.length}</div><div class="l">Objections drilled</div></div>
      <div class="stat"><div class="n">${mock}/${MOCK.length}</div><div class="l">Mock answered</div></div>
    </div>`));

  c.appendChild(el(`<div class="card"><h3>The 30-second range story</h3><div class="pitch">${CATEGORY.rangeStory}</div></div>`));

  const stages = el(`<div class="stage-cards"></div>`);
  stages.appendChild(stageCard("learn","Stage 1","Learn","Guided walkthrough: each problem, then its solutions, then the comparison."));
  stages.appendChild(stageCard("defend","Stage 2","Defend","Drill the objection bank: price, evidence, 'why this not that'."));
  stages.appendChild(stageCard("mock","Stage 3","Mock Interview","Scenarios and pushback, interleaved. Self-score how you did."));
  c.appendChild(stages);
}
function stageCard(id, st, h, p) {
  const d = el(`<div class="stage-card ${id} doodles"><div class="st">${st}</div><h3>${h}</h3><p>${p}</p><div class="go">Open →</div></div>`);
  d.addEventListener("click", () => go(id));
  return d;
}

/* ====================================================================
   LEARN, guided carousel
   Sequence: Problem  ->  (each Solution x 3 sections)  ->  Compare  ->  next problem
   ==================================================================== */
const SECTIONS = [
  { key: "what",    label: "What it does" },
  { key: "how",     label: "How it does it" },
  { key: "ingred",  label: "Ingredient details" }
];

function buildLearn() {
  const slides = [], units = [];
  let pnum = 0;
  const pushUnit = (type) => { units.push({ type, firstStep: slides.length }); return units.length - 1; };
  PROBLEM_GROUPS.forEach(g => {
    pnum++;
    const up = pushUnit("problem"); slides.push({ type: "problem", g, num: pnum, unit: up });
    g.productIds.forEach((pid, i) => {
      const p = P(pid), letter = String.fromCharCode(65 + i);
      const us = pushUnit("solution");
      for (let sec = 0; sec < SECTIONS.length; sec++) slides.push({ type: "solution", g, p, letter, section: sec, unit: us });
    });
    if (g.comparison) { const uc = pushUnit("comparison"); slides.push({ type: "comparison", g, unit: uc }); }
  });
  const ud = pushUnit("done"); slides.push({ type: "done", unit: ud });
  return { slides, units };
}

function viewLearn(c) {
  const { slides, units } = buildLearn();
  const N = slides.length;
  let i = 0;

  c.appendChild(el(`
    <div class="learn-carousel">
      <div class="lc-top">
        <div class="lc-meta">Stage 1 · Learn · <span class="grp cap" id="lcGrp"></span></div>
        <div class="lc-step" id="lcStep"></div>
      </div>
      <div class="lc-bar"><span id="lcBar"></span></div>
      <div id="slide"></div>
      <div class="lc-nav">
        <button class="btn ghost" id="lcBack">Back</button>
        <div class="lc-dots" id="lcDots"></div>
        <button class="btn" id="lcNext">Next →</button>
      </div>
    </div>`));

  const slideEl = $("#slide", c), barEl = $("#lcBar", c), stepEl = $("#lcStep", c),
        grpEl = $("#lcGrp", c), backEl = $("#lcBack", c), nextEl = $("#lcNext", c), dotsEl = $("#lcDots", c);

  units.forEach((u, idx) => {
    const d = el(`<span class="lc-dot ${u.type === "problem" ? "problem" : ""}" title="${u.type}"></span>`);
    d.addEventListener("click", (e) => { e.stopPropagation(); goTo(u.firstStep); });
    dotsEl.appendChild(d);
  });

  backEl.addEventListener("click", (e) => { e.stopPropagation(); back(); });
  nextEl.addEventListener("click", (e) => { e.stopPropagation(); next(); });

  function goTo(n) { i = Math.max(0, Math.min(N - 1, n)); render(); }
  function next() { if (i < N - 1) { i++; render(); } }
  function back() { if (i > 0) { i--; render(); } }

  if (window._learnKey) document.removeEventListener("keydown", window._learnKey);
  window._learnKey = (e) => {
    if ((location.hash || "").slice(1) !== "learn") return;
    if (e.key === "ArrowRight" || e.key === " ") { e.preventDefault(); next(); }
    else if (e.key === "ArrowLeft") back();
  };
  document.addEventListener("keydown", window._learnKey);

  function render() {
    const s = slides[i];
    grpEl.textContent = s.type === "done" ? "Complete" : s.g.name;
    stepEl.textContent = `Step ${i + 1} of ${N}`;
    barEl.style.width = `${((i + 1) / N) * 100}%`;
    backEl.style.visibility = i === 0 ? "hidden" : "visible";
    nextEl.style.visibility = i === N - 1 ? "hidden" : "visible";
    $$(".lc-dot", dotsEl).forEach((d, idx) => d.classList.toggle("on", idx === s.unit));

    slideEl.innerHTML = "";
    let node;
    if (s.type === "problem")        node = slideProblem(s);
    else if (s.type === "solution")  { node = slideSolution(s, goTo, i); mark("learn", s.p.id); }
    else if (s.type === "comparison")node = slideComparison(s);
    else                             node = slideDone();
    slideEl.appendChild(node);

    // card-click advances only on problem & solution slides
    slideEl.onclick = (s.type === "problem" || s.type === "solution") ? () => next() : null;

    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  render();
}

function slideProblem(s) {
  return el(`
    <div class="slide slide-problem-plain">
      <div class="pp-eyebrow">Problem ${s.num} of ${PROBLEM_GROUPS.length}</div>
      <div class="pp-title">Problem ${s.num}: <span class="cap">${s.g.name}</span></div>
      <p class="pp-quote">"${s.g.scenario}"</p>
      <div class="pp-hint">Click anywhere or press the right arrow to see the first solution</div>
    </div>`);
}

function slideSolution(s, goTo, curIndex) {
  const p = s.p;
  const channelCls = p.legacy ? "is-legacy" : p.channel.startsWith("Vet") ? "is-vet" : "";
  const channelLabel = p.legacy ? "🗄️ Legacy product"
    : p.channel.startsWith("Vet") ? "🩺 Vet-exclusive product" : "🛒 Consumer-ready product";
  const base = curIndex - s.section;

  const node = el(`
    <div class="slide slide-solution ${channelCls}">
      <div class="sol-head doodles">
        <div class="eyebrow">Solution ${s.letter}</div>
        <h2>${p.name}</h2>
        <span class="sol-channel">${channelLabel}</span>
      </div>
      <div class="sol-body">
        <div class="sf-row">
          <div class="sf"><span class="sf-l">Target species</span><span class="sf-v">${p.species.join(" & ")}</span></div>
          <div class="sf"><span class="sf-l">Form</span><span class="sf-v">${p.formShort}</span></div>
        </div>
        <div class="sol-steps"></div>
        <div class="sol-content"></div>
      </div>
    </div>`);

  // section indicator
  const steps = $(".sol-steps", node);
  SECTIONS.forEach((sec, k) => {
    const b = el(`<button class="sol-step ${k === s.section ? "active" : ""}"><span class="num">${k + 1}</span>${sec.label}</button>`);
    b.addEventListener("click", (e) => { e.stopPropagation(); goTo(base + k); });
    steps.appendChild(b);
  });

  // section content
  const content = $(".sol-content", node);
  if (s.section === 0) {
    const ul = el(`<div><div class="sec-title">1. What it does</div><ul class="sol-list"></ul></div>`);
    const list = $("ul", ul);
    p.whatItDoes.forEach(x => list.appendChild(el(`<li>${x}</li>`)));
    list.appendChild(el(`<li class="dose-li">📋 ${p.doseBullet}</li>`));
    content.appendChild(ul);
  } else if (s.section === 1) {
    const ul = el(`<div><div class="sec-title">2. How it does it</div><ul class="sol-list"></ul></div>`);
    const list = $("ul", ul);
    p.benefits.forEach(b => list.appendChild(el(`<li><b>${b[0]}.</b> ${b[1]}</li>`)));
    content.appendChild(ul);
  } else {
    const wrap = el(`<div><div class="sec-title">3. Ingredient details</div><div class="ddwrap"></div></div>`);
    const dd = $(".ddwrap", wrap);
    p.ingredientDeepDive.forEach(ing => {
      dd.appendChild(el(`
        <div class="ing">
          <div><span class="nm">${ing.name}</span><span class="cls">${ing.cls}</span></div>
          <div class="mech">${ing.mechanism}</div>
          <div class="ben">→ ${ing.benefit}</div>
          ${ing.hook ? `<div class="hook">💡 ${ing.hook}</div>` : ""}
        </div>`));
    });
    content.appendChild(wrap);
  }
  return node;
}

function slideComparison(s) {
  const g = s.g, ids = g.productIds;
  const node = el(`
    <div class="slide slide-compare">
      <div class="cmp-head">
        <div class="eyebrow">Compare · self-test</div>
        <h2 class="cap">${g.name}</h2>
        <p>${g.comparison.caption} Click a row to reveal its answer.</p>
      </div>
      <div class="cmp-tools"><button class="btn ghost btn-sm" id="revealAll">Reveal all</button></div>
      <div class="cmp-wrap"></div>
    </div>`);

  const tbl = el(`<table class="cmp"></table>`);
  tbl.appendChild(el(`<thead><tr><th class="axis"></th>${ids.map(id => `<th>${P(id).short}</th>`).join("")}</tr></thead>`));
  const tb = el(`<tbody></tbody>`);
  g.comparison.axes.forEach(ax => {
    const tr = el(`<tr class="cmp-row"><td class="axis">${ax.label}</td>${ids.map(id =>
      `<td class="cmp-cell"><span class="ph">Click to reveal</span><span class="val">${ax.values[id] ?? "n/a"}</span></td>`).join("")}</tr>`);
    tr.addEventListener("click", (e) => { e.stopPropagation(); tr.classList.toggle("revealed"); });
    tb.appendChild(tr);
  });
  tbl.appendChild(tb);
  $(".cmp-wrap", node).appendChild(tbl);

  let allOpen = false;
  $("#revealAll", node).addEventListener("click", (e) => {
    e.stopPropagation();
    allOpen = !allOpen;
    $$(".cmp-row", node).forEach(r => r.classList.toggle("revealed", allOpen));
    e.target.textContent = allOpen ? "Hide all" : "Reveal all";
  });
  return node;
}

function slideDone() {
  const node = el(`
    <div class="slide slide-done doodles">
      <div class="big">✓</div>
      <h1>${CATEGORY.name}, covered</h1>
      <p>You've walked the full problem-led range: every problem, its solutions and the comparisons. Next, defend it against pushback.</p>
      <div class="btn-row">
        <button class="btn" id="dDefend">Go to Defend →</button>
        <button class="btn ghost" id="dRestart">Restart walkthrough</button>
      </div>
    </div>`);
  $("#dDefend", node).addEventListener("click", (e) => { e.stopPropagation(); go("defend"); });
  $("#dRestart", node).addEventListener("click", (e) => { e.stopPropagation(); go("learn"); });
  return node;
}

/* ====================================================================
   DEFEND, objection bank
   ==================================================================== */
function viewDefend(c) {
  c.appendChild(el(`
    <div class="page-hero defend doodles">
      <div class="eyebrow">Stage 2 · Defend</div>
      <h1>Hold your ground</h1>
      <p>Read the pushback, answer it OUT LOUD, then reveal the model rebuttal. Mark the ones you nailed. Vets push hardest on price, evidence and 'why this not that'.</p>
    </div>`));

  OBJECTIONS.forEach((o, i) => {
    const done = isDone("defend", o.id);
    const card = el(`
      <div class="reveal-card">
        <div class="meta-row"><span class="pill tag">${o.tag}</span><span class="pill outline">#${i+1}</span>${done?`<span class="pill" style="background:#e7f7ee;color:#2e9e6b">✓ Got it</span>`:""}</div>
        <div class="qline">${o.q}</div>
        <div class="reveal-body"><ul>${o.a.map(x=>`<li>${x}</li>`).join("")}</ul></div>
        <div class="btn-row">
          <button class="btn coral btn-sm reveal">Reveal rebuttal</button>
          <button class="btn ghost btn-sm got">I nailed it ✓</button>
        </div>
      </div>`);
    const body = $(".reveal-body", card);
    $(".reveal", card).addEventListener("click", (e) => {
      const open = body.classList.toggle("show");
      e.target.textContent = open ? "Hide rebuttal" : "Reveal rebuttal";
    });
    $(".got", card).addEventListener("click", (e) => { mark("defend", o.id); e.target.textContent = "Marked ✓"; e.target.disabled = true; });
    c.appendChild(card);
  });
}

/* ====================================================================
   MOCK, interleaved scenarios + pushback, self-scored
   ==================================================================== */
function viewMock(c) {
  let idx = 0, correct = 0, answeredThis = false;
  const total = MOCK.length;

  c.appendChild(el(`
    <div class="page-hero mock doodles">
      <div class="eyebrow">Stage 3 · Mock Interview</div>
      <h1>On the spot</h1>
      <p>Scenarios and pushback, mixed and unpredictable, like the real thing. Answer aloud, reveal the model answer, then self-score honestly.</p>
    </div>`));
  const stage = el(`<div></div>`);
  c.appendChild(stage);
  render();

  function render() {
    stage.innerHTML = "";
    if (idx >= total) return finish();
    const q = MOCK[idx];
    answeredThis = false;
    stage.appendChild(el(`
      <div class="mock-head">
        <div class="score-pill">Question ${idx+1} of ${total}</div>
        <div class="score-pill">Self-score: <b>${correct}</b></div>
      </div>
      <div class="progress"><span style="width:${(idx/total)*100}%"></span></div>`));

    const card = el(`
      <div class="reveal-card">
        <div class="meta-row"><span class="pill ${q.type==='Scenario'?'':'tag'}">${q.type}</span>
          ${q.products.map(pid=>`<span class="pill outline">${P(pid).short}</span>`).join("")}</div>
        <div class="qline">${q.q}</div>
        <div class="reveal-body plum"><ul>${q.answer.map(a=>`<li>${a}</li>`).join("")}</ul></div>
        <div class="btn-row">
          <button class="btn plum btn-sm reveal">Reveal model answer</button>
        </div>
        <div class="self-row" style="display:none">
          <span class="lbl">How did you do?</span>
          <button class="btn ghost btn-sm" data-good="1">✓ Nailed it</button>
          <button class="btn ghost btn-sm" data-good="0">✗ Missed bits</button>
        </div>
      </div>`);
    const body = $(".reveal-body", card), selfRow = $(".self-row", card);
    $(".reveal", card).addEventListener("click", (e) => {
      body.classList.add("show"); e.target.style.display = "none"; selfRow.style.display = "flex";
    });
    $$("[data-good]", card).forEach(btn => btn.addEventListener("click", () => {
      if (answeredThis) return; answeredThis = true;
      if (btn.dataset.good === "1") correct++;
      mark("mock", q.id);
      idx++; render();
    }));
    stage.appendChild(card);
  }

  function finish() {
    const pct = Math.round((correct/total)*100);
    const verdict = pct>=85 ? "Interview-ready on digestive. 🎯" : pct>=60 ? "Solid. Replay the ones you missed." : "Keep going. Revisit Learn, then come back.";
    stage.appendChild(el(`
      <div class="card">
        <h2>${correct} / ${total} · ${pct}%</h2>
        <p class="lead">${verdict}</p>
        <div class="btn-row">
          <button class="btn plum" id="again">Run again</button>
          <button class="btn ghost" id="toLearn">Back to Learn</button>
        </div>
      </div>`));
    $("#again", stage).addEventListener("click", () => { idx=0; correct=0; render(); });
    $("#toLearn", stage).addEventListener("click", () => go("learn"));
  }
}

/* ---------------- boot ---------------- */
renderShell();
go((location.hash || "#dashboard").slice(1));
