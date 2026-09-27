import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ScrollCanvas } from './components/ScrollCanvas';
import { Navigation } from './components/Navigation'; // Global Navigation
import { HeroContent } from './components/HeroContent';
import { LogoCarousel } from './components/LogoCarousel';
import { BentoGrid } from './components/BentoGrid';
import { LoadingScreen } from './components/LoadingScreen';
import { AboutMeSection } from './components/AboutMeSection';
import { SkillsPage } from './components/SkillsPage';
import { ContactSection } from './components/ContactSection';
import { ProjectCarousel } from './components/ProjectCarousel';
import { Footer } from './components/Footer';
// --- HOME PAGE ---
function Home() {
  const [loadProgress, setLoadProgress] = useState(0);

  return (
    <div className="bg-black text-white font-sans selection:bg-[#cda47b]/30">
      {/* Absolute Loading Overlay */}
      <LoadingScreen progress={loadProgress} />

      {/* The animation track (400vh) is isolated here */}
      <div className="relative h-[400vh]">
        {/* Sticky Container for Canvas and UI */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col">
          {/* Pass the state setter to the Canvas */}
          <ScrollCanvas onProgress={setLoadProgress} />

          {/* Cinematic Left Shadow for Text Readability */}
          <div className="absolute top-0 left-0 w-[55vw] h-full bg-gradient-to-r from-black/80 via-black/30 to-transparent z-[5] pointer-events-none" />

          {/* (Navigation removed from here since it's now global) */}
          <HeroContent />
        </div>
      </div>

      {/* Section 2: Normal Page Flow Begins Here */}
      <div className="relative pt-15 z-40 bg-black">
        <LogoCarousel />
        <BentoGrid />
        <ProjectCarousel />
        <ContactSection />
        <Footer />
      </div>
    </div>
  );
}

// --- MAIN APP ROUTER ---
export default function App() {
  return (
    <Router>
      {/* Navigation lives here globally. It stays fixed on top across all routes! */}
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutMeSection />} />
        <Route path="/skills" element={<SkillsPage />} />
      </Routes>
    </Router>
  );
}