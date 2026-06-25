'use client'

import Link from 'next/link'
import { useState } from 'react'

// ── Battery spec constants ─────────────────────────────────────────────────
type BatterySpec = { model: string; series: string; cca: string; wt: string; img: string }

const NS40: BatterySpec = { model: 'NA-40B20L',  series: 'NS40',             cca: '350–450 A', wt: '4.0 ± 0.5 kg', img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS40L.242-scaled-1.webp' }
const NS50: BatterySpec = { model: 'NA-NS50L',   series: '55D23L / NS50',    cca: '450–600 A', wt: '4.5 ± 0.5 kg', img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/08/55D23L%E4%BB%B0-scaled-1.webp' }
const NS60: BatterySpec = { model: 'NA-60B24L',  series: 'NS60',             cca: '370–500 A', wt: '4.2 ± 0.5 kg', img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/08/NS60L.244.webp' }
const NS70: BatterySpec = { model: 'NA-NS70L',   series: 'NS70',             cca: '450–600 A', wt: '5.0 ± 0.5 kg', img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/08/55D26L%E4%BB%B0-scaled-1.webp' }
const DIN55: BatterySpec = { model: 'H5/L2-400L', series: 'DIN55L',         cca: '450–600 A', wt: '4.5 ± 0.5 kg', img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/12/L2-400L.226-scaled-1-e1767061886724.webp' }
const D31: BatterySpec  = { model: 'D31L',        series: '95D31L / NX120-7L', cca: '650–800 A', wt: '6.4 ± 0.5 kg', img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/12/D31L-scaled-1.webp' }
const M42: BatterySpec  = { model: 'M42L',        series: 'M42L',            cca: '520–600 A', wt: '5.1 ± 0.5 kg', img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/12/m42l-no-bg.png' }
const Q85: BatterySpec  = { model: 'Q85L-SS',     series: 'Q85',             cca: '650–800 A', wt: '6.0 ± 0.5 kg', img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/08/Q85L%E4%BB%B0-scaled-1.webp' }
const S95: BatterySpec  = { model: 'S95L-SS',     series: 'S95',             cca: '720–850 A', wt: '7.0 ± 0.5 kg', img: 'https://cms.aesonpower.com.my/wp-content/uploads/2025/08/S95L%E4%BB%B0-scaled-1.webp' }

// ── Vehicle database ───────────────────────────────────────────────────────
type ModelEntry = { yearFrom: number; yearTo: number | null; spec: BatterySpec; ev?: boolean }
type VehicleDB  = Record<string, Record<string, ModelEntry[]>>

const vehicleDB: VehicleDB = {
  Toyota: {
    'Wigo':          [{ yearFrom: 2013, yearTo: null, spec: NS40  }],
    'Vios':          [{ yearFrom: 2013, yearTo: 2022, spec: NS40  }, { yearFrom: 2023, yearTo: null, spec: DIN55 }],
    'Yaris':         [{ yearFrom: 2006, yearTo: null, spec: NS40  }],
    'Rush':          [{ yearFrom: 2018, yearTo: null, spec: NS50  }],
    'Avanza':        [{ yearFrom: 2004, yearTo: 2021, spec: NS50  }, { yearFrom: 2022, yearTo: null, spec: NS50  }],
    'Veloz':         [{ yearFrom: 2022, yearTo: null, spec: NS50  }],
    'Innova':        [{ yearFrom: 2005, yearTo: 2022, spec: NS70  }, { yearFrom: 2023, yearTo: null, spec: D31   }],
    'Fortuner':      [{ yearFrom: 2005, yearTo: null, spec: D31   }],
    'Hilux':         [{ yearFrom: 2005, yearTo: null, spec: D31   }],
    'HiAce':         [{ yearFrom: 2005, yearTo: null, spec: D31   }],
    'Corolla Cross': [{ yearFrom: 2020, yearTo: null, spec: Q85   }],
    'RAV4':          [{ yearFrom: 2013, yearTo: 2018, spec: NS50  }, { yearFrom: 2019, yearTo: null, spec: DIN55 }],
    'Alphard':       [{ yearFrom: 2015, yearTo: null, spec: Q85   }],
    'Land Cruiser':  [{ yearFrom: 2016, yearTo: null, spec: S95   }],
    'Camry':         [{ yearFrom: 2012, yearTo: null, spec: DIN55 }],
  },
  Honda: {
    'Brio':     [{ yearFrom: 2012, yearTo: null, spec: NS40  }],
    'Jazz':     [{ yearFrom: 2008, yearTo: null, spec: NS40  }],
    'City':     [{ yearFrom: 2014, yearTo: 2020, spec: NS50  }, { yearFrom: 2021, yearTo: null, spec: DIN55 }],
    'BR-V':     [{ yearFrom: 2016, yearTo: null, spec: NS50  }],
    'HR-V':     [{ yearFrom: 2015, yearTo: null, spec: NS50  }],
    'Civic':    [{ yearFrom: 2016, yearTo: null, spec: DIN55 }],
    // CR-V: ICE + CR-V e:PHEV (2024+) — both use DIN55, no ev flag
    'CR-V':     [{ yearFrom: 2017, yearTo: null, spec: DIN55 }],
    'Accord':   [{ yearFrom: 2013, yearTo: null, spec: DIN55 }],
    'Pilot':    [{ yearFrom: 2016, yearTo: null, spec: DIN55 }],
  },
  Mitsubishi: {
    'Mirage':         [{ yearFrom: 2013, yearTo: null, spec: NS40  }],
    'Mirage G4':      [{ yearFrom: 2014, yearTo: null, spec: NS40  }],
    'Xpander':        [{ yearFrom: 2018, yearTo: null, spec: NS50  }],
    'Xpander Cross':  [{ yearFrom: 2020, yearTo: null, spec: NS50  }],
    // Eclipse Cross: ICE + PHEV variant (2023+) — both use DIN55, no ev flag
    'Eclipse Cross':  [{ yearFrom: 2018, yearTo: null, spec: DIN55 }],
    // Outlander: ICE + Outlander PHEV (2023+) — both use DIN55, no ev flag
    'Outlander':      [{ yearFrom: 2015, yearTo: null, spec: DIN55 }],
    'Montero Sport':  [{ yearFrom: 2009, yearTo: null, spec: D31   }],
    'Strada':         [{ yearFrom: 2007, yearTo: null, spec: D31   }],
    'L300':           [{ yearFrom: 2000, yearTo: null, spec: NS60  }],
  },
  Nissan: {
    'Almera':  [{ yearFrom: 2013, yearTo: null, spec: NS40  }],
    'Juke':    [{ yearFrom: 2011, yearTo: null, spec: NS50  }],
    'Terra':   [{ yearFrom: 2018, yearTo: null, spec: D31   }],
    'Navara':  [{ yearFrom: 2015, yearTo: null, spec: D31   }],
    'Urvan':   [{ yearFrom: 2012, yearTo: null, spec: D31   }],
    'Patrol':  [{ yearFrom: 2010, yearTo: null, spec: D31   }],
  },
  Ford: {
    'EcoSport': [{ yearFrom: 2014, yearTo: null, spec: NS50  }],
    'Territory': [{ yearFrom: 2021, yearTo: null, spec: DIN55 }],
    'Ranger':   [{ yearFrom: 2012, yearTo: null, spec: D31   }],
    'Everest':  [{ yearFrom: 2015, yearTo: null, spec: D31   }],
    'Explorer': [{ yearFrom: 2016, yearTo: null, spec: DIN55 }],
  },
  Hyundai: {
    'Reina':     [{ yearFrom: 2019, yearTo: null, spec: NS40  }],
    'Accent':    [{ yearFrom: 2018, yearTo: null, spec: DIN55 }],
    // Tucson: ICE + PHEV variant (2022+) — both use DIN55, no ev flag
    'Tucson':    [{ yearFrom: 2016, yearTo: null, spec: DIN55 }],
    // Santa Fe: ICE + PHEV variant — both use DIN55, no ev flag
    'Santa Fe':  [{ yearFrom: 2018, yearTo: null, spec: DIN55 }],
    'Starex':    [{ yearFrom: 2007, yearTo: 2021, spec: NS70  }],
    'Staria':    [{ yearFrom: 2022, yearTo: null, spec: DIN55 }],
    // Kona: ICE + Kona Electric (BEV) — split into separate entries
    'Kona':      [{ yearFrom: 2019, yearTo: null, spec: DIN55 }],       // ICE / mild-hybrid
    'Kona Electric': [{ yearFrom: 2019, yearTo: null, spec: DIN55, ev: true }], // BEV
    'Creta':     [{ yearFrom: 2023, yearTo: null, spec: DIN55 }],
    // Pure BEVs
    'IONIQ 5':   [{ yearFrom: 2022, yearTo: null, spec: DIN55, ev: true }],
    'IONIQ 6':   [{ yearFrom: 2023, yearTo: null, spec: DIN55, ev: true }],
  },
  Kia: {
    'Picanto':  [{ yearFrom: 2012, yearTo: null, spec: NS40  }],
    'Soluto':   [{ yearFrom: 2019, yearTo: null, spec: NS40  }],
    'Stonic':   [{ yearFrom: 2020, yearTo: null, spec: DIN55 }],
    'Seltos':   [{ yearFrom: 2021, yearTo: null, spec: DIN55 }],
    // Sportage: ICE + PHEV variant (2023+) — both use DIN55, no ev flag
    'Sportage': [{ yearFrom: 2016, yearTo: null, spec: DIN55 }],
    // Sorento: ICE + PHEV variant — both use DIN55, no ev flag
    'Sorento':  [{ yearFrom: 2015, yearTo: null, spec: DIN55 }],
    'Carnival': [{ yearFrom: 2022, yearTo: null, spec: DIN55 }],
    // Pure BEVs
    'EV6':      [{ yearFrom: 2022, yearTo: null, spec: DIN55, ev: true }],
    'EV9':      [{ yearFrom: 2024, yearTo: null, spec: DIN55, ev: true }],
  },
  Suzuki: {
    'Alto':     [{ yearFrom: 2019, yearTo: null, spec: NS40  }],
    'S-Presso': [{ yearFrom: 2020, yearTo: null, spec: NS40  }],
    'Celerio':  [{ yearFrom: 2015, yearTo: null, spec: NS40  }],
    'Swift':    [{ yearFrom: 2018, yearTo: null, spec: NS40  }],
    'Dzire':    [{ yearFrom: 2018, yearTo: null, spec: NS50  }],
    'Ertiga':   [{ yearFrom: 2013, yearTo: null, spec: NS50  }],
    'XL7':      [{ yearFrom: 2020, yearTo: null, spec: NS50  }],
    'Vitara':   [{ yearFrom: 2016, yearTo: null, spec: NS50  }],
    'Jimny':    [{ yearFrom: 2019, yearTo: null, spec: NS40  }],
  },
  Isuzu: {
    'D-Max':    [{ yearFrom: 2012, yearTo: null, spec: D31 }],
    'mu-X':     [{ yearFrom: 2014, yearTo: null, spec: D31 }],
    'Crosswind': [{ yearFrom: 2000, yearTo: 2020, spec: D31 }],
  },
  Mazda: {
    'Mazda 2': [{ yearFrom: 2015, yearTo: null, spec: NS50  }],
    'Mazda 3': [{ yearFrom: 2019, yearTo: null, spec: DIN55 }],
    'CX-3':    [{ yearFrom: 2015, yearTo: null, spec: NS50  }],
    'CX-5':    [{ yearFrom: 2017, yearTo: null, spec: DIN55 }],
    'CX-8':    [{ yearFrom: 2019, yearTo: null, spec: DIN55 }],
    'CX-30':   [{ yearFrom: 2020, yearTo: null, spec: DIN55 }],
    'Mazda 6': [{ yearFrom: 2014, yearTo: null, spec: DIN55 }],
  },
  Subaru: {
    'Outback':     [{ yearFrom: 2015, yearTo: null, spec: DIN55 }],
    'Forester':    [{ yearFrom: 2013, yearTo: null, spec: DIN55 }],
    'XV / Crosstrek': [{ yearFrom: 2012, yearTo: null, spec: DIN55 }],
    'WRX':         [{ yearFrom: 2015, yearTo: null, spec: NS50  }],
    'BRZ':         [{ yearFrom: 2013, yearTo: null, spec: NS50  }],
    'Legacy':      [{ yearFrom: 2010, yearTo: null, spec: DIN55 }],
  },
  Volkswagen: {
    'Santana':  [{ yearFrom: 2020, yearTo: null, spec: DIN55 }],
    'Golf':     [{ yearFrom: 2015, yearTo: null, spec: DIN55 }],
    'Tiguan':   [{ yearFrom: 2017, yearTo: null, spec: DIN55 }],
    'Lamando':  [{ yearFrom: 2016, yearTo: null, spec: DIN55 }],
    'T-Cross':  [{ yearFrom: 2020, yearTo: null, spec: DIN55 }],
    'Passat':   [{ yearFrom: 2015, yearTo: null, spec: DIN55 }],
  },
  BMW: {
    '1 Series': [{ yearFrom: 2012, yearTo: null, spec: M42 }],
    '2 Series': [{ yearFrom: 2015, yearTo: null, spec: M42 }],
    '3 Series': [{ yearFrom: 2012, yearTo: null, spec: M42 }],
    '5 Series': [{ yearFrom: 2012, yearTo: null, spec: Q85 }],
    '7 Series': [{ yearFrom: 2016, yearTo: null, spec: S95 }],
    'X1':       [{ yearFrom: 2016, yearTo: null, spec: M42 }],
    'X3':       [{ yearFrom: 2012, yearTo: null, spec: Q85 }],
    'X5':       [{ yearFrom: 2014, yearTo: null, spec: S95 }],
  },
  'Mercedes-Benz': {
    'A-Class': [{ yearFrom: 2013, yearTo: null, spec: M42 }],
    'C-Class': [{ yearFrom: 2014, yearTo: null, spec: Q85 }],
    'E-Class': [{ yearFrom: 2016, yearTo: null, spec: S95 }],
    'GLA':     [{ yearFrom: 2014, yearTo: null, spec: M42 }],
    'GLC':     [{ yearFrom: 2016, yearTo: null, spec: Q85 }],
    'GLE':     [{ yearFrom: 2016, yearTo: null, spec: S95 }],
  },
  Geely: {
    'Coolray':  [{ yearFrom: 2019, yearTo: null, spec: DIN55 }],
    'Okavango': [{ yearFrom: 2022, yearTo: null, spec: DIN55 }],
    'Azkarra':  [{ yearFrom: 2021, yearTo: null, spec: DIN55 }],
    'Emgrand':  [{ yearFrom: 2021, yearTo: null, spec: DIN55 }],
  },
  MG: {
    'ZS':       [{ yearFrom: 2019, yearTo: null, spec: DIN55            }], // ICE / mild-hybrid
    'ZS EV':    [{ yearFrom: 2020, yearTo: null, spec: DIN55, ev: true  }], // BEV
    'MG 4':     [{ yearFrom: 2023, yearTo: null, spec: DIN55, ev: true  }], // BEV
    // HS: ICE + HS PHEV variant — both use DIN55, no ev flag
    'HS':       [{ yearFrom: 2020, yearTo: null, spec: DIN55 }],
    'RX5':      [{ yearFrom: 2018, yearTo: null, spec: DIN55 }],
    'VS':       [{ yearFrom: 2022, yearTo: null, spec: DIN55 }],
    '5':        [{ yearFrom: 2021, yearTo: null, spec: DIN55 }],
  },
  Chevrolet: {
    'Colorado':    [{ yearFrom: 2013, yearTo: null, spec: D31   }],
    'Trailblazer': [{ yearFrom: 2013, yearTo: null, spec: D31   }],
    'Spin':        [{ yearFrom: 2013, yearTo: 2019, spec: NS50  }],
  },
  // BYD — mix of BEV (ev:true) and PHEV (no tag)
  BYD: {
    'Dolphin':   [{ yearFrom: 2023, yearTo: null, spec: DIN55, ev: true  }],
    'Atto 3':    [{ yearFrom: 2023, yearTo: null, spec: DIN55, ev: true  }],
    'Seal':      [{ yearFrom: 2023, yearTo: null, spec: DIN55, ev: true  }],
    'Sealion 6': [{ yearFrom: 2024, yearTo: null, spec: DIN55            }], // PHEV
    'M6':        [{ yearFrom: 2024, yearTo: null, spec: DIN55, ev: true  }],
    'Han':       [{ yearFrom: 2024, yearTo: null, spec: DIN55, ev: true  }],
    'Tang':      [{ yearFrom: 2024, yearTo: null, spec: DIN55            }], // PHEV variant in PH
  },
  VinFast: {
    'VF 3':  [{ yearFrom: 2024, yearTo: null, spec: NS40,  ev: true }],
    'VF 5':  [{ yearFrom: 2023, yearTo: null, spec: DIN55, ev: true }],
    'VF 6':  [{ yearFrom: 2024, yearTo: null, spec: DIN55, ev: true }],
    'VF 7':  [{ yearFrom: 2024, yearTo: null, spec: DIN55, ev: true }],
    'VF 8':  [{ yearFrom: 2023, yearTo: null, spec: DIN55, ev: true }],
    'VF 9':  [{ yearFrom: 2023, yearTo: null, spec: DIN55, ev: true }],
    'VF e34':[{ yearFrom: 2022, yearTo: null, spec: DIN55, ev: true }],
  },
  BAIC: {
    'BJ40':  [{ yearFrom: 2020, yearTo: null, spec: DIN55 }],
    'BJ80':  [{ yearFrom: 2020, yearTo: null, spec: DIN55 }],
    'MZ45':  [{ yearFrom: 2022, yearTo: null, spec: DIN55 }],
  },
  Chery: {
    'Tiggo 5x': [{ yearFrom: 2020, yearTo: null, spec: DIN55 }],
    'Tiggo 7':  [{ yearFrom: 2020, yearTo: null, spec: DIN55 }],
    'Tiggo 8':  [{ yearFrom: 2020, yearTo: null, spec: DIN55 }],
  },
}

// ── Helpers ────────────────────────────────────────────────────────────────
const CURRENT_YEAR = new Date().getFullYear()

function getYearsForModel(entries: ModelEntry[]): number[] {
  const years = new Set<number>()
  for (const e of entries) {
    const to = e.yearTo ?? CURRENT_YEAR
    for (let y = e.yearFrom; y <= to; y++) years.add(y)
  }
  return Array.from(years).sort((a, b) => b - a) // newest first
}

function getSpecForYear(entries: ModelEntry[], year: number): (BatterySpec & { ev?: boolean }) | null {
  for (const e of entries) {
    const to = e.yearTo ?? CURRENT_YEAR
    if (year >= e.yearFrom && year <= to) return { ...e.spec, ev: e.ev }
  }
  return null
}

// ── Page ───────────────────────────────────────────────────────────────────
export default function BatteryFinderPage() {
  const [selectedMake,  setSelectedMake]  = useState('')
  const [selectedModel, setSelectedModel] = useState('')
  const [selectedYear,  setSelectedYear]  = useState('')
  const [result, setResult] = useState<(BatterySpec & { make: string; carModel: string; year: string; ev?: boolean }) | null>(null)
  const [noResult, setNoResult] = useState(false)

  const makes  = Object.keys(vehicleDB).sort()
  const models = selectedMake ? Object.keys(vehicleDB[selectedMake] ?? {}).sort() : []
  const years  = (selectedMake && selectedModel)
    ? getYearsForModel(vehicleDB[selectedMake]?.[selectedModel] ?? [])
    : []

  function handleMakeChange(make: string) {
    setSelectedMake(make); setSelectedModel(''); setSelectedYear(''); setResult(null); setNoResult(false)
  }
  function handleModelChange(model: string) {
    setSelectedModel(model); setSelectedYear(''); setResult(null); setNoResult(false)
  }
  function handleYearChange(year: string) {
    setSelectedYear(year); setResult(null); setNoResult(false)
  }

  function handleFind() {
    if (!selectedMake || !selectedModel || !selectedYear) { setNoResult(true); setResult(null); return }
    const entries = vehicleDB[selectedMake]?.[selectedModel] ?? []
    const spec = getSpecForYear(entries, parseInt(selectedYear, 10))
    if (spec) { setResult({ ...spec, make: selectedMake, carModel: selectedModel, year: selectedYear }); setNoResult(false) }
    else { setResult(null); setNoResult(true) }
  }

  return (
    <>
      {/* PAGE HERO */}
      <section className="page-hero">
        <div className="page-hero-bg" style={{ backgroundImage: "url('https://cms.aesonpower.com.my/wp-content/uploads/2025/08/hero-image-29-aug.webp')" }}></div>
        <div className="container">
          <div className="page-hero-content">
            <nav className="breadcrumb"><Link href="/">Home</Link><span>/</span><span className="current">Battery Finder</span></nav>
            <h1>Battery Finder</h1>
            <p>Select your vehicle make, model, and year to find the right Aeson Power sodium-ion battery.</p>
          </div>
        </div>
      </section>

      {/* FINDER TOOL */}
      <section className="section">
        <div className="container">
          <div className="finder-form reveal">
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <span className="section-label">Find Your Battery</span>
              <h2 style={{ fontSize: '1.5rem', marginBottom: '.5rem' }}>Select Your Vehicle</h2>
              <p className="text-muted">Choose your car brand, model, and year to get the exact battery match.</p>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem', marginBottom: '1.25rem' }} className="finder-grid">
              {/* Make */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="car-make">
                  <i className="fas fa-car" style={{ color: 'var(--accent)', marginRight: '.375rem' }}></i>Car Brand
                </label>
                <select id="car-make" className="form-control" value={selectedMake} onChange={e => handleMakeChange(e.target.value)}>
                  <option value="">Select Brand</option>
                  {makes.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>

              {/* Model */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="car-model">
                  <i className="fas fa-list" style={{ color: 'var(--accent)', marginRight: '.375rem' }}></i>Car Model
                </label>
                <select id="car-model" className="form-control" value={selectedModel} onChange={e => handleModelChange(e.target.value)} disabled={!selectedMake}>
                  <option value="">Select Model</option>
                  {models.map(m => <option key={m} value={m}>{m}</option>)}
                </select>
              </div>

              {/* Year */}
              <div className="form-group" style={{ marginBottom: 0 }}>
                <label className="form-label" htmlFor="car-year">
                  <i className="fas fa-calendar-alt" style={{ color: 'var(--accent)', marginRight: '.375rem' }}></i>Year
                </label>
                <select id="car-year" className="form-control" value={selectedYear} onChange={e => handleYearChange(e.target.value)} disabled={!selectedModel}>
                  <option value="">Select Year</option>
                  {years.map(y => <option key={y} value={y}>{y}</option>)}
                </select>
              </div>
            </div>

            <button onClick={handleFind} className="btn btn-primary w-full" style={{ justifyContent: 'center', padding: '1rem' }}>
              <i className="fas fa-search"></i> Find Compatible Battery
            </button>

            {/* NO RESULT */}
            {noResult && !result && (
              <p className="text-muted text-center" style={{ padding: '2rem 0' }}>Please select a brand, model, and year to find the right battery.</p>
            )}

            {/* RESULT */}
            {result && (
              <div style={{ marginTop: '1.5rem' }}>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '.375rem' }}>
                  Recommended battery for <span style={{ color: 'var(--accent)' }}>{result.year} {result.make} {result.carModel}</span>
                </h3>
                <p className="text-muted" style={{ fontSize: '.9375rem' }}>
                  {result.ev
                    ? 'This is the recommended 12V auxiliary battery replacement for your electric vehicle.'
                    : 'Based on your vehicle, we recommend the following Aeson Power sodium-ion battery.'}
                </p>
                <div className="finder-result-card recommended" style={{ marginTop: '1rem' }}>
                  <div className="finder-result-img">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={result.img} alt={result.model} />
                  </div>
                  <div style={{ flex: 1 }}>
                    <span className="product-badge badge-napulse">Aeson Power</span>
                    <h2 style={{ fontSize: '1.75rem', fontWeight: 900, marginBottom: '.25rem' }}>{result.model}</h2>
                    <p className="text-muted" style={{ marginBottom: '1.25rem' }}>{result.series} Series</p>
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: '.625rem', marginBottom: '1.5rem' }}>
                      <div style={{ background: 'var(--gray-50)', borderRadius: '8px', padding: '.75rem' }}>
                        <div style={{ fontSize: '.75rem', color: 'var(--text-muted)', marginBottom: '.25rem' }}>CCA Rating</div>
                        <div><strong style={{ color: 'var(--text)' }}>{result.cca}</strong></div>
                      </div>
                      <div style={{ background: 'var(--gray-50)', borderRadius: '8px', padding: '.75rem' }}>
                        <div style={{ fontSize: '.75rem', color: 'var(--text-muted)', marginBottom: '.25rem' }}>Weight</div>
                        <div><strong style={{ color: 'var(--text)' }}>{result.wt}</strong></div>
                      </div>
                      <div style={{ background: 'var(--gray-50)', borderRadius: '8px', padding: '.75rem' }}>
                        <div style={{ fontSize: '.75rem', color: 'var(--text-muted)', marginBottom: '.25rem' }}>Charge Voltage</div>
                        <div><strong style={{ color: 'var(--text)' }}>14.4 – 14.8 V</strong></div>
                      </div>
                      <div style={{ background: 'var(--gray-50)', borderRadius: '8px', padding: '.75rem' }}>
                        <div style={{ fontSize: '.75rem', color: 'var(--text-muted)', marginBottom: '.25rem' }}>Terminal Type</div>
                        <div><strong style={{ color: 'var(--text)' }}>SAE AP</strong></div>
                      </div>
                      <div style={{ background: 'var(--gray-50)', borderRadius: '8px', padding: '.75rem' }}>
                        <div style={{ fontSize: '.75rem', color: 'var(--text-muted)', marginBottom: '.25rem' }}>Warranty</div>
                        <div><span style={{ color: 'var(--accent)', fontWeight: 700 }}>30 Months</span></div>
                      </div>
                      <div style={{ background: 'var(--gray-50)', borderRadius: '8px', padding: '.75rem' }}>
                        <div style={{ fontSize: '.75rem', color: 'var(--text-muted)', marginBottom: '.25rem' }}>Cycle Life</div>
                        <div><strong style={{ color: 'var(--text)' }}>3,000+ cycles</strong></div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '.75rem', flexWrap: 'wrap' }}>
                      <Link href="/products" className="btn btn-primary">View Full Specs</Link>
                      <Link href="/retail-partners" className="btn btn-outline-dark">Find a Dealer</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}

            <p style={{ fontSize: '.8125rem', color: 'var(--text-muted)', marginTop: '1.25rem', lineHeight: 1.7, background: 'var(--gray-50)', borderRadius: 'var(--radius)', padding: '.875rem 1rem', borderLeft: '3px solid var(--accent)' }}>
              <i className="fas fa-info-circle" style={{ color: 'var(--accent)', marginRight: '.35rem' }}></i>
              <strong>*</strong> Always confirm the correct battery size with our Technical Help Department via{' '}
              <a href="https://www.facebook.com/BetterBatteriesBacolod" target="_blank" rel="noopener" style={{ color: 'var(--accent)', fontWeight: 600 }}>Facebook (Better Batteries Bacolod)</a>
              {' '}or on Viber/WhatsApp{' '}
              <a href="https://wa.me/639273179178" style={{ color: 'var(--accent)', fontWeight: 600 }}>+63 927 317 9178</a>.
            </p>
          </div>

          {/* HOW IT WORKS */}
          <div style={{ marginTop: '4rem' }} className="reveal">
            <div className="section-header center">
              <span className="section-label">How It Works</span>
              <h2 className="section-title">3 Simple Steps</h2>
            </div>
            <div className="grid-3">
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ width: '56px', height: '56px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.25rem', fontWeight: 900, color: 'white' }}>1</div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '.5rem' }}>Select Your Vehicle</h3>
                <p className="text-muted">Pick your car brand, model, and year from our Philippines-focused vehicle database.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ width: '56px', height: '56px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.25rem', fontWeight: 900, color: 'white' }}>2</div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '.5rem' }}>Get Your Match</h3>
                <p className="text-muted">We instantly identify the best-fit Aeson Power battery for your specific year and model.</p>
              </div>
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <div style={{ width: '56px', height: '56px', background: 'var(--accent)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem', fontSize: '1.25rem', fontWeight: 900, color: 'white' }}>3</div>
                <h3 style={{ fontSize: '1.125rem', marginBottom: '.5rem' }}>Buy from a Dealer</h3>
                <p className="text-muted">Locate the nearest authorised dealer or purchase online via Shopee or Lazada.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ALL MODELS QUICK REF */}
      <section className="section section-gray">
        <div className="container">
          <div className="section-header center reveal">
            <span className="section-label">Quick Reference</span>
            <h2 className="section-title">All 9 Battery Models</h2>
            <p className="section-subtitle">Not sure which series fits your vehicle? Browse by CCA range below.</p>
          </div>
          <div style={{ overflowX: 'auto' }} className="reveal">
            <table className="comparison-table">
              <thead>
                <tr>
                  <th>Model</th>
                  <th>Designation</th>
                  <th>CCA Range</th>
                  <th>Weight</th>
                  <th>Typical Vehicles</th>
                </tr>
              </thead>
              <tbody>
                <tr><td><strong>NA-40B20L</strong></td><td>NS40</td><td>350–450 A</td><td>4.0 ± 0.5 kg</td><td>Wigo, Vios (–2022), Brio, Jazz, Mirage, Almera, Picanto</td></tr>
                <tr><td><strong>NA-NS50L</strong></td><td>55D23L / NS50</td><td>450–600 A</td><td>4.5 ± 0.5 kg</td><td>Rush, Avanza, Xpander, City (–2020), HR-V, Ertiga</td></tr>
                <tr><td><strong>NA-60B24L</strong></td><td>NS60</td><td>370–500 A</td><td>4.2 ± 0.5 kg</td><td>Mitsubishi L300, older mid-size sedans</td></tr>
                <tr><td><strong>NA-NS70L</strong></td><td>NS70</td><td>450–600 A</td><td>5.0 ± 0.5 kg</td><td>Innova (–2022), Starex, older MPVs</td></tr>
                <tr style={{ background: 'rgba(232,119,34,.05)' }}><td><strong>H5/L2-400L</strong> ⭐</td><td>DIN55L</td><td>450–600 A</td><td>4.5 ± 0.5 kg</td><td>Civic, CR-V, Vios (2023+), Fortuner (gas), Tucson, CX-5</td></tr>
                <tr><td><strong>D31L</strong></td><td>95D31L / NX120-7L</td><td>650–800 A</td><td>6.4 ± 0.5 kg</td><td>Hilux, Fortuner, Innova (2023+), Ranger, Navara, D-Max</td></tr>
                <tr><td><strong>M42L</strong></td><td>M42L</td><td>520–600 A</td><td>5.1 ± 0.5 kg</td><td>BMW 1/2/3 Series, X1, Mercedes A-Class, GLA</td></tr>
                <tr><td><strong>Q85L-SS</strong></td><td>Q85</td><td>650–800 A</td><td>6.0 ± 0.5 kg</td><td>Corolla Cross Hybrid, Alphard, BMW 3/5 Series, Mercedes C-Class</td></tr>
                <tr><td><strong>S95L-SS</strong></td><td>S95</td><td>720–850 A</td><td>7.0 ± 0.5 kg</td><td>Land Cruiser, BMW X5/7 Series, Mercedes E/GLE Class</td></tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NEED HELP */}
      <section className="section">
        <div className="container">
          <div className="grid-split grid-split-stretch reveal">
            <div style={{ background: 'var(--primary)', borderRadius: 'var(--radius-md)', padding: '2.5rem', color: 'white' }}>
              <div style={{ width: '52px', height: '52px', background: 'rgba(255,255,255,.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', marginBottom: '1.25rem' }}><i className="fas fa-question-circle" style={{ color: 'var(--accent)' }}></i></div>
              <h3 style={{ color: 'white', marginBottom: '.75rem' }}>Can&apos;t Find Your Vehicle?</h3>
              <p style={{ color: 'rgba(255,255,255,.7)', marginBottom: '1.5rem' }}>Our database covers the most popular vehicles in the Philippines. If your car isn&apos;t listed, our team can help identify the right battery for you.</p>
              <a href="mailto:info@aesonpower.com.ph" className="btn btn-outline">Contact Us <i className="fas fa-arrow-right"></i></a>
            </div>
            <div style={{ background: 'var(--gray-50)', borderRadius: 'var(--radius-md)', padding: '2.5rem' }}>
              <div style={{ width: '52px', height: '52px', background: 'rgba(232,119,34,.1)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '1.25rem', marginBottom: '1.25rem' }}><i className="fas fa-store" style={{ color: 'var(--accent)' }}></i></div>
              <h3 style={{ marginBottom: '.75rem' }}>Buy from an Authorised Dealer</h3>
              <p style={{ color: 'var(--text-muted)', marginBottom: '1.5rem' }}>Our authorised dealer network is growing across the Philippines. Get in touch and we&apos;ll help you find the nearest location for purchase, installation, and warranty registration.</p>
              <Link href="/retail-partners" className="btn btn-primary">Find Nearest Dealer <i className="fas fa-arrow-right"></i></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
