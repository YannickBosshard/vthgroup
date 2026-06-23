export default function StructuredData() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Organization',
        '@id': 'https://www.vthgroup.com/#organization',
        name: 'VTH Group AG',
        alternateName: 'VTH Group',
        url: 'https://www.vthgroup.com',
        logo: 'https://www.vthgroup.com/logo.png',
        description:
          'VTH Group is an independent Swiss investment and holding group building long-term value through entrepreneurship, strategic capital, and deep sector conviction across Real Estate, Industrials, Mining, Infrastructure, and Healthcare.',
        foundingLocation: { '@type': 'Country', name: 'Switzerland' },
        contactPoint: {
          '@type': 'ContactPoint',
          email: 'info@vthinvest.ch',
          contactType: 'General Enquiries',
        },
        sameAs: [],
        knowsAbout: [
          'Private Equity',
          'Real Estate Investment',
          'Infrastructure Investment',
          'Healthcare Investment',
          'Mining Investment',
          'Swiss Investment',
        ],
      },
      {
        '@type': 'WebSite',
        '@id': 'https://www.vthgroup.com/#website',
        url: 'https://www.vthgroup.com',
        name: 'VTH Group',
        publisher: { '@id': 'https://www.vthgroup.com/#organization' },
        inLanguage: 'en',
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  )
}
