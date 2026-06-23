'use client'

import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { useReveal } from '@/lib/useReveal'

export default function AboutSection() {
  const { ref: headRef, visible: headVisible } = useReveal()
  const { ref: textRef, visible: textVisible } = useReveal()

  return (
    <section className="py-section bg-cream-50" aria-labelledby="about-heading">
      <div className="container-vth">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          {/* Left — label + number */}
          <div className="lg:col-span-2">
            <span className="section-number">01</span>
            <div className="mt-3 w-8 h-px bg-bronze" />
          </div>

          {/* Center — main content */}
          <div className="lg:col-span-6">
            <p className="section-label text-bronze mb-6">About VTH Group</p>
            <h2
              id="about-heading"
              ref={headRef as React.RefObject<HTMLHeadingElement>}
              className="font-serif font-light leading-tight mb-10"
              style={{
                fontSize: 'clamp(2.2rem, 4vw, 3.8rem)',
                letterSpacing: '-0.02em',
                opacity: headVisible ? 1 : 0,
                transform: headVisible ? 'none' : 'translateY(24px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              An independent group
              <br />
              built on conviction,
              <br />
              capital, and character.
            </h2>

            <div
              ref={textRef as React.RefObject<HTMLDivElement>}
              className="space-y-5"
              style={{
                opacity: textVisible ? 1 : 0,
                transform: textVisible ? 'none' : 'translateY(20px)',
                transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.15s',
              }}
            >
              <p className="font-sans text-stone-dark text-base leading-relaxed font-light">
                VTH Group is an independent Swiss investment and holding company. We deploy capital alongside entrepreneurial talent to build, grow, and steward businesses and assets across carefully selected sectors.
              </p>
              <p className="font-sans text-stone-dark text-base leading-relaxed font-light">
                We are not passive allocators. We are active partners — bringing capital, expertise, networks, and operational judgment to every engagement. Our team of specialists operates as co-investors and entrepreneurs within the group.
              </p>
              <p className="font-sans text-stone-dark text-base leading-relaxed font-light">
                Based in Switzerland and active internationally, VTH Group combines Swiss investment discipline with a global perspective and a long-term ownership mindset.
              </p>
            </div>

            <div className="mt-10">
              <Link href="/about" className="btn-link">
                Our story <ArrowUpRight size={13} />
              </Link>
            </div>
          </div>

          {/* Right — values */}
          <div className="lg:col-span-4">
            <div className="space-y-0 border-t border-stone-light/40">
              {[
                { title: 'Entrepreneurial', desc: 'We think and act as founders, not just financiers.' },
                { title: 'Long-term', desc: 'Our horizon is measured in decades, not quarters.' },
                { title: 'Swiss', desc: 'Discipline, discretion, and an uncompromising standard of quality.' },
                { title: 'Selective', desc: 'We pursue fewer opportunities with deeper conviction.' },
              ].map((v, i) => (
                <div key={i} className="py-6 border-b border-stone-light/40">
                  <div className="flex items-start gap-4">
                    <span className="font-sans text-[9px] tracking-[0.2em] text-stone mt-1 shrink-0 w-6">{String(i + 1).padStart(2, '0')}</span>
                    <div>
                      <h3 className="font-serif text-lg font-medium text-charcoal mb-1">{v.title}</h3>
                      <p className="font-sans text-sm text-stone leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
