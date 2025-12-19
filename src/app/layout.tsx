import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import './globals.css';

const inter = Inter({
  subsets: ['latin', 'cyrillic'],
  display: 'swap',
  variable: '--font-inter',
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://revveka.com'),
  title: {
    default: 'REVVEKA Group — Escrow, Audit & Due Diligence',
    template: '%s — REVVEKA Group',
  },
  description:
    'Independent transaction support, risk assessment and financial verification across Switzerland, the EU, Russia and global jurisdictions.',
  keywords: ['escrow', 'audit', 'due diligence', 'transaction support', 'REVVEKA', 'Switzerland'],
  authors: [{ name: 'REVVEKA Group' }],
  creator: 'REVVEKA Group',
  publisher: 'REVVEKA Group',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: '/favicon.ico',
  },
  openGraph: {
    type: 'website',
    siteName: 'REVVEKA Group',
    locale: 'ru_RU',
    alternateLocale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={inter.variable}>
      <head>
        {/* Yandex.Metrika counter - ID: 105920123 */}
        <Script id="yandex-metrika" strategy="afterInteractive">
          {`
            (function(m,e,t,r,i,k,a){
              m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
              m[i].l=1*new Date();
              for (var j = 0; j < document.scripts.length; j++) {
                if (document.scripts[j].src === r) { return; }
              }
              k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document, 'script', 'https://mc.webvisor.org/metrika/tag_ww.js?id=105920123', 'ym');

            ym(105920123, 'init', {
              ssr: true,
              webvisor: true,
              trackHash: true,
              clickmap: true,
              ecommerce: 'dataLayer',
              accurateTrackBounce: true,
              trackLinks: true
            });
          `}
        </Script>
        <noscript>
          <div>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="https://mc.yandex.ru/watch/105920123" 
              style={{ position: 'absolute', left: '-9999px' }} 
              alt="" 
            />
          </div>
        </noscript>
        
        {/* Google Analytics placeholder - set NEXT_PUBLIC_GA_ID to enable */}
        {process.env.NEXT_PUBLIC_GA_ID && (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="google-analytics" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        )}
      </head>
      <body className="font-sans antialiased bg-white text-slate-900">
        {children}
      </body>
    </html>
  );
}
