import React from 'react';
import { Database, Cpu, ShieldCheck, Briefcase } from 'lucide-react';
import { SKILLS_CATEGORIES } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Database className="w-5 h-5 text-[#C98F9D]" />;
      case 1:
        return <Cpu className="w-5 h-5 text-[#C98F9D]" />;
      case 2:
        return <ShieldCheck className="w-5 h-5 text-[#C98F9D]" />;
      case 3:
        return <Briefcase className="w-5 h-5 text-[#C98F9D]" />;
      default:
        return <Database className="w-5 h-5 text-[#C98F9D]" />;
    }
  };

  return (
    <section id="skills" className="py-16 md:py-20 bg-white border-b border-[#e8e2dc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4B2E4F] mb-1">
            Competencies & Tooling
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2A2E] tracking-tight font-display">
            Skills
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#655f68] max-w-2xl">
            Technical proficiencies, applied AI methodologies, regulatory data operations, and business execution.
          </p>
        </div>

        {/* 4-Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SKILLS_CATEGORIES.map((cat, idx) => (
            <div
              key={cat.title}
              className="bg-[#faf8f5] rounded-xl border border-[#e8e2dc] p-6 sm:p-7 hover:border-[#C98F9D] hover:bg-white transition-colors"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3 mb-3 pb-3 border-b border-[#e8e2dc]">
                <div className="p-2 bg-white rounded-lg border border-[#e8e2dc] shadow-2xs">
                  {getCategoryIcon(idx)}
                </div>
                <div>
                  <h3 className="text-lg font-bold text-[#2D2A2E] font-display">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-[#857e8a]">
                    {cat.description}
                  </p>
                </div>
              </div>

              {/* Skills Items */}
              <div className="flex flex-wrap gap-2 pt-2">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className="inline-flex items-center px-3 py-1.5 rounded-md text-xs font-medium transition-colors bg-white text-[#2D2A2E] border border-[#e8e2dc] hover:border-[#C98F9D]"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
