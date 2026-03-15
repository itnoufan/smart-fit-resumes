import { FileText, LayoutTemplate, Rocket } from "lucide-react";
import { motion } from "framer-motion";

const steps = [
  {
    num: "1",
    icon: FileText,
    title: "Choose Your CV Type",
    description: "Select the resume format that fits your target job market.",
  },
  {
    num: "2",
    icon: LayoutTemplate,
    title: "Select a Template",
    description: "Pick from ATS-friendly templates designed to get shortlisted.",
  },
  {
    num: "3",
    icon: Rocket,
    title: "Build & Apply Confidently",
    description: "Tailor, download, and start applying with confidence.",
  },
];

interface HowItWorksSectionProps {
  onStartFunnel: () => void;
}

const HowItWorksSection = ({ onStartFunnel }: HowItWorksSectionProps) => {
  return (
    <section className="py-16 lg:py-24 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-muted-foreground text-lg">Three simple steps to your perfect resume.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
          {steps.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="text-center relative"
            >
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <step.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-xs font-bold flex items-center justify-center">
                {step.num}
              </div>
              <h3 className="font-display text-lg font-bold text-foreground mb-2">{step.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center">
          <button
            onClick={onStartFunnel}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-primary text-primary-foreground font-bold text-base shadow-lg hover:shadow-xl hover:bg-primary/90 hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
          >
            Start Now — It's Quick
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
