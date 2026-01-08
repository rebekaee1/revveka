'use client';

import { useEffect, useState, useMemo, useRef } from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeader } from '@/components/ui/SectionHeader';
import type { Dictionary } from '@/data/dictionaries';

interface FiguresProps {
  dictionary: Dictionary;
}

// Animated counter component - simplified without early return setState
function AnimatedNumber({ value, duration = 2000 }: { value: string; duration?: number }) {
  // Parse value once
  const parsed = useMemo(() => {
    const hasPrefix = value.startsWith('>');
    const prefix = hasPrefix ? '>' : '';
    const cleanValue = value.replace('>', '').replace(/[^0-9.]/g, '');
    const suffix = value.replace(/[0-9.>]/g, '');
    const numericValue = parseFloat(cleanValue);
    const isNumeric = !isNaN(numericValue);
    const isInteger = isNumeric && Number.isInteger(numericValue);
    
    return { prefix, suffix, numericValue, isNumeric, isInteger };
  }, [value]);
  
  // Initialize state with the actual value if non-numeric
  const [displayValue, setDisplayValue] = useState(() => 
    parsed.isNumeric ? '0' : value
  );
  
  const animationRef = useRef<number | null>(null);
  
  useEffect(() => {
    // Skip animation for non-numeric values
    if (!parsed.isNumeric) {
      return;
    }
    
    const { prefix, suffix, numericValue, isInteger } = parsed;
    const startTime = Date.now();
    
    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = numericValue * easeOut;
      
      const formatted = isInteger 
        ? `${prefix}${Math.floor(current)}${suffix}`
        : `${prefix}${current.toFixed(1)}${suffix}`;
      
      setDisplayValue(formatted);
      
      if (progress < 1) {
        animationRef.current = requestAnimationFrame(animate);
      } else {
        setDisplayValue(value);
      }
    };
    
    const timer = setTimeout(() => {
      animationRef.current = requestAnimationFrame(animate);
    }, 300);
    
    return () => {
      clearTimeout(timer);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [value, duration, parsed]);
  
  return <>{displayValue}</>;
}

// Helper to calculate segments without mutation
function calculateSegments(owners: Array<{ name: string; role: string; percentage: number }>) {
  const result: Array<{
    name: string;
    role: string;
    percentage: number;
    startAngle: number;
    endAngle: number;
    color: string;
  }> = [];
  
  let cumulative = 0;
  
  for (let i = 0; i < owners.length; i++) {
    const owner = owners[i];
    const startAngle = (cumulative / 100) * 360;
    cumulative += owner.percentage;
    const endAngle = (cumulative / 100) * 360;
    
    result.push({
      ...owner,
      startAngle,
      endAngle,
      color: i === 0 ? '#1e40af' : i === 1 ? '#3b82f6' : '#93c5fd',
    });
  }
  
  return result;
}

export function Figures({ dictionary }: FiguresProps) {
  const t = dictionary.figures;
  const ownership = dictionary.ownership;

  // Calculate donut chart segments using useMemo with helper function
  const segments = useMemo(
    () => calculateSegments(ownership.owners),
    [ownership.owners]
  );

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
          <div className="lg:pt-8">
            <h3 className="text-2xl font-semibold text-slate-900 mb-2">
              {ownership.title}
            </h3>
            <p className="text-slate-600 mb-6">
              {ownership.subtitle}
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-8">
              {/* Donut Chart with animation */}
              <div className="shrink-0 group">
                <svg
                  viewBox="0 0 100 100"
                  className="w-40 h-40 sm:w-44 sm:h-44 transform group-hover:scale-105 transition-transform duration-300"
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
              <div className="flex-1 space-y-2">
                {segments.map((owner, index) => (
                  <div
                    key={owner.name}
                    className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-slate-50 transition-colors cursor-default group"
                    style={{ animationDelay: `${0.3 + index * 0.1}s` }}
                  >
                    <div
                      className="shrink-0 w-3.5 h-3.5 rounded-full group-hover:scale-125 transition-transform"
                      style={{ backgroundColor: owner.color }}
                      aria-hidden="true"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-baseline justify-between gap-2">
                        <span className="font-semibold text-slate-900 truncate text-sm">
                          {owner.name}
                        </span>
                        <span className="shrink-0 text-base font-bold text-slate-900">
                          {owner.percentage}%
                        </span>
                      </div>
                      <p className="text-xs text-slate-500">{owner.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Leadership - Chief Risk & Security Officer - Full width */}
        <div className="mt-12 p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl text-white relative overflow-hidden group hover:shadow-xl transition-all duration-300">
          {/* Decorative shield icon */}
          <div className="absolute right-8 top-1/2 -translate-y-1/2 opacity-5 group-hover:opacity-10 transition-opacity">
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.8z"/>
            </svg>
          </div>
          <div className="relative flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <div className="shrink-0 w-14 h-14 bg-blue-500/20 rounded-xl flex items-center justify-center">
              <svg className="w-7 h-7 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
              </svg>
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-xl">{t.leadership.name}</h4>
              <p className="text-blue-300 font-medium">{t.leadership.title}</p>
            </div>
            <p className="text-slate-400 text-sm max-w-md leading-relaxed sm:text-right">
              {t.leadership.description}
            </p>
          </div>
        </div>
      </Container>
    </section>
  );
}
