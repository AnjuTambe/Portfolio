"use client";
import React, { useState } from "react";

interface EducationItem {
    school: string;
    degree: string;
    date: string;
    gpa: string;
    coursework: string[];
}

const educationData: EducationItem[] = [
    {
        school: "Seattle University",
        degree: "Master of Science, Computer Science",
        date: "Jan 2025 - Dec 2026",
        gpa: "3.6/4.00",
        coursework: [
            "Software Architecture and Design",
            "Artificial Intelligence",
            "Fundamental of Software Engineering",
            "Distributed System",
            "Machine Learning",
            "Mobile Development",
            "Cloud Computing",
            "Software Testing and Debugging",
        ],
    },
    {
        school: "Seattle University",
        degree: "Graduate Certificate, Computer Science",
        date: "Sep 2023 - Mar 2025",
        gpa: "3.6/4.00",
        coursework: [
            "Database Management Concepts",
            "Computer System Principles",
            "Object Oriented Concepts",
            "Algorithms",
            "Data Structure and Algorithm",
        ],
    },
    {
        school: "DKTE Society's Textile & Engineering Institute",
        degree: "Bachelor of Technology, Electronics Engineering",
        date: "Aug 2017 - Jul 2021",
        gpa: "CGPA: 9.02/10",
        coursework: [
            "Computer Architecture and Operating System",
            "Data Structure and Algorithm",
            "Object Oriented Programming",
            "Structured Programming",
            "Control System Engineering",
        ],
    },
];

export default function Education() {
    const [selectedEdu, setSelectedEdu] = useState<EducationItem | null>(null);

    return (
        <section id="education" className="pl-4 md:pl-12 py-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white hover:text-gray-300 transition-colors cursor-pointer">
                Academic Background
            </h2>
            <div className="group relative">
                <div className="flex gap-2 overflow-x-scroll no-scrollbar pb-8 scroll-smooth">
                    {educationData.map((edu, idx) => (
                        <div
                            key={idx}
                            className="flex-none w-[280px] md:w-[320px] aspect-[16/9] bg-[#181818] rounded-md relative cursor-pointer hover:scale-105 transition-transform duration-300 ease-out hover:z-50 group-hover:opacity-100 border border-gray-800 hover:border-white"
                            onClick={() => setSelectedEdu(edu)}
                        >
                            <div className="w-full h-full p-6 flex flex-col justify-between items-start bg-gradient-to-tr from-black to-[#1a1a1a]">
                                <div>
                                    <h3 className="text-white font-bold text-lg leading-tight mb-2">{edu.school.split(' ').slice(0, 2).join(' ')}...</h3>
                                    <p className="text-gray-400 text-xs md:text-sm">{edu.degree.split(',')[0]}</p>
                                </div>
                                <p className="text-[#e50914] text-xs font-bold uppercase tracking-wide">Education</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Detail View */}
            {selectedEdu && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={() => setSelectedEdu(null)}>
                    <div className="bg-[#141414] w-full max-w-2xl rounded-lg overflow-hidden shadow-2xl animate-fadeInUp border border-gray-800" onClick={e => e.stopPropagation()}>
                        <div className="p-8 pb-4 border-b border-gray-800 flex justify-between items-start">
                            <div>
                                <h2 className="text-3xl font-bold text-white mb-2">{selectedEdu.school}</h2>
                                <p className="text-lg text-gray-300 font-medium">{selectedEdu.degree}</p>
                                <div className="flex gap-4 mt-2 text-sm text-gray-500">
                                    <span>{selectedEdu.date}</span>
                                    <span>GPA: {selectedEdu.gpa}</span>
                                </div>
                            </div>
                            <button className="text-gray-400 hover:text-white" onClick={() => setSelectedEdu(null)}>✕</button>
                        </div>

                        <div className="p-8">
                            <h4 className="text-white font-semibold mb-3">Coursework</h4>
                            <div className="flex flex-wrap gap-2">
                                {selectedEdu.coursework.map((course) => (
                                    <span key={course} className="px-3 py-1 bg-gray-800 text-gray-300 text-xs rounded-full border border-gray-700">
                                        {course}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
