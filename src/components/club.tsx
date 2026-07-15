import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

import AIML from "@/public/AIML1.png";
import Game from "@/public/Game.png";
import Google from "@/public/Google.png";
import MS from "@/public/MICSFT.png";
import Mobile from "@/public/MBDV.png";
import Cyber from "@/public/CYBSEC.png";
import IOS from "@/public/ios.png";
import Robot from "@/public/Robotics.png";
import ARVR from "@/public/ARVR.png";
import Net from "@/public/Networking.png";
import Software from "@/public/SFDV.png";
import Cloud from "@/public/cloud.png";
import Web from "@/public/WEB DEVELOPMENT (1).png";
import Data from "@/public/DSCL.png";
import Sponser from "@/public/promotion.png";
import Manage from "@/public/Management.jpg";

const Clubs: React.FC = () => {
  interface Club {
    id: number;
    name: string;
    image: string;
    gradient: string;
    headName: string;
  }
  const [profile, setProfile] = React.useState<Club | null>(null);
  const clubs = [
    {
      id: 1,
      name: "Artificial Intelligence and Machine learning club",
      image: AIML.src,
      gradient: "bg-gradient-to-r from-purple-500 to-indigo-600",
      headName: "John Doe",
    },
    {
      id: 2,
      name: "Game Development Club",
      image: Game.src,
      gradient: "bg-gradient-to-r from-purple-500 to-pink-500",
      headName: "Jane Smith",
    },
    {
      id: 3,
      name: "Google Developers Club",
      image: Google.src,
      gradient: "bg-gradient-to-r from-blue-600 to-red-500",
      headName: "Mark Johnson",
    },
    {
      id: 4,
      name: "Microsoft Innovation Club",
      image: MS.src,
      gradient: "bg-gradient-to-r from-blue-600 to-gray-600",
      headName: "Anna Williams",
    },
    {
      id: 5,
      name: "Mobile Development Club",
      image: Mobile.src,
      gradient: "bg-gradient-to-r from-green-400 to-blue-500",
      headName: "Oliver Brown",
    },
    {
      id: 6,
      name: "Cyber Security Club",
      image: Cyber.src,
      gradient: "bg-gradient-to-r from-gray-700 to-black",
      headName: "Emily Davis",
    },
    {
      id: 7,
      name: "iOS Development Club",
      image: IOS.src,
      gradient: "bg-gradient-to-r from-red-500 to-gray-300",
      headName: "Michael Wilson",
    },
    {
      id: 8,
      name: "Robotics Club",
      image: Robot.src,
      gradient: "bg-gradient-to-r from-teal-500 to-indigo-500",
      headName: "Sophia Lee",
    },
    {
      id: 9,
      name: "AR/VR Club",
      image: ARVR.src,
      gradient: "bg-gradient-to-r from-cyan-500 to-indigo-400",
      headName: "James Taylor",
    },
    {
      id: 10,
      name: "Networking Club",
      image: Net.src,
      gradient: "bg-gradient-to-r from-yellow-500 to-orange-400",
      headName: "Liam Harris",
    },
    {
      id: 11,
      name: "Software Development Club",
      image: Software.src,
      gradient: "bg-gradient-to-r from-indigo-500 to-purple-600",
      headName: "Charlotte Clark",
    },
    {
      id: 12,
      name: "Cloud Computing Club",
      image: Cloud.src,
      gradient: "bg-gradient-to-r from-blue-600 to-indigo-400",
      headName: "Ethan Walker",
    },
    {
      id: 13,
      name: "Web Development Club",
      image: Web.src,
      gradient: "bg-gradient-to-r from-green-400 to-teal-500",
      headName: "Mia Lewis",
    },
    {
      id: 14,
      name: "Data Science Club",
      image: Data.src,
      gradient: "bg-gradient-to-r from-blue-400 to-green-500",
      headName: "Lucas King",
    },
    {
      id: 15,
      name: "Sponsor and Promotion Club",
      image: Sponser.src,
      gradient: "bg-gradient-to-r from-orange-500 to-yellow-600",
      headName: "Amelia Scott",
    },
    {
      id: 16,
      name: "Management Club",
      image: Manage.src,
      gradient: "bg-gradient-to-r from-indigo-500 to-blue-600",
      headName: "Benjamin Moore",
    },
  ];
  return (
    <>
      <h1 className="text-4xl font-bold text-center my-5">Our Clubs</h1>
      <div className="flex space-x-3 flex-col-reverse lg:flex-row">
        <ul className="py-4 w-full grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {clubs.map((club) => (
            <motion.div
              key={club.id}
              className={`cursor-pointer group transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl rounded-xl p-6 text-center text-white flex items-center justify-center bg-primary`}
              onClick={() => setProfile(club)}
              whileHover={{ scale: [null, 0.9, 0.8] }}
              transition={{ duration: 0.1 }}
            >
              <div className="relative flex justify-center items-center">
                <Image
                  className="rounded-full border-4 opacity-100 border-white group-hover:opacity-10"
                  src={club.image}
                  alt={club.name}
                  width={120}
                  height={120}
                />
              </div>
              <div className="absolute left-0 right-0 text-white opacity-0 group-hover:opacity-100 transform translate-y-5 group-hover:translate-y-0 transition-all duration-300 ease-in-out">
                <h3 className="text-xl font-semibold">{club.name}</h3>
              </div>
            </motion.div>
          ))}
        </ul>

        {/* Profile Card */}
        {profile?.image && (
          <div className="w-full max-w-sm bg-white rounded-xl shadow-lg p-6 mt-4 border-4 border-gray-500">
            <div className="flex items-center">
              {/* Using the club's image for the profile */}
              <Image
                src={profile.image}
                alt={profile.name}
                className="rounded-full mr-4 border-4 border-primary"
                width={400}
                height={400}
              />
            </div>
            <div className="mt-4">
              <h4 className="font-semibold">About {profile.name}</h4>
              <p className="text-sm text-muted-foreground">
                The {profile.name} is a vibrant community focused on innovation
                and learning in the field of {profile.name.split(" ")[0]}. This
                club is dedicated to fostering collaboration and excellence in
                technology.
                <br />
                <br />
                Club Head:{" "}
                <span className="text-primary">{profile.headName}</span>
              </p>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Clubs;
