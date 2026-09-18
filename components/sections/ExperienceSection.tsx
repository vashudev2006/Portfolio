"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Briefcase,
  GraduationCap,
  Calendar,
  Building2,
  CheckCircle2,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShinyBadge } from "@/components/ui/ShinyBadge";
import { portfolioData } from "@/lib/portfolioData";

export const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 mb-12">
        <ShinyBadge color="emerald" icon={<Briefcase className="w-3.5 h-3.5" />}>
          Career &amp; Academia
        </ShinyBadge>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between w-full gap-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Work Experience &amp; Education
          </h2>
          <p className="text-sm font-mono text-slate-400">
            // industry internships, academic foundation &amp; applied AI
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Work Experience Timeline */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="flex items-center gap-2 pb-2">
            <Briefcase className="w-4 h-4 text-emerald-400" />
            <h3 className="text-base font-mono font-bold uppercase tracking-wider text-white">
              Professional Internships
            </h3>
          </div>

          <div className="relative pl-6 sm:pl-8 space-y-8 before:content-[''] before:absolute before:left-[11px] sm:before:left-[15px] before:top-3 before:bottom-3 before:w-[2px] before:bg-gradient-to-b before:from-amber-400 before:via-sky-400 before:to-transparent">
            {portfolioData.experience.map((exp, idx) => (
              <div key={idx} className="relative">
                {/* Timeline node icon */}
                <div className="absolute -left-[30px] sm:-left-[35px] top-1.5 w-7 h-7 rounded-full bg-[#090C15] border border-white/20 flex items-center justify-center text-amber-400 shadow-md">
                  <span className="w-2.5 h-2.5 rounded-full bg-amber-400 shadow-[0_0_10px_rgba(251,191,36,0.8)]" />
                </div>

                {/* Timeline Card */}
                <GlassCard
                  variant="vision"
                  interactive
                  glowColor="amber"
                  className="p-6 sm:p-7 border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="px-3 py-1 text-xs font-mono font-bold rounded-full bg-amber-400/15 text-amber-300 border border-amber-400/30">
                      {exp.badge}
                    </span>
                    <span className="text-xs font-mono text-slate-400 flex items-center gap-1 font-medium">
                      <Calendar className="w-3.5 h-3.5" />
                      {exp.period}
                    </span>
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white">{exp.role}</h4>
                  <div className="flex items-center gap-2 text-sm text-slate-300 font-medium mt-0.5 mb-3">
                    <Building2 className="w-3.5 h-3.5 text-slate-400" />
                    <span>{exp.company}</span>
                    <span className="text-slate-400 font-mono text-xs">({exp.type})</span>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 font-normal">
                    {exp.description}
                  </p>

                  <div className="space-y-1.5 pt-2 border-t border-white/10">
                    {exp.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0 mt-0.5" />
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </GlassCard>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column: Academic Foundation */}
        <div className="lg:col-span-5 flex flex-col gap-6">
          <div className="flex items-center gap-2 pb-2">
            <GraduationCap className="w-4 h-4 text-cyan-400" />
            <h3 className="text-base font-mono font-bold uppercase tracking-wider text-white">
              Education
            </h3>
          </div>

          <div className="space-y-6">
            {/* Primary Degree */}
            <GlassCard
              variant="vision"
              interactive
              tilt
              glowColor="cyan"
              className="p-6 sm:p-7 border-white/15 shadow-[0_16px_40px_rgba(0,0,0,0.5)]"
            >
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
                  {portfolioData.education[0].status}
                </span>
                <span className="text-xs font-mono text-slate-400 font-medium">
                  {portfolioData.education[0].period}
                </span>
              </div>

              <h4 className="text-base sm:text-lg font-bold text-white">
                {portfolioData.education[0].degree}
              </h4>
              <p className="text-xs sm:text-sm font-mono text-amber-300 font-semibold mt-1">
                {portfolioData.education[0].specialization}
              </p>

              <div className="pt-3 mt-3 border-t border-white/10 text-xs text-slate-300 flex items-center gap-1.5 font-medium">
                <Building2 className="w-3.5 h-3.5 text-slate-400" />
                <span>{portfolioData.education[0].institution}</span>
              </div>
            </GlassCard>

            {/* Schooling Foundation */}
            <GlassCard variant="vision" interactive className="p-6 border-white/15 shadow-md">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <span className="text-xs font-mono text-slate-300 font-medium">Senior Secondary</span>
                <span className="text-xs font-mono text-emerald-300 font-bold">CBSE Board</span>
              </div>

              <h4 className="text-sm sm:text-base font-bold text-white">
                {portfolioData.education[1].degree}
              </h4>
              <p className="text-xs font-mono text-slate-300 mt-1">
                {portfolioData.education[1].specialization}
              </p>

              <div className="glass-vision-well rounded-xl p-3 mt-3 text-xs font-mono text-slate-200 flex items-center justify-between border border-white/10 font-medium">
                <span>Secondary (10th): 91%</span>
                <span className="text-amber-300 font-bold">Science PCMB: 88%</span>
              </div>

              <p className="text-[11px] font-mono text-slate-400 mt-2.5">
                {portfolioData.education[1].institution}
              </p>
            </GlassCard>
          </div>
        </div>
      </div>
    </section>
  );
};
