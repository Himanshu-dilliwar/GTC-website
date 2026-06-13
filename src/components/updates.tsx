import React from "react";
import Image from "next/image";
import SwiftChallenge from "../public/SwiftChallenge.png";

const eventUpdates = [
  {
    title: "Hackathons",
    description: "Participate in exciting hackathons",
    iconClass: "bg-white bg-opacity-20 h-16 w-16 rounded-md",
  },
  {
    title: "TechTalk series",
    description: "Join our TechTalk series",
    iconClass: "bg-white bg-opacity-20 h-16 w-16 rounded-md",
  },
  {
    title: "Event Poster",
    description: "Check out our event poster",
    iconClass:
      "bg-white bg-opacity-20 h-32 sm:h-48 w-full max-w-4xl rounded-md",
  },
  {
    title: "Event Announcement",
    description: "Stay tuned for event announcements",
    iconClass: "",
  },
];

const Updates: React.FC = () => {
  return (
    <div className="min-h-screen p-4 sm:p-8">
      <div className="w-full max-w-7xl mx-auto text-white space-y-4">
        {/* Register Now */}
        <div className="bg-card shadow-lg rounded-2xl p-4 flex items-center">
          <div>
            <div className="text-2xl sm:text-4xl h-24 w-auto rounded-md flex items-center justify-center uppercase font-bold">
              Latest Events
            </div>
            <div className="text-sm sm:text-base font-semibold mt-4">
              Stay updated with the latest tech events
            </div>
            <button className="mt-4 text-lg sm:text-xl px-10 font-bold block bg-black hover:bg-slate-900 rounded-xl text-white py-2 transition hover:scale-105 duration-300 ease-in-out">
              Register Now
            </button>
          </div>
          <Image
            src={SwiftChallenge.src}
            alt="Event Poster"
            className="h-24 w-24 sm:h-32 sm:w-32 rounded-md mr-4"
            width={128}
            height={128}
          />
        </div>

        {/* Event Updates */}
        <div className="flex flex-wrap -mx-2">
          {eventUpdates.map((event, index) => (
            <div key={index} className="w-full sm:w-1/2 px-2 mb-4">
              <div className="bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-2xl p-4 h-full">
                <div className={event.iconClass}></div>
                <span className="mt-2 text-base sm:text-lg block">
                  {event.title}
                </span>
                <p className="text-sm sm:text-base font-medium mt-2">
                  {event.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Follow Us */}
        <div className="p-4 bg-white bg-opacity-10 backdrop-blur-md shadow-lg rounded-2xl text-center">
          <span className="text-2xl sm:text-4xl font-semibold block text-white">
            Tech Community Updates
          </span>
          <p className="text-sm sm:text-base font-medium mt-2 text-white">
            Engage with the tech community on social media
          </p>
          <button className="mt-4 text-lg sm:text-xl px-10 font-bold block bg-black hover:bg-slate-900 rounded-xl hover:rounded-2xl text-white py-2 transition hover:scale-105 duration-150 ease-in-out mx-auto">
            Follow Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Updates;
