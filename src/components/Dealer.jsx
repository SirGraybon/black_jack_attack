import "../styles/dealer.css"
import shareState from "../state/StateContext"


export const Dealer = function(){

  const {drawCard, deck, burnPile} = shareState()
return(
  <div className="dealerComponent">
    <div className="deck" onClick={() => drawCard()}>{deck.length}</div>
    <div className="dealer"></div>
    <div className="burnPile"> {burnPile.length} </div>
    
  </div>
)
}