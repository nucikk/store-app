import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import BackItem from '../Components/BackItem';
import Navbar from '../Components/Navbar';
import "../Style/CheckBag.css";
import { productSectionOne, productSectionSecond } from "../Components/Product";

const CheckBag = ({cart }) => {
  const [cartItems, setCartItems] = useState(cart)
  
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { id } = useParams();
  const [product, setProduct] = useState(findProductById(parseInt(id)));
  const [total, setTotal] = useState(0);


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
        quantity: item.quantity || 1, // add a default quantity of 1 if it doesn't exist
        price: product ? product.price : item.price,
        photo: product ? product.photo : item.photo // use item.photo if product is undefined
      };
    } else {
      return item;
    }
  });

  const handleAddButtonClick = (index) => {
    const newCart = [...cartItems]; 
    newCart[index].quantity = newCart[index].quantity ? newCart[index].quantity + 1 : 2; // increase the quantity of the selected product
    setCartItems(newCart);

    const totalPrice = newCart.reduce((acc, item) => {
      return acc + item.price * (item.quantity || 1);
    }, 0);
    setTotal(totalPrice.toFixed(2)); // update the total state
  };
  
  const handleSubButtonClick = (index) => {
    const newCart = [...cartItems];
    if (newCart[index].quantity && newCart[index].quantity > 1) {
      newCart[index].quantity -= 1; 
      setCartItems(newCart);
    }
  };

  const selectedProducts = updatedCartItems.filter(item => item.id !== parseInt(id));
  useEffect(() => {
    const totalPrice = cartItems.reduce((acc, item) => {
      return acc + item.price * (item.quantity || 1);
    }, 0);
    setTotal(totalPrice.toFixed(2));
  }, [cartItems]);

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
                    <img className="cart_rating_stars" src={item.rating} alt="stars"/>
                    <span className="product_rating"> 4.5 / 5</span>
                  </div>

                  <div className="price_container">
                  <p className="cart_price">$ {Number(item.price * (item.quantity || 1)).toFixed(2)}</p>
                    <button className="btn_addition" onClick={() => handleAddButtonClick(index)}>+</button>
                    <span className="quantity">{item.quantity || 1} </span>
                    <button className="btn_deduction" onClick={() => handleSubButtonClick(index)}>-</button>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>
 
        <div className="cart_view">
         <div className='checkout_box'> 
         <Link to="/checkout">
           <button className='checkout_btn'>Checkout</button>
         </Link>
           
            <h3 className="total_item">TOTAL: ${total} </h3>
        </div>
 
          {cart.map((item, index) => (
            <div key={`${item.id}-${index}`}>
              <img className="product_img" src={item.photo} alt={item.productName} />
            </div>
          ))}

        </div>       
 
      </div>
    </>
  );
}

export default CheckBag;