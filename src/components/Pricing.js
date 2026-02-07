"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import toast from 'react-hot-toast';

const plans = [
  {
    name: "Starter",
    price: "0",
    desc: "For testing our premium voices",
    features: ["5,000 characters/month", "29+ Languages", "Standard voices", "Community support"],
    button: "Get Started",
    popular: false,
    color: "bg-slate-50",
    actionType: "login" // Login page-e jabe
  },
  {
    name: "Basic",
    price: "9",
    desc: "Perfect for casual creators",
    features: ["100,000 characters/month", "All premium voices", "Voice Cloning (1 slot)", "Standard support"],
    button: "Subscribe Now",
    popular: false,
    color: "bg-white",
    actionType: "stripe",
    stripeUrl: "https://buy.stripe.com/test_basic_link" // Tomar Stripe payment link
  },
  {
    name: "Pro",
    price: "29",
    desc: "Best for professional use",
    features: ["500,000 characters/month", "Advanced Cloning (10 slots)", "Commercial rights", "Priority support"],
    button: "Choose Pro",
    popular: true,
    color: "bg-white",
    actionType: "stripe",
    stripeUrl: "https://buy.stripe.com/test_pro_link" // Tomar Stripe payment link
  },
  {
    name: "Enterprise",
    price: "Custom",
    desc: "Tailored for large teams",
    features: ["Unlimited characters", "Custom API access", "Dedicated manager", "SLA Guarantee"],
    button: "Contact Sales",
    popular: false,
    color: "bg-white",
    actionType: "contact" // Contact page-e jabe
  }
];

export default function Pricing() {
  const router = useRouter();

  const handleAction = (plan) => {
    if (plan.actionType === "login") {
      router.push("/login");
    } else if (plan.actionType === "contact") {
      router.push("/contact");
    } else if (plan.actionType === "stripe") {
      toast.loading("Redirecting to Stripe...");
      window.location.href = plan.stripeUrl;
    }
  };

  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <div className="text-center mb-16">
        <h2 className="text-5xl md:text-7xl font-[1000] tracking-tighter text-slate-900 mb-6">
          Simple, <span className="text-[#FF8FAF]">Transparent</span> Pricing
        </h2>
        <p className="text-slate-500 text-xl font-medium">Try for free, upgrade when you need more power.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {plans.map((plan, i) => (
          <motion.div
            key={i}
            whileHover={{ y: -10 }}
            className={`relative p-8 rounded-[40px] border ${plan.popular ? 'border-[#FF8FAF] shadow-2xl' : 'border-slate-100 shadow-sm'} flex flex-col ${plan.color}`}
          >
            {plan.popular && (
              <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FF8FAF] text-white px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest">
                Most Popular
              </span>
            )}

            <div className="mb-8">
              <h3 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h3>
              <p className="text-slate-400 text-sm font-bold">{plan.desc}</p>
            </div>

            <div className="mb-8">
              <span className="text-5xl font-[1000] text-slate-900">
                {plan.price === "Custom" ? "" : "$"}
                {plan.price}
              </span>
              {plan.price !== "0" && plan.price !== "Custom" && (
                <span className="text-slate-400 font-bold"> /mo</span>
              )}
            </div>

            <ul className="space-y-4 mb-10 flex-grow">
              {plan.features.map((feature, j) => (
                <li key={j} className="flex items-center gap-3 text-slate-600 font-semibold text-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={3} stroke="#CCFAD6" className="w-5 h-5 bg-[#CCFAD6]/20 rounded-full p-1">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button 
              onClick={() => handleAction(plan)}
              className={`w-full py-4 rounded-2xl font-black transition-all active:scale-95 ${
                plan.popular 
                ? 'bg-[#FF8FAF] text-white shadow-lg hover:shadow-pink-200' 
                : 'bg-slate-900 text-white hover:bg-slate-800'
              }`}
            >
              {plan.button}
            </button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}