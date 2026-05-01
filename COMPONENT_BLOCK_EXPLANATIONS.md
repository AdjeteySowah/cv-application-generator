# Component Block Explanations

This document explains the meaningful code blocks in the resume builder components, data helpers, and utility helpers.

## `src/components/editor/ActionBar.jsx`

`import Button from '../ui/Button.jsx';` - Reuses the shared button primitive so the action controls keep consistent markup and styling.

`import Icon from '../ui/Icon.jsx';` - Reuses the shared SVG icon component for the trash icon in the clear action.

`ActionBar` - Renders the top editor action area and receives callbacks for clearing the resume and loading example content.

`<section className="action-bar" aria-label="Resume actions">` - Groups the action controls semantically and gives assistive technology a clear label for the button region.

`Clear Resume` button - Calls `onClearResume`, uses the danger ghost variant, and displays the trash icon to communicate a destructive reset action.

`Load Example` button - Calls `onLoadExample` and uses the secondary variant to restore the sample resume data.

## `src/components/editor/EditorSection.jsx`

`import { useId, useState } from 'react';` - Brings in React state for collapse behavior and stable IDs for accessible control relationships.

`import Button from '../ui/Button.jsx';` - Reuses the shared button primitive for the add-entry control.

`import Icon from '../ui/Icon.jsx';` - Reuses the shared icon component for the section icon, chevron, and add icon.

`import EntryListItem from './EntryListItem.jsx';` - Renders each education or experience item through a focused list item component.

`EditorSection` props - Accepts display text, entry data, icon choice, initial open state, add behavior, and visibility toggle behavior so one component can serve both education and experience.

`const [isOpen, setIsOpen] = useState(defaultOpen);` - Tracks whether the section body is expanded or collapsed, seeded from the optional `defaultOpen` prop.

`const contentId = useId();` - Creates a unique ID that links the toggle button to the collapsible content with `aria-controls`.

`<section className={...}>` - Wraps the whole editor section in semantic section markup and adds an `is-open` class for styling the expanded state.

`<header className="editor-section__header">` - Separates the section heading and collapse button from the section content.

`<h2 className="editor-section__title">` - Provides a proper heading level for the editor section and displays the configured section icon and title.

`Collapse/expand button` - Uses a real button with `aria-controls`, `aria-expanded`, and an accessible label, then toggles `isOpen` on click.

`Content div` - Hides the list and footer when collapsed with the `hidden` attribute and exposes the matching ID for accessibility.

`Entry list` - Renders entries as a semantic unordered list and labels the list according to the section title.

`entries.map(...)` - Converts each entry object into an `EntryListItem` and wires each item to toggle its own visibility by ID.

`Footer add button` - Places the add-entry action in a footer and calls `onAdd` with the shared pill button style.

## `src/components/editor/EditorSidebar.jsx`

`import ActionBar from './ActionBar.jsx';` - Pulls in the top-level clear/load controls for the editor sidebar.

`import EditorSection from './EditorSection.jsx';` - Pulls in the reusable collapsible section used for both education and experience.

`import PersonalDetailsForm from './PersonalDetailsForm.jsx';` - Pulls in the controlled personal details form.

`getEducationLabel` - Returns the school name for an education entry, or a fallback label when the school field is empty.

`getExperienceLabel` - Returns the company name for an experience entry, or a fallback label when the company field is empty.

`EditorSidebar` props - Receives the full resume object and all editor callbacks from `App` so this component can compose the editing UI without owning application state.

`educationEntries` - Copies each education entry and adds a display-only `label` property for the sidebar list.

`experienceEntries` - Copies each experience entry and adds a display-only `label` property for the sidebar list.

`<div className="editor-stack">` - Provides the vertical layout wrapper for the editor controls.

`ActionBar render` - Passes clear and load callbacks down to the action button area.

`PersonalDetailsForm render` - Passes personal details data and the change handler down to the controlled form.

`Education EditorSection render` - Configures the reusable section for education, opens it by default, and adapts add/toggle callbacks to the `education` collection.

`Experience EditorSection render` - Configures the reusable section for experience and adapts add/toggle callbacks to the `experience` collection.

## `src/components/editor/EntryListItem.jsx`

`import Icon from '../ui/Icon.jsx';` - Reuses shared SVG icons for visible and hidden states.

`EntryListItem` props - Receives one prepared entry and the callback that should run when its visibility button is clicked.

`visibilityAction` - Converts the current visibility boolean into human-readable button action text for the accessible label.

`<li className={...}>` - Renders one semantic list item and adds `is-muted` styling when the entry is hidden.

`Entry label span` - Displays the entry label prepared by `EditorSidebar`.

`Visibility button` - Uses a real button with an accessible label and calls `onToggleVisibility` when activated.

`Visibility icon` - Shows `eye` for visible entries and `eyeOff` for hidden entries.

