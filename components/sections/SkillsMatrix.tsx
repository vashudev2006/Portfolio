"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Wrench,
  Search,
  Check,
  Code2,
  Database,
  Cpu,
  Binary,
  Sparkles,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShinyBadge } from "@/components/ui/ShinyBadge";
import { portfolioData } from "@/lib/portfolioData";

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const categoryIcons: { [key: string]: React.ReactNode } = {
    frontend: <Code2 className="w-4 h-4 text-amber-400" />,
    backend: <Database className="w-4 h-4 text-sky-400" />,
    ai_tools: <Cpu className="w-4 h-4 text-purple-400" />,
    core_cs: <Binary className="w-4 h-4 text-emerald-400" />,
  };

  const filteredCategories = portfolioData.skillCategories.filter((cat) => {
    if (activeCategory === "all") return true;
    return cat.key === activeCategory;
  });

  return (
    <section id="skills" className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 mb-10">
        <ShinyBadge color="amber" icon={<Wrench className="w-3.5 h-3.5" />}>
          Engineering Capabilities
        </ShinyBadge>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between w-full gap-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Technical Stack &amp; Skills
          </h2>
          <p className="text-sm font-mono text-slate-400">
            // categorized expertise from low-level systems to modern AI UI
          </p>
        </div>
      </div>

      {/* Control Bar: Filter Tabs & Search Well */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-8">
        {/* Category Pill Tabs */}
        <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-2xl">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-4 py-2 text-xs font-mono rounded-full transition-all cursor-pointer ${
              activeCategory === "all"
                ? "bg-gradient-to-r from-amber-400 to-amber-500 text-slate-950 font-bold shadow-[0_2px_14px_rgba(245,158,11,0.4)]"
                : "text-slate-300 hover:text-white"
            }`}
          >
            All Disciplines
          </button>
          {portfolioData.skillCategories.map((cat) => {
            const isSelected = activeCategory === cat.key;
            return (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`flex items-center gap-1.5 px-4 py-2 text-xs font-mono rounded-full transition-all cursor-pointer ${
                  isSelected
                    ? "bg-white/15 text-white font-bold border border-white/25 shadow-sm"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {categoryIcons[cat.key]}
                <span>{cat.title.split(" ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Real-time Search Input in VisionOS Well */}
        <div className="relative flex-1 max-w-xs">
          <div className="glass-vision-well rounded-full flex items-center px-4 py-2.5 border border-white/10">
            <Search className="w-3.5 h-3.5 text-slate-400 mr-2 flex-shrink-0" />
            <input
              type="text"
              placeholder="Search skill (e.g. GLSL, Node)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-transparent text-xs font-mono text-white placeholder-slate-400 focus:outline-none w-full"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="text-xs text-slate-400 hover:text-white ml-1 cursor-pointer"
              >
                ×
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Categorized Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredCategories.map((cat) => {
          const matchingSkills = cat.skills.filter((s) =>
            s.toLowerCase().includes(searchQuery.toLowerCase())
          );

          if (matchingSkills.length === 0 && searchQuery) return null;

          return (
            <GlassCard
              key={cat.key}
              variant="vision"
              interactive
              glowColor="amber"
              className="p-6 sm:p-7 flex flex-col justify-between border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
            >
              <div>
                {/* Card Title */}
                <div className="flex items-center justify-between pb-4 border-b border-white/10">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-white/[0.06] border border-white/15 flex items-center justify-center">
                      {categoryIcons[cat.key]}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-white">{cat.title}</h3>
                      <p className="text-[11px] font-mono text-slate-400">
                        {matchingSkills.length} Core Technologies
                      </p>
                    </div>
                  </div>
                </div>

                {/* Skill Chips */}
                <div className="flex flex-wrap gap-2 pt-5">
                  {matchingSkills.map((skill, sIdx) => (
                    <motion.div
                      key={sIdx}
                      whileHover={{ scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      className="px-3.5 py-1.5 text-xs font-mono rounded-xl bg-white/[0.05] hover:bg-white/[0.12] border border-white/10 text-slate-200 hover:text-amber-300 hover:border-amber-400/40 cursor-default select-none transition-colors font-medium backdrop-blur-md"
                    >
                      {skill}
                    </motion.div>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-4 border-t border-white/10 flex items-center justify-between text-[10px] font-mono text-slate-400">
                <span>Domain: {cat.key}</span>
                <span className="text-emerald-300 font-semibold flex items-center gap-1">
                  <Check className="w-3 h-3" /> Production Verified
                </span>
              </div>
            </GlassCard>
          );
        })}
      </div>

      {/* Core Strengths Ribbon */}
      <div className="mt-10">
        <GlassCard variant="vision" interactive={false} className="p-6 sm:p-7 border-white/15">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-purple-400" />
              <h3 className="text-sm font-mono font-bold uppercase tracking-wider text-white">
                Core Strengths &amp; Engineering Principles
              </h3>
            </div>
            <span className="text-xs font-mono text-purple-300">
              // professional attributes
            </span>
          </div>

          <div className="flex flex-wrap gap-2.5 pt-4">
            {portfolioData.strengths.map((str, idx) => (
              <span
                key={idx}
                className="px-4 py-1.5 text-xs font-mono font-semibold rounded-full bg-purple-500/15 text-purple-200 border border-purple-400/30 flex items-center gap-1.5 backdrop-blur-md"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                {str}
              </span>
            ))}
          </div>
        </GlassCard>
      </div>
    </section>
  );
};
