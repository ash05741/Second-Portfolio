import { ChevronLeft, ChevronRight } from 'lucide-react';

export function LogoCarousel() {
    const techStack = [
        {
            name: "GitHub",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
            )
        },
        {
            name: "React",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M12 22.8c-2.38 0-4.66-.46-6.69-1.28-1.92-.78-3.46-1.89-4.39-3.15-.49-.66-.75-1.37-.75-2.09 0-1.58 1.15-3.08 3.32-4.32C1.48 10.9.43 9.69.11 8.24c-.16-.72-.08-1.46.22-2.14.39-.88 1.15-1.63 2.18-2.16 2.07-1.07 4.96-1.59 8.35-1.59s6.28.52 8.35 1.59c1.03.53 1.79 1.28 2.18 2.16.3.68.38 1.42.22 2.14-.32 1.45-1.37 2.66-3.38 3.72 2.17 1.24 3.32 2.74 3.32 4.32 0 .72-.26 1.43-.75 2.09-.93 1.26-2.47 2.37-4.39 3.15-2.03.82-4.31 1.28-6.69 1.28zm0-19.14c-6.84 0-10.45 2.58-10.45 4.91 0 1.07 1 2.2 2.92 3.16 2.02.99 4.8 1.62 7.53 1.62s5.51-.63 7.53-1.62c1.92-.96 2.92-2.09 2.92-3.16 0-2.33-3.61-4.91-10.45-4.91zM7.22 13.9c-2.2-.4-4.22-.97-5.83-1.64-.81-.33-1.41-.7-1.74-1.07.72 1.95 2.83 3.65 5.86 4.71 1.92.68 4.14 1.06 6.49 1.06 1.16 0 2.31-.07 3.42-.2-.59-1.39-1.45-2.61-2.5-3.56-1.77 1.11-4.08 1.79-6.63 1.79-2.04 0-4.01-.5-5.59-1.43-.72-.43-1.28-.96-1.63-1.57.19.04.38.07.57.11 1.07.22 2.29.35 3.58.35.25 0 .5-.01.75-.02-.51-1.07-.82-2.22-.9-3.41-1.41.6-2.52 1.34-3.18 2.14-.14.17-.24.36-.31.57.14-.3.33-.58.55-.83H7.22z" />
                </svg>
            )
        },
        {
            name: "Tailwind CSS",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                </svg>
            )
        },
        {
            name: "Node.js",
            icon: (
                <div className="w-10 h-10 border border-white rounded-md flex items-center justify-center font-bold text-white">JS</div>
            )
        },
        {
            name: "MongoDB",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M17.193 9.555c-.046-2.673-1.66-4.606-3.832-6.19-1.218-.887-2.34-1.61-2.353-2.18-.009-.452-.085-1.185-.085-1.185s-.088.766-.088 1.258c-.004 2.873-1.996 4.417-3.415 6.467-1.42 2.05-2.073 4.14-1.745 6.543.34 2.5 1.558 4.708 3.518 6.136.068.05.138.093.208.136 1.48 1.155 3.328 1.34 3.328 1.34s-1.045-2.613-1.077-4.116c-.032-1.55 1.05-3.082 2.058-4.298 1.298-1.55 3.535-3.792 3.483-7.91zm-5.748 11.23c-1.516-.275-2.62-1.25-3.232-2.493.597.432 1.332.65 2.146.592.51-.037 1.006-.176 1.455-.41.342 1.266 1.127 2.378 1.706 3.447-.642.062-1.335-.85-2.075-1.136z" />
                </svg>
            )
        },
        {
            name: "Firebase",
            icon: (
                <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" className="text-white">
                    <path d="M3.568 18.067l.142-.234L8.718 8.44a.97.97 0 0 1 1.72 0l2.3 4.385 4.3-11.83a.968.968 0 0 1 1.834.195l4.887 20.893c.123.526-.39 1.002-.876.772a39.261 39.261 0 0 1-10.428-5.32 39.117 39.117 0 0 1-8.528-6.19.98.98 0 0 1-.36-1.278zm2.637.382l4.24-8.03 2.5 4.77-6.74 3.26z" />
                </svg>
            )
        }
    ];

    // Create enough duplicates to ensure it never runs out of screen space
    const duplicatedStack = [...techStack, ...techStack, ...techStack];

    return (
        <section className="relative w-full max-w-[1400px] mx-auto py-16 px-6 md:px-12 bg-[#050505]">
            <style>{`
                @keyframes seamless-marquee {
                    0% { transform: translateX(0); }
                    100% { transform: translateX(calc(-100% / 3)); }
                }
                .animate-seamless {
                    animation: seamless-marquee 20s linear infinite;
                }
            `}</style>

            {/* Header Section */}
            <div className="mb-10">
                <div className="flex items-center gap-4 mb-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#cda47b]">
                        <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" fill="currentColor" />
                    </svg>
                    <h2 className="text-2xl md:text-3xl font-serif text-zinc-200 tracking-widest uppercase">
                        Logo Carousel
                    </h2>
                </div>
                <p className="text-zinc-500 text-sm ml-10">
                    Trusted by amazing tools and platforms.
                </p>
            </div>

            {/* Carousel Container Box */}
            <div className="relative w-full border border-zinc-800/80 bg-[#0a0a0a]/50 rounded-2xl py-8 px-4 md:px-8 flex items-center justify-between shadow-2xl overflow-hidden">

                {/* Left Navigation Arrow */}
                <button className="hidden md:flex shrink-0 w-10 h-10 rounded-full border border-zinc-700 items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-all bg-black z-20">
                    <ChevronLeft size={20} />
                </button>

                {/* Masking gradients to fade out the edges smoothly */}
                <div className="relative flex w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">

                    {/* Native CSS Marquee - Perfectly calculates 1/3 translation for a triple array */}
                    <div className="flex w-max animate-seamless">
                        {duplicatedStack.map((tech, index) => (
                            <div key={`logo-${index}`} className="flex flex-col items-center justify-center gap-4 group w-32 md:w-48 flex-shrink-0">
                                <div className="text-zinc-400 group-hover:text-white transition-colors duration-300">
                                    {tech.icon}
                                </div>
                                <span className="text-xs md:text-sm text-zinc-500 group-hover:text-zinc-300 tracking-wider transition-colors duration-300">
                                    {tech.name}
                                </span>
                            </div>
                        ))}
                    </div>

                </div>

                {/* Right Navigation Arrow */}
                <button className="hidden md:flex shrink-0 w-10 h-10 rounded-full border border-zinc-700 items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-500 transition-all bg-black z-20">
                    <ChevronRight size={20} />
                </button>
            </div>
        </section>
    );
}