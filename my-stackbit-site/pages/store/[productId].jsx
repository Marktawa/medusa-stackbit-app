import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const ProductPage = () => {
  const router = useRouter();
  const { productId } = router.query;
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      const response = await fetch(`http://localhost:9000/store/products/${productId}`);
      const data = await response.json();
      setProduct(data.product);
    };
    fetchProduct();
  }, [productId]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className="outer product-box">
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
      <div className="inner product-box">
        <h1>{product.title}</h1>
        <img src={`${product.thumbnail}`} width="320"></img>
        <p className="description">{product.description}</p>
        <p className="price">${product.variants[0].prices[0].amount}</p>
      </div>
    </div>
  );
};

export default ProductPage;
