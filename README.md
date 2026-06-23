# VTH Group — Website

**VTH Group** digital flagship. Built with Next.js 14, TypeScript, and Tailwind CSS.

## Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

Requires Node.js 18+. Visit [nodejs.org](https://nodejs.org) to install.

## Project Structure

```
vthgroup/
├── app/
│   ├── layout.tsx          # Root layout (fonts, nav, footer, structured data)
│   ├── page.tsx            # Home page
│   ├── globals.css         # Design system CSS
│   ├── about/page.tsx
│   ├── sectors/page.tsx
│   ├── portfolio/page.tsx
│   ├── leadership/page.tsx
│   ├── insights/page.tsx
│   ├── careers/page.tsx
│   ├── contact/page.tsx
│   ├── legal/
│   │   ├── imprint/page.tsx
│   │   ├── privacy/page.tsx
│   │   └── disclaimer/page.tsx
│   ├── sitemap.ts
│   └── robots.ts
├── components/
│   ├── Navigation.tsx      # Sticky nav with dark/light mode
│   ├── Footer.tsx
│   ├── ContactForm.tsx
│   ├── StructuredData.tsx  # Schema.org JSON-LD
│   ├── home/               # Homepage section components
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── SectorsSection.tsx
│   │   ├── PhilosophySection.tsx
│   │   ├── PortfolioSection.tsx
│   │   ├── LeadershipSection.tsx
│   │   ├── InsightsSection.tsx
│   │   └── CtaSection.tsx
│   └── ui/
│       └── PageHero.tsx
└── lib/
    └── useReveal.ts        # Intersection Observer scroll reveal hook
```

## Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Charcoal | `#0D0D0D` | Backgrounds, headings |
| Bronze | `#8B7355` | Accents, CTAs, labels |
| Bronze Light | `#C4A87A` | Hero accents |
| Cream | `#F0EDE6` | Section backgrounds |
| Cream 50 | `#FAFAF8` | Primary background |
| Stone | `#9B9590` | Body text |

### Typography
- **Display/Headings**: Cormorant Garamond (serif) — editorial, authoritative
- **Body/UI**: Inter (sans-serif) — clean, modern
- **Labels**: Inter Caps — tracking 0.2em, uppercase

### Layout
- 12-column grid via Tailwind
- Container: max-w-[1440px] with 80px side padding on xl
- Section spacing: `py-section` (8rem) or `py-section-sm` (5rem)

## Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel --prod
```

### Self-hosted
```bash
npm run build
npm start
```

## To-do Before Launch
- [ ] Replace Unsplash image URLs with licensed/owned photography
- [ ] Connect contact form to email service (Resend, SendGrid, etc.)
- [ ] Add domain: vthgroup.com
- [ ] Update `metadata` in layout.tsx with final domain
- [ ] Update `sitemap.ts` with final domain
- [ ] Add Google Analytics / Plausible (optional)
- [ ] Upload OG image to /public/og-image.jpg
- [ ] Add real logo to /public/logo.png
- [ ] Final legal review of disclaimer text
