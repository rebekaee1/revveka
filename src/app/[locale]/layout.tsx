import { notFound } from 'next/navigation';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { getDictionary } from '@/data/dictionaries';
import { isValidLocale, type Locale } from '@/lib/i18n';

interface LocaleLayoutProps {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}

export default async function LocaleLayout({
  children,
  params,
}: LocaleLayoutProps) {
  const { locale } = await params;
  
  if (!isValidLocale(locale)) {
    notFound();
  }

  const dictionary = getDictionary(locale as Locale);

  return (
    <>
      <Header dictionary={dictionary} locale={locale as Locale} />
      <main className="min-h-[calc(100vh-80px)]">
        {children}
      </main>
      <Footer dictionary={dictionary} locale={locale as Locale} />
    </>
  );
}




