import Icon from '../ui/Icon.jsx';

export default function EntryListItem({ entry, onToggleVisibility }) {
  const isVisible = entry.isVisible ?? true;
  const visibilityAction = isVisible ? 'Hide' : 'Show';

  return (
    <li className={`entry-list__item ${isVisible ? '' : 'is-muted'}`}>
      <span className="entry-list__label">{entry.label}</span>
      {onToggleVisibility && (
        <button
          type="button"
          className="icon-button entry-list__visibility"
          aria-label={`${visibilityAction} ${entry.label}`}
          onClick={onToggleVisibility}
        >
          <Icon name={isVisible ? 'eye' : 'eyeOff'} />
        </button>
      )}
    </li>
  );
}
