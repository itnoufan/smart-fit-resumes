import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface StickyBottomCTAProps {
  onStartFunnel: () => void;
}

const StickyBottomCTA = ({ onStartFunnel }: StickyBottomCTAProps) => {
  return (
    <motion.div
      initial={{ y: 100 }}
      animate={{ y: 0 }}
      transition={{ delay: 2, type: "spring", damping: 20 }}
      className="fixed bottom-0 left-0 right-0 z-40 p-3 bg-background/80 backdrop-blur-md border-t border-border"
    >
      <div className="container mx-auto px-4">
        <Button
          variant="cta"
          size="xl"
          className="w-full max-w-md mx-auto flex"
          onClick={onStartFunnel}
        >
          Create My Resume
          <ArrowRight className="w-5 h-5" />
        </Button>
      </div>
    </motion.div>
  );
};

export default StickyBottomCTA;
