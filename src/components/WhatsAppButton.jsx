import "./WhatsAppButton.css";

const WHATSAPP_NUMBER = "923141688006"; // +92 314-1688006
const PREFILLED_MESSAGE =
  "Hi DevStream, I'd like to discuss a project.";

const trackWhatsApp = () => {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event: "lead_submit", lead_method: "whatsapp" });
  if (typeof window.gtag === "function") {
    window.gtag("event", "generate_lead", { method: "whatsapp" });
  }
};

const WhatsAppButton = () => {
  const href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    PREFILLED_MESSAGE
  )}`;

  return (
    <a
      className="whatsapp-fab"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      onClick={trackWhatsApp}
    >
      <span className="whatsapp-fab-pulse" aria-hidden="true"></span>
      <svg viewBox="0 0 32 32" fill="currentColor" aria-hidden="true">
        <path d="M16.001 3.2c-7.06 0-12.8 5.74-12.8 12.8 0 2.257.59 4.463 1.71 6.408L3.2 28.8l6.57-1.723a12.74 12.74 0 0 0 6.23 1.587h.005c7.06 0 12.8-5.74 12.8-12.8 0-3.42-1.332-6.635-3.752-9.055A12.72 12.72 0 0 0 16.001 3.2zm0 23.36h-.004a10.58 10.58 0 0 1-5.393-1.476l-.387-.23-4.003 1.05 1.068-3.903-.252-.4a10.56 10.56 0 0 1-1.62-5.63c0-5.867 4.774-10.64 10.645-10.64 2.843 0 5.515 1.108 7.524 3.12a10.57 10.57 0 0 1 3.116 7.525c0 5.868-4.773 10.641-10.64 10.641zm5.834-7.968c-.32-.16-1.892-.933-2.185-1.04-.293-.107-.507-.16-.72.16-.213.32-.826 1.04-1.013 1.253-.187.213-.373.24-.693.08-.32-.16-1.35-.498-2.572-1.587-.95-.848-1.593-1.895-1.78-2.215-.187-.32-.02-.493.14-.653.144-.143.32-.373.48-.56.16-.187.213-.32.32-.533.107-.213.053-.4-.027-.56-.08-.16-.72-1.734-.986-2.374-.26-.623-.523-.539-.72-.549l-.613-.011c-.213 0-.56.08-.853.4-.293.32-1.12 1.094-1.12 2.667 0 1.573 1.146 3.093 1.306 3.307.16.213 2.253 3.44 5.46 4.824.763.33 1.358.527 1.822.674.766.243 1.463.209 2.014.127.614-.092 1.892-.774 2.158-1.52.267-.747.267-1.387.187-1.52-.08-.133-.293-.213-.613-.373z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
