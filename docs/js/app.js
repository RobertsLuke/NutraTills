/* ============================================================================
   NutraTills, sales-visit playbook app (vanilla JS).
   Sections: Brief · Product · Commercials · Beat YuMove · The Visit ·
             Objections · Role-play. Digestive build archived at ./digestive/.
   ============================================================================ */

const el = (h) => { const t = document.createElement("template"); t.innerHTML = h.trim(); return t.content.firstChild; };
const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

const STORE_KEY = "nutratills.visit.v1";
const progress = load();
function load(){ try { return JSON.parse(localStorage.getItem(STORE_KEY)) || {}; } catch { return {}; } }
function save(){ try { localStorage.setItem(STORE_KEY, JSON.stringify(progress)); } catch {} }
function mark(stage, id){ (progress[stage]=progress[stage]||{})[id]=true; save(); badges(); }
function isDone(stage,id){ return !!(progress[stage] && progress[stage][id]); }
function count(stage){ return progress[stage] ? Object.keys(progress[stage]).length : 0; }

const NAV = [
  { id:"brief",       label:"The Brief",   ic:"📋" },
  { id:"product",     label:"The Product", ic:"🦴" },
  { id:"commercials", label:"Commercials", ic:"💷" },
  { id:"competitor",  label:"Beat YuMove", ic:"⚔️" },
  { id:"visit",       label:"The Visit",   ic:"🚪" },
  { id:"objections",  label:"Objections",  ic:"🛡️", badge:true },
  { id:"roleplay",    label:"Role-play",   ic:"🎤", badge:true },
];

function shell(){
  document.body.innerHTML = "";
  const app = el(`<div class="app"></div>`);
  app.appendChild(el(`
    <aside class="sidebar doodles">
      <div class="logo"><span class="mark">🐾</span><div><b>Nutra</b><span>Tills</span></div></div>
      <div class="side-sub">Nutraquin Chews · sales visit</div>
      <nav class="nav" id="nav"></nav>
      <div class="side-foot">
        Role-play prep for an independent practice that stocks YuMove.<br><br>
        <a href="./digestive/" style="color:#bdeedf">🗄️ Archived: digestive walkthrough</a>
      </div>
    </aside>`));
  const nav = $(".nav", app);
  NAV.forEach(n => {
    const b = el(`<button data-view="${n.id}"><span class="ic">${n.ic}</span>${n.label}${n.badge?`<span class="badge" data-badge="${n.id}"></span>`:""}</button>`);
    b.addEventListener("click", () => go(n.id));
    nav.appendChild(b);
  });
  app.appendChild(el(`
    <div class="main">
      <div class="topbar">
        <div class="crumb" id="crumb"></div>
        <div class="who"><span>Luke · Nutravet rep</span><span class="av">LR</span></div>
      </div>
      <div class="content" id="content"></div>
    </div>`));
  document.body.appendChild(app);
  badges();
}
function badges(){
  const totals = { objections: OBJECTIONS.length, roleplay: ROLEPLAY.length };
  $$("[data-badge]").forEach(s => { const k=s.dataset.badge; s.textContent = `${count(k)}/${totals[k]}`; });
}

const VIEWS = { brief:viewBrief, product:viewProduct, commercials:viewCommercials, competitor:viewCompetitor, visit:viewVisit, objections:viewObjections, roleplay:viewRolePlay };
function go(id){
  if(!VIEWS[id]) id="brief";
  $$(".nav button").forEach(b => b.classList.toggle("active", b.dataset.view===id));
  const label = (NAV.find(n=>n.id===id)||{}).label || "";
  $("#crumb").innerHTML = `🐾 <b>Nutraquin Chews visit</b> &nbsp;/&nbsp; ${label}`;
  const c = $("#content"); c.innerHTML=""; VIEWS[id](c); window.scrollTo(0,0); location.hash=id;
}

/* helpers */
function ul(items){ return `<ul class="clean">${items.map(x=>`<li>${x}</li>`).join("")}</ul>`; }
function heroBlock(cls, eyebrow, h1, p){ return `<div class="page-hero ${cls} doodles"><div class="eyebrow">${eyebrow}</div><h1>${h1}</h1><p>${p}</p></div>`; }

