/* ============================================================
   AESON POWER — Main JavaScript
   ============================================================ */

/* ---- 1. MOBILE NAV ---- */
const navToggle = document.getElementById('nav-toggle');
const navMenu   = document.getElementById('nav-menu');

if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    const spans = navToggle.querySelectorAll('span');
    if (open) {
      spans[0].style.transform = 'rotate(45deg) translate(5px,5px)';
      spans[1].style.opacity   = '0';
      spans[2].style.transform = 'rotate(-45deg) translate(5px,-5px)';
    } else {
      spans[0].style.transform = '';
      spans[1].style.opacity   = '';
      spans[2].style.transform = '';
    }
  });

  document.addEventListener('click', e => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) closeNav();
  });

  function closeNav() {
    navMenu.classList.remove('open');
    const spans = navToggle.querySelectorAll('span');
    spans[0].style.transform = '';
    spans[1].style.opacity   = '';
    spans[2].style.transform = '';
  }
}

/* ---- 1b. DROPDOWN MENUS ---- */
document.querySelectorAll('.nav-dropdown').forEach(dropdown => {
  const toggle = dropdown.querySelector('.nav-dropdown-toggle');
  if (!toggle) return;
  toggle.addEventListener('click', e => {
    if (window.innerWidth > 992) return;
    e.preventDefault();
    const wasOpen = dropdown.classList.contains('open');
    document.querySelectorAll('.nav-dropdown').forEach(d => d.classList.remove('open'));
    if (!wasOpen) dropdown.classList.add('open');
  });
});

/* ---- 2. ACTIVE NAV LINK ---- */
(function () {
  const page = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-menu a').forEach(a => {
    if (a.getAttribute('href') === page) {
      a.classList.add('active');
      const parentDropdown = a.closest('.nav-dropdown');
      if (parentDropdown) {
        const t = parentDropdown.querySelector('.nav-dropdown-toggle');
        if (t) t.classList.add('active');
      }
    }
  });
})();

/* ---- 3. BACK TO TOP ---- */
const btt = document.getElementById('back-to-top');
if (btt) {
  window.addEventListener('scroll', () => btt.classList.toggle('visible', window.scrollY > 400));
  btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
}

/* ---- 4. FAQ ACCORDION ---- */
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const item   = btn.closest('.faq-item');
    const answer = item.querySelector('.faq-answer');
    const wasOpen = btn.classList.contains('active');

    document.querySelectorAll('.faq-question').forEach(q => {
      q.classList.remove('active');
      q.closest('.faq-item').querySelector('.faq-answer').classList.remove('open');
    });

    if (!wasOpen) {
      btn.classList.add('active');
      answer.classList.add('open');
    }
  });
});

/* ---- 5. TABS ---- */
document.querySelectorAll('.tab-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const group    = btn.closest('[data-tabs]');
    const target   = btn.dataset.tab;

    group.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
    group.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));

    btn.classList.add('active');
    const el = group.querySelector('#' + target);
    if (el) el.classList.add('active');
  });
});

/* ---- 6. RETAIL PARTNER FILTER ---- */
(function () {
  const btns  = document.querySelectorAll('.filter-btn[data-filter]');
  const cards = document.querySelectorAll('.partner-card[data-state]');
  if (!btns.length) return;

  btns.forEach(btn => {
    btn.addEventListener('click', () => {
      btns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const f = btn.dataset.filter;
      let count = 0;
      cards.forEach(card => {
        const show = f === 'all' || card.dataset.state === f;
        card.style.display = show ? '' : 'none';
        if (show) count++;
      });
      const counter = document.getElementById('partner-count');
      if (counter) counter.textContent = count + ' location' + (count !== 1 ? 's' : '');
    });
  });
})();

