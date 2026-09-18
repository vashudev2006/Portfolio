"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Terminal as TerminalIcon,
  Sparkles,
  ArrowRight,
  Download,
  Mail,
  Phone,
  Boxes,
  Cpu,
} from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/Icons";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShinyBadge } from "@/components/ui/ShinyBadge";
import { portfolioData } from "@/lib/portfolioData";
import confetti from "canvas-confetti";

export const HeroSection: React.FC = () => {
  const [activeCommand, setActiveCommand] = useState<"whoami" | "vision" | "stack">("whoami");
  const [terminalText, setTerminalText] = useState("");

  const commandOutputs = {
    whoami: "vashudev:~$ Frontend AI Engineer & Full-Stack Product Developer | Crafting explainable AI products, real-time 3D WebGL scenes, and robust distributed web services.",
    vision: "vashudev:~$ Spatial VisionOS aesthetics, liquid glass optics, and tactile spring physics. Elevating web interfaces into living, responsive environments.",
    stack: "vashudev:~$ React 19 · Next.js · React Three Fiber · GLSL · Node.js · Express · MongoDB · TypeScript · Tailwind CSS · Framer Motion",
  };

  useEffect(() => {
    let index = 0;
    const fullText = commandOutputs[activeCommand];
    setTerminalText("");

    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setTerminalText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 14);

    return () => clearInterval(interval);
  }, [activeCommand]);

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.65 },
        colors: ["#F59E0B", "#FBBF24", "#38BDF8", "#34D399"],
      });
    } catch (e) {}
  };

  return (
    <section id="profile" className="relative pt-32 pb-20 md:pt-40 md:pb-28 px-4 sm:px-6 max-w-6xl mx-auto z-10">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Identity & Actions */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start gap-5"
        >
          {/* Status Pills */}
          <div className="flex flex-wrap items-center gap-2.5">
            <ShinyBadge color="emerald" pulse>
              Open for Opportunities
            </ShinyBadge>
            <ShinyBadge color="amber" icon={<Sparkles className="w-3 h-3" />}>
              Spatial Liquid Glass UI
            </ShinyBadge>
            <span className="text-xs font-mono text-slate-300 flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.05] border border-white/10 backdrop-blur-md">
              📍 New Delhi, India
            </span>
          </div>

          {/* Name & Title */}
          <div className="space-y-2">
            <motion.h1
              className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              Hi, I&apos;m{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-amber-400 to-amber-500 drop-shadow-[0_4px_24px_rgba(245,158,11,0.4)]">
                Vashudev
              </span>
            </motion.h1>

            <p className="text-lg sm:text-xl font-mono font-medium text-amber-300 flex items-center gap-2">
              <span className="text-amber-500/70">&gt;</span> Frontend AI Engineer &amp; Full-Stack Developer
            </p>
          </div>

          {/* Bio Description */}
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl font-normal">
            {portfolioData.bio}
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full text-base font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-[0_4px_24px_rgba(245,158,11,0.4)] hover:shadow-[0_6px_32px_rgba(245,158,11,0.6)] border border-amber-300/40 hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
            >
              <span>View Selected Works</span>
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>

            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-white bg-white/[0.07] hover:bg-white/[0.14] border border-white/20 backdrop-blur-2xl shadow-lg hover:border-white/35 hover:scale-105 active:scale-95 transition-all cursor-pointer select-none"
            >
              <Mail className="w-4 h-4" />
              <span>Let&apos;s Connect</span>
            </a>

            {/* Direct Working Native PDF Download */}
            <a
              href="/api/resume"
              download="Vashudev_Kaushik_CV.pdf"
              onClick={triggerCelebration}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-base font-semibold text-white bg-white/[0.07] hover:bg-white/[0.14] border border-white/20 backdrop-blur-2xl shadow-lg hover:border-white/35 hover:scale-105 active:scale-95 transition-all cursor-pointer select-none group"
            >
              <Download className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Social Quick-Access Glass Tiles */}
          <div className="flex items-center gap-2.5 pt-2">
            <span className="text-xs font-mono text-slate-400 mr-1">// links:</span>
            {[
              {
                icon: <GithubIcon className="w-4 h-4" />,
                label: "GitHub",
                href: portfolioData.links.github,
              },
              {
                icon: <LinkedinIcon className="w-4 h-4" />,
                label: "LinkedIn",
                href: portfolioData.links.linkedin,
              },
              {
                icon: <Phone className="w-4 h-4" />,
                label: "+91 93542 35038",
                href: portfolioData.links.phone,
              },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                title={social.label}
                className="w-10 h-10 rounded-full bg-white/[0.06] hover:bg-white/[0.14] border border-white/15 flex items-center justify-center text-slate-300 hover:text-amber-400 hover:border-amber-400/40 transition-all shadow-md"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </motion.div>

        {/* Right Column: VisionOS Interactive Liquid Glass Terminal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 flex flex-col gap-4"
        >
          {/* Flagship Interactive Liquid Glass Card with 3D Tilt */}
          <GlassCard
            variant="vision"
            interactive
            tilt
            glowColor="amber"
            className="p-5 sm:p-6 shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
          >
            {/* Terminal Header */}
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/90 shadow-[0_0_8px_rgba(239,68,68,0.5)]" />
                <span className="w-3 h-3 rounded-full bg-amber-500/90 shadow-[0_0_8px_rgba(245,158,11,0.5)]" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
              </div>
              <span className="text-[11px] font-mono text-slate-300 flex items-center gap-1.5 font-medium">
                <TerminalIcon className="w-3.5 h-3.5 text-amber-400" />
                terminal@vashudev: ~
              </span>
              <span className="text-[10px] font-mono text-emerald-300 bg-emerald-950/70 border border-emerald-500/30 px-2 py-0.5 rounded-full font-bold">
                ONLINE
              </span>
            </div>

            {/* Interactive Command Switcher Pills */}
            <div className="flex items-center gap-2 py-3">
              {(["whoami", "vision", "stack"] as const).map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => setActiveCommand(cmd)}
                  className={`text-xs font-mono px-3.5 py-1.5 rounded-full transition-all cursor-pointer ${
                    activeCommand === cmd
                      ? "bg-amber-400/20 text-amber-300 border border-amber-400/50 font-bold shadow-[0_0_14px_rgba(245,158,11,0.3)]"
                      : "bg-white/[0.04] text-slate-400 border border-white/10 hover:text-white hover:bg-white/[0.08]"
                  }`}
                >
                  ${cmd}
                </button>
              ))}
            </div>

            {/* Sunken VisionOS Console Well */}
            <div className="glass-vision-well rounded-2xl p-4 font-mono text-xs text-slate-200 min-h-[120px] flex flex-col justify-between border border-white/10 shadow-inner">
              <div>
                <p className="text-emerald-400 font-semibold flex items-center gap-1.5 mb-1.5">
                  <span>❯</span>
                  <span>run --inspect {activeCommand}</span>
                </p>
                <p className="text-slate-300 leading-relaxed font-normal">{terminalText}</p>
              </div>
              <div className="flex items-center justify-between pt-3 text-[10px] text-slate-400 border-t border-white/10">
                <span>Status: 200 OK</span>
                <span>Spatial Latency: 4ms</span>
              </div>
            </div>

            {/* Spatial Tech Badges */}
            <div className="grid grid-cols-2 gap-2.5 pt-4">
              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3 backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-cyan-500/15 border border-cyan-400/30 flex items-center justify-center text-cyan-300">
                  <Boxes className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">3D WebGL</div>
                  <div className="text-xs font-bold text-white">React Three Fiber</div>
                </div>
              </div>

              <div className="p-3 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3 backdrop-blur-md">
                <div className="w-8 h-8 rounded-xl bg-purple-500/15 border border-purple-400/30 flex items-center justify-center text-purple-300">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-[10px] font-mono text-slate-400">AI Track</div>
                  <div className="text-xs font-bold text-white">20 Anthropic Certs</div>
                </div>
              </div>
            </div>
          </GlassCard>

          {/* Minimalist VisionOS Stats Bar (Clean Horizontal Layout, No Clutter) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
            {portfolioData.stats.map((stat, i) => (
              <GlassCard
                key={i}
                variant="vision"
                glowColor={i % 2 === 0 ? "blue" : "amber"}
                className="p-3 text-center rounded-2xl border-white/10 bg-white/[0.03]"
              >
                <div className="text-sm font-mono font-bold text-amber-300">
                  {stat.value}
                </div>
                <div className="text-[10px] font-sans text-slate-400 uppercase tracking-wider mt-0.5 font-medium">
                  {stat.label}
                </div>
              </GlassCard>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