/* ============================== BRIEF ============================== */
function viewBrief(c){
  c.appendChild(el(heroBlock("learn","The brief", BRIEF.title, BRIEF.scenario)));

  c.appendChild(el(`
    <div class="card" style="border-left:4px solid var(--coral)">
      <h3>🎯 The winning strategy</h3>
      <div class="pitch">${BRIEF.winningStrategy}</div>
      <p class="small muted" style="margin-top:10px"><b>Goal:</b> ${BRIEF.goal}</p>
    </div>`));

  c.appendChild(el(`<div class="card"><h3>Key facts to anchor on</h3>${ul(BRIEF.keyFacts)}</div>`));

  const grid = el(`<div class="stage-cards"></div>`);
  [["product","🦴","The Product","Know Nutraquin Chews cold"],
   ["commercials","💷","Commercials","Margin, discounts, delivery"],
   ["competitor","⚔️","Beat YuMove","The channel / leakage angle"],
   ["visit","🚪","The Visit","Open → Discover → Pitch → Close"],
   ["objections","🛡️","Objections","Rebuttals, 'we use YuMove'"],
   ["roleplay","🎤","Role-play","Rehearse the whole visit"]].forEach(([id,ic,h,p])=>{
    const d = el(`<div class="stage-card learn doodles"><div class="st">${ic}</div><h3>${h}</h3><p>${p}</p><div class="go">Open →</div></div>`);
    d.addEventListener("click", ()=>go(id)); grid.appendChild(d);
  });
  c.appendChild(el(`<div class="section-title"><h2>Work through it</h2></div>`));
  c.appendChild(grid);
}

/* ============================== PRODUCT ============================== */
function viewProduct(c){
  const p = PRODUCT;
  c.appendChild(el(heroBlock("learn","The product", p.name, p.tagline)));

  const card = el(`<div class="card tier-1"></div>`);
  card.appendChild(el(`<div style="margin-bottom:6px">
    <span class="pill species">${p.species}</span>
    <span class="pill outline">${p.form}</span>
    <span class="pill consumer">Vet-channel exclusive</span></div>`));

  const sz = el(`<div><h3>Sizes & price</h3><table class="tbl"><thead><tr><th>Size</th><th>Practice price</th><th>RRP</th></tr></thead><tbody></tbody></table></div>`);
  p.sizes.forEach(s => $("tbody", sz).appendChild(el(`<tr><td>${s.size}</td><td class="k">${s.practice}</td><td>${s.rrp}</td></tr>`)));
  card.appendChild(sz);

  card.appendChild(el(`<h3>What it does</h3>${ul(p.whatItDoes)}`));
  card.appendChild(el(`<h3>How it does it</h3><ul class="clean">${p.benefits.map(b=>`<li><b>${b[0]}.</b> ${b[1]}</li>`).join("")}</ul>`));

  const ing = el(`<div><h3>Ingredient details</h3></div>`);
  p.ingredients.forEach(i => ing.appendChild(el(`<div class="ing"><div><span class="nm">${i.name}</span><span class="cls">${i.cls}</span></div><div class="mech">${i.detail}</div></div>`)));
  card.appendChild(ing);

  const dose = el(`<div><h3>Dosing</h3><p class="small muted" style="margin:0 0 4px">${p.dosing.note}</p><table class="tbl"><thead><tr><th>Type</th><th>Bodyweight</th><th>Dose</th></tr></thead><tbody></tbody></table></div>`);
  p.dosing.rows.forEach(r => $("tbody", dose).appendChild(el(`<tr><td>${r[0]}</td><td class="k">${r[1]}</td><td>${r[2]}</td></tr>`)));
  card.appendChild(dose);
  c.appendChild(card);

  c.appendChild(el(`<div class="card" style="border-left:4px solid var(--amber)"><h3>⚠️ Honest framing (don't get caught out)</h3>${ul(p.honestFraming)}</div>`));
}

