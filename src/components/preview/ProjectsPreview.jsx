function hasProjectContent(project) {
  return (
    project.name?.trim() ||
    project.link?.trim() ||
    project.dateFinished?.trim() ||
    project.tools?.trim() ||
    project.accomplishments?.length > 0
  );
}

export default function ProjectsPreview({ projects }) {
  const visibleProjects = projects.filter(hasProjectContent);

  if (visibleProjects.length === 0) {
    return null;
  }

  return (
    <div className="resume-projects">
      {visibleProjects.map((project) => (
        <article className="resume-project" key={project.id}>
          <div className="resume-project__header">
            <h3>{project.name}</h3>
            {project.dateFinished && <p>{project.dateFinished}</p>}
          </div>
          {project.link && (
            <a
              className="resume-project__link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.link}
            </a>
          )}
          {project.tools && (
            <p className="resume-project__tools">Tools: {project.tools}</p>
          )}
          {project.accomplishments?.length > 0 && (
            <ul className="resume-entry__bullets">
              {project.accomplishments.map((accomplishment, index) => (
                <li key={`${project.id}-accomplishment-${index}`}>{accomplishment}</li>
              ))}
            </ul>
          )}
        </article>
      ))}
    </div>
  );
}
