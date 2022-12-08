import "./App.css";
import _ from "lodash";
import { createContext, useState } from "react";
import { cardImages } from "./components/utils";
import CardContainer from "./components/CardContainer";

export const cardContext = createContext();
function App() {
  const [images, setImages] = useState(cardImages);
  const [gameOver, setGameOver] = useState(false);

  // to store id's of images that got clicked
  const [clicked, setClicked] = useState([]);

  const shuffleImages = (imageId) => {
    // if game is over or images has been cliked before return
    if (gameOver || clicked.includes(imageId)) return setGameOver(true);

    // if game
    setClicked([...clicked, imageId]);
    setImages(_.shuffle(cardImages));
  };

  const resetGame = () => {
    setClicked([]);
    setGameOver(false);
  };

  return (
    <cardContext.Provider
      value={{ images, shuffleImages, resetGame, gameOver, clicked }}
    >
      <div className="App">
        <CardContainer />
      </div>
    </cardContext.Provider>
  );
}

export default App;
