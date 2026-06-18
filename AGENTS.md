# AGENTS.md

## Project

This is a Vite + React CV application generator. The current rebuild target is based on the root reference files:

- `cv-builder.png`
- `cv-builder.html`
- `PLANS.md`

Follow `PLANS.md` for the step-by-step rebuild plan before writing implementation code.

## Current Stack

- React 19
- React DOM 19
- Vite
- JavaScript modules
- ESLint flat config
- Prettier config already present in `.prettierrc`

Use JavaScript for app code. Do not migrate to TypeScript unless the user explicitly asks for it.

## Commands

- Install dependencies: `npm install`
- Start development server: `npm run dev`
- Build production output: `npm run build`
- Lint: `npm run lint`
- Preview production build: `npm run preview`

There is currently no test script in `package.json`. If tests are needed, explain the proposed test tooling and ask before installing dependencies.

## Workflow Rules

- Do not work on `main`; use the active feature branch unless the user says otherwise.
- Keep changes clean, readable, and ready for review.
- Use conventional commit messages for logical sets of changes when committing, for example:
  - `feat: rebuild cv builder layout`
  - `refactor: split resume editor into focused components`
  - `chore: update formatting config`
- Keep commits small and meaningful.
- Do not combine unrelated changes into one commit.
- Do not overwrite or revert user changes unless explicitly asked.
- If a new dependency seems useful, explain why it is needed and ask for approval before installing it.

## Design Direction

The target UI is a faithful React implementation of `cv-builder.png` and `cv-builder.html`.

- Match the reference layout, spacing, typography, and colors as closely as practical.
- Do not redesign or "improve" the reference unless the user asks.
- Use Plus Jakarta Sans, with system fallbacks.
- Keep the editor sidebar compact, white, and fixed-width on desktop.
- Keep the resume preview clean, document-like, and spacious.
- Use restrained slate, blue, gray, red, and green colors from the reference.
- Keep border radii mostly between `6px` and `10px`, with pill chips at about `20px`.
- Every clickable element needs hover, focus-visible, and active states.
- Only animate `transform` and `opacity` unless there is a clear reason.

## Accessibility

- Prefer semantic HTML: `header`, `main`, `section`, `aside`, `nav`, `form`, `fieldset`, `legend`, `article`, `footer`, `button`, and proper headings.
- Use real `button` elements for actions.
- Associate labels with inputs and textareas.
- Keep heading order logical.
- Ensure keyboard navigation works.
- Use visible `focus-visible` styles.
- Mark decorative icons with `aria-hidden`.
- Give meaningful icon-only controls accessible names.
- Maintain reasonable text contrast.

## Architecture

- Use functional React components.
- Keep components small and focused on one responsibility.
- Prefer composition over large conditional components.
- Keep top-level app state readable and immutable.
- Prefer custom hooks for reusable logic once the same behavior appears in more than one place.
- Avoid external state management unless the app requirements grow enough to justify it.
- Keep data helpers separate from UI components.
- Keep formatting/parsing helpers separate from rendering components.
- Prefer structured data over string manipulation for resume sections.

## Suggested Component Boundaries

- `App`: top-level state and handlers.
- `AppShell`: page layout.
- `EditorSidebar`: editor rail composition.
- `EditorActionBar`: clear/load actions.
- `EditorSection`: accordion section wrapper.
- `PersonalDetailsForm`: personal fields.
- `SummaryForm`: summary textarea and character count.
- `SkillsForm`: skill inputs and parsing.
- `ProjectForm`, `ExperienceForm`, `EducationForm`, `CertificationForm`: section-specific item forms.
- `CollectionItemCard`: shared item edit frame and actions.
- `BulletEditor`: reusable bullet input behavior.
- `ResumePreview`: full preview composition.
- `ResumeHeader`: name, title, contacts, social badges, and meta chips.
- `PreviewSection`: shared resume section heading/rule wrapper.
- `ProjectsPreview`, `SkillsPreview`, `ExperiencePreview`, `EducationPreview`, `CertificationsPreview`: section renderers.

These names are guidance, not a hard contract. Follow existing project patterns where they still fit.

## Styling Conventions

- Keep global resets and design tokens in `src/styles.css` unless the project is intentionally reorganized.
- Use class names that describe component responsibility.
- Prefer CSS custom properties for repeated colors, spacing, radii, and shadows.
- Avoid inline styles unless a value is truly dynamic.
- Avoid one-off magic values when a named token would be clearer.
- Ensure responsive constraints prevent layout overflow.
- Do not create nested card-heavy layouts; the reference uses a compact sidebar and a clean preview page.

## Data Conventions

- Keep resume state realistic and serializable.
- Include stable `id` values for collection entries.
- Keep optional fields optional in the preview; empty optional values should not render empty chips or blank sections.
- Store bullet lists as arrays when practical.
- Parse comma-separated skills into trimmed, non-empty tags for preview.
- Keep example data aligned with the reference design.

## Testing And Validation

(This project uses Node installed through nvm in WSL.
Before running npm, node, vite, eslint, or build commands, run:
source ~/.nvm/nvm.sh)
Before considering a rebuild complete:

- Run `npm run lint`.
- Run `npm run build`.
- Manually verify the main flows:
  - clear resume
  - load example
  - edit personal details
  - edit professional summary
  - edit projects
  - edit skills
  - edit experience
  - edit education
  - edit certifications and awards
  - remove collection items
  - save/cancel item edits if implemented
  - confirm optional empty fields hide correctly in preview
- Compare the browser output against `cv-builder.png`.
- Check desktop and narrow viewport behavior.

When adding new behavior, add tests if a test framework exists. If no framework exists and tests are valuable, ask before adding one.

## Done State

A task is done when:

- The requested behavior is implemented.
- The UI remains faithful to the reference.
- The code is split into clear, reusable components.
- Accessibility basics are handled.
- Lint and build pass, or any failure is documented with the reason.
- No new dependency was installed without approval.
- The final handoff includes what changed, how it was verified, and any remaining limitations.
