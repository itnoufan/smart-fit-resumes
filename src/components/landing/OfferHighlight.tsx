import { Button } from "@/components/ui/button";
import { ArrowRight, Zap } from "lucide-react";
import { motion } from "framer-motion";
import CountdownTimer from "./CountdownTimer";

interface OfferHighlightProps {
  onStartFunnel: () => void;
}

const OfferHighlight = ({ onStartFunnel }: OfferHighlightProps) => {
  return (
    <section className="py-12 lg:py-16">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-2xl mx-auto bg-foreground text-background rounded-3xl p-8 lg:p-10 text-center shadow-elevated"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 text-primary text-xs font-bold mb-4">
            <Zap className="w-3 h-3" /> LIMITED LAUNCH OFFER
          </div>
          <div className="flex items-baseline justify-center gap-3 mb-1">
            <span className="font-display text-5xl lg:text-6xl font-extrabold">₹99</span>
            <span className="text-background/50 text-xl line-through">₹999</span>
          </div>
          <p className="text-primary font-bold text-lg mb-6">You Save ₹900</p>
          <div className="mb-8">
            <CountdownTimer variant="dark" />
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
        </motion.div>
      </div>
    </section>
  );
};

export default OfferHighlight;
