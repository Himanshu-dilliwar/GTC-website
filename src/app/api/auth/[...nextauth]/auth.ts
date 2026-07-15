import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "../../../../../prisma/src/index";
import { AuthOptions } from "next-auth";
import bcrypt from "bcrypt";

export const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      name: "User auth info",
      credentials: {
        name: { label: "Username", type: "text", placeholder: "name" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
        AdmNo: {
          label: "AdmissionNO",
          type: "text",
          placeholder: "Admission No.",
        },
      },
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      async authorize(credentials: any) {
        const hashpass = await bcrypt.hash(credentials.password, 10);
        const existingUser = await prisma.user.findFirst({
          where: {
            AdmNo: credentials.AdmNo,
          },
        });

        if (existingUser) {
          const passwordValid = await bcrypt.compare(
            credentials.password,
            existingUser.password,
          );
          if (passwordValid) {
            return existingUser;
          }
          return null;
        }

        try {
          const user = await prisma.user.create({
            data: {
              name: credentials.name,
              AdmNo: credentials.AdmNo,
              password: hashpass,
            },
          });

          return user;
        } catch {
          console.error("Cant login due to some error in data base query");
        }
        return null;
      },
    }),
  ],
  secret: process.env.JWT_SECRET || "secret",
  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ token, session }: any) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.role = token.role;
      }
      // console.log(session)
      return session;
    },
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, user }: any) {
      if (user) {
        token.id = user.id?.toString();
        token.name = user?.name;
        token.role = user?.role;
      }
      // console.log(token)
      return token;
    },
  },
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/signup",
  },
};
