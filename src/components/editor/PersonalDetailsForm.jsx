import TextInput from '../ui/TextInput.jsx';

const personalFields = [
  {
    autoComplete: 'name',
    id: 'fullName',
    label: 'Full Name',
    placeholder: 'Aisha Abdullah',
  },
  {
    autoComplete: 'organization-title',
    id: 'jobTitle',
    label: 'Job Title',
    placeholder: 'Digital Marketing Associate',
  },
  {
    autoComplete: 'tel',
    id: 'phone',
    label: 'Phone Number',
    type: 'tel',
    placeholder: '+233 24 555 1234',
  },
  {
    autoComplete: 'email',
    id: 'email',
    label: 'Email Address',
    type: 'email',
    placeholder: 'aisha.abdullah@example.com',
  },
  {
    autoComplete: 'address-level2',
    id: 'location',
    label: 'Location',
    placeholder: 'Kokomlemle',
  },
  {
    id: 'dateOfBirth',
    label: 'Date of birth',
    type: 'date',
  },
  {
    autoComplete: 'country-name',
    id: 'nationality',
    label: 'Nationality',
    placeholder: 'Burkinabe',
  },
  {
    id: 'github',
    hint: 'optional',
    label: 'GitHub',
    placeholder: 'https://github.com/username',
    type: 'url',
  },
  {
    id: 'linkedin',
    hint: 'optional',
    label: 'LinkedIn',
    placeholder: 'https://linkedin.com/in/username',
    type: 'url',
  },
  {
    id: 'xTwitter',
    hint: 'optional',
    label: 'X (Twitter)',
    placeholder: 'https://twitter.com/username',
    type: 'url',
  },
];

export default function PersonalDetailsForm({
  onPersonalChange,
  personalDetails,
}) {
  return (
    <form
      className="editor-form personal-details-form"
      onSubmit={(event) => event.preventDefault()}
    >
      <fieldset>
        <legend className="sr-only">Personal Details</legend>
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
            placeholder={field.placeholder}
            required={!field.hint}
            type={field.type}
            value={personalDetails[field.id]}
          />
        ))}
      </fieldset>
    </form>
  );
}
