import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FinalCTASectionProps {
  onStartFunnel: () => void;
}

const FinalCTASection = ({ onStartFunnel }: FinalCTASectionProps) => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
          Start Building Your Resume Now
        </h2>
        <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
          Join thousands of job seekers who landed interviews with Fit My Job.
        </p>
        <Button variant="cta" size="xl" onClick={onStartFunnel}>
          Create My Resume
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </section>
  );
};

export default FinalCTASection;
