import { useState } from "react";
import emailjs from "@emailjs/browser";
import "./ContactForm.css";

const CAL_LINK = "https://cal.com/muhammad-umar-b87ycu/30min";

// Fire a lead event that Google Ads / GTM can pick up as a conversion.
const trackLead = (method) => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "lead_submit", lead_method: method });
  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", { method });
  }
};

const emptyForm = { name: "", email: "", phone: "", message: "" };

const ContactForm = () => {
  const [activeTab, setActiveTab] = useState("email");
  const [formData, setFormData] = useState(emptyForm);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [honeypot, setHoneypot] = useState(""); // spam trap, real users never fill this

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
    if (formError) setFormError("");
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Please enter your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Please enter a valid email address.";
    if (formData.phone.replace(/\D/g, "").length < 7)
      errs.phone = "Please enter a valid phone number.";
    if (!formData.message.trim()) errs.message = "Please enter a short message.";
    return errs;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Bot filled the hidden field — pretend success, don't send anything.
    if (honeypot) {
      setSubmitted(true);
      return;
    }

    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      setFormError("Please fix the highlighted fields and try again.");
      return;
    }

    setSubmitting(true);
    setFormError("");

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formData,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          trackLead("contact_form");
          setSubmitted(true);
          setFormData(emptyForm);
          setSubmitting(false);
        },
        () => {
          setSubmitting(false);
          setFormError(
            "Something went wrong sending your message. Please try again, or email us directly."
          );
        }
      );
  };

  const handleBookClick = () => trackLead("book_meeting");

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <h2>Contact Us</h2>
        <p className="contact-subtitle">
          Send us a message or book a meeting directly — whatever works best for you.
        </p>

        {/* Tabs */}
        <div className="contact-tabs">
          <button
            type="button"
            className={`contact-tab ${activeTab === "email" ? "active" : ""}`}
            onClick={() => setActiveTab("email")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Send a Message
          </button>
          <button
            type="button"
            className={`contact-tab ${activeTab === "cal" ? "active" : ""}`}
            onClick={() => setActiveTab("cal")}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
              <line x1="16" y1="2" x2="16" y2="6" />
              <line x1="8" y1="2" x2="8" y2="6" />
              <line x1="3" y1="10" x2="21" y2="10" />
            </svg>
            Book a Meeting
          </button>
        </div>

        {/* Email Form */}
        {activeTab === "email" &&
          (submitted ? (
            <div className="contact-success" role="status">
              <div className="contact-success-icon">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </div>
              <h3>Thank you — your message is on its way!</h3>
              <p>
                We've received your details and will get back to you shortly, usually within a few
                hours during business hours.
              </p>
              <div className="contact-success-actions">
                <button
                  type="button"
                  className="ghost-btn"
                  onClick={() => setSubmitted(false)}
                >
                  Send another message
                </button>
                <a
                  className="cal-book-btn"
                  href={CAL_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={handleBookClick}
                >
                  Book a meeting instead
                </a>
              </div>
            </div>
          ) : (
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-row">
                <div className="form-field">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    autoComplete="name"
                    aria-label="Your name"
                    aria-invalid={!!errors.name}
                    className={errors.name ? "invalid" : ""}
                  />
                  {errors.name && <span className="field-error">{errors.name}</span>}
                </div>
                <div className="form-field">
                  <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    aria-label="Your email"
                    aria-invalid={!!errors.email}
                    className={errors.email ? "invalid" : ""}
                  />
                  {errors.email && <span className="field-error">{errors.email}</span>}
                </div>
              </div>

              <div className="form-field">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  autoComplete="tel"
                  aria-label="Your phone number"
                  aria-invalid={!!errors.phone}
                  className={errors.phone ? "invalid" : ""}
                />
                {errors.phone && <span className="field-error">{errors.phone}</span>}
              </div>

              <div className="form-field">
                <textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  aria-label="Your message"
                  aria-invalid={!!errors.message}
                  className={errors.message ? "invalid" : ""}
                />
                {errors.message && <span className="field-error">{errors.message}</span>}
              </div>

              {/* Honeypot: hidden from users, catches bots */}
              <input
                type="text"
                name="company"
                className="hp-field"
                tabIndex={-1}
                autoComplete="off"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                aria-hidden="true"
              />

              <button type="submit" disabled={submitting}>
                {submitting ? "Sending..." : "Send Message"}
              </button>

              {formError && <p className="status error">{formError}</p>}

              <p className="form-note">
                🔒 Your details are safe with us. No spam — we typically reply within a few hours.
              </p>
            </form>
          ))}

        {/* Book a Meeting */}
        {activeTab === "cal" && (
          <div className="cal-booking-panel">
            <div className="cal-booking-info">
              <div className="cal-icon-wrap">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              </div>
              <h3>Schedule a Free 30-Min Call</h3>
              <p>
                Pick a time that works for you and we'll discuss your project, answer questions, and
                map out next steps.
              </p>

              <ul className="cal-perks">
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Free, no-obligation consultation
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  30 minutes via Google Meet / Zoom
                </li>
                <li>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                  Get a project estimate on the call
                </li>
              </ul>

              <a
                className="cal-book-btn"
                href={CAL_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleBookClick}
              >
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
                Pick a Time
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ContactForm;
