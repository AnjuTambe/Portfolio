"use client";
import React, { useState } from "react";

interface ExperienceItem {
    company: string;
    role: string;
    date: string;
    details: string[];
}

const experiences: ExperienceItem[] = [
    {
        company: "Connex AI",
        role: "Jr. Software Developer Engineer Intern",
        date: "Sep 2025 - Present",
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
        details: [
            "Engineered software applications using Python and C to enhance system precision and functionality.",
            "Acquired hands-on experience with embedded systems, achieving a 10% improvement in testing efficiency.",
            "Optimized software integrations through effective API integrations, resulting in a 15% reduction in testing time.",
        ],
    },
];

export default function Experience() {
    const [selectedExp, setSelectedExp] = useState<ExperienceItem | null>(null);

    return (
        <section id="experience" className="pl-4 md:pl-12 py-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white hover:text-gray-300 transition-colors cursor-pointer">
                Professional Experience
            </h2>

            <div className="group relative">
                <div className="flex gap-2 overflow-x-scroll no-scrollbar pb-8 scroll-smooth">
                    {experiences.map((exp, idx) => (
                        <div
                            key={idx}
                            className="flex-none w-[250px] md:w-[300px] aspect-video bg-[#181818] rounded-md relative cursor-pointer hover:scale-105 transition-transform duration-300 ease-out hover:z-50 group-hover:opacity-100 border border-gray-800 hover:border-white"
                            onClick={() => setSelectedExp(exp)}
                        >
                            <div className="w-full h-full p-6 flex flex-col justify-center items-center text-center bg-gradient-to-t from-black/90 to-transparent">
                                <h3 className="text-white font-bold text-xl mb-2">{exp.company}</h3>
                                <p className="text-gray-400 text-xs">{exp.date}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Detail View */}
            {selectedExp && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={() => setSelectedExp(null)}>
                    <div className="bg-[#141414] w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl animate-fadeInUp border border-gray-800" onClick={e => e.stopPropagation()}>
                        <div className="p-8 pb-4 border-b border-gray-800 flex justify-between items-start">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">{selectedExp.company}</h2>
                                <p className="text-lg text-gray-300 font-medium">{selectedExp.role}</p>
                                <p className="text-sm text-gray-500 mt-1">{selectedExp.date}</p>
                            </div>
                            <button className="text-gray-400 hover:text-white" onClick={() => setSelectedExp(null)}>✕</button>
                        </div>

                        <div className="p-8">
                            <ul className="list-disc pl-5 space-y-3 text-gray-300">
                                {selectedExp.details.map((detail, i) => (
                                    <li key={i} className="leading-relaxed">{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
