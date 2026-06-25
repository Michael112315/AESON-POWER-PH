import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'News',
}

export default function NewsPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2025/12/aeson-power-sodium-ion-battery-launch-bg.webp')" }}></div>
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb"><Link href="/">Home</Link><span>/</span><span className="current">News</span></nav>
            <h1>News &amp; Media</h1>
            <p>Read the latest coverage of Aeson Power from the Philippines&apos; top automotive and technology publications.</p>
          </div>
        </div>
      </section>

      {/* NEWS PLACEHOLDER */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', padding: '5rem 2rem' }} className="reveal">
            <div style={{ width: '72px', height: '72px', background: 'var(--gray-100)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.75rem', color: 'var(--gray-400)', margin: '0 auto 1.5rem' }}>
              <i className="fas fa-newspaper"></i>
            </div>
            <h3 style={{ fontSize: '1.375rem', marginBottom: '.75rem', color: 'var(--text)' }}>News &amp; Coverage Coming Soon</h3>
            <p style={{ color: 'var(--text-muted)', maxWidth: '480px', margin: '0 auto 2rem' }}>We&apos;re just getting started in the Philippines. Check back soon for the latest news, media coverage, and announcements from Aeson Power.</p>
            <a href="mailto:info@aesonpower.com.ph" className="btn btn-primary"><i className="fas fa-envelope"></i> Media Enquiries</a>
          </div>
        </div>
      </section>

      {/* PRESS CONTACT */}
      <section className="cta-banner">
        <div className="cta-banner-bg" style={{ backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2025/07/cta-bg-2-scaled.webp')" }}></div>
        <div className="container">
          <div className="cta-banner-content reveal">
            <span className="section-label" style={{ color: 'var(--accent-light)' }}>Media Enquiries</span>
            <h2>Press &amp; Media Contact</h2>
            <p>Are you a journalist or content creator covering automotive technology in the Philippines? We&apos;d love to hear from you. Reach out for press kits, product samples, or media briefings.</p>
            <div className="btn-group">
              <a href="mailto:info@aesonpower.com.ph" className="btn btn-primary btn-lg"><i className="fas fa-envelope"></i> Contact Press Team</a>
              <Link href="/about" className="btn btn-outline btn-lg">About Aeson Power</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
