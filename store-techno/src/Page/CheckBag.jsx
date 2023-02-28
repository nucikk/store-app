import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import BackItem from '../Components/BackItem';
import Navbar from '../Components/Navbar';
import "../Style/CheckBag.css";
import { productSectionOne, productSectionSecond } from "../Components/Product";

const CheckBag = ({ cartPhotos, cart, onCartPhotosChange }) => {
  const [cartItems, setCartItems] = useState(cart)
  const [quantity, setQuantity] = useState(1);

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { id } = useParams();
  const [product, setProduct] = useState(findProductById(parseInt(id)));


  useEffect(() => {
    setCartItems(cart);
  }, [cart]);


  useEffect(() => {
    setProduct(findProductById(parseInt(id)));
  }, [id]);

  function findProductById(id) {
    const product = productSectionOne.find(p => p.id === id) || productSectionSecond.find(p => p.id === id);
    return product;
  }

  const updatedCartItems = cartItems.map(item => {
    if (item.id === parseInt(id)) {
      return {
        ...item,
        price: product ? product.price * quantity : item.price * quantity,
        photo: product ? product.photo : item.photo // use item.photo if product is undefined
      };
    } else {
      return item;
    }
  });

  const handleAddButtonClick = () => {
    setQuantity(quantity + 1);
  };

  const handleSubButtonClick = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const selectedProducts = updatedCartItems.filter(item => item.id !== parseInt(id));

  return (
    <>
      <div className="cart_container">
        <Navbar />

        <div className="cart_contents">
         

            <BackItem />

          <h1 className="cart_title">Check Your Bag Items</h1>
          <div>
            {updatedCartItems.map((item, index) => (
              <div key={index} className="check_box">
                <div className="product_img_container">
                {selectedProducts.length > 0 && selectedProducts.find(p => p.id === item.id) && (
                    <img className="product_img_cart" src={item.photo} alt={item.productName} onError={(e) => { e.target.src = item.photo }} />
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

                  <div className="price_container">
                  <p className="cart_price">$ {item.price * quantity}</p>
                    <button className="btn_addition" onClick={() => handleAddButtonClick(index)}>+</button>
                    <span className="quantity">{quantity}</span>
                    <button className="btn_deduction" onClick={() => handleSubButtonClick(index)}>-</button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div className="cart_view">
          {cart.map((item, index) => (
            <div key={`${item.id}-${index}`} className="bag_product">
              <img className="product_img" src={item.photo} alt={item.productName} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default CheckBag;