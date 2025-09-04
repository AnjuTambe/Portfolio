"use client";
import React, { useState } from "react";

// Certifications data
const certifications = [
  {
    icon: "✅",
    title: "AWS Cloud Technical Essentials",
    color: "blue-400",
    description: "Expertise in AWS (EC2, S3, RDS, IAM) with optimized cloud solutions.",
    details: null,
  },
  {
    icon: "🎓",
    title: "Computer Science Fundamentals",
    color: "red-400",
    description: "Seattle University",
    details: "Awarded to Anjali Sambhaji Tambe\nMarch 22, 2025",
  },
  {
    icon: "📄",
    title: "Databases: Relational Databases and SQL",
    color: "green-400",
    description: "Stanford Online (edX)",
    details: "Awarded to Anjali Sambhaji Tambe\nMarch 25, 2025",
  },
];

// Certifications section component for portfolio
export default function Certifications() {
  const [activeIdx, setActiveIdx] = useState(null);

  return (
    <section className="py-16 px-4 bg-gray-900 text-white flex flex-col items-center">
      <h2 className="text-3xl font-bold mb-8 text-center">Certifications</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl">
        {certifications.map((cert, idx) => (
          <div
            key={cert.title}
            className={`flex flex-col items-center bg-gray-800 p-6 rounded-xl shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-2xl`}
            onClick={() => setActiveIdx(idx)}
          >
            <div className="text-4xl mb-2">{cert.icon}</div>
            <div className={`font-semibold mb-1 text-${cert.color}`}>{cert.title}</div>
            <div className="text-gray-300 text-sm mb-1">{cert.description}</div>
            {cert.details && <div className="text-gray-400 text-xs text-center whitespace-pre-line">{cert.details}</div>}
          </div>
        ))}
      </div>
      {/* Popup Modal */}
      {activeIdx !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={() => setActiveIdx(null)}>
          <div
            className={`relative p-8 rounded-2xl bg-gray-900 border-4 border-${certifications[activeIdx].color} shadow-2xl scale-105 animate-popUp flex flex-col items-center`}
            style={{ minWidth: 320, maxWidth: 400 }}
            onClick={e => e.stopPropagation()}
          >
            <button
              className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold"
              onClick={() => setActiveIdx(null)}
              aria-label="Close"
            >×</button>
            <div className="text-5xl mb-4">{certifications[activeIdx].icon}</div>
            <div className={`font-bold text-2xl mb-2 text-${certifications[activeIdx].color}`}>{certifications[activeIdx].title}</div>
            <div className="text-gray-300 text-base mb-2">{certifications[activeIdx].description}</div>
            {certifications[activeIdx].details && <div className="text-gray-400 text-xs text-center whitespace-pre-line">{certifications[activeIdx].details}</div>}
          </div>
        </div>
      )}
    </section>
  );
}
