import './ProjectDetails.css';

const ProjectDetails = ({ project, onBack, onPrev, onNext }) => {
  if (!project) return null;

  return (
    <div className="project-details-inner">

      <button
        type="button"
        className="back-chevron"
        onClick={onBack}
        aria-label="Go back"
      >
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
          <polyline points="15 18 9 12 15 6" />
        </svg>
      </button>

      <div className="project-details-content">
        <button
          type="button"
          className="project-nav-btn prev"
          onClick={onPrev}
          aria-label="Previous project"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
        </button>

        <button
          type="button"
          className="project-nav-btn next"
          onClick={onNext}
          aria-label="Next project"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </button>

        <div className="project-image">
          <img src={project.image} alt={project.title} />
        </div>

        <div className="project-info">
          <h2>{project.title}</h2>
          <p className="category">{project.category}</p>

          <h4>Tech Stack</h4>
          <ul>
            {project.tech.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>

        <h4>Description</h4>
          {Array.isArray(project.description) ? (
            <ul className="description-list">
              {project.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          ) : (
            <p className="description">{project.description}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;