import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import Logo from "./Logo";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 800);
    }, 2000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-dark"
        >
          <div className="relative">
            {/* Spinning Arcs */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 2.5, ease: "linear" }}
              className="absolute inset-0 -m-16"
            >
              <svg viewBox="0 0 100 100" className="w-56 h-56">
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.8"
                  strokeDasharray="40 160"
                  strokeLinecap="round"
                  className="opacity-40"
                />
                <circle
                  cx="50"
                  cy="50"
                  r="45"
                  fill="none"
                  stroke="white"
                  strokeWidth="0.8"
                  strokeDasharray="40 160"
                  strokeDashoffset="100"
                  strokeLinecap="round"
                  className="opacity-40"
                />
              </svg>
            </motion.div>

            {/* Logo in Center */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <div className="w-24 h-24 flex items-center justify-center bg-brand rounded-full shadow-2xl shadow-brand/40 group overflow-hidden relative">
                
                {/* Internal spinning glow */}
                <motion.div 
                  animate={{ rotate: -360 }}
                  transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/10 to-white/0"
                />
                 
                {/* REPLACED SVG WITH YOUR FILE */}
                <img 
                  src="/favicon.svg" 
                  alt="logo"
                  className="w-12 h-12 object-contain relative z-10"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}