import "./App.css";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyMain from "./components/MyMain";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCartWithQty = (bookToAdd) => {};
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MyMain addToCart={addToCartWithQty} />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
