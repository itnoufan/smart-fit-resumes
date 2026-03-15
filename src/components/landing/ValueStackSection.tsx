import { LayoutTemplate, Target, PenLine, Globe } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  { icon: LayoutTemplate, title: "ATS-Friendly Templates", description: "Designed to pass automated screening systems.", color: "bg-primary/10 text-primary" },
  { icon: Target, title: "Job Description Optimization", description: "Tailor your resume for each role in minutes.", color: "bg-secondary/10 text-secondary" },
  { icon: PenLine, title: "Impact Rewrite", description: "Turn responsibilities into achievements recruiters value.", color: "bg-primary/10 text-primary" },
  { icon: Globe, title: "Global Resume Formats", description: "India, GCC, Europass, US, UK, Canada, NZ — all supported.", color: "bg-secondary/10 text-secondary" },
];

const ValueStackSection = () => {
  return (
    <section id="features" className="py-14 lg:py-20 bg-card">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3"
          >
            Everything You Need to Land Interviews
          </motion.h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto">
            One platform to create, optimize, and perfect your resume.
          </p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="bg-background rounded-2xl p-5 sm:p-6 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 border border-border"
            >
              <div className={`w-10 h-10 rounded-xl ${f.color} flex items-center justify-center mb-3`}>
                <f.icon className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-foreground text-sm mb-1">{f.title}</h3>
              <p className="text-muted-foreground text-xs leading-relaxed">{f.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueStackSection;
