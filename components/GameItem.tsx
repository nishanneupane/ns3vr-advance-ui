import { TimerIcon } from "lucide-react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const GameItem = ({ item }: any) => {
  return (
    <motion.div
      className="relative min-h-full p-2 bg-gray-800 flex flex-col items-center justify-center cursor-pointer rounded-md transform-gpu perspective-3d rotate-x-12 rotate-y-12 transition-transform duration-300"
      whileHover={{ scale: 1.08, rotateX: -10, rotateY: 10 }}
    >
      <div className="flex items-center justify-between w-full px-4 py-2">
        <h2 className="font-semibold text-lg text-gray-50">{item.name}</h2>
        <h2 className="font-light text-gray-300">${item.price}</h2>
      </div>
      <motion.div
        className="rounded-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
        whileHover={{ y: -5 }}
      >
        <Image
          src={item.image}
          width={300}
          height={400}
          alt={item.name}
          className="h-[250px] w-full"
        />
      </motion.div>
      <div className="py-2 flex items-center justify-center text-gray-500">
        <motion.span className="animate-pulse mr-1" whileHover={{ scale: 1.1 }}>
          <TimerIcon />
        </motion.span>
        <h2 className="text-gray-500">{item.duration}</h2>
      </div>
      <motion.div className="w-full py-2" whileHover={{ y: -3 }}>
        <button className="w-full bg-sky-500 hover:bg-sky-600 text-white font-semibold text-lg p-2 px-3 rounded-full transition-all duration-300">
          Book Now
        </button>
      </motion.div>
    </motion.div>
  );
};

export default GameItem;
