import React from 'react'
import CardIcon from "../Photo/card.svg"
const CardList = () => {
  return (
    <>
      <div className="card_option">
      <h1 className="card_title">Select a Card</h1>
      <div className="card_select">
      <img className="card_icon" src={CardIcon} alt="card icon" />
      <h3>MasterCard ending in 4242</h3>
      </div>
      <div className="card_select">
      <img className="card_icon" src={CardIcon} alt="card icon" />
       <h3>VISA Debit ending in 2894</h3>
      </div>
     </div>
    </>
  )
}

export default CardList
