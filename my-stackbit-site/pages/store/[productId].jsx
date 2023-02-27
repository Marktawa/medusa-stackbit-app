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
    <div>
      <h1>{product.title}</h1>
      <p>{product.description}</p>
      <p>Price: ${product.variants[0].prices[0].amount}</p>
    </div>
  );
};

export default ProductPage;
