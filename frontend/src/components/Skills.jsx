import React from 'react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function Skills() {
  const { skills } = PORTFOLIO_DATA;

  return (
    <section className="py-20 bg-bgMain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl font-bold text-primaryDark tracking-tight mb-3">
            Technical Capabilities
          </h2>
          <p className="text-sm sm:text-base text-textMain/70">
            A focused toolkit engineered for clean code, reliability, and real product deployment.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items]) => (
            <div key={category} className="bg-bgSoft border border-borderMuted p-6 rounded-xl">
              <h3 className="text-xs font-bold text-terracotta uppercase tracking-wider mb-4">
                {category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="bg-cardCream text-primaryDark text-xs font-medium px-3 py-1.5 rounded-md border border-borderMuted"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}