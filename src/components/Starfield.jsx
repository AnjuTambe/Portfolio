"use client";
import React, { useEffect, useRef } from "react";

const STAR_COUNT = 120;
const STAR_COLOR = "#3b82f6"; // Tailwind blue-500
const STAR_SIZE = 1.2;
const STAR_SPEED = 0.15;

function randomBetween(a, b) {
  return a + Math.random() * (b - a);
}

const Starfield = () => {
  const canvasRef = useRef(null);
  const stars = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let width = window.innerWidth;
    let height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Initialize stars
    stars.current = Array.from({ length: STAR_COUNT }, () => ({
      x: randomBetween(0, width),
      y: randomBetween(0, height),
      size: randomBetween(0.5, STAR_SIZE),
      blink: Math.random(),
      blinkSpeed: randomBetween(0.01, 0.03),
    }));

    function animate() {
      ctx.clearRect(0, 0, width, height);
      stars.current.forEach(star => {
        // Blinking effect
        star.blink += star.blinkSpeed;
        if (star.blink > 1 || star.blink < 0) star.blinkSpeed *= -1;
        ctx.globalAlpha = 0.5 + 0.5 * Math.sin(star.blink * Math.PI);
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.size, 0, 2 * Math.PI);
        ctx.fillStyle = STAR_COLOR;
        ctx.fill();
        ctx.globalAlpha = 1;
      });
      requestAnimationFrame(animate);
    }
    animate();

    // Resize handler
    function handleResize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = width;
      canvas.height = height;
      stars.current.forEach(star => {
        star.x = randomBetween(0, width);
        star.y = randomBetween(0, height);
      });
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none"
      style={{ background: "#0a0a0a" }}
    />
  );
};

export default Starfield;
