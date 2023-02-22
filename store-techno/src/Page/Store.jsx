import React from 'react'
import "../Style/Dashboard.css"
import { productSectionOne } from '../Components/Product';
import {productSectionSecond} from "../Components/Product"

const Store = () => {

  return (
    <>
      <div className="search_box">
        <p className="search_title">Search Item</p>
        <input className="search_input" type="text" placeholder="Apple Watch, Samsung S21, Macbook Pro, ..." />
      </div>

      <div className="sale_continer">
        <div className="sale_section">
          {
            productSectionOne.map((product) => (
              <div className="sale_item" key={product.id}>
                <img className="sale_item_img" src={product.photo} alt={product.productName} />
                <h2 className="sale_iten_title">{product.productName}</h2>
                <p className="sale_item_about">{product.productModel}</p>
                <div className="sale_item_box">
                  <span className="sale_item_price">$ {product.price}</span>
                  <img className="add_to_cart_btn" src={product.addToCartIcon} alt="Add to Cart" />
                </div>
              </div>
            ))
          }
        </div>

        <div className='section_second_container'>
          <div className="sale_section">
            {
              productSectionSecond.map((product) => (
                <div className="sale_item" key={product.id}>
                  <img className="sale_item_img" src={product.photo} alt={product.productName} />
                  <h2 className="sale_iten_title">{product.productName}</h2>
                  <p className="sale_item_about">{product.productModel}</p>
                  <div className="sale_item_box">
                    <span className="sale_item_price">$ {product.price}</span>
                    <img className="add_to_cart_btn" src={product.addToCartIcon} alt="Add to Cart" />
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default Store
