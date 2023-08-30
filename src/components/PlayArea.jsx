import React, { useState } from "react";
import "../styles/playArea.css";
import { motion } from "framer-motion";
import shareState from "../state/StateContext";


const PlayArea = function () {
  ////////////////DATA//////////////////////////////
  const players = [{ playerId: 1 }, { playerId: 2 }];
  ///////////////STATE//////////////////////////////
  const {turn, damage, takeDamage} = shareState()
  // const [turn, setTurn] = useState(1);
  // const [damage, setDamage] = useState(false)
  //////////////FUNCTIONs//////////////////////////
  const handleClick = function(){
    turn === 1 ? setTurn(2) : setTurn(1)
  }
  const attack = function(){
    setDamage(true)
    setTimeout(() => {
      setDamage(false)
      
    }, 500);
  }

  /////////////ANIMATIONs//////////////////////////
  const animation = {
     

      
      animate: damage &&{y: +100, transition: {duration: 0.1, type: "spring", dampening: 2, stiffness: 125 }}
    
  }


  return (
    <div className="play_area">
      {players.map((player) => {
        return (
          <motion.div
            
            key={player.playerId}
            style={turn === player.playerId ? { scale: 1, x: +15 } : { scale: 0.9 }}
            variants={animation}
            initial="initial"
            animate="animate"
            className="player"
          >
            <button className="attack" onClick={()=> takeDamage()}></button>
          </motion.div>
        );
      })}

      <button className="attack" onClick={()=> handleClick()}/>
    </div>
  );
};

export default PlayArea;
