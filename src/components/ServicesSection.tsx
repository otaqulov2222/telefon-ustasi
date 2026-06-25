"use client";

import { motion } from "framer-motion";
import { Wrench, Smartphone, BatteryMedium, Droplet, PenTool, Cpu, Grid3X3, ArrowRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import Link from "next/link";

export default function ServicesSection() {
  const { t } = useLanguage();

  const services = [
    {
      id: 1,
      title: t("services.s1.title"),
      description: t("services.s1.desc"),
      icon: Smartphone,
      glowClass: "group-hover:bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_60%)] dark:group-hover:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]",
      iconColor: "text-gray-900 dark:text-white",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      bgImg: "bg-gradient-to-br from-black/[0.02] dark:from-white/[0.02] to-transparent",
      href: "/services/ekran-almashtirish"
    },
    {
      id: 2,
      title: t("services.s2.title"),
      description: t("services.s2.desc"),
      icon: BatteryMedium,
      glowClass: "group-hover:bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_60%)] dark:group-hover:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]",
      iconColor: "text-gray-900 dark:text-white",
      colSpan: "col-span-1",
      bgImg: "bg-gradient-to-br from-black/[0.02] dark:from-white/[0.02] to-transparent",
      href: "/services/batareya-almashtirish"
    },
    {
      id: 3,
      title: t("services.s3.title"),
      description: t("services.s3.desc"),
      icon: Droplet,
      glowClass: "group-hover:bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_60%)] dark:group-hover:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]",
      iconColor: "text-gray-900 dark:text-white",
      colSpan: "col-span-1",
      bgImg: "bg-gradient-to-br from-black/[0.02] dark:from-white/[0.02] to-transparent",
      href: "/services/suvdan-tozalash"
    },
    {
      id: 4,
      title: t("services.s4.title"),
      description: t("services.s4.desc"),
      icon: PenTool,
      glowClass: "group-hover:bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_60%)] dark:group-hover:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]",
      iconColor: "text-gray-900 dark:text-white",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
      bgImg: "bg-gradient-to-br from-black/[0.02] dark:from-white/[0.02] to-transparent",
      href: "/services/dasturiy-taminot"
    },
    {
      id: 5,
      title: t("services.s5.title"),
      description: t("services.s5.desc"),
      icon: Cpu,
      glowClass: "group-hover:bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_60%)] dark:group-hover:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]",
      iconColor: "text-gray-900 dark:text-white",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-2",
      bgImg: "bg-gradient-to-br from-black/[0.02] dark:from-white/[0.02] to-transparent",
      href: "/services/plata-tamiri"
    },
    {
      id: 6,
      title: t("services.s6.title"),
      description: t("services.s6.desc"),
      icon: Grid3X3,
      glowClass: "group-hover:bg-[radial-gradient(circle_at_top_right,rgba(0,0,0,0.05),transparent_60%)] dark:group-hover:bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.15),transparent_60%)]",
      iconColor: "text-gray-900 dark:text-white",
      colSpan: "col-span-1 md:col-span-2 lg:col-span-1",
      bgImg: "bg-gradient-to-br from-black/[0.02] dark:from-white/[0.02] to-transparent",
      href: "/services/barcha-brendlar"
    },
  ];

  return (
    <section id="xizmatlar" className="relative w-full py-16 sm:py-24 bg-[url('/bg-light-2.png')] dark:bg-[url('/bg-dark-2.png')] bg-fixed bg-cover bg-center overflow-hidden transition-colors duration-500">
      
      {/* Deep Background Noise & Grid Overlay */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-[1px] z-0 transition-colors duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Glows */}
      <div className="absolute top-[20%] -left-[10%] w-[600px] h-[600px] bg-cyan-600/5 dark:bg-cyan-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-[20%] -right-[10%] w-[600px] h-[600px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Elegant Header Area */}
        <div className="flex flex-col items-center text-center mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 backdrop-blur-3xl mb-8 shadow-sm dark:shadow-2xl"
          >
            <div className="w-2 h-2 rounded-full bg-blue-500 dark:bg-cyan-400 animate-pulse" />
            <span className="text-xs font-bold text-gray-500 dark:text-gray-300 tracking-[0.2em] uppercase">{t("nav.services")}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 mb-8 tracking-tighter pb-2 sm:pb-4 pr-2 sm:pr-4"
          >
            {t("services.title")}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            {t("services.desc")}
          </motion.p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-fr">
          {services.map((service, index) => (
            <Link href={service.href} key={service.id} className={`block ${service.colSpan}`}>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.1, ease: [0.21, 1.02, 0.73, 1] }}
                className={`group relative flex flex-col p-6 sm:p-8 md:p-10 h-full rounded-[2rem] bg-white dark:bg-black/40 backdrop-blur-2xl border border-black/5 dark:border-white/10 overflow-hidden transition-all duration-500 hover:border-black/10 dark:hover:border-white/20 hover:-translate-y-1 hover:bg-white dark:hover:bg-black/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl`}
              >
                {/* Inner highlight for glass effect */}
                <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] pointer-events-none" />

                {/* Hover Ambient Glow inside card */}
                <div 
                  className={`absolute inset-0 opacity-30 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-multiply dark:mix-blend-screen ${service.glowClass}`}
                />
                
                {/* Static faint background gradient */}
                <div className={`absolute inset-0 opacity-30 pointer-events-none ${service.bgImg}`} />

                {/* Massive Watermark Icon */}
                <service.icon 
                  className="absolute -right-6 -bottom-6 w-48 h-48 sm:w-64 sm:h-64 text-black/[0.02] dark:text-white/[0.02] -rotate-12 transition-transform duration-700 group-hover:scale-110 group-hover:rotate-0 pointer-events-none" 
                  strokeWidth={1}
                />

                <div className="relative z-10 flex flex-col h-full">
                  {/* Header (Icon + Title) */}
                  <div className={`flex ${service.colSpan.includes('lg:col-span-2') ? 'flex-col sm:flex-row sm:items-center' : 'flex-col'} gap-4 sm:gap-6 mb-4 sm:mb-6`}>
                    <div className="w-12 h-12 sm:w-14 sm:h-14 shrink-0 rounded-2xl bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 flex items-center justify-center backdrop-blur-md transition-all duration-500 group-hover:scale-110">
                      <service.icon className={`w-6 h-6 sm:w-7 sm:h-7 ${service.iconColor}`} strokeWidth={1.5} />
                    </div>
                    <h3 className={`text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight ${service.colSpan.includes('lg:col-span-2') ? 'max-w-xs' : ''}`}>
                      {service.title}
                    </h3>
                  </div>
                  
                  {/* Description */}
                  <p className="text-gray-500 dark:text-gray-400 text-sm sm:text-base leading-relaxed flex-grow z-10">
                    {service.description}
                  </p>
                  
                  {/* Premium Read More Button */}
                  <div className="mt-8 flex items-center w-fit">
                    <div className="relative px-5 py-2.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center gap-3 transition-all duration-500 overflow-hidden group-hover:bg-black/10 dark:group-hover:bg-white/10 group-hover:border-black/10 dark:group-hover:border-white/20 hover:shadow-md dark:group-hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] backdrop-blur-sm">
                      <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-black/5 dark:via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
                      <span className="text-xs font-bold tracking-[0.15em] uppercase text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white relative z-10 transition-colors duration-300">
                        {t("services.moreBtn") || "Batafsil ma'lumot"}
                      </span>
                      <div className="w-7 h-7 shrink-0 rounded-full bg-black dark:bg-blue-600 flex items-center justify-center border border-black/50 dark:border-blue-500/50 relative z-10 dark:group-hover:bg-blue-500 transition-all duration-300 shadow-sm dark:shadow-[0_0_10px_-2px_rgba(37,99,235,0.5)]">
                        <ArrowRight className="w-3.5 h-3.5 text-white transition-transform duration-300 group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Top Highlight Line */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent opacity-50 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
