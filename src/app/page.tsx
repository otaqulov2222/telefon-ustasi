import HeroSection from "../components/HeroSection";
import StatsSection from "../components/StatsSection";
import BrandsSection from "../components/BrandsSection";
import ServicesSection from "../components/ServicesSection";
import ProcessSection from "../components/ProcessSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";
import FooterSection from "../components/FooterSection";

export default function Home() {
  return (
    <main className="min-h-screen relative bg-white dark:bg-black">
      <HeroSection />
      <StatsSection />
      <BrandsSection />
      <ServicesSection />
      <ProcessSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      <FooterSection />
    </main>
  );
}
