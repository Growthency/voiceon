"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  { 
    q: "Can I try before I buy? What's the catch?", 
    a: "No catch! We offer 5,000 free characters to every user upon sign-up. This allows you to fully test our voice quality, cloning speed, and emotional range before spending a penny." 
  },
  { 
    q: "What is your Refund Policy?", 
    a: "Because we provide a generous 5,000-character free trial for testing, we strictly follow a NO-REFUND policy once a paid plan is activated. We strongly advise you to exhaust your free credits and be 100% satisfied before upgrading." 
  },
  { 
    q: "How accurate is the Voice Cloning?", 
    a: "Our proprietary Qwen-3 architecture requires only 60 seconds of clean audio to create a perfect digital twin. It captures specific regional accents, breath patterns, and emotional nuances with 99% accuracy." 
  },
  { 
    q: "Can I use VoiceOn for Commercial Ads?", 
    a: "Absolutely. All audio generated under paid plans includes a full commercial usage license. You own the rights for YouTube monetization, Podcasts, TV ads, and Social Media campaigns." 
  },
  { 
    q: "How secure is my voice data?", 
    a: "We use enterprise-grade SSL encryption. Your voice samples are private and are never used to train our public models without your explicit written consent." 
  }
];

export default function FAQ() {
  const [active, setActive] = useState(null);

  return (
    // Background updated to a soft premium mesh gradient
    <section className="relative py-20 bg-gradient-to-b from-[#F8FAFC] to-white overflow-hidden">
      
      {/* Subtle Background Glows to kill the plain white look */}
      <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
        <div className="absolute top-0 right-[-10%] w-[400px] h-[400px] rounded-full bg-[#CCFAD6]/30 blur-[100px]"></div>
        <div className="absolute bottom-0 left-[-10%] w-[400px] h-[400px] rounded-full bg-[#FF8FAF]/20 blur-[100px]"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        
        {/* Compact Header - Gap Reduced */}
        <div className="text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-[1000] tracking-tighter text-slate-900 leading-tight mb-3"
          >
            Common <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8FAF] to-[#CCFAD6]">Queries.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-400 font-black uppercase tracking-[0.4em] text-[10px]"
          >
            Everything you need to know
          </motion.p>
        </div>

        {/* Accordion List */}
        <div className="grid gap-3">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className={`group rounded-[28px] border transition-all duration-300 ${
                active === i 
                ? "bg-white border-[#FF8FAF]/30 shadow-xl" 
                : "bg-white/60 backdrop-blur-sm border-slate-100 hover:border-slate-200 shadow-sm"
              }`}
            >
              <button 
                onClick={() => setActive(active === i ? null : i)} 
                className="w-full p-7 text-left flex justify-between items-center gap-4"
              >
                <span className={`font-bold text-lg md:text-xl transition-colors ${
                  active === i ? "text-slate-900" : "text-slate-700 group-hover:text-slate-900"
                }`}>
                  {faq.q}
                </span>
                
                {/* Premium Icon Fix */}
                <div className={`flex-shrink-0 h-10 w-10 rounded-full flex items-center justify-center transition-all duration-300 ${
                  active === i 
                  ? "bg-[#FF8FAF] text-white rotate-45" 
                  : "bg-slate-50 text-slate-300 group-hover:bg-slate-100"
                }`}>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="currentColor" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                  </svg>
                </div>
              </button>

              <AnimatePresence>
                {active === i && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }} 
                    animate={{ height: "auto", opacity: 1 }} 
                    exit={{ height: 0, opacity: 0 }} 
                    className="overflow-hidden"
                  >
                    <div className="px-7 pb-7 pt-0">
                      <div className="h-[1px] w-full bg-slate-50 mb-5"></div>
                      <p className="text-slate-500 font-bold text-lg leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}