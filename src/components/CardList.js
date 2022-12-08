import React, { useContext } from "react";
import { cardContext } from "../App";
import Card from "./Card";

function CardList() {
  const { images } = useContext(cardContext);
  return (
    <div className="flex flex-row flex-wrap justify-evenly">
      {images.map((img) => (
        <Card key={img} id={img.id} url={img.url} />
      ))}
    </div>
  );
}

export default CardList;
