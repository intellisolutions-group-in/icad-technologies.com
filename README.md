# ICAD Technologies - Next.js Enterprise Portal

ICAD Technologies is a premium, high-performance enterprise B2B tech consulting website. This application utilizes modern frontend engineering patterns, combining a custom design system with rich micro-animations and mock backend integration to deliver an elite web experience.

---

## 🎨 Design System & Aesthetics

Inspired by the bold, structured look of modern creative developer agencies (such as `dael.ai`), the visual language of the site features:
- **Color Palette**: Curated Warm Sand background (`#fafafa`) paired with high-contrast Zinc-900 (`#18181b`) and bold Coral/Orange highlights.
- **Soft Neumorphic Depth**: Buttons, cards, and interactive wrappers use custom raised and pressed double-shadow utilities (`neumorphic-raised`, `neumorphic-pressed`), supporting smooth, high-contrast borders in both light and dark modes.
- **Typography Scale**: Standardized display fonts featuring **Barlow Condensed** (tall, punchy headers), **Epilogue** (clean, geometric body text), and **Roboto Mono** for technical labels.
- **Fluid Layouts**: The containers are optimized for widescreen desktops (`max-w-[1440px]`) and transition dynamically down to mobile screens with responsive padding and spacing gaps.

---

## ✨ Key Features

1. **Startup Linear Loading Sequence**:
   - A custom GSAP loader screens progress from `0%` to `100%` alongside a monospace counter before triggering a smooth upward morphing curtain reveal.

2. **Custom Guide Cursor**:
   - A client-side cursor tracking utility with magnetic sizing on hover and contextual helper text. Shows informative guide bubbles (e.g., `"Core Services - Click cards to expand details"`) when the user pauses over sections.

3. **GSAP Animated Process Timeline**:
   - A scroll-triggered interactive roadmap featuring a vertical connector line that grows dynamically and steps that pop into view as you scroll.

4. **Dynamic Careers Filter Grid**:
   - Searchable, category-filtered job listings that support live title queries, departments, and location filters.
   - Interactive pop-up application forms with file upload drag-and-drop actions.

5. **Local Mock REST API Handlers**:
   - Asynchronous fetch endpoints mapped to Next.js App Router route handlers (`/api/talent-pool`, `/api/careers/apply`, `/api/contact`) that return real `200 OK` JSON responses, inspectable via standard browser DevTools network tabs.

---

## 📂 Codebase Folder Structure

```filepath
ICADTECH/
├── public/                     # Static assets & images
│   ├── favicon.ico
│   └── images/                 # Custom service-specific AI illustrations
├── src/
│   ├── app/                    # Next.js App Router Page directories
│   │   ├── about/              # About Us & historical timelines
│   │   ├── api/                # Mock REST API route handlers
│   │   │   ├── careers/apply
│   │   │   ├── contact
│   │   │   └── talent-pool
│   │   ├── blog/               # Insights blog list & post details
│   │   ├── careers/            # Job openings & talent pool forms
│   │   ├── contact/            # Booking consultations & inquiry forms
│   │   ├── industries/         # Vertical-specific enterprise grids
│   │   ├── privacy/            # Privacy Policy
│   │   ├── services/           # Service directories & landing views
│   │   ├── thank-you/          # Post-inquiry confirmation screen
│   │   ├── globals.css         # Tailwind directives & neumorphic utilities
│   │   └── layout.tsx          # Root Layout & client cursor mounting
│   ├── components/
│   │   ├── features/           # Blog and Careers interactive grids
│   │   ├── layout/             # Full-width Navbar, Footers & Scroll providers
│   │   ├── sections/           # Bento grids, Hero, and CTA sections
│   │   └── ui/                 # Buttons, Custom cursor, Timelines & GSAP wrappers
│   └── data/                   # Static content datasets (Blog, Careers, Services)
├── package.json                # Project configurations & dependencies
├── next.config.ts              # Next.js configuration properties
└── tsconfig.json               # TypeScript configuration parameters
```

---

## 🛠️ Tech Stack

- **Core Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Programming Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animation Suite**: [GSAP (GreenSock Animation Platform)](https://greensock.com/gsap/) with [GreenSock ScrollTrigger](https://greensock.com/scrolltrigger/)
- **Iconography**: [Lucide React](https://lucide.dev/)

---

## 🚀 Getting Started

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) installed (v18+ recommended).

### Installation

1. Install project dependencies:
   ```bash
   npm install
   ```

2. Start the local development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) to view the portal.

### Production Build

To compile a highly optimized production bundle:
```bash
npm run build
```

To run the production build locally:
```bash
npm run start
```
