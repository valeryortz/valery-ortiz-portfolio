import React, { useState } from 'react';
import { Linkedin, Github, ExternalLink, Info } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const LinksBar: React.FC = () => {
  const [clickedNotice, setClickedNotice] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, note?: string) => {
    // If the link has a placeholder note (e.g. GitHub Coming Soon), show the non-intrusive tooltip
    if (note) {
      setClickedNotice(`${name}: ${note}`);
      setTimeout(() => {
        setClickedNotice(null);
      }, 4500);
    }
  };

  return (
    <section className="bg-[#2D2A2E] border-b border-[#3b373d] py-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Label & Recruiter context */}
        <div className="flex items-center gap-2 text-xs text-[#aba4b0]">
          <span className="font-semibold uppercase tracking-wider text-[#d0cbd4]">Professional Profiles:</span>
          <span className="hidden md:inline text-[#655f68]">·</span>
          <span className="hidden md:inline text-[#aba4b0]">Direct portfolio links & repositories</span>
        </div>

        {/* Links icon buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => handleClick(e, link.name, link.note)}
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-[#3b373d]/70 hover:bg-[#4B2E4F] border border-[#4B2E4F]/80 text-[#F7F3EF] hover:text-white transition-all text-xs font-medium cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-[#C98F9D]/50"
              title={`${link.label} (Opens in new tab)`}
            >
              {link.icon === 'linkedin' ? (
                <Linkedin className="w-4 h-4 text-[#C98F9D] group-hover:text-[#f1dae1] transition-colors" />
              ) : (
                <Github className="w-4 h-4 text-[#d0cbd4] group-hover:text-white transition-colors" />
              )}
              <span>{link.label}</span>
              <ExternalLink className="w-3 h-3 text-[#aba4b0] group-hover:text-[#F7F3EF] transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Non-intrusive notice when placeholder link is clicked */}
      {clickedNotice && (
        <div className="max-w-6xl mx-auto mt-2.5 animate-in fade-in slide-in-from-top-1">
          <div className="flex items-center gap-2 text-xs bg-[#4B2E4F] text-[#f9edf1] border border-[#C98F9D]/60 rounded-md px-3 py-1.5 w-fit shadow-sm">
            <Info className="w-3.5 h-3.5 text-[#C98F9D] shrink-0" />
            <span>{clickedNotice}</span>
          </div>
        </div>
      )}
    </section>
  );
};
