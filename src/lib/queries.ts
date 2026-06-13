import { authOptions } from "@/app/api/auth/[...nextauth]/auth";
import { getServerSession } from "next-auth";
import prisma from "../../prisma/src";

export const UserInfo = async () => {
  const session = await getServerSession(authOptions);
  if (!session?.user?.name) return;

  const data = await prisma.user.findFirst({
    where: {
      name: session?.user?.name,
    },
  });

  return data;
};
