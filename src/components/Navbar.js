"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link'; 

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
      scrolled 
      ? "bg-white/70 backdrop-blur-xl py-4 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.06)]" 
      : "bg-transparent py-7"
    }`}>
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-3 items-center">
        
        {/* LEFT: Logo */}
        <Link href="/" className="flex items-center gap-3 group cursor-pointer justify-self-start">
          <div className="h-10 w-10 rounded-xl bg-gradient-to-br from-[#FF8FAF] to-[#CCFAD6] flex items-center justify-center shadow-lg group-hover:rotate-[10deg] transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
            </svg>
          </div>
          <span className="text-xl font-[1000] tracking-tighter text-slate-800">
            Voice<span className="text-[#FF8FAF]">On</span>
          </span>
        </Link>

        {/* CENTER: Navigation Links */}
        <div className="hidden md:flex gap-10 items-center justify-self-center font-[1000] text-[13px] text-slate-500 uppercase tracking-widest">
          <Link href="/" className="hover:text-[#FF8FAF] transition-all cursor-pointer">Home</Link>
          <Link href="/pricing" className="hover:text-[#FF8FAF] transition-all cursor-pointer">Pricing</Link>
          <Link href="/contact" className="hover:text-[#FF8FAF] transition-all cursor-pointer">Contact</Link>
        </div>

        {/* RIGHT: CTA Button */}
        <div className="flex items-center justify-self-end">
          <Link 
            href="/login" 
            className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-black text-[13px] hover:bg-[#FF8FAF] hover:shadow-[0_20px_40px_-10px_rgba(255,143,175,0.4)] transition-all active:scale-95 text-center inline-block"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}