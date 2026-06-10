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
      label: 'Location',
      value: personal.location,
    },
  ].filter((item) => item.value);

  const metaItems = [personal.dateOfBirth, personal.nationality].filter(
    Boolean,
  );

  return (
    <header className="resume-header">
      <h1>{personal.fullName || 'Your Name'}</h1>
      {personal.jobTitle && (
        <p className="resume-header__title">{personal.jobTitle}</p>
      )}
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
      {metaItems.length > 0 && (
        <ul className="resume-meta-list" aria-label="Personal details">
          {metaItems.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )}
    </header>
  );
}
