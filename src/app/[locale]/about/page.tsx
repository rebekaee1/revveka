import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { Locations } from '@/components/sections/Locations';
import { Figures } from '@/components/sections/Figures';
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
    ? 'О компании — REVVEKA Group' 
    : 'About — REVVEKA Group';
  const description = dictionary.about.mission.text;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
    },
  };
}

export default async function AboutPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const dictionary = getDictionary(validLocale as Locale);
  const t = dictionary.about;

  return (
    <>
      {/* Hero */}
      <section className="py-16 sm:py-24 bg-slate-50">
        <Container>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-slate-900">
              {t.heroTitle}
            </h1>
            <p className="mt-6 text-xl text-slate-600 leading-relaxed">
              {t.heroSubtitle}
            </p>
          </div>
        </Container>
      </section>

      {/* Mission */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-semibold text-slate-900 mb-6">
              {t.mission.title}
            </h2>
            <p className="text-xl text-slate-600 leading-relaxed">
              {t.mission.text}
            </p>
          </div>
        </Container>
      </section>

      {/* Values */}
      <section className="py-16 sm:py-24 bg-slate-900 text-white">
        <Container>
          <h2 className="text-3xl font-semibold text-center mb-12">
            {t.values.title}
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {t.values.list.map((value, index) => (
              <div
                key={index}
                className="bg-slate-800/50 rounded-2xl p-6 border border-slate-700"
              >
                <div className="w-12 h-12 rounded-xl bg-blue-600 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-white">
                    {index + 1}
                  </span>
                </div>
                <h3 className="text-lg font-semibold mb-2">
                  {value.title}
                </h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                  {value.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* History */}
      <section className="py-16 sm:py-24">
        <Container>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-semibold text-slate-900 mb-6 text-center">
              {t.history.title}
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed text-center">
              {t.history.text}
            </p>
          </div>
        </Container>
      </section>

      {/* Figures & Ownership */}
      <Figures dictionary={dictionary} />

      {/* Locations */}
      <Locations dictionary={dictionary} />
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }];
}

