import { useState, useCallback } from "react";
import type { CVType } from "@/data/funnelData";

export interface FunnelState {
  isOpen: boolean;
  step: number;
  cvType: CVType | null;
  templateId: string | null;
}

export const useFunnelState = () => {
  const [state, setState] = useState<FunnelState>({
    isOpen: false,
    step: 1,
    cvType: null,
    templateId: null,
  });

  const openFunnel = useCallback(() => {
    setState((s) => ({ ...s, isOpen: true, step: 1 }));
  }, []);

  const closeFunnel = useCallback(() => {
    setState({
      isOpen: false,
      step: 1,
      cvType: null,
      templateId: null,
    });
  }, []);

  const setCvType = useCallback((cvType: CVType) => {
    setState((s) => ({ ...s, cvType, step: 2 }));
  }, []);

  const setTemplate = useCallback((templateId: string) => {
    setState((s) => ({ ...s, templateId, step: 3 }));
  }, []);

  const goBack = useCallback(() => {
    setState((s) => ({ ...s, step: Math.max(1, s.step - 1) }));
  }, []);

  return { state, openFunnel, closeFunnel, setCvType, setTemplate, goBack };
};
