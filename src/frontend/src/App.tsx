import { AboutSection } from "@/components/AboutSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/HeroSection";
import { Navigation } from "@/components/Navigation";
import { PartnersSection } from "@/components/PartnersSection";
import { ServicesSection } from "@/components/ServicesSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { Toaster } from "@/components/ui/sonner";

export default function App() {
  return (
    <>
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <PartnersSection />
        <WhyUsSection />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
      <Toaster position="top-right" richColors />
    </>
  );
}
