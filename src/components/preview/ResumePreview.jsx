import EducationEntryPreview from './EducationEntryPreview.jsx';
import ExperienceEntryPreview from './ExperienceEntryPreview.jsx';
import ResumeHeader from './ResumeHeader.jsx';
import ResumeSection from './ResumeSection.jsx';

function hasAnyValue(entry, fields) {
  return fields.some((field) => entry[field]?.trim());
}

export default function ResumePreview({ resume }) {
  const educationEntries = resume.education.filter(
    (entry) =>
      entry.isVisible &&
      hasAnyValue(entry, ['school', 'degree', 'startDate', 'endDate']),
  );
  const experienceEntries = resume.experience.filter(
    (entry) =>
      entry.isVisible &&
      hasAnyValue(entry, [
        'company',
        'role',
        'summary',
        'startDate',
        'endDate',
      ]),
  );

  return (
    <article className="resume-page" aria-label="Resume preview document">
      <ResumeHeader personal={resume.personal} />
      <div className="resume-page__body">
        <ResumeSection title="Education">
          {educationEntries.map((entry) => (
            <EducationEntryPreview entry={entry} key={entry.id} />
          ))}
        </ResumeSection>

        <ResumeSection title="Professional Experience">
          {experienceEntries.map((entry) => (
            <ExperienceEntryPreview entry={entry} key={entry.id} />
          ))}
        </ResumeSection>
      </div>
    </article>
  );
}
