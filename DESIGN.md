---
name: Serene Devotion
colors:
  surface: '#031427'
  surface-dim: '#031427'
  surface-bright: '#2a3a4f'
  surface-container-lowest: '#000f21'
  surface-container-low: '#0b1c30'
  surface-container: '#102034'
  surface-container-high: '#1b2b3f'
  surface-container-highest: '#26364a'
  on-surface: '#d3e4fe'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#d3e4fe'
  inverse-on-surface: '#213145'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#4edea3'
  on-secondary: '#003824'
  secondary-container: '#00a572'
  on-secondary-container: '#00311f'
  tertiary: '#ffb95f'
  on-tertiary: '#472a00'
  tertiary-container: '#251400'
  on-tertiary-container: '#b47300'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#6ffbbe'
  secondary-fixed-dim: '#4edea3'
  on-secondary-fixed: '#002113'
  on-secondary-fixed-variant: '#005236'
  tertiary-fixed: '#ffddb8'
  tertiary-fixed-dim: '#ffb95f'
  on-tertiary-fixed: '#2a1700'
  on-tertiary-fixed-variant: '#653e00'
  background: '#031427'
  on-background: '#d3e4fe'
  surface-variant: '#26364a'
typography:
  display-time:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: -0.02em
  display-time-mobile:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '700'
    lineHeight: '1'
  headline-lg:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: 40px
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
  label-caps:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.05em
  arabic-display:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 40px
    fontWeight: '500'
    lineHeight: '1.2'
  arabic-body:
    fontFamily: IBM Plex Sans Arabic
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
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
  container-max: 1200px
  gutter: 24px
---

## Brand & Style

The design system is anchored in the concept of "Digital Tranquility." It aims to provide a meditative space for users to engage with their daily spiritual obligations without visual noise. The target audience includes modern practitioners seeking a high-utility, aesthetically refined tool for prayer times, Qibla direction, and spiritual planning.

The style is a fusion of **Minimalism** and **Modern Corporate** precision. It prioritizes clarity and breathability, using expansive whitespace (or "darkspace") to reduce cognitive load. The emotional response should be one of calm, reliability, and reverence. The interface avoids decorative flourishes, instead finding beauty in the precision of typography and the subtle use of light and depth to guide the eye toward the next prayer time.

## Colors

This design system utilizes a dual-mode palette optimized for different times of day. 

**Dark Mode (Default):**
The primary background is a deep, celestial navy (`#020617`), creating a serene night-sky atmosphere. The secondary color is a vibrant emerald green (`#10B981`) used for "Active" or "Current" prayer states, symbolizing life and growth. Soft gold accents (`#F59E0B`) are reserved for high-priority alerts like "Imsak" or "Sunset," providing a warm, spiritual glow.

**Light Mode:**
The light mode shifts to a pristine, airy aesthetic using cool greys and whites. The emerald green remains the primary action color, but is adjusted for higher contrast against light backgrounds.

**Semantic Usage:**
- **Primary:** Backgrounds and structural foundations.
- **Secondary (Emerald):** Success states, current prayer highlights, and primary actions.
- **Tertiary (Gold):** Special reminders, Qibla indicators, and sunrise/sunset markers.
- **Neutral:** Secondary text, borders, and inactive prayer states.

## Typography

The typography system is designed for instant legibility of numeric data (prayer times) and cultural resonance.

**Latin Typography:**
We use **Inter** for its neutral, systematic clarity. It ensures that time digits are legible at a glance. For technical labels and metadata, **Geist** provides a modern, monospaced-adjacent feel that emphasizes the precision of astronomical calculations.

**Arabic Typography:**
**IBM Plex Sans Arabic** is used for its modern, clean Naskh-inspired structure. It bridges the gap between traditional calligraphic beauty and contemporary digital standards, ensuring the interface feels native to both LTR and RTL users.

**Scaling:**
Large "Display Time" roles are used for the countdown to the next prayer. On mobile, these scale down to maintain a single-line layout. Use `label-caps` for prayer names (e.g., FAJR, DHUHR) to create a clear structural hierarchy.

## Layout & Spacing

The layout follows a **Fluid Grid** model with a generous 8px base unit. 

**Structure:**
- **Desktop:** A 12-column grid with a max-width of 1200px. Content is centered with large `xl` vertical margins to emphasize a focused, singular experience.
- **Mobile:** A 4-column grid with 16px side margins. Cards and prayer lists should span the full width of the container.

**Spacing Rhythm:**
Use `md` (24px) for spacing between related elements in a card and `lg` (48px) to separate distinct sections (e.g., the Hero prayer countdown vs. the full day's list). This "open" spacing strategy is essential to maintaining the minimalist, serene brand promise.

**RTL Adaptability:**
All horizontal spacing, padding, and positioning must flip automatically in Arabic locales. This includes icon placement (leading vs. trailing) and the direction of progress bars.

## Elevation & Depth

To maintain a clean and spiritual aesthetic, the design system avoids heavy shadows, instead using **Tonal Layers** and **Low-Contrast Outlines**.

**Surfaces:**
Depth is created by stacking surfaces. In dark mode, the base background is at the lowest level. Active prayer cards use a slightly lighter "Surface" color (`#0F172A`) with a subtle 1px border (`#1E293B`) to define boundaries without adding visual weight.

**Interactivity:**
Primary buttons and active states use a soft, inner-glow effect rather than an outer shadow, making the elements feel "illuminated" from within. 

**Glassmorphism:**
For mobile navigation bars or sticky headers, a subtle backdrop blur (12px) with a semi-transparent surface (80% opacity) is used to maintain a sense of context and spatial continuity.

## Shapes

The shape language is **Rounded**, reflecting the softness and approachability of the spiritual theme. 

- **Containers:** Standard cards and input fields use a `0.5rem` (8px) radius.
- **Large Components:** Hero sections and prominent "Next Prayer" containers use `rounded-xl` (1.5rem / 24px) to feel distinct and welcoming.
- **Selection Indicators:** Small dots or lines used to indicate the current prayer should be fully rounded (pill-shaped) to appear organic.

## Components

**Buttons:**
Primary buttons are solid Emerald (`#10B981`) with white text. Secondary buttons are outlined with a subtle 1px stroke. All buttons have a `0.5rem` radius.

**Prayer Cards:**
The core component. Inactive prayers use low-opacity text and no background. The "Current" or "Next" prayer is housed in a high-contrast card with a subtle emerald left-border (or right-border in RTL) and a soft background tint.

**Chips:**
Used for "Location" or "Calculation Method" tags. These should be pill-shaped with a background that is only slightly lighter than the main surface to remain unobtrusive.

**Icons:**
All icons must be **Outline style** with a 1.5pt or 2pt stroke weight.
- **Prayer times:** Use a clock or sun/moon phase icons.
- **Qibla:** A clean compass needle or Kaaba silhouette.
- **Settings:** A minimalist gear.
- **Location:** A pin icon with a hollow center.

**Input Fields:**
Minimalist design with no background fill, only a bottom border that transforms into a full-outline emerald box on focus.

**Progress Indicators:**
For the time remaining until the next prayer, use a thin 4px horizontal progress bar with a gradient from Primary Navy to Emerald.