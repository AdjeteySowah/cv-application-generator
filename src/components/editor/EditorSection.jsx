import { useId, useState } from 'react';
import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';

export default function EditorSection({
  addLabel,
  children,
  defaultOpen = false,
  iconName,
  marker,
  onAdd,
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
        <div className="editor-section__body">
          {children}
        </div>

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
