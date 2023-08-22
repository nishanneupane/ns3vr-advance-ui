"use client"
import BookGame from "@/components/BookGame";
import { gamesList } from "@/constants/gamelists/page";
import { SearchIcon } from "lucide-react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import GameItem from "@/components/GameItem";

type Game = {
  id: number;
  name: string;
  price: string;
  duration: string;
  image: string;
};

const Games = () => {
  const [text, setText] = useState("");
  const [filteredGames, setFilteredGames] = useState<Game[]>([]);
  const [selectedGame, setSelectedGame] = useState<any>([]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchText = e.target.value.toLowerCase();
    setText(searchText);

    const filteredGames_ = gamesList.filter((game) =>
      game.name.toLowerCase().includes(searchText)
    );

    setFilteredGames(filteredGames_);
  };

  return (
    <div className="h-full px-12 py-3">
      <div className="py-6 text-center">
        <h2 className="font-bold text-3xl text-white">
          Book the Game and <span className="text-sky-500">Enjoy</span> the day
        </h2>
      </div>

      <div className="flex mt-4 space-x-4 bg-gray-800 w-full sm:w-[60%] m-auto p-3 px-5 rounded-full">
        <SearchIcon className="text-gray-500" />
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search"
          value={text}
          className="bg-transparent outline-none text-gray-50"
        />
      </div>

      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-8"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } },
        }}
      >
        {(filteredGames.length > 0 ? filteredGames : gamesList).map((item) => (
          <motion.div
            key={item.id}
            onClick={() => {
              (window as any).my_modal_4.showModal();
              setSelectedGame(item);
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.5 } }}
          >
            <GameItem item={item} selectedGame={selectedGame} />
          </motion.div>
        ))}
      </motion.div>
      <dialog id="my_modal_4" className="modal bg-gray-800">
        <BookGame selectedGame={selectedGame} />
      </dialog>
    </div>
  );
};

export default Games;
