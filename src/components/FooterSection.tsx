"use client";

import { motion } from "framer-motion";
import { ArrowRight, Phone, MapPin, Clock, ShieldCheck, Wrench, Sparkles } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";

export default function FooterSection() {
  const { t, language } = useLanguage();
  const { openModal } = useModal();

  return (
    <footer id="kontakt" className="relative w-full bg-white dark:bg-black pt-8 pb-8 mt-24 transition-colors duration-500">
      
      {/* Background Container - Handles overflow for background elements only */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {/* Deep Background Noise & Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Ambient Glows */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-blue-600/5 dark:bg-blue-600/10 rounded-full blur-[150px] mix-blend-multiply dark:mix-blend-screen" />

        {/* Massive Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[25vw] font-black text-black/[0.02] dark:text-white/[0.01] select-none tracking-tighter">
          USTA
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Premium CTA Box (Overlapping) */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.21, 1.02, 0.73, 1] }}
          className="-mt-20 mb-16 relative overflow-hidden rounded-3xl bg-gray-50 dark:bg-[#0A101C] border border-black/10 dark:border-white/10 shadow-[0_0_50px_-15px_rgba(37,99,235,0.1)] dark:shadow-[0_0_50px_-15px_rgba(37,99,235,0.2)] flex flex-col lg:flex-row items-center justify-between px-8 py-8 lg:px-10 gap-6 group transition-colors duration-500"
        >
          {/* Inner Glows */}
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-bl from-blue-600/10 dark:from-blue-600/20 via-cyan-500/5 dark:via-cyan-500/10 to-transparent blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-purple-600/5 dark:from-purple-600/10 to-transparent blur-3xl pointer-events-none" />
          
          <div className="relative z-10 flex-1 text-center lg:text-left">
            <h3 className="text-2xl md:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-2 tracking-tight">
              {t("footer.cta.title")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base max-w-xl mx-auto lg:mx-0 font-medium">
              {t("footer.cta.desc")}
            </p>
          </div>
          
          <div className="relative z-10 flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <button onClick={openModal} className="flex-1 sm:flex-none group/btn relative overflow-hidden flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 shadow-lg hover:shadow-blue-500/50 hover:-translate-y-0.5 text-sm">
              <span className="relative z-10">{t("footer.cta.btn1")}</span>
              <ArrowRight className="w-4 h-4 relative z-10 group-hover/btn:translate-x-1 transition-transform" />
              <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white/20 to-transparent opacity-50" />
            </button>
            <a href="tel:+998901234567" className="flex-1 sm:flex-none flex items-center justify-center gap-2 bg-black/5 dark:bg-white/[0.05] hover:bg-black/10 dark:hover:bg-white/[0.1] border border-black/10 dark:border-white/10 text-gray-900 dark:text-white px-6 py-3 rounded-xl font-bold transition-all duration-300 hover:border-black/20 dark:hover:border-white/20 hover:-translate-y-0.5 text-sm">
              <Phone className="w-4 h-4 text-blue-600 dark:text-blue-400" />
              {t("footer.cta.btn2")}
            </a>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16 relative z-10">
          
          {/* Brand Info */}
          <div className="lg:col-span-4">
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 p-[1px] shadow-lg shadow-blue-500/20">
                <div className="w-full h-full rounded-2xl bg-white dark:bg-[#0A101C] flex items-center justify-center transition-colors duration-500">
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-blue-500 to-cyan-400 font-black text-2xl">M</span>
                </div>
              </div>
              <div className="text-2xl font-black text-gray-900 dark:text-white tracking-tight transition-colors duration-500">
                {t("nav.logoFirst")}<span className="text-blue-500">{t("nav.logoSecond")}</span>
              </div>
            </div>
            <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed mb-8 max-w-sm transition-colors duration-500">
              {t("footer.desc")}
            </p>
            <div className="flex gap-4">
              <a href="https://t.me/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/[0.08] hover:border-black/20 dark:hover:border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/[0.08] hover:border-black/20 dark:hover:border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.686c.223-.195-.054-.31-.35-.111l-6.4 4.024-2.76-.86c-.6-.183-.612-.6.126-.89l10.814-4.17c.5-.187.942.112.75 1.348z"/></svg>
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="w-12 h-12 rounded-2xl bg-black/5 dark:bg-white/[0.03] border border-black/10 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-black/10 dark:hover:bg-white/[0.08] hover:border-black/20 dark:hover:border-white/20 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
            </div>
          </div>
          
          <div className="lg:col-span-1" />

          {/* Quick Links */}
          <div className="lg:col-span-2">
            <h4 className="text-gray-900 dark:text-white font-bold mb-8 tracking-[0.2em] text-xs uppercase h-8">{t("footer.menu")}</h4>
            <ul className="space-y-6">
              <li className="flex items-center h-10"><a href="#xizmatlar" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors font-medium">{t("nav.services")}</a></li>
              <li className="flex items-center h-10"><a href="#jarayon" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors font-medium">{t("nav.process")}</a></li>
              <li className="flex items-center h-10"><a href="#sharhlar" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white transition-colors font-medium">{t("nav.testimonials")}</a></li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h4 className="text-gray-900 dark:text-white font-bold mb-8 tracking-[0.2em] text-xs uppercase h-8 whitespace-nowrap">{t("footer.popular")}</h4>
            <ul className="space-y-6">
              <li><a href="/services/ekran-almashtirish" className="flex items-center h-10 text-gray-600 dark:text-gray-400 font-medium hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer">{t("services.s1.title")}</a></li>
              <li><a href="/services/batareya-almashtirish" className="flex items-center h-10 text-gray-600 dark:text-gray-400 font-medium hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer">{t("services.s2.title")}</a></li>
              <li><a href="/services/dasturiy-taminot" className="flex items-center h-10 text-gray-600 dark:text-gray-400 font-medium hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer">{t("services.s4.title")}</a></li>
              <li><a href="/services/plata-tamiri" className="flex items-center h-10 text-gray-600 dark:text-gray-400 font-medium hover:text-blue-600 dark:hover:text-white transition-colors cursor-pointer">{t("services.s5.title")}</a></li>
            </ul>
          </div>

          {/* Advantages & CTA */}
          <div className="lg:col-span-3 lg:col-start-10">
            <h4 className="text-gray-900 dark:text-white font-bold mb-8 tracking-[0.2em] text-xs uppercase h-8 whitespace-nowrap">
              {language === 'uz' ? 'Afzalliklarimiz' : language === 'ru' ? 'Наши преимущества' : language === 'en' ? 'Our Advantages' : 'Avantajlarımız'}
            </h4>
            <div className="space-y-5 mb-8">
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 group-hover:bg-blue-500 group-hover:text-white transition-all duration-300">
                  <Clock className="w-5 h-5" />
                </div>
                <span className="text-gray-600 dark:text-gray-300 text-[15px] font-medium group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {language === 'uz' ? '30 daqiqada tayyor' : language === 'ru' ? 'Готово за 30 минут' : language === 'en' ? 'Ready in 30 mins' : '30 dakikada hazır'}
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <span className="text-gray-600 dark:text-gray-300 text-[15px] font-medium group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                  {language === 'uz' ? '6 oygacha kafolat' : language === 'ru' ? 'Гарантия до 6 месяцев' : language === 'en' ? 'Up to 6 months warranty' : '6 aya kadar garanti'}
                </span>
              </div>
              <div className="flex items-center gap-4 group cursor-default">
                <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center shrink-0 group-hover:bg-purple-500 group-hover:text-white transition-all duration-300">
                  <Wrench className="w-5 h-5" />
                </div>
                <span className="text-gray-600 dark:text-gray-300 text-[15px] font-medium group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                  {language === 'uz' ? 'Original ehtiyot qismlar' : language === 'ru' ? 'Оригинальные запчасти' : language === 'en' ? 'Original spare parts' : 'Orijinal parçalar'}
                </span>
              </div>
            </div>

            <button 
              onClick={openModal}
              className="w-full flex items-center justify-between gap-2 px-6 py-4 rounded-2xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-bold transition-all duration-300 shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:-translate-y-1 active:scale-95 group"
            >
              <span className="flex items-center gap-2">
                <Sparkles className="w-5 h-5" />
                {language === 'uz' ? 'Bepul konsultatsiya' : language === 'ru' ? 'Бесплатная консультация' : language === 'en' ? 'Free Consultation' : 'Ücretsiz Danışmanlık'}
              </span>
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-12 relative flex flex-col md:flex-row items-center justify-between gap-6 z-10 text-center md:text-left">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent" />
          
          <p className="text-gray-500 text-sm font-medium">
            © {new Date().getFullYear()} <span className="text-gray-900 dark:text-gray-300 font-bold">{t("nav.logoFirst")}{t("nav.logoSecond")}.</span> {t("footer.rights")}
          </p>
          <div className="flex flex-wrap justify-center md:justify-end gap-4 sm:gap-8">
            <a href="/privacy" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium whitespace-nowrap">{t("footer.privacy")}</a>
            <a href="/terms" className="text-gray-500 hover:text-gray-900 dark:hover:text-white transition-colors text-sm font-medium whitespace-nowrap">{t("footer.terms")}</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
