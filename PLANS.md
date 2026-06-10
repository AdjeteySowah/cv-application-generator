# CV Builder Rebuild Plan

## Source Inputs

- `cv-builder.png`: visual reference for the target CV builder.
- `cv-builder.html`: static HTML/CSS reference for layout, spacing, color, typography, labels, buttons, icons, and example content.
- Current app: Vite + React, JavaScript, component folders under `src/components`, app state in `src/App.jsx`, data helpers in `src/data/resumeData.js`, global styling in `src/styles.css`.

## Target Design Summary

The rebuild should produce a two-pane CV builder for Desktop view:

- A fixed-width left editor sidebar, about `288px` wide, white background, subtle right border, stacked accordion sections, and a bottom download button.
- A large right resume preview on a white canvas with generous page padding, centered candidate header, contact/meta/social chips, and resume content sections.
- Compact form controls using Plus Jakarta Sans, small labels, pale input backgrounds, slate borders, and restrained button styling.
- Resume preview sections with uppercase headings, dark underline rules, `16px` body text, chip-style skills, and right-aligned dates for experience, education, and certifications.

## Visual System To Match

- Font: Plus Jakarta Sans first, then system UI fallback.
- App background: `#f1f5f9`.
- Sidebar background: `#ffffff`.
- Sidebar divider: `#e2e8f0`.
- Main text: `#0f172a`, `#111827`, `#334155`.
- Muted text: `#64748b`, `#94a3b8`, `#cbd5e1`.
- Input background: `#f8fafc`.
- Danger action: `#dc2626` or `#ef4444` depending on prominence.
- Save action: `#22c55e`.
- Download action: `#374151`.
- Border radius: mostly `6px` to `10px`; chips use `20px`.
- Avoid redesigning the supplied reference. Match the screenshot and HTML as closely as practical.

## Data Model

Replace the current minimal resume shape with a fuller structure:

- `personal`: full name, job title, phone, email, location, date of birth, nationality, GitHub URL, LinkedIn URL, X/Twitter URL.
- `summary`: professional summary text with a 500 character target limit.
- `projects`: id, name, link, date finished, tools/technologies, bullet accomplishments, saved/editing state if needed.
- `skills`: hard skills and optional soft skills as comma-separated editor values and parsed preview tags.
- `experience`: id, job title, company, start date, end date, bullet responsibilities/achievements.
- `education`: id, school name, location, degree, start date, end date.
- `certifications`: id, issuer, certificate/award name, date acquired.

Keep example data aligned with the content shown in `cv-builder.html` and `cv-builder.png`.

## Component Plan

1. `App`

   - Own top-level resume state.
   - Provide handlers for field changes, section item changes, clearing, loading example data, saving/canceling item edits, removing items, and downloading when implemented.

2. `AppShell`

   - Render the sidebar and preview as the root layout.
   - Keep layout responsibility separate from form and preview logic.

3. `EditorSidebar`

   - Render the action bar, editor sections, and sticky/bottom download area.
   - Keep sidebar width and vertical flow consistent with the reference.

4. `EditorActionBar`

   - Provide `Clear Resume` and `Load Example`.
   - Use real `button` elements and accessible labels/icons.

5. `EditorSection`

   - Shared accordion wrapper with title, icon, optional marker, chevron, and content.
   - Manage open/closed state either locally or from parent state.

6. `PersonalDetailsForm`

   - Render personal details fields exactly represented in the reference.
   - Use proper `label` and input associations.

7. `SummaryForm`

   - Render helper text, textarea, and character count.
   - Enforce or clearly display the 500 character target.

8. `CollectionItemCard`

   - Shared frame for project, experience, education, and certification edit cards.
   - Provide remove, cancel, and save action row.

9. `ProjectForm`, `ExperienceForm`, `EducationForm`, `CertificationForm`

   - Focus each form component on its own fields.
   - Reuse field, date row, bullet editor, and item action components where helpful.

10. `SkillsForm`

    - Capture hard and soft skills as comma-separated strings.
    - Convert non-empty values into preview tags.

11. `BulletEditor`

    - Support bullet entry for project features and experience achievements.
    - Start simple with textarea-backed parsing unless a richer bullet UI is needed.

12. `ResumePreview`

    - Render the full document preview from resume state.
    - Compose smaller preview sections and entries.

13. `ResumeHeader`

    - Render name, job title, contact chips, social badges, and meta chips.
    - Hide optional chips when source values are empty.

14. `PreviewSection`

    - Shared preview section with uppercase title and underline rule.

15. `ProjectsPreview`, `SkillsPreview`, `ExperiencePreview`, `EducationPreview`, `CertificationsPreview`

    - Render each resume section using semantic markup.
    - Hide optional sections when they have no meaningful data.

