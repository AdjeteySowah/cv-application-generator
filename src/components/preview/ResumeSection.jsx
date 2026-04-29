import { useId } from 'react';

export default function ResumeSection({ children, title }) {
  const headingId = useId();

  return (
    <section className="resume-section" aria-labelledby={headingId}>
      <h2 className="resume-section__title" id={headingId}>
        {title}
      </h2>
      <div className="resume-section__content">{children}</div>
    </section>
  );
}
