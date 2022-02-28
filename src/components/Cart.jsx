import React from "react";
import MyHeader from "./MyHeader";
import { Button } from "react-bootstrap";

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <MyHeader />
      <ul style={{ listStyle: "none" }}>
        {cart.map((element, i) => {
          <li key={i} className="my-4">
            <Button variant="danger" onClick={() => removeFromCart(i)}>
              Delete
            </Button>
            {element.title}
          </li>;
        })}
      </ul>
    </div>
  );
}

export default Cart;
