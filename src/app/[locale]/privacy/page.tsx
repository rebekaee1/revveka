import { Metadata } from 'next';
import { Container } from '@/components/ui/Container';
import { getDictionary } from '@/data/dictionaries';
import { isValidLocale, defaultLocale, type Locale } from '@/lib/i18n';

interface PageProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const dictionary = getDictionary(validLocale as Locale);

  return {
    title: `${dictionary.privacy.title} — REVVEKA Group`,
    robots: { index: true, follow: true },
  };
}

export default async function PrivacyPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const dictionary = getDictionary(validLocale as Locale);
  const t = dictionary.privacy;

  const isRu = validLocale === 'ru';

  return (
    <section className="py-16 sm:py-24">
      <Container>
        <div className="max-w-3xl mx-auto">
          <h1 className="text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            {t.title}
          </h1>
          <p className="text-sm text-slate-500 mb-12">
            {t.lastUpdated}: {isRu ? 'Декабрь 2024' : 'December 2024'}
          </p>

          <div className="prose prose-slate max-w-none">
            {isRu ? (
              <>
                <h2>1. Общие положения</h2>
                <p>
                  Настоящая Политика конфиденциальности описывает, как REVVEKA Group GmbH 
                  (&quot;Компания&quot;, &quot;мы&quot;) собирает, использует и защищает персональные данные 
                  пользователей сайта revveka-group.ru (&quot;Сайт&quot;).
                </p>
                <p>
                  Используя наш Сайт, вы соглашаетесь с условиями данной Политики.
                </p>

                <h2>2. Какие данные мы собираем</h2>
                <p>Мы можем собирать следующие категории данных:</p>
                <ul>
                  <li>Контактные данные (имя, email, телефон), предоставленные вами через формы обратной связи</li>
                  <li>Информация о вашей компании и запросе</li>
                  <li>Технические данные (IP-адрес, тип браузера, страницы посещения)</li>
                  <li>Cookies и аналогичные технологии</li>
                </ul>

                <h2>3. Цели обработки данных</h2>
                <p>Мы используем ваши данные для:</p>
                <ul>
                  <li>Обработки ваших запросов и предоставления услуг</li>
                  <li>Связи с вами по вопросам сотрудничества</li>
                  <li>Улучшения работы Сайта и качества услуг</li>
                  <li>Соблюдения требований законодательства</li>
                </ul>

                <h2>4. Защита данных</h2>
                <p>
                  Мы применяем технические и организационные меры для защиты ваших данных 
                  от несанкционированного доступа, изменения или уничтожения. Мы следуем 
                  швейцарским стандартам защиты данных и требованиям GDPR.
                </p>

                <h2>5. Передача данных третьим лицам</h2>
                <p>
                  Мы не продаём и не передаём ваши персональные данные третьим лицам, 
                  за исключением случаев, предусмотренных законодательством, или с вашего 
                  явного согласия.
                </p>

                <h2>6. Ваши права</h2>
                <p>Вы имеете право:</p>
                <ul>
                  <li>Запросить доступ к вашим персональным данным</li>
                  <li>Требовать исправления неточных данных</li>
                  <li>Требовать удаления ваших данных</li>
                  <li>Возражать против обработки данных</li>
                  <li>Отозвать согласие на обработку</li>
                </ul>

                <h2>7. Cookies</h2>
                <p>
                  Сайт использует cookies для улучшения пользовательского опыта. 
                  Вы можете управлять настройками cookies в вашем браузере.
                </p>

                <h2>8. Изменения политики</h2>
                <p>
                  Мы оставляем за собой право обновлять данную Политику. 
                  Актуальная версия всегда доступна на этой странице.
                </p>

                <h2>9. Контакты</h2>
                <p>
                  По вопросам конфиденциальности обращайтесь: info@revveka-group.ru
                </p>
              </>
            ) : (
              <>
                <h2>1. General Provisions</h2>
                <p>
                  This Privacy Policy describes how REVVEKA Group GmbH 
                  (&quot;Company&quot;, &quot;we&quot;) collects, uses and protects personal data 
                  of users of the revveka-group.ru website (&quot;Website&quot;).
                </p>
                <p>
                  By using our Website, you agree to the terms of this Policy.
                </p>

                <h2>2. What Data We Collect</h2>
                <p>We may collect the following categories of data:</p>
                <ul>
                  <li>Contact information (name, email, phone) provided by you through contact forms</li>
                  <li>Information about your company and inquiry</li>
                  <li>Technical data (IP address, browser type, pages visited)</li>
                  <li>Cookies and similar technologies</li>
                </ul>

                <h2>3. Purpose of Data Processing</h2>
                <p>We use your data to:</p>
                <ul>
                  <li>Process your inquiries and provide services</li>
                  <li>Contact you regarding collaboration</li>
                  <li>Improve Website operation and service quality</li>
                  <li>Comply with legal requirements</li>
                </ul>

                <h2>4. Data Protection</h2>
                <p>
                  We apply technical and organizational measures to protect your data 
                  from unauthorized access, modification or destruction. We follow 
                  Swiss data protection standards and GDPR requirements.
                </p>

                <h2>5. Data Transfer to Third Parties</h2>
                <p>
                  We do not sell or transfer your personal data to third parties, 
                  except as required by law or with your explicit consent.
                </p>

                <h2>6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                  <li>Request access to your personal data</li>
                  <li>Request correction of inaccurate data</li>
                  <li>Request deletion of your data</li>
                  <li>Object to data processing</li>
                  <li>Withdraw consent to processing</li>
                </ul>

                <h2>7. Cookies</h2>
                <p>
                  The Website uses cookies to improve user experience. 
                  You can manage cookie settings in your browser.
                </p>

                <h2>8. Policy Changes</h2>
                <p>
                  We reserve the right to update this Policy. 
                  The current version is always available on this page.
                </p>

                <h2>9. Contact</h2>
                <p>
                  For privacy questions, contact: info@revveka-group.ru
                </p>
              </>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}

export function generateStaticParams() {
  return [{ locale: 'ru' }, { locale: 'en' }];
}

