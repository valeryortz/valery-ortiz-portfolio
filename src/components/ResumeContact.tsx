import React, { useState } from 'react';
import { FileText, Mail, Download, Check } from 'lucide-react';
import { CONTACT_DATA } from '../data/portfolioData';

interface ResumeContactProps {
  onOpenRecruiterScan: () => void;
}

export const ResumeContact: React.FC<ResumeContactProps> = ({ onOpenRecruiterScan }) => {
  const [copied, setCopied] = useState(false);

  const handleCopyEmailPlaceholder = () => {
    navigator.clipboard.writeText(CONTACT_DATA.emailPlaceholder);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-16 md:py-24 bg-white border-b border-[#e8e2dc]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#4B2E4F] mb-1">
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#2D2A2E] tracking-tight font-display">
            Resume & Contact
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#655f68]">
            Open to internships, full-time roles, and project opportunities across Data Analytics, Business Intelligence, and Data Operations.
          </p>
        </div>

        {/* 2-Card Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto items-stretch">
          
          {/* Card 1: Resume Download */}
          <div className="bg-[#faf8f5] rounded-xl border border-[#e8e2dc] p-8 flex flex-col justify-between hover:border-[#C98F9D] transition-colors">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#fdf7f9] border border-[#f1dae1] flex items-center justify-center text-[#4B2E4F] mb-5">
                <FileText className="w-6 h-6 text-[#C98F9D]" />
              </div>
              <h3 className="text-xl font-bold text-[#2D2A2E] font-display mb-2">
                Curriculum Vitae / Resume
              </h3>
              <p className="text-sm text-[#4a454d] leading-relaxed mb-6">
                Comprehensive record of professional experience as Data Operations Lead, academic coursework at Miami Dade College, technical competencies, and project history.
              </p>
            </div>

            <div className="space-y-3">
              <a
                href={CONTACT_DATA.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-[#2D2A2E] bg-[#C98F9D] hover:bg-[#d7a6b2] rounded-lg shadow-xs hover:shadow-sm transition-all cursor-pointer"
                title="Download or View Resume PDF in new tab"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={onOpenRecruiterScan}
                className="w-full text-center text-xs font-medium text-[#655f68] hover:text-[#4B2E4F] py-1 transition-colors cursor-pointer"
              >
                View 30-Second Recruiter Summary instead →
              </button>
            </div>
          </div>

          {/* Card 2: Professional Contact */}
          <div className="bg-[#2D2A2E] text-white rounded-xl border border-[#3b373d] p-8 flex flex-col justify-between shadow-md">
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#3b373d] border border-[#4B2E4F] flex items-center justify-center text-[#C98F9D] mb-5">
                <Mail className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white font-display mb-2">
                Direct Contact
              </h3>
              <p className="text-sm text-[#d0cbd4] leading-relaxed mb-6">
                Feel free to reach out directly regarding data analyst roles, workflow optimization inquiries, or exploratory conversations in applied AI.
              </p>

              {/* Email Placeholder Display */}
              <div className="bg-[#1a181b]/80 rounded-lg border border-[#3b373d] p-4 mb-4">
                <div className="text-[11px] font-bold uppercase tracking-wider text-[#C98F9D] mb-1">
                  Candidate Email
                </div>
                <div className="font-mono text-xs sm:text-sm text-[#F7F3EF] break-all select-all">
                  {CONTACT_DATA.emailPlaceholder}
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={handleCopyEmailPlaceholder}
                className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-white bg-[#4B2E4F] hover:bg-[#5d3962] border border-[#C98F9D]/50 rounded-lg transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#C98F9D]" />
                    <span>Placeholder Copied to Clipboard</span>
                  </>
                ) : (
                  <>
                    <Mail className="w-4 h-4 text-[#C98F9D]" />
                    <span>Copy Email Placeholder</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-center text-[#aba4b0]">
                Please replace this placeholder with your active professional email address prior to public publishing.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
