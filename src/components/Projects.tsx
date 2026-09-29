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
    <section id="projects" className="py-16 md:py-20 bg-white border-b border-slate-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 pb-6 border-b border-slate-100">
          <div>
            <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
              Featured Case Studies & Technical Work
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
              Projects
            </h2>
            <p className="mt-2 text-sm sm:text-base text-slate-600 max-w-2xl">
              Real-world implementations in municipal AI search, retirement workflow modernization, and empirical statistical process analysis.
            </p>
          </div>

          {/* Category Filter Controls */}
          <div className="flex flex-wrap items-center gap-1.5 p-1 bg-slate-100 rounded-lg self-start md:self-auto border border-slate-200/70">
            {categories.map((cat) => {
              const isActive = activeFilter === cat;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-slate-900 text-white shadow-xs'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-200/60'
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
              className="group flex flex-col bg-slate-50/70 hover:bg-white rounded-xl border border-slate-200 hover:border-teal-500/60 hover:shadow-lg transition-all duration-200 cursor-pointer overflow-hidden p-6 sm:p-7 relative"
            >
              {/* Category & Status Line */}
              <div className="flex items-center justify-between gap-2 text-xs text-slate-500 mb-3 pb-2 border-b border-slate-200/80">
                <span className="font-semibold text-teal-700">{project.category}</span>
                {project.status ? (
                  <span className="text-amber-800 font-medium text-[11px] bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                    {project.status}
                  </span>
                ) : (
                  <span className="text-[11px] text-slate-500 font-medium">Click for details</span>
                )}
              </div>

              {/* Title */}
              <div className="flex items-start justify-between gap-3 mb-4">
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-teal-900 transition-colors font-display leading-snug">
                  {project.title}
                </h3>
                <div className="p-1 rounded-md text-slate-400 group-hover:text-teal-600 group-hover:bg-teal-50 transition-colors shrink-0">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Objective */}
              <div className="mb-4">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Objective
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed line-clamp-3">
                  {project.objective}
                </p>
              </div>

              {/* Approach Preview */}
              <div className="mb-4">
                <h4 className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-1">
                  Approach
                </h4>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed line-clamp-3">
                  {project.approach[0]}
                </p>
              </div>

              {/* Key Findings Preview */}
              <div className="mb-4 p-3 bg-white rounded-lg border border-slate-200/90 text-xs text-slate-800">
                <div className="flex items-center gap-1.5 font-bold text-[11px] uppercase tracking-wider text-teal-800 mb-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>Key Findings</span>
                </div>
                <p className="text-slate-700 leading-relaxed line-clamp-3">
                  {project.keyFindings[0]}
                </p>
              </div>

              {/* My Role */}
              <div className="mb-4 text-xs text-slate-700">
                <div className="flex items-center gap-1 font-bold text-[11px] uppercase tracking-wider text-slate-500 mb-0.5">
                  <UserCheck className="w-3 h-3 text-slate-400" />
                  <span>My Role</span>
                </div>
                <p className="font-medium text-slate-800 line-clamp-2">
                  {project.role}
                </p>
              </div>

              {/* Tools list */}
              <div className="mt-auto pt-3 border-t border-slate-200">
                <div className="flex items-center gap-1 text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                  <Wrench className="w-3 h-3 text-slate-400" />
                  <span>Tools</span>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {project.tools.slice(0, 5).map((tool) => (
                    <span
                      key={tool}
                      className="px-2 py-0.5 text-[11px] font-medium bg-white text-slate-700 rounded border border-slate-200"
                    >
                      {tool}
                    </span>
                  ))}
                  {project.tools.length > 5 && (
                    <span className="px-1.5 py-0.5 text-[11px] text-teal-700 font-semibold">
                      +{project.tools.length - 5} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom CTA hint */}
              <div className="pt-3 mt-3 flex items-center justify-between text-xs font-semibold text-teal-700 group-hover:text-teal-800">
                <span>View Full Case Study</span>
                <span className="text-slate-400 font-normal">→</span>
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
