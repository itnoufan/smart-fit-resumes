import { Button } from "@/components/ui/button";
import { ArrowRight, Eye, ShieldCheck, Target, Infinity, Users, Star, FileCheck } from "lucide-react";
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

const stats = [
  { icon: Users, value: "12,500+", label: "Resumes Created" },
  { icon: Star, value: "4.9/5", label: "User Rating" },
  { icon: FileCheck, value: "92%", label: "ATS Pass Rate" },
];

const HeroSection = ({ onStartFunnel }: HeroSectionProps) => {
  return (
    <section className="pt-16 pb-12 lg:pt-24 lg:pb-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          {/* Top content */}
          <div className="text-center mb-8 lg:mb-10">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-5"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Launch Offer — ₹99 Only
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold text-foreground leading-tight tracking-tight mb-5"
            >
              Create a Resume That Gets More{" "}
              <span className="text-gradient">Interview Calls</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base lg:text-xl text-muted-foreground max-w-2xl mx-auto"
            >
              Upload the job description and instantly generate an ATS‑optimized resume tailored for the job you want.
            </motion.p>
          </div>

          {/* Card container */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="bg-card border border-border rounded-2xl shadow-elevated p-5 sm:p-10"
          >
            {/* Offer Highlight Box */}
            <div className="flex flex-col items-center mb-6">
              <div className="relative inline-flex flex-col items-center gap-3 bg-foreground text-background rounded-xl px-6 sm:px-8 py-5 overflow-hidden">
                {/* Animated glow */}
                <div className="absolute -top-8 -right-8 w-20 h-20 bg-primary/30 rounded-full blur-2xl animate-pulse" />
                <div className="absolute -bottom-8 -left-8 w-20 h-20 bg-secondary/30 rounded-full blur-2xl animate-pulse" />
                
                <div className="relative z-10 flex items-baseline gap-3">
                  <span className="font-display text-4xl sm:text-5xl font-extrabold">₹99</span>
                  <span className="text-background/40 text-lg line-through">₹699</span>
                  <span className="bg-primary text-primary-foreground text-xs font-bold px-2.5 py-1 rounded-full animate-pulse">SAVE 85%</span>
                </div>
                <div className="relative z-10 flex items-center gap-2 text-sm">
                  <span className="w-2 h-2 rounded-full bg-destructive animate-pulse" />
                  <span className="text-background/60 text-xs font-medium">Only few spots left at this price</span>
                </div>
                <div className="relative z-10">
                  <CountdownTimer variant="dark" label="Offer resets in" />
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
              <Button variant="cta" size="xl" onClick={onStartFunnel} className="w-full sm:w-auto">
                Start Building My Resume
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" asChild className="w-full sm:w-auto">
                <a href="#templates">
                  <Eye className="w-4 h-4" />
                  View Templates
                </a>
              </Button>
            </div>

            {/* Feature Badges */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {featureBadges.map((badge) => (
                <div
                  key={badge.title}
                  className="bg-background rounded-xl border border-border p-4"
                >
                  <div className="flex items-center gap-2 mb-1">
                    <badge.icon className="w-4 h-4 text-primary shrink-0" />
                    <h3 className="font-display font-bold text-foreground text-sm">{badge.title}</h3>
                  </div>
                  <p className="text-muted-foreground text-xs">{badge.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Social Proof Stats */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.45 }}
            className="flex items-center justify-center gap-6 sm:gap-10 mt-8"
          >
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="flex items-center justify-center gap-1.5 mb-0.5">
                  <stat.icon className="w-4 h-4 text-primary" />
                  <span className="font-display text-xl sm:text-2xl font-extrabold text-foreground">{stat.value}</span>
                </div>
                <span className="text-muted-foreground text-xs">{stat.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
