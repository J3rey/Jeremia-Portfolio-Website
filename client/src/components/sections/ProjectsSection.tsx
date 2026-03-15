/*
 * Design: "Midnight Circuit" — Dark Elegance with Luminous Accents
 * Projects: Glassmorphism cards, LED border glow, staggered fade-in
 * Tech stack badges with blue glow on hover
 */
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ExternalLink, Utensils, Heart, Bot, Gamepad2, Car, BookOpen } from "lucide-react";

interface Project {
  title: string;
  year: string;
  description: string;
  techStack: string[];
  highlights: string[];
  icon: React.ReactNode;
  link?: string;
}

const projects: Project[] = [
  {
    title: "MedGuide",
    year: "2026",
    description:
      "Cross-platform mobile app for scanning medicine labels and interacting with an AI chatbot for verified medical information. Features multilingual support and OCR-powered text extraction.",
    techStack: ["Next.js", "Supabase", "TypeScript", "Gemini API", "Flutter", "NestJS", "Prisma", "Vercel", "Render"],
    highlights: [
      "Integrated Gemini API OCR for medicine label text extraction",
      "Built chatbot providing strict, database-verified responses",
      "Implemented CI/CD with GitHub Pipelines for automated deployment",
      "Added multilingual support with dynamic language switching",
    ],
    icon: <Heart size={20} />,
    link: "https://github.com/J3rey/MedGuide",
  },
  {
    title: "FindingNibbles",
    year: "2025",
    description:
      "AI-powered dining companion that analyses menus, recommends meals, and creates recipes from pantry items. Simplifies dining decisions while tracking nutrition goals.",
    techStack: ["NestJS", "Prisma", "MongoDB", "Flutter", "Docker", "LLM API", "Figma"],
    highlights: [
      "Developed cross-platform mobile app for iOS and Android",
      "Integrated LLM API for personalised recipe generation",
      "Built calorie tracking and menu scanning features",
      "Deployed backend using Docker for consistent environments",
    ],
    icon: <Utensils size={20} />,
    link: "https://github.com/Monash-FIT3170/2025W2-FindingNibbles",
  },
  {
    title: "SafeSpace",
    year: "2025",
    description:
      "Web platform supporting mental wellbeing through personalised AI-driven activities, mood tracking, journalling, and a real-time donation dashboard.",
    techStack: ["Vue 3", "Vite", "Node.js", "Express", "Firebase"],
    highlights: [
      "Generates personalised daily mental health activities",
      "Helps users find nearby mental health services",
      "Real-time donation dashboard and mood tracking",
    ],
    icon: <Heart size={20} />,
    link: "https://github.com/J3rey/SafeSpace",
  },
  {
    title: "KASA Calendar Bot",
    year: "2025",
    description:
      "Custom automation bot for the Korean Appreciation Student Association that sends event reminders and department-specific deadline notifications to keep the club organised.",
    techStack: ["JavaScript", "TypeScript", "Node.js"],
    highlights: [
      "Automated event reminders for 300+ club members",
      "Custom department-specific deadline notifications",
      "Streamlined club calendar management",
    ],
    icon: <Bot size={20} />,
    link: "https://github.com/J3rey/Discord-KASA-Calender-Bot",
  },
  {
    title: "Santorini Board Game",
    year: "2024",
    description:
      "Prototype digital board game built with Java Swing and MVC architecture, featuring god powers, tutorial mode, and a timer system for dynamic gameplay.",
    techStack: ["Java", "Swing", "MVC"],
    highlights: [
      "Implemented god powers gameplay extension",
      "Built tutorial mode and timer system",
      "Applied MVC architecture for clean code structure",
    ],
    icon: <Gamepad2 size={20} />,
  },
  {
    title: "Parking Sign Scanner",
    year: "2024",
    description:
      "Hackathon project that deciphers Australia's confusing parking signs using AI. Features built-in translation for tourists and new drivers in multiple languages.",
    techStack: ["Flask", "Python", "MongoDB", "Gemini API", "HTML/CSS"],
    highlights: [
      "AI-powered sign reading with Gemini API",
      "Multi-language translation for tourists",
      "Currently reworking with improved UX and accuracy",
    ],
    icon: <Car size={20} />,
  },
  {
    title: "Git Basics Handbook",
    year: "2025",
    description:
      "Beginner-friendly Git guide covering essential commands like add, commit, branch, and rebase. Shared with friends and peers new to programming.",
    techStack: ["GitBook", "Markdown"],
    highlights: [
      "Covers must-know Git workflows",
      "Designed for absolute beginners",
    ],
    icon: <BookOpen size={20} />,
  },
];

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  const cardContent = (
    <>
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-lg bg-[rgba(0,123,255,0.1)] border border-[rgba(0,123,255,0.2)] flex items-center justify-center text-[#007BFF]">
            {project.icon}
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold text-white">{project.title}</h3>
            <span className="text-xs font-mono text-[#007BFF] tracking-wide">{project.year}</span>
          </div>
        </div>
        {project.link && (
          <span className="text-[#555] group-hover:text-[#007BFF] transition-colors">
            <ExternalLink size={18} />
          </span>
        )}
      </div>

      <p className="text-[#A0A0A0] text-sm leading-relaxed mb-5">{project.description}</p>

      <ul className="space-y-2 mb-5">
        {project.highlights.map((h, i) => (
          <li key={i} className="flex items-start gap-2 text-sm text-[#888]">
            <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#007BFF] shrink-0 shadow-[0_0_4px_rgba(0,123,255,0.5)]" />
            {h}
          </li>
        ))}
      </ul>

      <div className="flex flex-wrap gap-2">
        {project.techStack.map((tech) => (
          <span
            key={tech}
            className="px-3 py-1 text-xs font-mono rounded-full border border-[rgba(0,123,255,0.2)] text-[#007BFF] bg-[rgba(0,123,255,0.05)] hover:border-[rgba(0,123,255,0.5)] hover:shadow-[0_0_8px_rgba(0,123,255,0.2)] transition-all duration-300"
          >
            {tech}
          </span>
        ))}
      </div>
    </>
  );

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {project.link ? (
        <a
          href={project.link}
          target="_blank"
          rel="noopener noreferrer"
          className="block glass-card rounded-xl p-6 md:p-8 group hover:border-[rgba(0,123,255,0.4)] hover:shadow-[0_0_20px_rgba(0,123,255,0.1)] transition-all duration-300"
        >
          {cardContent}
        </a>
      ) : (
        <div className="glass-card rounded-xl p-6 md:p-8">
          {cardContent}
        </div>
      )}
    </div>
  );
}

export default function ProjectsSection() {
  return (
    <SectionWrapper id="projects">
      <SectionHeading
        label="// Projects"
        title="What I've Built"
        description="A collection of projects spanning full-stack applications, AI-powered tools, and collaborative software."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
