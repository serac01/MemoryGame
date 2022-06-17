import { PLACEHOLDER_CARDBACK_PATH } from "../../constants/index";
import { PLACEHOLDER_CARD_PATH } from "../../constants/index";
import React from "react";
import "./card.css";

function Card(card) {  
  return (
    <div className="card flipped" data-logo={card.name}>
      <img src={PLACEHOLDER_CARDBACK_PATH} className="card-back" alt="card placeholder" />
      <img src={`${PLACEHOLDER_CARD_PATH}${card.name}.png`} className="card-front" alt="card" />
    </div>
  );
}

export default Card;