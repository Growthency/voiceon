"use client";
import Link from 'next/link';

export default function SignupPage() {
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

          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest ml-2 mb-2">First Name</label>
                <input type="text" placeholder="John" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#CCFAD6]/30 transition-all font-medium text-slate-700 shadow-sm" />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest ml-2 mb-2">Last Name</label>
                <input type="text" placeholder="Doe" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#CCFAD6]/30 transition-all font-medium text-slate-700 shadow-sm" />
              </div>
            </div>

            <div>
              <label className="block text-xs font-black text-slate-400 uppercase tracking-widest ml-2 mb-2">Email</label>
              <input type="email" placeholder="you@example.com" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#FF8FAF]/20 transition-all font-medium text-slate-700 shadow-sm" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest ml-2 mb-2">Password</label>
                <input type="password" placeholder="••••••••" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#FF8FAF]/20 transition-all font-medium text-slate-700 shadow-sm" />
              </div>
              <div>
                <label className="block text-xs font-black text-slate-400 uppercase tracking-widest ml-2 mb-2">Confirm Password</label>
                <input type="password" placeholder="••••••••" className="w-full px-6 py-4 rounded-2xl bg-white border border-slate-100 outline-none focus:ring-2 ring-[#FF8FAF]/20 transition-all font-medium text-slate-700 shadow-sm" />
              </div>
            </div>

            <button className="w-full mt-4 bg-gradient-to-r from-[#FF8FAF] to-[#ffb3c6] text-white py-5 rounded-[24px] font-[1000] text-xl shadow-[0_15px_30px_-10px_rgba(255,143,175,0.5)] hover:shadow-2xl transition-all hover:-translate-y-1 active:scale-95">
              Create My Account
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