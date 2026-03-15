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
        <div className="max-w-4xl mx-auto">
          {/* Top content */}
          <div className="text-center mb-10">
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
              className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Upload the job description and instantly generate an ATS‑optimized resume tailored for the job you want.
            </motion.p>
          </div>

          {/* Card container wrapping offer, CTAs, and feature badges */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-card border border-border rounded-2xl shadow-card p-6 sm:p-10"
          >
            {/* Offer Highlight Box */}
            <div className="flex flex-col items-center mb-8">
              <div className="inline-flex flex-col items-center gap-3 bg-background border border-border rounded-xl px-8 py-5">
                <div className="flex items-baseline gap-3">
                  <span className="font-display text-4xl font-extrabold text-foreground">₹99</span>
                  <span className="text-muted-foreground text-lg line-through">₹699</span>
                  <span className="bg-primary/10 text-primary text-xs font-bold px-2 py-0.5 rounded-full">SAVE 85%</span>
                </div>
                <CountdownTimer variant="compact" label="Offer resets in" />
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
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
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {featureBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="bg-background rounded-xl border border-border p-5"
                >
                  <h3 className="font-display font-bold text-foreground mb-1">{badge.title}</h3>
                  <p className="text-muted-foreground text-sm">{badge.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
