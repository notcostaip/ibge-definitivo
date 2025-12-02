import { HeroSection } from "@/components/HeroSection";
import { PainSection } from "@/components/PainSection";
import { SolutionSection } from "@/components/SolutionSection";
import { OfferSection } from "@/components/OfferSection";
import { BonusSection } from "@/components/BonusSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { GuaranteeSection } from "@/components/GuaranteeSection";
import { FAQSection } from "@/components/FAQSection";
import { CheckoutSection } from "@/components/CheckoutSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <HeroSection />
      <PainSection />
      <SolutionSection />
      <OfferSection />
      <BonusSection />
      <TestimonialsSection />
      <GuaranteeSection />
      <FAQSection />
      <CheckoutSection />
      <Footer />
    </main>
  );
};

export default Index;
