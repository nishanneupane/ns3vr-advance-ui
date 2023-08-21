"use client";
import BookGame from "@/components/BookGame";
import GameItem from "@/components/GameItem";
import { gamesList } from "@/constants/gamelists/page";
import { SearchIcon } from "lucide-react";
import React, { useEffect, useState } from "react";

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

  const handleChange = (e: any) => {
    const searchText = e.target.value;
    setText(searchText);

    const filteredGames_ = gamesList.filter((game) =>
      game.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    );

    setFilteredGames(filteredGames_);
  };

  return (
    <>
      <div className="h-full px-12 py-3">
        <div className="py-2">
          <h2 className="text-center font-bold text-white text-3xl">
            Book the Game and
            <br />
            <span className="text-sky-500"> Enjoy </span>
            the day
          </h2>
        </div>

        <div className="mt-3 flex items-center justify-between bg-slate-800 p-2 py-3 rounded-full m-auto w-full sm:w-[60%] space-x-2 text-gray-500">
          <SearchIcon />
          <input
            onChange={handleChange}
            type="text"
            placeholder="Search"
            value={text}
            className="bg-transparent outline-none w-full text-gray-50"
          />
        </div>

        <div className=" pt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          {filteredGames.length > 0
            ? filteredGames.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    (window as any).my_modal_4.showModal();
                    setSelectedGame(item);
                  }}
                >
                  <GameItem item={item} selectedGame={selectedGame} />
                </div>
              ))
            : gamesList.map((item) => (
                <div
                  key={item.id}
                  onClick={() => {
                    (window as any).my_modal_4.showModal();
                    setSelectedGame(item);
                  }}
                >
                  <GameItem item={item} selectedGame={selectedGame} />
                </div>
              ))}
        </div>
        <dialog id="my_modal_4" className="modal bg-gray-800">
          <BookGame  selectedGame={selectedGame}/>
        </dialog>
      </div>
    </>
  );
};

export default Games;
