import React from "react";
import "./homepage.css"
const HomePage = () => {
  // function handleClick(){
  //   const pop=window.prompt("alert")
  // }
  
  return(
     <div className="main">
   
    <div className="lucky">
      <h1>21 Lucky Game</h1>
    </div>
   <div className="bot">
   <button >New user</button>
   <button>Existing user</button>
   </div>

   <div className="play">
    <h2>How to play?</h2>
   </div>
  </div>
  )
};

export default HomePage;
