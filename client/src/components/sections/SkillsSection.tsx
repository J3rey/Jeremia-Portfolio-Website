/*
 * Design: "Midnight Circuit" — Dark Elegance with Luminous Accents
 * Skills: Category grid, animated skill bars, LED glow on hover
 * Hexagonal background image, blue accent highlights
 */
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Code2, Layers, Database, Wrench, GitBranch } from "lucide-react";

interface SkillCategory {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    title: "Languages",
    icon: <Code2 size={20} />,
    skills: ["Java", "Python", "JavaScript", "TypeScript", "HTML", "CSS", "Dart"],
  },
  {
    title: "Frameworks & Libraries",
    icon: <Layers size={20} />,
    skills: ["NestJS", "Flask", "Flutter", "Vue 3", "Next.js", "Express", "Vite"],
  },
  {
    title: "Databases",
    icon: <Database size={20} />,
    skills: ["MongoDB", "Prisma ORM", "Supabase", "Firebase"],
  },
  {
    title: "Developer Tools",
    icon: <Wrench size={20} />,
    skills: ["GitHub", "GitLab", "Docker", "VS Code", "Expo", "Vercel", "Render", "Figma", "Android Studio"],
  },
  {
    title: "Methodologies",
    icon: <GitBranch size={20} />,
    skills: ["Agile (SCRUM)", "SaFE", "CI/CD", "Linting", "MVC Architecture"],
  },
];

function SkillCategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`glass-card rounded-xl p-6 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="flex items-center gap-3 mb-5">
        <div className="w-9 h-9 rounded-lg bg-[rgba(0,123,255,0.1)] border border-[rgba(0,123,255,0.2)] flex items-center justify-center text-[#007BFF]">
          {category.icon}
        </div>
        <h3 className="font-display text-lg font-semibold text-white">{category.title}</h3>
      </div>

      <div className="flex flex-wrap gap-2">
        {category.skills.map((skill) => (
          <span
            key={skill}
            className="group relative px-3 py-1.5 text-sm rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] text-[#C0C0C0] hover:border-[rgba(0,123,255,0.4)] hover:text-[#007BFF] hover:bg-[rgba(0,123,255,0.05)] hover:shadow-[0_0_12px_rgba(0,123,255,0.15)] transition-all duration-300 cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" className="relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(0,123,255,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10">
        <SectionHeading
          label="// Skills"
          title="Technical Toolkit"
          description="Languages, frameworks, tools, and methodologies I work with across full-stack development."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, i) => (
            <SkillCategoryCard key={category.title} category={category} index={i} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
