import './Hero.css';
import heroVideo from '../assets/Video/hero-video.mp4';

const Hero = () => {
  const text1 = "Build Powerful Mobile & ";
  const text2 = "Web Applications";

  return (
    <section id="home" className="hero">
      <video
        className="hero-bg-video"
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>
      <div className="hero-overlay"></div>

      <div className="container">
        <div className="hero-content">

          <h1 className="hero-title">
            <span className="white-text">
              {text1}
            </span>
            <span className="gradient-text">
              {text2}
            </span>
          </h1>

          <p>
            DevStream is a software development company focused on building scalable web and mobile applications. Our team specializes in full-stack development, using modern frameworks and technologies to create secure, high-performance, and user-friendly digital solutions that help businesses grow and innovate.
          </p>

          <div className="hero-buttons">
            <a href="#services" className="btn btn-ghost">
              <span>Learn More</span>
            </a>
          </div>

          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">100+</span>
              <span className="stat-label">Projects Completed</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>

            <div className="stat-divider"></div>

            <div className="stat-item">
              <span className="stat-number">11+ Years</span>
              <span className="stat-label">Combined Experience</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;