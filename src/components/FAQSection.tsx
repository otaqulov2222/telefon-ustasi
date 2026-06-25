"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function FAQSection() {
  const { t } = useLanguage();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: t("faq.q1"),
      answer: t("faq.a1"),
    },
    {
      question: t("faq.q2"),
      answer: t("faq.a2"),
    },
    {
      question: t("faq.q3"),
      answer: t("faq.a3"),
    },
    {
      question: t("faq.q4"),
      answer: t("faq.a4"),
    },
    {
      question: t("faq.q5"),
      answer: t("faq.a5"),
    },
  ];

  return (
    <section id="faq" className="relative w-full py-16 sm:py-24 bg-[url('/bg-light-2.png')] dark:bg-[url('/bg-dark-2.png')] bg-fixed bg-cover bg-center overflow-hidden transition-colors duration-500">
      {/* Background Overlays */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/60 backdrop-blur-[1px] transition-colors duration-500" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem]" />
      <div className="absolute top-[30%] right-[10%] w-[500px] h-[500px] bg-purple-600/5 dark:bg-purple-600/10 rounded-full blur-[120px] pointer-events-none mix-blend-multiply dark:mix-blend-screen" />

      <div className="max-w-4xl w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-black/[0.03] dark:bg-white/[0.03] border border-black/5 dark:border-white/10 backdrop-blur-3xl mb-6 shadow-sm dark:shadow-2xl"
          >
            <HelpCircle className="w-4 h-4 text-purple-500" />
            <span className="text-xs font-bold text-gray-500 dark:text-gray-300 tracking-[0.2em] uppercase">FAQ</span>
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-gray-900 to-gray-500 dark:from-white dark:to-gray-500 mb-6 tracking-tighter pb-2 pr-2"
          >
            {t("faq.title")}
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 dark:text-gray-400 text-base md:text-lg max-w-2xl mx-auto font-medium"
          >
            {t("faq.desc")}
          </motion.p>
        </div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = index === openIndex;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-white dark:bg-white/[0.05] border-purple-500/30 dark:border-purple-500/30 shadow-lg dark:shadow-[0_0_30px_-10px_rgba(168,85,247,0.15)]' : 'bg-white dark:bg-black/40 border-black/5 dark:border-white/5 hover:border-black/10 dark:hover:border-white/10 shadow-sm dark:shadow-none hover:shadow-md'}`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none group"
                >
                  <h3 className={`font-bold text-base sm:text-lg pr-8 transition-colors duration-300 ${isOpen ? 'text-purple-600 dark:text-purple-400' : 'text-gray-800 dark:text-gray-200 group-hover:text-black dark:group-hover:text-white'}`}>
                    {faq.question}
                  </h3>
                  <div className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-purple-500 border-purple-500' : 'bg-transparent border-black/10 dark:border-white/10 group-hover:border-black/30 dark:group-hover:border-white/30'}`}>
                    <ChevronDown 
                      className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-gray-500 dark:text-gray-400'}`} 
                    />
                  </div>
                </button>
                
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-0 text-gray-600 dark:text-gray-400 leading-relaxed font-medium">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
