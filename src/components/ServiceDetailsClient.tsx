"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, ShieldCheck, Phone, CheckCircle2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useModal } from "@/context/ModalContext";

export type ServiceDetails = {
  title: string;
  description: string;
  price: string;
  warranty: string;
  time: string;
  process: string[];
};

export default function ServiceDetailsClient({ data }: { data: ServiceDetails }) {
  const { openModal } = useModal();
  const router = useRouter();

  if (!data) return null;

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    // If the user came from within the site, history length will be > 1. 
    // We can safely use router.back() to restore precise scroll state.
    if (window.history.length > 2) {
      router.back();
    } else {
      window.location.href = "/#xizmatlar";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black dark:bg-[url('/section3-bg.png')] bg-fixed bg-cover bg-center text-gray-900 dark:text-white pt-[120px] pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden transition-colors duration-500">
      
      {/* Deep Background Noise & Grid Overlay */}
      <div className="absolute inset-0 bg-white/60 dark:bg-black/80 backdrop-blur-[2px] z-0 transition-colors duration-500">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,#000_70%,transparent_100%)]" />
      </div>

      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-black/5 dark:bg-white/5 blur-[150px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-black/5 dark:bg-white/5 blur-[150px] rounded-full pointer-events-none mix-blend-multiply dark:mix-blend-screen" />
      
      <div className="max-w-6xl mx-auto relative z-10">
        
        {/* Premium Back Link */}
        <a href="/#xizmatlar" onClick={handleBack} className="group inline-flex items-center gap-3 px-2 py-2 pr-5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:bg-black/10 dark:hover:bg-white/10 hover:border-black/20 dark:hover:border-white/20 hover:shadow-sm dark:hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] transition-all duration-500 mb-8 backdrop-blur-sm relative overflow-hidden w-fit cursor-pointer">
          <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent -translate-x-[200%] group-hover:translate-x-[300%] transition-transform duration-1000 ease-in-out" />
          <div className="w-8 h-8 shrink-0 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center border border-black/20 dark:border-white/20 relative z-10 group-hover:bg-black/20 dark:group-hover:bg-white/20 transition-all duration-300">
            <ArrowLeft size={16} className="text-gray-900 dark:text-white group-hover:-translate-x-0.5 transition-transform duration-300" />
          </div>
          <span className="text-xs font-bold tracking-[0.1em] uppercase text-gray-500 dark:text-gray-400 group-hover:text-black dark:group-hover:text-white relative z-10 transition-colors duration-300">
            Barcha xizmatlar
          </span>
        </a>

        {/* Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start">
          
          {/* Left Column (Main Content) */}
          <div className="lg:col-span-2 flex flex-col gap-6 lg:gap-8">
            
            {/* Header Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="p-8 sm:p-10 rounded-[2rem] bg-white/70 dark:bg-black/40 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-xl dark:shadow-2xl relative overflow-hidden group"
            >
              {/* Inner highlight for glass effect */}
              <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] pointer-events-none" />
              
              <div className="absolute inset-0 bg-gradient-to-br from-black/5 dark:from-white/5 to-transparent pointer-events-none" />
              
              <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-gray-600 dark:text-gray-300 text-xs font-bold tracking-widest uppercase mb-6 relative z-10">
                Xizmat turi
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight drop-shadow-sm dark:drop-shadow-lg">
                {data.title}
              </h1>
              
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed font-medium">
                {data.description}
              </p>
            </motion.div>

            {/* Process Card */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-8 sm:p-10 rounded-[2rem] bg-white/70 dark:bg-black/40 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-xl dark:shadow-2xl relative"
            >
              {/* Inner highlight for glass effect */}
              <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] pointer-events-none" />

              <div className="flex items-center gap-3 mb-10 relative z-10">
                <CheckCircle2 className="text-gray-700 dark:text-gray-300 w-6 h-6" strokeWidth={2.5} />
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white tracking-tight">Ta'mirlash jarayoni</h2>
              </div>
              
              <div className="flex flex-col gap-8 relative z-10">
                {data.process.map((step, index) => (
                  <div key={index} className="flex items-center gap-6">
                    <div className="w-10 h-10 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 flex items-center justify-center shrink-0">
                      <span className="text-gray-900 dark:text-gray-300 font-bold text-sm">{index + 1}</span>
                    </div>
                    <p className="text-gray-700 dark:text-gray-300 font-bold text-base sm:text-lg">
                      {step}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column (Sidebar) */}
          <div className="lg:col-span-1">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 sm:p-8 rounded-[2rem] bg-white/70 dark:bg-black/40 backdrop-blur-2xl border border-black/5 dark:border-white/10 shadow-xl dark:shadow-2xl lg:sticky lg:top-[120px] relative overflow-hidden group"
            >
              {/* Inner highlight for glass effect */}
              <div className="absolute inset-0 rounded-[2rem] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.8)] dark:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] pointer-events-none" />

              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 relative z-10">Ma'lumotlar</h3>
              
              <div className="flex flex-col gap-4 mb-8">
                {/* Price Box */}
                <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5">
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">Boshlang'ich narx</div>
                  <div className="text-2xl sm:text-3xl font-black text-gray-900 dark:text-white leading-tight" dangerouslySetInnerHTML={{ __html: data.price.replace("so'mdan boshlab", "so'mdan<br/>boshlab") }}></div>
                </div>
                
                {/* Warranty Box */}
                <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex flex-col justify-center">
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">Kafolat muddati</div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-emerald-500 dark:text-emerald-400 shrink-0" />
                    <span className="text-gray-900 dark:text-white font-bold">{data.warranty}</span>
                  </div>
                </div>
                
                {/* Time Box */}
                <div className="p-5 rounded-2xl bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/5 flex flex-col justify-center">
                  <div className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-2">O'rtacha vaqt</div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 shrink-0" />
                    <span className="text-gray-900 dark:text-white font-bold">{data.time}</span>
                  </div>
                </div>
              </div>
              
              <div className="h-px w-full bg-gradient-to-r from-transparent via-black/10 dark:via-white/10 to-transparent mb-8 relative z-10" />
              
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 font-medium leading-relaxed relative z-10">
                Hoziroq bog'laning va muammongizni hal qiling.
              </p>
              
              <button 
                onClick={openModal}
                className="w-full py-4 bg-blue-600 dark:bg-white text-white dark:text-black hover:bg-blue-700 dark:hover:bg-gray-200 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg dark:shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)] hover:shadow-xl dark:hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.5)] hover:-translate-y-1 relative z-10"
              >
                <Phone size={18} />
                Qo'ng'iroq qilish
              </button>

            </motion.div>
          </div>
          
        </div>
      </div>
    </div>
  );
}
