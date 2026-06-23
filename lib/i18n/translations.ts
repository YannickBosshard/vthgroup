export type Locale = 'en' | 'de' | 'ro'

export const locales: Locale[] = ['en', 'de', 'ro']
export const defaultLocale: Locale = 'en'

export const localeNames: Record<Locale, string> = {
  en: 'EN',
  de: 'DE',
  ro: 'RO',
}

export type Translations = typeof en

export const en = {
  nav: {
    about: 'About',
    sectors: 'Sectors',
    portfolio: 'Portfolio',
    leadership: 'Leadership',
    process: 'Process',
    acquisition: 'Acquisition',
    insights: 'Insights',
    contact: 'Contact',
    cta: 'Get in Touch',
  },
  home: {
    hero: {
      headline1: 'Building long-term',
      headline2: 'value.',
      sub: 'VTH Group combines entrepreneurial thinking, strategic capital, and deep networks to create sustainable value across Real Estate, Industrials, Mining, Infrastructure, and Healthcare.',
      cta: 'Discover VTH Group',
      stats: {
        sectors: 'Core Sectors',
        specialists: 'Specialists',
        leadership: 'Leadership',
        swiss: 'Swiss-Based',
      },
    },
    about: {
      label: 'Who we are',
      title: 'An independent Swiss investment and holding group.',
      body1: 'VTH Group was founded on a simple conviction: the best investments are built on deep sector knowledge, trusted relationships, and patient capital — not financial engineering.',
      body2: 'We operate across five core sectors — Real Estate, Industrials & Construction, Mining & Quarrying, Infrastructure, and Healthcare — bringing operational expertise and a long-term ownership mindset to every transaction.',
      link: 'Our Story',
    },
    sectors: {
      label: 'Core Sectors',
      title: 'Where we invest.',
      sub: 'Five sectors chosen for depth, not diversification.',
    },
    philosophy: {
      label: 'Our Philosophy',
      title: 'How we think about capital.',
      quote: 'We don\'t buy companies. We buy people and strategies, and back them with capital.',
      quoteAuthor: '— Stephen A. Schwarzman',
      principles: [
        { title: 'People before assets', desc: 'We invest in operators and entrepreneurs first. The asset is a consequence of the team.' },
        { title: 'Off-market access', desc: 'The best investments are rarely publicly available. Our network surfaces opportunities others never see.' },
        { title: 'Active partnership', desc: 'We are not passive allocators. We contribute expertise, network, and judgment alongside capital.' },
        { title: 'Patient capital', desc: 'We have no short-term exit pressure. We hold assets as long as the thesis remains intact.' },
      ],
    },
    leadership: {
      label: 'Leadership',
      title: 'The people behind VTH Group.',
      link: 'Full Leadership Team',
    },
    insights: {
      label: 'Insights',
      title: 'Perspectives on our markets.',
      link: 'All Insights',
    },
    cta: {
      label: 'Get in Touch',
      title: 'Ready to explore an opportunity?',
      sub: 'Whether you have an asset, a company, or a concept — if there is genuine alignment, we will know quickly.',
      link: 'Contact VTH Group',
    },
  },
  footer: {
    tagline: 'An independent Swiss investment and holding group building long-term value through entrepreneurship, strategic capital, and deep sector conviction.',
    contact: 'Contact',
    navigation: 'Navigation',
    sectors: 'Sectors',
    rights: 'All rights reserved.',
    legal: {
      imprint: 'Imprint',
      privacy: 'Privacy Policy',
      disclaimer: 'Disclaimer',
    },
  },
}

export const de: Translations = {
  nav: {
    about: 'Über uns',
    sectors: 'Sektoren',
    portfolio: 'Portfolio',
    leadership: 'Team',
    process: 'Prozess',
    acquisition: 'Ankauf',
    insights: 'Insights',
    contact: 'Kontakt',
    cta: 'Kontakt aufnehmen',
  },
  home: {
    hero: {
      headline1: 'Nachhaltigen',
      headline2: 'Wert schaffen.',
      sub: 'VTH Group verbindet unternehmerisches Denken, strategisches Kapital und tiefe Netzwerke, um nachhaltigen Wert in den Bereichen Immobilien, Industrie & Bau, Bergbau, Infrastruktur und Gesundheit zu schaffen.',
      cta: 'VTH Group entdecken',
      stats: {
        sectors: 'Kernsektoren',
        specialists: 'Spezialisten',
        leadership: 'Führungsteam',
        swiss: 'Schweizer Basis',
      },
    },
    about: {
      label: 'Wer wir sind',
      title: 'Eine unabhängige Schweizer Investment- und Holdinggruppe.',
      body1: 'VTH Group wurde auf einer einfachen Überzeugung gegründet: Die besten Investitionen basieren auf tiefem Sektorwissen, vertrauensvollen Beziehungen und geduldiger Kapitalbereitstellung — nicht auf Financial Engineering.',
      body2: 'Wir sind in fünf Kernsektoren tätig — Immobilien, Industrie & Bau, Bergbau & Steinbrüche, Infrastruktur und Gesundheit — und bringen operative Expertise und eine langfristige Eigentümerperspektive in jede Transaktion ein.',
      link: 'Unsere Geschichte',
    },
    sectors: {
      label: 'Kernsektoren',
      title: 'Wo wir investieren.',
      sub: 'Fünf Sektoren — ausgewählt für Tiefe, nicht für Diversifikation.',
    },
    philosophy: {
      label: 'Unsere Philosophie',
      title: 'Wie wir über Kapital denken.',
      quote: 'Wir kaufen keine Unternehmen. Wir kaufen Menschen und Strategien, und unterstützen sie mit Kapital.',
      quoteAuthor: '— Stephen A. Schwarzman',
      principles: [
        { title: 'Menschen vor Vermögenswerten', desc: 'Wir investieren zuerst in Unternehmer und Betreiber. Der Vermögenswert ist eine Folge des Teams.' },
        { title: 'Off-Market-Zugang', desc: 'Die besten Investitionen sind selten öffentlich verfügbar. Unser Netzwerk erschliesst Chancen, die andere nie sehen.' },
        { title: 'Aktive Partnerschaft', desc: 'Wir sind keine passiven Allocatoren. Wir bringen Expertise, Netzwerk und Urteilsvermögen neben Kapital ein.' },
        { title: 'Geduldiges Kapital', desc: 'Wir haben keinen kurzfristigen Exit-Druck. Wir halten Anlagen so lange, wie die These intakt bleibt.' },
      ],
    },
    leadership: {
      label: 'Führungsteam',
      title: 'Die Menschen hinter VTH Group.',
      link: 'Ganzes Führungsteam',
    },
    insights: {
      label: 'Insights',
      title: 'Perspektiven auf unsere Märkte.',
      link: 'Alle Insights',
    },
    cta: {
      label: 'Kontakt',
      title: 'Bereit, eine Opportunität zu besprechen?',
      sub: 'Ob Immobilie, Unternehmen oder Konzept — wenn es eine echte Übereinstimmung gibt, werden wir es schnell wissen.',
      link: 'VTH Group kontaktieren',
    },
  },
  footer: {
    tagline: 'Eine unabhängige Schweizer Investment- und Holdinggruppe, die durch Unternehmertum, strategisches Kapital und tiefe Sektorüberzeugung nachhaltigen Wert schafft.',
    contact: 'Kontakt',
    navigation: 'Navigation',
    sectors: 'Sektoren',
    rights: 'Alle Rechte vorbehalten.',
    legal: {
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      disclaimer: 'Disclaimer',
    },
  },
}

