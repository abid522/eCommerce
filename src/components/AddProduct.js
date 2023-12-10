import { useSelector, useDispatch } from "react-redux";
import styles from "./AddProduct.module.css";
import Navbar from "./Navbar";

function AddProduct() {
  const dispatch = useDispatch();
  const productState = useSelector((store) => store.product);

  async function onAddProduct(e) {
    //UPDATE THE REDUX STORE
    e.preventDefault();
  }

  return (
    <>
      <Navbar />
      <div className={`mt-5 mb-2 ${styles.container}`}>
        <h2 className="display-3 text-center">Add Product to the database</h2>
        <form className="m-3">
          <div className="mb-3 mt-3">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="imgurl">Image URL:</label>
            <input
              type="text"
              className="form-control"
              id="imgurl"
              name="imgurl"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="description">Description:</label>
            <textarea
              className="form-control"
              rows="5"
              id="description"
              name="description"
            ></textarea>
          </div>

          <div className="d-flex justify-content-center">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={onAddProduct}
            >
              <i className="fa-sharp fa-solid fa-circle-plus"></i>
              <span className="mx-1">Add Product</span>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default AddProduct;
