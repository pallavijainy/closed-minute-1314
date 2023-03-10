import {Heading,Button,Center} from "@chakra-ui/react"
import React from "react";
import {Link} from "react-router-dom";
import "./homepage.css"
import Loginmodal from "./Loginmodal";
import Registermodal from "./Registermodal";
const HomePage = () => {
  // function handleClick(){
  //   const pop=window.prompt("alert")
  // }
 
  return(
     <div className="main">
   
    <div className="lucky">
      <Heading as="h2" size="lg" textAlign="center">21 Lucky Game</Heading>
    </div>
   <div className="bot">
   
   <Registermodal/>
   
   <Loginmodal/>
   </div>

  <Link to="/rules">
  <div className="play">
    <h2>How to play?</h2>
   </div>
   <div>
    <Center>
      <Link to="/leaderboard">
    <Button  bgColor="blue" color="white" _hover={{color:"white", bgColor:"gray"}}>Leaderboard</Button>
    </Link>
    </Center>
   </div>
  </Link>
  </div>
  )
};

export default HomePage;
