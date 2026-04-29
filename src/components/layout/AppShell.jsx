export default function AppShell({ editor, preview }) {
  return (
    <main className="app-shell">
      <h1 className="sr-only">CV Application Builder</h1>
      <aside className="editor-panel" aria-label="Resume editor">
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
