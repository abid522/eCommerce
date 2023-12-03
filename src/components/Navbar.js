import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Site Logo */}
        <a className={`navbar-brand ${styles.gradient}`} href="/">
          eCommerce
        </a>
        {/* Mobile Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMobileToggle"
          aria-controls="navbarMobileToggle"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarMobileToggle">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">
                All Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                Add Product
              </a>
            </li>

            <li className="nav-item">
              <a className="nav-link" href="/">
                Cart
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/">
                About
              </a>
            </li>
          </ul>

          {/* Right Side */}
          <div className="btn-group float-end">
            <a
              href="/"
              className="dropdown-toggle text-decoration-none text-light"
              data-bs-toggle="dropdown"
            >
              <i className="bi bi-person-circle"></i>
              <span>Abidul Haque</span>
            </a>
            <ul className="dropdown-menu dropdown-menu-end">
              <li>
                <a href="/" className="dropdown-item">
                  <i className="bi bi-box-arrow-right"></i> Sign out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
