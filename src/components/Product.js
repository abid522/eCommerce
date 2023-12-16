import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { addToCart, deleteProduct } from "../slices/productSlice";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

function Product({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  function onAddToCart() {
    dispatch(addToCart(product.title, product.price));
    navigate("/cart");
  }

  function onSeeDetails() {
    navigate(`/product-detail/${product.id}`);
  }

  async function onDelete() {
    const res = await fetch(
      `https://my-json-server.typicode.com/abid522/ecommerce-products/products/${product.id}`,
      { method: "DELETE" }
    );
    //PRODUCT DELETED
    const data = await res.json();
    toast.success("Product deleted", {
      theme: "dark",
    });
    console.log(data);
    dispatch(deleteProduct(product.id));
  }

  return (
    <>
      <div className="card mt-4 mx-2" style={{ width: "400px" }}>
        <img
          className="card-img-top"
          src={product.imgUrl}
          alt={product.title}
          style={{ width: "100%", height: "15vw", objectFit: "cover" }}
        />
        <div className="card-body">
          <h4 className="card-title">{product.title}</h4>
          <p className="card-text">{product.description}</p>

          <div className="d-flex justify-content-between">
            <div>
              <b>
                <p>
                  <span className="px-1">
                    <i className="fa-solid fa-indian-rupee-sign"></i>
                  </span>
                  {product.price}
                </p>
              </b>
            </div>
            <div className="d-flex">
              <button
                className="btn btn-primary btn-sm mx-1"
                data-bs-toggle="modal"
                data-bs-target={`#n${product.id}`}
              >
                <i className="fa-solid fa-pencil"></i>
              </button>
              <Modal product={product} />
              <button className="btn btn-danger btn-sm" onClick={onDelete}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
          <button
            className="btn btn-success btn-sm w-100 mt-2"
            onClick={onAddToCart}
          >
            Add To Cart{" "}
            <span>
              <i className="fa-solid fa-cart-plus"></i>
            </span>
          </button>
          <button
            className="btn btn-secondary btn-sm w-100 mt-2"
            onClick={onSeeDetails}
          >
            See Details{" "}
          </button>
        </div>
      </div>
    </>
  );
}

export default Product;
