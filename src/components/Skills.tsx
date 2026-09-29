import React from 'react';
import { Database, Cpu, ShieldCheck, Briefcase } from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Database className="w-5 h-5 text-teal-600" />;
      case 1:
        return <Cpu className="w-5 h-5 text-teal-600" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-teal-600" />;
      case 3:
        return <Briefcase className="w-5 h-5 text-teal-600" />;
      default:
        return <Database className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
            Competencies & Tooling
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Skills
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
            Technical proficiencies, applied AI methodologies, regulatory data operations, and business execution.
          </p>
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-slate-50/70 rounded-xl border border-slate-200 p-6 sm:p-7 hover:border-teal-500/40 hover:bg-slate-50 transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-slate-200">
                <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs">
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-slate-500">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills Items */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => {
                  const isSpecialNote =
                    skill.name.includes('— Basic') ||
                    skill.name.includes('— Introductory') ||
                    skill.name.includes('— Exposure');

                  return (
                    <span
                      key={skill.name}
                      className={`inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
                        isSpecialNote
                          ? 'bg-teal-50/80 text-teal-900 border border-teal-200 font-semibold'
                          : 'bg-white text-slate-800 border border-slate-200 hover:border-slate-300'
                      }`}
                    >
                      {skill.name}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Level of Experience Clarity Note */}
        <div className="mt-8 text-center text-xs text-slate-500">
          <span>* Specific exposure levels clearly indicated for transparency (R — Basic, BigQuery — Introductory, Azure DevOps — Exposure).</span>
        </div>

      </div>
    </section>
  );
};
