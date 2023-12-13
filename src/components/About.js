import styles from "./About.module.css";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

function About() {
  return (
    <div>
      <Navbar />
      <div className={styles.developer}>
        <h4 className="display-4">
          Designed and Developed by <b>Abidul Haque</b>
        </h4>
        <ul className="nav justify-content-center">
          <li className="nav-item">
            <Link
              className={`nav-link ${styles.social}`}
              to="https://www.linkedin.com/in/abidul-haque-83723616b/"
              target="_blank"
            >
              <i className="fa-brands fa-linkedin"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${styles.social}`}
              to="https://www.instagram.com/aabid_006/"
              target="_blank"
            >
              <i className="fa-brands fa-instagram"></i>
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className={`nav-link ${styles.social}`}
              to="https://github.com/abid1997"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default About;
