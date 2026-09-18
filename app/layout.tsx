import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#090C15",
};

export const metadata: Metadata = {
  title: "Vashudev — Frontend AI Engineer | VisionOS Liquid Glass Portfolio",
  description:
    "VisionOS Liquid Glass interactive UI · Apple-inspired 3D Motion. Specializing in 3D WebGL, AI integrations, and high-performance web products.",
  keywords: [
    "Vashudev",
    "Frontend AI Engineer",
    "Full-Stack Developer",
    "React",
    "React Three Fiber",
    "GLSL",
    "Next.js",
    "Tailwind CSS",
    "VisionOS",
    "Liquid Glass UI",
  ],
  authors: [{ name: "Vashudev" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrainsMono.variable} scroll-smooth dark`}
    >
      <body className="min-h-screen bg-[#090C15] text-white font-sans selection:bg-amber-400/30 selection:text-amber-200">
        {children}
      </body>
    </html>
  );
}
