export default function ProjectEntryPreview({ entry }) {
  return (
    <div className="resume-projects">
      <article className="resume-project">
        <div className="resume-project__header">
          <h3>{entry.name}</h3>
          {entry.dateFinished && <p>{entry.dateFinished}</p>}
        </div>
        {entry.link && (
          <a
            className="resume-project__link"
            href={entry.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {entry.link}
          </a>
        )}
        {entry.tools && (
          <p className="resume-project__tools">Tools: {entry.tools}</p>
        )}
        {entry.accomplishments?.length > 0 && (
          <ul className="resume-entry__bullets">
            {entry.accomplishments.map((accomplishment, index) => (
              <li key={`${entry.id}-accomplishment-${index}`}>{accomplishment}</li>
            ))}
          </ul>
        )}
      </article>
    </div>
  );
}
