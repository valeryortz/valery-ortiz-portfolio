import React, { useState } from 'react';
import { Linkedin, Github, ExternalLink, Info } from 'lucide-react';
import { SOCIAL_LINKS } from '../data/portfolioData';

export const LinksBar: React.FC = () => {
  const [clickedNotice, setClickedNotice] = useState<string | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, name: string, note: string) => {
    // Show a helpful non-intrusive tooltip toast when clicked
    setClickedNotice(`${name}: ${note}`);
    setTimeout(() => {
      setClickedNotice(null);
    }, 4500);
  };

  return (
    <section className="bg-slate-900 border-b border-slate-800 py-4 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        
        {/* Label & Recruiter context */}
        <div className="flex items-center gap-2 text-xs text-slate-400">
          <span className="font-semibold uppercase tracking-wider text-slate-300">Professional Profiles:</span>
          <span className="hidden md:inline text-slate-500">·</span>
          <span className="hidden md:inline text-slate-400">Direct portfolio links & repositories</span>
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
              className="group inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-800 hover:bg-slate-700/80 border border-slate-700 text-slate-200 hover:text-white transition-all text-xs font-medium cursor-pointer shadow-xs focus:outline-none focus:ring-2 focus:ring-teal-500/50"
              title={`${link.label} (Opens in new tab)`}
            >
              {link.icon === 'linkedin' ? (
                <Linkedin className="w-4 h-4 text-teal-400 group-hover:text-teal-300 transition-colors" />
              ) : (
                <Github className="w-4 h-4 text-slate-300 group-hover:text-white transition-colors" />
              )}
              <span>{link.label}</span>
              <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-slate-200 transition-colors" />
            </a>
          ))}
        </div>
      </div>

      {/* Non-intrusive notice when placeholder link is clicked */}
      {clickedNotice && (
        <div className="max-w-6xl mx-auto mt-2.5 animate-in fade-in slide-in-from-top-1">
          <div className="flex items-center gap-2 text-xs bg-teal-950/80 text-teal-200 border border-teal-800/80 rounded-md px-3 py-1.5 w-fit">
            <Info className="w-3.5 h-3.5 text-teal-400 shrink-0" />
            <span>{clickedNotice}</span>
          </div>
        </div>
      )}
    </section>
  );
};
