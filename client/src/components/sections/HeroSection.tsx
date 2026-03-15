/*
 * Design: "Midnight Circuit" — Dark Elegance with Luminous Accents
 * Hero: Full-screen, circuit board background, typing effect subheadline
 * Radial blue gradient behind CTA, social links with LED glow
 */
import { useTypingEffect } from "@/hooks/useTypingEffect";
import { Github, Linkedin, FileText, ChevronDown } from "lucide-react";

const HERO_BG =
  "https://d2xsxph8kpxj0f.cloudfront.net/310519663298019635/hcns6TsFEmpCFpUru3EAVm/hero-bg-EgskXs5ezkSBvqaAMRZKgP.webp";

export default function HeroSection() {
  const { displayedText, isComplete } = useTypingEffect(
    "I build full-stack projects, AI-powered tools, and modern web applications.",
    35,
    1200
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${HERO_BG})` }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A0A0A]/75" />
      {/* Radial glow behind content */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,123,255,0.08)_0%,transparent_70%)]" />

      <div className="relative z-10 container text-center px-4">
        {/* Greeting label */}
        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 rounded-full border border-[rgba(0,123,255,0.25)] bg-[rgba(0,123,255,0.05)] backdrop-blur-sm">
          <span className="w-2 h-2 rounded-full bg-[#007BFF] shadow-[0_0_8px_rgba(0,123,255,0.6)]" />
          <span className="text-sm font-mono text-[#A0A0A0] tracking-wide">
            Available for opportunities
          </span>
        </div>

        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 max-w-4xl mx-auto">
          Hi, I'm{" "}
          <span className="text-[#007BFF] led-glow-text">Jeremia Yovinus</span>
        </h1>

        <p className="text-lg md:text-xl text-[#C0C0C0] mb-2 font-display font-light">
          Software Engineering Student at{" "}
          <span className="text-white font-medium">Monash University</span>
        </p>

        {/* Typing subheadline */}
        <p className="text-base md:text-lg text-[#888] mb-10 h-8 font-mono">
          <span>{displayedText}</span>
          {!isComplete && <span className="typing-cursor" />}
        </p>

        {/* CTA buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            onClick={e => {
              e.preventDefault();
              document
                .querySelector("#projects")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="led-button led-pulse px-8 py-3 rounded-lg font-medium text-base"
          >
            View Projects
          </a>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="led-button-outline px-8 py-3 rounded-lg font-medium text-base"
          >
            Get In Touch
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-6">
          <a
            href="https://github.com/J3rey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#666] hover:text-[#007BFF] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,123,255,0.5)]"
            aria-label="GitHub"
          >
            <Github size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/jeremia-yovinus/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#666] hover:text-[#007BFF] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,123,255,0.5)]"
            aria-label="LinkedIn"
          >
            <Linkedin size={22} />
          </a>
          <a
            href="#contact"
            onClick={e => {
              e.preventDefault();
              document
                .querySelector("#contact")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-[#666] hover:text-[#007BFF] transition-all duration-300 hover:drop-shadow-[0_0_8px_rgba(0,123,255,0.5)]"
            aria-label="Resume"
          >
            <FileText size={22} />
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <a
          href="#projects"
          onClick={e => {
            e.preventDefault();
            document
              .querySelector("#projects")
              ?.scrollIntoView({ behavior: "smooth" });
          }}
          className="flex flex-col items-center gap-2 text-[#555] hover:text-[#007BFF] transition-colors"
        >
          <span className="text-xs font-mono tracking-widest uppercase">
            Scroll
          </span>
          <ChevronDown size={18} className="animate-bounce" />
        </a>
      </div>
    </section>
  );
}
