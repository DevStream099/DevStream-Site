import { motion } from 'motion/react';
import './Hero.css';
import heroVideo from '../assets/Video/hero-video.mp4';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.4, 0, 0.2, 1] } },
};

const Hero = () => (
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
      <motion.div
        className="hero-content"
        initial="hidden"
        animate="show"
        variants={{
          hidden: {},
          show: { transition: { staggerChildren: 0.18, delayChildren: 0.25 } },
        }}
      >
        <motion.h1 className="hero-title" variants={fadeUp}>
          <span className="white-text">Build Powerful Mobile & </span>
          <span className="gradient-text">Web Applications</span>
        </motion.h1>

        <motion.p variants={fadeUp}>
          We build fast, reliable mobile and web apps that help businesses grow fast.
        </motion.p>

        <motion.div className="hero-buttons" variants={fadeUp}>
          <a href="#contact" className="btn btn-quote">
            Get a Free Quote
          </a>
        </motion.div>

        <motion.div className="hero-stats" variants={fadeUp}>
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
            <span className="stat-number">10+ Years</span>
            <span className="stat-label">Combined Experience</span>
          </div>
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
