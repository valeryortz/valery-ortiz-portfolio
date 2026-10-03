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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#2D2A2E]/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative bg-white text-[#2D2A2E] rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-[#e8e2dc]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="sticky top-0 z-10 bg-[#2D2A2E] text-[#F7F3EF] px-6 py-5 border-b border-[#4B2E4F]/60 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-[#e5c0ca] font-medium mb-1">
              <span className="font-semibold">{project.category}</span>
              {project.status && (
                <>
                  <span className="text-[#857e8a]" aria-hidden="true">·</span>
                  <span className="text-[#f1dae1] bg-[#4B2E4F] px-2 py-0.5 rounded font-semibold text-[11px]">{project.status}</span>
                </>
              )}
            </div>
            <h2 id="modal-title" className="text-xl sm:text-2xl font-bold tracking-tight text-[#F7F3EF] font-display">
              {project.title}
            </h2>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-[#aba4b0] hover:text-white hover:bg-[#3b373d] transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Executive Objective */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#4B2E4F] flex items-center gap-1.5 mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#C98F9D]" />
              <span>Project Objective</span>
            </h3>
            <p className="text-sm sm:text-base text-[#3b373d] leading-relaxed font-normal bg-[#faf8f5] p-4 rounded-lg border border-[#e8e2dc]">
              {project.objective}
            </p>
          </div>

          {/* Approach & Methodology */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#4B2E4F] flex items-center gap-1.5 mb-2">
              <Cpu className="w-3.5 h-3.5 text-[#C98F9D]" />
              <span>Approach & Methodology</span>
            </h3>
            <div className="space-y-3">
              {project.approach.map((step, idx) => (
                <div key={idx} className="flex items-start gap-3 text-sm text-[#3b373d] leading-relaxed">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#C98F9D] mt-2 shrink-0" />
                  <p>{step}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Key Findings */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#4B2E4F] flex items-center gap-1.5 mb-2">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#C98F9D]" />
              <span>Key Findings & Outcomes</span>
            </h3>
            <div className="space-y-2.5 bg-[#fdf7f9] p-4 rounded-lg border border-[#f1dae1]">
              {project.keyFindings.map((finding, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-sm text-[#2D2A2E] leading-relaxed">
                  <span className="text-[#C98F9D] font-bold">›</span>
                  <p>{finding}</p>
                </div>
              ))}
            </div>
          </div>

          {/* My Role */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#4B2E4F] flex items-center gap-1.5 mb-2">
              <UserCheck className="w-3.5 h-3.5 text-[#C98F9D]" />
              <span>My Role</span>
            </h3>
            <div className="bg-[#faf8f5] p-4 rounded-lg border border-[#e8e2dc] text-sm text-[#2D2A2E] leading-relaxed">
              <p className="font-semibold text-[#2D2A2E]">{project.role}</p>
              {project.roleNote && (
                <p className="mt-2 text-xs text-[#655f68] pt-2 border-t border-[#eee8e2]">
                  {project.roleNote}
                </p>
              )}
            </div>
          </div>

          {/* Tools & Technologies */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-wider text-[#4B2E4F] flex items-center gap-1.5 mb-2.5">
              <Wrench className="w-3.5 h-3.5 text-[#C98F9D]" />
              <span>Tools & Technologies Used</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-2.5 py-1 text-xs font-medium bg-[#F7F3EF] text-[#3b373d] rounded border border-[#e8e2dc]"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Confidentiality / Compliance Note if applicable */}
          {project.complianceNote && (
            <div className="p-3 rounded-lg bg-[#fdf7f9] border border-[#f1dae1] flex items-start gap-2 text-xs text-[#692e3d]">
              <ShieldAlert className="w-4 h-4 text-[#C98F9D] shrink-0 mt-0.5" />
              <span>{project.complianceNote}</span>
            </div>
          )}

          {/* City of Miami Specific Case Study Sections */}
          {project.id === 'miami-benefits-rag' && (
            <>
              {/* Section: Prototype in Action */}
              <div className="pt-6 border-t border-[#e8e2dc] space-y-6">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#4B2E4F] mb-1">
                    Prototype in Action
                  </h3>
                  <p className="text-xs text-[#655f68]">
                    Real project screenshots captured during Phase 1 assistant testing.
                  </p>
                </div>

                <div className="space-y-6">
                  {/* Screenshot 1 */}
                  <figure className="space-y-2">
                    <img
                      src="/city-chatbot-interface.png"
                      alt="Prototype Interface — Phase 1 City of Miami assistant"
                      className="w-full h-auto rounded border border-[#e8e2dc] bg-[#faf8f5]"
                      loading="lazy"
                    />
                    <figcaption className="text-xs text-[#4a454d] leading-relaxed">
                      Prototype Interface — Phase 1 City of Miami assistant used to access property and Public Benefits information through a conversational interface.
                    </figcaption>
                  </figure>

                  {/* Screenshot 2 */}
                  <figure className="space-y-2">
                    <img
                      src="/city-public-benefits-query.png"
                      alt="Example Query — Assistant responding to a Public Benefits question"
                      className="w-full h-auto rounded border border-[#e8e2dc] bg-[#faf8f5]"
                      loading="lazy"
                    />
                    <figcaption className="text-xs text-[#4a454d] leading-relaxed">
                      Example Query — Example of the assistant responding to a Public Benefits question using retrieved source information.
                    </figcaption>
                  </figure>
                </div>
              </div>

              {/* Section: Retrieval Workflow */}
              <div className="pt-6 border-t border-[#e8e2dc] space-y-4">
                <div>
                  <h3 className="text-xs font-semibold uppercase tracking-wider text-[#4B2E4F] mb-1">
                    Retrieval Workflow
                  </h3>
                  <p className="text-xs text-[#655f68] leading-relaxed">
                    Conceptual representation of the retrieval and reranking logic I worked on to improve relevance and reduce unsupported responses.
                  </p>
                </div>

                {/* Technical Documentation Diagram */}
                <div className="p-5 sm:p-6 bg-white rounded border border-[#d9d0c7] text-[#2D2A2E] text-xs">
                  <div className="max-w-md mx-auto flex flex-col items-center">
                    
                    {/* User Question */}
                    <div className="w-full px-4 py-2.5 bg-[#faf8f5] border border-[#d9d0c7] rounded text-center font-medium text-[#2D2A2E]">
                      User Question
                    </div>

                    <div className="py-2 text-[#857e8a] font-mono text-sm">↓</div>

                    {/* Semantic / Vector Retrieval */}
                    <div className="w-full px-4 py-2.5 bg-[#faf8f5] border border-[#d9d0c7] rounded text-center font-medium text-[#2D2A2E]">
                      Semantic / Vector Retrieval
                    </div>

                    <div className="py-2 text-[#857e8a] font-mono text-sm">↓</div>

                    {/* Candidate Document Chunks */}
                    <div className="w-full px-4 py-2.5 bg-[#faf8f5] border border-[#d9d0c7] rounded text-center font-medium text-[#2D2A2E]">
                      Candidate Document Chunks
                    </div>

                    <div className="py-2 text-[#857e8a] font-mono text-sm">↓</div>

                    {/* Relevance Scoring Box with Sub-signals */}
                    <div className="w-full p-3.5 bg-[#faf8f5] border border-[#d9d0c7] rounded text-left">
                      <div className="font-semibold text-center text-[#2D2A2E] mb-2 pb-1.5 border-b border-[#eee8e2]">
                        Relevance Scoring
                      </div>
                      <ul className="space-y-1 text-[11px] text-[#4a454d] list-disc list-inside">
                        <li>Semantic similarity</li>
                        <li>Keyword overlap</li>
                        <li>Exact / near-exact question match</li>
                        <li>Definition handling</li>
                      </ul>
                    </div>

                    <div className="py-2 text-[#857e8a] font-mono text-sm">↓</div>

                    {/* Reranking */}
                    <div className="w-full px-4 py-2.5 bg-[#faf8f5] border border-[#d9d0c7] rounded text-center font-medium text-[#2D2A2E]">
                      Reranking
                    </div>

                    <div className="py-2 text-[#857e8a] font-mono text-sm">↓</div>

                    {/* Support Check */}
                    <div className="w-full px-4 py-2.5 bg-[#faf8f5] border border-[#d9d0c7] rounded text-center font-semibold text-[#2D2A2E]">
                      Support Check
                    </div>

                    {/* Branches Container */}
                    <div className="w-full mt-3 pt-3 border-t border-[#eee8e2] grid grid-cols-1 sm:grid-cols-2 gap-3">
                      
                      {/* Sufficient support branch */}
                      <div className="p-3 bg-[#faf8f5] border border-[#d9d0c7] rounded flex flex-col justify-between">
                        <div className="text-[11px] font-semibold text-[#4B2E4F] mb-1">
                          Sufficient support
                        </div>
                        <div className="text-[11px] text-[#2D2A2E] pt-1">
                          → Generate Answer Using Retrieved Context
                        </div>
                      </div>

                      {/* Insufficient support branch */}
                      <div className="p-3 bg-[#faf8f5] border border-[#d9d0c7] rounded flex flex-col justify-between">
                        <div className="text-[11px] font-semibold text-[#857e8a] mb-1">
                          Insufficient support
                        </div>
                        <div className="text-[11px] font-mono text-[#692e3d] pt-1">
                          → INSUFFICIENT_DATA
                        </div>
                      </div>

                    </div>

                  </div>
                </div>

                {/* Disclaimer note */}
                <p className="text-[11px] text-[#857e8a] leading-relaxed italic">
                  This is a conceptual representation created to explain my contribution to the retrieval process. It is not an exported internal City architecture diagram.
                </p>
              </div>
            </>
          )}

          {/* PSI Workspace Specific Case Study Section */}
          {project.id === 'psi-workspace-modernization' && (
            <div className="pt-6 border-t border-[#e8e2dc] space-y-4">
              <div>
                <h3 className="text-xs font-semibold uppercase tracking-wider text-[#4B2E4F] mb-1">
                  Project Modernization Visual
                </h3>
              </div>

              <figure className="space-y-3">
                <div className="flex justify-center bg-[#faf8f5] p-2 sm:p-4 rounded border border-[#e8e2dc]">
                  <img
                    src="/psi-workspace-modernization.png"
                    alt="Legacy-to-modernized comparison of PSI Workspace application"
                    className="w-full max-w-2xl h-auto rounded border border-[#e8e2dc] shadow-xs"
                    loading="lazy"
                  />
                </div>
                <figcaption className="space-y-1.5 text-xs text-[#4a454d] leading-relaxed">
                  <p>
                    Legacy-to-modernized comparison of the PSI Workspace project, showing the transition from the original Microsoft Access-based interface to the newer .NET/WPF application.
                  </p>
                  <p className="text-[11px] text-[#655f68]">
                    The visual highlights how familiar workflows and core plan information were preserved while the interface was reorganized to improve navigation, readability, and usability.
                  </p>
                </figcaption>
              </figure>
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="bg-[#faf8f5] px-6 py-4 border-t border-[#e8e2dc] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-xs font-semibold text-[#3b373d] bg-white hover:bg-[#F7F3EF] border border-[#d9d0c7] rounded-lg transition-colors cursor-pointer"
          >
            Close Project Details
          </button>
        </div>

      </div>
    </div>
  );
};
