import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import BrandsSection from "../components/BrandsSection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <main className="bg-gray-50 dark:bg-black min-h-screen transition-colors duration-500 relative">
      {/* Global Light Mode Ambient Background (only visible in light mode due to dark:hidden or opacity) */}
      <div className="fixed inset-0 pointer-events-none z-0 dark:hidden overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000008_1px,transparent_1px),linear-gradient(to_bottom,#00000008_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/4 w-[800px] h-[800px] bg-blue-400/10 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 right-1/4 w-[800px] h-[800px] bg-cyan-400/10 rounded-full blur-[120px] mix-blend-multiply" />
      </div>
      <HeroSection />
      <StatsSection />
      <BrandsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FooterSection />
    </main>
  );
}
