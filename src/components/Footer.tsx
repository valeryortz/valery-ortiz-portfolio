import React from 'react';
import { ArrowUp } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#2D2A2E] text-[#aba4b0] py-10 border-t border-[#3b373d] text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Program */}
          <div>
            <div className="text-[#F7F3EF] font-bold text-sm tracking-tight font-display">
              {HERO_DATA.name}
            </div>
            <p className="mt-1 text-[#d0cbd4]">
              {HERO_DATA.education.degree} · {HERO_DATA.education.institution}
            </p>
          </div>

          {/* Clean Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-[#d0cbd4]">
            <a href="#hero" className="hover:text-[#F7F3EF] transition-colors">Overview</a>
            <a href="#projects" className="hover:text-[#F7F3EF] transition-colors">Projects</a>
            <a href="#experience" className="hover:text-[#F7F3EF] transition-colors">Experience</a>
            <a href="#skills" className="hover:text-[#F7F3EF] transition-colors">Skills</a>
            <a href="#about" className="hover:text-[#F7F3EF] transition-colors">About</a>
            <a href="#contact" className="hover:text-[#F7F3EF] transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#3b373d] hover:bg-[#4B2E4F] text-[#F7F3EF] rounded-md border border-[#4B2E4F]/60 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C98F9D]" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-[#3b373d] flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-[#857e8a]">
          <p>© {new Date().getFullYear()} Valery Ortiz. Built for Data Analytics, Business Intelligence & Data Operations roles.</p>
          <p>Portfolio developed with focus on data quality, operational rigor, and applied AI.</p>
        </div>
      </div>
    </footer>
  );
};
