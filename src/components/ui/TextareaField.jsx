export default function TextareaField({
  hint,
  id,
  label,
  required = false,
  rows = 5,
  ...textareaProps
}) {
  return (
    <div className="form-field">
      <label className="form-field__label" htmlFor={id}>
        <span>{label}</span>
        {hint && <span className="form-field__hint">{hint}</span>}
      </label>
      <textarea
        className="form-field__input form-field__textarea"
        data-required-field={required ? 'true' : undefined}
        id={id}
        required={required}
        rows={rows}
        {...textareaProps}
      />
    </div>
  );
}
