import { useDispatch } from "react-redux";
import Modal from "./Modal";
import { deleteProduct } from "../slices/productSlice";

function Product({ product }) {
  const dispatch = useDispatch();

  async function onDelete() {
    const res = await fetch(
      `https://my-json-server.typicode.com/abid522/ecommerce-products/products/${product.id}`,
      { method: "DELETE" }
    );
    //PRODUCT DELETED
    const data = await res.json();
    console.log(data);
    dispatch(deleteProduct(product.id));
  }

  return (
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
      </div>
    </div>
  );
}

export default Product;
