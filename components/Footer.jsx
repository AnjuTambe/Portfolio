// Footer component for portfolio
"use client";
import React from "react";

export default function Footer() {
  // Scroll to top handler
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="w-full bg-gray-950 text-gray-300 py-6 flex flex-col items-center mt-12 border-t border-gray-800 relative">
      <div className="flex gap-4 mb-2">
        <a href="https://github.com/AnjuTambe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">GitHub</a>
        <a href="https://www.linkedin.com/in/anjalisambhajitambe" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">LinkedIn</a>
        <a href="mailto:atambe@seattleu.edu" className="hover:text-blue-400 transition-colors">Email</a>
      </div>
      <div className="flex items-center gap-2 mb-2 text-sm">
        <span>© {new Date().getFullYear()} Anjali Sambhaji Tambe. All rights reserved.</span>
        <span className="mx-2 hidden sm:inline">|</span>
        <span className="flex items-center gap-1 hidden sm:flex">
          Made with <span className="text-blue-400 font-bold">Next.js</span>
        </span>
      </div>
      {/* Scroll to top button */}
      <button
        onClick={scrollToTop}
        aria-label="Scroll to top"
        className="fixed bottom-8 right-8 z-50 bg-blue-600 hover:bg-blue-700 text-white rounded-full p-3 shadow-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7" />
        </svg>
      </button>
    </footer>
  );
}
