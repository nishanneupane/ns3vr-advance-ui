import React from "react";

const GameBookForm = ({ game }: any) => {
  return (
    <div className=" py-2 px-3">
      <div className="flex items-center justify-start py-2">
        <h2 className="text-gray-50 text-md me-5">Date : </h2>
        <input
          className="bg-transparent text-gray-400 outline-none"
          type="date"
          placeholder="Your Flexible Date"
        />
      </div>
      <div className="flex items-center justify-start py-2">
        <h2 className="text-gray-50 text-md me-5">Time : </h2>
        <input
          className="bg-transparent text-gray-400 outline-none"
          type="time"
          placeholder="Your Flexible Time"
        />
      </div>

      <div className="bg-gray-700 p-2 flex">
        <select className="select select-bordered w-full max-w-xs font-sans text-white bg-slate-700">
          <option className="bg-slate-700" disabled selected>
            Preferred Payment
          </option>
          <option className="bg-slate-700">Online</option>
          <option className="bg-slate-700">Cash</option>
        </select>
      </div>

      <div className="py-5">
        <div className="flex items-center justify-start py-2">
          <h2 className="text-gray-50 text-md me-5">Name </h2>
          <input
            className="bg-transparent text-gray-400 outline-none border border-gray-700 p-2 rounded-lg "
            type="text"
            placeholder="john"
          />
        </div>
        <div className="flex items-center justify-start py-2">
          <h2 className="text-gray-50 text-md me-5">Email </h2>
          <input
            className="bg-transparent text-gray-400 outline-none border border-gray-700 p-2 rounded-lg "
            type="text"
            placeholder="jhondoe@gmail.com"
          />
        </div>

        <div className="flex items-center justify-start py-2">
          <h2 className="text-gray-50 text-md me-5">Contact </h2>
          <input
            className="bg-transparent text-gray-400 outline-none border border-gray-700 p-2 rounded-lg "
            type="text"
            placeholder="9803292312"
          />
        </div>
      </div>

      <div className="modal-action flex items-center justify-center w-full space-x-2 mb-0">
        <button className="btn bg-gray-700 text-white p-2 px-4 rounded-xl">
          Close
        </button>
        <button
          className="btn bg-sky-500 text-white
hover:bg-sky-600
p-2 px-4 rounded-xl
"
          onClick={() => {}}
        >
          Book
        </button>
      </div>
    </div>
  );
};

export default GameBookForm;
