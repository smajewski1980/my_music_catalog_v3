import styles from "./Logo.module.css";

const Logo = ({ setFormat }) => {
  return (
    <div
      className={styles.logoWrapper}
      onClick={() => setFormat(null)}
    >
      <img
        src='/tmc_logo.png'
        alt='The Majewski Collection'
      />
    </div>
  );
};

export default Logo;
