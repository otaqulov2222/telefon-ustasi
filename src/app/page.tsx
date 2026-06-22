import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import BrandsSection from "../components/BrandsSection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
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
