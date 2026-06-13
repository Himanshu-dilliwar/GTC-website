"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Clock, MapPin, ChevronRight } from "lucide-react";
import Image from "next/image";

export default function EventsPage() {
  const [selectedEvent, setSelectedEvent] = useState<number | null>(null);

  const events = [
    {
      id: 1,
      title: "Tech Conclave 2025",
      date: "March 23-26, 2024",
      time: "10:00 AM - 6:00 PM",
      location: "Main Campus Arena",
      description:
        "The biggest tech festival of North India, featuring workshops, hackathons, and exciting competitions.",
      image: "",
    },
    {
      id: 2,
      title: "Hackathon",
      date: "April 5-6, 2025",
      time: "24 Hours",
      location: "C Block",
      description:
        "A 24-hour coding marathon where teams compete to build innovative solutions.",
      image: "/guImg.jpeg",
    },
    {
      id: 3,
      title: "Web dev Workshop",
      date: "May 20, 2025",
      time: "2:00 PM - 8:00 PM",
      location: "Virtual Event",
      description:
        "Explore the future of Webdev with industry experts and hands-on demonstrations.",
      image: "",
    },
    {
      id: 4,
      title: "AI Summit",
      date: "June 15, 2025",
      time: "2:00 PM - 8:00 PM",
      location: "NEW Block Auditorium",
      description:
        "Deep dive into artificial intelligence with hands-on workshops and expert talks.",
      image: "",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  // const textVariants = {
  //   hidden: { width: 0, opacity: 0 },
  //   visible: {
  //     width: "100%",
  //     opacity: 1,
  //     transition: {
  //       duration: 1,
  //       ease: "easeOut",
  //     },
  //   },
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-950 via-red-900 to-gray-900">
      <div className="max-w-7xl mx-auto px-4 py-16">
        {/* Header Section */}
        <div className="relative mb-16 overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "auto" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <h1 className="text-7xl font-bold text-white mb-4 tracking-tighter whitespace-nowrap">
              EVENTS_
            </h1>
          </motion.div>
          <div className="absolute -top-4 right-0 flex space-x-2">
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse delay-75"></div>
            <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse delay-150"></div>
          </div>
          <div className="h-1 w-32 bg-red-600"></div>
        </div>

        {/* Events Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {events.map((event) => (
            <motion.div
              key={event.id}
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              className={`relative overflow-hidden rounded-lg bg-gray-800/80 backdrop-blur-sm border border-gray-700 hover:border-red-600 transition-all duration-300 group ${
                selectedEvent === event.id ? "scale-105 border-red-600" : ""
              }`}
              onClick={() => setSelectedEvent(event.id)}
            >
              <div className="relative h-48 overflow-hidden">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                </motion.div>
              </div>

              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-600 to-transparent" />

              <div className="p-6 relative z-10">
                <motion.h3
                  className="text-2xl font-bold text-white mb-4"
                  whileHover={{ x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {event.title}
                </motion.h3>

                <div className="space-y-3 text-gray-300">
                  <div className="flex items-center">
                    <Calendar className="w-5 h-5 mr-3 text-red-500" />
                    <span>{event.date}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-3 text-red-500" />
                    <span>{event.time}</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="w-5 h-5 mr-3 text-red-500" />
                    <span>{event.location}</span>
                  </div>
                </div>

                <p className="mt-4 text-gray-400">{event.description}</p>

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full bg-gradient-to-r from-red-700 to-red-900 text-white py-2 px-4 rounded-md hover:from-red-600 hover:to-red-800 transition-all duration-300 flex items-center justify-center group relative overflow-hidden"
                >
                  <span className="relative z-10 flex items-center">
                    REGISTER NOW
                    <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-800"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.3 }}
                  />
                </motion.button>
              </div>

              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-red-600/20 to-transparent" />
            </motion.div>
          ))}
        </motion.div>

        {/* Decorative Elements */}
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: 45 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="absolute top-20 right-10 w-32 h-32 border border-red-600/20"
        />
        <motion.div
          initial={{ opacity: 0, rotate: 0 }}
          animate={{ opacity: 1, rotate: -12 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="absolute bottom-20 left-10 w-24 h-24 border border-red-600/20"
        />
        <div className="fixed top-1/2 right-0 w-1 h-32 bg-gradient-to-b from-transparent via-red-600 to-transparent" />
      </div>
    </div>
  );
}
