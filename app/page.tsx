import type { Metadata } from 'next'
import HeroSection from '@/components/home/HeroSection'
import AboutSection from '@/components/home/AboutSection'
import SectorsSection from '@/components/home/SectorsSection'
import PhilosophySection from '@/components/home/PhilosophySection'
import PortfolioSection from '@/components/home/PortfolioSection'
import LeadershipSection from '@/components/home/LeadershipSection'
import CtaSection from '@/components/home/CtaSection'

export const metadata: Metadata = {
  title: 'VTH Group — Swiss Investment & Holding Group',
  alternates: { canonical: 'https://www.vthgroup.com' },
}

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SectorsSection />
      <PhilosophySection />
      <PortfolioSection />
      <LeadershipSection />
      <CtaSection />
    </>
  )
}
