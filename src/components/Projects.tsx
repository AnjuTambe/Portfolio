"use client";
import React, { useState } from "react";

interface ProjectItem {
    title: string;
    color: "green" | "blue" | "yellow" | "purple";
    border: string;
    titleColor: string;
    description: string;
    tags: string[];
    code: string;
}

// Projects section component for portfolio
const projects: ProjectItem[] = [
    {
        title: "👻 Pacman AI Agent System",
        color: "yellow",
        border: "border-yellow-500",
        titleColor: "text-yellow-400",
        description:
            "Built modular Python-based AI agents for Pacman using graph search, adversarial game theory, and reinforcement learning. Optimized agent performance using heuristic functions, alpha-beta pruning, and efficient state-space exploration.",
        tags: ["Python", "AI", "Reinforcement Learning"],
        code: "https://github.com/AnjuTambe/Pacman_Project",
    },
    {
        title: "🎓 Campus Connect (.NET/Blazor)",
        color: "blue",
        border: "border-blue-500",
        titleColor: "text-blue-400",
        description:
            "Building a .NET-based networking platform to connect students with employers, inspired by Handshake. Integrated Blazor for real-time job tracking and implemented role-based access control. Designed features like employer reviews, skill endorsements, and secure messaging.",
        tags: [".NET", "Blazor", "Role-based Access"],
        code: "https://github.com/AnjuTambe/CampusConnect",
    },
    {
        title: "📈 Earnings Call Sentiment Analyzer",
        color: "green",
        border: "border-green-500",
        titleColor: "text-green-400",
        description:
            "Developed an AI-powered sentiment analyzer using Streamlit, Python, and NLP to extract insights from NVIDIA's quarterly earnings calls. Implemented sentiment and keyword trend analysis across multiple transcripts and visualized the results using interactive dashboards.",
        tags: ["Streamlit", "Python", "NLP"],
        code: "https://github.com/AnjuTambe/SentimentAnalyzer",
    },
    {
        title: "🤖 LLM Multi-Agent Copilot System",
        color: "purple",
        border: "border-purple-500",
        titleColor: "text-purple-400",
        description:
            "Developed an end-to-end AI assistant using FastAPI backend and HTML/JS frontend to coordinate multi-agent workflows for search, calendar, checklist, and email tasks. Implemented Planner, Calendar, Checklist, Search, Memory, and Email agents with Google Calendar integration.",
        tags: ["FastAPI", "JavaScript", "Google Calendar"],
        code: "https://github.com/AnjuTambe/LLM-Multi-Agent-Copilot-System",
    },
];

export default function Projects() {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    // Map color to static Tailwind classes
    const colorClassMap = {
        green: {
            bg: "bg-green-600",
            hover: "hover:bg-green-700",
            text: "text-green-600",
        },
        blue: {
            bg: "bg-blue-600",
            hover: "hover:bg-blue-700",
            text: "text-blue-600",
        },
        yellow: {
            bg: "bg-yellow-400",
            hover: "hover:bg-yellow-500",
            text: "text-yellow-500",
        },
        purple: {
            bg: "bg-purple-500",
            hover: "hover:bg-purple-600",
            text: "text-purple-500",
        },
    };

    return (
        <section
            id="projects"
            className="py-16 px-4 bg-gray-900 text-white flex flex-col items-center"
        >
            <h2 className="text-3xl font-bold mb-8 text-center">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                {projects.map((proj, idx) => (
                    <div
                        key={proj.title}
                        className={`p-6 rounded-xl bg-gray-800 shadow-lg border-l-4 ${proj.border} flex flex-col justify-between cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-2xl`}
                        onClick={() => setActiveIdx(idx)}
                    >
                        <div>
                            <h3 className={`text-xl font-semibold ${proj.titleColor} mb-2`}>
                                {proj.title}
                            </h3>
                            <p className="text-gray-300 mb-2">{proj.description}</p>
                            <div className="flex flex-wrap gap-2 mb-2">
                                {proj.tags.map((tag) => (
                                    <span
                                        key={tag}
                                        className="px-2 py-1 rounded bg-gray-700 text-xs"
                                    >
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                        <a
                            href={proj.code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`mt-2 px-4 py-2 rounded-full ${colorClassMap[proj.color].bg} text-white font-semibold ${colorClassMap[proj.color].hover} transition-colors w-fit`}
                            onClick={(e) => e.stopPropagation()}
                        >
                            View Code
                        </a>
                    </div>
                ))}
            </div>
            {/* Popup Modal */}
            {activeIdx !== null && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60"
                    onClick={() => setActiveIdx(null)}
                >
                    <div
                        className={`relative p-8 rounded-2xl shadow-2xl scale-105 animate-popUp border-4 ${projects[activeIdx].border} bg-gray-900`}
                        style={{ minWidth: 340, maxWidth: 520 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-200 hover:text-white text-xl font-bold z-10"
                            onClick={() => setActiveIdx(null)}
                            aria-label="Close"
                        >
                            ×
                        </button>
                        <h3
                            className={`text-2xl font-bold ${projects[activeIdx].titleColor} mb-2`}
                        >
                            {projects[activeIdx].title}
                        </h3>
                        <p className="text-gray-100 mb-4">
                            {projects[activeIdx].description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                            {projects[activeIdx].tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="px-2 py-1 rounded bg-gray-900 bg-opacity-60 text-xs text-white border border-white/20"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a
                            href={projects[activeIdx].code}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`px-4 py-2 rounded-full bg-white ${colorClassMap[projects[activeIdx].color].text} font-semibold hover:bg-gray-200 transition-colors inline-block`}
                        >
                            View Code
                        </a>
                    </div>
                </div>
            )}
        </section>
    );
}
