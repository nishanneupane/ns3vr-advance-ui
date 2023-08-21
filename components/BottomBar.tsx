"use client";
import { HomeIcon, MessageSquare, GroupIcon, GamepadIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const BottomBar = () => {
  const [active, setActive] = useState(0);
  const router=useRouter();
  return (
    <div className="sm:hidden fixed bottom-0 w-full bg-gray-800 p-3 z-50">
      <div className="flex items-center justify-around">
        <span
          onClick={() => {
            setActive(0)
            router.push("/")
          }}
          className={`text-xl font-bold text-sky-500 hover:text-sky-600 cursor-pointer ${
            active==0 ? "border-b-2 border-sky-500" : null
          }`}
        >
          <HomeIcon className="text-lg" />
        </span>
        <span
          onClick={() => {
            setActive(1)
            router.push("/about")
          }}
          className={`text-xl font-bold text-sky-500 hover:text-sky-600 cursor-pointer ${
            active==1 ? "border-b-2 border-sky-500" : null
          }`}
        >
          <MessageSquare className="text-lg" />
        </span>
        <span
          onClick={() => {
            setActive(2)
            router.push("/games")
          }}
          className={`text-xl font-bold text-sky-500 hover:text-sky-600 cursor-pointer ${
            active==2 ? "border-b-2 mb-2 border-sky-500" : null
          }`}
        >
          <GamepadIcon className="text-lg" />
        </span>
      </div>
    </div>
  );
};

export default BottomBar;
