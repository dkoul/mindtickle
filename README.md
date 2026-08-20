# Mind Tickle

**You don't need to read minds. You just need to understand them.**

A polished website of interactive psychological, mathematical, and linguistic tricks you can perform on friends — with explanations of why they work.

## Features

- 19 tricks across psychology, mathematics, cards, and words
- Performer mode with step-by-step guidance
- Dramatic reveal animations with feedback
- Understand mode with explanations and visual chains
- Search and filter by difficulty, type, duration, and reliability
- Surprise Me random trick selector
- Mobile-first, one instruction per screen
- Shareable trick URLs

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- Tailwind CSS 4

## Development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Deploy

Deploy to Vercel:

```bash
npm run build
```

Or connect the repository to Vercel for automatic deployments.

## Project Structure

```
app/
├── page.tsx              # Homepage
├── tricks/page.tsx       # All tricks with filters
├── tricks/[slug]/page.tsx # Individual trick player
└── about/page.tsx        # About / psychology

components/
├── TrickCard, TrickPlayer, Reveal, SecretExplanation
├── TrickFilters, SurpriseMe, TricksList

data/tricks.ts            # Trick definitions
lib/trick-engine.ts       # Filter, search, random
```
