import { CheckCircle2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";

const benefits = [
  "AI-powered resume optimization based on job descriptions",
  "ATS-friendly templates that recruiters trust",
  "Job-specific impact rewrites",
  "Country-specific formats for global job markets",
];

const SolutionSection = () => {
  return (
    <section className="py-14 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-bold mb-4">
              <Sparkles className="w-3 h-3" /> AI-POWERED
            </div>
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-4">
              The Smart Resume Builder for Job Seekers
            </h2>
            <p className="text-muted-foreground text-base lg:text-lg mb-8 max-w-2xl mx-auto">
              Build a professionally optimized resume in minutes — not hours. Pick your CV type, choose a template, and we'll tailor it to your job.
            </p>
          </motion.div>
          <div className="grid sm:grid-cols-2 gap-3 text-left max-w-xl mx-auto">
            {benefits.map((b, i) => (
              <motion.div
                key={b}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-card transition-colors"
              >
                <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                <span className="text-foreground font-medium text-sm">{b}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
