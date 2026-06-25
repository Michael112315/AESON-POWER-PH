import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'About Us',
}

export default function AboutPage() {
  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2025/07/about-battery-sect-scaled.webp')" }}></div>
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb"><Link href="/">Home</Link><span>/</span><span className="current">About Us</span></nav>
            <h1>About Aeson Power</h1>
            <p>Transforming automotive energy through sodium-ion battery innovation, engineered for the Philippines&apos; roads.</p>
          </div>
        </div>
      </section>

      {/* MISSION & VISION */}
      <section className="section">
        <div className="container">
          <div className="grid-split grid-split-lg">
            <div className="reveal">
              <Image src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/about-battery-sect-scaled.webp" alt="Aeson Power batteries" width={600} height={400} style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-lg)', width: '100%', height: 'auto' }} />
            </div>
            <div className="reveal delay-1">
              <span className="section-label">Who We Are</span>
              <h2 className="section-title">Pioneering the Future of Automotive Power</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Aeson Power Philippines is on a mission to transform automotive energy through sodium-ion battery innovation. We deliver safer, lighter, and longer-lasting power solutions engineered specifically for the Philippines&apos; tropical climate.</p>
              <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Drawing on over 20 years of global battery manufacturing expertise, we set a new standard for performance, durability, and safety — all backed by the Philippines&apos; longest battery warranty.</p>
              <div className="grid-2" style={{ gap: '1.25rem' }}>
                <div style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', padding: '1.5rem', borderLeft: '4px solid var(--accent)' }}>
                  <h4 style={{ marginBottom: '.5rem' }}>Our Mission</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '.9375rem' }}>Deliver safer, lighter, and longer-lasting battery solutions that set a new standard for automotive power in the Philippines.</p>
                </div>
                <div style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', padding: '1.5rem', borderLeft: '4px solid var(--primary)' }}>
                  <h4 style={{ marginBottom: '.5rem' }}>Our Vision</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '.9375rem' }}>To become the Philippines&apos; leading car battery provider and establish sodium-ion as the preferred standard for performance, durability, and safety.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <div className="stats-strip">
        <div className="container">
          <div className="stats-grid stats-3">
            <div className="stat-item reveal">
              <div className="stat-number">20+</div>
              <div className="stat-label">Years Manufacturing Experience</div>
            </div>
            <div className="stat-item reveal delay-1">
              <div className="stat-number">9</div>
              <div className="stat-label">Battery Models</div>
            </div>
            <div className="stat-item reveal delay-2">
              <div className="stat-number">3</div>
              <div className="stat-label">International Certifications</div>
            </div>
          </div>
        </div>
      </div>

      {/* OUR STORY */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }} className="reveal">
            <span className="section-label">Our Story</span>
            <h2 className="section-title">Built on Decades of Expertise</h2>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.0625rem', marginBottom: '1.5rem' }}>Aeson Power was founded with a clear purpose: to bring next-generation battery technology to Philippine drivers. While the rest of the world was waking up to sodium-ion technology, we were already developing solutions tailored specifically for the Philippines&apos; hot and humid environment.</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.0625rem', marginBottom: '1.5rem' }}>Our manufacturing partners bring over 20 years of automotive battery production experience, and every Aeson Power battery is built to meet internationally recognised standards for quality, safety, and environmental responsibility.</p>
            <p style={{ color: 'var(--text-muted)', fontSize: '1.0625rem' }}>Today, we serve individual drivers, logistics fleets, e-hailing operators, and corporate customers across the Philippines — with the same commitment to reliability that has defined our work from day one.</p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">What Drives Us</span>
            <h2 className="section-title">Our Core Values</h2>
          </div>
          <div className="grid-4 reveal">
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-shield-alt"></i></div>
              <h3>Safety First</h3>
              <p>Every battery is engineered with built-in protection against overcharging, overheating, and short circuits.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-leaf"></i></div>
              <h3>Sustainability</h3>
              <p>Sodium-ion technology uses more eco-friendly materials, reducing lead pollution and carbon footprint in manufacturing.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-cogs"></i></div>
              <h3>Innovation</h3>
              <p>We continuously invest in research and development to stay ahead of the curve in battery technology.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-handshake"></i></div>
              <h3>Partnership</h3>
              <p>We grow with our dealers, fleet operators, and customers through trust, transparency, and long-term commitment.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS */}
      <section className="section" style={{ background: 'var(--primary)' }}>
        <div className="container">
          <div className="grid-split grid-split-lg">
            <div className="reveal">
              <span className="section-label" style={{ color: 'var(--accent-light)' }}>Quality Certified</span>
              <h2 className="section-title white">Internationally Recognised Certifications</h2>
              <p style={{ color: 'rgba(255,255,255,.75)', marginBottom: '2rem' }}>Our manufacturing partners hold the world&apos;s most rigorous automotive quality, environmental, and safety certifications — so you can be confident every Aeson Power battery meets the highest global standards.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,.06)', borderRadius: 'var(--radius)', padding: '1rem 1.25rem' }}>
                  <i className="fas fa-certificate" style={{ color: 'var(--accent)', fontSize: '1.25rem', flexShrink: 0 }}></i>
                  <div>
                    <strong style={{ color: 'var(--white)' }}>IATF 16949</strong>
                    <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.875rem', marginTop: '.125rem' }}>International Automotive Quality Management System</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,.06)', borderRadius: 'var(--radius)', padding: '1rem 1.25rem' }}>
                  <i className="fas fa-globe" style={{ color: 'var(--accent)', fontSize: '1.25rem', flexShrink: 0 }}></i>
                  <div>
                    <strong style={{ color: 'var(--white)' }}>ISO 14001</strong>
                    <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.875rem', marginTop: '.125rem' }}>Environmental Management System</p>
                  </div>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,.06)', borderRadius: 'var(--radius)', padding: '1rem 1.25rem' }}>
                  <i className="fas fa-hard-hat" style={{ color: 'var(--accent)', fontSize: '1.25rem', flexShrink: 0 }}></i>
                  <div>
                    <strong style={{ color: 'var(--white)' }}>ISO 45001</strong>
                    <p style={{ color: 'rgba(255,255,255,.6)', fontSize: '.875rem', marginTop: '.125rem' }}>Occupational Health &amp; Safety Management</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal delay-1">
              <Image src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/about-cert-sect-scaled.webp" alt="Certifications" width={600} height={400} style={{ borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-xl)', width: '100%', height: 'auto' }} />
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', marginTop: '1.5rem' }}>
                <Image src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/IATF-16949.webp" alt="IATF" width={60} height={60} style={{ objectFit: 'contain', background: 'white', borderRadius: '8px', padding: '6px' }} />
                <Image src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/ISO-14001-compressed.webp" alt="ISO 14001" width={60} height={60} style={{ objectFit: 'contain', background: 'white', borderRadius: '8px', padding: '6px' }} />
                <Image src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/ISO-45001.webp" alt="ISO 45001" width={60} height={60} style={{ objectFit: 'contain', background: 'white', borderRadius: '8px', padding: '6px' }} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTIONS */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Who We Serve</span>
            <h2 className="section-title">Solutions for Every Driver</h2>
            <p className="section-subtitle">Whether you&apos;re an everyday commuter, a fleet operator, or a corporate customer, Aeson Power has a solution for you.</p>
          </div>
          <div className="grid-3 reveal">
            <div style={{ textAlign: 'center', padding: '2.5rem 2rem', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-md)', transition: 'var(--transition)' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(232,119,34,.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', fontSize: '1.75rem', color: 'var(--accent)' }}><i className="fas fa-car"></i></div>
              <h3 style={{ marginBottom: '.75rem' }}>Individual Drivers</h3>
              <p style={{ color: 'var(--text-muted)' }}>Perfect for everyday commuters seeking a safer, lighter, and longer-lasting alternative to conventional car batteries.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2.5rem 2rem', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-md)', transition: 'var(--transition)' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(232,119,34,.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', fontSize: '1.75rem', color: 'var(--accent)' }}><i className="fas fa-truck"></i></div>
              <h3 style={{ marginBottom: '.75rem' }}>Logistics Fleets</h3>
              <p style={{ color: 'var(--text-muted)' }}>Reduced downtime and lower total cost of ownership for logistics, delivery, and transport companies operating large fleets.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2.5rem 2rem', border: '1px solid var(--gray-200)', borderRadius: 'var(--radius-md)', transition: 'var(--transition)' }}>
              <div style={{ width: '64px', height: '64px', background: 'rgba(232,119,34,.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', fontSize: '1.75rem', color: 'var(--accent)' }}><i className="fas fa-building"></i></div>
              <h3 style={{ marginBottom: '.75rem' }}>E-Hailing &amp; Corporate</h3>
              <p style={{ color: 'var(--text-muted)' }}>Custom fleet battery solutions for e-hailing drivers and corporate services that demand reliability and low maintenance.</p>
            </div>
          </div>
          <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
            <a href="mailto:info@aesonpower.com.ph" className="btn btn-primary">Enquire About Fleet Solutions</a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-banner-bg" style={{ backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2025/07/cta-bg-2-scaled.webp')" }}></div>
        <div className="container">
          <div className="cta-banner-content reveal">
            <h2>Ready to Experience the Difference?</h2>
            <p>Find the right Aeson Power sodium-ion battery for your vehicle and join thousands of satisfied Philippine drivers.</p>
            <div className="btn-group">
              <Link href="/products" className="btn btn-primary btn-lg">Explore Products</Link>
              <Link href="/battery-finder" className="btn btn-outline btn-lg">Find My Battery</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