/* ============================== COMMERCIALS ============================== */
function viewCommercials(c){
  const m = COMMERCIALS;
  c.appendChild(el(heroBlock("learn","The commercials", "The money story", "This is a margin sell. Turn these numbers into sentences the practice cares about.")));

  const tbl = el(`<div class="card"><h3>Margin per pot</h3><table class="tbl"><thead><tr><th>Size</th><th>Practice</th><th>RRP</th><th>Profit</th><th>Margin</th></tr></thead><tbody></tbody></table><div class="pitch" style="margin-top:12px">${m.marginLine}</div></div>`);
  m.margins.forEach(r => $("tbody", tbl).appendChild(el(`<tr><td>${r.size}</td><td class="k">${r.practice}</td><td>${r.rrp}</td><td><b>${r.profit}</b></td><td>${r.margin}</td></tr>`)));
  c.appendChild(tbl);

  const ops = el(`<div class="card"><h3>Ordering & terms</h3></div>`);
  ops.appendChild(el(`<p><b>Delivery.</b> ${m.delivery}</p>`));
  ops.appendChild(el(`<p><b>Free shipping.</b> ${m.freeShipping}</p>`));
  const dt = el(`<div><b>Discount structure</b><table class="tbl" style="margin-top:6px"><thead><tr><th>Order value</th><th>Discount</th></tr></thead><tbody></tbody></table></div>`);
  m.discountTiers.forEach(d => $("tbody", dt).appendChild(el(`<tr><td>${d[0]}</td><td>${d[1]}</td></tr>`)));
  ops.appendChild(dt);
  c.appendChild(ops);

  const sup = el(`<div class="card"><h3>Support materials (selling tools)</h3><ul class="clean">${m.supportMaterials.map(s=>`<li><b>${s[0]}.</b> ${s[1]}</li>`).join("")}</ul></div>`);
  c.appendChild(sup);

  c.appendChild(el(`<div class="card" style="border-left:4px solid var(--teal-500)"><h3>How to use it in the pitch</h3>${ul(m.useInPitch)}</div>`));
}

/* ============================== COMPETITOR ============================== */
function viewCompetitor(c){
  const k = COMPETITOR;
  c.appendChild(el(heroBlock("defend","Beat YuMove", "Respect it, then pivot", "YuMove is a great brand, that's not your battleground. Win on channel and margin: the sale they can't keep online.")));

  c.appendChild(el(`<div class="card"><h3>Respect it (never trash the No.1 brand)</h3>${ul(k.respect)}</div>`));
  c.appendChild(el(`<div class="card" style="border-left:4px solid var(--coral)"><h3>Their problem: the online leak</h3>${ul(k.leakage)}</div>`));
  c.appendChild(el(`<div class="card" style="border-left:4px solid var(--teal-500)"><h3>Your counter: channel exclusivity</h3>${ul(k.counter)}</div>`));

  // self-test comparison
  const cmp = el(`<div class="card"><h3>Side-by-side (click a row to reveal)</h3><div class="cmp-tools"><button class="btn ghost btn-sm" id="revAll">Reveal all</button></div><div class="cmp-wrap"></div></div>`);
  const tbl = el(`<table class="cmp"><thead><tr><th class="axis"></th><th>Nutraquin Chews</th><th>YuMove</th></tr></thead><tbody></tbody></table>`);
  k.compare.forEach(row => {
    const tr = el(`<tr class="cmp-row"><td class="axis">${row.axis}</td>
      <td class="cmp-cell"><span class="ph">reveal</span><span class="val">${row.nutra}</span></td>
      <td class="cmp-cell"><span class="ph">reveal</span><span class="val">${row.yumove}</span></td></tr>`);
    tr.addEventListener("click", ()=>tr.classList.toggle("revealed"));
    $("tbody", tbl).appendChild(tr);
  });
  $(".cmp-wrap", cmp).appendChild(tbl);
  let open=false;
  $("#revAll", cmp).addEventListener("click", e => { open=!open; $$(".cmp-row", cmp).forEach(r=>r.classList.toggle("revealed",open)); e.target.textContent = open?"Hide all":"Reveal all"; });
  c.appendChild(cmp);

  c.appendChild(el(`<div class="card" style="border-left:4px solid var(--bad)"><h3>🚫 Do NOT say (overclaim traps)</h3>${ul(k.guardrails)}</div>`));
}

/* ============================== THE VISIT ============================== */
function viewVisit(c){
  c.appendChild(el(heroBlock("mock","The visit", "Your call structure", "Open → Discover → Pitch → Handle → Close. Discover BEFORE you pitch, let them name the online-leakage pain themselves.")));
  VISIT.forEach(s => {
    c.appendChild(el(`
      <div class="card visit-stage">
        <h2>${s.stage}</h2>
        <p class="lead muted small" style="margin-top:0">${s.purpose}</p>
        <h3>Say</h3>${ul(s.say)}
        <h3>Ask</h3>${ul(s.ask)}
      </div>`));
  });
}

