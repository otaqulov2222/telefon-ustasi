"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const FRAME_COUNT = 90;
const SECTION_HEIGHT = "500vh"; // Height to scroll through the sequence

export default function MustangSection1() {
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
  const opacityA = useTransform(smoothProgress, [0, 0.05, 0.1, 0.15], [1, 1, 1, 0]); // Beat A (0-15%)
  const yA = useTransform(smoothProgress, [0.1, 0.15], [0, -20]);

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
      ref={containerRef} 
      className="relative w-full bg-black touch-pan-y" 
      style={{ height: SECTION_HEIGHT }}
    >
      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-black text-white/90">
          <div className="text-xl font-bold mb-4 tracking-widest uppercase">Loading</div>
          <div className="w-48 h-1 bg-white/20 rounded overflow-hidden">
            <div 
              className="h-full bg-red-600 transition-all duration-300"
              style={{ width: \`\${(loadedCount / 15) * 100}%\` }}
            />
          </div>
        </div>
      )}

      {/* Sticky Canvas Container */}
      <div className="sticky top-0 w-full h-[100dvh] overflow-hidden flex items-center justify-center">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full object-contain will-change-transform"
          style={{
            // iOS specific touches:
            WebkitUserSelect: "none",
            userSelect: "none"
          }}
        />

        {/* Text Overlays Layer */}
        <div className="absolute inset-0 pointer-events-none flex flex-col items-center justify-center px-6 pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)] text-center font-sans">
          
          {/* Beat A: 0-15% */}
          <motion.div 
            className="absolute flex flex-col items-center"
            style={{ opacity: opacityA, y: yA }}
          >
            <h1 className="text-5xl md:text-6xl font-bold text-white/90 tracking-tight mb-2">1967</h1>
            <p className="text-lg text-white/60">The Year Everything Changed</p>
          </motion.div>

          {/* Beat B: 20-40% */}
          <motion.div 
            className="absolute flex flex-col items-center"
            style={{ opacity: opacityB, y: yB }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white/90 tracking-tight mb-4">MUSTANG</h2>
            <p className="text-base text-white/60 max-w-[90%] mb-4 leading-relaxed">
              The original pony car. The American dream on four wheels.
            </p>
            <p className="text-sm text-white/60 uppercase tracking-widest">
              Fastback GT &bull; Racing Red &bull; American Icon
            </p>
          </motion.div>

          {/* Beat C: 45-65% */}
          <motion.div 
            className="absolute flex flex-col items-center"
            style={{ opacity: opacityC, y: yC }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white/90 tracking-tight mb-4 max-w-[90%] leading-tight">
              BUILT TO PERFORM
            </h2>
            <p className="text-base text-white/60 max-w-[90%] mb-4 leading-relaxed">
              Every curve engineered. Every bolt purposeful. The Mustang wasn't just designed—it was crafted.
            </p>
            <p className="text-sm text-white/60 uppercase tracking-widest">
              Up to 335 HP &bull; 428 Cobra Jet V8
            </p>
          </motion.div>

          {/* Beat D: 70-90% */}
          <motion.div 
            className="absolute flex flex-col items-center translate-y-16"
            style={{ opacity: opacityD, y: yD }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-red-600 tracking-tight mb-4">
              V8 POWER
            </h2>
            <p className="text-base text-white/60 max-w-[85%] mb-4 leading-relaxed">
              At the center of it all beats a legend. The Ford V8—raw American muscle, refined.
            </p>
            <p className="text-sm text-white/60 uppercase tracking-widest">
              390ci / 428ci V8 &bull; Iron Block &bull; Chrome Accents
            </p>
          </motion.div>

          {/* Beat E: 95-100% */}
          <motion.div 
            className="absolute flex flex-col items-center"
            style={{ opacity: opacityE, y: yE }}
          >
            <p className="text-base text-white/60">
              But the engine is just the beginning...
            </p>
          </motion.div>

        </div>
      </div>
    </div>
  );
}
