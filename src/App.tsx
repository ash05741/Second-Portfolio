import { useState } from 'react';
import { ScrollCanvas } from './components/ScrollCanvas';
import { Navigation } from './components/Navigation';
import { HeroContent } from './components/HeroContent';
import { LogoCarousel } from './components/LogoCarousel';
import { BentoGrid } from './components/BentoGrid';
import { LoadingScreen } from './components/LoadingScreen';

function App() {
  const [loadProgress, setLoadProgress] = useState(0);

  return (
    <div className="bg-black text-white font-sans selection:bg-purple-500/30">

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

          <Navigation />
          <HeroContent />
        </div>

      </div>

      {/* Section 2: Normal Page Flow Begins Here */}
      <div className="relative z-40 bg-black">
        <LogoCarousel />
        <BentoGrid />
      </div>

    </div>
  );
}

export default App;