import React from "react";
import { Button } from "react-bootstrap";

function Cart({ cart, removeFromCart }) {
  return (
    <div>
      <ul style={{ listStyle: "none" }}>
        {cart.map((element, i) => {
          return (
            <li key={i} className="my-4">
              <Button variant="danger" onClick={() => removeFromCart(i)}>
                Delete
              </Button>
              {element.job.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Cart;
