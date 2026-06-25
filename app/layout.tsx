import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import BackToTop from '@/components/BackToTop'
import ScrollReveal from '@/components/ScrollReveal'
import { Analytics } from '@vercel/analytics/next'

export const metadata: Metadata = {
  title: { default: 'Aeson Power — Sodium-Ion Car Batteries Philippines', template: '%s | Aeson Power' },
  description: 'Aeson Power delivers next-generation sodium-ion car batteries — 60% lighter, 3,000+ cycle life, and the Philippines\' longest 30-month warranty.',
  icons: { icon: '/favicon.jpg' },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css" />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <BackToTop />
        <ScrollReveal />
        <Analytics />
      </body>
    </html>
  )
}
