import React, { useState, useEffect } from 'react';
import { Sparkles, Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenRecruiterScan: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenRecruiterScan }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-200 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-sm border-b border-slate-800'
          : 'bg-slate-900 border-b border-slate-800'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-lg font-bold tracking-tight text-white hover:text-teal-300 transition-colors whitespace-nowrap"
          >
            Valery Ortiz
          </a>

          {/* Zone 2: 4-6 text links */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-slate-300">
            <a
              href="#hero"
              className="hover:text-white transition-colors"
            >
              Overview
            </a>
            <a
              href="#projects"
              className="hover:text-white transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-white transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="hover:text-white transition-colors"
            >
              Skills
            </a>
            <a
              href="#about"
              className="hover:text-white transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-white transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenRecruiterScan}
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-teal-300 bg-teal-950/80 border border-teal-800/80 hover:bg-teal-900 hover:text-teal-200 transition-all cursor-pointer rounded-lg"
              title="Quick recruiter overview of background and target roles"
            >
              <Sparkles className="w-3.5 h-3.5 text-teal-400" />
              <span>30-Second Recruiter Scan</span>
            </button>

            <a
              href="#projects"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-medium text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors cursor-pointer font-semibold shadow-xs"
            >
              <span>Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-4 pt-2 pb-5 space-y-2">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Overview
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Skills
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            About Me
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-slate-200 hover:bg-slate-800 rounded-md"
          >
            Resume & Contact
          </a>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRecruiterScan();
              }}
              type="button"
              className="w-full text-center px-3.5 py-2 text-xs font-semibold text-teal-300 bg-teal-950/80 border border-teal-800/80 rounded-md"
            >
              Open 30-Second Recruiter Scan
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
