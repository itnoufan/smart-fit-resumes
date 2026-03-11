import { Button } from "@/components/ui/button";
import { ArrowRight, Eye } from "lucide-react";
import { motion } from "framer-motion";
import heroMockup from "@/assets/hero-mockup.png";

interface HeroSectionProps {
  onStartFunnel: () => void;
}

const HeroSection = ({ onStartFunnel }: HeroSectionProps) => {
  return (
    <section className="pt-28 pb-16 lg:pt-36 lg:pb-24">
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
            className="text-lg lg:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
          >
            Upload the job description and instantly generate an ATS‑optimized resume tailored for the job you want.
          </motion.p>
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
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="absolute inset-0 bg-primary/5 rounded-2xl blur-3xl -z-10" />
          <img
            src={heroMockup}
            alt="Fit My Job Resume Builder interface showing a professional resume with 92% ATS score"
            className="w-full rounded-2xl shadow-elevated border border-border"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
