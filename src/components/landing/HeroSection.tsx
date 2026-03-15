import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, ShieldCheck, Target, Infinity } from "lucide-react";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

interface HeroSectionProps {
  onStartFunnel: () => void;
}

const featureBadges = [
  { icon: ShieldCheck, title: "ATS-ready", desc: "Built to pass applicant tracking systems." },
  { icon: Target, title: "Job-tailored", desc: "Optimize for each job in minutes." },
  { icon: Infinity, title: "Unlimited", desc: "Create as many resumes as you need." },
];

const HeroSection = ({ onStartFunnel }: HeroSectionProps) => {
  return (
    <section className="pt-20 pb-16 lg:pt-28 lg:pb-24">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-12 lg:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
          >
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            Launch Offer — ₹99 Only
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight tracking-tight mb-6"
          >
            Create a Resume That Gets More{" "}
            <span className="text-gradient">Interview Calls</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
          >
            Upload the job description and instantly generate an ATS‑optimized resume tailored for the job you want.
          </motion.p>

          {/* Offer Highlight Box */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="inline-flex flex-col items-center gap-3 bg-card border border-border rounded-2xl px-8 py-5 shadow-card mb-8"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-display text-4xl font-extrabold text-foreground">₹99</span>
              <span className="text-muted-foreground text-lg line-through">₹699</span>
              <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">SAVE 85%</span>
            </div>
            <CountdownTimer variant="compact" label="Offer resets in" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button variant="cta" size="xl" onClick={onStartFunnel}>
              Start Building My Resume
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#templates">
                <Eye className="w-4 h-4" />
                View Templates
              </a>
            </Button>
          </motion.div>
        </div>

        {/* Feature Badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="max-w-3xl mx-auto"
        >
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {featureBadges.map((badge) => (
              <div
                key={badge.title}
                className="bg-card rounded-xl border border-border p-5 shadow-card"
              >
                <h3 className="font-display font-bold text-foreground mb-1">{badge.title}</h3>
                <p className="text-muted-foreground text-sm">{badge.desc}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
