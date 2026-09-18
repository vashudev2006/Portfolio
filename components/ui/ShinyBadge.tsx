"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface ShinyBadgeProps {
  children: React.ReactNode;
  icon?: React.ReactNode;
  color?: "amber" | "emerald" | "blue" | "violet" | "cyan" | "slate";
  pulse?: boolean;
  className?: string;
}

export const ShinyBadge: React.FC<ShinyBadgeProps> = ({
  children,
  icon,
  color = "amber",
  pulse = false,
  className,
}) => {
  const dotColorClasses = {
    amber: "bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.9)]",
    emerald: "bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]",
    blue: "bg-sky-400 shadow-[0_0_10px_rgba(56,189,248,0.9)]",
    violet: "bg-purple-400 shadow-[0_0_10px_rgba(192,132,252,0.9)]",
    cyan: "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.9)]",
    slate: "bg-slate-400 shadow-[0_0_10px_rgba(148,163,184,0.6)]",
  };

  const textClasses = {
    amber: "text-amber-300 border-amber-400/25 bg-amber-400/10",
    emerald: "text-emerald-300 border-emerald-400/25 bg-emerald-400/10",
    blue: "text-sky-300 border-sky-400/25 bg-sky-400/10",
    violet: "text-purple-300 border-purple-400/25 bg-purple-400/10",
    cyan: "text-cyan-300 border-cyan-400/25 bg-cyan-400/10",
    slate: "text-slate-300 border-white/10 bg-white/[0.05]",
  };

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3.5 py-1 text-xs font-mono font-medium rounded-full border backdrop-blur-xl shadow-sm transition-all duration-200 select-none",
        textClasses[color],
        className
      )}
    >
      {pulse && (
        <span className="relative flex h-2 w-2">
          <span
            className={cn(
              "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
              dotColorClasses[color]
            )}
          />
          <span
            className={cn(
              "relative inline-flex rounded-full h-2 w-2",
              dotColorClasses[color]
            )}
          />
        </span>
      )}
      {icon && <span className="flex-shrink-0 text-current">{icon}</span>}
      <span>{children}</span>
    </div>
  );
};
