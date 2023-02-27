import React from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import BackItem from '../Components/BackItem';
import Navbar from '../Components/Navbar';
import "../Style/CheckBag.css";
import { productSectionOne, productSectionSecond } from "../Components/Product";

const CheckBag = ({ cartPhotos, cart }) => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { id } = useParams();
  const product = findProductById(parseInt(id));

  function findProductById(id) {
    const product = productSectionOne.find(p => p.id === id) || productSectionSecond.find(p => p.id === id);
    return product;
  }

  const selectedProducts = cart.filter(item => item.id !== parseInt(id));

  return (
    <>
      <div className="cart_container">
        <Navbar />

        <div className="cart_contents">
          <Link to="/product/:id">
              <BackItem />
          </Link>
        
          <h1 className="cart_title">Check Your Bag Items</h1>
          <div>
            {cart.map((item) => (
              <div key={item.id} className="check_box">
                <div className="product_img_container">
                  {selectedProducts.length > 0 && selectedProducts.find(p => p.id === item.id) && (
                    <img className="product_img_cart" src={item.photo} alt={item.productName} />
                  )}
                </div>
                <div className="shop_cart_info">
                  <h1 className="cart_name">{item.productName}</h1>
                  <h3 className="cart_model">{item.productModel}</h3>
                  <p className="cart_description">{item.description}</p>
                  <div className="cart_rating_container">
                    <img className="cart_rating_stars" src={item.rating} alt="stars" />
                    <span className="product_rating"> 4.5 / 5</span>

                  </div>
                  <p className="cart_proce">$ {item.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="cart_view">
          {cart.map((item) => (
            <div key={item.id} className="bag_product">
              <img className="product_img" src={item.photo} alt={item.productName} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CheckBag;
