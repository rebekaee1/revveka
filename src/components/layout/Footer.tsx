import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import type { Dictionary } from '@/data/dictionaries';
import type { Locale } from '@/lib/i18n';

interface FooterProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function Footer({ dictionary, locale }: FooterProps) {
  const t = dictionary.footer;
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { href: `/${locale}/privacy`, label: t.links.privacy },
    { href: `/${locale}/terms`, label: t.links.terms },
    { href: `/${locale}/contact`, label: t.links.contact },
  ];

  return (
    <footer className="bg-slate-900 text-white">
      <Container className="py-12 sm:py-16">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link href={`/${locale}`} className="inline-flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/logo.svg"
                alt="REVVEKA Group"
                width={40}
                height={40}
                className="h-10 w-10 object-contain brightness-0 invert"
              />
              <span className="text-lg font-semibold tracking-wide">
                REVVEKA GROUP
              </span>
            </Link>
            <p className="mt-4 text-sm text-slate-400 max-w-xs">
              {t.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              {locale === 'ru' ? 'Навигация' : 'Navigation'}
            </h3>
            <ul className="space-y-2">
              <li>
                <Link 
                  href={`/${locale}`}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {dictionary.nav.home}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/services`}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {dictionary.nav.services}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/about`}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {dictionary.nav.about}
                </Link>
              </li>
              <li>
                <Link 
                  href={`/${locale}/contact`}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {dictionary.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              {dictionary.services.sectionLabel}
            </h3>
            <ul className="space-y-2">
              {dictionary.services.list.map((service) => (
                <li key={service.id}>
                  <Link 
                    href={`/${locale}/services#${service.id}`}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-4">
              {dictionary.nav.contact}
            </h3>
            <address className="not-italic">
              <p className="text-sm text-slate-400">{t.company}</p>
              <p className="text-sm text-slate-400 mt-1">{t.location}</p>
              <p className="text-sm text-slate-400 mt-3">
                <a 
                  href="mailto:info@revveka-group.ru" 
                  className="hover:text-white transition-colors"
                >
                  info@revveka-group.ru
                </a>
              </p>
            </address>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-slate-400">
              {t.copyright.replace('{year}', currentYear.toString())}
            </p>
            <div className="flex items-center gap-6">
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-slate-400 hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}

