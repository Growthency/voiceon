"use client";
import { motion } from 'framer-motion';

const realFeatures = [
  // LINE 1: Core Functionalities
  {
    title: "Instant Voice Cloning",
    desc: "Create a perfect digital twin of your voice with just a 60-second sample. Ideal for consistent content creation without re-recording.",
    icon: "🎙️",
    tag: "Pro Cloning",
    gradient: "from-blue-50 to-indigo-50"
  },
  {
    title: "29+ Global Languages",
    desc: "Reach a worldwide audience instantly. Generate high-quality speech in 29+ languages with native-level accents and perfect grammar.",
    icon: "🌍",
    tag: "Native Accents",
    gradient: "from-orange-50 to-red-50"
  },
  {
    title: "Emotion & Tone Control",
    desc: "Adjust the delivery to match your script. Whether you need an excited, calm, or professional tone, our AI adapts to your needs.",
    icon: "🎭",
    tag: "Full Control",
    gradient: "from-purple-50 to-pink-50"
  },

  // LINE 2: Quality & Efficiency
  {
    title: "Priority Support",
    desc: "Get 24/7 dedicated assistance. Our team is here to help you optimize your voice generations and technical integrations any time.",
    icon: "🛡️",
    tag: "Premium Care",
    gradient: "from-green-50 to-emerald-50"
  },
  {
    title: "Multi-Format Export",
    desc: "Download your audio in MP3, WAV, or high-fidelity FLAC. Ready for professional video editing, podcasts, or game development.",
    icon: "📂",
    tag: "High Fidelity",
    gradient: "from-pink-50 to-rose-50"
  },
  {
    title: "Multi-Model Engine",
    desc: "Switch between different AI models to find the perfect match for your project—optimized for either speed or extreme realism.",
    icon: "⚙️",
    tag: "Advanced Tech",
    gradient: "from-cyan-50 to-blue-50"
  }
];

export default function Features() {
  return (
    <section className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-block px-6 py-2 rounded-full bg-slate-100 text-slate-500 text-[10px] font-black uppercase tracking-[0.3em] mb-6"
        >
          Built for Creators
        </motion.div>
        
        <h2 className="text-6xl md:text-[80px] font-[1000] tracking-tighter text-slate-900 leading-[0.9] mb-8">
          The Future of <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF8FAF] to-[#CCFAD6]">Digital Presence.</span>
        </h2>
        
        <p className="text-slate-400 text-xl font-medium max-w-2xl mx-auto">
          We’ve moved past robotic sounds. VoiceOn is a complete ecosystem built for the modern digital creator, focusing on realism and speed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {realFeatures.map((f, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -15, rotate: 1 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
            className={`group relative p-12 rounded-[56px] border border-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] transition-all duration-700 overflow-hidden bg-gradient-to-br ${f.gradient}`}
          >
            <div className="absolute -right-10 -bottom-10 h-40 w-40 bg-white opacity-40 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-1000"></div>

            <div className="relative z-10">
              <div className="flex justify-between items-center mb-10">
                <div className="h-20 w-20 rounded-[30px] bg-white flex items-center justify-center text-5xl shadow-[inset_0_2px_10px_rgba(0,0,0,0.02)] group-hover:rotate-[15deg] transition-all duration-500">
                  {f.icon}
                </div>
                <div className="px-5 py-2 rounded-2xl bg-white/60 backdrop-blur-sm border border-white text-[9px] font-black uppercase tracking-widest text-slate-500">
                  {f.tag}
                </div>
              </div>

              <h3 className="text-3xl font-black text-slate-900 mb-5 tracking-tighter leading-tight">
                {f.title}
              </h3>
              
              <p className="text-slate-500 text-lg font-bold leading-relaxed">
                {f.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}