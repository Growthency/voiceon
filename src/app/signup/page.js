"use client";
import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import toast from 'react-hot-toast';

export default function SignupPage() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    const email = formData.get('email');
    const password = formData.get('password');
    const confirmPassword = formData.get('confirm_password');
    const firstName = formData.get('first_name');
    const lastName = formData.get('last_name');

    // 1. Password Match Validation
    if (password !== confirmPassword) {
      toast.error("Passwords do not match!");
      setLoading(false);
      return;
    }

    // 2. Supabase Auth Signup
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          first_name: firstName,
          last_name: lastName,
          full_name: `${firstName} ${lastName}`,
        },
      },
    });

    if (error) {
      toast.error(error.message);
    } else {
      toast.success("Account created successfully!");
      // User-ke dashboard-e pathiye daw
      router.push('/dashboard');
    }

    setLoading(false);
  };

  return (
    <main className="relative min-h-screen bg-[#F8FAFC] flex items-center justify-center p-6 overflow-hidden">
      {/* Background Glows */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-[50%] h-[50%] rounded-full bg-[#FF8FAF] opacity-[0.1] blur-[100px] animate-pulse"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-[#CCFAD6] opacity-[0.15] blur-[100px]"></div>
      </div>

      <div className="relative z-10 w-full max-w-xl">
        <div className="bg-white/70 backdrop-blur-2xl border border-white rounded-[40px] p-10 md:p-12 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.08)]">
          
          <div className="text-center mb-10">
            <h1 className="text-4xl font-[1000] tracking-tighter text-slate-800">Create Account</h1>
            <p className="text-slate-400 font-bold text-xs uppercase tracking-widest mt-2">Join the future of AI speech</p>
          </div>

          <form onSubmit={handleSignup} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest ml-2 mb-2">First Name</label>
                <input name="first_name" type="text" placeholder="John" required className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#CCFAD6]/30 transition-all font-medium text-slate-700 shadow-sm" />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest ml-2 mb-2">Last Name</label>
                <input name="last_name" type="text" placeholder="Doe" required className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#CCFAD6]/30 transition-all font-medium text-slate-700 shadow-sm" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest ml-2 mb-2">Email</label>
              <input name="email" type="email" placeholder="you@example.com" required className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#FF8FAF]/20 transition-all font-medium text-slate-700 shadow-sm" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest ml-2 mb-2">Password</label>
                <input name="password" type="password" placeholder="••••••••" required className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#FF8FAF]/20 transition-all font-medium text-slate-700 shadow-sm" />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest ml-2 mb-2">Confirm Password</label>
                <input name="confirm_password" type="password" placeholder="••••••••" required className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#FF8FAF]/20 transition-all font-medium text-slate-700 shadow-sm" />
              </div>
            </div>

            <button 
              type="submit"
              disabled={loading}
              className="w-full mt-4 bg-gradient-to-r from-[#FF8FAF] to-[#ffb3c6] text-white py-5 rounded-[24px] font-[1000] text-xl shadow-[0_15px_30px_-10px_rgba(255,143,175,0.5)] hover:shadow-2xl transition-all hover:-translate-y-1 active:scale-95 disabled:opacity-50"
            >
              {loading ? "Creating Account..." : "Create My Account"}
            </button>
          </form>

          <div className="mt-8 text-center text-sm font-bold text-slate-400">
            Already have an account? <Link href="/login" className="text-[#FF8FAF] hover:underline">Sign in</Link>
          </div>
        </div>
      </div>
    </main>
  );
}