
"use client";
// Animation utility for fade-in and slide-up
import { useEffect, useRef } from "react";

export function useFadeInOnScroll() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onScroll = () => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight - 100) {
        el.classList.add("animate-fadeInUp");
      }
    };
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return ref;
}

// Tailwind animation class (add to globals.css)
// .animate-fadeInUp {
//   opacity: 1;
//   transform: translateY(0);
//   transition: opacity 0.8s, transform 0.8s;
// }
// [data-animate] {
//   opacity: 0;
//   transform: translateY(40px);
// }
