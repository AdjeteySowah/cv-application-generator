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
  const [pdfHeight, setPdfHeight] = useState(() => {
    const value = getComputedStyle(document.documentElement)
      .getPropertyValue('--pdf-height')
      .trim();

    return Number.parseFloat(value);
  });
  const [isPdfHeightModalOpen, setIsPdfHeightModalOpen] = useState(false);


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
    if(!localStorage.getItem('alertShown')) {
      window.alert(
        'For the best PDF output and single-page resume downloads, use Google Chrome or Microsoft Edge. Safari may paginate long resumes due to browser print limitations. You can go back and adjust the PDF height before saving. \n\nDepending on your browser, you may need to enable Background Graphics and disable Headers and Footers in the print settings before saving the resume as a PDF.'
      );
      localStorage.setItem('alertShown', 'true');
    }
    window.print();
  }

  function handleOpenPdfHeightModal() {
    setIsPdfHeightModalOpen(true);
  }

  function handleIncreasePdfHeight() {
    setPdfHeight((currentHeight) => currentHeight + 1);
  }

  function handleDecreasePdfHeight() {
    setPdfHeight((currentHeight) => Math.max(11.69, currentHeight - 1));
  }

  function handleSavePdfHeight() {
    document.documentElement.style.setProperty(
      '--pdf-height',
      `${pdfHeight}in`,
    );

    setIsPdfHeightModalOpen(false);
  }

  return (
    <AppShell
      editor={
        <EditorSidebar
          resume={resume}
          isModalOpen={isPdfHeightModalOpen}
          pdfHeight={pdfHeight}
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
          onAdjustPdfHeight={handleOpenPdfHeightModal}
          onDecreasePdfHeight={handleDecreasePdfHeight}
          onIncreasePdfHeight={handleIncreasePdfHeight}
          onCloseModal={handleSavePdfHeight}
          onDone={handleSavePdfHeight}
        />
      }
      preview={<ResumePreview resume={resume} />}
    />
  );
}
