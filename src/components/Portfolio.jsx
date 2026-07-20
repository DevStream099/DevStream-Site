import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import { portfolioItems } from './portfolioData';

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

const Portfolio = () => (
  <section id="portfolio" className="portfolio section">
    <div className="container">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2>Portfolio</h2>
        <p>Explore our latest projects and see how we've helped businesses achieve their goals.</p>
      </motion.div>

      <motion.div
        className="portfolio-grid"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.12 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {portfolioItems.map((item) => (
          <motion.div className="portfolio-item" key={item.id} variants={cardVariants}>
            <Link to={`/projects/${item.id}`} className="portfolio-link-wrapper">
              <div className="portfolio-image">
                <img src={item.image} alt={item.title} className="portfolio-img" />
                <div className="portfolio-pattern">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none">
                    <defs>
                      <pattern
                        id={`grid-${item.id}`}
                        width="10"
                        height="10"
                        patternUnits="userSpaceOnUse"
                      >
                        <circle cx="1" cy="1" r="1" fill="rgba(255,255,255,0.1)" />
                      </pattern>
                    </defs>
                    <rect width="100" height="100" fill={`url(#grid-${item.id})`} />
                  </svg>
                </div>
                <div className="portfolio-overlay">
                  <div className="portfolio-content">
                    <span className="portfolio-category">{item.category}</span>
                    <h3>{item.title}</h3>
                    <span className="portfolio-link">
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Portfolio;
