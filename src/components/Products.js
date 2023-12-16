import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slices/productSlice";
import Message from "./Message";
import Spinner from "./Spinner";
import Footer from "./Footer";
import Product from "./Product";

function Products() {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.product);
  const products = product.products;
  const [isSorted, setIsSorted] = useState(false);
  const [shopProducts, setShopProducts] = useState(products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  //This useEffect is for setting the shopProducts when the products have been fetched.
  useEffect(() => {
    setShopProducts(products);
  }, [products]);

  const onSortProducts = () => {
    setIsSorted(true);
    setShopProducts(
      [...shopProducts].sort(
        (a, b) => parseFloat(a.price) - parseFloat(b.price)
      )
    );
  };

  const onUnsortProducts = () => {
    setIsSorted(false);
    setShopProducts(products);
  };

  return (
    <div className="container">
      {product.isLoading && <Spinner />}
      {product.error && <Message message={product.error} />}
      {!product.isLoading && !product.error && (
        <>
          <div className="d-flex justify-content-end">
            <button
              className="btn btn-warning my-1"
              onClick={isSorted ? onUnsortProducts : onSortProducts}
            >
              {isSorted ? "Clear Sort Filter" : "Sort By Price"}
              <span className="mx-1">
                <i className="fa-solid fa-sort"></i>
              </span>
            </button>
          </div>
          <div className="row mb-5">
            {shopProducts.map((product) => (
              <div className="col-sm-4" key={product.id}>
                <Product product={product} />
              </div>
            ))}
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default Products;

// Changes made:

// Moved the sorting logic inside onSortProducts to create a new array using the spread operator and then sorting it. This prevents modifying the state directly.

// Added a second useEffect to update the shopProducts state when the products prop changes.

// Simplified the button text based on the isSorted state.

// Combined the sorting and clearing filter button logic into a single button with a conditional text.

// These changes should enhance the stability and readability of your code.
