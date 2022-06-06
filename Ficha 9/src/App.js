import { Header, Footer, ControlPanel, GamePanel} from "./components/";
import "./assets/styles/App.css";
import { useState } from "react";
import React from 'react';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [selectedLevel, setSelectedLevel] = useState("0");

  const handleGameStart = () => {
    if(gameStarted)
      setGameStarted(false);
    else
      setGameStarted(true);
  };

  const handleLevelChange = (event) => {
    const { value } = event.currentTarget;
    setSelectedLevel(value);
  };

  return (
    <div id="container">
      <Header></Header>
      <ControlPanel 
          gameStarted = {gameStarted}
          onGameStart = {handleGameStart}
          onLevelChange = {handleLevelChange}
          selectedLevel = {selectedLevel}></ControlPanel>
      <GamePanel></GamePanel>
      <Footer></Footer>
    </div>
  );
}
  
export default App;