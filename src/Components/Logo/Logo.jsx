import styles from "./Logo.module.css";

const Logo = ({ setFormat, setSubFormat }) => {
  return (
    <div
      className={styles.logoWrapper}
      onClick={() => {
        setFormat(null);
        setSubFormat(null);
      }}
    >
      <img
        src='/tmc_logo.png'
        alt='The Majewski Collection'
      />
    </div>
  );
};

export default Logo;
