import React from "react";

export default function Hero() {
    return (
        <section className="relative w-full h-screen flex flex-col justify-center px-8 md:px-16 text-white pb-32">
            {/* Background enhancement */}
            <div className="absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent z-0" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent z-0" />

            {/* Content */}
            <div className="z-10 max-w-2xl flex flex-col gap-5 mt-20">
                {/* Netflix-style metadata tag */}
                <div className="flex items-center gap-3 text-sm font-semibold text-gray-400">
                    <span>Software Engineering</span>
                </div>

                <h1 className="text-6xl md:text-8xl font-black tracking-tighter drop-shadow-lg">
                    ANJALI TAMBE
                </h1>

                <p className="text-lg md:text-xl text-shadow-md text-gray-200 line-clamp-3">
                    A full-stack developer tackling complex problems with AI, Cloud, and polished UIs.
                    Currently building scalable systems and exploring the frontiers of artificial intelligence.
                </p>

                <div className="flex flex-row gap-4 mt-4">
                    <a
                        href="#projects"
                        className="flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-white text-black font-bold rounded hover:bg-opacity-80 transition-all text-lg"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 3l14 9-14 9V3z" />
                        </svg>
                        Projects
                    </a>
                    <a
                        href="#about"
                        className="flex items-center gap-2 px-6 md:px-8 py-2 md:py-3 bg-gray-500/70 text-white font-bold rounded hover:bg-gray-500/50 transition-all text-lg backdrop-blur-sm"
                    >
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <line x1="12" y1="16" x2="12" y2="12"></line>
                            <line x1="12" y1="8" x2="12.01" y2="8"></line>
                        </svg>
                        More Info
                    </a>
                </div>
            </div>
        </section>
    );
}
