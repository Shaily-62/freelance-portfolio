import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function EducationBrand() {
  const topics = ["DSA", "SQL", "Java", "Interview Prep", "Software Development"];

  return (
    <section className="py-16 bg-cardCream border-y border-borderMuted">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-bgMain border border-borderMuted rounded-2xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
          
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold text-terracotta uppercase tracking-widest mb-3">
              {/* <Instagram className="w-4 h-4" /> */}
              <span>@code_fuelup</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-bold text-primaryDark tracking-tight mb-4">
              I Build. I Learn. I Teach.
            </h2>

            <p className="text-sm sm:text-base text-textMain/80 leading-relaxed mb-6">
              Alongside building software, I share what I learn through practical content around DSA, SQL, Java and interview preparation.
            </p>

            <div className="flex flex-wrap gap-2">
              {topics.map((topic, idx) => (
                <span key={idx} className="bg-bgSoft text-xs font-semibold text-richBrown px-3 py-1 rounded-full border border-borderMuted">
                  {topic}
                </span>
              ))}
            </div>
          </div>

          <div>
            <a
              href={PORTFOLIO_DATA.profile.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 bg-primaryDark text-bgSoft text-xs uppercase tracking-wider font-semibold px-7 py-3.5 rounded-full hover:bg-terracotta transition-all shadow-sm"
            >
              FOLLOW ON INSTAGRAM
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}