import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';
import type { Dictionary } from '@/data/dictionaries';
import type { Locale } from '@/lib/i18n';

interface HeroProps {
  dictionary: Dictionary;
  locale: Locale;
}

export function Hero({ dictionary, locale }: HeroProps) {
  const t = dictionary.hero;
  const proof = dictionary.proof;

  return (
    <section className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {/* Animated background */}
      <div 
        className="absolute inset-0 -z-10 animate-gradient"
        style={{
          background: `
            linear-gradient(135deg, 
              rgba(30, 64, 175, 0.08) 0%, 
              rgba(59, 130, 246, 0.05) 25%,
              rgba(255, 255, 255, 0) 50%,
              rgba(30, 64, 175, 0.05) 75%,
              rgba(59, 130, 246, 0.08) 100%
            )
          `,
          backgroundSize: '400% 400%',
        }}
      />
      
      {/* Floating decorative elements */}
      <div className="absolute top-20 right-[10%] w-64 h-64 bg-blue-100/30 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-20 left-[5%] w-48 h-48 bg-blue-200/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }} />

      <Container>
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full bg-blue-50 px-4 py-1.5 text-sm font-medium text-blue-700 mb-6 animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s', animationFillMode: 'forwards' }}>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse" />
            {t.badge}
          </div>

          {/* Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight animate-fade-in-up opacity-0" style={{ animationDelay: '0.2s', animationFillMode: 'forwards' }}>
            {t.title}
          </h1>

          {/* Subtitle */}
          <p className="mt-6 text-lg sm:text-xl text-slate-600 leading-relaxed max-w-3xl animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
            {t.subtitle}
          </p>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.4s', animationFillMode: 'forwards' }}>
            <Button href={`/${locale}/contact`} size="lg" className="btn-shine group">
              <span className="relative z-10">{t.ctaPrimary}</span>
            </Button>
            <Button href={`/${locale}/services`} variant="secondary" size="lg" className="hover-lift">
              {t.ctaSecondary}
            </Button>
          </div>
        </div>

        {/* Proof Points */}
        <div className="mt-16 pt-12 border-t border-slate-200">
          <div className="grid gap-8 sm:grid-cols-3">
            {/* Independence */}
            <div className="flex gap-4 animate-fade-in-up opacity-0 group" style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}>
              <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{proof.independence}</h3>
                <p className="mt-1 text-sm text-slate-600">{proof.independenceDesc}</p>
              </div>
            </div>

            {/* Confidentiality */}
            <div className="flex gap-4 animate-fade-in-up opacity-0 group" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{proof.confidentiality}</h3>
                <p className="mt-1 text-sm text-slate-600">{proof.confidentialityDesc}</p>
              </div>
            </div>

            {/* Global */}
            <div className="flex gap-4 animate-fade-in-up opacity-0 group" style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}>
              <div className="shrink-0 w-12 h-12 rounded-xl bg-slate-100 flex items-center justify-center group-hover:bg-blue-50 group-hover:scale-110 transition-all duration-300">
                <svg className="w-6 h-6 text-slate-700 group-hover:text-blue-600 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
                </svg>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900">{proof.global}</h3>
                <p className="mt-1 text-sm text-slate-600">{proof.globalDesc}</p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
