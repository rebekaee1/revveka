'use client';

import { useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Dictionary } from '@/data/dictionaries';

interface FAQProps {
  dictionary: Dictionary;
}

export function FAQ({ dictionary }: FAQProps) {
  const t = dictionary.faq;
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-16 sm:py-24 relative">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgb(226 232 240) 1px, transparent 0)`,
            backgroundSize: '40px 40px',
          }}
        />
      </div>
      
      <Container className="relative">
        <div className="max-w-3xl mx-auto">
          <SectionHeader
            title={t.title}
            align="center"
          />

          <div className="mt-12 space-y-3">
            {t.items.map((item, index) => {
              const isOpen = openIndex === index;
              return (
                <div 
                  key={index} 
                  className={`
                    bg-white rounded-2xl border transition-all duration-300
                    ${isOpen 
                      ? 'border-blue-200 shadow-lg shadow-blue-100/50' 
                      : 'border-slate-200 hover:border-slate-300 hover:shadow-md'
                    }
                  `}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="w-full flex items-start justify-between gap-4 text-left p-5 sm:p-6 group"
                    aria-expanded={isOpen}
                  >
                    <span className={`text-base sm:text-lg font-medium transition-colors duration-300 ${isOpen ? 'text-blue-700' : 'text-slate-900 group-hover:text-blue-600'}`}>
                      {item.q}
                    </span>
                    <span className={`shrink-0 mt-1 w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${isOpen ? 'bg-blue-100 rotate-180' : 'bg-slate-100 group-hover:bg-blue-50'}`}>
                      <svg
                        className={`w-5 h-5 transition-colors ${isOpen ? 'text-blue-600' : 'text-slate-500'}`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                      </svg>
                    </span>
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-500 ease-in-out ${
                      isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                    }`}
                  >
                    <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                      <div className="h-px bg-slate-100 mb-4" />
                      <p className="text-slate-600 leading-relaxed">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
