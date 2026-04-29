import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';

export default function ActionBar({ onClearResume, onLoadExample }) {
  return (
    <section className="action-bar" aria-label="Resume actions">
      <Button
        icon={<Icon name="trash" />}
        onClick={onClearResume}
        variant="dangerGhost"
      >
        Clear Resume
      </Button>
      <Button onClick={onLoadExample} variant="secondary">
        Load Example
      </Button>
    </section>
  );
}
