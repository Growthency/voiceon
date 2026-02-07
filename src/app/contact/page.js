"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { supabase } from '@/lib/supabase'; // Import the client
import AnimatedBackground from '@/components/AnimatedBackground';
import toast from 'react-hot-toast';

export default function Contact() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const data = {
      first_name: formData.get('first_name'),
      last_name: formData.get('last_name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    // --- Supabase Run Code ---
    const { error } = await supabase
      .from('messages') // Tomar table name
      .insert([data]);

    if (error) {
      toast.error("Something went wrong: " + error.message);
      console.log(error);
    } else {
      toast.success("Message sent! We'll get back to you soon.");
      e.target.reset();
    }
    
    setLoading(false);
  };

  return (
    <main className="relative min-h-screen pt-40 pb-20 px-6 bg-[#F8FAFC] overflow-hidden">
      <AnimatedBackground />

      <div className="relative z-10 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h1 className="text-6xl md:text-8xl font-[1000] tracking-tighter text-slate-900 leading-[0.9] mb-8">
            Let's Start a <br />
            <span className="text-[#FF8FAF]">Conversation.</span>
          </h1>
          <p className="text-xl text-slate-500 font-bold leading-relaxed max-w-md">
            Have questions? Our team is here to help you amplify your voice.
          </p>
        </div>

        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="bg-white/70 backdrop-blur-2xl p-10 rounded-[48px] border border-white shadow-2xl"
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-2 gap-4">
              <input name="first_name" type="text" placeholder="First Name" required className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#FF8FAF]/20 font-bold" />
              <input name="last_name" type="text" placeholder="Last Name" required className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#FF8FAF]/20 font-bold" />
            </div>
            <input name="email" type="email" placeholder="Work Email" required className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#FF8FAF]/20 font-bold" />
            <textarea name="message" placeholder="Tell us about your project..." rows="4" required className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#FF8FAF]/20 font-bold resize-none"></textarea>
            
            <button 
              disabled={loading}
              className="w-full bg-slate-900 text-white py-5 rounded-[24px] font-black text-lg shadow-xl hover:bg-[#FF8FAF] transition-all disabled:opacity-50"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </main>
  );
}