import TextInput from '../ui/TextInput.jsx';

const personalFields = [
  {
    autoComplete: 'name',
    id: 'fullName',
    label: 'Full name',
  },
  {
    autoComplete: 'organization-title',
    id: 'jobTitle',
    label: 'Job title',
  },
  {
    autoComplete: 'email',
    hint: 'recommended',
    id: 'email',
    label: 'Email',
    type: 'email',
  },
  {
    autoComplete: 'tel',
    hint: 'recommended',
    id: 'phone',
    label: 'Phone number',
    type: 'tel',
  },
  {
    autoComplete: 'address-level2',
    hint: 'recommended',
    id: 'location',
    label: 'Location',
  },
  {
    id: 'dateOfBirth',
    label: 'Date of birth',
  },
  {
    autoComplete: 'country-name',
    id: 'nationality',
    label: 'Nationality',
  },
  {
    id: 'github',
    label: 'GitHub',
    type: 'url',
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    type: 'url',
  },
  {
    id: 'xTwitter',
    label: 'X / Twitter',
    type: 'url',
  },
];

export default function PersonalDetailsForm({
  onPersonalChange,
  personalDetails,
}) {
  return (
    <form
      className="card personal-details-form"
      onSubmit={(event) => event.preventDefault()}
    >
      <fieldset>
        <legend>Personal Details</legend>
        {personalFields.map((field) => (
          <TextInput
            autoComplete={field.autoComplete}
            hint={field.hint}
            id={field.id}
            key={field.id}
            label={field.label}
            onChange={(event) =>
              onPersonalChange(field.id, event.target.value)
            }
            type={field.type}
            value={personalDetails[field.id]}
          />
        ))}
      </fieldset>
    </form>
  );
}
