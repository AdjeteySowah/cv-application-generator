import { useState } from 'react';
import TextInput from '../ui/TextInput.jsx';
import BulletEditor from './BulletEditor.jsx';
import CollectionItemCard from './CollectionItemCard.jsx';

export default function ProjectForm({ item, onRemove, onSave }) {
  const [draft, setDraft] = useState(item);

  function updateDraft(field, value) {
    setDraft((currentDraft) => ({ ...currentDraft, [field]: value }));
  }

  return (
    <CollectionItemCard
      itemLabel={draft.name || 'project'}
      onCancel={() => setDraft(item)}
      onRemove={onRemove}
      onSave={() =>
        onSave({
          ...draft,
          accomplishments: draft.accomplishments
            .map(line => line.trim())
            .filter(line => line !== '')
        })
      }
      title={draft.name || 'Personal Project'}
    >
      <TextInput
        id={`${item.id}-name`}
        label="Project Name"
        onChange={(event) => updateDraft('name', event.target.value)}
        placeholder="E.g. Fashion Brand Social Media Campaign"
        required
        value={draft.name}
      />
      <TextInput
        hint="(optional)"
        id={`${item.id}-link`}
        label="Project Link"
        onChange={(event) => updateDraft('link', event.target.value)}
        placeholder="https://example.com/fashion-campaign"
        type="url"
        value={draft.link}
      />
      <TextInput
        id={`${item.id}-date-finished`}
        label="Date Finished"
        onChange={(event) => updateDraft('dateFinished', event.target.value)}
        placeholder="E.g. March 2025"
        required
        value={draft.dateFinished}
      />
      <TextInput
        id={`${item.id}-tools`}
        label="Tools / Technologies Used"
        onChange={(event) => updateDraft('tools', event.target.value)}
        placeholder="E.g. Canva, Meta Business Suite, Google Analytics"
        required
        value={draft.tools}
      />
      <BulletEditor
        bullets={draft.accomplishments}
        id={`${item.id}-accomplishments`}
        label="Project Features / Accomplishments"
        onChange={(value) =>
          updateDraft('accomplishments', value.split('\n'))
        }
        placeholder="Developed a comprehensive social media strategy for..."
        required
      />
    </CollectionItemCard>
  );
}
