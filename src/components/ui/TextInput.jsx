export default function TextInput({
  hint,
  id,
  label,
  required = false,
  type = 'text',
  ...inputProps
}) {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>
        <span>{label}</span>
        {hint && <span className="form-field__hint">{hint}</span>}
      </label>
      <input
        className="form-field__input"
        data-required-field={required ? 'true' : undefined}
        id={id}
        required={required}
        type={type}
        {...inputProps}
      />
    </div>
  );
}
