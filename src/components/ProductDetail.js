import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import { useDispatch } from "react-redux";
import { addToCart } from "../slices/productSlice";

function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onAddToCart() {
    dispatch(addToCart(product.title, product.price));
    navigate("/cart");
  }

  useEffect(
    function () {
      async function fetchProduct() {
        const res = await fetch(
          `https://my-json-server.typicode.com/abid522/ecommerce-products/products/${id}`
        );
        const data = await res.json();
        setProduct(data);
      }
      fetchProduct();
    },
    [id]
  );

  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center">
        <div className="w-50 my-2">
          <img
            className="img-fluid"
            src={product.imgUrl}
            alt={product.title}
            style={{ width: "100%", height: "30vw", objectFit: "cover" }}
          />
          <h3 className="display-3">{product.title}</h3>
          <p className="lead">{product.description}</p>
          <p className="lead">
            <i className="fa-solid fa-indian-rupee-sign"></i>
            <span className="mx-1">
              <b>{product.price}</b>
            </span>
          </p>
          <div className="d-flex justify-content-center my-2">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={onAddToCart}
            >
              <span className="mx-1">Add To Cart</span>
              <i className="fa-solid fa-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;
