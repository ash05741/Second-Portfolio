import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroContent() {
    // Animation variants explicitly typed for TypeScript
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
            transition: {
                duration: 0.8,
                // Cast to a strict 4-number tuple to satisfy Framer Motion's Easing type
                ease: [0.16, 1, 0.3, 1] as [number, number, number, number]
            }
        }
    };

    return (
        <main className="relative z-30 w-full h-screen max-w-[1800px] mx-auto pointer-events-none">

            {/* --- Left Column Content --- */}
            <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                className="absolute top-[40%] md:top-[45%] -translate-y-1/2 left-6 md:left-24 flex flex-col pointer-events-auto"
            >
                <motion.h1 variants={item} className="text-5xl md:text-[85px] font-serif tracking-tight leading-[1.05] text-white">
                    Imagining <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e3c19b] to-[#cda47b]">
                        beyond reality.
                    </span>
                </motion.h1>

                <motion.div variants={item} className="w-12 h-[1px] bg-[#cda47b]/40 mt-10 mb-8"></motion.div>

                <motion.p variants={item} className="text-zinc-300 text-sm md:text-base font-light leading-relaxed tracking-wide max-w-[340px] mb-12">
                    Dreamframe explores the boundary between imagination and reality, turning the impossible into visuals.
                </motion.p>

                <motion.button variants={item} className="flex items-center gap-6 group w-fit cursor-pointer">
                    <div className="w-[52px] h-[52px] rounded-full border border-[#cda47b]/30 flex items-center justify-center group-hover:border-[#cda47b] group-hover:bg-[#cda47b]/10 transition-all duration-300">
                        <ArrowRight size={20} className="text-[#cda47b] group-hover:translate-x-1 transition-transform" />
                    </div>
                    <span className="text-[#cda47b]/80 text-xs tracking-[0.25em] uppercase font-medium group-hover:text-[#cda47b] transition-colors">
                        View Our Work
                    </span>
                </motion.button>
            </motion.div>
            {/* ------------------------------------- */}


            {/* --- Bottom Left Scroll Indicator --- */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
                className="absolute bottom-12 left-6 md:left-24 flex flex-col items-start gap-4 pointer-events-auto"
            >
                <span className="text-[#cda47b]/50 text-[9px] tracking-[0.3em] uppercase font-medium">
                    Scroll
                </span>
                <div className="flex flex-col items-center ml-[14px]">
                    <motion.div
                        animate={{ y: [0, 30, 0], opacity: [1, 0, 1] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                        className="w-[2px] h-[2px] bg-[#cda47b] rounded-full shadow-[0_0_8px_#cda47b]"
                    />
                    <div className="w-[1px] h-16 bg-gradient-to-b from-[#cda47b]/40 to-transparent mt-1"></div>
                </div>
            </motion.div>
            {/* --------------------------------------------- */}


            {/* ★ THE LOGO FIX: Bottom Right "System Status" ★ */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
                className="absolute bottom-12 right-6 md:right-24 pointer-events-auto flex flex-col gap-3 p-5 rounded-3xl border border-[#cda47b]/10 bg-black/10 backdrop-blur-2xl shadow-2xl"
            >
                {/* Status indicator line */}
                <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-[#cda47b] animate-pulse"></div>
                    <span className="text-white/90 text-xs font-semibold tracking-wider uppercase">
                        System: Active
                    </span>
                </div>

                {/* Technical metadata */}
                <div className="flex flex-col gap-1 text-[#cda47b]/60 text-[11px] font-mono tracking-wide">
                    <span>{'>'} Nodes:  Kanpur (IN), Tokyo (JP)</span>
                    <span>{'>'} Latent Diff. v2.1.0</span>
                    <span>{'>'} Output: 4096px [Hi-Res]</span>
                </div>
            </motion.div>

        </main>
    );
}