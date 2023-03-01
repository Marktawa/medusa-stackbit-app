# medusa-stackbit-app
Build an ecommerce site using Next.js, Medusa, and Stackbit

# Branch's purpose

Add this code snippet to AllProducts.jsx
```js
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

  props.products.splice(0, props.products.length, ...products.map((item) => {
    return {
      name: item.title,
      id: item.id,
      description: item.description,
      price: item.variants[0].prices[0].amount
    };
   }));

  return (
    <div>
      <h1>{props.heading}</h1>
      <ul>
        {props.products.map((product) => (
          <li key={product.id}>
            <Link href={`/store/${product.id}`}>
              <h2>{product.name}</h2>
              <p>{product.description}</p>
              <p>Price: ${product.price}</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};
```