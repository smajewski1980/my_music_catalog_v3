import styles from "./Logo.module.css";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <div className={styles.logoWrapper}>
      <Link to='/'>
        <img
          src='/tmc_logo.png'
          alt=''
        />
      </Link>
    </div>
  );
};

export default Logo;
