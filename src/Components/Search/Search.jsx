import { useState } from "react";
import styles from "./Search.module.css";

const Search = ({ format, subFormat }) => {
  const [searchField, setSearchField] = useState("");
  const [filterField, setFilterField] = useState("artist");

  return (
    <>
      <form className={styles.searchForm}>
        <h1>
          {format} {subFormat && " - "} {subFormat}
        </h1>
        <div className={styles.inputWrapper}>
          <label htmlFor='filterField'>SEARCH FIELD</label>
          <select
            name='filterField'
            id='filterField'
            value={filterField}
            onChange={(e) => {
              setFilterField(e.target.value);
            }}
          >
            <option value='artist'>ARTIST</option>
            <option value='title'>TITLE</option>
            <option value='location'>LOCATION</option>
          </select>
        </div>
        <div className={styles.inputWrapper}>
          <label htmlFor='searchField'>SEARCH TERM</label>
          <input
            type='text'
            name='searchField'
            id='searchField'
            value={searchField}
            onChange={(e) => {
              setSearchField(e.target.value);
            }}
          />
        </div>
        <button>SEARCH</button>
      </form>
    </>
  );
};

export default Search;
