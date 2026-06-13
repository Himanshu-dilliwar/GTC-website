import Link from "next/link";
import Image from "next/image";

const clubs = [
  {
    slug: "web-dev-club",
    name: "Web Development Club",
    logo: "/WEB DEVELOPMENT (1).png",
    description:
      "The Web Development Club at Galgotias Tech Council is a community of passionate developers dedicated to building innovative web solutions. We focus on hands-on learning, real-world projects, and collaborative problem-solving to enhance web development skills and create impactful digital experiences.",
  },
  {
    slug: "web-dev-club",
    name: "AI ML Club",
    logo: "/WEB DEVELOPMENT (1).png",
    description:
      "The Web Development Club at Galgotias Tech Council is a community of passionate developers dedicated to building innovative web solutions. We focus on hands-on learning, real-world projects, and collaborative problem-solving to enhance web development skills and create impactful digital experiences.",
  },
  {
    slug: "web-dev-club",
    name: "Mobile Development Club",
    logo: "/WEB DEVELOPMENT (1).png",
    description:
      "The Web Development Club at Galgotias Tech Council is a community of passionate developers dedicated to building innovative web solutions. We focus on hands-on learning, real-world projects, and collaborative problem-solving to enhance web development skills and create impactful digital experiences.",
  },
];

export default function page() {
  return (
    <div className="min-h-screen bg-gray-900 px-4 py-8">
      <h1 className="text-4xl md:text-5xl text-red-600 font-bold text-center mb-12 uppercase tracking-wider">
        Explore Our Clubs
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {clubs.map((club) => (
          <Link
            href={`/council/clubs/${club.slug}`}
            key={club.slug}
            className="group"
          >
            <div className="bg-gray-800 border-2 border-red-600 rounded-lg p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-[0_5px_15px_rgba(255,0,0,0.3)]">
              <div className="flex justify-center mb-4">
                <Image
                  src={club.logo}
                  alt={`${club.name} logo`}
                  width={100}
                  height={100}
                  className="rounded-full border-2 border-red-600 p-1 bg-white"
                />
              </div>
              <h2 className="text-xl text-white font-semibold text-center mb-2">
                {club.name}
              </h2>
              <p className="text-gray-300 text-sm text-center line-clamp-3">
                {club.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
