import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import MainNav from "../MainNav/MainNav";

const Header = ({ format, setFormat }) => {
  return (
    <header className={styles.header}>
      <Logo setFormat={setFormat} />
      {!format && <MainNav setFormat={setFormat} />}
    </header>
  );
};

export default Header;
