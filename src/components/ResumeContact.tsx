import React, { useState } from 'react';
import { FileText, Mail, Download, Check, Info, Sparkles } from 'lucide-react';
import { CONTACT_DATA } from '../data/portfolioData';

interface ResumeContactProps {
  onOpenRecruiterScan: () => void;
}

export const ResumeContact: React.FC<ResumeContactProps> = ({ onOpenRecruiterScan }) => {
  const [copied, setCopied] = useState(false);
  const [showResumeNotice, setShowResumeNotice] = useState(false);

  const handleCopyEmailPlaceholder = () => {
    navigator.clipboard.writeText(CONTACT_DATA.emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-teal-700 mb-1">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-display">
            Resume & Contact
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Open to internships, full-time roles, and project opportunities across Data Analytics, Business Intelligence, and Data Operations.
          </p>
        </div>

        {/* 2-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card 1: Resume Download */}
          <div className="bg-slate-50/80 rounded-xl border border-slate-200 p-8 flex flex-col justify-between hover:border-teal-500/50 transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-teal-50 border border-teal-200/80 flex items-center justify-center text-teal-700 mb-5">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 font-display mb-2">
                Curriculum Vitae / Resume
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                Comprehensive record of professional experience as Data Operations Lead, academic coursework at Miami Dade College, technical competencies, and project history.
              </p>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setShowResumeNotice(true)}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg shadow-xs hover:shadow-sm transition-all cursor-pointer"
                title="Download Resume"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
                <span className="text-xs font-normal text-slate-800 bg-teal-300/80 px-2 py-0.5 rounded ml-1">
                  ({CONTACT_DATA.resumeLabel})
                </span>
              </button>

              <button
                type="button"
                onClick={onOpenRecruiterScan}
                className="w-full text-center text-xs font-medium text-slate-600 hover:text-teal-700 py-1 transition-colors cursor-pointer"
              >
                View 30-Second Recruiter Summary instead →
              </button>
            </div>
          </div>

          {/* Card 2: Professional Contact */}
          <div className="bg-slate-900 text-white rounded-xl border border-slate-800 p-8 flex flex-col justify-between shadow-md">
            <div>
              <div className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-teal-300 mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Direct Contact
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Feel free to reach out directly regarding data analyst roles, workflow optimization inquiries, or exploratory conversations in applied AI.
              </p>

              {/* Email Placeholder Display */}
              <div className="bg-slate-800/90 rounded-lg border border-slate-700 p-4 mb-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-teal-400 mb-1">
                  Candidate Email
                </div>
                <div className="font-mono text-xs sm:text-sm text-slate-200 break-all select-all">
                  {CONTACT_DATA.emailPlaceholder}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleCopyEmailPlaceholder}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-slate-600 rounded-lg transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-teal-400" />
                    <span>Placeholder Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-teal-400" />
                    <span>Copy Email Placeholder</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-slate-400">
                Please replace this placeholder with your active professional email address prior to public publishing.
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* Resume Notice Modal */}
      {showResumeNotice && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-xs animate-in fade-in">
          <div className="bg-white rounded-xl max-w-md w-full p-6 shadow-2xl border border-slate-200 text-slate-800 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2 text-teal-800 font-bold text-base">
                <FileText className="w-5 h-5 text-teal-600" />
                <span>Resume Document Status</span>
              </div>
              <button
                type="button"
                onClick={() => setShowResumeNotice(false)}
                className="text-slate-400 hover:text-slate-700 text-sm font-semibold p-1"
              >
                ✕
              </button>
            </div>

            <div className="p-3 bg-teal-50 rounded-lg border border-teal-200 text-xs text-teal-900 flex items-start gap-2">
              <Info className="w-4 h-4 text-teal-600 shrink-0 mt-0.5" />
              <div>
                <span className="font-bold">Status: {CONTACT_DATA.resumeLabel}</span>
                <p className="mt-1 text-teal-800">
                  The formatted PDF version of Valery Ortiz’s resume is currently undergoing final review. You can review all project details, experience pillars, and technical skills right here on this interactive portfolio.
                </p>
              </div>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              When published, this button will directly link to Valery's verified resume PDF.
            </p>

            <div className="pt-2 flex gap-3">
              <button
                type="button"
                onClick={() => {
                  setShowResumeNotice(false);
                  onOpenRecruiterScan();
                }}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-semibold text-slate-900 bg-teal-400 hover:bg-teal-300 rounded-lg transition-colors cursor-pointer"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Open 30s Summary</span>
              </button>
              <button
                type="button"
                onClick={() => setShowResumeNotice(false)}
                className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors cursor-pointer"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
