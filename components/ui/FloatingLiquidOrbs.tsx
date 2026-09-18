"use client";

import React from "react";
import { motion } from "framer-motion";

export const FloatingLiquidOrbs: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* VisionOS Subtle Spatial Grid */}
      <div className="absolute inset-0 spatial-grid opacity-40" />

      {/* 1. Warm Golden Champagne Liquid Orb - Top Right */}
      <motion.div
        animate={{
          x: [0, 50, -35, 0],
          y: [0, -60, 40, 0],
          scale: [1, 1.12, 0.94, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -top-32 right-12 w-[540px] h-[540px] rounded-full bg-gradient-to-br from-amber-500/18 via-orange-500/10 to-transparent blur-[140px]"
      />

      {/* 2. Soft Warm Sunset Orb - Left Center */}
      <motion.div
        animate={{
          x: [0, -45, 35, 0],
          y: [0, 70, -50, 0],
          scale: [1, 0.95, 1.1, 1],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-1/3 -left-36 w-[560px] h-[560px] rounded-full bg-gradient-to-tr from-amber-600/14 via-orange-400/8 to-transparent blur-[150px]"
      />

      {/* 3. Deep Titanium Violet Spatial Orb - Center Bottom */}
      <motion.div
        animate={{
          x: [0, 60, -50, 0],
          y: [0, -40, 60, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
        className="absolute bottom-16 right-1/4 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-purple-700/12 via-indigo-600/8 to-transparent blur-[160px]"
      />

      {/* Soft spatial atmosphere vignette */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#090C15]/40 via-transparent to-[#090C15]/90" />
    </div>
  );
};
