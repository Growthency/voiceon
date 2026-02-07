"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import toast from 'react-hot-toast';

export default function LoginPage() {
  const [mounted, setMounted] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    // User agei login thakle sora-sori dashboard-e niye jabe
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) router.push('/dashboard');
    };
    checkUser();
  }, [router]);

  if (!mounted) return null;

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      // Jodi mail confirm na hoy, Supabase ei message-ta dibe
      if (error.message.includes("Email not confirmed")) {
        toast.error("Please confirm your email or disable 'Confirm Email' in Supabase.");
      } else {
        toast.error(error.message);
      }
      setLoading(false);
    } else {
      toast.success("Welcome back, Commander! 🫡", {
        duration: 4000,
        icon: '🫡',
      });
      
      // Forcefully pushing to dashboard
      setTimeout(() => {
        router.replace('/dashboard');
      }, 500);
    }
  };

  return (
    <main className="relative min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#FF8FAF] opacity-[0.1] blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#CCFAD6] opacity-[0.15] blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white/70 backdrop-blur-2xl border border-white rounded-[40px] p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
          
          <div className="text-center mb-10">
            <div className="h-14 w-14 bg-gradient-to-br from-[#FF8FAF] to-[#CCFAD6] rounded-2xl mx-auto mb-6 flex items-center justify-center shadow-lg">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-8 h-8">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
              </svg>
            </div>
            <h1 className="text-3xl font-[1000] tracking-tighter text-slate-800">Welcome Back</h1>
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2">Sign in to VoiceOn account</p>
          </div>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2 mb-2">Email Address</label>
              <input name="email" type="email" required placeholder="you@example.com" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#FF8FAF]/20 transition-all font-medium text-slate-700 shadow-sm" />
            </div>
            <div>
              <label className="block text-[10px] font-black text-slate-400 uppercase tracking-widest ml-2 mb-2">Password</label>
              <input name="password" type="password" required placeholder="••••••••" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#FF8FAF]/20 transition-all font-medium text-slate-700 shadow-sm" />
            </div>

            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-slate-900 text-white py-5 rounded-[20px] font-black text-lg shadow-xl hover:bg-[#FF8FAF] transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-50"
            >
              {loading ? "Verifying..." : "Sign In"}
            </button>
          </form>

          <div className="mt-8 text-center text-sm font-bold text-slate-400">
            Don't have an account? <Link href="/signup" className="text-[#FF8FAF] hover:underline">Sign up</Link>
          </div>
        </div>
      </div>
    </main>
  );
}