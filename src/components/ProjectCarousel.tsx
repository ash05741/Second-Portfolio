import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

export function ProjectCarousel() {
    const projects = [
        {
            id: 1,
            title: "Finora",
            category: "Finance SaaS",
            image: "https://images.unsplash.com/photo-1639322537228-f710d846310a?q=80&w=600&auto=format&fit=crop",
            desc: "A powerful dashboard for tracking digital assets and managing financial realms.",
            tech: ["React", "Tailwind", "Node.js"]
        },
        {
            id: 2,
            title: "Grimoire",
            category: "Markdown Editor",
            image: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?q=80&w=600&auto=format&fit=crop",
            desc: "An obsidian-themed knowledge base for wizards and developers alike.",
            tech: ["TypeScript", "Next.js", "MongoDB"]
        },
        {
            id: 3,
            title: "Elden UI",
            category: "Component Library",
            image: "https://images.unsplash.com/photo-1605806616949-1e87b487cb2a?q=80&w=600&auto=format&fit=crop",
            desc: "A cinematic, dark-fantasy component library forged in the depths of CSS.",
            tech: ["Framer", "React", "CSS"]
        },
        {
            id: 4,
            title: "Task Forge",
            category: "Productivity",
            image: "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=600&auto=format&fit=crop",
            desc: "Manage your daily quests and bounties with this full-stack task manager.",
            tech: ["Firebase", "React", "Redux"]
        },
        {
            id: 5,
            title: "Nexus API",
            category: "Backend Service",
            image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=600&auto=format&fit=crop",
            desc: "A robust, scalable REST API handling authentication and data sorting.",
            tech: ["Express", "Node.js", "SQL"]
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % projects.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
    };

    const getCardPosition = (index: number) => {
        const diff = index - currentIndex;
        const length = projects.length;

        let normalizedDiff = diff;
        if (diff < -Math.floor(length / 2)) normalizedDiff += length;
        if (diff > Math.floor(length / 2)) normalizedDiff -= length;

        if (normalizedDiff === 0) return "center";
        if (normalizedDiff === -1) return "left";
        if (normalizedDiff === 1) return "right";
        if (normalizedDiff < -1) return "hiddenLeft";
        return "hiddenRight";
    };

    const variants = {
        center: {
            x: "0%", scale: 1, zIndex: 30, opacity: 1, filter: "blur(0px) brightness(100%)"
        },
        left: {
            x: "-90%", scale: 0.85, zIndex: 20, opacity: 0.6, filter: "blur(2px) brightness(40%)"
        },
        right: {
            x: "90%", scale: 0.85, zIndex: 20, opacity: 0.6, filter: "blur(2px) brightness(40%)"
        },
        hiddenLeft: {
            x: "-150%", scale: 0.7, zIndex: 10, opacity: 0, filter: "blur(4px) brightness(20%)"
        },
        hiddenRight: {
            x: "150%", scale: 0.7, zIndex: 10, opacity: 0, filter: "blur(4px) brightness(20%)"
        }
    };

    return (
        <section className="relative w-full py-24 bg-[#050505] overflow-hidden">
            <div className="relative z-40 w-full max-w-[1400px] mx-auto px-6 md:px-12 mb-10 flex flex-col justify-center items-center text-center">
                <div className="flex items-center gap-4 mb-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#cda47b]">
                        <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" fill="currentColor" />
                    </svg>
                    <h2 className="text-2xl md:text-3xl font-serif text-zinc-200 tracking-widest uppercase">
                        The Chronicles
                    </h2>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#cda47b] rotate-180">
                        <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" fill="currentColor" />
                    </svg>
                </div>
                <p className="text-zinc-500 text-sm">
                    Select works forged in the depths of code.
                </p>
            </div>

            <div className="relative w-full max-w-[1400px] mx-auto h-[600px] flex items-center justify-center perspective-[1200px] px-4 md:px-16">
                <button
                    onClick={prevSlide}
                    className="absolute left-2 md:left-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#cda47b]/30 bg-[#080808]/80 backdrop-blur-md flex items-center justify-center text-[#cda47b] hover:bg-[#cda47b] hover:text-black hover:border-black transition-all shadow-[0_0_20px_rgba(205,164,123,0.1)] hover:shadow-[0_0_30px_rgba(205,164,123,0.3)] group cursor-pointer"
                >
                    <ChevronLeft size={24} className="group-hover:-translate-x-1 transition-transform duration-300" />
                </button>

                <AnimatePresence initial={false}>
                    {projects.map((project, index) => {
                        const position = getCardPosition(index);

                        return (
                            <motion.div
                                key={project.id}
                                custom={position}
                                variants={variants}
                                initial={false}
                                animate={position}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.16, 1, 0.3, 1]
                                }}

                                className="absolute w-[280px] sm:w-[380px] h-[500px] md:h-[540px] rounded-[15px] overflow-hidden bg-[#080808] border border-zinc-800/80 shadow-2xl flex flex-col group hover:border-[#cda47b]/50 hover:shadow-[0_15px_40px_rgba(205,164,123,0.15)] transition-colors transition-shadow duration-500 cursor-pointer"
                                style={{ transformOrigin: 'center center' }}
                            >
                                <div className="relative w-full h-[45%] overflow-hidden border-b border-zinc-800/80">
                                    <div
                                        className="absolute inset-0 bg-cover bg-center mix-blend-luminosity opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out"
                                        style={{ backgroundImage: `url(${project.image})` }}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-90 group-hover:opacity-70 transition-opacity duration-500" />

                                    <div className="absolute top-5 left-5 px-3 py-1.5 rounded-lg bg-[#050505]/80 border border-zinc-800/60 backdrop-blur-md group-hover:border-[#cda47b]/30 transition-colors duration-500">
                                        <span className="text-[9px] tracking-[0.2em] uppercase font-mono text-[#cda47b]">
                                            {project.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="flex-1 p-6 flex flex-col justify-between relative z-10 bg-[#080808]">
                                    <div>
                                        <h3 className="text-2xl font-serif text-zinc-100 mb-3 group-hover:text-[#cda47b] transition-colors duration-500">
                                            {project.title}
                                        </h3>
                                        <p className="text-sm text-zinc-400 font-light line-clamp-3 leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                                            {project.desc}
                                        </p>
                                    </div>

                                    <div className="flex flex-col gap-4 mt-6 pt-5 border-t border-zinc-800/60 group-hover:border-[#cda47b]/20 transition-colors duration-500">
                                        <div className="flex flex-wrap gap-x-2 gap-y-1">
                                            {project.tech.map((t, i) => (
                                                <span key={i} className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono group-hover:text-[#cda47b]/80 transition-colors duration-500">
                                                    {t}{i < project.tech.length - 1 ? <span className="text-zinc-700 ml-2">•</span> : ''}
                                                </span>
                                            ))}
                                        </div>

                                        <div className="flex items-center gap-3">
                                            <a href="#" className="p-2.5 rounded-xl border border-zinc-800/60 text-zinc-400 hover:text-[#cda47b] hover:border-[#cda47b]/40 hover:bg-[#cda47b]/10 hover:-translate-y-1 transition-all duration-300 flex items-center justify-center">
                                                <svg className="w-[18px] h-[18px] fill-current" viewBox="0 0 24 24">
                                                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                                </svg>
                                            </a>
                                            <a href="#" className="p-2.5 rounded-xl border border-zinc-800/60 text-zinc-400 hover:text-[#cda47b] hover:border-[#cda47b]/40 hover:bg-[#cda47b]/10 hover:-translate-y-1 transition-all duration-300">
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </AnimatePresence>

                <button
                    onClick={nextSlide}
                    className="absolute right-2 md:right-8 z-50 w-12 h-12 md:w-14 md:h-14 rounded-full border border-[#cda47b]/30 bg-[#080808]/80 backdrop-blur-md flex items-center justify-center text-[#cda47b] hover:bg-[#cda47b] hover:text-black hover:border-black transition-all shadow-[0_0_20px_rgba(205,164,123,0.1)] hover:shadow-[0_0_30px_rgba(205,164,123,0.3)] group cursor-pointer"
                >
                    <ChevronRight size={24} className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
            </div>
        </section>
    );
}