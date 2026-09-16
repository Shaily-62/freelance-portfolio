import React from 'react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function Pricing() {
  const { services } = PORTFOLIO_DATA;

  return (
    <section className="py-20 bg-bgMain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center max-w-xl mx-auto mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primaryDark tracking-tight mb-3">
            Simple Starting Points
          </h2>
          <p className="text-sm sm:text-base text-textMain/70">
            Clear initial estimates designed for total clarity before any development begins.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {services.map((s) => (
            <div key={s.id} className="bg-bgSoft p-5 rounded-xl border border-borderMuted text-center flex flex-col justify-between">
              <div>
                <h3 className="font-bold text-sm text-primaryDark mb-2">{s.title}</h3>
                <p className="text-base font-bold text-terracotta">{s.price}</p>
              </div>
              <a 
                href="#contact" 
                className="mt-6 block text-xs font-semibold text-richBrown hover:text-terracotta uppercase tracking-wider border-t border-borderMuted pt-3"
              >
                Inquire →
              </a>
            </div>
          ))}
        </div>

        <p className="mt-8 text-xs text-textMain/60 text-center max-w-2xl mx-auto italic">
          These are starting estimates, not fixed prices. Final pricing depends on scope, complexity, integrations, design, timeline and ongoing requirements.
        </p>

      </div>
    </section>
  );
}