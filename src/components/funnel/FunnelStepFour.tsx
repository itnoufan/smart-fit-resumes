import { Button } from "@/components/ui/button";
import { ArrowRight, Check, Zap, Shield, Star, Lock } from "lucide-react";
import CountdownTimer from "@/components/landing/CountdownTimer";
import { motion } from "framer-motion";

const included = [
  "Unlimited resumes for 1 year",
  "ATS-friendly templates",
  "Job-specific optimization",
  "AI + HR reviewed content",
  "Global resume formats",
  "24-hour turnaround",
];

const FunnelStepFour = () => {
  return (
    <div className="p-4 sm:p-6">
      {/* Success banner */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center mb-5"
      >
        <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
          <Zap className="w-7 h-7 text-primary" />
        </div>
        <h2 className="font-display text-xl sm:text-2xl font-bold text-foreground mb-1">
          Your Template Is Ready! 🎉
        </h2>
        <p className="text-muted-foreground text-sm">
          Unlock instant access to build unlimited professional resumes.
        </p>
      </motion.div>

      {/* Pricing card */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="bg-background rounded-2xl border-2 border-primary/20 p-5 sm:p-6 relative overflow-hidden"
      >
        {/* Glow accent */}
        <div className="absolute -top-10 -right-10 w-24 h-24 bg-primary/10 rounded-full blur-2xl" />

        {/* Price */}
        <div className="text-center mb-4 relative z-10">
          <div className="flex items-baseline justify-center gap-2 mb-1">
            <span className="font-display text-4xl sm:text-5xl font-extrabold text-foreground">₹99</span>
            <span className="text-muted-foreground text-base line-through">₹699</span>
          </div>
          <div className="inline-flex items-center gap-1.5 bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full">
            SAVE 85% — Limited Offer
          </div>
        </div>

        {/* Timer */}
        <div className="flex justify-center mb-5">
          <CountdownTimer variant="compact" label="Offer resets in" />
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-2 gap-x-3 gap-y-2 mb-5">
          {included.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.15 + i * 0.05 }}
              className="flex items-center gap-2"
            >
              <Check className="w-3.5 h-3.5 text-primary shrink-0" />
              <span className="text-foreground text-xs sm:text-sm">{item}</span>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <Button variant="cta" size="xl" className="w-full mb-3">
          <Lock className="w-4 h-4" />
          Unlock My Resume Builder — ₹99
          <ArrowRight className="w-5 h-5" />
        </Button>

        {/* Trust signals */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex items-center gap-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
            ))}
            <span className="text-muted-foreground text-[11px] ml-1">4.9/5 from 2,400+ users</span>
          </div>
          <div className="flex items-center gap-1.5 text-muted-foreground text-[11px]">
            <Shield className="w-3 h-3" />
            <span>One-time payment · No recurring charges · Instant access</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default FunnelStepFour;
