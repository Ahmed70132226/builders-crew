export default function SectionHeader({ badge, title, subtitle, light = false }) {
  return (
    <div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-16 px-4">
      {badge && (
        <span className="text-xs font-bold uppercase tracking-[0.3em] text-[#C89B3C] mb-3 block">
          // {badge}
        </span>
      )}
      <h2 className={`font-heading font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight leading-tight mb-4 ${
        light ? 'text-black' : 'text-white'
      }`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-sm md:text-base leading-relaxed ${
          light ? 'text-gray-500' : 'text-gray-400'
        }`}>
          {subtitle}
        </p>
      )}
      <div className="w-16 h-[2px] bg-[#C89B3C] mt-6" />
    </div>
  );
}
