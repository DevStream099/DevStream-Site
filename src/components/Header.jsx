import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import './Header.css';
import DevLogo from '../assets/DevLogo.png';

const navItems = [
  { href: '#home', label: 'Home', id: 'home' },
  { href: '#services', label: 'Service', id: 'services' },
  { href: '#portfolio', label: 'Portfolio', id: 'portfolio' },
  { href: '#testimonial', label: 'Testimonial', id: 'testimonial' },
  { href: '#about', label: 'About', id: 'about' },
];

const TRACKED_SECTIONS = ['home', 'services', 'portfolio', 'testimonial', 'about'];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
      setIsMenuOpen(false);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const sectionElements = TRACKED_SECTIONS.map((id) =>
      document.getElementById(id),
    ).filter(Boolean);

    if (!sectionElements.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visible.length) return;
        setActiveSection(visible[0].target.id);
      },
      {
        root: null,
        threshold: [0.25, 0.5, 0.75],
        rootMargin: '-72px 0px -40% 0px',
      },
    );

    sectionElements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate('/');
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  };

  const closeMenu = () => setIsMenuOpen(false);
  const isActive = (id) => activeSection === id;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const headerOffset = 80;
    const offsetTop = el.getBoundingClientRect().top + window.scrollY - headerOffset;
    window.scrollTo({ top: offsetTop, left: 0, behavior: 'smooth' });
  };

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setActiveSection(id);
    closeMenu();
    scrollToSection(id);
  };

  return (
    <>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <nav className="navbar">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          >
            <Link to="/" className="logo" onClick={handleLogoClick}>
              <img src={DevLogo} alt="DevStream logo" />
            </Link>
          </motion.div>

          {!isMobile && (
            <motion.ul
              className="nav-menu"
              initial="hidden"
              animate="show"
              variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.2 } } }}
            >
              {navItems.map((item) => (
                <motion.li
                  key={item.href}
                  className="nav-item"
                  variants={{
                    hidden: { opacity: 0, y: -10 },
                    show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.4, 0, 0.2, 1] } },
                  }}
                >
                  <a
                    href={item.href}
                    className={`nav-link ${isActive(item.id) ? 'active' : ''}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    <span className="nav-link-bg" aria-hidden="true" />
                    {item.label}
                    {isActive(item.id) && (
                      <span className="active-dot" aria-hidden="true" />
                    )}
                  </a>
                </motion.li>
              ))}
            </motion.ul>
          )}

          {!isMobile && (
            <motion.a
              href="#contact"
              className="nav-cta"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
            >
              Contact
            </motion.a>
          )}

          {isMobile && (
            <button
              className={`menu-toggle ${isMenuOpen ? 'open' : ''}`}
              onClick={() => setIsMenuOpen((p) => !p)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          )}
        </nav>
      </header>

      <AnimatePresence>
        {isMobile && isMenuOpen && (
          <>
            <motion.div
              className="drawer-overlay visible"
              onClick={closeMenu}
              aria-hidden="true"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
            />

            <motion.nav
              className="mobile-drawer open"
              aria-label="Mobile navigation"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 28, stiffness: 220 }}
            >
              <motion.ul
                className="drawer-menu"
                initial="hidden"
                animate="show"
                variants={{ hidden: {}, show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } } }}
              >
                {navItems.map((item, index) => (
                  <motion.li
                    key={item.href}
                    className="drawer-item"
                    variants={{
                      hidden: { opacity: 0, x: 20 },
                      show: { opacity: 1, x: 0, transition: { duration: 0.35, ease: [0.4, 0, 0.2, 1] } },
                    }}
                  >
                    <a
                      href={item.href}
                      className={`drawer-link ${isActive(item.id) ? 'active' : ''}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                    >
                      <span className="drawer-number">
                        {String(index + 1).padStart(2, '0')}
                      </span>
                      <span className="drawer-label">{item.label}</span>
                    </a>
                  </motion.li>
                ))}
              </motion.ul>

              <a href="#contact" className="drawer-cta" onClick={closeMenu}>
                Contact
              </a>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
