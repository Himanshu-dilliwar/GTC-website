"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Book, Users, MapPin, Binoculars } from "lucide-react";
import VerticalAlignedText from "@/components/global/VerticalAlignedText";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Galgotias() {
  const [user, SetUser] = React.useState(0);
  const [book, SetBook] = React.useState(0);
  const [acres, SetAcres] = React.useState(0);
  const [patents, SetPatents] = React.useState(0);

  useEffect(() => {
    const intv1 = setInterval(() => {
      SetUser((count) => {
        count += 100;
        if (count >= 35000) {
          clearInterval(intv1);
        }
        return count;
      });
    }, 10);

    const intv2 = setInterval(() => {
      SetBook((count) => {
        count += 1;
        if (count >= 150) {
          clearInterval(intv2);
        }
        return count;
      });
    }, 20);

    const intv3 = setInterval(() => {
      SetAcres((count) => {
        count += 1;
        if (count >= 52) {
          clearInterval(intv3);
        }
        return count;
      });
    }, 50);
    const intv4 = setInterval(() => {
      SetPatents((count) => {
        count += 50;
        if (count >= 1500) {
          clearInterval(intv4);
        }
        return count;
      });
    }, 50);

    return () => {
      clearInterval(intv1);
      clearInterval(intv2);
      clearInterval(intv3);
      clearInterval(intv4);
    };
  }, []);
  useEffect(() => {
    document.querySelector("body")?.classList.add("BGSVG2");
    return () => document.querySelector("body")?.classList.remove("BGSVG2");
  }, []);

  return (
    <div className="min-h-screen flex items-center">
      <div className="w-1/12">
        <VerticalAlignedText text="GALGOTIAS" />
      </div>
      <div className="flex flex-col">
        <div>
          <div className="flex mb-4">
            <div className="h-44 w-52 bg-white/50 mr-4"></div>
            <div className="h-44 w-52 bg-white/50"></div>
          </div>
          <div className="flex">
            <div className="h-44 w-52 bg-white/50 mr-4"></div>
            <div className="h-44 w-52 bg-white/50"></div>
          </div>
        </div>
        <div className="h-40" />
      </div>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative"
      >
        {/* Hero Section */}
        <div className="relative w-screen">
          <div className="flex flex-col justify-center px-6 md:px-16 lg:px-24">
            <motion.h1
              variants={itemVariants}
              className="text-6xl md:text-7xl py-4 font-extralight mb-6 text-white font-aero tracking-widest"
            >
              Galgotias <br />
              University
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="max-w-3xl text-lg md:text-xl text-white mb-8 font-turret tracking-widest"
            >
              Galgotias University, established in 2011, is a premier
              institution of higher education located in Greater Noida, Uttar
              Pradesh. With a commitment to excellence in education, research,
              and innovation, we nurture future leaders and innovators.
            </motion.p>
            <motion.div variants={itemVariants}>
              <Badge className="text-lg text-white border-black bg-white/20 border-4 font-aero cursor-default">
                <MapPin className="w-5 h-5 mr-2" />
                Greater Noida, Uttar Pradesh
              </Badge>
            </motion.div>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          className="flex mx-4 mt-4 space-x-40"
        >
          {[
            { icon: Users, number: user, label: "Students" },
            { icon: Book, number: book, label: "Programs" },
            { icon: MapPin, number: acres, label: "Acres Campus" },
            { icon: Binoculars, number: patents, label: "Patents" },
          ].map((stat, index) => (
            <motion.div
              key={`${stat.label}-${index}`}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              {React.createElement(stat.icon, {
                className: "w-12 h-12 text-white mb-4",
              })}
              <span className="text-lg md:text-4xl font-bold text-white mb-2">
                {stat.number}+
              </span>
              <span className="text-gray-400 text-lg">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}
