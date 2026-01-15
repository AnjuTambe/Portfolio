"use client";
import React, { useState } from "react";

interface CertificationItem {
    title: string;
    description: string;
    details?: string | null;
}

const certifications: CertificationItem[] = [
    {
        title: "AWS Cloud Technical Essentials",
        description: "Expertise in AWS (EC2, S3, RDS, IAM) with optimized cloud solutions.",
        details: null,
    },
];

export default function Certifications() {
    const [selectedCert, setSelectedCert] = useState<CertificationItem | null>(null);

    return (
        <section id="certifications" className="pl-4 md:pl-12 py-4">
            <h2 className="text-xl md:text-2xl font-semibold mb-4 text-white hover:text-gray-300 transition-colors cursor-pointer">
                Certifications
            </h2>
            <div className="group relative">
                <div className="flex gap-2 overflow-x-scroll no-scrollbar pb-8 scroll-smooth">
                    {certifications.map((cert, idx) => (
                        <div
                            key={idx}
                            className="flex-none w-[220px] md:w-[260px] aspect-[16/9] bg-[#181818] rounded-md relative cursor-pointer hover:scale-105 transition-transform duration-300 ease-out hover:z-50 group-hover:opacity-100 border border-gray-800 hover:border-white"
                            onClick={() => setSelectedCert(cert)}
                        >
                            <div className="w-full h-full p-4 flex flex-col justify-center items-center text-center bg-gradient-to-br from-gray-900 to-black">
                                <h3 className="text-white font-bold text-base mb-2 line-clamp-2">{cert.title}</h3>
                                <p className="text-gray-500 text-xs uppercase tracking-wider">Verified</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal Detail View */}
            {selectedCert && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4" onClick={() => setSelectedCert(null)}>
                    <div className="bg-[#141414] w-full max-w-lg rounded-lg overflow-hidden shadow-2xl animate-fadeInUp border border-gray-800" onClick={e => e.stopPropagation()}>
                        <div className="p-8">
                            <h2 className="text-2xl font-bold text-white mb-4">{selectedCert.title}</h2>
                            <p className="text-gray-300 leading-relaxed mb-4">{selectedCert.description}</p>
                            {selectedCert.details && <p className="text-sm text-gray-500">{selectedCert.details}</p>}
                            <div className="mt-6 flex justify-end">
                                <button className="px-6 py-2 bg-white text-black font-bold rounded hover:bg-opacity-90" onClick={() => setSelectedCert(null)}>Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}
