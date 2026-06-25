'use client'

import Link from 'next/link'
import { useState } from 'react'

type FaqItem = {
  question: string
  answer: React.ReactNode
}

function FaqList({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  function toggle(i: number) {
    setOpenIndex(prev => (prev === i ? null : i))
  }

  return (
    <div className="faq-list" style={{ maxWidth: '100%' }}>
      {items.map((item, i) => (
        <div key={i} className={`faq-item${openIndex === i ? ' open' : ''}`}>
          <button className={`faq-question${openIndex === i ? ' active' : ''}`} onClick={() => toggle(i)}>
            {item.question}
            <span className="faq-icon"><i className={`fas fa-${openIndex === i ? 'minus' : 'plus'}`}></i></span>
          </button>
          <div className={`faq-answer${openIndex === i ? ' open' : ''}`}>
            {item.answer}
          </div>
        </div>
      ))}
    </div>
  )
}

const generalFaqs: FaqItem[] = [
  {
    question: 'What is a sodium-ion battery and how is it different from lead-acid?',
    answer: <p>Sodium-ion batteries use sodium ions moving between electrodes to store and release energy — the same fundamental principle as lithium-ion, but with sodium. Unlike lead-acid batteries, sodium-ion batteries contain no liquid sulphuric acid, produce no explosive hydrogen gas during charging, and are completely sealed and maintenance-free. They are also significantly lighter (4–7 kg vs 14–23 kg) and offer far longer cycle life (3,000+ vs 200–500 cycles).</p>
  },
  {
    question: 'Is sodium-ion technology proven and safe for automotive use?',
    answer: <p>Yes. Aeson Power sodium-ion batteries are manufactured by partners with over 30 years of automotive battery production experience and are certified to IATF 16949, ISO 14001, and ISO 45001 international standards. The batteries include built-in protection circuits for overcharge, overheating, and short-circuit protection, and have undergone rigorous testing for the Philippines&apos; tropical climate conditions.</p>
  },
  {
    question: "Are Aeson Power batteries compatible with my car's existing electrical system?",
    answer: <p>Yes. Aeson Power batteries use standard SAE AP terminals and operate at the same 12V nominal voltage as conventional lead-acid batteries. They are direct drop-in replacements and compatible with all standard automotive alternators, which charge at 14.4–14.8V — the exact range our batteries are designed for. No modifications to your vehicle are required.</p>
  },
  {
    question: "Will the sodium-ion battery work with my car's start-stop system?",
    answer: <p>Aeson Power sodium-ion batteries are optimised for start-stop applications. Their high cycle life (3,000+ cycles) makes them ideal for vehicles with start-stop systems, which demand far more frequent charge-discharge cycles than conventional vehicles. For vehicles with AGM-specific BMS (Battery Management Systems), we recommend consulting your dealer or contacting us to confirm compatibility before purchase.</p>
  },
  {
    question: 'How do I know which battery model fits my car?',
    answer: <p>Use our <Link href="/battery-finder" style={{ color: 'var(--accent)' }}>Battery Finder tool</Link> — simply select your car brand and model and we&apos;ll instantly recommend the right Aeson Power battery. Alternatively, check your current battery&apos;s label for the designation code (e.g. NS40, NS60, DIN55L, Q85) and match it to our product range on the <Link href="/products" style={{ color: 'var(--accent)' }}>Products page</Link>.</p>
  },
]

const installationFaqs: FaqItem[] = [
  {
    question: 'Can I install the Aeson Power battery myself?',
    answer: <p>Yes, Aeson Power batteries can be self-installed if you are comfortable with basic car maintenance. The process is the same as replacing a conventional lead-acid battery — disconnect the negative terminal first, then the positive, remove the old battery, place the new one, and reconnect positive then negative. However, for best results and to ensure your warranty is correctly registered, we recommend purchasing and having the battery installed by one of our <Link href="/retail-partners" style={{ color: 'var(--accent)' }}>authorised retail partners</Link>.</p>
  },
  {
    question: 'Does the battery require any special charger?',
    answer: <p>No special charger is required for normal use. Your car&apos;s alternator charges the battery during driving at 14.4–14.8V, which is within the battery&apos;s specified charge voltage range. If you need to charge the battery externally (e.g. if the vehicle has been unused for a long period), use a standard automotive smart charger set to 12V / 14.4V. Avoid using old-style transformer chargers without voltage regulation.</p>
  },
  {
    question: 'How long does an Aeson Power battery last?',
    answer: <p>Aeson Power batteries deliver over 3,000 charge-discharge cycles, which translates to a significantly longer service life than conventional lead-acid batteries (200–500 cycles). Under typical Philippine driving conditions, this means you can expect substantially extended battery life compared to lead-acid — potentially 5–10 years or more with proper use. All batteries are also covered by a 30-month warranty from the date of purchase.</p>
  },
  {
    question: "Is the battery suitable for the Philippines' hot weather?",
    answer: <p>Absolutely. Aeson Power batteries are specifically engineered and tested for the Philippines&apos; tropical climate — high temperatures, high humidity, and frequent short-distance driving cycles. Our proprietary electrolyte formulation delivers excellent thermal stability, maintaining consistent cranking power even during the hottest afternoons. Lead-acid batteries suffer significantly from heat-induced water loss and sulphation; sodium-ion chemistry is far more thermally robust.</p>
  },
  {
    question: 'Does the lighter weight of the battery affect car performance?',
    answer: <p>Positively, yes! Reducing battery weight by 10–16 kg reduces the overall vehicle load, which can contribute up to 5% improvement in fuel consumption. The reduced weight also lessens strain on your vehicle&apos;s suspension and braking system. There is no negative impact on starting power — Aeson Power batteries deliver the same or higher CCA (Cold Cranking Amps) as equivalent lead-acid batteries.</p>
  },
]

const warrantyFaqs: FaqItem[] = [
  {
    question: 'How do I register my warranty?',
    answer: <p>Register your warranty online via our <Link href="/warranty" style={{ color: 'var(--accent)' }}>Warranty Registration page</Link>. You will need: your battery model and serial number, proof of purchase (receipt), purchase date, vehicle registration number, vehicle photo, and your contact details. Registration takes approximately 5 minutes. You will receive a confirmation email within 1–2 business days.</p>
  },
  {
    question: 'What does the 30-month warranty cover?',
    answer: <p>The warranty covers manufacturing defects including premature capacity loss, terminal defects, internal short circuits, and factory-origin casing defects. It does not cover physical damage from misuse, incorrect installation, overcharging due to a faulty alternator, or normal wear and ageing. The warranty is only valid for registered batteries with valid proof of purchase.</p>
  },
  {
    question: 'How do I make a warranty claim?',
    answer: <p>To make a warranty claim: (1) Return to the authorised dealer where you purchased the battery. (2) Bring the battery, your original receipt, and your vehicle registration card. (3) The dealer will inspect the battery and submit a claim to Aeson Power on your behalf. (4) Approved claims receive a free replacement battery. For batteries purchased online, contact us directly at <a href="mailto:info@aesonpower.com.ph" style={{ color: 'var(--accent)' }}>info@aesonpower.com.ph</a>.</p>
  },
  {
    question: 'Can I transfer the warranty to a new vehicle owner?',
    answer: <p>The warranty is linked to the vehicle registration number provided at the time of registration. If you sell your vehicle and the battery remains with it, the new owner may be eligible to continue the warranty coverage for the remainder of the warranty period. Please contact us at <a href="mailto:info@aesonpower.com.ph" style={{ color: 'var(--accent)' }}>info@aesonpower.com.ph</a> to arrange a warranty transfer.</p>
  },
]

const purchasingFaqs: FaqItem[] = [
  {
    question: 'Where can I buy Aeson Power batteries?',
    answer: <p>Aeson Power batteries are available through three channels: (1) <strong>Authorised Dealers</strong> — our dealer network is growing across the Philippines. Find the latest locations on our <Link href="/retail-partners" style={{ color: 'var(--accent)' }}>Retail Partners page</Link>. (2) <strong>Shopee Philippines</strong> — search for &quot;Aeson Power&quot; on the Shopee platform. (3) <strong>Lazada Philippines</strong> — search for &quot;Aeson Power&quot; on Lazada.</p>
  },
  {
    question: 'What is the price range for Aeson Power batteries?',
    answer: <p>Prices start from RM369 for entry-level models such as the NS40 series. Prices vary based on battery size and CCA rating. Visit our authorised dealers or check Shopee/Lazada for current pricing. Fleet and corporate customers may be eligible for volume pricing — contact us at <a href="mailto:info@aesonpower.com.ph" style={{ color: 'var(--accent)' }}>info@aesonpower.com.ph</a> for a quote.</p>
  },
  {
    question: 'Do you offer corporate or fleet pricing?',
    answer: <p>Yes. Aeson Power offers custom battery supply agreements for logistics fleets, e-hailing operators, and corporate customers with multiple vehicles. Benefits include volume pricing, priority roadside assistance, consolidated warranty management, and dedicated account support. Contact us at <a href="mailto:info@aesonpower.com.ph" style={{ color: 'var(--accent)' }}>info@aesonpower.com.ph</a> or call <a href="https://wa.me/639273179178" style={{ color: 'var(--accent)' }}>+63 927 317 9178</a> to discuss your requirements.</p>
  },
]

export default function FaqPage() {
  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2025/07/cta-bg-2-scaled.webp')" }}></div>
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb"><Link href="/">Home</Link><span>/</span><span className="current">Support &amp; FAQs</span></nav>
            <h1>Support &amp; FAQs</h1>
            <p>Everything you need to know about Aeson Power sodium-ion batteries — from purchase to installation to warranty claims.</p>
          </div>
        </div>
      </section>

      {/* QUICK SUPPORT LINKS */}
      <section className="section-sm section-gray">
        <div className="container">
          <div className="grid-4 reveal">
            <Link href="/battery-finder" style={{ display: 'flex', alignItems: 'center', gap: '.875rem', background: 'var(--white)', borderRadius: 'var(--radius)', padding: '1.125rem 1.25rem', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--gray-200)', transition: 'var(--transition)', color: 'var(--text)' }}>
              <i className="fas fa-search" style={{ color: 'var(--accent)', fontSize: '1.25rem', flexShrink: 0 }}></i>
              <span style={{ fontWeight: 600, fontSize: '.9375rem' }}>Battery Finder</span>
            </Link>
            <Link href="/warranty" style={{ display: 'flex', alignItems: 'center', gap: '.875rem', background: 'var(--white)', borderRadius: 'var(--radius)', padding: '1.125rem 1.25rem', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--gray-200)', transition: 'var(--transition)', color: 'var(--text)' }}>
              <i className="fas fa-shield-alt" style={{ color: 'var(--accent)', fontSize: '1.25rem', flexShrink: 0 }}></i>
              <span style={{ fontWeight: 600, fontSize: '.9375rem' }}>Warranty Registration</span>
            </Link>
            <Link href="/retail-partners" style={{ display: 'flex', alignItems: 'center', gap: '.875rem', background: 'var(--white)', borderRadius: 'var(--radius)', padding: '1.125rem 1.25rem', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--gray-200)', transition: 'var(--transition)', color: 'var(--text)' }}>
              <i className="fas fa-store" style={{ color: 'var(--accent)', fontSize: '1.25rem', flexShrink: 0 }}></i>
              <span style={{ fontWeight: 600, fontSize: '.9375rem' }}>Find a Dealer</span>
            </Link>
            <Link href="/roadside-assistance" style={{ display: 'flex', alignItems: 'center', gap: '.875rem', background: 'var(--white)', borderRadius: 'var(--radius)', padding: '1.125rem 1.25rem', boxShadow: 'var(--shadow-sm)', border: '1px solid var(--gray-200)', transition: 'var(--transition)', color: 'var(--text)' }}>
              <i className="fas fa-car-crash" style={{ color: 'var(--accent)', fontSize: '1.25rem', flexShrink: 0 }}></i>
              <span style={{ fontWeight: 600, fontSize: '.9375rem' }}>Roadside Assistance</span>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="section">
        <div className="container">

          {/* GENERAL */}
          <div style={{ maxWidth: '800px', margin: '0 auto' }} className="reveal">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
              <span style={{ width: '32px', height: '32px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><i className="fas fa-battery-full" style={{ color: 'white', fontSize: '.875rem' }}></i></span>
              General Questions
            </h2>
            <FaqList items={generalFaqs} />
          </div>

          <div style={{ height: '2.5rem' }}></div>

          {/* INSTALLATION */}
          <div style={{ maxWidth: '800px', margin: '0 auto' }} className="reveal">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
              <span style={{ width: '32px', height: '32px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><i className="fas fa-tools" style={{ color: 'white', fontSize: '.875rem' }}></i></span>
              Installation &amp; Usage
            </h2>
            <FaqList items={installationFaqs} />
          </div>

          <div style={{ height: '2.5rem' }}></div>

          {/* WARRANTY */}
          <div style={{ maxWidth: '800px', margin: '0 auto' }} className="reveal">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
              <span style={{ width: '32px', height: '32px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><i className="fas fa-shield-alt" style={{ color: 'white', fontSize: '.875rem' }}></i></span>
              Warranty &amp; Claims
            </h2>
            <FaqList items={warrantyFaqs} />
          </div>

          <div style={{ height: '2.5rem' }}></div>

          {/* PURCHASING */}
          <div style={{ maxWidth: '800px', margin: '0 auto' }} className="reveal">
            <h2 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '1.25rem', display: 'flex', alignItems: 'center', gap: '.75rem' }}>
              <span style={{ width: '32px', height: '32px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}><i className="fas fa-shopping-cart" style={{ color: 'white', fontSize: '.875rem' }}></i></span>
              Purchasing
            </h2>
            <FaqList items={purchasingFaqs} />
          </div>

        </div>
      </section>

      {/* STILL NEED HELP */}
      <section className="section section-gray">
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }} className="reveal">
            <span className="section-label">Still Need Help?</span>
            <h2 className="section-title">Contact Our Support Team</h2>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2.5rem' }}>Can&apos;t find what you&apos;re looking for? Our team is happy to help. Reach out through any of the channels below and we&apos;ll get back to you as soon as possible.</p>
            <div className="grid-3" style={{ textAlign: 'center' }}>
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-md)', padding: '2rem', boxShadow: 'var(--shadow)' }}>
                <div style={{ width: '52px', height: '52px', background: 'rgba(232,119,34,.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', color: 'var(--accent)', margin: '0 auto 1rem' }}><i className="fas fa-envelope"></i></div>
                <h4 style={{ marginBottom: '.5rem' }}>Email</h4>
                <a href="mailto:info@aesonpower.com.ph" style={{ color: 'var(--accent)', fontWeight: 600 }}>info@aesonpower.com.ph</a>
                <p style={{ color: 'var(--text-muted)', fontSize: '.875rem', marginTop: '.5rem' }}>Response within 1–2 business days</p>
              </div>
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-md)', padding: '2rem', boxShadow: 'var(--shadow)' }}>
                <div style={{ width: '52px', height: '52px', background: 'rgba(232,119,34,.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', color: 'var(--accent)', margin: '0 auto 1rem' }}><i className="fas fa-phone"></i></div>
                <h4 style={{ marginBottom: '.5rem' }}>Phone</h4>
                <a href="https://wa.me/639273179178" style={{ color: 'var(--accent)', fontWeight: 600 }}>+63 927 317 9178</a>
                <p style={{ color: 'var(--text-muted)', fontSize: '.875rem', marginTop: '.5rem' }}>Mon–Fri, 9am–6pm</p>
              </div>
              <div style={{ background: 'var(--white)', borderRadius: 'var(--radius-md)', padding: '2rem', boxShadow: 'var(--shadow)' }}>
                <div style={{ width: '52px', height: '52px', background: 'rgba(232,119,34,.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', color: 'var(--accent)', margin: '0 auto 1rem' }}><i className="fab fa-facebook-f"></i></div>
                <h4 style={{ marginBottom: '.5rem' }}>Facebook</h4>
                <p style={{ color: 'var(--text-muted)', fontSize: '.875rem' }}><a href="https://www.facebook.com/BetterBatteriesBacolod" target="_blank" rel="noopener" style={{ color: 'var(--accent)' }}>Better Batteries Bacolod</a></p>
              </div>
            </div>
            <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:info@aesonpower.com.ph" className="btn btn-primary"><i className="fas fa-envelope"></i> Send Us an Email</a>
              <Link href="/warranty" className="btn btn-outline-dark"><i className="fas fa-shield-alt"></i> Warranty Registration</Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
