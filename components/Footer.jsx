// Footer component for portfolio
"use client";
import React from "react";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 text-gray-400 py-6 flex flex-col items-center mt-12 border-t border-gray-800">
      <div className="flex gap-4 mb-2">
        <a href="https://github.com/AnjuTambe" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/anjalisambhajitambe" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
        <a href="mailto:atambe@seattleu.edu" className="hover:text-white transition-colors">Email</a>
      </div>
      <div className="flex items-center gap-2 mb-2">
        <span>© {new Date().getFullYear()} Anjali Sambhaji Tambe</span>
        <span className="mx-2">|</span>
        <span className="flex items-center gap-1">
          Made with <span className="text-blue-400 font-bold">Next.js</span>
        </span>
      </div>
    </footer>
  );
}
