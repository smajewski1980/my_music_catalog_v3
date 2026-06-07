import styles from "./Logo.module.css";

const Logo = ({
  setFormat,
  setSubFormat,
  setSearchField,
  setSearchValue,
  setShowResults,
  setFilteredSearchResults,
}) => {
  return (
    <div
      className={styles.logoWrapper}
      onClick={() => {
        setFormat(null);
        setSubFormat(null);
        setSearchField("artist");
        setSearchValue("");
        setShowResults(false);
        setFilteredSearchResults(null);
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
