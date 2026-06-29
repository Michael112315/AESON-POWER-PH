import Link from 'next/link'
import Image from 'next/image'

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Image
              src="https://cms.aesonpower.com.my/wp-content/uploads/2025/07/logo.webp"
              alt="Aeson Power"
              width={144}
              height={36}
              style={{ height: 36, width: 'auto', marginBottom: '1rem' }}
            />
            <p>Redesigning the Road Ahead, Powered By Sodium-ion. The Philippines&apos; next-generation automotive battery solution.</p>
            <div className="social-links">
              <a href="https://www.facebook.com/BetterBatteriesBacolod" target="_blank" rel="noopener" aria-label="Facebook">
                <i className="fab fa-facebook-f" />
              </a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram" /></a>
              <a href="#" aria-label="TikTok"><i className="fab fa-tiktok" /></a>
            </div>
          </div>

          <div className="footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/products">Products</Link></li>
              <li><Link href="/battery-finder">Battery Finder</Link></li>
              <li><Link href="/technology">Technology</Link></li>
              <li><Link href="/news">News</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Support</h4>
            <ul>
              <li><Link href="/warranty">Warranty Registration</Link></li>
              <li><Link href="/retail-partners">Retail Partners</Link></li>
              <li><Link href="/roadside-assistance">Roadside Assistance</Link></li>
              <li><Link href="/faq">Support &amp; FAQs</Link></li>
            </ul>
          </div>

          <div className="footer-col">
            <h4>Contact Us</h4>
            <div className="footer-contact-info">
              <div className="footer-contact-row">
                <i className="fab fa-facebook-f" />
                <a href="https://www.facebook.com/BetterBatteriesBacolod" target="_blank" rel="noopener">
                  Better Batteries Bacolod
                </a>
              </div>
              <div className="footer-contact-row">
                <i className="fab fa-whatsapp" />
                <span>
                  <a href="https://wa.me/639273179178">+63 927 317 9178</a>{' '}
                  <span style={{ color: 'var(--text-light)', fontSize: '.8rem' }}>(Viber / WhatsApp)</span>
                </span>
              </div>
              <div className="footer-contact-row">
                <i className="fas fa-envelope" />
                <a href="mailto:sales@aeson.com.ph">sales@aeson.com.ph</a>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2026 Aeson Power Philippines. All rights reserved.</p>
          <div className="footer-bottom-links">
            <a href="#">Terms of Use</a>
            <a href="#">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
