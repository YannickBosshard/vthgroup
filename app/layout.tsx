import type { Metadata } from 'next'
import { Inter, Cormorant_Garamond } from 'next/font/google'
import './globals.css'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import StructuredData from '@/components/StructuredData'
import DisclaimerGate from '@/components/DisclaimerGate'
import CookieBanner from '@/components/CookieBanner'
import { LanguageProvider } from '@/lib/i18n/LanguageContext'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  variable: '--font-cormorant',
  display: 'swap',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
})

export const metadata: Metadata = {
  title: {
    default: 'VTH Group — Swiss Investment & Holding Group',
    template: '%s | VTH Group',
  },
  description:
    'VTH Group is an independent Swiss investment and holding group building long-term value through entrepreneurship, strategic capital, and deep sector conviction across Real Estate, Industrials, Mining, Infrastructure, and Healthcare.',
  keywords: [
    'Swiss investment group',
    'Swiss holding company',
    'private equity Switzerland',
    'strategic investments',
    'real estate investments Switzerland',
    'infrastructure investments',
    'healthcare investments',
    'industrials investments',
    'VTH Group',
    'Swiss family office',
  ],
  authors: [{ name: 'VTH Group' }],
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.vthgroup.com',
    siteName: 'VTH Group',
    title: 'VTH Group — Swiss Investment & Holding Group',
    description:
      'Building long-term value through entrepreneurship, strategic capital, and deep sector conviction.',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'VTH Group — Swiss Investment & Holding Group',
    description:
      'Building long-term value through entrepreneurship, strategic capital, and deep sector conviction.',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${cormorant.variable}`}>
      <body>
        <LanguageProvider>
          <DisclaimerGate />
          <CookieBanner />
          <StructuredData />
          <Navigation />
          <main>{children}</main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  )
}
