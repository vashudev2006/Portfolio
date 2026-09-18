import React from "react";
import { FloatingLiquidOrbs } from "@/components/ui/FloatingLiquidOrbs";
import { HeaderNav } from "@/components/layout/HeaderNav";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsMatrix } from "@/components/sections/SkillsMatrix";
import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { CertificationsSection } from "@/components/sections/CertificationsSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen bg-[#090C15] text-white overflow-x-hidden">
      {/* 1. Organic Floating Fluid Orbs (Framer Motion Background Physics) */}
      <FloatingLiquidOrbs />

      {/* 2. Floating Dynamic Island Dock Navigation */}
      <HeaderNav />

      {/* 3. Hero Section (Whoami Terminal, 3D Tilt Card & Metrics) */}
      <HeroSection />

      {/* 4. Featured Projects (Psych+ Healthcare & Drag-and-Drop 3D GLB Viewer) */}
      <ProjectsSection />

      {/* 5. Technical Skills Matrix (Categorized Filter & Inset Search Well) */}
      <SkillsMatrix />

      {/* 6. Professional Experience & Academic Timeline */}
      <ExperienceSection />

      {/* 7. Certifications Grid & Anthropic 20 AI Fluency Showcase */}
      <CertificationsSection />

      {/* 8. Interactive contact.ts IDE Terminal & Message Dispatch */}
      <ContactSection />

      {/* 9. Neumorphic Footer & System Telemetry */}
      <Footer />
    </main>
  );
}
