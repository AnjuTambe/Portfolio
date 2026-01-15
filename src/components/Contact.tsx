"use client";
import React from "react";

export default function Contact() {
    return (
        <section id="contact" className="py-16 px-4 flex flex-col items-center">
            <h2 className="text-xl md:text-2xl font-semibold mb-8 text-white hover:text-gray-300 transition-colors cursor-pointer text-center">
                Get In Touch
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-4xl">
                {/* Contact Info */}
                <div className="bg-[#181818] p-8 rounded-md shadow-lg flex flex-col justify-center border border-gray-800">
                    <h3 className="text-2xl font-bold text-white mb-4">Let&apos;s Connect</h3>
                    <p className="text-gray-400 mb-8 leading-relaxed">
                        I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                    </p>
                    <div className="flex flex-col gap-6">
                        <div className="flex items-center gap-4 group cursor-pointer">
                            <span className="bg-[#333] p-3 rounded-md group-hover:bg-[#E50914] transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25H4.5a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5H4.5a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-.659 1.591l-7.5 7.5a2.25 2.25 0 01-3.182 0l-7.5-7.5A2.25 2.25 0 012.25 6.993V6.75" />
                                </svg>
                            </span>
                            <div>
                                <div className="font-bold text-gray-200 group-hover:text-white">Email</div>
                                <a href="mailto:atambe@seattleu.edu" className="text-gray-400 text-sm hover:underline">atambe@seattleu.edu</a>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <span className="bg-[#333] p-3 rounded-md group-hover:bg-[#E50914] transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75v10.5a2.25 2.25 0 002.25 2.25h15a2.25 2.25 0 002.25-2.25V6.75m-19.5 0A2.25 2.25 0 014.5 4.5h15a2.25 2.25 0 012.25 2.25m-19.5 0v.243a2.25 2.25 0 00.659 1.591l7.5 7.5a2.25 2.25 0 003.182 0l7.5-7.5A2.25 2.25 0 0021.75 6.993V6.75" />
                                </svg>
                            </span>
                            <div>
                                <div className="font-bold text-gray-200 group-hover:text-white">Phone</div>
                                <div className="text-gray-400 text-sm">+1-206-538-4255</div>
                            </div>
                        </div>

                        <div className="flex items-center gap-4 group cursor-pointer">
                            <span className="bg-[#333] p-3 rounded-md group-hover:bg-[#E50914] transition-colors duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="w-6 h-6 text-white">
                                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-7 19c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6zm0-10c-2.211 0-4 1.789-4 4s1.789 4 4 4 4-1.789 4-4-1.789-4-4-4zm7.5 10c-.828 0-1.5-.672-1.5-1.5s.672-1.5 1.5-1.5 1.5.672 1.5 1.5-.672 1.5-1.5 1.5z" />
                                </svg>
                            </span>
                            <div>
                                <div className="font-bold text-gray-200 group-hover:text-white">LinkedIn</div>
                                <a href="https://linkedin.com/in/anjalisambhajitambe" target="_blank" className="text-gray-400 text-sm hover:underline">@anjalisambhajitambe</a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="bg-[#181818] p-8 rounded-md shadow-lg border border-gray-800">
                    <h3 className="text-2xl font-bold text-white mb-6">Send a Message</h3>
                    <form className="flex flex-col gap-4">
                        <input
                            type="text"
                            placeholder="Your Name"
                            className="bg-[#333] text-white px-4 py-3 rounded-sm border-b-2 border-transparent focus:border-[#E50914] focus:outline-none transition-colors placeholder-gray-500"
                        />
                        <input
                            type="email"
                            placeholder="Your Email"
                            className="bg-[#333] text-white px-4 py-3 rounded-sm border-b-2 border-transparent focus:border-[#E50914] focus:outline-none transition-colors placeholder-gray-500"
                        />
                        <input
                            type="text"
                            placeholder="Subject"
                            className="bg-[#333] text-white px-4 py-3 rounded-sm border-b-2 border-transparent focus:border-[#E50914] focus:outline-none transition-colors placeholder-gray-500"
                        />
                        <textarea
                            placeholder="Your Message"
                            rows={4}
                            className="bg-[#333] text-white px-4 py-3 rounded-sm border-b-2 border-transparent focus:border-[#E50914] focus:outline-none transition-colors placeholder-gray-500 resize-none"
                        />
                        <button
                            type="submit"
                            className="mt-2 px-6 py-3 rounded-sm bg-[#E50914] text-white font-bold hover:bg-[#b00710] transition-all duration-300 shadow-md transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
