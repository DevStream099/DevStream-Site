import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import LogosSection from './components/LogosSection';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';
import ContactForm from './components/ContactForm';
import ProjectPage from './components/ProjectPage';
import WhatsAppButton from './components/WhatsAppButton';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import './App.css';

const MainLayout = () => {
  return (
    <>
      <Header />
      <Hero />
      <LogosSection />
      <Services />
      <Portfolio />
      <Testimonials />
      <Team />
      <CTA />
      <ContactForm />
      <Footer />
    </>
  );
};

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />} />
        <Route path="/projects/:id" element={<ProjectPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>
      <WhatsAppButton />
    </>
  );
}

export default App;
