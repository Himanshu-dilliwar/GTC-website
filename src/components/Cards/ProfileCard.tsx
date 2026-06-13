import { User } from "lucide-react";
import Image from "next/image";
import React from "react";

type Props = {
  Name?: string;
  post?: string;
  pic?: string;
};

const ProfileCard = ({ Name, post, pic }: Props) => {
  return (
    <div className="section_card bg-white/80 font-aero font-extralight border-4 border-black">
      <span>
        <i className="double_quote">
          <User size={40} className="text-orange" />
        </i>
      </span>
      <Image
        src={pic || "/"}
        width={80}
        height={80}
        alt="image"
        className="mx-auto border-black"
      />
      <h5>{Name}</h5>
      <h6>{post}</h6>
    </div>
  );
};

export default ProfileCard;
