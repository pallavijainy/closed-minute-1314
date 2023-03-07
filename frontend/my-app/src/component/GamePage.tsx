import React, { useEffect, useState } from "react";
import palData from "../db.json";
import Controls from "./Controls";
import Hand from "./Hand";
import "./styles/game.css";
import Status from "./Status";
import ProfileTypo from "../Constants/ProfileType";

let User={
  _id:"",
  name:"",
  email:"",
  password:"",
  score:0,
  level:0

}


const GamePage: React.FC = () => {
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

  //usestate made

  const data = JSON.parse(JSON.stringify(palData.cards));
  const [deck, setDeck]: any[] = useState(data);
  // console.log(deck);

  //user
  const [userCards, setUserCards]: any[] = useState([]);
  const [userScore, setUserScore] = useState(0);
  const [userCount, setUserCount] = useState(0);
// console.log(userScore)
  //dealer
  const [dealerCards, setDealerCards]: any[] = useState([]);
  const [dealerScore, setDealerScore] = useState(0);
  const [dealerCount, setDealerCount] = useState(0);

  //balance
  const [balance, setBalance] = useState(1000);
  const [user,setUser]=useState<ProfileTypo>(User)

  //bet
  const [bet, setBet] = useState(0);

  const [gameState, setGameState] = useState(GameState.bet);
  const [message, setMessage] = useState(Message.bet);

  //3 buttons
  const [buttonState, setButtonState] = useState({
    hitDisabled: false,
    standDisabled: false,
    resetDisabled: true,
  });

  const getUser=()=>{
    fetch("https://nice-cyan-pelican-garb.cyclic.app/user", {
      method: "GET",
      headers:requestHeaders,
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
        setUser(res)
      })
      .catch((err) => console.log(err.message));
  };

  let requestHeaders: any = { 
    'Content-Type': 'application/json',
    "Authorization": localStorage.getItem("token")
};
  const updateLeaderboard=(val:number)=>{
   
    fetch(
      `https://nice-cyan-pelican-garb.cyclic.app/user/update`,
      {
        method: "PATCH",
        headers:requestHeaders,
        body: JSON.stringify({ score:user.score+userScore,level:val}),
      }
    )
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })
      .catch((err) => console.log(err.message));
  
  }

  //initial phase m cards dene k bad userturn

  useEffect(() => {
    if (gameState === GameState.init) {
      drawCard(Deal.user);
      drawCard(Deal.hidden);
      drawCard(Deal.user);
      drawCard(Deal.dealer);
      setGameState(GameState.userTurn);
      setMessage(Message.hitStand);
    }
  }, [gameState]);

  //userTurn

  useEffect(() => {
    if (gameState === GameState.userTurn) {
      if (userScore === 21) {
        buttonState.hitDisabled = true;
        setButtonState({ ...buttonState });
      } else if (userScore > 21) {
        bust();
      }
    }
  }, [userCount]);

  useEffect(() => {
    if (gameState === GameState.dealerTurn) {
      if (dealerScore >= 17) {
        checkWin();
      } else {
        //dealer ko card do
        drawCard(Deal.dealer);
      }
    }
  }, [dealerCount]);

  useEffect(()=>{
    getUser();
  },[])
  console.log(user)

  //bet place

  const placeBet = (amount: number) => {
    setBet(amount);
    setBalance(balance - amount);
    setGameState(GameState.init);
  };

  //drawcards

  const drawCard = (dealType: Deal) => {
    if (deck.length > 0) {
      const randomIndex = Math.floor(Math.random() * deck.length); //random value
      // console.log(randomIndex);
      const card = deck[randomIndex];
      deck.splice(randomIndex, 1);
      setDeck([...deck]);
      // console.log("Remaining Cards:", deck.length);
      switch (card.suit) {
        case "spades":
          dealCard(dealType, card.value, "♠️");
          break;
        case "diamonds":
          dealCard(dealType, card.value, "♦");
          break;
        case "clubs":
          dealCard(dealType, card.value, "♣");
          break;
        case "hearts":
          dealCard(dealType, card.value, "♥");
          break;
        default:
          break;
      }
    }
  };

  //dealCard
  const dealCard = (dealType: Deal, value: string, suit: string) => {
    switch (dealType) {
      case Deal.user:
        userCards.push({ value: value, suit: suit, hidden: false });
        setUserCards([...userCards]);
        break;
      case Deal.dealer:
        dealerCards.push({ value: value, suit: suit, hidden: false });
        setDealerCards([...dealerCards]);
        break;
      case Deal.hidden:
        dealerCards.push({ value: value, suit: suit, hidden: true });
        setDealerCards([...dealerCards]);
        break;
      default:
        break;
    }
  };

  //reveal hidden card

  const revealCard = () => {
    dealerCards.filter((el: any) => {
      if (el.hidden === true) {
        el.hidden = false;
      }
      return el;
    });
    setDealerCards([...dealerCards]);
  };

  //resetGame
  const resetGame = () => {
    console.clear();
    setDeck(data);
    // console.log(data);
    setUserCards([]);
    setUserScore(0);
    setUserCount(0);

    setDealerCards([]);
    setDealerScore(0);
    setDealerCount(0);

    setBet(0);

    setGameState(GameState.bet);
    setMessage(Message.bet);
    setButtonState({
      hitDisabled: false,
      standDisabled: false,
      resetDisabled: true,
    });
  };

  //calculation of card score
  const calculate = (cards: any[], setScore: any) => {
    let total = 0;
    cards.forEach((card: any) => {
      if (card.hidden === false && card.value !== "A") {
        switch (card.value) {
          case "K":
            total += 10;
            break;
          case "Q":
            total += 10;
            break;
          case "J":
            total += 10;
            break;
          default:
            total += Number(card.value);
            break;
        }
      }
    });
    const aces = cards.filter((card: any) => {
      return card.value === "A";
    });
    aces.forEach((card: any) => {
      if (card.hidden === false) {
        if (total + 11 >= 21) {
          total += 1;
        } else {
          total += 11;
        }
      }
    });
    setScore(total);
  };

  //call calculate
  useEffect(() => {
    calculate(userCards, setUserScore);
    setUserCount(userCount + 1);
  }, [userCards]);

  useEffect(() => {
    calculate(dealerCards, setDealerScore);
    setDealerCount(dealerCount + 1);
  }, [dealerCards]);
  // hit
  const hit = () => {
    drawCard(Deal.user);
  };

  //stand

  const stand = () => {
    buttonState.hitDisabled = true;
    buttonState.standDisabled = true;
    buttonState.resetDisabled = false;
    setButtonState({ ...buttonState });
    setGameState(GameState.dealerTurn);
    revealCard();
  };

  //bust
  const bust = () => {
    buttonState.hitDisabled = true;
    buttonState.standDisabled = true;
    buttonState.resetDisabled = false;
    setButtonState({ ...buttonState });
    setMessage(Message.bust);
    alert("BUST!");
  };

  //check winning
  const checkWin = () => {
    if (userScore > dealerScore || dealerScore > 21) {
      setBalance(balance + 2 * bet);
      setMessage(Message.userWin);
      updateLeaderboard(user.level+1);
      alert("You Won!");
    } else if (dealerScore > userScore) {
      setMessage(Message.dealerWin);
      alert("Dealer Won!");
    } else {
      setBalance(balance + 1 * bet);
      setMessage(Message.tie);
      alert("TIE");
    }
  };
  return (
    <>
    <div >
      <Status message={message} balance={balance} />
      <Controls
        balance={balance}
        gameState={gameState}
        buttonState={buttonState}
        betEvent={placeBet}
        hitEvent={hit}
        standEvent={stand}
        resetEvent={resetGame}
        userScore={userScore}
        dealerScore={dealerScore}
      />
      <Hand title={`Dealer's Hand (${dealerScore})`} cards={dealerCards} />
      <Hand title={`Your Hand (${userScore})`} cards={userCards} />
    </div>
    </>
  );
};


export default GamePage;
