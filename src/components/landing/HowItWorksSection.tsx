import { FileText, LayoutTemplate, Rocket, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const steps = [
  {
    num: "1",
    icon: FileText,
    title: "Choose Your CV Type",
    description: "Select the resume format that fits your target job market.",
    color: "bg-primary/10 text-primary",
  },
  {
    num: "2",
    icon: LayoutTemplate,
    title: "Select a Template",
    description: "Pick from ATS-friendly templates designed to get shortlisted.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    num: "3",
    icon: Rocket,
    title: "Build & Apply Confidently",
    description: "Tailor, download, and start applying with confidence.",
    color: "bg-primary/10 text-primary",
  },
];

interface HowItWorksSectionProps {
  onStartFunnel: () => void;
}

const HowItWorksSection = ({ onStartFunnel }: HowItWorksSectionProps) => {
  return (
    <section className="py-14 lg:py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3"
          >
            How It Works
          </motion.h2>
          <p className="text-muted-foreground text-base lg:text-lg">Three simple steps to your perfect resume.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-10">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12 }}
              className="relative bg-background rounded-2xl border border-border p-6 text-center shadow-card hover:shadow-card-hover transition-all duration-300"
            >
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center shadow-md">
                {step.num}
              </div>
              <div className={`w-14 h-14 rounded-2xl ${step.color} flex items-center justify-center mx-auto mb-4 mt-2`}>
                <step.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-base font-bold text-foreground mb-1.5">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <Button variant="cta" size="xl" onClick={onStartFunnel}>
            Start Now — It's Quick
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
