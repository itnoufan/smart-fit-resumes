import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

interface StickyBottomCTAProps {
  onStartFunnel: () => void;
}

const StickyBottomCTA = ({ onStartFunnel }: StickyBottomCTAProps) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, type: "spring", damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/90 backdrop-blur-lg border-t border-border shadow-elevated"
    >
      <div className="container mx-auto px-4 flex items-center justify-center gap-3">
        <div className="hidden sm:flex items-center gap-2">
          <span className="font-display font-extrabold text-foreground">₹99</span>
          <span className="text-muted-foreground text-sm line-through">₹699</span>
          <span className="text-muted-foreground text-xs">·</span>
          <CountdownTimer variant="compact" label="" />
        </div>
        <Button
          variant="cta"
          size="lg"
          className="w-full sm:w-auto"
          onClick={onStartFunnel}
        >
          Start Now
          <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
    </motion.div>
  );
};

export default StickyBottomCTA;
