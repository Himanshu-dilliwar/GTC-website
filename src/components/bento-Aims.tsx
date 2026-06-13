import React, { useState, useEffect } from "react";

interface BentoUIProps {
  direction?: "row" | "column";
}

const BentoUI: React.FC<BentoUIProps> = () => {
  const [, setBlur] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setBlur(true);
      } else {
        setBlur(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center p-4 sm:p-8">
      <div
        className="grid grid-cols-3 grid-rows-3 gap-4 w-full max-w-7xl"
        style={{ height: "80vh" }} // Adjust the height as needed
      >
        {/* Community Projects */}
        <div
          className="bg-slate-400 bg-opacity-20 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-6"
          style={{ gridColumn: "1 / span 1", gridRow: "1 / span 1" }}
        >
          <h2 className="text-white text-lg sm:text-xl font-semibold">
            Community Projects
          </h2>
        </div>

        {/* Tech Workshops */}
        <div
          className="bg-slate-400 bg-opacity-20 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-6"
          style={{ gridColumn: "2 / span 1", gridRow: "1 / span 1" }}
        >
          <h2 className="text-white text-lg sm:text-xl font-semibold">
            Tech Workshops
          </h2>
        </div>

        {/* Email Marketing */}
        <div
          className="bg-slate-100 bg-opacity-20 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-6"
          style={{ gridColumn: "3 / span 1", gridRow: "1 / span 2" }}
        >
          <h2 className="text-white text-lg sm:text-xl font-semibold">
            Email Marketing
          </h2>
        </div>

        {/* Content Creation */}
        <div
          className="bg-slate-600 bg-opacity-20 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-6"
          style={{ gridColumn: "1 / span 1", gridRow: "2 / span 2" }}
        >
          <h2 className="text-white text-lg sm:text-xl font-semibold">
            Content Creation
          </h2>
        </div>

        {/* Skill Development */}
        <div
          className="bg-slate-800	 bg-opacity-20 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-6"
          style={{ gridColumn: "2 / span 2", gridRow: "2 / span 1" }}
        >
          <h2 className="text-white text-lg sm:text-xl font-semibold">
            Skill Development
          </h2>
        </div>

        {/* Analytics Tracking */}
        <div
          className="bg-slate-600 bg-opacity-20 backdrop-blur-md rounded-2xl shadow-lg p-4 sm:p-6"
          style={{ gridColumn: "1 / span 3", gridRow: "3 / span 1" }}
        >
          <h2 className="text-white text-lg sm:text-xl font-semibold">
            Analytics Tracking
          </h2>
        </div>
      </div>
    </div>
  );
};

export default BentoUI;
