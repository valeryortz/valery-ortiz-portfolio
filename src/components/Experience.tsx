import React from 'react';
import { Building2, CheckSquare, Search, GitBranch, Lightbulb, Users } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <CheckSquare className="w-5 h-5 text-[#C98F9D]" />;
      case 1:
        return <Search className="w-5 h-5 text-[#C98F9D]" />;
      case 2:
        return <GitBranch className="w-5 h-5 text-[#C98F9D]" />;
      case 3:
        return <Lightbulb className="w-5 h-5 text-[#C98F9D]" />;
      case 4:
        return <Users className="w-5 h-5 text-[#C98F9D]" />;
      default:
        return <Building2 className="w-5 h-5 text-[#C98F9D]" />;
    }
  };

  return (
    <section id="experience" className="py-16 md:py-20 bg-[#F7F3EF] border-b border-[#e8e2dc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4B2E4F] mb-1">
            Professional Background & Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2A2E] tracking-tight font-display">
            Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#655f68] max-w-3xl">
            Hands-on data operations management, retirement plan compliance, and end-to-end data quality governance.
          </p>
        </div>

        {/* Main Experience Card */}
        <div className="bg-white rounded-xl border border-[#e8e2dc] shadow-xs overflow-hidden">
          
          {/* Card Top: Organization & Role Header */}
          <div className="bg-[#2D2A2E] text-[#F7F3EF] p-6 sm:p-8 border-b border-[#4B2E4F]/60">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-[#e5c0ca] text-xs font-semibold uppercase tracking-wider mb-1">
                  <Building2 className="w-4 h-4 text-[#C98F9D]" />
                  <span>{EXPERIENCE_DATA.organization}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                  {EXPERIENCE_DATA.role}
                </h3>
              </div>

              <div className="sm:text-right">
                <span className="inline-block text-xs font-semibold text-[#f9edf1] bg-[#4B2E4F] border border-[#C98F9D]/50 px-3 py-1.5 rounded-md">
                  Current Leadership Role
                </span>
                <p className="text-xs text-[#aba4b0] mt-1">Retirement Plan Administration</p>
              </div>
            </div>

            {/* Role Overview */}
            <p className="mt-4 text-sm sm:text-base text-[#d0cbd4] leading-relaxed max-w-3xl">
              {EXPERIENCE_DATA.description}
            </p>
          </div>

          {/* Card Body: The 5 Core Pillars */}
          <div className="p-6 sm:p-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#857e8a] mb-6">
              Core Responsibilities & Impact Areas
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EXPERIENCE_DATA.pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className={`p-5 rounded-lg border border-[#e8e2dc] bg-[#faf8f5] hover:bg-white transition-colors ${
                    idx === 4 ? 'md:col-span-2 bg-[#fdf7f9] border-[#f1dae1]' : ''
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 bg-white rounded-lg border border-[#e8e2dc] shadow-2xs shrink-0 mt-0.5">
                      {getPillarIcon(idx)}
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-[#2D2A2E] mb-2 font-display">
                        {pillar.title}
                      </h5>
                      <p className="text-sm text-[#4a454d] leading-relaxed">
                        {pillar.detail}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
