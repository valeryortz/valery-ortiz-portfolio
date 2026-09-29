import React from 'react';
import { Building2, CheckSquare, Search, GitBranch, Lightbulb, Users } from 'lucide-react';
import { EXPERIENCE_DATA } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const getPillarIcon = (index: number) => {
    switch (index) {
      case 0:
        return <CheckSquare className="w-5 h-5 text-teal-600" />;
      case 1:
        return <Search className="w-5 h-5 text-teal-600" />;
      case 2:
        return <GitBranch className="w-5 h-5 text-teal-600" />;
      case 3:
        return <Lightbulb className="w-5 h-5 text-teal-600" />;
      case 4:
        return <Users className="w-5 h-5 text-teal-600" />;
      default:
        return <Building2 className="w-5 h-5 text-teal-600" />;
    }
  };

  return (
    <section id="experience" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
            Professional Background & Leadership
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Experience
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-3xl">
            Hands-on data operations management, retirement plan compliance, and end-to-end data quality governance.
          </p>
        </div>

        {/* Main Experience Card */}
        <div className="bg-white rounded-xl border border-slate-200 shadow-xs overflow-hidden">
          
          {/* Card Top: Organization & Role Header */}
          <div className="bg-slate-900 text-white p-6 sm:p-8 border-b border-slate-800">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-teal-300 text-xs font-semibold uppercase tracking-wider mb-1">
                  <Building2 className="w-4 h-4 text-teal-400" />
                  <span>{EXPERIENCE_DATA.organization}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold tracking-tight text-white font-display">
                  {EXPERIENCE_DATA.role}
                </h3>
              </div>

              <div className="sm:text-right">
                <span className="inline-block text-xs font-semibold text-teal-300 bg-teal-950/80 border border-teal-800 px-3 py-1.5 rounded-md">
                  Current Leadership Role
                </span>
                <p className="text-xs text-slate-400 mt-1">Retirement Plan Administration</p>
              </div>
            </div>

            {/* Role Overview */}
            <p className="mt-4 text-sm sm:text-base text-slate-300 leading-relaxed max-w-3xl">
              {EXPERIENCE_DATA.description}
            </p>
          </div>

          {/* Card Body: The 5 Core Pillars */}
          <div className="p-6 sm:p-8">
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-6">
              Core Responsibilities & Impact Areas
            </h4>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {EXPERIENCE_DATA.pillars.map((pillar, idx) => (
                <div
                  key={pillar.title}
                  className={`p-5 rounded-lg border border-slate-200/80 bg-slate-50/50 hover:bg-slate-50 transition-colors ${
                    idx === 4 ? 'md:col-span-2 bg-teal-50/30 border-teal-200/60' : ''
                  }`}
                >
                  <div className="flex items-start gap-3.5">
                    <div className="p-2 bg-white rounded-lg border border-slate-200 shadow-2xs shrink-0 mt-0.5">
                      {getPillarIcon(idx)}
                    </div>
                    <div>
                      <h5 className="text-base font-bold text-slate-900 mb-2 font-display">
                        {pillar.title}
                      </h5>
                      <p className="text-sm text-slate-700 leading-relaxed">
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
