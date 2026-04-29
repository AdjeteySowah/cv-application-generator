import Icon from '../ui/Icon.jsx';

export default function ResumeHeader({ personal }) {
  const contactItems = [
    {
      iconName: 'mail',
      label: 'Email',
      value: personal.email,
    },
    {
      iconName: 'phone',
      label: 'Phone',
      value: personal.phone,
    },
    {
      iconName: 'mapPin',
      label: 'Address',
      value: personal.address,
    },
  ].filter((item) => item.value);

  return (
    <header className="resume-header">
      <h1>{personal.fullName || 'Your Name'}</h1>
      {contactItems.length > 0 && (
        <ul className="resume-contact-list" aria-label="Contact details">
          {contactItems.map((item) => (
            <li key={item.label}>
              <Icon name={item.iconName} />
              <span>{item.value}</span>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
