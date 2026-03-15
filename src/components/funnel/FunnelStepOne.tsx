import { cvTypes, type CVType } from "@/data/funnelData";
import { ChevronRight } from "lucide-react";
import { motion } from "framer-motion";

interface FunnelStepOneProps {
  onSelect: (type: CVType) => void;
}

const FunnelStepOne = ({ onSelect }: FunnelStepOneProps) => {
  return (
    <div className="p-6 sm:p-8">
      <div className="text-center mb-8">
        <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground mb-2">
          Where are you applying?
        </h2>
        <p className="text-muted-foreground text-sm sm:text-base">
          Pick your target job market — we'll match the right format.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
        {cvTypes.map((type, i) => (
          <motion.button
            key={type.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            onClick={() => onSelect(type.id)}
            className="flex flex-col items-center gap-2 p-5 rounded-xl border-2 border-border bg-background hover:border-primary hover:bg-primary/5 hover:shadow-card-hover transition-all duration-200 text-center group"
          >
            <span className="text-4xl mb-1">{type.flag}</span>
            <span className="font-display font-bold text-foreground text-sm group-hover:text-primary transition-colors">
              {type.label}
            </span>
            <span className="text-xs text-muted-foreground leading-snug">{type.description}</span>
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default FunnelStepOne;
