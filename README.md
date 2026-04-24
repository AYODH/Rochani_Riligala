# Rochani Riligala — Personal Portfolio

[![Live Demo](https://img.shields.io/badge/Live%20Demo-ayodh.github.io-702670?style=for-the-badge)](https://ayodh.github.io/Rochani_Riligala/)
[![GitHub Pages](https://img.shields.io/badge/Deployed%20on-GitHub%20Pages-181717?style=for-the-badge&logo=github)](https://ayodh.github.io/Rochani_Riligala/)

A personal portfolio website built with pure HTML, CSS, and JavaScript — no frameworks, no build tools — deployed via GitHub Pages.

**Live:** https://ayodh.github.io/Rochani_Riligala/

---

## Features

- **3D Hero Scene** — Three.js WebGL icosahedron wireframe with orbital rings and floating particles, with mouse parallax
- **Typewriter Animation** — Cycles through role titles in the hero section
- **Glassmorphism UI** — Frosted-glass nav bar, service cards, and contact cards with `backdrop-filter`
- **3D Card Tilt** — Project and expertise cards respond to mouse movement with perspective tilt
- **Scroll Reveal Animations** — Sections animate into view on scroll via ScrollReveal.js
- **Article Carousel** — Swiper.js slider with navigation arrows for featured articles
- **Gallery Carousel** — Auto-playing image gallery with Swiper.js
- **Collapsible Certifications** — Grouped by issuer, each group expands with a scrollable list
- **Responsive Design** — Mobile-friendly layout across all screen sizes
- **Contact Form** — Powered by Google Sheets (no backend required)

---

## Tech Stack

| Layer | Technology |
|---|---|
| Markup | HTML5 |
| Styling | CSS3 (custom properties, glassmorphism, gradient text) |
| Scripting | Vanilla JavaScript (ES6) |
| 3D / WebGL | [Three.js r128](https://threejs.org/) (CDN) |
| Carousels | [Swiper.js](https://swiperjs.com/) (local bundle) |
| Scroll animations | [ScrollReveal.js](https://scrollrevealjs.org/) (local bundle) |
| Icons | [Font Awesome 6.5.1](https://fontawesome.com/) (CDN) |
| Fonts | [Poppins](https://fonts.google.com/specimen/Poppins) (Google Fonts CDN) |
| Hosting | GitHub Pages |

---

## Project Structure

```
├── index.html              # Main portfolio page
├── style.css               # All styles
├── swiper-bundle.min.css   # Swiper.js stylesheet
├── JS/
│   ├── index.js            # Swiper config, cert collapse, ScrollReveal
│   ├── swiper-bundle.min.js
│   └── scrollreveal.min.js
└── images/
    ├── *.png / *.jpg       # Project thumbnails and profile image
    └── Gallery/            # Gallery section images
```

---

## Sections

| Section | Description |
|---|---|
| **Hero** | Name, role typewriter, Three.js 3D scene, CTA buttons |
| **About** | Tabbed panel — Experience, Education, Volunteering, Skills |
| **Expertise** | 4 service/skill area cards with 3D tilt |
| **Certifications** | 21 certifications across 3 collapsible groups (14 Boomi, 2 HackerRank, 5 LinkedIn) |
| **Articles** | Published articles in a Swiper carousel |
| **Projects** | Project cards with links to GitHub/live demos |
| **Gallery** | Auto-playing image carousel |
| **Contact** | Contact details + Google Sheets-powered message form |

---

## Running Locally

No install step required — just open the file in a browser.

```bash
git clone https://github.com/AYODH/Rochani_Riligala.git
cd Rochani_Riligala
# Open index.html in your browser, or serve it locally:
npx serve .
# or
python3 -m http.server 8080
```

> Some browsers block local `file://` access for certain JS APIs. Using a local server (above) avoids that.

---

## Design System

| Token | Value |
|---|---|
| Background | `#080808` |
| Primary accent | `#702670` (purple) |
| Highlight | `#e3b2ff` (lavender) |
| Font | Poppins (300, 400, 500, 600, 700) |

---

## Contact

**Rochani Riligala**  
Managed Services Engineer · Boomi Integration Consultant · BEng (Hons) Software Engineering Undergraduate

- Email: rochaniriligala@gmail.com
- LinkedIn: [linkedin.com/in/rochani-riligala](https://www.linkedin.com/in/rochani-riligala)
- GitHub: [github.com/AYODH](https://github.com/AYODH)
