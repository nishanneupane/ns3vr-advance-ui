"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

const NavContent = () => {
  const router = useRouter();

  return (
    <div className="flex items-center w-full justify-between py-2 px-6">
      <div className="flex items-center space-x-2 cursor-pointer" onClick={() => router.push("/")}>
        <Image
          src={"/logo.jpg"}
          alt="logo"
          width={50}
          height={50}
          className="rounded-full shadow-md bg-slate-50"
        />
        <h2 className="font-bold uppercase text-lg text-white">Ns3</h2>
      </div>

      <div className="space-x-6 hidden sm:flex">
        <span
          onClick={() => router.push("/")}
          className="text-gray-300 uppercase hover:text-sky-500 font-light cursor-pointer transition-colors duration-300"
        >
          Home
        </span>
        <span
          onClick={() => router.push("/about")}
          className="text-gray-300 uppercase hover:text-sky-500 font-light cursor-pointer transition-colors duration-300"
        >
          About
        </span>
        <span
          onClick={() => router.push("/games")}
          className="text-gray-300 uppercase hover:text-sky-500 font-light cursor-pointer transition-colors duration-300"
        >
          Games
        </span>
      </div>
    </div>
  );
};

export default NavContent;
