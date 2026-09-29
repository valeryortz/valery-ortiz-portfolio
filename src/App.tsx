/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { LinksBar } from './components/LinksBar';
import { Projects } from './components/Projects';
import { Experience } from './components/Experience';
import { Skills } from './components/Skills';
import { AboutMe } from './components/AboutMe';
import { ResumeContact } from './components/ResumeContact';
import { RecruiterScanModal } from './components/RecruiterScanModal';
import { Footer } from './components/Footer';

export default function App() {
  const [isRecruiterScanOpen, setIsRecruiterScanOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-slate-50 text-slate-800 selection:bg-teal-100 selection:text-teal-900">
      {/* Top Navigation */}
      <Navbar onOpenRecruiterScan={() => setIsRecruiterScanOpen(true)} />

      <main className="flex-grow">
        {/* 1. HERO */}
        <Hero onOpenRecruiterScan={() => setIsRecruiterScanOpen(true)} />

        {/* 2. LINKS BAR */}
        <LinksBar />

        {/* 3. PROJECTS */}
        <Projects />

        {/* 4. EXPERIENCE */}
        <Experience />

        {/* 5. SKILLS */}
        <Skills />

        {/* 6. ABOUT ME */}
        <AboutMe />

        {/* 7. RESUME AND CONTACT */}
        <ResumeContact onOpenRecruiterScan={() => setIsRecruiterScanOpen(true)} />
      </main>

      {/* Recruiter 30-Second Fast-Scan Modal */}
      <RecruiterScanModal
        isOpen={isRecruiterScanOpen}
        onClose={() => setIsRecruiterScanOpen(false)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
