"use client";

import { useEffect, useRef } from "react";

const MouseTrail = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      coords.current.x = e.clientX;
      coords.current.y = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const animateCircles = () => {
      let { x, y } = coords.current;

      circlesRef.current.forEach((circle, index) => {
        if (!circle) return;

        const nextCircle =
          circlesRef.current[index + 1] || circlesRef.current[0];

        circle.style.left = `${x - 12}px`;
        circle.style.top = `${y - 12}px`;
        circle.style.transform = `scale(${(circlesRef.current.length - index) / circlesRef.current.length})`;

        x += (nextCircle.offsetLeft - x) * 0.3;
        y += (nextCircle.offsetTop - y) * 0.3;
      });

      requestAnimationFrame(animateCircles);
    };

    requestAnimationFrame(animateCircles);
  }, []);

  return (
    <div className="pointer-events-none">
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) circlesRef.current[i] = el;
          }}
          className="circle"
        />
      ))}
    </div>
  );
};

export default MouseTrail;
