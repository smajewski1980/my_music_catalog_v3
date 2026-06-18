import styles from "./Results.module.css";
import { useState, useContext, useEffect } from "react";
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
  const RESULT_OFFSET = 200;
  const [displayedResults, setDisplayedResults] = useState([]);

  useEffect(() => {
    if (filteredSearchResults) {
      setDisplayedResults(filteredSearchResults.slice(0, RESULT_OFFSET));
    }
  }, [filteredSearchResults]);

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
    const currId = e.target.dataset.id;
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
    <>
      {loading && <div>LOADING . . .</div>}

      {filteredSearchResults && !selectedItem && (
        <h3>
          {filteredSearchResults.length
            ? `${filteredSearchResults.length.toLocaleString()} Results`
            : "No Results"}
        </h3>
      )}

      {selectedItem &&
        Object.entries(selectedItem).map(([key, val]) => {
          return key === "tracks" ? (
            // even though there is only one ol, it throws the unique key error if there is not a key on the ol
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
              {val ? (val === "na" || val === 1234 ? "n/a" : val) : "n/a"}
            </p>
          );
        })}

      {!selectedItem &&
        displayedResults &&
        displayedResults.map((item, idx) => {
          const itemId = item.id || item.single_id || item.title_id;
          const isLastItem = idx === displayedResults.length - 1;
          const uniqueKey = `${subFormat}-${itemId}-${idx}`;
          return (
            <p
              key={uniqueKey}
              data-id={itemId}
              onClick={handleItemInfo}
              ref={isLastItem ? inViewRef : null}
            >
              {item.artist} - {item.title} - {item.location}
            </p>
          );
        })}
    </>
  );
};

export default Results;
