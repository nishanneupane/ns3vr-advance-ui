import GameBookForm from "./GameBookForm";
import GameItem from "./GameItem";

const BookGame = ({selectedGame}:any) => {
  return (
    <form method="dialog" className="modal-box w-11/12 max-w-5xl bg-gray-800">
      <div className="border-b-[1px] pb-2 ">        
        <button className="btn btn-sm btn-ghost absolute right-2 top-2 hover:bg-transparent text-gray-400">
          ✕
        </button>
      </div>
      <div
        className="grid grid-cols-1
      md:grid-cols-2 p-5"
      >
        <div>
          <GameItem item={selectedGame}/>
        </div>
        <div className="flex items-center justify-center px-5">
          <GameBookForm game={selectedGame} />
        </div>
      </div>
    </form>
  );
};

export default BookGame;
