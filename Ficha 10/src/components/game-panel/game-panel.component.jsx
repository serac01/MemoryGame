import "./game-panel.css";
import { Card } from "../index";

function GamePanel(props){
  const { cards, selectedLevel } = props;
  let gameClasse;
  
  if (selectedLevel === "2")
    gameClasse = "intermedio";
  else if(selectedLevel === "3")
    gameClasse = "avancado";
  else
    gameClasse = "";
    
  return (
    <section className="game-panel">
      <div id="game">
        {cards.map((card) => (  <Card key={card.key} card={card} />  ))} 
      </div>
    </section>
  );
}

export default GamePanel;