import { useState } from "react";
import { cvTypes, type CVType } from "@/data/funnelData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FunnelStepOneProps {
  onSelect: (type: CVType) => void;
}

const FunnelStepOne = ({ onSelect }: FunnelStepOneProps) => {
  const [selected, setSelected] = useState<CVType | null>(null);

  return (
    <div className="p-6 sm:p-8">
      <div className="mb-6">
        <h2 className="font-display text-2xl font-bold text-foreground mb-1">
          Choose Resume Type
        </h2>
        <p className="text-muted-foreground text-sm">
          Select the type of resume that best fits your needs and target region.
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-8">
        {cvTypes.map((type) => (
          <button
            key={type.id}
            onClick={() => setSelected(type.id)}
            className={`px-4 py-3.5 rounded-lg border-2 text-sm font-semibold transition-all duration-150
              ${
                selected === type.id
                  ? "border-primary bg-primary/5 text-primary"
                  : "border-border bg-background text-foreground hover:border-muted-foreground/40"
              }`}
          >
            {type.label}
          </button>
        ))}
      </div>

      <div className="flex justify-end">
        <Button
          variant="cta"
          size="lg"
          disabled={!selected}
          onClick={() => selected && onSelect(selected)}
          className="disabled:opacity-40"
        >
          Next
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
};

export default FunnelStepOne;
