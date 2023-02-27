import * as React from 'react';
import { useState, useEffect } from "react";
import Link from 'next/link';

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const response = await fetch('http://localhost:9000/store/products');
      const data = await response.json();
      setProducts(data.products);
    };
    fetchProducts();
  }, []);

  return (
    <div>
      <h1>Our Store</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <Link href={`/store/${product.id}`}>
              <h2>{product.title}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.variants[0].prices[0].amount}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
