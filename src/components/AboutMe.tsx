import React from 'react';
import { Target, Compass } from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-slate-50 border-b border-slate-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
            Personal Philosophy & Direction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            About Me
          </h2>
        </div>

        {/* Narrative Box */}
        <div className="bg-white rounded-xl border border-slate-200 p-8 sm:p-10 shadow-xs space-y-6">
          
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-teal-50 rounded-lg text-teal-700 shrink-0 mt-1">
              <Compass className="w-5 h-5" />
            </div>
            
            <div className="space-y-4">
              {/* Exact paragraph requested */}
              <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
                "{ABOUT_DATA.paragraph}"
              </p>
            </div>
          </div>

          {/* Opportunity Interests Banner */}
          <div className="mt-8 pt-6 border-t border-slate-100 bg-slate-50/70 -mx-8 -mb-10 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-xl border-t">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-teal-800 mb-1">
                  <Target className="w-4 h-4 text-teal-600" />
                  <span>Current Focus & Career Direction</span>
                </div>
                <p className="text-sm font-semibold text-slate-900">
                  Currently interested in opportunities in:
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {ABOUT_DATA.opportunitiesTarget.map((opp) => (
                  <span
                    key={opp}
                    className="px-3 py-1.5 text-xs font-semibold bg-white text-slate-800 rounded-md border border-slate-200 shadow-2xs"
                  >
                    {opp}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
