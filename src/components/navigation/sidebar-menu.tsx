"use client";
import React, { useEffect, useMemo, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { ChevronRight, Menu } from "lucide-react";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import Link from "next/link";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "../ui/alert-dialog";
import { signOut } from "next-auth/react";

type Props = {
  defaultOpen?: boolean;
  name: string;
};

const MenuOptions = ({ defaultOpen, name }: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  const openState = useMemo(
    () => (defaultOpen ? { open: true } : {}),
    [defaultOpen],
  );

  const pathname = usePathname();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return;
  return (
    <Sheet modal={false} {...openState}>
      <SheetTrigger asChild className="absolute left-4 top-4 z-40 md:!hidden">
        <Button variant="outline" size={"icon"}>
          <Menu />
        </Button>
      </SheetTrigger>
      <SheetContent
        showX={!defaultOpen}
        side={"left"}
        className={clsx(
          "bg-muted-foreground/50 backdrop-blur-xl fixed top-0 border-r-[1px] p-6 h-full",
          {
            "hidden md:inline-block z-0 w-[200px]": defaultOpen,
            "inline-block md:hidden z-40 w-full": !defaultOpen,
          },
        )}
      >
        <div className="h-full flex flex-col justify-between">
          <h1 className="italic text-xl">{`Welcome, ${name}`}</h1>
          <ul className="flex flex-col items-start justify-center w-full text-2xl">
            <Link
              href={"/dashboard"}
              className={`p-1 border-b-2 border-black w-full flex justify-between items-center cursor-pointer mb-5 animate-slidein opacity-0 [--slidein-delay:300ms] group hover:bg-black/20 ${
                pathname == "/dashboard" ? "bg-black/10" : ""
              }`}
            >
              Dashboard
              <ChevronRight className="group-hover:translate-x-1 duration-200" />
            </Link>
            <Link
              href={"/task"}
              className={`p-1 border-b-2 border-black w-full flex justify-between items-center cursor-pointer mb-5 animate-slidein opacity-0 [--slidein-delay:500ms] group hover:bg-black/20  ${
                pathname == "/task" ? "bg-black/10" : ""
              }`}
            >
              Task
              <ChevronRight className="group-hover:translate-x-1 duration-200" />
            </Link>
            <Link
              href={"/members"}
              className={`p-1 border-b-2 border-black w-full flex justify-between items-center cursor-pointer mb-5 animate-slidein opacity-0 [--slidein-delay:700ms] group hover:bg-black/20  ${
                pathname == "/members" ? "bg-black/10" : ""
              }`}
            >
              Members
              <ChevronRight className="group-hover:translate-x-1 duration-200" />
            </Link>
            <Link
              href={"/club"}
              className={`p-1 border-b-2 border-black w-full flex justify-between items-center cursor-pointer mb-5 animate-slidein opacity-0 [--slidein-delay:900ms] group hover:bg-black/20  ${
                pathname == "/club" ? "bg-black/10" : ""
              }`}
            >
              Club
              <ChevronRight className="group-hover:translate-x-1 duration-200" />
            </Link>
          </ul>
          <AlertDialog>
            <AlertDialogTrigger>
              <Button
                variant={"outline"}
                className="w-full bg-muted-foreground/20 text-xl"
              >
                Logout
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent className="bg-muted-foreground">
              <AlertDialogHeader>
                <AlertDialogTitle>You want to Logout!</AlertDialogTitle>
                <AlertDialogDescription className="text-muted">
                  Are you sure you want to logout of your current session.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogAction
                  className="bg-black"
                  onClick={() => signOut()}
                >
                  Yes
                </AlertDialogAction>
                <AlertDialogCancel>No</AlertDialogCancel>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MenuOptions;
