import React, {useState} from "react"
import "../styles/playArea.css"
import {motion} from "framer-motion"

const PlayArea = function() {

const [turn, setTurn] = useState(1)

return(
<div className="play_area">
  <motion.div whileHover={{scale: 1.05, x: +15}} className="player">
    <button className="attack"></button>
  </motion.div>
  <motion.div whileHover={{scale: 1.05, x: -15}} className="player"></motion.div>
 
</div>
  )
}


export default PlayArea