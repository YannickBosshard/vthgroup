'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const leaders = [
  {
    name: 'Christian Meier',
    photo: '/team/christian-meier.png',
    role: 'Co-Founder & Business Leader',
    background: 'Founder & former CEO, iNovitas AG · Co-founder, MediPark',
    focus: 'Corporate strategy · Financing · Partner relations',
  },
  {
    name: 'Yannick Bosshard',
    photo: '/team/yannick-bosshard.png',
    role: 'Investment & Asset Management',
    background: 'UBS · Lakeward Management · allswiss',
    focus: 'Investment structuring · PE analysis · Real estate',
  },
  {
    name: 'Bruno Tringaniello',
    photo: '/team/bruno-tringaniello.png',
    role: 'Tax & Legal',
    background: 'Founder, awr AG · CEO, Medipool Group',
    focus: 'Tax structuring · Corporate transactions · Healthcare',
  },
  {
    name: 'Stefano Augstburger',
    photo: '/team/stefano-augstburger.jpg',
    role: 'Partner Relations & Networking',
    background: 'UBS · Founder & Co-CEO, YASAI (exited 2024)',
    focus: 'Institutional clients · Capital markets · Co-investment engagement',
  },
  {
    name: 'Tobias Baur',
    photo: '/team/tobias-baur.png',
    role: 'Partner & Director',
    background: 'Strategic investment · Real estate · Business development',
    focus: 'Value creation · Investment strategy · Operations',
  },
  {
    name: 'Damjan Gojkovic',
    photo: '/team/damjan-gojkovic.jpg',
    role: 'Investment Manager',
    background: 'UBS · Structured finance',
    focus: 'Deal sourcing · Due diligence · Financial analysis',
  },
]

export default function LeadershipSection() {
  return (
    <section className="py-section bg-charcoal-50" aria-labelledby="leadership-heading">
      <div className="container-vth">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="section-number text-stone-dark/60">05</span>
              <div className="w-8 h-px bg-bronze" />
            </div>
            <p className="section-label text-bronze mb-4">Leadership</p>
            <h2
              id="leadership-heading"
              className="font-serif font-light text-cream-50"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              The team that
              <br />
              drives VTH Group.
            </h2>
          </div>
          <Link href="/leadership" className="btn-link text-bronze border-bronze self-start lg:self-auto">
            Full team <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Leaders grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-stone-dark/20">
          {leaders.map((l, i) => (
            <div
              key={i}
              className="bg-charcoal-50 p-8 border-b border-stone-dark/20 group hover:bg-charcoal transition-colors duration-300"
            >
              {/* Photo */}
              <div className="w-12 h-12 overflow-hidden mb-6">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={l.photo} alt={l.name} className="w-full h-full object-cover object-top grayscale" />
              </div>
              <h3 className="font-serif text-xl font-medium text-cream-50 mb-1 group-hover:text-bronze transition-colors duration-200">
                {l.name}
              </h3>
              <p className="font-sans text-xs tracking-[0.12em] uppercase text-bronze mb-5">{l.role}</p>
              <div className="space-y-2">
                <p className="font-sans text-xs text-stone leading-relaxed">{l.background}</p>
                <p className="font-sans text-xs text-stone-dark leading-relaxed">{l.focus}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
