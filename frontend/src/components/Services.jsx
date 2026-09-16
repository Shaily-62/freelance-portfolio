import React from 'react';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function Services() {
  const { services } = PORTFOLIO_DATA;

  return (
    <section id="services" className="py-20 bg-bgSoft border-y border-borderMuted/80">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primaryDark tracking-tight mb-4">
            What I Can Build
          </h2>
          <p className="text-base sm:text-lg text-textMain/70 leading-relaxed">
            From a high-converting business website to a complete AI-powered application, I build digital products around your actual business needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((srv) => (
            <div
              key={srv.id}
              className="bg-bgMain border border-borderMuted p-8 rounded-2xl flex flex-col justify-between hover:border-terracotta/60 transition-all group"
            >
              <div>
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-primaryDark group-hover:text-terracotta transition-colors">
                    {srv.title}
                  </h3>
                </div>
                
                <span className="inline-block text-xs font-semibold uppercase tracking-wider text-terracotta bg-cardCream border border-borderMuted px-3 py-1 rounded-md mb-4">
                  {srv.price}
                </span>

                <p className="text-sm text-textMain/75 leading-relaxed mb-6">
                  {srv.description}
                </p>

                <ul className="space-y-2.5 mb-8">
                  {srv.includes.map((item, idx) => (
                    <li key={idx} className="flex items-center text-xs text-textMain/80 gap-2">
                      <CheckCircle2 className="w-3.5 h-3.5 text-richBrown shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#contact"
                className="inline-flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-primaryDark hover:text-terracotta border-t border-borderMuted pt-4 transition-colors"
              >
                <span>Start a project</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>

        {/* Important Pricing Disclaimer */}
        <p className="mt-8 text-xs text-textMain/60 text-center italic">
          * Starting prices are estimates. Final pricing depends on project scope, complexity, integrations, design requirements and timeline.
        </p>

      </div>
    </section>
  );
}