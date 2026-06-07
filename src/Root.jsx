import styles from "./Root.module.css";
import Header from "./Components/Header/Header";
import { useContext, useState, useEffect } from "react";
import Search from "./Components/Search/Search";
import Results from "./Components/Results/Results";
import { CatalogContext } from "./Context/CatalogContext";

const Root = () => {
  const {
    recordsData,
    tapesData,
    cdsData,
    cdCompsData,
    cdCompsTracksData,
    cdSinglesData,
    cdSinglesTracksData,
  } = useContext(CatalogContext);

  const [loading, setLoading] = useState(true);
  const [filteredSearchResults, setFilteredSearchResults] = useState(null);
  const [format, setFormat] = useState(null);
  const [subFormat, setSubFormat] = useState(null);
  const [searchField, setSearchField] = useState("artist");
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showResults, setShowResults] = useState(false);

  function filterResults(data, field, value) {
    const results = data.filter((item) => {
      return item[`${field}`].toLowerCase().startsWith(value.toLowerCase());
    });
    setLoading(false);
    return results;
  }
  // maybe this refactor wont work, we forgot to account for the subFormat
  useEffect(() => {
    if (format === "cds" && subFormat === "main" && cdsData) {
      setFilteredSearchResults(
        filterResults(cdsData, searchField, searchValue),
      );
    }
    if (format === "tapes" && subFormat === "all" && tapesData) {
      setFilteredSearchResults(
        filterResults(tapesData, searchField, searchValue),
      );
    }
    if (format === "tapes" && subFormat === "8-track" && tapesData) {
      setFilteredSearchResults(
        filterResults(
          tapesData.filter((tape) =>
            tape.location.toLowerCase().startsWith(subFormat),
          ),
          searchField,
          searchValue,
        ),
      );
    }
    if (format === "tapes" && subFormat === "cassette" && tapesData) {
      setFilteredSearchResults(
        filterResults(
          tapesData.filter((tape) =>
            tape.location.toLowerCase().startsWith(subFormat),
          ),
          searchField,
          searchValue,
        ),
      );
    }
    if (format === "tapes" && subFormat === "reel to reel" && tapesData) {
      setFilteredSearchResults(
        filterResults(
          tapesData.filter((tape) =>
            tape.location.toLowerCase().startsWith(subFormat),
          ),
          searchField,
          searchValue,
        ),
      );
    }
  }, [showResults]);

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
        setFilteredSearchResults={setFilteredSearchResults}
        setLoading={setLoading}
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
            filteredSearchResults={filteredSearchResults}
            loading={loading}
          />
        )}
      </main>
    </>
  );
};

export default Root;
