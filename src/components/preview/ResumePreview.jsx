import EducationEntryPreview from './EducationEntryPreview.jsx';
import ExperienceEntryPreview from './ExperienceEntryPreview.jsx';
import ResumeHeader from './ResumeHeader.jsx';
import ResumeSection from './ResumeSection.jsx';

function hasAnyValue(entry, fields) {
  return fields.some((field) => entry[field]?.trim());
}

function hasListItems(entry, fields) {
  return fields.some((field) => entry[field]?.length > 0);
}

function isPreviewVisible(entry) {
  return entry.isVisible ?? true;
}

export default function ResumePreview({ resume }) {
  const educationEntries = resume.education.filter(
    (entry) =>
      isPreviewVisible(entry) &&
      hasAnyValue(entry, ['school', 'degree', 'startDate', 'endDate']),
  );
  const experienceEntries = resume.experience.filter(
    (entry) =>
      isPreviewVisible(entry) &&
      (hasAnyValue(entry, [
        'company',
        'jobTitle',
        'summary',
        'startDate',
        'endDate',
      ]) ||
        hasListItems(entry, ['achievements'])),
  );

  return (
    <article className="resume-page" aria-label="Resume preview document">
      <ResumeHeader personal={resume.personal} />
      <div className="resume-page__body">
        {resume.summary && (
          <ResumeSection title="Professional Summary">
            <p className="resume-summary">{resume.summary}</p>
          </ResumeSection>
        )}

        {educationEntries.length > 0 && (
          <ResumeSection title="Education">
            {educationEntries.map((entry) => (
              <EducationEntryPreview entry={entry} key={entry.id} />
            ))}
          </ResumeSection>
        )}

        {experienceEntries.length > 0 && (
          <ResumeSection title="Professional Experience">
            {experienceEntries.map((entry) => (
              <ExperienceEntryPreview entry={entry} key={entry.id} />
            ))}
          </ResumeSection>
        )}
      </div>
    </article>
  );
}
