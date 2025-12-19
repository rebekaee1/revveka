import { ReactNode, ButtonHTMLAttributes } from 'react';
import Link from 'next/link';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  className?: string;
}

const variants = {
  primary: 'bg-slate-900 text-white hover:bg-blue-700 border-slate-900 hover:border-blue-700 shadow-sm hover:shadow-lg hover:shadow-blue-200',
  secondary: 'bg-white text-slate-900 hover:bg-slate-50 border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-md',
  outline: 'bg-transparent text-slate-900 hover:bg-slate-50 border-slate-300 hover:border-slate-400',
  ghost: 'bg-transparent text-slate-700 hover:bg-slate-100 border-transparent',
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
};

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = `
    relative inline-flex items-center justify-center 
    font-medium rounded-xl border
    transition-all duration-300 ease-out
    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    hover:-translate-y-0.5 active:translate-y-0
    overflow-hidden
  `;

  const combinedClasses = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
}
