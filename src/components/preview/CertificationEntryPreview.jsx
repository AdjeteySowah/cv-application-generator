export default function CertificationEntryPreview({ entry }) {
  return (
    <div className="resume-certifications">
      <article className="resume-certification">
        <div>
          {entry.issuer && <h3>{entry.issuer}</h3>}
          {entry.name && <p>{entry.name}</p>}
        </div>
        {entry.dateAcquired && (
          <p className="resume-certification__date">
            {entry.dateAcquired}
          </p>
        )}
      </article>
    </div>
  );
}
