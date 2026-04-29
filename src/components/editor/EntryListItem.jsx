import Icon from '../ui/Icon.jsx';

export default function EntryListItem({ entry, onToggleVisibility }) {
  const visibilityAction = entry.isVisible ? 'Hide' : 'Show';

  return (
    <li className={`entry-list__item ${entry.isVisible ? '' : 'is-muted'}`}>
      <span className="entry-list__label">{entry.label}</span>
      <button
        type="button"
        className="icon-button entry-list__visibility"
        aria-label={`${visibilityAction} ${entry.label}`}
        onClick={onToggleVisibility}
      >
        <Icon name={entry.isVisible ? 'eye' : 'eyeOff'} />
      </button>
    </li>
  );
}
