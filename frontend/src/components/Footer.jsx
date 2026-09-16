import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';


// Custom inline brand icons to ensure no missing export issues
const GithubIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const LinkedinIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const InstagramIcon = ({ className }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);


export default function Footer() {
  const { profile } = PORTFOLIO_DATA;

  return (
    <footer className="bg-primaryDark text-bgSoft pt-16 pb-12 border-t border-borderMuted/20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Upper Callout */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pb-12 border-b border-bgSoft/10">
          <div>
            <p className="text-xs uppercase tracking-widest text-terracotta font-semibold mb-1">
              Have a project in mind?
            </p>
            <h3 className="text-2xl sm:text-3xl font-bold">
              Let's build something exceptional together.
            </h3>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-terracotta text-bgSoft text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-full hover:bg-bgMain hover:text-primaryDark transition-all"
          >
            START A PROJECT <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Links Grid */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h4 className="font-bold text-lg mb-2">{profile.name}</h4>
            <p className="text-xs text-bgSoft/70">Software Developer • Full-Stack • AI/ML</p>
            <p className="text-xs text-bgSoft/50 mt-1">{profile.location}</p>
          </div>

          <div className="flex flex-col space-y-2 text-xs text-bgSoft/80">
            <a href="#hero" className="hover:text-terracotta transition-colors">Home</a>
            <a href="#services" className="hover:text-terracotta transition-colors">Services</a>
            <a href="#projects" className="hover:text-terracotta transition-colors">Projects</a>
            <a href="#about" className="hover:text-terracotta transition-colors">About</a>
            <a href="#contact" className="hover:text-terracotta transition-colors">Contact</a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-bgSoft/20 hover:border-terracotta hover:text-terracotta transition-colors"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-bgSoft/20 hover:border-terracotta hover:text-terracotta transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={profile.socials.instagram}
              target="_blank"
              rel="noreferrer"
              className="p-2.5 rounded-full border border-bgSoft/20 hover:border-terracotta hover:text-terracotta transition-colors"
              aria-label="Instagram"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-bgSoft/10 text-center text-xs text-bgSoft/50">
          © 2026 Shaily Gupta. All rights reserved.
        </div>

      </div>
    </footer>
  );
}