import { useState } from 'react';
import EditorSidebar from './components/editor/EditorSidebar.jsx';
import AppShell from './components/layout/AppShell.jsx';
import ResumePreview from './components/preview/ResumePreview.jsx';
import {
  createBlankCertification,
  createBlankEducation,
  createBlankExperience,
  createBlankProject,
  createEmptyResume,
  createExampleResume,
} from './data/resumeData.js';

const entryFactories = {
  certifications: createBlankCertification,
  education: createBlankEducation,
  experience: createBlankExperience,
  projects: createBlankProject,
};

function updateCollectionItem(items, itemId, updater) {
  return items.map((item) => (item.id === itemId ? updater(item) : item));
}

export default function App() {
  const [resume, setResume] = useState(() => createExampleResume());

  function handleNestedFieldChange(sectionName, field, value) {
    setResume((currentResume) => ({
      ...currentResume,
      [sectionName]: {
        ...currentResume[sectionName],
        [field]: value,
      },
    }));
  }

  function handlePersonalChange(field, value) {
    handleNestedFieldChange('personal', field, value);
  }

  function handleSummaryChange(value) {
    setResume((currentResume) => ({
      ...currentResume,
      summary: value,
    }));
  }

  function handleAddEntry(collectionName) {
    const createEntry = entryFactories[collectionName];

    if (!createEntry) {
      return;
    }

    setResume((currentResume) => ({
      ...currentResume,
      [collectionName]: [...currentResume[collectionName], createEntry()],
    }));
  }

  function handleCollectionItemChange(collectionName, itemId, field, value) {
    setResume((currentResume) => ({
      ...currentResume,
      [collectionName]: updateCollectionItem(
        currentResume[collectionName],
        itemId,
        (item) => ({ ...item, [field]: value }),
      ),
    }));
  }

  function handleCollectionItemPatch(collectionName, itemId, patch) {
    setResume((currentResume) => ({
      ...currentResume,
      [collectionName]: updateCollectionItem(
        currentResume[collectionName],
        itemId,
        (item) => ({ ...item, ...patch }),
      ),
    }));
  }

  function handleCollectionItemListChange(collectionName, itemId, field, value) {
    const values = value
      .split('\n')
      .map((item) => item.trim())
      .filter(Boolean);

    handleCollectionItemChange(collectionName, itemId, field, values);
  }

  function handleRemoveEntry(collectionName, itemId) {
    setResume((currentResume) => ({
      ...currentResume,
      [collectionName]: currentResume[collectionName].filter(
        (item) => item.id !== itemId,
      ),
    }));
  }

  function handleDownloadResume() {
    window.print();
  }

  return (
    <AppShell
      editor={
        <EditorSidebar
          resume={resume}
          onAddEntry={handleAddEntry}
          onClearResume={() => setResume(createEmptyResume())}
          onCollectionItemChange={handleCollectionItemChange}
          onCollectionItemListChange={handleCollectionItemListChange}
          onCollectionItemPatch={handleCollectionItemPatch}
          onDownloadResume={handleDownloadResume}
          onLoadExample={() => setResume(createExampleResume())}
          onNestedFieldChange={handleNestedFieldChange}
          onPersonalChange={handlePersonalChange}
          onRemoveEntry={handleRemoveEntry}
          onSummaryChange={handleSummaryChange}
        />
      }
      preview={<ResumePreview resume={resume} />}
    />
  );
}
