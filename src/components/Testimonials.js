"use client";
import { motion } from "framer-motion";

const reviews = [
  { 
    name: "Lukas Nilsson", 
    role: "Podcast Host", 
    text: "The voice cloning quality is industry-leading. I cloned my voice in 60 seconds!", 
    stars: 5,
    img: "https://i.pravatar.cc/150?u=lukas"
  },
  { 
    name: "Emma Björk", 
    role: "E-learning Developer", 
    text: "VoiceOn has saved us thousands in studio costs. The Swedish accent is perfect.", 
    stars: 5,
    img: "https://i.pravatar.cc/150?u=emma"
  },
  { 
    name: "Oliver Smith", 
    role: "YouTube Creator", 
    text: "The Emotion AI is a game changer. I can make the AI sound excited or calm instantly.", 
    stars: 5,
    img: "https://i.pravatar.cc/150?u=oliver"
  },
  { 
    name: "Sofia Dahlin", 
    role: "Marketing Manager", 
    text: "Cleanest UI I've ever used. The API integration was seamless for our app.", 
    stars: 5,
    img: "https://i.pravatar.cc/150?u=sofia"
  },
];

const SliderRow = ({ items, direction }) => (
  <div className="flex overflow-hidden gap-6 py-6">
    <motion.div
      initial={{ x: direction === "left" ? 0 : "-50%" }}
      animate={{ x: direction === "left" ? "-50%" : 0 }}
      transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
      className="flex gap-6 min-w-max"
    >
      {[...items, ...items].map((item, i) => (
        <div key={i} className="w-[400px] bg-white/70 backdrop-blur-md p-8 rounded-[40px] border border-white/50 shadow-[0_10px_30px_-15px_rgba(0,0,0,0.05)] hover:shadow-2xl transition-all group">
          <div className="flex items-center gap-4 mb-6">
            <img src={item.img} alt={item.name} className="h-14 w-14 rounded-2xl object-cover border-2 border-[#CCFAD6]" />
            <div>
              <h4 className="font-black text-slate-800 text-lg leading-none">{item.name}</h4>
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mt-1">{item.role}</p>
            </div>
            <div className="ml-auto text-[#FF8FAF] text-sm font-black">{"★".repeat(item.stars)}</div>
          </div>
          <p className="text-slate-600 font-bold leading-relaxed italic text-lg">"{item.text}"</p>
        </div>
      ))}
    </motion.div>
  </div>
);

export default function Testimonials() {
  return (
    // Eikhane amra animated mesh gradient background use korbo
    <section className="relative py-32 bg-[#F8FAFC] overflow-hidden">
      
      {/* Moving Animated Mesh Gradient */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-20%] left-[-10%] w-[80%] h-[80%] rounded-full bg-[#FF8FAF]/10 blur-[120px]"
        />
        <motion.div 
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -100, 0],
            y: [0, -50, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-20%] right-[-10%] w-[80%] h-[80%] rounded-full bg-[#CCFAD6]/20 blur-[120px]"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center mb-20">
        <h2 className="text-5xl md:text-7xl font-[1000] tracking-tighter text-slate-900 mb-6">
          Trusted by the <span className="text-[#FF8FAF]">Best.</span>
        </h2>
        <p className="text-slate-500 text-xl font-medium max-w-2xl mx-auto">
          Join thousands of creators who use VoiceOn to power their storytelling.
        </p>
      </div>

      <div className="relative z-10">
        <SliderRow items={reviews} direction="left" />
        <SliderRow items={reviews} direction="right" />
      </div>

      {/* Glassmorphism Subtle Borders to separate sections */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-200 to-transparent"></div>
    </section>
  );
}