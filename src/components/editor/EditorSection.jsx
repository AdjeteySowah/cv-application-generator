import { useId, useState } from 'react';
import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';
import EntryListItem from './EntryListItem.jsx';

export default function EditorSection({
  addLabel,
  children,
  defaultOpen = false,
  entries = [],
  iconName,
  marker,
  onAdd,
  onToggleEntryVisibility,
  title,
}) {
  const [isOpen, setIsOpen] = useState(defaultOpen);
  const contentId = useId();

  return (
    <section className={`editor-section ${isOpen ? 'is-open' : ''}`}>
      <header className="editor-section__header">
        <h2 className="editor-section__title">
          {iconName && <Icon name={iconName} />}
          <span>{title}</span>
          {marker && <span className="editor-section__marker">{marker}</span>}
        </h2>
        <button
          type="button"
          className="icon-button editor-section__toggle"
          aria-controls={contentId}
          aria-expanded={isOpen}
          aria-label={`${isOpen ? 'Collapse' : 'Expand'} ${title}`}
          onClick={() => setIsOpen((currentValue) => !currentValue)}
        >
          <Icon name="chevronDown" />
        </button>
      </header>

      <div
        className="editor-section__content"
        hidden={!isOpen}
        id={contentId}
      >
        {children ? (
          <div className="editor-section__body">{children}</div>
        ) : (
          <ul className="entry-list" aria-label={`${title} entries`}>
            {entries.map((entry) => (
              <EntryListItem
                entry={entry}
                key={entry.id}
                onToggleVisibility={
                  onToggleEntryVisibility
                    ? () => onToggleEntryVisibility(entry.id)
                    : undefined
                }
              />
            ))}
          </ul>
        )}

        {onAdd && addLabel && (
          <footer className="editor-section__footer">
            <Button icon={<Icon name="plus" />} onClick={onAdd} variant="pill">
              {addLabel}
            </Button>
          </footer>
        )}
      </div>
    </section>
  );
}
