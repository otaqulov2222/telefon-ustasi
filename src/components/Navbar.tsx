"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown, Globe, ArrowRight, Menu, X, Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { useLanguage, Language } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);
  const [mounted, setMounted] = useState(false);
  
  const { language, setLanguage, t } = useLanguage();
  const { openModal } = useModal();
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const isHomePage = pathname === '/';
  const forceWhite = isHomePage && !isScrolled;

  useEffect(() => {
    setMounted(true);
  }, []);

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
              ? "bg-white/80 dark:bg-[#0b1120]/70 backdrop-blur-2xl border border-black/10 dark:border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] dark:shadow-[0_8px_32px_0_rgba(0,0,0,0.3)] py-3 px-6" 
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
              <div className={`text-xl font-bold tracking-tight flex items-center ${!forceWhite ? 'text-gray-900 dark:text-white' : 'text-white'}`}>
                Malika<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-300">Ustasi</span>
              </div>
            </a>

            {/* Desktop Navigation */}
            <nav className={`hidden lg:flex items-center gap-1 absolute left-1/2 -translate-x-1/2 rounded-full p-1 border backdrop-blur-md ${!forceWhite ? 'bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/5' : 'bg-white/5 border-white/10'}`}>
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className={`relative px-5 py-2 text-sm font-bold transition-colors cursor-pointer rounded-full ${!forceWhite ? 'text-gray-600 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/10' : 'text-white/70 hover:text-white hover:bg-white/10'}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden md:flex items-center gap-3">
              
              {/* Theme Toggle */}
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors border ${!forceWhite ? 'bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10' : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white'}`}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
                </button>
              )}

              {/* Language Selector */}
              <div className="relative" ref={langRef}>
                <button 
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={`h-10 px-4 rounded-full flex items-center gap-2 transition-all border ${
                    isLangOpen 
                      ? (!forceWhite ? 'bg-black/10 dark:bg-white/10 border-black/20 dark:border-white/20' : 'bg-white/20 border-white/30') 
                      : (!forceWhite ? 'bg-black/5 dark:bg-white/5 hover:bg-black/10 dark:hover:bg-white/10 border-black/5 dark:border-white/5 hover:border-black/20 dark:hover:border-white/20' : 'bg-white/5 hover:bg-white/10 border-white/10 hover:border-white/20')
                  }`}
                >
                  <span className={`font-bold text-sm tracking-wide uppercase ${!forceWhite ? 'text-gray-900 dark:text-white/90' : 'text-white'}`}>{language}</span>
                  <ChevronDown size={14} strokeWidth={2.5} className={`transition-transform duration-300 ${isLangOpen ? 'rotate-180' : ''} ${!forceWhite ? 'text-gray-600 dark:text-white/70' : 'text-white/70'}`} />
                </button>

                <AnimatePresence>
                  {isLangOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full right-0 mt-3 w-40 p-1.5 rounded-2xl bg-white/95 dark:bg-[#0b1120]/95 backdrop-blur-xl border border-black/10 dark:border-white/10 shadow-2xl flex flex-col gap-0.5 z-50 pointer-events-auto"
                    >
                      <button onClick={() => handleLangSelect("uz")} className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors text-sm font-bold ${language === 'uz' ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'}`}>O'zbekcha</button>
                      <button onClick={() => handleLangSelect("ru")} className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors text-sm font-bold ${language === 'ru' ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'}`}>Русский</button>
                      <button onClick={() => handleLangSelect("en")} className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors text-sm font-bold ${language === 'en' ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'}`}>English</button>
                      <button onClick={() => handleLangSelect("tr")} className={`flex items-center gap-3 w-full px-3 py-2.5 rounded-xl transition-colors text-sm font-bold ${language === 'tr' ? 'bg-blue-600/10 text-blue-600 dark:text-blue-400' : 'text-gray-600 dark:text-white/70 hover:text-black dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5'}`}>Türkçe</button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CTA Button */}
              <button 
                onClick={openModal}
                className="group h-10 pl-5 pr-2 rounded-full bg-blue-600 dark:bg-white text-white dark:text-black flex items-center gap-3 font-bold text-sm hover:bg-blue-700 dark:hover:bg-gray-100 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] dark:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] cursor-pointer"
              >
                {t("nav.orderBtn")}
                <div className="w-7 h-7 rounded-full bg-white dark:bg-black flex items-center justify-center text-blue-600 dark:text-white group-hover:bg-gray-100 dark:group-hover:bg-blue-600 dark:group-hover:text-white transition-colors">
                  <ArrowRight size={14} strokeWidth={2.5} />
                </div>
              </button>
            </div>

            {/* Mobile Menu Toggle & Theme Toggle */}
            <div className="flex md:hidden items-center gap-2 pointer-events-auto">
              {mounted && (
                <button
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors border ${!forceWhite ? 'bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/10 text-gray-700 dark:text-gray-300 hover:bg-black/10 dark:hover:bg-white/10' : 'bg-white/5 border-white/10 text-white/80 hover:bg-white/10 hover:text-white'}`}
                  aria-label="Toggle theme"
                >
                  {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
                </button>
              )}
              <button 
                className={`w-10 h-10 rounded-full flex items-center justify-center transition-colors border ${!forceWhite ? 'bg-black/5 dark:bg-white/5 border-black/5 dark:border-white/10 text-gray-900 dark:text-white hover:bg-black/10 dark:hover:bg-white/10' : 'bg-white/5 border-white/10 text-white hover:bg-white/10'}`}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>
            </div>
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
            className="fixed inset-0 z-40 bg-white/95 dark:bg-[#040814]/95 backdrop-blur-2xl pt-28 px-6 md:hidden flex flex-col h-[100dvh]"
          >
            <nav className="flex flex-col gap-2 text-center mt-8">
              {navLinks.map((link, i) => (
                <motion.a
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1, duration: 0.4, ease: "easeOut" }}
                  key={link.name}
                  href={link.href}
                  className="text-3xl font-black text-gray-800 dark:text-white/80 hover:text-black dark:hover:text-white transition-colors cursor-pointer py-4"
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
                 <button onClick={() => setLanguage("uz")} className={`h-12 rounded-2xl border flex items-center justify-center font-bold ${language === 'uz' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-gray-800 dark:text-white'} transition-colors`}>UZ</button>
                 <button onClick={() => setLanguage("ru")} className={`h-12 rounded-2xl border flex items-center justify-center font-bold ${language === 'ru' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-gray-800 dark:text-white'} transition-colors`}>RU</button>
                 <button onClick={() => setLanguage("en")} className={`h-12 rounded-2xl border flex items-center justify-center font-bold ${language === 'en' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-gray-800 dark:text-white'} transition-colors`}>EN</button>
                 <button onClick={() => setLanguage("tr")} className={`h-12 rounded-2xl border flex items-center justify-center font-bold ${language === 'tr' ? 'bg-blue-600 border-blue-500 text-white' : 'bg-black/5 dark:bg-white/5 border-black/10 dark:border-white/10 text-gray-800 dark:text-white'} transition-colors`}>TR</button>
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
