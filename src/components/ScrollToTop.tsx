import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronUp } from "lucide-react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  // Show button when page is scrolled up to a certain distance
  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Set the top cordinate to 0
  // make scrolling smooth
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Auto-scroll to top when route/path changes (for Terms & Privacy pages)
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "instant", // Use "smooth" if you want animated scrolling
    });
  }, [location.pathname]); // This triggers when URL changes

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-[9999]">
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.5 }}
            whileHover={{ scale: 1.1, backgroundColor: "#f04e23" }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-14 h-14 bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full flex items-center justify-center shadow-2xl shadow-black/50 hover:bg-brand hover:border-brand/0 transition-colors group relative overflow-hidden"
          >
            {/* Glossy highlight effect on hover */}
            <motion.div 
              className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"
            />
            
            <ChevronUp className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
            
            {/* Subtle pulsate glow when active */}
            <div className="absolute inset-0 rounded-full border border-brand/50 animate-ping opacity-20 pointer-events-none group-hover:block hidden" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}