import { useState, useEffect } from "react";

const STORAGE_KEY = "fmj_countdown_start";
const DURATION_MS = 24 * 60 * 60 * 1000; // 24 hours

export const useCountdownTimer = () => {
  const [timeLeft, setTimeLeft] = useState(() => {
    const stored = sessionStorage.getItem(STORAGE_KEY);
    const start = stored ? parseInt(stored, 10) : Date.now();
    if (!stored) sessionStorage.setItem(STORAGE_KEY, String(start));
    return Math.max(0, DURATION_MS - (Date.now() - start));
  });

  useEffect(() => {
    if (timeLeft <= 0) return;
    const id = setInterval(() => {
      const start = parseInt(sessionStorage.getItem(STORAGE_KEY) || "0", 10);
      const remaining = Math.max(0, DURATION_MS - (Date.now() - start));
      setTimeLeft(remaining);
      if (remaining <= 0) clearInterval(id);
    }, 1000);
    return () => clearInterval(id);
  }, []);

  const hours = Math.floor(timeLeft / 3600000);
  const minutes = Math.floor((timeLeft % 3600000) / 60000);
  const seconds = Math.floor((timeLeft % 60000) / 1000);

  return {
    hours: String(hours).padStart(2, "0"),
    minutes: String(minutes).padStart(2, "0"),
    seconds: String(seconds).padStart(2, "0"),
    expired: timeLeft <= 0,
  };
};
