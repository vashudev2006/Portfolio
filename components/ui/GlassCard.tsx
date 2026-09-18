"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

export interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  variant?: "vision" | "elevated" | "well" | "plate";
  interactive?: boolean;
  tilt?: boolean;
  glowColor?: "amber" | "blue" | "cyan" | "emerald" | "violet" | "white";
  className?: string;
  spotlightRadius?: number;
}

const SPECULAR_BORDER_COLORS = {
  amber: "rgba(245, 158, 11, 0.75)",
  blue: "rgba(56, 189, 248, 0.75)",
  cyan: "rgba(34, 211, 238, 0.75)",
  emerald: "rgba(52, 211, 153, 0.75)",
  violet: "rgba(168, 85, 247, 0.75)",
  white: "rgba(255, 255, 255, 0.75)",
};

const INNER_SPOTLIGHT_COLORS = {
  amber: "rgba(245, 158, 11, 0.08)",
  blue: "rgba(56, 189, 248, 0.08)",
  cyan: "rgba(34, 211, 238, 0.08)",
  emerald: "rgba(52, 211, 153, 0.08)",
  violet: "rgba(168, 85, 247, 0.08)",
  white: "rgba(255, 255, 255, 0.06)",
};

export const GlassCard: React.FC<GlassCardProps> = ({
  children,
  variant = "vision",
  interactive = true,
  tilt = false,
  glowColor = "amber",
  className,
  spotlightRadius = 320,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // 3D Tilt Spring Physics
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  const springConfig = { damping: 24, stiffness: 200, mass: 0.5 };
  const rotateX = useSpring(useTransform(rawMouseY, [-0.5, 0.5], [6, -6]), springConfig);
  const rotateY = useSpring(useTransform(rawMouseX, [-0.5, 0.5], [-6, 6]), springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current || !interactive) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y });

    if (tilt) {
      const normalizedX = x / rect.width - 0.5;
      const normalizedY = y / rect.height - 0.5;
      rawMouseX.set(normalizedX);
      rawMouseY.set(normalizedY);
    }
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (tilt) {
      rawMouseX.set(0);
      rawMouseY.set(0);
    }
  };

  let variantStyles = "glass-vision text-slate-100";
  if (variant === "elevated") {
    variantStyles = "glass-vision-elevated text-white";
  } else if (variant === "well") {
    variantStyles = "glass-vision-well text-slate-200";
  } else if (variant === "plate") {
    variantStyles = "spatial-plate-md text-white";
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={tilt ? { rotateX, rotateY, transformStyle: "preserve-3d" } : undefined}
      whileHover={interactive && !tilt ? { y: -3, transition: { duration: 0.25, ease: "easeOut" } } : undefined}
      className={cn(
        "relative rounded-3xl overflow-hidden transition-all duration-300",
        variantStyles,
        interactive && "glass-vision-interactive",
        className
      )}
      {...(props as any)}
    >
      {/* 1. Real-time Specular Light Rim (VisionOS Light Catch) */}
      {interactive && variant !== "well" && (
        <div
          className="pointer-events-none absolute -inset-px rounded-[inherit] transition-opacity duration-300 z-20"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(${spotlightRadius}px circle at ${mousePos.x}px ${mousePos.y}px, ${SPECULAR_BORDER_COLORS[glowColor]}, transparent 70%)`,
            WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
            WebkitMaskComposite: "xor",
            maskComposite: "exclude",
            padding: "1px",
          }}
        />
      )}

      {/* 2. Soft Ambient Surface Sheen */}
      {interactive && variant !== "well" && (
        <div
          className="pointer-events-none absolute inset-0 transition-opacity duration-300 rounded-[inherit] z-0"
          style={{
            opacity: isHovered ? 1 : 0,
            background: `radial-gradient(${spotlightRadius * 1.3}px circle at ${mousePos.x}px ${mousePos.y}px, ${INNER_SPOTLIGHT_COLORS[glowColor]}, transparent 60%)`,
          }}
        />
      )}

      {/* 3. Top Specular Rim Reflection */}
      {variant !== "well" && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent z-10" />
      )}

      {/* Content wrapper */}
      <div className="relative z-10 w-full h-full">{children}</div>
    </motion.div>
  );
};
