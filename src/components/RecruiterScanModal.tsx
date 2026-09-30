import React, { useEffect } from 'react';
import { X, Sparkles, GraduationCap, Building2, CheckCircle, ArrowRight, Mail, Download } from 'lucide-react';
import { HERO_DATA, EXPERIENCE_DATA, CONTACT_DATA } from '../data/portfolioData';

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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2D2A2E]/80 backdrop-blur-xs animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="recruiter-scan-title"
    >
      <div
        className="relative bg-white text-[#2D2A2E] rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#e8e2dc]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 bg-[#2D2A2E] text-[#F7F3EF] px-6 py-4 border-b border-[#4B2E4F]/60 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-[#C98F9D]" />
            <span id="recruiter-scan-title" className="text-sm font-bold uppercase tracking-wider text-[#e5c0ca]">
              30-Second Recruiter Fast-Scan
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#aba4b0] hover:text-white hover:bg-[#3b373d] transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          
          {/* Candidate Profile summary */}
          <div className="bg-[#faf8f5] p-4 rounded-xl border border-[#e8e2dc]">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
              <div>
                <h3 className="text-xl font-bold text-[#2D2A2E] font-display">
                  {HERO_DATA.name}
                </h3>
                <div className="flex items-center gap-2 text-xs text-[#4a454d] mt-0.5">
                  <GraduationCap className="w-3.5 h-3.5 text-[#C98F9D]" />
                  <span>{HERO_DATA.education.degree}</span>
                </div>
                <div className="text-xs text-[#857e8a]">
                  {HERO_DATA.education.institution} · {HERO_DATA.education.graduation}
                </div>
              </div>

              <div className="sm:text-right">
                <div className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#4B2E4F] bg-[#fdf7f9] px-2.5 py-1 rounded border border-[#f1dae1]">
                  <Building2 className="w-3.5 h-3.5 text-[#C98F9D]" />
                  <span>{EXPERIENCE_DATA.role}</span>
                </div>
                <div className="text-xs text-[#857e8a] mt-0.5">
                  {EXPERIENCE_DATA.organization}
                </div>
              </div>
            </div>
          </div>

          {/* Target Roles */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#857e8a] mb-2">
              Target Roles
            </div>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-semibold bg-[#fdf7f9] text-[#4B2E4F] border border-[#f1dae1] rounded-md">
                Data Analyst
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-[#fdf7f9] text-[#4B2E4F] border border-[#f1dae1] rounded-md">
                Business Intelligence
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-[#fdf7f9] text-[#4B2E4F] border border-[#f1dae1] rounded-md">
                Data Operations
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-[#F7F3EF] text-[#2D2A2E] border border-[#e8e2dc] rounded-md">
                Applied AI (Exploring)
              </span>
            </div>
          </div>

          {/* 4 Core Value Propositions */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#857e8a] mb-2.5">
              Quick Impact Takeaways
            </div>
            <div className="space-y-2.5 text-xs sm:text-sm text-[#3b373d]">
              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#e8e2dc]">
                <CheckCircle className="w-4 h-4 text-[#C98F9D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2D2A2E]">Data Quality & Regulatory Rigor:</strong> Extensive experience reviewing census, payroll, and contribution datasets; researching complex multi-year Defined Benefit participant records.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#e8e2dc]">
                <CheckCircle className="w-4 h-4 text-[#C98F9D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2D2A2E]">Legacy-to-Modern Application Modernization:</strong> Analyzing Microsoft Access VBA workflows and translating operational requirements into a modern .NET/WPF & SQL Server application.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#e8e2dc]">
                <CheckCircle className="w-4 h-4 text-[#C98F9D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2D2A2E]">Empirical Statistical Workflow Analysis:</strong> Analyzed 811 company records using ANOVA, regression, and hypothesis testing in R to evaluate submission timeliness and follow-up impact.
                </div>
              </div>

              <div className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-[#e8e2dc]">
                <CheckCircle className="w-4 h-4 text-[#C98F9D] shrink-0 mt-0.5" />
                <div>
                  <strong className="text-[#2D2A2E]">Applied AI & RAG Quality Layer:</strong> Focused on retrieval scoring, semantic similarity, structured Q&A, and reranking logic for City of Miami Public Benefits assistant.
                </div>
              </div>
            </div>
          </div>

          {/* Quick Technical Stack */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#857e8a] mb-2">
              Core Technical Toolkit
            </div>
            <p className="text-xs text-[#3b373d] leading-relaxed font-mono bg-[#faf8f5] p-3 rounded border border-[#e8e2dc]">
              Python · SQL · Excel · R (Basic) · Power BI · Tableau · Microsoft Access / VBA · .NET/WPF · RAG · Semantic Search · BigQuery (Introductory) · Azure DevOps (Exposure)
            </p>
          </div>

          {/* Contact note */}
          <div className="p-3 bg-[#fdf7f9] rounded-lg border border-[#f1dae1] flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs text-[#4B2E4F]">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4 text-[#C98F9D] shrink-0" />
              <span>Contact email: <strong className="font-semibold text-[#2D2A2E]">{CONTACT_DATA.email}</strong></span>
            </div>
            <a
              href={CONTACT_DATA.resumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-semibold text-[#4B2E4F] hover:text-[#692e3d] underline underline-offset-2 shrink-0"
              title="Open Resume PDF in new tab"
            >
              <Download className="w-3.5 h-3.5 text-[#C98F9D]" />
              <span>Resume PDF</span>
            </a>
          </div>

        </div>

        {/* Footer */}
        <div className="bg-[#faf8f5] px-6 py-4 border-t border-[#e8e2dc] flex items-center justify-between">
          <a
            href="#projects"
            onClick={onClose}
            className="inline-flex items-center gap-1 text-xs font-semibold text-[#4B2E4F] hover:text-[#692e3d]"
          >
            <span>Explore full project cards</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#C98F9D]" />
          </a>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#F7F3EF] bg-[#2D2A2E] hover:bg-[#3b373d] rounded-lg transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>

      </div>
    </div>
  );
};
