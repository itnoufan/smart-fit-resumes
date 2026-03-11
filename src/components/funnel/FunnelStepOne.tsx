import { cvTypes, type CVType } from "@/data/funnelData";
import { ChevronRight } from "lucide-react";

interface FunnelStepOneProps {
  onSelect: (type: CVType) => void;
}

const FunnelStepOne = ({ onSelect }: FunnelStepOneProps) => {
  return (
    <div className="p-6 sm:p-8">
      <h2 className="font-display text-2xl font-bold text-foreground mb-2">
        Which type of resume do you need?
      </h2>
      <p className="text-muted-foreground mb-6">
        Select your target job market so we can match you with the right format.
      </p>
      <div className="space-y-3">
        {cvTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => onSelect(type.id)}
            className="w-full flex items-center gap-4 p-4 rounded-xl border border-border bg-background hover:border-primary hover:shadow-card-hover transition-all duration-200 text-left group"
          >
            <span className="text-3xl">{type.flag}</span>
            <div className="flex-1 min-w-0">
              <div className="font-display font-bold text-foreground group-hover:text-primary transition-colors">
                {type.label}
              </div>
              <div className="text-sm text-muted-foreground">{type.description}</div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
          </button>
        ))}
      </div>
    </div>
  );
};

export default FunnelStepOne;
