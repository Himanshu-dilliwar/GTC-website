"use client";
import { ArrowRight, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import GTC from "../../../public/GTC Full Logo.png";
import { TypewriterEffectSmooth } from "@/components/typewriter-effect";
import { Card } from "@/components/Card";
import { SubmitHandler, useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

type FormFields = {
  Name: string;
  AdmNo: string;
  password: string;
};

const Page = () => {
  const router = useRouter();
  const { register, handleSubmit, reset } = useForm<FormFields>();
  const words = [
    {
      text: "Tech",
      className: "text-6xl",
    },
    {
      text: "Council",
      className: "text-6xl",
    },
  ];

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    console.log(data);
    signIn("credentials", data);
    reset();
    router.push("/dashboard");
  };

  return (
    <div className="h-full w-full relative">
      <nav className="w-full p-2">
        <Link
          href={"/"}
          className="text-black text-xl uppercase flex items-center bg-primary w-[100px] rounded-xl group border-2 shadow-xl border-black"
        >
          <ChevronLeft
            size={30}
            className="group-hover:-translate-x-1 duration-200 shadow-lg"
          />{" "}
          Back
        </Link>
      </nav>
      <div className="grid grid-cols-2 h-[90vh]">
        <div className="w-full flex flex-col">
          <div className="text-8xl flex flex-col items-start justify-center h-full font-[600] px-10">
            <h3 className="text-6xl italic">Welcome to</h3>
            <h3 className="font-bold">Galgotias</h3>
            <TypewriterEffectSmooth words={words} />
          </div>
        </div>
        <div className="border border-border rounded-2xl mr-5 p-20 h-full BoxShadowGrid bg-primary flex flex-col items-center justify-center">
          <div className="bg-muted rounded-3xl p-4 animate-slidein opacity-0 [--slidein-delay:500ms]">
            <h2 className="text-2xl w-full font-[400]">Fill your details</h2>
            <p className="text-sm text-muted-foreground">
              If you are a member fill in you details for access to the council
              Dashboard otherwise for newcomers please register first and clear
              the interview
            </p>
          </div>
          <Card classname="bg-white mt-2 w-full rounded-3xl p-4 shadow-lg animate-slidein opacity-0 [--slidein-delay:700ms]">
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                {...register("Name", { required: true })}
                className="w-full rounded-full border border-border p-2 mb-4"
                placeholder="Name"
              />
              <input
                {...register("AdmNo", { required: true })}
                className="w-full rounded-full border border-border p-2 mb-4"
                placeholder="Admission Number"
              />
              <input
                {...register("password", { required: true })}
                className="w-full rounded-full border border-border p-2 mb-4"
                placeholder="Password"
              />
              <button
                className={`bg-gradient-to-br relative group/btn  bg-zinc-800 hover:text-black w-full hover:bg-[#3333] duration-200 text-white rounded-full h-10 font-medium shadow-[0px_5px_0px_0px_var(--zinc-800)_inset,0px_-5px_0px_0px_var(--zinc-800)_inset]`}
                type="submit"
                // disabled={true}
              >
                {/* {(!isLoad) ? (done ? <div className="flex justify-center items-center"><Check className="rounded-full mx-1 bg-green-400" />Done</div> : "Send") : <LoaderCircle className="mx-auto loader text-[#00e5ff]" />} */}
                Submit
                <BottomGradient />
              </button>
            </form>
          </Card>
          <div className="bg-white mt-5 p-2 rounded-xl flex group cursor-pointer animate-slidein opacity-0 [--slidein-delay:900ms]">
            Register{" "}
            <ArrowRight className="group-hover:translate-x-1 duration-200" />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 animate-slidein opacity-0 [--slidein-delay:300ms]">
        <Image
          src={GTC}
          width={150}
          height={150}
          alt="Logo"
          className="h-[5%] w-auto rounded-xl ml-4 border-2 border-border"
        />
      </div>
    </div>
  );
};

export default Page;

const BottomGradient = () => {
  return (
    <>
      <span className="group-hover/btn:opacity-100 block transition duration-500 opacity-0 absolute h-px w-full -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-cyan-500 to-transparent" />
      <span className="group-hover/btn:opacity-100 blur-sm block transition duration-500 opacity-0 absolute h-px w-1/2 mx-auto -bottom-px inset-x-10 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
    </>
  );
};
