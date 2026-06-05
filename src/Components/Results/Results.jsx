import styles from "./Results.module.css";
import { useContext, useEffect, useState } from "react";
import { CatalogContext } from "../../Context/CatalogProvider";

const Results = ({ format, subFormat, searchField, searchValue }) => {
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
  const [cds, setCds] = useState(cdsData.default);
  const [tapes, setTapes] = useState(tapesData.default);
  const [records, setRecords] = useState(recordsData.default);
  const [cdComps, setCdComps] = useState(cdCompsData.default);
  const [cdCompsTracks, setCdCompsTracks] = useState(cdCompsTracksData.default);
  const [cdSingles, setCdSingles] = useState(cdSinglesData.default);
  const [cdSinglesTracks, setCdSinglesTracks] = useState(
    cdSinglesTracksData.default,
  );
  const [filteredSearchResults, setFilteredSearchResults] = useState(null);

  useEffect(() => {
    // console.log(cds);
    // console.log(tapes);
    // console.log(records);
    // console.log(cdComps);
    // console.log(cdCompsTracks);
    // console.log(cdSingles);
    // console.log(cdSinglesTracks);
    console.log(subFormat);
    console.log(format);
    console.log(searchField);

    setFilteredSearchResults(
      cds.filter((cd) =>
        cd[`${searchField}`]
          .toLowerCase()
          .startsWith(searchValue.toLowerCase()),
      ),
    );

    // setLoading(false);
  }, []);

  useEffect(() => {
    console.log(filteredSearchResults);
  }, [filteredSearchResults]);

  // if (loading) {
  //   return <p>Loading...</p>;
  // }

  return (
    <>
      <h3>Temp data render</h3>
      {filteredSearchResults.map((item, idx) => {
        return (
          <p key={idx}>
            {item.artist} - {item.title} - {item.location}
          </p>
        );
      })}
    </>
  );
};

export default Results;
