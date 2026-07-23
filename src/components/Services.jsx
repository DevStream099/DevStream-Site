import { motion } from 'motion/react';
import './Services.css';

const services = [
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <path d="M12 18h.01"/>
      </svg>
    ),
    title: 'Mobile App Development',
    description:
      'Cross-platform iOS and Android applications built using React Native, Expo, Swift, and Kotlin with optimized performance and seamless user experience.',
    color: '#667eea',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    ),
    title: 'Web App Development',
    description:
      'Responsive, high-performance web applications built with React JS, Next.js, Node.js, REST APIs, and GraphQL on scalable backend architecture.',
    color: '#764ba2',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
      </svg>
    ),
    title: 'UI/UX Design Service',
    description:
      'User-centered UI/UX design with wireframes, prototypes, and design systems crafted in Figma for intuitive, delightful experiences.',
    color: '#ed64a6',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Performance & Optimization',
    description:
      'Advanced caching strategies, performance tuning, code refactoring, and smooth UI transitions.',
    color: '#f093fb',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="21" r="1"/>
        <circle cx="20" cy="21" r="1"/>
        <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
      </svg>
    ),
    title: 'E-Commerce Solutions',
    description:
      'End-to-end online stores built with Shopify, WooCommerce, and other e-commerce platforms, plus custom storefronts and secure payment integrations.',
    color: '#4facfe',
  },
  {
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4"/>
        <path d="M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"/>
      </svg>
    ),
    title: 'Testing & Deployment',
    description:
      'Unit and E2E testing (Jest, Cypress, Playwright), CI/CD pipelines, web deployment (Vercel, Netlify, AWS), and App Store & Play Store mobile app deployment.',
    color: '#00f2fe',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] } },
};

const Services = () => (
  <section id="services" className="services section">
    {/* Background Decorations */}
    <div className="services-bg">
      <div className="bg-circle bg-circle-1"></div>
      <div className="bg-circle bg-circle-2"></div>
    </div>

    <div className="container">
      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      >
        <h2>How can we help you?</h2>
        <p>
          We build scalable mobile and web applications with modern technologies, ensuring
          performance, security, and exceptional user experience.
        </p>
      </motion.div>

      <motion.div
        className="services-grid"
        variants={{ hidden: {}, show: { transition: { staggerChildren: 0.1 } } }}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
      >
        {services.map((service, index) => (
          <motion.div
            className="service-card"
            key={index}
            variants={cardVariants}
            whileHover={{ y: -15, boxShadow: '0 30px 60px rgba(102,126,234,0.15)' }}
            style={{ '--card-color': service.color }}
          >
            <div className="service-icon-wrapper">
              <div className="service-icon" style={{ color: service.color }}>
                {service.icon}
              </div>
              <div className="icon-bg"></div>
            </div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default Services;
