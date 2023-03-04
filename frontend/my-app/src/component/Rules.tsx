import React from "react";
import {Link} from "react-router-dom"
import "./rules.css"
import gam from "./pics/cardsGame.gif"
const Rules = () => {
  return (
    <div className="container">
      <div className="rul1">
        <h1 >How to play</h1>
        <p >the objective of the game is to get a set of cards in which the sum must be 21.
          Or you can get as close as possible without bursting</p>
        <p >if you go over 21, you lose, if the dealer has 21 or less and you have less points than the dealer, you lose.</p>

        <img src={gam} alt="" />

        <p >the numbered cards correspond to their respective value.</p>
        <p >the cards with letters, the situation changes a little,
          J, Q and K cards are worth 10 points.</p>
        <p >but "A" card has a value of 1.</p>

        <h1 >Hit and Stay</h1>
        <p >when you start the game, you will decide if you want more cards, or if you want to keep the amount you received.</p>
        <p >
          if you want to take more cards, it may happen that you exceed the score of 21, if that happens you will lose because the dealer will not ask for cards.</p>
        <p >but, if you still haven't exceeded, a timer will appear for you to play in up to 6 seconds, if you don't do anything, you will lose your turn (stay).</p>

        {/* <img src={rule2} alt="" /> */}
       <Link to="/"> <button>HOME</button>
       </Link>
      </div>


    </div>
  )
};

export default Rules;
