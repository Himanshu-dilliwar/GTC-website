"use client";
import { motion, Variants } from "motion/react";

const noColumns = 5;

const variantBuilder = (variants: Variants, custom: null | number = null) => {
  return {
    initial: "initial",
    animate: "enter",
    exit: "exit",
    custom,
    variants,
  };
};

const expand = {
  initial: {
    top: 0,
  },
  enter: (i: number) => ({
    top: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
    transitionEnd: { height: "0", top: "0" },
  }),
  exit: (i: number) => ({
    height: "100vh",
    transition: {
      duration: 0.4,
      delay: 0.05 * i,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
};

const opacity = {
  initial: {
    opacity: 0.5,
  },
  enter: {
    opacity: 0,
  },
  exit: {
    opacity: 0.5,
  },
};

const Stairs = () => {
  return (
    <>
      <motion.div
        {...variantBuilder(opacity)}
        className="transition-background"
      />
      <div className="transition-container">
        {[...Array(noColumns)].map((_, i) => {
          return (
            <motion.div
              id="stair"
              key={i}
              {...variantBuilder(expand, noColumns - i)}
            />
          );
        })}
      </div>
    </>
  );
};

export default Stairs;
