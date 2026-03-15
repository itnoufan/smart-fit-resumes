import { useState, useCallback } from "react";
import type { CVType } from "@/data/funnelData";

export interface FunnelState {
  isOpen: boolean;
  step: number;
  cvType: CVType | null;
  templateId: string | null;
  contactNumber: string;
  jobTitle: string;
}

export const useFunnelState = () => {
  const [state, setState] = useState<FunnelState>({
    isOpen: false,
    step: 1,
    cvType: null,
    templateId: null,
    contactNumber: "",
    jobTitle: "",
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
      contactNumber: "",
      jobTitle: "",
    });
  }, []);

  const setCvType = useCallback((cvType: CVType) => {
    setState((s) => ({ ...s, cvType, step: 2 }));
  }, []);

  const setTemplate = useCallback((templateId: string) => {
    setState((s) => ({ ...s, templateId, step: 3 }));
  }, []);

  const setDetails = useCallback((contactNumber: string, jobTitle: string) => {
    setState((s) => ({ ...s, contactNumber, jobTitle }));
    // TODO: Redirect to payment gateway here
    console.log("Funnel complete — ready for payment redirect");
  }, []);

  const goBack = useCallback(() => {
    setState((s) => ({ ...s, step: Math.max(1, s.step - 1) }));
  }, []);

  return { state, openFunnel, closeFunnel, setCvType, setTemplate, setDetails, goBack };
};
