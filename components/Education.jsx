"use client";
import React, { useState } from "react";

const educationData = [
	{
		school: "Seattle University",
		degree: "Master of Science, Computer Science",
		date: "Dec 2026",
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
		gpa: "9.02/10",
		coursework: [
			"Computer Architecture and Operating System",
			"Data Structure and Algorithm",
			"Object Oriented Programming",
			"Structured Programming",
			"Control System Engineering",
		],
	},
];

// Education section component for portfolio
export default function Education() {
	const [activeIdx, setActiveIdx] = useState(null);

	return (
		<section className="py-16 px-4 bg-gray-900 text-white flex flex-col items-center">
			<h2 className="text-3xl font-bold mb-8 text-center">Education</h2>
			<div className="w-full max-w-2xl">
				{educationData.map((edu, idx) => (
					<div
						key={edu.school + edu.degree}
						className="mb-8 p-6 rounded-xl bg-gray-800 shadow-lg cursor-pointer transition-transform duration-200 hover:scale-105 hover:shadow-2xl"
						onClick={() => setActiveIdx(idx)}
					>
						<h3 className="text-xl font-semibold text-blue-400 mb-2">
							{edu.school}
						</h3>
						<div className="text-gray-300 mb-1">
							{edu.degree}{" "}
							<span className="ml-2 text-sm text-gray-400">{edu.date}</span>
						</div>
						<div className="text-gray-400 mb-2">GPA: {edu.gpa}</div>
						<div className="mb-2">
							<span className="font-semibold text-gray-200">Coursework:</span>
							<div className="flex flex-wrap gap-2 mt-1">
								{edu.coursework.map((course) => (
									<span
										key={course}
										className="px-2 py-1 rounded bg-gray-700 text-xs"
									>
										{course}
									</span>
								))}
							</div>
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
						className="relative p-8 rounded-2xl bg-gray-900 border-4 border-blue-400 shadow-2xl scale-105 animate-popUp"
						style={{ minWidth: 340, maxWidth: 520 }}
						onClick={(e) => e.stopPropagation()}
					>
						<button
							className="absolute top-3 right-3 text-gray-400 hover:text-white text-xl font-bold"
							onClick={() => setActiveIdx(null)}
							aria-label="Close"
						>
							×
						</button>
						<h3 className="text-2xl font-bold text-blue-400 mb-2">
							{educationData[activeIdx].school}
						</h3>
						<div className="text-gray-300 mb-2">
							{educationData[activeIdx].degree}{" "}
							<span className="ml-2 text-sm text-gray-400">
								{educationData[activeIdx].date}
							</span>
						</div>
						<div className="text-gray-400 mb-2">
							GPA: {educationData[activeIdx].gpa}
						</div>
						<span className="font-semibold text-gray-200">Coursework:</span>
						<div className="flex flex-wrap gap-2 mt-2 mb-2">
							{educationData[activeIdx].coursework.map((course) => (
								<span
									key={course}
									className="px-2 py-1 rounded bg-gray-700 text-xs"
								>
									{course}
								</span>
							))}
						</div>
					</div>
				</div>
			)}
		</section>
	);
}
