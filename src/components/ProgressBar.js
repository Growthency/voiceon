"use client";
import { useEffect, useState } from "react";

export default function ProgressBar() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollValue = window.scrollY;
      const height = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((scrollValue / height) * 100);
    };
    window.addEventListener("scroll", updateProgress);
    return () => window.removeEventListener("scroll", updateProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[60]">
      <div 
        className="h-full bg-gradient-to-r from-[#FF8FAF] to-[#CCFAD6] transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      ></div>
    </div>
  );
}