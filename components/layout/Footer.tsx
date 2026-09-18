"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { portfolioData } from "@/lib/portfolioData";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="border-t border-white/10 bg-[#090C15]/80 backdrop-blur-3xl relative z-10 py-12 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Left: Brand & Stack */}
        <div className="flex flex-col items-center sm:items-start gap-1 text-center sm:text-left">
          <div className="flex items-center gap-2">
            <span className="font-mono text-sm font-bold text-white">
              {portfolioData.name}
            </span>
            <span className="text-slate-600">/</span>
            <span className="text-xs font-mono text-amber-400 font-semibold">
              Frontend AI Engineer
            </span>
          </div>
          <p className="text-xs font-mono text-slate-400">
            VisionOS Liquid Glass UI · Apple-inspired 3D Motion.
          </p>
        </div>

        {/* Center: System Status */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-300 font-medium">
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Spatial Systems Active · 2026</span>
        </div>

        {/* Right: Scroll to Top */}
        <button
          onClick={scrollToTop}
          className="w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/20 flex items-center justify-center text-slate-300 hover:text-amber-400 transition-all cursor-pointer shadow-md hover:scale-105 active:scale-95"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-4 h-4 stroke-[2.5]" />
        </button>
      </div>
    </footer>
  );
};
