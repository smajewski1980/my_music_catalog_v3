import { useState, useEffect } from "react";
import styles from "./Header.module.css";
import Logo from "../Logo/Logo";
import MainNav from "../MainNav/MainNav";
import RecordsNav from "../RecordsNav/RecordsNav";
import TapesNav from "../TapesNav/TapesNav";
import CdsNav from "../CdsNav/CdsNav";

const Header = ({
  format,
  setFormat,
  subFormat,
  showResults,
  setSubFormat,
  setSearchField,
  setSearchValue,
  setShowResults,
}) => {
  return (
    <header className={styles.header}>
      <Logo
        setFormat={setFormat}
        setSubFormat={setSubFormat}
        setSearchField={setSearchField}
        setSearchValue={setSearchValue}
        setShowResults={setShowResults}
      />
      {!format && <MainNav setFormat={setFormat} />}
      {format === "records" && !subFormat && (
        <RecordsNav setSubFormat={setSubFormat} />
      )}
      {format === "tapes" && !subFormat && (
        <TapesNav setSubFormat={setSubFormat} />
      )}
      {format === "cds" && !subFormat && <CdsNav setSubFormat={setSubFormat} />}
    </header>
  );
};

export default Header;
