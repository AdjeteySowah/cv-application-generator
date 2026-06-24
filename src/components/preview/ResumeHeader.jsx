import Icon from '../ui/Icon.jsx';
import { formatDate } from '../../utils/resumeFormatting.js';

export default function ResumeHeader({ personal }) {
  const contactItems = [
    {
      iconName: 'mail',
      label: 'Email',
      value: personal.email,
      href: `mailto:${personal.email}`,
    },
    {
      iconName: 'phone',
      label: 'Phone',
      value: personal.phone,
      href: `tel:${personal.phone}`,
    },
    {
      iconName: 'mapPin',
      label: 'Location',
      value: personal.location,
      href: null,
    },
  ].filter((item) => item.value);

  const metaItems = [
    {
      iconName: 'calendar',
      label: 'dateOfBirth',
      value: formatDate(personal.dateOfBirth),
    },
    {
      iconName: 'flag',
      label: 'nationality',
      value: personal.nationality,
    },
  ].filter((item) => item.value);

  const socialItems = [
    {
      iconName: 'github',
      label: 'GitHub',
      value: personal.github,
    },
    {
      iconName: 'linkedIn',
      label: 'LinkedIn',
      value: personal.linkedin,
    },
    {
      iconName: 'twitter',
      label: 'X (Twitter)',
      value: personal.xTwitter,
    },
  ].filter((item) => item.value);

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
              {item.href ? (
                <a href={item.href}><Icon name={item.iconName} /> {item.value}</a>
              ) : (
                <>
                  <Icon name={item.iconName} />
                  <span>{item.value}</span>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
      {socialItems.length > 0 && (
        <ul className="resume-social-list" aria-label="Social links">
          {socialItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.value}
                target='_blank'
                rel='noopener noreferrer'
              >
                <Icon name={item.iconName} /> {item.label}
              </a>
            </li>
          ))}
        </ul>
      )}
      {metaItems.length > 0 && (
        <ul className="resume-meta-list" aria-label="Personal details">
          {metaItems.map((item) => (
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
