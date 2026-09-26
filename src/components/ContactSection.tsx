import { useState } from 'react';
import { Mail, MapPin, Send } from 'lucide-react';

export function ContactSection() {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
    };

    return (
        <section className="relative w-full bg-[#050505] pointer-events-auto overflow-hidden font-sans pb-32">
            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 pt-15 mb-10">
                <div className="flex items-center gap-4 mb-2">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#cda47b]">
                        <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" fill="currentColor" />
                    </svg>
                    <h2 style={{ fontFamily: "'Cinzel', serif" }} className="text-2xl md:text-3xl text-zinc-200 tracking-widest uppercase">
                        Get In Touch
                    </h2>
                </div>
                <p style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-zinc-500 text-sm md:text-base ml-10">
                    Let's build something great together.
                </p>
            </div>

            <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">

                    {/* Left Panel: Contact Info */}
                    <div className="lg:col-span-5 bg-[#080808] border border-zinc-800/90 rounded-[24px] p-8 md:p-10 flex flex-col justify-between shadow-2xl relative overflow-hidden transition-all duration-500 hover:border-[#cda47b]/30 hover:shadow-[0_0_40px_rgba(205,164,123,0.05)]">
                        <div className="absolute inset-0 bg-[url('/Last.png')] bg-cover bg-center mix-blend-luminosity opacity-15 pointer-events-none" />

                        <div className="relative z-10 flex flex-col gap-6">
                            {/* Email - Interactive Row */}
                            <a href="mailto:asmitshukla@example.com" className="group flex items-start gap-4 pb-6 border-b border-zinc-800/80 cursor-pointer">
                                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-[#cda47b] shadow-inner transition-all duration-300 group-hover:bg-[#cda47b]/10 group-hover:border-[#cda47b]/50 group-hover:-translate-y-1">
                                    <Mail size={20} />
                                </div>
                                <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
                                    <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 group-hover:text-[#cda47b] transition-colors">Email</span>
                                    <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-base font-medium text-zinc-200 mt-0.5 group-hover:text-white transition-colors">asmitshukla@example.com</span>
                                </div>
                            </a>

                            {/* Location - Interactive Row */}
                            <div className="group flex items-start gap-4 pb-6 border-b border-zinc-800/80 cursor-pointer">
                                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-[#cda47b] shadow-inner transition-all duration-300 group-hover:bg-[#cda47b]/10 group-hover:border-[#cda47b]/50 group-hover:-translate-y-1">
                                    <MapPin size={20} />
                                </div>
                                <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
                                    <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 group-hover:text-[#cda47b] transition-colors">Location</span>
                                    <span style={{ fontFamily: "'Cormorant Garamond', serif" }} className="text-base font-medium text-zinc-200 mt-0.5 group-hover:text-white transition-colors">Shahjahanpur, India</span>
                                </div>
                            </div>

                            {/* LinkedIn - Interactive Row */}
                            <a href="#" className="group flex items-start gap-4 pb-6 border-b border-zinc-800/80 cursor-pointer">
                                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-[#cda47b] flex items-center justify-center w-[44px] h-[44px] shadow-inner transition-all duration-300 group-hover:bg-[#cda47b]/10 group-hover:border-[#cda47b]/50 group-hover:-translate-y-1">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
                                    <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 group-hover:text-[#cda47b] transition-colors">LinkedIn</span>
                                    <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-sm font-medium text-zinc-200 mt-0.5 group-hover:text-white transition-colors">/in/asmit-shukla-2a8591258/</span>
                                </div>
                            </a>

                            {/* GitHub - Interactive Row */}
                            <a href="#" className="group flex items-start gap-4 cursor-pointer">
                                <div className="p-3 rounded-xl bg-zinc-900/80 border border-zinc-800 text-[#cda47b] flex items-center justify-center w-[44px] h-[44px] shadow-inner transition-all duration-300 group-hover:bg-[#cda47b]/10 group-hover:border-[#cda47b]/50 group-hover:-translate-y-1">
                                    <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </div>
                                <div className="flex flex-col transition-transform duration-300 group-hover:translate-x-1">
                                    <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[10px] uppercase tracking-[0.25em] text-zinc-500 group-hover:text-[#cda47b] transition-colors">GitHub</span>
                                    <span style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-sm font-medium text-zinc-200 mt-0.5 group-hover:text-white transition-colors">ash05741</span>
                                </div>
                            </a>
                        </div>
                    </div>

                    {/* Right Panel: Contact Form */}
                    <div className="lg:col-span-7 bg-[#080808] border border-zinc-800/90 rounded-[24px] p-8 md:p-10 shadow-2xl relative transition-all duration-500 hover:border-[#cda47b]/30 hover:shadow-[0_0_40px_rgba(205,164,123,0.05)]">
                        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                            {/* Inputs with Focus Glow */}
                            <div className="flex flex-col gap-2 group">
                                <label style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 group-focus-within:text-[#cda47b] transition-colors">Name</label>
                                <input
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    type="text"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full bg-[#050505] border border-zinc-800 rounded-xl px-4 py-3.5 text-base text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-[#cda47b] focus:shadow-[0_0_15px_rgba(205,164,123,0.15)] transition-all shadow-inner"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2 group">
                                <label style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 group-focus-within:text-[#cda47b] transition-colors">Email</label>
                                <input
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    type="email"
                                    placeholder="you@example.com"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full bg-[#050505] border border-zinc-800 rounded-xl px-4 py-3.5 text-base text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-[#cda47b] focus:shadow-[0_0_15px_rgba(205,164,123,0.15)] transition-all shadow-inner"
                                    required
                                />
                            </div>

                            <div className="flex flex-col gap-2 group">
                                <label style={{ fontFamily: "'JetBrains Mono', monospace" }} className="text-[10px] uppercase tracking-[0.25em] text-zinc-400 group-focus-within:text-[#cda47b] transition-colors">Message</label>
                                <textarea
                                    style={{ fontFamily: "'Cormorant Garamond', serif" }}
                                    rows={4}
                                    placeholder="Your message..."
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="w-full bg-[#050505] border border-zinc-800 rounded-xl px-4 py-3.5 text-base text-zinc-200 placeholder-zinc-600 focus:outline-none focus:border-[#cda47b] focus:shadow-[0_0_15px_rgba(205,164,123,0.15)] transition-all resize-none shadow-inner"
                                    required
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 py-4 rounded-xl bg-[#12100d] border border-[#cda47b]/40 text-xs tracking-[0.2em] uppercase font-medium text-[#cda47b] hover:bg-[#cda47b] hover:text-black hover:shadow-[0_0_20px_rgba(205,164,123,0.4)] transition-all duration-300 group cursor-pointer mt-2"
                            >
                                <span style={{ fontFamily: "'Cinzel', serif" }} className="font-bold">Send Message</span>
                                <Send size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </button>

                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}