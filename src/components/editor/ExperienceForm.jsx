import { useState } from 'react';
import TextInput from '../ui/TextInput.jsx';
import BulletEditor from './BulletEditor.jsx';
import CollectionItemCard from './CollectionItemCard.jsx';

export default function ExperienceForm({ item, onRemove, onSave }) {
  const [draft, setDraft] = useState(item);

  function updateDraft(field, value) {
    setDraft((currentDraft) => ({ ...currentDraft, [field]: value }));
  }

  return (
    <CollectionItemCard
      itemLabel={draft.company || draft.jobTitle || 'experience'}
      onCancel={() => setDraft(item)}
      onRemove={onRemove}
      onSave={() =>
        onSave({
          ...draft,
          achievements: draft.achievements
            .map((line) => line.trim())
            .filter((line) => line !== '')
        })
      }
      title={draft.company || 'Experience'}
    >
      <TextInput
        id={`${item.id}-job-title`}
        label="Job Title"
        onChange={(event) => updateDraft('jobTitle', event.target.value)}
        placeholder="E.g. Digital Marketing Associate"
        value={draft.jobTitle}
      />
      <TextInput
        id={`${item.id}-company`}
        label="Company"
        onChange={(event) => updateDraft('company', event.target.value)}
        placeholder="E.g. Bright Horizon Media"
        value={draft.company}
      />
      <div className="form-row">
        <TextInput
          id={`${item.id}-start-date`}
          label="Start Date"
          onChange={(event) => updateDraft('startDate', event.target.value)}
          placeholder="E.g. July 2023"
          value={draft.startDate}
        />
        <TextInput
          id={`${item.id}-end-date`}
          label="End Date"
          onChange={(event) => updateDraft('endDate', event.target.value)}
          placeholder="E.g. Dec 2024 / Present"
          value={draft.endDate}
        />
      </div>
      <BulletEditor
        bullets={draft.achievements}
        id={`${item.id}-achievements`}
        label="Responsibilities / Achievements"
        onChange={(value) =>
          updateDraft('achievements', value.split('\n'))
        }
        placeholder="Managed social media campaigns across multiple platforms..."
      />
    </CollectionItemCard>
  );
}
