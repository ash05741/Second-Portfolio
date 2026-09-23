import { motion } from 'framer-motion';
import { Sparkles, Image as Folder, ArrowRight, Settings, Mail } from 'lucide-react';

export function BentoGrid() {
    // Scroll reveal animation for the grid items
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
        <section className="relative w-full bg-[#050505] pointer-events-auto overflow-hidden font-sans pb-32">

            {/* Header section matching the reference */}
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-24 mb-10">
                <div className="flex items-center gap-4 mb-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#cda47b]">
                        <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" fill="currentColor" />
                    </svg>
                    <h2 className="text-2xl md:text-3xl font-serif text-zinc-200 tracking-widest uppercase">
                        Bento Grid
                    </h2>
                </div>
                <p className="text-zinc-500 text-sm ml-10">
                    Crafted with purpose. Built for the modern web.
                </p>
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">

                {/* 5-Panel Asymmetric Grid Layout */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ staggerChildren: 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 auto-rows-[250px] md:auto-rows-[300px] gap-6"
                >

                    {/* 1. Left Tall (Col 1, Row 1-2): About Me */}
                    <motion.div variants={cardVariant} className="md:col-span-1 md:row-span-2 relative rounded-[20px] overflow-hidden p-8 flex flex-col border border-zinc-800 bg-[#0a0a0a] group shadow-2xl">
                        {/* Background Image */}
                        <div className="absolute inset-0 bg-[url('/Last.png')] bg-cover bg-center opacity-40 mix-blend-luminosity transition-transform duration-700 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent z-0" />

                        <div className="relative z-10 h-full flex flex-col justify-between">
                            <div>
                                <span className="text-[#cda47b] text-[10px] tracking-widest uppercase font-mono mb-4 block">
                                    01. About Me
                                </span>
                                <h3 className="text-4xl md:text-5xl font-serif text-white leading-[1.1] mb-6">
                                    I BUILD <br /> DIGITAL <br /> EXPERIENCES
                                </h3>
                                <p className="text-zinc-400 text-sm leading-relaxed max-w-[260px]">
                                    I'm a full stack developer who turns ideas into real, scalable web applications. I love solving problems and creating clean, modern interfaces.
                                </p>
                            </div>

                            <button className="flex items-center gap-2 bg-[#cda47b] hover:bg-[#e3c19b] text-black px-6 py-3 rounded-sm transition-colors duration-300 w-fit mt-8">
                                <span className="text-xs font-semibold tracking-wide uppercase">
                                    Learn More
                                </span>
                                <ArrowRight size={16} />
                            </button>
                        </div>
                    </motion.div>

                    {/* Right Side 2x2 Grid */}
                    <div className="md:col-span-2 md:row-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">

                        {/* 2. Top Left: Projects */}
                        <motion.div variants={cardVariant} className="relative rounded-[20px] overflow-hidden p-8 flex flex-col border border-zinc-800 bg-[#0a0a0a] group shadow-xl hover:border-zinc-700 transition-colors">
                            <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/frames-webp/Frame_00000150.webp')] bg-cover bg-left opacity-30 mix-blend-luminosity [mask-image:linear-gradient(to_right,transparent,black)]" />
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <Folder className="text-[#cda47b] mb-4" size={24} strokeWidth={1.5} />
                                    <span className="text-zinc-500 text-[10px] tracking-widest uppercase font-mono mb-2 block">
                                        02. Projects
                                    </span>
                                    <h4 className="text-xl font-serif text-white mb-2">Featured Work</h4>
                                    <p className="text-zinc-400 text-xs leading-relaxed max-w-[200px]">
                                        A collection of my best projects, from web apps to creative builds.
                                    </p>
                                </div>
                                <ArrowRight size={20} className="text-zinc-600 group-hover:text-[#cda47b] transition-colors group-hover:translate-x-1 transform duration-300" />
                            </div>
                        </motion.div>

                        {/* 3. Top Right: Skills */}
                        <motion.div variants={cardVariant} className="relative rounded-[20px] overflow-hidden p-8 flex flex-col border border-zinc-800 bg-[#0a0a0a] group shadow-xl hover:border-zinc-700 transition-colors">
                            <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/Last.png')] bg-cover bg-center opacity-30 mix-blend-luminosity [mask-image:linear-gradient(to_right,transparent,black)]" />
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <Settings className="text-[#cda47b] mb-4" size={24} strokeWidth={1.5} />
                                    <span className="text-zinc-500 text-[10px] tracking-widest uppercase font-mono mb-2 block">
                                        03. Skills
                                    </span>
                                    <h4 className="text-xl font-serif text-white mb-2">Tech Stack</h4>
                                    <p className="text-zinc-400 text-xs leading-relaxed max-w-[200px]">
                                        The tools and technologies I work with to build modern web apps.
                                    </p>
                                </div>
                                <ArrowRight size={20} className="text-zinc-600 group-hover:text-[#cda47b] transition-colors group-hover:translate-x-1 transform duration-300" />
                            </div>
                        </motion.div>

                        {/* 4. Bottom Left: Experience */}
                        <motion.div variants={cardVariant} className="relative rounded-[20px] overflow-hidden p-8 flex flex-col border border-zinc-800 bg-[#0a0a0a] group shadow-xl hover:border-zinc-700 transition-colors">
                            <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/frames-webp/Frame_00000050.webp')] bg-cover bg-left opacity-30 mix-blend-luminosity [mask-image:linear-gradient(to_right,transparent,black)]" />
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <Sparkles className="text-[#cda47b] mb-4" size={24} strokeWidth={1.5} />
                                    <span className="text-zinc-500 text-[10px] tracking-widest uppercase font-mono mb-2 block">
                                        04. Experience
                                    </span>
                                    <h4 className="text-xl font-serif text-white mb-2">My Journey</h4>
                                    <p className="text-zinc-400 text-xs leading-relaxed max-w-[200px]">
                                        A look at my education, experience and growth.
                                    </p>
                                </div>
                                <ArrowRight size={20} className="text-zinc-600 group-hover:text-[#cda47b] transition-colors group-hover:translate-x-1 transform duration-300" />
                            </div>
                        </motion.div>

                        {/* 5. Bottom Right: Contact */}
                        <motion.div variants={cardVariant} className="relative rounded-[20px] overflow-hidden p-8 flex flex-col border border-zinc-800 bg-[#0a0a0a] group shadow-xl hover:border-zinc-700 transition-colors">
                            <div className="absolute right-0 top-0 w-1/2 h-full bg-[url('/frames-webp/Frame_00000290.webp')] bg-cover bg-center opacity-30 mix-blend-luminosity [mask-image:linear-gradient(to_right,transparent,black)]" />
                            <div className="relative z-10 h-full flex flex-col justify-between">
                                <div>
                                    <Mail className="text-[#cda47b] mb-4" size={24} strokeWidth={1.5} />
                                    <span className="text-zinc-500 text-[10px] tracking-widest uppercase font-mono mb-2 block">
                                        05. Contact
                                    </span>
                                    <h4 className="text-xl font-serif text-white mb-2">Let's Connect</h4>
                                    <p className="text-zinc-400 text-xs leading-relaxed max-w-[200px]">
                                        Have a project in mind? Feel free to reach out.
                                    </p>
                                </div>
                                <ArrowRight size={20} className="text-zinc-600 group-hover:text-[#cda47b] transition-colors group-hover:translate-x-1 transform duration-300" />
                            </div>
                        </motion.div>

                    </div>
                </motion.div>
            </div>
        </section>
    );
}