import React from 'react';
import { ArrowDown, GraduationCap, Building2 } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

// Professional headshot portrait asset
import headshotImage from '../assets/images/headshot_placeholder_1790704504044.jpg';

interface HeroProps {
  onOpenRecruiterScan: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterScan }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 text-white pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-slate-800">
      {/* Background ambient accents in muted teal */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-20">
        <div className="absolute top-12 left-1/4 w-72 h-72 rounded-full bg-teal-500 filter blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 rounded-full bg-slate-700 filter blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Meta indicator: Program & Graduation */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-teal-300 font-medium">
              <span className="inline-flex items-center gap-1.5 text-teal-200">
                <GraduationCap className="w-4 h-4 text-teal-400 shrink-0" />
                <span>{HERO_DATA.education.degree}</span>
              </span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="text-slate-300">{HERO_DATA.education.institution}</span>
              <span className="text-slate-500" aria-hidden="true">·</span>
              <span className="text-teal-300">{HERO_DATA.education.graduation}</span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white font-display">
                {HERO_DATA.name}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-slate-300 font-medium flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>Data Operations Lead</span>
                <span className="text-slate-600">|</span>
                <span className="text-teal-300">Data Analytics & Business Intelligence</span>
                <span className="text-slate-600">|</span>
                <span className="text-slate-400">Applied AI Enthusiast</span>
              </p>
            </div>

            {/* Hero Statement */}
            <blockquote className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl font-normal border-l-2 border-teal-500/80 pl-4 py-0.5 bg-slate-800/40 rounded-r-md">
              "{HERO_DATA.statement}"
            </blockquote>

            {/* Target Roles Quick Strip */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span className="text-slate-400 font-medium">Targeting roles:</span>
              <span className="text-slate-200 bg-slate-800 px-2.5 py-1 rounded border border-slate-700">Data Analyst</span>
              <span className="text-slate-200 bg-slate-800 px-2.5 py-1 rounded border border-slate-700">Business Intelligence</span>
              <span className="text-slate-200 bg-slate-800 px-2.5 py-1 rounded border border-slate-700">Data Operations</span>
              <span className="text-teal-300 bg-slate-800/90 px-2.5 py-1 rounded border border-teal-800/50">Applied AI</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenRecruiterScan}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-slate-200 bg-slate-800 hover:bg-slate-700 border border-slate-700 rounded-lg transition-colors cursor-pointer"
              >
                <span>30-Second Recruiter Summary</span>
              </button>
            </div>

            {/* Current Affiliation Note */}
            <div className="pt-1 flex items-center gap-2 text-xs text-slate-400">
              <Building2 className="w-3.5 h-3.5 text-teal-400 shrink-0" />
              <span>Currently Data Operations Lead at Pension Services, Inc.</span>
            </div>
          </div>

          {/* Right Column: Static Headshot Circle */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative">
              {/* Outer decorative glow ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-teal-500 to-slate-700 opacity-60 blur-sm" />
              
              {/* Headshot Circle Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-800 shadow-2xl flex items-center justify-center">
                <img
                  src={headshotImage}
                  alt="Valery Ortiz - Data Analytics & Operations"
                  className="w-full h-full object-cover object-top select-none pointer-events-none"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
