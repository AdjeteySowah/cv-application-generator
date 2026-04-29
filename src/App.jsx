import { useState } from 'react';
import EditorSidebar from './components/editor/EditorSidebar.jsx';
import AppShell from './components/layout/AppShell.jsx';
import ResumePreview from './components/preview/ResumePreview.jsx';
import {
  createBlankEducation,
  createBlankExperience,
  createEmptyResume,
  createExampleResume,
} from './data/resumeData.js';

const entryFactories = {
  education: createBlankEducation,
  experience: createBlankExperience,
};

function updateEntry(entries, entryId, updater) {
  return entries.map((entry) => (entry.id === entryId ? updater(entry) : entry));
}

export default function App() {
  const [resume, setResume] = useState(() => createExampleResume());

  function handlePersonalChange(field, value) {
    setResume((currentResume) => ({
      ...currentResume,
      personal: {
        ...currentResume.personal,
        [field]: value,
      },
    }));
  }

  function handleAddEntry(collectionName) {
    const createEntry = entryFactories[collectionName];

    setResume((currentResume) => ({
      ...currentResume,
      [collectionName]: [...currentResume[collectionName], createEntry()],
    }));
  }

  function handleToggleEntryVisibility(collectionName, entryId) {
    setResume((currentResume) => ({
      ...currentResume,
      [collectionName]: updateEntry(
        currentResume[collectionName],
        entryId,
        (entry) => ({
          ...entry,
          isVisible: !entry.isVisible,
        }),
      ),
    }));
  }

  return (
    <AppShell
      editor={
        <EditorSidebar
          resume={resume}
          onAddEntry={handleAddEntry}
          onClearResume={() => setResume(createEmptyResume())}
          onLoadExample={() => setResume(createExampleResume())}
          onPersonalChange={handlePersonalChange}
          onToggleEntryVisibility={handleToggleEntryVisibility}
        />
      }
      preview={<ResumePreview resume={resume} />}
    />
  );
}
