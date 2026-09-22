export function LogoCarousel() {
    const topLogos = ["OpenAI", "Midjourney", "Anthropic", "Stability AI", "Runway", "Hugging Face", "Replicate", "Cohere"];
    const bottomLogos = ["Vercel", "Nvidia", "Scale AI", "Supabase", "Pinecone", "LangChain", "Figma", "Stripe"];

    return (
        <section className="relative w-full py-24 md:py-32 overflow-hidden flex flex-col gap-8 pointer-events-none bg-[#050505]">

            {/* Cosmic Glow Effects */}
            <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />
            <div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/10 blur-[150px] rounded-full pointer-events-none mix-blend-screen" />

            {/* Edge Mask for smooth fade-in/out */}
            <div className="absolute inset-0 z-10 pointer-events-none bg-transparent [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]" />

            {/* Top Row: Moves Right to Left */}
            <div className="flex w-max animate-marquee relative z-20">
                {[...topLogos, ...topLogos].map((logo, index) => (
                    <div key={index} className="flex-none w-[240px] md:w-[320px] px-3 md:px-4">
                        <div className="w-full flex items-center justify-between px-8 py-6 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06] backdrop-blur-sm shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]">
                            <span className="text-sm md:text-base font-medium tracking-[0.15em] text-white/70 uppercase">
                                {logo}
                            </span>
                            {/* Subtle tech accent */}
                            <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Row: Moves Left to Right */}
            <div className="flex w-max animate-marquee-reverse -ml-[100px] md:-ml-[150px] relative z-20">
                {[...bottomLogos, ...bottomLogos].map((logo, index) => (
                    <div key={index} className="flex-none w-[240px] md:w-[320px] px-3 md:px-4">
                        <div className="w-full flex items-center justify-between px-8 py-6 rounded-3xl bg-gradient-to-br from-white/[0.04] to-transparent border border-white/[0.06] backdrop-blur-sm shadow-[0_4px_24px_-8px_rgba(0,0,0,0.5)]">
                            <span className="text-sm md:text-base font-medium tracking-[0.15em] text-white/70 uppercase">
                                {logo}
                            </span>
                            {/* Orange accent to match the Hero status panel */}
                            <div className="w-1.5 h-1.5 rounded-full bg-orange-500/60 shadow-[0_0_8px_rgba(249,115,22,0.4)]"></div>
                        </div>
                    </div>
                ))}
            </div>

            <style>{`
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 40s linear infinite;
        }
      `}</style>
        </section>
    );
}