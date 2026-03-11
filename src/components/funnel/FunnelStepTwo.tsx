import { templatesByType, type CVType } from "@/data/funnelData";
import { Check } from "lucide-react";

interface FunnelStepTwoProps {
  cvType: CVType;
  onSelect: (templateId: string) => void;
}

const FunnelStepTwo = ({ cvType, onSelect }: FunnelStepTwoProps) => {
  const templates = templatesByType[cvType];

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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {templates.map((template) => (
          <button
            key={template.id}
            onClick={() => onSelect(template.id)}
            className="group relative rounded-xl border-2 border-border hover:border-primary bg-background overflow-hidden transition-all duration-200 hover:shadow-card-hover"
          >
            {template.badge && (
              <div className="absolute top-2 right-2 z-10 px-2 py-0.5 rounded-full bg-primary text-primary-foreground text-[10px] font-bold flex items-center gap-1">
                <Check className="w-3 h-3" />
                {template.badge}
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
    </div>
  );
};

export default FunnelStepTwo;
