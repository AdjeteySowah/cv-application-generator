# CV Generator/Builder App

## Project Title and Description

CV Generator/Builder App is a Vite + React application for building a polished, document-style CV from structured resume data. It provides a compact editor sidebar for personal details, summary, projects, skills, experience, education, and certifications, while rendering a live resume preview beside it.

The rebuild is based on the included reference design files, `cv-builder.png` and `cv-builder.html`, with a focus on matching the original layout, spacing, typography, colors, and interaction patterns.

## Features

- Live two-pane CV builder with editor controls and resume preview.
- Personal details, professional summary, projects, skills, experience, education, and certifications sections.
- Add, remove, cancel, and save behavior for collection entries.
- Comma-separated skills rendered as preview chips.
- Optional fields are hidden from the preview when empty.
- Clear resume and load example actions.
- Browser-native print/PDF download flow.
- Responsive editor dropdown for tablet and mobile viewports.
- Accessible form labels, semantic sections, keyboard-visible focus states, and real button controls.

## Screenshots

The target design reference is stored at:

- `cv-builder.png`

The static reference implementation is stored at:

- `cv-builder.html`

## Installation

This project uses Node through `nvm` in WSL. Before running npm commands in this environment, load nvm:

```bash
source ~/.nvm/nvm.sh
```

Install dependencies:

```bash
npm install
```

## Usage

Start the development server:

```bash
source ~/.nvm/nvm.sh && npm run dev
```

Build for production:

```bash
source ~/.nvm/nvm.sh && npm run build
```

Lint the project:

```bash
source ~/.nvm/nvm.sh && npm run lint
```

Preview the production build:

```bash
source ~/.nvm/nvm.sh && npm run preview
```

## Downloading a Resume

Use the `Download Resume` button in the editor sidebar. The app opens the browser print dialog, where the resume can be saved as a PDF using the browser's native print-to-PDF feature.

## Project Structure

- `src/App.jsx` manages top-level resume state and handlers.
- `src/components/editor/` contains editor sections, forms, collection cards, and reusable bullet editing controls.
- `src/components/preview/` renders the resume document preview.
- `src/components/layout/` contains the app shell layout.
- `src/components/ui/` contains shared UI primitives such as buttons, icons, inputs, and textareas.
- `src/data/resumeData.js` contains example resume data and blank item factories.
- `src/styles.css` contains resets, design tokens, layout, editor, preview, responsive, and print styles.

## Credits

- Built with React, React DOM, and Vite.
- Typography uses Plus Jakarta Sans with system fallbacks.
- Design target provided by `cv-builder.png` and `cv-builder.html`.
