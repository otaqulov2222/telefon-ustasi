"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Globe, ArrowRight, Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, Language } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  
  const { language, setLanguage, t } = useLanguage();
  const { openModal } = useModal();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const navLinks = [
    { name: t("nav.services"), href: "#xizmatlar" },
    { name: t("nav.process"), href: "#jarayon" },
    { name: t("nav.testimonials"), href: "#sharhlar" },
    { name: t("nav.contact"), href: "#kontakt" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const handleLangSelect = (lang: Language) => {
    setLanguage(lang);
    setIsLangOpen(false);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
        <motion.div 
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className={`max-w-7xl mx-auto rounded-full transition-all duration-500 pointer-events-auto ${
            isScrolled 
              ? "bg-[#0b1120]/70 backdrop-blur-2xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] py-3 px-6" 
              : "bg-transparent border border-transparent py-4 px-4 sm:px-6"
          }`}
        >
          <div className="flex items-center justify-between">
            
            {/* Logo */}
            <a href="#asosiy" onClick={(e) => handleScrollTo(e, '#asosiy')} className="flex items-center gap-3 z-50 relative group cursor-pointer">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300 relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <span className="text-white font-black text-xl leading-none font-sans relative z-10">M</span>
              </div>
              <div className="text-xl font-bold tracking-tight text-white flex items-center">
                Malika<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Ustasi</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 bg-white/5 rounded-full p-1 border border-white/5 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="relative px-5 py-2 text-sm font-medium text-white/70 hover:text-white transition-colors cursor-pointer rounded-full hover:bg-white/10"
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              {/* Language Selector */}
              <div className="relative" ref={langRef}>
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={`h-10 px-4 rounded-full flex items-center gap-2 transition-all border ${
                    isLangOpen ? 'bg-white/10 border-white/20' : 'bg-white/5 hover:bg-white/10 border-white/5 hover:border-white/20'
                  }`}
                >
                  <span className="text-white/90 font-semibold text-sm tracking-wide uppercase">{language}</span>
                  <ChevronDown size={14} strokeWidth={2.5} className={`text-white/70 transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full right-0 mt-3 w-40 p-1.5 rounded-2xl bg-[#0b1120]/95 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col gap-0.5 z-50 pointer-events-auto"
                    >
                      <button onClick={() => handleLangSelect("uz")} className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors text-sm font-medium ${language === 'uz' ? 'bg-blue-600/10 text-blue-400' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>O'zbekcha</button>
                      <button onClick={() => handleLangSelect("ru")} className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors text-sm font-medium ${language === 'ru' ? 'bg-blue-600/10 text-blue-400' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>Русский</button>
                      <button onClick={() => handleLangSelect("en")} className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors text-sm font-medium ${language === 'en' ? 'bg-blue-600/10 text-blue-400' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>English</button>
                      <button onClick={() => handleLangSelect("tr")} className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors text-sm font-medium ${language === 'tr' ? 'bg-blue-600/10 text-blue-400' : 'text-white/70 hover:text-white hover:bg-white/5'}`}>Türkçe</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <button 
                onClick={openModal}
                className="group h-10 pl-5 pr-2 rounded-full bg-white text-black flex items-center gap-3 font-bold text-sm hover:bg-gray-100 transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] cursor-pointer"
              >
                {t("nav.orderBtn")}
                <div className="w-7 h-7 rounded-full bg-black flex items-center justify-center text-white group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </div>
              </button>
            </div>

            {/* Mobile Menu Toggle */}
            <button 
              className="md:hidden w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white z-50 relative hover:bg-white/10 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-[#040814]/95 backdrop-blur-2xl pt-28 px-6 md:hidden flex flex-col h-[100dvh]"
          >
            <nav className="flex flex-col gap-2 text-center mt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-black text-white/80 hover:text-white transition-colors cursor-pointer py-4"
                  onClick={(e) => handleScrollTo(e, link.href)}
                >
                  {link.name}
                </motion.a>
              ))}
            </nav>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.4 }}
              className="mt-auto pb-12 flex flex-col gap-4"
            >
              <div className="grid grid-cols-2 gap-4">
                 <button onClick={() => setLanguage("uz")} className={`h-12 rounded-2xl border flex items-center justify-center font-bold ${language === 'uz' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-white/5 border-white/10 text-white'} transition-colors`}>UZ</button>
                 <button onClick={() => setLanguage("ru")} className={`h-12 rounded-2xl border flex items-center justify-center font-bold ${language === 'ru' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-white/5 border-white/10 text-white'} transition-colors`}>RU</button>
                 <button onClick={() => setLanguage("en")} className={`h-12 rounded-2xl border flex items-center justify-center font-bold ${language === 'en' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-white/5 border-white/10 text-white'} transition-colors`}>EN</button>
                 <button onClick={() => setLanguage("tr")} className={`h-12 rounded-2xl border flex items-center justify-center font-bold ${language === 'tr' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-white/5 border-white/10 text-white'} transition-colors`}>TR</button>
              </div>
              <button 
                className="h-16 rounded-2xl bg-blue-600 text-white flex items-center justify-center gap-3 font-bold text-xl cursor-pointer hover:bg-blue-500 transition-colors shadow-lg shadow-blue-600/30"
                onClick={() => {
                  setIsMobileMenuOpen(false);
                  openModal();
                }}
              >
                {t("nav.orderBtn")}
                <ArrowRight size={22} strokeWidth={2.5} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
