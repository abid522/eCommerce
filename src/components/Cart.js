import { useSelector } from "react-redux";
import Navbar from "./Navbar";

function Cart() {
  const cart = useSelector((store) => store.product.cart);
  const totalPrice = cart.reduce((p, c) => {
    return p + c.price;
  }, 0);

  return (
    <div>
      <Navbar />
      <h3 className="display-3 text-center">Your Items:</h3>
      {cart.length !== 0 ? (
        <>
          <div className="d-flex justify-content-center">
            <ul className="list-group w-50">
              {cart.map((cartItem) => {
                return (
                  <li className="list-group-item" key={cartItem.title}>
                    {cartItem.title}{" "}
                    <span>
                      <b>
                        (<i className="fa-solid fa-indian-rupee-sign"></i>
                        {cartItem.price})
                      </b>
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
          <div className="d-flex justify-content-center">
            <div className="text-center my-3 alert alert-info w-50">
              <h6>
                Total Price: <i className="fa-solid fa-indian-rupee-sign"></i>
                {totalPrice}
              </h6>
            </div>
          </div>
        </>
      ) : (
        <div className="lead text-center my-5">
          No items in your cart, Please add some.
        </div>
      )}
    </div>
  );
}

export default Cart;
