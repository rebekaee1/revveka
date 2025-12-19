import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Dictionary } from '@/data/dictionaries';

interface PartnersProps {
  dictionary: Dictionary;
}

export function Partners({ dictionary }: PartnersProps) {
  const t = dictionary.partners;

  return (
    <section className="py-16 sm:py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute top-0 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-blue-400/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
      
      <Container className="relative">
        <SectionHeader
          label={t.sectionLabel}
          title={t.title}
          subtitle={t.subtitle}
          align="center"
          className="[&_p]:text-slate-400 [&_h2]:text-white [&>p:first-child]:text-blue-400"
        />

        <div className="mt-12">
          {/* Partner categories as animated pills */}
          <div className="flex flex-wrap justify-center gap-3">
            {t.categories.map((category, index) => (
              <div
                key={index}
                className="px-5 py-2.5 bg-slate-800/80 border border-slate-700 rounded-full text-sm font-medium text-slate-300 hover:bg-blue-600 hover:border-blue-500 hover:text-white hover:scale-105 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 cursor-default backdrop-blur-sm"
                style={{
                  animationDelay: `${index * 0.05}s`,
                }}
              >
                {category}
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
