import { useState } from 'react';
import { Database, Server, Layout, Wrench } from 'lucide-react';

export function SkillsPage() {
    const [activeTab, setActiveTab] = useState<'frontend' | 'backend' | 'databases' | 'tools'>('frontend');

    const skillCategories = {
        frontend: [
            { name: "HTML", desc: "Semantic markup", icon: "🌐" },
            { name: "CSS", desc: "Modern styling", icon: "🎨" },
            { name: "JavaScript", desc: "Interactivity", icon: "⚡" },
            { name: "TypeScript", desc: "Type safety", icon: "📘" },
            { name: "React", desc: "Component based", icon: "⚛️" },
            { name: "Tailwind CSS", desc: "Utility first", icon: "🌊" },
            { name: "Three.js", desc: "3D Graphics", icon: "🔮" },
            { name: "React Router", desc: "Navigation", icon: "🗺️" }
        ],
        backend: [
            { name: "Node.js", desc: "JavaScript runtime", icon: "🟢" },
            { name: "Express.js", desc: "Web framework", icon: "🚂" },
            { name: "REST APIs", desc: "Endpoint design", icon: "🔌" }
        ],
        databases: [
            { name: "MongoDB", desc: "NoSQL database", icon: "🍃" },
            { name: "Firebase", desc: "Backend as a service", icon: "🔥" }
        ],
        tools: [
            { name: "Git & GitHub", desc: "Version control", icon: "🐙" },
            { name: "Postman", desc: "API testing", icon: "🚀" },
            { name: "VS Code", desc: "Code editor", icon: "💻" }
        ]
    };

    return (
        <div className="min-h-screen bg-[#050505] text-white selection:bg-[#cda47b]/30">
            <section className="w-full pt-36 pb-20 px-6 md:px-12">
                {/* Expanded max-width matching the About Me section */}
                <div className="max-w-[1200px] mx-auto flex flex-col">

                    {/* Header */}
                    <div className="flex items-center gap-4 mb-3">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-[#cda47b]">
                            <path d="M12 1L14.5 9.5L23 12L14.5 14.5L12 23L9.5 14.5L1 12L9.5 9.5L12 1Z" fill="currentColor" />
                        </svg>
                        <h2 className="text-3xl md:text-4xl font-serif text-zinc-200 tracking-widest uppercase">
                            Skills
                        </h2>
                    </div>
                    <p className="text-zinc-500 text-sm md:text-base ml-10 mb-10">
                        Tools I use to bring ideas to life.
                    </p>

                    {/* Main Container */}
                    <div className="bg-[#0a0a0a] border border-zinc-800/80 rounded-[32px] p-8 md:p-12 shadow-2xl flex flex-col gap-8">

                        {/* Category Navigation Tabs */}
                        <div className="flex flex-wrap items-center gap-2 border-b border-zinc-800/80 pb-6">
                            <button
                                onClick={() => setActiveTab('frontend')}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm tracking-wider transition-all duration-300 ${activeTab === 'frontend'
                                    ? 'bg-[#151310] border border-[#cda47b]/50 text-[#cda47b] shadow-inner'
                                    : 'bg-[#050505] border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700'
                                    }`}
                            >
                                <Layout size={16} />
                                <span>Frontend</span>
                            </button>

                            <button
                                onClick={() => setActiveTab('backend')}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm tracking-wider transition-all duration-300 ${activeTab === 'backend'
                                    ? 'bg-[#151310] border border-[#cda47b]/50 text-[#cda47b] shadow-inner'
                                    : 'bg-[#050505] border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700'
                                    }`}
                            >
                                <Server size={16} />
                                <span>Backend</span>
                            </button>

                            <button
                                onClick={() => setActiveTab('databases')}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm tracking-wider transition-all duration-300 ${activeTab === 'databases'
                                    ? 'bg-[#151310] border border-[#cda47b]/50 text-[#cda47b] shadow-inner'
                                    : 'bg-[#050505] border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700'
                                    }`}
                            >
                                <Database size={16} />
                                <span>Databases</span>
                            </button>

                            <button
                                onClick={() => setActiveTab('tools')}
                                className={`flex items-center gap-2 px-5 py-2.5 rounded-xl text-xs md:text-sm tracking-wider transition-all duration-300 ${activeTab === 'tools'
                                    ? 'bg-[#151310] border border-[#cda47b]/50 text-[#cda47b] shadow-inner'
                                    : 'bg-[#050505] border border-zinc-800/80 text-zinc-400 hover:text-white hover:border-zinc-700'
                                    }`}
                            >
                                <Wrench size={16} />
                                <span>Tools & Others</span>
                            </button>
                        </div>

                        {/* Skills Grid matching the reference layout */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            {skillCategories[activeTab].map((skill, index) => (
                                <div
                                    key={index}
                                    className="group flex flex-col items-center text-center p-6 rounded-2xl border border-zinc-800/80 bg-[#050505] hover:border-[#cda47b]/40 hover:bg-[#0d0b09] transition-all duration-300 shadow-lg relative overflow-hidden"
                                >
                                    {/* Subtle background glow effect on hover */}
                                    <div className="absolute inset-0 bg-gradient-to-b from-[#cda47b]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                                    <div className="w-12 h-12 rounded-xl bg-zinc-900 border border-zinc-800 flex items-center justify-center text-2xl mb-4 group-hover:scale-110 group-hover:border-[#cda47b]/30 transition-all duration-300 shadow-inner">
                                        {skill.icon}
                                    </div>
                                    <h4 className="font-serif text-sm font-medium text-zinc-200 group-hover:text-white tracking-wide mb-1">
                                        {skill.name}
                                    </h4>
                                    <span className="text-[11px] font-light text-zinc-500 group-hover:text-zinc-400 tracking-wider">
                                        {skill.desc}
                                    </span>
                                </div>
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}