/* ---- 7. BATTERY FINDER ---- */
const vehicleDB = {
  "Perodua": {
    "Myvi":   { model:"NA-40B20L", series:"NS40",            cca:"350–450A", wt:"4±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS40L.242-scaled-1.webp" },
    "Axia":   { model:"NA-40B20L", series:"NS40",            cca:"350–450A", wt:"4±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS40L.242-scaled-1.webp" },
    "Bezza":  { model:"NA-40B20L", series:"NS40",            cca:"350–450A", wt:"4±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS40L.242-scaled-1.webp" },
    "Alza":   { model:"NA-NS50L",  series:"55D23L / NS50",   cca:"450–600A", wt:"4.5±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/55D23L%E4%BB%B0-scaled-1.webp" },
    "Aruz":   { model:"NA-NS50L",  series:"55D23L / NS50",   cca:"450–600A", wt:"4.5±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/55D23L%E4%BB%B0-scaled-1.webp" },
    "Ativa":  { model:"NA-60B24L", series:"NS60",            cca:"370–500A", wt:"4.2±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS60L.244.webp" }
  },
  "Proton": {
    "Saga":    { model:"NA-40B20L", series:"NS40",            cca:"350–450A", wt:"4±0.5 kg",   img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS40L.242-scaled-1.webp" },
    "Persona": { model:"NA-NS50L",  series:"55D23L / NS50",   cca:"450–600A", wt:"4.5±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/55D23L%E4%BB%B0-scaled-1.webp" },
    "Iriz":    { model:"NA-NS50L",  series:"55D23L / NS50",   cca:"450–600A", wt:"4.5±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/55D23L%E4%BB%B0-scaled-1.webp" },
    "Exora":   { model:"NA-60B24L", series:"NS60",            cca:"370–500A", wt:"4.2±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS60L.244.webp" },
    "X50":     { model:"H5/L2-400L",series:"DIN55L",          cca:"450–600A", wt:"4.5±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "X70":     { model:"H5/L2-400L",series:"DIN55L",          cca:"450–600A", wt:"4.5±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "X90":     { model:"NA-NS70L",  series:"NS70",            cca:"450–600A", wt:"5±0.5 kg",   img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/55D26L%E4%BB%B0-scaled-1.webp" }
  },
  "Toyota": {
    "Vios":     { model:"NA-40B20L", series:"NS40",  cca:"350–450A", wt:"4±0.5 kg",   img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS40L.242-scaled-1.webp" },
    "Yaris":    { model:"NA-40B20L", series:"NS40",  cca:"350–450A", wt:"4±0.5 kg",   img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS40L.242-scaled-1.webp" },
    "Camry":    { model:"H5/L2-400L",series:"DIN55L",cca:"450–600A", wt:"4.5±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "RAV4":     { model:"H5/L2-400L",series:"DIN55L",cca:"450–600A", wt:"4.5±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "Hilux":    { model:"D31L",       series:"95D31L / NX120-7L",cca:"650–800A",wt:"6.4±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/D31L-scaled-1.webp" },
    "Fortuner": { model:"D31L",       series:"95D31L / NX120-7L",cca:"650–800A",wt:"6.4±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/D31L-scaled-1.webp" },
    "Alphard":  { model:"Q85L-SS",   series:"Q85",   cca:"650–800A", wt:"6±0.5 kg",   img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/Q85L%E4%BB%B0-scaled-1.webp" },
    "Veloz":    { model:"NA-NS50L",  series:"55D23L / NS50",cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/55D23L%E4%BB%B0-scaled-1.webp" }
  },
  "Honda": {
    "City":   { model:"NA-40B20L", series:"NS40",  cca:"350–450A", wt:"4±0.5 kg",   img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS40L.242-scaled-1.webp" },
    "Jazz":   { model:"NA-40B20L", series:"NS40",  cca:"350–450A", wt:"4±0.5 kg",   img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS40L.242-scaled-1.webp" },
    "Civic":  { model:"H5/L2-400L",series:"DIN55L",cca:"450–600A", wt:"4.5±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "Accord": { model:"H5/L2-400L",series:"DIN55L",cca:"450–600A", wt:"4.5±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "CR-V":   { model:"H5/L2-400L",series:"DIN55L",cca:"450–600A", wt:"4.5±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "HR-V":   { model:"NA-NS50L",  series:"55D23L / NS50",cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/55D23L%E4%BB%B0-scaled-1.webp" }
  },
  "Nissan": {
    "Almera":  { model:"NA-40B20L", series:"NS40",              cca:"350–450A", wt:"4±0.5 kg",   img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS40L.242-scaled-1.webp" },
    "X-Trail": { model:"H5/L2-400L",series:"DIN55L",            cca:"450–600A", wt:"4.5±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "Navara":  { model:"D31L",       series:"95D31L / NX120-7L",cca:"650–800A", wt:"6.4±0.5 kg", img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/D31L-scaled-1.webp" },
    "Serena":  { model:"NA-NS70L",  series:"NS70",              cca:"450–600A", wt:"5±0.5 kg",   img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/55D26L%E4%BB%B0-scaled-1.webp" }
  },
  "Mazda": {
    "Mazda2": { model:"NA-NS50L",  series:"55D23L / NS50",cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/55D23L%E4%BB%B0-scaled-1.webp" },
    "Mazda3": { model:"H5/L2-400L",series:"DIN55L",       cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "CX-3":   { model:"H5/L2-400L",series:"DIN55L",       cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "CX-5":   { model:"H5/L2-400L",series:"DIN55L",       cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "CX-30":  { model:"H5/L2-400L",series:"DIN55L",       cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" }
  },
  "Hyundai": {
    "Elantra":   { model:"H5/L2-400L",series:"DIN55L",          cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "Tucson":    { model:"H5/L2-400L",series:"DIN55L",          cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "Santa Fe":  { model:"D31L",       series:"95D31L / NX120-7L",cca:"650–800A",wt:"6.4±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/D31L-scaled-1.webp" },
    "Kona":      { model:"H5/L2-400L",series:"DIN55L",          cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" }
  },
  "Kia": {
    "Sportage": { model:"H5/L2-400L",series:"DIN55L",          cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "Seltos":   { model:"H5/L2-400L",series:"DIN55L",          cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "Carnival": { model:"D31L",       series:"95D31L / NX120-7L",cca:"650–800A",wt:"6.4±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/D31L-scaled-1.webp" }
  },
  "BMW": {
    "1 Series": { model:"M42L",    series:"M42L",cca:"520–600A",wt:"5.1±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/m42l-no-bg.png" },
    "3 Series": { model:"M42L",    series:"M42L",cca:"520–600A",wt:"5.1±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/m42l-no-bg.png" },
    "5 Series": { model:"Q85L-SS", series:"Q85", cca:"650–800A",wt:"6±0.5 kg",  img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/Q85L%E4%BB%B0-scaled-1.webp" },
    "X1":       { model:"M42L",    series:"M42L",cca:"520–600A",wt:"5.1±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/m42l-no-bg.png" },
    "X3":       { model:"Q85L-SS", series:"Q85", cca:"650–800A",wt:"6±0.5 kg",  img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/Q85L%E4%BB%B0-scaled-1.webp" },
    "X5":       { model:"S95L-SS", series:"S95", cca:"720–850A",wt:"7±0.5 kg",  img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/S95L%E4%BB%B0-scaled-1.webp" }
  },
  "Mercedes-Benz": {
    "A-Class": { model:"M42L",    series:"M42L",cca:"520–600A",wt:"5.1±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/m42l-no-bg.png" },
    "C-Class": { model:"Q85L-SS", series:"Q85", cca:"650–800A",wt:"6±0.5 kg",  img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/Q85L%E4%BB%B0-scaled-1.webp" },
    "E-Class": { model:"S95L-SS", series:"S95", cca:"720–850A",wt:"7±0.5 kg",  img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/S95L%E4%BB%B0-scaled-1.webp" },
    "GLC":     { model:"Q85L-SS", series:"Q85", cca:"650–800A",wt:"6±0.5 kg",  img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/Q85L%E4%BB%B0-scaled-1.webp" },
    "GLA":     { model:"M42L",    series:"M42L",cca:"520–600A",wt:"5.1±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/m42l-no-bg.png" }
  },
  "Volkswagen": {
    "Golf":    { model:"H5/L2-400L",series:"DIN55L",cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "Tiguan":  { model:"H5/L2-400L",series:"DIN55L",cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "Passat":  { model:"H5/L2-400L",series:"DIN55L",cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" }
  },
  "Mitsubishi": {
    "Triton":   { model:"D31L",      series:"95D31L / NX120-7L",cca:"650–800A",wt:"6.4±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/D31L-scaled-1.webp" },
    "Outlander":{ model:"H5/L2-400L",series:"DIN55L",          cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" },
    "ASX":      { model:"NA-NS50L",  series:"55D23L / NS50",   cca:"450–600A",wt:"4.5±0.5 kg",img:"https://cms.aesonpower.com.my/wp-content/uploads/2025/08/55D23L%E4%BB%B0-scaled-1.webp" }
  }
};

(function () {
  const makeEl    = document.getElementById('car-make');
  const modelEl   = document.getElementById('car-model');
  const findBtn   = document.getElementById('finder-btn');
  const resultsEl = document.getElementById('finder-results');
  if (!makeEl) return;

  Object.keys(vehicleDB).sort().forEach(make => {
    const opt = new Option(make, make);
    makeEl.add(opt);
  });

  makeEl.addEventListener('change', () => {
    const make = makeEl.value;
    modelEl.innerHTML = '<option value="">Select Car Model</option>';
    modelEl.disabled  = !make;
    if (make && vehicleDB[make]) {
      Object.keys(vehicleDB[make]).sort().forEach(m => {
        modelEl.add(new Option(m, m));
      });
    }
    if (resultsEl) resultsEl.innerHTML = '';
  });

  if (findBtn) {
    findBtn.addEventListener('click', () => {
      const make  = makeEl.value;
      const model = modelEl.value;
      if (!make || !model) {
        resultsEl.innerHTML = '<p class="text-muted text-center" style="padding:2rem 0;">Please select both a car make and model to find the right battery.</p>';
        return;
      }
      const b = vehicleDB[make]?.[model];
      if (!b) return;

      resultsEl.innerHTML = `
        <div style="margin-bottom:1rem;">
          <h3 style="font-size:1.25rem;margin-bottom:.375rem;">Recommended battery for <span style="color:var(--accent)">${make} ${model}</span></h3>
          <p class="text-muted" style="font-size:.9375rem;">Based on your vehicle, we recommend the following Aeson Power sodium-ion battery.</p>
        </div>
        <div class="finder-result-card recommended">
          <div class="finder-result-img">
            <img src="${b.img}" alt="${b.model}" style="object-fit:contain;width:100%;">
          </div>
          <div style="flex:1;">
            <span class="product-badge badge-napulse">Aeson Power</span>
            <h2 style="font-size:1.75rem;font-weight:900;margin-bottom:.25rem;">${b.model}</h2>
            <p class="text-muted" style="margin-bottom:1.25rem;">${b.series} Series</p>
            <div style="display:grid;grid-template-columns:repeat(2,1fr);gap:.625rem;margin-bottom:1.5rem;">
              ${spec('CCA Rating', b.cca)}
              ${spec('Weight', b.wt)}
              ${spec('Charge Voltage', '14.4 – 14.8 V')}
              ${spec('Terminal Type', 'SAE AP')}
              ${spec('Warranty', '<span style="color:var(--accent);font-weight:700;">36 Months</span>', true)}
              ${spec('Cycle Life', '3,000+ cycles')}
            </div>
            <div style="display:flex;gap:.75rem;flex-wrap:wrap;">
              <a href="products.html" class="btn btn-primary">View Full Specs</a>
              <a href="retail-partners.html" class="btn btn-outline-dark">Find a Dealer</a>
            </div>
          </div>
        </div>`;
    });
  }

  function spec(label, value, raw) {
    const val = raw ? value : `<strong style="color:var(--text);">${value}</strong>`;
    return `<div style="background:var(--gray-50);border-radius:8px;padding:.75rem;">
      <div style="font-size:.75rem;color:var(--text-muted);margin-bottom:.25rem;">${label}</div>
      <div>${val}</div>
    </div>`;
  }
})();

/* ---- 8. COUNTER ANIMATION ---- */
(function () {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el     = entry.target;
      const target = +el.dataset.target;
      const suffix = el.dataset.suffix || '';
      const dur    = 2000;
      const start  = performance.now();

      const tick = now => {
        const p   = Math.min((now - start) / dur, 1);
        const val = Math.floor((1 - Math.pow(1 - p, 3)) * target);
        el.textContent = val.toLocaleString() + suffix;
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = target.toLocaleString() + suffix;
      };
      requestAnimationFrame(tick);
      obs.unobserve(el);
    });
  }, { threshold: 0.5 });

  document.querySelectorAll('.counter').forEach(el => obs.observe(el));
})();

/* ---- 9. SCROLL REVEAL ---- */
(function () {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });
  document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
})();

/* ---- 10. WARRANTY FORMS ---- */
(function () {
  const regForm = document.getElementById('warranty-form');
  if (regForm) {
    regForm.addEventListener('submit', e => {
      e.preventDefault();
      const btn = regForm.querySelector('[type=submit]');
      const orig = btn.textContent;
      btn.textContent = 'Submitting…';
      btn.disabled = true;
      setTimeout(() => {
        btn.textContent = orig;
        btn.disabled = false;
        const ok = document.getElementById('warranty-success');
        if (ok) { ok.style.display = 'flex'; regForm.reset(); ok.scrollIntoView({ behavior: 'smooth' }); }
      }, 1500);
    });
  }

  const chkForm = document.getElementById('warranty-check-form');
  if (chkForm) {
    chkForm.addEventListener('submit', e => {
      e.preventDefault();
      const plate  = chkForm.querySelector('#plate-number').value.trim().toUpperCase();
      const result = document.getElementById('warranty-check-result');
      if (result && plate) {
        result.style.display = 'block';
        result.innerHTML = `
          <div class="alert alert-info">
            <i class="fas fa-info-circle" style="margin-top:2px;font-size:1.1rem;"></i>
            <div>
              <strong>Warranty Check — ${plate}</strong><br>
              For real-time warranty status, please contact us at
              <a href="mailto:info@aesonpower.com.ph" style="color:inherit;text-decoration:underline;">info@aesonpower.com.ph</a>
              or call <a href="tel:+60123603862" style="color:inherit;text-decoration:underline;">+63 927 317 9178</a>
              with your vehicle registration and proof of purchase.
            </div>
          </div>`;
      }
    });
  }
})();
