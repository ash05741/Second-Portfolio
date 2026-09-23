export function BentoGrid() {
    return (
        <section className="relative w-full bg-[#030303] pointer-events-auto font-sans overflow-hidden">
            {/* Cinematic Background Elements: Muted amber and moss tones replacing neon cosmic colors */}
            <div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#c27c3a]/5 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute bottom-1/4 right-0 w-[600px] h-[600px] bg-stone-500/5 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-amber-900/10 blur-[150px] rounded-full mix-blend-screen pointer-events-none" />

            <div className="relative z-10 w-full max-w-[1200px] mx-auto px-4 md:px-8 py-24">

                {/* Grid Container */}
                <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[280px] gap-4 md:gap-6">

                    {/* 1. Left Tall (Col 1, Row 1-2): Monolithic Stone Slab */}
                    <div className="md:col-span-1 md:row-span-2 relative rounded-[32px] overflow-hidden p-8 flex flex-col justify-between bg-[#0a0a0a] border border-white/5 group shadow-2xl backdrop-blur-xl">
                        {/* Subtle gold glow overlay */}
                        <div className="absolute inset-0 bg-gradient-to-br from-[#c27c3a]/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        <div className="relative z-10">
                            {/* Top Logo / Icon */}
                            <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center border border-white/10 mb-8 backdrop-blur-md shadow-lg">
                                <div className="w-4 h-[2px] bg-[#c27c3a] transform rotate-45" />
                                <div className="w-4 h-[2px] bg-[#c27c3a] transform -rotate-45 absolute" />
                            </div>
                            <h3 className="text-3xl font-serif font-medium text-white/90 leading-[1.15] mb-6">
                                Our engine combines latent diffusion and creative intent
                            </h3>
                        </div>

                        {/* Bottom Profile Pill */}
                        <div className="relative z-10 inline-flex items-center gap-3 bg-white/5 border border-white/10 rounded-full pl-2 pr-4 py-2 backdrop-blur-md self-start w-max mt-4">
                            <div className="w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center">
                                <span className="text-[#c27c3a] text-[10px] font-bold">DF</span>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-white/80 text-xs font-medium uppercase tracking-widest">Dreamframe</span>
                                <span className="text-white/40 text-[10px] font-mono">Core System</span>
                            </div>
                        </div>
                    </div>

                    {/* 2. Top Mid-Left (Col 2, Row 1) Square: Glowing Amber Icon */}
                    <div className="md:col-span-1 md:row-span-1 rounded-[32px] bg-[#0a0a0a] border border-white/5 flex items-center justify-center relative overflow-hidden group backdrop-blur-md">
                        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-duration-500" />

                        {/* Glowing Logo */}
                        <div className="w-24 h-24 flex items-center justify-center relative">
                            <div className="absolute inset-0 bg-[#c27c3a]/20 blur-2xl rounded-full" />
                            <div className="w-12 h-12 rounded-full border border-[#c27c3a]/50 flex items-center justify-center relative z-10 bg-black">
                                <div className="w-6 h-[2px] bg-[#c27c3a] transform rotate-45" />
                                <div className="w-6 h-[2px] bg-[#c27c3a] transform -rotate-45 absolute" />
                            </div>
                        </div>
                    </div>

                    {/* 3. Top Right (Col 3-4, Row 1) Wide: Dark Shadow Vignette */}
                    <div className="md:col-span-2 md:row-span-1 rounded-[32px] bg-[#0a0a0a] border border-white/5 relative overflow-hidden flex items-center justify-center p-8 backdrop-blur-md group">
                        {/* Image / Graphic Background */}
                        <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/95 z-0" />
                        <div className="absolute inset-0 bg-[url('/frames/Frame_00000150.png')] bg-cover bg-center opacity-30 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-0" />

                        {/* Floating Glassy Badge - Changed from Pink to Muted Obsidian/Gold */}
                        <div className="absolute top-6 left-6 bg-black/40 backdrop-blur-xl border border-white/10 rounded-2xl p-4 shadow-2xl flex flex-col gap-1 transform -rotate-3 group-hover:rotate-0 transition-transform duration-500 z-10 min-w-[140px]">
                            <div className="flex -space-x-2 mb-1">
                                <div className="w-5 h-5 rounded-full bg-stone-800 border border-white/10 backdrop-blur-sm z-30" />
                                <div className="w-5 h-5 rounded-full bg-stone-700 border border-white/10 backdrop-blur-sm z-20" />
                                <div className="w-5 h-5 rounded-full bg-stone-600 border border-white/10 backdrop-blur-sm z-10" />
                            </div>
                            <h4 className="text-xl font-serif font-bold text-[#c27c3a] leading-none mt-1">+10M</h4>
                            <span className="text-white/50 text-[10px] font-mono tracking-wide uppercase">Images Generated</span>
                        </div>

                        {/* Text */}
                        <div className="relative z-10 mt-auto mr-auto max-w-[200px]">
                            <p className="text-white/60 text-sm leading-relaxed font-light">
                                We design and implement practical AI systems that automate creative workflows.
                            </p>
                        </div>
                    </div>

                    {/* 4. Mid-Left (Col 2-3, Row 2) Wide: Main Branding */}
                    <div className="md:col-span-2 md:row-span-1 rounded-[32px] bg-[#0a0a0a] border border-white/5 relative overflow-hidden flex items-center justify-center group backdrop-blur-md">
                        <div className="absolute inset-0 bg-gradient-to-r from-[#c27c3a]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                        {/* Abstract Glow - Changed to ethereal amber */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[150%] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#c27c3a]/10 via-transparent to-transparent opacity-30 blur-2xl" />

                        <div className="flex items-center gap-4 relative z-10">
                            <div className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-sm shadow-xl">
                                <div className="w-5 h-[2px] bg-[#c27c3a] transform rotate-45" />
                                <div className="w-5 h-[2px] bg-[#c27c3a] transform -rotate-45 absolute" />
                            </div>
                            <h2 className="text-4xl md:text-5xl font-serif font-medium text-white tracking-tight">Dreamframe</h2>
                        </div>
                    </div>

                    {/* 5. Mid-Right (Col 4, Row 2) Swatches: Dark Fantasy Palette */}
                    <div className="md:col-span-1 md:row-span-1 rounded-[32px] bg-[#0a0a0a] border border-white/5 p-5 flex flex-col gap-2.5 justify-center backdrop-blur-md">
                        <div className="w-full flex-1 rounded-2xl bg-[#0a0a0a] border border-white/10 flex items-center justify-between px-4 group/swatch hover:scale-[1.02] transition-transform">
                            <span className="text-white/50 font-mono text-xs font-bold opacity-0 group-hover/swatch:opacity-100 transition-opacity">#0A0A0A</span>
                            <span className="text-white/30 text-[10px] font-mono">#1</span>
                        </div>
                        <div className="w-full flex-1 rounded-2xl bg-[#1a1a1a] border border-white/5 flex items-center justify-between px-4 group/swatch hover:scale-[1.02] transition-transform">
                            <span className="text-white/50 font-mono text-xs font-bold opacity-0 group-hover/swatch:opacity-100 transition-opacity">#1A1A1A</span>
                            <span className="text-white/30 text-[10px] font-mono">#2</span>
                        </div>
                        <div className="w-full flex-1 rounded-2xl bg-[#2a3026] flex items-center justify-between px-4 group/swatch hover:scale-[1.02] transition-transform">
                            <span className="text-white/70 font-mono text-xs font-bold opacity-0 group-hover/swatch:opacity-100 transition-opacity">#2A3026</span>
                            <span className="text-white/50 text-[10px] font-mono">#3</span>
                        </div>
                        <div className="w-full flex-1 rounded-2xl bg-[#c27c3a] flex items-center justify-between px-4 group/swatch hover:scale-[1.02] transition-transform">
                            <span className="text-black/80 font-mono text-xs font-bold opacity-0 group-hover/swatch:opacity-100 transition-opacity">#C27C3A</span>
                            <span className="text-black/50 text-[10px] font-mono">#4</span>
                        </div>
                    </div>

                    {/* 6. Bottom-Left (Col 1-2, Row 3) Typography */}
                    <div className="md:col-span-2 md:row-span-1 rounded-[32px] bg-[#0a0a0a] border border-white/5 p-8 flex flex-col justify-between relative overflow-hidden group backdrop-blur-md">
                        <div className="absolute right-0 top-0 w-2/3 h-full bg-gradient-to-r from-transparent via-[#c27c3a]/5 to-transparent transform translate-x-full group-hover:-translate-x-full transition-transform duration-1000" />

                        <h2 className="text-5xl font-serif font-medium tracking-tight text-white/90 mb-4 z-10">
                            Cinematic <br /> Quality
                        </h2>

                        <div className="mt-auto z-10">
                            <p className="text-white/50 text-sm max-w-[280px] mb-4 leading-relaxed font-light">
                                We focus on photorealistic results — from intricate textures to dynamic lighting.
                            </p>
                            <a href="#" className="text-[#c27c3a] font-mono uppercase tracking-widest text-xs hover:text-white transition-colors underline underline-offset-4 decoration-[#c27c3a]/30 hover:decoration-white/30">
                                Subscribe
                            </a>
                        </div>
                    </div>

                    {/* 7. Bottom-Right (Col 3-4, Row 3) UI Mockup */}
                    <div className="md:col-span-2 md:row-span-1 rounded-[32px] bg-[#0a0a0a] border border-white/5 relative overflow-hidden flex items-end justify-center pt-12 backdrop-blur-md">
                        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-0" />

                        {/* Mock Phone UI - Converted to Obsidian/Stone */}
                        <div className="w-[85%] max-w-[340px] h-[90%] bg-black rounded-t-[40px] border-x-4 border-t-4 border-stone-900 shadow-[0_-20px_50px_rgba(0,0,0,0.8)] relative flex flex-col items-center pt-4 px-6 z-10">
                            {/* Inner Screen Bezel */}
                            <div className="absolute inset-[2px] bg-[#050505] rounded-t-[36px] overflow-hidden flex flex-col items-center pt-3 px-5 border border-white/5">

                                {/* Dynamic Island / Notch */}
                                <div className="w-[30%] h-6 bg-black rounded-full absolute top-2 z-20 flex items-center justify-end px-3 border border-white/5">
                                    <div className="w-1.5 h-1.5 rounded-full bg-amber-500/80 shadow-[0_0_5px_#f59e0b]" />
                                </div>

                                {/* Search bar mockup */}
                                <div className="w-28 h-7 bg-white/5 rounded-full mt-10 mb-auto flex items-center justify-center gap-2 border border-white/10 backdrop-blur-md">
                                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white/40"><circle cx="11" cy="11" r="8" /><path d="m21 21-4.3-4.3" /></svg>
                                    <span className="text-[10px] font-mono uppercase tracking-widest text-white/40 font-medium">Search</span>
                                </div>

                                {/* Dock mockup - Removed colorful gradients, replaced with dark metallic tones */}
                                <div className="w-full bg-black/60 backdrop-blur-xl rounded-[28px] p-3 mb-4 flex justify-between items-center border border-white/10">
                                    <div className="w-11 h-11 rounded-[14px] bg-stone-900 border border-white/5 flex items-center justify-center shadow-lg">
                                        <div className="w-5 h-[2px] bg-[#c27c3a] transform rotate-45" />
                                        <div className="w-5 h-[2px] bg-[#c27c3a] transform -rotate-45 absolute" />
                                    </div>
                                    <div className="w-11 h-11 rounded-[14px] bg-stone-900 border border-white/5 flex items-center justify-center shadow-lg">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c27c3a" strokeWidth="1.5"><path d="M12 2L2 22h20L12 2z" /></svg>
                                    </div>
                                    <div className="w-11 h-11 rounded-[14px] bg-stone-900 border border-white/5 flex items-center justify-center shadow-lg">
                                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60"><path d="M9 18V5l12-2v13" /><circle cx="6" cy="18" r="3" /><circle cx="18" cy="16" r="3" /></svg>
                                    </div>
                                    <div className="w-11 h-11 rounded-[14px] bg-stone-900 border border-white/5 flex items-center justify-center shadow-lg">
                                        <div className="w-5 h-5 border-[1.5px] border-white/60 rounded-[6px] relative overflow-hidden">
                                            <div className="absolute right-0 top-0 w-2 h-2 bg-white/60 rounded-bl-full" />
                                        </div>
                                    </div>
                                </div>

                                {/* Home indicator line */}
                                <div className="w-1/3 h-1 bg-white/20 rounded-full mb-2" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}