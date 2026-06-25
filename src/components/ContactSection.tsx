"use client";

import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Navigation, Send, ArrowUpRight } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function ContactSection() {
  const { t, language } = useLanguage();

  return (
    <section id="kontakt" className="relative w-full py-16 sm:py-24 bg-[url('/bg-light-3.png')] dark:bg-[url('/bg-dark-3.png')] bg-fixed bg-cover bg-center transition-colors duration-500 overflow-hidden">
      
      {/* Background Gradients */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-[1px] transition-colors duration-500" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-indigo-600/5 dark:bg-indigo-600/10 rounded-full blur-[150px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      <div className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 backdrop-blur-3xl mb-6 shadow-sm dark:shadow-2xl"
          >
            <Navigation className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-bold text-gray-500 dark:text-gray-300 tracking-[0.2em] uppercase">{t("nav.contact")}</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 tracking-tighter pb-2"
          >
            {t("nav.contact")}
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Contact Details */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-4 flex flex-col justify-center space-y-8"
          >
            <div className="relative p-8 sm:p-10 rounded-[2.5rem] bg-white/60 dark:bg-[#0a0a0a]/80 border border-black/5 dark:border-white/10 shadow-2xl dark:shadow-[0_0_50px_-20px_rgba(255,255,255,0.1)] backdrop-blur-2xl overflow-hidden group/card">
              {/* Card Ambient Glow */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/5 dark:bg-blue-500/10 rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover/card:bg-blue-500/10 dark:group-hover/card:bg-blue-500/20" />
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 dark:bg-purple-500/10 rounded-full blur-[80px] pointer-events-none transition-all duration-700 group-hover/card:bg-purple-500/10 dark:group-hover/card:bg-purple-500/20" />

              <h3 className="relative text-3xl font-black text-gray-900 dark:text-white mb-10 tracking-tight">
                {t("footer.menu") === "Menyu" || t("footer.menu") === "Menu" || t("footer.menu") === "Menü" ? t("footer.contact") : t("footer.contact")}
                <div className="absolute -bottom-4 left-0 w-12 h-1.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full" />
              </h3>
              
              <ul className="relative space-y-8">
                {/* Manzil */}
                <li>
                  <a 
                    href="https://yandex.uz/maps/10335/tashkent/?text=Malika%20savdo%20majmuasi"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-5 hover:bg-black/5 dark:hover:bg-white/5 p-3 -m-3 rounded-2xl transition-all duration-300"
                  >
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-500/10 to-blue-600/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 shadow-sm border border-blue-500/20 group-hover:bg-blue-500 group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(59,130,246,0.4)] group-hover:scale-110 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <MapPin className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:-translate-y-1" />
                    </div>
                    <div className="flex flex-col justify-center pt-1">
                      <h4 className="text-xs font-black text-gray-400 dark:text-gray-500 mb-1.5 tracking-[0.2em] uppercase">{language === 'uz' ? 'Manzil' : language === 'ru' ? 'Адрес' : language === 'en' ? 'Address' : 'Adres'}</h4>
                      <p className="text-gray-900 dark:text-gray-200 font-bold leading-relaxed text-[15px] group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {t("footer.address")}
                      </p>
                    </div>
                  </a>
                </li>
                
                {/* Telefon */}
                <li>
                  <a 
                    href="tel:+998901234567" 
                    className="group flex items-start gap-5 hover:bg-black/5 dark:hover:bg-white/5 p-3 -m-3 rounded-2xl transition-all duration-300"
                  >
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500/10 to-emerald-600/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 shadow-sm border border-emerald-500/20 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(16,185,129,0.4)] group-hover:scale-110 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Phone className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:rotate-12" />
                    </div>
                    <div className="flex flex-col justify-center pt-1">
                      <h4 className="text-xs font-black text-gray-400 dark:text-gray-500 mb-1.5 tracking-[0.2em] uppercase">{language === 'uz' ? 'Telefon' : language === 'ru' ? 'Телефон' : language === 'en' ? 'Phone' : 'Telefon'}</h4>
                      <p className="text-gray-900 dark:text-gray-200 font-bold leading-relaxed text-[15px] group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                        +998 90 123 45 67
                      </p>
                    </div>
                  </a>
                </li>

                {/* Telegram */}
                <li>
                  <a 
                    href="https://t.me/malikabozorservice" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-start gap-5 hover:bg-black/5 dark:hover:bg-white/5 p-3 -m-3 rounded-2xl transition-all duration-300"
                  >
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-cyan-500/10 to-cyan-600/10 text-cyan-600 dark:text-cyan-400 flex items-center justify-center shrink-0 shadow-sm border border-cyan-500/20 group-hover:bg-cyan-500 group-hover:text-white transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] group-hover:scale-110 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <Send className="w-6 h-6 relative z-10 transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>
                    <div className="flex flex-col justify-center pt-1">
                      <h4 className="text-xs font-black text-gray-400 dark:text-gray-500 mb-1.5 tracking-[0.2em] uppercase">Telegram</h4>
                      <p className="text-gray-900 dark:text-gray-200 font-bold leading-relaxed text-[15px] group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                        @malikabozorservice
                      </p>
                    </div>
                  </a>
                </li>

                {/* Ish vaqti */}
                <li className="group flex items-start gap-5 hover:bg-black/5 dark:hover:bg-white/5 p-3 -m-3 rounded-2xl transition-all duration-300 cursor-default">
                  <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-purple-500/10 to-purple-600/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 shadow-sm border border-purple-500/20 overflow-hidden">
                    <Clock className="w-6 h-6 relative z-10" />
                  </div>
                  <div className="flex flex-col justify-center pt-1">
                    <h4 className="text-xs font-black text-gray-400 dark:text-gray-500 mb-1.5 tracking-[0.2em] uppercase">{language === 'uz' ? 'Ish vaqti' : language === 'ru' ? 'Режим работы' : language === 'en' ? 'Working hours' : 'Çalışma saatleri'}</h4>
                    <p className="text-gray-900 dark:text-gray-200 font-bold leading-relaxed text-[15px]">
                      {t("footer.workHours")}
                    </p>
                  </div>
                </li>
              </ul>
              
              <div className="relative mt-10 pt-8 border-t border-black/5 dark:border-white/10">
                <a 
                  href="https://yandex.uz/maps/10335/tashkent/?text=Malika%20savdo%20majmuasi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-4 px-6 bg-gray-900 dark:bg-white hover:bg-gray-800 dark:hover:bg-gray-100 text-white dark:text-gray-900 rounded-xl font-bold transition-all duration-300 hover:scale-[1.02] active:scale-95 shadow-lg shadow-gray-900/20 dark:shadow-white/10"
                >
                  <span>{language === 'uz' ? "Yo'nalish olish (Yandex)" : language === 'ru' ? "Проложить маршрут (Yandex)" : language === 'en' ? "Get Directions (Yandex)" : "Yol Tarifi (Yandex)"}</span>
                  <ArrowUpRight className="w-5 h-5" />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Map */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-8 w-full h-[600px] rounded-[2.5rem] overflow-hidden border border-black/10 dark:border-white/10 relative z-10 shadow-2xl group"
          >
            {/* Map Overlay Glow */}
            <div className="absolute inset-0 ring-1 ring-inset ring-black/10 dark:ring-white/10 rounded-[2.5rem] pointer-events-none z-20" />
            
            <iframe 
              src={`https://maps.google.com/maps?width=100%25&height=600&hl=${language === 'uz' ? 'uz' : language === 'ru' ? 'ru' : language === 'en' ? 'en' : 'tr'}&q=Malika%20Bozor%20Service,%20Tashkent&t=&z=16&ie=UTF8&iwloc=B&output=embed`}
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={false} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="w-full h-full dark:opacity-80 dark:grayscale-[30%] dark:invert-[90%] dark:hue-rotate-180 transition-all duration-700 group-hover:opacity-100 group-hover:grayscale-0"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
