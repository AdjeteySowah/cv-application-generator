# CV Generator/Builder App

CV Generator/Builder App is a Vite + React application for building a polished, document-style CV. It provides a compact editor sidebar for personal details, professional summary, projects, skills, experience, education, and certifications, while rendering a live resume preview beside it.

Live demo: not hosted yet.

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

## Usage

### Desktop

1. Use the editor sidebar on the left to update resume content.
2. Open each accordion section and fill in the relevant fields.
3. Use `Save` on project, experience, education, and certification cards to apply edits.
4. Use `Cancel` to discard unsaved edits in a card.
5. Use `Remove` to delete a collection item.
6. Check the live resume preview on the right as you edit.
7. Use `Clear Resume` to reset to an empty resume.
8. Use `Load Example` to restore the sample resume data.

### Tablet and Mobile

1. Tap `Edit resume` at the top of the screen to open the editor dropdown.
2. Edit sections the same way as desktop.
3. Tap `Close editor` to return to the resume preview.
4. The resume preview remains readable on narrow screens and avoids horizontal overflow.

## Downloading a Resume

Use the `Download Resume` button in the editor sidebar. The app opens the browser print dialog, where the resume can be saved as a PDF using the browser's native print-to-PDF feature.
Depending on your browser, you may need to uncheck "Headers and Footers" and enable "Background Graphics" in the print dialog for the best PDF output.

## Project Structure

- `src/App.jsx` manages top-level resume state and handlers.
- `src/components/editor/` contains editor sections, forms, collection cards, and reusable bullet editing controls.
- `src/components/preview/` renders the resume document preview.
- `src/components/layout/` contains the app shell layout.
- `src/components/ui/` contains shared UI primitives such as buttons, icons, inputs, and textareas.
- `src/data/resumeData.js` contains example resume data and blank item factories.
- `src/styles.css` contains resets, design tokens, layout, editor, preview, responsive, and print styles.

## Credits

- Most of the code was written with help from Codex.
