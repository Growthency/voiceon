"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import toast from "react-hot-toast";

const stats = [
  { label: "Current Plan", value: "Free Trial", sub: "$0 / 3 days", icon: "💳" },
  { label: "Days Left", value: "3 days", sub: "Until renewal", icon: "⏳" },
  { label: "Credits Used", value: "0", sub: "of 5,000", icon: "📈" },
  { label: "Remaining", value: "5,000", sub: "Characters left", icon: "✨" },
];

export default function Dashboard() {
  const router = useRouter();

  // Logout function jeta hot toast dekhabe aar redirect korbe
  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    
    if (error) {
      toast.error("Error logging out: " + error.message);
    } else {
      toast.success("Logged out successfully! See you soon. 👋");
      router.push("/"); // Homepage-e redirect
    }
  };

  return (
    <div className="flex min-h-screen bg-[#F8FAFC]">
      {/* SIDEBAR - Persistent Left Menu */}
      <aside className="w-72 bg-slate-900 text-white p-8 flex flex-col fixed h-full">
        <div className="text-2xl font-[1000] mb-12 tracking-tighter">
          Voice<span className="text-[#FF8FAF]">On</span>
        </div>
        
        <nav className="space-y-4 flex-grow">
          {["Dashboard", "Voices", "Generate Audio", "Upgrade Plan", "Task History"].map((item, i) => (
            <div key={i} className={`p-4 rounded-2xl font-bold cursor-pointer transition-all ${i === 0 ? "bg-white/10 text-white" : "text-slate-400 hover:bg-white/5 hover:text-white"}`}>
              {item}
            </div>
          ))}
        </nav>

        <div className="pt-8 border-t border-white/10 space-y-4">
          <p className="text-xs font-black uppercase tracking-widest text-slate-500">Account</p>
          <div className="text-slate-400 font-bold hover:text-white cursor-pointer">Settings</div>
          
          {/* Logout Button fixed with onClick */}
          <div 
            onClick={handleLogout}
            className="text-[#FF8FAF] font-black cursor-pointer hover:bg-white/5 p-2 rounded-lg transition-all"
          >
            Logout
          </div>
        </div>
      </aside>

      {/* MAIN CONTENT AREA - ml-72 added to prevent sidebar overlap */}
      <main className="flex-grow ml-72 p-12 overflow-y-auto">
        <header className="mb-12">
          <h1 className="text-4xl font-[1000] text-slate-900 tracking-tight">Welcome, Injamul!</h1>
          <p className="text-slate-400 font-bold mt-2">Here's an overview of your VoiceOn activity.</p>
        </header>

        {/* STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <motion.div 
              key={i} 
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }}
              className="bg-white p-8 rounded-[32px] border border-slate-100 shadow-sm"
            >
              <div className="flex justify-between items-start mb-4">
                <span className="text-xs font-black uppercase tracking-widest text-slate-400">{s.label}</span>
                <span className="text-2xl">{s.icon}</span>
              </div>
              <div className="text-3xl font-[1000] text-slate-900">{s.value}</div>
              <div className="text-xs font-bold text-slate-400 mt-1">{s.sub}</div>
            </motion.div>
          ))}
        </div>

        {/* RECENT GENERATIONS PLACEHOLDER */}
        <div className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-sm min-h-[400px] flex flex-col items-center justify-center text-center">
          <div className="h-20 w-20 rounded-full bg-slate-50 flex items-center justify-center text-3xl mb-6">🎙️</div>
          <h3 className="text-xl font-black text-slate-900">No generations yet</h3>
          <p className="text-slate-400 font-bold mt-2 max-w-xs">Create your first audio using our Qwen-3 models to see it here.</p>
          <button className="mt-8 bg-slate-900 text-white px-8 py-4 rounded-2xl font-black hover:bg-[#FF8FAF] transition-all active:scale-95">
            Generate First Audio
          </button>
        </div>
      </main>
    </div>
  );
}