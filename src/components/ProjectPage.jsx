import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { portfolioItems } from './portfolioData';
import ProjectDetails from './ProjectDetails';
import Header from './Header';
import Footer from './Footer';

const ProjectPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  const project = portfolioItems.find(
    (item) => String(item.id) === String(id)
  );

  const handleBack = () => {
    navigate(-1);
  };

  if (!project) {
    return (
      <>
        <Header />
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
      <Header />
      <section className="project-details section project-details-page">
        <div className="project-bg-decor" />
        <div className="container">
          <ProjectDetails project={project} onBack={handleBack} />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default ProjectPage;

