import Spline from "@splinetool/react-spline/next";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import logo from "../../../public/GTC Logo circular.png";
import Image from "next/image";
// import Map from "@/public/map.png";
// import BentoUI from "@/components/bento-Aims";
// import Updates from "@/components/updates";
// import Core from "@/components/Core";
import Mbutton from "@/components/magnetic-button";
import MovingText from "@/components/global/MovingText";
import {
  Calendar,
  Globe2,
  BookOpen,
  Star,
  GraduationCap,
  Network,
  MessageSquare,
} from "lucide-react";
const Home = () => {
  return (
    <div className="">
      <MaxWidthWrapper className="relative h-screen w-screen BGSVG1">
        <div className="uppercase font-turret text-neutral-100 mx-20 relative flex flex-col">
          <div className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold tracking-wider">
            Galgotias
          </div>
          <div className="text-[8rem] tracking-widest font-extrabold h-[8rem]">
            Tech
          </div>
          <div className="text-[8rem] tracking-widest font-extrabold h-[8rem]">
            Council
          </div>
        </div>
        <div className="relative mt-40 lg:mt-52">
          <div className="flex justify-between mx-20">
            <div>
              <div className="text-neutral-100 text-xl text-left">
                Explore all the 16 clubs
                <br />
                and find your interests.
              </div>
              <div>
                <Mbutton className="m-4">join</Mbutton>
              </div>
            </div>
            <div></div>
            <div className="flex items-center justify-center">
              <div className="bg-neutral-600/30 z-10 text-neutral-100 p-4 rounded-3xl font-turret tracking-wider font-bold text-left flex [clip-path:polygon(0px_2.11%,50%_0px,100%_0%,100%_49.72%,73.28%_100%,44.38%_100%,0px_100%)]">
                <div>
                  <div className="text-2xl mb-4">Announcement</div>
                  Biggest Tech Fest Of <br />
                  North India, happening at <br />
                  Galgotias University!
                  <br />
                  <button className="p-2 m-2 rounded-full border-red-500 border-2 hover:text-black">
                    Register
                  </button>
                </div>
                <div className="size-28 "></div>
              </div>
            </div>
          </div>
        </div>
        <Spline
          scene="https://prod.spline.design/BVIbkcCwuDFeElWi/scene.splinecode"
          className="absolute text-center h-[60%] w-screen top-0"
        />
      </MaxWidthWrapper>
      <MovingText text1="Welcome to Galgotias tech " coloredText="Council" />

      {/* Grid Section */}
      <section className="py-12 sm:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {/* Welcome Tile - Larger and Interactive */}
            <div className="col-span-1 md:col-span-2 bg-neutral-600 p-6 sm:p-8 rounded-2xl shadow-xl border border-red-100 overflow-hidden relative">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-red-400" />
              <div className="flex items-center gap-2">
                <Image
                  src={logo}
                  alt="GTC logo"
                  className="h-8 w-8 sm:h-12 sm:w-12 mb-1"
                />
                <h3 className="text-2xl sm:text-3xl font-bold text-red-950 mb-4">
                  Galgotias Tech Council
                </h3>
              </div>
              <p className="text-neutral-100 mb-4 sm:mb-6 text-sm sm:text-base leading-relaxed">
                Join the{" "}
                <span className="font-semibold text-red-500">
                  Galgotias Tech Council
                </span>
                , a vibrant community at Galgotias University fostering
                innovation, collaboration, and technical excellence among
                students and professionals.
              </p>
            </div>

            {/* Council Details Tile */}
            <div className="col-span-1 bg-neutral-600 p-4 sm:p-6 rounded-2xl shadow-xl border border-neutral-200">
              <h4 className="text-lg sm:text-xl font-semibold text-red-500 mb-3 sm:mb-4 flex items-center gap-2">
                <Calendar className="w-4 sm:w-5 h-4 sm:h-5" />
                Key Details
              </h4>
              <ul className="space-y-2 sm:space-y-3 text-neutral-100 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full" />
                  Founded: 2024
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full" />
                  Location: Greater Noida, India
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full" />
                  Focus: Tech Innovation
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-red-600 rounded-full" />
                  University: Galgotias University
                </li>
              </ul>
            </div>

            {/* Objective Tile */}
            <div className="col-span-1 bg-neutral-600 p-4 sm:p-6 rounded-2xl shadow-xl border border-neutral-200">
              <h4 className="text-lg sm:text-xl font-semibold text-red-500 mb-3 sm:mb-4 flex items-center gap-2">
                <Globe2 className="w-4 sm:w-5 h-4 sm:h-5" />
                Our Mission
              </h4>
              <p className="text-neutral-100 text-sm sm:text-base leading-relaxed">
                The Galgotias Tech Council aims to bridge the gap between
                academia and industry by promoting technical skills, innovation,
                and collaboration through workshops, events, and projects.
              </p>
            </div>

            {/* Activities Tile */}
            <div className="col-span-1 md:col-span-1 bg-gradient-to-br from-red-600 to-red-800 p-4 sm:p-6 rounded-2xl text-neutral-100">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                <BookOpen className="w-4 sm:w-5 h-4 sm:h-5" />
                Our Activities
              </h4>
              <ul className="space-y-2 text-red-100 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neutral-600 rounded-full" />
                  Hackathons & Coding Competitions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neutral-600 rounded-full" />
                  Tech Workshops & Seminars
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neutral-600 rounded-full" />
                  Project Development Sessions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neutral-600 rounded-full" />
                  Industry Interaction Events
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neutral-600 rounded-full" />
                  And much more...
                </li>
              </ul>
            </div>

            {/* Gains for Students */}
            <div className="col-span-1 md:col-span-2 bg-neutral-600 p-4 sm:p-6 rounded-2xl shadow-lg border border-neutral-100">
              <h4 className="text-lg sm:text-xl font-semibold text-red-500 mb-3 sm:mb-4 flex items-center gap-2">
                <GraduationCap className="w-4 sm:w-5 h-4 sm:h-5" />
                Gains for Students
              </h4>
              <ul className="space-y-2 text-neutral-100 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-red-500" />
                  Hands-on experience in real-world projects.
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-red-500" />
                  Skill-building through workshops and mentorship.
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-red-500" />
                  Opportunities to showcase talent in competitions.
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-red-500" />
                  Access to a network of peers and professionals.
                </li>
              </ul>
            </div>

            {/* Activities Tile */}
            <div className="col-span-1 bg-neutral-600 text-neutral-100 md:col-span-1 bg-gradient-to-br p-4 sm:p-6 rounded-2xl">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                <BookOpen className="w-4 sm:w-5 h-4 sm:h-5" />
                Our Activities
              </h4>
              <ul className="space-y-2 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neutral-600 rounded-full" />
                  Hackathons & Coding Competitions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neutral-600 rounded-full" />
                  Tech Workshops & Seminars
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neutral-600 rounded-full" />
                  Project Development Sessions
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neutral-600 rounded-full" />
                  Industry Interaction Events
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-neutral-600 rounded-full" />
                  And much more...
                </li>
              </ul>
            </div>

            {/* Gains for Professionals & Mentors */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 bg-neutral-600 p-4 sm:p-6 rounded-2xl shadow-lg border border-neutral-100">
              <h4 className="text-lg sm:text-xl font-semibold text-red-500 mb-3 sm:mb-4 flex items-center gap-2">
                <Network className="w-4 sm:w-5 h-4 sm:h-5" />
                Gains for Professionals & Mentors
              </h4>
              <ul className="space-y-2 text-neutral-100 text-sm sm:text-base">
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-red-500" />
                  Collaborate with emerging tech talent.
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-red-500" />
                  Share expertise and shape future innovators.
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-red-500" />
                  Stay updated with student-led innovations.
                </li>
                <li className="flex items-center gap-2">
                  <Star className="w-4 h-4 text-red-500" />
                  Build connections within the tech community.
                </li>
              </ul>
            </div>

            {/* Contact Us Tile */}
            <div className="col-span-1 bg-gradient-to-br from-red-500 to-red-700 p-4 sm:p-6 rounded-2xl text-neutral-100">
              <h4 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4 flex items-center gap-2">
                <MessageSquare className="w-4 sm:w-5 h-4 sm:h-5" />
                Get Involved
              </h4>
              <p className="text-red-100 mb-3 sm:mb-4 text-sm sm:text-base">
                Want to join or collaborate? Reach out to the Galgotias Tech
                Council team.
              </p>
              <a
                href="mailto:techcouncil@galgotiasuniversity.edu.in"
                className="inline-block bg-white text-red-500 px-4 sm:px-6 py-2 rounded-full font-semibold text-sm sm:text-base hover:bg-red-100 transition-colors"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
