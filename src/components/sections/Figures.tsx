'use client';

import { useEffect, useState } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Dictionary } from '@/data/dictionaries';

interface FiguresProps {
  dictionary: Dictionary;
}

// Animated counter component
function AnimatedNumber({ value, duration = 2000 }: { value: string; duration?: number }) {
  const [displayValue, setDisplayValue] = useState('0');
  
  useEffect(() => {
    // Check if value starts with > or has letters
    const hasPrefix = value.startsWith('>');
    const prefix = hasPrefix ? '>' : '';
    const cleanValue = value.replace('>', '').replace(/[^0-9.]/g, '');
    const suffix = value.replace(/[0-9.>]/g, '');
    const numericValue = parseFloat(cleanValue);
    
    if (isNaN(numericValue)) {
      setDisplayValue(value);
      return;
    }
    
    const startTime = Date.now();
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = numericValue * easeOut;
      
      if (Number.isInteger(numericValue)) {
        setDisplayValue(`${prefix}${Math.floor(current)}${suffix}`);
      } else {
        setDisplayValue(`${prefix}${current.toFixed(1)}${suffix}`);
      }
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    
    const timer = setTimeout(() => {
      requestAnimationFrame(animate);
    }, 300);
    
    return () => clearTimeout(timer);
  }, [value, duration]);
  
  return <>{displayValue}</>;
}

export function Figures({ dictionary }: FiguresProps) {
  const t = dictionary.figures;
  const ownership = dictionary.ownership;

  // Calculate donut chart segments
  const owners = ownership.owners;
  let cumulativePercentage = 0;
  const segments = owners.map((owner, index) => {
    const startAngle = (cumulativePercentage / 100) * 360;
    cumulativePercentage += owner.percentage;
    const endAngle = (cumulativePercentage / 100) * 360;
    return {
      ...owner,
      startAngle,
      endAngle,
      color: index === 0 ? '#1e40af' : index === 1 ? '#3b82f6' : '#93c5fd',
    };
  });

  // Create SVG arc path
  const createArc = (startAngle: number, endAngle: number, radius: number, innerRadius: number) => {
    const startRad = ((startAngle - 90) * Math.PI) / 180;
    const endRad = ((endAngle - 90) * Math.PI) / 180;
    
    const x1 = 50 + radius * Math.cos(startRad);
    const y1 = 50 + radius * Math.sin(startRad);
    const x2 = 50 + radius * Math.cos(endRad);
    const y2 = 50 + radius * Math.sin(endRad);
    
    const x3 = 50 + innerRadius * Math.cos(endRad);
    const y3 = 50 + innerRadius * Math.sin(endRad);
    const x4 = 50 + innerRadius * Math.cos(startRad);
    const y4 = 50 + innerRadius * Math.sin(startRad);
    
    const largeArc = endAngle - startAngle > 180 ? 1 : 0;
    
    return `M ${x1} ${y1} A ${radius} ${radius} 0 ${largeArc} 1 ${x2} ${y2} L ${x3} ${y3} A ${innerRadius} ${innerRadius} 0 ${largeArc} 0 ${x4} ${y4} Z`;
  };

  return (
    <section id="figures" className="py-16 sm:py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-50/50 rounded-full blur-3xl" />
      
      <Container className="relative">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Key Figures */}
          <div>
            <SectionHeader
              label={t.sectionLabel}
              title={t.title}
            />

            <div className="mt-8 grid grid-cols-2 gap-4">
              {t.stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white rounded-2xl p-6 text-center border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 hover:-translate-y-1 transition-all duration-300 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight group-hover:text-blue-700 transition-colors">
                    <AnimatedNumber value={stat.value} />
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-600 uppercase tracking-wide">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Ownership Structure */}
          <div>
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              {ownership.title}
            </h3>
            <p className="text-slate-600 mb-8">
              {ownership.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* Donut Chart with animation */}
              <div className="shrink-0 group">
                <svg
                  viewBox="0 0 100 100"
                  className="w-40 h-40 sm:w-48 sm:h-48 transform group-hover:scale-105 transition-transform duration-300"
                  role="img"
                  aria-label={ownership.title}
                >
                  {segments.map((segment, index) => (
                    <path
                      key={segment.name}
                      d={createArc(segment.startAngle, segment.endAngle, 45, 28)}
                      fill={segment.color}
                      className="transition-all duration-300 hover:opacity-80 cursor-pointer origin-center"
                      style={{
                        transformOrigin: 'center',
                        animation: `scale-in 0.5s ease-out ${index * 0.2}s both`,
                      }}
                    >
                      <title>{`${segment.name}: ${segment.percentage}%`}</title>
                    </path>
                  ))}
                  {/* Center text */}
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="middle"
                    className="text-[8px] font-semibold fill-slate-500 uppercase tracking-wider"
                  >
                    100%
                  </text>
                </svg>
              </div>

              {/* Legend */}
              <div className="flex-1 space-y-4">
                {segments.map((owner, index) => (
                  <div
                    key={owner.name}
                    className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-50 transition-colors cursor-default group"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div
                      className="shrink-0 w-4 h-4 rounded-full group-hover:scale-125 transition-transform"
                      style={{ backgroundColor: owner.color }}
                      aria-hidden="true"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-semibold text-slate-900 truncate">
                          {owner.name}
                        </span>
                        <span className="shrink-0 text-lg font-bold text-slate-900">
                          {owner.percentage}%
                        </span>
                      </div>
                      <p className="text-sm text-slate-500">{owner.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
