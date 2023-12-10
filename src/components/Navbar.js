import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Site Logo */}
        <NavLink className={`navbar-brand ${styles.gradient}`} to="/">
          eCommerce
        </NavLink>
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
              <NavLink className="nav-link" to="/add-product">
                Add Product
              </NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/cart">
                Cart
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
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
