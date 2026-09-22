export function Navigation() {
    return (
        <div className="absolute top-8 left-6 md:left-12 z-50">
            <div className="flex items-center gap-6 border border-white/15 hover:border-white/30 transition-colors rounded-full pl-6 pr-6 py-3">
                <div className="flex items-center gap-4">
                    <div className="w-5 h-5 rounded-full border border-orange-500/70 flex items-center justify-center">
                        <div className="w-2 h-[1px] bg-orange-400 transform rotate-45"></div>
                        <div className="w-2 h-[1px] bg-orange-400 transform -rotate-45 absolute"></div>
                    </div>
                    <span className="font-light text-sm tracking-[0.2em] uppercase text-white/90">Dreamframe</span>
                </div>
                <div className="w-[1px] h-4 bg-white/20"></div>
                <button className="flex flex-col gap-[6px] justify-center w-6 h-6 hover:opacity-70 transition-opacity">
                    <span className="w-5 h-[1px] bg-white/80"></span>
                    <span className="w-5 h-[1px] bg-white/80"></span>
                </button>
            </div>
        </div>
    );
}