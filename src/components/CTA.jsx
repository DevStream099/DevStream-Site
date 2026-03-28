import { useEffect, useMemo, useRef, useState } from 'react';
import './CTA.css';

const CTA = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const particles = useMemo(() => {
    return Array.from({ length: 15 }, (_, i) => ({
      delay: `${i * 0.3}s`,
      x: `${Math.random() * 100}%`,
      size: `${4 + Math.random() * 6}px`,
    }));
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section className={`cta section ${isVisible ? 'visible' : ''}`} ref={sectionRef}>
      {/* Top Curve */}
      <div className="curve-divider top">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" fill="#ffffff"></path>
        </svg>
      </div>

      {/* Background Elements */}
      <div className="cta-bg">
        <div className="cta-shape cta-shape-1"></div>
        <div className="cta-shape cta-shape-2"></div>
        <div className="cta-particles">
          {particles.map((p, i) => (
            <span
              key={i}
              className="cta-particle"
              style={{ '--delay': p.delay, '--x': p.x, '--size': p.size }}
            ></span>
          ))}
        </div>
      </div>

      <div className="container">
        <div className="cta-content">
          <span className="cta-label">Get Started</span>
          <h2>Would you like to start a project with us?</h2>
          <p>Let's work together to create something amazing. Get in touch with us today!</p>
          <a href="#contact" className="btn btn-cta">
            <span>Get a Quote</span>
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
        </div>
      </div>


    </section>
  );
};

export default CTA;
