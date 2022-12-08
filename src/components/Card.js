import React, { useContext } from "react";
import { cardContext } from "../App";

function Card({ id, url }) {
  const { shuffleImages } = useContext(cardContext);
  return (
    <div>
      <img
        className="flex justify-center w-[250px] h-[250px] p-2 rounded-lg border-[10px] m-6 hover:opacity-80 cursor-pointer"
        alt="card-img"
        src={url}
        onClick={() => shuffleImages(id)}
      />
    </div>
  );
}

export default Card;
