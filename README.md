# Rubix AI Pulse - Official Website

**Live Site:** https://rubix-egypt-website.vercel.app/

## Description

The official website for **Rubix AI Pulse**, the specialized AI intelligence and product engineering hub within Rubix. This platform showcases our mission to design, build, and scale intelligent digital products, internal AI systems, and automation engines that strengthen consulting delivery and unlock new business value.

## Website Sections

- **Hero Section** - AI Intelligence & Product Engineering Hub introduction
- **About AI Pulse** - Hub overview and strategic role
- **At a Glance** - Team metrics and focus areas dashboard
- **Strategic Roadmap** - 13-month phased development plan (M0-M12)
- **Products & Initiatives** - Featured projects and research programs
- **Team Section** - 9-member multidisciplinary team profiles
- **Vision Section** - Future ambitions and long-term goals
- **Location Section** - Office workspace and physical presence

## Key Features

- Single-page application with smooth anchor navigation
- Glassmorphism design system with backdrop blur effects
- Interactive timeline roadmap with priority visualization
- Responsive grid layouts for all devices
- Team profile cards with role descriptions
- Real-time metrics dashboard
- Dark theme interface (#BE0E5B primary accent)
- Multi-image location gallery
- Optimized performance and animations

## Tech Stack

- Next.js 14 (App Router, TypeScript)
- Material UI v5 (MUI) with custom theme
- Framer Motion for animations
- next/image for optimized images
- Plus Jakarta Sans (next/font)
- Deployment: Vercel

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

## Build

```bash
npm run build
npm start
```

## Project Structure

```
rubix-egypt/
├── app/
│   ├── layout.tsx       # MUI ThemeProvider + fonts + SEO
│   ├── page.tsx         # Main page with all sections
│   └── globals.css
├── components/
│   ├── Navbar.tsx
│   ├── Footer.tsx
│   ├── sections/
│   │   ├── HeroSection.tsx
│   │   ├── AboutSection.tsx
│   │   ├── InsightsSection.tsx
│   │   ├── ProjectsSection.tsx
│   │   ├── TeamSection.tsx
│   │   └── VisionSection.tsx
│   └── ui/
│       ├── GlassCard.tsx
│       └── SectionWrapper.tsx
├── theme/
│   └── theme.ts         # Custom MUI theme
└── public/
    ├── logo.png
    └── [assets]
```

## Design System

- **Background:** `#0A0A0F`
- **Primary Accent:** `#BE0E5B`
- **Cards:** Glassmorphism, 8px border-radius
- **Typography:** Plus Jakarta Sans (H1: 64px/700, H2: 40px/700)
- **Animation:** Framer Motion scroll effects

---

*© 2026 Rubix AI Pulse - AI Intelligence, Product Engineering & Digital Platforms for Rubix*
