"use client";
import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
      <motion.div 
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 50, 0],
          y: [0, 100, 0],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        className="absolute -top-[10%] -left-[10%] w-[70%] h-[70%] rounded-full bg-[#FF8FAF] opacity-[0.12] blur-[120px]"
      />
      <motion.div 
        animate={{
          scale: [1.3, 1, 1.3],
          x: [0, -50, 0],
          y: [0, -100, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-[20%] -right-[10%] w-[60%] h-[60%] rounded-full bg-[#CCFAD6] opacity-[0.15] blur-[120px]"
      />
    </div>
  );
}