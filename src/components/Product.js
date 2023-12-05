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
        <b>
          <p>
            <span className="px-1">
              <i className="fa-solid fa-indian-rupee-sign"></i>
            </span>
            {product.price}
          </p>
        </b>
      </div>
    </div>
  );
}

export default Product;
