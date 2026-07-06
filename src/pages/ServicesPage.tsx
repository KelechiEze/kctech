import { motion } from "motion/react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ServicesSection from "../components/ServicesSection";
import WhyChooseUsSection from "../components/WhyChooseUsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import MarqueeSection from "../components/MarqueeSection";
import ContactSection from "../components/ContactSection";
import PricingSection from "../components/PricingSection";
import { ShopifySection } from "../components/ShopifySection";
import { 
  Laptop, 
  Smartphone, 
  BarChart3, 
  ShoppingBag,
  Code,
  Megaphone,
  Palette,
  Server,
  Rocket,
  Users,
  Zap,
  Globe
} from "lucide-react";

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="relative min-h-screen selection:bg-brand selection:text-white bg-dark pt-24">
        {/* Hero Section for Services Page with Background Image */}
        <section className="relative py-20 px-4 overflow-hidden min-h-[60vh] flex items-center">
          {/* Background Image with Overlay */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80')`,
            }}
          />
          
          {/* Dark Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-dark/90 via-dark/70 to-dark/90" />
          
          {/* Subtle Brand Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-brand/10 via-transparent to-brand/10" />
          
          {/* Animated Particle Effect */}
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
              <span className="text-sm font-medium text-brand">Our Services</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-6 leading-tight"
            >
              Solutions That <span className="text-brand">Drive Growth</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto leading-relaxed"
            >
              From web development to digital marketing, we offer comprehensive 
              services designed to help your business thrive in the digital landscape.
            </motion.p>

            {/* Service Highlights with Lucide Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto"
            >
              {[
                { icon: Laptop, label: "Web Development" },
                { icon: Smartphone, label: "Mobile Apps" },
                { icon: BarChart3, label: "Digital Marketing" },
                { icon: ShoppingBag, label: "E-commerce" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-3 text-center hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-brand/30 group"
                >
                  <item.icon className="w-8 h-8 text-brand mx-auto mb-1 group-hover:scale-110 transition-transform duration-300" />
                  <div className="text-xs text-white/70">{item.label}</div>
                </motion.div>
              ))}
            </motion.div>

            {/* Additional Service Categories with Lucide Icons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-8 flex flex-wrap justify-center gap-3"
            >
              {[
                { icon: Code, label: "Custom Development" },
                { icon: Megaphone, label: "Branding" },
                { icon: Palette, label: "UI/UX Design" },
                { icon: Server, label: "Cloud Solutions" },
                { icon: Rocket, label: "Launch Strategy" },
                { icon: Users, label: "Team Training" },
              ].map((item, index) => (
                <motion.span
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 + index * 0.05 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-white/60 hover:bg-white/10 hover:border-brand/20 transition-all duration-300"
                >
                  <item.icon className="w-3.5 h-3.5 text-brand/60" />
                  <span>{item.label}</span>
                </motion.span>
              ))}
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
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
        <ServicesSection />
        <PricingSection />
        <ShopifySection />
        <WhyChooseUsSection />
        <MarqueeSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}