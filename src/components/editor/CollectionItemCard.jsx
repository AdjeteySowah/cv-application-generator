import Button from '../ui/Button.jsx';

export default function CollectionItemCard({
  children,
  itemLabel,
  onCancel,
  onRemove,
  onSave,
  title,
}) {
  return (
    <article className="collection-card" aria-label={itemLabel || title}>
      <header className="collection-card__header">
        <h3>{title}</h3>
        {onRemove && (
          <Button
            aria-label={`Remove ${itemLabel || title}`}
            onClick={onRemove}
            variant="dangerGhost"
          >
            Remove
          </Button>
        )}
      </header>

      <div className="collection-card__body">{children}</div>

      {(onCancel || onSave) && (
        <footer className="collection-card__actions">
          {onCancel && (
            <Button onClick={onCancel} variant="secondary">
              Cancel
            </Button>
          )}
          {onSave && (
            <Button onClick={onSave} variant="success">
              Save
            </Button>
          )}
        </footer>
      )}
    </article>
  );
}
