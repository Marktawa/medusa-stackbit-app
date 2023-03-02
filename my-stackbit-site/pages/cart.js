import React, { useState, useEffect } from "react";

export default function Cart() {
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

    if (!cart) {
        return <div>Loading Cart...</div>;
    }

    return (
        <>
            <header className="header outer">
                <div className="inner">
                    <span>Medusa + Stackbit</span>
                    <span className="header-nav">
                        <a href="/">Home</a>
                        <a href="/store">Store</a>
                        <a href="/cart">Cart</a>
                    </span>
                </div>
            </header>
            <div className="outer cart-box">
                <div className="inner cart-box">
                    <h2>Your Cart</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Item</th>
                                <th>Unit Price</th>
                                <th>Quantity</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.items.map((item) => (
                                <tr key={item.id}>
                                    <td>{item.title}</td>
                                    <td>${item.unit_price}</td>
                                    <td>{item.quantity}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export const addProductToCart = (variant_id) => {
    const id = localStorage.getItem("cart_id");
    if (id) {
        fetch(`http://localhost:9000/store/carts/${id}/line-items`, {
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
            .then(({ cart }) => console.log(cart));
    }
};


