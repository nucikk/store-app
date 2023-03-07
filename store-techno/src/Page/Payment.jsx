import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import CardList from '../Components/CardList'
import BackItem from "../Components/BackItem"
import "../Style/Payment.css"
const Payment = () => {
  const [cardholderName, setCardholderName] = useState(localStorage.getItem('cardholderName') || "")
  const [cardNumber, setCardNumber] = useState(localStorage.getItem('cardNumber' || ""))
  const [expiryDate, setExpiryDate] = useState(localStorage.getItem('expiryDate' || ""))
  const [cardcvc, setCardcvc] = useState(localStorage.getItem('cardcvc' || ""))
  const [isChecked, setIsChecked] = useState(false);

  const handleAddCardSubmit = (e) => {
    e.preventDefault()
  }
  //cardholderName ინპუტში ჩაწერილ ინფრომაცისას შეინახავს დარეფრეშებისას
  useEffect(() => {
    localStorage.setItem('cardholderName', cardholderName);
  }, [cardholderName]);

  const handleNameInput = (e) => {
    setCardholderName(e.target.value)
  }
  //cardNumber ინპუტში ჩაწერილ ინფრომაცისას შეინახავს დარეფრეშებისას
  useEffect(() => {
    localStorage.setItem('cardNumber', cardNumber);
  }, [cardNumber]);

  const handleCardNumber = (e) => {
    setCardNumber(e.target.value)
  }
  //expiryDate ინპუტში ჩაწერილ ინფრომაცისას შეინახავს დარეფრეშებისას
  useEffect(() => {
    localStorage.setItem('expiryDate', expiryDate);
  }, [expiryDate]);

  const handleExpiryDate = (event) => {
    const { value } = event.target;
    const numbersOnly = value.replace(/[^\d]/g, ''); // Removes non-numeric characters
    let formatted = formatExpiryDate(numbersOnly); // Formats the date to MM/YYYY


    if (formatted.length === 2 && value.slice(-1) !== '/') {
      formatted += '/';
    }

    setExpiryDate(formatted);
  }

  const formatExpiryDate = (value) => {
    const month = value.slice(0, 2);
    const year = value.slice(2, 6);

    if (month.length === 2 && year.length === 4) {
      return `${month}/${year}`;
    }
    return value;
  }

  useEffect(() => {
    localStorage.setItem('cardcvc', cardcvc);
  }, [cardcvc]);

  const handleCardcvc = (e) => {
    setCardcvc(e.target.value)
  }

  const handleCheckboxClick = (e) => {
    setIsChecked(e.target.checked);
  };

  return (
    <>
      <div className="payment_container">
        <div className="card_list">
          <CardList />

          <div className="card_add">
            <h1 className="card_title">Add a new Card</h1>

            <form onSubmit={handleAddCardSubmit}>

              <label className="card_label">Cardholder Name</label>
              <input className="card_input" type="text" placeholder="Nuci Kiria"
                value={cardholderName}
                onChange={handleNameInput} />
              <label className="card_label">Card Number</label>
              <input className="card_input" type="number" placeholder="5126-5987-2214-7621"
                value={cardNumber}
                onChange={handleCardNumber} />
              <div className="date_cvc_box">
                <div>
                  <label className="expiry_label">Expiry Date</label>
                  <input
                    className="expiry_input"
                    type="text"
                    name="expiration-date"
                    placeholder="MM/YYYY"
                    value={expiryDate}
                    onChange={handleExpiryDate}
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
                    value={cardcvc}
                    onChange={handleCardcvc}

                  /></div>
              </div>
              <div className="default_payment_checkbox">
                <input className="save_checkbox" type="checkbox" onChange={handleCheckboxClick} />
                <span>Save this as your default payment method</span>
              </div>
              <Link to={{ pathname: "/checkout", search: `cardholderName=${cardholderName}&cardNumber=${cardNumber}&expiryDate=${expiryDate}&cardcvc=${cardcvc}` }}
              >
                <button className="add_payment_btn" disabled={!isChecked} >Add Payment Method</button>
              </Link>

              <BackItem />

              <span className="secure_message" style={{ color: isChecked ? '#02D693' : 'red', fontWeight: "bold" }}>
                Secure Connection
              </span>
            </form>
          </div>
        </div>

      </div>
    </>
  )
}

export default Payment
