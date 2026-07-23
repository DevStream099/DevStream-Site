import { useEffect, useRef } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { portfolioItems } from './portfolioData';
import ProjectDetails from './ProjectDetails';
import Footer from './Footer';

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  // Captured once at mount, before prev/next replace navigations change the key.
  const cameFromApp = useRef(location.key !== 'default');

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, [id]);

  const currentIndex = portfolioItems.findIndex(
    (item) => String(item.id) === String(id)
  );
  const project = portfolioItems[currentIndex];

  const total = portfolioItems.length;
  const prevProject =
    currentIndex >= 0 ? portfolioItems[(currentIndex - 1 + total) % total] : null;
  const nextProject =
    currentIndex >= 0 ? portfolioItems[(currentIndex + 1) % total] : null;

  const handleBack = () => {
    // Always return to the screen the user entered from, regardless of how many
    // projects they cycled through (prev/next replace history, so -1 is that screen).
    if (cameFromApp.current) {
      navigate(-1);
    } else {
      navigate('/');
    }
  };

  const goToProject = (projectId) => {
    // Replace history so cycling projects doesn't stack entries; the back
    // button always returns to the screen the user entered from.
    navigate(`/projects/${projectId}`, { replace: true });
  };

  if (!project) {
    return (
      <>
        <section className="project-details section project-details-page">
          <div className="project-bg-decor" />
          <div className="container">
            <button className="back-btn enhanced" onClick={handleBack}>
              <span className="back-icon">←</span>
              <span>Back to Projects</span>
            </button>
            <p>Project not found.</p>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <section className="project-details section project-details-page">
        <div className="project-bg-decor" />
        <div className="container">
          <ProjectDetails
            project={project}
            onBack={handleBack}
            prevProject={prevProject}
            nextProject={nextProject}
            onPrev={() => prevProject && goToProject(prevProject.id)}
            onNext={() => nextProject && goToProject(nextProject.id)}
          />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectPage;

