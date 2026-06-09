---
name: Corporate Modern Architecture
colors:
  surface: '#f9f9fe'
  surface-dim: '#dad9de'
  surface-bright: '#f9f9fe'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f4f3f8'
  surface-container: '#eeedf2'
  surface-container-high: '#e8e8ed'
  surface-container-highest: '#e2e2e7'
  on-surface: '#1a1c1f'
  on-surface-variant: '#43474f'
  inverse-surface: '#2f3034'
  inverse-on-surface: '#f1f0f5'
  outline: '#737780'
  outline-variant: '#c3c6d1'
  surface-tint: '#3a5f94'
  primary: '#001e40'
  on-primary: '#ffffff'
  primary-container: '#003366'
  on-primary-container: '#799dd6'
  inverse-primary: '#a7c8ff'
  secondary: '#bb0014'
  on-secondary: '#ffffff'
  secondary-container: '#e41f25'
  on-secondary-container: '#fffbff'
  tertiary: '#381300'
  on-tertiary: '#ffffff'
  tertiary-container: '#592300'
  on-tertiary-container: '#d8885c'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#d5e3ff'
  primary-fixed-dim: '#a7c8ff'
  on-primary-fixed: '#001b3c'
  on-primary-fixed-variant: '#1f477b'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ab'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#93000d'
  tertiary-fixed: '#ffdbca'
  tertiary-fixed-dim: '#ffb690'
  on-tertiary-fixed: '#341100'
  on-tertiary-fixed-variant: '#723610'
  background: '#f9f9fe'
  on-background: '#1a1c1f'
  surface-variant: '#e2e2e7'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  display-lg-mobile:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: 44px
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: 32px
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: 20px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin-mobile: 16px
  margin-desktop: 64px
---

## Brand & Style

The brand personality is defined by authority, precision, and global expertise. This design system communicates reliability through a disciplined layout and innovative spirit through sharp, high-contrast accents. It targets C-suite executives and engineering leads who require technical depth delivered with a premium, polished experience.

The design style follows a **Corporate / Modern** aesthetic. It prioritizes clarity and structured information architecture, utilizing generous whitespace to denote "premium" status. Every element is intentional, avoiding decorative clutter in favor of functional elegance and high-performance visual cues.

## Colors

The palette is anchored by **Deep Professional Blue**, signaling stability and institutional knowledge. **Vibrant Red** is used exclusively as a high-signal accent for calls to action, critical notifications, and brand highlights, ensuring these elements command immediate attention against the conservative base.

The background strategy utilizes **Pure White** for primary content areas to maximize legibility, while **Cool Gray (#F8FAFC)** is employed for secondary sections, sidebars, and card containers to provide subtle tonal separation. Text roles are strictly divided: **Sharp Black** for high-authority headings and **Slate Gray** for body copy to reduce cognitive load during long-form reading.

## Typography

This design system utilizes **Inter** across all levels to maintain a systematic and utilitarian feel that bridges the gap between software interface and corporate editorial. 

The type scale is built on a high-contrast ratio to emphasize hierarchy. Display and Headline styles use tighter letter spacing and heavier weights to project authority. Body text is optimized for readability with a generous line height (1.5x) and a slightly softened slate color. Label styles are used for metadata and small UI elements, often utilizing medium weights to ensure legibility at small scales.

## Layout & Spacing

The layout employs a **Fluid Grid** system based on a 12-column architecture for desktop and a 4-column architecture for mobile. 

- **Desktop (1440px+):** 64px side margins with 24px gutters. Content is often contained within a max-width of 1280px for readability.
- **Tablet (768px - 1024px):** 32px side margins. 
- **Mobile (320px - 480px):** 16px side margins. 

The spacing rhythm follows an 8px linear scale. For enterprise-level SaaS interfaces, "md" (24px) is the standard padding for containers, while "lg" (48px) is used to separate major content sections on marketing pages to create an airy, premium feel.

## Elevation & Depth

Visual hierarchy is conveyed through **Ambient Shadows** and **Tonal Layers**. This design system avoids heavy gradients, preferring a "flat-plus" approach where depth indicates interactivity or focus.

- **Level 0 (Surface):** The base background (#FFFFFF or #F8FAFC).
- **Level 1 (Cards/Navigation):** Uses a very soft, diffused shadow: `0px 4px 20px rgba(0, 0, 0, 0.05)`.
- **Level 2 (Overlays/Dropdowns):** Increased elevation with a more pronounced shadow to indicate temporary placement over content: `0px 12px 32px rgba(0, 0, 0, 0.1)`.
- **Active State:** Elements like buttons or selected cards may use a subtle inner shadow or a color shift rather than an elevation change to maintain a structured, engineering-focused feel.

## Shapes

The shape language is consistently **Rounded**, using a base radius of 8px (0.5rem) for most UI components. This specific radius balances the technical precision of sharp corners with the modern approachability of rounded forms.

- **Small Components (Buttons, Inputs):** 8px radius.
- **Medium Components (Cards, Accordions):** 12px radius (`rounded-lg`).
- **Large Components (Modals, Feature Sections):** 24px radius (`rounded-xl`).

Buttons and interactive chips never use pill shapes; they maintain the structured rectangular-rounded look to remain aligned with the corporate professional identity.

## Components

### Buttons
- **Primary:** Deep Professional Blue background with White text. High contrast, 8px radius, bold weight.
- **Action/CTA:** Vibrant Red background. Reserved for "Contact Us," "Get Started," or critical path actions.
- **Ghost:** Slate gray borders (1px) with transparent backgrounds for secondary actions.

### Data Cards
Structured with a 1px border (#E2E8F0) or a Level 1 shadow. Headers within cards should use `label-sm` in Deep Blue to categorize information clearly.

### Input Fields
Clean white backgrounds with a 1.5px border in light gray. On focus, the border shifts to Deep Professional Blue with a subtle 2px glow.

### Accordions
Used for technical specifications or FAQs. Clean, border-bottom only separation. The trigger uses `headline-md` for clear scannability, with a chevron icon that rotates on expansion.

### Status Indicators
Small, circular dots (8px) using a semantic palette (Success: Green, Warning: Amber, Info: Primary Blue) to denote system status or project health without cluttering the UI.