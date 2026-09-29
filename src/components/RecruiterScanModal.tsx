import React, { useEffect } from 'react';
import { X, Sparkles, GraduationCap, Building2, CheckCircle, ArrowRight, ShieldCheck, Mail } from 'lucide-react';
import { HERO_DATA, EXPERIENCE_DATA, PROJECTS_DATA, CONTACT_DATA } from '../data/portfolioData';

interface RecruiterScanModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RecruiterScanModal: React.FC<RecruiterScanModalProps> = ({ isOpen, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="recruiter-scan-title"
    >
      <div
        className="relative bg-white text-slate-800 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-slate-900 text-white px-6 py-4 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span id="recruiter-scan-title" className="text-sm font-bold uppercase tracking-wider text-teal-300">
              30-Second Recruiter Fast-Scan
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          
          {/* Candidate Profile summary */}
          <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-slate-900 font-display">
                  {HERO_DATA.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-slate-600 mt-0.5">
                  <GraduationCap className="w-3.5 h-3.5 text-teal-600" />
                  <span>{HERO_DATA.education.degree}</span>
                </div>
                <div className="text-xs text-slate-500">
                  {HERO_DATA.education.institution} · {HERO_DATA.education.graduation}
                </div>
              </div>

              <div className="sm:text-right">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-800 bg-teal-50 px-2.5 py-1 rounded border border-teal-200">
                  <Building2 className="w-3.5 h-3.5 text-teal-600" />
                  <span>{EXPERIENCE_DATA.role}</span>
                </div>
                <div className="text-xs text-slate-500 mt-0.5">
                  {EXPERIENCE_DATA.organization}
                </div>
              </div>
            </div>
          </div>

          {/* Target Roles */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Target Roles
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-semibold bg-teal-50 text-teal-900 border border-teal-200 rounded-md">
                Data Analyst
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-teal-50 text-teal-900 border border-teal-200 rounded-md">
                Business Intelligence
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-teal-50 text-teal-900 border border-teal-200 rounded-md">
                Data Operations
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-slate-100 text-slate-800 border border-slate-200 rounded-md">
                Applied AI (Exploring)
              </span>
            </div>
          </div>

          {/* 4 Core Value Propositions */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
              Quick Impact Takeaways
            </div>
            <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Data Quality & Regulatory Rigor:</strong> Extensive experience reviewing census, payroll, and contribution datasets; researching complex multi-year Defined Benefit participant records.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Legacy-to-Modern Application Modernization:</strong> Analyzing Microsoft Access VBA workflows and translating operational requirements into a modern .NET/WPF & SQL Server application.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Empirical Statistical Workflow Analysis:</strong> Analyzed 811 company records using ANOVA, regression, and hypothesis testing in R to evaluate submission timeliness and follow-up impact.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-slate-200">
                <CheckCircle className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
                <div>
                  <strong className="text-slate-900">Applied AI & RAG Quality Layer:</strong> Focused on retrieval scoring, semantic similarity, structured Q&A, and reranking logic for City of Miami Public Benefits assistant.
                </div>
              </div>
            </div>
          </div>

          {/* Quick Technical Stack */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              Core Technical Toolkit
            </div>
            <p className="text-xs text-slate-700 leading-relaxed font-mono bg-slate-50 p-3 rounded border border-slate-200">
              Python · SQL · Excel · R (Basic) · Power BI · Tableau · Microsoft Access / VBA · .NET/WPF · RAG · Semantic Search · BigQuery (Introductory) · Azure DevOps (Exposure)
            </p>
          </div>

          {/* Contact note */}
          <div className="p-3 bg-teal-50 rounded-lg border border-teal-200 flex items-center justify-between text-xs text-teal-900">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-teal-600" />
              <span>Contact email placeholder ready for recruiter connection.</span>
            </div>
            <span className="font-semibold">{CONTACT_DATA.resumeLabel}</span>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-slate-50 px-6 py-4 border-t border-slate-200 flex items-center justify-between">
          <a
            href="#projects"
            onClick={onClose}
            className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-800"
          >
            <span>Explore full project cards</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-slate-800 rounded-lg transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
