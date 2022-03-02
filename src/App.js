import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MyMain from "./components/MyMain";
import Cart from "./components/Cart";
import MyHeader from "./components/MyHeader";
import MyFav from "./components/MyFav";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <MyHeader />
        <Routes>
          <Route path="/" element={<MyMain />} />
          <Route path="/fav" element={<MyFav />} />
          <Route path="/:company" element={<Cart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
