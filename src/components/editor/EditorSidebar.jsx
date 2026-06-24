import ActionBar from './ActionBar.jsx';
import CertificationForm from './CertificationForm.jsx';
import EducationForm from './EducationForm.jsx';
import EditorSection from './EditorSection.jsx';
import ExperienceForm from './ExperienceForm.jsx';
import PersonalDetailsForm from './PersonalDetailsForm.jsx';
import ProjectForm from './ProjectForm.jsx';
import SkillsForm from './SkillsForm.jsx';
import SummaryForm from './SummaryForm.jsx';
import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';

function getItemSnapshotKey(item) {
  return `${item.id}-${JSON.stringify(item)}`;
}

export default function EditorSidebar({
  onAddEntry,
  onClearResume,
  onCollectionItemPatch,
  onDownloadResume,
  onLoadExample,
  onNestedFieldChange,
  onPersonalChange,
  onRemoveEntry,
  onSummaryChange,
  resume,
}) {
  return (
    <div className="editor-stack">
      <ActionBar
        onClearResume={onClearResume}
        onLoadExample={onLoadExample}
      />

      <EditorSection defaultOpen iconName="user" title="Personal Details">
        <PersonalDetailsForm
          onPersonalChange={onPersonalChange}
          personalDetails={resume.personal}
        />
      </EditorSection>

      <EditorSection
        iconName="fileText"
        title="Professional Summary"
      >
        <SummaryForm
          onSummaryChange={onSummaryChange}
          summary={resume.summary}
        />
      </EditorSection>

      <EditorSection
        addLabel="Project"
        iconName="folder"
        marker="Optional"
        onAdd={() => onAddEntry('projects')}
        title="Personal Projects"
      >
        {resume.projects.map((item) => (
          <ProjectForm
            item={item}
            key={getItemSnapshotKey(item)}
            onRemove={() => onRemoveEntry('projects', item.id)}
            onSave={(draft) =>
              onCollectionItemPatch('projects', item.id, draft)
            }
          />
        ))}
      </EditorSection>

      <EditorSection iconName="wand" title="Skills">
        <SkillsForm
          onSkillsChange={(field, value) =>
            onNestedFieldChange('skills', field, value)
          }
          skills={resume.skills}
        />
      </EditorSection>

      <EditorSection
        addLabel="Experience"
        iconName="briefcase"
        marker="Optional"
        onAdd={() => onAddEntry('experience')}
        title="Experience"
      >
        {resume.experience.map((item) => (
          <ExperienceForm
            item={item}
            key={getItemSnapshotKey(item)}
            onRemove={() => onRemoveEntry('experience', item.id)}
            onSave={(draft) =>
              onCollectionItemPatch('experience', item.id, draft)
            }
          />
        ))}
      </EditorSection>

      <EditorSection
        addLabel="Education"
        iconName="award"
        marker="Optional"
        onAdd={() => onAddEntry('education')}
        title="Education"
      >
        {resume.education.map((item) => (
          <EducationForm
            item={item}
            key={getItemSnapshotKey(item)}
            onRemove={() => onRemoveEntry('education', item.id)}
            onSave={(draft) =>
              onCollectionItemPatch('education', item.id, draft)
            }
          />
        ))}
      </EditorSection>

      <EditorSection
        addLabel="Certification"
        iconName="graduationCap"
        marker="Optional"
        onAdd={() => onAddEntry('certifications')}
        title="Certifications & Awards"
      >
        {resume.certifications.map((item) => (
          <CertificationForm
            item={item}
            key={getItemSnapshotKey(item)}
            onRemove={() => onRemoveEntry('certifications', item.id)}
            onSave={(draft) =>
              onCollectionItemPatch('certifications', item.id, draft)
            }
          />
        ))}
      </EditorSection>

      <footer className="download-wrapper">
        <Button
          className="download-button"
          icon={<Icon name="download" />}
          onClick={onDownloadResume}
          variant="download"
        >
          Download Resume
        </Button>
      </footer>
    </div>
  );
}
