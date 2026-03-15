import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useFunnelState } from "@/hooks/useFunnelState";
import FunnelStepOne from "./FunnelStepOne";
import FunnelStepTwo from "./FunnelStepTwo";
import FunnelStepThree from "./FunnelStepThree";
import FunnelStepFour from "./FunnelStepFour";

interface FunnelModalProps {
  funnel: ReturnType<typeof useFunnelState>;
}

const FunnelModal = ({ funnel }: FunnelModalProps) => {
  const { state, closeFunnel, setCvType, setTemplate, setDetails, goBack } = funnel;

  if (!state.isOpen) return null;

  const stepLabels = ["CV Type", "Template", "Details", "Unlock"];

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-foreground/40 backdrop-blur-sm flex items-center justify-center p-4"
        onClick={closeFunnel}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", damping: 25, stiffness: 300 }}
          className="bg-card rounded-2xl shadow-elevated w-full max-w-2xl max-h-[90vh] overflow-hidden"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-6 py-4 border-b border-border">
            <div className="flex items-center gap-3">
              {state.step > 1 && (
                <Button variant="ghost" size="icon" onClick={goBack} className="h-8 w-8">
                  <ArrowLeft className="w-4 h-4" />
                </Button>
              )}
              <span className="font-display font-bold text-foreground">
                Step {state.step} of 4
              </span>
            </div>
            {/* Progress */}
            <div className="hidden sm:flex items-center gap-1.5">
              {stepLabels.map((label, i) => (
                <div key={label} className="flex items-center gap-1.5">
                  <div
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i + 1 <= state.step
                        ? "w-8 bg-primary"
                        : "w-8 bg-border"
                    }`}
                  />
                </div>
              ))}
            </div>
            <Button variant="ghost" size="icon" onClick={closeFunnel} className="h-8 w-8">
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Content */}
          <div className="overflow-y-auto max-h-[calc(90vh-72px)]">
            <AnimatePresence mode="wait">
              {state.step === 1 && (
                <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <FunnelStepOne onSelect={setCvType} />
                </motion.div>
              )}
              {state.step === 2 && state.cvType && (
                <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <FunnelStepTwo cvType={state.cvType} onSelect={setTemplate} />
                </motion.div>
              )}
              {state.step === 3 && (
                <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <FunnelStepThree onSubmit={setDetails} />
                </motion.div>
              )}
              {state.step === 4 && (
                <motion.div key="step4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                  <FunnelStepFour />
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FunnelModal;
