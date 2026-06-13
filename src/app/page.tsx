"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

const Start = () => {
  const router = useRouter();

  useEffect(() => {
    try {
      router.push("/home");
    } catch (error) {
      console.error("Navigation error:", error);
    }
  }, [router]);

  return null;
};

export default Start;
