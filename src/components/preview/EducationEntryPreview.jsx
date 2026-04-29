import { formatDateRange } from '../../utils/resumeFormatting.js';

export default function EducationEntryPreview({ entry }) {
  return (
    <article className="resume-entry">
      <div className="resume-entry__meta">
        <p>{formatDateRange(entry.startDate, entry.endDate)}</p>
        {entry.location && <p>{entry.location}</p>}
      </div>
      <div className="resume-entry__details">
        <h3>{entry.school}</h3>
        {entry.degree && <p>{entry.degree}</p>}
      </div>
    </article>
  );
}
