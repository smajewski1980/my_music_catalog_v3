import styles from "./Logo.module.css";

const Logo = ({
  setFormat,
  setSubFormat,
  setSearchField,
  setSearchValue,
  setShowResults,
  setFilteredSearchResults,
  setLoading,
  resetHistory,
}) => {
  return (
    <div
      className={styles.logoWrapper}
      onClick={() => {
        setFormat(null);
        setSubFormat(null);
        setSearchField("");
        setSearchValue("");
        setShowResults(false);
        setFilteredSearchResults(null);
        setLoading(false);
        resetHistory();
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
