import ActionBar from './ActionBar.jsx';
import EditorSection from './EditorSection.jsx';
import PersonalDetailsForm from './PersonalDetailsForm.jsx';

function getEducationLabel(entry) {
  return entry.school || 'Untitled education';
}

function getExperienceLabel(entry) {
  return entry.company || entry.jobTitle || 'Untitled experience';
}

export default function EditorSidebar({
  onAddEntry,
  onClearResume,
  onLoadExample,
  onPersonalChange,
  resume,
}) {
  const educationEntries = resume.education.map((entry) => ({
    ...entry,
    label: getEducationLabel(entry),
  }));
  const experienceEntries = resume.experience.map((entry) => ({
    ...entry,
    label: getExperienceLabel(entry),
  }));

  return (
    <div className="editor-stack">
      <ActionBar
        onClearResume={onClearResume}
        onLoadExample={onLoadExample}
      />

      <PersonalDetailsForm
        onPersonalChange={onPersonalChange}
        personalDetails={resume.personal}
      />

      <EditorSection
        addLabel="Education"
        defaultOpen
        entries={educationEntries}
        iconName="graduationCap"
        onAdd={() => onAddEntry('education')}
        title="Education"
      />

      <EditorSection
        addLabel="Experience"
        entries={experienceEntries}
        iconName="briefcase"
        onAdd={() => onAddEntry('experience')}
        title="Experience"
      />
    </div>
  );
}
