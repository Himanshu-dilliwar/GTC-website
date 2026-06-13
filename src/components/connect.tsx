"use client";
import { ChevronLeft } from "lucide-react";
import React, { useState } from "react";
import { SocialIcon } from "react-social-icons";
import { usePathname } from "next/navigation";

const Connect = () => {
  const [isOpen, setIsOpen] = useState(true);
  const pathname = usePathname();

  if (pathname === "/dashboard") return null;

  return (
    <div className="fixed top-1/2 right-0 transform -translate-y-1/2 z-40 flex transition-all duration-700">
      <div className="grid">
        <div />
        <div
          className={`transition-all duration-300 bg-[#3b3b3b] flex items-center ${isOpen ? "translate-x-0" : "translate-x-[4rem]"} justify-center w-[30px] h-[80px] rounded-l-xl cursor-pointer`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <ChevronLeft
            className={`transition-transform text-white duration-300 ${isOpen ? "rotate-180" : ""}`}
          />
        </div>
      </div>

      <ul
        className={`transition-all duration-300 bg-[#4D4D4D] py-8 px-2 text-black rounded-l-xl shadow-lg ${isOpen ? "translate-x-0" : "translate-x-full"} [clip-path:polygon(0px_10%,50%_0px,100%_0%,100%_49.72%,100%_100%,50%_100%,0px_90%)] border-black`}
      >
        <li className="mb-4 flex hover:scale-125 transition-transform duration-300 justify-center">
          <SocialIcon
            url="https://www.instagram.com/"
            fgColor="white"
            bgColor="transparent"
          />
        </li>
        <li className="mb-4 flex hover:scale-125 transition-transform duration-300 justify-center">
          <SocialIcon
            url="https://www.facebook.com/"
            fgColor="white"
            bgColor="transparent"
          />
        </li>
        <li className="mb-4 flex hover:scale-125 transition-transform duration-300 justify-center">
          <SocialIcon
            url="https://www.whatsapp.com/"
            fgColor="white"
            bgColor="transparent"
          />
        </li>
        <li className="mb-4 flex hover:scale-125 transition-transform duration-300 justify-center">
          <SocialIcon
            url="https://www.linkedin.com/"
            fgColor="white"
            bgColor="transparent"
          />
        </li>
        <li className="mb-4 flex hover:scale-125 transition-transform duration-300 justify-center">
          <SocialIcon
            url="https://x.com/"
            fgColor="white"
            bgColor="transparent"
          />
        </li>
      </ul>
    </div>
  );
};

export default Connect;
