import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import HeroSection from "@/components/sections/HeroSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import EducationSection from "@/components/sections/EducationSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white">
      <ScrollProgress />
      <Navbar />
      <main>
        <HeroSection />
        {/* Section divider */}
        <div className="section-divider" />
        <ProjectsSection />
        <div className="section-divider" />
        <SkillsSection />
        <div className="section-divider" />
        <ExperienceSection />
        <div className="section-divider" />
        <EducationSection />
        <div className="section-divider" />
        <ContactSection />
      </main>
    </div>
  );
}
