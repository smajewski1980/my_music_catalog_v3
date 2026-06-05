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

  useEffect(() => {
    // if (catalog.tapes && catalog.tapes.default) {
    //   setCds(catalog.cds.default);
    // setTapes(catalog.tapes.default);
    // setRecords(catalog.records.default);
    // setCdComps(catalog.cdComps.default);
    // setCdCompsTracks(catalog.cdCompsTracks.default);
    // setCdSingles(catalog.cdSingles.default);
    // setCdSinglesTracks(catalog.cdSinglesTracks.default);
    console.log(cds);
    console.log(tapes);
    console.log(records);
    console.log(cdComps);
    console.log(cdCompsTracks);
    console.log(cdSingles);
    console.log(cdSinglesTracks);
    setLoading(false);
    // }
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return <div>Results</div>;
};

export default Results;
