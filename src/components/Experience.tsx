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
        company: "Babyscripts",
        role: "Software Developer Intern",
        date: "Jun 2026 - Present",
        details: [
            "Contributing to Babyscripts’ large-scale PostgreSQL database migration, ensuring existing customer data integrity is preserved while improving query performance and reducing latency across the platform.",
            "Developing and fixing backend features using TypeScript and Elasticsearch, including resolving critical filter query issues in the patient management dashboard that were impacting care team workflows.",
            "Designing and implementing GraphQL API changes and database schema updates to support new product features, including adding new fields across customer group and department management workflows."
        ],
    },
    {
        company: "Connex AI",
        role: "Jr. Software Development Engineer Intern",
        date: "Sep 2025 - Jan 2026",
        details: [
            "Designed and built backend services in Java and Spring Boot with a focus on modularity and reliability, serving web and mobile clients across multiple product modules.",
            "Implemented RESTful APIs within a microservices architecture, improving scalability and maintainability across three product modules.",
            "Maintained CI/CD pipelines with GitHub Actions and Docker, writing unit tests and working with MySQL and DynamoDB to ensure data integrity across releases."
        ],
    },
    {
        company: "MindHome Inc.",
        role: "Web Development & AI Engineer Intern",
        date: "Jun 2025 - Sep 2025",
        details: [
            "Built AI-driven smart-home features with a cross-functional team using JavaScript, TypeScript, React, and Node.js.",
            "Engineered prompt-based automation to dynamically generate smart-home videos, improving user-engagement workflows across three client accounts.",
            "Developed REST APIs and frontend features (Builder.io), improving UI/UX responsiveness by 15% across mobile and desktop surfaces."
        ],
    },
    {
        company: "Prasaditi Medical Equipment",
        role: "Software Automation Engineer Intern",
        date: "Jan 2022 - Mar 2022",
        details: [
            "Engineered software applications in Python and C to improve system precision and functionality.",
            "Gained hands-on embedded-systems experience, achieving a 10% improvement in testing efficiency.",
            "Optimized API integrations through effective integration work, reducing testing time by 15%."
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
