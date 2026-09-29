import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Wrench, UserCheck } from 'lucide-react';
import { PROJECTS_DATA, Project } from '../data/portfolioData';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Data Analytics', 'Applied AI', 'Data Operations'];

  const filteredProjects =
    activeFilter === 'All'
      ? PROJECTS_DATA
      : PROJECTS_DATA.filter((p) => p.category === activeFilter);

  return (
    <section id="projects" className="py-16 md:py-20 bg-[#F7F3EF] border-b border-[#e8e2dc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-[#e8e2dc]">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-[#4B2E4F] mb-1">
              Featured Case Studies & Technical Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2A2E] tracking-tight font-display">
              Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#655f68] max-w-2xl">
              Real-world implementations in municipal AI search, retirement workflow modernization, and empirical statistical process analysis.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#eee8e2] rounded-lg self-start md:self-auto border border-[#d9d0c7]">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#4B2E4F] text-[#F7F3EF] shadow-xs'
                      : 'text-[#655f68] hover:text-[#2D2A2E] hover:bg-[#e8e2dc]'
                  }`}
                >
                  {cat === 'All' ? 'All Projects' : cat}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              onClick={() => setSelectedProject(project)}
              className="group flex flex-col bg-white hover:bg-[#faf8f5] rounded-xl border border-[#e8e2dc] hover:border-[#C98F9D] hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden p-6 sm:p-7 relative"
            >
              {/* Category & Status Line */}
              <div className="flex items-center justify-between gap-2 text-xs text-[#857e8a] mb-3 pb-2 border-b border-[#eee8e2]">
                <span className="font-bold text-[#4B2E4F]">{project.category}</span>
                {project.status ? (
                  <span className="text-[#692e3d] font-semibold text-[11px] bg-[#f9edf1] px-2 py-0.5 rounded border border-[#f1dae1]">
                    {project.status}
                  </span>
                ) : (
                  <span className="text-[11px] text-[#857e8a] font-medium">Click for details</span>
                )}
              </div>

              {/* Title */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-[#2D2A2E] group-hover:text-[#4B2E4F] transition-colors font-display leading-snug">
                  {project.title}
                </h3>
                <div className="p-1 rounded-md text-[#aba4b0] group-hover:text-[#4B2E4F] group-hover:bg-[#f7f2f9] transition-colors shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Objective */}
              <div className="mb-4">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#857e8a] mb-1">
                  Objective
                </h4>
                <p className="text-xs sm:text-sm text-[#4a454d] leading-relaxed line-clamp-3">
                  {project.objective}
                </p>
              </div>

              {/* Approach Preview */}
              <div className="mb-4">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-[#857e8a] mb-1">
                  Approach
                </h4>
                <p className="text-xs sm:text-sm text-[#4a454d] leading-relaxed line-clamp-3">
                  {project.approach[0]}
                </p>
              </div>

              {/* Key Findings Preview */}
              <div className="mb-4 p-3 bg-[#fdf7f9] rounded-lg border border-[#f1dae1] text-xs text-[#2D2A2E]">
                <div className="flex items-center gap-1.5 font-bold text-[11px] uppercase tracking-wider text-[#4B2E4F] mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#C98F9D]" />
                  <span>Key Findings</span>
                </div>
                <p className="text-[#3b373d] leading-relaxed line-clamp-3">
                  {project.keyFindings[0]}
                </p>
              </div>

              {/* My Role */}
              <div className="mb-4 text-xs text-[#4a454d]">
                <div className="flex items-center gap-1 font-bold text-[11px] uppercase tracking-wider text-[#857e8a] mb-0.5">
                  <UserCheck className="w-3 h-3 text-[#C98F9D]" />
                  <span>My Role</span>
                </div>
                <p className="font-semibold text-[#2D2A2E] line-clamp-2">
                  {project.role}
                </p>
              </div>

              {/* Tools list */}
              <div className="mt-auto pt-3 border-t border-[#eee8e2]">
                <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-[#857e8a] mb-2">
                  <Wrench className="w-3 h-3 text-[#C98F9D]" />
                  <span>Tools</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 5).map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 text-[11px] font-medium bg-[#F7F3EF] text-[#3b373d] rounded border border-[#e8e2dc]"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[11px] text-[#4B2E4F] font-semibold">
                      +{project.tools.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom CTA hint */}
              <div className="pt-3 mt-3 flex items-center justify-between text-xs font-semibold text-[#4B2E4F] group-hover:text-[#692e3d]">
                <span>View Full Case Study</span>
                <span className="text-[#C98F9D] font-normal">→</span>
              </div>
            </article>
          ))}
        </div>

      </div>

      {/* Detailed Modal view */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
};