export const ro: Translations = {
  nav: {
    about: 'Despre noi',
    sectors: 'Sectoare',
    portfolio: 'Portofoliu',
    leadership: 'Echipă',
    process: 'Proces',
    acquisition: 'Achiziții',
    insights: 'Perspective',
    contact: 'Contact',
    cta: 'Contactați-ne',
  },
  home: {
    hero: {
      headline1: 'Creăm valoare',
      headline2: 'pe termen lung.',
      sub: 'VTH Group combină gândirea antreprenorială, capitalul strategic și rețele profunde pentru a crea valoare durabilă în imobiliare, industrie & construcții, minerit, infrastructură și sănătate.',
      cta: 'Descoperă VTH Group',
      stats: {
        sectors: 'Sectoare Principale',
        specialists: 'Specialiști',
        leadership: 'Conducere',
        swiss: 'Bază Elvețiană',
      },
    },
    about: {
      label: 'Cine suntem',
      title: 'Un grup elvețian independent de investiții și holding.',
      body1: 'VTH Group a fost fondat pe o convingere simplă: cele mai bune investiții se construiesc pe cunoașterea profundă a sectorului, relații de încredere și capital răbdător — nu pe inginerie financiară.',
      body2: 'Operăm în cinci sectoare principale — Imobiliare, Industrie & Construcții, Minerit & Cariere, Infrastructură și Sănătate — aducând expertiză operațională și o mentalitate de proprietar pe termen lung în fiecare tranzacție.',
      link: 'Povestea noastră',
    },
    sectors: {
      label: 'Sectoare Principale',
      title: 'Unde investim.',
      sub: 'Cinci sectoare alese pentru profunzime, nu pentru diversificare.',
    },
    philosophy: {
      label: 'Filosofia noastră',
      title: 'Cum gândim despre capital.',
      quote: 'Nu cumpărăm companii. Cumpărăm oameni și strategii, și le susținem cu capital.',
      quoteAuthor: '— Stephen A. Schwarzman',
      principles: [
        { title: 'Oamenii înaintea activelor', desc: 'Investim mai întâi în operatori și antreprenori. Activul este o consecință a echipei.' },
        { title: 'Acces off-market', desc: 'Cele mai bune investiții sunt rareori disponibile public. Rețeaua noastră descoperă oportunități pe care alții nu le văd niciodată.' },
        { title: 'Parteneriat activ', desc: 'Nu suntem alocatori pasivi. Contribuim cu expertiză, rețea și judecată alături de capital.' },
        { title: 'Capital răbdător', desc: 'Nu avem presiune de ieșire pe termen scurt. Deținem active atât timp cât teza rămâne intactă.' },
      ],
    },
    leadership: {
      label: 'Echipă de conducere',
      title: 'Oamenii din spatele VTH Group.',
      link: 'Echipa completă de conducere',
    },
    insights: {
      label: 'Perspective',
      title: 'Perspective asupra piețelor noastre.',
      link: 'Toate perspectivele',
    },
    cta: {
      label: 'Contactați-ne',
      title: 'Gata să explorați o oportunitate?',
      sub: 'Fie că aveți un activ, o companie sau un concept — dacă există o aliniere reală, vom afla rapid.',
      link: 'Contactați VTH Group',
    },
  },
  footer: {
    tagline: 'Un grup elvețian independent de investiții și holding care creează valoare pe termen lung prin antreprenoriat, capital strategic și convingere sectorială profundă.',
    contact: 'Contact',
    navigation: 'Navigare',
    sectors: 'Sectoare',
    rights: 'Toate drepturile rezervate.',
    legal: {
      imprint: 'Imprint',
      privacy: 'Politică de confidențialitate',
      disclaimer: 'Disclaimer',
    },
  },
}

export const translations: Record<Locale, Translations> = { en, de, ro }
