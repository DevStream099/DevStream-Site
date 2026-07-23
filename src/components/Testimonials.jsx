import { motion } from 'motion/react';
import './Testimonials.css';

const testimonialsData = [
  {
    text: 'Exceptional React Native Team',
    description:
      'An exceptional React Native team who consistently delivered high-quality work. Their deep understanding of React Native and its ecosystem is evident in the innovative solutions they brought to our project. A rare combination of technical expertise, creativity, and a keen eye for detail. I will definitely hire them again!',
    name: 'Verified Upwork Client',
    role: 'React Native Developer — Ongoing Work',
    initials: 'RN',
  },
  {
    text: 'Great to Work With',
    description:
      'Umar was responsive, professional, and easy to collaborate with throughout the process. He communicated well, adapted to changing requirements, and consistently put in solid effort to keep things moving forward. I appreciated his reliability and would be happy to work with him again.',
    name: 'Verified Upwork Client',
    role: 'Build an AI Content Platform',
    initials: 'AI',
  },
  {
    text: 'Excellent MERN & React Native Expertise',
    description:
      'Excellent developer with strong expertise in MERN stack and React Native. Maryam delivered high-quality work, communicated clearly throughout the project, and consistently provided practical solutions to complex challenges. Reliable, professional, and easy to work with.',
    name: 'Verified Upwork Client',
    role: 'ReactJS / React Native QA',
    initials: 'QA',
  },
  {
    text: 'Professional & Highly Recommended',
    description:
      'The team was great to work with on this project. They were able to work with my existing codebase and extend the functionality without any issues. Great communicators, provided consistent meetings and updates, and kept to our project timeline. We are continuing to work with them on other projects.',
    name: 'Verified Upwork Client',
    role: 'Build a Voice Agent Dashboard',
    initials: 'VA',
  },
  {
    text: 'A Very Reliable Developer',
    description:
      'Muhammad is a very reliable developer. He has a masterful control of English communications, he listens, and gives me exactly what I expect.',
    name: 'Verified Upwork Client',
    role: 'Outing Resort / Courses Screen',
    initials: 'OR',
  },
  {
    text: 'CI/CD Pipeline Fixed Efficiently',
    description:
      'Umar quickly identified and resolved the issues in our React Native Expo CI/CD pipeline. Communication was clear throughout the project, and he demonstrated strong expertise with Expo, EAS Build, and deployment automation. Our build and deployment process is now running smoothly.',
    name: 'johnspelman1',
    role: 'Fiverr Client',
    initials: 'J',
  },
  {
    text: 'Delivered Ahead of Time',
    description:
      'He has done an exceptional job. He understood my requirements and delivered ahead of time exactly what I wanted. I will recommend him 100%.',
    name: 'dbooker_racing',
    role: 'Fiverr Client',
    initials: 'D',
  },
  {
    text: 'Outstanding Work Under Pressure',
    description:
      'Outstanding work! My React Native app was failing during the Android build process, and Maryam fixed it efficiently without breaking anything else.',
    name: 'johndoefresh',
    role: 'Fiverr Client',
    initials: 'J',
  },
];

// Duplicate for seamless infinite scroll
const scrollingTestimonials = [...testimonialsData, ...testimonialsData];

const Testimonials = () => (
  <motion.section
    id="testimonial"
    className="testimonials section"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    viewport={{ once: true, margin: '-80px' }}
    transition={{ duration: 0.6, ease: 'easeOut' }}
  >
    <div className="container">
      <div className="testimonials-marquee" aria-label="Testimonials">
        <div className="testimonials-track">
          {scrollingTestimonials.map((item, index) => (
            <div className="testimonial-card" key={`${item.name}-${index}`}>
              <div className="testimonial-glow"></div>

              <div className="quote-icon">
                <svg viewBox="0 0 24 24" fill="currentColor">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
              </div>

              <p className="testimonial-text">{item.text}</p>
              <p className="testimonial-description">{item.description}</p>

              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                ))}
              </div>

              <div className="testimonial-author">
                <div className="author-avatar">
                  <span>{item.initials}</span>
                </div>
                <div className="author-info">
                  <h4>{item.name}</h4>
                  <span>{item.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </motion.section>
);

export default Testimonials;
