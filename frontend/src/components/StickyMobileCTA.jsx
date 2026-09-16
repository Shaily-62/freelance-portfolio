import React, { useState, useEffect } from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    <div className="md:hidden fixed bottom-4 left-4 right-4 z-40 animate-fadeIn">
      <a
        href="#contact"
        className="flex items-center justify-between bg-primaryDark text-bgSoft text-xs font-bold uppercase tracking-wider px-5 py-3.5 rounded-full shadow-lg border border-borderMuted"
      >
        <span>Have a project?</span>
        <span className="flex items-center gap-1 text-terracotta font-semibold">
          START A PROJECT <ArrowUpRight className="w-4 h-4" />
        </span>
      </a>
    </div>
  );
}