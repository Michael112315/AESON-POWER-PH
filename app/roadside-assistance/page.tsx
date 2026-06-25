import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Roadside Assistance',
}

export default function RoadsideAssistancePage() {
  return (
    <>
      {/* HERO */}
      <section className="hero" style={{ minHeight: '60vh' }}>
        <div className="hero-bg" style={{ backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2025/10/home-roadside.webp')" }}></div>
        <div className="container">
          <div className="hero-content">
            <nav className="breadcrumb" style={{ marginBottom: '1.5rem' }}>
              <Link href="/" style={{ color: 'rgba(255,255,255,.6)' }}>Home</Link>
              <span style={{ color: 'rgba(255,255,255,.3)' }}>/</span>
              <span style={{ color: 'var(--accent)', fontWeight: 600 }}>Roadside Assistance</span>
            </nav>
            <div className="hero-label">24/7 Emergency Support</div>
            <h1>Reliable Assistance, <span>Powered by Our Partners</span></h1>
            <p style={{ color: 'rgba(255,255,255,.8)', marginBottom: '2rem' }}>Stranded with a dead battery? Our trusted roadside assistance network is ready to get you back on the road — fast.</p>
            <div className="hero-cta">
              <a href="tel:+639273179178" className="btn btn-primary btn-lg"><i className="fas fa-phone"></i> Call for Help Now</a>
              <a href="#partners" className="btn btn-outline btn-lg">View Partners</a>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="section">
        <div className="container">
          <div className="section-header center reveal">
            <span className="section-label">Simple &amp; Fast</span>
            <h2 className="section-title">How Roadside Assistance Works</h2>
            <p className="section-subtitle">Getting help is as easy as making a phone call. Our partner network dispatches a trained technician to your location.</p>
          </div>
          <div className="grid-3 reveal">
            <div style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div style={{ width: '72px', height: '72px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', fontSize: '1.5rem', color: 'white', position: 'relative' }}>
                <i className="fas fa-phone"></i>
                <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '24px', height: '24px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.75rem', fontWeight: 900 }}>1</div>
              </div>
              <h3 style={{ marginBottom: '.625rem' }}>Call Our Partner</h3>
              <p className="text-muted">Contact Better Battery Bacolod or another assistance partner using the numbers below. Available around the clock.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div style={{ width: '72px', height: '72px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', fontSize: '1.5rem', color: 'white', position: 'relative' }}>
                <i className="fas fa-map-marker-alt"></i>
                <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '24px', height: '24px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.75rem', fontWeight: 900 }}>2</div>
              </div>
              <h3 style={{ marginBottom: '.625rem' }}>Share Your Location</h3>
              <p className="text-muted">Tell the dispatcher your location and vehicle details so they can send the right technician to you.</p>
            </div>
            <div style={{ textAlign: 'center', padding: '2rem 1.5rem' }}>
              <div style={{ width: '72px', height: '72px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.25rem', fontSize: '1.5rem', color: 'white', position: 'relative' }}>
                <i className="fas fa-car-battery"></i>
                <div style={{ position: 'absolute', top: '-4px', right: '-4px', width: '24px', height: '24px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.75rem', fontWeight: 900 }}>3</div>
              </div>
              <h3 style={{ marginBottom: '.625rem' }}>Get Back on the Road</h3>
              <p className="text-muted">A trained technician arrives with the right battery and tools to get you moving again quickly.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PARTNERS */}
      <section className="section section-gray" id="partners">
        <div className="container">
          <div className="section-header center reveal">
            <span className="section-label">Trusted Network</span>
            <h2 className="section-title">Our Assistance Partners</h2>
            <p className="section-subtitle">We work with reliable, professionally trained roadside assistance providers across the Philippines.</p>
          </div>

          {/* Better Battery Bacolod */}
          <div className="partner-card reveal">
            <div>
              <h3 style={{ marginBottom: '.5rem' }}>Better Battery Bacolod</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>Your trusted Aeson Power roadside assistance partner. Our team is ready to help with battery delivery, on-site installation, and emergency support to get you back on the road fast.</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.875rem', color: 'var(--text-muted)' }}>
                  <i className="fas fa-clock" style={{ color: 'var(--accent)' }}></i> Available via Viber &amp; WhatsApp
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '.5rem', fontSize: '.875rem', color: 'var(--text-muted)' }}>
                  <i className="fas fa-tools" style={{ color: 'var(--accent)' }}></i> On-site Installation
                </div>
              </div>
            </div>
            <div style={{ textAlign: 'center', flexShrink: 0 }}>
              <div style={{ fontSize: '1.5rem', fontWeight: 900, color: 'var(--primary)', marginBottom: '.25rem' }}>+63 927 317 9178</div>
              <div style={{ fontSize: '.8125rem', color: 'var(--text-muted)', marginBottom: '1rem' }}>Viber / WhatsApp</div>
              <a href="https://wa.me/639273179178" className="btn btn-primary">Contact Now <i className="fas fa-phone"></i></a>
            </div>
          </div>

          {/* More coming */}
          <div style={{ background: 'var(--white)', border: '2px dashed var(--gray-200)', borderRadius: 'var(--radius-lg)', padding: '2.5rem', textAlign: 'center' }} className="reveal">
            <i className="fas fa-plus-circle" style={{ fontSize: '2rem', color: 'var(--gray-300)', marginBottom: '1rem', display: 'block' }}></i>
            <h3 style={{ color: 'var(--text-muted)', fontSize: '1.125rem', marginBottom: '.5rem' }}>More Partners Coming Soon</h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto' }}>We are continuously expanding our roadside assistance network to ensure nationwide coverage for all Aeson Power customers.</p>
          </div>
        </div>
      </section>

      {/* FLEET / CORPORATE */}
      <section className="section">
        <div className="container">
          <div className="grid-split grid-split-lg reveal">
            <div>
              <span className="section-label">Fleet Solutions</span>
              <h2 className="section-title">Custom Solutions for Fleets &amp; Corporate</h2>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.25rem' }}>Managing a logistics fleet, e-hailing operation, or corporate vehicle pool? Aeson Power offers tailored battery supply agreements and priority roadside assistance packages for business customers.</p>
              <ul className="icon-list" style={{ marginBottom: '2rem' }}>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Priority dispatch for fleet vehicles</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Volume pricing on battery supply</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Dedicated account manager</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Consolidated warranty management</span></li>
                <li><span className="icon"><i className="fas fa-check"></i></span><span>Scheduled maintenance battery checks</span></li>
              </ul>
              <a href="mailto:info@aesonpower.com.ph" className="btn btn-primary">Enquire About Fleet Plans</a>
            </div>
            <div style={{ background: 'var(--primary)', borderRadius: 'var(--radius-lg)', padding: '2.5rem' }}>
              <h3 style={{ color: 'white', marginBottom: '1.5rem' }}>Contact Us Directly</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                <a href="https://wa.me/639273179178" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,.08)', borderRadius: 'var(--radius)', padding: '1rem 1.25rem', color: 'white', transition: 'var(--transition)' }}>
                  <div style={{ width: '42px', height: '42px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><i className="fas fa-phone"></i></div>
                  <div><div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.6)', marginBottom: '.125rem' }}>Phone</div><strong>+63 927 317 9178</strong></div>
                </a>
                <a href="mailto:info@aesonpower.com.ph" style={{ display: 'flex', alignItems: 'center', gap: '1rem', background: 'rgba(255,255,255,.08)', borderRadius: 'var(--radius)', padding: '1rem 1.25rem', color: 'white', transition: 'var(--transition)' }}>
                  <div style={{ width: '42px', height: '42px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><i className="fas fa-envelope"></i></div>
                  <div><div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.6)', marginBottom: '.125rem' }}>Email</div><strong>info@aesonpower.com.ph</strong></div>
                </a>
                <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', background: 'rgba(255,255,255,.08)', borderRadius: 'var(--radius)', padding: '1rem 1.25rem', color: 'white' }}>
                  <div style={{ width: '42px', height: '42px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}><i className="fas fa-map-marker-alt"></i></div>
                  <div><div style={{ fontSize: '.75rem', color: 'rgba(255,255,255,.6)', marginBottom: '.125rem' }}>Facebook</div><strong style={{ fontSize: '.9375rem' }}><a href="https://www.facebook.com/BetterBatteriesBacolod" target="_blank" rel="noopener" style={{ color: 'white' }}>Better Batteries Bacolod</a></strong></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
