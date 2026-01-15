"use client";
import React, { useState } from "react";

interface ProjectItem {
    title: string;
    description: string;
    tags: string[];
    code: string;
    // We can use a random movie-like placeholder if no image
    image?: string;
}

const projects: ProjectItem[] = [
    {
        title: "Pacman AI Agent",
        description: "Built modular Python-based AI agents for Pacman using graph search, adversarial game theory, and RL.",
        tags: ["Python", "AI", "Reinforcement Learning"],
        code: "https://github.com/AnjuTambe/Pacman_Project",
    },
    {
        title: "Campus Connect",
        description: ".NET-based networking platform connecting students with employers. Real-time jobs & messaging.",
        tags: [".NET", "Blazor", "SQL"],
        code: "https://github.com/AnjuTambe/CampusConnect",
    },
    {
        title: "Sentiment Analyzer",
        description: "AI-powered analyzer for NVIDIA earnings calls using Streamlit and NLP.",
        tags: ["Streamlit", "Python", "NLP"],
        code: "https://github.com/AnjuTambe/SentimentAnalyzer",
    },
    {
        title: "LLM Multi-Agent Copilot",
        description: "End-to-end AI assistant with FastAPI and multi-agent workflows.",
        tags: ["FastAPI", "JS", "GenAI"],
        code: "https://github.com/AnjuTambe/LLM-Multi-Agent-Copilot-System",
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
                                <a
                                    href={proj.code}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mt-2 text-xs font-bold text-gray-300 hover:text-white flex items-center gap-1 w-fit z-20"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg> View Code
                                </a>
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
                                <a
                                    href={selectedProject.code}
                                    target="_blank"
                                    className="flex items-center gap-2 bg-white text-black px-6 py-2 rounded font-bold hover:bg-gray-200"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M5 3l14 9-14 9V3z" /></svg>
                                    View Code
                                </a>
                                <button className="flex items-center gap-2 bg-[#2a2a2a] text-white px-6 py-2 rounded font-bold hover:bg-[#3a3a3a]">
                                    + My List
                                </button>
                            </div>

                            <div className="grid grid-cols-3 gap-8 text-gray-300">
                                <div className="col-span-2">
                                    <p className="text-white text-lg font-light leading-relaxed">{selectedProject.description}</p>
                                </div>
                                <div className="text-sm flex flex-col gap-2">
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
