"use client";
import React from "react";

const skills = [
    "Python", "Java", "C#", "SQL", "JavaScript", "TypeScript",
    "React", "Next.js", "Node.js", "FastAPI", "Flask", "Tailwind CSS",
    "AWS", "Azure", "Docker", "Git", "PostgreSQL", "MongoDB",
    "Prompt Engineering", "NLP", "Machine Learning"
];

export default function Skills() {
    return (
        <section id="skills" className="pl-4 md:pl-12 py-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white hover:text-gray-300 transition-colors cursor-pointer">
                Tech Stack & Tools
            </h2>
            <div className="group relative">
                <div className="flex gap-4 overflow-x-scroll no-scrollbar pb-8 px-2">
                    {skills.map((skill, index) => (
                        <div
                            key={index}
                            className="flex-none bg-[#333] text-gray-200 px-6 py-3 rounded text-sm font-semibold whitespace-nowrap hover:bg-white hover:text-black hover:scale-105 transition-all cursor-default border border-transparent hover:border-white"
                        >
                            {skill}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
