// app/clubs/[slug]/page.tsx
"use client";
import { notFound, useParams } from "next/navigation";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Album, Calendar, Users2, User, ExternalLink } from "lucide-react";

const clubs = [
  {
    slug: "web-dev-club",
    name: "Web Development Club",
    logo: "/WEB DEVELOPMENT (1).png",
    dept: "Computer Science Department",
    members: 60,
    projects: 10,
    events: 5,
    image: "/core1.jpeg",
    description:
      "The Web Development Club at Galgotias Tech Council is a community of passionate developers dedicated to building innovative web solutions. We focus on hands-on learning, real-world projects, and collaborative problem-solving to enhance web development skills and create impactful digital experiences.",
    shortDescription:
      "Join passionate developers to code innovative projects, learn new technologies, and compete in hackathons. Perfect for all skill levels!",
    team: [
      {
        name: "Utkarsh Kesharwani",
        role: "Club Head",
        image: "/heads/john-doe.jpg",
        linkedin: "https://linkedin.com/in/johndoe",
      },
      {
        name: "Shiwangi Upadhyay",
        role: "Club Head",
        image: "/heads/jane-smith.jpg",
        linkedin: "https://linkedin.com/in/janesmith",
      },
      {
        name: "Vansh Sharma",
        role: "Coordinator",
        image: "/coordinators/alice.jpg",
        linkedin: "https://linkedin.com/in/alicejohnson",
      },
      {
        name: "Aditya Bharadwaj",
        role: "Coordinator",
        image: "/coordinators/bob.jpg",
        linkedin: "https://linkedin.com/in/bobwilliams",
      },
      {
        name: "Sakshi Yadav",
        role: "Coordinator",
        image: "/coordinators/charlie.jpg",
        linkedin: "https://linkedin.com/in/charliebrown",
      },
      {
        name: "Soumya Raj",
        role: "Coordinator",
        image: "/coordinators/diana.jpg",
        linkedin: "https://linkedin.com/in/dianalee",
      },
    ],
  },
];

export default function ClubDetailPage() {
  const unwrappedParams = useParams();
  const slug = unwrappedParams?.slug as string;
  const club = clubs.find((c) => c.slug === slug);
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  if (!club) {
    notFound();
  }

  const heads = club.team.slice(0, 2);
  const coordinators = club.team.slice(2, 6);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden bg-red-800/90">
        <motion.div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `url("${club.image}")`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            className="text-center max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">
              {club.name}
            </h1>
            <p className="text-xl text-red-200 leading-relaxed mb-8">
              {club.dept} - Galgotias Tech Council
            </p>
          </motion.div>
        </div>
      </section>

      {/* Description and Stats Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 opacity-30 bg-[linear-gradient(to_right,#808080_1px,transparent_1px),linear-gradient(to_bottom,#808080_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold mb-6 text-red-600">
                  About the Club
                </h2>
                <p className="text-lg text-gray-300 tracking-wide leading-relaxed">
                  {club.description}
                </p>
              </motion.div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <motion.div
                  className="backdrop-blur-sm p-6 rounded-xl bg-gray-800/50 border border-red-600/50 flex flex-col items-center"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px rgba(255,0,0,0.2)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  <Calendar className="w-8 h-8 text-red-600 mb-2" />
                  <p className="text-2xl font-bold text-white">
                    {club.events}+
                  </p>
                  <span className="text-gray-400">Events</span>
                </motion.div>
                <motion.div
                  className="backdrop-blur-sm p-6 rounded-xl bg-gray-800/50 border border-red-600/50 flex flex-col items-center"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px rgba(255,0,0,0.2)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <Users2 className="w-8 h-8 text-red-600 mb-2" />
                  <p className="text-2xl font-bold text-white">
                    {club.members}+
                  </p>
                  <span className="text-gray-400">Members</span>
                </motion.div>
                <motion.div
                  className="backdrop-blur-sm p-6 rounded-xl bg-gray-800/50 border border-red-600/50 flex flex-col items-center"
                  whileHover={{
                    y: -5,
                    boxShadow: "0 10px 20px rgba(255,0,0,0.2)",
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Album className="w-8 h-8 text-red-600 mb-2" />
                  <p className="text-2xl font-bold text-white">
                    {club.projects}+
                  </p>
                  <span className="text-gray-400">Projects</span>
                </motion.div>
              </div>
            </div>
            <motion.div
              className="relative h-80 rounded-lg overflow-hidden border-2 border-red-600 shadow-lg"
              style={{ y: y1 }}
              whileHover={{ scale: 1.02 }}
            >
              <Image
                src={club.image}
                alt={`${club.name} featured image`}
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Combined Club Team Section */}
      <section className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-4xl md:text-5xl font-bold text-center mb-16 text-red-600 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Team
          </motion.h2>
          <div className="max-w-6xl mx-auto space-y-12">
            {/* First Row: 2 Heads */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {heads.map((member, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-gradient-to-t from-gray-900 to-gray-800 rounded-2xl p-6 shadow-lg border border-red-600/30 relative z-10 overflow-hidden">
                    <div className="absolute -top-px left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 rounded-b-xl shadow-md">
                      <span className="text-white text-sm font-medium">
                        {member.role}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="pt-6 relative z-10">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-red-200/50 group-hover:ring-red-400 transition-all duration-300 flex justify-center items-center">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="h-12 w-12 text-gray-400" />
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-2">
                        {member.name}
                      </h3>
                      <div className="flex justify-center">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-500 mt-2 hover:text-red-400 rounded-full px-4 py-1 border border-red-500 flex items-center gap-1 hover:bg-red-500/10 transition-all duration-300"
                        >
                          <span className="flex gap-1 items-center">
                            LinkedIn <ExternalLink className="w-4 h-4" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Second Row: 4 Coordinators */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coordinators.map((member, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: (index + 2) * 0.1 }} // Offset delay for second row
                  whileHover={{ scale: 1.05 }}
                >
                  <div className="bg-gradient-to-t from-gray-900 to-gray-800 rounded-2xl p-6 shadow-lg border border-red-600/30 relative z-10 overflow-hidden">
                    <div className="absolute -top-px left-1/2 -translate-x-1/2 px-4 py-1 bg-red-600 rounded-b-xl shadow-md">
                      <span className="text-white text-sm font-medium">
                        {member.role}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-br from-red-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <div className="pt-6 relative z-10">
                      <div className="w-24 h-24 md:w-28 md:h-28 rounded-full overflow-hidden mx-auto mb-4 ring-4 ring-red-200/50 group-hover:ring-red-400 transition-all duration-300 flex justify-center items-center">
                        {member.image ? (
                          <Image
                            src={member.image}
                            alt={member.name}
                            width={112}
                            height={112}
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <User className="h-12 w-12 text-gray-400" />
                        )}
                      </div>
                      <h3 className="text-xl md:text-2xl font-bold text-white text-center mb-2">
                        {member.name}
                      </h3>
                      <div className="flex justify-center">
                        <a
                          href={member.linkedin}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-red-500 mt-2 hover:text-red-400 rounded-full px-4 py-1 border border-red-500 flex items-center gap-1 hover:bg-red-500/10 transition-all duration-300"
                        >
                          <span className="flex gap-1 items-center">
                            LinkedIn <ExternalLink className="w-4 h-4" />
                          </span>
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
