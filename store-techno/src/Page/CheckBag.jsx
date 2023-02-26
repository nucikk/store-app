import React from 'react'
import BackItem from '../Components/BackItem'
import Navbar from '../Components/Navbar'
import "../Style/CheckBag.css"

const CheckBag = ({ cartPhotos, cart }) => {

  return (
    <>
      <div className="cart_container">
        <Navbar />

        <div className="cart_contents">
           <BackItem />  
          <h1 className="cart_title">Check Your Bag Items</h1>
          <div className="check_box">    </div>
        </div>

        <div className="cart_view">
          {cartPhotos.map((photo, index) => (
            <div className="bag_product" key={index}>
              {cart[index] && (
                <img className="product_img" src={photo} alt={`Product ${index}`} />
              )}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default CheckBag
