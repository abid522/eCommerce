import { useSelector, useDispatch } from "react-redux";
import styles from "./AddProduct.module.css";
import Navbar from "./Navbar";
import { addProduct } from "../slices/productSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function AddProduct() {
  const [title, setTitle] = useState("");
  const [imgUrl, setImgUrl] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const productState = useSelector((store) => store.product);
  const n = productState.products.length;

  async function onAddProduct(e) {
    e.preventDefault();

    try {
      //make the API call
      const res = await fetch(
        "https://my-json-server.typicode.com/abid522/ecommerce-products/products",
        {
          method: "POST",
          body: JSON.stringify({
            id: n + 1,
            title,
            imgUrl,
            description,
            price,
          }),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      //PRODUCT ADDED
      const data = await res.json();
      toast.success("Product Added", {
        theme: "dark",
      });
      console.log(data);

      //UPDATE THE REDUX STORE
      dispatch(addProduct(n + 1, title, imgUrl, description, price));
      navigate("/");
    } catch (error) {
      toast.error(error.message, {
        theme: "dark",
      });
    }
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
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="imgurl">Image URL:</label>
            <input
              type="text"
              className="form-control"
              id="imgurl"
              name="imgurl"
              value={imgUrl}
              onChange={(e) => setImgUrl(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <label htmlFor="price">Price:</label>
            <input
              type="number"
              className="form-control"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="mb-3 mt-3">
            <label htmlFor="description">Description:</label>
            <textarea
              className="form-control"
              rows="5"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
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
