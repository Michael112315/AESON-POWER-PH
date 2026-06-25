import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Retail Partners',
}

export default function RetailPartnersPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2025/07/cta-bg-1-scaled.webp')" }}></div>
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb"><Link href="/">Home</Link><span>/</span><span className="current">Retail Partners</span></nav>
            <h1>Retail Partners</h1>
            <p>Find an authorised Aeson Power dealer near you across the Philippines.</p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">

          {/* Coming soon placeholder */}
          <div style={{ textAlign: 'center', padding: '5rem 2rem' }} className="reveal">
            <div style={{ width: '72px', height: '72px', background: 'var(--gray-100)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', color: 'var(--gray-400)', margin: '0 auto 1.5rem' }}>
              <i className="fas fa-map-marker-alt"></i>
            </div>
            <h3 style={{ fontSize: '1.375rem', marginBottom: '.75rem', color: 'var(--text)' }}>Dealer Locations Coming Soon</h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 2rem' }}>We&apos;re building our authorised dealer network across the Philippines. Check back soon or get in touch to find out when a dealer will be available near you.</p>
            <a href="mailto:info@aesonpower.com.ph" className="btn btn-primary"><i className="fas fa-envelope"></i> Contact Us</a>
          </div>

          {/* Become a partner */}
          <div style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-lg)', padding: '3rem', textAlign: 'center', marginTop: '4rem' }} className="reveal">
            <div style={{ width: '60px', height: '60px', background: 'rgba(232,119,34,.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.5rem', color: 'var(--accent)', margin: '0 auto 1.25rem' }}><i className="fas fa-handshake"></i></div>
            <h2 style={{ fontSize: '1.5rem', marginBottom: '.75rem' }}>Become an Authorised Dealer</h2>
            <p style={{ color: 'var(--text-muted)', maxWidth: '560px', margin: '0 auto 2rem' }}>Interested in carrying Aeson Power sodium-ion batteries at your shop? We&apos;re actively expanding our dealer network across the Philippines. Contact us to learn about partnership opportunities.</p>
            <a href="mailto:info@aesonpower.com.ph" className="btn btn-primary">Enquire About Dealership</a>
          </div>

        </div>
      </section>
    </>
  )
}
