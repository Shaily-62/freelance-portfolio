import React from 'react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function Audience() {
  return (
    <section className="py-16 bg-bgMain border-b border-borderMuted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-primaryDark mb-3">
            Who I Work With
          </h2>
          <p className="text-sm sm:text-base text-textMain/70">
            I work with people who have an idea, a business problem or an existing product that needs a better digital experience.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {PORTFOLIO_DATA.audience.map((item, idx) => (
            <div key={idx} className="bg-bgSoft p-6 rounded-xl border border-borderMuted text-left">
              <h3 className="font-bold text-base text-primaryDark mb-2">{item.title}</h3>
              <p className="text-xs sm:text-sm text-textMain/70 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}