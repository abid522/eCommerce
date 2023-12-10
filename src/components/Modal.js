import { useDispatch, useSelector } from "react-redux";
import {
  updateProductDescription,
  updateProductPrice,
} from "../slices/productSlice";

function Modal({ product }) {
  const dispatch = useDispatch();
  const productState = useSelector((store) => store.product);

  function onUpdateDescription(e) {
    e.preventDefault();
    dispatch(updateProductDescription(e.target.value, product.id));
  }

  function onUpdatePrice(e) {
    e.preventDefault();
    dispatch(updateProductPrice(e.target.value, product.id));
  }

  async function onUpdateProduct(e) {
    e.preventDefault();
    const updatedDescription = productState.products.find(
      (p) => p.id === product.id
    ).description;
    const updatedPrice = productState.products.find(
      (p) => p.id === product.id
    ).price;

    //make the API call
    const res = await fetch(
      `https://my-json-server.typicode.com/abid522/ecommerce-products/products/${product.id}`,
      {
        method: "PUT",
        body: JSON.stringify({
          id: product.id,
          title: product.title,
          imageUrl: product.imageUrl,
          description: updatedDescription,
          price: updatedPrice,
        }),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
      }
    );

    //PRODUCT UPDATED
    const data = await res.json();
    console.log(data);
  }

  return (
    <div className="modal fade" id={`n${product.id}`}>
      <div className="modal-dialog modal-dialog-centered modal-lg">
        <div className="modal-content">
          {/* <!-- Modal Header --> */}
          <div className="modal-header">
            <h4 className="modal-title">{product.title}</h4>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
            ></button>
          </div>

          {/* <!-- Modal body --> */}
          <div className="modal-body">
            <form action="#">
              <div className="mb-3 mt-3">
                <label htmlFor="description">Description:</label>
                <textarea
                  className="form-control"
                  rows="5"
                  id="description"
                  name="description"
                  value={product.description}
                  onChange={(e) => onUpdateDescription(e)}
                ></textarea>
              </div>
              <div className="mb-3 mt-3">
                <label htmlFor="price" className="form-label">
                  Price:
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="price"
                  name="price"
                  value={product.price}
                  onChange={(e) => onUpdatePrice(e)}
                />
              </div>
            </form>
          </div>

          {/* <!-- Modal footer --> */}
          <div className="modal-footer">
            <button className="btn btn-success" onClick={onUpdateProduct}>
              Save
            </button>
            <button
              type="button"
              className="btn btn-danger "
              data-bs-dismiss="modal"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