## `src/components/editor/PersonalDetailsForm.jsx`

`import TextInput from '../ui/TextInput.jsx';` - Reuses the shared labeled input component for every personal details field.

`personalFields` - Defines the personal detail fields as metadata so the form can render inputs from one reusable configuration array.

`fullName field config` - Defines the full name input with a `name` autocomplete hint.

`email field config` - Defines the email input with `type="email"`, an email autocomplete hint, and a recommended helper label.

`phone field config` - Defines the phone input with `type="tel"`, a telephone autocomplete hint, and a recommended helper label.

`address field config` - Defines the address input with a street-address autocomplete hint and a recommended helper label.

`PersonalDetailsForm` props - Receives the current personal details object and the callback used to update individual fields.

`<form ... onSubmit={...}>` - Wraps the inputs in a semantic form and prevents page reload if Enter submits the form.

`<fieldset>` - Groups the personal detail inputs as one related form section.

`<legend>Personal Details</legend>` - Gives the fieldset an accessible section name and visible heading.

`personalFields.map(...)` - Creates one `TextInput` per configured field to avoid duplicating input markup.

`TextInput props` - Passes label, hint, type, autocomplete, controlled value, and a field-specific change handler into the shared input component.

## `src/components/layout/AppShell.jsx`

`AppShell` props - Receives already-composed editor and preview React nodes so the layout stays separate from feature-specific logic.

`<main className="app-shell">` - Marks the primary page content and provides the app-level layout container.

`Screen-reader h1` - Adds a page-level heading for accessibility without changing the visual design.

`<aside className="editor-panel" aria-label="Resume editor">` - Identifies the editor as complementary content and gives it an accessible name.

`Editor slot` - Renders the editor UI passed in from `App`.

`<section className="preview-panel" aria-labelledby="resume-preview-heading">` - Defines the preview area as a named section.

`Screen-reader h2` - Provides an accessible heading for the preview section without adding visible text.

`Preview slot` - Renders the preview UI passed in from `App`.

## `src/components/preview/EducationEntryPreview.jsx`

`import { formatDateRange } from '../../utils/resumeFormatting.js';` - Reuses the shared date range helper so education and experience entries format dates consistently.

`EducationEntryPreview` props - Receives one education entry to render in the resume preview.

`<article className="resume-entry">` - Marks each education item as a standalone resume entry.

`Meta column` - Displays the formatted date range and conditionally displays the location when present.

`Details column` - Displays the school as the entry heading and conditionally displays the degree when present.

## `src/components/preview/ExperienceEntryPreview.jsx`

`import { formatDateRange } from '../../utils/resumeFormatting.js';` - Reuses the shared date range helper so experience and education entries format dates consistently.

`ExperienceEntryPreview` props - Receives one experience entry to render in the resume preview.

`<article className="resume-entry">` - Marks each experience item as a standalone resume entry.

`Meta column` - Displays the formatted date range and conditionally displays the location when present.

`Details column` - Displays the company as the entry heading and conditionally displays the role and summary when present.

`Summary paragraph` - Adds a specific class to the experience summary so longer descriptive text can be styled separately.

## `src/components/preview/ResumeHeader.jsx`

`import Icon from '../ui/Icon.jsx';` - Reuses the shared icon component for email, phone, and address contact icons.

`ResumeHeader` props - Receives the personal details object used at the top of the resume preview.

`contactItems` - Normalizes email, phone, and address into a renderable list of icon, label, and value objects.

`contactItems.filter(...)` - Removes empty contact fields so blank values do not render in the preview.

`<header className="resume-header">` - Marks the top resume area as the document header.

`Name heading` - Displays the entered full name or `Your Name` as a fallback.

`Conditional contact list` - Only renders the contact list when at least one contact value exists.

`Contact list markup` - Uses a semantic unordered list with an accessible label for the set of contact details.

`contactItems.map(...)` - Renders each available contact item with its icon and value.

## `src/components/preview/ResumePreview.jsx`

`import EducationEntryPreview from './EducationEntryPreview.jsx';` - Uses the focused education entry renderer inside the full preview.

`import ExperienceEntryPreview from './ExperienceEntryPreview.jsx';` - Uses the focused experience entry renderer inside the full preview.

`import ResumeHeader from './ResumeHeader.jsx';` - Uses the resume header renderer for personal information.

`import ResumeSection from './ResumeSection.jsx';` - Uses the shared section wrapper for education and professional experience sections.

`hasAnyValue` - Checks whether an entry has at least one non-empty field from a supplied field list.

`ResumePreview` props - Receives the complete resume object from application state.

`educationEntries` - Filters education entries so only visible entries with meaningful content appear in the preview.

`experienceEntries` - Filters experience entries so only visible entries with meaningful content appear in the preview.

`<article className="resume-page" aria-label="Resume preview document">` - Treats the preview as a standalone resume document and gives it an accessible label.

