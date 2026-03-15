import { Button } from "@/components/ui/button";
import { ArrowRight, Star } from "lucide-react";
import { motion } from "framer-motion";

interface FinalCTASectionProps {
  onStartFunnel: () => void;
}

const FinalCTASection = ({ onStartFunnel }: FinalCTASectionProps) => {
  return (
    <section className="py-14 lg:py-20 bg-card relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
      
      <div className="container mx-auto px-4 lg:px-8 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-foreground mb-3">
            Start Building Your Resume Now
          </h2>
          <p className="text-muted-foreground text-base lg:text-lg max-w-xl mx-auto mb-6">
            Join thousands of job seekers getting more interview calls with Fit My Job.
          </p>
          
          {/* Trust row */}
          <div className="flex items-center justify-center gap-1 mb-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            ))}
            <span className="text-muted-foreground text-sm ml-2">Rated 4.9/5 by users</span>
          </div>

          <Button variant="cta" size="xl" onClick={onStartFunnel}>
            Create My Resume — ₹99
            <ArrowRight className="w-5 h-5" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
