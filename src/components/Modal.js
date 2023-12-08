function Modal({ product }) {
  return (
    <>
      <button
        type="button"
        class="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#myModal"
      >
        Open modal
      </button>
      <div className="modal fade" id="myModal">
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            {/* <!-- Modal Header --> */}
            <div className="modal-header">
              <h4 className="modal-title">Modal Heading</h4>
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
                  />
                </div>
              </form>
            </div>

            {/* <!-- Modal footer --> */}
            <div className="modal-footer">
              <button className="btn btn-success">Save</button>
              <button
                type="button"
                className="btn btn-danger "
                data-bs-dismiss="modal"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Modal;
