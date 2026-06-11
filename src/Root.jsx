import styles from "./Root.module.css";
import Header from "./Components/Header/Header";
import { useContext, useState, useEffect, useRef } from "react";
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
  const [searchField, setSearchField] = useState("");
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showResults, setShowResults] = useState(false);
  const [historyStack, setHistoryStack] = useState([]);
  const isReloading = useRef(false);

  useEffect(() => {
    if (isReloading.current) return;

    if (format) {
      const snapshot = {
        format,
        subFormat,
        searchField,
        searchValue,
        showResults,
        selectedItem,
        filteredSearchResults,
      };
      setHistoryStack((prev) => [...prev, snapshot]);
    }
    return;
  }, [format, subFormat, searchField, selectedItem]);

  function resetHistory() {
    setHistoryStack([]);
    setFilteredSearchResults(null);
    setFormat(null);
  }

  function reloadHistory() {
    if (historyStack.length <= 1) return resetHistory();

    isReloading.current = true;

    setHistoryStack((prevStack) => {
      const newStack = prevStack.slice(0, -1);
      const reloadVals = newStack[newStack.length - 1];

      setSubFormat(reloadVals.subFormat);
      setSearchField(reloadVals.searchField);
      setSearchValue(reloadVals.searchValue);
      setShowResults(reloadVals.showResults);
      setSelectedItem(reloadVals.selectedItem);
      setFilteredSearchResults(reloadVals.filteredSearchResults);

      return newStack;
    });

    // Turn off the flag inside a timeout macro-task.
    // This forces React to complete the re-render cycle *before* resetting the flag.
    setTimeout(() => {
      isReloading.current = false;
    }, 0);
  }

  function filterResults(data, field, value) {
    const results = data.filter((item) => {
      return item[`${field}`].toLowerCase().startsWith(value.toLowerCase());
    });
    setLoading(false);
    return results;
  }

  useEffect(() => {
    if (format === "all" && searchValue && showResults) {
      setFilteredSearchResults(
        filterResults(
          [...cdsData, ...tapesData, ...recordsData, ...cdSinglesData],
          searchField,
          searchValue,
        ),
      );
    }
    if (format === "cds" && subFormat === "all" && showResults) {
      setFilteredSearchResults(
        filterResults([...cdsData, ...cdSinglesData], searchField, searchValue),
      );
    }
    if (format === "cds" && subFormat === "main" && showResults) {
      setFilteredSearchResults(
        filterResults(cdsData, searchField, searchValue),
      );
    }
    if (format === "cds" && subFormat === "compilations" && showResults) {
      setFilteredSearchResults(
        filterResults(cdCompsData, searchField, searchValue),
      );
    }
    if (format === "cds" && subFormat === "singles" && showResults) {
      setFilteredSearchResults(
        filterResults(cdSinglesData, searchField, searchValue),
      );
    }
    if (format === "tapes" && subFormat === "all" && showResults) {
      setFilteredSearchResults(
        filterResults(tapesData, searchField, searchValue),
      );
    }
    if (format === "tapes" && subFormat === "8-track" && showResults) {
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
    if (format === "tapes" && subFormat === "cassette" && showResults) {
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
    if (format === "tapes" && subFormat === "reel to reel" && showResults) {
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
    if (format === "records" && subFormat === "all" && showResults) {
      setFilteredSearchResults(
        filterResults(recordsData, searchField, searchValue),
      );
    }
    if (format === "records" && subFormat === "33s" && showResults) {
      setFilteredSearchResults(
        filterResults(
          recordsData.filter((rec) => rec.location.startsWith(subFormat)),
          searchField,
          searchValue,
        ),
      );
    }
    if (format === "records" && subFormat === "45s" && showResults) {
      setFilteredSearchResults(
        filterResults(
          recordsData.filter((rec) => rec.location.startsWith(subFormat)),
          searchField,
          searchValue,
        ),
      );
    }
    if (format === "records" && subFormat === "78s" && showResults) {
      setFilteredSearchResults(
        filterResults(
          recordsData.filter((rec) => rec.location.startsWith(subFormat)),
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
        resetHistory={resetHistory}
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

        {format && (
          <>
            <button
              onClick={reloadHistory}
              className={styles.btnBack}
            >
              BACK
            </button>
          </>
        )}
      </main>
    </>
  );
};

export default Root;
