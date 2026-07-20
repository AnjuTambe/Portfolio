"use client";
import React from "react";

interface SkillCategory {
    category: string;
    items: string[];
}

const skillCategories: SkillCategory[] = [
    {
        category: "AI / ML & Data",
        items: ["LLM Integration", "Prompt Engineering", "NLP", "Multi-Agent Systems", "Scikit-Learn", "TensorFlow", "Streamlit"]
    },
    {
        category: "Languages",
        items: ["Python", "TypeScript", "JavaScript", "Java", "SQL", "C++"]
    },
    {
        category: "Backend & APIs",
        items: ["FastAPI", "Node.js", "Express.js", "Spring Boot", "RESTful APIs", "GraphQL", "Microservices"]
    },
    {
        category: "Frontend",
        items: ["React", "Next.js", "HTML", "CSS", "Tailwind CSS", "Builder.io"]
    },
    {
        category: "Databases & Storage",
        items: ["MongoDB", "PostgreSQL", "MySQL", "NoSQL", "DynamoDB"]
    },
    {
        category: "Cloud & DevOps",
        items: ["AWS (EC2, S3, RDS, IAM, CloudWatch)", "Docker", "Kubernetes", "CI/CD", "GitHub Actions"]
    },
    {
        category: "Tools & Platforms",
        items: ["Git", "Postman", "Jest", "Figma", "Agile/Scrum", "System Design"]
    }
];

export default function Skills() {
    return (
        <section id="skills" className="pl-4 md:pl-12 py-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-6 text-white hover:text-gray-300 transition-colors cursor-pointer">
                Tech Stack & Tools
            </h2>
            <div className="flex flex-col gap-6 mr-4 md:mr-12">
                {skillCategories.map((cat, idx) => (
                    <div key={idx} className="flex flex-col md:flex-row md:items-center gap-2 md:gap-6 pb-4 border-b border-gray-900 last:border-b-0">
                        <h3 className="text-gray-400 font-bold text-sm min-w-[180px] uppercase tracking-wider">{cat.category}</h3>
                        <div className="flex flex-wrap gap-2">
                            {cat.items.map((skill, index) => (
                                <span
                                    key={index}
                                    className="bg-[#1c1c1c] text-gray-300 px-3 py-1.5 rounded text-xs font-semibold hover:bg-white hover:text-black hover:scale-105 transition-all cursor-default border border-gray-800 hover:border-white"
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
