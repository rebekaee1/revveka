interface SectionHeaderProps {
  label?: string;
  title: string;
  subtitle?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeader({
  label,
  title,
  subtitle,
  align = 'left',
  className = '',
}: SectionHeaderProps) {
  const alignClasses = align === 'center' ? 'text-center' : 'text-left';

  return (
    <div className={`${alignClasses} ${className}`}>
      {label && (
        <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
          {label}
        </p>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-lg text-slate-600 max-w-3xl">
          {subtitle}
        </p>
      )}
    </div>
  );
}




