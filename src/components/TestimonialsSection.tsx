"use client";

import { motion } from "framer-motion";
import { Star, Quote, ExternalLink } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function TestimonialsSection() {
  const { t } = useLanguage();

  const testimonials = [
    {
      id: 1,
      name: t("test.t1.name"),
      date: t("test.t1.date"),
      text: t("test.t1.text"),
      rating: 5,
      delay: 0.1,
    },
    {
      id: 2,
      name: t("test.t2.name"),
      date: t("test.t2.date"),
      text: t("test.t2.text"),
      rating: 5,
      delay: 0.3,
    },
    {
      id: 3,
      name: t("test.t3.name"),
      date: t("test.t3.date"),
      text: t("test.t3.text"),
      rating: 5,
      delay: 0.5,
    },
  ];

  return (
    <section id="sharhlar" className="relative w-full py-16 sm:py-24 bg-[url('/bg-light-1.png')] dark:bg-[url('/bg-dark-1.png')] bg-fixed bg-cover bg-center overflow-hidden flex flex-col items-center justify-center transition-colors duration-500">
      
      {/* Deep Background Noise & Grid Overlay */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-[1px] z-0 transition-colors duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Ambient Gold/Amber Glow */}
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-amber-600/5 dark:bg-amber-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 backdrop-blur-3xl mb-8 shadow-sm dark:shadow-2xl"
          >
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-xs font-bold text-gray-500 dark:text-gray-300 tracking-[0.2em] uppercase">{t("nav.testimonials")}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 mb-8 tracking-tighter pb-2 sm:pb-4 pr-2 sm:pr-4"
          >
            {t("test.title")}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-lg md:text-xl max-w-2xl mx-auto font-medium"
          >
            {t("test.desc")}
          </motion.p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: item.delay, duration: 0.6, ease: [0.21, 1.02, 0.73, 1] }}
              className="group relative p-6 sm:p-8 md:p-10 rounded-[2rem] bg-white dark:bg-black/40 backdrop-blur-2xl border border-black/5 dark:border-white/10 overflow-hidden transition-all duration-500 hover:border-amber-500/30 dark:hover:border-amber-500/30 hover:-translate-y-2 hover:bg-white dark:hover:bg-black/60 shadow-[0_8px_30px_rgb(0,0,0,0.04)] dark:shadow-2xl flex flex-col"
            >
              {/* Inner highlight for glass effect */}
              <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] pointer-events-none" />

              {/* Internal Hover Glow */}
              <div 
                className="absolute inset-0 opacity-30 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none mix-blend-multiply dark:mix-blend-screen group-hover:bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.05),transparent_70%)] dark:group-hover:bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.1),transparent_70%)] bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.02),transparent_70%)] dark:bg-[radial-gradient(circle_at_top_right,rgba(245,158,11,0.05),transparent_70%)]"
              />

              {/* Massive Watermark Quote */}
              <div className="absolute -top-10 -right-10 text-black/[0.01] dark:text-white/[0.02] group-hover:text-black/[0.02] dark:group-hover:text-white/[0.04] transition-colors duration-700 pointer-events-none group-hover:scale-110 group-hover:rotate-12">
                <Quote size={200} strokeWidth={0.5} />
              </div>

              {/* Rating */}
              <div className="flex gap-1.5 mb-6 sm:mb-8 relative z-10">
                {[...Array(item.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400 fill-amber-400 drop-shadow-[0_0_10px_rgba(245,158,11,0.5)]" />
                ))}
              </div>

              {/* Text */}
              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg md:text-xl leading-relaxed mb-8 sm:mb-12 flex-grow relative z-10 italic font-medium">
                "{item.text}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-5 relative z-10 mt-auto">
                <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-black border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-900 dark:text-white font-black text-xl shadow-lg group-hover:border-amber-500/50 transition-colors duration-500">
                  <div className="absolute inset-0 bg-amber-500/10 rounded-full blur-md opacity-30 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-gray-900 dark:text-white font-bold tracking-wide">{item.name}</h4>
                  <p className="text-xs text-gray-500 tracking-widest uppercase mt-1">{item.date}</p>
                </div>
              </div>
              
              {/* Top Highlight Line */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/20 to-transparent opacity-50 lg:opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            </motion.div>
          ))}
        </div>

        {/* CTA Google Reviews - Premium Button */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-20 flex justify-center relative z-10"
        >
          <a href="#" onClick={(e) => { e.preventDefault(); alert("Iltimos, kodingizdagi TestimonialsSection.tsx fayliga o'zingizning aniq Google My Business sharhlar (reviews) havolangizni joylang."); }} className="group relative flex items-center gap-3 px-8 py-4 rounded-full bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 text-gray-900 dark:text-white transition-all duration-300 hover:bg-black/10 dark:hover:bg-white/[0.08] hover:border-black/20 dark:hover:border-white/20 hover:scale-105 hover:shadow-lg dark:hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.2)]">
            <span className="font-bold tracking-widest uppercase text-sm">{t("test.google")}</span>
            <ExternalLink size={18} className="text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
