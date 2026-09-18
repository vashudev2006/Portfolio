export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  subtitle: string;
  description: string;
  tags: string[];
  metrics: { label: string; value: string }[];
  bulletPoints: string[];
  featured: boolean;
  demoUrl?: string;
  githubUrl?: string;
  type: "fullstack" | "3d" | "ai";
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  type: string;
  description: string;
  highlights: string[];
  badge?: string;
}

export interface SkillCategory {
  title: string;
  key: string;
  skills: string[];
}

export interface CertificationItem {
  name: string;
  issuer: string;
  year?: string;
  badgeText?: string;
  featured?: boolean;
}

export const portfolioData = {
  name: "Vashudev",
  title: "Frontend AI Engineer & Full-Stack Product Developer",
  status: "Open to internships & frontend / AI-product roles",
  bio: "Frontend AI engineer building interactive, explainable web products across real-time 3D and data-informed automation. Combines React-based UI work, secure API integration, and full-stack delivery from prototype through deployment.",
  location: "New Delhi, India",
  email: "kaushikvashudev8920@gmail.com",
  phone: "+91 9354235038",
  links: {
    portfolio: "https://vashudev-kaushik.vercel.app/",
    github: "https://github.com/vashudev2006",
    linkedin: "https://www.linkedin.com/in/vashudev-kaushik-396315289",
    email: "mailto:kaushikvashudev8920@gmail.com",
    phone: "tel:+919354235038",
  },
  stats: [
    { label: "Core Focus", value: "React & 3D WebGL" },
    { label: "Anthropic AI Certs", value: "20+" },
    { label: "Full-Stack APIs", value: "15+ REST Routes" },
    { label: "Graduation", value: "B.Tech '27" },
  ],
  projects: [
    {
      id: "psych-plus",
      title: "Psych+ Healthcare Platform",
      category: "Full-Stack & Desktop Application",
      subtitle: "Multi-role tele-health clinical ecosystem with live consultations, dashboards & RBAC",
      description:
        "Delivered a multi-role React web app and Electron desktop application built on Node.js and Express.js, covering patient, doctor, and admin workflows including medical profiles, real-time appointment scheduling, clinical approvals, payments, and protected chat.",
      tags: ["React", "Node.js", "Express.js", "MongoDB", "Firebase", "Electron", "Vercel", "Railway"],
      type: "fullstack",
      featured: true,
      metrics: [
        { label: "API Endpoints", value: "15 REST" },
        { label: "Platforms", value: "Web & Electron" },
        { label: "Security", value: "RBAC Protected" },
        { label: "Delivery", value: "Production" },
      ],
      bulletPoints: [
        "Architected a unified codebase driving both responsive web clients and cross-platform Electron desktop software.",
        "Implemented 15 REST API routes with Express.js and MongoDB (Mongoose), handling authentication and encrypted clinical data.",
        "Engineered role-based access control (RBAC), Firebase real-time notifications, and automated status emails.",
        "Deployed across Vercel, Render, and Railway with resilient continuous deployment pipelines.",
      ],
      githubUrl: "https://github.com/vashudev2006",
      demoUrl: "https://psych-plus.vercel.app",
    },
    {
      id: "glb-viewer",
      title: "Drag-and-Drop GLB Viewer",
      category: "Interactive 3D WebGL & Shaders",
      subtitle: "Browser-based 3D scene with orbit physics, GLSL shaders and real-time material inspection",
      description:
        "Created an interactive browser-based GLB viewer in React using React Three Fiber and custom GLSL shaders, with stable orbit controls, mesh inspector, and instantaneous material adjustment controls.",
      tags: ["React", "React Three Fiber", "Three.js", "GLSL", "3D Interaction", "WebGL"],
      type: "3d",
      featured: true,
      metrics: [
        { label: "FPS Target", value: "60 FPS Smooth" },
        { label: "Shaders", value: "Custom GLSL" },
        { label: "Input", value: "Local Drag & Drop" },
        { label: "Controls", value: "Orbit & Mesh" },
      ],
      bulletPoints: [
        "Built responsive 3D viewport using React Three Fiber with custom lighting rigs, shadow maps, and camera presets.",
        "Crafted custom GLSL shader pipelines to inspect material properties, normals, roughness, and light reflections live.",
        "Kept 3D controls and UI state synchronized within the React component tree for instantaneous parametric feedback.",
        "Zero-install local file drop workflow with memory-efficient client-side blob buffer management.",
      ],
      githubUrl: "https://github.com/vashudev2006",
      demoUrl: "https://fe-aa2-3d-viewer.vercel.app",
    },
  ] as ProjectItem[],
  experience: [
    {
      role: "AI Engineering Intern",
      company: "FlyRank AI Internship",
      period: "July 2026 – September 2026",
      type: "Remote · Self-paced",
      badge: "AI Track",
      description:
        "Completed Front-End AI Engineering and AI Fluency tracks, creating responsive, AI-assisted web projects with modern front-end frameworks and generative integration.",
      highlights: [
        "Explored generative prompt workflows and AI-assisted front-end development patterns.",
        "Built dynamic UI interactions connecting LLM-driven endpoints with responsive state.",
      ],
    },
    {
      role: "Software Engineering Intern",
      company: "Decimal Technologies Private Limited",
      period: "June 2025 – July 2025",
      type: "Onsite / Technical",
      badge: "Industry Tech",
      description:
        "Completed a technical internship gaining direct hands-on exposure to enterprise engineering practices, version control workflows, and production software standards.",
      highlights: [
        "Engaged in agile sprint cycles, code reviews, and structured software testing.",
        "Gained practical insights into scalable enterprise architecture and API design.",
      ],
    },
  ] as ExperienceItem[],
  skillCategories: [
    {
      title: "Frontend & 3D Interaction",
      key: "frontend",
      skills: ["React", "Next.js", "Vite", "React Router", "JavaScript", "TypeScript", "React Three Fiber", "GLSL", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "Responsive UI"],
    },
    {
      title: "Backend, Data & Cloud",
      key: "backend",
      skills: ["Node.js", "Express.js", "REST APIs", "MongoDB", "Mongoose", "Firebase", "SQL", "Electron", "Render", "Railway", "Vercel"],
    },
    {
      title: "AI & Developer Tools",
      key: "ai_tools",
      skills: ["Generative AI", "Prompt Engineering", "AI-assisted Workflows", "Python", "Google Search Console", "GA4", "Git", "GitHub", "Postman", "VS Code"],
    },
    {
      title: "Engineering & Core CS",
      key: "core_cs",
      skills: ["Authentication & RBAC", "Data Structures", "OOP", "DBMS", "Operating Systems", "Cybersecurity", "Java", "C", "C++", "C#"],
    },
  ] as SkillCategory[],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      specialization: "IoT with Cybersecurity & Blockchain Technology",
      institution: "Dronacharya College of Engineering, Gurugram",
      period: "Expected 2027",
      status: "In Progress",
    },
    {
      degree: "Senior Secondary (CBSE) — Science PCMB",
      specialization: "Physics, Chemistry, Mathematics, Biology (88%)",
      institution: "Rao Tula Ram Govt. Sarvodaya Vidyalaya, Surehra, New Delhi",
      period: "Secondary: 91%",
      status: "Completed",
    },
  ],
  certifications: [
    {
      name: "20 Anthropic Academy AI Fluency Certificates",
      issuer: "Anthropic Academy",
      year: "2026",
      badgeText: "20 Certs",
      featured: true,
    },
    {
      name: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
      issuer: "Oracle",
      year: "2025",
      badgeText: "Associate",
      featured: true,
    },
    {
      name: "IBM SkillsBuild: Use Generative AI for Software Development",
      issuer: "IBM SkillsBuild",
      year: "2025",
      badgeText: "GenAI",
      featured: true,
    },
    {
      name: "Full Stack Web Development with MERN",
      issuer: "SkillForge Academy",
      year: "2025",
      badgeText: "FullStack",
      featured: true,
    },
    {
      name: "Information Technology Specialist",
      issuer: "Infosys Springboard",
      year: "2026",
      badgeText: "IT",
    },
    {
      name: "C Programming Certificate",
      issuer: "IIT Bombay Spoken Tutorial Project",
      year: "2024",
      badgeText: "IIT Bombay",
    },
    {
      name: "Networking Basics",
      issuer: "Cisco Networking Academy",
      year: "2025",
      badgeText: "Cisco",
    },
    {
      name: "Cyber Security Workshop",
      issuer: "Thetechunique Academy",
      year: "2024",
      badgeText: "Security",
    },
  ] as CertificationItem[],
  strengths: [
    "Problem Solving",
    "Analytical Thinking",
    "Self-Learning",
    "Teamwork",
    "Technical Documentation",
    "Time Management",
    "Adaptability",
    "Rapid Prototyping",
  ],
};
