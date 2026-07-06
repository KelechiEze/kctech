import { motion } from "motion/react";

const items = [
  "SEO-Friendly Web Development",
  "High-Performance Solutions",
  "Custom API Integrations",
  "Modern UI/UX Design",
  "Scalable Digital Systems",
  "Responsive Web Apps",
  "Expert Strategic Planning",
];

export default function HeroMarquee() {
  return (
    <div className="bg-brand py-6 md:py-8 overflow-hidden border-y border-white/10 relative z-20">
      <motion.div
        animate={{ x: [0, -1000] }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        className="flex whitespace-nowrap gap-12 items-center"
      >
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center">
            {items.map((item) => (
              <div key={item} className="flex items-center gap-6">
                <span className="text-xl md:text-3xl font-display font-bold uppercase tracking-widest text-dark leading-none">
                  {item}
                </span>
                <div className="w-3 h-3 md:w-4 md:h-4 bg-dark rotate-45 shrink-0" />
              </div>
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}