16. `Icon`

    - Prefer existing icon approach if it remains useful.
    - Keep icons accessible: decorative icons use `aria-hidden`, meaningful icon-only controls use labels.

17. Custom hooks
    - Add only when they remove meaningful duplication.
    - Likely candidates: `useResumeState`, `useAccordionSections`, `useCharacterCount`, and `useCollectionItems`.

## Implementation Steps

1. Confirm baseline

   - Run `npm install` only if dependencies are missing.
   - Run `npm run lint` to understand the current baseline.
   - Run `npm run build` to verify the project starts from a known state.

2. Preserve project configuration

   - Keep Vite + React + JavaScript.
   - Keep existing ESLint configuration unless a real issue requires a small adjustment.
   - Keep the existing `.prettierrc`; the project already has a practical minimal Prettier config.

3. Rebuild data helpers

   - Update `src/data/resumeData.js` around the new resume shape.
   - Add blank item factories for projects, experience, education, and certifications.
   - Add example resume data that matches the reference.

4. Rework top-level state

   - Replace the current education/experience-only handlers with generic handlers for nested fields and collection items.
   - Keep state updates immutable and easy to read.
   - Avoid adding an external state-management library.

5. Rebuild layout

   - Update `AppShell` to match the fixed sidebar plus flexible preview design.
   - Make the sidebar usable at smaller widths; stack panes on narrow screens if needed.

6. Build editor primitives

   - Implement reusable field, textarea, section, action button, item card, and bullet editor components.
   - Ensure every control has accessible labels and keyboard-visible focus.

7. Build editor sections

   - Implement Personal Details, Professional Summary, Personal Projects, Skills, Experience, Education, and Certifications & Awards.
   - Match labels, optional text, placeholders, helper text, action buttons, and character counts from the reference.

8. Build resume preview

   - Implement the centered header, contact chips, social badges, meta chips, summary, projects, skills, experience, education, and certifications.
   - Ensure preview output gracefully omits empty optional values.

9. Recreate styling

   - Replace the current large-card visual system with the supplied compact sidebar and clean document preview.
   - Use CSS custom properties for repeated colors, borders, radii, spacing, and shadows.
   - Keep class names meaningful and component-oriented.

10. Add responsive behavior

    - Desktop: sidebar remains narrow and preview gets the remaining width. If all sections in the sidebar is opened and it gets longer than the preview section, it should have it's own scrolling feature, that means the sidebar and preview can scroll independently.
    - Tablet/mobile: create a button which when clicked, a dropdown menu falls from top of the screen and has all the content of the sidebar. It should be functional. Prevent horizontal overflow, and keep the resume preview readable.
    - Verify text does not overflow buttons, chips, or form fields.

11. Add download behavior

    - Implement only after the visual rebuild is stable.
    - Prefer browser-native print/PDF behavior first unless requirements call for a dependency.
    - Ask before installing PDF/export dependencies.

12. Testing and validation

    - Run `npm run lint`.
    - Run `npm run build`.
    - Manually test: clear resume, load example, edit fields, edit each collection section, remove items, save/cancel item changes, optional empty fields, keyboard focus, and responsive layout.
    - If a test framework is added later, write focused tests for data helpers and resume state handlers.

13. Visual QA

    - Start the Vite dev server with `npm run dev`.
    - Open the app in a browser and compare it against `cv-builder.png`.
    - Check spacing, typography, colors, borders, section order, chip rendering, and sidebar width.
    - Iterate until the screenshot is visually close to the reference.

14. Documentation and final handoff
    - Update README only if run instructions or user-facing behavior change.
    - Summarize components created/refactored and explain why the structure is maintainable.
    - Mention branch, commits, assumptions, limitations, and follow-up work.

## Constraints

- Do not replace React or Vite.
- Use JavaScript, not TypeScript, unless the user explicitly approves a migration.
- Do not install new dependencies without first explaining why and asking for approval.
- Keep components small, functional, and focused.
- Prefer custom hooks for reusable behavior once duplication is real.
- Use semantic HTML and accessible form patterns.
- Keep the design faithful to `cv-builder.png` and `cv-builder.html`.
- Avoid unrelated refactors while rebuilding.
- Do not modify user changes outside the rebuild scope.

## Done State

The rebuild is done when:

- The app visually matches the supplied CV builder reference closely on desktop.
- The editor can update all preview sections from realistic resume state.
- Clear and load example actions work.
- Optional values do not leave awkward empty UI in the preview.
- The layout remains usable on smaller screens.
- `npm run lint` passes.
- `npm run build` passes.
- Any new dependencies were approved before installation.
- The final response documents what changed, how to run it, what was tested, and any remaining limitations.
