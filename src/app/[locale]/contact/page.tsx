import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
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
    ? 'Контакты — REVVEKA Group' 
    : 'Contact — REVVEKA Group';
  const description = dictionary.contact.subtitle;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function ContactPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const dictionary = getDictionary(validLocale as Locale);
  const t = dictionary.contact;
  const locations = dictionary.locations;

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              {t.title}
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              {t.subtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Contact Info */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Contact Methods */}
            <div className="lg:col-span-1 space-y-8">
              {/* Email */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
                  {t.methods.email}
                </h3>
                <a 
                  href="mailto:info@revveka-group.ru" 
                  className="text-lg text-slate-900 hover:text-blue-700 transition-colors"
                >
                  info@revveka-group.ru
                </a>
              </div>

              {/* Headquarters */}
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3">
                  {t.methods.address}
                </h3>
                <address className="not-italic text-slate-600 leading-relaxed">
                  {/* TODO: Add real address */}
                  REVVEKA Group GmbH<br />
                  Geneva, Switzerland
                </address>
              </div>

              {/* Office Cards */}
              <div className="pt-6 border-t border-slate-200">
                <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-4">
                  {locations.sectionLabel}
                </h3>
                <div className="space-y-3">
                  {locations.offices.slice(0, 3).map((office) => (
                    <div 
                      key={office.city}
                      className="p-4 bg-slate-50 rounded-xl border border-slate-100"
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="font-semibold text-slate-900">
                          {office.city}
                        </span>
                        {office.isHQ && (
                          <span className="text-xs font-medium text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                            HQ
                          </span>
                        )}
                      </div>
                      <p className="text-sm text-slate-500">
                        {office.country} · {office.type}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Form Section */}
            <div className="lg:col-span-2">
              <InquiryForm dictionary={dictionary} locale={validLocale as Locale} standalone />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }];
}
