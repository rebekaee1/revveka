import { Metadata } from 'next';
import Image from 'next/image';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import { Button } from '@/components/ui/Button';
import { FAQ } from '@/components/sections/FAQ';
import { InquiryForm } from '@/components/sections/InquiryForm';
import { getDictionary } from '@/data/dictionaries';
import { isValidLocale, defaultLocale, type Locale } from '@/lib/i18n';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const dictionary = getDictionary(validLocale as Locale);

  const title = validLocale === 'ru' 
    ? 'Услуги — REVVEKA Group' 
    : 'Services — REVVEKA Group';
  const description = dictionary.services.subtitle;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

// Service images mapping
const serviceImages = {
  escrow: '/escrow.png',
  audit: '/audit.png',
  duediligence: '/due_diligence.png',
};

export default async function ServicesPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const dictionary = getDictionary(validLocale as Locale);
  const t = dictionary.services;
  const process = dictionary.process;

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <Container>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold uppercase tracking-widest text-blue-700 mb-3">
              {t.sectionLabel}
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              {t.title}
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Services Detail */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="space-y-20 sm:space-y-32">
            {t.list.map((service, index) => (
              <article
                key={service.id}
                id={service.id}
                className="scroll-mt-24"
              >
                <div className={`grid gap-8 lg:grid-cols-2 lg:gap-16 items-center`}>
                  {/* Content */}
                  <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                    <h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 mb-4">
                      {service.title}
                    </h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-6">
                      {service.fullDesc}
                    </p>
                    <ul className="space-y-3">
                      {service.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <svg className="shrink-0 w-5 h-5 text-blue-600 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-slate-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
                      <Image
                        src={serviceImages[service.id as keyof typeof serviceImages]}
                        alt={service.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 50vw"
                      />
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </Container>
      </section>

      {/* Process */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <Container>
          <SectionHeader
            title={process.title}
            subtitle={process.subtitle}
            align="center"
            className="max-w-2xl mx-auto"
          />

          <div className="mt-12 sm:mt-16">
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {process.steps.map((step) => (
                <div key={step.number} className="relative text-center">
                  <div className="w-14 h-14 mx-auto rounded-full bg-slate-900 text-white flex items-center justify-center text-lg font-bold mb-4">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button href={`/${validLocale}/contact`} size="lg">
              {dictionary.nav.requestConsultation}
            </Button>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <FAQ dictionary={dictionary} />

      {/* Inquiry Form */}
      <InquiryForm dictionary={dictionary} locale={validLocale as Locale} />
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }];
}
