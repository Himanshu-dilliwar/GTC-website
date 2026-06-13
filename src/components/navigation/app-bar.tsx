"use client";
import {
  animate,
  // AnimationControls,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { Home } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const AppBar = ({ navref }: { navref: React.RefObject<HTMLDivElement> }) => {
  const pathname = usePathname();

  const { scrollYProgress } = useScroll({
    target: navref,
    offset: ["start start", "end start"],
  });

  const paths = ["Council", "Events", "Updates", "Projects"];

  const y = useMotionValue(0);
  const height = useMotionValue("max-content");
  const width = useMotionValue("20%");

  const hide = useTransform(scrollYProgress, [0.99, 1], ["none", "flex"]);

  const unhide = useTransform(scrollYProgress, [0, 1], ["flex", "none"]);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    let c1: ReturnType<typeof animate>,
      c2: ReturnType<typeof animate> | undefined;

    if (value === 0) {
      c1 = animate(width, "20%", {});
      c2 = animate(y, [-40, 30, 0], {});
    } else if (value < 0.99) {
      c1 = animate(width, "20%", {});
    } else {
      c1 = animate(width, "80%", {});
      c2 = animate(y, [100, -10, 0], {});
    }
    return () => {
      c1.stop();
      c2?.stop();
    };
  });

  if (pathname === "/dashboard") return null;
  const variants = {
    initial: { y: -100, opacity: 0 },
    enter: { y: 0, opacity: 1 },
  };

  return (
    <motion.nav
      className="sticky w-full h-10 top-5 left-0 flex justify-center z-30 font-aero"
      variants={variants}
      initial="initial"
      animate="enter"
      style={{ y }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 10,
        duration: 1,
      }}
    >
      <motion.div
        className="p-1 flex rounded-full bg-gray-600 px-2 shadow-lg justify-center"
        style={{ width, height }}
      >
        <motion.p
          className="text-2xl text-white uppercase"
          style={{
            display: unhide,
            textAlign: "center",
          }}
        >
          hello
          <motion.span
            className="overflow-x-hidden overflow-y-hidden"
            initial={{ width: 0 }}
            animate={{ width: "100%", x: 0 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          >
            ...
          </motion.span>
        </motion.p>
        <motion.div
          className="flex justify-between w-full items-center p-2 text-card-foreground uppercase px-10"
          style={{
            display: hide,
          }}
        >
          <Link
            href={"/home"}
            className={`cursor-pointer hover:translate-y-1 duration-200 ${pathname === "/home" ? "text-white/40" : "text-white/70"}`}
          >
            <Home />
          </Link>
          {paths.map((path) => (
            <Link
              key={path}
              href={`/${path.toLowerCase().replace(" ", "_")}`}
              className={`cursor-pointer  hover:translate-y-1 duration-200 ${
                pathname === `/${path.toLowerCase().replace(" ", "_")}`
                  ? "text-white/40"
                  : "text-white/70"
              }`}
            >
              {path}
            </Link>
          ))}
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default AppBar;
