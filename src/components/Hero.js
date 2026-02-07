"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Typewriter from 'typewriter-effect';
import { motion } from 'framer-motion';

export default function Hero() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    // justify-center add korlam jate content vertical center hoy aar scroll icon upore thake
    <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-32 pb-20 px-6 max-w-7xl mx-auto overflow-hidden">
      
      {/* Floating Badge - Balanced Spacing */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 px-6 py-2 rounded-full bg-white border border-slate-100 shadow-sm flex items-center gap-3"
      >
        <span className="relative flex h-3 w-3">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF8FAF] opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF8FAF]"></span>
        </span>
        <p className="text-[11px] font-[1000] uppercase tracking-[0.25em] text-slate-400">
          VoiceOn v2 is live now
        </p>
      </motion.div>

      {/* Main Headlines - World Class Typography */}
      <div className="flex flex-col items-center">
        <h1 className="text-center text-6xl md:text-[110px] font-[1000] tracking-tighter text-slate-900 leading-[0.85] flex flex-col items-center">
          Make your ideas <br /> 
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8FAF] to-[#ffb3c6] min-h-[1.2em]">
            {isMounted && (
              <Typewriter
                options={{
                  strings: ['Speak Out.', 'Soulful.', 'Human-like.'],
                  autoStart: true,
                  loop: true,
                  delay: 75,
                  deleteSpeed: 50,
                  cursorClassName: 'text-[#FF8FAF]',
                }}
              />
            )}
          </span>
        </h1>
      </div>
      
      <p className="mt-10 text-center text-slate-500 text-lg md:text-2xl max-w-3xl font-medium leading-relaxed">
        The most advanced AI voice platform. Create high-quality speech in any voice and style with VoiceOn's powerful Qwen-driven models.
      </p>

      {/* Action Button */}
      <div className="mt-14">
        <Link href="/login" prefetch={false}>
          <div className="group relative flex items-center gap-4 bg-white text-slate-900 border border-slate-100 px-10 py-5 rounded-[24px] font-black text-xl shadow-2xl hover:shadow-[0_40px_80px_-20px_rgba(0,0,0,0.1)] transition-all hover:-translate-y-2 active:scale-95 cursor-pointer">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF8FAF] text-white transition-transform group-hover:scale-110">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                <path fillRule="evenodd" d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z" clipRule="evenodd" />
              </svg>
            </div>
            Watch Demo
          </div>
        </Link>
      </div>

      {/* Scroll Down Indicator - Visible now */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 text-slate-300"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </motion.div>
    </section>
  );
}