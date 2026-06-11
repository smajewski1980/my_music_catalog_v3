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

    if (subFormat === "main") return;

    if (subFormat === "compilations") {
      currItem = filteredSearchResults.filter(
        (item) => item.title_id === parseInt(currId),
      )[0];
    } else if (subFormat === "singles") {
      currItem = filteredSearchResults.filter(
        (item) => item.single_id === parseInt(currId),
      )[0];
    } else {
      currItem = filteredSearchResults.filter(
        (item) => item.id === parseInt(currId),
      )[0];
    }

    setSelectedItem(currItem);

    console.log(currId);

    // still have to get and include the tracks for cd singles and comps
  }

  return (
    <>
      {loading ? <div>LOADING . . .</div> : <h3>Results</h3>}

      {selectedItem &&
        Object.keys(selectedItem).map((key) => {
          return (
            <p key={key}>
              {key} - {selectedItem[`${key}`]}
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
