import React, { useContext } from "react";
import { cardContext } from "../App";

function Header() {
  const { clicked, resetGame, gameOver } = useContext(cardContext);
  return (
    <div>
      <h1 className="text-center font-extrabold text-white text-6xl my-8 ">
        {" "}
        Memory Game{" "}
      </h1>
      <div className="flex flex-row justify-evenly m-3">
        <p className="text-xl text-slate-100"> Score = {clicked.length}</p>
        <p className="font-extrabold text-xl text-slate-100">
          {" "}
          {gameOver ? "Game Over" : " Play"}
        </p>
        <button
          onClick={resetGame}
          className=" cursor-pointer text-xl text-slate-100 border-4 px-4 hover:border-orange-400 hover:text-orange-400 hover:text-2xl"
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Header;
