# Project: WebAgency

## Overview
A high-converting, modern landing page for a Web Development Agency. Built with React, Vite, and Tailwind CSS, featuring smooth animations and a responsive design.

## Tech Stack
- **Frontend Framework:** React 19 (Vite)
- **Styling:** Tailwind CSS 4
- **Animations:** Framer Motion
- **Icons:** React Icons
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
- **Hero**: The primary attention-grabbing section with a headline, sub-headline, and main CTAs.
- **TrustBadgesRow**: Displays social proof or certifications.
- **Services**: Lists service offerings (Standard Website, Premium Website, E-commerce, Custom Web App).
- **Portfolio**: Showcases previous projects using `PortfolioCard`.
- **Benefits**: Highlights the value delivered to clients using `BenefitCard`.
- **WhyChooseUs**: A detailed section explaining the agency's competitive advantages.
- **Process**: Steps through the development workflow.
- **Pricing**: Transparent pricing tiers using `PricingCard`.
- **Testimonials**: Customer success stories and feedback.
- **FinalCTA**: A concluding call to action before the footer.
- **Contact**: Integrated contact form with Google Sheets backend (Google Apps Script) and verified business details (+91 72492 37892).
- **Footer**: Site navigation, social links (FB/IG), and official email (ashcoretechnologies@gmail.com).
- **WhatsAppButton**: A floating action button for direct client communication.

## Contact Information
- **Phone/WhatsApp:** +91 72492 37892
- **Email:** ashcoretechnologies@gmail.com

## Development
- **Dev Server:** `npm run dev`
- **Build:** `npm run build`
- **Lint:** `npm run lint`
