import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Dictionary } from '@/data/dictionaries';
import type { Locale } from '@/lib/i18n';

interface ServicesProps {
  dictionary: Dictionary;
  locale: Locale;
}

const serviceIcons = {
  escrow: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
    </svg>
  ),
  audit: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
    </svg>
  ),
  duediligence: (
    <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
    </svg>
  ),
};

export function Services({ dictionary, locale }: ServicesProps) {
  const t = dictionary.services;

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-50/60 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
      
      <Container className="relative">
        <SectionHeader
          label={t.sectionLabel}
          title={t.title}
          subtitle={t.subtitle}
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {t.list.map((service, index) => (
            <Link
              key={service.id}
              href={`/${locale}/services#${service.id}`}
              className="group relative bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 transition-all duration-500 hover:shadow-xl hover:shadow-blue-100/50 hover:border-blue-200 hover:-translate-y-2"
              style={{ 
                animationDelay: `${0.1 + index * 0.1}s`,
              }}
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-blue-50/0 to-blue-100/0 group-hover:from-blue-50/50 group-hover:to-blue-100/30 transition-all duration-500" />
              
              <div className="relative">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-slate-100 text-slate-700 flex items-center justify-center mb-5 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
                  {serviceIcons[service.id as keyof typeof serviceIcons]}
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-slate-600 leading-relaxed mb-4">
                  {service.shortDesc}
                </p>

                {/* Learn More */}
                <span className="inline-flex items-center gap-1.5 text-sm font-medium text-blue-700 group-hover:gap-3 transition-all duration-300">
                  {t.learnMore}
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
