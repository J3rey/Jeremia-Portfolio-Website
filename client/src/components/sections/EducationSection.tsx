/*
 * Design: "Midnight Circuit" — Dark Elegance with Luminous Accents
 * Education: Clean cards with blue accent highlights
 */
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { GraduationCap, School } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  location: string;
  period: string;
  icon: React.ReactNode;
  details?: string[];
}

const educationData: Education[] = [
  {
    degree: "Bachelor of Software Engineering (Honours)",
    institution: "Monash University",
    location: "Clayton, VIC",
    period: "Feb 2023 – Current",
    icon: <GraduationCap size={22} />,
    details: [
      "Full-stack development, software architecture, and agile methodologies",
      "Active in student clubs: KASA (Vice President), Enactus (Technical Lead)",
    ],
  },
  {
    degree: "High School Diploma",
    institution: "Balwyn High School",
    location: "Balwyn North, VIC",
    period: "Feb 2017 – Feb 2022",
    icon: <School size={22} />,
  },
];

const certifications = [
  "Working with Children Check (WWCC)",
  "First Aid Certification",
  "CPR Certification",
  "RSA (Responsible Service of Alcohol)",
];

export default function EducationSection() {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <SectionWrapper id="education" className="relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(0,123,255,0.04)_0%,transparent_60%)]" />

      <div className="relative z-10">
        <SectionHeading
          label="// Education"
          title="Academic Background"
        />

        <div
          ref={ref}
          className={`space-y-6 max-w-3xl transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {educationData.map((edu, i) => (
            <div
              key={edu.institution}
              className="glass-card rounded-xl p-6 md:p-8"
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[rgba(0,123,255,0.1)] border border-[rgba(0,123,255,0.2)] flex items-center justify-center text-[#007BFF] shrink-0">
                  {edu.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-start justify-between flex-wrap gap-2">
                    <div>
                      <h3 className="font-display text-lg md:text-xl font-semibold text-white">
                        {edu.degree}
                      </h3>
                      <p className="text-[#A0A0A0] text-sm mt-1">
                        {edu.institution} — {edu.location}
                      </p>
                    </div>
                    <span className="text-xs font-mono text-[#007BFF] bg-[rgba(0,123,255,0.05)] px-3 py-1 rounded-full border border-[rgba(0,123,255,0.2)] whitespace-nowrap">
                      {edu.period}
                    </span>
                  </div>
                  {edu.details && (
                    <ul className="mt-4 space-y-2">
                      {edu.details.map((d, j) => (
                        <li key={j} className="flex items-start gap-2 text-sm text-[#888]">
                          <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#007BFF] shrink-0 shadow-[0_0_4px_rgba(0,123,255,0.5)]" />
                          {d}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>
          ))}

          {/* Certifications */}
          <div className="glass-card rounded-xl p-6 md:p-8">
            <h3 className="font-display text-lg font-semibold text-white mb-4">
              Certifications & Additional
            </h3>
            <div className="flex flex-wrap gap-2">
              {certifications.map((cert) => (
                <span
                  key={cert}
                  className="px-3 py-1.5 text-sm rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] text-[#A0A0A0] hover:border-[rgba(0,123,255,0.3)] hover:text-[#007BFF] transition-all duration-300"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
