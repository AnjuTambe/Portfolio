import React from "react";

export default function Footer() {
    return (
        <footer className="w-full py-6 bg-black text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} Anjali Tambe. All rights reserved.</p>
        </footer>
    );
}
