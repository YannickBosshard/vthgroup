'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'

const sectors = [
  {
    id: 'real-estate',
    number: '01',
    name: 'Real Estate',
    tagline: 'Value-add and opportunistic investments across Europe.',
    description:
      'We target value-add and opportunistic real estate projects with above-average growth potential. Our approach combines deep local relationships, off-market deal access, and hands-on asset management to create durable value.',
    focus: ['Residential development', 'Commercial properties', 'Mixed-use projects', 'Eastern European markets'],
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'industrials',
    number: '02',
    name: 'Industrials & Construction',
    tagline: 'Backing owner-operated businesses with enduring industrial foundations.',
    description:
      'We partner with family-owned industrial and construction businesses at inflection points — succession, expansion, or professionalisation. Patient capital and genuine industry respect make the difference where others cannot.',
    focus: ['Family business succession', 'Construction services', 'Building materials & supply', 'Industrial services'],
    image: 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'mining',
    number: '03',
    name: 'Mining & Quarrying',
    tagline: 'Essential raw materials at the foundation of physical infrastructure.',
    description:
      'Gravel, stone, and construction aggregates are foundational to every infrastructure programme and housing development. We manage extraction activities in-house, retaining full operational control across our portfolio sites.',
    focus: ['Aggregate extraction', 'In-house operations', 'Infrastructure-linked demand', 'Site consolidation'],
    image: 'https://images.unsplash.com/photo-1757488933744-83f652e1f806?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'infrastructure',
    number: '04',
    name: 'Infrastructure',
    tagline: 'Long-duration assets with predictable cash flows.',
    description:
      'Infrastructure investments offer the combination of stable long-term returns, inflation protection, and essential service characteristics we seek. We focus on mid-market infrastructure where our network creates proprietary deal access.',
    focus: ['Digital infrastructure', 'Transport & logistics', 'Social infrastructure', 'Utilities'],
    image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80&auto=format&fit=crop',
  },
  {
    id: 'healthcare',
    number: '05',
    name: 'Healthcare',
    tagline: 'Backing innovation at the intersection of medicine and enterprise.',
    description:
      'Our team has direct operational experience in healthcare — from founding health centers to leading medical services groups. We bring strategic and operational depth alongside capital to healthcare businesses with genuine scale potential.',
    focus: ['Health centers & clinics', 'Medical technology', 'Healthcare services', 'Digital health'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=800&q=80&auto=format&fit=crop',
  },
]

export default function SectorsSection() {
  const [active, setActive] = useState(0)

  return (
    <section className="bg-charcoal py-section" aria-labelledby="sectors-heading">
      <div className="container-vth">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-4 mb-4">
              <span className="section-number text-stone-dark">02</span>
              <div className="w-8 h-px bg-bronze" />
            </div>
            <p className="section-label text-bronze mb-4">Core Sectors</p>
            <h2
              id="sectors-heading"
              className="font-serif font-light text-cream-50"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Five sectors.
              <br />
              One philosophy.
            </h2>
          </div>
          <Link href="/sectors" className="btn-link text-bronze border-bronze self-start lg:self-auto">
            View all sectors <ArrowUpRight size={13} />
          </Link>
        </div>

        {/* Sector tabs */}
        <div className="flex gap-0 border-b border-stone-dark/40 mb-12 overflow-x-auto">
          {sectors.map((s, i) => (
            <button
              key={s.id}
              onClick={() => setActive(i)}
              className={`flex-shrink-0 font-sans text-[11px] tracking-[0.18em] uppercase px-6 py-4 transition-all duration-300 border-b-2 ${
                active === i
                  ? 'text-cream-50 border-bronze'
                  : 'text-stone-dark border-transparent hover:text-stone hover:border-stone-dark/50'
              }`}
            >
              {s.name}
            </button>
          ))}
        </div>

        {/* Sector content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Text */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <div className="flex items-baseline gap-4 mb-8">
                <span className="font-serif text-8xl font-light text-stone-dark/30 leading-none">
                  {sectors[active].number}
                </span>
                <div>
                  <h3 className="font-serif text-3xl font-light text-cream-50 mb-2">{sectors[active].name}</h3>
                  <p className="font-sans text-sm text-bronze">{sectors[active].tagline}</p>
                </div>
              </div>
              <p className="font-sans text-stone text-sm leading-relaxed mb-8">
                {sectors[active].description}
              </p>
              <div className="space-y-2">
                <p className="section-label text-stone-dark">Focus Areas</p>
                <ul className="mt-4 space-y-2">
                  {sectors[active].focus.map((f) => (
                    <li key={f} className="flex items-center gap-3 font-sans text-sm text-stone">
                      <span className="w-1 h-1 bg-bronze rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div className="mt-10">
              <Link href={`/sectors#${sectors[active].id}`} className="btn-link text-bronze border-bronze">
                Learn more <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          {/* Image */}
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={sectors[active].image}
                alt={sectors[active].name}
                className="w-full h-full object-cover transition-all duration-700 scale-105"
                style={{ filter: 'brightness(0.7) saturate(0.8)' }}
              />
              <div
                className="absolute inset-0"
                style={{ background: 'linear-gradient(to right, rgba(13,13,13,0.4) 0%, transparent 60%)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
