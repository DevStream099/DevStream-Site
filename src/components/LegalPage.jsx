import { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import "./LegalPage.css";

const LegalPage = ({ title, lastUpdated, children }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  return (
    <>
      <Header />
      <main className="legal-page">
        <div className="legal-container">
          <Link to="/" className="legal-back">
            ← Back to Home
          </Link>
          <h1>{title}</h1>
          {lastUpdated && <p className="legal-updated">Last updated: {lastUpdated}</p>}
          <div className="legal-content">{children}</div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default LegalPage;
