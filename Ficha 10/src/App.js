import { Header, Footer, ControlPanel, GamePanel} from "./components/";
import { CARDS_LOGOS } from "./constants/index.js";
import { shuffleArray } from "./helpers/index.js";
import "./assets/styles/App.css";
import { useState } from "react";
import React from 'react';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");
  const [cards, setCards] = useState([]);

  const handleGameStart = () => {
    if(gameStarted)
      setGameStarted(false);
    else
      setGameStarted(true);
  };

  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    const initialCards = shuffleArray(CARDS_LOGOS); 
    const doubledCardsObjects = []; 
    let numOfCards;

    setSelectedLevel(value);

    switch (value) {
      case "1": numOfCards = 3;  break;
      case "2": numOfCards = 6;  break;
      case "3": numOfCards = 10; break;
      default:  numOfCards = 0;  break;
    }

    const slicedInitialCards = initialCards.slice(0, numOfCards);

    slicedInitialCards.forEach((card, index) => { 
      doubledCardsObjects.push({ key: `${card}-${index}`, id: card, name: card }); 
      doubledCardsObjects.push({ key: `${card}-${index}-clone`, id: `${card}-clone`, name: card}); 
    });

    const doubledShuffledCardsObjects = shuffleArray(doubledCardsObjects);
  };

  return (
    <div id="container">
      <Header></Header>
      <ControlPanel 
          gameStarted = {gameStarted}
          onGameStart = {handleGameStart}
          onLevelChange = {handleLevelChange}
          selectedLevel = {selectedLevel}></ControlPanel>
      <GamePanel cards = {cards} selectedLevel={selectedLevel} ></GamePanel>
      <Footer></Footer>
    </div>
  );
}
  
export default App;