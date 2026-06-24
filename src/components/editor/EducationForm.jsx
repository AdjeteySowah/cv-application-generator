import { useState } from 'react';
import TextInput from '../ui/TextInput.jsx';
import CollectionItemCard from './CollectionItemCard.jsx';

export default function EducationForm({ item, onRemove, onSave }) {
  const [draft, setDraft] = useState(item);

  function updateDraft(field, value) {
    setDraft((currentDraft) => ({ ...currentDraft, [field]: value }));
  }

  return (
    <CollectionItemCard
      itemLabel={draft.school || 'education'}
      onCancel={() => setDraft(item)}
      onRemove={onRemove}
      onSave={() => onSave(draft)}
      title={draft.school || 'Education'}
    >
      <TextInput
        id={`${item.id}-school`}
        label="School Name"
        onChange={(event) => updateDraft('school', event.target.value)}
        placeholder="E.g. Accra Academy (High School)"
        required
        value={draft.school}
      />
      <TextInput
        id={`${item.id}-location`}
        label="Location"
        onChange={(event) => updateDraft('location', event.target.value)}
        placeholder="E.g. Kaneshie"
        required
        value={draft.location}
      />
      <TextInput
        hint="(optional)"
        id={`${item.id}-degree`}
        label="Degree"
        onChange={(event) => updateDraft('degree', event.target.value)}
        placeholder="E.g. Business"
        value={draft.degree}
      />
      <div className="form-row">
        <TextInput
          id={`${item.id}-start-date`}
          label="Start Date"
          onChange={(event) => updateDraft('startDate', event.target.value)}
          placeholder="E.g. Oct 2018"
          required
          value={draft.startDate}
        />
        <TextInput
          id={`${item.id}-end-date`}
          label="End Date"
          onChange={(event) => updateDraft('endDate', event.target.value)}
          placeholder="E.g. Oct 2021"
          required
          value={draft.endDate}
        />
      </div>
    </CollectionItemCard>
  );
}
