"use client";

export default function Footer() {
  return (
    <footer className="relative z-10 bg-white/40 backdrop-blur-md border-t border-slate-100 pt-20 pb-10 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-[#FF8FAF] to-[#CCFAD6] flex items-center justify-center shadow-md">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 0 0 6-6v-1.5m-6 7.5a6 6 0 0 1-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 0 1-3-3V4.5a3 3 0 1 1 6 0v8.25a3 3 0 0 1-3 3Z" />
                 </svg>
              </div>
              <span className="text-xl font-[1000] tracking-tighter text-slate-800">Voice<span className="text-[#FF8FAF]">On</span></span>
            </div>
            <p className="text-slate-500 text-sm font-medium leading-relaxed">
              Creating the world's most expressive AI voices for creators, developers, and businesses. Turn any text into speech in seconds.
            </p>
          </div>

          {/* Real Links: Product */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-6">Product</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-semibold">
              <li><a href="#" className="hover:text-[#FF8FAF] transition-colors">Speech Synthesis</a></li>
              <li><a href="#" className="hover:text-[#FF8FAF] transition-colors">Voice Cloning</a></li>
              <li><a href="#" className="hover:text-[#FF8FAF] transition-colors">AI Dubbing</a></li>
              <li><a href="#" className="hover:text-[#FF8FAF] transition-colors">API Docs</a></li>
            </ul>
          </div>

          {/* Real Links: Resources */}
          <div>
            <h4 className="text-slate-900 font-bold text-sm uppercase tracking-widest mb-6">Resources</h4>
            <ul className="space-y-4 text-slate-500 text-sm font-semibold">
              <li><a href="#" className="hover:text-[#FF8FAF] transition-colors">Pricing Plans</a></li>
              <li><a href="#" className="hover:text-[#FF8FAF] transition-colors">Integrations</a></li>
              <li><a href="#" className="hover:text-[#FF8FAF] transition-colors">Security</a></li>
              <li><a href="#" className="hover:text-[#FF8FAF] transition-colors">Affiliate</a></li>
            </ul>
          </div>

          {/* Newsletter / CTA */}
          <div className="bg-slate-50/50 p-6 rounded-3xl border border-slate-100">
            <h4 className="text-slate-900 font-bold text-sm mb-2">Join the future</h4>
            <p className="text-slate-500 text-xs mb-4 font-medium">Get the latest updates on AI voice models.</p>
            <div className="flex gap-2">
              <input 
                type="email" 
                placeholder="Email" 
                className="bg-white border border-slate-200 rounded-xl px-4 py-2 text-xs w-full focus:ring-2 ring-[#FF8FAF]/20 outline-none"
              />
              <button className="bg-slate-900 text-white p-2.5 rounded-xl hover:bg-[#FF8FAF] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4">
                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-[10px] font-bold uppercase tracking-[0.2em]">
            © 2026 VoiceOn AI. All rights reserved.
          </p>
          <div className="flex gap-8 text-[10px] font-bold uppercase tracking-[0.1em] text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors">Terms</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Privacy</a>
            <a href="#" className="hover:text-slate-900 transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
}