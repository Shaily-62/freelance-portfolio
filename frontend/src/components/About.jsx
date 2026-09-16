import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-bgSoft border-y border-borderMuted">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <span className="text-xs font-semibold tracking-widest text-terracotta uppercase block mb-3">
          About
        </span>
        <h2 className="text-3xl sm:text-5xl font-bold text-primaryDark tracking-tight mb-8">
          Developer. Builder. Educator.
        </h2>

        <div className="space-y-6 text-base sm:text-lg text-textMain/80 leading-relaxed font-normal">
          <p>
            I'm Shaily Gupta, a software developer focused on building practical digital products using modern full-stack and AI technologies.
          </p>
          <p>
            I enjoy turning ideas into functional products — from responsive business websites and dashboards to full-stack applications and AI-powered experiences.
          </p>
          <p>
            Alongside development, I create educational content around DSA, SQL, Java and interview preparation.
          </p>
        </div>
      </div>
    </section>
  );
}