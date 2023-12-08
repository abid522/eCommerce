function Product({ product }) {
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
          <div>
            <button className="btn btn-primary btn-sm mx-1">
              <i className="fa-solid fa-pencil"></i>
            </button>
            <button className="btn btn-danger btn-sm">
              <i className="fa-solid fa-trash"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
