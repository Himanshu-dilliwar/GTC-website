import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import AuthProvider from "./provider/Auth-provider";
import Template from "./template";
import Stairs from "@/components/stairs";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "GTC",
  description: "Galogotias Tech Council Website.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-no-repeat bg-cover bg-center bg-fixed custom-scrollbar bg-background overflow-x-hidden`}
      >
        <AuthProvider>
          <Stairs />
          <Template>{children} </Template>
        </AuthProvider>
      </body>
    </html>
  );
}
