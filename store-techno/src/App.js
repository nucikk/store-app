import { Routes, Route } from "react-router-dom";
import Productview from "./Page/Productview";
import Dashboard from "./Page/Dashboard";
import CheckBag from "./Page/CheckBag";
import { useEffect, useState } from "react";

function App() {
  const [cart, setCart] = useState([]);
  const [cartPhotos, setCartPhotos] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart'));
    if (storedCart) {
      setCart(storedCart);
    }
  }, []);

  useEffect((e) => {
    setCartPhotos(cart.map(item => item.photo));
  }, [cart]);


  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
        <Route path="/product/:id" element={<Productview productName="Product name" productModel="Product model"/>} />
        <Route path="/checkItem/:id"  element={<CheckBag cart={cart} cartPhotos={cartPhotos} />} />
      </Routes>
    </>
  );
}

export default App;