"use client";
import React, { useState, useRef, useEffect } from "react";
import { useFadeInOnScroll } from "./animationUtils";

interface SkillItem {
    name: string;
    level: number;
}

interface SkillCategory {
    icon: string;
    title: string;
    color: string;
    skills: SkillItem[];
}

// Grouped skills data by category
const skillCategories: SkillCategory[] = [
    {
        icon: "💻",
        title: "Programming Languages",
        color: "blue-500",
        skills: [
            { name: "Java", level: 95 },
            { name: "Python", level: 95 },
            { name: "TypeScript", level: 90 },
            { name: "JavaScript", level: 90 },
            { name: "C++", level: 85 },
            { name: "C#", level: 80 },
            { name: "C", level: 80 },
            { name: "Kotlin", level: 75 },
            { name: "Go", level: 70 },
        ],
    },
    {
        icon: "🌐",
        title: "Web Development",
        color: "purple-500",
        skills: [
            { name: "React", level: 90 },
            { name: "NodeJS", level: 90 },
            { name: "Express", level: 90 },
            { name: "HTML/CSS", level: 95 },
            { name: "REST APIs", level: 90 },
            { name: "GraphQL", level: 80 },
            { name: "Redux", level: 80 },
            { name: "Tailwind CSS", level: 85 },
            { name: "Builder.io", level: 75 },
            { name: "PHP", level: 70 },
            { name: "Springboot", level: 80 },
        ],
    },
    {
        icon: "🗄️",
        title: "Database & Query",
        color: "gray-500",
        skills: [
            { name: "MySQL", level: 90 },
            { name: "MongoDB", level: 85 },
            { name: "SQL", level: 90 },
            { name: "DynamoDB", level: 80 },
        ],
    },
    {
        icon: "📊",
        title: "AI/ML Tools",
        color: "pink-500",
        skills: [
            { name: "Scikit-Learn", level: 85 },
            { name: "Prophet", level: 80 },
            { name: "TensorFlow", level: 80 },
            { name: "NLP", level: 85 },
            { name: "Prompt Engineering", level: 90 },
            { name: "Streamlit", level: 85 },
        ],
    },
    {
        icon: "🛠️",
        title: "Tools & DevOps",
        color: "blue-500",
        skills: [
            { name: "AWS (EC2, S3, RDS)", level: 85 },
            { name: "Docker", level: 85 },
            { name: "Git", level: 90 },
            { name: "GitHub Actions", level: 80 },
            { name: "CI/CD", level: 80 },
            { name: "Figma", level: 75 },
            { name: "Postman", level: 90 },
            { name: "IntelliJ/VS Code", level: 95 },
        ],
    },
];

// Skills section component for portfolio
export default function Skills() {
    // Map color string to static Tailwind class
    const colorClassMap: Record<string, string> = {
        "blue-500": "bg-blue-500 text-blue-400",
        "purple-500": "bg-purple-500 text-purple-400",
        "gray-500": "bg-yellow-400 text-yellow-400",
        "pink-500": "bg-pink-500 text-pink-400",
        "green-500": "bg-green-500 text-green-400",
    };

    const [activeIdx, setActiveIdx] = useState<number | null>(null);
    const fadeRef = useFadeInOnScroll();

    // Animate skill bars when in view
    const skillBarRefs = useRef<(HTMLDivElement | null)[]>([]);
    useEffect(() => {
        const handleScroll = () => {
            skillBarRefs.current.forEach(ref => {
                if (ref) {
                    const rect = ref.getBoundingClientRect();
                    if (rect.top < window.innerHeight - 60) {
                        ref.classList.add("animate-fadeInUp");
                    }
                }
            });
        };
        window.addEventListener("scroll", handleScroll);
        handleScroll();
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <section id="skills" ref={fadeRef} data-animate className="py-16 px-4 bg-gray-900 text-white flex flex-col items-center">
            <h2 className="text-3xl font-bold mb-8 text-center">Skills & Expertise</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
                {skillCategories.map((category, idx) => (
                    <div
                        key={category.title}
                        className="bg-gray-800 rounded-2xl shadow-lg p-8 flex flex-col mb-4 cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
                        onClick={() => setActiveIdx(idx)}
                    >
                        <div className="flex items-center mb-4">
                            <span className="text-3xl mr-3">{category.icon}</span>
                            <span className={`text-xl font-bold ${colorClassMap[category.color]?.split(' ')[1]}`}>{category.title}</span>
                        </div>
                        <div className="space-y-3">
                            {category.skills.map((skill, sidx) => (
                                <div key={skill.name} className="w-full">
                                    <div className="flex justify-between mb-1">
                                        <span className="font-semibold text-white text-sm">{skill.name}</span>
                                        <span className="text-xs text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-3">
                                        <div
                                            ref={el => { skillBarRefs.current[idx * 20 + sidx] = el; }}
                                            className={`h-3 rounded-full ${colorClassMap[category.color]?.split(' ')[0]}`}
                                            style={{ width: `${skill.level}%` }}
                                            data-animate
                                        ></div>
                                    </div>
                                </div>
                            ))}
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
                        className={`relative p-8 rounded-2xl shadow-2xl scale-105 animate-popUp bg-gray-900 border-4 ${colorClassMap[skillCategories[activeIdx].color]?.split(' ')[0]}`}
                        style={{ minWidth: 340, maxWidth: 520 }}
                        onClick={e => e.stopPropagation()}
                    >
                        <button
                            className="absolute top-3 right-3 text-gray-200 hover:text-white text-xl font-bold z-10"
                            onClick={() => setActiveIdx(null)}
                            aria-label="Close"
                        >
                            ×
                        </button>
                        <div className="flex items-center mb-4">
                            <span className="text-3xl mr-3">{skillCategories[activeIdx].icon}</span>
                            <span className={`text-2xl font-bold ${colorClassMap[skillCategories[activeIdx].color]?.split(' ')[1]}`}>{skillCategories[activeIdx].title}</span>
                        </div>
                        <div className="space-y-4">
                            {skillCategories[activeIdx].skills.map((skill, sidx) => (
                                <div key={skill.name} className="w-full">
                                    <div className="flex justify-between mb-1">
                                        <span className="font-semibold text-white text-base">{skill.name}</span>
                                        <span className="text-sm text-gray-400">{skill.level}%</span>
                                    </div>
                                    <div className="w-full bg-gray-700 rounded-full h-4">
                                        <div
                                            className={`h-4 rounded-full ${colorClassMap[skillCategories[activeIdx].color]?.split(' ')[0]}`}
                                            style={{ width: `${skill.level}%` }}
                                            data-animate
                                        ></div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
