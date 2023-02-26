import * as React from 'react';

export const AllProducts = (props) => {
  return (
    <div>
      <h1>{props.heading}</h1>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <p>Price: {product.price}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
