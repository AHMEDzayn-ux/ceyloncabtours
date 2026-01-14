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
    <div className={`mb-12 ${centered ? "text-center" : "text-left"}`.trim()}>
      <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
        {title}
      </h2>
      {subtitle && (
        <p
          className={`text-lg text-gray-600 max-w-2xl ${
            centered ? "mx-auto" : "ml-0"
          }`}
        >
          {subtitle}
        </p>
      )}
      {/* Green underline, always aligns with text */}
      <div
        className={`w-20 h-1 bg-emerald-500 rounded-full mt-4 ${
          centered ? "mx-auto" : "ml-0"
        }`}
      ></div>
    </div>
  );
}
