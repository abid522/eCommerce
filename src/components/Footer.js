import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer className={`${styles.footer} text-center`}>
      <p className={styles.copyright}>
        &copy; Copyright {new Date().getFullYear()} eCommerce | Abidul Haque.
      </p>
    </footer>
  );
}

export default Footer;
