"use client";

import { motion } from "framer-motion";
import { MessageSquare, Search, Handshake, PenTool, CheckCircle2 } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ProcessSection() {
  const { t } = useLanguage();

  const steps = [
    {
      id: 1,
      number: "01",
      title: t("process.p1.title"),
      description: t("process.p1.desc"),
      icon: MessageSquare,
      glowClass: "group-hover:bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_70%)] dark:group-hover:bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.15),transparent_70%)]",
    },
    {
      id: 2,
      number: "02",
      title: t("process.p2.title"),
      description: t("process.p2.desc"),
      icon: Search,
      glowClass: "group-hover:bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_70%)] dark:group-hover:bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.15),transparent_70%)]",
    },
    {
      id: 3,
      number: "03",
      title: t("process.p3.title"),
      description: t("process.p3.desc"),
      icon: Handshake,
      glowClass: "group-hover:bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_70%)] dark:group-hover:bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.15),transparent_70%)]",
    },
    {
      id: 4,
      number: "04",
      title: t("process.p4.title"),
      description: t("process.p4.desc"),
      icon: PenTool,
      glowClass: "group-hover:bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_70%)] dark:group-hover:bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.15),transparent_70%)]",
    },
    {
      id: 5,
      number: "05",
      title: t("process.p5.title"),
      description: t("process.p5.desc"),
      icon: CheckCircle2,
      glowClass: "group-hover:bg-[radial-gradient(circle_at_bottom_right,rgba(0,0,0,0.05),transparent_70%)] dark:group-hover:bg-[radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.15),transparent_70%)]",
    },
  ];

  return (
    <section id="jarayon" className="relative w-full py-16 sm:py-24 bg-[url('/bg-light-3.png')] dark:bg-[url('/bg-dark-3.png')] bg-fixed bg-cover bg-center overflow-hidden flex flex-col items-center justify-center transition-colors duration-500">
      
      {/* Deep Background Noise & Grid Overlay */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-[1px] z-0 transition-colors duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Ambient Glows */}
      <div className="absolute top-[30%] -left-[10%] w-[600px] h-[600px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-[10%] -right-[10%] w-[600px] h-[600px] bg-emerald-600/5 dark:bg-emerald-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 backdrop-blur-3xl mb-8 shadow-sm dark:shadow-2xl"
          >
            <div className="w-2 h-2 rounded-full bg-blue-600 dark:bg-blue-500 animate-pulse" />
            <span className="text-xs font-bold text-gray-500 dark:text-gray-300 tracking-[0.2em] uppercase">{t("nav.process")}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 mb-8 tracking-tighter pb-2 sm:pb-4 pr-2 sm:pr-4"
          >
            {t("process.title")}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            {t("process.desc")}
          </motion.p>
        </div>

        {/* Steps Container */}
        <div className="relative">
          {/* Background Connecting Line (Desktop) */}
          <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent -translate-y-1/2 hidden xl:block pointer-events-none" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 lg:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ delay: index * 0.1, duration: 0.6, ease: [0.21, 1.02, 0.73, 1] }}
                className="group relative flex flex-col p-6 sm:p-8 rounded-[2rem] bg-white dark:bg-black/40 backdrop-blur-2xl border border-black/5 dark:border-white/10 overflow-hidden transition-all duration-500 cursor-pointer hover:border-black/10 dark:hover:border-white/20 hover:-translate-y-2 hover:bg-white dark:hover:bg-black/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl xl:min-h-[400px]"
              >
                {/* Inner highlight for glass effect */}
                <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] pointer-events-none" />

                {/* Hover Ambient Glow inside card */}
                <div 
                  className={`absolute inset-0 opacity-30 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-multiply dark:mix-blend-screen ${step.glowClass}`}
                />
                
                {/* Massive Background Number */}
                <div className="absolute -top-10 -right-6 text-[8rem] sm:text-[10rem] font-black text-black/[0.01] dark:text-white/[0.02] group-hover:text-black/[0.02] dark:group-hover:text-white/[0.04] transition-colors duration-700 pointer-events-none tracking-tighter leading-none select-none">
                  {step.number}
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  {/* Step Badge */}
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 mb-8 backdrop-blur-md text-gray-500 font-bold text-sm transition-colors duration-500 group-hover:text-gray-900 dark:group-hover:text-white group-hover:border-black/20 dark:group-hover:border-white/20">
                    {step.number}
                  </div>

                  {/* Icon Circle */}
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-gradient-to-br from-black/[0.02] dark:from-white/[0.02] to-black/[0.05] dark:to-white/[0.05] border border-black/5 dark:border-white/5 flex items-center justify-center mb-auto shadow-inner transition-transform duration-500 group-hover:scale-110">
                    <step.icon className="w-7 h-7 sm:w-8 sm:h-8 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors duration-500" strokeWidth={1.5} />
                  </div>
                  
                  {/* Text Container aligned to bottom */}
                  <div className="mt-8 sm:mt-12 xl:mt-auto">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-gray-900 dark:group-hover:from-white group-hover:to-gray-600 dark:group-hover:to-gray-400 transition-all duration-300">
                      {step.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>

                {/* Top Highlight Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent opacity-50 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
