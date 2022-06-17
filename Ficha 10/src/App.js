import { ControlPanel, Footer, Header, GamePanel} from "./components";
import { CARDS_LOGOS,TIMEOUTGAME } from "./constants/index.js";
import { shuffleArray } from "./helpers/index.js";
import { useState, useEffect } from "react";
import "./assets/styles/App.css";
import React from 'react';

let timerId = undefined;

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");
  const [cards, setCards] = useState([]);
  const [timer, setTimer] = useState(TIMEOUTGAME);

  const handleGameStart = () => {
    if (gameStarted) setGameStarted(false);
    else setGameStarted(true);
  };

  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    const initialCards = shuffleArray(CARDS_LOGOS);
    let numOfCards;

    setSelectedLevel(value);
    switch (value) {
      case "1": numOfCards = 3;  break;
      case "2": numOfCards = 6;  break;
      case "3": numOfCards = 10; break;
      default:  numOfCards = 0;  break;
    }

    const slicedInitialCards = initialCards.slice(0, numOfCards);
    const doubledCardsObjects = [];

    slicedInitialCards.forEach((card, index) => {
      doubledCardsObjects.push({  key: `${card}-${index}`, id: card, name: card });
      doubledCardsObjects.push({  key: `${card}-${index}-clone`, id: `${card}-clone`, name: card });
    });

    const doubledShuffledCardsObjects = shuffleArray(doubledCardsObjects);
    setCards([...doubledShuffledCardsObjects]);
  };

  useEffect(() => {
    if (gameStarted) {
      timerId = setInterval(() => {
        let nextTimer;
        setTimer((previousState) => {
          nextTimer = previousState - 1;
          return nextTimer;
        });

        if (nextTimer === 0) {
          setGameStarted(false);
        }
      }, 1000);
    } else if (timer !== TIMEOUTGAME) {
      setTimer(TIMEOUTGAME);
    }

    return () => {
      if (timerId)
        clearInterval(timerId);
    };
  }, [gameStarted]);
  

  return (
    <div id="container">
      <Header />
      <main className="main-content">
        <ControlPanel
          gameStarted={gameStarted}
          onGameStart={handleGameStart}
          onLevelChange={handleLevelChange}
          selectedLevel={selectedLevel}
          timer={timer}
        />
        <GamePanel cards = {cards} selectedLevel={selectedLevel} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
