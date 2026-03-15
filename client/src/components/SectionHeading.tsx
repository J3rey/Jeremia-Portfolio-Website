interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeading({ label, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 md:mb-16">
      <span className="inline-block text-[#007BFF] text-sm font-mono font-medium tracking-widest uppercase mb-3">
        {label}
      </span>
      <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
        {title}
      </h2>
      {description && (
        <p className="text-[#A0A0A0] text-base md:text-lg max-w-2xl leading-relaxed">
          {description}
        </p>
      )}
      <div className="mt-6 h-[2px] w-16 bg-gradient-to-r from-[#007BFF] to-transparent rounded-full shadow-[0_0_8px_rgba(0,123,255,0.4)]" />
    </div>
  );
}
