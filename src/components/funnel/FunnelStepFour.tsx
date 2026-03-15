import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap, Shield } from "lucide-react";
import CountdownTimer from "@/components/landing/CountdownTimer";

const included = [
  "Unlimited resumes",
  "ATS-friendly templates",
  "Job-specific optimization",
  "AI + HR reviewed",
  "Global resume formats",
  "24-hour turnaround",
];

const FunnelStepFour = () => {
  return (
    <div className="p-6 sm:p-8">
      <div className="text-center mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold mb-3">
          <Zap className="w-3 h-3" /> YOUR TEMPLATE IS READY
        </div>
        <h2 className="font-display text-2xl font-bold text-foreground mb-2">
          Unlock Your Resume Builder
        </h2>
        <p className="text-muted-foreground">
          Get instant access to build unlimited professional resumes.
        </p>
      </div>

      <div className="bg-background rounded-2xl border border-border p-6 mb-6">
        <div className="flex items-baseline justify-center gap-3 mb-1">
          <span className="font-display text-5xl font-extrabold text-foreground">₹99</span>
          <span className="text-muted-foreground text-lg line-through">₹699</span>
        </div>
        <p className="text-center text-primary font-semibold text-sm mb-4">
          Save 85% — Limited Launch Offer
        </p>
        <div className="flex justify-center mb-6">
          <CountdownTimer variant="compact" label="Offer resets in" />
        </div>
        <div className="space-y-2.5 mb-6">
          {included.map((item) => (
            <div key={item} className="flex items-center gap-3">
              <Check className="w-4 h-4 text-primary shrink-0" />
              <span className="text-foreground text-sm">{item}</span>
            </div>
          ))}
        </div>
        <Button variant="cta" size="xl" className="w-full">
          Unlock My Resume Builder — ₹99
          <ArrowRight className="w-5 h-5" />
        </Button>
        <div className="flex items-center gap-2 text-muted-foreground text-xs justify-center mt-4">
          <Shield className="w-3.5 h-3.5" />
          <span>One-time payment · No recurring charges · Instant access</span>
        </div>
      </div>
    </div>
  );
};

export default FunnelStepFour;
