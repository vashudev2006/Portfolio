"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Copy,
  Check,
  Send,
  Phone,
  Terminal,
} from "lucide-react";
import { LinkedinIcon, GithubIcon } from "@/components/ui/Icons";
import { GlassCard } from "@/components/ui/GlassCard";
import { ShinyBadge } from "@/components/ui/ShinyBadge";
import { portfolioData } from "@/lib/portfolioData";
import confetti from "canvas-confetti";

export const ContactSection: React.FC = () => {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sentSuccess, setSentSuccess] = useState(false);

  const handleCopy = (text: string, key: string) => {
    navigator.clipboard.writeText(text);
    setCopiedKey(key);
    try {
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.8 },
        colors: ["#F59E0B", "#FBBF24", "#34D399"],
      });
    } catch (e) {}
    setTimeout(() => {
      setCopiedKey(null);
    }, 2000);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!senderEmail || !message) return;

    try {
      confetti({
        particleCount: 90,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#F59E0B", "#FBBF24", "#38BDF8", "#34D399"],
      });
    } catch (e) {}

    setSentSuccess(true);
    const subject = encodeURIComponent(`Portfolio Inquiry from ${senderName || "Recruiter"}`);
    const body = encodeURIComponent(message + `\n\nFrom: ${senderName} (${senderEmail})`);
    window.open(`mailto:${portfolioData.email}?subject=${subject}&body=${body}`);
  };

  return (
    <section id="contact" className="py-20 md:py-28 px-4 sm:px-6 max-w-6xl mx-auto relative z-10">
      {/* Section Header */}
      <div className="flex flex-col items-start gap-3 mb-12">
        <ShinyBadge color="amber" icon={<Mail className="w-3.5 h-3.5" />}>
          Direct Telemetry
        </ShinyBadge>
        <div className="flex flex-col sm:flex-row sm:items-baseline justify-between w-full gap-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Let&apos;s Build Together
          </h2>
          <p className="text-sm font-mono text-slate-400">
            // available for engineering roles, technical internships &amp; high-impact products
          </p>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left: Interactive contact.ts IDE File Window */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <GlassCard
            variant="vision"
            interactive
            tilt
            glowColor="blue"
            className="p-6 sm:p-7 border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-red-500/90" />
                <span className="w-3 h-3 rounded-full bg-amber-500/90" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/90" />
              </div>
              <span className="text-xs font-mono text-slate-300 font-semibold flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-sky-400" />
                contact.ts — TypeScript
              </span>
              <span className="text-[10px] font-mono text-slate-400">UTF-8</span>
            </div>

            {/* High-contrast Code Editor Well */}
            <div className="glass-vision-well rounded-2xl p-4 font-mono text-xs sm:text-sm text-slate-200 leading-relaxed shadow-inner border border-white/10 space-y-2">
              <div>
                <span className="text-purple-400">export const</span>{" "}
                <span className="text-amber-300">engineer</span>:{" "}
                <span className="text-cyan-400">ContactProfile</span> = {"{"}
              </div>

              {/* Email row */}
              <div className="pl-5 flex items-center justify-between group">
                <div>
                  <span className="text-sky-400">email</span>:{" "}
                  <a
                    href={`mailto:${portfolioData.email}`}
                    className="text-emerald-400 hover:underline font-medium"
                  >
                    &quot;{portfolioData.email}&quot;
                  </a>
                  ,
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.email, "email")}
                  className="px-2.5 py-0.5 rounded-full text-[10px] bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-1 border border-white/10 cursor-pointer"
                >
                  {copiedKey === "email" ? (
                    <span className="text-emerald-400 flex items-center gap-0.5 font-bold">
                      <Check className="w-3 h-3" /> copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-0.5">
                      <Copy className="w-3 h-3" /> copy
                    </span>
                  )}
                </button>
              </div>

              {/* Phone row */}
              <div className="pl-5 flex items-center justify-between group">
                <div>
                  <span className="text-sky-400">phone</span>:{" "}
                  <a href={`tel:${portfolioData.phone}`} className="text-emerald-400 hover:underline font-medium">
                    &quot;{portfolioData.phone}&quot;
                  </a>
                  ,
                </div>
                <button
                  onClick={() => handleCopy(portfolioData.phone, "phone")}
                  className="px-2.5 py-0.5 rounded-full text-[10px] bg-white/[0.08] hover:bg-white/[0.15] text-slate-300 hover:text-amber-300 transition-colors flex items-center gap-1 border border-white/10 cursor-pointer"
                >
                  {copiedKey === "phone" ? (
                    <span className="text-emerald-400 flex items-center gap-0.5 font-bold">
                      <Check className="w-3 h-3" /> copied
                    </span>
                  ) : (
                    <span className="flex items-center gap-0.5">
                      <Copy className="w-3 h-3" /> copy
                    </span>
                  )}
                </button>
              </div>

              {/* Location row */}
              <div className="pl-5">
                <span className="text-sky-400">location</span>:{" "}
                <span className="text-emerald-400">&quot;{portfolioData.location}&quot;</span>,
              </div>

              {/* GitHub row */}
              <div className="pl-5">
                <span className="text-sky-400">github</span>:{" "}
                <a
                  href={portfolioData.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  &quot;github.com/vashudev2006&quot;
                </a>
                ,
              </div>

              {/* LinkedIn row */}
              <div className="pl-5">
                <span className="text-sky-400">linkedin</span>:{" "}
                <a
                  href={portfolioData.links.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 hover:underline"
                >
                  &quot;linkedin.com/in/vashudev-kaushik-396315289&quot;
                </a>
                ,
              </div>

              <div>{"};"}</div>
            </div>

            {/* Quick Action Badges */}
            <div className="pt-4 flex flex-wrap items-center gap-2.5">
              <a
                href={portfolioData.links.email}
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white hover:text-amber-300 border border-white/15 backdrop-blur-xl transition-all shadow-sm"
              >
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <span>Compose Email</span>
              </a>
              <a
                href={portfolioData.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 text-xs font-mono font-semibold rounded-full bg-white/[0.08] hover:bg-white/[0.15] text-white hover:text-sky-300 border border-white/15 backdrop-blur-xl transition-all shadow-sm"
              >
                <LinkedinIcon className="w-3.5 h-3.5 text-sky-400" />
                <span>Connect on LinkedIn</span>
              </a>
            </div>
          </GlassCard>
        </div>

        {/* Right: Tactile Quick Message Form */}
        <div className="lg:col-span-6 flex flex-col gap-4">
          <GlassCard
            variant="vision"
            interactive={false}
            glowColor="amber"
            className="p-6 sm:p-7 border-white/15 shadow-[0_24px_60px_rgba(0,0,0,0.6)]"
          >
            <div className="flex items-center justify-between pb-3.5 border-b border-white/10 mb-4">
              <span className="text-sm font-mono font-bold text-white flex items-center gap-2">
                <Send className="w-4 h-4 text-amber-400" />
                Direct Communication Dispatch
              </span>
              <ShinyBadge color="emerald" pulse className="text-[10px]">
                Live Inbox
              </ShinyBadge>
            </div>

            {sentSuccess ? (
              <div className="glass-vision-well rounded-2xl p-6 text-center space-y-3 border border-emerald-500/40 bg-emerald-950/20">
                <div className="w-12 h-12 rounded-full bg-emerald-500/15 border border-emerald-400/40 mx-auto flex items-center justify-center text-emerald-400 shadow-lg">
                  <Check className="w-6 h-6 stroke-[2.5]" />
                </div>
                <h4 className="text-base font-bold text-white">Message Dispatched</h4>
                <p className="text-xs text-slate-300 max-w-sm mx-auto font-normal">
                  Your mail client has been opened with your message. You can also directly reach out at{" "}
                  <span className="text-amber-300 font-mono font-bold">{portfolioData.email}</span>.
                </p>
                <button
                  onClick={() => setSentSuccess(false)}
                  className="mt-2 px-5 py-2 rounded-full text-xs font-semibold text-white bg-white/[0.08] hover:bg-white/[0.15] border border-white/20 transition-colors cursor-pointer"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSendMessage} className="space-y-4 text-xs font-mono">
                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">Your Name or Organization</label>
                  <div className="glass-vision-well rounded-2xl px-4 py-3 border border-white/10">
                    <input
                      type="text"
                      required
                      placeholder="e.g. Alex (Engineering Lead)"
                      value={senderName}
                      onChange={(e) => setSenderName(e.target.value)}
                      className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none text-xs font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">Your Email</label>
                  <div className="glass-vision-well rounded-2xl px-4 py-3 border border-white/10">
                    <input
                      type="email"
                      required
                      placeholder="alex@company.com"
                      value={senderEmail}
                      onChange={(e) => setSenderEmail(e.target.value)}
                      className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none text-xs font-mono"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-slate-300 font-medium mb-1.5">Project Scope / Role Details</label>
                  <div className="glass-vision-well rounded-2xl px-4 py-3 border border-white/10">
                    <textarea
                      required
                      rows={4}
                      placeholder="Discuss an internship role, 3D WebGL project, or technical collaboration..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      className="w-full bg-transparent text-white placeholder-slate-400 focus:outline-none text-xs font-mono resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-[0_4px_24px_rgba(245,158,11,0.4)] hover:shadow-[0_6px_32px_rgba(245,158,11,0.6)] border border-amber-300/40 hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer select-none"
                >
                  <Send className="w-4 h-4 stroke-[2.5]" />
                  <span>Send Message</span>
                </button>
              </form>
            )}
          </GlassCard>
        </div>
      </div>
    </section>
  );
};
