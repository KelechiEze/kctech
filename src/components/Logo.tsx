import React from "react";
import { motion } from "motion/react";

export default function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <motion.div 
        whileHover={{ rotate: 180 }}
        transition={{ type: "spring", stiffness: 200 }}
        className="relative w-10 h-10 flex items-center justify-center bg-brand rounded-full overflow-hidden shadow-lg shadow-brand/20"
      >
        {/* REPLACED SVG WITH YOUR FILE */}
        <img 
          src="/favicon.svg" 
          alt="logo"
          className="w-6 h-6 object-contain"
        />
      </motion.div>

      <span className="text-2xl font-display font-bold tracking-tight text-white uppercase">
        BizzJump<span className="text-brand">.</span>
      </span>
    </div>
  );
}