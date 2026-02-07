"use client";
import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

export default function ProgressBar() {
  const { scrollYProgress } = useScroll();
  
  // Spring animation add korlam jate scroll korle bar-ta jitter na kore smooth move kore
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    // z-index bariye 9999 korlam jate Navbar ba Sidebar-er upore thake
    <motion.div
      className="fixed top-0 left-0 right-0 h-[4px] bg-gradient-to-r from-[#FF8FAF] via-[#ffb3c6] to-[#CCFAD6] z-[9999] origin-left"
      style={{ scaleX }}
    />
  );
}