import { motion } from 'framer-motion';
import { Sparkles, Image as Folder, ArrowRight, Settings, Mail } from 'lucide-react';

export function BentoGrid() {
    const cardVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.8,
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
            }
        }
    };

    return (
        <section className="relative w-full bg-[#050505] pointer-events-auto overflow-hidden pb-32">

            <div className="absolute inset-0 z-0 pointer-events-none">
                <div
                    className="absolute right-0 top-0 w-full md:w-[70%] h-full bg-[url('https://wallpaperaccess.com/full/2182.jpg')] bg-cover bg-right opacity-80 mix-blend-luminosity"
                    style={{
                        maskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to left, black 20%, transparent 100%)',
                        maskComposite: 'intersect',
                        WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 15%, black 85%, transparent 100%), linear-gradient(to left, black 20%, transparent 100%)',
                        WebkitMaskComposite: 'source-in'
                    }}
                />
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-24 mb-10">
                <div className="flex items-center gap-4 mb-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#cda47b]">
                        <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" fill="currentColor" />
                    </svg>
                    <h2 style={{ fontFamily: "'Cinzel', serif" }} className="text-xl md:text-2xl text-zinc-200 tracking-widest uppercase">
                        Bento Grid
                    </h2>
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-zinc-400 text-base md:text-lg ml-10">
                    Crafted with purpose. Built for the modern web.
                </p>
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.1 }}
                    /* FIXED: Changed auto-rows-[250px] to auto-rows-auto so mobile cards don't get chopped */
                    className="grid grid-cols-1 md:grid-cols-3 auto-rows-auto md:auto-rows-[300px] gap-6"
                >
                    {/* 1. Left Tall (Col 1, Row 1-2): About Me */}
                    <motion.div variants={cardVariant} className="md:col-span-1 md:row-span-2 min-h-[420px] md:min-h-0 relative rounded-[24px] overflow-hidden p-8 flex flex-col border border-zinc-800/90 bg-[#080808]/80 group shadow-2xl hover:border-[#cda47b]/50 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(205,164,123,0.15)] transition-all duration-500 backdrop-blur-sm cursor-pointer">
                        <div className="absolute inset-0 bg-[url('/Last.png')] bg-cover bg-center opacity-40 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105 group-hover:opacity-60" />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#080808]/80 to-transparent z-0" />

                        <div className="relative z-10 h-full flex flex-col justify-between flex-1">
                            <div>
                                <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[#cda47b] text-[10px] tracking-[0.25em] uppercase mb-4 block group-hover:text-white transition-colors duration-500">
                                    01. About Me
                                </span>
                                <h3 style={{ fontFamily: "'Cinzel', serif" }} className="text-3xl md:text-4xl text-zinc-100 leading-[1.1] mb-6">
                                    I BUILD <br /> DIGITAL <br /> REALITIES
                                </h3>
                                <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-zinc-300 text-base leading-relaxed max-w-[260px] group-hover:text-zinc-100 transition-colors duration-500">
                                    I'm a full stack developer who turns ideas into real, scalable web applications. I love solving problems and creating clean, modern interfaces.
                                </p>
                            </div>

                            <button className="flex items-center gap-2 bg-[#12100d] border border-[#cda47b]/40 hover:bg-[#cda47b] hover:text-black text-[#cda47b] px-6 py-3 rounded-xl transition-all duration-300 w-fit mt-8 shadow-lg">
                                <span style={{ fontFamily: "'Cinzel', serif" }} className="text-xs font-semibold tracking-wide uppercase">
                                    Learn More
                                </span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Side 2x2 Grid */}
                    <div className="md:col-span-2 md:row-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {/* 2. Top Left: Projects */}
                        <motion.div variants={cardVariant} className="min-h-[240px] md:min-h-0 relative rounded-[24px] overflow-hidden p-8 flex flex-col border border-zinc-800/90 bg-[#080808]/80 group shadow-xl hover:border-[#cda47b]/50 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(205,164,123,0.12)] transition-all duration-500 backdrop-blur-sm cursor-pointer">
                            <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/frames-webp/Frame_00000150.webp')] bg-cover bg-left opacity-30 mix-blend-luminosity [mask-image:linear-gradient(to_right,transparent,black)] group-hover:opacity-50 transition-opacity duration-500" />
                            <div className="relative z-10 h-full flex flex-col justify-between flex-1">
                                <div>
                                    <Folder className="text-[#cda47b] mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" size={24} strokeWidth={1.5} />
                                    <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-zinc-500 text-[10px] tracking-[0.25em] uppercase mb-2 block group-hover:text-[#cda47b] transition-colors duration-500">
                                        02. Projects
                                    </span>
                                    <h4 style={{ fontFamily: "'Cinzel', serif" }} className="text-xl text-zinc-100 mb-2">Featured Work</h4>
                                    <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-zinc-400 text-sm leading-relaxed max-w-[200px]">
                                        A collection of my best projects, from web apps to creative builds.
                                    </p>
                                </div>
                                <ArrowRight size={20} className="text-zinc-600 group-hover:text-[#cda47b] transition-all group-hover:translate-x-2 transform duration-500 mt-4" />
                            </div>
                        </motion.div>

                        {/* 3. Top Right: Skills */}
                        <motion.div variants={cardVariant} className="min-h-[240px] md:min-h-0 relative rounded-[24px] overflow-hidden p-8 flex flex-col border border-zinc-800/90 bg-[#080808]/80 group shadow-xl hover:border-[#cda47b]/50 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(205,164,123,0.12)] transition-all duration-500 backdrop-blur-sm cursor-pointer">
                            <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/Last.png')] bg-cover bg-center opacity-30 mix-blend-luminosity [mask-image:linear-gradient(to_right,transparent,black)] group-hover:opacity-50 transition-opacity duration-500" />
                            <div className="relative z-10 h-full flex flex-col justify-between flex-1">
                                <div>
                                    <Settings className="text-[#cda47b] mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-90" size={24} strokeWidth={1.5} />
                                    <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-zinc-500 text-[10px] tracking-[0.25em] uppercase mb-2 block group-hover:text-[#cda47b] transition-colors duration-500">
                                        03. Skills
                                    </span>
                                    <h4 style={{ fontFamily: "'Cinzel', serif" }} className="text-xl text-zinc-100 mb-2">Tech Stack</h4>
                                    <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-zinc-400 text-sm leading-relaxed max-w-[200px]">
                                        The tools and technologies I work with to build modern web apps.
                                    </p>
                                </div>
                                <ArrowRight size={20} className="text-zinc-600 group-hover:text-[#cda47b] transition-all group-hover:translate-x-2 transform duration-500 mt-4" />
                            </div>
                        </motion.div>

                        {/* 4. Bottom Left: Experience */}
                        <motion.div variants={cardVariant} className="min-h-[240px] md:min-h-0 relative rounded-[24px] overflow-hidden p-8 flex flex-col border border-zinc-800/90 bg-[#080808]/80 group shadow-xl hover:border-[#cda47b]/50 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(205,164,123,0.12)] transition-all duration-500 backdrop-blur-sm cursor-pointer">
                            <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/frames-webp/Frame_00000050.webp')] bg-cover bg-left opacity-30 mix-blend-luminosity [mask-image:linear-gradient(to_right,transparent,black)] group-hover:opacity-50 transition-opacity duration-500" />
                            <div className="relative z-10 h-full flex flex-col justify-between flex-1">
                                <div>
                                    <Sparkles className="text-[#cda47b] mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" size={24} strokeWidth={1.5} />
                                    <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-zinc-500 text-[10px] tracking-[0.25em] uppercase mb-2 block group-hover:text-[#cda47b] transition-colors duration-500">
                                        04. Experience
                                    </span>
                                    <h4 style={{ fontFamily: "'Cinzel', serif" }} className="text-xl text-zinc-100 mb-2">My Journey</h4>
                                    <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-zinc-400 text-sm leading-relaxed max-w-[200px]">
                                        A look at my education, experience and growth.
                                    </p>
                                </div>
                                <ArrowRight size={20} className="text-zinc-600 group-hover:text-[#cda47b] transition-all group-hover:translate-x-2 transform duration-500 mt-4" />
                            </div>
                        </motion.div>

                        {/* 5. Bottom Right: Contact */}
                        <motion.div variants={cardVariant} className="min-h-[240px] md:min-h-0 relative rounded-[24px] overflow-hidden p-8 flex flex-col border border-zinc-800/90 bg-[#080808]/80 group shadow-xl hover:border-[#cda47b]/50 hover:-translate-y-2 hover:shadow-[0_12px_40px_rgba(205,164,123,0.12)] transition-all duration-500 backdrop-blur-sm cursor-pointer">
                            <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/frames-webp/Frame_00000290.webp')] bg-cover bg-center opacity-30 mix-blend-luminosity [mask-image:linear-gradient(to_right,transparent,black)] group-hover:opacity-50 transition-opacity duration-500" />
                            <div className="relative z-10 h-full flex flex-col justify-between flex-1">
                                <div>
                                    <Mail className="text-[#cda47b] mb-4 transition-transform duration-500 group-hover:scale-110 group-hover:-translate-y-1" size={24} strokeWidth={1.5} />
                                    <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-zinc-500 text-[10px] tracking-[0.25em] uppercase mb-2 block group-hover:text-[#cda47b] transition-colors duration-500">
                                        05. Contact
                                    </span>
                                    <h4 style={{ fontFamily: "'Cinzel', serif" }} className="text-xl text-zinc-100 mb-2">Let's Connect</h4>
                                    <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-zinc-400 text-sm leading-relaxed max-w-[200px]">
                                        Have a project in mind? Feel free to reach out.
                                    </p>
                                </div>
                                <ArrowRight size={20} className="text-zinc-600 group-hover:text-[#cda47b] transition-all group-hover:translate-x-2 transform duration-500 mt-4" />
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}