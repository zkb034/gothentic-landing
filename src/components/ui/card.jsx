
import { cn } from "../../lib/utils"

export function Card({ className = "", ...props }) {
  return (
    <div
      className={cn("rounded-3xl border border-white/10 bg-slate-900/60 text-slate-100", className)}
      {...props}
    />
  );
}

export function CardContent({ className = "", ...props }) {
  return <div className={cn("p-6", className)} {...props} />;
}
