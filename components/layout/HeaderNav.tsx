"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Download, Menu, X } from "lucide-react";
import { ShinyBadge } from "@/components/ui/ShinyBadge";
import confetti from "canvas-confetti";

export const HeaderNav: React.FC = () => {
  const [activeSection, setActiveSection] = useState("profile");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { label: "Profile", href: "#profile", id: "profile" },
    { label: "Projects", href: "#projects", id: "projects" },
    { label: "Skills", href: "#skills", id: "skills" },
    { label: "Experience", href: "#experience", id: "experience" },
    { label: "Credentials", href: "#certifications", id: "certifications" },
    { label: "Contact", href: "#contact", id: "contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 220;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const triggerCelebration = () => {
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.15 },
        colors: ["#F59E0B", "#FBBF24", "#38BDF8", "#34D399"],
      });
    } catch (e) {}
  };

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 flex items-center justify-center p-4 sm:p-5 pointer-events-none">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className={`pointer-events-auto flex items-center justify-between gap-4 sm:gap-6 px-4 py-2.5 rounded-full transition-all duration-300 ${
            scrolled
              ? "glass-vision bg-[#090C15]/80 shadow-[0_20px_50px_rgba(0,0,0,0.65)] border-white/20 backdrop-blur-3xl"
              : "glass-vision bg-[#090C15]/50 shadow-[0_12px_36px_rgba(0,0,0,0.45)] border-white/15 backdrop-blur-2xl"
          }`}
          style={{ maxWidth: "1080px", width: "100%" }}
        >
          {/* Brand Monogram */}
          <a
            href="#profile"
            className="flex items-center gap-2.5 group cursor-pointer text-decoration-none"
          >
            <div className="w-8 h-8 rounded-xl bg-white/[0.08] border border-white/20 flex items-center justify-center group-hover:border-amber-400/60 transition-colors shadow-sm">
              <span className="font-mono text-xs font-bold text-amber-400">VK</span>
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-semibold text-white tracking-tight flex items-center gap-1.5">
                Vashudev
                <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              </span>
              <span className="text-[10px] font-mono text-slate-400 -mt-0.5">
                Frontend AI Engineer
              </span>
            </div>
          </a>

          {/* Center Navigation Links (Desktop) */}
          <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/[0.04] border border-white/10">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={item.href}
                  className={`relative px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 text-decoration-none ${
                    isActive
                      ? "text-slate-950 font-bold"
                      : "text-slate-300 hover:text-white"
                  }`}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeTabBackground"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-amber-400 via-amber-400 to-amber-500 shadow-[0_2px_14px_rgba(245,158,11,0.5)]"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span className="relative z-10">{item.label}</span>
                </a>
              );
            })}
          </nav>

          {/* Right Action: Live Status & Native Download CV Button */}
          <div className="flex items-center gap-3">
            <div className="hidden lg:block">
              <ShinyBadge color="emerald" pulse className="text-[11px] py-0.5">
                Open to Internships
              </ShinyBadge>
            </div>

            {/* Direct Native PDF Download Anchor */}
            <a
              href="/api/resume"
              download="Vashudev_Kaushik_CV.pdf"
              onClick={triggerCelebration}
              className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 shadow-[0_4px_20px_rgba(245,158,11,0.4)] hover:shadow-[0_6px_28px_rgba(245,158,11,0.55)] border border-amber-300/40 hover:scale-105 active:scale-95 transition-transform"
            >
              <Download className="w-3.5 h-3.5 stroke-[2.5]" />
              <span>Resume PDF</span>
            </a>

            {/* Mobile menu toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden w-8 h-8 rounded-lg bg-white/[0.08] border border-white/15 flex items-center justify-center text-slate-300 hover:text-white cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </motion.div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-x-4 top-20 z-40 p-5 rounded-3xl glass-vision bg-[#090C15]/95 border border-white/20 shadow-2xl md:hidden flex flex-col gap-3 backdrop-blur-3xl"
          >
            <div className="flex items-center justify-between pb-3 border-b border-white/10">
              <span className="text-xs font-mono text-slate-400">Navigation</span>
              <ShinyBadge color="emerald" pulse className="text-[10px]">
                Available
              </ShinyBadge>
            </div>

            <div className="flex flex-col gap-2">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`px-3 py-2 text-sm rounded-xl transition-colors ${
                    activeSection === item.id
                      ? "bg-amber-400/20 text-amber-300 font-bold border border-amber-400/30"
                      : "text-slate-300 hover:bg-white/5"
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
              <a
                href="/api/resume"
                download="Vashudev_Kaushik_CV.pdf"
                onClick={() => {
                  setMobileMenuOpen(false);
                  triggerCelebration();
                }}
                className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-sm font-bold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 shadow-[0_4px_20px_rgba(245,158,11,0.4)] w-full cursor-pointer"
              >
                <Download className="w-4 h-4 stroke-[2.5]" />
                <span>Download Resume PDF</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
