import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Dictionary } from '@/data/dictionaries';

interface ProcessProps {
  dictionary: Dictionary;
}

export function Process({ dictionary }: ProcessProps) {
  const t = dictionary.process;

  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      {/* Animated background line */}
      <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent hidden lg:block" />
      
      <Container>
        <SectionHeader
          title={t.title}
          subtitle={t.subtitle}
          align="center"
          className="max-w-2xl mx-auto"
        />

        <div className="mt-12 sm:mt-16">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {t.steps.map((step, index) => (
              <div 
                key={step.number} 
                className="relative group"
              >
                {/* Connector line (hidden on last item and mobile) */}
                {index < t.steps.length - 1 && (
                  <div className="hidden lg:block absolute top-7 left-[60px] right-0 h-[2px]">
                    <div className="h-full bg-slate-200 group-hover:bg-blue-200 transition-colors duration-500" />
                    <div 
                      className="absolute top-0 left-0 h-full bg-blue-500 transition-all duration-700"
                      style={{ width: '0%' }}
                    />
                  </div>
                )}

                <div className="relative bg-white rounded-2xl border border-slate-200 p-6 hover:shadow-lg hover:border-blue-200 transition-all duration-300 hover:-translate-y-1">
                  {/* Step number with pulse effect */}
                  <div className="relative">
                    <div className="absolute inset-0 w-14 h-14 rounded-full bg-blue-400/20 animate-ping opacity-0 group-hover:opacity-100" style={{ animationDuration: '2s' }} />
                    <div className="relative w-14 h-14 rounded-full bg-slate-900 text-white flex items-center justify-center text-lg font-bold mb-4 group-hover:bg-blue-600 group-hover:scale-110 transition-all duration-300">
                      {step.number}
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-slate-900 mb-2 group-hover:text-blue-900 transition-colors">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-slate-600 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
