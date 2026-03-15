import { useState } from "react";
import { templatesByType, type CVType } from "@/data/funnelData";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

interface FunnelStepTwoProps {
  cvType: CVType;
  onSelect: (templateId: string) => void;
}

const FunnelStepTwo = ({ cvType, onSelect }: FunnelStepTwoProps) => {
  const templates = templatesByType[cvType];
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="p-6 sm:p-8">
      <div className="flex items-center gap-2 mb-2">
        <span className="inline-block px-2.5 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-bold">
          ATS Friendly
        </span>
      </div>
      <h2 className="font-display text-2xl font-bold text-foreground mb-2">
        Choose your template
      </h2>
      <p className="text-muted-foreground mb-6">
        All templates are tested to pass major ATS systems.
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => setSelected(template.id)}
            className={`group relative rounded-xl border-2 bg-background overflow-hidden transition-all duration-200 ${
              selected === template.id
                ? "border-primary shadow-card ring-2 ring-primary/20"
                : "border-border hover:border-primary hover:shadow-card-hover"
            }`}
          >
            {template.badge && (
              <div className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center gap-1">
                <Check className="w-3 h-3" />
                {template.badge}
              </div>
            )}
            {selected === template.id && (
              <div className="absolute top-2 left-2 z-10 w-6 h-6 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                <Check className="w-4 h-4" />
              </div>
            )}
            <div className="aspect-[3/4] overflow-hidden bg-muted">
              <img
                src={template.image}
                alt={template.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-3 text-center">
              <span className="font-display font-semibold text-sm text-foreground">{template.name}</span>
            </div>
          </button>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="sticky bottom-0 bg-card border-t border-border -mx-6 sm:-mx-8 px-6 sm:px-8 py-4"
          >
            <motion.div
              animate={{ scale: [1, 1.03, 1] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
            >
              <Button
                variant="cta"
                size="xl"
                onClick={() => onSelect(selected)}
                className="w-full relative overflow-hidden group"
              >
                <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                Next
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.span>
              </Button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default FunnelStepTwo;
