import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { locales, defaultLocale, isValidLocale } from '@/lib/i18n';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if pathname starts with a locale
  const pathnameLocale = pathname.split('/')[1];
  
  // Skip for API routes, static files, etc.
  if (
    pathname.startsWith('/api/') ||
    pathname.startsWith('/_next/') ||
    pathname.startsWith('/favicon') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // If the pathname has a valid locale, continue
  if (isValidLocale(pathnameLocale)) {
    return NextResponse.next();
  }

  // Check for saved locale preference in cookie
  const savedLocale = request.cookies.get('NEXT_LOCALE')?.value;
  const locale = savedLocale && isValidLocale(savedLocale) ? savedLocale : defaultLocale;

  // Redirect to locale-prefixed path
  const newUrl = new URL(`/${locale}${pathname}`, request.url);
  return NextResponse.redirect(newUrl);
}

export const config = {
  matcher: ['/((?!_next|api|favicon|.*\\..*).*)'],
};




