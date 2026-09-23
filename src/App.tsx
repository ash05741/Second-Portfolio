import { ScrollCanvas } from './components/ScrollCanvas';
import { Navigation } from './components/Navigation';
import { HeroContent } from './components/HeroContent';
import { LogoCarousel } from './components/LogoCarousel';
import { BentoGrid } from './components/BentoGrid';

function App() {
  return (
    <div className="bg-black text-white font-sans selection:bg-purple-500/30">

      {/* The animation track (400vh) is isolated here */}
      <div className="relative h-[400vh]">

        {/* Sticky Container for Canvas and UI */}
        <div className="sticky top-0 w-full h-screen overflow-hidden flex flex-col">
          <ScrollCanvas />

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