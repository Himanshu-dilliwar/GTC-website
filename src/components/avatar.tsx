import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { getServerSession } from "next-auth";
import Link from "next/link";

const Avatar = async () => {
  const session = await getServerSession(authOptions);
  const username = session?.user?.name;

  if (!username) return;

  return (
    <Link
      href={"/dashboard"}
      className="border p-1 flex rounded-full bg-muted-foreground/50 border-border px-2 shadow-lg ml-2 cursor-pointer hover:translate-y-1 duration-150"
    >
      <div className="flex items-center justify-center">
        <div className="bg-background rounded-full h-10 w-10 mx-1 border-4 border-black text-lg text-center font-bold">
          {username.split(" ")[0].slice(0, 2)}
        </div>
        <div className="text-xl text-black">{username.split(" ")[0]}</div>
      </div>
    </Link>
  );
};

export default Avatar;
