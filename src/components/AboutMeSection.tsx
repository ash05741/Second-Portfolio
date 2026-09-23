import { MapPin, GraduationCap, Target, Download, Lightbulb, Users, Compass } from 'lucide-react';

export function AboutMeSection() {
    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#cda47b]/30">
            <section className="w-full pt-30 pb-20 px-6 md:px-12">
                <div className="max-w-[1200px] mx-auto flex flex-col gap-12">

                    {/* Top Header */}
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-4">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#cda47b]">
                                <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" fill="currentColor" />
                            </svg>
                            <h2 className="text-sm font-serif tracking-[0.3em] text-[#cda47b] uppercase">
                                About Me
                            </h2>
                        </div>
                        <p className="text-xs tracking-widest text-zinc-500 uppercase ml-10">
                            The person behind the code.
                        </p>
                    </div>

                    {/* Main Cinematic Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                        {/* Left Hero Card with Dark Fantasy Background */}
                        <div className="lg:col-span-8 relative rounded-[32px] overflow-hidden border border-zinc-800/80 p-8 md:p-12 flex flex-col justify-between shadow-2xl min-h-[500px]">
                            {/* Background Image with Dark Cinematic Overlay */}
                            <div className="absolute inset-0 bg-[url('/Last.png')] bg-cover bg-center mix-blend-luminosity opacity-40 scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/80 to-transparent" />

                            {/* Top Content: Large Typography */}
                            <div className="relative z-10 flex flex-col gap-6 max-w-xl">
                                <h1 className="text-3xl md:text-5xl font-serif font-normal tracking-wide leading-tight text-zinc-100 uppercase">
                                    I Turn Ideas Into Digital Realities[cite: 2, 3]
                                </h1>
                                <p className="text-zinc-300 text-sm md:text-base leading-relaxed font-light">
                                    I'm a full stack developer who loves building web applications that are fast, responsive, and actually useful. I enjoy solving problems, learning new technologies and creating things that make an impact[cite: 2, 3].
                                </p>
                            </div>

                            {/* Bottom Content: Trait Pills & Resume Button */}
                            <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-8 border-t border-zinc-800/60 mt-8">
                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
                                        <Lightbulb size={14} className="text-[#cda47b]" />
                                        <span>Problem Solver[cite: 2, 3]</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
                                        <Users size={14} className="text-[#cda47b]" />
                                        <span>Team Player[cite: 2, 3]</span>
                                    </div>
                                    <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900/80 border border-zinc-800 text-xs text-zinc-300">
                                        <Compass size={14} className="text-[#cda47b]" />
                                        <span>Always Learning[cite: 2, 3]</span>
                                    </div>
                                </div>

                                <a
                                    href="#resume"
                                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#151310] border border-[#cda47b]/40 text-xs tracking-wider uppercase font-medium text-[#cda47b] hover:bg-[#cda47b] hover:text-black transition-all duration-300 shadow-lg group"
                                >
                                    <Download size={14} className="group-hover:translate-y-0.5 transition-transform" />
                                    <span>Download Resume[cite: 2, 3]</span>
                                </a>
                            </div>
                        </div>

                        {/* Right Side Metadata Panel */}
                        <div className="lg:col-span-4 bg-[#0a0a0a] border border-zinc-800/80 rounded-[32px] p-8 flex flex-col justify-around shadow-2xl">

                            {/* Item 1: Location */}
                            <div className="flex items-start gap-4 py-4 border-b border-zinc-800/80">
                                <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-[#cda47b]">
                                    <MapPin size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Location[cite: 2, 3]</span>
                                    <span className="text-sm font-medium text-zinc-200 mt-0.5">Shahjahanpur, India[cite: 2, 3]</span>
                                </div>
                            </div>

                            {/* Item 2: Education */}
                            <div className="flex items-start gap-4 py-4 border-b border-zinc-800/80">
                                <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-[#cda47b]">
                                    <GraduationCap size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Education[cite: 2, 3]</span>
                                    <span className="text-sm font-medium text-zinc-200 mt-0.5">Computer Science Diploma (Final Year)[cite: 2, 3]</span>
                                </div>
                            </div>

                            {/* Item 3: Goal */}
                            <div className="flex items-start gap-4 py-4">
                                <div className="p-3 rounded-2xl bg-zinc-900 border border-zinc-800 text-[#cda47b]">
                                    <Target size={20} />
                                </div>
                                <div className="flex flex-col">
                                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500">Goal[cite: 2, 3]</span>
                                    <span className="text-sm font-medium text-zinc-200 mt-0.5">Full Stack Developer <br /><span className="text-xs font-light text-zinc-400">(Internship / Entry Level)[cite: 2, 3]</span></span>
                                </div>
                            </div>

                        </div>

                    </div>

                </div>
            </section>
        </div>
    );
}