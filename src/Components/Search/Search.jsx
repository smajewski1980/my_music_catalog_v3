import { useState } from "react";
import styles from "./Search.module.css";

const Search = ({
  format,
  subFormat,
  setSearchField,
  setSearchValue,
  searchField,
  searchValue,
  setShowResults,
  setLoading,
}) => {
  return (
    <>
      <form className={styles.searchForm}>
        <h1>
          {format} {subFormat && " - "} {subFormat}
        </h1>
        <div className={styles.inputWrapper}>
          <label htmlFor='searchField'>SEARCH FIELD</label>
          <select
            name='searchField'
            id='searchField'
            value={searchField}
            onChange={(e) => {
              setSearchField(e.target.value);
            }}
          >
            <option value=''></option>
            {subFormat !== "compilations" && (
              <option value='artist'>ARTIST</option>
            )}

            {format !== "all" && subFormat && (
              <option value='title'>TITLE</option>
            )}
            {format !== "all" &&
              subFormat !== "singles" &&
              subFormat !== "all" && <option value='location'>LOCATION</option>}
          </select>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor='searchValue'>SEARCH TERM</label>
          <input
            type='text'
            name='searchValue'
            id='searchValue'
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
          />
        </div>
        <button
          onClick={(e) => {
            e.preventDefault();

            if (format === "all" && !searchValue) return;
            setLoading(true);
            setShowResults(true);
          }}
        >
          SEARCH
        </button>
      </form>
    </>
  );
};

export default Search;
