import TextareaField from '../ui/TextareaField.jsx';

const SUMMARY_LIMIT = 500;

export default function SummaryForm({ onSummaryChange, summary }) {
  const characterCount = summary.length;

  return (
    <form
      className="editor-form"
      onSubmit={(event) => event.preventDefault()}
    >
      <TextareaField
        hint="Aim for 3-5 focused sentences"
        id="professional-summary"
        label="Summary"
        maxLength={SUMMARY_LIMIT}
        onChange={(event) => onSummaryChange(event.target.value)}
        placeholder="E.g. Dedicated Digital Marketing Associate with experience in..."
        rows={4}
        value={summary}
      />
      <p className="character-count" aria-live="polite">
        {characterCount}/{SUMMARY_LIMIT}
      </p>
    </form>
  );
}
