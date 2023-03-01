import React, { useState, useEffect } from "react";

export const Cart = () => {
  const [cart, setCart] = useState(null);

  useEffect(() => {
    const id = localStorage.getItem("cart_id");
    if (id) {
      fetch(`http://localhost:9000/store/carts/${id}`, {
        credentials: "include",
      })
        .then((response) => response.json())
        .then(({ cart }) => setCart(cart))
    } else {
      fetch(`http://localhost:9000/store/carts`, {
        method: "POST",
        credentials: "include",
      })
        .then((response) => response.json())
        .then(({ cart }) => {
          setCart(cart);
          localStorage.setItem("cart_id", cart.id);
        });
    }
  }, []);

  const addProductToCart = (variant_id) => {
    const cartId = cart?.id;
    if (cartId) {
      fetch(`http://localhost:9000/store/carts/${cartId}/line-items`, {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          variant_id,
          quantity: 1,
        }),
      })
        .then((response) => response.json())
        .then(({ cart }) => setCart(cart));
    }
  };

  if (!cart) {
    return <div>Loading Cart...</div>;
  }

  return (
    <>
      <h2>Your Cart</h2>
      <ul>
        {cart.items.map((item) => (
          <li key={item.id}>
            {item.title} - {item.variant.title} - Price ${item.unit_price} &nbsp; Quantity: {item.quantity} &nbsp;
          </li>
        ))}
      </ul>
    </>
  );
};

export default Cart;
export { addProductToCart };
