import React, { useState } from "react";
import useFlip from './hooks/useFlip';
import backOfCard from "./back.png";
import "./PlayingCard.css"

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  // const [isFacingUp, setIsFacingUp] = useState(true);
  const [isFlipped, toggleFlipCard] = useFlip();
  // const flipCard = () => {
  //   setIsFacingUp(isUp => !isUp);
  // };
  return (
    <img
      src={isFlipped ? back : front}
      alt="playing card"
      onClick={toggleFlipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
