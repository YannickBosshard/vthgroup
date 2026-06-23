'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { ArrowDownRight } from 'lucide-react'

export default function HeroSection() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100)
    return () => clearTimeout(t)
  }, [])

  return (
    <section
      className="relative h-screen min-h-screen bg-charcoal overflow-hidden"
      aria-label="Hero"
    >
      {/* Background — architectural texture */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1800&q=80&auto=format&fit=crop')`,
        }}
        aria-hidden="true"
      />
      {/* Gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(to bottom, rgba(13,13,13,0.3) 0%, rgba(13,13,13,0.5) 40%, rgba(13,13,13,0.9) 80%, rgba(13,13,13,1) 100%)',
        }}
        aria-hidden="true"
      />

      {/* Gold line — top */}
      <div
        className="absolute top-0 left-0 right-0 h-px bg-bronze"
        style={{
          transformOrigin: 'left',
          transform: loaded ? 'scaleX(1)' : 'scaleX(0)',
          transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s',
        }}
        aria-hidden="true"
      />

      {/* Content */}
      <div className="absolute inset-0 z-10 flex flex-col justify-end overflow-hidden" style={{ paddingTop: '80px' }}>
      <div className="container-vth pb-10 lg:pb-28">

        {/* Headline */}
        <h1
          className="font-serif font-light text-cream-50 mb-4 lg:mb-10 leading-none"
          style={{
            fontSize: 'clamp(2.2rem, 5vw, 7rem)',
            letterSpacing: '-0.03em',
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(32px)',
            transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1) 0.55s',
          }}
        >
          Building long-term
          <br />
          <em className="font-light" style={{ color: '#C9A96E' }}>value.</em>
        </h1>

        {/* Label */}
        <div
          className="mb-8"
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'all 0.7s cubic-bezier(0.16, 1, 0.3, 1) 0.65s',
          }}
        >
          <span className="section-label text-bronze">Independent Swiss Investment Group</span>
        </div>

        {/* Sub-headline + CTA */}
        <div
          className="flex flex-col lg:flex-row lg:items-end gap-4 lg:gap-20"
          style={{
            opacity: loaded ? 1 : 0,
            transform: loaded ? 'none' : 'translateY(20px)',
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.75s',
          }}
        >
          <p className="font-sans text-stone text-base leading-relaxed max-w-md font-light">
            VTH Group combines entrepreneurial thinking, strategic capital, and deep networks
            to create sustainable value across Real Estate, Industrials, Mining, Infrastructure, and Healthcare.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/about" className="btn-link text-cream-50/80 border-cream-50/40 hover:text-cream-50 hover:border-cream-50">
              Discover VTH Group
              <ArrowDownRight size={14} className="shrink-0" />
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="hidden lg:grid mt-20 pt-10 border-t border-stone-dark/30 grid-cols-4 gap-0"
          style={{
            opacity: loaded ? 1 : 0,
            transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 1s',
          }}
        >
          {[
            { num: '5', label: 'Core Sectors' },
            { num: '30+', label: 'Specialists' },
            { num: '6', label: 'Leadership Team' },
            { num: 'CHF', label: 'Swiss-Based' },
          ].map((stat, i) => (
            <div key={i} className="lg:pr-10 lg:border-r lg:border-stone-dark/30 last:border-r-0 last:pr-0">
              <div className="font-serif text-4xl font-light text-cream-50" style={{ letterSpacing: '-0.02em' }}>
                {stat.num}
              </div>
              <div className="font-sans text-[10px] tracking-[0.2em] uppercase text-stone mt-1">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 right-8 lg:right-20 flex flex-col items-center gap-3"
        style={{
          opacity: loaded ? 1 : 0,
          transition: 'opacity 1s ease 1.3s',
        }}
        aria-hidden="true"
      >
        <div
          className="w-px h-16 bg-stone-dark/50"
          style={{ animation: 'scrollLine 2s ease-in-out infinite' }}
        />
        <span className="font-sans text-[9px] tracking-[0.25em] uppercase text-stone-dark [writing-mode:vertical-rl]">
          Scroll
        </span>
      </div>

      <style>{`
        @keyframes scrollLine {
          0%, 100% { transform: scaleY(1); opacity: 0.5; }
          50% { transform: scaleY(0.5); opacity: 1; }
        }
      `}</style>
    </section>
  )
}
