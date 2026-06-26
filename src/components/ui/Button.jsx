export default function Button({
  children,
  className = '',
  icon,
  variant,
  ...buttonProps
}) {
  const classNames = ['button', variant && `button--${variant}`, className]
    .filter(Boolean)
    .join(' ');

  return (
    <button className={classNames} type="button" {...buttonProps}>
      {icon && (
        <span className="button__icon" aria-hidden="true">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </button>
  );
}
