// AllProducts.jzx
import * as React from 'react';
import { useState, useEffect } from "react";

export const AllProducts = (props) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch("http://localhost:9000/store/products");
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>{props.heading}</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: ${product.variants[0].prices[0].amount}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
