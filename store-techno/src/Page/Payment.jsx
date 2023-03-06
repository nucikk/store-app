import React from 'react'
import { Link } from 'react-router-dom'
import CardList from '../Components/CardList'
import "../Style/Payment.css"
const Payment = () => {

  const handleAddCardSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <>
      <div className="payment_container">
        <div className="card_list">
          <CardList />

          <div className="card_add">
            <h1 className="card_title">Add a new Card</h1>

            <form onSubmit={handleAddCardSubmit}>

              <label className="card_label">Cardholder Name</label>
              <input className="card_input" type="text" placeholder="Nuci Kiria" />
              <label className="card_label">Card Number</label>
              <input className="card_input" type="number" placeholder="5126-5987-2214-7621" />
              <div className="date_cvc_box">
                <div>
                  <label className="expiry_label">Expiry Date</label>
                  <input
                    className="expiry_input"
                    type="text"
                    name="expiration-date"
                    placeholder="MM/YYYY"
                  />
                </div>
                <div>
                  <label className="cvc_label">CVC</label>
                  <input
                    className="cvc_input"
                    type="text"
                    name="cvc"
                    placeholder="123"
                    maxLength={3}
                  /></div>
              </div>
              <div className="default_payment_checkbox">
                <input className="save_checkbox" type="checkbox" />
                <span>Save this as your default payment method</span>
              </div>
              <button className="add_payment_btn">Add Payment Method</button>
              <Link to="/checkItem/:id">
                <span>Back</span>
              </Link>
                <span className="secure_message">Secure Connection</span>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Payment
