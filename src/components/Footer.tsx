import { Link } from 'react-router-dom';
import { ArrowUp, Sparkles } from 'lucide-react';

export function Footer() {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="relative w-full bg-[#030303] pt-20 pb-12 px-6 md:px-12 overflow-hidden z-40 select-none">

            {/* --- Top Glowing Horizon Divider --- */}
            <div className="
                absolute top-0 left-0 w-full h-[1px] 
                bg-gradient-to-r from-transparent via-[#cda47b]/40 to-transparent
            " />
            <div className="
                absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 
                w-3 h-3 rotate-45 bg-[#030303] border border-[#cda47b]/60 
                shadow-[0_0_15px_rgba(205,164,123,0.5)]
            " />

            {/* --- Subtle Ambient Background Glow --- */}
            <div className="
                absolute bottom-0 left-1/2 -translate-x-1/2 
                w-[600px] h-[300px] bg-[#cda47b]/5 blur-[120px] 
                rounded-full pointer-events-none -z-10
            " />

            <div className="max-w-[1400px] mx-auto relative z-10">

                {/* --- Main Upper Section --- */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-zinc-900/80">

                    {/* Col 1: Brand & Philosophy (Span 5) */}
                    <div className="md:col-span-5 flex flex-col justify-between">
                        <div>
                            <Link to="/" onClick={scrollToTop} className="flex items-center gap-4 group w-fit mb-6">
                                <div className="
                                    w-12 h-12 rounded-xl bg-[#080808] border border-zinc-800/90 
                                    flex items-center justify-center text-[#cda47b] shadow-inner 
                                    group-hover:border-[#cda47b]/50 group-hover:bg-[#12100d] 
                                    group-hover:shadow-[0_0_20px_rgba(205,164,123,0.15)] 
                                    transition-all duration-500
                                ">
                                    <span style={{ fontFamily: "'Cinzel', serif" }} className="font-bold text-lg tracking-wider">
                                        AS
                                    </span>
                                </div>
                                <div className="flex flex-col">
                                    <span
                                        style={{ fontFamily: "'Cinzel', serif" }}
                                        className="text-lg text-zinc-100 tracking-widest uppercase group-hover:text-[#cda47b] transition-colors duration-300"
                                    >
                                        Asmit Shukla
                                    </span>
                                    <span
                                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                                        className="text-[10px] text-zinc-500 tracking-[0.25em] uppercase mt-0.5"
                                    >
                                        Architect of Digital Realms
                                    </span>
                                </div>
                            </Link>

                            <p
                                style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                className="text-zinc-400 text-base md:text-lg leading-relaxed max-w-sm font-light"
                            >
                                Forging scalable full-stack applications and immersive web experiences with clean code and dark-fantasy aesthetics.
                            </p>
                        </div>

                        {/* Status Pill */}
                        <div className="mt-8 flex items-center gap-3 w-fit px-4 py-2 rounded-full bg-[#080808] border border-zinc-800/80">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#cda47b] opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#cda47b]"></span>
                            </span>
                            <span
                                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                                className="text-[10px] tracking-[0.2em] uppercase text-zinc-400"
                            >
                                Available for New Quests
                            </span>
                        </div>
                    </div>

                    {/* Col 2: Navigation (Span 3) */}
                    <div className="md:col-span-3 flex flex-col gap-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles size={14} className="text-[#cda47b]" />
                            <span
                                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                                className="text-[10px] tracking-[0.3em] uppercase text-[#cda47b]"
                            >
                                Navigation
                            </span>
                        </div>
                        <ul className="flex flex-col gap-3">
                            {[
                                { name: "Home", path: "/" },
                                { name: "About", path: "/about" },
                                { name: "Tech Arsenal", path: "/skills" },
                                { name: "The Chronicles", path: "/projects" },
                                { name: "Contact", path: "/contact" },
                            ].map((item, idx) => (
                                <li key={idx}>
                                    <Link
                                        to={item.path}
                                        style={{ fontFamily: "'Cinzel', serif" }}
                                        className="
                                            text-xs text-zinc-400 hover:text-[#cda47b] tracking-widest uppercase 
                                            transition-all duration-300 flex items-center gap-2 group w-fit
                                        "
                                    >
                                        <span className="w-0 h-[1px] bg-[#cda47b] transition-all duration-300 group-hover:w-3" />
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Col 3: Socials & Back to Top (Span 4) */}
                    <div className="md:col-span-4 flex flex-col justify-between items-start md:items-end">
                        <div className="flex flex-col items-start md:items-end w-full">
                            <span
                                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                                className="text-[10px] tracking-[0.3em] uppercase text-[#cda47b] mb-6 block"
                            >
                                Alliances & Networks
                            </span>

                            {/* Social Buttons with Premium Hover */}
                            <div className="flex items-center gap-4">
                                {/* GitHub */}
                                <a
                                    href="https://github.com/ash05741"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        p-3.5 rounded-xl bg-[#080808] border border-zinc-800/80 text-zinc-400 
                                        hover:text-[#cda47b] hover:border-[#cda47b]/50 hover:bg-[#12100d] 
                                        hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(205,164,123,0.15)] 
                                        transition-all duration-300 flex items-center justify-center group
                                    "
                                >
                                    <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href="https://linkedin.com/in/asmit-shukla-2a8591258/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        p-3.5 rounded-xl bg-[#080808] border border-zinc-800/80 text-zinc-400 
                                        hover:text-[#cda47b] hover:border-[#cda47b]/50 hover:bg-[#12100d] 
                                        hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(205,164,123,0.15)] 
                                        transition-all duration-300 flex items-center justify-center group
                                    "
                                >
                                    <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </a>

                                {/* Twitter/X */}
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="
                                        p-3.5 rounded-xl bg-[#080808] border border-zinc-800/80 text-zinc-400 
                                        hover:text-[#cda47b] hover:border-[#cda47b]/50 hover:bg-[#12100d] 
                                        hover:-translate-y-1 hover:shadow-[0_10px_25px_rgba(205,164,123,0.15)] 
                                        transition-all duration-300 flex items-center justify-center group
                                    "
                                >
                                    <svg className="w-5 h-5 fill-current transition-transform duration-300 group-hover:scale-110" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Back to Top Button */}
                        <button
                            onClick={scrollToTop}
                            className="
                                mt-10 md:mt-0 flex items-center gap-3 px-5 py-3 rounded-xl 
                                bg-[#080808] border border-zinc-800/80 text-zinc-400 
                                hover:text-[#cda47b] hover:border-[#cda47b]/40 
                                transition-all duration-300 group cursor-pointer shadow-inner
                            "
                        >
                            <span
                                style={{ fontFamily: "'JetBrains Mono', monospace" }}
                                className="text-[10px] tracking-[0.2em] uppercase"
                            >
                                Return to Zenith
                            </span>
                            <ArrowUp size={14} className="text-[#cda47b] group-hover:-translate-y-1 transition-transform duration-300" />
                        </button>
                    </div>

                </div>

                {/* --- Bottom Copyright Bar --- */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 text-zinc-600">
                    <span
                        style={{ fontFamily: "'JetBrains Mono', monospace" }}
                        className="text-[10px] tracking-[0.2em] uppercase"
                    >
                        © {new Date().getFullYear()} Asmit Shukla. All rights reserved.
                    </span>

                    <div className="flex items-center gap-2">
                        <div className="w-1 h-1 rotate-45 bg-[#cda47b]/50" />
                        <span
                            style={{ fontFamily: "'Cormorant Garamond', serif" }}
                            className="text-sm italic text-zinc-500"
                        >
                            Forged in the depths of React & Tailwind
                        </span>
                        <div className="w-1 h-1 rotate-45 bg-[#cda47b]/50" />
                    </div>
                </div>

            </div>
        </footer>
    );
}