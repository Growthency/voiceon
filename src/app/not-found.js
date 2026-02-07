"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';
import AnimatedBackground from '@/components/AnimatedBackground';

export default function NotFound() {
  return (
    <main className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden bg-[#F8FAFC]">
      <AnimatedBackground />

      <div className="relative z-10 text-center">
        <motion.h1 
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="text-[150px] md:text-[220px] font-[1000] tracking-tighter text-slate-900 leading-none"
        >
          4<span className="text-[#FF8FAF]">0</span>4
        </motion.h1>
        
        <h2 className="text-3xl md:text-5xl font-black text-slate-800 tracking-tight mt-4">
          Lost in the <span className="text-[#CCFAD6] bg-slate-900 px-4 py-1 rounded-2xl">Silence?</span>
        </h2>
        
        <p className="mt-8 text-slate-500 text-lg md:text-xl font-semibold max-w-lg mx-auto">
          The page you are looking for has been muted or doesn't exist. Let's get you back to the sound of reality.
        </p>

        <div className="mt-12">
          <Link href="/">
            <button className="bg-slate-900 text-white px-10 py-5 rounded-[24px] font-black text-lg shadow-2xl hover:bg-[#FF8FAF] transition-all hover:-translate-y-2 active:scale-95">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}