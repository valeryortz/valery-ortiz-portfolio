import React from 'react';
import { ArrowDown, GraduationCap, Building2 } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

// Permanent headshot image for Valery Ortiz
import headshotImage from '/valery-profile-photo.jpg';

interface HeroProps {
  onOpenRecruiterScan: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterScan }) => {
  return (
    <section id="hero" className="relative bg-gradient-to-b from-[#2D2A2E] via-[#2A162D] to-[#4B2E4F] text-[#F7F3EF] pt-12 pb-16 md:pt-20 md:pb-24 overflow-hidden border-b border-[#4B2E4F]/60">
      {/* Background ambient accents in muted rose & plum */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 pointer-events-none opacity-25">
        <div className="absolute top-12 left-1/4 w-72 h-72 rounded-full bg-[#C98F9D] filter blur-3xl" />
        <div className="absolute top-20 right-1/4 w-80 h-80 rounded-full bg-[#4B2E4F] filter blur-3xl" />
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Hero Copy & Actions */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Meta indicator: Program & Graduation */}
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm text-[#e5c0ca] font-medium">
              <span className="inline-flex items-center gap-1.5 text-[#f9edf1]">
                <GraduationCap className="w-4 h-4 text-[#C98F9D] shrink-0" />
                <span>{HERO_DATA.education.degree}</span>
              </span>
              <span className="text-[#857e8a]" aria-hidden="true">·</span>
              <span className="text-[#d0cbd4]">{HERO_DATA.education.institution}</span>
              <span className="text-[#857e8a]" aria-hidden="true">·</span>
              <span className="text-[#C98F9D] font-semibold">{HERO_DATA.education.graduation}</span>
            </div>

            {/* Name */}
            <div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#F7F3EF] font-display">
                {HERO_DATA.name}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-[#d0cbd4] font-medium flex flex-wrap items-center gap-x-2 gap-y-1">
                <span>Data Operations Lead</span>
                <span className="text-[#655f68]">|</span>
                <span className="text-[#e5c0ca]">Data Analytics & Business Intelligence</span>
                <span className="text-[#655f68]">|</span>
                <span className="text-[#aba4b0]">Applied AI Enthusiast</span>
              </p>
            </div>

            {/* Hero Statement */}
            <blockquote className="text-base sm:text-lg text-[#F7F3EF] leading-relaxed max-w-2xl font-normal border-l-2 border-[#C98F9D] pl-4 py-0.5 bg-[#2D2A2E]/60 rounded-r-md">
              {HERO_DATA.statement}
            </blockquote>

            {/* Target Roles Quick Strip */}
            <div className="pt-1 flex flex-wrap items-center gap-2 text-xs text-[#aba4b0]">
              <span className="text-[#d0cbd4] font-medium">Targeting roles:</span>
              <span className="text-[#F7F3EF] bg-[#3b373d]/80 px-2.5 py-1 rounded border border-[#4B2E4F]">Data Analyst</span>
              <span className="text-[#F7F3EF] bg-[#3b373d]/80 px-2.5 py-1 rounded border border-[#4B2E4F]">Business Intelligence</span>
              <span className="text-[#F7F3EF] bg-[#3b373d]/80 px-2.5 py-1 rounded border border-[#4B2E4F]">Data Operations</span>
              <span className="text-[#f9edf1] bg-[#4B2E4F] px-2.5 py-1 rounded border border-[#C98F9D]/50 font-medium">Applied AI</span>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-4">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-[#2D2A2E] bg-[#C98F9D] hover:bg-[#d7a6b2] rounded-lg shadow-md hover:shadow-lg transition-all cursor-pointer transform hover:-translate-y-0.5"
              >
                <span>View My Work</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenRecruiterScan}
                className="inline-flex items-center gap-2 px-5 py-3 text-sm font-medium text-[#F7F3EF] bg-[#4B2E4F] hover:bg-[#5d3962] border border-[#C98F9D]/40 rounded-lg transition-colors cursor-pointer"
              >
                <span>30-Second Recruiter Summary</span>
              </button>
            </div>

            {/* Current Affiliation Note */}
            <div className="pt-1 flex items-center gap-2 text-xs text-[#d0cbd4]">
              <Building2 className="w-3.5 h-3.5 text-[#C98F9D] shrink-0" />
              <span>Currently Data Operations Lead at Pension Services, Inc.</span>
            </div>
          </div>

          {/* Right Column: Static Headshot Circle */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative">
              {/* Outer decorative glow ring: Muted rose to deep plum */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-[#C98F9D] via-[#714677] to-[#4B2E4F] opacity-70 blur-sm" />
              
              {/* Headshot Circle Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-[#2D2A2E] bg-[#2D2A2E] shadow-2xl flex items-center justify-center">
                <img
                  src={headshotImage}
                  alt="Valery Ortiz Jimenez"
                  className="w-full h-full object-cover object-[50%_20%] select-none pointer-events-none"
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
