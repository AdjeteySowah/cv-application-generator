import { useState } from 'react';
import Icon from '../ui/Icon.jsx';

export default function AppShell({ editor, preview }) {
  const [isEditorOpen, setIsEditorOpen] = useState(false);

  return (
    <main className={`app-shell ${isEditorOpen ? 'is-editor-open' : ''}`}>
      <h1 className="sr-only">CV Application Builder</h1>
      <header className="mobile-editor-bar">
        <button
          type="button"
          className="mobile-editor-toggle"
          aria-controls="resume-editor-panel"
          aria-expanded={isEditorOpen}
          onClick={() => setIsEditorOpen((currentValue) => !currentValue)}
        >
          <Icon name={isEditorOpen ? 'x' : 'sliders'} />
          <span>{isEditorOpen ? 'Close editor' : 'Edit resume'}</span>
        </button>
      </header>
      <aside
        className="editor-panel"
        id="resume-editor-panel"
        aria-label="Resume editor"
      >
        {editor}
      </aside>
      <section
        className="preview-panel"
        aria-labelledby="resume-preview-heading"
      >
        <h2 className="sr-only" id="resume-preview-heading">
          Resume preview
        </h2>
        {preview}
      </section>
    </main>
  );
}
