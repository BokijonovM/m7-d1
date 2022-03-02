import "./App.css";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyMain from "./components/MyMain";
import Cart from "./components/Cart";
import MyHeader from "./components/MyHeader";
import MyFav from "./components/MyFav";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCartWithQty = (jobToAdd) => {
    let newCart = [...cart];
    let indexOfElementInCart = cart.findIndex(
      (element) => element.job.id === jobToAdd.id
    );
    if (indexOfElementInCart !== -1) {
      newCart[indexOfElementInCart].qty++;
    } else {
      newCart.push({
        job: jobToAdd,
        qty: 1,
      });
    }
    setCart(newCart);
  };

  const removeFromCartWithQty = (jobIndex) => {
    let newCart = [...cart];
    if (newCart[jobIndex].qty > 1) {
      newCart[jobIndex].qty--;
    } else {
      newCart = newCart.filter((element, i) => i !== jobIndex);
    }
    setCart(newCart);
  };

  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader />
        <Routes>
          <Route path="/" element={<MyMain addToCart={addToCartWithQty} />} />
          <Route path="/fav" element={<MyFav />} />
          <Route
            path="/:company"
            element={
              <Cart cart={cart} removeFromCart={removeFromCartWithQty} />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
