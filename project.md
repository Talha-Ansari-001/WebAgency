# Project: Ash Core Technologies Web Agency

## Overview
A high-converting, modern landing page for **Ash Core Technologies**, a Web Development and SaaS Development Agency. Built with React 19, Vite, and Tailwind CSS 4, featuring smooth animations and a responsive design.

## Tech Stack
- **Frontend Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** React Icons (Hi, Fa)
- **Navigation:** React Scroll (for smooth-scroll internal links)

## Project Structure
- `src/`: Main source code directory.
  - `components/`: Modular UI components.
  - `App.jsx`: Main application container, orchestrating the sections.
  - `main.jsx`: Entry point.
  - `index.css`: Global styles and Tailwind imports.
- `public/`: Static assets (icons, images).
- `index.html`: Base HTML template.

## Key Components
The application is composed of several sections, each handled by a dedicated component in `src/components/`:

- **Navbar**: Sticky header with navigation links and smooth scrolling.
- **Hero**: High-impact section with headline, sub-headline, and main CTAs.
- **TrustBadgesRow**: Displays social proof or certifications.
- **Services**: Lists service offerings (Standard, Premium, E-commerce, Custom).
- **Portfolio**: Showcases previous projects using `PortfolioCard`.
- **Benefits**: Highlights the core value delivered to clients (More Customers, Better Online Presence, etc.).
- **WhyChooseUs**: Explains the agency's competitive advantages (7-day delivery, 1-year support, etc.).
- **Process**: Steps through the 4-phase development workflow.
- **Pricing**: Transparent pricing tiers using `PricingCard`.
- **Testimonials**: Customer success stories and feedback.
- **FinalCTA**: Concluding call to action.
- **Contact**: Integrated contact form with Google Sheets backend and verified business details.
- **Footer**: Site navigation, social links, and official email.
- **WhatsAppButton**: Floating action button for direct communication (+91 72492 37892).

## Contact Information
- **Phone/WhatsApp:** +91 72492 37892
- **Email:** ashcoretechnologies@gmail.com

## Development
- **Dev Server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
- **Preview:** `npm run preview`
