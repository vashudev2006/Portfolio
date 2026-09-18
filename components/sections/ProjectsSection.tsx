"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FolderGit2,
  ExternalLink,
  Box,
  Server,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  Code,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShinyBadge } from "@/components/ui/ShinyBadge";
import { portfolioData } from "@/lib/portfolioData";

export const ProjectsSection: React.FC = () => {
  // Interactive GLB Inspector simulated state
  const [wireframeMode, setWireframeMode] = useState(false);
  const [materialRoughness, setMaterialRoughness] = useState(0.4);
  const [rotationSpeed, setRotationSpeed] = useState(1);

  return (
    <section id="projects" className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 mb-12">
        <ShinyBadge color="blue" icon={<FolderGit2 className="w-3.5 h-3.5" />}>
          Featured Engineering
        </ShinyBadge>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between w-full gap-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Crafted Systems &amp; Experiments
          </h2>
          <p className="text-sm font-mono text-slate-400">
            // full-stack telemetry, 3D WebGL &amp; distributed services
          </p>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="flex flex-col gap-10">
        {/* Project 1: Psych+ Healthcare Platform */}
        {portfolioData.projects[0] && (
          <GlassCard
            variant="vision"
            interactive
            tilt
            glowColor="blue"
            className="p-6 sm:p-8 lg:p-10 border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left Details */}
              <div className="lg:col-span-7 flex flex-col gap-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-blue-500/15 text-sky-300 border border-blue-400/30">
                    Full-Stack &amp; Desktop
                  </span>
                  <span className="text-xs font-mono text-emerald-300 bg-emerald-950/60 border border-emerald-500/30 px-3 py-1 rounded-full flex items-center gap-1.5 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
                    Production Live
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight flex items-center gap-3">
                    {portfolioData.projects[0].title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-amber-300 font-mono">
                    {portfolioData.projects[0].subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {portfolioData.projects[0].description}
                </p>

                {/* Key Metrics Ribbon */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  {portfolioData.projects[0].metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-white/[0.04] border border-white/10 rounded-2xl p-3.5 text-center backdrop-blur-md"
                    >
                      <div className="text-xs sm:text-sm font-mono font-bold text-sky-300">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bullet Highlights */}
                <div className="space-y-2 pt-2">
                  {portfolioData.projects[0].bulletPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-amber-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {portfolioData.projects[0].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono text-slate-300 bg-white/[0.05] border border-white/10 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 pt-3">
                  <a
                    href={portfolioData.projects[0].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 backdrop-blur-xl shadow-md transition-all hover:scale-105 active:scale-95"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>Source Code</span>
                  </a>
                  <a
                    href={portfolioData.projects[0].demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:shadow-[0_6px_28px_rgba(245,158,11,0.55)] border border-amber-300/40 transition-all hover:scale-105 active:scale-95"
                  >
                    <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Live Deployment</span>
                  </a>
                </div>
              </div>

              {/* Right: Architecture & System Diagram Explorer */}
              <div className="lg:col-span-5 flex flex-col gap-3">
                <div className="glass-vision-well rounded-3xl p-5 border border-white/10 text-xs font-mono text-slate-300">
                  <div className="flex items-center justify-between pb-3 border-b border-white/10">
                    <span className="text-white font-bold flex items-center gap-1.5">
                      <Server className="w-3.5 h-3.5 text-sky-400" />
                      Platform Micro-Architecture
                    </span>
                    <span className="text-[10px] text-amber-300 font-semibold">Node + Electron</span>
                  </div>

                  <div className="py-4 space-y-3">
                    {/* Layer 1: Client */}
                    <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-sky-400/25 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-sky-400" />
                        <div>
                          <div className="font-semibold text-white">Clients: Web &amp; Electron</div>
                          <div className="text-[10px] text-slate-400">React 18 · Tailwind · Protected Chat</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-sky-300 font-bold bg-sky-950/60 px-2.5 py-0.5 rounded-full border border-sky-400/30">Desktop+Web</span>
                    </div>

                    {/* Connector */}
                    <div className="flex justify-center text-slate-500 -my-1 font-semibold text-[11px]">
                      <span>↓ 15 REST Endpoints / SSL JWT ↓</span>
                    </div>

                    {/* Layer 2: API Gateway */}
                    <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-amber-400/25 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400" />
                        <div>
                          <div className="font-semibold text-white">Express.js REST Engine</div>
                          <div className="text-[10px] text-slate-400">RBAC · Appointment Engine · Email Broker</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-amber-300 font-bold bg-amber-950/60 px-2.5 py-0.5 rounded-full border border-amber-400/30">Render / Railway</span>
                    </div>

                    {/* Connector */}
                    <div className="flex justify-center text-slate-500 -my-1 font-semibold text-[11px]">
                      <span>↓ Mongoose ORM &amp; Real-time Socket ↓</span>
                    </div>

                    {/* Layer 3: Persistence */}
                    <div className="p-3.5 rounded-2xl bg-white/[0.05] border border-emerald-400/25 flex items-center justify-between shadow-sm">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400" />
                        <div>
                          <div className="font-semibold text-white">MongoDB &amp; Firebase</div>
                          <div className="text-[10px] text-slate-400">Clinical Records · Real-time Push State</div>
                        </div>
                      </div>
                      <span className="text-[10px] text-emerald-300 font-bold bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-400/30">Cloud DB</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-slate-400">
                    <span className="flex items-center gap-1.5 font-medium">
                      <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                      Role-based Access Control
                    </span>
                    <span className="text-slate-400">Patient · Doctor · Admin</span>
                  </div>
                </div>
              </div>
            </div>
          </GlassCard>
        )}

        {/* Project 2: Drag-and-Drop GLB Viewer with Interactive Simulated 3D Inspection */}
        {portfolioData.projects[1] && (
          <GlassCard
            variant="vision"
            interactive
            tilt
            glowColor="cyan"
            className="p-6 sm:p-8 lg:p-10 border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              {/* Left: 3D Shader & Interactive Controls Simulation */}
              <div className="lg:col-span-5 flex flex-col gap-4 order-2 lg:order-1">
                {/* 3D Viewport Simulation Window */}
                <div className="glass-vision-well rounded-3xl p-4 border border-white/10 relative overflow-hidden flex flex-col justify-between min-h-[320px] shadow-2xl">
                  {/* Viewport UI Controls Bar */}
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 z-10">
                    <span className="text-xs font-mono text-cyan-300 flex items-center gap-1.5 font-semibold">
                      <Box className="w-3.5 h-3.5" />
                      R3F WebGL Canvas
                    </span>
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => setWireframeMode(!wireframeMode)}
                        className={`text-[10px] font-mono px-3 py-1 rounded-full transition-colors cursor-pointer ${
                          wireframeMode
                            ? "bg-cyan-400 text-slate-950 font-bold"
                            : "bg-white/10 text-slate-300 hover:text-white"
                        }`}
                      >
                        {wireframeMode ? "WIREFRAME ON" : "SHADED"}
                      </button>
                    </div>
                  </div>

                  {/* Animated Simulated 3D Mesh (Harmonic SVG Geometry) */}
                  <div className="my-auto flex items-center justify-center py-6 relative">
                    <motion.div
                      animate={{
                        rotateY: [0, 360 * rotationSpeed],
                        rotateX: [0, 180 * rotationSpeed, 360 * rotationSpeed],
                      }}
                      transition={{
                        repeat: Infinity,
                        duration: 12 / rotationSpeed,
                        ease: "linear",
                      }}
                      className="w-40 h-40 flex items-center justify-center relative cursor-grab active:cursor-grabbing"
                    >
                      <svg
                        viewBox="0 0 100 100"
                        className="w-full h-full drop-shadow-[0_0_28px_rgba(56,189,248,0.55)]"
                      >
                        {/* 3D Wireframe Icosahedron Geometry representation */}
                        <polygon
                          points="50,5 90,25 90,75 50,95 10,75 10,25"
                          fill={wireframeMode ? "none" : "rgba(56, 189, 248, 0.15)"}
                          stroke={wireframeMode ? "#38BDF8" : "rgba(255, 255, 255, 0.75)"}
                          strokeWidth={wireframeMode ? "1.5" : "1"}
                        />
                        <line x1="50" y1="5" x2="50" y2="95" stroke="#38BDF8" strokeWidth="0.75" strokeDasharray={wireframeMode ? "2,2" : undefined} />
                        <line x1="10" y1="25" x2="90" y2="75" stroke="#38BDF8" strokeWidth="0.75" />
                        <line x1="10" y1="75" x2="90" y2="25" stroke="#38BDF8" strokeWidth="0.75" />
                        <circle cx="50" cy="50" r={wireframeMode ? "2" : "14"} fill="rgba(56, 189, 248, 0.25)" stroke="#38BDF8" strokeWidth="1" />
                      </svg>
                    </motion.div>

                    {/* Orbit instruction tip */}
                    <span className="absolute bottom-2 text-[10px] font-mono text-slate-400">
                      drag &amp; orbit · GLSL fragment pass
                    </span>
                  </div>

                  {/* Interactive Inspector Sliders */}
                  <div className="pt-3 border-t border-white/10 space-y-2 text-xs font-mono z-10">
                    <div className="flex items-center justify-between text-slate-300 text-[11px]">
                      <span>Roughness: {materialRoughness}</span>
                      <input
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        value={materialRoughness}
                        onChange={(e) => setMaterialRoughness(parseFloat(e.target.value))}
                        className="w-24 accent-cyan-400 cursor-pointer"
                      />
                    </div>
                    <div className="flex items-center justify-between text-slate-300 text-[11px]">
                      <span>Orbit Speed: {rotationSpeed}x</span>
                      <input
                        type="range"
                        min="0.2"
                        max="3"
                        step="0.2"
                        value={rotationSpeed}
                        onChange={(e) => setRotationSpeed(parseFloat(e.target.value))}
                        className="w-24 accent-cyan-400 cursor-pointer"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: Project Details */}
              <div className="lg:col-span-7 flex flex-col gap-5 order-1 lg:order-2">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 text-xs font-mono font-semibold rounded-full bg-cyan-500/15 text-cyan-300 border border-cyan-400/30">
                    Interactive 3D WebGL
                  </span>
                  <span className="text-xs font-mono text-amber-300 bg-amber-950/60 border border-amber-400/30 px-3 py-1 rounded-full flex items-center gap-1.5 font-semibold">
                    <Sparkles className="w-3 h-3 text-amber-400" />
                    Custom GLSL Shaders
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {portfolioData.projects[1].title}
                  </h3>
                  <p className="text-sm sm:text-base font-semibold text-cyan-300 font-mono">
                    {portfolioData.projects[1].subtitle}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-normal">
                  {portfolioData.projects[1].description}
                </p>

                {/* Key Metrics Ribbon */}
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1">
                  {portfolioData.projects[1].metrics.map((m, idx) => (
                    <div
                      key={idx}
                      className="bg-white/[0.04] border border-white/10 rounded-2xl p-3.5 text-center backdrop-blur-md"
                    >
                      <div className="text-xs sm:text-sm font-mono font-bold text-cyan-300">
                        {m.value}
                      </div>
                      <div className="text-[10px] text-slate-400 font-medium uppercase tracking-wider mt-0.5">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Bullet Highlights */}
                <div className="space-y-2 pt-2">
                  {portfolioData.projects[1].bulletPoints.map((pt, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                      <CheckCircle2 className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {portfolioData.projects[1].tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-mono text-slate-300 bg-white/[0.05] border border-white/10 rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex items-center gap-3 pt-3">
                  <a
                    href={portfolioData.projects[1].githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 backdrop-blur-xl shadow-md transition-all hover:scale-105 active:scale-95"
                  >
                    <Code className="w-3.5 h-3.5" />
                    <span>Shader Source</span>
                  </a>
                  <a
                    href={portfolioData.projects[1].demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-cyan-400 to-sky-500 shadow-[0_4px_20px_rgba(34,211,238,0.4)] hover:shadow-[0_6px_28px_rgba(34,211,238,0.55)] border border-cyan-300/40 transition-all hover:scale-105 active:scale-95"
                  >
                    <ExternalLink className="w-3.5 h-3.5 stroke-[2.5]" />
                    <span>Interactive App</span>
                  </a>
                </div>
              </div>
            </div>
          </GlassCard>
        )}
      </div>
    </section>
  );
};
