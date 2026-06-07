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

  useEffect(() => {
    if (format === "cds" && subFormat === "main" && cdsData) {
      setFilteredSearchResults(
        cdsData.filter((cd) =>
          cd[`${searchField}`]
            .toLowerCase()
            .startsWith(searchValue.toLowerCase()),
        ),
      );
      setLoading(false);
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
