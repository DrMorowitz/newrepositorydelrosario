# Dr. Javier del Rosario - Website Project Memory

## Project Overview
Professional urology website for Dr. Javier Antonio del Rosario Gibbs, targeting patients in Panama. The site emphasizes educational explanations, personalized care, and comprehensive urological services.

## Current Active Project: `dr-delrosario-nextjs`
**Framework**: Next.js 15 + Turbopack  
**Status**: Production-ready, fully migrated from React/Vite  
**Deployment**: Static export for Netlify

### Key Features
- **Bilingual support** (Spanish primary, English secondary)
- **Educational focus** with detailed medical explanations
- **Professional consultation imagery** showing Dr. del Rosario's educational approach
- **Performance optimized** with mobile/low-power device fallbacks
- **SEO optimized** with comprehensive schema markup
- **Video hero section** with Cloudinary hosting

### Technical Stack
- Next.js 15 with App Router
- TypeScript
- Tailwind CSS + shadcn/ui components
- Framer Motion animations
- Cloudinary media management
- React Hook Form + Zod validation

### Landing Page Structure
1. **Hero** - Video background with educational consultation imagery
2. **StatsSection** - 25+ years experience, 5000+ procedures, 3 locations
3. **ServicesSection** - Vasectomy, Kidney Stones, Prostate, Circumcision
4. **FeatureSection** - Key differentiators
5. **BlogSection** - Educational content hub
6. **WhyChooseSection** - Educational explanations emphasis
7. **TestimonialsSection** - Patient trust indicators
8. **CTASection** - WhatsApp and appointment booking

### Recent Migration Cleanup (2024-11-11)
- ✅ Fixed deprecated `experimental.turbo` → `turbopack` configuration
- ✅ Removed backup files and React Router references
- ✅ Legacy project properly documented as `dr-j-urology-care-legacy`
- ✅ Build process verified (14 static pages, 102kB shared JS)
- ✅ TypeScript compilation clean
- ✅ No migration artifacts remaining

### Brand Positioning
- **Educational Approach**: "Como una clase universitaria" (Like a university class)
- **Personalized Care**: Detailed explanations and follow-up
- **Professional Authority**: 25+ years experience, thousands of procedures
- **Accessibility**: Bilingual care, multiple locations
- **Modern Technology**: Advanced procedures with minimal invasion

### Content Strategy
- Evidence-based medical information
- Patient education emphasis
- Procedure explanations with visual aids
- FAQ addressing cost and procedure concerns
- Symptom awareness and prevention guidance

## Development Commands
```bash
cd dr-delrosario-nextjs
npm run dev:turbo    # Development with Turbopack
npm run build        # Production build
npm run type-check   # TypeScript validation
```

## Deployment
- Platform: Netlify
- Build: Static export (`output: 'export'`)
- Images: Unoptimized for static deployment
- CDN: Cloudinary for media assets

## Legacy Project: `dr-j-urology-care`
⚠️ **DO NOT USE** - Migration reference only  
Contains original React/Vite implementation kept for historical purposes.