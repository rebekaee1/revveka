'use client';

import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Dictionary } from '@/data/dictionaries';

interface LocationsProps {
  dictionary: Dictionary;
}

const locationIcons = {
  hq: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
    </svg>
  ),
  advisory: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
    </svg>
  ),
  private: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
    </svg>
  ),
  asia: (
    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418" />
    </svg>
  ),
};

export function Locations({ dictionary }: LocationsProps) {
  const t = dictionary.locations;

  const getIcon = (index: number, isHQ: boolean) => {
    if (isHQ) return locationIcons.hq;
    if (index === 1) return locationIcons.advisory;
    if (index === 2) return locationIcons.private;
    return locationIcons.asia;
  };

  // Дублируем карточки для бесконечной анимации
  const duplicatedOffices = [...t.offices, ...t.offices, ...t.offices];

  return (
    <section id="locations" className="py-16 sm:py-24 bg-slate-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-100/30 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-48 h-48 bg-blue-50/50 rounded-full blur-3xl" />
      
      <Container className="relative">
        <SectionHeader
          label={t.sectionLabel}
          title={t.title}
          subtitle={t.subtitle}
        />
      </Container>

      {/* Animated carousel - full width */}
      <div className="mt-12 relative">
        {/* Gradient overlays for smooth edges */}
        <div className="absolute left-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 sm:w-40 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
        
        {/* Carousel track */}
        <div 
          className="flex gap-6 animate-carousel hover:pause-animation"
          style={{
            width: 'max-content',
          }}
        >
          {duplicatedOffices.map((office, index) => {
            const originalIndex = index % t.offices.length;
            return (
              <article
                key={`${office.city}-${index}`}
                className={`
                  shrink-0 w-[300px] sm:w-[340px] bg-white rounded-2xl border p-6 transition-all duration-500
                  hover:shadow-2xl hover:-translate-y-3 hover:scale-105 group cursor-pointer
                  ${office.isHQ 
                    ? 'border-blue-200 ring-1 ring-blue-100 hover:shadow-blue-200/50' 
                    : 'border-slate-200 hover:border-blue-300 hover:shadow-blue-100/50'
                  }
                `}
              >
                {office.isHQ && (
                  <div className="absolute -top-3 left-6">
                    <span className="inline-flex items-center gap-1 px-3 py-1 bg-blue-700 text-white text-xs font-semibold rounded-full shadow-lg shadow-blue-500/30 animate-pulse">
                      <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" clipRule="evenodd" />
                      </svg>
                      HQ
                    </span>
                  </div>
                )}

                <div className="flex items-start gap-4">
                  <div className={`
                    shrink-0 w-14 h-14 rounded-xl flex items-center justify-center transition-all duration-500
                    group-hover:scale-125 group-hover:rotate-6
                    ${office.isHQ 
                      ? 'bg-gradient-to-br from-blue-100 to-blue-200 text-blue-700 group-hover:from-blue-600 group-hover:to-blue-700 group-hover:text-white shadow-lg shadow-blue-200/50' 
                      : 'bg-gradient-to-br from-slate-100 to-slate-200 text-slate-600 group-hover:from-blue-100 group-hover:to-blue-200 group-hover:text-blue-600 shadow-md shadow-slate-200/50'
                    }
                  `}>
                    {getIcon(originalIndex, office.isHQ)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-blue-900 transition-colors duration-300">
                      {office.city}
                    </h3>
                    <p className="text-sm text-slate-500 group-hover:text-blue-500 transition-colors duration-300">{office.country}</p>
                  </div>
                </div>

                <div className="mt-5">
                  <span className={`
                    inline-block px-3 py-1.5 text-xs font-semibold rounded-full transition-all duration-300
                    ${office.isHQ 
                      ? 'bg-blue-100 text-blue-700 group-hover:bg-blue-600 group-hover:text-white' 
                      : 'bg-slate-100 text-slate-600 group-hover:bg-blue-100 group-hover:text-blue-700'
                    }
                  `}>
                    {office.type}
                  </span>
                </div>

                <p className="mt-4 text-sm text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {office.description}
                </p>

                {/* Decorative corner accent */}
                <div className={`
                  absolute bottom-0 right-0 w-16 h-16 rounded-tl-3xl transition-all duration-500
                  ${office.isHQ 
                    ? 'bg-gradient-to-tl from-blue-100/50 to-transparent group-hover:from-blue-200/70' 
                    : 'bg-gradient-to-tl from-slate-100/50 to-transparent group-hover:from-blue-100/50'
                  }
                `} />
              </article>
            );
          })}
        </div>
      </div>

      {/* Animation indicator */}
      <Container>
        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-slate-400">
          <div className="flex gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-bounce" style={{ animationDelay: '0ms' }} />
            <span className="w-2 h-2 rounded-full bg-blue-300 animate-bounce" style={{ animationDelay: '150ms' }} />
            <span className="w-2 h-2 rounded-full bg-blue-200 animate-bounce" style={{ animationDelay: '300ms' }} />
          </div>
          <span className="ml-2">Автоматическая прокрутка</span>
        </div>
      </Container>

      {/* CSS for animation */}
      <style jsx>{`
        @keyframes carousel {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-100% / 3));
          }
        }
        
        .animate-carousel {
          animation: carousel 22s linear infinite;
        }
        
        /* Ускоренная карусель на мобильных (30% быстрее) */
        @media (max-width: 768px) {
          .animate-carousel {
            animation: carousel 15s linear infinite;
          }
        }
        
        /* Остановка только на десктопе при hover (не на тачскринах) */
        @media (hover: hover) and (pointer: fine) {
          .animate-carousel:hover {
            animation-play-state: paused;
          }
        }
        
        @media (prefers-reduced-motion: reduce) {
          .animate-carousel {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
