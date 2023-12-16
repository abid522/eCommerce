import { useEffect, useState } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slices/productSlice";
import Message from "./Message";
import Spinner from "./Spinner";
import Footer from "./Footer";

function Products() {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.product);
  const products = product.products;
  const [isSorted, setIsSorted] = useState(false);
  const [shopProducts, setShopProducts] = useState(products);

  useEffect(
    function () {
      dispatch(fetchProducts());
    },
    [dispatch]
  );

  function onSortProducts() {
    setIsSorted(true);
    setShopProducts((sp) =>
      sp.sort((a, b) => parseFloat(a.price) - parseFloat(b.price))
    );
  }

  function onUnsortProducts() {
    setIsSorted(false);
    setShopProducts(products);
  }

  return (
    <div className="container">
      {product.isLoading && <Spinner />}
      {product.error && <Message message={product.error} />}
      {!product.isLoading && !product.error && (
        <>
          {!isSorted ? (
            <>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-warning my-1"
                  onClick={onSortProducts}
                >
                  Sort By Price
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
            </>
          ) : (
            <>
              <div className="d-flex justify-content-end">
                <button
                  className="btn btn-warning my-1"
                  onClick={onUnsortProducts}
                >
                  Clear Sort Filter
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
            </>
          )}

          <Footer />
        </>
      )}
    </div>
  );
}

export default Products;
