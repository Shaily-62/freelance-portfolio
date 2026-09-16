import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { PORTFOLIO_DATA } from '../constants/portfolioData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Services", href: "#services" },
    { name: "Projects", href: "#projects" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="sticky top-0 z-40 bg-bgMain/90 backdrop-blur-md border-b border-borderMuted/60 transition-all">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Logo */}
        <a href="#hero" className="font-bold text-lg sm:text-xl tracking-tight text-primaryDark hover:text-terracotta transition-colors">
          {PORTFOLIO_DATA.profile.name}
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-textMain/80">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              className="hover:text-terracotta transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 bg-primaryDark text-bgSoft text-xs uppercase tracking-wider font-semibold px-5 py-2.5 rounded-full hover:bg-terracotta transition-all shadow-sm"
          >
            START A PROJECT
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 text-primaryDark hover:text-terracotta focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-bgSoft border-b border-borderMuted px-6 pt-4 pb-6 space-y-4 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-base font-medium text-textMain hover:text-terracotta"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-block w-full text-center bg-primaryDark text-bgSoft text-xs uppercase tracking-wider font-semibold px-5 py-3 rounded-full hover:bg-terracotta transition-all"
          >
            START A PROJECT
          </a>
        </div>
      )}
    </header>
  );
}