import styles from "./Root.module.css";
import Header from "./Components/Header/Header";
import { useContext, useState, useEffect } from "react";
import Search from "./Components/Search/Search";
import Results from "./Components/Results/Results";
import { CatalogContext } from "./Context/CatalogContext";

const Root = () => {
  const catalogData = useContext(CatalogContext);

  const [loading, setLoading] = useState(true);
  const [cds, setCds] = useState([]);
  const [tapes, setTapes] = useState([]);
  const [records, setRecords] = useState([]);
  const [cdComps, setCdComps] = useState([]);
  const [cdCompsTracks, setCdCompsTracks] = useState([]);
  const [cdSingles, setCdSingles] = useState([]);
  const [cdSinglesTracks, setCdSinglesTracks] = useState([]);

  const [filteredSearchResults, setFilteredSearchResults] = useState(null);
  const [format, setFormat] = useState(null);
  const [subFormat, setSubFormat] = useState(null);
  const [searchField, setSearchField] = useState("artist");
  const [searchValue, setSearchValue] = useState("");
  const [selectedItem, setSelectedItem] = useState(null);
  const [showResults, setShowResults] = useState(false);

  useEffect(() => {
    if (catalogData.cdsData?.default) {
      setCds(catalogData.cdsData.default);
      setTapes(catalogData.tapesData.default);
      setRecords(catalogData.recordsData.default);
      setCdComps(catalogData.cdCompsData.default);
      setCdCompsTracks(catalogData.cdCompsTracksData.default);
      setCdSingles(catalogData.cdSinglesData.default);
      setCdSinglesTracks(catalogData.cdSinglesTracksData.default);
    }
  }, [catalogData]);

  useEffect(() => {
    if (format === "cds" && subFormat === "main" && cds) {
      setFilteredSearchResults(
        cds.filter((cd) =>
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
