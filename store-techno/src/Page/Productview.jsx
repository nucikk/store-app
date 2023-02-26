import React, { useEffect, useState } from 'react'
import "../Style/Productview.css"
import Navbar from '../Components/Navbar'
import { Link, useParams } from 'react-router-dom'
import { productSectionOne, productSectionSecond } from "../Components/Product"
import BackItem from '../Components/BackItem'
import AboutTech from '../Components/AboutTech'
import AddIconShop from "../Photo/bag-handle.svg"

// view of a product with its details, an option to add or remove it from the cart, and a list of items in the cart.
const Productview = () => {
  // eslint-disable-next-line no-unused-vars
  const [isAddToCart, setIsAddToCart] = useState(false)
  // eslint-disable-next-line no-unused-vars
  const [isRemoveFromCart, setIsRemoveFromCart] = useState(false)
  const [cart, setCart] = useState([])
  const [cartPhotos, setCartPhotos] = useState([]);


  const { id } = useParams(); // ეს ID შეესაბამება პროდუქტის უნიკალურ იდენტიფიკატორს, რომლის ჩვენებაც გვინდა პროდუქტის ნახვის გვერდზე.
  const product = findProductById(parseInt(id));

  function findProductById(id) {
    const product = productSectionOne.find(p => p.id === id) ||
      productSectionSecond.find(p => p.id === id);
    return product;
  }

  // add product from cart
  const handleAddToCart = () => {
    setCart([...cart, product]);
    setCartPhotos([...cartPhotos, product.photo]); // add new photo to cartPhotos
    localStorage.setItem('cart', JSON.stringify([...cart, product]));
  };
  useEffect(() => {
    setCartPhotos(cart.map(item => item.photo));
  }, [cart, setCartPhotos]);

  // Remove product from cart
  const handleRemoveFrom = () => {
    if (cart.length > 0) {
      const newCart = [...cart];
      newCart.pop();
      setCart(newCart);
      localStorage.setItem('cart', JSON.stringify(newCart));
    }
  };

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, [])

  if (!product) {
    return (
      <div className="product_not_found">
        Product not found
      </div>
    )
  }

  return (
    <>
      <div className="product_view_container">
        <Navbar />
        <div className="product_view_about">
          <div className="product_view_details">
            <BackItem />
            <div className="store_about_container">
              <div className="product_img_bg">
                <Link
                  to='/product/:id'>
                  <img src={product.photo} alt={product.productName} />
                </Link>
              </div>
              <div className="product_details">
                <AboutTech />
                <div className="add_cart_box">
                  <button className="add_cart_btn" onClick={handleAddToCart}>Add to Bag</button>
                  <button className="add_cart_btn" onClick={handleRemoveFrom}>Remove</button>
                  <Link to="/checkItem" className="add_cart_btn">
                    <div >
                      <img src={AddIconShop} alt="" />
                    </div>
                  </Link>

                </div>
              </div>
            </div>
          </div>
          <div className="product_details_view">
            <p>{product.details}</p>
          </div>
        </div>
        {cart.some((item) => item.id === product.id) && (
          <>
            <div className="product_view_bag">

              {cart.map((item) => (
                <div className="bag_product" key={item}>
                 <Link to={`/product/${item}`}>
                    <img className="product_img" src={item.photo} alt={item.productName} />
                  </Link>
                </div>
              ))}

            </div>
          </>
        )}

      </div>
    </>
  )
}

export default Productview


