import TextareaField from '../ui/TextareaField.jsx';

function bulletsToText(bullets) {
  return bullets.join('\n');
}

export default function BulletEditor({
  bullets = [],
  hint = 'One bullet per line',
  id,
  label,
  onChange,
  placeholder,
}) {
  return (
    <TextareaField
      hint={hint}
      id={id}
      label={label}
      onChange={(event) => onChange(event.target.value)}
      placeholder={placeholder}
      rows={5}
      value={bulletsToText(bullets)}
    />
  );
}
