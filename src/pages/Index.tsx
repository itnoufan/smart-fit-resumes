import Navbar from "@/components/landing/Navbar";
import HeroSection from "@/components/landing/HeroSection";
import ProblemsSection from "@/components/landing/ProblemsSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TemplatesSection from "@/components/landing/TemplatesSection";
import ValueStackSection from "@/components/landing/ValueStackSection";
import OfferSection from "@/components/landing/OfferSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProblemsSection />
      <SolutionSection />
      <HowItWorksSection />
      <TemplatesSection />
      <ValueStackSection />
      <OfferSection />
      <FinalCTASection />
      <FAQSection />
      <Footer />
    </div>
  );
};

export default Index;
