/*
  MCMS DISTRIBUTION LLC · QUOTE CATALOG (hosted version)
  GoDaddy loads this file. To add or change products, edit the PRODUCTS list below,
  then upload this file to GitHub again with the same name.
*/
(function(){
  var me = document.currentScript;
  var host = document.getElementById("mcms-catalog");
  if(!host){ host = document.createElement("div"); me.parentNode.insertBefore(host, me); }

  // Fonts + styles
  var f = document.createElement("link"); f.rel = "stylesheet";
  f.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700;800&display=swap";
  document.head.appendChild(f);
  var st = document.createElement("style");
  st.textContent = "/* Layout: a supply-room catalog. Category tabs, a grid of product \"labels\", and a quote list that reads like an order sheet. Light-only on purpose so it matches the GoDaddy site. */\n:root{\n  --ink:#1c2633;        /* navy, text and primary buttons */\n  --ink-soft:#4a5565;\n  --kraft:#d6c7b3;      /* MCMS site tan */\n  --kraft-pale:#f3eee6;\n  --paper:#fbfaf7;\n  --rule:#e3dbcf;\n  --teal:#0b6e78;       /* action color */\n  --teal-pale:#e2f1f2;\n  --ok:#2f7a3e;\n  --display:\"Montserrat\",system-ui,-apple-system,\"Segoe UI\",Arial,sans-serif;\n  --body:\"Montserrat\",system-ui,-apple-system,\"Segoe UI\",Arial,sans-serif;\n  --mono:\"Montserrat\",system-ui,-apple-system,\"Segoe UI\",Arial,sans-serif;\n  color-scheme:light;\n}\n.mq,.mq *{box-sizing:border-box}\n.mq [hidden]{display:none!important}\nbody{background:var(--paper);color:var(--ink);margin:0}\n.mq{font-family:var(--body);font-size:15px;line-height:1.55;font-variant-numeric:tabular-nums;color:var(--ink);background:var(--paper);\n  max-width:1180px;margin:0 auto;padding-inline:16px;padding-block:24px 40px;position:relative}\n:where(.mq) :where(button,input,select,textarea){font:inherit;color:inherit}\n.mq :focus-visible{outline:3px solid var(--teal);outline-offset:2px}\n\n/* Header */\n.mq-head{display:flex;flex-wrap:wrap;gap:16px;align-items:end;justify-content:space-between;\n  border-bottom:3px solid var(--ink);padding-bottom:16px}\n.mq-eyebrow{font-family:var(--mono);font-weight:600;font-size:11px;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft);margin:0}\n.mq-title{font-family:var(--display);font-weight:800;font-size:clamp(26px,4vw,38px);line-height:1.05;margin:6px 0 8px;text-transform:uppercase;letter-spacing:.02em;text-wrap:balance}\n.mq-sub{margin:0;color:var(--ink-soft);max-width:60ch}\n.mq-listbtn{display:inline-flex;align-items:center;gap:10px;background:var(--ink);color:#fff;border:0;border-radius:4px;\n  padding:12px 18px;font-weight:600;cursor:pointer;white-space:nowrap}\n.mq-listbtn:hover{background:#000}\n.mq-count{font-family:var(--mono);background:var(--kraft);color:var(--ink);border-radius:999px;min-width:26px;height:26px;\n  display:inline-grid;place-items:center;font-size:13px;padding-inline:6px}\n.mq-count.bump{animation:bump .35s ease}\n@keyframes bump{50%{transform:scale(1.25)}}\n\n/* How it works */\n.mq-steps{list-style:none;margin:18px 0 0;padding:0;display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}\n.mq-steps li{display:flex;gap:10px;align-items:baseline;font-size:15px;color:var(--ink-soft)}\n.mq-steps b{font-family:var(--mono);font-weight:800;color:var(--teal);font-size:13px}\n\n/* Controls */\n.mq-controls{display:flex;flex-direction:column;gap:12px;margin-top:22px}\n.mq-search{width:100%;border:1.5px solid var(--rule);background:#fff;border-radius:4px;padding:12px 14px;font-size:16px}\n.mq-search:focus{border-color:var(--teal);outline:none}\n.mq-tabs{display:flex;flex-wrap:wrap;gap:8px}\n.mq-tab{border:1.5px solid var(--rule);background:#fff;border-radius:999px;padding:7px 14px;cursor:pointer;font-weight:600;font-size:14px}\n.mq-tab[aria-pressed=\"true\"]{background:var(--ink);border-color:var(--ink);color:#fff}\n.mq-tab span{font-family:var(--mono);font-size:12px;opacity:.7;margin-left:4px}\n.mq-subs{display:flex;flex-wrap:wrap;gap:6px}\n.mq-sub-chip{border:0;background:var(--kraft-pale);border-radius:4px;padding:5px 10px;font-size:14px;cursor:pointer;color:var(--ink-soft)}\n.mq-sub-chip[aria-pressed=\"true\"]{background:var(--teal-pale);color:var(--teal);font-weight:600}\n\n/* Grid */\n.mq-section{margin-top:28px}\n.mq-section h3{font-family:var(--display);font-weight:800;text-transform:uppercase;font-size:19px;letter-spacing:.04em;flex-wrap:wrap;margin:0 0 12px;\n  display:flex;align-items:baseline;gap:10px}\n.mq-section h3 small{font-family:var(--mono);font-size:12px;font-weight:500;color:var(--ink-soft);letter-spacing:0;text-transform:none;font-weight:500}\n.mq-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px}\n.mq-card{background:#fff;border:1px solid var(--rule);border-radius:6px;display:flex;flex-direction:column;overflow:hidden}\n.mq-img{aspect-ratio:1/1;max-width:100%;background:var(--kraft-pale);display:grid;place-items:center;border:0;padding:12px;cursor:zoom-in;width:100%}\n.mq-img img{max-height:100%;object-fit:contain}\n.mq-ph{font-family:var(--display);font-weight:800;text-transform:uppercase;font-size:16px;letter-spacing:.04em;color:var(--ink-soft);text-align:center;line-height:1.1}\n.mq-ph small{display:block;font-family:var(--mono);font-size:11px;text-transform:none;margin-top:6px}\n.mq-body{padding:12px 14px 14px;display:flex;flex-direction:column;gap:6px;flex:1}\n.mq-meta{display:flex;flex-wrap:wrap;gap:6px;align-items:center}\n.mq-pack{font-family:var(--mono);font-weight:600;font-size:11px;letter-spacing:.03em;background:var(--ink);color:#fff;border-radius:3px;padding:2px 7px}\n.mq-sku{font-family:var(--mono);font-size:11px;letter-spacing:.02em;color:var(--ink-soft)}\n.mq-name{font-weight:600;font-size:15px;line-height:1.3;margin:0}\n.mq-cat{font-size:13px;color:var(--ink-soft);margin:0}\n.mq-add{margin-top:auto;display:flex;gap:8px;padding-top:8px}\n.mq-qty{display:flex;border:1.5px solid var(--rule);border-radius:4px;overflow:hidden}\n.mq-qty button{border:0;background:var(--kraft-pale);width:34px;cursor:pointer;font-size:18px;line-height:1}\n.mq-qty input{width:44px;border:0;text-align:center;font-variant-numeric:tabular-nums;-moz-appearance:textfield}\n.mq-qty input::-webkit-outer-spin-button,.mq-qty input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}\n.mq-addbtn{flex:1;border:0;border-radius:4px;background:var(--teal);color:#fff;font-weight:600;cursor:pointer;padding:9px 10px}\n.mq-addbtn:hover{filter:brightness(.92)}\n.mq-addbtn.added{background:var(--ok)}\n.mq-empty{padding:40px 16px;text-align:center;color:var(--ink-soft);border:1.5px dashed var(--rule);border-radius:6px;margin-top:24px}\n\n/* Panels (quote list + product view) */\n.mq-overlay{position:absolute;inset:0;background:rgba(28,38,51,.45);z-index:50;display:flex;justify-content:center;align-items:flex-start;padding:16px}\n.mq-panel{background:var(--paper);width:min(720px,100%);border-radius:8px;box-shadow:0 20px 50px rgba(0,0,0,.25);overflow:hidden;\n  position:sticky;top:16px}\n.mq-panel-head{display:flex;justify-content:space-between;align-items:center;gap:12px;background:var(--ink);color:#fff;padding:14px 18px}\n.mq-panel-head h3{font-family:var(--display);font-weight:800;text-transform:uppercase;font-size:17px;margin:0;letter-spacing:.02em}\n.mq-x{border:0;background:transparent;color:#fff;font-size:28px;line-height:1;cursor:pointer;padding:0 4px}\n.mq-panel-body{padding:18px;display:flex;flex-direction:column;gap:18px}\n.mq-lines{width:100%;border-collapse:collapse;font-size:15px}\n.mq-lines th{font-family:var(--mono);font-weight:700;font-size:10px;text-transform:uppercase;letter-spacing:.06em;color:var(--ink-soft);text-align:left;\n  border-bottom:2px solid var(--ink);padding:6px 6px}\n.mq-lines td{border-bottom:1px solid var(--rule);padding:10px 6px;vertical-align:middle}\n.mq-lines td.n{font-variant-numeric:tabular-nums}\n.mq-lines .mq-sku{display:block}\n.mq-rm{border:0;background:transparent;color:var(--ink-soft);cursor:pointer;text-decoration:underline;font-size:14px}\n.mq-tablewrap{overflow-x:auto}\n.mq-form{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px}\n.mq-field{display:flex;flex-direction:column;gap:4px;min-width:0}\n.mq-field.full{grid-column:1/-1}\n.mq-field label{font-size:13px;font-weight:600}\n.mq-field label i{font-style:normal;color:var(--teal)}\n.mq-field input,.mq-field textarea,.mq-field select{border:1.5px solid var(--rule);background:#fff;border-radius:4px;padding:10px 12px;width:100%}\n.mq-field input:focus,.mq-field textarea:focus,.mq-field select:focus{border-color:var(--teal);outline:none}\n.mq-hp{position:absolute;left:-9999px}\n.mq-submit{background:var(--teal);color:#fff;border:0;border-radius:4px;padding:14px 18px;font-weight:600;font-size:17px;cursor:pointer;width:100%}\n.mq-submit[disabled]{opacity:.6;cursor:wait}\n.mq-note{font-size:14px;color:var(--ink-soft);margin:0}\n.mq-error{color:#a32020;font-size:14px;margin:0}\n.mq-done{text-align:center;padding:12px 4px;display:flex;flex-direction:column;gap:12px;align-items:center}\n.mq-done h4{font-family:var(--display);font-weight:800;text-transform:uppercase;font-size:22px;margin:0}\n.mq-summary{width:100%;font-family:var(--mono);font-size:13px;line-height:1.5;background:#fff;border:1px solid var(--rule);border-radius:4px;padding:10px;min-height:140px;resize:vertical}\n.mq-row{display:flex;flex-wrap:wrap;gap:10px;justify-content:center}\n.mq-ghost{border:1.5px solid var(--ink);background:transparent;border-radius:4px;padding:10px 16px;font-weight:600;cursor:pointer;color:var(--ink);text-decoration:none}\n.mq-detail{display:grid;grid-template-columns:minmax(0,1fr) minmax(0,1.2fr);gap:18px;align-items:start}\n.mq-detail .mq-img{cursor:default}\n.mq-detail p{margin:0}\n.mq-brand{font-size:11px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:var(--teal);margin:2px 0 -4px}\n.mq-flag{font-size:11px;font-weight:600;background:#fdf0d5;color:#7a4b00;border-radius:3px;padding:2px 6px}\n.mq-size{display:flex;flex-direction:column;gap:3px;font-size:12px;font-weight:600;color:var(--ink-soft);margin-top:4px}\n.mq-size select{border:1.5px solid var(--rule);background:#fff;border-radius:4px;padding:7px 8px;font-size:14px;font-weight:500;color:var(--ink);width:100%}\n.mq-dcol{display:flex;flex-direction:column;gap:10px;min-width:0}\n.mq-panel-body > .mq-ghost{align-self:flex-start}\n.mq-desc{font-size:13px;line-height:1.45;color:var(--ink-soft);margin:0;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}\n.mq-bx-wrap{margin-top:22px}\n.mq-kicker{font-size:11px;font-weight:700;letter-spacing:.14em;text-transform:uppercase;color:var(--ink-soft);margin:0 0 10px}\n.mq-bx-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:12px}\n.mq-bx{position:relative;text-align:left;background:#fff;border:1.5px solid var(--rule);border-radius:8px;padding:16px 18px 14px;cursor:pointer;display:flex;flex-direction:column;gap:5px;transition:border-color .15s,box-shadow .15s}\n.mq-bx:hover{border-color:var(--ink-soft)}\n.mq-bx[aria-pressed=\"true\"]{border-color:var(--teal);box-shadow:inset 0 4px 0 var(--teal)}\n.mq-bx-name{font-weight:800;font-size:20px;text-transform:uppercase;letter-spacing:.03em;line-height:1.1;padding-right:70px}\n.mq-bx-tag{font-size:13px;color:var(--ink-soft)}\n.mq-bx-meta{font-size:11px;font-weight:700;color:var(--teal);letter-spacing:.08em;text-transform:uppercase;margin-top:4px}\n.mq-bx-cats{font-size:12px;color:var(--ink-soft)}\n.mq-bx-on{position:absolute;top:14px;right:14px;font-size:10px;font-weight:700;letter-spacing:.1em;text-transform:uppercase;background:var(--teal-pale);color:var(--teal);padding:3px 8px;border-radius:999px}\n.mq-art{display:grid;place-items:center;width:100%;height:100%}\n.mq-art svg{width:86%;height:auto;max-height:100%}\n.mq-rq{padding-left:76px;min-height:96px}\n.mq-rq .mq-bx-name{padding-right:0}\n.mq-rq-ic{position:absolute;left:16px;top:16px;width:46px;height:46px;border-radius:10px;background:var(--teal-pale);color:var(--teal);display:grid;place-items:center}\n.mq-rq-ic svg{width:27px;height:27px}\n.mq-field .mq-qty input{width:64px;flex:none}\n.mq-rq-intro{margin:0;color:var(--ink-soft)}\n.mq-chips{display:flex;flex-wrap:wrap;gap:6px}\n.mq-chip{position:relative}\n.mq-chip input{position:absolute;opacity:0;width:1px;height:1px}\n.mq-chip span{display:inline-block;border:1.5px solid var(--rule);border-radius:999px;padding:7px 13px;font-size:14px;font-weight:500;cursor:pointer;background:#fff;color:var(--ink)}\n.mq-chip input:checked+span{background:var(--ink);border-color:var(--ink);color:#fff}\n.mq-chip input:focus-visible+span{outline:3px solid var(--teal);outline-offset:2px}\n.mq-field legend{font-size:13px;font-weight:600;padding:0;margin-bottom:6px}\n.mq-field legend i{font-style:normal;color:var(--teal)}\nfieldset.mq-field{border:0;margin:0;padding:0;min-width:0}\n.mq-rq-done{display:flex;flex-direction:column;gap:12px;align-items:flex-start}\n.mq-rq-done h4{font-weight:800;text-transform:uppercase;font-size:18px;margin:0}\n.mq-rq-sum{background:#fff;border:1px solid var(--rule);border-radius:6px;padding:12px 14px;font-size:14px;width:100%}\n.mq-trust{margin-top:36px;border-top:1px solid var(--rule);padding-top:14px;display:flex;flex-wrap:wrap;gap:8px 24px;font-size:14px;color:var(--ink-soft)}\n.mq-trust b{color:var(--ink)}\n\n@media (max-width:640px){\n  .mq-steps{grid-template-columns:1fr}\n  .mq-form{grid-template-columns:1fr}\n  .mq-detail{grid-template-columns:1fr}\n  .mq-grid{grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}\n  .mq-add{flex-direction:column}\n  .mq-qty{justify-content:space-between}\n  .mq-qty input{flex:1}\n  .mq-listbtn{width:100%;justify-content:center}\n}\n@media (prefers-reduced-motion:reduce){.mq *{animation:none!important;transition:none!important}}";
  document.head.appendChild(st);

  // Page structure
  host.innerHTML = "<div class=\"mq\" id=\"mq\">\n  <svg width=\"0\" height=\"0\" style=\"position:absolute\" aria-hidden=\"true\"><defs><linearGradient id=\"mqBody\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#ffffff\"/><stop offset=\".55\" stop-color=\"#f4f6f8\"/><stop offset=\"1\" stop-color=\"#dfe4ea\"/></linearGradient><linearGradient id=\"mqTeal\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#0d7f8a\"/><stop offset=\"1\" stop-color=\"#095c64\"/></linearGradient><linearGradient id=\"mqNavy\" x1=\"0\" x2=\"1\"><stop offset=\"0\" stop-color=\"#2a384a\"/><stop offset=\"1\" stop-color=\"#141c26\"/></linearGradient></defs></svg>\n  <header class=\"mq-head\">\n    <div>\n      <p class=\"mq-eyebrow\">MCMS Distribution LLC · Veteran owned</p>\n      <h2 class=\"mq-title\">Product Catalog</h2>\n      <p class=\"mq-sub\">Commercial dish, hand care, housekeeping and laundry chemicals. Build your list and we'll send pricing within one business day.</p>\n    </div>\n    <button class=\"mq-listbtn\" id=\"mq-open\" type=\"button\">Quote list <span class=\"mq-count\" id=\"mq-count\">0</span></button>\n  </header>\n\n  <ol class=\"mq-steps\">\n    <li><b>01</b> Add products and quantities to your quote list.</li>\n    <li><b>02</b> Send the list with your contact info. No payment online.</li>\n    <li><b>03</b> We reply with pricing and delivery options.</li>\n  </ol>\n\n  <section class=\"mq-bx-wrap\" aria-label=\"Brands\">\n    <p class=\"mq-kicker\">Shop by brand</p>\n    <div class=\"mq-bx-grid\" id=\"mq-brands\" role=\"group\" aria-label=\"Brand\"></div>\n  </section>\n\n  <section class=\"mq-bx-wrap\" aria-label=\"Can liners and paper products\">\n    <p class=\"mq-kicker\">Can liners &amp; paper products</p>\n    <div class=\"mq-bx-grid\">\n      <button type=\"button\" class=\"mq-bx mq-rq\" data-req=\"liners\"><span class=\"mq-rq-ic\"><svg viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><path d=\"M16 22h32l-4 34a4 4 0 0 1-4 4H24a4 4 0 0 1-4-4z\"/><path d=\"M12 22h40\"/><path d=\"M26 22v-6h12v6\"/><path d=\"M27 32v20M37 32v20\"/></svg></span><span class=\"mq-bx-name\">Can Liners</span><span class=\"mq-bx-tag\">Tell us the size, color and thickness. We'll match it.</span><span class=\"mq-bx-meta\">Build your request →</span></button>\n      <button type=\"button\" class=\"mq-bx mq-rq\" data-req=\"paper\"><span class=\"mq-rq-ic\"><svg viewBox=\"0 0 64 64\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"3\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><ellipse cx=\"26\" cy=\"14\" rx=\"12\" ry=\"5\"/><path d=\"M14 14v38c0 3 5 5 12 5s12-2 12-5V14\"/><ellipse cx=\"26\" cy=\"14\" rx=\"4\" ry=\"1.6\"/><path d=\"M38 22h12v26l-6-4-6 4\"/></svg></span><span class=\"mq-bx-name\">Paper Products</span><span class=\"mq-bx-tag\">Toilet tissue, towels, napkins and more, by ply and size.</span><span class=\"mq-bx-meta\">Build your request →</span></button>\n    </div>\n  </section>\n\n  <div class=\"mq-controls\">\n    <label for=\"mq-q\" class=\"mq-hp\">Search products</label>\n    <input id=\"mq-q\" class=\"mq-search\" type=\"search\" placeholder=\"Search by name or item # (try “sanitizer” or “5 gal”)\" autocomplete=\"off\">\n    <div class=\"mq-tabs\" id=\"mq-tabs\" role=\"group\" aria-label=\"Category\"></div>\n    <div class=\"mq-subs\" id=\"mq-subs\" role=\"group\" aria-label=\"Type\"></div>\n  </div>\n\n  <div id=\"mq-results\"></div>\n\n  <footer class=\"mq-trust\">\n    <span><b>Questions?</b> <span id=\"mq-email-foot\"></span> · 956-639-0174</span>\n    <span>Prices are quoted per order. Case and pail sizes shown on each product.</span>\n  </footer>\n\n  <div class=\"mq-overlay\" id=\"mq-overlay\" hidden>\n    <div class=\"mq-panel\" role=\"dialog\" aria-modal=\"true\" aria-labelledby=\"mq-ptitle\" id=\"mq-panel\"></div>\n  </div>\n</div>";

  // Catalog
  (function(){
  /* ============ SETTINGS ============ */
  var BUSINESS_EMAIL = "MCMSDistributionLLC@gmail.com";
  var SHEET_URL      = "";   // Google Sheet web app link (ends in /exec). When set, quotes go to the Sheet + Gmail.
  var WEB3FORMS_KEY  = "c2589c51-23b5-4c50-8c4b-b72b3399479c";   // backup sender, used only if SHEET_URL is blank   // free key from web3forms.com, sent to BUSINESS_EMAIL. Leave blank to use the email fallback.
  
  /* ============ PRODUCTS ============
     SINGLE-SIZE product (one item number):
       {id:"short-unique-id", name:"Product name", cat:"Warewash", sub:"Pot & Pan", pack:"4/Gal.", sku:"PB0011428AB"}
     MULTI-SIZE product (ProBlend "group" page). List the sizes you know in opts; customers can also pick "Other size":
       {id:"...", name:"...", cat:"...", sub:"...", code:"PROBCPPXXXXX", opts:[{pack:"5 Gal.", sku:"PB..."}]}
     Optional: note:"Min. order 36", img:"full image URL" (otherwise built from the item number)
     sub can be a list when a product fits two types: sub:["High Temp Dish Machine","All Temp Dish Machine"]
  */
  var IMG = "https://images.jmcatalog.com/prdimgs/Sea23te3x4/PROB/PROB";
  var PRODUCTS = [
    /* ---------- WAREWASH ---------- */
    // High Temp Dish Machine
    {id:"crystal-ht", name:"Crystal High Temperature Detergent", cat:"Warewash", sub:"High Temp Dish Machine", code:"PROBCHTXXXXX", opts:[{pack:"4/Gal.", sku:"PB0020740AB"},{pack:"5 Gal.", sku:"PB0020740AA"}], desc:"Chlorinated high-temp dish machine detergent with extra destaining. Works scale free in hard, high-solids water."},
    {id:"encap-dish", name:"Encap Dish Powdered Detergent", cat:"Warewash", sub:"High Temp Dish Machine", pack:"10 lb.", sku:"PB0013920AA"},
    {id:"solid-force", name:"Solid Force Dishmachine Detergent", cat:"Warewash", sub:"High Temp Dish Machine", pack:"4/8 lb.", sku:"PB0021195AA"},
    {id:"solid-force-np", name:"Solid Force NP Dishmachine Detergent", cat:"Warewash", sub:"High Temp Dish Machine", pack:"4/8 lb.", sku:"PB0021198AA"},
    {id:"solid-metal-power", name:"Solid Metal Power Dishmachine Detergent", cat:"Warewash", sub:"High Temp Dish Machine", pack:"8 lb.", sku:"PB0021277AA"},
    {id:"rinse-free", name:"Rinse Free Rinsing Agent", cat:"Warewash", sub:["High Temp Dish Machine","All Temp Dish Machine"], code:"PROBRFRXXXXX", opts:[{pack:"4/Gal.", sku:"PB0014409AB", note:"Min. order 36"},{pack:"5 Gal.", sku:"PB0014409AA"}], desc:"Concentrated rinse agent that speeds drying and helps control foam in the wash tank."},
    {id:"sparkle", name:"Sparkle Drying Agent", cat:"Warewash", sub:"High Temp Dish Machine", pack:"5 Gal.", sku:"PB0021945AA"},
    // All Temp Dish Machine
    {id:"lt-detergent", name:"LT Detergent Dishmachine Detergent", cat:"Warewash", sub:"All Temp Dish Machine", code:"PROBLTDXXXXX", opts:[{pack:"4/Gal.", sku:"PB0018138AB"},{pack:"5 Gal.", sku:"PB0018138AA"}], desc:"Economical alkaline dish machine detergent. Best results in medium to soft water."},
    {id:"hw-lt", name:"HW LT Detergent", cat:"Warewash", sub:"All Temp Dish Machine", code:"PROBHWLTDXXXXX", opts:[{pack:"4/Gal.", sku:"PB0018145AB"},{pack:"2.5 Gal.", sku:"PB0018145AC"},{pack:"5 Gal.", sku:"PB0018145AA"}], desc:"Made for hard water in low-temp dish machines."},
    {id:"lt-rinse", name:"LT Rinse Aid Drying Agent", cat:"Warewash", sub:"All Temp Dish Machine", code:"PROBLTRXXXXX", opts:[{pack:"4/Gal.", sku:"PB0020733AB"},{pack:"2.5 Gal.", sku:"PB0020733AC"},{pack:"5 Gal.", sku:"PB0020733AA"}], desc:"Drying agent that sheets water off glasses and silverware for spot-free results."},
    {id:"lt-san", name:"LT San", cat:"Warewash", sub:"All Temp Dish Machine", code:"PROBLTSXXXXX", opts:[{pack:"4/Gal.", sku:"PB0005205AB"},{pack:"2.5 Gal.", sku:"PB0005205AK"},{pack:"5 Gal.", sku:"PB0005205AC"}], desc:"10% sodium hypochlorite sanitizer for dishes and utensils in low-temp dish machines. EPA registered."},
    // Sanitizers & Disinfectants
    {id:"dd5000", name:"DD 5000 Sanitizer", cat:"Warewash", sub:"Sanitizers & Disinfectants", code:"PROBDD5XXXXX", opts:[{pack:"2/Gal. (FS)", sku:"PB0013546AA"},{pack:"2/Gal.", sku:"PB0013546AB"},{pack:"4/Gal.", sku:"PB0013546AC"},{pack:"2.5 Gal.", sku:"PB0013546AF"},{pack:"5 Gal.", sku:"PB0013546AE"}], desc:"Third-sink sanitizer that cleans, sanitizes and disinfects kitchen and facility surfaces. EPA registered."},
    {id:"dsq10", name:"DSQ 10 Sanitizer Disinfectant", cat:"Warewash", sub:"Sanitizers & Disinfectants", code:"PROBDSQXXXXX", opts:[{pack:"2/Gal.", sku:"PB0013960AA"},{pack:"4/Gal.", sku:"PB0013960AB"},{pack:"5 Gal.", sku:"PB0013960AC"}], desc:"Third-sink sanitizer and disinfectant for kitchens, hospitals, hotels and schools. EPA registered."},
    {id:"guardian", name:"Guardian RTU Sanitizer/Disinfectant", cat:"Warewash", sub:"Sanitizers & Disinfectants", pack:"6/1 Qt.", sku:"PB0011186AA"},
    // Floor Cleaners
    {id:"bio-force", name:"Bio Force Floor Cleaner", cat:"Warewash", sub:"Floor Cleaners", pack:"4/Gal.", sku:"PB0011680AB"},
    {id:"suregrip", name:"SureGrip Daily Cleaner & Degreaser", cat:"Warewash", sub:"Floor Cleaners", code:"PROBDCDXXXXX", opts:[{pack:"2/Gal. (FS)", sku:"PB0021150AA"},{pack:"4/Gal.", sku:"PB0021150AB"},{pack:"5 Gal.", sku:"PB0021150AC"}], desc:"Daily floor cleaner that improves traction and leaves no residue. Co-branded with SureGrip."},
    {id:"floor-touch", name:"Floor Touch Multi-Purpose Cleaner", cat:"Warewash", sub:"Floor Cleaners", code:"PROBFTXXXXX", opts:[{pack:"4/Gal.", sku:"PB0018570AB"},{pack:"5 Gal.", sku:"PB0018570AC"}], desc:"Neutral cleaner for oil, grease and dirt. Safe on floor finish. Citrus scent."},
    {id:"galaxy-41", name:"Galaxy 41 Enviro Mop Floor Cleaner", place:[["Warewash","Floor Cleaners"],["Housekeeping","Galaxy Dispensing System"]], pack:"Galaxy", sku:"PB00BIO23AA"},
    // Cooking Surfaces
    {id:"eliminator", name:"Eliminator Plus Oven Cleaner", cat:"Warewash", sub:"Cooking Surfaces", code:"PROBEPXXXXX", opts:[{pack:"6/Qt.", sku:"PB0027180AA"},{pack:"4/Gal.", sku:"PB0027180AC"}], desc:"Heavy-duty oven cleaner for baked-on grease on ovens, grills and stoves."},
    {id:"ht-grill", name:"HT Grill Cleaner", cat:"Warewash", sub:"Cooking Surfaces", pack:"Qt.", sku:"PB0015210AA"},
    {id:"workforce-oven", name:"Workforce Non-Caustic Oven & Grill Cleaner", cat:"Warewash", sub:"Cooking Surfaces", pack:"Qt.", sku:"PB00MAG02BA"},
    // Presoaks
    {id:"oxy-complete", name:"Oxy Complete", cat:"Warewash", sub:"Presoaks", pack:"5 lb.", sku:"PB0014727AA"},
    {id:"silver-brilliant", name:"Silver Brilliant Presoak", cat:"Warewash", sub:"Presoaks", code:"PROBSBPXXXXX", opts:[{pack:"4/Gal.", sku:"PB0018340AA"},{pack:"5 Gal.", sku:"PB0018340AB"}], desc:"Flatware presoak that brightens silver, prevents tarnish and improves sheeting."},
    {id:"solid-silver-brite", name:"Solid Silver Brite Solid Flatware Soak", cat:"Warewash", sub:"Presoaks", pack:"2/8 lb.", sku:"PB0011034AA"},
    // Cleaners & Degreasers
    {id:"citra-sol", name:"Citra Sol Cleaner Degreaser", cat:"Warewash", sub:"Cleaners & Degreasers", pack:"4/Gal.", sku:"PB00RD102AB"},
    {id:"hd-pride", name:"HD Pride Cleaner", cat:"Warewash", sub:"Cleaners & Degreasers", pack:"Gal.", sku:"PB0015770AB"},
    {id:"lavender-express", name:"Lavender Express Cleaner Degreaser", cat:"Warewash", sub:"Cleaners & Degreasers", code:"PROBLEXXXXX", opts:[{pack:"4/Gal.", sku:"PB0016600AD"},{pack:"5 Gal.", sku:"PB0016600AE"}], desc:"Multi-purpose cleaner and degreaser with a bold lavender scent."},
    // Pot & Pan
    {id:"bar-glass", name:"Bar Glass Manual Detergent", cat:"Warewash", sub:"Pot & Pan", pack:"4/Gal.", sku:"PB0011428AB"},
    {id:"clean-pro", name:"Clean Pro Pot & Pan Detergent", cat:"Warewash", sub:"Pot & Pan", code:"PROBCPPXXXXX", opts:[{pack:"4/Gal.", sku:"PB0019865AB"},{pack:"5 Gal.", sku:"PB0019865AC"}], desc:"Thick-sudsing pot and pan detergent for all water types. Baby powder scent."},
    {id:"emerald", name:"Emerald Phosphate Free Detergent", cat:"Warewash", sub:"Pot & Pan", code:"PROBEPFXXXXX", opts:[{pack:"4/Gal.", sku:"PB0017840AA"},{pack:"5 Gal.", sku:"PB0017840AB"}], desc:"Phosphate-free detergent, tough on soil and gentle on hands. Citrus scent."},
    {id:"lf-zircon", name:"LF Zircon Phosphate Free Detergent", cat:"Warewash", sub:"Pot & Pan", pack:"5 Gal.", sku:"PB0017835AB", note:"Min. order 36"},
    {id:"sapphire", name:"Sapphire Phosphate Free Detergent", cat:"Warewash", sub:"Pot & Pan", code:"PROBSPXXXXX", opts:[{pack:"2/Gal. (FS)", sku:"PB0021000AB"},{pack:"4/Gal.", sku:"PB0021000AC"},{pack:"2.5 Gal.", sku:"PB0021000AG"},{pack:"5 Gal.", sku:"PB0021000AD"}], desc:"Premium phosphate-free pot and pan detergent with long-lasting suds."},
    {id:"sapphire-spray", name:"Sapphire Power Spray Foaming Hand Dish Detergent", cat:"Warewash", sub:"Pot & Pan", pack:"6/22 oz.", sku:"PB0011187AA"},
    {id:"solid-clean", name:"Solid Clean Pot & Pan Detergent", cat:"Warewash", sub:"Pot & Pan", pack:"2/5 lb.", sku:"PB0021280AA"},
    // Specialty Cleaners
    {id:"chlor-clean", name:"Chlor Clean High-Foaming Chlorinated Cleaner", cat:"Warewash", sub:"Specialty Cleaners", pack:"4/1 Gal.", sku:"PB0012310AA"},
    {id:"clean-freeze", name:"Clean Freeze Alkaline Cleaner", cat:"Warewash", sub:"Specialty Cleaners", pack:"Gal.", sku:"PB0023330AA"},
    {id:"enhance", name:"Enhance Aerosol Spray Cleaner", place:[["Warewash","Specialty Cleaners"],["Housekeeping","Polishes"]], pack:"14.5 oz.", sku:"PB00QUE01AA"},
    {id:"grease-free", name:"Grease Free Degreaser", cat:"Warewash", sub:"Specialty Cleaners", code:"PROBGFDXXXXX", opts:[{pack:"4/Gal.", sku:"PB0010661AC"},{pack:"5 Gal.", sku:"PB0010661AB"}], desc:"Bacteria-based treatment that digests grease and controls odors in drain lines and grease traps."},
    {id:"produceshield", name:"ProduceShield+", cat:"Warewash", sub:"Specialty Cleaners", pack:"2.5 Gal.", sku:"PB0005089AA"},
    {id:"scalaway", name:"Scalaway Lime Scale Remover", cat:"Warewash", sub:"Specialty Cleaners", pack:"Gal.", sku:"PB0021020AA"},
  
    /* ---------- HAND CARE ---------- */
    {id:"hand-soap-floral", name:"Amenities Hand Soap, Floral", cat:"Hand Care", sub:"Hand Soaps", pack:"4/1 Gal.", sku:"PB0013950AA", place:[["Hand Care","Hand Soaps"],["Housekeeping","Amenities Hygiene System"]]},
    {id:"af-hand-soap", name:"Antibacterial Foaming Hand Soap", cat:"Hand Care", sub:"Hand Soaps", pack:"Gal.", sku:"PB00CUS08AE"},
    {id:"blue-foaming-silk", name:"Blue Foaming Silk, Mountain Spring Scent", cat:"Hand Care", sub:"Hand Soaps", pack:"2/Gal.", sku:"PB0027234AF"},
    {id:"clean-simple-lotion", name:"Clean & Simple Lotion Soap", cat:"Hand Care", sub:"Hand Soaps", pack:"Gal.", sku:"PB0015485AB"},
    {id:"clear-foaming-silk", name:"Clear Foaming Silk Dye Free Foaming Hand Soap", cat:"Hand Care", sub:"Hand Soaps", pack:"Gal.", sku:"PB0027235AA"},
    {id:"clear-silk-lotion", name:"Clear Silk Lotion Soap", cat:"Hand Care", sub:"Hand Soaps", pack:"Gal.", sku:"PB0027230AB"},
    {id:"e3-gal", name:"E3 Foaming Hand Sanitizer", cat:"Hand Care", sub:"Hand Sanitizers", pack:"Gal.", sku:"PB00CUS08AF"},
    {id:"alcohol-foam", name:"Alcohol Foaming Hand Sanitizer", cat:"Hand Care", sub:"Hand Sanitizers", pack:"Gal.", sku:"PB00CUS08AG"},
    {id:"af-cart-citrus", name:"Antibacterial Foaming Hand Soap Cartridge, Citrus Spice", cat:"Hand Care", sub:"Cartridge System", pack:"3/1250 mL", sku:"PB00CUS08AB"},
    {id:"e3-cart", name:"E3 Foaming Hand Sanitizer Cartridge, Dye & Fragrance Free", cat:"Hand Care", sub:"Cartridge System", pack:"3/1250 mL", sku:"PB00CUS08AC"},
    {id:"foam-cart-tropical", name:"Foaming Hand Soap Cartridge, Tropical Scent", cat:"Hand Care", sub:"Cartridge System", pack:"3/1250 mL", sku:"PB00CUS08AD"},
    {id:"manual-dispensers", name:"Manual Dispensers", cat:"Hand Care", sub:"Cartridge System", code:"PROBMDSXXXXX", opts:[{pack:"White", sku:"PB00OPH02AA"},{pack:"Black", sku:"PB00OPH02AB"}], optLabel:"Color", desc:"Manual dispenser for 1.25 L cartridges. ADA compliant, up to 3,125 uses per cartridge."},
    {id:"touchfree-dispensers", name:"Touch-Free Dispensers", cat:"Hand Care", sub:"Cartridge System", code:"PROBTFDXXXXX", opts:[{pack:"White", sku:"PB00OPH02AC"},{pack:"Black", sku:"PB00OPH02AD"}], optLabel:"Color", desc:"Touch-free dispenser for 1.25 L cartridges. ADA compliant, up to 3,125 uses per cartridge."},
  
    /* ---------- HOUSEKEEPING ---------- */
    {id:"eraser", name:"Eraser Cleaner & Destainer", cat:"Housekeeping", sub:"Bathroom Cleaners", pack:"Qt.", sku:"PB0012690AB"},
    {id:"protect24", name:"Protect24 Sanitizer/Disinfectant", cat:"Housekeeping", sub:"All Purpose Cleaners", code:"PROBP24XXXXX", opts:[{pack:"6/Qt.", sku:"PB0004629AA"},{pack:"2/Gal.", sku:"PB0004629AB"}], desc:"Ready-to-use sanitizer/disinfectant that keeps killing 99.9% of bacteria for 24 hours. Gallons refill the quart bottles."},
    {id:"actizone-f5", name:"Actizone F5 24 Hour Sanitizer/Disinfectant RTU", cat:"Housekeeping", sub:"All Purpose Cleaners", pack:"Qt.", sku:"PB00NEX01AA"},
    {id:"citrus-clean", name:"Citrus Clean All Purpose Cleaner", cat:"Housekeeping", sub:"All Purpose Cleaners", pack:"4/Gal.", sku:"PB0015120AD"},
    {id:"lavender-q", name:"Lavender Q Cleaner", cat:"Housekeeping", sub:"All Purpose Cleaners", pack:"Gal.", sku:"PB0016759AA"},
    {id:"lemon-q", name:"Lemon Q Cleaner", cat:"Housekeeping", sub:"All Purpose Cleaners", pack:"Gal.", sku:"PB0016760AB"},
    {id:"pine-q", name:"Pine Q All Purpose Cleaner", cat:"Housekeeping", sub:"All Purpose Cleaners", pack:"Gal.", sku:"PB0019740AA"},
    {id:"metal-brite", name:"Metal Brite Stainless Steel Cleaner", cat:"Housekeeping", sub:"Polishes", pack:"Qt.", sku:"PB0022020AA"},
    {id:"rejuvenate", name:"Rejuvenate Polish", cat:"Housekeeping", sub:"Polishes", pack:"17 oz.", sku:"PB00QUE01AB"},
    {id:"clear-view-conc", name:"Clear View Concentrate Glass Cleaner", cat:"Housekeeping", sub:"Glass Cleaners", pack:"Gal.", sku:"PB0023040AB"},
    {id:"clear-view-rtu", name:"Clear View RTU Glass Cleaner", cat:"Housekeeping", sub:"Glass Cleaners", pack:"Qt.", sku:"PB0023140AA"},
    {id:"glass-guard", name:"Glass Guard Pro RTU Glass Cleaner & Protectant", cat:"Housekeeping", sub:"Glass Cleaners", pack:"6/1 Qt.", sku:"PB0011192AA"},
    {id:"spots-away", name:"Spots Away Carpet Stain Remover", cat:"Housekeeping", sub:"Carpet Cleaners", pack:"18 oz.", sku:"PB00QUE01AC"},
    {id:"urinal-mat", name:"Antimicrobial Urinal Mat", cat:"Housekeeping", sub:"Restroom Care", pack:"", sku:"PB00WIZ01AB"},
    {id:"splash-hog", name:"Splash Hog Urinal Screen", cat:"Housekeeping", sub:"Restroom Care", pack:"", sku:"PB00WIZ01AA"},
    {id:"smoke-odor", name:"Extreme Smoke Odor Out", cat:"Housekeeping", sub:"Air Care", pack:"6/32 oz.", sku:"PB0011062AA"},
    {id:"cannabis-odor", name:"Extreme Cannabis Odor Out", cat:"Housekeeping", sub:"Air Care", pack:"6/32 oz.", sku:"PB0011063AA"},
    {id:"linen-fresh-rtu", name:"Linen Fresh RTU Fabric Refresher & Softener", cat:"Housekeeping", sub:"Air Care", pack:"Qt.", sku:"PB0027258AA"},
    {id:"amen-shampoo", name:"Amenities Shampoo Cartridge", cat:"Housekeeping", sub:"Amenities Hygiene System", pack:"", sku:"00026"},
    {id:"amen-conditioner", name:"Amenities Conditioner Cartridge", cat:"Housekeeping", sub:"Amenities Hygiene System", pack:"", sku:"00027"},
    {id:"amen-bodywash", name:"Amenities Body Wash Cartridge", cat:"Housekeeping", sub:"Amenities Hygiene System", pack:"", sku:"00028"},
    {id:"amen-handsoap", name:"Amenities Hand Soap Cartridge", cat:"Housekeeping", sub:"Amenities Hygiene System", pack:"", sku:"00029"},
    {id:"amen-pump", name:"Amenities Cartridge Pump", cat:"Housekeeping", sub:"Amenities Hygiene System", pack:"", sku:"00036"},
    {id:"amen-dispenser", name:"Amenities Dispenser", cat:"Housekeeping", sub:"Amenities Hygiene System", opts:[{pack:"White", sku:"00038"},{pack:"Black", sku:"00040"}], optLabel:"Color"},
    {id:"g10", name:"Galaxy 10 Lemon Ginger Odor Counteractant", cat:"Housekeeping", sub:"Galaxy Dispensing System", pack:"2/Gal. (FS)", sku:"PB0027215AB"},
    {id:"g11", name:"Galaxy 11 Luxury Suite Fabric Refresher & Softener", cat:"Housekeeping", sub:"Galaxy Dispensing System", pack:"2/Gal.", sku:"PB0027259AA"},
    {id:"g12", name:"Galaxy 12 Linen Fresh Fabric Refresher", cat:"Housekeeping", sub:"Galaxy Dispensing System", pack:"Galaxy", sku:"PB0027225AB"},
    {id:"g14", name:"Galaxy 14 Lavender Fresh Air Freshener", cat:"Housekeeping", sub:"Galaxy Dispensing System", pack:"Galaxy", sku:"PB0027205AA"},
    {id:"g15", name:"Galaxy 15 Polynesian Tiare Air Freshener", cat:"Housekeeping", sub:"Galaxy Dispensing System", pack:"Galaxy", sku:"PB0013685AA"},
    {id:"galaxy-20", name:"Galaxy 20 Bath Force Ultra Bathroom Cleaner", cat:"Housekeeping", sub:"Galaxy Dispensing System", pack:"Galaxy", sku:"PB0027263AA"},
    {id:"g21", name:"Galaxy 21 Bathroom Disinfectant", cat:"Housekeeping", sub:"Galaxy Dispensing System", pack:"Gal.", sku:"PB0027240AA"},
    {id:"g22", name:"Galaxy 22 Green Care Oxygen Power Cleaner", cat:"Housekeeping", sub:"Galaxy Dispensing System", pack:"Galaxy", sku:"PB0014081AA"},
    {id:"g25", name:"Galaxy 25 Citrus Tub & Tile Bathroom Cleaner", cat:"Housekeeping", sub:"Galaxy Dispensing System", pack:"Galaxy", sku:"PB0027210AA"},
    {id:"g31", name:"Galaxy 31 Clear Vision Glass Cleaner", cat:"Housekeeping", sub:"Galaxy Dispensing System", pack:"Galaxy", sku:"PB0023040AA"},
    {id:"g40", name:"Galaxy 40 Easy Mop Floor Cleaner", cat:"Housekeeping", sub:"Galaxy Dispensing System", pack:"Galaxy", sku:"PB0018570AA"},
    {id:"g50", name:"Galaxy 50 Green Oxy Plus", cat:"Housekeeping", sub:"Galaxy Dispensing System", pack:"Gal.", sku:"PB0014081AC"},
    {id:"g51", name:"Galaxy 51 Wave Plus All Purpose Cleaner", cat:"Housekeeping", sub:"Galaxy Dispensing System", pack:"Galaxy", sku:"PB00RD102AC"},
    {id:"galaxy-53", name:"Galaxy 53 Lavender Plus All Purpose Cleaner", cat:"Housekeeping", sub:"Galaxy Dispensing System", pack:"Galaxy", sku:"PB0016600AA"},
    {id:"g54", name:"Galaxy 54 Neutral Disinfectant", cat:"Housekeeping", sub:"Galaxy Dispensing System", pack:"Gal.", sku:"PB0027241AA"},
  
    /* ---------- LAUNDRY ---------- */
    {id:"break-out", name:"Break Out Alkali Laundry Detergent", cat:"Laundry", sub:"Alkali, Solvent & Conditioner", code:"PROBBOXXXXX", opts:[{pack:"5 Gal.", sku:"PB0016900AA"},{pack:"15 Gal.", sku:"PB0016900AB"},{pack:"55 Gal.", sku:"PB0016900AG"}], desc:"Concentrated laundry break for heavy grease soils. Works in all water conditions."},
    {id:"conditioner-se", name:"Conditioner SE Laundry Conditioner", cat:"Laundry", sub:"Alkali, Solvent & Conditioner", pack:"5 Gal.", sku:"PB0021025AA", note:"Min. order 36"},
    {id:"linen-boost", name:"Linen Boost", cat:"Laundry", sub:"Alkali, Solvent & Conditioner", pack:"5 Gal.", sku:"PB0022679AA"},
    {id:"suds-all", name:"Suds All Liquid Laundry Detergent", cat:"Laundry", sub:"Detergents", code:"PROBSALXXXXX", opts:[{pack:"2/Gal.", sku:"PB0015780AB"},{pack:"5 Gal.", sku:"PB0015780AA"}], desc:"High-sudsing liquid detergent for light to medium soil in home-style machines. Citrus scent."},
    {id:"victory-he", name:"Victory HE Laundry Detergent", cat:"Laundry", sub:"Detergents", code:"PROBVHEXXXXX", opts:[{pack:"2.5 Gal.", sku:"PB0027245AF"},{pack:"15 Gal.", sku:"PB0027245AE"}], desc:"Hypoallergenic high-efficiency detergent, dye and fragrance free. Hot or cold water."},
    {id:"detergent-plus", name:"Detergent Plus", cat:"Laundry", sub:"Detergents", code:"PROBDPXXXXX", opts:[{pack:"5 Gal.", sku:"PB0017005AA"},{pack:"15 Gal.", sku:"PB0017005AB"},{pack:"55 Gal.", sku:"PB0017005AC"}], desc:"Liquid detergent for oily soils like lipstick, shoe polish and sunscreen. Citrus scent."},
    {id:"enzyme-power", name:"Enzyme Power Laundry Detergent", cat:"Laundry", sub:"Detergents", code:"PROBEPLXXXXX", opts:[{pack:"5 Gal.", sku:"PB0016905AF"},{pack:"15 Gal.", sku:"PB0016905AI"}], desc:"Detergent that removes the need for separate break and sour steps. Works at lower temperatures."},
    {id:"es-bright", name:"ES Laundry Bright Detergent", cat:"Laundry", sub:"Detergents", code:"PROBESLXXXXX", opts:[{pack:"2.5 Gal.", sku:"PB0023385AH"},{pack:"5 Gal.", sku:"PB0023385AB"},{pack:"15 Gal.", sku:"PB0023385AC"}], desc:"One-shot low-temp liquid detergent for hotels, motels and nursing homes."},
    {id:"tribute-he", name:"Tribute HE Laundry Detergent", cat:"Laundry", sub:"Detergents", code:"PROBTLDXXXXX", opts:[{pack:"2/Gal.", sku:"PB0027243AA"},{pack:"2.5 Gal.", sku:"PB0027243AI"},{pack:"5 Gal.", sku:"PB0027243AC"},{pack:"15 Gal.", sku:"PB0027243AH"}], desc:"High-efficiency detergent that cleans hard and stays gentle on fabric. Hot or cold water."},
    {id:"wave", name:"Wave Laundry Detergent", cat:"Laundry", sub:"Detergents", code:"PROBWXXXXX", opts:[{pack:"5 Gal.", sku:"PB0013775AA"},{pack:"15 Gal.", sku:"PB0013775AB"},{pack:"55 Gal.", sku:"PB0013775AI"}], desc:"Economical liquid laundry concentrate with optical brighteners for home and commercial machines."},
    {id:"enzyme-clean", name:"Enzyme Clean Laundry Detergent", cat:"Laundry", sub:"Detergents", code:"PROBECXXXXX", opts:[{pack:"4/9 lb.", sku:"PB0014190AC"},{pack:"50 lb.", sku:"PB0014190AB"}], desc:"Detergent with color-safe bleach and brighteners. Works in low temperatures. Citrus scent."},
    {id:"new-clean", name:"New Clean Laundry Detergent", cat:"Laundry", sub:"Detergents", pack:"50 lb.", sku:"PB0012540AA", note:"Min. order 36"},
    {id:"new-clean-3", name:"New Clean III Laundry Detergent", cat:"Laundry", sub:"Detergents", pack:"50 lb.", sku:"PB0012665AB"},
    {id:"opti-brite", name:"Opti-Brite All-In-One Towel & Rag Powder Laundry Detergent", cat:"Laundry", sub:"Detergents", pack:"50 lb.", sku:"PB0011691AA"},
    {id:"oxy-brilliant", name:"Oxy Brilliant Bleach", cat:"Laundry", sub:"Destainers", code:"PROBOBBXXXXX", opts:[{pack:"2.5 Gal.", sku:"PB0017150AH"},{pack:"5 Gal.", sku:"PB0017150AB"},{pack:"15 Gal.", sku:"PB0017150AC"},{pack:"55 Gal.", sku:"PB0017150AI"}], desc:"Concentrated peroxide bleach that is safe for most colored fabrics."},
    {id:"chlor-white", name:"Chlor White Liquid Bleach", cat:"Laundry", sub:"Destainers", code:"PROBCWXXXXX", opts:[{pack:"2.5 Gal.", sku:"PB0005205AJ", note:"Min. order 48"},{pack:"5 Gal.", sku:"PB0005205AD"},{pack:"15 Gal.", sku:"PB0005205AE"},{pack:"55 Gal.", sku:"PB0005205AI", note:"Min. order 4"}], desc:"Maximum-strength liquid bleach for cotton and synthetics. Not for silk, wool or nylon."},
    {id:"sour-ultra", name:"Sour Ultra", cat:"Laundry", sub:"Sours", opts:[{pack:"5 Gal.", sku:"PB0011204AA"},{pack:"15 Gal.", sku:"PB0011204AB"}]},
    {id:"sour-advanced", name:"Sour Advanced", cat:"Laundry", sub:"Sours", pack:"5 Gal.", sku:"PB0027242AB"},
    {id:"sour-all", name:"Sour All", cat:"Laundry", sub:"Sours", pack:"5 Gal.", sku:"PB0022630AA"},
    {id:"sour-extra", name:"Sour Extra", cat:"Laundry", sub:"Sours", code:"PROBSEXXXXX", opts:[{pack:"5 Gal.", sku:"PB0016894AA"},{pack:"15 Gal.", sku:"PB0016894AB"},{pack:"55 Gal.", sku:"PB0016894AE"}], desc:"Laundry sour that removes iron and rust spots and brightens yellowed linens."},
    {id:"soft-free", name:"Soft Free Softener", cat:"Laundry", sub:"Softeners", pack:"15 Gal.", sku:"PB0027248AC"},
    {id:"soft-select", name:"Soft Select Softener", cat:"Laundry", sub:"Softeners", code:"PROBSSCXXXXX", opts:[{pack:"2.5 Gal.", sku:"PB0027247AE"},{pack:"5 Gal.", sku:"PB0027247AC"},{pack:"15 Gal.", sku:"PB0027247AD"}], desc:"Concentrated softener that leaves linen smelling fresh. Springtime scent."},
    {id:"soft-sunset", name:"Soft Sunset Softener", cat:"Laundry", sub:"Softeners", code:"PROBSUNXXXXX", opts:[{pack:"5 Gal.", sku:"PB0027249AA"},{pack:"15 Gal.", sku:"PB0027249AB"}], desc:"Concentrated softener that reduces static and leaves linen soft. Island Escape scent."},
    {id:"soft-touch", name:"Soft Touch Softener", cat:"Laundry", sub:"Softeners", pack:"5 Gal.", sku:"PB0017340AA"},
    {id:"soft-touch-plus", name:"Soft Touch Plus Softener", cat:"Laundry", sub:"Softeners", code:"PROBSTPXXXXX", opts:[{pack:"5 Gal.", sku:"PB0027071AA"},{pack:"15 Gal.", sku:"PB0027071AB"},{pack:"55 Gal.", sku:"PB0027071AH"}], desc:"Concentrated softener that reduces wrinkles and static. April fresh scent."},
    {id:"sour-soft-plus", name:"Sour/Soft Plus", cat:"Laundry", sub:"Sour/Softener", code:"PROBSSPXXXXX", opts:[{pack:"5 Gal.", sku:"PB0016898AA"},{pack:"15 Gal.", sku:"PB0016898AB"}], desc:"Concentrated sour and anti-yellowing agent that neutralizes leftover alkalinity in linens. Citrus scent."},
    {id:"size-all", name:"Size All Sizing", cat:"Laundry", sub:"Sizing", pack:"5 Gal.", sku:"PB00ALP01AD"},
    {id:"stain-pro-b", name:"Stain Pro B Pre-Spotter", cat:"Laundry", sub:"Pre-Spotters", pack:"Qt.", sku:"PB0027185AA"},
    {id:"stain-pro-c", name:"Stain Pro C Pre-Spotter", cat:"Laundry", sub:"Pre-Spotters", pack:"Qt.", sku:"PB0012690AC"},
    {id:"stain-pro-e", name:"Stain Pro E Pre-Spotter", place:[["Laundry","Pre-Spotters"],["Housekeeping","Carpet Cleaners"]], pack:"Qt.", sku:"PB0014050AD"},
    {id:"stain-pro-o", name:"Stain Pro O Pre-Spotter", cat:"Laundry", sub:"Pre-Spotters", pack:"Qt.", sku:"PB0022679AC"},
    {id:"stain-pro-r", name:"Stain Pro R Pre-Spotter", cat:"Laundry", sub:"Pre-Spotters", pack:"Qt.", sku:"PB0027190AA"},
    {id:"stain-pro-kit", name:"Stain Pro Pre-Spotter Starter Kit", cat:"Laundry", sub:"Pre-Spotters", pack:"6/1 Qt.", sku:"PB00PSSTRKT"},
    {id:"spotter-chart", name:"Pre-Spotters Chart", cat:"Laundry", sub:"Pre-Spotters", opts:[{pack:"Regular", sku:"PB00CHARTSP"},{pack:"Small", sku:"PB00CHARTSPS"}]},
    {id:"stain-pro-1", name:"Stain Pro 1 Reclaim", cat:"Laundry", sub:"Reclaim", code:"PROBSP1XXXXX", opts:[{pack:"10/1.5 lb.", sku:"PB0027170AA"},{pack:"20 lb.", sku:"PB0027170AB"}], desc:"Reclaims tough stains on white linen that were missed in pre-spotting or washing."},
    {id:"stain-pro-2", name:"Stain Pro 2 Reclaim", cat:"Laundry", sub:"Reclaim", pack:"1.5 lb.", sku:"PB0027175AA"},
    {id:"stain-pro-3", name:"Stain Pro 3 Reclaim", cat:"Laundry", sub:"Reclaim", pack:"1 lb.", sku:"PB0004950AA"}
  ];
  /* ============ BRANDS ============
     One box per company. To add a company:
     1. Add it to BRANDS below (id = short lowercase name, no spaces).
     2. Give each of its products  brand:"thatid"  in PRODUCTS.
     Products with no brand belong to the FIRST brand in this list.
  */
  var BRANDS = [
    {id:"problend", name:"ProBlend", tagline:"Commercial cleaning and sanitation chemicals",
     categories:["Warewash","Hand Care","Housekeeping","Laundry"],
     blurbs:{
       "Warewash":"Dish machine, pot and pan, sanitizing and kitchen cleaning",
       "Hand Care":"Soaps and sanitizers for staff and guest areas",
       "Housekeeping":"Restroom, glass, air care, polish and the Galaxy dispensing system",
       "Laundry":"On-premise laundry detergents, bleach, sours, softeners and spotters"
     }}
  ];
  /* Backup photos from ProBlend's brand site (problendsolutions.com), used when the catalog photo is missing */
  var PB_SITE="https://problendsolutions.com/images/products/thumbs/";
  var BACKUP={"crystal-ht":"1407269093warewash_crystal.jpg","encap-dish":"1478787820warewash_encap-dish.jpg","solid-force":"1478787861warewash_solid-force.jpg","solid-force-np":"1478787877warewash_solid-force-np.jpg","solid-metal-power":"1478787943warewash_solid-metal-power.jpg","rinse-free":"1410980844warewash_rinsefree.jpg","sparkle":"1407269299warewash_sparkle.jpg","lt-detergent":"1410987327warewash_ltdetergent.jpg","hw-lt":"1410987372warewash_hwltdetergent.jpg","lt-rinse":"1410987455warewash_ltrinseaid.jpg","lt-san":"1410987580warewash_ltsan.jpg","oxy-complete":"1478786840warewash_oxy-complete.jpg","silver-brilliant":"1410987614warewash_silverbrilliant.jpg","solid-silver-brite":"1478786924warewash_solid-silver-brite.jpg","bar-glass":"1553874699pb0011428ab_bar-glass.png","clean-pro":"1411589548warewash_cleanpropot&pan.jpg","emerald":"1411589908warewash_emerald.jpg","sapphire":"1408457310warewash_sapphire.jpg","solid-clean":"1478786140warewash_solid-clean.jpg","dd5000":"1567090275pb0013546_dd-5000.png","dsq10":"1567090670pb0013960_dsq-10.png","guardian":"1729260958guardian-sanitizer-qt.jpg","eliminator":"1552933239eliminator-plus.png","ht-grill":"1643060454pb0015210aa_htgrillcleaner.png","workforce-oven":"1635521320pb00mag02ba_ncovengrill.png","citra-sol":"1643060630pb00rd102ab_citra-sol.png","hd-pride":"1546448356hdpridecleaner.jpg","lavender-express":"1567090981pb0016600_lavender-express.png","chlor-clean":"1719923902pb0012310aa-chlor-clean-1g.jpg","clean-freeze":"1552935422clean-freeze.png","enhance":"1496776620enhance-14.5oz.jpg","grease-free":"1552935549greasefree.png","produceshield":"1553878110pb0027264aa_produceshield.png","scalaway":"1552935477scalaway.png","bio-force":"1553870453pb0011680ab_bio-force.png","suregrip":"1496777793suregrip-f-style.jpg","floor-touch":"1478788137warewash_floortouch.jpg","galaxy-41":"1567189148pb00bio23aa_galaxy41.png","citrus-clean":"1553875972pb0015120_citrus-clean.png","lavender-q":"1588275397pb0016759aa_lavender-q-cleaner.png","lemon-q":"1567111398pb0016760ab_lemon-q-cleaner.png","pine-q":"1553876110pb0019740aa_pine-q-cleaner.png","metal-brite":"1553877860pb0022020aa_metal-brite.png","rejuvenate":"1491492331rejuvenate-17oz.jpg","clear-view-conc":"1413227275housekeeping_clearviewconc.jpg","clear-view-rtu":"1410883240housekeeping_clearviewrtu.jpg","cannabis-odor":"1719942813extreme-cannabisodorout.jpg","smoke-odor":"1719942920extreme-smokeodorout.jpg","linen-fresh-rtu":"1719943833pb0027258aa-rt-linen-fresh-rtu.jpg","spots-away":"1567172840spotsaway-18oz.jpg","stain-pro-e":"1720028640pb0014050ad-stain-pro-e.jpg","eraser":"1421812162housekeeping_eraser.jpg","urinal-mat":"1518714837wizkid_antimicrobial-mat.jpg","splash-hog":"1518714629wizkid_splash-hog.jpg","amen-shampoo":"1719946629pb00for07aa-shampoo.jpg","amen-conditioner":"1719947001pb00for07ab-conditioner.jpg","amen-bodywash":"1719947097pb00for07ac-bodywash.jpg","amen-handsoap":"1719948698pb00rd120ab-handsoap-almond.jpg","hand-soap-floral":"1719929476pb00rd120ab-handsoap-almond.jpg","g10":"1652971715pb0027215aa-g10-lemonginger.jpg","g11":"1652971790pb0027259aa-g11-luxurysuite.jpg","g12":"1567188806pb0027225ab_galaxy12.png","g14":"1567188880pb0027205aa_galaxy14.png","g15":"1567196630pb0013685aa_galaxy-15.png","galaxy-20":"1567188924pb0027263aa_galaxy20.png","g21":"1567188953pb0027240aa_galaxy21.png","g22":"1567196683pb0014081aa_galaxy-22.png","g25":"1567189008pb0027210aa_galaxy25.png","g31":"1567196707pb0023040aa_galaxy-31.png","g40":"1567189114pb0018570aa_galaxy40.png","g50":"1567189193pb0014081ac_galaxy50.png","g51":"1567196733pb00rd102ac_galaxy-51.png","galaxy-53":"1567196752pb0016600aa_galaxy-53.png","g54":"1567189232pb0027241aa_galaxy54.png","af-hand-soap":"1719929339pb00cus08ae-antibacterial-foaming-hand-soap.jpg","blue-foaming-silk":"1719929721pb0027234af_blue-foaming-silk.jpg","clear-foaming-silk":"1567097725pb0027235aa_clear-foaming-silk.png","clean-simple-lotion":"1553874244pb0015485ab_clean-and-simple.png","clear-silk-lotion":"1553872803pb0027230ab_clear-silk.png","alcohol-foam":"1719929023pb00cus08ag-alcohol-foaming-hand-sanitizer.jpg","e3-gal":"1719929166pb00cus08af-e3-foaming-hand-sanitizer.jpg","af-cart-citrus":"1705005887pb00cus08ab_antibacterial-foaming-hand-soap.png","e3-cart":"1705006070pb00cus08ac_e3-hand-sanitizer.png","foam-cart-tropical":"1705006154pb00cus08ad_foaming-hand-soap.png","manual-dispensers":"1605215343pb00mag02_manual-disp.jpg","touchfree-dispensers":"1605215687pb00mag02_touch-free-disp.jpg","break-out":"1385061841laundry_breakout.jpg","conditioner-se":"1552928158pb0021025aa_conditionerse.jpg","linen-boost":"1412868549laundry_linenboost.jpg","detergent-plus":"1412868612laundry_detergentplus.jpg","enzyme-clean":"1478782218laundry_enzyme-clean.jpg","enzyme-power":"1553875509pb0016905af_enzyme-power.png","es-bright":"1553875657pb0023385ah_es-laundry-bright.png","new-clean":"1491407780newclean-50lb.jpg","new-clean-3":"1496846607newcleaniii-50lbpail.jpg","opti-brite":"1491407246opti-brite-50lb.jpg","suds-all":"1553875600pb0015780aa_suds-all.png","tribute-he":"1647033367pb0027243-tribute.jpg","victory-he":"1553875202pb0027245af_victory.png","wave":"1553874810pb0013775aa_wave.png","chlor-white":"1553874379pb0005205aj_chlor-white.png","oxy-brilliant":"1553874473pb0017150ah_oxy-brilliant.png","sour-advanced":"1478779321laundry_sour-advanced2.jpg","sour-all":"1412871670laundry_sourall.jpg","sour-extra":"1412871692laundry_sourextra.jpg","soft-select":"1553878307pb0027247ae_soft-select.png","soft-sunset":"1496865117softsunset-5g.jpg","soft-touch":"1496865150softtouch-5g.jpg","soft-touch-plus":"1496865177softtouchplus-5g.jpg","sour-soft-plus":"1567192810pb0016898_sour-soft-plus.png","size-all":"1478781869image.jpg","stain-pro-b":"1720028441pb0027185aa-stain-pro-b.jpg","stain-pro-c":"1720028493pb0012690ac-stain-pro-c.jpg","stain-pro-o":"1720028693pb0022679ac-stain-pro-o.jpg","stain-pro-r":"1720028725pb0027190aa-stain-pro-r.jpg","stain-pro-kit":"1720028863pb00psstrkt_stain-pro-starter-kit.png","stain-pro-1":"1370386867stainpro1.jpg","stain-pro-2":"1370386892stainpro2.jpg","stain-pro-3":"1370386910stainpro3.jpg"};
  var BYBRAND = {}; BRANDS.forEach(function(b){BYBRAND[b.id]=b});
  function cats(bid){
    if(bid==="all"){var a=[];BRANDS.forEach(function(b){cats(b.id).forEach(function(c){if(a.indexOf(c)<0)a.push(c)})});return a}
    var b=BYBRAND[bid], out=(b.categories||[]).slice();
    PRODUCTS.forEach(function(p){if(p.brand===bid)p.cats.forEach(function(c){if(out.indexOf(c)<0)out.push(c)})});
    return out;
  }
  function inBrand(p,bid){return bid==="all"||p.brand===bid}
  function blurb(bid,c){var b=BYBRAND[bid];return (b&&b.blurbs&&b.blurbs[c])||""}
  var OTHER = "~other";
  // "4/Gal." -> "Case of 4 × 1 gal", "5 Gal." -> "5 gal", "6/22 oz." -> "Case of 6 × 22 oz"
  function size(pack){
    if(!pack)return "";
    if(pack==="Galaxy")return "Galaxy system";
    var m=pack.match(/^(.*?)(\s*\(FS\))?$/), base=m[1], fs=m[2]?" (FS)":"";
    var unit=function(u){u=u.replace(/\.$/,"").trim();if(/^(gal|qt)$/i.test(u))return "1 "+u.toLowerCase();return u.replace(/Gal$/,"gal").replace(/Qt$/,"qt")};
    var c=base.match(/^(\d+)\/(?:1\s+)?(.+)$/);
    return (c?"Case of "+c[1]+" × "+unit(c[2]):unit(base))+fs;
  }
  function imgFor(sku){return IMG+sku+".JPG"}
  function inCat(p,c){return p.cats.indexOf(c)>-1}
  function subsIn(p,c){return p.place.filter(function(x){return c==="All"||x[0]===c}).map(function(x){return x[1]})}
  /* ================================== */
  
  var $ = function(id){return document.getElementById(id)};
  var root = $("mq");
  var state = {brand:BRANDS[0].id, cat:"All", sub:"All", q:""};
  var KEY = "mcms-quote-list-v2";
  
  // Every orderable line, keyed by item number (or product code + "~other" for "size to confirm")
  var LINES = {}, BYID = {};
  PRODUCTS.forEach(function(p){
    BYID[p.id]=p;
    p.brand = p.brand || BRANDS[0].id;
    p.brandName = (BYBRAND[p.brand]||BRANDS[0]).name;
    p.place = p.place || [].concat(p.sub).map(function(s){return [p.cat,s]});
    p.cats = []; p.subs = [];
    p.place.forEach(function(x){if(p.cats.indexOf(x[0])<0)p.cats.push(x[0]);if(p.subs.indexOf(x[1])<0)p.subs.push(x[1])});
    p.cat = p.cats[0];
    p.multi = !!(p.opts||p.code);
    if(p.multi){
      p.opts = p.opts||[];
      p.opts.forEach(function(o){LINES[o.sku]={p:p,pack:size(o.pack),sku:o.sku,note:o.note}});
      if(p.code)LINES[p.code+OTHER]={p:p,pack:"Size to confirm",sku:p.code.replace(/X+$/,"")};
      p.imgs = (p.img?[p.img]:[]).concat(p.opts.map(function(o){return imgFor(o.sku)}));
      if(BACKUP[p.id])p.imgs.push(PB_SITE+BACKUP[p.id]);
    }else{
      LINES[p.sku]={p:p,pack:size(p.pack),sku:p.sku,note:p.note};
      p.imgs = (p.img?[p.img]:[]).concat([imgFor(p.sku)]);
      if(BACKUP[p.id])p.imgs.push(PB_SITE+BACKUP[p.id]);
    }
  });
  
  /* ============ SPEC REQUESTS (can liners, paper) ============
     Questions shown when someone picks Can Liners or Paper Products.
     type: select | chips | text | textarea | qty.  req:true = must answer.
     show:[...] = only show when "What do you need?" matches one of these.
  */
  var REQ_FORMS = {
    liners:{title:"Can Liners", item:"Can Liners", intro:"Tell us what you use and we'll quote the right liner. Not sure on something? Pick “Not sure” and we'll help.", fields:[
      {id:"size", label:"Can size", type:"select", req:true, opts:["4–6 gal (17 x 18 in) desk bins","7–10 gal (24 x 24 in)","12–16 gal (24 x 33 in)","20–30 gal (30 x 37 in)","33 gal (33 x 40 in)","40–45 gal (40 x 46 in)","55–60 gal (38 x 58 in)","56 gal (43 x 47 in)","60–64 gal (38 x 63 in)","Not sure, help me choose"]},
      {id:"color", label:"Color", type:"chips", req:true, opts:["Clear","Black","Gray","White","Not sure"]},
      {id:"duty", label:"How tough?", type:"select", opts:["Light: office paper and tissue","Medium: everyday trash","Heavy: food waste and kitchens","Extra heavy: wet, sharp or construction waste","Not sure"]},
      {id:"mat", label:"Material", type:"select", opts:["High density (thin, crinkly, holds weight)","Low density (soft, stretchy, resists punctures)","Not sure"]},
      {id:"mil", label:"Exact thickness, if you know it", type:"text", ph:"e.g. 1.5 mil or 16 micron"},
      {id:"pack", label:"Packaging", type:"chips", opts:["Rolls","Flat packed","No preference"]},
      {id:"brand", label:"Preferred brand (optional)", type:"text", ph:"Any brand you use now"},
      {id:"qty", label:"How many cases", type:"qty"},
      {id:"note", label:"Anything else", type:"textarea", ph:"How many you go through a month, scented, drawstring, recycled content"}
    ]},
    paper:{title:"Paper Products", item:"Paper", intro:"Pick what you need and we'll match it to your dispensers.", fields:[
      {id:"kind", label:"What do you need?", type:"chips", req:true, opts:["Toilet tissue","Roll paper towels","Folded paper towels","Kitchen roll towels","Napkins","Facial tissue","Toilet seat covers"]},
      {id:"ply", label:"Ply", type:"chips", opts:["1-ply","2-ply","Not sure"], show:["Toilet tissue","Kitchen roll towels","Napkins","Facial tissue"]},
      {id:"tt", label:"Roll type", type:"select", opts:["Standard roll","Jumbo roll (JRT)","Coreless roll","Not sure"], show:["Toilet tissue"]},
      {id:"rt", label:"Towel roll type", type:"select", opts:["Hardwound roll","Touchless / controlled roll","Center-pull roll","Not sure"], show:["Roll paper towels"]},
      {id:"len", label:"Roll size", type:"select", opts:["About 8 in x 350–425 ft","About 8 in x 600 ft","About 8 in x 700–1,000 ft","Not sure"], show:["Roll paper towels"]},
      {id:"fold", label:"Fold", type:"select", opts:["Multifold","C-fold","Single fold","Not sure"], show:["Folded paper towels"]},
      {id:"nap", label:"Napkin type", type:"select", opts:["Beverage / cocktail","Lunch","Dinner","Dispenser napkins","Not sure"], show:["Napkins"]},
      {id:"color", label:"Color", type:"chips", opts:["White","Natural / kraft","Not sure"], show:["Roll paper towels","Folded paper towels","Kitchen roll towels","Napkins"]},
      {id:"disp", label:"Dispenser it needs to fit (optional)", type:"text", ph:"Brand or model on your dispenser", show:["Toilet tissue","Roll paper towels","Folded paper towels","Napkins","Toilet seat covers"]},
      {id:"brand", label:"Preferred brand (optional)", type:"text", ph:"Any brand you use now"},
      {id:"qty", label:"How many cases", type:"qty"},
      {id:"note", label:"Anything else", type:"textarea", ph:"How much you go through a month, recycled content, sheet count"}
    ]}
  };
  var REQKEY = "mcms-quote-reqs-v1";
  var REQS = (function(){try{var v=JSON.parse(localStorage.getItem(REQKEY)||"{}");return (v&&typeof v==="object")?v:{}}catch(e){return {}}})();
  function saveReqs(){try{localStorage.setItem(REQKEY,JSON.stringify(REQS))}catch(e){}}
  function addReqLine(k,r){LINES[k]={p:{id:k,name:r.name,brandName:"",cat:"Request",subs:["Request"]},pack:r.pack,sku:"",req:true}}
  for(var rk in REQS){addReqLine(rk,REQS[rk])}
  
  var list = load();
  function load(){try{var v=JSON.parse(localStorage.getItem(KEY)||"{}");var out={};for(var k in v){if(LINES[k]&&v[k]>0)out[k]=v[k]|0}return out}catch(e){return {}}}
  function save(){try{localStorage.setItem(KEY,JSON.stringify(list))}catch(e){}}
  function esc(s){return String(s==null?"":s).replace(/[&<>"']/g,function(c){return {"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]})}
  function lineCount(){return Object.keys(list).length}
  function qtyInList(p){var n=0;for(var k in list){if(LINES[k].p===p)n+=list[k]}return n}
  
  // Text shown when a product has no photo anywhere
  function art(p){return '<span class="mq-ph">'+esc(p.name.split(" ").slice(0,3).join(" "))+'<small>Photo coming soon</small></span>'}
  function imgHTML(p,src){
    var list=(src?[src]:[]).concat((p.imgs||[]).filter(function(u){return u!==src}));
    if(!list.length) return art(p);
    return '<img src="'+esc(list[0])+'" alt="'+esc(p.name)+'" loading="lazy" data-pid="'+esc(p.id)+'" data-alt="'+esc(list.slice(1).join("|"))+'">';
  }
  // Photo missing? Try the next size's photo, then fall back to the product art
  root.addEventListener("error",function(e){
    var t=e.target; if(t.tagName!=="IMG"||!t.dataset.pid)return;
    var rest=t.dataset.alt?t.dataset.alt.split("|"):[];
    if(rest.length){t.dataset.alt=rest.slice(1).join("|");t.src=rest[0];return}
    t.outerHTML=art(BYID[t.dataset.pid]);
  },true);
  
  function renderBrands(){
    var boxes=BRANDS.map(function(b){
      var n=PRODUCTS.filter(function(p){return p.brand===b.id}).length, cs=cats(b.id);
      return {id:b.id,name:b.name,tag:b.tagline||"",meta:n+" products · "+cs.length+" categories",cats:cs.join(" · ")};
    });
    if(BRANDS.length>1)boxes.unshift({id:"all",name:"All brands",tag:"Every product we carry",meta:PRODUCTS.length+" products",cats:BRANDS.map(function(b){return b.name}).join(" · ")});
    $("mq-brands").innerHTML=boxes.map(function(b){var on=state.brand===b.id;
      return '<button type="button" class="mq-bx" data-brand="'+esc(b.id)+'" aria-pressed="'+on+'">'+(on?'<span class="mq-bx-on">Viewing</span>':'')+
        '<span class="mq-bx-name">'+esc(b.name)+'</span><span class="mq-bx-tag">'+esc(b.tag)+'</span>'+
        '<span class="mq-bx-meta">'+esc(b.meta)+'</span><span class="mq-bx-cats">'+esc(b.cats)+'</span></button>';
    }).join("");
  }
  
  function renderTabs(){
    var tabs=["All"].concat(cats(state.brand));
    $("mq-tabs").innerHTML=tabs.map(function(c){
      var n=PRODUCTS.filter(function(p){return inBrand(p,state.brand)&&(c==="All"||inCat(p,c))}).length;
      return '<button type="button" class="mq-tab" data-cat="'+esc(c)+'" aria-pressed="'+(state.cat===c)+'">'+esc(c)+'<span>'+n+'</span></button>';
    }).join("");
    var subs=[];
    if(state.cat!=="All"){
      PRODUCTS.forEach(function(p){if(inBrand(p,state.brand)&&inCat(p,state.cat))subsIn(p,state.cat).forEach(function(s){if(subs.indexOf(s)<0)subs.push(s)})});
      var rank=function(sub){for(var i=0;i<PRODUCTS.length;i++){var x=PRODUCTS[i].place[0];if(inBrand(PRODUCTS[i],state.brand)&&x[0]===state.cat&&x[1]===sub)return i}return 1e6};
      subs.sort(function(x,y){return rank(x)-rank(y)});
    }
    $("mq-subs").hidden=subs.length<2;
    $("mq-subs").innerHTML=subs.length<2?"":["All"].concat(subs).map(function(s){
      return '<button type="button" class="mq-sub-chip" data-sub="'+esc(s)+'" aria-pressed="'+(state.sub===s)+'">'+esc(s==="All"?"All types":s)+'</button>';
    }).join("");
  }
  
  function matches(p){
    if(!inBrand(p,state.brand))return false;
    if(state.cat!=="All"&&!inCat(p,state.cat))return false;
    if(state.sub!=="All"&&subsIn(p,state.cat).indexOf(state.sub)<0)return false;
    if(!state.q)return true;
    var extra=p.multi?p.opts.map(function(o){return o.pack+" "+size(o.pack)+" "+o.sku}).join(" "):(p.pack+" "+size(p.pack)+" "+p.sku);
    var hay=(p.brandName+" "+p.name+" "+(p.desc||"")+" "+extra+" "+p.cats.join(" ")+" "+p.subs.join(" ")+" "+(p.note||"")).toLowerCase();
    return state.q.toLowerCase().split(/\s+/).every(function(w){return hay.indexOf(w)>-1});
  }
  
  function sizePicker(p,prefix){
    if(!p.multi) return "";
    var o=p.opts.map(function(x){return '<option value="'+esc(x.sku)+'">'+esc(size(x.pack))+(x.note?' · '+esc(x.note):'')+'</option>'}).join("");
    if(p.code)o+='<option value="'+esc(p.code+OTHER)+'">'+(p.opts.length?"Not sure, help me choose":(p.optLabel==="Color"?"Color to confirm":"Size to confirm"))+'</option>';
    return '<label class="mq-size"><span>'+esc(p.optLabel||"Size")+'</span><select id="'+prefix+esc(p.id)+'" data-size>'+o+'</select></label>';
  }
  function metaHTML(p){
    var word=(p.optLabel||"Size").toLowerCase()+"s";
    var chip=p.multi?(p.opts.length>1?p.opts.length+" "+word:(p.opts.length===1&&!p.code?size(p.opts[0].pack):"Multiple "+word)):size(p.pack);
    var sku=p.multi?"":'<span class="mq-sku">#'+esc(p.sku)+'</span>';
    return '<div class="mq-meta">'+(chip?'<span class="mq-pack">'+esc(chip)+'</span>':'')+sku+(p.note?'<span class="mq-flag">'+esc(p.note)+'</span>':'')+'</div>';
  }
  function addRow(p,prefix){
    var n=qtyInList(p);
    return '<div class="mq-add">'+
      '<div class="mq-qty"><button type="button" data-step="-1" aria-label="Less">−</button>'+
      '<input type="number" min="1" value="1" inputmode="numeric" aria-label="Quantity" id="'+prefix+'q-'+esc(p.id)+'">'+
      '<button type="button" data-step="1" aria-label="More">+</button></div>'+
      '<button type="button" class="mq-addbtn'+(n?" added":"")+'" data-add="'+esc(p.id)+'">'+(n?"✓ In list ("+n+")":"Add to quote")+'</button>'+
    '</div>';
  }
  function card(p,c,i){
    return '<article class="mq-card">'+
      '<button type="button" class="mq-img" data-view="'+esc(p.id)+'" aria-label="View '+esc(p.name)+'">'+imgHTML(p)+'</button>'+
      '<div class="mq-body">'+metaHTML(p)+
        '<p class="mq-brand">'+esc(p.brandName)+'</p>'+
        '<h4 class="mq-name">'+esc(p.name)+'</h4>'+
        '<p class="mq-cat">'+esc(subsIn(p,c).join(" · "))+'</p>'+
        (p.desc?'<p class="mq-desc">'+esc(p.desc)+'</p>':'')+
        sizePicker(p,"s"+i+"-")+addRow(p,"c"+i)+
      '</div></article>';
  }
  
  function renderResults(){
    var shown=PRODUCTS.filter(matches);
    var out="";
    if(!shown.length){
      out='<div class="mq-empty">No products match “'+esc(state.q)+'”. Try a shorter word, or <button type="button" class="mq-rm" data-clear>clear the search</button>. Need something not listed? Add it in the notes when you send your list.</div>';
    }else{
      var groups=[], i=0;
      (state.brand==="all"?BRANDS.map(function(b){return b.id}):[state.brand]).forEach(function(bid){
        cats(bid).forEach(function(c){groups.push([bid,c])});
      });
      groups.forEach(function(g){
        var bid=g[0], c=g[1], idx=i++;
        if(state.cat!=="All"&&c!==state.cat)return;
        var items=shown.filter(function(p){return p.brand===bid&&inCat(p,c)});
        if(!items.length)return;
        var title=(state.brand==="all"?BYBRAND[bid].name+" · ":"")+c, bl=blurb(bid,c);
        out+='<section class="mq-section"><h3>'+esc(title)+' <small>'+items.length+' products'+(bl?' · '+esc(bl):'')+'</small></h3><div class="mq-grid">'+items.map(function(p){return card(p,c,idx)}).join("")+'</div></section>';
      });
    }
    $("mq-results").innerHTML=out;
  }
  
  function updateCount(bump){
    var el=$("mq-count"); el.textContent=lineCount();
    if(bump){el.classList.remove("bump");void el.offsetWidth;el.classList.add("bump")}
  }
  
  /* ---- Panels ---- */
  function openPanel(html){
    $("mq-panel").innerHTML=html; $("mq-overlay").hidden=false;
    try{$("mq-panel").scrollIntoView({behavior:"smooth",block:"start"})}catch(e){}
    var f=$("mq-panel").querySelector(".mq-x"); if(f)f.focus();
  }
  function closePanel(){$("mq-overlay").hidden=true;$("mq-panel").innerHTML="";renderResults()}
  
  function viewProduct(id){
    var p=BYID[id]; if(!p)return;
    var sizes=p.desc?'<p>'+esc(p.desc)+'</p>':'';
    openPanel('<div class="mq-panel-head"><h3 id="mq-ptitle">'+esc(p.cat)+'</h3><button type="button" class="mq-x" data-close aria-label="Close">×</button></div>'+
      '<div class="mq-panel-body"><div class="mq-detail"><div class="mq-img">'+imgHTML(p)+'</div><div class="mq-dcol">'+
      metaHTML(p)+'<p class="mq-brand">'+esc(p.brandName)+'</p>'+
      '<h4 class="mq-name" style="font-size:19px">'+esc(p.name)+'</h4><p class="mq-cat">'+esc(p.subs.join(" · "))+'</p>'+sizes+
      sizePicker(p,"sd-")+addRow(p,"d")+
      '<p class="mq-note">Need a spec sheet or SDS? Ask in your quote notes and we will send it.</p></div></div></div>');
  }
  
  function reqFieldHTML(kind,f){
    var id="rq-"+f.id, star=f.req?' <i>*</i>':'', sh=f.show?' data-show="'+esc(f.show.join("|"))+'" hidden':'';
    if(f.type==="chips"){
      return '<fieldset class="mq-field full"'+sh+'><legend>'+esc(f.label)+star+'</legend><div class="mq-chips">'+
        f.opts.map(function(o,i){return '<label class="mq-chip"><input type="radio" name="'+id+'" value="'+esc(o)+'"'+(i===0&&!f.req?'':'')+'><span>'+esc(o)+'</span></label>'}).join("")+'</div></fieldset>';
    }
    var inner;
    if(f.type==="select") inner='<select id="'+id+'"><option value="">'+(f.req?'Choose one':'Choose one (optional)')+'</option>'+f.opts.map(function(o){return '<option>'+esc(o)+'</option>'}).join("")+'</select>';
    else if(f.type==="textarea") inner='<textarea id="'+id+'" rows="2" placeholder="'+esc(f.ph||"")+'"></textarea>';
    else if(f.type==="qty") inner='<div class="mq-qty" style="align-self:flex-start"><button type="button" data-step="-1" aria-label="Less">−</button><input id="'+id+'" type="number" min="1" value="1" inputmode="numeric"><button type="button" data-step="1" aria-label="More">+</button></div>';
    else inner='<input id="'+id+'" type="text" placeholder="'+esc(f.ph||"")+'">';
    var full=(f.type==="textarea"||f.type==="select")?' full':'';
    return '<div class="mq-field'+full+'"'+sh+'><label for="'+id+'">'+esc(f.label)+star+'</label>'+inner+'</div>';
  }
  function openReq(kind){
    var F=REQ_FORMS[kind]; if(!F)return;
    openPanel('<div class="mq-panel-head"><h3 id="mq-ptitle">'+esc(F.title)+'</h3><button type="button" class="mq-x" data-close aria-label="Close">×</button></div>'+
      '<div class="mq-panel-body"><p class="mq-rq-intro">'+esc(F.intro)+'</p>'+
      '<form class="mq-form" id="mq-reqform" data-kind="'+esc(kind)+'" novalidate>'+F.fields.map(function(f){return reqFieldHTML(kind,f)}).join("")+
      '<p class="mq-error full" id="mq-rqerr" hidden></p>'+
      '<div class="mq-field full"><button type="submit" class="mq-submit">Add to quote</button></div></form></div>');
  }
  function reqVal(f){
    var id="rq-"+f.id;
    if(f.type==="chips"){var c=root.querySelector('input[name="'+id+'"]:checked');return c?c.value:""}
    var el=$(id); return el?el.value.trim():"";
  }
  function reqVisible(f,kindVal){return !f.show||f.show.indexOf(kindVal)>-1}
  function submitReq(form){
    var kind=form.dataset.kind, F=REQ_FORMS[kind], kindVal=reqVal({id:"kind",type:"chips"});
    var miss=F.fields.filter(function(f){return f.req&&reqVisible(f,kindVal)&&!reqVal(f)}).map(function(f){return f.label.toLowerCase()});
    var err=$("mq-rqerr");
    if(miss.length){err.textContent="Please choose: "+miss.join(", ")+".";err.hidden=false;return}
    var parts=[], qty=1;
    F.fields.forEach(function(f){
      if(!reqVisible(f,kindVal)||f.id==="kind")return;
      var v=reqVal(f); if(!v)return;
      if(f.type==="qty"){qty=Math.max(1,parseInt(v,10)||1);return}
      if(f.type==="text"||f.type==="textarea")parts.push(f.label.replace(/ \(optional\)|, if you know it/g,"")+": "+v);
      else parts.push(v);
    });
    var name=kind==="paper"?kindVal:F.item;
    var key="req:"+Date.now().toString(36)+Math.floor(Math.random()*1e4);
    REQS[key]={name:name,pack:parts.join(" · ")||"Details to confirm"}; saveReqs(); addReqLine(key,REQS[key]);
    list[key]=qty; save(); updateCount(true);
    openPanel('<div class="mq-panel-head"><h3 id="mq-ptitle">Added to your quote</h3><button type="button" class="mq-x" data-close aria-label="Close">×</button></div>'+
      '<div class="mq-panel-body"><div class="mq-rq-done"><h4>'+esc(name)+'</h4><div class="mq-rq-sum"><strong>'+qty+' case'+(qty>1?'s':'')+'</strong> · '+esc(REQS[key].pack)+'</div>'+
      '<p class="mq-note">We will match this to the right product and include it in your quote.</p>'+
      '<div class="mq-row" style="justify-content:flex-start"><button type="button" class="mq-submit" style="width:auto" data-openlist>View quote list</button>'+
      '<button type="button" class="mq-ghost" data-req="'+esc(kind)+'">Add another '+esc(F.item.toLowerCase())+' request</button>'+
      '<button type="button" class="mq-ghost" data-close>Keep browsing</button></div></div></div>');
  }
  
  function listHTML(){
    var rows=Object.keys(list).map(function(k){
      var L=LINES[k];
      return '<tr><td><strong>'+esc(L.p.name)+'</strong><span class="mq-sku">'+esc(L.pack)+((k.indexOf(OTHER)>0||L.req)?'':' · #'+esc(L.sku))+'</span></td>'+
        '<td class="n"><div class="mq-qty"><button type="button" data-lstep="-1" data-key="'+esc(k)+'" aria-label="Less">−</button><input type="number" min="1" value="'+list[k]+'" data-lqty="'+esc(k)+'" aria-label="Quantity for '+esc(L.p.name)+'"><button type="button" data-lstep="1" data-key="'+esc(k)+'" aria-label="More">+</button></div></td>'+
        '<td><button type="button" class="mq-rm" data-remove="'+esc(k)+'">Remove</button></td></tr>';
    }).join("");
    var head='<div class="mq-panel-head"><h3 id="mq-ptitle">Your quote list</h3><button type="button" class="mq-x" data-close aria-label="Close">×</button></div>';
    if(!rows){
      return head+'<div class="mq-panel-body"><div class="mq-empty" style="margin:0">Your list is empty. Tap <strong>Add to quote</strong> on any product to start.</div><button type="button" class="mq-ghost" data-close>Browse products</button></div>';
    }
    return head+'<div class="mq-panel-body">'+
      '<div class="mq-tablewrap"><table class="mq-lines"><thead><tr><th>Product</th><th>Qty</th><th></th></tr></thead><tbody>'+rows+'</tbody></table></div>'+
      '<button type="button" class="mq-ghost" data-close style="align-self:flex-start">+ Add more products</button>'+
      '<form class="mq-form" id="mq-form" novalidate>'+
        field("mq-name","Your name",true,"text","name")+
        field("mq-biz","Business name",false,"text","organization")+
        field("mq-mail","Email",true,"email","email")+
        field("mq-phone","Phone",true,"tel","tel")+
        field("mq-city","City or ZIP for delivery",false,"text","postal-code")+
        '<div class="mq-field"><label for="mq-pref">Best way to reach you</label><select id="mq-pref"><option>Email</option><option>Phone call</option><option>Text</option></select></div>'+
        '<div class="mq-field full"><label for="mq-notes">Notes</label><textarea id="mq-notes" rows="3" placeholder="Sizes you need, delivery timing, how often you reorder, products not listed"></textarea></div>'+
        '<input class="mq-hp" type="text" id="mq-website" tabindex="-1" autocomplete="off" aria-hidden="true">'+
        '<p class="mq-error full" id="mq-err" hidden></p>'+
        '<div class="mq-field full"><button type="submit" class="mq-submit" id="mq-send">Request my quote</button></div>'+
        '<p class="mq-note full">No payment is taken here. We will reply with pricing, usually within one business day.</p>'+
      '</form></div>';
  }
  function field(id,label,req,type,ac){
    return '<div class="mq-field"><label for="'+id+'">'+label+(req?' <i>*</i>':'')+'</label><input id="'+id+'" type="'+type+'" autocomplete="'+ac+'"'+(req?' required':'')+'></div>';
  }
  
  function summaryText(f){
    var lines=Object.keys(list).map(function(k){var L=LINES[k];
      if(L.req)return "• "+list[k]+" case(s) x "+L.p.name+" (spec request): "+L.pack;
      return "• "+list[k]+" x "+L.p.brandName+" "+L.p.name+" ("+L.pack+")"+(k.indexOf(OTHER)>0?" [code "+L.sku+"]":" #"+L.sku)+(L.note?" ["+L.note+"]":"")});
    return "QUOTE REQUEST\n\nName: "+f.name+"\nBusiness: "+(f.biz||"-")+"\nEmail: "+f.mail+"\nPhone: "+f.phone+
      "\nCity/ZIP: "+(f.city||"-")+"\nPreferred contact: "+f.pref+"\n\nPRODUCTS\n"+lines.join("\n")+"\n\nNOTES\n"+(f.notes||"-");
  }
  
  function doneHTML(sent,text){
    var head='<div class="mq-panel-head"><h3 id="mq-ptitle">'+(sent?"Request sent":"One more step")+'</h3><button type="button" class="mq-x" data-close aria-label="Close">×</button></div>';
    if(sent){
      return head+'<div class="mq-panel-body"><div class="mq-done"><h4>Thank you</h4><p>Your quote request is in. We will reach out soon with pricing.</p><button type="button" class="mq-ghost" data-close>Back to catalog</button></div></div>';
    }
    var mail="mailto:"+BUSINESS_EMAIL+"?subject="+encodeURIComponent("Quote request")+"&body="+encodeURIComponent(text);
    return head+'<div class="mq-panel-body"><div class="mq-done"><p>Send this list to <strong style="user-select:all">'+esc(BUSINESS_EMAIL)+'</strong> and we will reply with pricing.</p>'+
      '<textarea class="mq-summary" id="mq-sum" readonly>'+esc(text)+'</textarea>'+
      '<div class="mq-row"><a class="mq-submit" style="width:auto;text-decoration:none" href="'+esc(mail)+'" target="_top">Open in my email</a>'+
      '<button type="button" class="mq-ghost" id="mq-copy">Copy list</button></div>'+
      '<p class="mq-note">If your email app doesn\'t open, copy the list and paste it into an email to us.</p></div></div>';
  }
  
  function readForm(){
    return {name:$("mq-name").value.trim(),biz:$("mq-biz").value.trim(),mail:$("mq-mail").value.trim(),phone:$("mq-phone").value.trim(),
      city:$("mq-city").value.trim(),pref:$("mq-pref").value,notes:$("mq-notes").value.trim()};
  }
  
  function submit(e){
    e.preventDefault();
    if($("mq-website").value)return;
    var f=readForm(), err=$("mq-err");
    var miss=[]; if(!f.name)miss.push("name"); if(!/^\S+@\S+\.\S+$/.test(f.mail))miss.push("a valid email"); if(f.phone.replace(/\D/g,"").length<7)miss.push("phone number");
    if(miss.length){err.textContent="Please add your "+miss.join(", ")+".";err.hidden=false;return}
    err.hidden=true;
    var text=summaryText(f);
    var btn=$("mq-send");
    var ok=function(){list={};save();REQS={};saveReqs();updateCount();openPanel(doneHTML(true))};
    var fail=function(){openPanel(doneHTML(false,text))};
    if(SHEET_URL){
      btn.disabled=true; btn.textContent="Sending…";
      var items=Object.keys(list).map(function(k){var L=LINES[k];
        if(L.req)return {qty:list[k],name:L.p.name+" (spec request)",size:L.pack,sku:"",note:"Match to spec"};
        return {qty:list[k],name:L.p.brandName+" "+L.p.name,size:L.pack,sku:k.indexOf(OTHER)>0?"":L.sku,note:L.note||(k.indexOf(OTHER)>0?"Help choosing size":"")}});
      fetch(SHEET_URL,{method:"POST",mode:"no-cors",headers:{"Content-Type":"text/plain;charset=utf-8"},
        body:JSON.stringify({name:f.name,biz:f.biz,mail:f.mail,phone:f.phone,city:f.city,pref:f.pref,notes:f.notes,items:items,website:""})})
      .then(ok).catch(fail);
      return;
    }
    if(!WEB3FORMS_KEY){fail();return}
    btn.disabled=true; btn.textContent="Sending…";
    fetch("https://api.web3forms.com/submit",{method:"POST",headers:{"Content-Type":"application/json",Accept:"application/json"},
      body:JSON.stringify({access_key:WEB3FORMS_KEY,subject:"Quote request from "+(f.biz||f.name),from_name:"MCMS Website",
        replyto:f.mail,name:f.name,email:f.mail,phone:f.phone,message:text})})
    .then(function(r){return r.json()})
    .then(function(d){
      if(d&&d.success){list={};save();REQS={};saveReqs();updateCount();openPanel(doneHTML(true))}
      else throw new Error();
    })
    .catch(function(){openPanel(doneHTML(false,text))});
  }
  
  /* ---- Events ---- */
  root.addEventListener("click",function(e){
    var t=e.target.closest("button,a"); if(!t||!root.contains(t))return;
    if(t.dataset.req){openReq(t.dataset.req);return}
    if(t.hasAttribute("data-openlist")){openPanel(listHTML());return}
    if(t.dataset.brand){state.brand=t.dataset.brand;state.cat="All";state.sub="All";renderBrands();renderTabs();renderResults();return}
    if(t.dataset.cat){state.cat=t.dataset.cat;state.sub="All";renderTabs();renderResults();return}
    if(t.dataset.sub){state.sub=t.dataset.sub;renderTabs();renderResults();return}
    if(t.hasAttribute("data-clear")){state.q="";$("mq-q").value="";renderResults();return}
    if(t.dataset.step){
      var inp=t.parentNode.querySelector("input"); inp.value=Math.max(1,(parseInt(inp.value,10)||1)+(+t.dataset.step));return}
    if(t.dataset.add){
      var p=BYID[t.dataset.add], box=t.closest(".mq-body,.mq-dcol");
      var q=box.querySelector(".mq-qty input"), sel=box.querySelector("[data-size]");
      var key=p.multi?sel.value:p.sku;
      list[key]=(list[key]||0)+Math.max(1,parseInt(q.value,10)||1); save(); updateCount(true);
      q.value=1; t.classList.add("added"); t.textContent="✓ In list ("+qtyInList(p)+")"; return}
    if(t.dataset.view){viewProduct(t.dataset.view);return}
    if(t.id==="mq-open"){openPanel(listHTML());return}
    if(t.hasAttribute("data-close")){closePanel();return}
    if(t.dataset.remove){if(REQS[t.dataset.remove]){delete REQS[t.dataset.remove];saveReqs()}delete list[t.dataset.remove];save();updateCount();openPanel(listHTML());return}
    if(t.dataset.lstep){var k=t.dataset.key;list[k]=Math.max(1,(list[k]||1)+(+t.dataset.lstep));save();
      t.parentNode.querySelector("input").value=list[k];return}
    if(t.id==="mq-copy"){
      var ta=$("mq-sum");
      var fallback=function(){ta.focus();ta.select();t.textContent="Selected. Press copy"};
      try{navigator.clipboard.writeText(ta.value).then(function(){t.textContent="Copied ✓"},fallback)}catch(err){fallback()}
    }
  });
  root.addEventListener("change",function(e){
    if(e.target.hasAttribute&&e.target.hasAttribute("data-size")){
      var v=e.target.value, card=e.target.closest(".mq-card,.mq-detail"), box=card&&card.querySelector(".mq-img");
      if(box&&v.indexOf(OTHER)<0){box.innerHTML=imgHTML(LINES[v].p,imgFor(v))}
      return;
    }
    var k=e.target.dataset&&e.target.dataset.lqty; if(!k)return;
    list[k]=Math.max(1,parseInt(e.target.value,10)||1); e.target.value=list[k]; save();
  });
  root.addEventListener("submit",function(e){if(e.target.id==="mq-form")submit(e);if(e.target.id==="mq-reqform"){e.preventDefault();submitReq(e.target)}});
  root.addEventListener("change",function(e){
    if(e.target.name!=="rq-kind")return;
    var v=e.target.value;
    root.querySelectorAll("#mq-reqform [data-show]").forEach(function(el){el.hidden=el.dataset.show.split("|").indexOf(v)<0});
  });
  $("mq-overlay").addEventListener("click",function(e){if(e.target.id==="mq-overlay")closePanel()});
  document.addEventListener("keydown",function(e){if(e.key==="Escape"&&!$("mq-overlay").hidden)closePanel()});
  var timer; $("mq-q").addEventListener("input",function(e){clearTimeout(timer);timer=setTimeout(function(){state.q=e.target.value.trim();renderResults()},120)});
  
  $("mq-email-foot").textContent=BUSINESS_EMAIL;
  // Open a category from a link like /catalog#laundry or /catalog?cat=hand-care
  (function(){
    var where=[location.hash+" "+location.search];
    try{if(window.top!==window)where.push(window.top.location.hash+" "+window.top.location.search)}catch(e){}
    var txt=where.join(" ").toLowerCase();
    var slug=function(x){return x.toLowerCase().replace(/[^a-z0-9]+/g,"-")};
    BRANDS.forEach(function(b){if(txt.indexOf("#"+b.id)>-1||txt.indexOf("brand="+b.id)>-1)state.brand=b.id});
    cats("all").forEach(function(c){
      if(txt.indexOf("#"+slug(c))>-1||txt.indexOf("cat="+slug(c))>-1){
        state.cat=c;
        if(cats(state.brand).indexOf(c)<0){for(var j=0;j<BRANDS.length;j++){if(cats(BRANDS[j].id).indexOf(c)>-1){state.brand=BRANDS[j].id;break}}}
      }
    });
  })();
  renderBrands(); renderTabs(); renderResults(); updateCount();
  // Links like /store#can-liners or /store#paper-products open the questionnaire
  (function(){
    var txt=location.hash.toLowerCase();
    try{if(window.top!==window)txt+=" "+window.top.location.hash.toLowerCase()}catch(e){}
    if(/#(can-)?liners/.test(txt))openReq("liners");
    else if(/#paper/.test(txt))openReq("paper");
  })();
  })();
})();
