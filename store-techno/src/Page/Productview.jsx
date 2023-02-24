import React from 'react'
import "../Style/Productview.css"
import Navbar from '../Components/Navbar'
import { Link, useParams } from 'react-router-dom'
import backIcon from "../Photo/Vector-back.svg"
import { productSectionOne, productSectionSecond } from "../Components/Product"

const Productview = () => {
/**
  Find the product in the first section, if it's not there, find it in the second section.
 returns The product object.
 */
  const { id } = useParams();
  const product = findProductById(parseInt(id));

  function findProductById(id) {
    const product = productSectionOne.find(p => p.id === id) ||
      productSectionSecond.find(p => p.id === id);
    return product;
  }

  // Check if product is not undefined before accessing its properties
  if (!product) {
    return (<div className="product_not_found">
      Product not found
    </div>)
  }
  return (
    <>
      <div className="product_view_container">
        <Navbar />
        <div className="product_view_about">
          <div className="product_view_details">
            <Link to="/">
              <div className="product_view_back">
                <img src={backIcon} alt="Back" />
                <span>Back</span>
              </div>
            </Link>


            <div className="store_about_container">
              <div className="product_img_bg"> <Link to="/product/:id">
                <img src={product.photo} alt={product.productName} />   </Link>
              </div>
              <div class="product_details">
                <h1 class="product_title">{product.productName}</h1>
                <p class="product_model">{product.productModel}</p>
                <span class="product_rating">4.5 / 5</span>
                <p class="product_price">$ {product.price}</p>
                <p class="product_description">{product.description}</p>
                {product.storageCapacity || product.condition || product.series ? (
                  <div className="details">
                    {product.storageCapacity && <h2>Storage: {product.storageCapacity}</h2>}
                    {product.condition && <h2 className="condition_margin">Condition: {product.condition}</h2>}
                    {product.series && <h2>Series: {product.series}</h2>}
                  </div>
                ) : null}
               
                 <div className="add_cart_box">
                  <button className="add_cart_btn">Add to Bag</button>
                 </div>
              </div>
            </div>

          </div>
          <div className="product_details_view">
            <p>
              {product.details}
            </p>
          </div>

        </div>
        <div className="product_view_bag"></div>
      </div>
    </>
  )
}



export default Productview
