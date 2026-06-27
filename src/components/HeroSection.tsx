"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { ArrowRight, Phone } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useModal } from "@/context/ModalContext";

const FRAME_COUNT = 90;
const SECTION_HEIGHT = "500vh"; // Height to scroll through the sequence

type HeroProps = {
  customTitle1?: string;
  customTitle2?: string;
  customTitle3?: string;
  customDesc?: string;
};

export default function HeroSection({ customTitle1, customTitle2, customTitle3, customDesc }: HeroProps) {
  const { t } = useLanguage();
  const { openModal } = useModal();
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [images, setImages] = useState<HTMLImageElement[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [loadedCount, setLoadedCount] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  // Load images
  useEffect(() => {
    let isMounted = true;
    const loadedImages: HTMLImageElement[] = [];
    let loaded = 0;

    const loadImages = async () => {
      // Load first 15 images immediately (blocking)
      const firstBatch = Array.from({ length: 15 }, (_, i) => {
        return new Promise<HTMLImageElement>((resolve, reject) => {
          const img = new Image();
          img.src = `/sequence/section1/frame_${i}.webp`;
          img.onload = () => {
            loaded++;
            if (isMounted) setLoadedCount(loaded);
            resolve(img);
          };
          img.onerror = reject;
        });
      });

      try {
        const batch1 = await Promise.all(firstBatch);
        if (!isMounted) return;
        loadedImages.push(...batch1);
        setIsLoading(false); // First batch loaded, hide loader
        setImages([...loadedImages]);

        // Lazy load the rest
        for (let i = 15; i < FRAME_COUNT; i++) {
          const img = new Image();
          img.src = `/sequence/section1/frame_${i}.webp`;
          await new Promise<void>((resolve) => {
            img.onload = () => {
              loaded++;
              if (isMounted) {
                setLoadedCount(loaded);
                loadedImages.push(img);
                // Update images reference occasionally or at end
                if (i % 10 === 0 || i === FRAME_COUNT - 1) {
                  setImages([...loadedImages]);
                }
              }
              resolve();
            };
            img.onerror = () => resolve(); // continue on error
          });
        }
      } catch (error) {
        console.error("Error loading image sequence", error);
        setIsLoading(false);
      }
    };

    loadImages();

    return () => {
      isMounted = false;
    };
  }, []);

  // Draw on canvas whenever smooth progress changes
  useEffect(() => {
    let animationFrameId: number;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const render = () => {
      if (images.length === 0) return;

      const progress = smoothProgress.get();
      // Clamp index to available images
      const rawIndex = Math.floor(progress * FRAME_COUNT);
      const frameIndex = Math.min(Math.max(rawIndex, 0), images.length - 1);
      
      const img = images[frameIndex];
      if (!img) return;

      // Handle DPR for crisp rendering on iOS
      const dpr = window.devicePixelRatio || 1;
      const rect = canvas.getBoundingClientRect();
      
      // Only resize backing store if needed to avoid expensive reallocation
      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
      }

      ctx.clearRect(0, 0, rect.width, rect.height);

      // Object-fit: contain logic
      const scale = Math.min(rect.width / img.width, rect.height / img.height);
      const x = (rect.width / 2) - (img.width / 2) * scale;
      const y = (rect.height / 2) - (img.height / 2) * scale;

      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    // Subscribing to motion value changes
    const unsubscribe = smoothProgress.on("change", () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    });

    // Initial render
    render();

    // Handle resize
    const handleResize = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(render);
    };
    window.addEventListener("resize", handleResize);

    return () => {
      unsubscribe();
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [images, smoothProgress]);

  // Transform values for text overlays
  // Opacity mapping: [start, start + 0.1, end - 0.1, end] -> [0, 1, 1, 0]
  const opacityA = useTransform(smoothProgress, [0, 0.1, 0.25, 0.35], [1, 1, 1, 0]); // Beat A (0-35%)
  const yA = useTransform(smoothProgress, [0.25, 0.35], [0, -40]);

  const opacityB = useTransform(smoothProgress, [0.15, 0.2, 0.35, 0.4], [0, 1, 1, 0]); // Beat B (20-40%)
  const yB = useTransform(smoothProgress, [0.15, 0.2, 0.35, 0.4], [20, 0, 0, -20]);

  const opacityC = useTransform(smoothProgress, [0.4, 0.45, 0.6, 0.65], [0, 1, 1, 0]); // Beat C (45-65%)
  const yC = useTransform(smoothProgress, [0.4, 0.45, 0.6, 0.65], [20, 0, 0, -20]);

  const opacityD = useTransform(smoothProgress, [0.65, 0.7, 0.85, 0.9], [0, 1, 1, 0]); // Beat D (70-90%)
  const yD = useTransform(smoothProgress, [0.65, 0.7, 0.85, 0.9], [20, 0, 0, -20]);

  const opacityE = useTransform(smoothProgress, [0.9, 0.95], [0, 1]); // Beat E (95-100%)
  const yE = useTransform(smoothProgress, [0.9, 0.95], [20, 0]);

  return (
    <div 
      id="asosiy"
      ref={containerRef} 
      className="relative w-full bg-[#000000] touch-pan-y" 
      style={{ height: SECTION_HEIGHT }}
    >
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white/90">
          <div className="text-xl font-bold mb-4 tracking-widest uppercase">{t("nav.loading")}</div>
          <div className="w-48 h-1 bg-white/20 rounded overflow-hidden">
            <div 
              className="h-full bg-blue-600 transition-all duration-300"
              style={{ width: `${(loadedCount / 15) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Sticky Canvas Container */}
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden flex items-center justify-center pt-20">
        <canvas
          ref={canvasRef}
          className="absolute right-0 bottom-0 top-20 w-full lg:w-[60%] xl:w-[55%] h-[calc(100%-5rem)] object-contain will-change-transform"
          style={{
            // iOS specific touches:
            WebkitUserSelect: "none",
            userSelect: "none"
          }}
        />

        {/* Text Overlays Layer */}
        <div className="absolute top-20 left-0 right-0 bottom-0 pointer-events-none flex flex-col items-center justify-center px-6 pb-[env(safe-area-inset-bottom)] text-center font-sans">
          
          {/* Beat A: Constant Hero Text */}
          <div 
            className="absolute inset-0 flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-24 pointer-events-auto z-10"
          >
            {/* Subtle gradient at the top/left to ensure text readability without hiding the phone */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/20 to-transparent opacity-80 sm:hidden pointer-events-none" />

            <div className="max-w-3xl text-left relative z-10 pt-8 sm:pt-0 pb-4 sm:pb-8 mb-24 sm:mb-0 w-full sm:w-auto">

              {/* Heading */}
              <h1 className="relative z-10 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[1.1] mb-6 break-words hyphens-auto drop-shadow-[0_4px_4px_rgba(0,0,0,1)] sm:drop-shadow-2xl">
                {customTitle1 || t("hero.title1")} <br className="hidden md:block" />
                <span className="relative inline-block mt-1 sm:mt-2 mb-1 sm:mb-2">
                  {/* Subtle background glow for the highlighted text */}
                  <span className="absolute -inset-2 bg-gradient-to-r from-blue-600/30 to-cyan-400/30 blur-2xl rounded-full"></span>
                  <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 drop-shadow-[0_0_30px_rgba(34,211,238,0.6)]">
                    {customTitle2 || t("hero.title2")}
                  </span>
                </span> <br className="hidden sm:block" />
                {customTitle3 || t("hero.title3")}
              </h1>
              
              {/* Paragraph */}
              <div className="relative z-10 pl-5 sm:pl-6 mb-8 sm:mb-12">
                {/* Glowing vertical line */}
                <div className="absolute left-0 top-1 bottom-1 w-1 rounded-full bg-gradient-to-b from-cyan-400 via-blue-500 to-transparent opacity-80"></div>
                <p className="text-base sm:text-lg md:text-xl text-gray-100 sm:text-gray-300/90 leading-relaxed max-w-xl font-medium drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] sm:drop-shadow-none">
                  {customDesc || t("hero.desc")}
                </p>
              </div>

              {/* Buttons */}
              <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full sm:w-auto pr-16 sm:pr-0">
                {/* Primary Button */}
                <button onClick={openModal} className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full font-bold text-[15px] sm:text-base transition-all duration-300 shadow-[0_0_40px_-10px_rgba(56,189,248,0.5)] hover:shadow-[0_0_60px_-10px_rgba(56,189,248,0.7)] hover:scale-105 cursor-pointer overflow-hidden drop-shadow-xl">
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out rounded-full" />
                  <span className="relative z-10 tracking-wide">{t("hero.btnOrder")}</span>
                  <ArrowRight size={18} strokeWidth={2.5} className="relative z-10 group-hover:translate-x-1 transition-transform duration-300" />
                </button>

                {/* Secondary Button */}
                <a href="tel:+998901234567" className="group relative w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-black/40 sm:bg-white/[0.03] hover:bg-black/60 sm:hover:bg-white/[0.08] border border-white/20 sm:border-white/10 hover:border-white/30 sm:hover:border-white/20 text-white rounded-full font-bold text-[15px] sm:text-base transition-all duration-300 backdrop-blur-xl hover:shadow-[0_0_30px_-5px_rgba(255,255,255,0.1)] hover:-translate-y-1 cursor-pointer drop-shadow-xl">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 sm:bg-white/5 border border-white/20 sm:border-white/10 group-hover:bg-white/20 transition-colors duration-300">
                    <Phone size={14} strokeWidth={2.5} className="text-white" />
                  </div>
                  <span className="tracking-wide">{t("hero.btnCall")}</span>
                </a>
              </div>

            </div>
          </div>

          {/* Beat B: 20-40% */}
          <motion.div 
            className="absolute flex flex-col items-center"
            style={{ opacity: opacityB, y: yB }}
          >
          </motion.div>

          {/* Beat C: 45-65% */}
          <motion.div 
            className="absolute flex flex-col items-center"
            style={{ opacity: opacityC, y: yC }}
          >
          </motion.div>

          {/* Beat D: 70-90% */}
          <motion.div 
            className="absolute flex flex-col items-center translate-y-16"
            style={{ opacity: opacityD, y: yD }}
          >
          </motion.div>

          {/* Beat E: 95-100% */}
          <motion.div 
            className="absolute flex flex-col items-center"
            style={{ opacity: opacityE, y: yE }}
          >
          </motion.div>

        </div>
      </div>
    </div>
  );
}
