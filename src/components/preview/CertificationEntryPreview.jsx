function hasCertificationContent(certification) {
  return (
    certification.issuer?.trim() ||
    certification.name?.trim() ||
    certification.dateAcquired?.trim()
  );
}

export default function CertificationsPreview({ certifications }) {
  const visibleCertifications = certifications.filter(hasCertificationContent);

  if (visibleCertifications.length === 0) {
    return null;
  }

  return (
    <div className="resume-certifications">
      {visibleCertifications.map((certification) => (
        <article className="resume-certification" key={certification.id}>
          <div>
            {certification.issuer && <h3>{certification.issuer}</h3>}
            {certification.name && <p>{certification.name}</p>}
          </div>
          {certification.dateAcquired && (
            <p className="resume-certification__date">
              {certification.dateAcquired}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
