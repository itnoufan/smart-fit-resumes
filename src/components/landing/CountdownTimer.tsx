import { useCountdownTimer } from "@/hooks/useCountdownTimer";
import { Clock } from "lucide-react";

interface CountdownTimerProps {
  label?: string;
  variant?: "default" | "compact" | "dark";
}

const CountdownTimer = ({ label = "Offer expires in", variant = "default" }: CountdownTimerProps) => {
  const { hours, minutes, seconds, expired } = useCountdownTimer();

  if (expired) return null;

  const boxClass =
    variant === "dark"
      ? "bg-background/10 text-background"
      : "bg-foreground text-background";

  const labelClass =
    variant === "dark" ? "text-background/70" : "text-muted-foreground";

  if (variant === "compact") {
    return (
      <div className="flex items-center gap-2 text-sm">
        <Clock className="w-3.5 h-3.5 text-primary" />
        <span className="text-muted-foreground">{label}</span>
        <span className="font-display font-bold text-foreground tabular-nums">
          {hours} : {minutes} : {seconds}
        </span>
      </div>
    );
  }

  return (
    <div className="text-center">
      <p className={`text-xs font-medium mb-2 ${labelClass}`}>{label}</p>
      <div className="inline-flex items-center gap-2">
        {[hours, minutes, seconds].map((val, i) => (
          <div key={i} className="flex items-center gap-2">
            <div className={`${boxClass} rounded-lg px-3 py-2 min-w-[3rem] text-center`}>
              <span className="font-display text-2xl font-bold tabular-nums">{val}</span>
            </div>
            {i < 2 && <span className={`font-bold text-xl ${variant === "dark" ? "text-background/50" : "text-muted-foreground"}`}>:</span>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountdownTimer;
