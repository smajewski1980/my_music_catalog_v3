import styles from "./TotalItemQty.module.css";

const TotalItemQty = () => {
  return (
    <div className={styles.totalQtyWrapper}>
      <p>
        Home to over <span id=''>XX,XXX</span>&nbsp;items.
      </p>
    </div>
  );
};

export default TotalItemQty;
