import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Preloader from "./components/Preloader";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeroMarquee from "./components/HeroMarquee";
import PortfolioSection from "./components/PortfolioSection";
import MarqueeSection from "./components/MarqueeSection";
import AboutSection from "./components/AboutSection";
import ServicesSection from "./components/ServicesSection";
import WhyChooseUsSection from "./components/WhyChooseUsSection";
import PricingSection from "./components/PricingSection";
import TestimonialsSection from "./components/TestimonialsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import { ShopifySection } from "./components/ShopifySection";
import TermsAndConditions from "./components/TermsAndConditions";
import PrivacyPolicy from "./components/PrivacyPolicy";
import AboutPage from "./pages/AboutPage";
import ServicesPage from "./pages/ServicesPage";

export default function App() {
  const [loading, setLoading] = useState(true);

  return (
    <Router>
      <ScrollToTop /> {/* This now handles both route changes AND the scroll button */}
      <main className="relative min-h-screen selection:bg-brand selection:text-white bg-dark">
        <Preloader onComplete={() => setLoading(false)} />
        
        <div className={loading ? "opacity-0 invisible" : "opacity-100 visible transition-opacity duration-1000"}>
          <Routes>
            <Route path="/" element={
              <>
                <Navbar />
                <Hero />
                <HeroMarquee />
                <ContactSection />
                <AboutSection />
                <PricingSection />
                <PortfolioSection />
                <ShopifySection />
                <MarqueeSection />
                <ServicesSection />
                <TestimonialsSection />
                <WhyChooseUsSection />
                <Footer />
              </>
            } />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/terms" element={<TermsAndConditions />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
      </main>
    </Router>
  );
}