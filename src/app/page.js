"use client";
import Hero from '@/components/Hero';
import Features from '@/components/Features'; // New Section
import Testimonials from '@/components/Testimonials';
import FAQ from '@/components/FAQ';

export default function Home() {
  return (
    <main className="bg-[#F8FAFC]">
      {/* Section 1: Hero - Pure White Background with Glow */}
      <div className="relative bg-white border-b border-slate-100 z-10">
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-[#FF8FAF] opacity-[0.1] blur-[120px] animate-pulse"></div>
        </div>
        <Hero />
      </div>

      {/* Section 2: Features - Subtle Grey Background for Contrast */}
      <div className="relative bg-slate-50/50 py-20 border-b border-slate-100 shadow-[inset_0_20px_40px_-20px_rgba(0,0,0,0.02)]">
        <Features />
      </div>

      {/* Section 3: Testimonials - Back to White with Glass Effect */}
      <div className="relative bg-white  border-b border-slate-100">
        <Testimonials />
      </div>

      {/* Section 4: FAQ - Lightest Blue/Grey Finish */}
      <div className="relative bg-slate-50/80">
        <FAQ />
      </div>
    </main>
  );
}