import React from 'react'
import { useLocation } from 'react-router-dom';
import "../Style/Checkout.css"
const Checkout = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search);
  const cardholderName = query.get('cardholderName') || '';
  const cardNumber = query.get('cardNumber') || '';
  const expiryDate = query.get('expiryDate' || "")
  const cardcvc = query.get('cardcvc' || "")
  return (
    <>
    <div className="checkout_container">
     <div className="checkout_item">
   <div className="checkout_box_item">  
     Name   {cardholderName}
     Number {cardNumber}
     date {expiryDate}
     CVC {cardcvc}
    </div>
   <div className="checkout_box_item">  
       
    </div>
  
     </div>
       <div className="order">    </div>
      
    </div>  

    </>
  )
}

export default Checkout
