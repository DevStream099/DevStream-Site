import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import { portfolioItems } from './portfolioData';

const Portfolio = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="portfolio" className={`portfolio section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      <div className="container">
        <div className="section-title">
          <h2>Portfolio</h2>
          <p>Explore our latest projects and see how we've helped businesses achieve their goals.</p>
        </div>
        <div className="portfolio-grid">
          {portfolioItems.map((item, index) => (
            <div
              className="portfolio-item"
              key={item.id}
              style={{ '--delay': `${index * 0.15}s` }}
            >
              <Link to={`/projects/${item.id}`} className="portfolio-link-wrapper">
                <div className="portfolio-image">
                  <img src={item.image} alt={item.title} className="portfolio-img" />
                  <div className="portfolio-pattern">
                    <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                      <defs>
                        <pattern id={`grid-${item.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
                          <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.1)"/>
                        </pattern>
                      </defs>
                      <rect width="100" height="100" fill={`url(#grid-${item.id})`}/>
                    </svg>
                  </div>
                  <div className="portfolio-overlay">
                    <div className="portfolio-content">
                      <span className="portfolio-category">{item.category}</span>
                      <h3>{item.title}</h3>
                      <span className="portfolio-link">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                          <polyline points="15 3 21 3 21 9"/>
                          <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
          {/* <div className="portfolio-cta">
            <a href="#more-projects" target='_blank' className="btn btn-secondary">
              <span>Explore More</span>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </a>
        </div> */}
      </div>

    </section>
  );
};

export default Portfolio;
