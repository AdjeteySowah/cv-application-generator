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
      </header>

      <div className="collection-card__body">{children}</div>

      {(onRemove || onCancel || onSave) && (
        <footer className="collection-card__actions">
          {onRemove && (
            <Button
              aria-label={`Remove ${itemLabel || title}`}
              onClick={onRemove}
              variant="dangerGhost"
            >
              Remove
            </Button>
          )}
          <div>
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
          </div>
        </footer>
      )}
    </article>
  );
}
