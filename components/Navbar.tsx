'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [supportOpen, setSupportOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (href: string) =>
    pathname === href ? 'active' : ''

  return (
    <header className="site-header">
      <nav className="navbar container">
        <Link href="/" className="nav-logo">
          <Image
            src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/logo.webp"
            alt="Aeson Power"
            width={160}
            height={40}
            style={{ height: 40, width: 'auto' }}
            priority
          />
        </Link>

        <button
          className="nav-toggle"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
          <span />
        </button>

        <ul className={`nav-menu${menuOpen ? ' open' : ''}`}>
          <li><Link href="/" className={isActive('/')}>Home</Link></li>
          <li><Link href="/about" className={isActive('/about')}>About Us</Link></li>

          <li className={`nav-dropdown${productsOpen ? ' open' : ''}`}>
            <a
              href="#"
              className="nav-dropdown-toggle"
              onClick={e => { e.preventDefault(); setProductsOpen(!productsOpen) }}
            >
              Products <i className="fas fa-chevron-down" />
            </a>
            <ul className="nav-dropdown-menu">
              <li><Link href="/products" onClick={() => setMenuOpen(false)}>All Products</Link></li>
              <li><Link href="/battery-finder" onClick={() => setMenuOpen(false)}>Battery Finder</Link></li>
              <li><Link href="/technology" onClick={() => setMenuOpen(false)}>Technology Overview</Link></li>
            </ul>
          </li>

          <li><Link href="/retail-partners" className={isActive('/retail-partners')}>Retail Partners</Link></li>
          <li><Link href="/news" className={isActive('/news')}>News</Link></li>

          <li className={`nav-dropdown${supportOpen ? ' open' : ''}`}>
            <a
              href="#"
              className="nav-dropdown-toggle"
              onClick={e => { e.preventDefault(); setSupportOpen(!supportOpen) }}
            >
              Support <i className="fas fa-chevron-down" />
            </a>
            <ul className="nav-dropdown-menu">
              <li><Link href="/warranty" onClick={() => setMenuOpen(false)}>Warranty Registration</Link></li>
              <li><Link href="/faq" onClick={() => setMenuOpen(false)}>Support &amp; FAQs</Link></li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  )
}
