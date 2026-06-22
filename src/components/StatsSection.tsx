"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Cpu, PenTool, Users, Clock, Shield, Star } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function StatsSection() {
  const { t } = useLanguage();

  const features = [
    { icon: ShieldCheck, label: t("hero.feat2") },
    { icon: Cpu, label: t("hero.feat3") },
    { icon: PenTool, label: t("hero.feat1") },
  ];

  const stats = [
    { 
      id: 1,
      icon: Users, 
      value: "500", 
      suffix: "+", 
      label: t("stats.clients"),
      color: "from-blue-500 to-cyan-400",
      bgLight: "bg-blue-500/10",
      border: "group-hover:border-blue-500/30",
      glow: "group-hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)]"
    },
    { 
      id: 2,
      icon: Clock, 
      value: "30", 
      suffix: t("stats.sufMin"), 
      label: t("stats.labelFast"),
      color: "from-indigo-500 to-purple-400",
      bgLight: "bg-indigo-500/10",
      border: "group-hover:border-indigo-500/30",
      glow: "group-hover:shadow-[0_0_40px_-10px_rgba(99,102,241,0.3)]"
    },
    { 
      id: 3,
      icon: Shield, 
      value: "6", 
      suffix: t("stats.sufMonth"), 
      label: t("stats.guarantee"),
      color: "from-emerald-500 to-teal-400",
      bgLight: "bg-emerald-500/10",
      border: "group-hover:border-emerald-500/30",
      glow: "group-hover:shadow-[0_0_40px_-10px_rgba(16,185,129,0.3)]"
    },
    { 
      id: 4,
      icon: Star, 
      value: "4.9", 
      suffix: "/5", 
      label: t("stats.labelRating"),
      color: "from-amber-400 to-orange-500",
      bgLight: "bg-amber-500/10",
      border: "group-hover:border-amber-500/30",
      glow: "group-hover:shadow-[0_0_40px_-10px_rgba(245,158,11,0.3)]"
    },
  ];

  // Marquee item duplication for seamless scrolling
  const marqueeItems = [...features, ...features, ...features, ...features];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#000000] overflow-hidden" id="xizmatlar">
      {/* Dynamic Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Infinite Marquee Strip (Features) */}
      <div className="relative z-20 w-full overflow-hidden flex border-y border-white/5 bg-white/[0.02] backdrop-blur-md py-4 mb-20 md:mb-28 shadow-2xl">
        {/* Left/Right Gradients to hide hard edges */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-[#000000] to-transparent z-10" />
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-[#000000] to-transparent z-10" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap items-center gap-12 px-6"
        >
          {marqueeItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <item.icon size={20} className="text-blue-500" />
              <span className="text-white/80 font-bold text-sm md:text-base tracking-widest uppercase">
                {item.label}
              </span>
              {/* Dot Separator */}
              <div className="w-1.5 h-1.5 rounded-full bg-white/20 ml-12" />
            </div>
          ))}
        </motion.div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main Bento/Grid Stats */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {stats.map((stat, idx) => (
            <motion.div 
              key={stat.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className={`group relative overflow-hidden rounded-[2rem] bg-gradient-to-b from-white/[0.04] to-transparent border border-white/[0.05] p-8 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl ${stat.border}`}
            >
              {/* Colored Glow behind the card on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-[0.03] transition-opacity duration-500`} />
              
              {/* Subtle top edge highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Massive Watermark Icon */}
              <stat.icon 
                className="absolute -bottom-6 -right-6 w-48 h-48 text-white/[0.02] group-hover:text-white/[0.04] transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12" 
                strokeWidth={1}
              />

              <div className="relative z-10">
                {/* Top Icon Badge */}
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-white/[0.06] to-transparent border border-white/[0.08] flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-lg relative`}>
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${stat.color} opacity-20 blur-md transition-opacity duration-500 group-hover:opacity-40`} />
                  <stat.icon size={26} className="text-white relative z-10" strokeWidth={1.5} />
                </div>
                
                {/* Number & Suffix Layout (Baseline Aligned) */}
                <div className="flex items-baseline mb-4 relative">
                  <div className="relative inline-block">
                    {/* Glowing background text */}
                    <span className={`absolute top-0 left-0 blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-700 bg-gradient-to-br ${stat.color} bg-clip-text text-transparent text-6xl sm:text-7xl font-black tracking-tighter select-none pl-1 pr-2 pb-2`}>
                      {stat.value}
                    </span>
                    {/* Main text with generous padding to prevent clipping */}
                    <span className={`relative text-6xl sm:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${stat.color} drop-shadow-sm pl-1 pr-2 pb-2 inline-block`}>
                      {stat.value}
                    </span>
                  </div>
                  {stat.suffix && (
                    <span className="text-2xl font-bold text-white/40 tracking-tight ml-1">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                
                {/* Label */}
                <h3 className="text-xs sm:text-sm font-bold tracking-[0.25em] text-white/50 uppercase transition-colors duration-500 group-hover:text-white/70">
                  {stat.label}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
