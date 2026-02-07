"use client";
import { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export default function CursorFollower() {
  // Spring settings aro smooth kora hoyeche
  const springConfig = { stiffness: 200, damping: 25, mass: 0.5 };
  const cursorX = useSpring(0, springConfig);
  const cursorY = useSpring(0, springConfig);

  useEffect(() => {
    const moveMouse = (e) => {
      // 12px minus korlam jate ball-ta mouse-er center-e thake
      cursorX.set(e.clientX - 12); 
      cursorY.set(e.clientY - 12);
    };

    window.addEventListener("mousemove", moveMouse);
    return () => window.removeEventListener("mousemove", moveMouse);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-6 h-6 pointer-events-none z-[10000] hidden md:block"
      style={{
        x: cursorX,
        y: cursorY,
      }}
    >
      {/* 1. Main Glossy Ball */}
      <div className="relative w-full h-full rounded-full border border-white/30 bg-[#FF8FAF]/20 backdrop-blur-[2px] shadow-[0_0_15px_rgba(255,143,175,0.4)]">
        
        {/* 2. Inner Animated Glow Pulse */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#FF8FAF] to-[#CCFAD6] opacity-40 animate-pulse scale-75"></div>
        
        {/* 3. Center Dot */}
        <div className="absolute inset-[35%] rounded-full bg-white shadow-[0_0_8px_white]"></div>
      </div>

      {/* 4. Outer Soft Aura */}
      <div className="absolute -inset-2 rounded-full bg-[#FF8FAF]/10 blur-xl"></div>
    </motion.div>
  );
}