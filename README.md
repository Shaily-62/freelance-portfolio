# Shaily Gupta — Freelance Developer Studio Portfolio

A premium, modern, high-converting freelance developer studio portfolio website built to attract real freelance clients and showcase full-stack and AI engineering capabilities.

![License](https://img.shields.io/badge/license-MIT-blue.svg)
![React](https://img.shields.io/badge/React-18-blue)
![Vite](https://img.shields.io/badge/Vite-5%2F6-purple)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8)

---

## 📸 Visual Identity & Design System

- **Palette**: Editorial Terracotta & Warm Cream Aesthetic
  - Background Main: `#F7F3EC`
  - Background Soft: `#FBF9F5`
  - Primary Dark: `#3A2922`
  - Rich Brown: `#6B4636`
  - Terracotta: `#A66A4C`
  - Border Muted: `#E8DED2`
- **Typography**: Inter / DM Sans (Editorial Hierarchy)
- **Vibe**: Sophisticated, Warm, Minimal, Human, and Conversion-Focused.

---

## ⚡ Features & Modules

- 🎯 **Hero & Value Proposition**: High-converting introduction with active availability badges and social handles.
- 📦 **Service Offerings**: Clear breakdown of web development, React applications, full-stack builds, and AI integrations with transparent starting prices.
- 💼 **Case-Study Modal Viewer**: Interactive modal windows displaying detailed project architecture, problem statements, technical solutions, and technology tags.
- 🛠 **Skill Matrix**: Categorized tech stack breakdown (Languages, Frontend, Backend, Databases, AI/ML, DevOps tools).
- 🧠 **Tech Educator Integration**: Highlights content creation (@code_fuelup) bridging technical education with software capabilities.
- 💬 **Interactive FAQ**: Accordion addressing budget, timelines, Figma integrations, and AI implementation workflows.
- 📬 **Client Inquiry Contact Form**: Multi-field inquiry submission with phone/WhatsApp option and Web3Forms integration.
- 📱 **Mobile First & Sticky CTAs**: Responsive layout with a sticky conversion bar on mobile viewport scroll.

---

## 📂 Project Structure

```text
frontend/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx           # Sticky Navbar with desktop/mobile drawer
│   │   ├── Hero.jsx             # Hero section with primary CTAs
│   │   ├── Services.jsx         # 5 Core service offering cards
│   │   ├── Audience.jsx         # "Who I Work With" target segments
│   │   ├── Projects.jsx         # Selected work grid
│   │   ├── ProjectModal.jsx     # Full case-study modal popup
│   │   ├── About.jsx            # Personal brand story
│   │   ├── Skills.jsx           # Technical skills matrix
│   │   ├── Process.jsx          # 4-Step collaboration workflow
│   │   ├── Pricing.jsx          # Pricing guidance summary
│   │   ├── EducationBrand.jsx   # @code_fuelup Instagram integration
│   │   ├── Trust.jsx            # Real credibility signals
│   │   ├── FAQ.jsx              # Accordion FAQ
│   │   ├── Contact.jsx          # Project inquiry form + Phone field
│   │   ├── StickyMobileCTA.jsx  # Mobile conversion toolbar
│   │   └── Footer.jsx           # Universal site footer
│   ├── constants/
│   │   └── portfolioData.js     # Single source of truth for text/projects
│   ├── App.jsx                  # Main application layout
│   ├── main.jsx                 # Vite application entry point
│   └── index.css                # Tailwind v4 theme definitions
├── index.html                   # HTML entry point with OpenGraph SEO
├── package.json
└── vite.config.js               # Vite + Tailwind plugin config
