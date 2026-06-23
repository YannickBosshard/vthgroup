import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/legal/', '/api/'],
    },
    sitemap: 'https://www.vthgroup.com/sitemap.xml',
  }
}
