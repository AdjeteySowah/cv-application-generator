import { formatDateRange } from '../../utils/resumeFormatting.js';

export default function ExperienceEntryPreview({ entry }) {
  return (
    <article className="resume-experience">
      <div className="resume-experience__header">
        <h3>{entry.jobTitle}</h3>
        <p>{formatDateRange(entry.startDate, entry.endDate)}</p>
      </div>
      {entry.company && (
        <p className="resume-experience__company">{entry.company}</p>
      )}
      {entry.location && (
        <p className="resume-experience__location">{entry.location}</p>
      )}
      {entry.summary && <p className="resume-entry__summary">{entry.summary}</p>}
      {entry.achievements?.length > 0 && (
        <ul className="resume-entry__bullets">
          {entry.achievements.map((achievement) => (
            <li key={achievement}>{achievement}</li>
          ))}
        </ul>
      )}
    </article>
  );
}