/* ============================== OBJECTIONS ============================== */
function viewObjections(c){
  c.appendChild(el(heroBlock("defend","Objections", "Hold your ground", "Answer aloud, then reveal the model rebuttal. Always: respect YuMove, re-anchor on channel + margin + compliance.")));
  OBJECTIONS.forEach((o,i) => {
    const id = "obj"+i, done = isDone("objections", id);
    const card = el(`
      <div class="reveal-card">
        <div class="meta-row"><span class="pill tag">${o.tag}</span><span class="pill outline">#${i+1}</span>${done?`<span class="pill" style="background:#e7f7ee;color:#2e9e6b">✓ Got it</span>`:""}</div>
        <div class="qline">${o.q}</div>
        <div class="reveal-body">${ul(o.a)}</div>
        <div class="btn-row">
          <button class="btn coral btn-sm reveal">Reveal rebuttal</button>
          <button class="btn ghost btn-sm got">I nailed it ✓</button>
        </div>
      </div>`);
    const body = $(".reveal-body", card);
    $(".reveal", card).addEventListener("click", e => { const open=body.classList.toggle("show"); e.target.textContent = open?"Hide rebuttal":"Reveal rebuttal"; });
    $(".got", card).addEventListener("click", e => { mark("objections", id); e.target.textContent="Marked ✓"; e.target.disabled=true; });
    c.appendChild(card);
  });
}

/* ============================== ROLE-PLAY ============================== */
function viewRolePlay(c){
  let idx=0, correct=0, answered=false;
  const total = ROLEPLAY.length;
  c.appendChild(el(heroBlock("mock","Role-play", "Run the visit", "The practice speaks, you answer ALOUD, then reveal the model answer and self-score honestly. This is the rehearsal that matters.")));
  const stage = el(`<div></div>`); c.appendChild(stage); render();

  function render(){
    stage.innerHTML="";
    if(idx>=total) return finish();
    const q = ROLEPLAY[idx]; answered=false;
    stage.appendChild(el(`<div class="mock-head"><div class="score-pill">Moment ${idx+1} of ${total} · <b>${q.stage}</b></div><div class="score-pill">Self-score: <b>${correct}</b></div></div><div class="progress"><span style="width:${(idx/total)*100}%"></span></div>`));
    const card = el(`
      <div class="reveal-card">
        <div class="meta-row"><span class="pill tag">${q.stage}</span></div>
        <div class="qline">${q.q}</div>
        <div class="reveal-body plum">${ul(q.answer)}</div>
        <div class="btn-row"><button class="btn plum btn-sm reveal">Reveal model answer</button></div>
        <div class="self-row" style="display:none">
          <span class="lbl">How did you do?</span>
          <button class="btn ghost btn-sm" data-good="1">✓ Nailed it</button>
          <button class="btn ghost btn-sm" data-good="0">✗ Missed bits</button>
        </div>
      </div>`);
    const body = $(".reveal-body", card), self = $(".self-row", card);
    $(".reveal", card).addEventListener("click", e => { body.classList.add("show"); e.target.style.display="none"; self.style.display="flex"; });
    $$("[data-good]", card).forEach(b => b.addEventListener("click", ()=>{ if(answered)return; answered=true; if(b.dataset.good==="1")correct++; mark("roleplay","rp"+idx); idx++; render(); }));
    stage.appendChild(card);
  }
  function finish(){
    const pct = Math.round((correct/total)*100);
    const verdict = pct>=85 ? "Visit-ready. Walk in confident. 🎯" : pct>=60 ? "Close. Replay the moments you missed." : "Keep rehearsing. Revisit The Visit & Objections.";
    stage.appendChild(el(`<div class="card"><h2>${correct} / ${total} · ${pct}%</h2><p class="lead">${verdict}</p><div class="btn-row"><button class="btn plum" id="again">Run again</button><button class="btn ghost" id="toVisit">Back to The Visit</button></div></div>`));
    $("#again", stage).addEventListener("click", ()=>{ idx=0; correct=0; render(); });
    $("#toVisit", stage).addEventListener("click", ()=>go("visit"));
  }
}

/* boot */
shell();
go((location.hash||"#brief").slice(1));
