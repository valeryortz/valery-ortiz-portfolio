import React from 'react';
import { ArrowUp } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 py-10 border-t border-slate-900 text-xs">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Identity & Program */}
          <div>
            <div className="text-white font-bold text-sm tracking-tight">
              {HERO_DATA.name}
            </div>
            <p className="mt-1 text-slate-500">
              {HERO_DATA.education.degree} · {HERO_DATA.education.institution}
            </p>
          </div>

          {/* Clean Nav Links */}
          <div className="flex flex-wrap items-center gap-6 text-slate-400">
            <a href="#hero" className="hover:text-white transition-colors">Overview</a>
            <a href="#projects" className="hover:text-white transition-colors">Projects</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white rounded-md border border-slate-800 transition-colors cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-900/80 flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] text-slate-600">
          <p>© {new Date().getFullYear()} Valery Ortiz. Built for Data Analytics, Business Intelligence & Data Operations roles.</p>
          <p>Portfolio developed with focus on data quality, operational rigor, and applied AI.</p>
        </div>
      </div>
    </footer>
  );
};
