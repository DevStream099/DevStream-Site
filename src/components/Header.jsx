import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Header.css";
import DevLogo from "../assets/DevLogo.png";

const navItems = [
  { href: "#home", label: "Home", id: "home" },
  { href: "#services", label: "Service", id: "services" },
  { href: "#portfolio", label: "Portfolio", id: "portfolio" },
  { href: "#testimonial", label: "Testimonial", id: "testimonial" },
  { href: "#about", label: "About", id: "about" },
];

// Only IDs that actually exist as section elements in the DOM
const TRACKED_SECTIONS = ["home", "services", "portfolio", "testimonial", "about"];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 992);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const navigate = useNavigate();

  // Scroll → pill transform
  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Resize → reset mobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 992);
      setIsMenuOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Body scroll lock when drawer open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Active section tracking
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

        const topSectionId = visible[0].target.id;
        setActiveSection(topSectionId);
      },
      {
        // Focus on the central viewport area, accounting for the fixed header
        root: null,
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-72px 0px -40% 0px",
      },
    );

    sectionElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const handleLogoClick = (e) => {
    e.preventDefault();
    setIsMenuOpen(false);
    navigate("/");
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const closeMenu = () => setIsMenuOpen(false);

  const isActive = (id) => activeSection === id;

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (!el) return;

    // Account for fixed header height
    const headerOffset = 80;
    const rect = el.getBoundingClientRect();
    const offsetTop = rect.top + window.scrollY - headerOffset;

    window.scrollTo({
      top: offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };

  const handleNavClick = (event, id) => {
    event.preventDefault();
    setActiveSection(id);
    closeMenu();
    scrollToSection(id);
  };

  return (
    <>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <nav className="navbar">
          {/* Logo */}
          <Link to="/" className="logo" onClick={handleLogoClick}>
            <img src={DevLogo} alt="DevStream logo" />
          </Link>

          {/* Desktop nav links */}
          {!isMobile && (
            <ul className="nav-menu">
              {navItems.map((item) => (
                <li key={item.href} className="nav-item">
                  <a
                    href={item.href}
                    className={`nav-link ${isActive(item.id) ? "active" : ""}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    <span className="nav-link-bg" aria-hidden="true" />
                    {item.label}
                    {isActive(item.id) && (
                      <span className="active-dot" aria-hidden="true" />
                    )}
                  </a>
                </li>
              ))}
            </ul>
          )}

          {/* Desktop CTA */}
          {!isMobile && (
            <a href="#contact" className="nav-cta">
              Contact
            </a>
          )}

          {/* Mobile hamburger */}
          {isMobile && (
            <button
              className={`menu-toggle ${isMenuOpen ? "open" : ""}`}
              onClick={() => setIsMenuOpen((p) => !p)}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
            >
              <span />
              <span />
              <span />
            </button>
          )}
        </nav>
      </header>

      {/* Mobile drawer — outside <header> for clean z-index stacking */}
      {isMobile && (
        <>
          <div
            className={`drawer-overlay ${isMenuOpen ? "visible" : ""}`}
            onClick={closeMenu}
            aria-hidden="true"
          />

          <nav
            className={`mobile-drawer ${isMenuOpen ? "open" : ""}`}
            aria-label="Mobile navigation"
          >
            <ul className="drawer-menu">
              {navItems.map((item, index) => (
                <li key={item.href} className="drawer-item">
                  <a
                    href={item.href}
                    className={`drawer-link ${isActive(item.id) ? "active" : ""}`}
                    onClick={(e) => handleNavClick(e, item.id)}
                  >
                    <span className="drawer-number">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <span className="drawer-label">{item.label}</span>
                  </a>
                </li>
              ))}
            </ul>

            <a href="#contact" className="drawer-cta" onClick={closeMenu}>
              Contact
            </a>
          </nav>
        </>
      )}
    </>
  );
};

export default Header;
