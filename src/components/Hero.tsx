import React, { useState, useRef } from 'react';
import { ArrowDown, GraduationCap, Building2, Upload, RefreshCw, Camera } from 'lucide-react';
import { HERO_DATA } from '../data/portfolioData';

// Placeholder headshot asset generated for Valery Ortiz
import defaultHeadshot from '../assets/images/headshot_placeholder_1790704504044.jpg';

interface HeroProps {
  onOpenRecruiterScan: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenRecruiterScan }) => {
  const [headshotSrc, setHeadshotSrc] = useState<string>(() => {
    return localStorage.getItem('valery_headshot_custom') || defaultHeadshot;
  });
  const [isCustomHeadshot, setIsCustomHeadshot] = useState<boolean>(() => {
    return !!localStorage.getItem('valery_headshot_custom');
  });
  const [showHeadshotModal, setShowHeadshotModal] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const result = uploadEvent.target?.result as string;
        if (result) {
          setHeadshotSrc(result);
          setIsCustomHeadshot(true);
          localStorage.setItem('valery_headshot_custom', result);
          setShowHeadshotModal(false);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleResetHeadshot = () => {
    setHeadshotSrc(defaultHeadshot);
    setIsCustomHeadshot(false);
    localStorage.removeItem('valery_headshot_custom');
    setShowHeadshotModal(false);
  };

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

          {/* Right Column: Headshot Placeholder Circle */}
          <div className="lg:col-span-4 flex flex-col items-center justify-center">
            <div className="relative group">
              {/* Outer decorative ring */}
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-r from-teal-500 to-slate-700 opacity-60 group-hover:opacity-100 blur-sm transition duration-300" />
              
              {/* Headshot Circle Container */}
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 border-slate-800 bg-slate-800 shadow-2xl flex items-center justify-center">
                <img
                  src={headshotSrc}
                  alt="Valery Ortiz - Professional Headshot Placeholder"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                  onError={() => {
                    // Fallback handled gracefully
                  }}
                />

                {/* Overlay hover prompt to replace/customize headshot */}
                <button
                  type="button"
                  onClick={() => setShowHeadshotModal(true)}
                  className="absolute inset-0 bg-slate-900/70 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center text-center p-4 transition-opacity cursor-pointer text-white"
                  title="Click to replace headshot"
                >
                  <Camera className="w-6 h-6 text-teal-300 mb-1" />
                  <span className="text-xs font-semibold text-white">Placeholder Circle</span>
                  <span className="text-[11px] text-teal-200">Click to replace photo</span>
                </button>
              </div>

              {/* Status pill under headshot */}
              <div className="mt-3 text-center">
                <button
                  type="button"
                  onClick={() => setShowHeadshotModal(true)}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-400 hover:text-teal-300 transition-colors cursor-pointer bg-slate-800/80 px-3 py-1 rounded-full border border-slate-700/60"
                >
                  <Camera className="w-3 h-3 text-teal-400" />
                  <span>{isCustomHeadshot ? 'Custom photo loaded' : 'Headshot placeholder · Click to customize'}</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Headshot customization modal for Valery */}
      {showHeadshotModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in">
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-6 max-w-md w-full shadow-2xl text-slate-200 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-base font-semibold text-white flex items-center gap-2">
                <Camera className="w-4 h-4 text-teal-400" />
                <span>Replace Professional Headshot</span>
              </h3>
              <button
                type="button"
                onClick={() => setShowHeadshotModal(false)}
                className="text-slate-400 hover:text-white text-sm"
              >
                ✕
              </button>
            </div>

            <p className="text-xs text-slate-300 leading-relaxed">
              As requested in your brief, this circle is a placeholder for your professional headshot. You can upload an image from your computer to preview how it looks right now, or keep the clean default studio placeholder.
            </p>

            <div className="flex items-center justify-center py-2">
              <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-teal-500 shadow-md">
                <img src={headshotSrc} alt="Preview" className="w-full h-full object-cover object-top" />
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileUpload}
                className="hidden"
                id="headshot-upload"
              />
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors cursor-pointer"
              >
                <Upload className="w-4 h-4" />
                <span>Upload Photo from Device</span>
              </button>

              {isCustomHeadshot && (
                <button
                  type="button"
                  onClick={handleResetHeadshot}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors border border-slate-700 cursor-pointer"
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>Reset to Default Studio Placeholder</span>
                </button>
              )}

              <button
                type="button"
                onClick={() => setShowHeadshotModal(false)}
                className="w-full py-2 text-xs text-slate-400 hover:text-slate-200 transition-colors"
              >
                Keep Current
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
