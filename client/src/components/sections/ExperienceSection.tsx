/*
 * Design: "Midnight Circuit" — Dark Elegance with Luminous Accents
 * Experience: Vertical timeline with glowing dots, glassmorphism cards
 * Blue LED markers, staggered fade-in animation
 */
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { Briefcase, Users } from "lucide-react";

interface Experience {
  type: "work" | "volunteer";
  role: string;
  organization: string;
  location: string;
  period: string;
  responsibilities: string[];
}

const experiences: Experience[] = [
  {
    type: "work",
    role: "IT Technician",
    organization: "Allied Business Relocations",
    location: "Dandenong South, VIC",
    period: "2025 – Present",
    responsibilities: [
      "Supported 50+ IT relocations, disconnecting, moving, and reconnecting hardware and network devices",
      "Set up 100+ desktops, laptops, and peripherals with full connectivity and functionality",
      "Worked with large IT clients including corporate offices and government departments, ensuring minimal downtime",
    ],
  },
  {
    type: "volunteer",
    role: "Project Officer (Technical Lead)",
    organization: "Enactus Monash",
    location: "Monash University, VIC",
    period: "Aug 2025 – Present",
    responsibilities: [
      "Operated as Technical Lead, coordinating a team of developers on project tasks",
      "Planned and oversaw a full-stack application covering frontend, backend, deployment, and CI/CD",
      "Communicated with clients to gather requirements and deliver a medical comprehension application",
    ],
  },
  {
    type: "volunteer",
    role: "Vice President",
    organization: "Korean Appreciation Student Association",
    location: "Monash University, VIC",
    period: "Mar 2025 – Present",
    responsibilities: [
      "Led events with 50+ attendees by coordinating events, marketing, and sponsorship teams",
      "Collaborated with 15+ sponsors and maintained professional relationships with venues",
      "Organised and facilitated meetings to align a club of 300+ members across all sub-teams",
    ],
  },
  {
    type: "work",
    role: "Admin Officer & Accounts Payable",
    organization: "Prompt Care",
    location: "Kew, VIC",
    period: "Jun 2023 – Dec 2025",
    responsibilities: [
      "Managed incoming calls, documented essential information, and coordinated personnel scheduling",
      "Communicated and collaborated with 500 staff members and supported 2,500 clients across Australia",
      "Conducted daily data entry for approximately 60 invoices with attention to compliance and accuracy",
    ],
  },
  {
    type: "volunteer",
    role: "Secretary",
    organization: "Korean Appreciation Student Association",
    location: "Monash University, VIC",
    period: "Mar 2023 – Mar 2024",
    responsibilities: [
      "Took 2 weekly meetings, documenting minutes for executive and event meetings",
      "Led events with 50+ attendees, managing marketing and sponsorship teams",
      "Managed administrative operations for 300+ members, maintaining records and engagement",
    ],
  },
];

function TimelineItem({ exp, index }: { exp: Experience; index: number }) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`relative flex gap-6 md:gap-8 transition-all duration-700 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      {/* Timeline line and dot */}
      <div className="flex flex-col items-center shrink-0">
        <div className="timeline-dot shrink-0" />
        {index < experiences.length - 1 && (
          <div className="w-[2px] flex-1 bg-gradient-to-b from-[rgba(0,123,255,0.3)] to-[rgba(0,123,255,0.05)] mt-2" />
        )}
      </div>

      {/* Content card */}
      <div className="glass-card rounded-xl p-5 md:p-6 mb-6 flex-1">
        <div className="flex items-start justify-between flex-wrap gap-2 mb-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              {exp.type === "work" ? (
                <Briefcase size={14} className="text-[#007BFF]" />
              ) : (
                <Users size={14} className="text-[#007BFF]" />
              )}
              <span className="text-xs font-mono text-[#007BFF] uppercase tracking-wider">
                {exp.type === "work" ? "Work" : "Leadership"}
              </span>
            </div>
            <h3 className="font-display text-lg font-semibold text-white">{exp.role}</h3>
            <p className="text-[#A0A0A0] text-sm">
              {exp.organization} — {exp.location}
            </p>
          </div>
          <span className="text-xs font-mono text-[#666] bg-[rgba(255,255,255,0.03)] px-3 py-1 rounded-full border border-[rgba(255,255,255,0.06)] whitespace-nowrap">
            {exp.period}
          </span>
        </div>

        <ul className="space-y-2">
          {exp.responsibilities.map((r, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-[#888] leading-relaxed">
              <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[rgba(0,123,255,0.5)] shrink-0" />
              {r}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function ExperienceSection() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        label="// Experience"
        title="Where I've Contributed"
        description="Professional roles and leadership positions that shaped my skills in technology, teamwork, and project management."
      />

      <div className="max-w-3xl">
        {experiences.map((exp, i) => (
          <TimelineItem key={`${exp.role}-${exp.organization}`} exp={exp} index={i} />
        ))}
      </div>
    </SectionWrapper>
  );
}
