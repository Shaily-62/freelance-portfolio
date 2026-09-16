import React, { useEffect } from 'react';
import { X, ExternalLink, CheckCircle } from 'lucide-react';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 bg-primaryDark/60 backdrop-blur-sm animate-fadeIn">
      <div className="bg-bgMain border border-borderMuted w-full max-w-3xl max-h-[90vh] rounded-2xl overflow-y-auto shadow-xl flex flex-col justify-between">
        
        {/* Modal Header */}
        <div className="p-6 sm:p-8 border-b border-borderMuted sticky top-0 bg-bgMain z-10 flex items-start justify-between">
          <div>
            <span className="text-xs font-semibold text-terracotta tracking-wider uppercase">
              {project.category}
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-primaryDark mt-1">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-borderMuted hover:bg-cardCream text-primaryDark transition-colors"
            aria-label="Close Modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8 space-y-8">
          
          {/* Screenshot / Placeholder */}
          <div className="w-full h-56 sm:h-72 bg-cardCream border border-borderMuted rounded-xl flex items-center justify-center p-6 text-center">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-terracotta mb-2">Project Screen Overview</p>
              <p className="text-lg font-bold text-primaryDark">{project.title} Interface</p>
              <p className="text-xs text-textMain/60 mt-1 max-w-md">Screenshots available in live deployment or upon technical demonstration review.</p>
            </div>
          </div>

          {/* Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-bgSoft p-5 rounded-xl border border-borderMuted">
              <h3 className="font-bold text-base text-primaryDark mb-2">The Problem</h3>
              <p className="text-xs sm:text-sm text-textMain/80 leading-relaxed">{project.problem}</p>
            </div>
            <div className="bg-bgSoft p-5 rounded-xl border border-borderMuted">
              <h3 className="font-bold text-base text-primaryDark mb-2">The Solution</h3>
              <p className="text-xs sm:text-sm text-textMain/80 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Features */}
          <div>
            <h3 className="text-lg font-bold text-primaryDark mb-4">Key Features</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-textMain/80">
                  <CheckCircle className="w-4 h-4 text-terracotta shrink-0" />
                  <span>{feat}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technology & Role */}
          <div className="space-y-4 pt-4 border-t border-borderMuted">
            <div>
              <h4 className="text-xs font-semibold text-richBrown uppercase tracking-wider mb-2">Technologies Used</h4>
              <div className="flex flex-wrap gap-2">
                {project.tech.map((t, idx) => (
                  <span key={idx} className="bg-cardCream text-primaryDark border border-borderMuted text-xs px-3 py-1 rounded-md font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-xs font-semibold text-richBrown uppercase tracking-wider mb-1">My Role</h4>
              <p className="text-sm text-textMain/80 font-medium">{project.myRole}</p>
            </div>
          </div>

        </div>

        {/* Modal Footer / CTAs */}
        <div className="p-6 border-t border-borderMuted bg-bgSoft flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            {project.liveDemo ? (
              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-primaryDark text-bgSoft text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-terracotta transition-colors"
              >
                LIVE DEMO <ExternalLink className="w-3.5 h-3.5" />
              </a>
            ) : (
              <span className="text-xs text-textMain/50 italic">Live demo environment available upon request</span>
            )}

            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 border border-borderMuted text-primaryDark text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-cardCream transition-colors"
            >
              GITHUB <GithubIcon className="w-3.5 h-3.5" />
            </a>
          </div>

          <button
            onClick={onClose}
            className="text-xs font-semibold text-richBrown hover:text-primaryDark uppercase tracking-wider"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}