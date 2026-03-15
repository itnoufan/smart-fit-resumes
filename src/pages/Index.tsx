import HeroSection from "@/components/landing/HeroSection";
import OfferHighlight from "@/components/landing/OfferHighlight";
import ProblemsSection from "@/components/landing/ProblemsSection";
import SolutionSection from "@/components/landing/SolutionSection";
import HowItWorksSection from "@/components/landing/HowItWorksSection";
import TemplatesSection from "@/components/landing/TemplatesSection";
import ValueStackSection from "@/components/landing/ValueStackSection";
import OfferSection from "@/components/landing/OfferSection";
import FinalCTASection from "@/components/landing/FinalCTASection";
import FAQSection from "@/components/landing/FAQSection";
import Footer from "@/components/landing/Footer";
import StickyBottomCTA from "@/components/landing/StickyBottomCTA";
import FunnelModal from "@/components/funnel/FunnelModal";
import { useFunnelState } from "@/hooks/useFunnelState";

const Index = () => {
  const funnel = useFunnelState();

  return (
    <div className="min-h-screen bg-background pb-20">
      <HeroSection onStartFunnel={funnel.openFunnel} />
      <OfferHighlight onStartFunnel={funnel.openFunnel} />
      <ProblemsSection />
      <SolutionSection />
      <HowItWorksSection onStartFunnel={funnel.openFunnel} />
      <TemplatesSection />
      <ValueStackSection />
      <OfferSection onStartFunnel={funnel.openFunnel} />
      <FinalCTASection onStartFunnel={funnel.openFunnel} />
      <FAQSection />
      <Footer />
      <StickyBottomCTA onStartFunnel={funnel.openFunnel} />
      <FunnelModal funnel={funnel} />
    </div>
  );
};

export default Index;
