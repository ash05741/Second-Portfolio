import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Sun, Moon, Menu } from 'lucide-react';

export function Navigation() {
    const [isOpen, setIsOpen] = useState(false);
    const [isDark, setIsDark] = useState(true);

    const menuItems = [
        { name: "Home", path: "/", active: true },
        { name: "About", path: "/about", active: false },
        { name: "Skills", path: "/skills", active: false },
        { name: "Projects", path: "/projects", active: false },
        { name: "Contact", path: "/contact", active: false },
    ];

    return (
        <nav className="fixed top-0 left-0 w-full z-50 pointer-events-auto border-b border-white/5 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-[2px]">
            <div className="w-full max-w-[1600px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

                {/* Brand / Logo */}
                <Link to="/" className="flex items-center gap-4 group cursor-pointer">
                    <svg width="18" height="32" viewBox="0 0 24 40" fill="none" className="text-zinc-400 group-hover:text-[#cda47b] transition-colors duration-500">
                        <path d="M12 0L13.5 16.5L24 18L13.5 19.5L12 40L10.5 19.5L0 18L10.5 16.5L12 0Z" fill="currentColor" />
                    </svg>
                    <span className="font-serif text-2xl tracking-widest text-white">
                        AS
                    </span>
                </Link>

                {/* Center Desktop Links */}
                <div className="hidden md:flex items-center gap-15">
                    {menuItems.map((item, index) => (
                        <Link
                            key={index}
                            to={item.path}
                            className="relative py-2 group flex flex-col items-center"
                        >
                            <span className={`font-sans text-sm font-bold tracking-widest transition-colors duration-300 ${item.active ? 'text-[#cda47b]' : 'text-zinc-400 group-hover:text-zinc-200'}`}>
                                {item.name}
                            </span>
                            {/* Active Indicator / Hover effect */}
                            <div className={`absolute bottom-0 h-[1px] transition-all duration-300 ${item.active ? 'w-full bg-[#cda47b]' : 'w-0 bg-zinc-500 group-hover:w-full'}`} />
                        </Link>
                    ))}
                </div>

                {/* Right Controls */}
                <div className="flex items-center gap-6">
                    {/* Theme Toggle Pill */}
                    <div className="hidden md:flex items-center p-1 rounded-full border border-zinc-800 bg-[#0a0a0a]/50 backdrop-blur-md">
                        <button
                            onClick={() => setIsDark(false)}
                            className={`p-1.5 rounded-full transition-all duration-300 ${!isDark ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                        >
                            <Sun size={14} />
                        </button>
                        <button
                            onClick={() => setIsDark(true)}
                            className={`p-1.5 rounded-full transition-all duration-300 ${isDark ? 'bg-zinc-800 text-white' : 'text-zinc-500 hover:text-zinc-300'}`}
                        >
                            <Moon size={14} />
                        </button>
                    </div>

                    {/* Hamburger */}
                    <button
                        onClick={() => setIsOpen(!isOpen)}
                        className="text-zinc-400 hover:text-white transition-colors"
                    >
                        <Menu size={24} strokeWidth={1.5} />
                    </button>
                </div>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 w-full bg-[#050505] border-b border-zinc-800/80 p-6 flex flex-col gap-4 md:hidden"
                    >
                        {menuItems.map((item, index) => (
                            <Link
                                key={index}
                                to={item.path}
                                onClick={() => setIsOpen(false)}
                                className={`font-sans text-sm tracking-widest uppercase ${item.active ? 'text-[#cda47b]' : 'text-zinc-400'}`}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}