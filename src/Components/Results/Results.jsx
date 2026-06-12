import styles from "./Results.module.css";
import { useState, useContext } from "react";
import { CatalogContext } from "../../Context/CatalogContext";

const Results = ({
  filteredSearchResults,
  loading,
  format,
  subFormat,
  selectedItem,
  setSelectedItem,
}) => {
  const { cdCompsTracksData, cdSinglesTracksData } = useContext(CatalogContext);

  function handleItemInfo(e) {
    const currId = e.target.dataset.id;
    let currItem = undefined;
    let currTracks = undefined;

    if (subFormat === "main") return;

    if (subFormat === "compilations") {
      currTracks = cdCompsTracksData.filter(
        (comp) => comp.title_id === parseInt(currId),
      );

      currItem = filteredSearchResults.filter(
        (item) => item.title_id === parseInt(currId),
      )[0];

      currItem.tracks = currTracks;
    } else if (subFormat === "singles") {
      currItem = filteredSearchResults.filter(
        (item) => item.single_id === parseInt(currId),
      )[0];

      currTracks = cdSinglesTracksData.filter(
        (sing) => sing.single_id === parseInt(currId),
      );

      currItem.tracks = currTracks;
    } else {
      currItem = filteredSearchResults.filter(
        (item) => item.id === parseInt(currId),
      )[0];
    }

    setSelectedItem(currItem);
    // still have to get and include the tracks for cd singles and comps
  }

  return (
    <>
      {loading && <div>LOADING . . .</div>}

      {filteredSearchResults && (
        <h3>{filteredSearchResults.length ? "Results" : "No Results"}</h3>
      )}

      {selectedItem &&
        Object.entries(selectedItem).map(([key, val], idx) => {
          return key === "tracks" ? (
            <ol>
              {val.map((tr, idx) => {
                return (
                  <li key={idx}>
                    {tr.artist} - {tr.track_name}
                    {/* singles tracks still not working */}
                  </li>
                );
              })}
            </ol>
          ) : (
            <p key={idx}>
              {key} - {val}
            </p>
          );
        })}

      {!selectedItem &&
        filteredSearchResults &&
        filteredSearchResults.map((item, idx) => {
          return (
            <p
              key={idx}
              data-id={item.id || item.single_id || item.title_id}
              onClick={handleItemInfo}
            >
              {item.artist} - {item.title} - {item.location}
            </p>
          );
        })}
    </>
  );
};

export default Results;
