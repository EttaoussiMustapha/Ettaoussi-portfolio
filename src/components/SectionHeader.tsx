interface SectionHeaderProps {
  title: string;
  subtitle: string;
}

function SectionHeader({ title, subtitle }: SectionHeaderProps) {
  return (
    <div className="text-center mb-16 space-y-4">
      <h2 className="text-5xl md:text-6xl font-bold tracking-tight">{title}</h2>
      <p className="text-xl text-gray-600 dark:text-gray-400">{subtitle}</p>
      <div className="flex items-center justify-center gap-4 pt-2">
        <div className="h-px w-24 bg-gradient-to-r from-transparent to-teal-400" />
        <div className="w-2 h-2 rounded-full bg-teal-400 animate-pulse" />
        <div className="h-px w-24 bg-gradient-to-l from-transparent to-teal-400" />
      </div>
    </div>
  );
}

export default SectionHeader;
