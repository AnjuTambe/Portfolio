"use client";
import React, { useState, useEffect } from "react";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`w-full fixed top-0 left-0 z-50 transition-colors duration-500 ${isScrolled ? "bg-[#141414]" : "bg-gradient-to-b from-black/80 to-transparent"} px-4 md:px-12 py-4 flex items-center justify-between`}>
            <div className="text-3xl md:text-4xl font-bold text-[#E50914] cursor-pointer" onClick={() => window.scrollTo(0,0)}>
                ANJALI
            </div>
            <div className="flex gap-4 md:gap-8 text-sm md:text-base text-gray-300 font-medium">
                <a href="#about" className="hover:text-white transition-colors">About</a>
                <a href="#experience" className="hover:text-white transition-colors">Experience</a>
                <a href="#projects" className="hover:text-white transition-colors">Projects</a>
                <a href="#skills" className="hover:text-white transition-colors">Skills</a>
                <a href="#contact" className="hover:text-white transition-colors">Contact</a>
            </div>
        </nav>
    );
}
