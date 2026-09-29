import React, { useEffect } from 'react';
import { X, CheckCircle2, Cpu, Wrench, UserCheck, ShieldAlert, Sparkles } from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-white text-slate-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-slate-900 text-white px-6 py-5 border-b border-slate-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-teal-300 font-medium mb-1">
              <span>{project.category}</span>
              {project.status && (
                <>
                  <span className="text-slate-500" aria-hidden="true">·</span>
                  <span className="text-amber-300 font-semibold">{project.status}</span>
                </>
              )}
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-white font-display">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Executive Objective */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-800 flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-teal-600" />
              <span>Project Objective</span>
            </h3>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed font-normal bg-slate-50 p-4 rounded-lg border border-slate-200/80">
              {project.objective}
            </p>
          </div>

          {/* Approach & Methodology */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-800 flex items-center gap-1.5 mb-2">
              <Cpu className="w-3.5 h-3.5 text-teal-600" />
              <span>Approach & Methodology</span>
            </h3>
            <div className="space-y-3">
              {project.approach.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-slate-700 leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Findings */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-800 flex items-center gap-1.5 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-teal-600" />
              <span>Key Findings & Outcomes</span>
            </h3>
            <div className="space-y-2.5 bg-teal-50/50 p-4 rounded-lg border border-teal-100">
              {project.keyFindings.map((finding, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-slate-800 leading-relaxed">
                  <span className="text-teal-700 font-bold">›</span>
                  <p>{finding}</p>
                </div>
              ))}
            </div>
          </div>

          {/* My Role */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-800 flex items-center gap-1.5 mb-2">
              <UserCheck className="w-3.5 h-3.5 text-teal-600" />
              <span>My Role</span>
            </h3>
            <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 text-sm text-slate-800 leading-relaxed">
              <p className="font-medium text-slate-900">{project.role}</p>
              {project.roleNote && (
                <p className="mt-2 text-xs text-slate-600 pt-2 border-t border-slate-200">
                  {project.roleNote}
                </p>
              )}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-teal-800 flex items-center gap-1.5 mb-2.5">
              <Wrench className="w-3.5 h-3.5 text-teal-600" />
              <span>Tools & Technologies Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 text-xs font-medium bg-slate-100 text-slate-700 rounded border border-slate-200"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Confidentiality / Compliance Note if applicable */}
          {project.complianceNote && (
            <div className="p-3 rounded-lg bg-amber-50 border border-amber-200 flex items-start gap-2 text-xs text-amber-900">
              <ShieldAlert className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <span>{project.complianceNote}</span>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-lg transition-colors cursor-pointer"
          >
            Close Project Details
          </button>
        </div>

      </div>
    </div>
  );
};
