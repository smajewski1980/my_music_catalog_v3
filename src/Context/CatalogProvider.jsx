import { CatalogContext } from "./CatalogContext";
import recordsData from "../data/RECORDS.json";
import tapesData from "../data/TAPES.json";
import cdsData from "../data/CDS.json";
import cdCompsData from "../data/CD_COMPS.json";
import cdCompsTracksData from "../data/CD_COMPS_TRACKS.json";
import cdSinglesData from "../data/CD_SINGLES.json";
import cdSinglesTracksData from "../data/CD_SINGLES_TRACKS.json";

function CatalogProvider({ children }) {
  const catalog = {
    recordsData,
    tapesData,
    cdsData,
    cdCompsData,
    cdCompsTracksData,
    cdSinglesData,
    cdSinglesTracksData,
  };

  return (
    <CatalogContext.Provider value={catalog}>
      {children}
    </CatalogContext.Provider>
  );
}

export default CatalogProvider;
