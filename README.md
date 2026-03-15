# Rubix AI Pulse — Official Website

**Live Site:** https://rubix-egypt-website.vercel.app/

## Description

The official website for **Rubix AI Pulse**, the AI intelligence and product engineering hub within **Rubix Consult Egypt**. This platform presents our mission to design, build, and scale intelligent digital products — from internal AI systems and automation engines to client-facing SaaS platforms — that strengthen consulting delivery and unlock measurable business value.

The site serves as a bilingual (English / Arabic) portfolio and company hub, showcasing our team, featured products, and strategic roadmap.

-----

## Website Sections

|Section                   |Description                                           |
|--------------------------|------------------------------------------------------|
|**Hero**                  |AI Intelligence & Product Engineering Hub introduction|
|**About AI Pulse**        |Hub overview and strategic role within Rubix Consult  |
|**At a Glance**           |Team metrics and focus areas dashboard                |
|**Strategic Roadmap**     |13-month phased development plan (M0–M12)             |
|**Products & Initiatives**|Featured products: Rashad Engine & WorCare            |
|**Team**                  |9-member multidisciplinary team profiles              |
|**Vision**                |Future ambitions and long-term goals                  |
|**Location**              |Office workspace and physical presence                |

-----

## Featured Products

### 🔴 Rashad Engine

An AI-powered proposal generation platform that automates and accelerates the consulting proposal lifecycle. Rashad Engine processes client input through structured Standard and Detailed modes, producing AI-generated summaries and supporting interactive Q&A — reducing proposal turnaround time dramatically.

### 💙 WorCare

A workplace well-being application designed to support employee mental health, engagement, and productivity. WorCare delivers personalized programs across key well-being pillars — including Financial Well-being and Sleep Programs — addressing underserved gaps in the enterprise wellness market.

-----

## Key Features

- **Bilingual support** — Full English / Arabic (EN/AR) localization with RTL layout handling
- Single-page application with smooth anchor navigation
- Glassmorphism design system with backdrop blur effects
- Interactive timeline roadmap with priority visualization
- Responsive grid layouts for all screen sizes
- Team profile cards with role descriptions
- Real-time metrics dashboard (At a Glance section)
- Dark theme interface with `#BE0E5B` primary accent
- Multi-image location gallery
- Optimized performance and scroll-triggered animations

-----

## Tech Stack

|Layer     |Technology                            |
|----------|--------------------------------------|
|Framework |Next.js 14 (App Router, TypeScript)   |
|UI Library|Material UI v5 (MUI) with custom theme|
|Animations|Framer Motion                         |
|Images    |next/image (optimized)                |
|Typography|Plus Jakarta Sans (next/font)         |
|Deployment|Vercel                                |

-----

## Setup

### 1. Install dependencies

```bash
cd rubix-egypt
npm install
```

### 2. Add the logo

```bash
copy "path\to\your\logo.png" "public\logo.png"
```

### 3. Run development server

```bash
npm run dev
```

Open **http://localhost:3000**

-----

## Build

```bash
npm run build
npm start
```

-----

## Project Structure

```
rubix-egypt/
├── app/
│   ├── layout.tsx            # MUI ThemeProvider + fonts + SEO
│   ├── page.tsx              # Main page — all sections composed here
│   └── globals.css
├── components/
│   ├── Navbar.tsx            # Sticky nav with EN/AR toggle
│   ├── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── InsightsSection.tsx
│   │   ├── ProjectsSection.tsx   # Rashad Engine & WorCare
│   │   ├── TeamSection.tsx
│   │   └── VisionSection.tsx
│   └── ui/
│       ├── GlassCard.tsx
│       └── SectionWrapper.tsx
├── theme/
│   └── theme.ts              # Custom MUI theme — dark mode + brand colors
└── public/
    ├── logo.png
    └── [assets]
```

-----

## Design System

|Token         |Value                                                 |
|--------------|------------------------------------------------------|
|Background    |`#0A0A0F`                                             |
|Primary Accent|`#BE0E5B`                                             |
|Card Style    |Glassmorphism, `8px` border-radius                    |
|Heading Font  |Plus Jakarta Sans — H1: `64px / 700`, H2: `40px / 700`|
|Animation     |Framer Motion — scroll-triggered reveals              |
|Direction     |LTR (EN) / RTL (AR) responsive                        |

-----

## Localization

The site supports both **English** and **Arabic** with layout direction switching. All major section content is authored bilingually. Arabic layout uses RTL rendering via MUI’s `CacheProvider` with `rtlPlugin`.

-----

*© 2026 Rubix AI Pulse — AI Intelligence, Product Engineering & Digital Platforms for Rubix Consult Egypt*
