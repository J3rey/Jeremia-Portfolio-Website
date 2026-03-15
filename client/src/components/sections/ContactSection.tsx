/*
 * Design: "Midnight Circuit" — Dark Elegance with Luminous Accents
 * Contact: Email link, download resume button, social links
 * Footer: Copyright, GitHub, LinkedIn
 */
import SectionWrapper from "@/components/SectionWrapper";
import SectionHeading from "@/components/SectionHeading";
import { Github, Linkedin, Mail, FileDown, ExternalLink } from "lucide-react";

export default function ContactSection() {
  return (
    <>
      <SectionWrapper id="contact">
        <SectionHeading
          label="// Contact"
          title="Let's Connect"
          description="I'm always open to discussing new projects, opportunities, or just having a chat about technology."
        />

        <div className="max-w-2xl">
          {/* Email */}
          <div className="glass-card rounded-xl p-6 md:p-8 mb-6">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-[rgba(0,123,255,0.1)] border border-[rgba(0,123,255,0.2)] flex items-center justify-center text-[#007BFF]">
                <Mail size={22} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-white">
                  Email Me
                </h3>
                <p className="text-[#888] text-sm">Reach out anytime</p>
              </div>
            </div>
            <a
              href="mailto:jeremiayov@gmail.com"
              className="inline-flex items-center gap-2 text-[#007BFF] hover:text-[#3399FF] transition-colors text-base font-medium group"
            >
              jeremiayov@gmail.com
              <ExternalLink
                size={14}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>

          {/* Action buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="mailto:jeremiayov@gmail.com"
              className="led-button px-6 py-3 rounded-lg font-medium text-base inline-flex items-center gap-2"
            >
              <Mail size={18} />
              Send Email
            </a>
            <a
              href="https://d2xsxph8kpxj0f.cloudfront.net/310519663298019635/hcns6TsFEmpCFpUru3EAVm/Jeremia_Resume_5d660a03.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="led-button-outline px-6 py-3 rounded-lg font-medium text-base inline-flex items-center gap-2"
            >
              <FileDown size={18} />
              View Resume
            </a>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/J3rey"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-[#888] hover:text-[#007BFF] hover:border-[rgba(0,123,255,0.4)] hover:shadow-[0_0_12px_rgba(0,123,255,0.2)] transition-all duration-300"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/jeremia-yovinus/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-[#888] hover:text-[#007BFF] hover:border-[rgba(0,123,255,0.4)] hover:shadow-[0_0_12px_rgba(0,123,255,0.2)] transition-all duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:jeremiayov@gmail.com"
              className="w-11 h-11 rounded-lg border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] flex items-center justify-center text-[#888] hover:text-[#007BFF] hover:border-[rgba(0,123,255,0.4)] hover:shadow-[0_0_12px_rgba(0,123,255,0.2)] transition-all duration-300"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </SectionWrapper>

      {/* Footer */}
      <footer className="border-t border-[rgba(0,123,255,0.08)] py-8">
        <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-[#555]">
            &copy; {new Date().getFullYear()} Jeremia Yovinus. Built with care.
          </p>
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/jeremiayovinus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-[#007BFF] transition-colors text-sm"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/jeremiayovinus"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#555] hover:text-[#007BFF] transition-colors text-sm"
            >
              LinkedIn
            </a>
            <a
              href="mailto:jeremiayov@gmail.com"
              className="text-[#555] hover:text-[#007BFF] transition-colors text-sm"
            >
              Email
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
