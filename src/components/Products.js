import { useEffect, useState } from "react";
import Product from "./Product";

function Products() {
  const [products, setProducts] = useState([]);

  useEffect(function () {
    async function fetchProducts() {
      try {
        const res = await fetch(
          `https://my-json-server.typicode.com/abid522/ecommerce-products/products`
        );
        const data = await res.json();
        setProducts(data);
      } catch (error) {
        console.error("Error loading products");
      }
    }

    fetchProducts();
  }, []);

  return (
    <div className="container">
      <div className="row">
        {products.map((product) => (
          <div className="col-md-4" key={product.id}>
            <Product product={product} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
