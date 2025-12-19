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
    title: `${dictionary.terms.title} — REVVEKA Group`,
    robots: { index: true, follow: true },
  };
}

export default async function TermsPage({ params }: PageProps) {
  const { locale } = await params;
  const validLocale = isValidLocale(locale) ? locale : defaultLocale;
  const dictionary = getDictionary(validLocale as Locale);
  const t = dictionary.terms;

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
                  Настоящие Условия использования (&quot;Условия&quot;) регулируют использование 
                  веб-сайта revveka.com (&quot;Сайт&quot;), принадлежащего REVVEKA Group GmbH 
                  (&quot;Компания&quot;).
                </p>
                <p>
                  Используя Сайт, вы подтверждаете, что прочитали, поняли и согласны 
                  соблюдать данные Условия.
                </p>

                <h2>2. Интеллектуальная собственность</h2>
                <p>
                  Все материалы на Сайте, включая тексты, графику, логотипы, изображения 
                  и программное обеспечение, являются собственностью Компании или её 
                  лицензиаров и защищены законодательством об интеллектуальной собственности.
                </p>
                <p>
                  Запрещается копировать, воспроизводить, распространять или использовать 
                  материалы Сайта без письменного разрешения Компании.
                </p>

                <h2>3. Использование Сайта</h2>
                <p>Вы обязуетесь:</p>
                <ul>
                  <li>Использовать Сайт только в законных целях</li>
                  <li>Не нарушать работу Сайта или его инфраструктуры</li>
                  <li>Не пытаться получить несанкционированный доступ к системам</li>
                  <li>Предоставлять достоверную информацию при использовании форм</li>
                </ul>

                <h2>4. Отказ от гарантий</h2>
                <p>
                  Информация на Сайте предоставляется &quot;как есть&quot;. Компания не даёт 
                  никаких гарантий относительно полноты, точности или актуальности 
                  представленной информации.
                </p>
                <p>
                  Сайт не является публичной офертой или предложением услуг. 
                  Условия оказания услуг обсуждаются индивидуально.
                </p>

                <h2>5. Ограничение ответственности</h2>
                <p>
                  Компания не несёт ответственности за любые убытки, возникшие в 
                  результате использования или невозможности использования Сайта, 
                  за исключением случаев, прямо предусмотренных законодательством.
                </p>

                <h2>6. Ссылки на сторонние ресурсы</h2>
                <p>
                  Сайт может содержать ссылки на сторонние веб-сайты. Компания не 
                  контролирует эти ресурсы и не несёт ответственности за их содержание.
                </p>

                <h2>7. Применимое право</h2>
                <p>
                  Настоящие Условия регулируются законодательством Швейцарии. 
                  Споры подлежат разрешению в судах Женевы, Швейцария.
                </p>

                <h2>8. Изменения условий</h2>
                <p>
                  Компания оставляет за собой право изменять данные Условия. 
                  Продолжение использования Сайта означает согласие с изменениями.
                </p>

                <h2>9. Контакты</h2>
                <p>
                  По вопросам использования Сайта обращайтесь: info@revveka-group.ru
                </p>
              </>
            ) : (
              <>
                <h2>1. General Provisions</h2>
                <p>
                  These Terms of Use (&quot;Terms&quot;) govern the use of the revveka.com 
                  website (&quot;Website&quot;) owned by REVVEKA Group GmbH (&quot;Company&quot;).
                </p>
                <p>
                  By using the Website, you confirm that you have read, understood, 
                  and agree to comply with these Terms.
                </p>

                <h2>2. Intellectual Property</h2>
                <p>
                  All materials on the Website, including texts, graphics, logos, 
                  images and software, are the property of the Company or its 
                  licensors and are protected by intellectual property laws.
                </p>
                <p>
                  Copying, reproducing, distributing or using Website materials 
                  without written permission from the Company is prohibited.
                </p>

                <h2>3. Website Usage</h2>
                <p>You agree to:</p>
                <ul>
                  <li>Use the Website only for lawful purposes</li>
                  <li>Not disrupt the Website or its infrastructure</li>
                  <li>Not attempt unauthorized access to systems</li>
                  <li>Provide accurate information when using forms</li>
                </ul>

                <h2>4. Disclaimer of Warranties</h2>
                <p>
                  Information on the Website is provided &quot;as is&quot;. The Company makes 
                  no warranties regarding the completeness, accuracy or currency 
                  of the information presented.
                </p>
                <p>
                  The Website does not constitute a public offer or service proposal. 
                  Service terms are discussed individually.
                </p>

                <h2>5. Limitation of Liability</h2>
                <p>
                  The Company shall not be liable for any damages arising from the 
                  use or inability to use the Website, except as expressly provided 
                  by applicable law.
                </p>

                <h2>6. Third-Party Links</h2>
                <p>
                  The Website may contain links to third-party websites. The Company 
                  does not control these resources and is not responsible for their content.
                </p>

                <h2>7. Applicable Law</h2>
                <p>
                  These Terms are governed by Swiss law. Disputes shall be resolved 
                  in the courts of Geneva, Switzerland.
                </p>

                <h2>8. Changes to Terms</h2>
                <p>
                  The Company reserves the right to modify these Terms. 
                  Continued use of the Website constitutes acceptance of changes.
                </p>

                <h2>9. Contact</h2>
                <p>
                  For questions about Website usage, contact: info@revveka-group.ru
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

