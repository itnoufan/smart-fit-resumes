import { useState } from "react";
import { cvTypes, type CVType } from "@/data/funnelData";
import { Button } from "@/components/ui/button";
import { ArrowRight, ScanSearch } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface FunnelStepOneProps {
  onSelect: (type: CVType) => void;
}

const FlagSVG = ({ type }: { type: string }) => {
  switch (type) {
    case "ats":
      return (
        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
          <ScanSearch className="w-5 h-5 text-primary" />
        </div>
      );
    case "india":
      return (
        <svg width="40" height="28" viewBox="0 0 40 28" className="rounded shadow-sm">
          <rect width="40" height="9.33" fill="#FF9933" />
          <rect y="9.33" width="40" height="9.33" fill="#FFFFFF" />
          <rect y="18.66" width="40" height="9.34" fill="#138808" />
          <circle cx="20" cy="14" r="3.5" fill="none" stroke="#000080" strokeWidth="0.6" />
          <circle cx="20" cy="14" r="0.7" fill="#000080" />
        </svg>
      );
    case "gcc":
      return (
        <svg width="40" height="28" viewBox="0 0 40 28" className="rounded shadow-sm">
          <rect width="40" height="28" fill="#FFFFFF" />
          <rect width="8" height="28" fill="#CE1126" />
          <rect y="0" x="8" width="32" height="9.33" fill="#00732F" />
          <rect y="9.33" x="8" width="32" height="9.33" fill="#FFFFFF" />
          <rect y="18.66" x="8" width="32" height="9.34" fill="#000000" />
        </svg>
      );
    case "europass":
      return (
        <svg width="40" height="28" viewBox="0 0 40 28" className="rounded shadow-sm">
          <rect width="40" height="28" fill="#003399" />
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30 - 90) * (Math.PI / 180);
            const cx = 20 + 8 * Math.cos(angle);
            const cy = 14 + 8 * Math.sin(angle);
            return (
              <polygon
                key={i}
                points={`${cx},${cy - 1.5} ${cx + 0.6},${cy - 0.5} ${cx + 1.5},${cy - 0.5} ${cx + 0.7},${cy + 0.2} ${cx + 1},${cy + 1.3} ${cx},${cy + 0.6} ${cx - 1},${cy + 1.3} ${cx - 0.7},${cy + 0.2} ${cx - 1.5},${cy - 0.5} ${cx - 0.6},${cy - 0.5}`}
                fill="#FFCC00"
              />
            );
          })}
        </svg>
      );
    case "us":
      return (
        <svg width="40" height="28" viewBox="0 0 40 28" className="rounded shadow-sm">
          {Array.from({ length: 13 }).map((_, i) => (
            <rect key={i} y={i * (28 / 13)} width="40" height={28 / 13} fill={i % 2 === 0 ? "#B22234" : "#FFFFFF"} />
          ))}
          <rect width="16" height="15.08" fill="#3C3B6E" />
          {[0, 1, 2, 3, 4].map((row) =>
            Array.from({ length: row % 2 === 0 ? 6 : 5 }).map((_, col) => (
              <circle
                key={`${row}-${col}`}
                cx={row % 2 === 0 ? 1.3 + col * 2.7 : 2.65 + col * 2.7}
                cy={1.5 + row * 3}
                r="0.6"
                fill="#FFFFFF"
              />
            ))
          )}
        </svg>
      );
    case "uk":
      return (
        <svg width="40" height="28" viewBox="0 0 40 28" className="rounded shadow-sm">
          <rect width="40" height="28" fill="#012169" />
          <line x1="0" y1="0" x2="40" y2="28" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="40" y1="0" x2="0" y2="28" stroke="#FFFFFF" strokeWidth="4" />
          <line x1="0" y1="0" x2="40" y2="28" stroke="#C8102E" strokeWidth="2" />
          <line x1="40" y1="0" x2="0" y2="28" stroke="#C8102E" strokeWidth="2" />
          <rect x="17" width="6" height="28" fill="#FFFFFF" />
          <rect y="11" width="40" height="6" fill="#FFFFFF" />
          <rect x="18" width="4" height="28" fill="#C8102E" />
          <rect y="12" width="40" height="4" fill="#C8102E" />
        </svg>
      );
    case "canada":
      return (
        <svg width="40" height="28" viewBox="0 0 40 28" className="rounded shadow-sm">
          <rect width="10" height="28" fill="#FF0000" />
          <rect x="10" width="20" height="28" fill="#FFFFFF" />
          <rect x="30" width="10" height="28" fill="#FF0000" />
          <path d="M20 6 L21 10 L23 10 L21.5 12 L22.5 15 L20 13 L17.5 15 L18.5 12 L17 10 L19 10 Z" fill="#FF0000" />
        </svg>
      );
    case "nz":
      return (
        <svg width="40" height="28" viewBox="0 0 40 28" className="rounded shadow-sm">
          <rect width="40" height="28" fill="#00247D" />
          {/* Union Jack canton */}
          <rect width="16" height="12" fill="#00247D" />
          <line x1="0" y1="0" x2="16" y2="12" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="16" y1="0" x2="0" y2="12" stroke="#FFFFFF" strokeWidth="2" />
          <line x1="0" y1="0" x2="16" y2="12" stroke="#CF142B" strokeWidth="1" />
          <line x1="16" y1="0" x2="0" y2="12" stroke="#CF142B" strokeWidth="1" />
          <rect x="6.5" width="3" height="12" fill="#FFFFFF" />
          <rect y="4.5" width="16" height="3" fill="#FFFFFF" />
          <rect x="7" width="2" height="12" fill="#CF142B" />
          <rect y="5" width="16" height="2" fill="#CF142B" />
          {/* Southern Cross stars */}
          <circle cx="31" cy="8" r="1.5" fill="#CF142B" stroke="#FFFFFF" strokeWidth="0.5" />
          <circle cx="35" cy="12" r="1.2" fill="#CF142B" stroke="#FFFFFF" strokeWidth="0.5" />
          <circle cx="33" cy="18" r="1.5" fill="#CF142B" stroke="#FFFFFF" strokeWidth="0.5" />
          <circle cx="29" cy="22" r="1.2" fill="#CF142B" stroke="#FFFFFF" strokeWidth="0.5" />
        </svg>
      );
    default:
      return null;
  }
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
              <FlagSVG type={type.id} />
            </div>
            <span className="font-display font-bold text-sm text-foreground">{type.label}</span>
            <span className="text-[11px] leading-tight text-muted-foreground mt-1">{type.description}</span>
          </button>
        ))}
      </div>

      <div className="sticky bottom-0 bg-card border-t border-border -mx-6 sm:-mx-8 px-6 sm:px-8 py-4">
        <Button
          variant="cta"
          size="xl"
          disabled={!selected}
          onClick={() => selected && onSelect(selected)}
          className="w-full disabled:opacity-40"
        >
          Next
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </div>
  );
};

export default FunnelStepOne;
