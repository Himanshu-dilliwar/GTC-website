import Image from "next/image";
import React from "react";

const members = [
  {
    name: "Anirban Sarkar",
    role: "President",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
  },
  {
    name: "Nishant Bharadwaj",
    role: "Vice President (Events)",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
  },
  {
    name: "Atashi Mudgal",
    role: "Vice President (Marketing)",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
  },
  {
    name: "Lakshay Singh",
    role: "Vice President (Outreach and Strategy)",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
  },
  {
    name: "Raunak Kumar",
    role: "Vice President (Department Incharge)",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
  },
  {
    name: "Aditya Kumar",
    role: "Vice President (Tech Lead and Elite Chairperson)",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
  },
  {
    name: "Priyanshu Shukla",
    role: "Vice President (Vice Tech Lead and Elite Vice Chair)",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
  },
  {
    name: "Jyotiraditya Kumar Singh",
    role: "Vice President (Treasurer)",
    img: "https://uxwing.com/wp-content/themes/uxwing/download/peoples-avatars/man-person-icon.png",
  },
];

const Core = () => {
  return (
    <>
      <p className="text-4xl font-semibold text-center my-6">
        Meet the Central Core Committee
      </p>
      <div className="flex flex-wrap justify-center gap-12 px-6">
        {members.map((member, index) => {
          const roleParts = member.role.split(" (");
          return (
            <div
              key={index}
              className="max-w-xs rounded-xl hover:scale-110 duration-100 overflow-hidden shadow-lg text-center flex flex-col justify-center items-center w-56 backdrop-blur-xl bg-white/20 border border-white/20 my-4"
            >
              <Image src={member.img} alt="Profile" className="h-32 mt-4" />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-white">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-bold text-sm">
                  {roleParts[0]} <br />
                  {roleParts[1] ? `(${roleParts[1]}` : ""}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Core;
