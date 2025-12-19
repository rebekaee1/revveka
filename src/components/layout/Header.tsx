'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import type { Dictionary } from '@/data/dictionaries';
import type { Locale } from '@/lib/i18n';

interface HeaderProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function Header({ dictionary, locale }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const t = dictionary.nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const navLinks = [
    { href: `/${locale}`, label: t.home },
    { href: `/${locale}/services`, label: t.services },
    { href: `/${locale}/about`, label: t.about },
    { href: `/${locale}/contact`, label: t.contact },
  ];

  const switchLocale = (newLocale: Locale) => {
    // Save to cookie
    document.cookie = `NEXT_LOCALE=${newLocale};path=/;max-age=31536000`;
    // Navigate to new locale path
    const currentPath = pathname.replace(`/${locale}`, '');
    window.location.href = `/${newLocale}${currentPath || ''}`;
  };

  return (
    <header
      className={`
        sticky top-0 z-50 transition-all duration-300
        ${isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100' 
          : 'bg-white border-b border-slate-100'
        }
      `}
    >
      <Container>
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link 
            href={`/${locale}`} 
            className="flex items-center gap-3 shrink-0"
            aria-label="REVVEKA Group - На главную"
          >
            <Image
              src="/logo.svg"
              alt="REVVEKA Group"
              width={48}
              height={48}
              className="h-10 w-10 sm:h-12 sm:w-12 object-contain"
              priority
            />
            <div className="hidden sm:block">
              <div className="text-lg font-semibold tracking-wide text-slate-900">
                REVVEKA GROUP
              </div>
              <div className="text-xs text-slate-500 tracking-wide">
                Independent Transaction Support
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Основная навигация">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-2 text-sm font-medium rounded-lg transition-colors
                    ${isActive 
                      ? 'text-blue-700 bg-blue-50' 
                      : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Language Switcher */}
            <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
              <button
                onClick={() => switchLocale('ru')}
                className={`
                  px-3 py-1.5 text-xs font-medium transition-colors
                  ${locale === 'ru' 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-white text-slate-600 hover:bg-slate-50'
                  }
                `}
                aria-label="Русский язык"
              >
                RU
              </button>
              <button
                onClick={() => switchLocale('en')}
                className={`
                  px-3 py-1.5 text-xs font-medium transition-colors
                  ${locale === 'en' 
                    ? 'bg-slate-900 text-white' 
                    : 'bg-white text-slate-600 hover:bg-slate-50'
                  }
                `}
                aria-label="English language"
              >
                EN
              </button>
            </div>

            <Button href={`/${locale}/contact`} size="sm">
              {t.requestConsultation}
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
            aria-label={isMenuOpen ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={isMenuOpen}
          >
            <svg
              className="w-6 h-6 text-slate-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Mobile Menu */}
      <div
        className={`
          lg:hidden overflow-hidden transition-all duration-300
          ${isMenuOpen ? 'max-h-[400px] border-t border-slate-100' : 'max-h-0'}
        `}
      >
        <Container className="py-4">
          <nav className="flex flex-col gap-1" aria-label="Мобильная навигация">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`
                    px-4 py-3 text-base font-medium rounded-lg transition-colors
                    ${isActive 
                      ? 'text-blue-700 bg-blue-50' 
                      : 'text-slate-700 hover:bg-slate-50'
                    }
                  `}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          <div className="mt-4 pt-4 border-t border-slate-100 flex flex-col gap-3">
            {/* Mobile Language Switcher */}
            <div className="flex items-center gap-2 px-4">
              <span className="text-sm text-slate-500">Язык:</span>
              <div className="flex items-center border border-slate-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => switchLocale('ru')}
                  className={`
                    px-4 py-2 text-sm font-medium transition-colors
                    ${locale === 'ru' 
                      ? 'bg-slate-900 text-white' 
                      : 'bg-white text-slate-600'
                    }
                  `}
                  aria-label="Русский язык"
                >
                  RU
                </button>
                <button
                  onClick={() => switchLocale('en')}
                  className={`
                    px-4 py-2 text-sm font-medium transition-colors
                    ${locale === 'en' 
                      ? 'bg-slate-900 text-white' 
                      : 'bg-white text-slate-600'
                    }
                  `}
                  aria-label="English language"
                >
                  EN
                </button>
              </div>
            </div>

            <Button href={`/${locale}/contact`} className="mx-4">
              {t.requestConsultation}
            </Button>
          </div>
        </Container>
      </div>
    </header>
  );
}

