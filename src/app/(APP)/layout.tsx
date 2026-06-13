"use client";
import Navbar from "@/components/navigation/navbar";
import AppBar from "@/components/navigation/app-bar";
import Connect from "@/components/connect";
import FooterComp from "@/components/footer-comp";
import React from "react";
// import Mousepointer from "@/components/global/mousepointer";

export default function Layout({ children }: { children: React.ReactNode }) {
  const navref = React.useRef<HTMLDivElement>(null);
  return (
    <div className="">
      <Navbar navref={navref} />
      <AppBar navref={navref} />
      <Connect />
      <main className="relative">
        {/* <Mousepointer /> */}
        {children}
      </main>
      <FooterComp />
    </div>
  );
}
