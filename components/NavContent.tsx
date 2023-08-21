"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavContent = () => {
  const router = useRouter();

  return (
    <div className="flex items-center w-full justify-between">
      <div className="flex items-center space-x-2">
        <Image
          src={"/logo.jpg"}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full shadow-md bg-slate-50 cursor-pointer"
          onClick={() => (window.location.href = "/")}
        />
        <h2 className="font-bold uppercase text-lg">Ns3</h2>
      </div>

      <div className="space-x-3 hidden sm:flex">
        <span
          onClick={() => router.push("/")}
          className="text-sky-500 uppercase hover:text-sky-600 font-light cursor-pointer"
        >
          Home
        </span>
        <span
          onClick={() => router.push("/about")}
          className="text-sky-500 uppercase hover:text-sky-600 font-light cursor-pointer"
        >
          About
        </span>
        <span
          onClick={() => router.push("/games")}
          className="text-sky-500 uppercase hover:text-sky-600 font-light cursor-pointer"
        >
          Games
        </span>
      </div>
    </div>
  );
};

export default NavContent;
