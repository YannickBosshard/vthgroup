'use client'

import { useReveal } from '@/lib/useReveal'

const principles = [
  {
    n: '01',
    title: 'People before assets',
    body: 'Every investment begins with a judgment about people. We back founders, operators, and specialists whose conviction and capability we trust.',
  },
  {
    n: '02',
    title: 'Off-market access',
    body: 'The best opportunities rarely surface publicly. Our deal flow is relationship-driven — built over decades across sectors and geographies.',
  },
  {
    n: '03',
    title: 'Active partnership',
    body: 'We work alongside management teams, not above them. Our value is operational, strategic, and relational — not just financial.',
  },
  {
    n: '04',
    title: 'Patient capital',
    body: 'We are not constrained by fund cycles or short-term return pressure. We think in generations and structure our capital accordingly.',
  },
]

export default function PhilosophySection() {
  const { ref, visible } = useReveal(0.1)

  return (
    <section className="py-section bg-cream-100" aria-labelledby="philosophy-heading">
      <div className="container-vth">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8">
          {/* Left */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 lg:self-start">
            <span className="section-number">03</span>
            <div className="mt-3 w-8 h-px bg-bronze mb-6" />
            <p className="section-label text-bronze mb-6">Investment Philosophy</p>
            <h2
              id="philosophy-heading"
              className="font-serif font-light text-charcoal"
              style={{ fontSize: 'clamp(2rem, 3vw, 3rem)', letterSpacing: '-0.02em', lineHeight: 1.1 }}
            >
              Capital that
              <br />
              thinks long.
            </h2>
            <div className="mt-12 border-l-2 border-bronze pl-6">
              <blockquote className="font-serif text-xl font-light italic text-charcoal/80 leading-relaxed">
                &ldquo;We don&rsquo;t buy companies. We buy people and strategies, and back them with capital.&rdquo;
              </blockquote>
              <p className="font-sans text-[10px] tracking-[0.15em] uppercase text-stone mt-3">— Stephen A. Schwarzman</p>
            </div>
          </div>

          {/* Right — principles */}
          <div
            ref={ref as React.RefObject<HTMLDivElement>}
            className="lg:col-span-7 lg:col-start-6 space-y-0"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'none' : 'translateY(30px)',
              transition: 'all 0.9s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          >
            {principles.map((p, i) => (
              <div
                key={p.n}
                className="flex gap-8 py-10 border-b border-stone-light/40 group"
                style={{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }}
              >
                <span className="font-sans text-[10px] tracking-[0.2em] text-stone mt-1 shrink-0 pt-1">{p.n}</span>
                <div>
                  <h3 className="font-serif text-xl font-medium text-charcoal mb-3 group-hover:text-bronze transition-colors duration-200">
                    {p.title}
                  </h3>
                  <p className="font-sans text-stone-dark text-sm leading-relaxed">{p.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
