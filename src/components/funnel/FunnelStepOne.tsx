import { useState } from "react";
import { cvTypes, type CVType } from "@/data/funnelData";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface FunnelStepOneProps {
  onSelect: (type: CVType) => void;
}

const flagColors: Record<string, { bg: string; stripes: string[] }> = {
  ats: { bg: "bg-primary/15", stripes: ["bg-primary", "bg-primary/60"] },
  gcc: { bg: "bg-emerald-50", stripes: ["bg-emerald-600", "bg-white", "bg-black"] },
  india: { bg: "bg-orange-50", stripes: ["bg-orange-500", "bg-white", "bg-green-600"] },
  europass: { bg: "bg-blue-50", stripes: ["bg-blue-700", "bg-yellow-400"] },
  uk: { bg: "bg-red-50", stripes: ["bg-blue-800", "bg-red-600", "bg-white"] },
  canada: { bg: "bg-red-50", stripes: ["bg-red-600", "bg-white", "bg-red-600"] },
  nz: { bg: "bg-blue-50", stripes: ["bg-blue-800", "bg-red-600", "bg-white"] },
  us: { bg: "bg-blue-50", stripes: ["bg-red-600", "bg-white", "bg-blue-800"] },
};

const FlagIcon = ({ type }: { type: string }) => {
  const colors = flagColors[type];
  if (!colors) return null;

  if (type === "ats") {
    return (
      <div className={`w-10 h-10 rounded-lg ${colors.bg} flex items-center justify-center`}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="text-primary">
          <path d="M9 3H5a2 2 0 00-2 2v4m6-6h10a2 2 0 012 2v4M9 3v18m0 0h10a2 2 0 002-2V9M9 21H5a2 2 0 01-2-2V9m0 0h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    );
  }

  return (
    <div className={`w-10 h-7 rounded overflow-hidden flex shadow-sm border border-border/50`}>
      {colors.stripes.map((color, i) => (
        <div key={i} className={`flex-1 ${color}`} />
      ))}
    </div>
  );
};

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
            className={`flex flex-col items-center text-center px-3 py-4 rounded-xl border-2 transition-all duration-150
              ${
                selected === type.id
                  ? "border-primary bg-primary/5 shadow-card"
                  : "border-border bg-background hover:border-muted-foreground/40"
              }`}
          >
            <div className="mb-2">
              <FlagIcon type={type.id} />
            </div>
            <span className="font-display font-bold text-sm text-foreground">{type.label}</span>
            <span className="text-[11px] leading-tight text-muted-foreground mt-1">{type.description}</span>
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
