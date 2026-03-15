import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import type { ReactNode } from "react";

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClass?: string;
}

export default function SectionWrapper({
  id,
  children,
  className = "",
  containerClass = "",
}: SectionWrapperProps) {
  const { ref, isVisible } = useScrollAnimation(0.1);

  return (
    <section id={id} className={`relative py-20 md:py-28 ${className}`}>
      <div
        ref={ref}
        className={`container ${containerClass} transition-all duration-700 ${
          isVisible
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-8"
        }`}
      >
        {children}
      </div>
    </section>
  );
}
