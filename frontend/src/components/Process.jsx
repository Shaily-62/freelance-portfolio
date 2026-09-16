import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function Process() {
  const { process } = PORTFOLIO_DATA;

  return (
    <section className="py-20 bg-bgSoft border-y border-borderMuted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-primaryDark tracking-tight mb-3">
              How I Work
            </h2>
            <p className="text-base text-textMain/70 max-w-xl">
              A structured, transparent workflow designed to deliver high-quality code without unnecessary overhead.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-primaryDark text-bgSoft text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-terracotta transition-colors self-start md:self-auto"
          >
            START A PROJECT <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {process.map((item) => (
            <div key={item.step} className="bg-bgMain p-6 rounded-xl border border-borderMuted flex flex-col justify-between">
              <div>
                <span className="text-3xl font-bold text-terracotta/40 block mb-4">
                  {item.step}
                </span>
                <h3 className="font-bold text-lg text-primaryDark mb-2">
                  {item.name}
                </h3>
                <p className="text-xs sm:text-sm text-textMain/75 leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}