import CertificationsPreview from './CertificationsPreview.jsx';
import EducationEntryPreview from './EducationEntryPreview.jsx';
import ExperienceEntryPreview from './ExperienceEntryPreview.jsx';
import ProjectsPreview from './ProjectsPreview.jsx';
import ResumeHeader from './ResumeHeader.jsx';
import ResumeSection from './ResumeSection.jsx';
import SkillsPreview from './SkillsPreview.jsx';

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
  const hasProjects = resume.projects.some(
    (project) =>
      hasAnyValue(project, ['name', 'link', 'dateFinished', 'tools']) ||
      hasListItems(project, ['accomplishments']),
  );
  const hasSkills = resume.skills.hard.trim() || resume.skills.soft.trim();
  const hasCertifications = resume.certifications.some((certification) =>
    hasAnyValue(certification, ['issuer', 'name', 'dateAcquired']),
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

        {hasProjects && (
          <ResumeSection title="Personal Projects">
            <ProjectsPreview projects={resume.projects} />
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

        {hasCertifications && (
          <ResumeSection title="Certifications & Awards">
            <CertificationsPreview certifications={resume.certifications} />
          </ResumeSection>
        )}
      </div>
    </article>
  );
}
