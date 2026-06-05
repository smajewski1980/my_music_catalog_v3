import styles from "./Root.module.css";
import Header from "./Components/Header/Header";
import { useState, useEffect } from "react";
import Search from "./Components/Search/Search";
import Results from "./Components/Results/Results";

const Root = () => {
  const [format, setFormat] = useState(null);
  const [subFormat, setSubFormat] = useState(null);
  const [searchField, setSearchField] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showResults, setShowResults] = useState(false);

  // useEffect(() => {
  //   console.log(format);
  //   console.log(subFormat);
  //   console.log(searchField);
  //   console.log(searchValue);
  // }, [showResults]);

  return (
    <>
      <Header
        format={format}
        setFormat={setFormat}
        subFormat={subFormat}
        setSubFormat={setSubFormat}
        setSearchField={setSearchField}
        setSearchValue={setSearchValue}
        setShowResults={setShowResults}
      />
      <main className={styles.mainContent}>
        {(format === "all" || (format && subFormat)) && !showResults && (
          <Search
            format={format}
            subFormat={subFormat}
            setSearchField={setSearchField}
            setSearchValue={setSearchValue}
            searchField={searchField}
            searchValue={searchValue}
            setShowResults={setShowResults}
          />
        )}
        {showResults && (
          <Results
            format={format}
            subFormat={subFormat}
            searchField={searchField}
            searchValue={searchValue}
          />
        )}
      </main>
    </>
  );
};

export default Root;
