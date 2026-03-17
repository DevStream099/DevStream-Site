import './ProjectDetails.css';

const ProjectDetails = ({ project }) => {
  if (!project) return null;

  return (
    <div className="project-details-inner">

      <div className="project-details-content">
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