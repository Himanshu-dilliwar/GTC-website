"use client";
import VerticalAlignedText from "@/components/global/VerticalAlignedText";
import React from "react";

export default function Page() {
  React.useEffect(() => {
    document.querySelector("body")?.classList.add("BGSVG3");
    return () => document.querySelector("body")?.classList.remove("BGSVG3");
  }, []);
  return (
    <div className="h-screen w-screen">
      <div className="flex justify-between h-screen w-screen">
        <div className="w-1/12 text-7xl">
          <VerticalAlignedText text="ABOUT" />
        </div>
        <div className="text-white font-aero text-2xl mt-28">
          EMPOWERING INNOVATORS AND TECH ENTHUSIASTS
        </div>
        <div className="flex h-screen mr-24">
          <svg
            width="312"
            className="rotate-180 mt-28 mr-6"
            height="482"
            viewBox="0 0 312 482"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M103.587 0L199.773 55.5328V166.598L103.587 222.131L7.40146 166.598V55.5328L103.587 0Z"
              fill="white"
            />
            <path
              d="M103.587 0L199.773 55.5328V166.598L103.587 222.131L7.40146 166.598V55.5328L103.587 0Z"
              stroke="black"
            />
            <path
              d="M97.0657 259.498L193.251 315.03V426.096L97.0657 481.629L0.879974 426.096V315.03L97.0657 259.498Z"
              fill="white"
            />
            <path
              d="M97.0657 259.498L193.251 315.03V426.096L97.0657 481.629L0.879974 426.096V315.03L97.0657 259.498Z"
              stroke="black"
            />
            <path
              d="M214.935 134.175L311.12 189.708V300.773L214.935 356.306L118.749 300.773V189.708L214.935 134.175Z"
              fill="white"
            />
            <path
              d="M214.935 134.175L311.12 189.708V300.773L214.935 356.306L118.749 300.773V189.708L214.935 134.175Z"
              stroke="black"
            />
          </svg>
          <svg
            width="312"
            height="482"
            viewBox="0 0 312 482"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M103.587 0L199.773 55.5328V166.598L103.587 222.131L7.40146 166.598V55.5328L103.587 0Z"
              fill="white"
            />
            <path
              d="M103.587 0L199.773 55.5328V166.598L103.587 222.131L7.40146 166.598V55.5328L103.587 0Z"
              stroke="black"
            />
            <path
              d="M97.0657 259.498L193.251 315.03V426.096L97.0657 481.629L0.879974 426.096V315.03L97.0657 259.498Z"
              fill="white"
            />
            <path
              d="M97.0657 259.498L193.251 315.03V426.096L97.0657 481.629L0.879974 426.096V315.03L97.0657 259.498Z"
              stroke="black"
            />
            <path
              d="M214.935 134.175L311.12 189.708V300.773L214.935 356.306L118.749 300.773V189.708L214.935 134.175Z"
              fill="white"
            />
            <path
              d="M214.935 134.175L311.12 189.708V300.773L214.935 356.306L118.749 300.773V189.708L214.935 134.175Z"
              stroke="black"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
