import { formatDateRange } from '../../utils/resumeFormatting.js';

export default function ExperienceEntryPreview({ entry }) {
  return (
    <article className="resume-entry">
      <div className="resume-entry__meta">
        <p>{formatDateRange(entry.startDate, entry.endDate)}</p>
        {entry.location && <p>{entry.location}</p>}
      </div>
      <div className="resume-entry__details">
        <h3>{entry.company}</h3>
        {entry.role && <p>{entry.role}</p>}
        {entry.summary && <p className="resume-entry__summary">{entry.summary}</p>}
      </div>
    </article>
  );
}
