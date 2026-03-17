import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import './Portfolio.css';
import portfolioImage1 from '../../src/assets/project1.png';
import portfolioImage2 from '../../src/assets/project2.png';
import portfolioImage3 from '../../src/assets/project3.png';
import portfolioImage4 from '../../src/assets/project4.png';
import portfolioImage5 from '../../src/assets/Hareth-Image.png';

export const portfolioItems = [
  {
    id: 1,
    title: 'Mana Calendar',
    category: 'Calendar',
    image: portfolioImage1,
    description: [
      'Different ways to view your calendar – quickly switch between month, week, and day views.',
      'Integrated location services and contact management for enhanced event creation.',
    ],
    tech: ['React Native', 'Node JS', 'Mongo DB', 'Firebase'],
  },
  {
    id: 2,
    title: 'Rigor',
    category: 'Todo Tasks',
    image: portfolioImage2,
    description: [
      'Developed a digital checklist system with timestamp tracking, multimedia capture, and SQL database integration.',
      'Implemented comprehensive testing suite including unit tests and E2E testing for quality assurance.',
    ],
    tech: ['React Native', 'SQA', 'Firebase'],
  },
  {
    id: 3,
    title: 'Tali',
    category: 'Health Care',
    image: portfolioImage3,
    description:
      'A modern healthcare application designed to track and manage personal health data through connected medical devices. The app automatically records measurements like blood pressure and glucose levels and uses AI to analyze the data and assist users through an interactive chat system.',
    tech: ['React Native', 'Graph QL', 'Railway', 'Node JS'],
  },
  {
    id: 4,
    title: 'Genfit',
    category: 'Fitness',
    image: portfolioImage4,
    description:
      'GenFit is a fitness-focused mobile application that helps users manage workouts, track fitness goals, and stay motivated on their health journey. It offers a clean user experience with tools designed for better performance and progress tracking.',
    tech: ['React Native', 'Supabase', 'Node JS'],
  },
  {
    id: 5,
    title: 'Hareth Optics',
    category: 'E-commerce / Eyewear',
    image: portfolioImage5,
    description: 
      'Hareth Optics is a modern mobile application that allows users to explore and purchase premium eyewear online with an advanced Virtual Try-On feature. The app enables customers to see how glasses look on their face before buying, making the shopping experience more confident and convenient. The platform also includes a dedicated delivery agent app for efficient order management and fast home delivery.'
    ,
    tech: ['React Native (Expo)', 'Graph QL', 'Shopify', 'Node JS', 'Mongo DB', 'Firebase'],
  }
];

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
