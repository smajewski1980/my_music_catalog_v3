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
  const [resultPage, setResultPage] = useState(1);
  const RESULT_OFFSET = 200;
  const [resultStart, setResultStart] = useState(0);
  const [resultEnd, setResultEnd] = useState(RESULT_OFFSET + 1);

  const inViewRef = useOnInView(
    (inView, entry) => {
      if (inView) {
        // Do something with the element that came into view
        console.log("Element is in view", entry.target);
      } else {
        console.log("Element left view", entry.target);
      }
    },
    { rootMargin: "225px" },
  );

  function handleItemInfo(e) {
    const currId = e.target.dataset.id;
    let currItem = undefined;
    let currTracks = undefined;

    if (subFormat === "main") return;

    if (subFormat === "compilations") {
      currTracks = cdCompsTracksData.filter(
        (comp) => comp.title_id === parseInt(currId),
      );

      const baseItem = filteredSearchResults.filter(
        (item) => item.title_id === parseInt(currId),
      )[0];

      currItem = { ...baseItem, tracks: currTracks };
    } else if (subFormat === "singles") {
      const baseItem = filteredSearchResults.filter(
        (item) => item.single_id === parseInt(currId),
      )[0];

      currTracks = cdSinglesTracksData.filter(
        (sing) => sing.single_id === parseInt(currId),
      );

      currItem = { ...baseItem, tracks: currTracks };
    } else {
      currItem = filteredSearchResults.filter(
        (item) => item.id === parseInt(currId),
      )[0];
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
        filteredSearchResults &&
        filteredSearchResults.slice(resultStart, resultEnd).map((item, idx) => {
          return (
            <p
              key={idx}
              data-id={item.id || item.single_id || item.title_id}
              onClick={handleItemInfo}
              ref={idx % RESULT_OFFSET ? null : inViewRef}
            >
              {item.artist} - {item.title} - {item.location}
            </p>
          );
        })}
    </>
  );
};

export default Results;
