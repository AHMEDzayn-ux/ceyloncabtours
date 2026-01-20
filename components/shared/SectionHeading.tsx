interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`mb-6 sm:mb-12 ${
        centered ? "text-center" : "text-left"
      }`.trim()}
    >
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-2 sm:mb-3">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl ${
            centered ? "mx-auto" : "ml-0"
          }`}
        >
          {subtitle}
        </p>
      )}
      {/* Green underline, always aligns with text */}
      <div
        className={`w-16 sm:w-20 h-1 bg-emerald-500 rounded-full mt-3 sm:mt-4 ${
          centered ? "mx-auto" : "ml-0"
        }`}
      ></div>
    </div>
  );
}
