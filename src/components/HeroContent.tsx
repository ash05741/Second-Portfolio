export function HeroContent() {
    return (
        <main className="relative z-30 w-full h-screen max-w-[1800px] mx-auto pointer-events-none">

            {/* --- Previous Left Column Content --- */}
            <div className="absolute top-[40%] md:top-[45%] -translate-y-1/2 left-6 md:left-24 flex flex-col pointer-events-auto">
                <h1 className="text-5xl md:text-[85px] font-normal tracking-tight leading-[1.05] text-white">
                    Imagining <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#fce1c6] to-[#d6b797]">
                        beyond reality.
                    </span>
                </h1>
                <div className="w-12 h-[1px] bg-white/40 mt-10 mb-8"></div>
                <p className="text-white/70 text-sm md:text-base font-light leading-relaxed tracking-wide max-w-[340px] mb-12">
                    Dreamframe explores the boundary between imagination and reality, turning the impossible into visuals.
                </p>
                <button className="flex items-center gap-6 group w-fit cursor-pointer">
                    <div className="w-[52px] h-[52px] rounded-full border border-white/30 flex items-center justify-center group-hover:border-white group-hover:bg-white/5 transition-all duration-300">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white group-hover:translate-x-1 transition-transform"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
                    </div>
                    <span className="text-white/80 text-xs tracking-[0.25em] uppercase font-medium group-hover:text-white transition-colors">
                        View Our Work
                    </span>
                </button>
            </div>
            {/* ------------------------------------- */}


            {/* --- Previous Bottom Left Scroll Indicator --- */}
            <div className="absolute bottom-12 left-6 md:left-24 flex flex-col items-start gap-4 pointer-events-auto">
                <span className="text-white/40 text-[9px] tracking-[0.3em] uppercase font-medium">
                    Scroll
                </span>
                <div className="flex flex-col items-center ml-[14px]">
                    <div className="w-[2px] h-[2px] bg-[#fce1c6] rounded-full shadow-[0_0_8px_#fce1c6]"></div>
                    <div className="w-[1px] h-16 bg-gradient-to-b from-white/40 to-transparent mt-1"></div>
                </div>
            </div>
            {/* --------------------------------------------- */}


            {/* ★ THE LOGO FIX: Bottom Right "System Status" ★ */}
            {/* We use strong backdrop blur and padding to make sure the watermark is perfectly obscured */}
            <div className="absolute bottom-12 right-6 md:right-24 pointer-events-auto flex flex-col gap-3 p-5 rounded-3xl border border-white/10 bg-black/10 backdrop-blur-2xl shadow-2xl">

                {/* Status indicator line */}
                <div className="flex items-center gap-3">
                    {/* Animated orange dot (brand color) */}
                    <div className="w-2 h-2 rounded-full bg-orange-500 animate-pulse"></div>
                    <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">
                        System: Active
                    </span>
                </div>

                {/* Technical metadata (Kanpur reference + simulated data) */}
                <div className="flex flex-col gap-1 text-white/50 text-[11px] font-mono tracking-wide">
                    <span>{'>'} Nodes:  Kanpur (IN), Tokyo (JP)</span>
                    <span>{'>'} Latent Diff. v2.1.0</span>
                    <span>{'>'} Output: 4096px [Hi-Res]</span>
                </div>

            </div>

        </main>
    );
}