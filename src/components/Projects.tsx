"use client";
import React, { useState } from "react";

interface ProjectItem {
    title: string;
    description: string;
    bullets?: string[];
    tags: string[];
    code: string;
    demo?: string;
    date?: string;
    image?: string;
}

const projects: ProjectItem[] = [
    {
        title: "LLM Multi-Agent Copilot System",
        description: "End-to-end AI assistant coordinating multi-agent workflows for search, calendar, checklist, and email tasks.",
        date: "Jun 2025 - Aug 2025",
        bullets: [
            "Built an end-to-end AI assistant with a FastAPI backend and HTML/JS frontend coordinating multi-agent workflows for search, calendar, checklist, and email tasks.",
            "Implemented Planner, Calendar, Checklist, Search, Memory, and Email agents with Google Calendar and SendGrid integration, supporting agent chaining and memory recall.",
            "Designed a modular architecture with real-time task execution, agent response logging, and extensible agent APIs for future enhancements (vector search/Pinecone, Next.js frontend)."
        ],
        tags: ["FastAPI", "JS", "GenAI", "Multi-Agent"],
        code: "https://github.com/AnjuTambe/LLM-Multi-Agent-Copilot-System",
    },
    {
        title: "CineVault Movie Platform",
        description: "Full-stack movie tracking platform featuring secure admin dashboard, MongoDB audit-logging, Stripe integration, and conversational AI chatbot.",
        date: "Jan 2026 - Apr 2026",
        bullets: [
            "Architected a secure admin dashboard with role-based access control (Next.js server actions, getUserRole) and a chronological MongoDB audit-logging system tracking moderation actions for accountability.",
            "Built subscription-override APIs using the Supabase service-role client to bypass Row-Level Security for manual Premium grants, integrating Stripe for payment and customer-support workflows.",
            "Developed the watchlist backend and content-moderation/account-suspension flows in MongoDB, collaborated on a conversational AI chatbot for personalized recommendations, and wrote Jest tests passing across 20 suites."
        ],
        tags: ["Next.js", "MongoDB", "Supabase", "Stripe", "Jest"],
        code: "https://github.com/AnjuTambe/CineVault",
        demo: "https://cpsc-5240-sq-2026-team05.vercel.app/",
    },
    {
        title: "Pacman AI Agent System",
        description: "Modular Python AI agents using graph search, adversarial game theory, and reinforcement learning.",
        date: "Sep 2025 - Dec 2025",
        bullets: [
            "Built modular Python AI agents using graph search (BFS/DFS/A*), adversarial game theory (minimax), and reinforcement learning; reduced average path length by 34% across 8 maze configurations.",
            "Optimized agent performance with heuristic functions, alpha-beta pruning, and efficient state-space exploration.",
            "Engineered reusable agent abstractions following clean-code principles, enabling correct operation across multiple layouts, stochastic ghost behaviors, and varying reward structures."
        ],
        tags: ["Python", "AI", "Reinforcement Learning"],
        code: "https://github.com/AnjuTambe/Pacman_Project",
    },
];

export default function Projects() {
    const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

    return (
        <section id="projects" className="pl-4 md:pl-12 py-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white hover:text-gray-300 transition-colors cursor-pointer">
                Trending Projects
            </h2>

            <div className="group relative">
                <div className="flex gap-2 overflow-x-scroll no-scrollbar pb-8 scroll-smooth">
                    {projects.map((proj, idx) => (
                        <div
                            key={idx}
                            className="flex-none w-[250px] md:w-[300px] aspect-video bg-gray-800 rounded-md relative cursor-pointer hover:scale-105 transition-transform duration-300 ease-out hover:z-50 group-hover:opacity-100"
                            onClick={() => setSelectedProject(proj)}
                        >
                            {/* Card Content (Simulating a thumbnail) */}
                            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 rounded-md p-4 flex flex-col justify-end">
                                <h3 className="text-white font-bold text-lg drop-shadow-md">{proj.title}</h3>
                                <div className="text-[10px] text-gray-400 flex gap-2 mt-1">
                                    {proj.tags.slice(0, 3).map(t => <span key={t}>{t}</span>)}
                                </div>
                                <div className="flex gap-3 mt-2 z-20">
                                    {proj.demo && (
                                        <a
                                            href={proj.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-xs font-bold text-white hover:underline flex items-center gap-1"
                                            onClick={(e) => e.stopPropagation()}
                                        >
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg> Live Demo
                                        </a>
                                    )}
                                    <a
                                        href={proj.code}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-xs font-bold text-gray-300 hover:text-white flex items-center gap-1"
                                        onClick={(e) => e.stopPropagation()}
                                    >
                                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> View Code
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Detail View */}
            {selectedProject && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={() => setSelectedProject(null)}>
                    <div className="bg-[#181818] w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl animate-fadeInUp" onClick={e => e.stopPropagation()}>
                        <div className="h-64 bg-gradient-to-r from-blue-900 to-purple-900 relative p-8 flex flex-col justify-end">
                            <button className="absolute top-4 right-4 text-white hover:bg-white/20 rounded-full p-2" onClick={() => setSelectedProject(null)}>✕</button>
                            <h2 className="text-4xl font-bold text-white mb-2">{selectedProject.title}</h2>
                        </div>

                        <div className="p-8 flex flex-col gap-6">
                            <div className="flex gap-4">
                                {selectedProject.demo ? (
                                    <>
                                        <a
                                            href={selectedProject.demo}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-bold hover:bg-gray-200"
                                        >
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                                <path d="M8 5v14l11-7z" />
                                            </svg>
                                            Live Demo
                                        </a>
                                        <a
                                            href={selectedProject.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-[#2a2a2a] text-white px-6 py-2 rounded font-bold hover:bg-[#3a3a3a]"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="16 18 22 12 16 6" />
                                                <polyline points="8 6 2 12 8 18" />
                                            </svg>
                                            View Code
                                        </a>
                                    </>
                                ) : (
                                    <>
                                        <a
                                            href={selectedProject.code}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-bold hover:bg-gray-200"
                                        >
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-1">
                                                <polyline points="16 18 22 12 16 6" />
                                                <polyline points="8 6 2 12 8 18" />
                                            </svg>
                                            View Code
                                        </a>
                                        <button className="flex items-center gap-2 bg-[#2a2a2a] text-white px-6 py-2 rounded font-bold hover:bg-[#3a3a3a]">
                                            + My List
                                        </button>
                                    </>
                                )}
                            </div>

                            <div className="grid grid-cols-3 gap-8 text-gray-300">
                                <div className="col-span-2 flex flex-col gap-4">
                                    <p className="text-white text-lg font-light leading-relaxed">{selectedProject.description}</p>
                                    {selectedProject.bullets && (
                                        <ul className="list-disc pl-5 space-y-2 text-gray-400 text-sm leading-relaxed">
                                            {selectedProject.bullets.map((bullet, i) => (
                                                <li key={i}>{bullet}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                                <div className="text-sm flex flex-col gap-2">
                                    {selectedProject.date && <div><span className="text-gray-500">Released:</span> <span className="text-white">{selectedProject.date}</span></div>}
                                    <div><span className="text-gray-500">Genres:</span> <span className="text-white">Tech, AI, Web</span></div>
                                    <div><span className="text-gray-500">Tags:</span> <span className="text-white">{selectedProject.tags.join(", ")}</span></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
