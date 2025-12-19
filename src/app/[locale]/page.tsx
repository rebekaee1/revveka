import { Metadata } from 'next';
import { Hero } from '@/components/sections/Hero';
import { Services } from '@/components/sections/Services';
import { Process } from '@/components/sections/Process';
import { Locations } from '@/components/sections/Locations';
import { Figures } from '@/components/sections/Figures';
import { Partners } from '@/components/sections/Partners';
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
  const t = dictionary.meta;

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://revveka.com';

  return {
    title: t.title,
    description: t.description,
    keywords: t.keywords,
    alternates: {
      canonical: `${baseUrl}/${validLocale}`,
      languages: {
        'ru': `${baseUrl}/ru`,
        'en': `${baseUrl}/en`,
      },
    },
    openGraph: {
      title: t.title,
      description: t.description,
      url: `${baseUrl}/${validLocale}`,
      siteName: 'REVVEKA Group',
      locale: validLocale === 'ru' ? 'ru_RU' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t.title,
      description: t.description,
    },
  };
}

export default async function HomePage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const dictionary = getDictionary(validLocale as Locale);

  return (
    <>
      <Hero dictionary={dictionary} locale={validLocale as Locale} />
      <Services dictionary={dictionary} locale={validLocale as Locale} />
      <Process dictionary={dictionary} />
      <Locations dictionary={dictionary} />
      <Figures dictionary={dictionary} />
      <Partners dictionary={dictionary} />
      <FAQ dictionary={dictionary} />
      <InquiryForm dictionary={dictionary} locale={validLocale as Locale} />
      
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Organization',
            name: 'REVVEKA Group',
            legalName: 'REVVEKA Group GmbH',
            url: 'https://revveka.com',
            logo: 'https://revveka.com/logo.svg',
            description: dictionary.meta.description,
            foundingDate: '2014',
            address: {
              '@type': 'PostalAddress',
              addressLocality: 'Geneva',
              addressCountry: 'CH',
            },
            sameAs: [],
            contactPoint: {
              '@type': 'ContactPoint',
              contactType: 'customer service',
              email: 'info@revveka-group.ru',
              availableLanguage: ['Russian', 'English'],
            },
          }),
        }}
      />
    </>
  );
}

export function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }];
}

