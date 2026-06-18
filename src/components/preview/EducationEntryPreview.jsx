import { formatDateRange } from '../../utils/resumeFormatting.js';

export default function EducationEntryPreview({ entry }) {
  const schoolLine = [entry.school, entry.location].filter(Boolean).join(', ');

  return (
    <article className="resume-education">
      <div>
        <h3>{schoolLine}</h3>
        {entry.degree && <p>{entry.degree}</p>}
      </div>
      <p className="resume-education__date">
        {formatDateRange(entry.startDate, entry.endDate)}
      </p>
    </article>
  );
}
