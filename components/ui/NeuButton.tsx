"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

export interface NeuButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: "primary" | "glass" | "subtle" | "raised";
  size?: "sm" | "md" | "lg";
  className?: string;
  icon?: React.ReactNode;
}

export const NeuButton: React.FC<NeuButtonProps> = ({
  children,
  variant = "glass",
  size = "md",
  className,
  icon,
  onClick,
  ...props
}) => {
  const sizeStyles = {
    sm: "px-3.5 py-1.5 text-xs gap-1.5 rounded-full",
    md: "px-5 py-2.5 text-sm gap-2 rounded-full",
    lg: "px-7 py-3.5 text-base gap-2.5 rounded-full font-semibold",
  };

  let variantStyles = "";
  if (variant === "primary") {
    variantStyles =
      "bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 text-slate-950 font-bold shadow-[0_4px_24px_rgba(245,158,11,0.38)] hover:shadow-[0_6px_32px_rgba(245,158,11,0.55)] border border-amber-300/50";
  } else if (variant === "glass" || variant === "raised") {
    variantStyles =
      "bg-white/[0.08] hover:bg-white/[0.15] text-white border border-white/20 backdrop-blur-2xl shadow-[0_8px_24px_rgba(0,0,0,0.3)] hover:border-white/35";
  } else {
    variantStyles =
      "bg-white/[0.04] text-slate-300 hover:text-white border border-white/10 hover:bg-white/[0.08]";
  }

  return (
    <motion.button
      whileHover={{ y: -2, scale: 1.02 }}
      whileTap={{ y: 1, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 420, damping: 25 }}
      onClick={onClick}
      className={cn(
        "inline-flex items-center justify-center font-medium transition-all cursor-pointer select-none tracking-tight",
        sizeStyles[size],
        variantStyles,
        className
      )}
      {...(props as any)}
    >
      {icon && <span className="flex-shrink-0">{icon}</span>}
      <span>{children}</span>
    </motion.button>
  );
};
