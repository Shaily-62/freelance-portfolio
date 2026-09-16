import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function Projects({ onSelectProject }) {
  const { projects } = PORTFOLIO_DATA;

  return (
    <section id="projects" className="py-20 bg-bgMain">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-primaryDark tracking-tight mb-3">
            Selected Work
          </h2>
          <p className="text-base sm:text-lg text-textMain/70">
            Real products, practical solutions and full-stack experiences.
          </p>
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-bgSoft border border-borderMuted rounded-2xl p-6 sm:p-8 flex flex-col justify-between hover:border-terracotta/60 transition-all group"
            >
              <div>
                {/* Visual Card Placeholder */}
                <div 
                  onClick={() => onSelectProject(project)}
                  className="w-full h-48 sm:h-56 bg-cardCream border border-borderMuted/80 rounded-xl mb-6 flex flex-col items-center justify-center cursor-pointer overflow-hidden relative group-hover:shadow-sm transition-all"
                >
                  <div className="text-center p-4">
                    <span className="text-xs font-semibold tracking-widest text-terracotta uppercase block mb-1">
                      Case Study
                    </span>
                    <h4 className="text-2xl font-bold text-primaryDark">{project.title}</h4>
                  </div>
                  <div className="absolute inset-0 bg-primaryDark/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <span className="bg-primaryDark text-bgSoft text-xs font-semibold px-4 py-2 rounded-full">
                      View Case Study
                    </span>
                  </div>
                </div>

                <p className="text-xs font-semibold text-terracotta tracking-wider uppercase mb-2">
                  {project.category}
                </p>

                <h3 
                  onClick={() => onSelectProject(project)}
                  className="text-2xl font-bold text-primaryDark mb-3 cursor-pointer hover:text-terracotta transition-colors"
                >
                  {project.title}
                </h3>

                <p className="text-sm text-textMain/75 leading-relaxed mb-6">
                  {project.shortDescription}
                </p>

                {/* Tech Chips */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {project.tech.map((t, idx) => (
                    <span
                      key={idx}
                      className="bg-bgMain border border-borderMuted text-xs font-medium text-richBrown px-2.5 py-1 rounded-md"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-between pt-4 border-t border-borderMuted gap-4">
                <button
                  onClick={() => onSelectProject(project)}
                  className="text-xs font-semibold uppercase tracking-wider text-primaryDark hover:text-terracotta transition-colors"
                >
                  Read Case Study →
                </button>

                <div className="flex items-center gap-3">
                  {project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1 text-xs font-semibold text-primaryDark hover:text-terracotta"
                    >
                      LIVE DEMO <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  ) : (
                    <span className="text-xs text-textMain/40 italic">Demo on request</span>
                  )}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1.5 text-primaryDark hover:text-terracotta"
                    aria-label="GitHub Repository"
                  >
                    {/* <Github className="w-4 h-4" /> */}
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}