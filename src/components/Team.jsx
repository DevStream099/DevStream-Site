import { motion } from 'motion/react';
import './Team.css';

import umarImg from '../../src/assets/Umar.png';
import maryamImg from '../../src/assets/Maryam.jpg';

const teamMembers = [
  {
    id: 1,
    name: 'Muhammad Umar',
    role: 'Founder',
    image: umarImg,
    gradient: 'linear-gradient(135deg, #3461f0, #2f86d9, #9f989b)',
    upwork: 'https://www.upwork.com/freelancers/muhammadu165',
    fiverr: 'https://www.fiverr.com/s/pdD1NWY',
    linkedin: 'https://www.linkedin.com/in/muhammad-umar-7547b4156/',
  },
  {
    id: 2,
    name: 'Maryam Shakir',
    role: 'Co-Founder',
    image: maryamImg,
    gradient: 'linear-gradient(135deg, #f093fb, #f5576c)',
    upwork: 'https://www.upwork.com/freelancers/~0120fdc151e0eed0d7?mp_source=share',
    fiverr: 'https://www.fiverr.com/s/R7L8vgl',
    linkedin: 'https://www.linkedin.com/in/maryam-shakir-a06426296/',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  show: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

const Team = () => (
  <section id="about" className="team section">
    <div className="container">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2>Meet Our Leadership</h2>
        <p>Our experienced team is dedicated to delivering exceptional results for every client.</p>
      </motion.div>

      <motion.div
        className="team-grid"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.15 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {teamMembers.map((member) => (
          <motion.div className="team-card" key={member.id} variants={cardVariants}>
            <div className="team-card-inner">
              <div className="team-avatar-wrapper">
                <div className="team-avatar" style={{ background: member.gradient }}>
                  {member.image ? (
                    <img src={member.image} alt={member.name} className="team-avatar-img" loading="lazy" />
                  ) : (
                    <span>{member.initials}</span>
                  )}
                  <div className="avatar-glow" style={{ background: member.gradient }}></div>
                </div>
                <div
                  className="avatar-ring"
                  style={{ borderColor: 'rgba(102, 126, 234, 0.3)' }}
                ></div>
              </div>

              <h3>{member.name}</h3>
              <span className="team-role">{member.role}</span>

              <div className="team-socials">
                {/* LinkedIn */}
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="social-link"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.5 21.5h-5v-13h5v13zM4 6.5C2.5 6.5 1.5 5.3 1.5 4s1-2.4 2.5-2.4c1.6 0 2.5 1 2.6 2.5 0 1.4-1 2.5-2.6 2.5zm11.5 6c-1 0-2 1-2 2v7h-5v-13h5V10s1.6-1.5 4-1.5c3 0 5 2.2 5 6.3v6.7h-5v-7c0-1-1-2-2-2z" />
                  </svg>
                </a>

                {/* Upwork */}
                <a
                  href={member.upwork}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Upwork"
                  className="social-link"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.561 13.158c-1.102 0-2.135-.467-3.074-1.227l.228-1.076.008-.042c.207-1.143.849-3.06 2.839-3.06 1.492 0 2.703 1.212 2.703 2.703-.001 1.489-1.212 2.702-2.704 2.702zm0-8.14c-2.539 0-4.51 1.649-5.31 4.366-1.22-1.834-2.148-4.036-2.687-5.892H7.828v7.112c-.002 1.406-1.141 2.546-2.547 2.546-1.405 0-2.543-1.14-2.545-2.546V3.492H0v7.112c0 2.914 2.37 5.303 5.281 5.303 2.913 0 5.283-2.389 5.283-5.303v-1.19c.529 1.107 1.182 2.229 1.974 3.221l-1.673 7.873h2.797l1.213-5.71c1.063.679 2.285 1.109 3.686 1.109 3 0 5.439-2.452 5.439-5.45 0-3-2.439-5.439-5.439-5.439z"/>
                  </svg>
                </a>

                {/* Fiverr */}
                <a
                  href={member.fiverr}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Fiverr"
                  className="social-link"
                >
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.25 16.25v-7.5h-7.5V7.113c0-.905.725-1.363 1.644-1.363h1.856V2H9.831C6.875 2 5.75 3.781 5.75 6.25v2.5H3.75v3.75h2v7.5h3.75v-7.5h3.75v7.5h3zm.25-11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Team;
