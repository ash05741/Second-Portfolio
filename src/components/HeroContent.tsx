import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroContent() {
    const container: Variants = {
        hidden: { opacity: 0 },
        show: {
            opacity: 1,
            transition: { staggerChildren: 0.2, delayChildren: 0.4 }
        }
    };

    const item: Variants = {
        hidden: { opacity: 0, y: 20 },
        show: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] }
        }
    };

    return (
        <main className="relative z-30 w-full h-screen max-w-[1600px] mx-auto pointer-events-none px-6 md:px-12 flex items-center">

            {/* --- Main Left Content --- */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="flex flex-col pointer-events-auto max-w-xl"
            >
                {/* Subtitle */}
                <motion.div variants={item} className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-[1px] bg-[#cda47b]"></div>
                    <div className="w-2 h-2 rotate-45 border border-[#cda47b]"></div>
                    <span className="font-mono text-zinc-400 text-[10px] tracking-[0.3em] uppercase ml-2">
                        Full Stack Developer
                    </span>
                </motion.div>

                {/* Main Headline */}
                <motion.h1 variants={item} className="font-serif text-5xl md:text-[70px] tracking-tight leading-[1.05] text-zinc-100 mb-8">
                    Building digital <br />
                    <span className="text-[#cda47b]">realms.</span>
                </motion.h1>

                {/* Description */}
                <motion.p variants={item} className="font-sans text-zinc-400 text-sm md:text-base font-light leading-relaxed tracking-wide max-w-[420px] mb-12">
                    I craft modern web experiences with clean code, strong backend systems and a touch of creativity. Turning ideas into interactive worlds.
                </motion.p>

                {/* Action Buttons */}
                <motion.div variants={item} className="flex items-center gap-6">
                    {/* Primary Button with angled corner illusion via CSS clip-path */}
                    <button
                        className="relative group px-8 py-3.5 text-zinc-200 text-xs tracking-widest uppercase transition-all duration-300 hover:text-white hover:bg-[#cda47b]/10"
                        style={{
                            clipPath: 'polygon(10px 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px)',
                            border: '1px solid rgba(205, 164, 123, 0.4)'
                        }}
                    >
                        <span className="font-sans flex items-center gap-3">
                            View My Projects
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                        </span>
                    </button>

                    {/* Secondary Link */}
                    <button className="font-sans text-zinc-400 text-xs tracking-widest uppercase hover:text-white transition-colors border-b border-zinc-700 hover:border-[#cda47b] pb-1">
                        About Me
                    </button>
                </motion.div>
            </motion.div>
            {/* ------------------------------------- */}

            {/* --- Bottom Left: Socials --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 1 }}
                className="absolute bottom-12 left-6 md:left-12 flex items-center gap-5 pointer-events-auto text-zinc-400"
            >
                <a href="#" className="hover:text-white transition-colors"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" /></svg></a>
                <a href="#" className="hover:text-white transition-colors"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg></a>
                <a href="#" className="hover:text-white transition-colors"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg></a>
                <a href="#" className="hover:text-white transition-colors"><svg className="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z" /></svg></a>
                <div className="w-12 h-[1px] bg-zinc-700 ml-4"></div>
            </motion.div>

            {/* --- Right Edge: Vertical Scroll Indicator --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 flex flex-col items-center gap-6 pointer-events-auto"
            >
                <div className="w-[1px] h-20 bg-gradient-to-t from-zinc-700 to-transparent"></div>
                <div className="w-2 h-2 rotate-45 bg-[#cda47b]"></div>
                <span className="font-mono text-zinc-400 text-[9px] tracking-[0.3em] uppercase font-medium rotate-90 my-10 whitespace-nowrap">
                    Scroll Down
                </span>
                <div className="w-2 h-2 rotate-45 border border-[#cda47b]"></div>
                <div className="w-[1px] h-20 bg-gradient-to-b from-zinc-700 to-transparent"></div>
            </motion.div>

            {/* 
                  THE GLASSMORPHIC FIX
            */}
            <div className="hidden md:block absolute bottom-12 right-6 md:right-12 pointer-events-auto z-20">
                <div className="flex items-center gap-4 px-6 py-8 rounded-2xl bg-black/40 backdrop-blur-xl border border-white/5 shadow-2xl">
                    <div className="w-1.5 h-1.5 rotate-45 bg-[#cda47b]"></div>
                    <span className="font-mono text-zinc-400 text-[10px] tracking-[0.25em]">
                        IDEAS / CODE / REALITY
                    </span>
                </div>
            </div>

        </main>
    );
}