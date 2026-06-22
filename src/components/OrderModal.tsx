"use client";

import { useEffect, useState, FormEvent } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, Smartphone, PenTool, Sparkles, User, Phone, CheckCircle2 } from "lucide-react";
import { useModal } from "@/context/ModalContext";
import { useLanguage } from "@/context/LanguageContext";
import { sendGAEvent } from "@next/third-parties/google";

export default function OrderModal() {
  const { isOpen, closeModal } = useModal();
  const { t } = useLanguage();

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    model: "",
    problem: "",
    note: ""
  });

  // Prevent background scrolling when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      // Reset state when opened
      setIsSuccess(false);
      setIsSubmitting(false);
      setFormData({ name: "", phone: "", model: "", problem: "", note: "" });
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/telegram", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (res.ok) {
        setIsSuccess(true);
        // Track GA4 Conversion
        sendGAEvent({ event: 'generate_lead', value: formData.problem });
        if (typeof window !== 'undefined' && (window as any).gtag) {
          (window as any).gtag('event', 'conversion', { 'send_to': process.env.NEXT_PUBLIC_GA_ADS_ID });
        }
      } else {
        alert("Xatolik yuz berdi. Iltimos keyinroq qayta urinib ko'ring yoki qo'ng'iroq qiling.");
      }
    } catch (error) {
      console.error(error);
      alert("Xatolik yuz berdi. Iltimos keyinroq qayta urinib ko'ring yoki qo'ng'iroq qiling.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-end sm:items-center justify-center sm:p-6">
          {/* Backdrop with strong blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeModal}
            className="absolute inset-0 bg-black/60 backdrop-blur-xl"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, y: "100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full sm:max-w-lg bg-[#040814]/95 sm:bg-[#040814]/80 backdrop-blur-3xl sm:border border-white/10 rounded-t-[2rem] sm:rounded-[2rem] shadow-[0_-20px_80px_-20px_rgba(37,99,235,0.4)] overflow-hidden flex flex-col max-h-[95dvh] sm:max-h-[90dvh]"
          >
            {/* Ambient Background Glows inside Modal */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-blue-500/20 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan-500/10 rounded-full blur-[100px] pointer-events-none mix-blend-screen" />

            <button
              onClick={closeModal}
              className="absolute top-6 right-6 z-20 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 hover:rotate-90 transition-all duration-300"
            >
              <X size={18} />
            </button>

            {isSuccess ? (
              <div className="relative z-10 flex flex-col items-center justify-center p-12 text-center h-[500px]">
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  transition={{ type: "spring", bounce: 0.5 }}
                  className="w-20 h-20 bg-green-500/20 text-green-400 rounded-full flex items-center justify-center mb-6 shadow-[0_0_40px_-10px_rgba(34,197,94,0.4)]"
                >
                  <CheckCircle2 size={40} />
                </motion.div>
                <h2 className="text-3xl font-black text-white mb-3">Muvaffaqiyatli!</h2>
                <p className="text-gray-400 font-medium mb-8">Ma'lumotlaringiz qabul qilindi. Tez orada mutaxassislarimiz siz bilan bog'lanishadi.</p>
                <button 
                  onClick={closeModal}
                  className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-xl font-bold transition-colors"
                >
                  Yopish
                </button>
              </div>
            ) : (
              <>
                {/* Header / Top Section */}
                <div className="relative z-10 pt-8 pb-4 px-8 text-center border-b border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent shrink-0">
                  <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-cyan-500/20 border border-blue-500/30 mb-4 shadow-[0_0_30px_-5px_rgba(59,130,246,0.3)]">
                    <Sparkles className="w-7 h-7 text-cyan-400" />
                  </div>
                  
                  <h2 className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white to-gray-400 tracking-tight mb-2">
                    {t("modal.title")}
                  </h2>
                  <p className="text-sm text-gray-400 font-medium px-4">
                    {t("modal.desc")}
                  </p>
                </div>

                {/* Scrollable Form Body */}
                <div className="p-8 overflow-y-auto relative z-10 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']">
                  <form id="orderForm" onSubmit={handleSubmit} className="flex flex-col gap-6">
                    
                    {/* Name */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase ml-1">
                        {t("modal.name")}
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                        </div>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Sardor"
                          required
                          className="w-full bg-[#0A101C]/50 border border-white/5 rounded-2xl pl-12 pr-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all font-medium shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase ml-1">
                        {t("modal.phone")}
                      </label>
                      <div className="relative group">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                          <Phone className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                        </div>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+998 90 123 45 67"
                          required
                          className="w-full bg-[#0A101C]/50 border border-white/5 rounded-2xl pl-12 pr-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all font-medium shadow-inner"
                        />
                      </div>
                    </div>

                    {/* Split Row: Model & Problem */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase ml-1 flex items-center gap-2">
                           {t("modal.model")}
                        </label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <Smartphone className="h-4 w-4 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                          </div>
                          <input
                            type="text"
                            name="model"
                            value={formData.model}
                            onChange={handleChange}
                            placeholder="iPhone 13 Pro"
                            required
                            className="w-full bg-[#0A101C]/50 border border-white/5 rounded-2xl pl-11 pr-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all font-medium shadow-inner"
                          />
                        </div>
                      </div>

                      <div className="flex flex-col gap-2">
                        <label className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase ml-1 flex items-center gap-2">
                           {t("modal.problem")}
                        </label>
                        <div className="relative group">
                          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                            <PenTool className="h-4 w-4 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                          </div>
                          <select 
                            name="problem"
                            value={formData.problem}
                            onChange={handleChange}
                            required
                            className="w-full bg-[#0A101C]/50 border border-white/5 rounded-2xl pl-11 pr-4 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all font-medium shadow-inner appearance-none cursor-pointer"
                          >
                            <option value="" className="bg-[#0B1221] text-gray-400">{t("modal.select")}</option>
                            <option value="screen" className="bg-[#0B1221] text-white">{t("modal.probScreen")}</option>
                            <option value="battery" className="bg-[#0B1221] text-white">{t("modal.probBattery")}</option>
                            <option value="water" className="bg-[#0B1221] text-white">{t("modal.probWater")}</option>
                            <option value="other" className="bg-[#0B1221] text-white">{t("modal.probOther")}</option>
                          </select>
                        </div>
                      </div>
                    </div>

                    {/* Note */}
                    <div className="flex flex-col gap-2">
                      <label className="text-[11px] font-bold text-gray-400 tracking-[0.2em] uppercase ml-1">
                        {t("modal.note")}
                      </label>
                      <textarea
                        name="note"
                        value={formData.note}
                        onChange={handleChange}
                        placeholder={t("modal.notePlaceholder")}
                        rows={3}
                        className="w-full bg-[#0A101C]/50 border border-white/5 rounded-2xl px-5 py-4 text-white placeholder-gray-600 focus:outline-none focus:border-blue-500/50 focus:bg-blue-500/5 transition-all font-medium resize-none shadow-inner"
                      />
                    </div>
                  </form>
                </div>

                {/* Footer / Submit */}
                <div className="p-8 pt-4 relative z-10 border-t border-white/5 bg-gradient-to-t from-[#040814] to-transparent shrink-0">
                  <button 
                    form="orderForm"
                    type="submit"
                    disabled={isSubmitting}
                    className="group relative w-full overflow-hidden flex items-center justify-center gap-3 bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-5 rounded-2xl font-bold transition-all duration-300 shadow-[0_0_40px_-10px_rgba(59,130,246,0.6)] hover:shadow-[0_0_60px_-10px_rgba(59,130,246,0.8)] hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {/* Shimmer Effect */}
                    <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover:translate-x-full transition-transform duration-1000 ease-in-out" />
                    
                    <span className="relative z-10 tracking-widest uppercase text-sm">
                      {isSubmitting ? "Yuborilmoqda..." : t("modal.submit")}
                    </span>
                    {!isSubmitting && (
                      <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                    )}
                  </button>
                </div>
                
                {/* Modal Edge Highlight */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent pointer-events-none" />
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
