import React from "react";
import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline';
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, variant = 'primary', className = "", onClick }: ButtonProps) {
  const isRoundedSet = className.includes("rounded-");
  const baseStyles = `relative flex items-center justify-center gap-2 py-3 px-6 ${isRoundedSet ? "" : "rounded-lg"} font-medium transition-all duration-300 group overflow-hidden`;
  
  const variants = {
    primary: "bg-brand text-dark hover:bg-brand/90", // Changed from text-white to text-dark
    outline: "border border-zinc-800 text-white hover:bg-brand hover:text-dark", // Optional: change outline hover behavior
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={`${baseStyles} ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      <span className="relative z-10">{children}</span>
      <motion.div
        className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      >
        <ArrowUpRight className="w-5 h-5" />
      </motion.div>
      
      {/* Glossy effect on hover */}
      <motion.div 
        className="absolute inset-0 bg-white/10 -translate-x-full group-hover:translate-x-full transition-transform duration-700 skew-x-12"
      />
    </motion.button>
  );
}