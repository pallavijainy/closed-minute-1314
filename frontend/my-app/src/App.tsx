import React from "react";

import "./App.css";

function App() {
  enum GameState {
    bet,
    init,
    userTurn,
    dealerTurn,
  }

  enum Deal {
    user,
    dealer,
    hidden,
  }

  enum Message {
    bet = "Place a Bet!",
    hitStand = "Hit or Stand?",
    bust = "Bust!",
    userWin = "You Win!",
    dealerWin = "Dealer Wins!",
    tie = "Tie!",
  }
  return <div className="App"></div>;
}

export default App;
