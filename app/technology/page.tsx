import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Technology Overview',
}

export default function TechnologyPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2026/01/tech-overview-metric-bg.webp')" }}></div>
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb"><Link href="/">Home</Link><span>/</span><span className="current">Technology Overview</span></nav>
            <h1>Technology Overview</h1>
            <p>Understanding how sodium-ion technology delivers superior performance, safety, and longevity for your vehicle.</p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div className="grid-split grid-split-lg">
            <div className="reveal">
              <span className="section-label">The Science</span>
              <h2 className="section-title">How Sodium-Ion Technology Works</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Sodium-ion batteries operate on the same fundamental principle as lithium-ion — ions move between cathode and anode during charge and discharge cycles. However, sodium offers unique advantages that make it ideal for automotive starter batteries.</p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Sodium is one of the most abundant elements on Earth, making it cost-stable and environmentally sustainable compared to lead or lithium. When combined with Aeson Power&apos;s optimised electrode chemistry, the result is a battery that outperforms conventional lead-acid in every measurable metric.</p>
              <p style={{ color: 'var(--text-muted)' }}>Our proprietary electrolyte formulation is specifically engineered for the Philippines&apos; high-temperature, high-humidity tropical environment — delivering consistent cranking power whether it&apos;s 9 AM or 4 PM on a scorching afternoon.</p>
            </div>
            <div className="reveal delay-1">
              <Image src="https://cms.aesonpower.com.my/wp-content/uploads/2025/12/tech-overview-product-info-1.webp" alt="Sodium-ion battery technology" width={600} height={400} style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* KEY METRICS */}
      <section style={{ position: 'relative', padding: '5rem 0', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2026/01/tech-overview-metric-bg.webp')", backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(11,30,61,.9)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <div className="section-header center">
            <span className="section-label" style={{ color: 'var(--accent-light)' }}>By the Numbers</span>
            <h2 className="section-title white">Performance Metrics</h2>
            <p className="section-subtitle white">Real data comparing Aeson Power sodium-ion against conventional lead-acid batteries.</p>
          </div>
          <div className="stats-grid reveal" style={{ gap: '1.5rem' }}>
            <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center' }}>
              <div className="stat-number">3000+</div>
              <div className="stat-label">Cycle life vs 200–500 for lead-acid</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center' }}>
              <div className="stat-number">60%</div>
              <div className="stat-label">Lighter weight than equivalent lead-acid</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center' }}>
              <div className="stat-number">5%</div>
              <div className="stat-label">Fuel consumption improvement</div>
            </div>
            <div style={{ background: 'rgba(255,255,255,.06)', border: '1px solid rgba(255,255,255,.12)', borderRadius: 'var(--radius-md)', padding: '2rem', textAlign: 'center' }}>
              <div className="stat-number">30</div>
              <div className="stat-label">Month warranty — longest in market</div>
            </div>
          </div>
        </div>
      </section>

      {/* ADVANTAGES DEEP DIVE */}
      <section className="section">
        <div className="container">
          <div className="section-header center reveal">
            <span className="section-label">Technical Advantages</span>
            <h2 className="section-title">Why Sodium-Ion Wins</h2>
            <p className="section-subtitle">A deeper look at the technical properties that give sodium-ion the edge over lead-acid in automotive applications.</p>
          </div>

          {/* Safety */}
          <div className="grid-split grid-split-lg reveal" style={{ marginBottom: '5rem' }}>
            <div>
              <Image src="https://cms.aesonpower.com.my/wp-content/uploads/2025/10/tech-overview-impact-1-scaled-1.webp" alt="Battery safety" width={600} height={400} style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', width: '100%', height: 'auto' }} />
            </div>
            <div>
              <div style={{ width: '52px', height: '52px', background: 'rgba(232,119,34,.1)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', color: 'var(--accent)', marginBottom: '1rem' }}><i className="fas fa-shield-alt"></i></div>
              <span className="section-label">01 — Safety</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '.875rem' }}>Built-In Protection at Every Level</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Unlike lead-acid batteries that release hydrogen gas during charging and contain corrosive sulphuric acid, sodium-ion batteries are completely sealed and spill-proof.</p>
              <ul className="icon-list">
                <li><span className="icon"><i className="fas fa-check"></i></span><span>No acid leak risk — sealed electrolyte design</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Built-in overcharge and short-circuit protection</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Thermal runaway resistant at operating temperatures</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>No explosive gas emissions during charging</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Complies with international automotive safety standards</span></li>
              </ul>
            </div>
          </div>

          {/* Longevity */}
          <div className="grid-split grid-split-lg reveal" style={{ marginBottom: '5rem' }}>
            <div>
              <div style={{ width: '52px', height: '52px', background: 'rgba(232,119,34,.1)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', color: 'var(--accent)', marginBottom: '1rem' }}><i className="fas fa-infinity"></i></div>
              <span className="section-label">02 — Longevity</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '.875rem' }}>10× More Cycle Life</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Sodium-ion chemistry avoids the sulphation problem that kills lead-acid batteries. The crystal structure remains stable across thousands of charge-discharge cycles, meaning your battery lasts far longer.</p>
              <ul className="icon-list">
                <li><span className="icon"><i className="fas fa-check"></i></span><span>3,000+ cycle life vs 200–500 for lead-acid</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>No sulphation degradation — stays strong longer</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Consistent capacity retention throughout service life</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Optimised for the Philippines&apos; frequent short-trip driving</span></li>
              </ul>
            </div>
            <div>
              <Image src="https://cms.aesonpower.com.my/wp-content/uploads/2025/10/tech-overview-impact-2.webp" alt="Battery longevity" width={600} height={400} style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', width: '100%', height: 'auto' }} />
            </div>
          </div>

          {/* Environment */}
          <div className="grid-split grid-split-lg reveal">
            <div>
              <Image src="https://cms.aesonpower.com.my/wp-content/uploads/2025/10/tech-overview-impact-3.webp" alt="Environmental impact" width={600} height={400} style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', width: '100%', height: 'auto' }} />
            </div>
            <div>
              <div style={{ width: '52px', height: '52px', background: 'rgba(232,119,34,.1)', borderRadius: 'var(--radius)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', color: 'var(--accent)', marginBottom: '1rem' }}><i className="fas fa-leaf"></i></div>
              <span className="section-label">03 — Environment</span>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '.875rem' }}>Greener by Design</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Lead-acid batteries are one of the most recycled products on Earth — but also one of the most hazardous if improperly disposed of. Sodium-ion eliminates the lead content, dramatically reducing the environmental burden.</p>
              <ul className="icon-list">
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Zero lead content — eliminates lead pollution risk</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Sodium sourced from abundant, low-impact materials</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Lower carbon footprint in production and logistics</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Extended lifespan reduces disposal frequency by 10×</span></li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* COMPARISON TABLE */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header center reveal">
            <span className="section-label">Head to Head</span>
            <h2 className="section-title">Sodium-Ion vs Lead-Acid</h2>
            <p className="section-subtitle">A comprehensive technical comparison across every dimension that matters for automotive performance.</p>
          </div>
          <div style={{ overflowX: 'auto' }} className="reveal">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Property</th>
                  <th className="highlight">Sodium-Ion (Aeson Power)</th>
                  <th>Lead-Acid (Conventional)</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>Cycle Life</td><td className="highlight-col"><strong>3,000+ cycles</strong></td><td>200–500 cycles</td></tr>
                <tr><td>Weight</td><td className="highlight-col"><strong>4–7 kg</strong></td><td>14–23 kg</td></tr>
                <tr><td>Electrolyte</td><td className="highlight-col"><strong>Sealed, non-spillable</strong></td><td>Liquid sulphuric acid</td></tr>
                <tr><td>Maintenance</td><td className="highlight-col check"><i className="fas fa-check-circle"></i> Zero</td><td>Regular top-up required</td></tr>
                <tr><td>Acid Leak Risk</td><td className="highlight-col check"><i className="fas fa-check-circle"></i> None</td><td className="cross"><i className="fas fa-times-circle"></i> High</td></tr>
                <tr><td>Gas Emissions</td><td className="highlight-col check"><i className="fas fa-check-circle"></i> None</td><td className="cross"><i className="fas fa-times-circle"></i> Hydrogen gas</td></tr>
                <tr><td>Thermal Stability</td><td className="highlight-col"><strong>Excellent</strong></td><td>Degrades in heat</td></tr>
                <tr><td>Charge Retention</td><td className="highlight-col"><strong>Superior</strong></td><td>Self-discharges faster</td></tr>
                <tr><td>Environmental Impact</td><td className="highlight-col check"><i className="fas fa-check-circle"></i> Low — no lead</td><td className="cross"><i className="fas fa-times-circle"></i> Lead pollution risk</td></tr>
                <tr><td>Fuel Efficiency</td><td className="highlight-col"><strong>+5% improvement</strong></td><td>No benefit</td></tr>
                <tr><td>Warranty Coverage</td><td className="highlight-col"><strong>30 Months</strong></td><td>12–18 months</td></tr>
                <tr><td>Price Point</td><td className="highlight-col">Premium (lower TCO)</td><td>Lower initial cost</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* MANUFACTURING */}
      <section className="section section-dark">
        <div className="container">
          <div className="grid-split grid-split-lg">
            <div className="reveal">
              <span className="section-label" style={{ color: 'var(--accent-light)' }}>Manufacturing</span>
              <h2 className="section-title white">30+ Years of Battery Expertise</h2>
              <p style={{ color: 'rgba(255,255,255,.75)', marginBottom: '1.5rem' }}>Aeson Power batteries are manufactured by partners with over 30 years of automotive battery production experience. Every unit undergoes rigorous quality testing before leaving the factory.</p>
              <div className="grid-2" style={{ gap: '1rem' }}>
                <div style={{ background: 'rgba(255,255,255,.06)', borderRadius: 'var(--radius)', padding: '1.25rem' }}>
                  <i className="fas fa-certificate" style={{ color: 'var(--accent)', marginBottom: '.75rem', fontSize: '1.25rem', display: 'block' }}></i>
                  <h4 style={{ color: 'white', fontSize: '.9375rem', marginBottom: '.375rem' }}>IATF 16949</h4>
                  <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.8125rem' }}>Automotive Quality Management</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,.06)', borderRadius: 'var(--radius)', padding: '1.25rem' }}>
                  <i className="fas fa-globe" style={{ color: 'var(--accent)', marginBottom: '.75rem', fontSize: '1.25rem', display: 'block' }}></i>
                  <h4 style={{ color: 'white', fontSize: '.9375rem', marginBottom: '.375rem' }}>ISO 14001</h4>
                  <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.8125rem' }}>Environmental Management</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,.06)', borderRadius: 'var(--radius)', padding: '1.25rem' }}>
                  <i className="fas fa-hard-hat" style={{ color: 'var(--accent)', marginBottom: '.75rem', fontSize: '1.25rem', display: 'block' }}></i>
                  <h4 style={{ color: 'white', fontSize: '.9375rem', marginBottom: '.375rem' }}>ISO 45001</h4>
                  <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.8125rem' }}>Occupational Health &amp; Safety</p>
                </div>
                <div style={{ background: 'rgba(255,255,255,.06)', borderRadius: 'var(--radius)', padding: '1.25rem' }}>
                  <i className="fas fa-thermometer-half" style={{ color: 'var(--accent)', marginBottom: '.75rem', fontSize: '1.25rem', display: 'block' }}></i>
                  <h4 style={{ color: 'white', fontSize: '.9375rem', marginBottom: '.375rem' }}>Tropical Tuned</h4>
                  <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.8125rem' }}>Engineered for Philippine climate</p>
                </div>
              </div>
            </div>
            <div className="reveal delay-1">
              <Image src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/home-product-compare-scaled.webp" alt="Battery manufacturing quality" width={600} height={400} style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xl)', width: '100%', height: 'auto' }} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-banner-bg" style={{ backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2025/07/cta-bg-1-scaled.webp')" }}></div>
        <div className="container">
          <div className="cta-banner-content reveal">
            <span className="section-label" style={{ color: 'var(--accent-light)' }}>Experience the Technology</span>
            <h2>Ready to Upgrade Your Vehicle?</h2>
            <p>Find the right Aeson Power sodium-ion battery for your car and switch to better performance today.</p>
            <div className="btn-group">
              <Link href="/battery-finder" className="btn btn-primary btn-lg"><i className="fas fa-search"></i> Find My Battery</Link>
              <Link href="/products" className="btn btn-outline btn-lg">View All Products</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
