'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function ProductsPage() {
  const [activeTab, setActiveTab] = useState<'all' | 'napulse' | 'naforce'>('all')

  const napulseProducts = [
    {
      model: 'NA-40B20L',
      designation: 'NS40 Designation',
      img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS40L.242-scaled-1.webp',
      cca: '350–450 A',
      weight: '4 ± 0.5 kg',
      fits: 'Perodua Myvi, Axia, Bezza · Proton Saga · Toyota Vios',
      fitsIcon: 'fa-car',
    },
    {
      model: 'NA-NS50L',
      designation: '55D23L / NS50 Designation',
      img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/08/55D23L%E4%BB%B0-scaled-1.webp',
      cca: '450–600 A',
      weight: '4.5 ± 0.5 kg',
      fits: 'Perodua Alza, Aruz · Proton Persona, Iriz · Honda HR-V',
      fitsIcon: 'fa-car',
    },
    {
      model: 'NA-60B24L',
      designation: 'NS60 Designation',
      img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS60L.244.webp',
      cca: '370–500 A',
      weight: '4.2 ± 0.5 kg',
      fits: 'Perodua Ativa · Proton Exora · Nissan Almera variants',
      fitsIcon: 'fa-car',
    },
    {
      model: 'NA-NS70L',
      designation: 'NS70 Designation',
      img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/08/55D26L%E4%BB%B0-scaled-1.webp',
      cca: '450–600 A',
      weight: '5 ± 0.5 kg',
      fits: 'Proton X90 · Nissan Serena · MPV variants',
      fitsIcon: 'fa-car',
    },
  ]

  const naforceProducts = [
    {
      model: 'H5 / L2-400L',
      designation: 'DIN55L Designation',
      img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp',
      cca: '450–600 A',
      weight: '4.5 ± 0.5 kg',
      fits: 'Proton X50, X70 · Honda Civic, CR-V · Mazda CX-5 · VW Tiguan',
      fitsIcon: 'fa-car',
      popular: true,
    },
    {
      model: 'D31L',
      designation: '95D31L / NX120-7L Designation',
      img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/12/D31L-scaled-1.webp',
      cca: '650–800 A',
      weight: '6.4 ± 0.5 kg',
      fits: 'Toyota Hilux, Fortuner · Nissan Navara · Mitsubishi Triton',
      fitsIcon: 'fa-truck',
    },
    {
      model: 'M42L',
      designation: 'M42L Designation',
      img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/12/m42l-no-bg.png',
      cca: '520–600 A',
      weight: '5.1 ± 0.5 kg',
      fits: 'BMW 1/3 Series, X1 · Mercedes A-Class, GLA',
      fitsIcon: 'fa-car',
    },
    {
      model: 'Q85L-SS',
      designation: 'Q85 Designation',
      img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/08/Q85L%E4%BB%B0-scaled-1.webp',
      cca: '650–800 A',
      weight: '6 ± 0.5 kg',
      fits: 'Toyota Alphard · BMW 5 Series, X3 · Mercedes C-Class, GLC',
      fitsIcon: 'fa-car',
    },
    {
      model: 'S95L-SS',
      designation: 'S95 Designation',
      img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/08/S95L%E4%BB%B0-scaled-1.webp',
      cca: '720–850 A',
      weight: '7 ± 0.5 kg',
      fits: 'BMW X5 · Mercedes E-Class · Large premium SUVs',
      fitsIcon: 'fa-car',
    },
  ]

  const visibleNaPulse = activeTab === 'all' || activeTab === 'napulse'
  const visibleNaForce = activeTab === 'all' || activeTab === 'naforce'

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2025/07/cta-bg-1-scaled.webp')" }}></div>
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb"><Link href="/">Home</Link><span>/</span><span className="current">Products</span></nav>
            <h1>Our Products</h1>
            <p>9 sodium-ion battery models engineered to fit every vehicle — from city hatchbacks to heavy-duty trucks.</p>
          </div>
        </div>
      </section>

      {/* INTRO BANNER */}
      <section className="section-sm" style={{ background: 'var(--gray-50)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '1.5rem' }} className="reveal">
            <div>
              <h2 style={{ fontSize: '1.25rem', marginBottom: '.375rem' }}>Universal Compatibility. Unmatched Performance.</h2>
              <p style={{ color: 'var(--text-muted)' }}>All models feature SAE AP terminals, 14.4–14.8V charge voltage, and a comprehensive 30-month warranty.</p>
            </div>
            <div style={{ display: 'flex', gap: '1rem', flexShrink: 0, flexWrap: 'wrap' }}>
              <Link href="/battery-finder" className="btn btn-primary"><i className="fas fa-search"></i> Find My Battery</Link>
              <Link href="/retail-partners" className="btn btn-outline-dark"><i className="fas fa-store"></i> Buy Now</Link>
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS GRID */}
      <section className="section">
        <div className="container">
          <div className="section-header center">
            <span className="section-label">Full Lineup</span>
            <h2 className="section-title">All Battery Models</h2>
            <p className="section-subtitle">Every Aeson Power battery uses advanced sodium-ion chemistry for superior safety, longevity, and performance.</p>
          </div>

          {/* TABS */}
          <div style={{ display: 'flex', gap: '.75rem', justifyContent: 'center', marginBottom: '2.5rem', flexWrap: 'wrap' }}>
            <button className={`btn ${activeTab === 'all' ? 'btn-primary' : 'btn-outline-dark'} btn-sm`} onClick={() => setActiveTab('all')}>All Models</button>
            <button className={`btn ${activeTab === 'napulse' ? 'btn-primary' : 'btn-outline-dark'} btn-sm`} onClick={() => setActiveTab('napulse')}>NaPulse Series</button>
            <button className={`btn ${activeTab === 'naforce' ? 'btn-primary' : 'btn-outline-dark'} btn-sm`} onClick={() => setActiveTab('naforce')}>NaForce Series</button>
          </div>

          <div className="grid-3 reveal">
            {visibleNaPulse && napulseProducts.map((p) => (
              <div key={p.model} className="product-card">
                <div className="product-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.model} />
                </div>
                <div className="product-card-body">
                  <span className="product-badge badge-napulse">NaPulse Series</span>
                  <h3>{p.model}</h3>
                  <p className="product-model">{p.designation}</p>
                  <ul className="product-specs">
                    <li><span className="spec-label">CCA Rating</span><span className="spec-value">{p.cca}</span></li>
                    <li><span className="spec-label">Weight</span><span className="spec-value">{p.weight}</span></li>
                    <li><span className="spec-label">Charge Voltage</span><span className="spec-value">14.4–14.8 V</span></li>
                    <li><span className="spec-label">Terminal</span><span className="spec-value">SAE AP</span></li>
                    <li><span className="spec-label">Warranty</span><span className="spec-value" style={{ color: 'var(--accent)', fontWeight: 700 }}>30 Months</span></li>
                  </ul>
                  <div className="product-card-footer">
                    <p style={{ fontSize: '.8125rem', color: 'var(--text-muted)', marginBottom: '.75rem' }}><i className={`fas ${p.fitsIcon}`} style={{ color: 'var(--accent)', marginRight: '.375rem' }}></i>Fits: {p.fits}</p>
                    <div style={{ display: 'flex', gap: '.625rem' }}>
                      <Link href="/battery-finder" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>Buy Now</Link>
                      <Link href="/retail-partners" className="btn btn-outline-dark btn-sm" style={{ flex: 1, justifyContent: 'center' }}>Find Dealer</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {visibleNaForce && naforceProducts.map((p) => (
              <div key={p.model} className="product-card" style={p.popular ? { borderColor: 'var(--accent)', boxShadow: '0 0 0 1px var(--accent)' } : {}}>
                {p.popular && (
                  <div style={{ background: 'var(--accent)', color: 'var(--white)', textAlign: 'center', padding: '.5rem', fontSize: '.75rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase' }}>⭐ Most Popular</div>
                )}
                <div className="product-card-img">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={p.img} alt={p.model} />
                </div>
                <div className="product-card-body">
                  <span className="product-badge badge-naforce">NaForce Series</span>
                  <h3>{p.model}</h3>
                  <p className="product-model">{p.designation}</p>
                  <ul className="product-specs">
                    <li><span className="spec-label">CCA Rating</span><span className="spec-value">{p.cca}</span></li>
                    <li><span className="spec-label">Weight</span><span className="spec-value">{p.weight}</span></li>
                    <li><span className="spec-label">Charge Voltage</span><span className="spec-value">14.4–14.8 V</span></li>
                    <li><span className="spec-label">Terminal</span><span className="spec-value">SAE AP</span></li>
                    <li><span className="spec-label">Warranty</span><span className="spec-value" style={{ color: 'var(--accent)', fontWeight: 700 }}>30 Months</span></li>
                  </ul>
                  <div className="product-card-footer">
                    <p style={{ fontSize: '.8125rem', color: 'var(--text-muted)', marginBottom: '.75rem' }}><i className={`fas ${p.fitsIcon}`} style={{ color: 'var(--accent)', marginRight: '.375rem' }}></i>Fits: {p.fits}</p>
                    <div style={{ display: 'flex', gap: '.625rem' }}>
                      <Link href="/battery-finder" className="btn btn-primary btn-sm" style={{ flex: 1, justifyContent: 'center' }}>Buy Now</Link>
                      <Link href="/retail-partners" className="btn btn-outline-dark btn-sm" style={{ flex: 1, justifyContent: 'center' }}>Find Dealer</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FULL SPECS TABLE */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header center reveal">
            <span className="section-label">Complete Specifications</span>
            <h2 className="section-title">Side-by-Side Comparison</h2>
            <p className="section-subtitle">All 9 models at a glance — choose by CCA rating and weight for your vehicle type.</p>
          </div>
          <div style={{ overflowX: 'auto' }} className="reveal">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Designation</th>
                  <th>CCA Range</th>
                  <th>Weight</th>
                  <th>Charge Voltage</th>
                  <th>Terminal</th>
                  <th className="highlight">Warranty</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>NA-40B20L</strong></td><td>NS40</td><td>350–450 A</td><td>4 ± 0.5 kg</td><td>14.4–14.8 V</td><td>SAE AP</td><td className="highlight-col" style={{ color: 'var(--accent)', fontWeight: 700 }}>30 Months</td></tr>
                <tr><td><strong>NA-NS50L</strong></td><td>55D23L / NS50</td><td>450–600 A</td><td>4.5 ± 0.5 kg</td><td>14.4–14.8 V</td><td>SAE AP</td><td className="highlight-col" style={{ color: 'var(--accent)', fontWeight: 700 }}>30 Months</td></tr>
                <tr><td><strong>NA-60B24L</strong></td><td>NS60</td><td>370–500 A</td><td>4.2 ± 0.5 kg</td><td>14.4–14.8 V</td><td>SAE AP</td><td className="highlight-col" style={{ color: 'var(--accent)', fontWeight: 700 }}>30 Months</td></tr>
                <tr><td><strong>NA-NS70L</strong></td><td>NS70</td><td>450–600 A</td><td>5 ± 0.5 kg</td><td>14.4–14.8 V</td><td>SAE AP</td><td className="highlight-col" style={{ color: 'var(--accent)', fontWeight: 700 }}>30 Months</td></tr>
                <tr style={{ background: 'rgba(232,119,34,.04)' }}><td><strong>H5 / L2-400L</strong> ⭐</td><td>DIN55L</td><td>450–600 A</td><td>4.5 ± 0.5 kg</td><td>14.4–14.8 V</td><td>SAE AP</td><td className="highlight-col" style={{ color: 'var(--accent)', fontWeight: 700 }}>30 Months</td></tr>
                <tr><td><strong>D31L</strong></td><td>95D31L / NX120-7L</td><td>650–800 A</td><td>6.4 ± 0.5 kg</td><td>14.4–14.8 V</td><td>SAE AP</td><td className="highlight-col" style={{ color: 'var(--accent)', fontWeight: 700 }}>30 Months</td></tr>
                <tr><td><strong>M42L</strong></td><td>M42L</td><td>520–600 A</td><td>5.1 ± 0.5 kg</td><td>14.4–14.8 V</td><td>SAE AP</td><td className="highlight-col" style={{ color: 'var(--accent)', fontWeight: 700 }}>30 Months</td></tr>
                <tr><td><strong>Q85L-SS</strong></td><td>Q85</td><td>650–800 A</td><td>6 ± 0.5 kg</td><td>14.4–14.8 V</td><td>SAE AP</td><td className="highlight-col" style={{ color: 'var(--accent)', fontWeight: 700 }}>30 Months</td></tr>
                <tr><td><strong>S95L-SS</strong></td><td>S95</td><td>720–850 A</td><td>7 ± 0.5 kg</td><td>14.4–14.8 V</td><td>SAE AP</td><td className="highlight-col" style={{ color: 'var(--accent)', fontWeight: 700 }}>30 Months</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* WHERE TO BUY */}
      <section className="section">
        <div className="container">
          <div className="section-header center reveal">
            <span className="section-label">Purchase</span>
            <h2 className="section-title">Where to Buy</h2>
            <p className="section-subtitle">Available through our authorised retail partners across the Philippines, as well as online marketplaces.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon" style={{ margin: '0 auto 1rem' }}><i className="fas fa-store"></i></div>
              <h3>Authorised Dealers</h3>
              <p style={{ marginBottom: '1.25rem' }}>Our growing authorised dealer network across the Philippines offers installation, warranty registration, and after-sales support.</p>
              <Link href="/retail-partners" className="btn btn-primary btn-sm">Find a Dealer</Link>
            </div>
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon" style={{ margin: '0 auto 1rem' }}><i className="fas fa-shopping-cart"></i></div>
              <h3>Shopee</h3>
              <p style={{ marginBottom: '1.25rem' }}>Shop conveniently online on Shopee Philippines. Enjoy platform vouchers and fast delivery to your doorstep.</p>
              <a href="#" className="btn btn-primary btn-sm">Shop on Shopee</a>
            </div>
            <div className="feature-card" style={{ textAlign: 'center' }}>
              <div className="feature-icon" style={{ margin: '0 auto 1rem' }}><i className="fas fa-box"></i></div>
              <h3>Lazada</h3>
              <p style={{ marginBottom: '1.25rem' }}>Browse the full range on Lazada Philippines with buyer protection and hassle-free returns.</p>
              <a href="#" className="btn btn-primary btn-sm">Shop on Lazada</a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-banner-bg" style={{ backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2025/07/cta-bg-2-scaled.webp')" }}></div>
        <div className="container">
          <div className="cta-banner-content reveal">
            <span className="section-label" style={{ color: 'var(--accent-light)' }}>Not Sure Which Battery?</span>
            <h2>Use Our Battery Finder</h2>
            <p>Select your car make and model and we&apos;ll instantly show you the perfect Aeson Power battery — no guesswork needed.</p>
            <div className="btn-group">
              <Link href="/battery-finder" className="btn btn-primary btn-lg"><i className="fas fa-search"></i> Find My Battery</Link>
              <Link href="/faq" className="btn btn-outline btn-lg">Common Questions</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
