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
      color: "from-gray-900 to-gray-600 dark:from-white dark:to-gray-400",
      glowClass: "group-hover:bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_60%)] dark:group-hover:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]",
    },
    { 
      id: 2,
      icon: Clock, 
      value: "30", 
      suffix: t("stats.sufMin"), 
      label: t("stats.labelFast"),
      color: "from-gray-900 to-gray-600 dark:from-white dark:to-gray-400",
      glowClass: "group-hover:bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_60%)] dark:group-hover:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]",
    },
    { 
      id: 3,
      icon: Shield, 
      value: "6", 
      suffix: t("stats.sufMonth"), 
      label: t("stats.guarantee"),
      color: "from-gray-900 to-gray-600 dark:from-white dark:to-gray-400",
      glowClass: "group-hover:bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_60%)] dark:group-hover:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]",
    },
    { 
      id: 4,
      icon: Star, 
      value: "4.9", 
      suffix: "/5", 
      label: t("stats.labelRating"),
      color: "from-amber-500 to-amber-600 dark:from-amber-200 dark:to-amber-500", // Accent color for rating
      glowClass: "group-hover:bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.1),transparent_60%)] dark:group-hover:bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.2),transparent_60%)]",
    },
  ];

  // Marquee item duplication for seamless scrolling
  const marqueeItems = [...features, ...features, ...features, ...features];

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[url('/section2-bg-light.png')] dark:bg-[url('/section2-bg.png')] bg-fixed bg-cover bg-center bg-no-repeat overflow-hidden transition-colors duration-500" id="stats">
      {/* Dynamic Background Overlay */}
      <div className="absolute inset-0 bg-white/60 dark:bg-black/70 backdrop-blur-[2px] z-0 transition-colors duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
      </div>

      {/* Infinite Marquee Strip (Features) */}
      <div className="relative z-20 w-full overflow-hidden flex border-y border-black/5 dark:border-white/5 bg-white/50 dark:bg-black/20 backdrop-blur-md py-4 mb-20 md:mb-28 shadow-xl dark:shadow-2xl transition-colors duration-500">
        {/* Left/Right Gradients to hide hard edges */}
        <div className="absolute left-0 top-0 w-24 h-full bg-gradient-to-r from-gray-50 dark:from-[#000000] to-transparent z-10" />
        <div className="absolute right-0 top-0 w-24 h-full bg-gradient-to-l from-gray-50 dark:from-[#000000] to-transparent z-10" />
        
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap items-center gap-12 px-6"
        >
          {marqueeItems.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <item.icon size={20} className="text-blue-600 dark:text-blue-500" />
              <span className="text-gray-800 dark:text-white/80 font-bold text-sm md:text-base tracking-widest uppercase">
                {item.label}
              </span>
              {/* Dot Separator */}
              <div className="w-1.5 h-1.5 rounded-full bg-black/10 dark:bg-white/20 ml-12" />
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
              className="group relative overflow-hidden rounded-[2rem] bg-white/70 dark:bg-black/40 backdrop-blur-2xl border border-black/5 dark:border-white/10 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-black/10 dark:hover:border-white/20 hover:bg-white/90 dark:hover:bg-black/60 shadow-xl dark:shadow-2xl"
            >
              {/* Inner highlight for glass effect */}
              <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] pointer-events-none" />

              {/* Colored Glow behind the card on hover */}
              <div 
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-multiply dark:mix-blend-screen ${stat.glowClass}`}
              />
              
              {/* Subtle top edge highlight */}
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              {/* Massive Watermark Icon */}
              <stat.icon 
                className="absolute -bottom-6 -right-6 w-48 h-48 text-black/[0.02] dark:text-white/[0.02] group-hover:text-black/[0.04] dark:group-hover:text-white/[0.04] transition-all duration-700 group-hover:scale-110 group-hover:-rotate-12" 
                strokeWidth={1}
              />

              <div className="relative z-10">
                {/* Top Icon Badge */}
                <div className="w-14 h-14 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex items-center justify-center mb-10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 shadow-sm dark:shadow-lg relative backdrop-blur-md">
                  <stat.icon size={26} className="text-gray-900 dark:text-white relative z-10" strokeWidth={1.5} />
                </div>
                
                {/* Number & Suffix Layout (Baseline Aligned) */}
                <div className="flex items-baseline mb-4 relative">
                  <div className="relative inline-block">
                    {/* Main text with generous padding to prevent clipping */}
                    <span className={`relative text-6xl sm:text-7xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-br ${stat.color} drop-shadow-sm pl-1 pr-2 pb-2 inline-block`}>
                      {stat.value}
                    </span>
                  </div>
                  {stat.suffix && (
                    <span className="text-2xl font-bold text-gray-500 dark:text-gray-400 tracking-tight ml-1">
                      {stat.suffix}
                    </span>
                  )}
                </div>
                
                {/* Label */}
                <h3 className="text-xs sm:text-sm font-bold tracking-[0.25em] text-gray-500 dark:text-gray-400 uppercase transition-colors duration-500 group-hover:text-gray-900 dark:group-hover:text-white">
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
