"use client";
// import Image from "next/image";
import React, { useState } from "react";
// import GTCLogo from "../../public/GTC Logo circular.png";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import { motion } from "motion/react";
// import { signIn, signOut, useSession } from "next-auth/react";

const Navbar = ({ navref }: { navref: React.RefObject<HTMLDivElement> }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  // const session = useSession();
  // const username = session.data?.user?.name;
  const paths = ["About", "Galgotias", "Join Discord"];

  if (pathname === "/dashboard") return null;

  return (
    <div className="relative mb-2 font-aero" ref={navref}>
      <nav className="flex justify-between items-center w-full px-6 py-1 lg:px-8">
        {/* Logo Section */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <Link href={"/"} className="flex items-center group">
            {/* <Image
              src={GTCLogo}
              width={100}
              height={100}
              alt="Logo"
              className="w-20 h-20 object-cover mx-2 transition-transform duration-300 group-hover:scale-110"
            /> */}
          </Link>
        </motion.span>

        {/* Mobile Menu Toggle */}
        <button
          className="lg:hidden text-black focus:outline-none focus:ring-2 focus:ring-primary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </button>

        {/* Navigation Links */}
        <div
          className={`z-50 flex flex-col lg:flex-row text-center lg:items-center lg:space-x-6 absolute lg:static top-20 left-0 w-full lg:w-auto bg-background lg:bg-transparent shadow-lg lg:shadow-none lg:translate-x-0 transform transition-transform duration-300 ${
            isMenuOpen ? "translate-x-0" : "-translate-x-full"
          } lg:translate-x-0`}
        >
          {paths.map((path) => (
            <motion.span
              key={path}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <Link
                href={`/${path.toLowerCase().replace(" ", "_")}`}
                className={`transition-all  text-lg hover:underline underline-offset-8 uppercase font-medium px-4 py-2  duration-300 ${
                  pathname === `/${path.toLowerCase().replace(" ", "_")}`
                    ? "underline"
                    : "text-white"
                }`}
              >
                {path}
              </Link>
            </motion.span>
          ))}

          {/* Register Button */}
          <motion.span
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
          >
            <Button
              className="bg-white/20 rounded-full border-2 border-black text-white font-semibold uppercase px-4 py-2 shadow-lg hover:bg-gray-800 transition-all duration-300 transform hover:scale-105 mx-4"
              variant={"default"}
            >
              Register
            </Button>
          </motion.span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
