import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Audience from './components/Audience';
import Projects from './components/Projects';
import ProjectModal from './components/ProjectModal';
import About from './components/About';
import Skills from './components/Skills';
import Process from './components/Process';
import Pricing from './components/Pricing';
import EducationBrand from './components/EducationBrand';
import Trust from './components/Trust';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import StickyMobileCTA from './components/StickyMobileCTA';
import Footer from './components/Footer';

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="min-h-screen bg-bgMain text-textMain font-sans antialiased selection:bg-terracotta selection:text-bgSoft">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Audience />
        <Projects onSelectProject={setSelectedProject} />
        <About />
        <Skills />
        <Process />
        <Pricing />
        <EducationBrand />
        <Trust />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <StickyMobileCTA />

      {/* Project Detail Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </div>
  );
}