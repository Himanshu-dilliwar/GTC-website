"use client";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import React from "react";
import ProfileCard from "@/components/Cards/ProfileCard";
import Image from "next/image";
import Council_LOGO from "../../../public/GTC Logos/Council_LOGO.png";
import pic1 from "../../../public/core1.jpeg";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
const Page = () => {
  interface BranchCore {
    id: number;
    name: string;
    color: string;
    names: string[];
    photo: string;
  }
  const branchCores: BranchCore[] = [
    {
      id: 1,
      name: "Engineering & Tech",
      color: "group-hover:bg-blue-600",
      names: [
        "Ishita Verma",
        "Shobhit Gupta",
        "Ali Hamza",
        "Kumar Aditya",
        "Rohit Rajshekar",
        "Shewtank Gupta",
        "Ayush Kumar Singh",
        "Karan Tandon",
      ],
      photo:
        "https://instagram.fdel32-1.fna.fbcdn.net/v/t51.29350-15/474750277_1630077597877516_7741268072471516270_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdel32-1.fna.fbcdn.net&_nc_cat=104&_nc_oc=Q6cZ2AFVzqHCBIbAck13sxYutjtN__PXJBDqkgL4upmz2oKokEifhAdAd2LapOD0Mj954zE&_nc_ohc=r0Y7Z_1VWVkQ7kNvgG2xu8Q&_nc_gid=30b4247993c5458db23345374fd345b6&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzU1MTg2MzQ3MDAyOTQzNDg0OQ%3D%3D.3-ccb7-5&oh=00_AYBa7Q9MKirHQEBRN6qAPShaHwylRID_Io7i-Go6oB6UKA&oe=67B8A7F4&_nc_sid=22de04",
    },
    {
      id: 2,
      name: "Science",
      color: "group-hover:bg-red-500",
      names: ["Jane Smith"],
      photo:
        "https://instagram.fdel32-1.fna.fbcdn.net/v/t51.29350-15/475423654_939313814833501_582138057284941896_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdel32-1.fna.fbcdn.net&_nc_cat=101&_nc_oc=Q6cZ2AH91f8EuY7lF30GJ-gCTfdqryu_mqeW5nqVBLU1-H6Ql1zcccmJwbjqSeUKeqJUJ90&_nc_ohc=XNTUUi7vLb0Q7kNvgFXxcy7&_nc_gid=3f2825b8361e43e981a6bcbddd3eb0e3&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzU1NDkxODMwMDQ0MDUzODA4OA%3D%3D.3-ccb7-5&oh=00_AYDi96nogDdf4alqcwLnklHEADWkpCXImNpfcUxltEvOoA&oe=67B89931&_nc_sid=22de04",
    },
    {
      id: 3,
      name: "Non Tech",
      color: "group-hover:bg-blue-900",
      names: ["Mark Johnson"],
      photo:
        "https://instagram.fdel32-1.fna.fbcdn.net/v/t51.29350-15/475931864_668641012160757_3777358808452113365_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdel32-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2AFJPloCa2KKhd-iXK3N23Z8BmMv7aU7fx1cqtRvVZRrZljSq36iqAjqsA6vCAitq_M&_nc_ohc=1aXkW5lfP0UQ7kNvgEUYRKN&_nc_gid=4b00afebc71b408eb7c05d4072d13ade&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzU1Nzg5NDY1NzQ0NTU1NTQxMw%3D%3D.3-ccb7-5&oh=00_AYC36NQzG68FkfIHSAbVQ_qIq1MGo-Ox-MOBZ_9OFxQlfg&oe=67B8AE12&_nc_sid=22de04",
    },
    {
      id: 4,
      name: "Humanities",
      color: "group-hover:bg-green-500",
      names: ["John Doe"],
      photo:
        "https://instagram.fdel32-1.fna.fbcdn.net/v/t51.29350-15/475931864_668641012160757_3777358808452113365_n.heic?stp=dst-jpg_e35_tt6&efg=eyJ2ZW5jb2RlX3RhZyI6ImltYWdlX3VybGdlbi4xNDQweDE0NDAuc2RyLmYyOTM1MC5kZWZhdWx0X2ltYWdlIn0&_nc_ht=instagram.fdel32-1.fna.fbcdn.net&_nc_cat=109&_nc_oc=Q6cZ2AFJPloCa2KKhd-iXK3N23Z8BmMv7aU7fx1cqtRvVZRrZljSq36iqAjqsA6vCAitq_M&_nc_ohc=1aXkW5lfP0UQ7kNvgEUYRKN&_nc_gid=4b00afebc71b408eb7c05d4072d13ade&edm=APoiHPcBAAAA&ccb=7-5&ig_cache_key=MzU1Nzg5NDY1NzQ0NTU1NTQxMw%3D%3D.3-ccb7-5&oh=00_AYC36NQzG68FkfIHSAbVQ_qIq1MGo-Ox-MOBZ_9OFxQlfg&oe=67B8AE12&_nc_sid=22de04",
    },
  ];

  React.useEffect(() => {
    document.querySelector("body")?.classList.add("BGSVG4");
    return () => document.querySelector("body")?.classList.remove("BGSVG4");
  });

  return (
    <MaxWidthWrapper>
      <div className="flex flex-col">
        <div className="flex justify-evenly mt-6">
          <div className="flex flex-col justify-center w-1/2">
            <div
              className="border-2 border-white h-[50vh] rounded-xl justify-between flex items-end"
              style={{
                backgroundImage: `url(${pic1.src})`,
                backgroundSize: "cover",
              }}
            >
              <div className="flex justify-between w-full mx-12 mb-10">
                <div className="text-5xl font-sans uppercase tracking-tighter">
                  Galgotias <br /> Tech <br />
                  Council
                </div>
              </div>
            </div>
            <div className="text-center flex justify-between space-x-9 mt-6">
              <div className="bg-gray-800 w-1/2 h-[30vh] rounded-xl border-white border-2 justify-between flex items-start text-5xl uppercase flex-col p-10">
                <div>Members</div>
                <div className="w-full text-right">
                  <div className="flex justify-between">
                    <div />
                    <div className="flex">
                      1500+ &nbsp;
                      <div className="rounded-full bg-gray-400 p-2 text-black text-2xl">
                        {">"}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <Link href="/council/clubs">
                <div className="bg-gray-400 flex items-center justify-center h-[25vh] rounded-xl border-white border-2 uppercase text-2xl flex-col p-4 cursor-pointer">
                  <div className="flex justify-center items-center">
                    Explore Our Clubs <ChevronRight className="h-12 w-12" />
                  </div>
                </div>
              </Link>
            </div>
          </div>
          <div className="relative text-center items-center justify-between flex flex-col w-1/3 -ml-20">
            <div className="flex w-full justify-between items-center space-x-6">
              <div className="flex items-center justify-center border-2 border-white rounded-xl text-center bg-gray-400 w-1/2 h-[40vh]">
                {" "}
                top left{" "}
              </div>
              <div className="flex items-center border-2 border-white justify-center rounded-xl text-center bg-gray-600 w-1/2 h-[40vh]">
                {" "}
                top right{" "}
              </div>
            </div>
            <div className="absolute h-full w-full  flex justify-center items-center">
              <Image
                src={Council_LOGO.src}
                alt="Council logo"
                width={200}
                height={200}
                className="bg-white rounded-full border-2 border-black"
              />
            </div>
            <div className="flex w-full space-x-6">
              <div className="flex items-center justify-center border-2 border-white rounded-xl text-center bg-gray-800 w-1/2 h-[40vh]">
                {" "}
                bottom left{" "}
              </div>
              <div className="flex items-center border-2 border-white justify-center rounded-xl text-center bg-gray-300 w-1/2 h-[40vh]">
                {" "}
                bottom right{" "}
              </div>
            </div>
          </div>
        </div>
        <div className="text-6xl text-center flex items-center justify-center relative">
          <div className="absolute text-white font-aero top-40">Community</div>
          <svg
            viewBox="0 0 1515 467"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <foreignObject
              x="-81.5887"
              y="-372.7"
              width="1677.18"
              height="883.4"
            >
              <div
                style={{
                  backdropFilter: "blur(21.85px)",
                  clipPath: "url(#bgblur_0_133_231_clip_path)",
                  height: "100%",
                  width: "100%",
                }}
              ></div>
            </foreignObject>
            <path
              data-figma-bg-blur-radius="43.7"
              d="M757 -329L840.205 -326.82L922.498 -320.303L1002.98 -309.521L1080.76 -294.591L1155 -275.678L1224.88 -252.989L1289.63 -226.772L1348.54 -197.314L1400.98 -164.939L1446.36 -130L1484.18 -92.8812L1501.04 -70.9247C1509.69 -59.6528 1517.41 -47.6948 1524.13 -35.1693L1525.87 -31.9232C1532.35 -19.833 1537.69 -7.16841 1541.83 5.90807L1542.42 7.77811C1546.56 20.8243 1549.36 34.2554 1550.78 47.8659V47.8659C1552.26 61.9168 1552.26 76.0832 1550.78 90.1341V90.1341C1549.36 103.745 1546.56 117.176 1542.42 130.222L1541.83 132.092C1537.69 145.168 1532.35 157.833 1525.87 169.923L1524.13 173.169C1517.41 185.695 1509.69 197.653 1501.04 208.925L1484.18 230.881L1446.36 268L1400.98 302.939L1348.54 335.314L1289.63 364.772L1224.88 390.989L1155 413.678L1080.76 432.591L1002.98 447.521L922.498 458.303L840.205 464.82L757 467L673.795 464.82L591.502 458.303L511.022 447.521L433.238 432.591L359 413.678L289.123 390.989L224.372 364.772L165.457 335.314L113.022 302.939L67.6438 268L29.8178 230.881L12.9612 208.925C4.30742 197.653 -3.41392 185.695 -10.1263 173.169L-11.8659 169.923C-18.345 157.833 -23.6899 145.168 -27.8322 132.092L-28.4245 130.222C-32.5572 117.176 -35.3582 103.745 -36.7848 90.1341V90.1341C-38.2576 76.0832 -38.2576 61.9168 -36.7848 47.8659V47.8659C-35.3582 34.2554 -32.5572 20.8243 -28.4245 7.77813L-27.8322 5.90808C-23.6899 -7.1684 -18.345 -19.833 -11.8659 -31.9232L-10.1263 -35.1694C-3.41391 -47.6948 4.30742 -59.6528 12.9612 -70.9247L29.8178 -92.8812L67.6438 -130L113.022 -164.939L165.457 -197.314L224.372 -226.772L289.123 -252.989L359 -275.678L433.238 -294.591L511.022 -309.521L591.502 -320.303L673.795 -326.82L757 -329Z"
              fill="#242121"
            />
            <defs>
              <clipPath id="bgblur_0_133_231_clip_path">
                <path
                  transform="translate(81.5887 372.7)"
                  d="M757 -329L840.205 -326.82L922.498 -320.303L1002.98 -309.521L1080.76 -294.591L1155 -275.678L1224.88 -252.989L1289.63 -226.772L1348.54 -197.314L1400.98 -164.939L1446.36 -130L1484.18 -92.8812L1501.04 -70.9247C1509.69 -59.6528 1517.41 -47.6948 1524.13 -35.1693L1525.87 -31.9232C1532.35 -19.833 1537.69 -7.16841 1541.83 5.90807L1542.42 7.77811C1546.56 20.8243 1549.36 34.2554 1550.78 47.8659V47.8659C1552.26 61.9168 1552.26 76.0832 1550.78 90.1341V90.1341C1549.36 103.745 1546.56 117.176 1542.42 130.222L1541.83 132.092C1537.69 145.168 1532.35 157.833 1525.87 169.923L1524.13 173.169C1517.41 185.695 1509.69 197.653 1501.04 208.925L1484.18 230.881L1446.36 268L1400.98 302.939L1348.54 335.314L1289.63 364.772L1224.88 390.989L1155 413.678L1080.76 432.591L1002.98 447.521L922.498 458.303L840.205 464.82L757 467L673.795 464.82L591.502 458.303L511.022 447.521L433.238 432.591L359 413.678L289.123 390.989L224.372 364.772L165.457 335.314L113.022 302.939L67.6438 268L29.8178 230.881L12.9612 208.925C4.30742 197.653 -3.41392 185.695 -10.1263 173.169L-11.8659 169.923C-18.345 157.833 -23.6899 145.168 -27.8322 132.092L-28.4245 130.222C-32.5572 117.176 -35.3582 103.745 -36.7848 90.1341V90.1341C-38.2576 76.0832 -38.2576 61.9168 -36.7848 47.8659V47.8659C-35.3582 34.2554 -32.5572 20.8243 -28.4245 7.77813L-27.8322 5.90808C-23.6899 -7.1684 -18.345 -19.833 -11.8659 -31.9232L-10.1263 -35.1694C-3.41391 -47.6948 4.30742 -59.6528 12.9612 -70.9247L29.8178 -92.8812L67.6438 -130L113.022 -164.939L165.457 -197.314L224.372 -226.772L289.123 -252.989L359 -275.678L433.238 -294.591L511.022 -309.521L591.502 -320.303L673.795 -326.82L757 -329Z"
                />
              </clipPath>
            </defs>
          </svg>
        </div>

        <div id="main">
          <h1 className="text-6xl font-thin uppercase  my-8 mt-24 text-white font-aero">
            Core Team
          </h1>
          <div className="flex flex-col mx-10 bg-white/40 p-4 rounded-xl">
            <div className="flex justify-between">
              <ProfileCard Name="Kumar Tejaswee" post="Member" />
              <ProfileCard Name="Kumar Tejaswee" post="Member" />
            </div>
            <div className="flex justify-center items-center">
              <ProfileCard Name="Kumar Tejaswee" post="Member" />
            </div>
            <div className="flex justify-between">
              <ProfileCard Name="Kumar Tejaswee" post="Member" />
              <ProfileCard Name="Kumar Tejaswee" post="Member" />
            </div>
          </div>
          <div>
            <h1 className="text-6xl font-thin uppercase my-8 mt-24 text-white font-aero">
              Branch Core Teams
            </h1>

            {branchCores.map((club) => (
              <div
                key={club.id}
                className="relative w-full h-[200px] group overflow-hidden"
              >
                <div
                  className={`absolute inset-0  bg-black $ bg-cover blur-sm bg-center opacity-90 group-hover:opacity-100 group-hover:scale-110 group-hover:md:filter-none transition-all duration-500 transform origin-center`}
                ></div>

                <div className="absolute inset-0 flex justify-center items-center group-hover:scale-110 transition-all duration-500 group-hover:hidden">
                  <p className="text-white font-bold text-xl">{club.name}</p>
                </div>
                <div className="absolute inset-0 justify-between items-center transition-all duration-500 hidden group-hover:flex pl-10">
                  <ul className="w-1/2 text-white list-disc">
                    {club.names.map((name, idx) => (
                      <li key={idx}>{name}</li>
                    ))}
                  </ul>
                  <div className="rounded-r-full">
                    <Image
                      src={club.photo}
                      alt={club.name}
                      width={300}
                      height={300}
                      className="rounded-l-full border-white border-l-2"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="flex items-center justify-center my-8">
            <svg
              width="870"
              height="32"
              viewBox="0 0 870 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="18"
                y1="15.5"
                x2="855"
                y2="15.5"
                stroke="white"
                strokeWidth="3"
              />
              <circle cx="15" cy="15" r="14.5" fill="white" stroke="white" />
              <circle cx="295" cy="17" r="14.5" fill="white" stroke="white" />
              <circle cx="575" cy="17" r="14.5" fill="white" stroke="white" />
              <circle cx="855" cy="15" r="14.5" fill="white" stroke="white" />
            </svg>
          </div>
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Page;
