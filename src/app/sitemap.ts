import { MetadataRoute } from 'next';

const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://revveka-group.ru';

export default function sitemap(): MetadataRoute.Sitemap {
  const locales = ['ru', 'en'];
  const pages = ['', '/services', '/about', '/contact', '/privacy', '/terms'];

  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const page of pages) {
      entries.push({
        url: `${baseUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : page === '/services' ? 0.9 : 0.7,
        alternates: {
          languages: {
            ru: `${baseUrl}/ru${page}`,
            en: `${baseUrl}/en${page}`,
          },
        },
      });
    }
  }

  return entries;
}

