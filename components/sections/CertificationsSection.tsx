"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, CheckCircle, Cpu } from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShinyBadge } from "@/components/ui/ShinyBadge";
import { portfolioData } from "@/lib/portfolioData";

export const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 mb-12">
        <ShinyBadge color="violet" icon={<Award className="w-3.5 h-3.5" />}>
          Verified Credentials
        </ShinyBadge>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between w-full gap-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Certifications &amp; AI Badges
          </h2>
          <p className="text-sm font-mono text-slate-400">
            // industry accreditations across Anthropic AI, Oracle, IBM, and MERN
          </p>
        </div>
      </div>

      {/* Featured Anthropic Spotlight Card */}
      <div className="mb-8">
        <GlassCard
          variant="vision"
          interactive
          tilt
          glowColor="violet"
          className="p-6 sm:p-8 border-purple-500/30 shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
        >
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="flex items-start sm:items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-300 flex-shrink-0 shadow-lg">
                <Cpu className="w-7 h-7" />
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono font-bold px-3 py-0.5 rounded-full bg-purple-500/20 text-purple-300 border border-purple-400/30">
                    Milestone Achievement
                  </span>
                  <span className="text-xs font-mono text-slate-400 font-medium">2026</span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-white">
                  20 Anthropic Academy AI Fluency Certificates
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 font-normal">
                  Comprehensive mastery in prompt engineering, autonomous agents, Claude architectures, and production AI system safety.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2 self-start md:self-center flex-shrink-0">
              <span className="glass-vision-well rounded-full px-5 py-2 text-xs font-mono text-purple-300 font-bold border border-purple-400/30 shadow-inner">
                20 Accreditations Completed
              </span>
            </div>
          </div>
        </GlassCard>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {portfolioData.certifications.slice(1).map((cert, idx) => (
          <GlassCard
            key={idx}
            variant="vision"
            interactive
            glowColor={idx % 3 === 0 ? "amber" : idx % 3 === 1 ? "blue" : "emerald"}
            className="p-5 flex flex-col justify-between border-white/10 shadow-[0_12px_36px_rgba(0,0,0,0.45)]"
          >
            <div>
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <span className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5 font-medium">
                  <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                  {cert.issuer}
                </span>
                {cert.year && (
                  <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-white/[0.06] text-slate-300 border border-white/10 font-medium">
                    {cert.year}
                  </span>
                )}
              </div>

              <h4 className="text-sm sm:text-base font-bold text-white leading-snug">
                {cert.name}
              </h4>
            </div>

            <div className="pt-4 mt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-slate-400">Verified ID</span>
              <span className="text-xs font-mono text-amber-300 font-bold flex items-center gap-1">
                {cert.badgeText || "Certified"}
              </span>
            </div>
          </GlassCard>
        ))}
      </div>
    </section>
  );
};
