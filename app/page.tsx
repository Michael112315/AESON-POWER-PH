import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: "url('http://maroon-partridge-424184.hostingersite.com/wp-content/uploads/2026/07/Front-30months.webp')" }}></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-label">Next-Generation Battery Technology</div>
            <h1>Redesigning the <span>Road Ahead,</span> Powered By Sodium-ion</h1>
            <p style={{ color: 'rgba(255,255,255,.8)', marginBottom: '2rem' }}>Experience safety, efficiency, and confidence with the Philippines&apos; most advanced automotive battery — backed by a 30-month warranty.</p>
            <div className="hero-cta">
              <Link href="/battery-finder" className="btn btn-primary btn-lg"><i className="fas fa-search"></i> Find Your Battery</Link>
              <Link href="/products" className="btn btn-outline btn-lg">View Products</Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS STRIP */}
      <div className="stats-strip">
        <div className="container">
          <div className="stats-grid stats-3">
            <div className="stat-item reveal">
              <div className="stat-number">3000+</div>
              <div className="stat-label">Cycle Life</div>
            </div>
            <div className="stat-item reveal delay-1">
              <div className="stat-number">60%</div>
              <div className="stat-label">Lighter Than Lead-Acid</div>
            </div>
            <div className="stat-item reveal delay-2">
              <div className="stat-number">30</div>
              <div className="stat-label">Month Warranty</div>
            </div>
          </div>
        </div>
      </div>

      {/* QUICK LINKS */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Get Started</span>
            <h2 className="section-title">Everything You Need</h2>
            <p className="section-subtitle">From finding the right battery to registering your warranty, we&apos;ve got you covered.</p>
          </div>
          <div className="grid-3 reveal">
            <Link href="/battery-finder" className="quicklink-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/home-quicklink-1-scaled.webp" alt="Battery Finder" />
              <div className="quicklink-card-overlay">
                <h3>Battery Finder</h3>
                <p>Find the perfect battery for your vehicle in seconds.</p>
                <span className="btn btn-primary btn-sm">Find Now <i className="fas fa-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/retail-partners" className="quicklink-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/home-quicklink-2-scaled.webp" alt="Retail Partners" />
              <div className="quicklink-card-overlay">
                <h3>Retail Partners</h3>
                <p>Locate an authorised dealer near you across the Philippines.</p>
                <span className="btn btn-primary btn-sm">Find a Dealer <i className="fas fa-arrow-right"></i></span>
              </div>
            </Link>
            <Link href="/roadside-assistance" className="quicklink-card">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/home-quicklink-3-scaled.webp" alt="Roadside Assistance" />
              <div className="quicklink-card-overlay">
                <h3>Roadside Assistance</h3>
                <p>24/7 support from our trusted partner network.</p>
                <span className="btn btn-primary btn-sm">Get Help <i className="fas fa-arrow-right"></i></span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* BENEFIT 01 — LIGHTER */}
      <section style={{ padding: 0 }}>
        <div className="benefit-section">
          <div className="benefit-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/home-product-benefit-1-scaled.webp" alt="Lightweight sodium-ion battery" />
          </div>
          <div className="benefit-content" style={{ background: 'var(--white)' }}>
            <div className="reveal">
              <span className="section-label">Benefit 01</span>
              <h2 className="section-title">Up to 60% Lighter Than Lead-Acid</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Sodium-ion batteries weigh just 4–7 kg compared to 14–23 kg for conventional lead-acid batteries. Less weight means better fuel efficiency and reduced strain on your vehicle&apos;s alternator.</p>
              <ul className="icon-list">
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Up to <strong>5% improvement</strong> in fuel consumption</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Easier to handle and install</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Reduced vehicle load for electric systems</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* BENEFIT 02 — LONGER LASTING */}
      <section style={{ padding: 0 }}>
        <div className="benefit-section">
          <div className="benefit-content" style={{ background: 'var(--gray-50)' }}>
            <div className="reveal">
              <span className="section-label">Benefit 02</span>
              <h2 className="section-title">Over 3,000 Charge Cycles</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Traditional lead-acid batteries deliver only 200–500 cycles. Aeson Power sodium-ion batteries last over 3,000 cycles — more than 10× longer, saving you money and reducing waste.</p>
              <ul className="icon-list">
                <li><span className="icon"><i className="fas fa-check"></i></span><span>10× more cycle life than lead-acid</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Optimised for tropical climate conditions</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Stable performance across all seasons</span></li>
              </ul>
            </div>
          </div>
          <div className="benefit-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/home-product-benefit-2-scaled.webp" alt="Long lasting battery" />
          </div>
        </div>
      </section>

      {/* BENEFIT 03 — SAFER */}
      <section style={{ padding: 0 }}>
        <div className="benefit-section">
          <div className="benefit-img">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/home-product-benefit-3-scaled.webp" alt="Safe battery technology" />
          </div>
          <div className="benefit-content" style={{ background: 'var(--white)' }}>
            <div className="reveal">
              <span className="section-label">Benefit 03</span>
              <h2 className="section-title">Engineered for Safety</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>No acid leaks. No explosive gases. Built-in protection against overcharging, overheating, and short circuits means peace of mind every time you get behind the wheel.</p>
              <ul className="icon-list">
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Spill-proof and maintenance-free design</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Resistant to extreme heat and humidity</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Complies with international safety standards</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VS COMPARISON */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Why Switch?</span>
            <h2 className="section-title">Sodium-Ion vs Lead-Acid</h2>
            <p className="section-subtitle">See how Aeson Power stacks up against traditional batteries across every dimension that matters.</p>
          </div>
          <div className="grid-split reveal">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/home-product-compare-scaled.webp" alt="Battery comparison" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', width: '100%' }} />
            </div>
            <div style={{ overflowX: 'auto' }}>
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Feature</th>
                    <th className="highlight">Aeson Power<br /><small>Sodium-Ion</small></th>
                    <th>Lead-Acid</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td>Cycle Life</td><td className="highlight-col"><strong>3,000+ cycles</strong></td><td>200–500 cycles</td></tr>
                  <tr><td>Weight</td><td className="highlight-col"><strong>4–7 kg</strong></td><td>14–23 kg</td></tr>
                  <tr><td>Acid Leak Risk</td><td className="highlight-col check"><i className="fas fa-check-circle"></i> None</td><td className="cross"><i className="fas fa-times-circle"></i> High risk</td></tr>
                  <tr><td>Maintenance</td><td className="highlight-col"><strong>Zero</strong></td><td>Regular top-up required</td></tr>
                  <tr><td>Warranty</td><td className="highlight-col"><strong>30 Months</strong></td><td>12–18 months</td></tr>
                  <tr><td>Fuel Saving</td><td className="highlight-col check"><i className="fas fa-check-circle"></i> Up to 5%</td><td className="cross"><i className="fas fa-times-circle"></i> None</td></tr>
                  <tr><td>Eco-Friendly</td><td className="highlight-col check"><i className="fas fa-check-circle"></i> Yes</td><td className="cross"><i className="fas fa-times-circle"></i> Lead pollution</td></tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header center">
            <span className="section-label" style={{ color: 'var(--accent-light)' }}>Our Products</span>
            <h2 className="section-title white">9 Models, Every Vehicle Covered</h2>
            <p className="section-subtitle white">From city cars to SUVs and pick-up trucks, Aeson Power has the right sodium-ion battery for your vehicle.</p>
          </div>
          <div className="grid-4 reveal" style={{ marginBottom: '2.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,.06)', borderRadius: 'var(--radius-md)', padding: '1.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,.1)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS40L.242-scaled-1.webp" alt="NA-40B20L" style={{ maxHeight: '110px', objectFit: 'contain', margin: '0 auto 1rem', display: 'block' }} />
              <h4 style={{ color: 'var(--white)', marginBottom: '.25rem' }}>NA-40B20L</h4>
              <p style={{ color: 'rgba(255,255,255,.55)', fontSize: '.8125rem' }}>NS40 · 350–450A CCA</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,.06)', borderRadius: 'var(--radius-md)', padding: '1.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,.1)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cms.aesonpower.com.my/wp-content/uploads/2025/08/55D23L%E4%BB%B0-scaled-1.webp" alt="NA-NS50L" style={{ maxHeight: '110px', objectFit: 'contain', margin: '0 auto 1rem', display: 'block' }} />
              <h4 style={{ color: 'var(--white)', marginBottom: '.25rem' }}>NA-NS50L</h4>
              <p style={{ color: 'rgba(255,255,255,.55)', fontSize: '.8125rem' }}>55D23L/NS50 · 450–600A CCA</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,.06)', borderRadius: 'var(--radius-md)', padding: '1.5rem', textAlign: 'center', border: '1px solid rgba(255,255,255,.1)' }}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS60L.244.webp" alt="NA-60B24L" style={{ maxHeight: '110px', objectFit: 'contain', margin: '0 auto 1rem', display: 'block' }} />
              <h4 style={{ color: 'var(--white)', marginBottom: '.25rem' }}>NA-60B24L</h4>
              <p style={{ color: 'rgba(255,255,255,.55)', fontSize: '.8125rem' }}>NS60 · 370–500A CCA</p>
            </div>
            <div style={{ background: 'rgba(255,255,255,.06)', borderRadius: 'var(--radius-md)', padding: '1.5rem', textAlign: 'center', border: '1px solid var(--accent)', boxShadow: '0 0 0 1px var(--accent)' }}>
              <div style={{ fontSize: '.6875rem', fontWeight: 700, color: 'var(--accent)', textTransform: 'uppercase', letterSpacing: '.1em', marginBottom: '.75rem' }}>Popular</div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp" alt="H5/L2-400L" style={{ maxHeight: '110px', objectFit: 'contain', margin: '0 auto 1rem', display: 'block' }} />
              <h4 style={{ color: 'var(--white)', marginBottom: '.25rem' }}>H5/L2-400L</h4>
              <p style={{ color: 'rgba(255,255,255,.55)', fontSize: '.8125rem' }}>DIN55L · 450–600A CCA</p>
            </div>
          </div>
          <div style={{ textAlign: 'center' }}>
            <Link href="/products" className="btn btn-primary btn-lg">View All 9 Models <i className="fas fa-arrow-right"></i></Link>
          </div>
        </div>
      </section>

      {/* WARRANTY */}
      <section className="section">
        <div className="container">
          <div className="grid-split grid-split-lg reveal">
            <div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/home-warranty-reg-scaled.webp" alt="Warranty Registration" style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', width: '100%' }} />
            </div>
            <div>
              <span className="section-label">Peace of Mind</span>
              <h2 className="section-title">The Philippines&apos; Longest Battery Warranty</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Every Aeson Power sodium-ion battery comes with a comprehensive 30-month warranty — the longest in the market. Register online in minutes and protect your investment.</p>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                <div style={{ textAlign: 'center', background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent)' }}>30</div>
                  <div style={{ fontSize: '.875rem', color: 'var(--text-muted)' }}>Month Coverage</div>
                </div>
                <div style={{ textAlign: 'center', background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', padding: '1.25rem' }}>
                  <div style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--accent)' }}>#1</div>
                  <div style={{ fontSize: '.875rem', color: 'var(--text-muted)' }}>Longest in Market</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/warranty" className="btn btn-primary">Register Warranty</Link>
                <Link href="/warranty" className="btn btn-outline-dark">Check Warranty</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ROADSIDE CTA BANNER */}
      <section className="cta-banner">
        <div className="cta-banner-bg" style={{ backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2025/10/home-roadside.webp')" }}></div>
        <div className="container">
          <div className="cta-banner-content reveal">
            <span className="section-label" style={{ color: 'var(--accent-light)' }}>24/7 Assistance</span>
            <h2>Stranded? We&apos;ve Got You Covered.</h2>
            <p>Our roadside assistance network ensures you&apos;re never alone on the road. Help is always a call away.</p>
            <div className="btn-group">
              <Link href="/roadside-assistance" className="btn btn-primary btn-lg">Get Roadside Help</Link>
              <Link href="/retail-partners" className="btn btn-outline btn-lg">Find a Dealer</Link>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header center reveal">
            <span className="section-label">Quality Assured</span>
            <h2 className="section-title">Internationally Certified</h2>
            <p className="section-subtitle">Built on over 20 years of global battery manufacturing expertise and certified to world-class standards.</p>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '3rem', flexWrap: 'wrap' }} className="reveal">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/IATF-16949.webp" alt="IATF 16949" style={{ height: '80px', objectFit: 'contain' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/ISO-14001-compressed.webp" alt="ISO 14001" style={{ height: '80px', objectFit: 'contain' }} />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/ISO-45001.webp" alt="ISO 45001" style={{ height: '80px', objectFit: 'contain' }} />
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="cta-banner">
        <div className="cta-banner-bg" style={{ backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2025/07/cta-bg-1-scaled.webp')" }}></div>
        <div className="container">
          <div className="cta-banner-content reveal">
            <span className="section-label" style={{ color: 'var(--accent-light)' }}>Ready to Upgrade?</span>
            <h2>Switch to Sodium-Ion Today</h2>
            <p>Find your compatible battery, locate a dealer near you, or register your warranty — all in a few clicks.</p>
            <div className="btn-group">
              <Link href="/battery-finder" className="btn btn-primary btn-lg"><i className="fas fa-search"></i> Find My Battery</Link>
              <Link href="/retail-partners" className="btn btn-outline btn-lg"><i className="fas fa-map-marker-alt"></i> Find a Dealer</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
