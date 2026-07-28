import styles from "./Results.module.css";
import { useState, useContext, useEffect, Fragment } from "react";
import { CatalogContext } from "../../Context/CatalogContext";
import { useOnInView } from "react-intersection-observer";

const Results = ({
  filteredSearchResults,
  loading,
  format,
  subFormat,
  selectedItem,
  setSelectedItem,
}) => {
  const { cdCompsTracksData, cdSinglesTracksData } = useContext(CatalogContext);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const RESULT_OFFSET = 200;
  const [displayedResults, setDisplayedResults] = useState([]);

  useEffect(() => {
    if (filteredSearchResults) {
      setDisplayedResults(filteredSearchResults.slice(0, RESULT_OFFSET));
    }
  }, [filteredSearchResults]);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (window.scrollY > 750) {
        setShowBackToTop(true);
      } else {
        setShowBackToTop(false);
      }
    };

    window.addEventListener("scroll", checkScrollHeight);
    return () => window.removeEventListener("scroll", checkScrollHeight);
  }, []);

  const inViewRef = useOnInView(
    (inView) => {
      if (inView) {
        setDisplayedResults((prev) => {
          const nextStartIndex = prev.length;
          const nextEndIndex = nextStartIndex + RESULT_OFFSET;
          const nextChunk = filteredSearchResults.slice(
            nextStartIndex,
            nextEndIndex,
          );
          return [...prev, ...nextChunk];
        });
      }
    },
    { rootMargin: "500px" },
  );

  function handleItemInfo(e) {
    const currId = e.currentTarget.dataset.id;
    let currItem = undefined;
    let currTracks = undefined;

    if (subFormat === "main") return;

    if (subFormat === "compilations") {
      const baseItem = filteredSearchResults.find(
        (item) => item.title_id === parseInt(currId),
      );

      currTracks = cdCompsTracksData.filter(
        (comp) => comp.title_id === parseInt(currId),
      );

      currItem = { ...baseItem, tracks: currTracks };
    } else if (subFormat === "singles") {
      const baseItem = filteredSearchResults.find(
        (item) => item.single_id === parseInt(currId),
      );

      currTracks = cdSinglesTracksData.filter(
        (sing) => sing.single_id === parseInt(currId),
      );

      currItem = { ...baseItem, tracks: currTracks };
    } else {
      currItem = filteredSearchResults.find(
        (item) => item.id === parseInt(currId),
      );
    }

    setSelectedItem(currItem);
  }

  return (
    <div className={styles.resultsWrapper}>
      {loading && <div>LOADING . . .</div>}

      {filteredSearchResults && !selectedItem && (
        <h3 className={styles.resCount}>
          {filteredSearchResults.length
            ? `${filteredSearchResults.length.toLocaleString()} Results`
            : "No Results"}
        </h3>
      )}

      {selectedItem && (
        <div className={styles.moreInfoWrapper}>
          {Object.entries(selectedItem).map(([key, val]) => {
            return key === "tracks" ? (
              <ol key={"tracks"}>
                {val.map((tr) => {
                  return (
                    <li key={tr.track_id}>
                      {tr.artist} - {tr.track_name}
                    </li>
                  );
                })}
              </ol>
            ) : (
              <p key={key}>
                {key} -{" "}
                <span>
                  {val ? (val === "na" || val === 1234 ? "n/a" : val) : "n/a"}
                </span>
              </p>
            );
          })}
        </div>
      )}

      {!selectedItem &&
        displayedResults &&
        displayedResults.map((item, idx) => {
          const itemId = item.id || item.single_id || item.title_id;
          const isLastItem = idx === displayedResults.length - 1;
          const uniqueKey = `${subFormat}-${itemId}-${idx}`;
          return (
            <Fragment key={uniqueKey}>
              <div
                data-id={itemId}
                onClick={handleItemInfo}
                ref={isLastItem ? inViewRef : null}
                className={styles.resultItem}
              >
                {item.artist && (
                  <p className={styles.resArtist}>{item.artist}</p>
                )}
                <p
                  className={styles.resTitle}
                >{`${item.case_type ? "single: " : ""}${item.title}`}</p>
                {item.location && (
                  <p
                    className={styles.resLocation}
                  >{`Location: ${item.location}`}</p>
                )}
              </div>
              <span></span>
            </Fragment>
          );
        })}

      <a
        href='#'
        className={`${styles.backToTop} ${showBackToTop && styles.showBackToTop}`}
        title='Back To Top'
        tabIndex='0'
      >
        <span className={styles.btnOuterSpan}>
          <span className={styles.btnInnerSpan}>&#x261D;</span>
        </span>
      </a>
    </div>
  );
};

export default Results;
