export function BentoGrid() {
    return (
        <section className="relative w-full bg-[#050505] pointer-events-auto font-sans overflow-hidden">
            {/* Cosmic Background Elements */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-pink-600/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-500/5 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8 py-24">

                {/* 
                  Grid Container 
                  4 columns wide. Cards span specifically to match the exact unroot reference layout.
                */}
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4 md:gap-6">

                    {/* 1. Left Tall (Col 1, Row 1-2) */}
                    <div className="md:col-span-1 md:row-span-2 relative rounded-[32px] overflow-hidden p-8 flex flex-col justify-between bg-gradient-to-b from-orange-500/80 to-purple-900/60 border border-white/10 group shadow-2xl backdrop-blur-xl">
                        {/* Glow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10">
                            {/* Top Logo / Icon */}
                            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center border border-white/20 mb-8 backdrop-blur-md shadow-lg">
                                <div className="w-4 h-[2px] bg-white transform rotate-45" />
                                <div className="w-4 h-[2px] bg-white transform -rotate-45 absolute" />
                            </div>
                            <h3 className="text-3xl font-medium text-white leading-[1.15] mb-6">
                                Our engine combines latent diffusion and creative intent
                            </h3>
                        </div>

                        {/* Bottom Profile Pill */}
                        <div className="relative z-10 inline-flex items-center gap-3 bg-white/10 border border-white/20 rounded-full pl-2 pr-4 py-2 backdrop-blur-md self-start w-max mt-4">
                            <div className="w-8 h-8 rounded-full bg-black/40 border border-white/10 flex items-center justify-center">
                                <span className="text-orange-300 text-[10px] font-bold">DF</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white text-xs font-medium">Dreamframe</span>
                                <span className="text-white/50 text-[10px]">Core System</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Top Mid-Left (Col 2, Row 1) Square */}
                    <div className="md:col-span-1 md:row-span-1 rounded-[32px] bg-white/5 border border-white/10 flex items-center justify-center relative overflow-hidden group backdrop-blur-md">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-duration-500" />

                        {/* Glowing Logo */}
                        <div className="w-24 h-24 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-orange-500/30 blur-2xl rounded-full" />
                            <div className="w-12 h-12 rounded-full border border-orange-500/70 flex items-center justify-center relative z-10 bg-[#0a0a0a]">
                                <div className="w-6 h-[2px] bg-orange-400 transform rotate-45" />
                                <div className="w-6 h-[2px] bg-orange-400 transform -rotate-45 absolute" />
                            </div>
                        </div>
                    </div>

                    {/* 3. Top Right (Col 3-4, Row 1) Wide */}
                    <div className="md:col-span-2 md:row-span-1 rounded-[32px] bg-white/5 border border-white/10 relative overflow-hidden flex items-center justify-center p-8 backdrop-blur-md group">
                        {/* Image / Graphic Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-black/80 z-0" />
                        <div className="absolute inset-0 bg-[url('/frames/Frame_00000150.png')] bg-cover bg-center opacity-40 mix-blend-screen transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a] via-transparent to-transparent z-0" />

                        {/* Floating Glassy Badge */}
                        <div className="absolute top-6 left-6 bg-gradient-to-br from-orange-500/80 to-pink-500/80 backdrop-blur-xl border border-white/20 rounded-2xl p-4 shadow-2xl flex flex-col gap-1 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 z-10 min-w-[140px]">
                            <div className="flex -space-x-2 mb-1">
                                <div className="w-5 h-5 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm z-30" />
                                <div className="w-5 h-5 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm z-20" />
                                <div className="w-5 h-5 rounded-full bg-white/20 border border-white/30 backdrop-blur-sm z-10" />
                            </div>
                            <h4 className="text-xl font-bold text-white leading-none mt-1">+10M</h4>
                            <span className="text-white/80 text-[10px] font-medium tracking-wide">Images Generated</span>
                        </div>

                        {/* Text */}
                        <div className="relative z-10 mt-auto mr-auto max-w-[200px]">
                            <p className="text-white/80 text-sm leading-relaxed font-light">
                                We design and implement practical AI systems that automate creative workflows.
                            </p>
                        </div>
                    </div>

                    {/* 4. Mid-Left (Col 2-3, Row 2) Wide */}
                    <div className="md:col-span-2 md:row-span-1 rounded-[32px] bg-white/5 border border-white/10 relative overflow-hidden flex items-center justify-center group backdrop-blur-md">
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-pink-900/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Abstract Glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-green-500/10 via-transparent to-transparent opacity-30 blur-2xl" />

                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-full border-2 border-white/20 flex items-center justify-center bg-black/50 backdrop-blur-sm">
                                <div className="w-5 h-[2px] bg-white transform rotate-45" />
                                <div className="w-5 h-[2px] bg-white transform -rotate-45 absolute" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight">Dreamframe</h2>
                        </div>
                    </div>

                    {/* 5. Mid-Right (Col 4, Row 2) Swatches */}
                    <div className="md:col-span-1 md:row-span-1 rounded-[32px] bg-white/5 border border-white/10 p-5 flex flex-col gap-2.5 justify-center backdrop-blur-md">
                        <div className="w-full flex-1 rounded-2xl bg-[#FF6200] flex items-center justify-between px-4 group/swatch hover:scale-[1.02] transition-transform">
                            <span className="text-black/50 font-mono text-xs font-bold opacity-0 group-hover/swatch:opacity-100 transition-opacity">#FF6200</span>
                            <span className="text-black/50 text-[10px] font-medium">#1</span>
                        </div>
                        <div className="w-full flex-1 rounded-2xl bg-[#FF8C5E] flex items-center justify-between px-4 group/swatch hover:scale-[1.02] transition-transform">
                            <span className="text-black/50 font-mono text-xs font-bold opacity-0 group-hover/swatch:opacity-100 transition-opacity">#FF8C5E</span>
                            <span className="text-black/50 text-[10px] font-medium">#2</span>
                        </div>
                        <div className="w-full flex-1 rounded-2xl bg-[#FFDFCB] flex items-center justify-between px-4 group/swatch hover:scale-[1.02] transition-transform">
                            <span className="text-black/50 font-mono text-xs font-bold opacity-0 group-hover/swatch:opacity-100 transition-opacity">#FFDFCB</span>
                            <span className="text-black/50 text-[10px] font-medium">#3</span>
                        </div>
                        <div className="w-full flex-1 rounded-2xl bg-white flex items-center justify-between px-4 group/swatch hover:scale-[1.02] transition-transform">
                            <span className="text-black/50 font-mono text-xs font-bold opacity-0 group-hover/swatch:opacity-100 transition-opacity">#FFFFFF</span>
                            <span className="text-black/50 text-[10px] font-medium">#4</span>
                        </div>
                    </div>

                    {/* 6. Bottom-Left (Col 1-2, Row 3) Typography */}
                    <div className="md:col-span-2 md:row-span-1 rounded-[32px] bg-white/5 border border-white/10 p-8 flex flex-col justify-between relative overflow-hidden group backdrop-blur-md">
                        <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-r from-transparent via-orange-500/10 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />

                        <h2 className="text-5xl font-medium tracking-tight text-white mb-4 z-10">
                            Cinematic <br /> Quality
                        </h2>

                        <div className="mt-auto z-10">
                            <p className="text-white/50 text-sm max-w-[280px] mb-4 leading-relaxed font-light">
                                We focus on photorealistic results — from intricate textures to dynamic lighting.
                            </p>
                            <a href="#" className="text-orange-400 text-sm hover:text-orange-300 transition-colors underline underline-offset-4 decoration-orange-400/30 hover:decoration-orange-300">
                                Subscribe
                            </a>
                        </div>
                    </div>

                    {/* 7. Bottom-Right (Col 3-4, Row 3) UI Mockup */}
                    <div className="md:col-span-2 md:row-span-1 rounded-[32px] bg-gradient-to-br from-orange-500/20 via-purple-900/20 to-black/40 border border-white/10 relative overflow-hidden flex items-end justify-center pt-12 backdrop-blur-md">
                        <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent z-0" />

                        {/* Mock Phone UI */}
                        <div className="w-[85%] max-w-[340px] h-[90%] bg-[#0a0a0a] rounded-t-[40px] border-x-4 border-t-4 border-[#1a1a1a] shadow-[0_-20px_50px_rgba(0,0,0,0.5)] relative flex flex-col items-center pt-4 px-6 z-10">
                            {/* Inner Screen Bezel */}
                            <div className="absolute inset-[2px] bg-black rounded-t-[36px] overflow-hidden flex flex-col items-center pt-3 px-5">

                                {/* Dynamic Island / Notch */}
                                <div className="w-[30%] h-6 bg-black rounded-full absolute top-2 z-20 flex items-center justify-end px-3">
                                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/80 shadow-[0_0_5px_#22c55e]" />
                                </div>

                                {/* Search bar mockup */}
                                <div className="w-28 h-7 bg-white/10 rounded-full mt-10 mb-auto flex items-center justify-center gap-2 border border-white/5 backdrop-blur-md">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/60"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                    <span className="text-[10px] text-white/60 font-medium">Search</span>
                                </div>

                                {/* Dock mockup */}
                                <div className="w-full bg-white/10 backdrop-blur-xl rounded-[28px] p-3 mb-4 flex justify-between items-center border border-white/10">
                                    <div className="w-11 h-11 rounded-[14px] bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center shadow-lg">
                                        <div className="w-5 h-[2px] bg-white transform rotate-45" />
                                        <div className="w-5 h-[2px] bg-white transform -rotate-45 absolute" />
                                    </div>
                                    <div className="w-11 h-11 rounded-[14px] bg-gradient-to-b from-blue-400 to-blue-600 flex items-center justify-center shadow-lg">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M12 2L2 22h20L12 2z" /></svg>
                                    </div>
                                    <div className="w-11 h-11 rounded-[14px] bg-gradient-to-b from-rose-400 to-rose-600 flex items-center justify-center shadow-lg">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="white"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
                                    </div>
                                    <div className="w-11 h-11 rounded-[14px] bg-gradient-to-b from-gray-300 to-gray-500 flex items-center justify-center shadow-lg">
                                        <div className="w-5 h-5 border-2 border-white rounded-[6px] relative overflow-hidden">
                                            <div className="absolute right-0 top-0 w-2 h-2 bg-white rounded-bl-full" />
                                        </div>
                                    </div>
                                </div>

                                {/* Home indicator line */}
                                <div className="w-1/3 h-1 bg-white/30 rounded-full mb-2" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}