import { useState } from 'react';
import TextInput from '../ui/TextInput.jsx';
import CollectionItemCard from './CollectionItemCard.jsx';

export default function CertificationForm({ item, onRemove, onSave }) {
  const [draft, setDraft] = useState(item);

  function updateDraft(field, value) {
    setDraft((currentDraft) => ({ ...currentDraft, [field]: value }));
  }

  return (
    <CollectionItemCard
      itemLabel={draft.name || 'certification or award'}
      onCancel={() => setDraft(item)}
      onRemove={onRemove}
      onSave={() => onSave(draft)}
      title={draft.name || 'Certification / Award'}
    >
      <TextInput
        id={`${item.id}-issuer`}
        label="Issuer"
        onChange={(event) => updateDraft('issuer', event.target.value)}
        placeholder="E.g. freeCodeCamp"
        required
        value={draft.issuer}
      />
      <TextInput
        id={`${item.id}-name`}
        label="Certificate / Award Name"
        onChange={(event) => updateDraft('name', event.target.value)}
        placeholder="E.g. Responsive Web Design"
        required
        value={draft.name}
      />
      <TextInput
        id={`${item.id}-date-acquired`}
        label="Date Acquired"
        onChange={(event) => updateDraft('dateAcquired', event.target.value)}
        placeholder="E.g. 2023"
        required
        value={draft.dateAcquired}
      />
    </CollectionItemCard>
  );
}
