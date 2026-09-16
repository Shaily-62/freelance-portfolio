import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function Trust() {
  const { trustPoints } = PORTFOLIO_DATA;

  return (
    <section className="py-20 bg-bgMain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-bold text-primaryDark tracking-tight mb-3">
            Why Work With Me
          </h2>
          <p className="text-sm sm:text-base text-textMain/70">
            Real engineering fundamentals, transparent communication, and authentic execution.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trustPoints.map((item, idx) => (
            <div key={idx} className="bg-bgSoft p-6 rounded-xl border border-borderMuted">
              <div className="flex items-center gap-2 mb-3">
                <CheckCircle2 className="w-5 h-5 text-terracotta shrink-0" />
                <h3 className="font-bold text-base text-primaryDark">{item.title}</h3>
              </div>
              <p className="text-xs sm:text-sm text-textMain/75 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}