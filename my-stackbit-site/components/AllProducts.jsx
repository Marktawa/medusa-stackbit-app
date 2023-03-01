import { useState, useEffect } from "react";
import Link from 'next/link';

export const AllProducts = (props) => {
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
    <div data-sb-field-path={props['data-sb-field-path']}>
      <div className="outer heading-box">
        <div className="inner heading-box">
          <h1 className="store-heading" data-sb-field-path=".heading">{props.heading}</h1>
        </div>
      </div>
      <div className="outer store-box">
        <div className="inner store-box">
          <ul className="store-list">
            {products.map((product) => (
              <li key={product.id}>
                <Link href={`/store/${product.id}`}>
                  <h2>{product.title}</h2>
                  <img src={`${product.thumbnail}`} width="250"></img>
                  <p>${product.variants[0].prices[0].amount}</p>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
