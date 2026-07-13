import CertificationEntryPreview from './CertificationEntryPreview.jsx';
import EducationEntryPreview from './EducationEntryPreview.jsx';
import ExperienceEntryPreview from './ExperienceEntryPreview.jsx';
import ProjectEntryPreview from './ProjectEntryPreview.jsx';
import ResumeHeader from './ResumeHeader.jsx';
import ResumeSection from './ResumeSection.jsx';
import SkillsPreview from './SkillsPreview.jsx';

function hasAnyValue(entry, fields) {
  return fields.some((field) => entry[field]?.trim());
}

function hasListItems(entry, fields) {
  return fields.some((field) => entry[field]?.length > 0);
}

export default function ResumePreview({ resume }) {
  const educationEntries = resume.education.filter(
    (entry) => 
      hasAnyValue(entry, [
        'school',
        'degree',
        'location',
        'startDate',
        'endDate',
      ]),
  );
  const experienceEntries = resume.experience.filter(
    (entry) =>
      (hasAnyValue(entry, [
        'company',
        'jobTitle',
        'startDate',
        'endDate',
      ]) ||
        hasListItems(entry, ['achievements'])),
  );
  const projectEntries = resume.projects.filter(
    (entry) =>
      hasAnyValue(entry, ['name', 'link', 'dateFinished', 'tools']) ||
      hasListItems(entry, ['accomplishments']),
  );
  const hasSkills = resume.skills.hard.trim() || resume.skills.soft.trim();
  const certificationEntries = resume.certifications.filter(
    (entry) =>
      hasAnyValue(entry, ['issuer', 'name', 'dateAcquired']),
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

        {projectEntries.length > 0 && (
          <ResumeSection title="Personal Projects">
            {projectEntries.map((entry) => (
              <ProjectEntryPreview entry={entry} key={entry.id} />
            ))}
          </ResumeSection>
        )}

        {hasSkills && (
          <ResumeSection title="Skills">
            <SkillsPreview skills={resume.skills} />
          </ResumeSection>
        )}

        {experienceEntries.length > 0 && (
          <ResumeSection title="Experience">
            {experienceEntries.map((entry) => (
              <ExperienceEntryPreview entry={entry} key={entry.id} />
            ))}
          </ResumeSection>
        )}

        {educationEntries.length > 0 && (
          <ResumeSection title="Education">
            {educationEntries.map((entry) => (
              <EducationEntryPreview entry={entry} key={entry.id} />
            ))}
          </ResumeSection>
        )}

        {certificationEntries.length > 0 && (
          <ResumeSection title="Certifications & Awards">
            {certificationEntries.map((entry) => (
              <CertificationEntryPreview entry={entry} key={entry.id} />
            ))}
          </ResumeSection>
        )}
      </div>
    </article>
  );
}
