export function LoadingScreen({ progress }: { progress: number }) {
    const isLoaded = progress >= 100;

    return (
        <div
            className={`fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#050505] transition-opacity duration-1000 ${isLoaded ? 'opacity-0 pointer-events-none' : 'opacity-100'
                }`}
        >
            {/* Cinematic Loading Ring */}
            <div className="relative w-16 h-16 mb-6">
                {/* Faint background track */}
                <div className="absolute inset-0 rounded-full border-[3px] border-zinc-900"></div>
                {/* Spinning highlight */}
                <div className="absolute inset-0 rounded-full border-[3px] border-transparent border-t-zinc-300 animate-spin"></div>
            </div>

            {/* Typography */}
            <div className="text-zinc-500 font-mono text-xs tracking-[0.3em] uppercase">
                Preparing Sequence <span className="text-zinc-300">{Math.round(progress)}%</span>
            </div>
        </div>
    );
}