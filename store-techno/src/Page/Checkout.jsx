import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import "../Style/Checkout.css"
const Checkout = () => {
  const location = useLocation(); 
  const query = new URLSearchParams(location.search);
  const orderItems = [
    {
      name: "Items",
      value: 5849.37,
    },
    {
      name: "Shipping",
      value: 6.99,
    },
    {
      name: "Estimated GST",
      value: 760.41,
    },
    {
      name: "Gift Card",
      value: 0.00,
    },
  ];

  const cardholderName = query.get('cardholderName') || '';
  const cardNumber = query.get('cardNumber') || '';
  const expiryDate = query.get('expiryDate' || "")
  const cardcvc = query.get('cardcvc' || "")
  const total = query.get('total' || "")
  return (
    <>
      <div className="checkout_container">
        <div className="checkout_item">
          <div className="checkout_box_item">
            <h2 className="card_title">Shipping Card info</h2>
            <p>Cardholder Name: {cardholderName}</p>
            <p>Card Number: { cardNumber}</p>
            <p>Expiry Date: { expiryDate} </p>
            <p>CVC: {cardcvc} </p>
            <Link to="/payment">
              <button className="checkout_change_btn">Change</button>
            </Link>
          </div>
          <div className="checkout_box_item">
            <h2 className="card_title">Payment Method</h2>
            <p>MasterCard ending in 1252</p>
            <p>$ 53.21 gift card balance</p>
              <button className="checkout_change_btn">Change</button>
          </div>
        </div>
        <div className="order_summary">
          <h2 className="order_summary_title">Order Summary</h2>
          {orderItems.map((item, index) => (
            <div className="order_summary_item" key={index}>
              <p>{item.name}:</p>
              <span>${item.value.toFixed(2) || 0}</span>
            </div>
          ))}
          <span className="checkout_total">Order Total: {total} </span>
          <button className="place_order_btn">Place your order</button>
        </div>

      </div>

    </>
  )
}

export default Checkout
