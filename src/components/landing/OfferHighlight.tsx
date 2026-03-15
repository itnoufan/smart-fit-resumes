import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

interface OfferHighlightProps {
  onStartFunnel: () => void;
}

const OfferHighlight = ({ onStartFunnel }: OfferHighlightProps) => {
  return (
    <section className="py-10 lg:py-14">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-foreground text-background rounded-3xl p-6 sm:p-10 text-center shadow-elevated relative overflow-hidden"
        >
          {/* Decorative glow */}
          <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
          <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4">
              <Zap className="w-3 h-3" /> LIMITED LAUNCH OFFER
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-1">
              <span className="text-background/40 text-lg sm:text-xl line-through decoration-destructive decoration-2">₹699</span>
              <span className="text-background/50 text-lg sm:text-xl">→</span>
              <span className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-primary">₹99</span>
              <span className="bg-primary text-primary-foreground text-[10px] sm:text-xs font-bold px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-full animate-pulse">85% OFF</span>
            </div>
            <p className="text-primary font-bold text-lg mb-5">You Save ₹600</p>
            <div className="mb-6">
              <CountdownTimer variant="dark" label="Offer resets in" />
            </div>
            <Button
              variant="cta"
              size="xl"
              onClick={onStartFunnel}
              className="w-full sm:w-auto"
            >
              Create My Resume Now
              <ArrowRight className="w-5 h-5" />
            </Button>
            <p className="text-background/40 text-xs mt-4">One-time payment · No recurring charges</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default OfferHighlight;
