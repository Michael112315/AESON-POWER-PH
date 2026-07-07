'use client'

import Link from 'next/link'
import { useState, useRef } from 'react'

type Tab = 'register' | 'check'

type CheckResult = {
  found: boolean
  warranty?: {
    vehicle_plate: string
    expiry_date: string
    is_active: boolean
    status: string
  }
  message?: string
}

export default function WarrantyPage() {
  const [activeTab, setActiveTab] = useState<Tab>('register')
  const [submitting, setSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const [checking, setChecking] = useState(false)
  const [checkResult, setCheckResult] = useState<CheckResult | null>(null)
  const [plateInput, setPlateInput] = useState('')
  const formRef = useRef<HTMLFormElement>(null)

  async function handleRegister(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitting(true)
    setError('')
    try {
      const formData = new FormData(e.currentTarget)
      const res = await fetch('/api/warranty', { method: 'POST', body: formData })
      const json = await res.json()
      if (res.ok && json.success) {
        setSuccess(true)
        formRef.current?.reset()
        window.scrollTo({ top: 0, behavior: 'smooth' })
      } else {
        setError(json.error || 'Something went wrong. Please try again.')
      }
    } catch {
      setError('Network error. Please try again.')
    } finally {
      setSubmitting(false)
    }
  }

  async function handleCheck(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const plate = plateInput.trim().toUpperCase()
    if (!plate) return
    setChecking(true)
    setCheckResult(null)
    try {
      const res = await fetch(`/api/warranty/check?plate=${encodeURIComponent(plate)}`)
      const json = await res.json()
      setCheckResult(json)
    } catch {
      setCheckResult({ found: false, message: 'Network error. Please try again.' })
    } finally {
      setChecking(false)
    }
  }

  return (
    <>
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2025/07/home-warranty-reg-scaled.webp')" }}></div>
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb"><Link href="/">Home</Link><span>/</span><span className="current">Warranty Registration</span></nav>
            <h1>Warranty Registration</h1>
            <p>Register your Aeson Power battery to activate the Philippines&apos; longest 30-month warranty — or check your existing coverage.</p>
          </div>
        </div>
      </section>

      {/* WARRANTY HIGHLIGHTS */}
      <section className="section-sm" style={{ background: 'var(--primary)' }}>
        <div className="container">
          <div className="stats-grid reveal">
            <div className="stat-item">
              <div className="stat-number">30</div>
              <div className="stat-label">Month Coverage</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">#1</div>
              <div className="stat-label">Longest in Market</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><i className="fas fa-bolt" style={{ fontSize: '2rem' }}></i></div>
              <div className="stat-label">Fast Registration</div>
            </div>
            <div className="stat-item">
              <div className="stat-number"><i className="fas fa-shield-alt" style={{ fontSize: '2rem' }}></i></div>
              <div className="stat-label">Full Protection</div>
            </div>
          </div>
        </div>
      </section>

      {/* TABS */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '740px', margin: '0 auto' }} className="reveal">

            <div className="tabs">
              <button className={`tab-btn${activeTab === 'register' ? ' active' : ''}`} onClick={() => setActiveTab('register')}><i className="fas fa-plus-circle"></i> Register Warranty</button>
              <button className={`tab-btn${activeTab === 'check' ? ' active' : ''}`} onClick={() => setActiveTab('check')}><i className="fas fa-search"></i> Check Warranty</button>
            </div>

            {/* REGISTER TAB */}
            {activeTab === 'register' && (
              <div>
                <div className="alert alert-info" style={{ marginBottom: '1.5rem' }}>
                  <i className="fas fa-info-circle" style={{ fontSize: '1.1rem', marginTop: '2px', flexShrink: 0 }}></i>
                  <span>Please have your battery serial number and proof of purchase ready before registering. Aeson Power reserves the right to assess vehicle type based on submitted images.</span>
                </div>

                {success && (
                  <div className="alert alert-success" style={{ marginBottom: '1.5rem' }}>
                    <i className="fas fa-check-circle" style={{ fontSize: '1.25rem', marginTop: '1px', flexShrink: 0 }}></i>
                    <div><strong>Warranty Registered Successfully!</strong><br />Your warranty has been submitted. You will receive a confirmation email within 1–2 business days. Keep your receipt for future reference.</div>
                  </div>
                )}

                {error && (
                  <div className="alert alert-error" style={{ marginBottom: '1.5rem' }}>
                    <i className="fas fa-exclamation-circle" style={{ fontSize: '1.1rem', marginTop: '2px', flexShrink: 0 }}></i>
                    <span>{error}</span>
                  </div>
                )}

                <form ref={formRef} onSubmit={handleRegister} noValidate>
                  <h3 style={{ fontSize: '1.125rem', marginBottom: '1.25rem', paddingBottom: '.75rem', borderBottom: '1px solid var(--gray-200)' }}>Battery Information</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="battery-model">Battery Model <span style={{ color: 'var(--accent)' }}>*</span></label>
                      <select id="battery-model" name="battery_model" className="form-control" required>
                        <option value="">Select battery model</option>
                        <option>NA-40B20L (NS40)</option>
                        <option>NA-NS50L (55D23L/NS50)</option>
                        <option>NA-60B24L (NS60)</option>
                        <option>NA-NS70L (NS70)</option>
                        <option>H5/L2-400L (DIN55L)</option>
                        <option>D31L (95D31L/NX120-7L)</option>
                        <option>M42L</option>
                        <option>Q85L-SS (Q85)</option>
                        <option>S95L-SS (S95)</option>
                      </select>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="serial-number">Serial Number <span style={{ color: 'var(--accent)' }}>*</span></label>
                      <input type="text" id="serial-number" name="serial_number" className="form-control" placeholder="e.g. AP2025-XXXXXXXX" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="purchase-date">Purchase Date <span style={{ color: 'var(--accent)' }}>*</span></label>
                      <input type="date" id="purchase-date" name="purchase_date" className="form-control" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="dealer-name">Dealer / Shop Name <span style={{ color: 'var(--accent)' }}>*</span></label>
                      <input type="text" id="dealer-name" name="dealer_name" className="form-control" placeholder="Where did you buy it?" required />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.125rem', margin: '1.75rem 0 1.25rem', paddingBottom: '.75rem', borderBottom: '1px solid var(--gray-200)' }}>Vehicle Information</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="vehicle-plate">Vehicle Plate Number <span style={{ color: 'var(--accent)' }}>*</span></label>
                      <input type="text" id="vehicle-plate" name="vehicle_plate" className="form-control" placeholder="e.g. WXX 1234" required />
                      <p className="form-hint">Enter your vehicle registration number exactly as shown on your road tax.</p>
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="vehicle-make">Car Make <span style={{ color: 'var(--accent)' }}>*</span></label>
                      <input type="text" id="vehicle-make" name="vehicle_make" className="form-control" placeholder="e.g. Perodua" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="vehicle-model">Car Model <span style={{ color: 'var(--accent)' }}>*</span></label>
                      <input type="text" id="vehicle-model" name="vehicle_model" className="form-control" placeholder="e.g. Myvi" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="vehicle-year">Year <span style={{ color: 'var(--accent)' }}>*</span></label>
                      <input type="number" id="vehicle-year" name="vehicle_year" className="form-control" placeholder="e.g. 2022" min={1990} max={2030} required />
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.125rem', margin: '1.75rem 0 1.25rem', paddingBottom: '.75rem', borderBottom: '1px solid var(--gray-200)' }}>Owner Information</h3>
                  <div className="form-grid">
                    <div className="form-group">
                      <label className="form-label" htmlFor="owner-name">Full Name <span style={{ color: 'var(--accent)' }}>*</span></label>
                      <input type="text" id="owner-name" name="owner_name" className="form-control" placeholder="As per IC / Passport" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label" htmlFor="owner-phone">Phone Number <span style={{ color: 'var(--accent)' }}>*</span></label>
                      <input type="tel" id="owner-phone" name="owner_phone" className="form-control" placeholder="e.g. 012-345 6789" required />
                    </div>
                    <div className="form-group" style={{ gridColumn: '1/-1' }}>
                      <label className="form-label" htmlFor="owner-email">Email Address <span style={{ color: 'var(--accent)' }}>*</span></label>
                      <input type="email" id="owner-email" name="owner_email" className="form-control" placeholder="your@email.com" required />
                      <p className="form-hint">Your warranty confirmation will be sent to this email address.</p>
                    </div>
                  </div>

                  

                  <div className="form-group" style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', marginTop: '.5rem' }}>
                    <input type="checkbox" id="terms-agree" name="terms_agree" style={{ marginTop: '3px', width: '16px', height: '16px', accentColor: 'var(--accent)', flexShrink: 0 }} required />
                    <label htmlFor="terms-agree" style={{ fontSize: '.9375rem', color: 'var(--text-muted)', cursor: 'pointer' }}>I confirm that all information provided is accurate and I agree to the <a href="#" style={{ color: 'var(--accent)' }}>Warranty Terms &amp; Conditions</a>. I understand that Aeson Power reserves the right to assess and determine the vehicle type based on submitted images.</label>
                  </div>

                  <button type="submit" className="btn btn-primary btn-lg w-full" style={{ justifyContent: 'center', marginTop: '1.5rem' }} disabled={submitting}>
                    <i className="fas fa-shield-alt"></i> {submitting ? 'Registering…' : 'Register My Warranty'}
                  </button>
                </form>
              </div>
            )}

            {/* CHECK TAB */}
            {activeTab === 'check' && (
              <div>
                <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Enter your vehicle registration number to check the status of your Aeson Power warranty.</p>

                <form onSubmit={handleCheck} noValidate>
                  <div className="form-group">
                    <label className="form-label" htmlFor="plate-number">Vehicle Plate Number</label>
                    <div style={{ display: 'flex', gap: '.75rem' }}>
                      <input
                        type="text"
                        id="plate-number"
                        className="form-control"
                        placeholder="e.g. WXX 1234"
                        style={{ flex: 1 }}
                        required
                        value={plateInput}
                        onChange={e => setPlateInput(e.target.value)}
                      />
                      <button type="submit" className="btn btn-primary" style={{ flexShrink: 0 }} disabled={checking}><i className="fas fa-search"></i> {checking ? 'Checking…' : 'Check'}</button>
                    </div>
                    <p className="form-hint">Enter the vehicle registration number linked to your warranty registration.</p>
                  </div>
                </form>

                {checkResult && (
                  <div style={{ marginTop: '1rem' }}>
                    {checkResult.found && checkResult.warranty ? (
                      <div className={`alert ${checkResult.warranty.is_active ? 'alert-success' : 'alert-error'}`}>
                        <i className={`fas ${checkResult.warranty.is_active ? 'fa-check-circle' : 'fa-times-circle'}`} style={{ fontSize: '1.25rem', marginTop: '1px', flexShrink: 0 }}></i>
                        <div>
                          <strong>Warranty {checkResult.warranty.is_active ? 'Active' : 'Expired'}</strong><br />
                          <strong>Plate:</strong> {checkResult.warranty.vehicle_plate}<br />
                          <strong>Expires:</strong> {new Date(checkResult.warranty.expiry_date).toLocaleDateString()}<br />
                          <strong>Status:</strong> {checkResult.warranty.status}
                        </div>
                      </div>
                    ) : (
                      <div className="alert alert-info">
                        <i className="fas fa-info-circle" style={{ marginTop: '2px', fontSize: '1.1rem' }}></i>
                        <div>
                          <strong>Warranty Check — {plateInput.trim().toUpperCase()}</strong><br />
                          {checkResult.message || 'No warranty registration found for this plate number. For real-time warranty status, please contact us at '}
                          {!checkResult.message && (
                            <><a href="mailto:info@aesonpower.com.ph" style={{ color: 'inherit', textDecoration: 'underline' }}>info@aesonpower.com.ph</a> or call <a href="https://wa.me/639273179178" style={{ color: 'inherit', textDecoration: 'underline' }}>+63 927 317 9178</a> with your vehicle registration and proof of purchase.</>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                )}

                <div style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', padding: '1.5rem', marginTop: '2rem' }}>
                  <h4 style={{ marginBottom: '.75rem', fontSize: '1rem' }}>Need more help?</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '.9375rem', marginBottom: '1rem' }}>For detailed warranty enquiries, replacement requests, or claims, please contact our support team directly.</p>
                  <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                    <a href="mailto:info@aesonpower.com.ph" className="btn btn-outline-dark btn-sm"><i className="fas fa-envelope"></i> Email Support</a>
                    <a href="https://wa.me/639273179178" className="btn btn-outline-dark btn-sm"><i className="fas fa-phone"></i> +63 927 317 9178</a>
                  </div>
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

      {/* WARRANTY TERMS SUMMARY */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header center reveal">
            <span className="section-label">What&apos;s Covered</span>
            <h2 className="section-title">Warranty Terms Summary</h2>
            <p className="section-subtitle">Your 30-month warranty covers manufacturing defects and premature failure under normal operating conditions.</p>
          </div>
          <div className="grid-3 reveal">
            <div className="feature-card">
              <div className="feature-icon"><i className="fas fa-check-circle"></i></div>
              <h3>What Is Covered</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.625rem', marginTop: '.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '.625rem', fontSize: '.9375rem', color: 'var(--text-muted)' }}><i className="fas fa-check" style={{ color: '#16a34a', marginTop: '3px', flexShrink: 0 }}></i> Manufacturing defects</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '.625rem', fontSize: '.9375rem', color: 'var(--text-muted)' }}><i className="fas fa-check" style={{ color: '#16a34a', marginTop: '3px', flexShrink: 0 }}></i> Premature capacity loss</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '.625rem', fontSize: '.9375rem', color: 'var(--text-muted)' }}><i className="fas fa-check" style={{ color: '#16a34a', marginTop: '3px', flexShrink: 0 }}></i> Terminal defects</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '.625rem', fontSize: '.9375rem', color: 'var(--text-muted)' }}><i className="fas fa-check" style={{ color: '#16a34a', marginTop: '3px', flexShrink: 0 }}></i> Internal short circuit</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '.625rem', fontSize: '.9375rem', color: 'var(--text-muted)' }}><i className="fas fa-check" style={{ color: '#16a34a', marginTop: '3px', flexShrink: 0 }}></i> Casing defects (factory origin)</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(220,38,38,.1)', color: '#dc2626' }}><i className="fas fa-times-circle"></i></div>
              <h3>What Is Not Covered</h3>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.625rem', marginTop: '.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '.625rem', fontSize: '.9375rem', color: 'var(--text-muted)' }}><i className="fas fa-times" style={{ color: '#dc2626', marginTop: '3px', flexShrink: 0 }}></i> Physical damage or misuse</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '.625rem', fontSize: '.9375rem', color: 'var(--text-muted)' }}><i className="fas fa-times" style={{ color: '#dc2626', marginTop: '3px', flexShrink: 0 }}></i> Incorrect installation</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '.625rem', fontSize: '.9375rem', color: 'var(--text-muted)' }}><i className="fas fa-times" style={{ color: '#dc2626', marginTop: '3px', flexShrink: 0 }}></i> Overcharging by faulty alternator</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '.625rem', fontSize: '.9375rem', color: 'var(--text-muted)' }}><i className="fas fa-times" style={{ color: '#dc2626', marginTop: '3px', flexShrink: 0 }}></i> Normal wear and ageing</li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '.625rem', fontSize: '.9375rem', color: 'var(--text-muted)' }}><i className="fas fa-times" style={{ color: '#dc2626', marginTop: '3px', flexShrink: 0 }}></i> Unregistered batteries</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon" style={{ background: 'rgba(21,101,192,.1)', color: '#1565C0' }}><i className="fas fa-file-alt"></i></div>
              <h3>How to Make a Claim</h3>
              <ol style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '.75rem', marginTop: '.75rem' }}>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', fontSize: '.9375rem', color: 'var(--text-muted)' }}>
                  <span style={{ minWidth: '22px', height: '22px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.75rem', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>1</span>
                  Contact the dealer where you purchased the battery
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', fontSize: '.9375rem', color: 'var(--text-muted)' }}>
                  <span style={{ minWidth: '22px', height: '22px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.75rem', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>2</span>
                  Bring your battery, receipt, and vehicle registration
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', fontSize: '.9375rem', color: 'var(--text-muted)' }}>
                  <span style={{ minWidth: '22px', height: '22px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.75rem', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>3</span>
                  Dealer submits claim to Aeson Power for assessment
                </li>
                <li style={{ display: 'flex', alignItems: 'flex-start', gap: '.75rem', fontSize: '.9375rem', color: 'var(--text-muted)' }}>
                  <span style={{ minWidth: '22px', height: '22px', background: 'var(--primary)', color: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '.75rem', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>4</span>
                  Approved claims receive free replacement battery
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
