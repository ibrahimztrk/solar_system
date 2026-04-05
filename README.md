# Solar System — Interactive Orbit Viewer

An interactive 2D solar system visualization built with [Astro](https://astro.build) and [Tailwind CSS](https://tailwindcss.com). View real-time planetary positions, animate orbits forward and backward in time, and jump to any date to see where the planets were or will be.

## Features

- **Real-time orbital mechanics** — mean anomaly approximation using J2000.0 epoch
- **8 planets** with accurate relative orbital periods and distances
- **Moon** orbiting Earth with correct 27.3-day sidereal period
- **Live mode** — continuous animation with adjustable playback speed
- **Date mode** — pick any date to see planetary positions, or animate from that point
- **Hover tooltips** — period, angle, and distance for each planet
- **Bilingual** — English and Turkish
- **Fully responsive** — canvas and controls adapt to any screen size

## Tech Stack

| Layer | Tool |
|---|---|
| Framework | [Astro 5](https://astro.build) |
| Styling | [Tailwind CSS 3](https://tailwindcss.com) |
| Rendering | HTML5 `<canvas>` 2D context |
| Language | Vanilla JavaScript (no framework) |

## Prerequisites

- Node.js 18 or higher
- npm (or any compatible package manager)

## Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd web

# Install dependencies
npm install
```

## Development

```bash
# Start the dev server with hot reload
npm run dev
```

Open **http://localhost:4321** in your browser.

## Production Build

```bash
# Generate static files in dist/
npm run build

# Preview the production build locally
npm run preview
```

## Deployment

The `dist/` folder contains a fully static site that can be deployed anywhere:

- **Netlify** — drag `dist/` to https://app.netlify.com/drop
- **Vercel** — import your GitHub repo, framework preset: Astro
- **GitHub Pages** — push `dist/` to a `gh-pages` branch or use an Astro adapter
- **Any web server** — upload `dist/` contents via FTP or rsync

## Project Structure

```
├── astro.config.mjs        # Astro + Tailwind configuration
├── tailwind.config.mjs     # Tailwind content sources
├── package.json
├── src/
│   ├── layouts/
│   │   └── Base.astro      # Shared HTML shell (viewport, meta, Tailwind)
│   ├── pages/
│   │   └── index.astro     # Homepage — imports SolarSystem component
│   ├── components/
│   │   └── SolarSystem.astro  # Canvas rendering, UI controls, i18n
│   └── styles/
│       └── globals.css     # Tailwind @import directives
└── public/                 # Static assets (favicon, etc.)
```

## Orbital Data

All planetary data (orbital period, mean longitude at J2000.0, semi-major axis) is based on standard J2000.0 epoch elements. Positions are calculated using mean anomaly — sufficient for a visual representation but not intended for scientific precision.

| Body | Period | Source |
|---|---|---|
| Mercury | 87.97 days | J2000.0 elements |
| Venus | 224.70 days | J2000.0 elements |
| Earth | 365.26 days | J2000.0 elements |
| Mars | 686.97 days | J2000.0 elements |
| Jupiter | 4332.59 days | J2000.0 elements |
| Saturn | 10759.22 days | J2000.0 elements |
| Uranus | 30688.5 days | J2000.0 elements |
| Neptune | 60182.0 days | J2000.0 elements |
| Moon | 27.32 days (sidereal) | — |
