export function LoadingScreen({ progress, isVisible }: { progress: number, isVisible: boolean }) {
    return (
        <div
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-1000 ease-in-out ${isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
        >
            <div className="flex flex-col items-center gap-6 w-full max-w-xs">
                {/* Branding */}
                <div className="text-white/40 tracking-[0.3em] text-[10px] uppercase font-mono">
                    Initializing Engine
                </div>

                {/* Percentage Counter */}
                <div className="text-6xl font-light text-white tracking-tighter tabular-nums">
                    {progress}%
                </div>

                {/* Minimalist Progress Bar */}
                <div className="w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                    <div
                        className="h-full bg-orange-500 transition-all duration-300 ease-out"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>
        </div>
    );
}