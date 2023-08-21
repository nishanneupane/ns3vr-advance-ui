"use client";
import { TimerIcon } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const GameItem = ({ item }: any) => {
  return (
    <>
      <div className="relative min-h-full p-2 bg-gray-800 flex flex-col items-center justify-center cursor-pointer rounded-md">
        <div className="flex items-center justify-between w-full px-4 py-2">
          <h2 className="font-semibold text-lg text-gray-50">{item.name}</h2>
          <h2 className="font-light text-gray-300">{item.price}</h2>
        </div>
        <Image
          src={item.image}
          width={300}
          height={400}
          alt={item.name}
          className="rounded-md h-[250px]"
        />
        <div className="py-2 flex items-center justify-center text-gray-500">
          <TimerIcon />
          <h2 className="text-gray-500">{item.duration}</h2>
        </div>

        <div className="w-full py-2">
          <button className="w-full bg-sky-500 text-white font-semibold font-sans text-lg p-2 px-3 rounded-full">
            Book Now
          </button>
        </div>
      </div>
    </>
  );
};

export default GameItem;
