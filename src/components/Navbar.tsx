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
          ? 'bg-[#2D2A2E]/95 backdrop-blur-md shadow-sm border-b border-[#4B2E4F]/40'
          : 'bg-[#2D2A2E] border-b border-[#3b373d]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Zone 1: Single text element wordmark */}
          <a
            href="#"
            className="text-base sm:text-lg font-bold tracking-tight text-[#F7F3EF] hover:text-[#C98F9D] transition-colors whitespace-nowrap"
          >
            Valery Ortiz Jimenez
          </a>

          {/* Zone 2: 4-6 text links */}
          <nav className="hidden md:flex items-center space-x-7 text-sm font-medium text-[#d0cbd4]">
            <a
              href="#hero"
              className="hover:text-[#F7F3EF] transition-colors"
            >
              Overview
            </a>
            <a
              href="#projects"
              className="hover:text-[#F7F3EF] transition-colors"
            >
              Projects
            </a>
            <a
              href="#experience"
              className="hover:text-[#F7F3EF] transition-colors"
            >
              Experience
            </a>
            <a
              href="#skills"
              className="hover:text-[#F7F3EF] transition-colors"
            >
              Skills
            </a>
            <a
              href="#about"
              className="hover:text-[#F7F3EF] transition-colors"
            >
              About
            </a>
            <a
              href="#contact"
              className="hover:text-[#F7F3EF] transition-colors"
            >
              Contact
            </a>
          </nav>

          {/* Zone 3: 1-2 primary actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenRecruiterScan}
              type="button"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold text-[#f9edf1] bg-[#4B2E4F] border border-[#C98F9D]/40 hover:bg-[#5d3962] hover:border-[#C98F9D] transition-all cursor-pointer rounded-lg"
              title="Quick recruiter overview of background and target roles"
            >
              <Sparkles className="w-3.5 h-3.5 text-[#C98F9D]" />
              <span>30-Second Recruiter Scan</span>
            </button>

            <a
              href="#projects"
              className="inline-flex items-center gap-1 px-3.5 py-1.5 text-xs font-semibold text-[#2D2A2E] bg-[#C98F9D] hover:bg-[#d7a6b2] rounded-lg transition-colors cursor-pointer shadow-xs"
            >
              <span>Work</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            {/* Mobile menu toggle */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-[#aba4b0] hover:text-[#F7F3EF] hover:bg-[#3b373d] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#2D2A2E] border-b border-[#4B2E4F]/40 px-4 pt-2 pb-5 space-y-2">
          <a
            href="#hero"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#F7F3EF] hover:bg-[#3b373d] rounded-md"
          >
            Overview
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#F7F3EF] hover:bg-[#3b373d] rounded-md"
          >
            Projects
          </a>
          <a
            href="#experience"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#F7F3EF] hover:bg-[#3b373d] rounded-md"
          >
            Experience
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#F7F3EF] hover:bg-[#3b373d] rounded-md"
          >
            Skills
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#F7F3EF] hover:bg-[#3b373d] rounded-md"
          >
            About Me
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="block px-3 py-2 text-sm font-medium text-[#F7F3EF] hover:bg-[#3b373d] rounded-md"
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
              className="w-full text-center px-3.5 py-2 text-xs font-semibold text-[#f9edf1] bg-[#4B2E4F] border border-[#C98F9D]/50 rounded-md"
            >
              Open 30-Second Recruiter Scan
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
