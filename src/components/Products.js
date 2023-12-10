import { useEffect } from "react";
import Product from "./Product";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../slices/productSlice";
import Message from "./Message";
import Spinner from "./Spinner";

function Products() {
  const dispatch = useDispatch();
  const product = useSelector((store) => store.product);

  useEffect(
    function () {
      dispatch(fetchProducts());
    },
    [dispatch]
  );

  return (
    <div className="container">
      {product.isLoading && <Spinner />}
      {product.error && <Message message={product.error} />}
      {!product.isLoading && !product.error && (
        <>
          <div className="row">
            {product.products.map((product) => (
              <div className="col-sm-4" key={product.id}>
                <Product product={product} />
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Products;
