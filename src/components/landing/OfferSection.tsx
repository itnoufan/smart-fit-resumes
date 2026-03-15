import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap } from "lucide-react";
import CountdownTimer from "./CountdownTimer";

const included = [
  "Unlimited resumes for 6 months",
  "ATS-friendly templates",
  "Job-specific optimization",
  "AI + HR reviewed",
  "Global resume formats",
];

interface OfferSectionProps {
  onStartFunnel?: () => void;
}

const OfferSection = ({ onStartFunnel }: OfferSectionProps) => {
  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-lg mx-auto">
          <div className="bg-card rounded-3xl shadow-elevated border border-border overflow-hidden">
            <div className="bg-foreground text-background px-8 py-6 text-center">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-3">
                <Zap className="w-3 h-3" /> LIMITED LAUNCH OFFER
              </div>
              <h2 className="font-display text-2xl lg:text-3xl font-bold mb-1">
                Create Your Resume Today
              </h2>
            </div>
            <div className="px-8 py-8">
              <div className="flex items-center justify-center gap-3 mb-1">
                <span className="text-muted-foreground text-lg line-through decoration-destructive decoration-2">₹699</span>
                <span className="text-muted-foreground text-lg">→</span>
                <span className="font-display text-5xl font-extrabold text-primary">₹99</span>
                <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full animate-pulse">85% OFF</span>
              </div>
              <p className="text-center text-primary font-semibold text-sm mb-2">
                Limited time only — resets nightly
              </p>
              <div className="flex justify-center mb-6">
                <CountdownTimer variant="compact" label="Offer resets in" />
              </div>
              <div className="space-y-3 mb-8">
                {included.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-foreground text-sm font-medium">{item}</span>
                  </div>
                ))}
              </div>
              <Button variant="cta" size="xl" className="w-full" onClick={onStartFunnel}>
                Create My Resume Now
                <ArrowRight className="w-5 h-5" />
              </Button>
              <p className="text-center text-muted-foreground text-xs mt-4">
                One-time payment · No recurring charges · Instant access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OfferSection;
