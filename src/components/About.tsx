"use client";
import { useFadeInOnScroll } from "./animationUtils";
import React from "react";

export default function About() {
    const fadeRef = useFadeInOnScroll();
    return (
        <section
            id="about"
            ref={fadeRef}
            data-animate
            className="py-16 px-4 flex flex-col items-center bg-gray-900 text-white"
        >
            <h2 className="text-3xl font-bold mb-2 text-center">About Me</h2>
            <div className="w-24 h-1 bg-purple-500 rounded mb-6"></div>
            <p className="max-w-3xl text-lg text-gray-300 mb-6 text-center">
                Motivated Software Engineer with hands-on experience in full-stack development and automation. Currently pursuing a master's in computer science, with practical skills in JavaScript, HTML, CSS, Python, and TypeScript. Demonstrated ability to enhance system efficiency and deliver scalable solutions, and eager to apply expertise to innovative eCommerce projects.
            </p>
            <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-6">
                <div className="flex items-center gap-2">
                    <span className="text-blue-400">✉️</span>
                    <a href="mailto:atambe@seattleu.edu" className="text-blue-400 hover:underline">atambe@seattleu.edu</a>
                </div>
                <div className="flex items-center gap-2">
                    <span className="text-blue-400">📍</span>
                    <span>Lynnwood, WA</span>
                </div>
            </div>
            <div className="flex gap-4 justify-center mb-6">
                <a href="https://www.linkedin.com/in/anjalisambhajitambe" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-blue-600 text-white font-semibold hover:bg-blue-700 transition-colors">LinkedIn</a>
                <a href="https://github.com/AnjuTambe" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-full bg-gray-800 text-white font-semibold hover:bg-gray-700 transition-colors">GitHub</a>
            </div>
            {/* <div className="text-gray-400 text-sm text-center">1212 141st Place SW, Lynnwood, WA 98087</div> */}
        </section>
    );
}
