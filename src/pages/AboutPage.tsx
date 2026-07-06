import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutSection from "../components/AboutSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import MarqueeSection from "../components/MarqueeSection";
import ContactSection from "../components/ContactSection";
import HeroMarquee from "../components/HeroMarquee";
import { ShopifySection } from "../components/ShopifySection";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen selection:bg-brand selection:text-white bg-dark pt-24">
        {/* Hero Section for About Page with Background Image */}
        <section className="relative py-20 px-4 overflow-hidden min-h-[60vh] flex items-center">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1920&q=80')`,
            }}
          />
          
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/70 to-dark/90" />
          
          {/* Subtle Brand Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-transparent to-brand/10" />
          
          {/* Animated Particle Effect (Optional) */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-brand/5 rounded-full blur-3xl animate-pulse" />
            <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-brand/5 rounded-full blur-3xl animate-pulse delay-1000" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative max-w-4xl mx-auto text-center z-10"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand/10 border border-brand/20 backdrop-blur-sm"
            >
              <span className="text-sm font-medium text-brand">About BizzJump</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
            >
              Empowering Businesses to{" "}
              <span className="text-brand">Jump Higher</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              We're on a mission to help businesses transform their digital presence 
              and achieve remarkable growth through innovative solutions and strategic partnerships.
            </motion.p>

            {/* Optional: Add a scroll indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-12 flex justify-center"
            >
              <div className="animate-bounce">
                <svg 
                  className="w-6 h-6 text-white/40" 
                  fill="none" 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth="2" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
                </svg>
              </div>
            </motion.div>
          </motion.div>
        </section>

        {/* Reuse existing components */}
        <AboutSection />
        <WhyChooseUsSection />
        <MarqueeSection />
        <ShopifySection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}