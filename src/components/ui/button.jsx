export function Button({ className = "", variant = "default", ...props }) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2 text-sm font-medium " +
    "transition active:scale-[.99] focus:outline-none";
  const styles =
    variant === "secondary"
      ? "border border-white/10 bg-white/5 text-white hover:bg-white/10"
      : "bg-gradient-to-r from-fuchsia-600 to-violet-600 text-white hover:opacity-90";
  return <button className={`${base} ${styles} ${className}`} {...props} />;
}
