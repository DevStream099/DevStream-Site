import { useEffect, useRef, useState } from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const testimonialsData = [
    {
      text: "Amazing Designs and Quality Work!",
      description:
        "DevStream delivered beyond our expectations. The UI/UX quality and performance were absolutely top-notch.",
      name: "John Doe",
      role: "CEO, Acme Inc.",
      initials: "JD",
    },
    {
      text: "Highly Professional Team",
      description:
          "Collaborating with DevStream was seamless. Their strategic insights, technical expertise, and proactive communication significantly contributed to the success of our projects.",
      name: "Sarah Khan",
      role: "Marketing Director, BrightCo",
      initials: "SK",
    },
    {
      text: "Outstanding Support & Delivery",
      description:
        "DevStream demonstrated exceptional project management and technical proficiency. They delivered our solutions ahead of schedule while maintaining the highest standards.",
      name: "Michael Lee",
      role: "Founder, StartUp Hub",
      initials: "ML",
    },
    {
      text: "Creative & Reliable Developers",
      description:
        "DevStream transformed our ideas into a modern and responsive platform. Highly recommended!",
      name: "Emma Wilson",
      role: "Product Manager, TechFlow",
      initials: "EW",
    },
  ];

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

  // Duplicate items once for a seamless infinite scroll loop.
  const scrollingTestimonials = [...testimonialsData, ...testimonialsData];

  return (
    <section
      id="testimonial"
      className={`testimonials section ${isVisible ? "visible" : ""}`}
      ref={sectionRef}
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

              <p className="testimonial-description">
                {item.description}
              </p>

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
    </section>
  );
};

export default Testimonials;