import React from 'react';
import { Target, Compass } from 'lucide-react';
import { ABOUT_DATA } from '../data/portfolioData';

export const AboutMe: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-20 bg-[#F7F3EF] border-b border-[#e8e2dc]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-10">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4B2E4F] mb-1">
            Personal Philosophy & Direction
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2A2E] tracking-tight font-display">
            About Me
          </h2>
        </div>

        {/* Narrative Box */}
        <div className="bg-white rounded-xl border border-[#e8e2dc] p-8 sm:p-10 shadow-xs space-y-6">
          
          <div className="flex items-start gap-4">
            <div className="p-2.5 bg-[#fdf7f9] rounded-lg text-[#4B2E4F] shrink-0 mt-1 border border-[#f1dae1]">
              <Compass className="w-5 h-5 text-[#C98F9D]" />
            </div>
            
            <div className="space-y-4">
              {/* Exact paragraph requested */}
              <p className="text-base sm:text-lg text-[#3b373d] leading-relaxed font-normal">
                {ABOUT_DATA.paragraph}
              </p>
            </div>
          </div>

          {/* Opportunity Interests Banner */}
          <div className="mt-8 pt-6 border-t border-[#eee8e2] bg-[#faf8f5] -mx-8 -mb-10 sm:-mx-10 sm:-mb-10 p-6 sm:p-8 rounded-b-xl">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#4B2E4F] mb-1">
                  <Target className="w-4 h-4 text-[#C98F9D]" />
                  <span>Current Focus & Career Direction</span>
                </div>
                <p className="text-sm font-semibold text-[#2D2A2E]">
                  Currently interested in opportunities in:
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-2">
                {ABOUT_DATA.opportunitiesTarget.map((opp) => (
                  <span
                    key={opp}
                    className="px-3 py-1.5 text-xs font-semibold bg-white text-[#4B2E4F] rounded-md border border-[#e8e2dc] shadow-2xs"
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
