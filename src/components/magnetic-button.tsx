"use client";
import React from "react";
import { motion } from "framer-motion";

const Mbutton = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  const ref = React.useRef<HTMLButtonElement>(null);
  const [coordinates, setCoordinates] = React.useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mX = clientX - centerX;
    const mY = clientY - centerY;

    setCoordinates({ x: mX, y: mY });
  };

  const reset = () => setCoordinates({ x: 0, y: 0 });

  return (
    <motion.button
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      animate={{
        x: coordinates.x,
        y: coordinates.y,
      }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 150,
        damping: 15,
        mass: 0.1,
      }}
      style={{
        position: "relative",
      }}
      className={`rounded-full font-aero bg-[#9f1d2a] ButtonShadow hover:text-black hover:bg-white text-white font-bold size-48 text-3xl z-10 ${className}`}
    >
      {children}
    </motion.button>
  );
};

export default Mbutton;
