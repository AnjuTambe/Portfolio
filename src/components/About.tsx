"use client";
import React from "react";

export default function About() {
    return (
        <section
            id="about"
            data-animate
            className="py-16 px-4 flex flex-col items-center text-white"
        >
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-center text-gray-200">About Me</h2>
            <div className="w-24 h-1 bg-[#E50914] rounded mb-6"></div>
            <p className="max-w-3xl text-lg text-gray-400 mb-6 text-center leading-relaxed">
                Software engineer and MS Computer Science candidate at Seattle University (GPA 3.67, Dean&apos;s Honor Roll; graduating June 2026) who builds applied-AI products end to end — LLM multi-agent systems, AI-powered features, and the full-stack apps and APIs around them. Three internships shipping production code in Python, TypeScript, and Java, with hands-on LLM integration, RESTful APIs, AWS, Docker, and CI/CD; comfortable owning features from concept to deployment on small teams.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-6 text-gray-400">
                <div className="flex items-center gap-2">
                    <span className="text-[#E50914]">✉️</span>
                    <a href="mailto:atambe@seattleu.edu" className="hover:text-white transition-colors">atambe@seattleu.edu</a>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-[#E50914]">📍</span>
                    <span>Lynnwood, WA</span>
                </div>
            </div>
            <div className="flex gap-4 justify-center mb-6">
                <a href="https://www.linkedin.com/in/anjalisambhajitambe" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-sm bg-[#E50914] text-white font-bold hover:bg-[#b00710] transition-colors">LinkedIn</a>
                <a href="https://github.com/AnjuTambe" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-sm bg-[#333] text-white font-bold hover:bg-[#555] transition-colors">GitHub</a>
            </div>
        </section>
    );
}
