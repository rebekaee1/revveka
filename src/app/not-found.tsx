import Link from 'next/link';
import { Container } from '@/components/ui/Container';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50">
      <Container className="text-center py-16">
        <h1 className="text-6xl font-bold text-slate-900 mb-4">404</h1>
        <p className="text-xl text-slate-600 mb-8">
          Страница не найдена / Page not found
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button href="/ru">
            На главную (RU)
          </Button>
          <Button href="/en" variant="secondary">
            Go to Home (EN)
          </Button>
        </div>
      </Container>
    </div>
  );
}

