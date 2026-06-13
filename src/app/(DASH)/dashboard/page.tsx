// import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { Card } from "@/components/Card";
import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { ChevronLeft } from "lucide-react";
// import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Dash = async () => {
  // const session = await getServerSession(authOptions);

  const username = "kloud47";
  const url = `https://api.github.com/users/${username}`;
  const token = process.env.GITHUB_TOKEN; // Optional: Token for higher rate limits

  const res = await fetch(url, {
    headers: token ? { Authorization: `token ${token}` } : {},
  });
  const profileData = await res.json();

  console.log(profileData.avatar_url);

  return (
    <MaxWidthWrapper>
      <Link
        href={"/"}
        className="absolute bg-[#386874] rounded-t-xl -translate-y-7 group"
      >
        <ChevronLeft
          color="white"
          size={40}
          className="group-hover:-translate-x-1 duration-150"
        />
      </Link>
      <div className="w-full BoxShadowGrid bg-primary rounded-2xl p-4 grid gap-2 grid-cols-3">
        <Card
          title="Profile"
          titleCSS="text-2xl"
          classname="col-span-3 rounded-xl bg-background border-none"
        >
          <div className="grid grid-cols-3">
            <Image
              src={`${profileData.avatar_url}`}
              alt={"ok"}
              width={250}
              height={250}
              className="rounded-full border-[10px] border-border shadow-xl mx-auto"
            />
            <div>
              <h1 className="flex justify-center text-2xl">
                {profileData.name}
              </h1>
            </div>
          </div>
          {/* <p>Bio: {profileData.bio}</p>
          <p>Followers: {profileData.followers}</p>
          <p>Following: {profileData.following}</p>
          <a href={profileData.html_url} target="_blank">
            View Profile on GitHub
          </a> */}
        </Card>
        <Card
          title="Github"
          titleCSS="text-2xl"
          classname="col-span-3 rounded-xl bg-background/50 border-none"
        >
          ok
        </Card>
      </div>
    </MaxWidthWrapper>
  );
};

export default Dash;
