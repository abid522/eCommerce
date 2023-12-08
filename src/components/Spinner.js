import styles from "./Spinner.module.css";

function Spinner() {
  return (
    <div className="d-flex justify-content-center mt-5">
      <div className={styles.loader}></div>
    </div>
  );
}

export default Spinner;
