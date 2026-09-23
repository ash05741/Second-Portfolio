import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Home, User, Sparkles } from 'lucide-react';

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef<HTMLDivElement>(null);

    // Close menu when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const menuItems = [
        { name: "Home", path: "/", icon: <Home size={16} /> },
        { name: "About Me", path: "/about", icon: <User size={16} /> },
        { name: "Skills", path: "/skills", icon: <Sparkles size={16} /> },
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.5 }}
            className="fixed top-8 left-6 md:left-12 z-50 pointer-events-auto"
            ref={menuRef}
        >
            <div className="relative flex items-center gap-6 border border-zinc-800/80 bg-[#0a0a0a]/80 backdrop-blur-xl hover:border-zinc-700 transition-all duration-300 rounded-full px-6 py-3 shadow-2xl">

                {/* Brand / Logo - Routes to Home */}
                <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-4 group cursor-pointer">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="text-[#cda47b] group-hover:scale-110 transition-transform duration-300">
                        <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" fill="currentColor" />
                    </svg>
                    <span className="font-serif text-sm tracking-[0.2em] uppercase text-zinc-200 group-hover:text-white transition-colors duration-300">
                        Dreamframe
                    </span>
                </Link>

                {/* Divider */}
                <div className="w-[1px] h-4 bg-zinc-700"></div>

                {/* Custom Hamburger Button / Toggle */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="flex flex-col gap-[5px] justify-center w-6 h-6 group cursor-pointer focus:outline-none"
                    aria-label="Toggle Navigation Menu"
                >
                    <span className={`w-5 h-[1.5px] bg-zinc-400 group-hover:bg-[#cda47b] transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-[3.5px]' : ''}`}></span>
                    <span className={`w-3.5 h-[1.5px] bg-zinc-400 group-hover:bg-[#cda47b] group-hover:w-5 transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-[3px] !w-5' : ''}`}></span>
                </button>

                {/* Dropdown Menu Popup */}
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute top-full left-0 mt-3 w-56 bg-[#0a0a0a]/95 backdrop-blur-2xl border border-zinc-800 rounded-2xl p-2 shadow-2xl flex flex-col gap-1 overflow-hidden"
                        >
                            <div className="px-3 py-2 text-[10px] font-mono uppercase tracking-widest text-zinc-500 border-b border-zinc-800/60 mb-1">
                                Navigation
                            </div>

                            {menuItems.map((item, index) => (
                                <Link
                                    key={index}
                                    to={item.path}
                                    onClick={() => setIsOpen(false)}
                                    className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-xs tracking-wider text-zinc-300 hover:text-white hover:bg-white/5 transition-all group"
                                >
                                    <span className="text-[#cda47b] group-hover:scale-110 transition-transform">
                                        {item.icon}
                                    </span>
                                    <span className="font-medium">{item.name}</span>
                                </Link>
                            ))}
                        </motion.div>
                    )}
                </AnimatePresence>

            </div>
        </motion.div>
    );
}