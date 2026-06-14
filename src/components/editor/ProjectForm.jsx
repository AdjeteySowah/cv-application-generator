import { useEffect, useState } from 'react';
import TextInput from '../ui/TextInput.jsx';
import BulletEditor from './BulletEditor.jsx';
import CollectionItemCard from './CollectionItemCard.jsx';

export default function ProjectForm({ item, onRemove, onSave }) {
  const [draft, setDraft] = useState(item);

  useEffect(() => {
    setDraft(item);
  }, [item]);

  function updateDraft(field, value) {
    setDraft((currentDraft) => ({ ...currentDraft, [field]: value }));
  }

  return (
    <CollectionItemCard
      itemLabel={draft.name || 'project'}
      onCancel={() => setDraft(item)}
      onRemove={onRemove}
      onSave={() => onSave(draft)}
      title={draft.name || 'Personal Project'}
    >
      <TextInput
        id={`${item.id}-name`}
        label="Project Name"
        onChange={(event) => updateDraft('name', event.target.value)}
        placeholder="E.g. To-Do List Application"
        value={draft.name}
      />
      <TextInput
        hint="(optional)"
        id={`${item.id}-link`}
        label="Project Link"
        onChange={(event) => updateDraft('link', event.target.value)}
        placeholder="https://github.com/username/project"
        type="url"
        value={draft.link}
      />
      <TextInput
        id={`${item.id}-date-finished`}
        label="Date Finished"
        onChange={(event) => updateDraft('dateFinished', event.target.value)}
        placeholder="E.g. April 2025"
        value={draft.dateFinished}
      />
      <TextInput
        id={`${item.id}-tools`}
        label="Tools / Technologies Used"
        onChange={(event) => updateDraft('tools', event.target.value)}
        placeholder="E.g. HTML, CSS, JavaScript, React"
        value={draft.tools}
      />
      <BulletEditor
        bullets={draft.accomplishments}
        id={`${item.id}-accomplishments`}
        label="Project Features / Accomplishments"
        onChange={(value) =>
          updateDraft(
            'accomplishments',
            value
              .split('\n')
              .map((line) => line.trim())
              .filter(Boolean),
          )
        }
        placeholder="Built a modular to-do app..."
      />
    </CollectionItemCard>
  );
}
