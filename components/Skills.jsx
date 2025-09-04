"use client";
import React, { useState, useRef, useEffect } from "react";
import { useFadeInOnScroll } from "./animationUtils";

// Grouped skills data by category
const skillCategories = [
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
      { name: "HTML/CSS", level: 90 },
      { name: "REST APIs", level: 90 },
      { name: "Spring", level: 80 },
      { name: "Flask", level: 80 },
      { name: "Bootstrap", level: 80 },
      { name: "Express", level: 80 },
      { name: "Redux", level: 75 },
      { name: "Tailwind CSS", level: 70 },
    ],
  },
  {
    icon: "🗄️",
    title: "Database & Query Management",
    color: "gray-500",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "SQL", level: 85 },
      { name: "GraphQL", level: 80 },
      { name: "SQLite", level: 80 },
      { name: "Azure SQL Database", level: 75 },
      { name: "JDBC", level: 75 },
      { name: "MYSQL", level: 85 },
      { name: "DynamoDB", level: 75 },
    ],
  },
  {
    icon: "📊",
    title: "Data Science & Visualization",
    color: "pink-500",
    skills: [
      { name: "Pandas", level: 85 },
      { name: "NumPy", level: 85 },
      { name: "Matplotlib", level: 80 },
      { name: "Seaborn", level: 80 },
      { name: "R ShinyApps", level: 75 },
      { name: "Tableau", level: 75 },
      { name: "Scikit-Learn", level: 85 },
      { name: "Prophet", level: 80 },
      { name: "TensorFlow", level: 75 },
      { name: "NLP", level: 70 },
      { name: "Prompt Engineering", level: 65 },
      { name: "Streamlit", level: 60 },
    ],
  },
  {
    icon: "🛠️",
    title: "Tools & Deployment",
    color: "blue-500",
    skills: [
      { name: "Docker", level: 80 },
      { name: "Azure Cloud", level: 80 },
      { name: "Jira", level: 80 },
      { name: "Git", level: 80 },
      { name: "Spinnaker", level: 75 },
      { name: "Maven", level: 75 },
      { name: "IntelliJ", level: 85 },
      { name: "Visual Studio Code", level: 90 },
      { name: "GitHub Actions", level: 75 },
      { name: "CI/CD", level: 70 },
      { name: "Web hosting", level: 65 },
      { name: "Cloudflare", level: 70 },
    ],
  },
  {
    icon: "🧪",
    title: "Testing & QA",
    color: "green-500",
    skills: [
      { name: "JUnit", level: 80 },
      { name: "Jest", level: 80 },
      { name: "TDD", level: 80 },
      { name: "UI Testing", level: 75 },
      { name: "Integration Testing", level: 75 },
      { name: "Mock Testing", level: 75 },
    ],
  },
]
// Skills section component for portfolio
export default function Skills() {
  // Map color string to static Tailwind class
  const colorClassMap = {
    "blue-500": "bg-blue-500 text-blue-400",
    "purple-500": "bg-purple-500 text-purple-400",
    "gray-500": "bg-yellow-400 text-yellow-400",
    "pink-500": "bg-pink-500 text-pink-400",
    "green-500": "bg-green-500 text-green-400",
  };

  const [activeIdx, setActiveIdx] = useState(null);
  const fadeRef = useFadeInOnScroll();

  // Animate skill bars when in view
  const skillBarRefs = useRef([]);
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
                      ref={el => skillBarRefs.current[idx * 20 + sidx] = el}
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
