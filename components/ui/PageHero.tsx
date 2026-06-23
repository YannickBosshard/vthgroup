interface PageHeroProps {
  label: string
  title: string
  subtitle?: string
  dark?: boolean
}

export default function PageHero({ label, title, subtitle, dark = false }: PageHeroProps) {
  return (
    <section
      className={`pt-40 pb-20 lg:pt-48 lg:pb-28 ${dark ? 'bg-charcoal' : 'bg-cream-50'}`}
      aria-label={`${label} page header`}
    >
      <div className="container-vth">
        <div className="max-w-4xl">
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-bronze" />
            <p className="section-label text-bronze">{label}</p>
          </div>
          <h1
            className={`font-serif font-light leading-tight ${dark ? 'text-cream-50' : 'text-charcoal'}`}
            style={{ fontSize: 'clamp(2.8rem, 6vw, 6rem)', letterSpacing: '-0.03em', lineHeight: 0.95 }}
            dangerouslySetInnerHTML={{ __html: title }}
          />
          {subtitle && (
            <p
              className={`font-sans text-base leading-relaxed font-light mt-8 max-w-xl ${
                dark ? 'text-stone' : 'text-stone-dark'
              }`}
            >
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}