`ResumeHeader render` - Places personal details at the top of the preview.

`Body wrapper` - Provides the layout container for the resume content sections below the header.

`Education ResumeSection` - Renders visible education entries inside the shared section wrapper.

`Professional Experience ResumeSection` - Renders visible experience entries inside the shared section wrapper.

## `src/components/preview/ResumeSection.jsx`

`import { useId } from 'react';` - Brings in stable ID generation for accessible heading relationships.

`ResumeSection` props - Receives a section title and children to render inside that named section.

`const headingId = useId();` - Creates a unique heading ID so the section can reference its visible heading with `aria-labelledby`.

`<section className="resume-section" aria-labelledby={headingId}>` - Wraps resume content in a semantic named section.

`Section heading` - Displays the section title and supplies the ID used by `aria-labelledby`.

`Content wrapper` - Groups the section children so spacing can be applied consistently.

## `src/components/ui/Button.jsx`

`Button` props - Accepts button text, an optional custom class, an optional icon, a visual variant, and any additional native button props.

`classNames` - Builds the final class string from the base button class, variant class, and optional custom class while removing empty values.

`<button ... type="button">` - Renders an actual button element and defaults to `type="button"` so it does not accidentally submit forms.

`Icon wrapper` - Renders an optional icon in an `aria-hidden` span because the visible button text already communicates the action.

`Children span` - Wraps the button label so text can be styled independently from the icon.

`buttonProps spread` - Passes through native button props such as `onClick`, `aria-label`, or `disabled`.

## `src/components/ui/Icon.jsx`

`iconPaths` - Stores reusable SVG path fragments keyed by logical icon names.

`briefcase icon` - Draws the work/experience symbol used by the experience editor section.

`chevronDown icon` - Draws the collapse/expand chevron used by editor section toggles.

`eye icon` - Draws the visible-state symbol used by entry visibility buttons.

`eyeOff icon` - Draws the hidden-state symbol used by entry visibility buttons.

`graduationCap icon` - Draws the education symbol used by the education editor section.

`mail icon` - Draws the email contact symbol used in the resume header.

`mapPin icon` - Draws the location symbol used in the resume header.

`phone icon` - Draws the phone contact symbol used in the resume header.

`plus icon` - Draws the add symbol used in add-entry buttons.

`trash icon` - Draws the delete/reset symbol used by the clear resume action.

`Icon` props - Receives an icon name and uses it to select the matching SVG path fragment.

`<svg ... aria-hidden="true">` - Renders decorative SVG markup that is hidden from assistive technology because surrounding text or labels describe the action.

`<g ...>` - Applies shared stroke styling to every icon path so all icons have a consistent visual weight.

`{iconPaths[name]}` - Inserts the selected icon path into the shared SVG wrapper.

## `src/components/ui/TextInput.jsx`

`TextInput` props - Accepts a label, ID, optional hint, optional input type, and any additional native input props.

`<div className="form-field">` - Provides a consistent wrapper for label/input spacing and styling.

`<label ... htmlFor={id}>` - Associates the visible label with the input using the shared ID.

`Label text span` - Displays the main input label.

`Optional hint span` - Displays helper text such as `recommended` only when a hint is supplied.

`<input ...>` - Renders the controlled input with the configured ID, type, styling class, and forwarded input props.

## `src/data/resumeData.js`

`blankPersonalDetails` - Defines the empty shape for personal details so a cleared resume always has predictable fields.

`exampleResume` - Provides realistic starter data for personal details, education entries, and experience entries used by the load example action and initial app state.

`exampleResume.personal` - Stores the example name, email, phone number, and address displayed in the resume header and personal details form.

`exampleResume.education` - Stores example education entries, including one visible entry and one hidden entry to demonstrate visibility toggles.

`exampleResume.experience` - Stores example professional experience entries with company, role, location, dates, visibility, and summary text.

`cloneResume` - Deep-clones a resume object through JSON serialization so state receives a fresh copy instead of sharing references with the seed data.

`createEntryId` - Builds a unique-ish ID from a collection prefix, the current timestamp, and a random suffix for newly added entries.

`createBlankEducation` - Returns a new empty education entry with the same field shape as example education items and visibility enabled by default.

`createBlankExperience` - Returns a new empty experience entry with the same field shape as example experience items and visibility enabled by default.

`createEmptyResume` - Returns a cleared resume object with empty education and experience arrays plus blank personal details.

`createExampleResume` - Returns a cloned copy of `exampleResume` so callers can safely reset state to the example without mutating the source object.

## `src/utils/resumeFormatting.js`

`formatDateRange` - Converts start and end date strings into a single preview-friendly date range.

`Both dates branch` - Returns `startDate - endDate` when both values are present.

`Fallback return` - Returns whichever single date exists, or an empty string when both values are missing.
