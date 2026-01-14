"use client";
import React, { useState } from "react";

interface ExperienceItem {
    company: string;
    role: string;
    date: string;
    color: string;
    border: string;
    titleColor: string;
    details: string[];
}

const experiences: ExperienceItem[] = [
    {
        company: "Connex AI",
        role: "Jr. Software Developer Engineer Intern",
        date: "Sep 2025 - Present",
        color: "green",
        border: "border-green-500",
        titleColor: "text-green-400",
        details: [
            "Developed backend services using Java and Spring Boot, ensuring reliability and modular design.",
            "Built and documented RESTful APIs for web and mobile applications improving data accessibility and integration.",
            "Contributed to microservices architecture design, enhancing modularity, maintainability, and scalability of backend systems."
        ],
    },
    {
        company: "MindHome Inc.",
        role: "Web Development and AI Engineer Intern",
        date: "Jun 2025 – Sep 2025",
        color: "purple",
        border: "border-purple-500",
        titleColor: "text-purple-400",
        details: [
            "Collaborated with cross-functional team members to design and deliver AI-driven smart home features.",
            "Built frontend features using JavaScript and CSS via Builder.io to enhance UI/UX responsiveness.",
            "Engineered prompt-based automation to dynamically generate smart home videos, improving user engagement workflows.",
        ],
    },
    {
        company: "Prasaditi Medical Equipment",
        role: "Software Automation Engineer Intern",
        date: "Jan 2022 – Mar 2022",
        color: "blue",
        border: "border-blue-500",
        titleColor: "text-blue-400",
        details: [
            "Engineered software applications using Python and C to enhance system precision and functionality.",
            "Acquired hands-on experience with embedded systems, achieving a 10% improvement in testing efficiency.",
            "Optimized software integrations through effective API integrations, resulting in a 15% reduction in testing time.",
        ],
    },
];

// Experience section component for portfolio
export default function Experience() {
    const [activeIdx, setActiveIdx] = useState<number | null>(null);

    return (
        <section
            id="experience"
            className="py-16 px-4 bg-gray-900 text-white flex flex-col items-center"
        >
            <h2 className="text-3xl font-bold mb-8 text-center">
                Professional Experience
            </h2>
            <div className="relative w-full max-w-2xl">
                {/* Timeline vertical line */}
                <div className="absolute left-6 top-0 h-full w-1 bg-gray-700 rounded-full"></div>
                {experiences.map((exp, idx) => (
                    <div
                        key={exp.company}
                        className="relative mb-12 pl-16"
                    >
                        {/* Timeline dot */}
                        <div className={`absolute left-2 top-6 w-8 h-8 rounded-full flex items-center justify-center shadow-lg ${exp.border} bg-gray-900 z-10`}>
                            <span className={`text-xl ${exp.titleColor}`}>{exp.company[0]}</span>
                        </div>
                        <div
                            className={`p-6 rounded-xl bg-gray-800 shadow-lg border-l-4 ${exp.border} cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-2xl`}
                            onClick={() => setActiveIdx(idx)}
                        >
                            <h3 className={`text-xl font-semibold ${exp.titleColor} mb-1`}>{exp.company}</h3>
                            <div className="text-gray-300 mb-1">
                                {exp.role}{" "}
                                <span className="ml-2 text-sm text-gray-400">{exp.date}</span>
                            </div>
                            <ul className="list-disc list-inside text-gray-300 mt-2 mb-2">
                                {exp.details.map((d, i) => (
                                    <li key={i}>{d}</li>
                                ))}
                            </ul>
                        </div>
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
                        className={`relative p-8 rounded-2xl bg-gray-900 border-4 ${experiences[activeIdx].border} shadow-2xl scale-105 animate-popUp`}
                        style={{ minWidth: 340, maxWidth: 420 }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold"
                            onClick={() => setActiveIdx(null)}
                            aria-label="Close"
                        >
                            ×
                        </button>
                        <h3 className={`text-2xl font-bold ${experiences[activeIdx].titleColor} mb-2`}>{experiences[activeIdx].company}</h3>
                        <div className="text-gray-300 mb-2">
                            {experiences[activeIdx].role}{" "}
                            <span className="ml-2 text-sm text-gray-400">{experiences[activeIdx].date}</span>
                        </div>
                        <ul className="list-disc list-inside text-gray-300 mb-2">
                            {experiences[activeIdx].details.map((d, i) => (
                                <li key={i}>{d}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}
        </section>
    );
}
