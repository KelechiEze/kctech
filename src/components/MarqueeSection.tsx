import { motion, AnimatePresence } from "motion/react";
import { Play, X } from "lucide-react";
import { useState } from "react";

const services = [
  "More Customers",
  "Business Growth",
  "Fast Websites",
  "Global",
  "Digital Success",
  "Customer Attraction",
  "Modern Design",
  "Online Visibility",
];

export default function MarqueeSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="relative h-[80vh] min-h-[600px] overflow-hidden flex flex-col justify-center">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/digital-agency/1920/1080"
          alt="Modern Workspace"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-dark/40 backdrop-blur-[2px]" />
      </div>

      {/* Play Button */}
      <div className="relative z-10 flex justify-center mb-20">
        <motion.button
          onClick={() => setIsVideoOpen(true)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-24 h-24 rounded-full border border-white/30 backdrop-blur-md flex items-center justify-center group"
        >
          <div className="relative w-16 h-16 rounded-full bg-white/10 flex items-center justify-center transition-colors group-hover:bg-brand">
             <span className="text-xs font-bold tracking-widest text-dark">PLAY</span>
          </div>
          <div className="absolute inset-0 rounded-full border border-white/10 animate-ping" />
        </motion.button>
      </div>

      {/* Video Modal */}
      <AnimatePresence>
        {isVideoOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-dark/95 p-4 md:p-10"
          >
            <button 
              onClick={() => setIsVideoOpen(false)}
              className="absolute top-10 right-10 text-white hover:text-brand transition-colors p-2"
            >
              <X className="w-8 h-8" />
            </button>
            
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="w-full max-w-5xl aspect-video rounded-3xl overflow-hidden bg-black shadow-2xl relative"
            >
              <iframe 
                width="100%" 
                height="100%" 
                src="https://www.youtube.com/embed/eUba6RzeLwE?autoplay=1" 
                title="How We Build Websites That Bring You More Customers" 
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Tilted Marquees */}
      <div className="relative z-20 -mx-10 space-y-4">
        {/* Banner 1: Tilted Left */}
        <div className="rotate-[-2deg] bg-brand py-4 overflow-hidden shadow-2xl">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
            className="flex whitespace-nowrap gap-10 items-center"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-10 items-center">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-4">
                    <span className="text-xl md:text-2xl font-bold uppercase tracking-tight text-dark">
                      {service}
                    </span>
                    <div className="w-2 h-2 bg-dark rotate-45" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>

        {/* Banner 2: Tilted Right */}
        <div className="rotate-[1deg] bg-dark py-4 overflow-hidden border-y border-white/10 shadow-2xl">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="flex whitespace-nowrap gap-10 items-center"
          >
            {[...Array(4)].map((_, i) => (
              <div key={i} className="flex gap-10 items-center">
                {services.map((service) => (
                  <div key={service} className="flex items-center gap-4">
                    <span className="text-xl md:text-2xl font-bold uppercase tracking-tight text-white">
                      {service}
                    </span>
                    <div className="w-2 h-2 bg-brand rotate-45" />
                  </div>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}